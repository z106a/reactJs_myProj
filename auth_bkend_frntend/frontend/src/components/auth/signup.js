import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.isAuth) {
            this.props.history.push("/feature");
        }
    }

    renderAlert = () => {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> { this.props.errorMessage }
                </div>
            );
        }
    }

    handleFormSubmit = (formProps) => {
        this.props.signupUser(formProps);
    }

    renderField = ({ input, label, type, meta: {touched, error, warning}}) =>
        <div className="form-group">
            <label> {label} </label>
            <input {...input} type={type} className="form-control"/>
            {touched && ((error && <span className="error"> {error}</span>) ||
                (warning && <span> {warning} </span>))
            }
        </div>;

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="container">
                <form onSubmit={handleSubmit( this.handleFormSubmit )}>
                    <Field name="email" type="email" component={this.renderField} label="Email"/>
                    <Field name="password" type="password" component={this.renderField} label="Password"/>
                    <Field name="passwordConfirm" type="password" component={this.renderField}
                           label="Confirm Password"/>
                    {this.renderAlert()}
                    <button action="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

function validate(formProps) {
    const errors = {};
    if (!formProps.email) {
        errors.email = 'Please enter an email.'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)) {
        errors.email = 'Invalid email address';
    }
    if (!formProps.password) {
        errors.password = 'Please enter a password.';
    }
    if (!formProps.passwordConfirm) {
        errors.password = 'Please enter a password confirmation.';
    }
    if (formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Passwords must matched.';
    }
    return errors;
}

function mapStateToProps(state) {
    const { isAuth, errorMessage } = state.auth;
    return { isAuth, errorMessage }
}

Signup = reduxForm({
    form: 'signup',
    validate
})(Signup);

export default connect(mapStateToProps, actions)(Signup);
