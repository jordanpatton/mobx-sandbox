import * as React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

interface WidgetsForUserProps {
    indexWidgets: any,
    uiSelectedUserId?: number | string,
    widgets?: any[],
}
interface WidgetsForUserState {}

export class WidgetsForUser extends React.Component<WidgetsForUserProps, WidgetsForUserState> {
    componentDidMount() {
        if (typeof this.props.uiSelectedUserId !== 'undefined') {
            this.props.indexWidgets(this.props.uiSelectedUserId);
        }
    }

    componentDidUpdate(prevProps: WidgetsForUserProps) {
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

const mapStateToProps = (state: any) => ({
    uiSelectedUserId: state.reducers.ui.selectedUserId,
    widgets: state.reducers.widgets.data ? state.reducers.widgets.data.widgets : undefined,
});

const mapDispatchToProps = (dispatch: any) => ({
    indexWidgets: (userId: number | string) => dispatch(actions.indexWidgets(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsForUser);
