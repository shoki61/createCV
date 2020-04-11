import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, AsyncStorage } from 'react-native';
import axios from 'axios';

import styles from '../styles/signInPageStyle';
import helper from '../controllers/helper';

class SignInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
        }
    }

    signInFunc() {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB925pdgBIXm8iayS1Nq5m1y9NBH65p0w4',
            { email: this.state.userEmail, password: this.state.userPassword, returnSecureToken: true }
        ).then(response => {
            AsyncStorage.setItem('userToken', response.data.localId)
            helper.setToken()
            this.props.navigation.navigate('home')
        }).catch((err) => alert(err))
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
                        style={styles.inputStyle} />

                    <TextInput
                        placeholderTextColor='#c4c4c4'
                        placeholder='şifreniz...'
                        onChangeText={(text) => this.setState({ userPassword: text })}
                        style={styles.inputStyle} />
                    <TouchableOpacity onPress={() => this.signInFunc()} style={styles.loginButton}>
                        <Text style={styles.loginText}>Kaydol</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('loginPage')}>
                        <Text style={styles.signInText}>Giriş yap</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
};

export default SignInPage;
