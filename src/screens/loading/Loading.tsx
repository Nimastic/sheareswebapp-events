import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const Loading: React.FC = () => {
    return (
        <View style={styles.container}>
            <Button loading>Loading</Button>
        </View>
    );
}

export default Loading;