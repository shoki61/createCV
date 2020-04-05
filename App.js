import React from 'react';
import { View, StatusBar, } from 'react-native';

import CVForm from './src/views/cvForm';


class App extends React.Component {
  render() {
    return (
      <View>
        <CVForm />
      </View>
    )
  }
}


export default App;
