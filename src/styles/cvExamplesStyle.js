import { StyleSheet, Dimensions } from 'react-native';



const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
});

export default styles;