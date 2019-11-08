import { AsyncStorage } from 'react-native';

export const WATCHED_INIT = 'WATCHED_INIT';
export const WATCHED_ADD = 'WATCHED_ADD';
export const WATCHED_DELETE = 'WATCHED_DELETE';

export const initAsync = () => {
    return dispatch => {
        AsyncStorage.getItem('watched').then(data => {
            return dispatch({ type: WATCHED_INIT, payload: JSON.parse(data) });
        });
    };
}

export const addAsync = () => {
    return dispatch => {
        AsyncStorage.getItem('watched').then(data => {
            let tab = [];
            if (data !== null) {
                tab = JSON.parse(data);
            }
            tab.push(this.state.watchedId);
            AsyncStorage.setItem('watched', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: WATCHED_INIT, payload: tab });
                });
        });
    }
}
export const deleteAsync = (watchedId) => {
    return dispatch => {
        AsyncStorage.getItem('watched').then(data => {
            const tab = JSON.parse(data);
            tab.splice(tab.findIndex(e => e === watchedId), 1);
            AsyncStorage.setItem('watched', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: WATCHED_INIT, payload: JSON.parse(data) });
                });
        });
    };
}
