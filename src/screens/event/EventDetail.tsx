import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EventDetailRouteParams, RootStackParamList } from '../../types/navigation.d';


const SLIDER_WIDTH = Dimensions.get('window').width * 0.8;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);


const EventDetail = () => {
    const route = useRoute<RouteProp<{ params: EventDetailRouteParams }, 'params'>>();
    const route2 = useRoute<RouteProp<RootStackParamList, 'EventHighlights'>>();
    const { event } = route.params; // Now you get both the selected event and the events array
    const { events } = route2.params;

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.title}</Text>
                {/* You can add more event details here */}
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{event.title}</Text>
                    <Image source={{ uri: event.imageUrl }} style={styles.image} />
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>{event.description}</Text>
                </View>
                {/* Carousel with swipeable list of events */}
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Event Highlights</Text>
                </View>
                <FlatList
                    horizontal
                    data={events}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={true}
                    contentContainerStyle={styles.listContentContainer}
                />
            </ScrollView>
            
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    listContentContainer: {
        alignItems: 'center',
    },
    itemContainer: {
        backgroundColor: 'white',
        //borderRadius: 8,
        width: ITEM_WIDTH * 0.6,
        height: 150,
        padding: 10,
    },
    cardImage: {
        width: 160,
        height: 100,
        borderRadius: 5,
    },
    carouselContainer: {
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        marginHorizontal: 20,
    },
    headerContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: 10,
    },
    image: {
        width: '100%',
        height: 200, // Set your image height
        borderRadius: 12, // Round the corners of the image
    },
    descriptionContainer: {
        marginBottom: 20,
    },
    descriptionText: {
        fontSize: 16,
        color: 'grey',
    },
    button: {
        backgroundColor: 'orange', // Use the color that matches your design
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default EventDetail;
