import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';
import TableEditor from './bins_editor_tables';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';

const BinsMain = ({match, bin}) => {
    const edit = match.path === "/edit/:binId";
    if (!bin) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {edit && <BinsEditor bin={bin}/>}
            <BinsViewer bin={bin} size={edit ? "col-xs-4" : "col-xs-8"}/>
            {edit && <BinsShare bin={bin}/>}
        </div>
    );
}

export default createContainer((props) => {

    const {binId} = props.match.params;
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');

    return {bin: Bins.findOne(binId)};
}, BinsMain);
