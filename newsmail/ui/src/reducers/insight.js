import  { ADD_INSIGHT }  from '../actions/insight';
import  { UPD_INSIGHT }  from '../actions/insight';
import  { DEL_INSIGHT }  from '../actions/insight';

const initialState = {
    insightList: []
}

export default function(state=initialState, action) {
    switch (action.type) {
        case ADD_INSIGHT: {
            return {...state,
                insightList: [...state.insightList, action.payload]
            }
        }

        case UPD_INSIGHT: {
            return {...state,
                insightList: state.insightList.map(item => item.insight.id === action.payload.insight.id ? action.payload : item)
            }
        }

        case DEL_INSIGHT: {
            return {...state,
                insightList: state.insightList.filter(item => item.insight.id !== action.payload.insight.id)
            }
        }

        default:
            return state;
    }
}