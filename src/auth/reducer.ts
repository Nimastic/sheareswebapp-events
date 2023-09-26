import { AuthActionTypes, RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from "./types";

export const initialState: AuthState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
}

export const reducer = (state: AuthState, action: AuthActionTypes) => {
    switch (action.type) {
        case RESTORE_TOKEN:
            return {
                ...state,
                userToken: action.token,
                isLoading: false,
            };
        case SIGN_IN:
            return {
                ...state,
                isSignout: false,
                userToken: action.token,
            };
        case SIGN_OUT:
            return {
                ...state,
                isSignout: true,
                userToken: null,
            };
    }
};