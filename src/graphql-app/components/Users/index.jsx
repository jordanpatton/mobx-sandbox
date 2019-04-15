import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GQL_INDEX_USERS = gql`
{
    users {
        id
        first_name
        last_name
    }
}
`;

class Users extends React.Component {
    render() {
        return (
            <Query query={GQL_INDEX_USERS}>
                {({ loading, error, data }) => (
                    loading ? (
                        <div style={{ padding: '24px' }}>Loading...</div>
                    ) : error ? (
                        <div style={{ padding: '24px' }}>Failed to fetch users.</div>
                    ) : (
                        <div style={{ padding: '24px' }}>
                            <h2 style={{ fontSize: '36px' }}>All Users</h2>
                            <code>{JSON.stringify(data)}</code>
                        </div>
                    )
                )}
            </Query>
        );
    }
}

export default Users;
