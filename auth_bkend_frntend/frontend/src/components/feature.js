import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
    componentWillMount(){
        this.props.fetchMessage();
    }

    render() {
        return(
            <div>{this.props.message}</div>
        )
    }
}

function mapStateToProps(state) {
    const { message } = state.auth;
    return { message };
}

export default connect(mapStateToProps, actions)(Feature);