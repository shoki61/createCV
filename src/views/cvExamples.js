import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import SImage from 'react-native-scalable-image';

import styles from '../styles/cvExamplesStyle';
import helper from "../controllers/helper";

const w = Dimensions.get('window').width;

const CVExamples = (props) => {

    const goSelectedColor = (source, id, color) => {
        helper.selectedCV = source;
        helper.selectedOrderCV = id;
        helper.selectedCVColor = color;
        props.navigation.navigate('showCV');
    }

    const templates = [
        { id: 1, color: '#407F92', source: require('../images/cvExamplesImg/templateCV1E.png') },
        { id: 2, color: '#FFFFFF', source: require('../images/cvExamplesImg/templateCV2A.png') },
        { id: 3, color: '#299BE8', source: require('../images/cvExamplesImg/templateCV3D.png') },
        { id: 4, color: '#FFFFFF', source: require('../images/cvExamplesImg/templateCV4A.png') }
    ]



    return (
        <View style={styles.body}>
            <View style={{ width: '100%', height: 50, backgroundColor: '#235F98', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ position: 'absolute', left: 5,width:40,height:30,alignItems:'center',justifyContent:'center' }}>
                    <SImage width={20} source={require('../images/backIcon.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#fff', fontSize: 20 }}>CV örnekleri</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40, marginTop: 5 }}>
                    {
                        templates.map(cv => {
                            return (
                                <TouchableOpacity onPress={() => goSelectedColor(cv.source, cv.id, cv.color)}>
                                    <SImage width={w / 2.4} style={{ margin: 10 }} source={cv.source} />
                                </TouchableOpacity>
                            )
                        })
                    }
                    
                    <SImage style={{ margin: 10 }} source={require('../images/yakındaResim.png')} width={w / 2.4} />
                </View>
            </ScrollView>

        </View>
    )
    
};

export default CVExamples;

