import React from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends React.Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }
    
    renderUsers() {
        return this.props.admins.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }

    render() {
        return (
            <div>
                <h3>Protected list of admins</h3>
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({admins}) {
    return { admins };
}

function loadData(store) {
    return store.dispatch(fetchAdmins());
}

export default {
    loadData,
    component:  connect(mapStateToProps, {fetchAdmins})(
        requireAuth(AdminsListPage)
    )
};