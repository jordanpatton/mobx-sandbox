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
        this.user = observable({});
        this.users = observable([]);

        this.getUser = action(this.getUser);
        this.indexUsers = action(this.indexUsers);

        autorun(() => (
            typeof this.ui.selectedUserId !== 'undefined'
            ? this.getUser(this.ui.selectedUserId)
            : Promise.resolve()
        ));
    }

    getUser(userId) {
        return fetchResource(`users/${userId}`).then(responseJson => {
            this.user = responseJson.user;
            return responseJson;
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
