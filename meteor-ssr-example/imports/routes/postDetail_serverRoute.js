import ReactDOM from 'react-dom/server';
import React from 'react';
import PostDetail from '/imports/ui/components/postDetail';
import getPostDetail from '/imports/api/posts/getPostDetail';

FlowRouter.route( '/post/:postID', {
    name: 'Post',
} );

export default url => ReactDOM.renderToString(
    <PostDetail
        { ...getPostDetail( url.split( '/' )[ 2 ] ) }
    />
);