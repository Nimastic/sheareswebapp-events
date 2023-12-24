import { StatusBar } from 'expo-status-bar';
import { useState, useContext } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import AuthContext from '../../auth/AuthContext';
import { Button, Theme, XStack, YStack } from 'tamagui';

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

interface LoginProps {
    promptAsync: () => {};
}

const Login: React.FC<LoginProps> = ({ promptAsync }) => {

    return (
        <SafeAreaView
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <YStack>
                <XStack>
                    <Theme name="light">
                        <Button size="$6" theme="orange" 
                        onPress={() => promptAsync()}>Sign In with Google</Button>
                    </Theme>
                </XStack>
            </YStack>
        </SafeAreaView>
    );
}

export default Login;