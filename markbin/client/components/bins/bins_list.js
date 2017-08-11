import React, { Component } from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Bins } from '../../../imports/collections/bins';

class BinsList extends Component {
    onBinRemove(bin) {
        Meteor.call('bins.remove', bin);
    }

    renderList() {
        return this.props.bins.map(bin => {
            return (
                <li className="list-group-item" key={bin._id}>
                    <Link to={`/view/${bin._id}`}> Bin {bin._id} </Link>
                    <span className="pull-right">
                        <div className="btn-group">
                            <Link
                                to={`/edit/${bin._id}`}
                                className="btn btn-primary">Edit
                            </Link>
                            <button
                                onClick={ () => this.onBinRemove(bin) }
                                className="btn btn-danger">
                                Remove
                            </button>
                        </div>
                    </span>
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');

    return { bins: Bins.find({}).fetch() };
}, BinsList);