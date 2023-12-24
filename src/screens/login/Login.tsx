import { Button, H2, Text, XStack, YStack, useTheme } from 'tamagui';

interface LoginProps {
    promptAsync: () => {};
}

const Login: React.FC<LoginProps> = ({ promptAsync }) => {
    const theme = useTheme();
    return (
        <YStack
            fullscreen
            flex={1}
            alignItems="center"
            justifyContent="center"
            gap="$4"
            backgroundColor={theme.white}
        >
            <XStack paddingHorizontal="$5">
                <H2>Log in</H2>
            </XStack>
            <XStack paddingHorizontal="$5">
                <Text>Welcome back!</Text>
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
    );
};

export default Login;
