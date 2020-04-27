import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import SImage from 'react-native-scalable-image';

import styles from '../styles/cvExamplesStyle';

class CVExamples extends React.Component {
    render() {
        return (
            <View style={styles.body}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('showCV')}><SImage width={170} style={{ margin: 10, marginTop: 25 }} source={require('../images/cvExamplesImg/templateCV1.png')} /></TouchableOpacity>
                        <TouchableOpacity><SImage width={170} style={{ margin: 10, marginTop: 25 }} source={require('../images/cvExamplesImg/templateCV2.png')} /></TouchableOpacity>
                        <TouchableOpacity><SImage width={170} style={{ margin: 10 }} source={require('../images/cvExamplesImg/templateCV3.png')} /></TouchableOpacity>
                        <TouchableOpacity><SImage width={170} style={{ margin: 10 }} source={require('../images/cvExamplesImg/templateCV4.png')} /></TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        )
    }
};

export default CVExamples;

/* */