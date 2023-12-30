type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Calendar: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}