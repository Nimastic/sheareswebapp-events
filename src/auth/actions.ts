import * as types from './types';

export function restoreTokenAction(token: string): types.RestoreTokenAction {
    return {
      type: types.RESTORE_TOKEN,
      token,
    };
  }

  export function signInAction(token: string): types.SignInAction {
    return {
      type: types.SIGN_IN,
      token,
    };
  }
  
  export function signOutAction(): types.SignOutAction {
    return {
      type: types.SIGN_OUT
    };
  }
  