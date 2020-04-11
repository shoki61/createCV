import React from 'react';
import { View, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { observer } from 'mobx-react';


import styles from '../styles/homeStyle';
import helper from '../controllers/helper';


class Home extends React.Component {



    logoutFunc() {
        AsyncStorage.removeItem('userToken')
        helper.setToken();
    }


    render() {
        return (
            <View style={styles.body}>
                <Image style={styles.backImage} source={require('../images/homeBackImage.png')} />
                <View style={{ position: 'absolute', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('cvForm')} style={styles.createCVButton}>
                        <Text style={styles.createText}>
                            {
                                helper.userToken === null ?
                                    "CV'inizi oluşturun" :
                                    'Yeni CV oluştur'
                            }
                        </Text>
                    </TouchableOpacity>
                    {
                        helper.userToken === null &&
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('loginPage')} style={{ marginTop: 40, marginBottom: 20 }}>
                                <Text style={styles.loginText}>Giriş yap</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('signInPage')}>
                                <Text style={styles.signInText}>Kaydol</Text>
                            </TouchableOpacity>

                        </View>
                    }
                    {
                        helper.userToken !== null &&
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('myCVs')} style={styles.myCVsButton}>
                            <Text style={styles.myCVsText}>CV'lerim</Text>
                        </TouchableOpacity>
                    }
                </View>
                {
                    helper.userToken !== null &&
                    <TouchableOpacity onPress={() => this.logoutFunc()} style={styles.logoutButton}>
                        <Text style={styles.logoutText}>Çıkış yap</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}


export default observer(Home);
