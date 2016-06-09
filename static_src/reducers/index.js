import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    some_state: (state=null, action) => { return state; }
});

export default rootReducer;