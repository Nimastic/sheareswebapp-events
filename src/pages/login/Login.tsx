import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    input: {
        width: "80%"
    },
    button: {
        width: "40%"
    },
});


const Login: React.FC = () => {
    const onLogin = () => { }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Sheares App</Text>
            <TextInput
                label="Email"
                style={styles.input}
                mode="outlined"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label="Password"
                style={styles.input}
                secureTextEntry
                mode="outlined"
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button style={styles.button} mode="outlined" onPress={onLogin}>
                Login
            </Button>
        </View>
    );
}

export default Login;