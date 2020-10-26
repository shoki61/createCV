import React from 'react';
import { View, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { observer } from 'mobx-react';


import styles from '../styles/homeStyle';


const Home = (props) => {

        return (
            <View style={styles.body}>
                <Image style={styles.backImage} source={require('../images/homeBackImage.png')} />
                <View style={{ position: 'absolute', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('cvExamples')} style={styles.createCVButton}>
                        <Text style={styles.createText}>
                            CV'nizi oluşturun
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    
}


export default observer(Home);
