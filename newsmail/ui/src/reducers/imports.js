import  { ADD_APP }  from '../actions/imports';
import  { DEL_APP }  from '../actions/imports';
import  { MEMORY }  from '../actions/imports';

const initialState = {
    app: {
        id: '',
        name: '',
        url: '',
        path: '',
        version: '',
        build: ''
    },
    memory: {
        id: '',
        name: '',
        url: '',
        path: '',
        version: '',
        build: ''
    },
}

export default function(state=initialState, action) {
    switch (action.type) {
        case ADD_APP: {
            return { ...state, app: action.payload }
        }

        case DEL_APP: {
            return { ...state, app: { id: '', name: '', url: '', version: '', build: ''} }
        }

        default:
            return state;
    }
}