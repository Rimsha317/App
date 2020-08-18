import React, {useState} from 'react';
import * as Font from 'expo-font';
import Home from './Screens/Home'
import {AppLoading} from 'expo';

const getFonts = () => Font.loadAsync({
  'nunito-bold' : require('./assets/Fonts/Nunito-Bold.ttf'),
  'nunito-regular' : require('./assets/Fonts/Nunito-Regular.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
      return (
        <Home />
      );
    }
     else {
    return(      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
} 

}
