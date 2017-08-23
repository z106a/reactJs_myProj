import ReactDOM from 'react-dom/server';
import React from 'react';
import HomeView from '/imports/ui/components/homeView';
import getPostsList from '/imports/api/posts/getPostsList';

FlowRouter.route('/', {
    name: 'Home'
} );

export default () => ReactDOM.renderToString(
    <HomeView
        postsList = { getPostsList() }
    />
);