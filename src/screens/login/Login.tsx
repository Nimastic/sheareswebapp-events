import { Button, H2, Text, XStack, YStack, useTheme } from 'tamagui';
import NavigationSafeAreaView from '../../components/NavigationSafeAreaView';

interface LoginProps {
    promptAsync: () => {};
}

const Login: React.FC<LoginProps> = ({ promptAsync }) => {
    const theme = useTheme();
    return (
        <NavigationSafeAreaView>
            <YStack
                fullscreen
                flex={1}
                alignItems="center"
                justifyContent="center"
                gap="$4"
            >
                <XStack paddingHorizontal="$5">
                    <H2 color={theme.black}>Log in</H2>
                </XStack>
                <XStack paddingHorizontal="$5">
                    <Text color={theme.black}>Welcome back!</Text>
                </XStack>
                <XStack alignSelf="center">
                    <Button
                        size="$6"
                        onPress={() => promptAsync()}
                        backgroundColor={theme.orange}
                        color={theme.white}
                    >
                        Sign In with Google
                    </Button>
                </XStack>
            </YStack>
        </NavigationSafeAreaView>
    );
};

export default Login;
