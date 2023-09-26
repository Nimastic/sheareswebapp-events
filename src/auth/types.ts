export const RESTORE_TOKEN = "RESTORE_TOKEN";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export interface RestoreTokenAction {
    type: typeof RESTORE_TOKEN;
    token: string;
}

export interface SignInAction {
    type: typeof SIGN_IN;
    token: string;
}

export interface SignOutAction {
    type: typeof SIGN_OUT;
}

export type AuthActionTypes = RestoreTokenAction | SignInAction | SignOutAction;