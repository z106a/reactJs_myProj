import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/app';
import { Bins } from '../imports/collections/bins';
import BinsList from './components/bins/bins_list';
import BinsMain from './components/bins/bins_main';

const routes = (
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={BinsList} />
                <Route exact path="/bins/:binId" component={BinsMain} />
            </Switch>
        </App>
    </Router>
);

Meteor.startup(() => {
    ReactDom.render(routes, document.querySelector('.render-target'));
});