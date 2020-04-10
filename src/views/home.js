import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from '../styles/homeStyle';


class Home extends React.Component {
    render() {
        return (
            <View style={styles.body}>
                <Image style={styles.backImage} source={require('../images/homeBackImage.png')} />
                <View style={{ position: 'absolute', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('cvForm')} style={styles.createCVButton}>
                        <Text style={styles.createText}>CV'inizi oluşturun</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 40 }}>
                        <Text style={styles.signInText}>Kaydol</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default Home;
