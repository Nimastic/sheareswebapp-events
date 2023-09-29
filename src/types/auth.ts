import { User } from "firebase/auth";

export interface IAuthContext {
    signIn: (data: any) => Promise<void>;
    signOut: () => void;
}

export interface AuthState {
    isLoading: boolean;
    isSignout: boolean;
    user: User | null;
}