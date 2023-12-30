import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthContext from '../../auth/AuthContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Home: React.FC = () => {
    const { signOut } = useContext(AuthContext);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on yopur app!home</Text>
            <StatusBar style="auto" />
            <Text onPress={async () => navigation.navigate('Calendar')}>CALENDAR</Text>
            <Text onPress={async () => await signOut()}>SIGN OUT</Text>
        </View>
    );
};

export default Home;
