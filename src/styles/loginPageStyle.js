import { StyleSheet, Dimensions } from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;



const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null
    },
    inputContainer: {
        position: 'absolute',
        alignItems: 'center',
    },
    inputStyle: {
        width: 250,
        height: 45,
        backgroundColor: '#3279BC',
        color: '#fff',
        margin: 10,
        borderRadius: 5,
        fontSize: 18,
        padding: 0,
        paddingLeft: 15,
        paddingRight: 15,
        elevation: 6
    },
    loginButton: {
        width: 250,
        height: 48,
        backgroundColor: '#3088DC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        margin: 30,
        elevation: 8
    },
    loginText: {
        color: '#fff',
        fontSize: 18
    },
    signInText: {
        fontSize: 18,
        color: '#e3e3e3',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#f5f5f5"
    }

})

export default styles;
