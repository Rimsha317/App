import { createStackNavigator } from 'react-navigation-stack';
import About from '../about';
import React from 'react';
import Header from '../Shared/header';

const Screens = {
    About: {
        screen: About,
        navigationOptions: {
            headerTitle: () => <Header />
        },
    },
}
   
const AboutStack = createStackNavigator(Screens, {
    defaultNavigationOptions: {
        headerTintColor: 'red',
        headerStyle: { backgroundColor: 'blue', height: 100},
        //same color
    }
});

export default AboutStack;