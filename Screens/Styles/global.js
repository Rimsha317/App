import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        
        fontSize: 24,
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 4,
        borderColor: '#555',
        padding: 25,
        fontSize: 10,
        borderRadius: 6,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    }
});

export const images = {
    ratings: {
        '1' : require('../../assets/Images/rating-1.png'),
        '2' : require('../../assets/Images/rating-2.png'),
        '3' : require('../../assets/Images/rating-3.png'),
        '4' : require('../../assets/Images/rating-4.png'),
        '5' : require('../../assets/Images/rating-5.png'),
    }
}