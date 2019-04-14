import React from 'react';
import { inject, observer } from 'mobx-react';

class Users extends React.Component {
    componentDidMount() {
        if (!this.props.store.users.length) {
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
                    {this.props.store.users.map(user => (
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
        return this.props.store.users.length ? (
            <div style={{ padding: '24px' }}>
                <h2 style={{ fontSize: '36px' }}>All Users</h2>
                {this.renderTable()}
                <code>{JSON.stringify(this.props.store.ui.selectedUserId)}</code>
            </div>
        ) : (
            <div style={{ padding: '24px' }}>Loading...</div>
        );
    }
}

export default inject('store')(observer(Users));
