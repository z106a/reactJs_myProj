import React from 'react';
import { mount } from 'react-mounter';
import Loader from '/imports/components/loader.js';

FlowRouter.route(
    '/post/:postID', {
        name: 'Post',
        action( param ) {

            mount( Loader );

            import('/imports/ui/components/postDetail').then(
                PostDetail => Meteor.call('getPostData', param.postID,
                    ( err, postData ) => mount( PostDetail, {...postData} )
                )
            );

        }
    }
);