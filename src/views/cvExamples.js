import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import SImage from 'react-native-scalable-image';

import styles from '../styles/cvExamplesStyle';
import helper from "../controllers/helper";

const w = Dimensions.get('window').width;

class CVExamples extends React.Component {

    goSelectedColor(v, n, c) {
        helper.selectedCV = v
        helper.selectedOrderCV = n
        helper.selectedCVColor = c
        this.props.navigation.navigate('showCV')
    }



    render() {
        return (
            <View style={styles.body}>
                <View style={{ width: '100%', height: 50, backgroundColor: '#235F98', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ position: 'absolute', left: 15 }}>
                        <SImage width={20} source={require('../images/backIcon.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', fontSize: 20 }}>CV örnekleri</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40, marginTop: 5 }}>
                        <TouchableOpacity onPress={() => this.goSelectedColor(require('../images/cvExamplesImg/templateCV1E.png'), 1, '#407F92')}><SImage width={w / 2.4} style={{ margin: 10 }} source={require('../images/cvExamplesImg/templateCV1E.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goSelectedColor(require('../images/cvExamplesImg/templateCV2A.png'), 2, '#FFFFFF')}><SImage width={w / 2.4} style={{ margin: 10 }} source={require('../images/cvExamplesImg/templateCV2A.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goSelectedColor(require('../images/cvExamplesImg/templateCV3D.png'), 3, '#299BE8')}><SImage width={w / 2.4} style={{ margin: 10 }} source={require('../images/cvExamplesImg/templateCV3D.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goSelectedColor(require('../images/cvExamplesImg/templateCV4A.png'), 4, '#FFFFFF')}><SImage width={w / 2.4} style={{ margin: 10 }} source={require('../images/cvExamplesImg/templateCV4A.png')} /></TouchableOpacity>
                        <SImage style={{ margin: 10 }} source={require('../images/yakındaResim.png')} width={w / 2.4} />
                    </View>
                </ScrollView>

            </View>
        )
    }
};

export default CVExamples;

/* */