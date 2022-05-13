import { RegisterEvents } from './events';
import { RegisterReducer } from './model';
import { RegisterActions } from './model';

const initialState: RegisterReducer = {
    userList: [],
};

export default (
    state: RegisterReducer = initialState,
    action: RegisterActions
): RegisterReducer => {
    switch (action.type) {
        case RegisterEvents.REGISTER_ACTION_BUTTON:
            return {
                ...state,
                userList: [...state.userList, action.payload],
            };
        // case events.CLEAR_TRIGGER_ACTION_BUTTON:
        //     return {
        //         ...state,
        //         actionTriggered: false,
        //     };
        default:
            return state;
    }
};
