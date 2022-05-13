import { RegisterEvents } from './events';

export interface UserDetails {
    user: string;
    email: string;
    phone: string;
    genderValue: string;
    role: string;
    dob: string;
}

export interface RegisterSubmitAction {
    type: RegisterEvents.REGISTER_ACTION_BUTTON;
    payload: UserDetails;
}

export type RegisterActions = RegisterSubmitAction;

export interface RegisterReducer {
    userList: UserDetails[];
}
