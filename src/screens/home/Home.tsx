import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@tamagui/core';
import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { H1, H3, Text } from 'tamagui';
import AuthContext from '../../auth/AuthContext';
import EventsCarousel from '../../components/Home/EventsCarousel';
import HomeAnnouncement from '../../components/Home/HomeAnnouncement';
import { Announcement, User } from '../../types/interfaces';
import ModuleScreen from '../modules/ModuleScreen';

const Home: React.FC = () => {
    const theme = useTheme();
    const { signOut } = useContext(AuthContext);
    const navigation = useNavigation();
    
    const [user, setUser] = useState<User>({name: "TestUser"})
    const dummyAnnouncement = {
        header: "Test Announcement",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis massa rutrum, luctus dui eget, iaculis erat. Praesent sed lectus eu est dignissim tincidunt. Ut tincidunt tempor diam, nec egestas ipsum placerat eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nec enim sed metus fringilla consectetur. Ut dignissim pellentesque ligula, a maximus risus faucibus id. Mauris non convallis tortor. Phasellus tempor semper massa sed lobortis. Integer ultrices leo ut velit accumsan venenatis.",
        date: "05/02/2024",
    }
    const [announcements, setAnnouncments] = useState<Announcement[]>([dummyAnnouncement]);
    const [events, setEvents] = useState([
        {
            id: 'event-1',
            title: 'Event 1',
            description: 'This is the first event',
            // imageUrl: 'https://example.com/event1.jpg',
            imageUrl: 'https://www.nus.edu.sg/osa/images/default-source/osa/residential-options/2017-sheares-hall-2.jpg?sfvrsn=756f3508_2',
            date: '2024-02-15'
        },
        {
            id: 'event-2',
            title: 'Event 2',
            description: 'This is the second event',
            // imageUrl: 'https://example.com/event2.jpg',
            imageUrl: 'https://i.ytimg.com/vi/DKEJAON5TFk/maxresdefault.jpg',
            date: '2024-03-10'
        },
        {
            id: 'event-3',
            title: 'Event 3',
            description: 'This is the third event',
            // imageUrl: 'https://example.com/event3.jpg',
            imageUrl: 'https://nus.edu.sg/osa/images/default-source/sheares/facilities-and-rooms/5.png?sfvrsn=74017eae_2',
            date: '2024-03-20'
        },
        // ... more events
    ]);



    return (
        <ModuleScreen>
            <H1 style={styles.title}>Hey {user.name}!</H1>
            <H3>Announcements</H3>
            <HomeAnnouncement announcement={announcements[0]}/>
            <H3>Event Highlights</H3>
            <EventsCarousel events={events} navigation={navigation} />
            <Text>Open up App.js to start working on yopur app!home</Text>
            <StatusBar style="auto" />
            <Text onPress={async () => navigation.navigate('Calendar')}>
                CALENDAR
            </Text>
            <Text onPress={async () => await signOut()}>SIGN OUT</Text>
            {/* <BottomTabNavigator/> */}
        </ModuleScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginVertical: 40,
    },
    title: {
        fontWeight: "600"
    },
    announcementContainer: {
        marginVertical: 20,
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        border: "solid 1px blue",
        justifyContent: "center",
    },
    announcementText: {
        color: "white",
        padding: 10,
        paddingHorizontal: 20
    },
});

export default Home;
