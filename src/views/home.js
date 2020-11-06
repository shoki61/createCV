import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { observer } from 'mobx-react';


import styles from '../styles/homeStyle';
import Button from '../components/Button/Button';


const w = Dimensions.get('window').width;

const Home = (props) => {



        return (
            <View style={styles.body}>
                <Image style={styles.backImage} source={require('../images/homeBackImage.png')} />
                <View style={{ position: 'absolute', alignItems: 'center' }}>
                    <Button
                        style={{width:w/1.5, height:55,backgroundColor:'#3088DC',borderRadius:100}}
                        clicked={()=>props.navigation.navigate('cvExamples')}
                    >
                        <Text style={styles.createText}>
                            CV'nizi oluşturun
                        </Text>
                    </Button>
                </View>
            </View>
        )
    
}


export default observer(Home);
