import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions/index.js';

export class WidgetsForUser extends React.Component {
    componentDidMount() {
        if (this.props.uiSelectedUserId) {
            this.props.indexWidgets(this.props.uiSelectedUserId);
        }
    }

    componentDidUpdate(prevProps) {
        if (
            (prevProps.uiSelectedUserId !== this.props.uiSelectedUserId)
            && this.props.uiSelectedUserId
        ) {
            this.props.indexWidgets(this.props.uiSelectedUserId);
        }
    }

    render() {
        return !this.props.uiSelectedUserId ? (
            <div>No user selected.</div>
        ) : this.props.widgets ? (
            <div style={{ backgroundColor: '#FFDEAD' }}>
                <code>{JSON.stringify(this.props.widgets)}</code>
            </div>
        ) : (
            <div>Loading...</div>
        );
    }
}

WidgetsForUser.propTypes = {
    indexWidgets: PropTypes.func.isRequired,
    uiSelectedUserId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    widgets: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
    uiSelectedUserId: state.reducers.ui.selectedUserId,
    widgets: state.reducers.widgets.data ? state.reducers.widgets.data.widgets : undefined,
});

const mapDispatchToProps = dispatch => ({
    indexWidgets: userId => dispatch(actions.indexWidgets(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsForUser);
