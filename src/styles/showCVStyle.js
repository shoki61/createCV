import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
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
        alignItems: 'center'
    },
    buttonStyle: {
        width: 150,
        height: 45,
        backgroundColor: '#34d198',
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