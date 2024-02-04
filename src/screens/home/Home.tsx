import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@tamagui/core';
import { useContext, useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import AuthContext from '../../auth/AuthContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { H1, H2, H3, H6, YStack, XStack, Text } from 'tamagui';
import ModuleScreen from '../modules/ModuleScreen';
import { User, Announcement } from '../../types/interfaces';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAnnouncement from '../../components/Home/HomeAnnouncement';



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



    return (
        <ModuleScreen>
            <H1 style={styles.title}>Hey {user.name}!</H1>
            <YStack>
                <H3>Announcements</H3>
                <HomeAnnouncement announcement={announcements[0]}/>
                <H3>Event Highlights</H3>
            </YStack>
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
        marginVertical: 40
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
    }
});

export default Home;
