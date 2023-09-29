import { User } from 'firebase/auth';
import * as types from './types';

export function restoreTokenAction(user: User): types.RestoreTokenAction {
    return {
      type: types.RESTORE_TOKEN,
      user,
    };
  }

  export function signInAction(user: User): types.SignInAction {
    return {
      type: types.SIGN_IN,
      user,
    };
  }
  
  export function signOutAction(): types.SignOutAction {
    return {
      type: types.SIGN_OUT
    };
  }
  
  export function loadingAction(): types.LoadingAction {
    return {
      type: types.LOADING
    };
  }
  