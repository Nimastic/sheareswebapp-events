import { XStack, YStack, Text, H6 } from "tamagui";
import { StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";


const HomeAnnouncement = ({announcement}) => {

    const navigation = useNavigation();
    
    return <XStack backgroundColor="$orange" style={styles.announcementContainer}>
        <YStack style={styles.announcementText} onPress={() => navigation.navigate("Announcement")}>
            <H6 color={'white'}>{announcement.header}</H6>
            <Text color={'white'}>
                {announcement.body.length > 100 ? announcement.body.slice(0, 100) : announcement.body}
            </Text>
        </YStack>

        <YStack alignItems='center' justifyContent='center'>
            <Text>
                <Entypo name="chevron-right" size={30} color="white"/>
            </Text>
        </YStack>
    </XStack>
}

const styles = StyleSheet.create({

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

export default HomeAnnouncement;