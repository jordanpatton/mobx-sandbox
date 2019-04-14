import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions/index.js';

export class User extends React.Component {
    componentDidMount() {
        if (!this.props.user && this.props.uiSelectedUserId) {
            this.props.getUser(this.props.uiSelectedUserId);                
        }
    }

    render() {
        return !this.props.uiSelectedUserId ? (
            <div>No user selected.</div>
        ) : this.props.user ? (
            <code>{JSON.stringify(this.props.user)}</code>
        ) : (
            <div>Loading...</div>
        );
    }
}

User.propTypes = {
    getUser: PropTypes.func.isRequired,
    uiSelectedUserId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    user: PropTypes.object,
};

const mapStateToProps = state => ({
    uiSelectedUserId: state.reducers.ui.selectedUserId,
    user: state.reducers.user.data ? state.reducers.user.data.user : undefined,
});

const mapDispatchToProps = dispatch => ({
    getUser: userId => dispatch(actions.getUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
