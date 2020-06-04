import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import SImage from 'react-native-scalable-image';

import styles from '../styles/cvExamplesStyle';
import helper from "../controllers/helper";



class CVExamples extends React.Component {

    goSelectedColor(v, n) {
        helper.selectedCV = v
        helper.selectedOrderCV = n
        helper.selectedCVColor = '#2A2A2A'
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
                        <TouchableOpacity onPress={() => this.goSelectedColor(require('../images/cvExamplesImg/templateCV1.png'), 1)}><SImage width={160} style={{ margin: 10 }} source={require('../images/cvExamplesImg/templateCV1.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goSelectedColor(require('../images/cvExamplesImg/templateCV2.png'), 2)}><SImage width={160} style={{ margin: 10 }} source={require('../images/cvExamplesImg/templateCV2.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goSelectedColor(require('../images/cvExamplesImg/templateCV3.png'), 3)}><SImage width={160} style={{ margin: 10 }} source={require('../images/cvExamplesImg/templateCV3.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goSelectedColor(require('../images/cvExamplesImg/templateCV4.png'), 4)}><SImage width={160} style={{ margin: 10 }} source={require('../images/cvExamplesImg/templateCV4.png')} /></TouchableOpacity>
                        <SImage style={{ margin: 10 }} source={require('../images/yakındaResim.png')} width={160} />
                    </View>
                </ScrollView>

            </View>
        )
    }
};

export default CVExamples;

/* */