import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, AsyncStorage } from 'react-native';
import axios from 'axios';
import AlertPro from "react-native-alert-pro";
import SImage from 'react-native-scalable-image';


import styles from '../styles/signInPageStyle';
import helper from '../controllers/helper';

class SignInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',

            warningEmail: false,
            warningPassword: false,
        }
    }

    signInFunc() {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB925pdgBIXm8iayS1Nq5m1y9NBH65p0w4',
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('home')} style={{ position: 'absolute', top: 15, left: 15 }}>
                    <SImage width={20} source={require('../images/backIcon.png')} />
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='e-postanız...'
                        placeholderTextColor='#c4c4c4'
                        onChangeText={(text) => this.setState({ userEmail: text })}
                        style={[styles.inputStyle, this.state.warningEmail && this.state.userEmail === '' && styles.backRed]} />

                    <TextInput
                        placeholderTextColor='#c4c4c4'
                        placeholder='şifreniz...'
                        placeholderTextColor='#fff'
                        onChangeText={(text) => this.setState({ userPassword: text })}
                        style={[styles.inputStyle, this.state.warningPassword && this.state.userPassword === '' && styles.backRed]} />
                    <TouchableOpacity onPress={() => this.signInFunc()} style={styles.loginButton}>
                        <Text style={styles.loginText}>Kaydol</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('loginPage')}>
                        <Text style={styles.signInText}>Giriş yap</Text>
                    </TouchableOpacity>
                </View>
                <AlertPro
                    ref={ref => {
                        this.AlertPro = ref;
                    }}
                    onConfirm={() => this.AlertPro.close()}
                    title="Hata"
                    message={this.state.userEmail === '' || this.state.userPassword === '' ? 'Lütfen boşlukları doldurunuz' : 'Girdiğiniz Email hatalı'}
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

export default SignInPage;
