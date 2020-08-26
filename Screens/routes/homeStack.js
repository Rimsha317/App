import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Home'
import ReviewDetails from '../reviewDetails'

import Header from '../Shared/header'

 
const Screens = {
    Home1: {
        screen: Home,
        navigationOptions:()=> {

            return {

                headerTitle: () => <Header />,

            }
           

        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',

        }
    }
}

const HomeStack = createStackNavigator(Screens, {
    defaultNavigationOptions: {
        headerTintColor: 'red',
        headerStyle: { backgroundColor: 'blue', height: 100 }
        //same color

    }
});

export default HomeStack;