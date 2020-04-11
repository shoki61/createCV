import React from 'react';
import { View, StatusBar, } from 'react-native';
import { observer } from 'mobx-react';

import Navigation from './src/navigation';
import SplashScreen from './src/views/splashScreen';
import helper from './src/controllers/helper';


class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='#235F98' />
        {
          helper.splashState ?
            <SplashScreen /> :
            <Navigation />
        }

      </View>
    )
  }
}


export default observer(App);
