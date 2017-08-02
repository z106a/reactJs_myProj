import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions  from '../../actions';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

class Signin extends Component {

    handleFormSubmit = ({email, password}) => {
        this.props.signinUser({email, password});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isAuth) {
            this.props.history.push("/feature");
        }
    }

    renderAlert = () => {
       if (this.props.errorMessage) {
           console.log('err msg');
           return (
               <div className="alert alert-danger">
                   <strong>Oops!</strong> { this.props.errorMessage }
               </div>
           );
       }
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="container">
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <fieldset className="form-group">
                        <label>Email:</label>
                        <Field name="email" component="input" type="text"/>
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Password:</label>
                        <Field name="password" component="input" type="password"/>
                    </fieldset>
                    {this.renderAlert()}
                    <button action="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            );
    }
}

function mapStateToProps(state) {
    const { isAuth, errorMessage } = state.auth;
    return { isAuth, errorMessage }
}

Signin = reduxForm({
    form: 'signin'
})(Signin);

export default connect(mapStateToProps, actions)(Signin);