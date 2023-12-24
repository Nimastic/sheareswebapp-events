import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text } from 'tamagui';

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
            <Text>Loading...</Text>
        </View>
    );
};

export default Loading;
