import * as React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/index.js';

interface UserProps {
    getUser: any,
    uiSelectedUserId?: number | string,
    user?: any,
}
interface UserState {}

export class User extends React.Component<UserProps, UserState> {
    componentDidMount() {
        if (typeof this.props.uiSelectedUserId !== 'undefined') {
            this.props.getUser(this.props.uiSelectedUserId);
        }
    }

    componentDidUpdate(prevProps: UserProps) {
        if (
            (prevProps.uiSelectedUserId !== this.props.uiSelectedUserId)
            && typeof this.props.uiSelectedUserId !== 'undefined'
        ) {
            this.props.getUser(this.props.uiSelectedUserId);
        }
    }

    render() {
        return typeof this.props.uiSelectedUserId === 'undefined' ? (
            <div>No user selected.</div>
        ) : this.props.user ? (
            <div style={{ backgroundColor: '#FAFAD2' }}>
                <img src={this.props.user.image_url} alt="avatar" title="avatar" />
                {' '}{this.props.user.first_name} {this.props.user.last_name}
                {' '}&lt;{this.props.user.email_address}&gt;
            </div>
        ) : (
            <div>Loading...</div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    uiSelectedUserId: state.reducers.ui.selectedUserId,
    user: state.reducers.user.data ? state.reducers.user.data.user : undefined,
});

const mapDispatchToProps = (dispatch: any) => ({
    getUser: (userId: number | string) => dispatch(actions.getUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
