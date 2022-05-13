import { RegisterEvents } from './events';
import { UserDetails, RegisterSubmitAction } from './model';

export const saveUserDetails = (
    userDetails: UserDetails
): RegisterSubmitAction => ({
    type: RegisterEvents.REGISTER_ACTION_BUTTON,
    payload: userDetails,
});

// export const clearTriggerActionButton = () => ({
//     type: events.CLEAR_TRIGGER_ACTION_BUTTON,
//     payload: {},
// });
