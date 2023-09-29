import { User } from "firebase/auth";

export const RESTORE_TOKEN = "RESTORE_TOKEN";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const LOADING = "LOADING";

export interface RestoreTokenAction {
    type: typeof RESTORE_TOKEN;
    user: User;
}

export interface SignInAction {
    type: typeof SIGN_IN;
    user: User;
}

export interface SignOutAction {
    type: typeof SIGN_OUT;
}

export interface LoadingAction {
    type: typeof LOADING;
}

export type AuthActionTypes = RestoreTokenAction | SignInAction | SignOutAction | LoadingAction;