import React from 'react';
import PropTypes from 'prop-types';
import Accounts from './accounts';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'


const Header = ({history}) => {

    function onBinClick(event) {
        event.preventDefault();
        Meteor.call('bins.insert', function (err, resultId) {
            history.push(`/bins/${resultId}`);
        });
    }

    return (
        <nav className="nav navbar-default">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/">Markbin</Link>
            </div>
            <ul className="nav navbar-nav">
                <li>
                    <Accounts/>
                </li>
                <li>
                    <a href="#" onClick={onBinClick.bind(this)}>Create Bin</a>
                </li>
            </ul>
        </nav>
    );

};

Header.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
};

export default withRouter(Header);