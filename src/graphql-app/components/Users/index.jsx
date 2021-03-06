import React from 'react';
import { Query } from 'react-apollo';

import { GQL_GET_UI_SELECTED_USER_ID, GQL_INDEX_USERS } from '../../queries/index.js';
import User from '../User/index.jsx';
import WidgetsForUser from '../WidgetsForUser/index.jsx';

class Users extends React.Component {
    static renderTable(users = []) {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Company Name</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    <Query query={GQL_GET_UI_SELECTED_USER_ID}>
                        {({ data = {}, client }) => (
                            users.map(user => (
                                <tr
                                    key={user.id}
                                    onClick={() => client.writeData({ data: { uiSelectedUserId: user.id } })}
                                    style={
                                        user.id === data.uiSelectedUserId
                                        ? { backgroundColor: '#FAFAD2' }
                                        : {}
                                    }
                                >
                                    <th>{user.id}</th>
                                    <th>{user.first_name} {user.last_name}</th>
                                    <th>{user.email_address}</th>
                                    <th>{user.company_name}</th>
                                    <th><img src={user.image_url} alt="avatar" title="avatar" /></th>
                                </tr>
                            ))
                        )}
                    </Query>
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <Query fetchPolicy="cache-and-network" query={GQL_INDEX_USERS}>
                {({ loading, error, data }) => (
                    loading ? (
                        <div style={{ padding: '24px' }}>Loading...</div>
                    ) : error ? (
                        <div style={{ padding: '24px' }}>Failed to fetch users.</div>
                    ) : (
                        <div style={{ padding: '24px' }}>
                            <h2 style={{ fontSize: '36px' }}>All Users</h2>
                            {Users.renderTable(data.users)}
                            <h2 style={{ marginTop: '24px', fontSize: '36px' }}>Selected User</h2>
                            <User />
                            <h2 style={{ marginTop: '24px', fontSize: '36px' }}>User&apos;s Widgets</h2>
                            <WidgetsForUser />
                        </div>
                    )
                )}
            </Query>
        );
    }
}

export default Users;
