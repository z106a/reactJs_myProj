import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {graphql} from 'react-apollo';
import fetchUser from '../queries/fetchUser';

class UserDetail extends Component {
    renderUser = (userProfile) => {
        let user = userProfile.UserProfileFindById;
        return (
            <div>
                <p>Firstname: {user.firstName}</p>
                <p>Age: {user.age}</p>
                <p>email: {user.email}</p>
                <p>Company: { !!user.inCompany ? user.inCompany.name : undefined}</p>
                <p>{ !!user.inCompany ? user.inCompany.description: undefined}</p>
            </div>
            );
    }

    render() {
        console.log(this.props);
        const { UserProfile} = this.props.data;
        return (
            <div className="row">
                <div className="col s6">
                    <Link to="/">Back</Link>
                        <h3>User Detail</h3>
                        { UserProfile ? this.renderUser(UserProfile) : 'Loading...' }
                </div>
            </div>
        );
    }
}

export default graphql(fetchUser, {
    options: (props) => { return { variables: { id: props.match.params.id}}}
})(withRouter(UserDetail));

// export default UserDetail;