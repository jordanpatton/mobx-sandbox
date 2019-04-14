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
        this.ui = observable({});
        this.user = observable({ data: undefined, status: undefined });
        this.users = observable({ data: undefined, status: undefined });

        this.getUser = action(this.getUser);
        this.indexUsers = action(this.indexUsers);

        autorun(() => (
            typeof this.ui.selectedUserId !== 'undefined'
            ? this.getUser(this.ui.selectedUserId)
            : Promise.reject()
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

    uiSelectUserId(userId) {
        this.ui.selectedUserId = userId;
    }
}

export default AppStore;
