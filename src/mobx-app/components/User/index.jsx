import React from 'react';
import { inject, observer } from 'mobx-react';

export function User({ store }) {
    const { data, status } = store.user;
    return status === 'SUCCESS' ? (
        <div style={{ backgroundColor: '#FAFAD2' }}>
            <img src={data.image_url} alt="avatar" title="avatar" />
            {' '}{data.first_name} {data.last_name}
            {' '}&lt;{data.email_address}&gt;
        </div>
    ) : status === 'FAILURE' ? (
        <div>Failed to fetch user.</div>
    ) : status === 'PENDING' ? (
        <div>Loading...</div>
    ) : (
        <div>No user selected.</div>
    );
}

export default inject('store')(observer(User));
