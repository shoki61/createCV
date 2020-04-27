import { StyleSheet, Dimensions } from 'react-native';



const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const styles = StyleSheet.create({
    body: {
        width: w,
        minHeight: h,
        backgroundColor: '#f2f2f2',
    },
    backImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null
    },
});

export default styles;