
import React from 'react'
import {View,Text,StyleSheet} from 'react-native'




const Card=(props)=>{


    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )

}


const styles=StyleSheet.create({

    card:{

        borderRadius:6,
        elevation:3,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.3,
        shadowRadius:3,
        marginHorizontal:4,
        marginVertical:6,
        shadowColor:"black"
    },
    cardContent:{

        marginHorizontal:17,
        marginVertical:16,  
    }


})

export default Card;