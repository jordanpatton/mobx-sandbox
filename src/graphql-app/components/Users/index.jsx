import React from 'react';
import gql from 'graphql-tag';

import { AppContext } from '../App/context.js';

class Users extends React.Component {
    render() {
        console.log(this.context);
        this.context.apolloClient.query({
            query: gql`
            {
                users {
                    id
                    first_name
                    last_name
                }
            }
            `
        }).then(result => console.log(result));
        return (
            <div style={{ padding: '24px' }}>
                Users
            </div>
        );
    }
}

Users.contextType = AppContext;

export default Users;
