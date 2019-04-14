import React from 'react';
import { inject, observer } from 'mobx-react';

export class User extends React.Component {
    componentDidMount() {
        console.log('componentDidMount', this.props.store.ui.selectedUserId);
    }

    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate', prevProps.store.ui.selectedUserId, this.props.store.ui.selectedUserId);
    }

    render() {
        console.log('render', this.props.store.ui.selectedUserId, this.props.store.user.id);
        const { store } = this.props;
        return (typeof store.ui.selectedUserId === 'undefined') ? (
            <div>No user selected.</div>
        ) : (typeof store.user.id !== 'undefined') ? (
            <div style={{ backgroundColor: '#FAFAD2' }}>
                <img src={store.user.image_url} alt="avatar" title="avatar" />
                {' '}{store.user.first_name} {store.user.last_name}
                {' '}&lt;{store.user.email_address}&gt;
            </div>
        ) : (
            <div>Loading...</div>
        );
    }
}

export default inject('store')(observer(User));
