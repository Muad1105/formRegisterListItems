import { combineReducers, Reducer } from 'redux';
import ActionBtnReducer from '../plugins/action-button/redux/reducer';

const rootReducer: Reducer = combineReducers({
    actionBtn: ActionBtnReducer
});

export default rootReducer;