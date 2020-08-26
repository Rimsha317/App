import { createStackNavigator } from 'react-navigation-stack';
import About from '../About';

const Screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About Gamezone',
            //headerStyle: { backgroundColor: '#4de'}
        }
    },
}
   
const AboutStack = createStackNavigator(Screens, {
    defaultNavigationOptions: {
        headerTintColor: 'red',
        headerStyle: { backgroundColor: 'blue', height: 100}
        //same color
    }
});

export default AboutStack;