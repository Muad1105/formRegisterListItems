import { ActionBtnReducer } from '../plugins/action-button/redux/model';
import { RegisterReducer } from '../components/main-container/redux/model';

export interface AppStore {
    actionBtn: ActionBtnReducer;
    register: RegisterReducer;
}
