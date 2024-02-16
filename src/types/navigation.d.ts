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
    CalendarEventNew: {
        date: DateData;
    };
    Tab: undefined;
    Announcement: undefined;
    EventDetail: EventDetailRouteParams;
    EventHighlights: EventHighlightsParams;
};

export type Event = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string
};

export type EventDetailRouteParams = {
    event: Event;
    events: Event[];
};

export type EventHighlightsParams = {
    events: Event[];
};