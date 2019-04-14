import { action, autorun, observable } from 'mobx';

export function fetchResource(resourceName = '', params) {
    return (
        (typeof window !== 'undefined' && typeof window.fetch !== 'undefined')
        ? window
            .fetch(`http://localhost:3000/api/${resourceName}`, { method: 'GET', params })
            .then(r => r.status === 200 ? r.json() : Promise.reject(r))
        : Promise.reject('window.fetch unavailable')
    );
}

export class AppStore {
    constructor() {
        // set fields as observables
        this.ui = observable({});
        this.user = observable({ data: undefined, status: undefined });
        this.users = observable({ data: undefined, status: undefined });
        this.widgets = observable({ data: undefined, status: undefined });

        // set async functions as actions
        this.getUser = action(this.getUser);
        this.indexUsers = action(this.indexUsers);
        this.indexWidgets = action(this.indexWidgets);

        // initialize reactions to `ui.selectedUserId` changing
        autorun(() => (
            typeof this.ui.selectedUserId !== 'undefined'
            ? this.getUser(this.ui.selectedUserId)
            : Promise.resolve()
        ));
        autorun(() => (
            typeof this.ui.selectedUserId !== 'undefined'
            ? this.indexWidgets(this.ui.selectedUserId)
            : Promise.resolve()
        ));
    }

    getUser(userId) {
        this.user.status = 'PENDING';
        return fetchResource(`users/${userId}`).then(result => {
            this.user.data = result.user;
            this.user.status = 'SUCCESS';
            return Promise.resolve(result);
        }, (result) => {
            this.user.data = undefined;
            this.user.status = 'FAILURE';
            return Promise.reject(result);
        });
    }

    indexUsers() {
        this.users.status = 'PENDING';
        return fetchResource('users').then(result => {
            this.users.data = result.users;
            this.users.status = 'SUCCESS';
            return Promise.resolve(result);
        }, (result) => {
            this.users.data = undefined;
            this.users.status = 'FAILURE';
            return Promise.reject(result);
        });
    }

    indexWidgets(userId) {
        this.widgets.status = 'PENDING';
        return fetchResource(
            typeof userId !== 'undefined' ? `widgets?userId=${userId}` : 'widgets'
        ).then(result => {
            this.widgets.data = result.widgets;
            this.widgets.status = 'SUCCESS';
            return Promise.resolve(result);
        }, (result) => {
            this.widgets.data = undefined;
            this.widgets.status = 'FAILURE';
            return Promise.reject(result);
        });
    }

    uiSelectUserId(userId) {
        this.ui.selectedUserId = userId;
    }
}

export default AppStore;
