import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../types/navigation.d';

const EventHighlights = () => {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<RootStackParamList, 'EventHighlights'>>();
    const { events } = route.params;

    const renderEventItem = ({ item }) => (
        <TouchableOpacity
            style={styles.eventItem}
            onPress={() => navigation.navigate('EventDetail', { event: item, events })}
        >
            <Image source={{ uri: item.imageUrl }} style={styles.eventImage} />
            <Text style={styles.eventTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={events}
            renderItem={renderEventItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    listContainer: {
        paddingHorizontal: 10,
    },
    eventItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    eventImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EventHighlights;
