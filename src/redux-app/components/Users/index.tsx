import * as React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/index.js';
import User from '../User/index.jsx';
import WidgetsForUser from '../WidgetsForUser/index.jsx';

export interface UsersProps {
    indexUsers: any,
    uiSelectUserId: any,
    uiSelectedUserId?: number | string,
    users?: any[],
};
export interface UsersState {};

export class Users extends React.Component<UsersProps, UsersState> {
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
                        <tr
                            key={user.id}
                            onClick={() => this.props.uiSelectUserId(user.id)}
                            style={
                                user.id === this.props.uiSelectedUserId
                                ? { backgroundColor: '#FAFAD2' }
                                : {}
                            }
                        >
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
                <h2 style={{ marginTop: '24px', fontSize: '36px' }}>User&apos;s Widgets</h2>
                <WidgetsForUser />
            </div>
        ) : (
            <div style={{ padding: '24px' }}>Loading...</div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    uiSelectedUserId: state.reducers.ui.selectedUserId,
    users: state.reducers.users.data ? state.reducers.users.data.users : undefined,
});

const mapDispatchToProps = (dispatch: any) => ({
    indexUsers: () => dispatch(actions.indexUsers()),
    uiSelectUserId: (userId: number | string) => dispatch(actions.uiSelectUserId(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
