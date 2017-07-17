import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import fetchUsers from '../queries/fetchUsers';
import delUser from '../queries/deleteUser';

class UserList extends Component {
    onUserDelete(id) {
        this.props.mutate({variables: { data: {id: id } }})
            .then(() => this.props.data.refetch());
    }

    renderUsers() {
        return this.props.data.UserProfile.UserProfileFind.edges.map( ({node}) => {
            return (
                <li key={node.pk} className="collection-item">
                    {node.pk} {node.id}<Link to={`/users/${node.pk}`}> {node.email}</Link>
                    <i className="material-icons"
                        onClick={()=> this.onUserDelete(node.pk)}>delete
                    </i>
                    </li>
            );
            });
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <ul className="collection">
                    { this.props.data.UserProfile ?  this.renderUsers() : 'Loading...' }
                </ul>
                <Link to="/user/new" className="btn-floating btn-large red right">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }
}


export default graphql(delUser)(graphql(fetchUsers)(UserList));