interface IAuthContext {
    signIn: (data: any) => Promise<void>;
    signOut: (data: any) => void;
}

interface AuthState {
    isLoading: boolean;
    isSignout: boolean;
    userToken: string | null;
}