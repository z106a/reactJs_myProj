import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UserCreate from "./components/UserCreate";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://localhost:3300/graphql'
    }),
    dataIdFromObject: o => o.id
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <div className="container">
                <Switch>
                <Route exact={true} path="/" component={ App }/>
                <Route exact path="/users" component={ UserList }/>
                <Route exact path="/user/new" component={ UserCreate }/>
                <Route path="/users/:id" component={ UserDetail }/>
                </Switch>
            </div>
        </BrowserRouter>
    </ApolloProvider>
    , document.getElementById('root'));
registerServiceWorker();
