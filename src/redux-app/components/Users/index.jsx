import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions/index.js';

export class Users extends React.Component {
    componentDidMount() {
        if (!this.props.users) {
            this.props.indexUsers();                
        }
    }

    render() {
        return this.props.users ? (
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
                        <tr key={user.id}>
                            <th>{user.id}</th>
                            <th>{user.first_name} {user.last_name}</th>
                            <th>{user.email_address}</th>
                            <th>{user.company_name}</th>
                            <th><img src={user.image_url} alt="avatar" title="avatar" /></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : (
            <div>Loading...</div>
        );
    }
}

Users.propTypes = {
    indexUsers: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
    users: state.reducers.users.data ? state.reducers.users.data.users : undefined,
});

const mapDispatchToProps = dispatch => ({
    indexUsers: () => dispatch(actions.indexUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
