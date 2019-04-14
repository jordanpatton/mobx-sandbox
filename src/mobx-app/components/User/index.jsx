import React from 'react';
import { inject, observer } from 'mobx-react';

export function User({ store }) {
    console.log(store.ui.selectedUserId);
    return (typeof store.ui.selectedUserId === 'undefined') ? (
        <div>No user selected.</div>
    ) : (typeof store.user.id !== 'undefined') ? (
        <div style={{ backgroundColor: '#FAFAD2' }}>
            <img src={store.user.image_url} alt="avatar" title="avatar" />
            {' '}{store.user.first_name} {store.user.last_name}
            {' '}&lt;{store.user.email_address}&gt;
        </div>
    ) : (
        <div>Loading...</div>
    );
}

export default inject('store')(observer(User));
