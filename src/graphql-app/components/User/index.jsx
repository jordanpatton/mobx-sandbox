import React from 'react';
import { Query } from 'react-apollo';

import { GQL_GET_UI_SELECTED_USER_ID, GQL_GET_USER } from '../../queries/index.js';

export function User() {
    return (
        <Query query={GQL_GET_UI_SELECTED_USER_ID}>
            {({ data: uiData = {} }) => (
                typeof uiData.uiSelectedUserId !== 'undefined' ? (
                    <Query
                        fetchPolicy="cache-and-network"
                        key={uiData.uiSelectedUserId}
                        query={GQL_GET_USER}
                        variables={{ id: uiData.uiSelectedUserId }}
                    >
                        {({ loading, error, data }) => (
                            loading ? (
                                <div>Loading...</div>
                            ) : error ? (
                                <div>Failed to fetch user.</div>
                            ) : (
                                <div style={{ backgroundColor: '#FAFAD2' }}>
                                    <img src={data.user.image_url} alt="avatar" title="avatar" />
                                    {' '}{data.user.first_name} {data.user.last_name}
                                    {' '}&lt;{data.user.email_address}&gt;
                                </div>
                            )
                        )}
                    </Query>
                ) : (
                    <div>No user selected.</div>
                )
            )}
        </Query>
    );
}

export default User;
