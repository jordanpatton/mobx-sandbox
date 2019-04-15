import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GQL_INDEX_USERS = gql`
{
    users {
        id
        first_name
        last_name
        email_address
        company_name
        image_url
    }
}
`;

class Users extends React.Component {
    static renderTable(users) {
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
                    {users.map(user => (
                        <tr
                            key={user.id}
                            onClick={() => console.log('TODO')}
                        >
                            <th>{user.id}</th>
                            <th>{user.first_name} {user.last_name}</th>
                            <th>{user.email_address}</th>
                            <th>{user.company_name}</th>
                            <th><img src={user.image_url} alt="avatar" title="avatar" /></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <Query pollInterval={1000} query={GQL_INDEX_USERS}>
                {({ loading, error, data }) => (
                    loading ? (
                        <div style={{ padding: '24px' }}>Loading...</div>
                    ) : error ? (
                        <div style={{ padding: '24px' }}>Failed to fetch users.</div>
                    ) : (
                        <div style={{ padding: '24px' }}>
                            <h2 style={{ fontSize: '36px' }}>All Users</h2>
                            {Users.renderTable(data.users)}
                        </div>
                    )
                )}
            </Query>
        );
    }
}

export default Users;
