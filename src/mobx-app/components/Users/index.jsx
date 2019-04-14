import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

class Users extends React.Component {
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
                    {this.props.usersStore.getData().map(user => (
                        <tr key={user.id} onClick={() => console.log('TODO')}>
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
        return (this.props.usersStore && this.props.usersStore.getData().length) ? (
            <div style={{ padding: '24px' }}>
                <h2 style={{ fontSize: '36px' }}>All Users</h2>
                {this.renderTable()}
            </div>
        ) : (
            <div style={{ padding: '24px' }}>Loading...</div>
        );
    }
}

// Users.propTypes = {
//     usersStore: PropTypes.object,
// };

export default inject('usersStore')(observer(Users));
