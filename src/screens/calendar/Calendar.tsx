import NavigationSafeAreaView from '../../components/NavigationSafeAreaView';
import { CalendarList, DateData } from 'react-native-calendars';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { useEffect, useState } from 'react';
import { MarkedDates } from 'react-native-calendars/src/types';

const Calendar: React.FC = () => {
    const navigation =
        useNavigation<StackNavigationProp<RootStackParamList, 'Calendar'>>();

    const [markedDates, setMarkedDates] = useState<MarkedDates>({});

    const timeToString = (time: number) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    };

    const today = timeToString(new Date().getTime());

    const onDayPress = (date: DateData) => {
        navigation.navigate('CalendarDay', { date: date });
    };

    const shearesEventDot = {
        key: 'sheares',
        color: 'orange',
    };
    const personalEventDot = {
        key: 'personal',
        color: 'blue',
    };

    useEffect(() => {
        // Get Sheares Events
        const shearesEvents = {};
        // Get Personal Events
        const personalEvents = {};

        const combinedMarkedDates: MarkedDates = {
            '2023-12-15': {
                dots: [shearesEventDot, personalEventDot],
            },
            '2024-01-15': { dots: [shearesEventDot, personalEventDot] },
        };

        // Update State
        setMarkedDates(combinedMarkedDates);
    }, []);

    return (
        <NavigationSafeAreaView>
            <CalendarList
                current={today}
                onDayPress={onDayPress}
                markingType="multi-dot"
                markedDates={markedDates}
            ></CalendarList>
        </NavigationSafeAreaView>
    );
};

export default Calendar;
