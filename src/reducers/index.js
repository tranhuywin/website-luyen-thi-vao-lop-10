import {combineReducers} from 'redux';
import examReducer from './Exam';

const rootReducers = combineReducers({
    exam : examReducer,
})
export default rootReducers;