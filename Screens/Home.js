import React, { useState } from 'react';
import { StyleSheet, View, Text,FlatList, TouchableOpacity, Modal } from 'react-native';
import {globalStyles} from './Styles/global';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    const [modalOpen, setModalopen] = useState(false);
    const [reviews, setReviews] = useState([
    { title: 'personal information', rating: 5, body: 'Player Name is Rimsha Mehmood ', key: '1'},
    { title: 'Game select', rating: 4, body: 'Counter Strike', key: '2'},
    { title: 'Level', rating: 3, body: '13', key: '3'},

    ]);

    return(
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <View style= {StyleSheet.modalContent}>
                 <MaterialIcons
                  name='close'
                  size={24}
                  style={style.modalToggle}
                  onPress={() => setModalopen(false) }
                /> 
                <Text>Hello from the Modal :)</Text>
              </View>
            </Modal>

            <MaterialIcons
            name='add'
            size={24}
            style={style.modalToggle}
            onPress={() => setModalopen(true) }
            />




            <FlatList
            data={reviews}
            renderItem={({ item }) => (
                <TouchableOpacity onPress = {() => navigation.navigate('ReviewDetails', item)}>
                <Text style={globalStyles.titleText}>{item.title} </Text>
                </TouchableOpacity>
            )}
        />
    </View>
)

}

const Styles= StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    }
})








