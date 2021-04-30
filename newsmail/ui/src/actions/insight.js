export const ADD_INSIGHT= 'ADD_INSIGHT';
export const UPD_INSIGHT= 'UPD_INSIGHT';
export const DEL_INSIGHT= 'DEL_INSIGHT';

export function addInsight(insight) {
    return {
        type: ADD_INSIGHT,
        payload: { insight }
    }
}

export function updateInsight(insight) {
    return {
        type: UPD_INSIGHT,
        payload: { insight }
    }
}

export function deleteInsight(insight) {
    return {
        type: DEL_INSIGHT,
        payload: { insight }
    }
}