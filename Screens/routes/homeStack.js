import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Home'
import ReviewDetails from '../reviewDetails'

const Screens = {
    Home1: {
        screen: Home,
        navigationOptions: {
            title: 'Gamezone',
            //headerStyle: { backgroundColor: '#4de'}
        }
    },
    ReviewDetails: {
        screen : ReviewDetails,
        navigationOptions: {
            title: 'ReviewDetails',
            //headerStyle: { backgroundColor: 'pink' }
        }
    }    
}

const homeStack = createStackNavigator(Screens, {
    defaultNavigationOptions: {
        headerTintColor: 'red',
        headerStyle: { backgroundColor: 'blue', height: 100}
        //same color

    }
});

export default homeStack;