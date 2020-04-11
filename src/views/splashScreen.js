import React from 'react';
import { View, Text, Image } from 'react-native';
import helper from '../controllers/helper';

class SplashScreen extends React.Component {
    componentWillMount = async () => {
        await helper.setToken();
        setTimeout(() => {
            helper.splashState = false
        }, 2500)

    }
    render() {
        return (
            <View>
                <Text>Salam</Text>
            </View>
        )
    }
};

export default SplashScreen;
