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
        this.users = observable([]);

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
        return fetchResource('users').then(responseJson => {
            this.users.replace(responseJson.users);
            return responseJson;
        });
    }

    uiSelectUserId(userId) {
        this.ui.selectedUserId = userId;
    }
}

export default AppStore;
