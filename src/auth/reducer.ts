import { AuthState } from "../types/auth";
import { AuthActionTypes, LOADING, RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from "./types";

export const initialState: AuthState = {
    isLoading: true,
    isSignout: false,
    user: null,
}

export const reducer = (state: AuthState, action: AuthActionTypes) => {
    switch (action.type) {
        case RESTORE_TOKEN:
            return {
                ...state,
                user: action.user,
                isLoading: false,
            };
        case SIGN_IN:
            return {
                ...state,
                isSignout: false,
                user: action.user,
                isLoading: false,
            };
        case SIGN_OUT:
            return {
                ...state,
                isSignout: true,
                user: null,
                isLoading: false,
            };
        case LOADING:
            return {
                ...state,
                isLoading: true,
            };
    }
};