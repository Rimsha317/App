import React, { useState } from 'react';
import { StyleSheet, View, Text,FlatList, TouchableOpacity } from 'react-native';
import {globalStyles} from './Styles/global';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
    { title: 'personal information', rating: 5, body: 'Player Name is Rimsha Mehmood ', key: '1'},
    { title: 'Game select', rating: 4, body: 'Counter Strike', key: '2'},
    { title: 'Level', rating: 3, body: '13', key: '3'},

    ]);

    return(
        <View style={globalStyles.container}>
            <FlatList
            data={reviews}
            renderItem={({ item }) => (
                <TouchableOpacity onPress = {() => navigation.navigate('ReviewDetails', item)}>
                <Text style={globalStyles.titleText}>{item.title} </Text>
                </TouchableOpacity>
            )}
        />
    </View>
)}