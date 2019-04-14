import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions/index.js';
import User from '../User/index.jsx';

export class Users extends React.Component {
    componentDidMount() {
        if (!this.props.users) {
            this.props.indexUsers();
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
                    {this.props.users.map(user => (
                        <tr key={user.id} onClick={() => this.props.uiSelectUserId(user.id)}>
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
        return this.props.users ? (
            <div style={{ padding: '24px' }}>
                <h2 style={{ fontSize: '36px' }}>All Users</h2>
                {this.renderTable()}
                <h2 style={{ marginTop: '24px', fontSize: '36px' }}>Selected User</h2>
                <User />
            </div>
        ) : (
            <div>Loading...</div>
        );
    }
}

Users.propTypes = {
    indexUsers: PropTypes.func.isRequired,
    uiSelectUserId: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
    users: state.reducers.users.data ? state.reducers.users.data.users : undefined,
});

const mapDispatchToProps = dispatch => ({
    indexUsers: () => dispatch(actions.indexUsers()),
    uiSelectUserId: userId => dispatch(actions.uiSelectUserId(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
