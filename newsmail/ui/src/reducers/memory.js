import  { ADD_MEMORY }  from '../actions/memory';
import  { DEL_MEMORY }  from '../actions/memory';

const initialState = {
    object: '',
}

export default function(state=initialState, action) {
    switch (action.type) {
        case ADD_MEMORY: {
            return { ...state, object: action.payload }
        }

        case DEL_MEMORY: {
            return { ...state, object: '' }
        }

        default:
            return state;
    }
}