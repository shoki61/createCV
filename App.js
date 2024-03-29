import React from 'react';
import { View, StatusBar, } from 'react-native';
import { observer } from 'mobx-react';

import Navigation from './src/navigation';


class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='#235F98' />

        <Navigation />


      </View>
    )
  }
}


export default observer(App);
