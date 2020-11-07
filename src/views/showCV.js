import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import SImage from 'react-native-scalable-image';
import { observer } from 'mobx-react';
import { connect } from 'react-redux';


import styles from '../styles/showCVStyle';
import helper from '../controllers/helper';
import Button from '../components/Button/Button';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ShowCV = (props) => {


    const changeColorCV = (v) => {
        if (props.cvId === 1) {
            switch (v) {
                case '#2A2A2A':
                    props.setCVType(require('../images/cvExamplesImg/templateCV1.png'))
                    props.setCVColor('#2A2A2A')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV1.png'))
                    helper.selectedCVColor = '#2A2A2A'
                    break;
                case '#FFFFFF':
                    props.setCVType(require('../images/cvExamplesImg/templateCV1A.png'))
                    props.setCVColor('#FFFFFF')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV1A.png'))
                    helper.selectedCVColor = '#FFFFFF'
                    break;
                case '#12A3D0':
                    props.setCVType(require('../images/cvExamplesImg/templateCV1B.png'))
                    props.setCVColor('#12A3D0')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV1B.png'))
                    helper.selectedCVColor = '#12A3D0'
                    break;
                case '#FF7373':
                    props.setCVType(require('../images/cvExamplesImg/templateCV1C.png'))
                    props.setCVColor('#FF7373')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV1C.png'))
                    helper.selectedCVColor = '#FF7373'
                    break;
                case '#299BE8':
                    props.setCVType(require('../images/cvExamplesImg/templateCV1D.png'))
                    props.setCVColor('#299BE8')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV1D.png'))
                    helper.selectedCVColor = '#299BE8'
                    break;
                case '#407F92':
                    props.setCVType(require('../images/cvExamplesImg/templateCV1E.png'))
                    props.setCVColor('#407F92')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV1E.png'))
                    helper.selectedCVColor = '#407F92'
                    break;
            }
        }
        else if (props.cvId === 2) {
            switch (v) {
                case '#2A2A2A':
                    props.setCVType(require('../images/cvExamplesImg/templateCV2.png'))
                    props.setCVColor('#2A2A2A')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV2.png'))
                    helper.selectedCVColor = '#2A2A2A'
                    break;
                case '#FFFFFF':
                    props.setCVType(require('../images/cvExamplesImg/templateCV2A.png'))
                    props.setCVColor('#FFFFFF')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV2A.png'))
                    helper.selectedCVColor = '#FFFFFF'
                    break;
                case '#12A3D0':
                    props.setCVType(require('../images/cvExamplesImg/templateCV2B.png'))
                    props.setCVColor('#12A3D0')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV2B.png'))
                    helper.selectedCVColor = '#12A3D0'
                    break;
                case '#FF7373':
                    props.setCVType(require('../images/cvExamplesImg/templateCV2C.png'))
                    props.setCVColor('#FF7373')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV2C.png'))
                    helper.selectedCVColor = '#FF7373'
                    break;
                case '#299BE8':
                    props.setCVType(require('../images/cvExamplesImg/templateCV2D.png'))
                    props.setCVColor('#299BE8')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV2D.png'))
                    helper.selectedCVColor = '#299BE8'
                    break;
                case '#407F92':
                    props.setCVType(require('../images/cvExamplesImg/templateCV2E.png'))
                    props.setCVColor('#407F92')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV2E.png'))
                    helper.selectedCVColor = '#407F92'
                    break;
            }
        }
        else if (props.cvId === 3) {
            switch (v) {
                case '#2A2A2A':
                    props.setCVType(require('../images/cvExamplesImg/templateCV3.png'))
                    props.setCVColor('#2A2A2A')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV3.png'))
                    helper.selectedCVColor = '#2A2A2A'
                    break;
                case '#FFFFFF':
                    props.setCVType(require('../images/cvExamplesImg/templateCV3A.png'))
                    props.setCVColor('#FFFFFF')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV3A.png'))
                    helper.selectedCVColor = '#FFFFFF'
                    break;
                case '#12A3D0':
                    props.setCVType(require('../images/cvExamplesImg/templateCV3B.png'))
                    props.setCVColor('#12A3D0')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV3B.png'))
                    helper.selectedCVColor = '#12A3D0'
                    break;
                case '#FF7373':
                    props.setCVType(require('../images/cvExamplesImg/templateCV3C.png'))
                    props.setCVColor('#FF7373')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV3C.png'))
                    helper.selectedCVColor = '#FF7373'
                    break;
                case '#299BE8':
                    props.setCVType(require('../images/cvExamplesImg/templateCV3D.png'))
                    props.setCVColor('#299BE8')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV3D.png'))
                    helper.selectedCVColor = '#299BE8'
                    break;
                case '#407F92':
                    props.setCVType(require('../images/cvExamplesImg/templateCV3E.png'))
                    props.setCVColor('#407F92')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV3E.png'))
                    helper.selectedCVColor = '#407F92'
                    break;
            }
        }
        else if (props.cvId === 4) {
            switch (v) {
                case '#2A2A2A':
                    props.setCVType(require('../images/cvExamplesImg/templateCV4.png'))
                    props.setCVColor('#2A2A2A')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV4.png'))
                    helper.selectedCVColor = '#2A2A2A'
                    break;
                case '#FFFFFF':
                    props.setCVType(require('../images/cvExamplesImg/templateCV4A.png'))
                    props.setCVColor('#FFFFFF')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV4A.png'))
                    helper.selectedCVColor = '#FFFFFF'
                    break;
                case '#12A3D0':
                    props.setCVType(require('../images/cvExamplesImg/templateCV4B.png'))
                    props.setCVColor('#12A3D0')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV4B.png'))
                    helper.selectedCVColor = '#12A3D0'
                    break;
                case '#FF7373':
                    props.setCVType(require('../images/cvExamplesImg/templateCV4C.png'))
                    props.setCVColor('#FF7373')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV4C.png'))
                    helper.selectedCVColor = '#FF7373'
                    break;
                case '#299BE8':
                    props.setCVType(require('../images/cvExamplesImg/templateCV4D.png'))
                    props.setCVColor('#299BE8')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV4D.png'))
                    helper.selectedCVColor = '#299BE8'
                    break;
                case '#407F92':
                    props.setCVType(require('../images/cvExamplesImg/templateCV4E.png'))
                    props.setCVColor('#407F92')
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV4E.png'))
                    helper.selectedCVColor = '#407F92'
                    break;
            }
        }
    }

    const buttons = [
        {color: '#2A2A2A'},
        {color: '#FFFFFF'},
        {color: '#12A3D0'},
        {color: '#FF7373'},
        {color: '#299BE8'},
        {color: '#407F92'}
    ]


        return (
            <View style={styles.body}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'space-between' }}>
                    <View style={{ elevation: 5, marginTop:35 }}>
                        <SImage width={w - 70} source={props.CV} />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        {
                            buttons.map(btn => {
                                return (
                                    <Button clicked={() => changeColorCV(btn.color)} style={{...styles.changeColorButton, backgroundColor: btn.color}}>
                                    {
                                        props.CVColor === btn.color &&
                                        <SImage width={17} source={btn.color === '#FFFFFF' ? require('../images/okIconA.png') : require('../images/okIcon.png')} />
                                    }
                                    </Button>
                                )
                            })
                        }

                    </View>
                    <View style={styles.buttonContainer}>
                        <Button clicked={() => props.navigation.navigate('cvForm')} style={{ ...styles.buttonStyle }}>
                            <Text style={styles.buttonText}>İleri</Text>
                        </Button>
                    </View>
                </ScrollView>
            </View >
        )
    
};

const mapStateToProps = state => {
    return {
        CV: state.selectedCV,
        CVColor: state.selectedCVColor,
        cvId: state.cvId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCVType: (cvType) => dispatch(),
        setCVColor: (cvColor) => dispatch()
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(observer(ShowCV));
