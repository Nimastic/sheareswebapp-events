import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const EventsCarousel = ({ events, navigation }) => {
    

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <Image
                    source={{ uri: item.imageUrl }}
                    style={styles.itemImage}
                    resizeMode="cover"
                />
                {/* <Text style={styles.itemTitle}>{item.title}</Text> */}
                {/* <Text style={styles.itemDescription}>{item.description}</Text> */}
            </View>
        );
    };

    return (
        <View>
            <Carousel
                data={events}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
        />
            <TouchableOpacity onPress={() => navigation.navigate('EventHighlights', { events })}>
                <Text style={{ textAlign: 'center', margin: 20 }}>See All</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        paddingTop: 200,
    },
    itemImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    itemContainer: {
        marginTop: 50,
        marginLeft: -10,
        width: ITEM_WIDTH,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        borderRadius: 8,
    },
    itemTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 16,
    },
    seeAllButton: {
        marginTop: 20, // Adds space above the 'See All' button
    },
    seeAllText: {
        textAlign: 'center',
        margin: 20,
    },
});

export default EventsCarousel;
