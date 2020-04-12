import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, AsyncStorage } from 'react-native';
import axios from 'axios';
import AlertPro from "react-native-alert-pro";

import styles from '../styles/loginPageStyle';
import helper from '../controllers/helper';


class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',

            warningEmail: false,
            warningPassword: false,
        }
    }


    loginFunc = async () => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB925pdgBIXm8iayS1Nq5m1y9NBH65p0w4',
            { email: this.state.userEmail, password: this.state.userPassword, returnSecureToken: true }
        ).then(response => {
            AsyncStorage.setItem('userToken', response.data.localId)
            helper.setToken()
            this.props.navigation.navigate('home')
        }).catch(() => this.AlertPro.open())

        if (this.state.userEmail === '' || this.state.userPassword === '') {
            this.setState({ warningEmail: true });
            this.setState({ warningPassword: true })
        }

    }

    render() {
        return (
            <View style={styles.Container}>
                <Image style={styles.backImage} source={require('../images/homeBackImage.png')} />

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='e-postanız...'
                        placeholderTextColor='#c4c4c4'
                        onChangeText={(text) => this.setState({ userEmail: text })}
                        style={[styles.inputStyle, this.state.warningEmail && this.state.userEmail === '' && styles.backRed]} />

                    <TextInput
                        placeholderTextColor='#c4c4c4'
                        placeholder='şifreniz...'
                        onChangeText={(text) => this.setState({ userPassword: text })}
                        style={[styles.inputStyle, this.state.warningPassword && this.state.userPassword === '' && styles.backRed]} />
                    <TouchableOpacity onPress={() => this.loginFunc()} style={styles.loginButton}>
                        <Text style={styles.loginText}>Giriş yap</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('signInPage')}>
                        <Text style={styles.signInText}>Kaydol</Text>
                    </TouchableOpacity>
                </View>


                <AlertPro
                    ref={ref => {
                        this.AlertPro = ref;
                    }}
                    onConfirm={() => this.AlertPro.close()}
                    title="Hata"
                    message="Email yada şifreniz hatalı"
                    textConfirm='TAMAM'
                    showConfirm
                    showCancel={false}
                    customStyles={{
                        mask: {
                            backgroundColor: "transparent"
                        },
                        container: {
                            borderWidth: 1,
                            borderRadius: 8,
                            borderColor: '#5181fc',
                            width: 300
                        },
                        title: {
                            fontSize: 18,
                            color: '#545454',
                        },
                        buttonConfirm: {
                            backgroundColor: 'green',
                        },
                        message: {
                            color: '#2f6478',
                        }
                    }}
                />




            </View>
        )
    }
};

export default LoginPage;
