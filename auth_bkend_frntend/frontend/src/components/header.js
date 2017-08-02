import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderLinks() {
        if (this.props.isAuth){
            return <li className="nav-item">
                    <Link className="nav-link" to="/signout">Sign Out</Link>
                </li>
        } else {
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
            ];
        }
    }

    render() {
        return (
            <nav className="navbar navbar-light navbar-toggleable-md bg-faded">
                <Link to="/" className="navbar-brand">Redux Auth</Link>
                    <ul className="navbar-nav mr-auto">
                        { this.renderLinks() }
                    </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return { isAuth: state.auth.isAuth };
}

export default connect(mapStateToProps)(Header);