export const ADD_APP= 'ADD_APP';
export const UPD_APP= 'UPD_APP';
export const DEL_APP= 'DEL_APP';

export function addApp(app) {
    return {
        type: ADD_APP,
        payload: { app }
    }
}

export function updateApp(app) {
    return {
        type: UPD_APP,
        payload: { app }
    }
}

export function deleteApp(app) {
    return {
        type: DEL_APP,
        payload: { app }
    }
}