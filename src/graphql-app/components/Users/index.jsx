import React from 'react';

import { AppContext } from '../App/context.js';

class Users extends React.Component {
    render() {
        console.log(this.context);
        return (
            <div style={{ padding: '24px' }}>
                Users
            </div>
        );
    }
}

Users.contextType = AppContext;

export default Users;
