import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HOME, EDIT_BIN, VIEW_BIN} from './routes_path';

import App from './components/app';
import { Bins } from '../imports/collections/bins';
import BinsList from './components/bins/bins_list';
import BinsMain from './components/bins/bins_main';
import BinsViewer from "./components/bins/bins_viewer";

const routes = (
    <Router>
        <App>
            <Switch>
                <Route exact path={HOME} component={BinsList} />
                <Route exact path={`/edit/:binId`} component={BinsMain } edit="true" />
                <Route exact path={`/view/:binId`} component={BinsMain} edit="false" />
            </Switch>
        </App>
    </Router>
);

Meteor.startup(() => {
    ReactDom.render(routes, document.querySelector('.render-target'));
});