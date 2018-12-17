import {combineReducers} from 'redux';
import headerMainReducer from './headerMainReducer';
import homePageReducer from './homePageReducer';
import blocksPageReducer from './blocksPageReducer';
import nodesPageReducer from './nodesPageReducer';

const rootReducer = combineReducers({
    headerMainReducer,
    homePageReducer,
    blocksPageReducer,
    nodesPageReducer
});

export default rootReducer;
