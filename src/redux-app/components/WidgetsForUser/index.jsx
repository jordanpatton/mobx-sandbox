import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions/index.js';

export class WidgetsForUser extends React.Component {
    componentDidMount() {
        if (typeof this.props.uiSelectedUserId !== 'undefined') {
            this.props.indexWidgets(this.props.uiSelectedUserId);
        }
    }

    componentDidUpdate(prevProps) {
        if (
            (prevProps.uiSelectedUserId !== this.props.uiSelectedUserId)
            && typeof this.props.uiSelectedUserId !== 'undefined'
        ) {
            this.props.indexWidgets(this.props.uiSelectedUserId);
        }
    }

    render() {
        return typeof this.props.uiSelectedUserId === 'undefined' ? (
            <div>No user selected.</div>
        ) : this.props.widgets ? (
            <ul style={{ backgroundColor: '#FFDEAD' }}>
                {this.props.widgets.map(widget => (
                    <li key={widget.id}>
                        <img src={widget.image_url} alt="image" title="image" />
                        {' '}{widget.name} ({widget.description})
                    </li>
                ))}
            </ul>
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
