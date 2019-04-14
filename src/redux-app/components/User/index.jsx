import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions/index.js';

export class User extends React.Component {
    componentDidMount() {
        if (!this.props.user) {
            this.props.getUser();                
        }
    }

    render() {
        return this.props.user ? (
            <code>{this.props.user}</code>
        ) : (
            <div>Loading...</div>
        );
    }
}

User.propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object,
};

const mapStateToProps = state => ({
    user: state.reducers.user.data ? state.reducers.user.data.user : undefined,
});

const mapDispatchToProps = dispatch => ({
    getUser: userId => dispatch(actions.getUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
