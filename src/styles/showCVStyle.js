import { StyleSheet, Dimensions } from 'react-native';

const w = Dimensions.get('window').width;

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    changeColorButton: {
        width: 50,
        height: 50,
        margin: 5,
        borderRadius:100,
        borderColor: '#dedede',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 15
    },
    buttonStyle: {
        width: w / 1.5,
        height: 50,
        backgroundColor: '#ff9157',
        borderRadius: 100
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
});

export default styles;