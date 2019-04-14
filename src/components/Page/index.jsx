import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { indexUsers as _indexUsers } from '../../actions/index.js';

export class Page extends React.Component {
    componentDidMount() {
        if (!this.props.users) {
            this.props.indexUsers();                
        }
    }

    render() {
        return this.props.users ? (
            <code>{JSON.stringify(this.props.users)}</code>
        ) : (
            <div>Loading...</div>
        );
    }
}

Page.propTypes = {
    indexUsers: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
    users: state.reducers.users.data ? state.reducers.users.data.users : undefined,
});

const mapDispatchToProps = dispatch => ({
    indexUsers: () => dispatch(_indexUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
