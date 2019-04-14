import React from 'react';
import { inject, observer } from 'mobx-react';

export function WidgetsForUser({ store }) {
    const { data, status } = store.widgets;
    return status === 'SUCCESS' ? (
        <ul style={{ backgroundColor: '#FFDEAD' }}>
            {data.map(widget => (
                <li key={widget.id}>
                    <img src={widget.image_url} alt="image" title="image" />
                    {' '}{widget.name} ({widget.description})
                </li>
            ))}
        </ul>
    ) : status === 'FAILURE' ? (
        <div>Failed to fetch widgets.</div>
    ) : status === 'PENDING' ? (
        <div>Loading...</div>
    ) : (
        <div>No user selected.</div>
    );
}

export default inject('store')(observer(WidgetsForUser));
