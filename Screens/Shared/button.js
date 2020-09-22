import React from 'react';
import { StyleSheet, TochableOpacity, Text, view, View } from 'react-native';

export default function FlashButton ({text, onPress }) {
    return(
        <TouchableOpacity onPress={}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{Text} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})