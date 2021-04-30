import  { ADD_RESPONSE }  from '../actions/response';
import  { DEL_RESPONSE }  from '../actions/response';

const initialState = {
    object: '',
}

export default function(state=initialState, action) {
    switch (action.type) {
        case ADD_RESPONSE: {
            return { ...state, object: action.payload }
        }

        case DEL_RESPONSE: {
            return { ...state, object: '' }
        }

        default:
            return state;
    }
}