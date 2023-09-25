import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on yopur app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

export default Home;