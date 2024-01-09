declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

import { DateData } from 'react-native-calendars';

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Calendar: undefined;
    CalendarDay: {
        date: DateData;
    };
};
