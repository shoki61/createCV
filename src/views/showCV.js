import React from 'react';
import { View, Text } from 'react-native';
import SImage from 'react-native-scalable-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/showCVStyle';


class ShowCV extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            templateCV: require('../images/cvExamplesImg/templateCV1.png'),
            selectedColor: '#2A2A2A'
        }
    }

    changeColorCV(v) {
        this.setState({ selectedColor: v })
        //alert('salam')
        switch (v) {
            case '#2A2A2A':
                this.setState({ templateCV: require('../images/cvExamplesImg/templateCV1.png') })
                break;
            case '#FFFFFF':
                this.setState({ templateCV: require('../images/cvExamplesImg/templateCV1E.png') })
                break;
            case '#12A3D0':
                this.setState({ templateCV: require('../images/cvExamplesImg/templateCV1D.png') })
                break;
            case '#FF7373':
                this.setState({ templateCV: require('../images/cvExamplesImg/templateCV1C.png') })
                break;
            case '#299BE8':
                this.setState({ templateCV: require('../images/cvExamplesImg/templateCV1B.png') })
                break;
            case '#407F92':
                this.setState({ templateCV: require('../images/cvExamplesImg/templateCV1A.png') })
                break;

        }
    }


    render() {
        return (
            <View style={styles.body}>
                <SImage width={380} source={this.state.templateCV} />
                <Text>
                </Text>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.changeColorCV('#2A2A2A')} style={[styles.changeColorButton, { backgroundColor: '#2A2A2A' }]}>
                        {
                            this.state.selectedColor === '#2A2A2A' &&
                            <SImage width={17} source={require('../images/okIcon.png')} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.changeColorCV('#FFFFFF')} style={[styles.changeColorButton, { backgroundColor: '#FFFFFF' }]}>
                        {
                            this.state.selectedColor === '#FFFFFF' &&
                            <SImage width={17} source={require('../images/okIconA.png')} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.changeColorCV('#12A3D0')} style={[styles.changeColorButton, { backgroundColor: '#12A3D0' }]}>
                        {
                            this.state.selectedColor === '#12A3D0' &&
                            <SImage width={17} source={require('../images/okIcon.png')} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.changeColorCV('#FF7373')} style={[styles.changeColorButton, { backgroundColor: '#FF7373' }]}>
                        {
                            this.state.selectedColor === '#FF7373' &&
                            <SImage width={17} source={require('../images/okIcon.png')} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.changeColorCV('#299BE8')} style={[styles.changeColorButton, { backgroundColor: '#299BE8' }]}>
                        {
                            this.state.selectedColor === '#299BE8' &&
                            <SImage width={17} source={require('../images/okIcon.png')} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.changeColorCV('#407F92')} style={[styles.changeColorButton, { backgroundColor: '#407F92' }]}>
                        {
                            this.state.selectedColor === '#407F92' &&
                            <SImage width={17} source={require('../images/okIcon.png')} />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={[styles.buttonStyle, { backgroundColor: '#40c9de' }]}><Text style={styles.buttonText}>Geri</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('cvForm')} style={styles.buttonStyle}><Text style={styles.buttonText}>Seç</Text></TouchableOpacity>
                </View>
            </View >
        )
    }
};

export default ShowCV;