import { combineReducers } from 'redux';
import insightReducer from './insight';
import importsReducer from './imports';
import memoryReducer from './memory';
import responseReducer from './response';
import { reducer as formReducer } from 'redux-form';

const allReducers = {
    insight: insightReducer,
    imports: importsReducer,
    memory: memoryReducer,
    response: responseReducer,
    form: formReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;