export const ADD_RESPONSE= 'ADD_RESPONSE';
export const DEL_RESPONSE= 'DEL_RESPONSE';

export function addResponse(object) {
    return {
        type: ADD_RESPONSE,
        payload: object
    }
}

export function deleteResponse(object) {
    return {
        type: DEL_RESPONSE,
        payload: object
    }
}
