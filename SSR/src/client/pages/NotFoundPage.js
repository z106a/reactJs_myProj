import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true; // to set 404 status in index.js
    return <h1>Ooops, route not found.</h1>
}

export default {
    component: NotFoundPage
}