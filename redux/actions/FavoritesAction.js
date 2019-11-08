import { AsyncStorage } from 'react-native';

export const FAVORITES_INIT = 'FAVORITES_INIT';
export const FAVORITES_ADD = 'FAVORITES_ADD';
export const FAVORITES_DELETE = 'FAVORITES_DELETE';

export const initAsync = () => {
    return dispatch => {
        AsyncStorage.getItem('favorites').then(data => {
            return dispatch({ type: FAVORITES_INIT, payload: JSON.parse(data) });
        });
    };
}

export const addAsync = () => {
    return dispatch => {
        AsyncStorage.getItem('favorites').then(data => {
            let tab = [];
            if (data !== null) {
                tab = JSON.parse(data);
            }
            tab.push(this.state.favoritesId);
            AsyncStorage.setItem('favorites', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: FAVORITES_INIT, payload: tab });
                });
        });
    }
}
export const deleteAsync = (favoritesId) => {
    return dispatch => {
        AsyncStorage.getItem('favorites').then(data => {
            const tab = JSON.parse(data);
            tab.splice(tab.findIndex(e => e === favoritesId), 1);
            AsyncStorage.setItem('favorites', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: FAVORITES_INIT, payload: JSON.parse(data) });
                });
        });
    };
}
