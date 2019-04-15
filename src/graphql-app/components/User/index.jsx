import React from 'react';
import { Query } from 'react-apollo';

import { GQL_GET_USER } from '../../queries/index.js';

export function User() {
    return (
        <Query
            fetchPolicy="cache-and-network"
            query={GQL_GET_USER}
        >
            {({ loading, error, data }) => (
                loading ? (
                    <div style={{ padding: '24px' }}>Loading...</div>
                ) : error ? (
                    <div style={{ padding: '24px' }}>Failed to fetch user.</div>
                ) : (
                    <div style={{ backgroundColor: '#FAFAD2' }}>
                        <img src={data.user.image_url} alt="avatar" title="avatar" />
                        {' '}{data.user.first_name} {data.user.last_name}
                        {' '}&lt;{data.user.email_address}&gt;
                    </div>
                )
            )}
        </Query>
    );
}

export default User;
