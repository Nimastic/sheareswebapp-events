import { Button, H2, Text, XStack, YStack } from 'tamagui'

interface LoginProps {
    promptAsync: () => {}
}

const Login: React.FC<LoginProps> = ({ promptAsync }) => {
    return (
        <YStack
            fullscreen
            flex={1}
            alignItems="center"
            justifyContent="center"
            gap="$4"
        >
            <XStack paddingHorizontal="$5">
                <H2>Log in</H2>
            </XStack>
            <XStack paddingHorizontal="$5">
                <Text>Welcome back!</Text>
            </XStack>
            <XStack alignSelf="center">
                <Button size="$6" theme="orange" onPress={() => promptAsync()}>
                    Sign In with Google
                </Button>
            </XStack>
        </YStack>
    )
}

export default Login
