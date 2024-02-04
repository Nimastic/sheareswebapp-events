import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ModuleScreen = ({children}) => {

    return <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fff',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
});

export default ModuleScreen;