import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "../_actions/type";

export default function(state = {}, action: any) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload};
        case REGISTER_USER:
            return {...state, register: action.payload};
        case AUTH_USER:
            return {...state, userData: action.payload};

        default:
            return state;
    };
};