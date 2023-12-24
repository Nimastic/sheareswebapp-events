import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthContext from '../../auth/AuthContext';
import { firebaseAuth } from '../../../firebaseConfig';

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
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on yopur app!home</Text>
            <StatusBar style="auto" />
            <Text onPress={async () => await signOut()}>SIGN OUT</Text>
        </View>
    );
};

export default Home;
