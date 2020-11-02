import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import SImage from 'react-native-scalable-image';
import { observer } from 'mobx-react';


import styles from '../styles/showCVStyle';
import helper from '../controllers/helper';
import Button from '../components/Button/Button';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ShowCV = (props) => {


    const changeColorCV = (v) => {
        if (helper.selectedOrderCV === 1) {
            switch (v) {
                case '#2A2A2A':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV1.png'))
                    helper.selectedCVColor = '#2A2A2A'
                    break;
                case '#FFFFFF':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV1A.png'))
                    helper.selectedCVColor = '#FFFFFF'
                    break;
                case '#12A3D0':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV1B.png'))
                    helper.selectedCVColor = '#12A3D0'
                    break;
                case '#FF7373':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV1C.png'))
                    helper.selectedCVColor = '#FF7373'
                    break;
                case '#299BE8':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV1D.png'))
                    helper.selectedCVColor = '#299BE8'
                    break;
                case '#407F92':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV1E.png'))
                    helper.selectedCVColor = '#407F92'
                    break;
            }
        }
        else if (helper.selectedOrderCV === 2) {
            switch (v) {
                case '#2A2A2A':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV2.png'))
                    helper.selectedCVColor = '#2A2A2A'
                    break;
                case '#FFFFFF':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV2A.png'))
                    helper.selectedCVColor = '#FFFFFF'
                    break;
                case '#12A3D0':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV2B.png'))
                    helper.selectedCVColor = '#12A3D0'
                    break;
                case '#FF7373':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV2C.png'))
                    helper.selectedCVColor = '#FF7373'
                    break;
                case '#299BE8':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV2D.png'))
                    helper.selectedCVColor = '#299BE8'
                    break;
                case '#407F92':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV2E.png'))
                    helper.selectedCVColor = '#407F92'
                    break;
            }
        }
        else if (helper.selectedOrderCV === 3) {
            switch (v) {
                case '#2A2A2A':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV3.png'))
                    helper.selectedCVColor = '#2A2A2A'
                    break;
                case '#FFFFFF':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV3A.png'))
                    helper.selectedCVColor = '#FFFFFF'
                    break;
                case '#12A3D0':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV3B.png'))
                    helper.selectedCVColor = '#12A3D0'
                    break;
                case '#FF7373':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV3C.png'))
                    helper.selectedCVColor = '#FF7373'
                    break;
                case '#299BE8':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV3D.png'))
                    helper.selectedCVColor = '#299BE8'
                    break;
                case '#407F92':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV3E.png'))
                    helper.selectedCVColor = '#407F92'
                    break;
            }
        }
        else if (helper.selectedOrderCV === 4) {
            switch (v) {
                case '#2A2A2A':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV4.png'))
                    helper.selectedCVColor = '#2A2A2A'
                    break;
                case '#FFFFFF':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV4A.png'))
                    helper.selectedCVColor = '#FFFFFF'
                    break;
                case '#12A3D0':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV4B.png'))
                    helper.selectedCVColor = '#12A3D0'
                    break;
                case '#FF7373':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV4C.png'))
                    helper.selectedCVColor = '#FF7373'
                    break;
                case '#299BE8':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV4D.png'))
                    helper.selectedCVColor = '#299BE8'
                    break;
                case '#407F92':
                    helper.setSelectedOrderCV(require('../images/cvExamplesImg/templateCV4E.png'))
                    helper.selectedCVColor = '#407F92'
                    break;
            }
        }
    }


        return (
            <View style={styles.body}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'space-between' }}>
                    <View style={{ width: '100%', height: 50, backgroundColor: '#235F98', marginBottom: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ position: 'absolute', left: 5,width:40,height:30,alignItems:'center',justifyContent:'center' }}>
                            <SImage width={20} source={require('../images/backIcon.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: '#fff', fontSize: 20 }}>Renk seçenekleri</Text>
                    </View>
                    <View style={{ elevation: 5, borderWidth: 0 }}>
                        <SImage width={w - 70} source={helper.selectedCV} />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <TouchableOpacity onPress={() => changeColorCV('#2A2A2A')} style={[styles.changeColorButton, { backgroundColor: '#2A2A2A' }]}>
                            {
                                helper.selectedCVColor === '#2A2A2A' &&
                                <SImage width={17} source={require('../images/okIcon.png')} />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeColorCV('#FFFFFF')} style={[styles.changeColorButton, { backgroundColor: '#FFFFFF' }]}>
                            {
                                helper.selectedCVColor === '#FFFFFF' &&
                                <SImage width={17} source={require('../images/okIconA.png')} />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeColorCV('#12A3D0')} style={[styles.changeColorButton, { backgroundColor: '#12A3D0' }]}>
                            {
                                helper.selectedCVColor === '#12A3D0' &&
                                <SImage width={17} source={require('../images/okIcon.png')} />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeColorCV('#FF7373')} style={[styles.changeColorButton, { backgroundColor: '#FF7373' }]}>
                            {
                                helper.selectedCVColor === '#FF7373' &&
                                <SImage width={17} source={require('../images/okIcon.png')} />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeColorCV('#299BE8')} style={[styles.changeColorButton, { backgroundColor: '#299BE8' }]}>
                            {
                                helper.selectedCVColor === '#299BE8' &&
                                <SImage width={17} source={require('../images/okIcon.png')} />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeColorCV('#407F92')} style={[styles.changeColorButton, { backgroundColor: '#407F92' }]}>
                            {
                                helper.selectedCVColor === '#407F92' &&
                                <SImage width={17} source={require('../images/okIcon.png')} />
                            }
                        </TouchableOpacity>

                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('personalInformation')} style={styles.buttonStyle}><Text style={styles.buttonText}>İleri</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
        )
    
};

export default observer(ShowCV);
