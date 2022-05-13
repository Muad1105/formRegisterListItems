import { combineReducers, Reducer } from 'redux';
import ActionBtnReducer from '../plugins/action-button/redux/reducer';
import RegisterReducer from '../components/main-container/redux/reducer.ts';

const rootReducer: Reducer = combineReducers({
    actionBtn: ActionBtnReducer,
    register: RegisterReducer,
});

export default rootReducer;
