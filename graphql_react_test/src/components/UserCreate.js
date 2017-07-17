import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {Link, withRouter} from 'react-router-dom';
import fetchUsers from '../queries/fetchUsers';
import createUser from '../queries/createUser';

class UserCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', firstname: ''};
    }
    pushHistory() {
        this.props.history.push("/");
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {
                "userData": {
                    "email": this.state.email,
                    "password": this.state.password,
                    "firstName": this.state.firstname,
                }
            },
            refetchQueries: [{ query: fetchUsers }]
        }).then(() => this.pushHistory());
    }

    render(){
        return(
          <div>
              <Link to="/">Back</Link>
              <h3>Create a New User {this.state.firstname}</h3>
              <div className="divider"></div>
              <div className="row">
              <form onSubmit={this.onSubmit.bind(this)} className="col s8">
                  <div className="row">
                <div className="input-field col s6">
                    <input
                        type="email"
                        className="validate"
                        id="email"
                        placeholder="Enter email"
                        onChange={event => this.setState({ email: event.target.value })}
                        value={this.state.email}
                    />
                    <label htmlFor="email">Email address</label>
                </div>
                  </div>
                  <div className="row">
                  <div className="input-field col s6">
                      <input
                          type="password"
                          className="validate"
                          id="password"
                          placeholder="Enter password"
                          onChange={event => this.setState({ password: event.target.value })}
                          value={this.state.password}
                      />
                      <label htmlFor="password">Password</label>
                  </div>
                  </div>
                  <div className="row">
                  <div className="input-field col s6">
                      <input
                          type="text"
                          className="validate"
                          id="firstname"
                          aria-describedby="emailHelp"
                          placeholder="Enter firstname"
                          onChange={event => this.setState({ firstname: event.target.value })}
                          value={this.state.firstname}
                      />
                      <label htmlFor="firstname">Firstname</label>
                  </div>
                  </div>
                  <button type="submit">submit </button>
              </form>
              </div>
          </div>
        );
    }
}

const mutation = gql`
    mutation saveUser($userData: UserExtendedInput!){
        saveUserExtended(obj: $userData){
            id
        }
    }
`;

export default graphql(createUser)(withRouter(UserCreate));