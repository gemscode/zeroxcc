export const ADD_MEMORY= 'ADD_MEMORY';
export const DEL_MEMORY= 'DEL_MEMORY';

export function addMemory(object) {
    return {
        type: ADD_MEMORY,
        payload: object
    }
}

export function deleteMemory(object) {
    return {
        type: DEL_MEMORY,
        payload: object
    }
}
