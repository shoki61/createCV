import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator,  ScrollView, Dimensions, PermissionsAndroid, Platform} from 'react-native';
import SImage from 'react-native-scalable-image';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { observer } from 'mobx-react';


import styles from '../styles/cvFormStyle';
import helper from '../controllers/helper';
import { cv1, cv2, cv3, cv4 } from '../CVs';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

class ResultCV extends React.Component {

    componentWillMount =async() =>{
        await setInterval(()=>{
            this.setState({
                date : new Date().getDate(),
                month : new Date().getMonth() + 1,
                year : new Date().getFullYear(),
                hours : new Date().getHours(),
                min : new Date().getMinutes(),
                sec : new Date().getSeconds()
            })
        },1000)
    }

    constructor(props) {
        super(props);
        this.state = {
            filePath:'',
            loadingIcon:false,
            date : new Date().getDate(),
            month : new Date().getMonth() + 1,
            year : new Date().getFullYear(),
            hours : new Date().getHours(),
            min : new Date().getMinutes(),
            sec : new Date().getSeconds(),
        }
    }
    askPermission() {
        this.setState({loadingIcon : true})
        var that = this;
        async function requestExternalWritePermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'CameraExample App External Storage Write Permission',
                        message:
                            'CameraExample App needs access to Storage data in your SD Card ',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) that.createPDF()
                else alert('WRITE_EXTERNAL_STORAGE permission denied')
            } catch (err) {
                alert('Write permission err', err);
                console.warn(err);
            }
        }
        if (Platform.OS === 'android') requestExternalWritePermission()
        else this.createPDF();
    }

    async createPDF() {

        let options = '';
        if (helper.selectedOrderCV === 1) {

            options = {
                base64: true,
                width: 595,
                height: 842,
                html: cv1,
                fileName: `${helper.userName+'CV-'}${this.state.date+'.'+this.state.month+'.'+this.state.year+' '+this.state.hours+':'+this.state.min+':'+this.state.sec}`,
                directory: 'docs'
            };
        }
        if (helper.selectedOrderCV === 2) {
            options = {
                base64: true,
                width: 595,
                height: 842,
                html: cv2
                ,
                fileName: `${helper.userName+'CV-'}${this.state.date+'.'+this.state.month+'.'+this.state.year+' '+this.state.hours+':'+this.state.min+':'+this.state.sec}`,
                directory: 'docs'
            };
        }
        if (helper.selectedOrderCV === 3) {
            options = {
                base64: true,
                width: 595,
                height: 842,
                html: cv3
                ,
                fileName: `${helper.userName+'CV-'}${this.state.date+'.'+this.state.month+'.'+this.state.year+' '+this.state.hours+':'+this.state.min+':'+this.state.sec}`,
                directory: 'docs'
            };
        }
        if (helper.selectedOrderCV === 4) {

            options = {
                base64: true,
                width: 595,
                height: 842,
                html: cv4
                ,
                fileName: `${helper.userName+'CV-'}${this.state.date+'.'+this.state.month+'.'+this.state.year+' '+this.state.hours+':'+this.state.min+':'+this.state.sec}`,
                directory: 'docs'
            };
        }

        let file = await RNHTMLtoPDF.convert(options);


        setTimeout(()=>{
            this.setState({ filePath: file.filePath,loadingIcon:false})
        },1500)
    }
    
    renderProgressBar() {
        return (
            <View style={styles.progressBarView}>
                <View style={[styles.progressBarIconContainer,{ top: -18 }]}>
                    <SImage width={20} source={require('../images/checkIcon.png')} />
                </View>
                <View style={{ width: '50%', height: 5, backgroundColor: '#399eff'  }}>
                </View>
                    <View style={[styles.progressBarIconContainer,{ top: -18, left: '45%'}]}>
                        <SImage width={20} source={require('../images/checkIcon.png')} />
                    </View>

                <View style={{ width: '50%', height: 5,backgroundColor: '#399eff'  }}></View>
                <View style={[styles.progressBarIconContainer,{ width: 65, height: 65, borderWidth: 3, borderColor: '#fff', elevation: 25, top: -30, right: 0 }]}>
                    <SImage width={30} source={require('../images/downloadProgressBar.png')} />
                </View>
            </View>

        )
    }
    renderResultCV() {
        return (
            <View style={{ marginTop: 100, alignItems: 'center', width: '100%'}}>

                <Text style={{ fontSize: 40, marginBottom: 30, color: '#1b84a1' }}>CV'niz hazır</Text>

                <TouchableOpacity style={styles.downloadButton} onPress={this.askPermission.bind(this)}>
                    <SImage width={45} source={require('../images/save.png')} />
                    <Text style={styles.downloadText}>
                        {
                            this.state.filePath === '' ? 'Kaydet' : 'Tekrar kaydet'
                        }
                    </Text>
                </TouchableOpacity>
                {
                    this.state.loadingIcon &&
                    <ActivityIndicator size={60} color='#21b5ff' />
                }
                {
                    this.state.filePath !== '' &&
                    <View style={{ alignItems: 'center', marginBottom: 130, marginTop: 30 }}>
                        <Text style={{ fontSize: 18, color: '#6b6b6b', textAlign: 'center', width: w / 1.3, marginBottom: 15 }}>CV'niz başarılı bir şekilde telefonunuza kaydedildi.</Text>
                        <Text style={{ fontSize: 13, color: '#6b6b6b',textAlign: 'center',marginLeft:7,marginRight:7 }}> Dosya yolu: {this.state.filePath}</Text>
                    </View>

                }


            </View>
        )
    }


    render() {
        return (
            <View style={{flex:1}}>
                <View style={{ width: '100%', height: 50, backgroundColor: '#235F98', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ position: 'absolute', left: 5,width:40,height:30,alignItems:'center',justifyContent:'center' }}>
                        <SImage width={20} source={require('../images/backIcon.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', fontSize: 20 }}>Kaydet</Text>
                </View>
            <ScrollView
                ref={(c) => { this.scroll = c }}
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: '#fff' }}>
                <View style={{ alignItems: 'center' }}>
                    {this.renderProgressBar()}
                    {this.renderResultCV()}
                </View>


            </ScrollView>
            </View>
        )
    }
}



export default observer(ResultCV);
