import React from 'react' ;
import { Stylesheet, Text, View } from 'react-native';


export default function Header() {
    return(
        <View style={styles.header}>
            </View>
                <Text style={styles.headerText}>GameZone Header</Text>
            </View>
        </View>
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
        letterspacing: 1,
    },
});