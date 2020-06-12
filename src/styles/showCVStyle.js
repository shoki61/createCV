import { StyleSheet, Dimensions } from 'react-native';

const w = Dimensions.get('window').width;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    changeColorButton: {
        width: 35,
        height: 35,
        margin: 5,
        borderRadius: 100,
        borderColor: '#dedede',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 7
    },
    buttonStyle: {
        width: w / 1.3,
        height: 45,
        backgroundColor: '#ff9157',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
});

export default styles;