import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Header({ navigation, title }) {

    const openMenu = () => {
        Navigation.openDrawer();
    }

    return (
        <ImageBackground source={require('../../assets/Images/game_bg.png')} style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} styles={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../../assets/Images/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>Gamezone{title}</Text>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 20
    },
    headerTitle: {
        flexDirection: 'row',
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
})