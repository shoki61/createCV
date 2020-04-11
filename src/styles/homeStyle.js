import { StyleSheet, Dimensions } from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        width: w,
        height: h,
        alignItems: 'center',
        justifyContent: 'center'
    },
    createCVButton: {
        elevation: 10,
        width: w / 2,
        height: 55,
        borderRadius: 8,
        backgroundColor: '#3088DC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    createText: {
        color: '#fff',
        fontSize: 20
    },
    loginText: {
        fontSize: 18,
        color: '#e3e3e3',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#f5f5f5"
    },
    signInText: {
        fontSize: 18,
        color: '#e3e3e3',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#f5f5f5"
    },
    backImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null
    },
    myCVsButton: {
        width: 100,
        height: 35,
        backgroundColor: '#368bad',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        elevation: 7
    },
    myCVsText: {
        color: '#fff',
        fontSize: 15
    },
    logoutButton: {
        position: 'absolute',
        top: 15,
        right: 20
    },
    logoutText: {
        color: '#dbdbdb',
        fontSize: 18
    }
})

export default styles;
