import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import { Router, Route } from 'react-router';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import RequireAuth from './components/auth/require_auth';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import Home from './components/home';

import reducers from './reducers';
import { AUTH_SUCCESS } from './actions/types';

let middleware = [reduxThunk];
let store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

const token = localStorage.getItem('token');
if(token) {
    store.dispatch({ type: AUTH_SUCCESS });
}
// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signout" component={Signout} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/feature" component={RequireAuth(Feature)} />
                </Switch>
            </App>
        </Router>
    </Provider>
        , document.querySelector('.container'));
registerServiceWorker();
