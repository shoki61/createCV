import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import SImage from 'react-native-scalable-image';
import { connect } from 'react-redux';

import styles from '../styles/cvExamplesStyle';
import helper from "../controllers/helper";
import { setCVType, setCVColor } from '../store/actions';
import * as actionType from '../store/actions/actionType';

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
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40, marginTop: 5 }}>
                    {
                        templates.map(cv => {
                            return (
                                <TouchableOpacity onPress={() => { props.selectedCV(cv.id, cv.source);goSelectedColor(cv.source, cv.id, cv.color) }}>
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

const mapDispatchToProps = dispatch => {
    return {
        selectedCV:(cvId, cvType)=>dispatch(setCVType(actionType.SELECTED_CV,cvId, cvType ))
    }
}

export default connect(null, mapDispatchToProps)(CVExamples);

