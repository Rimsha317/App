import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { globalStyles, images } from './Styles/global';

import Card from './Shared/Card'

export default function reviewDetails({ navigation }) {

    const rating = navigation.getParam('rating');

    return (

        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>Gamezone rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>

        </View>
    )
}

const styles = StyleSheet.create({

    rating: {

        flexDirection: "row",
        marginTop: 16,
        paddingTop: 16,
        justifyContent: "center",
        borderTopWidth: 1,

    }

})

