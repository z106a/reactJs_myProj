import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes, { loadData }  from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/serverCreateStore';

const app = express();
const port = 3000; // this must be 3000, otherwise google auth callback won't work.

app.use(
    '/api', 
    proxy('http://react-ssr-api.herokuapp.com/', {
        proxyReqOptDecorator(opts) {
            opts.headers['x-forwarded-host'] = 'localhost:'+port;
            return opts;
        }
    })
);
app.use(express.static('public'));

app.get('*', (req, res) => {
    
    const store = createStore(req); // to get cookies from request.
    
    const promises =  matchRoutes(Routes, req.path).map(({route}) => {
       return route.loadData ? route.loadData(store) : null;
    }).map( promise => {
        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            });
        }
    })

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);
        
        if (context.url) {
            return res.redirect(301, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }
        res.send(content);
    }
    ).catch();    
});

app.listen(port, () => {
    console.log('Listening on port: ', port);
});
