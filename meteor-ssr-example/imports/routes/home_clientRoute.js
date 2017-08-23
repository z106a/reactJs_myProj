import React from 'react';
import { mount } from 'react-mounter';
import HomeView from '/imports/ui/components/homeView';
import Loader from '/imports/ui/components/loader';

FlowRouter.route(
    '/', {
        name: 'Home',
        action() {
            mount( Loader );
            return Meteor.call(
                'getPostsList',
                (err, postsList) => mount(
                    HomeView, {
                        postsList
                    }
                )
            )
        }
    }
);