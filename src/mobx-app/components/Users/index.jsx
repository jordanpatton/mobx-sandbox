import React from 'react';
import { inject, observer } from 'mobx-react';

import User from '../User/index.jsx';
import WidgetsForUser from '../WidgetsForUser/index.jsx';

class Users extends React.Component {
    componentDidMount() {
        if (!this.props.store.users.status) {
            this.props.store.indexUsers();
        }
    }

    renderTable() {
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
                    {this.props.store.users.data.map(user => (
                        <tr key={user.id} onClick={() => this.props.store.uiSelectUserId(user.id)}>
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
        const { status } = this.props.store.users;
        return status === 'SUCCESS' ? (
            <div style={{ padding: '24px' }}>
                <h2 style={{ fontSize: '36px' }}>All Users</h2>
                {this.renderTable()}
                <h2 style={{ marginTop: '24px', fontSize: '36px' }}>Selected User</h2>
                <User />
                <h2 style={{ marginTop: '24px', fontSize: '36px' }}>User&apos;s Widgets</h2>
                <WidgetsForUser />
            </div>
        ) : status === 'FAILURE' ? (
            <div style={{ padding: '24px' }}>Failed to fetch users.</div>
        ) : status === 'PENDING' ? (
            <div style={{ padding: '24px' }}>Loading...</div>
        ) : (
            <div style={{ padding: '24px' }}>{status}</div>
        );
    }
}

export default inject('store')(observer(Users));
