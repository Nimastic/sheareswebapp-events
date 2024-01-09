import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface NavigationSafeAreaViewProps {
    children: React.ReactNode;
}

const NavigationSafeAreaView: React.FC<NavigationSafeAreaViewProps> = ({ children }) => {
    // This SafeAreaView component is to ensure that IOS looks good 
    // https://reactnavigation.org/docs/handling-safe-area/
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            {children}
        </View>
    );
};

export default NavigationSafeAreaView;
