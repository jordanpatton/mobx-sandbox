import React from 'react';
import { Query } from 'react-apollo';

import { GQL_GET_UI_SELECTED_USER_ID, GQL_INDEX_WIDGETS } from '../../queries/index.js';

export function WidgetsForUser() {
    return (
        <Query query={GQL_GET_UI_SELECTED_USER_ID}>
            {({ data: uiData = {} }) => (
                typeof uiData.uiSelectedUserId !== 'undefined' ? (
                    <Query
                        fetchPolicy="cache-and-network"
                        key={uiData.uiSelectedUserId}
                        query={GQL_INDEX_WIDGETS}
                        variables={{ owner_id: uiData.uiSelectedUserId }}
                    >
                        {({ loading, error, data }) => (
                            loading ? (
                                <div>Loading...</div>
                            ) : error ? (
                                <div>Failed to fetch widgets.</div>
                            ) : (
                                <ul style={{ backgroundColor: '#FFDEAD' }}>
                                    {data.widgets.map(widget => (
                                        <li key={widget.id}>
                                            <img src={widget.image_url} alt="image" title="image" />
                                            {' '}{widget.name} ({widget.description})
                                        </li>
                                    ))}
                                </ul>
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

export default WidgetsForUser;
