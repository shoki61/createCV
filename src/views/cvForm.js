import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Picker, ScrollView, Dimensions, PermissionsAndroid, Platform, FlatList, } from 'react-native';
import SImage from 'react-native-scalable-image';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { observer } from 'mobx-react';
import AlertPro from "react-native-alert-pro";


import styles from '../styles/cvFormStyle';
import helper from '../controllers/helper';

import CV1 from '../cvs/cv1';

const h = Dimensions.get('window').height;

let yol = ''

class Example extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ad: 'murtiiii',
        };
    }


    render() {
        return (
            <View style={styles.MainContainer}>
                <TouchableOpacity onPress={this.askPermission.bind(this)}>
                    <View>
                        <Image
                            //We are showing the Image from online
                            source={{
                                uri:
                                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
                            }}
                            //You can also show the image from you project directory like below
                            //source={require('./Images/facebook.png')}
                            style={styless.ImageStyle}
                        />
                        <Text style={styless.text}>Create PDF</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styless.text}>{this.state.filePath}</Text>
            </View>
        );
    }
}



const styless = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2F4F4F',
        borderWidth: 1,
        borderColor: '#000',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 16,
    },
    ImageStyle: {
        height: 150,
        width: 150,
        resizeMode: 'stretch',
    },
});


let link = '';
let ability = {
    name: '',
    level: ''
};
let language = {
    name: '',
    level: ''
};
let hobby = '';
let reference = {
    name: '',
    tel: '',
    email: '',
    companyName: ''
}
let school = {
    schoolName: '',
    schoolDepartment: '',
    schoolGrade: '',
    schoolCity: '',
    schoolStartDate: '',
    schoolFinishDate: ''
}
let company = {
    companyName: '',
    companyJob: '',
    companyStartDate: '',
    companyFinishDate: '',
    companyDescription: ''
}
let project = {
    projectName: '',
    projectTools: '',
    projectLink: '',
    projectDescription: ''
}
let community = {
    communityName: '',
    communityTitle: '',
    communityStartDate: '',
    communityFinishDate: '',
    communityDescription: '',
}
let licence = ''


function Ability() {
    const [selectedValue, setSelectedValue] = useState("Başlangıç");
    ability.level = selectedValue;
    return (
        <View style={[styles.abilityInput, { paddingLeft: 0 }]}>
            <Picker
                selectedValue={selectedValue}
                itemStyle={{ color: 'green', fontSize: 10 }}
                style={{
                    width: 150, height: 35, color: 'grey', transform: [
                        { scaleX: 0.9 },
                        { scaleY: 0.9 },
                    ],
                }}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                mode='dropdown'
            >
                <Picker.Item label="Başlangıç" value="Başlangıç" />
                <Picker.Item label="Orta" value="Orta" />
                <Picker.Item label="İyi" value="İyi" />
                <Picker.Item label="Profesyonel" value="Profesyonel" />
            </Picker>
        </View>
    )
}
function Language() {
    const [selectedValue, setSelectedValue] = useState("Başlangıç");
    language.level = selectedValue
    return (
        <View style={[styles.abilityInput, { paddingLeft: 0 }]}>
            <Picker
                selectedValue={selectedValue}
                itemStyle={{ color: 'green', fontSize: 10 }}
                style={{
                    width: 150, height: 35, color: 'grey', transform: [
                        { scaleX: 0.9 },
                        { scaleY: 0.9 },
                    ],
                }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                mode='dropdown'
            >
                <Picker.Item label="Başlangıç" value="Başlangıç" />
                <Picker.Item label="Orta" value="Orta" />
                <Picker.Item label="İyi" value="İyi" />
                <Picker.Item label="Ana dil" value="Ana dil" />
            </Picker>
        </View>
    )
}
function SchoolGrade() {
    const [selectedValue, setSelectedValue] = useState("Lisans");
    school.schoolGrade = selectedValue
    return (
        <View >
            <Picker
                selectedValue={selectedValue}
                itemStyle={{ color: 'green', fontSize: 10 }}
                style={{ width: 270, height: 35, color: 'grey' }}
                onValueChange={(text) => setSelectedValue(text)}
                mode='dropdown'
            >
                <Picker.Item label="Önlisans" value="Önlisans" />
                <Picker.Item label="Lisans" value="Lisans" />
                <Picker.Item label="Yüksek Lisans" value="Yüksek Lisans" />
                <Picker.Item label="Doktora" value="Doktora" />
            </Picker>
        </View>
    )
}


class CVForm extends React.Component {

    componentWillMount() {
        licence = helper.userDrivingLicencies.map(el => el.licence);
        setInterval(() => {
            let color = Math.floor(Math.random() * 5)
            switch (color) {
                case 0:
                    this.setState({ color: '#47ceff' });
                    break;
                case 1:
                    this.setState({ color: '#ff5cb6' });
                    break;
                case 2:
                    this.setState({ color: '#f133ff' });
                    break;
                case 3:
                    this.setState({ color: '#ffda47' });
                    break;
                case 4:
                    this.setState({ color: '#40e685' });
                    break;
            }
        }, 3000)
    }

    constructor(props) {
        super(props);
        this.state = {
            photoSource: null,

            userName: '',
            userNumber: '',
            userEmail: '',
            userAddress: '',
            userCity: '',
            userPostalCode: '',
            userBirthDay: '',
            userGender: '',
            userDrivingLicence: '',
            userLink: '',

            userSchoolName: '',
            userSchoolDepartment: '',
            userSchoolCity: '',
            userSchoolStartDate: '',
            userSchoolFinishDate: '',

            userJob: '',

            userCompanyName: '',
            userCompanyJob: '',
            userCompanyStartDate: '',
            userCompanyFinishDate: '',
            userCompanyDescription: '',

            userProjectName: '',
            userProjectTools: '',
            userProjectLink: '',
            userProjectDescription: '',

            userAbility: '',
            userAbilityLevel: '',
            optionsAbilityLevel: [
                { value: 'Başlangıç', label: 'Başlangıç' },
                { value: 'Orta', label: 'Orta' },
                { value: 'İyi', label: 'İyi' },
                { value: 'Çok iyi', label: 'Çok iyi' },
                { value: 'Profesyonel', label: 'Profesyonel' }
            ],

            userLanguage: '',
            userLanguageLevel: '',
            optionsLanguageLevel: [
                { value: 'Başlangıç', label: 'Başlangıç' },
                { value: 'Orta', label: 'Orta' },
                { value: 'İyi', label: 'İyi' },
                { value: 'Çok iyi', label: 'Çok iyi' },
                { value: 'Anadil', label: 'Anadil' }
            ],

            userHobby: '',

            userCommunityName: '',
            userCommunityTitle: '',
            userCommunityStartDate: '',
            userCommunityFinishDate: '',
            userCommunityDescription: '',

            userReferenceName: '',
            userReferenceNumber: '',
            userReferenceEmail: '',
            userReferenceCompanyName: '',

            hidden: true,
            showPersonalInformation: true,
            showExperiences: false,
            showResultCV: false,

            minDate: '01-01-1950',
            maxDate: '01-01-2016',


            ////////////uyarılar kısmı//////////////////////////////
            warningLink: false,

            warningSchoolName: false,
            warningSchoolDepartment: false,
            warningSchoolCity: false,
            warningSchoolDate: false,

            warningCompanyName: false,
            warningCompanyJob: false,
            warningCompanyDate: false,
            warningCompanyDescription: false,

            warningProjectName: false,
            warningProjectDescription: false,

            warningAbility: false,

            warningLanguage: false,

            warningHobby: false,

            warningCommunityName: false,
            warningCommunityTitle: false,
            warningCommunityDate: false,

            warningReferenceName: false,
            warningReferenceTel: false,
            warningReferenceEmail: false,


            color: '#47ceff',
        }
    }






    ///////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    askPermission() {
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
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //If WRITE_EXTERNAL_STORAGE Permission is granted
                    //changing the state to show Create PDF option
                    that.createPDF();
                } else {
                    alert('WRITE_EXTERNAL_STORAGE permission denied');
                }
            } catch (err) {
                alert('Write permission err', err);
                console.warn(err);
            }
        }
        //Calling the External Write permission function
        if (Platform.OS === 'android') {
            requestExternalWritePermission();
        } else {
            this.createPDF();
            alert('tamamdır')
        }
    }

    async createPDF() {

        let options = {
            html: `<div style="width:650px;min-height: 700px;padding-top: 15px;background-color: #2A2A2A">


        <div style="width: 100%;min-height: 170px;display: flex;border-bottom: 4px solid #707070">
            <div style="width: 35%;min-height: 100%;display: flex;justify-content: center;align-items: center">
                <div style="width: 120px;height: 120px;border:3px solid #707070;border-radius: 100px;align-items: center;display: flex;justify-content: center;background: url('${yol.uri}') no-repeat center;background-size: cover"></div>
            </div>
            <div style="width: 65%;min-height: 100%">
                <p style="font-family: Calibri;font-size: 28px;text-align: center;color:#E4E4E4;margin: 15px 0 10px;">Ract Native Developer</p>
                <div style="display: flex;width: 100%;justify-content: space-between">
                    <div>
                        <p style="color:#E4E4E4;margin:3px;font-family: Calibri"><i style="font-size: 13px;margin-right: 5px;width: 13px;text-align: center" class="fas fa-user"></i>${this.state.userName}</p>
                        <p style="color:#E4E4E4;margin:3px;font-family: Calibri"><i style="font-size: 13px;margin-right: 5px;width: 13px;text-align: center" class="fas fa-phone-alt"></i>${this.state.userNumber}</p>
                        <p style="color:#E4E4E4;margin:3px;font-family: Calibri"><i style="font-size: 13px;margin-right: 5px;width: 13px;text-align: center" class="fas fa-envelope"></i>${this.state.userEmail}</p>
                        <p style="color:#E4E4E4;margin:3px;font-family: Calibri"><i style="font-size: 13px;margin-right: 5px;width: 13px;text-align: center" class="fas fa-map-marker-alt"></i>${this.state.userCity}</p>
                    </div>
                    <div style="margin-right: 15px">
                        ${ helper.userLinks.map((item, i) => `<p style="color:#E4E4E4;margin:3px;font-family: Calibri"><i style="font-size: 13px;margin-right: 5px;width: 13px;text-align: center" class="fab fa-github-square"></i>${item.link}</p>`.trim()).join('')}
                    </div>
                </div>

            </div>
        </div>



        <div style="width: 100%;min-height: 530px;display: flex">
            <div style="width: 40%;min-height: 100%;border-right: 2px solid #707070">
                <div style="margin-bottom: 30px">
                    <p style="font-size: 18px;margin:0;margin-top: 20px;color:#E4E4E4;font-family: Calibri;margin-left: 15px">Bildiği Diller</p>
                    <div style="display: flex;margin-left: 25px">
                       <div style="margin-right: 10px">
                           <p style="color:#E4E4E4;font-size: 15px;font-family: Calibri;margin:0">- Türkçe</p>
                           <p style="color:#E4E4E4;font-size: 15px;font-family: Calibri;margin:0">- İngilizce</p>
                           <p style="color:#E4E4E4;font-size: 15px;font-family: Calibri;margin:0">- Fransızca</p>
                       </div>
                       <div>
                           <div style="display: flex;align-items: center;width: 75px;justify-content: space-between;margin:5px">
                               <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                               <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                               <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                               <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                               <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                           </div>
                           <div style="display: flex;align-items: center;width: 75px;justify-content: space-between;margin:5px">
                               <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                               <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                               <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                               <p style="margin:0;width: 9px;height: 9px;border-radius: 100px;border:2px solid #E4E4E4"></p>
                               <p style="margin:0;width: 9px;height: 9px;border-radius: 100px;border:2px solid #E4E4E4"></p>

                           </div>
                           <div style="display: flex;align-items: center;width: 75px;justify-content: space-between;margin:5px">
                               <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                               <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                               <p style="margin:0;width: 9px;height: 9px;border-radius: 100px;border:2px solid #E4E4E4"></p>
                               <p style="margin:0;width: 9px;height: 9px;border-radius: 100px;border:2px solid #E4E4E4"></p>
                               <p style="margin:0;width: 9px;height: 9px;border-radius: 100px;border:2px solid #E4E4E4"></p>

                           </div>
                       </div>
                    </div>
                </div>


                <div style="margin-bottom: 30px">
                    <p style="font-size: 18px;margin:0;margin-top: 20px;color:#E4E4E4;font-family: Calibri;margin-left: 15px">Yetenekler</p>
                    <div style="display: flex;margin-left: 25px">
                        <div style="margin-right: 10px">
                            <p style="color:#E4E4E4;font-size: 15px;font-family: Calibri;margin:0">- JavaScript</p>
                            <p style="color:#E4E4E4;font-size: 15px;font-family: Calibri;margin:0">- Vue.js</p>
                            <p style="color:#E4E4E4;font-size: 15px;font-family: Calibri;margin:0">- React.js</p>
                            <p style="color:#E4E4E4;font-size: 15px;font-family: Calibri;margin:0">- React Native</p>
                            <p style="color:#E4E4E4;font-size: 15px;font-family: Calibri;margin:0">- Git</p>
                            <p style="color:#E4E4E4;font-size: 15px;font-family: Calibri;margin:0">- Python</p>
                        </div>
                        <div>
                            <div style="display: flex;align-items: center;width: 75px;justify-content: space-between;margin:5px">
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                            </div>
                            <div style="display: flex;align-items: center;width: 75px;justify-content: space-between;margin:5px">
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 9px;height: 9px;border-radius: 100px;border:2px solid #E4E4E4"></p>
                            </div>
                            <div style="display: flex;align-items: center;width: 75px;justify-content: space-between;margin:5px">
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 9px;height: 9px;border-radius: 100px;border:2px solid #E4E4E4"></p>
                                <p style="margin:0;width: 9px;height: 9px;border-radius: 100px;border:2px solid #E4E4E4"></p>
                            </div>
                            <div style="display: flex;align-items: center;width: 75px;justify-content: space-between;margin:5px">
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 9px;height: 9px;border-radius: 100px;border:2px solid #E4E4E4"></p>
                            </div>
                            <div style="display: flex;align-items: center;width: 75px;justify-content: space-between;margin:5px">
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 9px;height: 9px;border-radius: 100px;border:2px solid #E4E4E4"></p>
                                <p style="margin:0;width: 9px;height: 9px;border-radius: 100px;border:2px solid #E4E4E4"></p>
                            </div>
                            <div style="display: flex;align-items: center;width: 75px;justify-content: space-between;margin:5px">
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 12px;height: 12px;border-radius: 100px;background-color: #E4E4E4"></p>
                                <p style="margin:0;width: 9px;height: 9px;border-radius: 100px;border:2px solid #E4E4E4"></p>
                                <p style="margin:0;width: 9px;height: 9px;border-radius: 100px;border:2px solid #E4E4E4"></p>
                                <p style="margin:0;width: 9px;height: 9px;border-radius: 100px;border:2px solid #E4E4E4"></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <p style="font-size: 18px;margin:0;margin-top: 20px;color:#E4E4E4;font-family: Calibri;margin-left: 15px">İlgi Alanları</p>
                    <div style="margin-left: 25px">
                        <div style="margin-right: 10px">
                            <p style="color:#E4E4E4;font-size: 15px;font-family: Calibri;margin:0">- Kapmçılık</p>
                            <p style="color:#E4E4E4;font-size: 15px;font-family: Calibri;margin:0">- Film</p>
                            <p style="color:#E4E4E4;font-size: 15px;font-family: Calibri;margin:0">- Kitap</p>
                            <p style="color:#E4E4E4;font-size: 15px;font-family: Calibri;margin:0">- Oyun</p>
                            <p style="color:#E4E4E4;font-size: 15px;font-family: Calibri;margin:0">- Doğa yürüyüşü</p>
                        </div>

                    </div>
                </div>
            </div>


            <div style="width: 60%;min-height: 100%;border-left: 2px solid #707070;padding-bottom: 25px">

                <div>
                    <p style="font-size: 20px;color:#E4E4E4;font-family: Calibri;margin: 20px 0 0 15px;"><i class='fas fa-graduation-cap'></i> Eğitim</p>
                    <div style="width: 90%;margin-left: 25px;margin-top: 5px">
                        <p style="color:#E4E4E4;font-family: Calibri;font-size: 14px;margin:0">Gaziantep Üniversitesi/Fen Edebiyat Fakültesi</p>
                        <p style="color:#E4E4E4;font-family: Calibri;font-size: 14px;margin:0">Biyoloji Bölümü</p>
                        <p style="color:#E4E4E4;font-family: Calibri;font-size: 14px;margin:0">09.2013-06.2020</p>
                    </div>
                </div>

                <div>
                    <p style="font-size: 20px;color:#E4E4E4;font-family: Calibri;margin: 20px 0 0 15px;display:flex;align-items:center">
                        <img height="23px" style="margin-right: 5px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTMxIDUxMiA1MTIiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48cGF0aCBkPSJtMjExIDI0MGg5MHYzMGgtOTB6bTAgMCIgZGF0YS1vcmlnaW5hbD0
iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRTRFNEU0IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im00MTUuMzc4OTA2IDI3MGgtODQuMzc4OTA2djE1YzAgOC4yODkwNjItNi43MTA5Mz
ggMTUtMTUgMTVoLTEyMGMtOC4yODkwNjIgMC0xNS02LjcxMDkzOC0xNS0xNXYtMTVoLTg0LjM3ODkwNmMtMTkuMzk0NTMyIDAtMzYuNTQ2ODc1LTEyLjM2MzI4MS00Mi42ODc1LTMwLjc2MTcxOWwtNTMuOTMzNTk0LTE2MS44MjgxMjV2MzI3LjU4O
Tg0NGMwIDI0LjgxMjUgMjAuMTg3NSA0NSA0NSA0NWg0MjJjMjQuODEyNSAwIDQ1LTIwLjE4NzUgNDUtNDV2LTMyNy41NzgxMjVsLTUzLjkzNzUgMTYxLjgxNjQwNmMtNi4xMzY3MTkgMTguMzk4NDM4LTIzLjI4OTA2MiAzMC43NjE3MTktNDIuNjgz
NTk0IDMwLjc2MTcxOXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTMxNiAwaC0xMjBjLTI
0LjgxMjUgMC00NSAyMC4xODc1LTQ1IDQ1djE1aC0xMjUuMTkxNDA2bDU2LjU3NDIxOCAxNjkuNzQ2MDk0YzIuMDUwNzgyIDYuMTM2NzE4IDcuNzc3MzQ0IDEwLjI1MzkwNiAxNC4yMzgyODIgMTAuMjUzOTA2aDg0LjM3ODkwNnYtMTVjMC04LjI4OT
A2MiA2LjcxMDkzOC0xNSAxNS0xNWgxMjBjOC4yODkwNjIgMCAxNSA2LjcxMDkzOCAxNSAxNXYxNWg4NC4zNzg5MDZjNi40NjA5MzggMCAxMi4xODc1LTQuMTE3MTg4IDE0LjIzODI4Mi0xMC4yNTM5MDZsNTYuNTc4MTI0LTE2OS43NDYwOTRoLTEyN
S4xOTUzMTJ2LTE1YzAtMjQuODEyNS0yMC4xODc1LTQ1LTQ1LTQ1em0tMTM1IDYwdi0xNWMwLTguMjc3MzQ0IDYuNzIyNjU2LTE1IDE1LTE1aDEyMGM4LjI3NzM0NCAwIDE1IDYuNzIyNjU2IDE1IDE1djE1em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMw
MDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+IDwvc3ZnPg==" /> İş Deneyimi</p>
                    <p style="color: #E4E4E4;font-family: Calibri;font-size:16px;margin: 5px 0 0 18px;">- Rat Yazılım</p>
                    <div style="width: 90%;margin-left: 25px;margin-top: 3px">
                        <p style="color:#E4E4E4;font-family: Calibri;font-size: 14px;margin: 2px 0 0;">React Native Developer</p>
                        <p style="color:#E4E4E4;font-family: Calibri;font-size: 14px;margin: 2px 0 0;">05.2018-09.2020</p>
                        <p style="color:#E4E4E4;font-family: Calibri;font-size: 14px;margin: 2px 0 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
                <div>
                    <p style="font-size: 20px;color:#E4E4E4;font-family: Calibri;margin: 20px 0 0 15px;display: flex;align-items: center">
                        <img style="margin-right: 5px" height="25px" src="data:image/svg+xml;base64,
                        PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2a
                        WV3Qm94PSIwIDAgNDY1Ljk4NyA0NjUuOTg3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjUuOTg3IDQ2NS45ODc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2
                        xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzcyLjczNSwyMzYuNTQ3Yy0yLjY1MS0zLjUzNS03LjY2NS00LjI1MS0xMS4yLTEuNmMtMS42OTgsMS4yNzQtMi44MjEsMy4xNy0zLjEyLDUuMjcybC00LjQ0LDMxLjE
                        yICAgIGMtMC4xMDcsMC40LTAuMjQ3LDAuNzktMC40MTYsMS4xNjhjOC4xNTktMTAuODM0LDE0Ljc0NC0yMi43NjksMTkuNTYtMzUuNDQ4TDM3Mi43MzUsMjM2LjU0N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNz
                        PSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNFNEU0RTQiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTM0Ni4wNDcsMjc4LjIwM2MtMC4zNzcsMC0wL
                        jc1NC0wLjAyNC0xLjEyOC0wLjA3MmwtNDcuNTItNi43OTJjLTQuMzc0LTAuNjI3LTcuNDExLTQuNjgtNi43ODQtOS4wNTQgICAgYzAtMC4wMDEsMC0wLjAwMSwwLTAuMDAybDQuNDQtMzEuMTJjMC42MTktNC4zNzUtMi40MjU
                        tOC40MjMtNi44LTkuMDQyYy0yLjA5My0wLjI5Ni00LjIxOSwwLjI0OC01LjkxMiwxLjUxNGwtMjUuMTUyLDE4Ljg1NiAgICBjLTMuNTM1LDIuNjUxLTguNTQ5LDEuOTM1LTExLjItMS42djBsLTI4LjgtMzguNGMtMi42NTEtMy4
                        1MzUtMS45MzUtOC41NDksMS42LTExLjJsMjUuMTQ0LTE4Ljg1NiAgICBjMy41MzUtMi42NTEsNC4yNTEtNy42NjUsMS42LTExLjJjLTEuMjc0LTEuNjk4LTMuMTctMi44MjEtNS4yNzItMy4xMmwtMzEuMTItNC40NDhjLTQuMzc
                        0LTAuNjIyLTcuNDE2LTQuNjczLTYuNzkzLTkuMDQ3ICAgIGMwLTAuMDAzLDAuMDAxLTAuMDA2LDAuMDAxLTAuMDA5bDYuNzkyLTQ3LjUxMmMwLjYyMi00LjM3NCw0LjY3My03LjQxNiw5LjA0Ny02Ljc5M2MwLjAwMywwLDAuMDA
                        2LDAuMDAxLDAuMDA5LDAuMDAxbDMxLjEyLDQuNDQ4ICAgIGMzLjIwMSwwLjQ2NCw2LjM2NC0xLjA1OCw4LTMuODQ4YzEuNjk5LTIuNzczLDEuNTA4LTYuMzA3LTAuNDgtOC44OGwtMTguODQtMjUuMTM2Yy0yLjY1MS0zLjUzNS0xL
                        jkzNS04LjU0OSwxLjYtMTEuMmw0LjUzNi0zLjQgICAgYy03LjM0OC0wLjM1NS0xNC43MTMtMC4xNTgtMjIuMDMyLDAuNTkyQzE0My4wODcsNTEuOTA1LDg2LjM0NywxMjMuMjc0LDk1LjM2OSwyMDIuMjljNC45MTUsNDMuMDQ1LDI4
                        Ljk0OSw4MS41ODksNjUuNDM4LDEwNC45NDUgICAgYzEzLjMyMiw4LjI2LDIxLjUwNCwyMi43NSwyMS42OTYsMzguNDI0djMyLjMyOGMwLDEzLjI1NSwxMC43NDUsMjQsMjQsMjRoNjRjMTMuMjU1LDAsMjQtMTAuNzQ1LDI0LTI0di
                        0zMS42NjQgICAgYzAuMjAzLTE2LjA0Miw4LjU1My0zMC44NzgsMjIuMTYtMzkuMzc2YzEyLjYxMi04LjE4MiwyMy44NzUtMTguMjc2LDMzLjM4NC0yOS45MiAgICBDMzQ4Ljg0MSwyNzcuNzY2LDM0Ny40NjEsMjc4LjE3MiwzNDYuM
                        DQ3LDI3OC4yMDN6IE0yNDYuNTAzLDM3Ny45ODdoLTE2di0yNGgxNlYzNzcuOTg3eiBNMjMwLjUwMywzMzcuOTg3ICAgIGMtMC4wMDUtMjEuMTUyLTEzLjA0OC00MC4xMTItMzIuOC00Ny42OGMtNTcuNjA5LTIyLjUyNi04Ni4wNDktO
                        DcuNDg3LTYzLjUyMy0xNDUuMDk2YzguNzIyLTIyLjMwNywyNC4zNjYtNDEuMjMsNDQuNjM1LTUzLjk5MiAgICBsOC40ODgsMTMuNTM2Yy00NC44NzUsMjguMjM3LTU4LjM2Miw4Ny41MDUtMzAuMTI1LDEzMi4zOGMxMC45NCwxNy4zOD
                        YsMjcuMTY5LDMwLjgwNSw0Ni4zMDEsMzguMjg0ICAgIGMyNS45MjgsOS45MTcsNDMuMDQ0LDM0LjgwOCw0My4wMjQsNjIuNTY4SDIzMC41MDN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb
                        2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRTRFNEU0Ij48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMDYuNTAzLDQ0MS45ODd2OGMwLDguODM3LDcuMTYzLDE2LDE2LDE2aDMyYzguODM3LDAsMTYt
                        Ny4xNjMsMTYtMTZ2LThIMjA2LjUwM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNFNEU0RTQiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgo
                        JPGc+CgkJPHBhdGggZD0iTTE1Ni40ODcsMzEzLjk4N2MtNC43NC0zLjA3My05LjMwNS02LjQwOS0xMy42NzItOS45OTJjLTEyLjA3NywyMy41MS00MC45MjUsMzIuNzc4LTY0LjQzNSwyMC43MDIgICAgYy0xNi4wMDItOC4yMi0yNi4wNDI
                        tMjQuNzItMjUuOTg5LTQyLjcxYzAuMDM3LTI0LjE4NywxOC4wNS00NC41NzUsNDIuMDQ4LTQ3LjU5MmMtMi45MzYtOC44My01LjA1Ny0xNy45MTEtNi4zMzYtMjcuMTI4ICAgIGwtMS40LDYuNjU2Yy0xLjgxOCw4LjY0Ny0xMC4zMDMsMTQuM
                        TgzLTE4Ljk1LDEyLjM2NWMtMi4wNzEtMC40MzUtNC4wMzUtMS4yNzctNS43NzgtMi40NzdsLTE2LjY0LTExLjQyNGwtMTQuNTc2LDE0LjU0NCAgICBsMTEuNDU2LDE2LjY1NmM1LjAxNCw3LjI3NiwzLjE4LDE3LjI0LTQuMDk2LDIyLjI1NGMt
                        MS43NDUsMS4yMDItMy43MTEsMi4wNDYtNS43ODQsMi40ODJsLTE5Ljk0NCw0LjJ2MTkuMDA4bDE5Ljk0NCw0LjIgICAgYzguNjQ3LDEuODIxLDE0LjE4MSwxMC4zMDcsMTIuMzYsMTguOTU0Yy0wLjQzNywyLjA3Ni0xLjI4Myw0LjA0NC0yLjQ4
                        OCw1Ljc5bC0xMS40NDgsMTYuNTY4bDE0LjU3NiwxNC41NDRsMTYuNjI0LTExLjQ1NiAgICBjNy4yNzYtNS4wMTQsMTcuMjQtMy4xOCwyMi4yNTQsNC4wOTZjMS4yMDIsMS43NDUsMi4wNDYsMy43MTEsMi40ODIsNS43ODRsNC4xOTIsMTku
                        OTc2aDE5LjAxNmw0LjE5Mi0xOS45NDQgICAgYzEuODItOC42NDcsMTAuMzA1LTE0LjE4MiwxOC45NTItMTIuMzYyYzIuMDczLDAuNDM2LDQuMDM5LDEuMjgsNS43ODQsMi40ODJsMTYuNjE2LDExLjQyNGwxNy4xNi0xNy4xNiAgICBDMTY5L
                        jczLDMyNS45NzEsMTY0LjA0LDMxOC43NTYsMTU2LjQ4NywzMTMuOTg3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0U0RTRFNCI+PC9w
                        YXRoPgoJPC9nPgo8L2c+PGc+Cgk8Zz4KCQk8cmVjdCB4PSIyMDYuNTAzIiB5PSI0MDkuOTg3IiB3aWR0aD0iNjQiIGhlaWdodD0iMTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9I
                        iMwMDAwMDAiIHN0eWxlPSJmaWxsOiNFNEU0RTQiPjwvcmVjdD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQzOC4yNTUsMTM3LjkxNWMtMTMuMTIxLTEuODc2LTIyLjIzNy0xNC4wMzUtMjAuMzYxLTI3LjE1NmMwLjkwMS02LjMwMS
                        w0LjI2OC0xMS45ODYsOS4zNjEtMTUuODA0bDE4Ljc0NC0xNC4wNjQgICAgbC0xOS4yLTI1LjZsLTE4Ljc0NCwxNC4wNTZjLTEwLjYwMiw3Ljk1Ni0yNS42NDYsNS44MS0zMy42MDEtNC43OTFjLTMuODE1LTUuMDg0LTUuNDU4LTExLjQ3NS00LjU2
                        Ny0xNy43NjlsMy4zMTItMjMuMiAgICBsLTMxLjY3Mi00LjUybC0zLjMxMiwyMy4yYy0xLjg3NywxMy4xMjEtMTQuMDM1LDIyLjIzNy0yNy4xNTYsMjAuMzYxYy02LjMwMS0wLjkwMS0xMS45ODYtNC4yNjgtMTUuODA0LTkuMzYxbC0xNC4wNjQtM
                        TguNzc2ICAgIGwtMjUuNiwxOS4ybDE0LjA1NiwxOC43NDRjNy45NTQsMTAuNjAzLDUuODA3LDI1LjY0Ni00Ljc5NiwzMy42MDFjLTUuMDk1LDMuODIyLTExLjQ5OSw1LjQ2Mi0xNy44MDQsNC41NTlsLTIzLjItMy4zMTIgICAgbC00LjU0NCwzMS4
                        2OGwyMy4yLDMuMzEyYzEzLjEyMSwxLjg3NywyMi4yMzcsMTQuMDM1LDIwLjM2MSwyNy4xNTZjLTAuOTAxLDYuMzAxLTQuMjY4LDExLjk4Ni05LjM2MSwxNS44MDRsLTE4LjczNiwxNC4wNjQgICAgbDE5LjIsMjUuNmwxOC43NDQtMTQuMDU2YzEwL
                        jYwMy03Ljk1NCwyNS42NDYtNS44MDcsMzMuNjAxLDQuNzk2YzMuODIyLDUuMDk1LDUuNDYyLDExLjUsNC41NTksMTcuODA0bC0zLjMxMiwyMy4ybDMxLjc0NCw0LjU0NCAgICBsMy4zMTItMjMuMmMxLjg3Ny0xMy4xMjEsMTQuMDM1LTIyLjIzNywy
                        Ny4xNTYtMjAuMzYxYzYuMzAxLDAuOTAxLDExLjk4Niw0LjI2OCwxNS44MDQsOS4zNjFsMTQuMDY0LDE4LjczNmwyNS42LTE5LjIgICAgbC0xNC4xMDQtMTguNzc2Yy03Ljk1MS0xMC42MDUtNS44LTI1LjY0OCw0LjgwNS0zMy41OTljNS4wODQtM
                        y44MTIsMTEuNDcyLTUuNDUyLDE3Ljc2My00LjU2MWwyMy4yLDMuMzEybDQuNTItMzEuNjcyICAgIEw0MzguMjU1LDEzNy45MTV6IE0zNDAuMzkxLDE4OC4wOTljLTI2LjUxLDAtNDgtMjEuNDktNDgtNDhzMjEuNDktNDgsNDgtNDhjMjYuNTEsMCw0
                        OCwyMS40OSw0OCw0OCAgICBDMzg4LjM2LDE2Ni41OTYsMzY2Ljg4OCwxODguMDY4LDM0MC4zOTEsMTg4LjA5OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWx
                        lPSJmaWxsOiNFNEU0RTQiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHJlY3QgeD0iMzkwLjUwMyIgeT0iMjk3Ljk4NyIgd2lkdGg9IjU2IiBoZWlnaHQ9IjE2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgi
                        IGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRTRFNEU0Ij48L3JlY3Q+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxyZWN0IHg9IjM5OC41MDQiIHk9IjMzNC43NSIgdHJhbnNmb3JtPSJtYXRyaXgoMC42NDAxIC0wLjc2ODMgMC
                        43NjgzIDAuNjQwMSAtMTM0Ljg4NzYgNDQ0LjAyNTQpIiB3aWR0aD0iMTYiIGhlaWdodD0iNjIuNDgiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNFN
                        EU0RTQiPjwvcmVjdD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHJlY3QgeD0iMzQyLjUwMyIgeT0iMzYxLjk4NyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjU2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2x
                        kX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRTRFNEU0Ij48L3JlY3Q+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxyZWN0IHg9IjUuNTE5IiB5PSIxMjkuOTg3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk3MDEgLTAuMjQyNSAwLjI0MjUgMC45NzAx
                        IC0zMi4zMTU1IDEzLjQ1NzcpIiB3aWR0aD0iNjUuOTY4IiBoZWlnaHQ9IjE1Ljk5MiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0U0RTRFN
                        CI+PC9yZWN0PgoJPC9nPgo8L2c+PGc+Cgk8Zz4KCQk8cmVjdCB4PSI0Mi41MDIiIHk9IjM1LjU4NSIgdHJhbnNmb3JtPSJtYXRyaXgoMC41ODEyIC0wLjgxMzcgMC44MTM3IDAuNTgxMiAtMzUuODA4OCA3MC40MDIxKSIgd2lkdGg9IjE1Ljk5MiI
                        gaGVpZ2h0PSI2OC44MTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNFNEU0RTQiPjwvcmVjdD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHJl
                        Y3QgeD0iOTQuMzI5IiB5PSIwLjk1MiIgdHJhbnNmb3JtPSJtYXRyaXgoMC45Njg4IC0wLjI0NzcgMC4yNDc3IDAuOTY4OCAtNS4yMjc3IDI2LjQwMSkiIHdpZHRoPSIxNiIgaGVpZ2h0PSI2Ni4wNTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIG
                        NsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNFNEU0RTQiPjwvcmVjdD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" /> Projeler</p>
                    <p style="color: #E4E4E4;font-family: Calibri;font-size:16px;margin: 5px 0 0 18px;">- WeatherApp</p>
                    <div style="width: 90%;margin-left: 25px;margin-top: 3px">
                        <p style="color:#E4E4E4;font-family: Calibri;font-size: 14px;margin: 2px 0 0;">Araçlar: Vue.js, Vue-Router, Vuex, Firebase, Bootstrap</p>
                        <p style="color:#E4E4E4;font-family: Calibri;font-size: 14px;margin: 2px 0 0;">kuzeydev-weather.wep.app</p>
                        <p style="color:#E4E4E4;font-family: Calibri;font-size: 14px;margin: 2px 0 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
                <div>
                    <p style="font-size: 20px;margin:0;margin-top: 20px;color:#E4E4E4;font-family: Calibri;margin-left: 15px;display:flex;align-items:center">
                        <img height="27px" style="margin-right: 5px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4Ii
B2aWV3Qm94PSIwIDAgNDg4LjQgNDg4LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OC40IDQ4OC40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGNsYXNzP
SIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTI0My44LDI0MS4xMTNMMjQzLjgsMjQxLjExM2MwLjEsMCwwLjIsMCwwLjQsMGMwLjEsMCwwLjIsMCwwLjQsMGwwLDBjNjQuMS0wLjcsNTQuOC04Ni4zLDU0LjgtODYuMyAgIC
BjLTIuNi01Ny4yLTUwLjUtNTYuNy01NS4yLTU2LjVjLTQuNy0wLjItNTIuNS0wLjctNTUuMiw1Ni41QzE4OSwxNTQuOTEzLDE3OS43LDI0MC41MTMsMjQzLjgsMjQxLjExM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNs
YXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMzkzLjgsMjcwLjMxM0wzOTMuOCwyNzAuMzEzYzAuMSwwLDAuMiwwLDAuM
ywwYzAuMSwwLDAuMiwwLDAuMywwbDAsMGM1MS41LTAuNSw0NC4xLTY5LjQsNDQuMS02OS40ICAgIGMtMi4xLTQ2LTQwLjYtNDUuNi00NC40LTQ1LjVjLTMuOC0wLjItNDIuMy0wLjUtNDQuNCw0NS41QzM0OS43LDIwMS4wMTMsM
zQyLjIsMjY5LjgxMywzOTMuOCwyNzAuMzEzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRTRFNEU0IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJC
TxwYXRoIGQ9Ik00ODguMywzNDAuMTEzYy0wLjQtMTQuOC0zLjMtMjUuMS0xOC40LTM0LjZjLTIwLjEtMTIuNi00Mi42LTIzLjUtNDIuNi0yMy41bC0xNy45LDU2LjZsLTEwLjQtMjkuNyAgICBjMTguMy0yNS42LTEuMy0yNi45LTQ
uOC0yNi45bDAsMGgtMC4xSDM5NGwwLDBjLTMuNSwwLTIzLjEsMS4zLTQuOCwyNi45bC0xMC40LDI5LjZsLTE3LjktNTYuNmMwLDAtNi40LDMuMS0xNS40LDcuOSAgICBjLTIuMS0xLjctNC40LTMuNC03LTVjLTI1LTE1LjctNTIu
OS0yOS4zLTUyLjktMjkuM2wtMjIuMiw3MC4zbC0xMy0zNi45YzIyLjgtMzEuOC0xLjYtMzMuNC02LTMzLjVsMCwwaC0wLjFoLTAuMWwwLDAgICAgYy00LjQsMC0yOC44LDEuNi02LDMzLjVsLTEzLDM2LjlsLTIyLjItNzAuM2MwLDA
tMjcuOSwxMy42LTUyLjksMjkuM2MtMi43LDEuNy01LDMuNC03LjEsNS4xYy05LjEtNC45LTE1LjYtOC0xNS42LThsLTE3LjksNTYuNiAgICBsLTEwLjQtMjkuNmMxOC4zLTI1LjYtMS4zLTI2LjktNC44LTI2LjlsMCwwaC0wLjFoLT
AuMWwwLDBjLTMuNSwwLTIzLjEsMS4zLTQuOCwyNi45bC0xMC40LDI5LjZsLTE3LjktNTYuNiAgICBjMCwwLTIyLjUsMTAuOS00Mi42LDIzLjVjLTE1LjIsOS41LTE4LDE5LjgtMTguNCwzNC42djUwLjFoOTRoMzIuOWg2MS4zSDI0NG
g1NS44aDYxLjVIMzk0aDk0LjRMNDg4LjMsMzQwLjExM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0a
D4KCQk8cGF0aCBkPSJNOTMuNiwyNzAuMzEzTDkzLjYsMjcwLjMxM2MwLjEsMCwwLjIsMCwwLjMsMGMwLjEsMCwwLjIsMCwwLjMsMGwwLDBjNTEuNi0wLjUsNDQuMS02OS40LDQ0LjEtNjkuNCAgICBjLTIuMS00Ni00MC42LTQ1LjYt
NDQuNC00NS41Yy0zLjgtMC4yLTQyLjMtMC41LTQ0LjQsNDUuNUM0OS41LDIwMS4wMTMsNDIuMSwyNjkuODEzLDkzLjYsMjcwLjMxM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZ
pbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />Topluluk</p>
                    <p style="color: #E4E4E4;font-family: Calibri;font-size:16px;margin: 3px 0 0 25px;">GAÜN YAZILIM TOPLULUĞU / <i style="font-size: 14px">üye</i></p>
                    <p style="color: #E4E4E4;font-family: Calibri;font-size:16px;margin: 3px 0 0 25px;">KODLUYORUZ / <i style="font-size: 14px">mezun</i></p>
                </div>
                <div>
                    <p style="font-size: 20px;color:#E4E4E4;font-family: Calibri;margin: 20px 0 0 15px">
                        <img height="25px" style="margin-right: 5px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNTExLjU2Myw0MzQuMjU5Yy0xLjcyOC0xNDIuMzI5LTEyNC40Mi0yNTguMjQyLTI3Ny4wODctMjYzLjQxOVY5NS45OTljMC0xNy42NDUtMTQuMzQyLTMxLjk5OS0zMS45NzQtMzEuOTk5ICAgIGMtNy45MzEsMC0xNS41OTEsMy4wNDItMjEuNTI0LDguNTYyYzAsMC0xMzQuODI4LDEyNC44MjktMTczLjYwOSwxNjMuNzU1QzIuNjIzLDI0MS4xMDksMCwyNDguMDg4LDAsMjU1Ljk5NCAgICBjMCw3LjkwNiwyLjYyMywxNC44ODUsNy4zNjksMTkuNjg3YzM4Ljc4MSwzOC45MTUsMTczLjYwOSwxNjMuNzQ1LDE3My42MDksMTYzLjc0NWM1LjkzMyw1LjUyMSwxMy41OTMsOC41NjIsMjEuNTI0LDguNTYyICAgIGMxNy42MzEsMCwzMS45NzQtMTQuMzU0LDMxLjk3NC0zMS45OTl2LTc0LjU5MWMxNTMuNDc5LDIuMTU2LDI1NS43OTIsNTAuNjAzLDI1NS43OTIsOTUuOTI0YzAsNS44OTYsNC43NjcsMTAuNjY2LDEwLjY1OCwxMC42NjYgICAgYzAuMTY3LDAuMDIxLDAuMzMzLDAuMDEsMC40MTYsMGM1Ljg5MSwwLDEwLjY1OC00Ljc3MSwxMC42NTgtMTAuNjY2QzUxMiw0MzYuMjU5LDUxMS44NTQsNDM1LjIyOCw1MTEuNTYzLDQzNC4yNTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />Referans</p>
                    <p style="color: #E4E4E4;font-family: Calibri;font-size:16px;margin: 5px 0 0 35px;">Sohrat Jumadurdyyev</p>
                    <div style="width: 90%;margin-left: 25px;margin-top: 3px">
                        <p style="color:#E4E4E4;font-family: Calibri;font-size: 14px;margin: 2px 0 0 25px;"><i style="font-size: 12px;margin-right: 5px;width: 13px;text-align: center" class="fas fa-phone-alt"></i> 0 555 666 2233</p>
                        <p style="color:#E4E4E4;font-family: Calibri;font-size: 14px;margin: 2px 0 0 25px;"><i style="font-size: 12px;margin-right: 5px;width: 13px;text-align: center" class="fas fa-envelope"></i> shoki61@gmail.com</p>
                    </div>
                </div>


            </div>
        </div>













    </div>
            `
            ,
            fileName: 'deneme1',
            directory: 'docs',
        };
        let file = await RNHTMLtoPDF.convert(options);
        this.setState({ filePath: file.filePath });
    }

    //////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
    showPersonalInformation() {
        this.setState({ showPersonalInformation: true })
        this.setState({ showExperiences: false })
    }
    controlShowExperiences() {
        if (this.state.userName === '' || this.state.userNumber === '' || this.userEmail === '' || this.state.userJob === '' || this.state.userCity === '') {
            this.AlertPro.open()
        } else {
            this.setState({ showPersonalInformation: false })
            this.setState({ showExperiences: true })
            this.setState({ showResultCV: false })
        }
    }
    conrtolShowResultCV() {
        if (helper.userSchools.length <= 0) {
            this.AlertPro.open();
        }
        else {
            this.setState({ showResultCV: true })
            this.setState({ showExperiences: false })
        }
    }
    showExperiences() {
        this.setState({ showPersonalInformation: false })
        this.setState({ showExperiences: true })
        this.setState({ showResultCV: false })
    }

    renderProgressBar() {
        return (
            <View style={styles.progressBarView}>
                <View style={[styles.progressBarIconContainer, this.state.showPersonalInformation && { width: 65, height: 65, borderWidth: 3, borderColor: '#fff', elevation: 20 }]}>
                    <SImage width={this.state.showPersonalInformation ? 35 : 20} source={require('../images/userProgressBar.png')} />
                </View>
                <View style={[styles.progressBarIconContainer, this.state.showExperiences && { width: 65, height: 65, borderWidth: 3, borderColor: '#fff', elevation: 20 }]}>
                    <SImage width={this.state.showExperiences ? 35 : 20} source={require('../images/cvProgressBar.png')} />
                </View >
                <View style={[styles.progressBarIconContainer, this.state.showResultCV && { width: 65, height: 65, borderWidth: 3, borderColor: '#fff', elevation: 20 }]}>
                    <SImage width={this.state.showResultCV ? 30 : 17} source={require('../images/downloadProgressBar.png')} />
                </View>
            </View>

        )
    }
    deleteMore() {
        this.setState({ hidden: !this.state.hidden });
        if (this.state.hidden) {
            this.setState({
                userGender: 'Erkek',
            });
        } else {
            this.setState({
                userGender: '',
                userBirthDay: ''
            });
            helper.userLinks = [];
            helper.userDrivingLicencies = [];
            licence = [];
        }
    }
    getFoto = async () => {

        try {
            const sonuc1 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Dosya Okuma İzni',
                    message: 'Uygulama bu izne ihtiyaç duyuyor.',
                    buttonNeutral: 'Daha Sonra Sor',
                    buttonNegative: 'İptal',
                    buttonPositive: 'İzin Ver',
                },
            );


            const sonuc2 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Dosya Yazma İzni',
                    message: 'Uygulama bu izne ihtiyaç duyuyor.',
                    buttonNeutral: 'Daha Sonra Sor',
                    buttonNegative: 'İptal',
                    buttonPositive: 'İzin Ver',
                },
            );


            if ((sonuc1 === PermissionsAndroid.RESULTS.GRANTED) && (sonuc2 === PermissionsAndroid.RESULTS.GRANTED)) console.log('İZİN VERİLDİ');
            else console.log('İZİN VERİLMEDİ');
        }
        catch (err) { console.warn(err); }

        const options = {
            title: 'Seçenekler',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            cancelButtonTitle: 'iptal',
            takePhotoButtonTitle: 'Fotograf çek...',
            chooseFromLibraryButtonTitle: 'Galeriden seç...',
        };



        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {

                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {


                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    photoSource: source
                });
                yol = source

            }
        });
    }
    ///////listelenecek eklentiler//////////////////////////
    setReferences(item) {
        return (
            <View style={{ width: '100%', borderBottomColor: 'lightgrey', borderBottomWidth: 1, paddingBottom: 10, marginBottom: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-end', marginTop: 10, paddingLeft: 15, paddingRight: 15 }}>
                <Text style={[styles.SchoolListNumber, { backgroundColor: item.item.listNumberColor }]}>{item.index + 1}</Text>
                <View style={{ width: '36%' }}>
                    <Text style={styles.referansText} numberOfLines={1} >{item.item.name}</Text>
                    <Text style={styles.referansText} numberOfLines={1} >{item.item.tel}</Text>
                </View>
                <View style={{ width: '36%' }}>
                    {
                        item.item.companyName !== '' &&
                        <Text style={styles.referansText} numberOfLines={1} >{item.item.companyName}</Text>
                    }
                    <Text style={styles.referansText} numberOfLines={1} >{item.item.email}</Text>
                </View>
                <TouchableOpacity onPress={() => this.removeReference(item)} style={styles.removeAbilityButton}>
                    <Text style={styles.buttonText}>Çıkar</Text>
                </TouchableOpacity>
            </View>
        )
    }
    setLinks(item) {
        return (
            <View style={styles.linkContainer}>
                <Text style={[styles.listNumber, { backgroundColor: item.item.listNumberColor }]}>{item.index + 1}</Text>
                <View style={styles.linkIconStyle}><SImage width={25} source={require('../images/github.png')} /></View>
                <Text style={styles.linkNameStyle} >{item.item.link}</Text>
                <TouchableOpacity onPress={() => this.removeLink(item)} style={styles.linkRemoveButton}><Text style={styles.buttonText}>Çıkar</Text></TouchableOpacity>
            </View>
        )
    }
    setHobbies(item) {
        return (
            <View style={styles.abilityContainer}>
                <Text style={[styles.listNumber, { left: 0, backgroundColor: item.item.listNumberColor }]}>{item.index + 1}</Text>
                <Text style={styles.hobbyText}>{item.item.hobby}</Text>
                <TouchableOpacity onPress={() => this.removeHobby(item)} style={styles.removeAbilityButton}>
                    <Text style={styles.buttonText}>Çıkar</Text>
                </TouchableOpacity>
            </View>
        )
    }
    setAbilities(v) {
        return (
            <View style={styles.abilityContainer}>
                <Text style={[styles.listNumber, { left: 0, backgroundColor: v.item.listNumberColor }]}>{v.index + 1}</Text>
                <Text style={styles.abilityText}>{v.item.name}</Text>
                <Text style={styles.abilityGradeText}>{v.item.level}</Text>
                <TouchableOpacity onPress={() => this.removeAbility(v)} style={styles.removeAbilityButton}>
                    <Text style={styles.buttonText}>Çıkar</Text>
                </TouchableOpacity>
            </View>
        )
    }
    setLanguage(v) {
        return (
            <View style={styles.abilityContainer}>
                <Text style={[styles.listNumber, { left: 0, backgroundColor: v.item.listNumberColor }]}>{v.index + 1}</Text>
                <Text style={styles.abilityText}>{v.item.name}</Text>
                <Text style={styles.abilityGradeText}>{v.item.level}</Text>
                <TouchableOpacity onPress={() => this.removeLanguage(v)} style={styles.removeAbilityButton}>
                    <Text style={styles.buttonText}>Çıkar</Text>
                </TouchableOpacity>
            </View>
        )
    }
    setSchools(item) {
        return (
            <View style={[{ width: '100%', justifyContent: 'center', alignItems: 'center' }, helper.userSchools && { marginBottom: 10, marginTop: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 1, }]}>
                <Text style={[styles.SchoolListNumber, { backgroundColor: item.item.listNumberColor }]}>{item.index + 1}</Text>
                <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.schoolName}</Text>
                <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.schoolDepartment}</Text>
                <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.schoolGrade}</Text>
                <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.schoolCity}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                    <Text style={[styles.schoolInfoText, { width: '75%' }]}>{item.item.schoolStartDate} / {item.item.schoolFinishDate}</Text>
                    <TouchableOpacity onPress={() => this.removeSchool(item)} style={styles.removeAbilityButton}>
                        <Text style={styles.buttonText}>Çıkar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    setCompanies(item) {
        return (
            <View style={{ width: '100%', marginBottom: 10, marginTop: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 1, alignItems: 'center' }}>
                <Text style={[styles.SchoolListNumber, { backgroundColor: item.item.listNumberColor }]}>{item.index + 1}</Text>
                <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.companyName}</Text>
                <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.companyJob}</Text>
                <Text style={[styles.schoolInfoText, { textAlignVertical: 'top', height: 80, paddingTop: 7 }]}>{item.item.companyDescription}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                    <Text style={[styles.schoolInfoText, { width: '75%' }]}>{item.item.companyStartDate} / {item.item.companyFinishDate}</Text>
                    <TouchableOpacity onPress={() => this.removeCompany(item)} style={styles.removeAbilityButton}>
                        <Text style={styles.buttonText}>Çıkar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    setProjects(item) {
        return (
            <View style={{ width: '100%', marginBottom: 10, marginTop: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 1, alignItems: 'center' }}>
                <Text style={[styles.SchoolListNumber, { backgroundColor: item.item.listNumberColor }]}>{item.index + 1}</Text>
                <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.projectName}</Text>
                {
                    item.item.projectTools !== '' &&
                    <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.projectTools}</Text>
                }
                <Text style={[styles.schoolInfoText, { textAlignVertical: 'top', height: 80, paddingTop: 7 }]}>{item.item.projectDescription}</Text>
                <View style={[{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }, item.item.projectLink === '' && { justifyContent: 'flex-end', paddingBottom: 10 }]}>
                    {
                        item.item.projectLink !== '' &&
                        <Text style={[styles.schoolInfoText, { width: '75%' }]}>{item.item.projectLink}</Text>
                    }
                    <TouchableOpacity onPress={() => this.removeProject(item)} style={styles.removeAbilityButton}>
                        <Text style={styles.buttonText}>Çıkar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    setCommunities(item) {
        return (
            <View style={{ width: '100%', marginBottom: 10, marginTop: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 1, alignItems: 'center' }}>
                <Text style={[styles.SchoolListNumber, { backgroundColor: item.item.listNumberColor }]}>{item.index + 1}</Text>
                <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.communityName}</Text>
                <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.communityTitle}</Text>
                {
                    item.item.communityDescription !== '' &&
                    <Text style={[styles.schoolInfoText, { textAlignVertical: 'top', height: 80, paddingTop: 7 }]}>{item.item.communityDescription}</Text>
                }
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                    <Text style={[styles.schoolInfoText, { width: '75%' }]}>{item.item.communityStartDate} / {item.item.communityFinishDate}</Text>
                    <TouchableOpacity onPress={() => this.removeCommunity(item)} style={styles.removeAbilityButton}>
                        <Text style={styles.buttonText}>Çıkar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    setDrivingLicencies(item) {
        return (
            <View>
                <TouchableOpacity onPress={() => this.removeDrivingLicence(item)}>
                    <Text style={[styles.drivingLicence, { borderColor: item.item.color, color: item.item.color }]}>{item.item.licence}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    ////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////

    ////////listeleri çıkaran fonksyonlar////////////////////////
    removeHobby(v) {
        helper.userHobbies.splice(v.index, 1)
        this.setState({ userHobby: hobby })
    }
    removeDrivingLicence(v) {
        helper.userDrivingLicencies.splice(v.index, 1)
        licence = helper.userDrivingLicencies.map(el => el.licence);
        this.setState({ userDrivingLicence: '' })
    }
    removeReference(v) {
        helper.userReferences.splice(v.index, 1)
        this.setState({ userReferenceName: reference.name })
        //alert(JSON.stringify(helper.userReferences))
    }
    removeLink(v) {
        helper.userLinks.splice(v.index, 1)
        this.setState({ userLinks: link })
    }
    removeLanguage(v) {
        helper.UserLanguages.splice(v.index, 1)
        this.setState({ userLanguage: language })
    }
    removeAbility(v) {
        helper.userAbilities.splice(v.index, 1)
        this.setState({ userAbility: ability })
    }
    removeSchool(v) {
        helper.userSchools.splice(v.index, 1)
        this.setState({ userSchoolName: school.schoolName })
    }
    removeCommunity(v) {
        helper.userCommunities.splice(v.index, 1)
        this.setState({ userCommunityName: community.communityName })
    }
    removeProject(v) {
        helper.userProjects.splice(v.index, 1)
        this.setState({ userProjectName: project.projectName })
    }
    removeCompany(v) {
        helper.userCompanies.splice(v.index, 1)
        this.setState({ userCompanyName: company.companyName })
    }
    ///////////////////////////////////////////////////
    //////////////////////////////////////////////////



    ///////listeye ekleyen fonksyonlar//////////////    
    controlLink() {
        if (link === '') {
            this.setState({ warningLink: true })
        } else {
            helper.setUserLinks(link, this.state.color);
            this.setState({
                userLink: '',
                warningLink: false
            });
            link = ''

        }
    }
    controlAbility() {
        if (ability.name === '') {
            this.setState({ warningAbility: true })
        } else {
            helper.setUserAbilities(ability, this.state.color);
            this.setState({
                userAbility: '',
                warningAbility: false
            });
            ability.name = ''

        }
    }
    controlLanguage() {
        if (language.name === '') {
            this.setState({ warningLanguage: true })
        } else {
            helper.setUserLanguages(language, this.state.color);
            this.setState({
                userLanguage: '',
                warningLanguage: false
            });
            language.name = ''
        }
    }
    controlHobby() {
        if (hobby === '') {
            this.setState({ warningHobby: true })
        } else {
            helper.setUserHobbies(hobby, this.state.color);
            this.setState({
                userHobby: '',
                warningHobby: false
            });
            hobby = '';

        }
    }
    controlReference() {
        if (reference.name === '' || reference.tel === '' || reference.email === '') {
            if (reference.name === '') this.setState({ warningReferenceName: true });
            if (reference.tel === '') this.setState({ warningReferenceTel: true });
            if (reference.email === '') this.setState({ warningReferenceEmail: true });
        } else {
            helper.setUserReferences(reference, this.state.color);
            this.setState({
                userReferenceName: '',
                userReferenceNumber: '',
                userReferenceEmail: '',
                userReferenceCompanyName: '',

                warningReferenceName: false,
                warningReferenceTel: false,
                warningReferenceEmail: false,
            });
            reference.name = '';
            reference.tel = '';
            reference.email = '';
        }
    }
    controlProject() {
        if (project.projectName === '' || project.projectDescription === '') {
            if (project.projectName === '') this.setState({ warningProjectName: true });
            if (project.projectDescription === '') this.setState({ warningProjectDescription: true })
        } else {
            helper.setUserProjects(project, this.state.color)
            this.setState({
                userProjectName: '',
                userProjectLink: '',
                userProjectTools: '',
                userProjectDescription: '',

                warningProjectName: false,
                warningProjectDescription: false
            });
            project.projectName = '';
            project.projectTools = '';
            project.projectLink = '';
            project.projectDescription = '';
        }
    }
    controlCompany() {
        if (company.companyName === '' || company.companyJob === '' || company.companyStartDate === '' || company.companyFinishDate === '' || company.companyDescription === '') {
            if (company.companyName === '') this.setState({ warningCompanyName: true })
            if (company.companyJob === '') this.setState({ warningCompanyJob: true })
            if (company.companyDescription === '') this.setState({ warningCompanyDescription: true })
            if (company.companyStartDate === '' || company.companyFinishDate === '') this.setState({ warningCompanyDate: true })
        } else {
            helper.setUserCompanies(company, this.state.color);
            this.setState({
                userCompanyName: '',
                userCompanyJob: '',
                userCompanyStartDate: '',
                userCompanyFinishDate: '',
                userCompanyDescription: '',

                warningCompanyName: false,
                warningCompanyJob: false,
                warningCompanyDate: false,
                warningCompanyDescription: false
            });
            company.companyName = '';
            company.companyJob = '';
            company.companyStartDate = '';
            company.companyFinishDate = '';
            company.companyDescription = '';
        }
    }
    controlSchool() {
        if (school.schoolName === '' || school.schoolDepartment === '' || school.schoolGrade === '' || school.schoolCity === '' || school.schoolStartDate === '' || school.schoolFinishDate === '') {
            if (school.schoolName === '') this.setState({ warningSchoolName: true })
            if (school.schoolDepartment === '') this.setState({ warningSchoolDepartment: true })
            if (school.schoolCity === '') this.setState({ warningSchoolCity: true })
            if (school.schoolStartDate === '' || school.schoolFinishDate === '') this.setState({ warningSchoolDate: true })
        } else {
            helper.setUserSchools(school, this.state.color);

            this.setState({
                userSchoolName: '',
                userSchoolDepartment: '',
                userSchoolCity: '',
                userSchoolStartDate: '',
                userSchoolFinishDate: '',

                warningSchoolName: false,
                warningSchoolDepartment: false,
                warningSchoolCity: false,
                warningSchoolDate: false,
            });
            school.schoolName = '';
            school.schoolDepartment = '';
            school.schoolCity = '';
            school.schoolStartDate = '';
            school.schoolFinishDate = '';

        }
    }
    controlCommunity() {
        if (community.communityName === '' || community.communityTitle === '' || community.communityStartDate === '' || community.communityFinishDate === '') {
            if (community.communityName === '') this.setState({ warningCommunityName: true })
            if (community.communityTitle === '') this.setState({ warningCommunityTitle: true })
            if (community.communityStartDate === '' || community.communityFinishDate === '') this.setState({ warningCommunityDate: true })
        } else {
            helper.setUserCommunities(community, this.state.color);
            this.setState({
                userCommunityName: '',
                userCommunityTitle: '',
                userCommunityStartDate: '',
                userCommunityFinishDate: '',
                userCommunityDescription: '',

                warningCommunityName: false,
                warningCommunityTitle: false,
                warningCommunityDate: false
            });
            community.communityName = '';
            community.communityTitle = '';
            community.communityStartDate = '';
            community.communityFinishDate = '';
            community.communityDescription = '';
        }
    }
    pushDrivingLicence(v, color) {
        helper.setUserDrivingLicencies(v, color);
        this.setState({ userDrivingLicence: v })
        licence = helper.userDrivingLicencies.map(el => el.licence);
    }
    /////////////////////////////////////////////////
    ////////////////////////////////////////////////

    renderPersonalInformation() {
        return (

            <View style={{ width: '100%', marginTop: 100 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View >
                        <View style={styles.photoContainer}>
                            <Image style={styles.photoStyle} source={this.state.photoSource === null ? require('../images/defaultPhoto.png') : this.state.photoSource} />
                        </View>

                        <TouchableOpacity onPress={() => this.getFoto()} style={styles.selectButton}>
                            <Text style={styles.photoButtonText}>{this.state.photoSource === null ? 'Fotograf yükle' : 'Fotografı değiştir'}</Text>
                        </TouchableOpacity>

                        {
                            this.state.photoSource !== null &&
                            <TouchableOpacity onPress={() => this.setState({ photoSource: null })} style={styles.removeButton}>
                                <Text style={styles.photoButtonText}>Fotografı çıkar</Text>
                            </TouchableOpacity>
                        }
                    </View>

                    <View style={{ width: '60%' }}>
                        <Text style={styles.inputTitle}>Ad, Soyad <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                        <View style={styles.inputView}>
                            <SImage width={20} source={require('../images/userForm.png')} />
                            <TextInput
                                value={this.state.userName}
                                onChangeText={(text) => this.setState({ userName: text })}
                                placeholder='...'
                                style={styles.inputStyle} />
                        </View>

                        <Text style={styles.inputTitle}>Telefon numarası <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                        <View style={styles.inputView}>
                            <SImage width={20} source={require('../images/phone.png')} />
                            <TextInput
                                value={this.state.userNumber}
                                onChangeText={(text) => this.setState({ userNumber: text })}
                                placeholder='...'
                                keyboardType='numeric'
                                style={styles.inputStyle} />
                        </View>


                        <Text style={styles.inputTitle}>E-posta <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                        <View style={styles.inputView}>
                            <SImage width={20} source={require('../images/mail.png')} />
                            <TextInput
                                value={this.state.userEmail}
                                onChangeText={(text) => this.setState({ userEmail: text })}
                                placeholder='...'
                                keyboardType='email-address'
                                style={styles.inputStyle} />
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={this.askPermission.bind(this)}>
                    <Text>pdfe dönüştür</Text>
                </TouchableOpacity>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text style={styles.inputTitle}>Meslek <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                    <View style={[styles.inputView, { width: '90%' }]}>
                        <SImage width={20} source={require('../images/manager.png')} />
                        <TextInput
                            value={this.state.userJob}
                            onChangeText={(text) => this.setState({ userJob: text })}
                            placeholder='...'
                            style={[styles.inputStyle, { width: '90%', paddingLeft: 10 }]} />
                    </View>

                    <Text style={styles.inputTitle}>Şehir/ilçe <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                    <View style={[styles.inputView, { width: '90%' }]}>
                        <SImage width={20} source={require('../images/pin.png')} />
                        <TextInput
                            value={this.state.userCity}
                            onChangeText={(text) => this.setState({ userCity: text })}
                            placeholder='...'
                            style={[styles.inputStyle, { width: '90%' }]} />
                    </View>

                    <Text style={styles.inputTitle}>Adress</Text>
                    <View style={[styles.inputView, { width: '90%' }]}>
                        <SImage width={20} source={require('../images/adress.png')} />
                        <TextInput
                            value={this.state.userAddress}
                            onChangeText={(text) => this.setState({ userAddress: text })}
                            placeholder='...'
                            style={[styles.inputStyle, { width: '90%' }]} />
                    </View>

                    <Text style={styles.inputTitle}>Posta kodu</Text>
                    <View style={[styles.inputView, { width: '90%' }]}>
                        <SImage width={20} source={require('../images/post.png')} />
                        <TextInput
                            value={this.state.userPostalCode}
                            onChangeText={(text) => this.setState({ userPostalCode: text })}
                            placeholder='...'
                            keyboardType='numeric'
                            style={[styles.inputStyle, { width: '90%' }]} />
                    </View>

                    {
                        this.state.hidden === false &&
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <Text style={styles.inputTitle}>Doğum tarihi</Text>
                            <DatePicker
                                androidMode='spinner'
                                iconSource={require('../images/calendar.png')}
                                style={styles.dateInput}
                                date={this.state.userBirthDay}
                                mode="date"
                                placeholder='gg-aa-yyyy'
                                format="DD-MM-YYYY"
                                minDate={this.state.minDate}
                                maxDate={this.state.maxDate}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: -4,
                                        width: 18,
                                        height: 18,
                                        bottom: 13
                                    },
                                    dateInput: {
                                        borderWidth: 0,
                                    },
                                    placeholderText: {
                                        paddingLeft: 10,
                                        paddingBottom: 5,
                                        color: '#737373',
                                        width: '90%'
                                    },
                                    dateText: {
                                        width: '100%',
                                        color: '#737373',
                                        marginLeft: 60,
                                        paddingBottom: 5
                                    }
                                }}
                                onDateChange={(date) => { this.setState({ userBirthDay: date }) }}
                            />

                            <Text style={styles.inputTitle}>Cinsiyet</Text>
                            <View style={[styles.inputView, { width: '90%' }]}>
                                <SImage width={20} source={require('../images/gender.png')} />
                                <Picker
                                    selectedValue={this.state.userGender}
                                    itemStyle={{ color: 'green', fontSize: 10 }}
                                    style={{
                                        width: '90%', height: 35, color: 'grey'
                                    }}
                                    onValueChange={(text) => this.setState({ userGender: text })}
                                    mode='dropdown'
                                >
                                    <Picker.Item label="Erkek" value="Erkek" />
                                    <Picker.Item label="Kadın" value="Kadın" />
                                </Picker>

                            </View>

                            <Text style={styles.inputTitle}>Sürücü ehliyeti</Text>
                            <View style={[styles.inputView, { width: '90%', height: 'auto', flexDirection: 'column', padding: 10 }]}>
                                {
                                    licence.length > 0 &&
                                    <Text style={styles.infoTitle}>Çıkar</Text>
                                }
                                <FlatList
                                    contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', }}
                                    style={[licence.length > 0 && { marginBottom: 10, paddingBottom: 10, width: '100%' }, licence.length !== 12 && { borderBottomColor: 'lightgrey', borderBottomWidth: 1 }]}
                                    data={helper.userDrivingLicencies}
                                    renderItem={data => this.setDrivingLicencies(data)}
                                    showsVerticalScrollIndicator={false}
                                />

                                {
                                    licence.length !== 12 &&
                                    < Text style={styles.infoTitle}>Ekle</Text>
                                }
                                <View>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        {
                                            !licence.includes('A') &&
                                            <TouchableOpacity onPress={() => this.pushDrivingLicence('A', this.state.color)} disabled={licence.includes('A')}><Text style={styles.drivingLicence}>A</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('AM') &&
                                            <TouchableOpacity onPress={() => this.pushDrivingLicence('AM', this.state.color)} disabled={licence.includes('AM')}><Text style={styles.drivingLicence}>AM</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('B') &&
                                            <TouchableOpacity onPress={() => this.pushDrivingLicence('B', this.state.color)} disabled={licence.includes('B')}><Text style={styles.drivingLicence} >B</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('BE') &&
                                            <TouchableOpacity onPress={() => this.pushDrivingLicence('BE', this.state.color)} disabled={licence.includes('BE')}><Text style={styles.drivingLicence} >BE</Text></TouchableOpacity>
                                        }

                                        {
                                            !licence.includes('C') &&
                                            <TouchableOpacity onPress={() => this.pushDrivingLicence('C', this.state.color)} disabled={licence.includes('C')}><Text style={styles.drivingLicence}>C</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('CE') &&
                                            <TouchableOpacity onPress={() => this.pushDrivingLicence('CE', this.state.color)} disabled={licence.includes('CE')}><Text style={styles.drivingLicence} >CE</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('C1') &&
                                            <TouchableOpacity onPress={() => this.pushDrivingLicence('C1', this.state.color)} disabled={licence.includes('C1')}><Text style={styles.drivingLicence} >C1</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('C1E') &&
                                            <TouchableOpacity onPress={() => this.pushDrivingLicence('C1E', this.state.color)} disabled={licence.includes('C1E')}><Text style={styles.drivingLicence} >C1E</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('D') &&
                                            <TouchableOpacity onPress={() => this.pushDrivingLicence('D', this.state.color)} disabled={licence.includes('D')}><Text style={styles.drivingLicence} >D</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('DE') &&
                                            <TouchableOpacity onPress={() => this.pushDrivingLicence('DE', this.state.color)} disabled={licence.includes('DE')}><Text style={styles.drivingLicence}>DE</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('D1') &&
                                            <TouchableOpacity onPress={() => this.pushDrivingLicence('D1', this.state.color)} disabled={licence.includes('D1')}><Text style={styles.drivingLicence} >D1</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('D1E') &&
                                            <TouchableOpacity onPress={() => this.pushDrivingLicence('D1E', this.state.color)} disabled={licence.includes('D1E')}><Text style={styles.drivingLicence} >D1E</Text></TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            </View>

                            <Text style={styles.inputTitle}>Linkler</Text>
                            <View style={styles.linksContainer}>
                                <FlatList
                                    style={{ width: '100%' }}
                                    data={helper.userLinks}
                                    renderItem={data => this.setLinks(data)}
                                    showsVerticalScrollIndicator={false}
                                />
                                <View style={styles.linkInputContainer}>
                                    <View style={styles.linkIconStyle}><SImage width={25} source={require('../images/github.png')} /></View>
                                    <TextInput
                                        value={this.state.userLink}
                                        placeholder='...'
                                        onChangeText={text => { link = text; this.setState({ userLink: text }) }}
                                        style={[styles.linkInputStyle, this.state.warningLink && link === '' && { borderColor: 'red' }]} />
                                    <TouchableOpacity onPress={() => this.controlLink()} style={styles.linkAddButton}>
                                        <Text style={styles.buttonText}>Ekle</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    }
                </View>

                <TouchableOpacity onPress={() => this.deleteMore()} style={styles.moreButton}>
                    <SImage width={35} source={this.state.hidden ? require('../images/plusIcon.png') : require('../images/minusIcon.png')} />
                    <Text style={{ color: '#B0B0B0' }}>{this.state.hidden ? 'Daha fazla...' : 'Daha az...'}</Text>
                </TouchableOpacity>

                <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => this.controlShowExperiences()} style={styles.selectButton}>
                        <Text style={styles.buttonText}>İleri</Text>
                    </TouchableOpacity>
                </View>



            </View >
        )
    }


    renderExperiences() {

        return (
            <View style={{ width: '100%', marginTop: 100, alignItems: 'center' }}>

                {/*Eğitim kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, }}>
                    <SImage width={40} source={require('../images/graduate.png')} />
                    <Text style={styles.inputTitle}>Eğitim <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                </View>
                <View style={styles.infoContainer}>

                    <FlatList
                        style={[{ width: '100%' }, helper.userSchools.length > 0 && { marginBottom: 20, marginTop: 10 }]}
                        data={helper.userSchools}
                        renderItem={data => this.setSchools(data)}
                        showsVerticalScrollIndicator={false}
                    />

                    <View style={{ width: '90%', alignItems: 'center', paddingTop: 10 }}>
                        <Text style={styles.infoTitle}>Okul/Fakülte</Text>
                        <View style={[styles.experiencesInputView, this.state.warningSchoolName && school.schoolName === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/school.png')} />
                            <TextInput
                                value={this.state.userSchoolName}
                                placeholder='...'
                                onChangeText={(text) => { school.schoolName = text; this.setState({ userSchoolName: text }) }}
                                style={styles.infoInput} />
                        </View>


                        <Text style={styles.infoTitle}>Bölüm</Text>
                        <View style={[styles.experiencesInputView, this.state.warningSchoolDepartment && school.schoolDepartment === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/department.png')} />
                            <TextInput
                                placeholder='...'
                                value={this.state.userSchoolDepartment}
                                onChangeText={(text) => { school.schoolDepartment = text; this.setState({ userSchoolDepartment: text }) }}
                                style={styles.infoInput} />
                        </View>





                        <Text style={styles.infoTitle}>Derece</Text>
                        <View style={[styles.experiencesInputView, this.state.warningSchoolGrade && school.schoolGrade === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/degree.png')} />

                            <SchoolGrade />
                        </View>

                        <Text style={styles.infoTitle}>Şehir/ilçe</Text>
                        <View style={[styles.experiencesInputView, this.state.warningSchoolCity && school.schoolCity === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/pin.png')} />
                            <TextInput
                                placeholder='...'
                                value={this.state.userSchoolCity}
                                onChangeText={(text) => { school.schoolCity = text; this.setState({ userSchoolCity: text }) }}
                                style={styles.infoInput} />
                        </View>

                        <Text style={styles.infoTitle}>Başlangıç ve bitiş tarihi</Text>
                        <View style={[styles.experiencesInputView, this.state.warningSchoolDate && school.schoolStartDate === '' && { borderColor: 'red' }, this.state.warningSchoolDate && school.schoolFinishDate === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/calendar.png')} />
                            <DatePicker
                                androidMode='spinner'
                                style={[styles.infoInput, { width: 65, marginBottom: 5, padding: 0 }]}
                                date={this.state.userSchoolStartDate}
                                showIcon={false}
                                placeholder='aa-yyyy'
                                mode="date"
                                format="MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    placeholderText: {
                                        color: '#8D8D8D',
                                        fontSize: 15
                                    },
                                    dateInput: {
                                        borderWidth: 0
                                    },
                                    dateText: {
                                        width: '100%',
                                        color: '#8D8D8D',
                                    }
                                }}
                                onDateChange={(date) => { school.schoolStartDate = date; this.setState({ userSchoolStartDate: date }) }}
                            />
                            <Text style={{ fontSize: 20, color: '#737373' }}>/</Text>
                            <DatePicker
                                androidMode='spinner'
                                style={[styles.infoInput, { width: 100, marginBottom: 5, paddingLeft: 0 }]}
                                date={this.state.userSchoolFinishDate}
                                showIcon={false}
                                placeholder='aa-yyyy'
                                mode="date"
                                format="MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    placeholderText: {
                                        color: '#8D8D8D',
                                        fontSize: 15,
                                        width: '100%'
                                    },
                                    dateInput: {
                                        borderWidth: 0,
                                    },
                                    dateText: {
                                        width: '100%',
                                        color: '#8D8D8D',
                                        paddingLeft: 5
                                    }
                                }}
                                onDateChange={(date) => { school.schoolFinishDate = date; this.setState({ userSchoolFinishDate: date }) }}
                            />

                        </View>




                    </View>
                    <View style={{ width: '90%', alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => this.controlSchool()} style={[styles.linkAddButton, { marginTop: 10, right: 0 }]}>
                            <Text style={styles.buttonText}>Ekle</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/*Iş deneyimi kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, marginTop: 15 }}>
                    <SImage width={40} source={require('../images/work.png')} />
                    <Text style={styles.inputTitle}>İş deneyimi</Text>
                </View>
                <View style={styles.infoContainer}>
                    <FlatList
                        style={[{ width: '100%' }, helper.userCompanies.length > 0 && { marginBottom: 15 }]}
                        data={helper.userCompanies}
                        renderItem={data => this.setCompanies(data)}
                        showsVerticalScrollIndicator={false}
                    />

                    <View style={{ width: '90%', alignItems: 'center' }}>
                        <Text style={styles.infoTitle}>İş yeri</Text>
                        <View style={[styles.experiencesInputView, this.state.warningCompanyName && this.state.userCompanyName === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/workplace.png')} />
                            <TextInput
                                value={this.state.userCompanyName}
                                placeholder='...'
                                onChangeText={(text) => { company.companyName = text; this.setState({ userCompanyName: text }) }}
                                style={styles.infoInput} />
                        </View>

                        <Text style={styles.infoTitle}>Meslek</Text>
                        <View style={[styles.experiencesInputView, this.state.warningCompanyJob && this.state.userCompanyJob === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/manager.png')} />
                            <TextInput
                                placeholder='...'
                                value={this.state.userCompanyJob}
                                onChangeText={(text) => { company.companyJob = text; this.setState({ userCompanyJob: text }) }}
                                style={styles.infoInput} />
                        </View>


                        <Text style={styles.infoTitle}>Başlangıç ve bitiş tarihi</Text>
                        <View style={[styles.experiencesInputView, this.state.warningCompanyDate && this.state.userCompanyStartDate === '' && { borderColor: 'red' }, this.state.warningCompanyDate && this.state.userCompanyFinishDate === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/calendar.png')} />
                            <DatePicker
                                androidMode='spinner'
                                style={[styles.infoInput, { width: 65, marginBottom: 5, padding: 0 }]}
                                date={this.state.userCompanyStartDate}
                                showIcon={false}
                                placeholder='aa-yyyy'
                                mode="date"
                                format="MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    placeholderText: {
                                        color: '#8D8D8D',
                                        fontSize: 15
                                    },
                                    dateInput: {
                                        borderWidth: 0
                                    },
                                    dateText: {
                                        width: '100%',
                                        color: '#8D8D8D',
                                    }
                                }}
                                onDateChange={(date) => { company.companyStartDate = date; this.setState({ userCompanyStartDate: date }) }}
                            />
                            <Text style={{ fontSize: 20, color: '#737373' }}>/</Text>
                            <DatePicker
                                androidMode='spinner'
                                style={[styles.infoInput, { width: 100, marginBottom: 5, paddingLeft: 0 }]}
                                date={this.state.userCompanyFinishDate}
                                showIcon={false}
                                placeholder='aa-yyyy'
                                mode="date"
                                format="MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    placeholderText: {
                                        color: '#8D8D8D',
                                        fontSize: 15,
                                        width: '100%'
                                    },
                                    dateInput: {
                                        borderWidth: 0,
                                    },
                                    dateText: {
                                        width: '100%',
                                        color: '#8D8D8D',
                                        paddingLeft: 5
                                    }
                                }}
                                onDateChange={(date) => { company.companyFinishDate = date; this.setState({ userCompanyFinishDate: date }) }}
                            />
                        </View>


                        <Text style={styles.infoTitle}>Açıklama</Text>
                        <View style={[styles.experiencesDescInputView, this.state.warningCompanyDescription && this.state.userCompanyDescription === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/comment.png')} />
                            <TextInput
                                value={this.state.userCompanyDescription}
                                onChangeText={(text) => { company.companyDescription = text; this.setState({ userCompanyDescription: text }) }}
                                multiline={true}
                                numberOfLines={4}
                                placeholder={'...'}
                                style={styles.descriptionInput} />
                        </View>
                    </View>
                    <View style={{ width: '90%', alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => this.controlCompany()} style={[styles.linkAddButton, { marginTop: 10 }]}>
                            <Text style={styles.buttonText}>Ekle</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/*Projeler kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, marginTop: 15 }}>
                    <SImage width={40} source={require('../images/project.png')} />
                    <Text style={styles.inputTitle}>Projeler</Text>
                </View>
                <View style={styles.infoContainer}>
                    <FlatList
                        style={{ width: '100%', marginTop: 5, }}
                        data={helper.userProjects}
                        renderItem={data => this.setProjects(data)}
                        showsVerticalScrollIndicator={false}
                    />

                    <View style={{ width: '90%', alignItems: 'center' }}>
                        <Text style={styles.infoTitle}>Proje adı</Text>
                        <View style={[styles.experiencesInputView, this.state.warningProjectName && project.projectName === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/projectName.png')} />
                            <TextInput
                                placeholder='...'
                                value={this.state.userProjectName}
                                onChangeText={(text) => { project.projectName = text; this.setState({ userProjectName: text }) }}
                                style={styles.infoInput} />
                        </View>



                        <Text style={styles.infoTitle}>Araçlar</Text>
                        <View style={styles.experiencesInputView}>
                            <SImage width={23} source={require('../images/tools.png')} />
                            <TextInput
                                placeholder='...'
                                value={this.state.userProjectTools}
                                onChangeText={(text) => { project.projectTools = text; this.setState({ userProjectTools: text }) }}
                                style={styles.infoInput} />
                        </View>



                        <Text style={styles.infoTitle}>Link</Text>
                        <View style={styles.experiencesInputView}>
                            <SImage width={20} source={require('../images/linkIcon.png')} />
                            <TextInput
                                placeholder='...'
                                value={this.state.userProjectLink}
                                onChangeText={(text) => { project.projectLink = text; this.setState({ userProjectLink: text }) }}
                                style={styles.infoInput} />
                        </View>



                        <Text style={styles.infoTitle}>Açıklama</Text>
                        <View style={[styles.experiencesDescInputView, this.state.warningProjectDescription && project.projectDescription === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/comment.png')} />
                            <TextInput
                                value={this.state.userProjectDescription}
                                onChangeText={(text) => { project.projectDescription = text; this.setState({ userProjectDescription: text }) }}
                                multiline={true}
                                numberOfLines={4}
                                placeholder={'...'}
                                style={styles.descriptionInput} />
                        </View>
                    </View>
                    <View style={{ width: '90%', alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => this.controlProject()} style={[styles.linkAddButton, { marginTop: 10 }]}>
                            <Text style={styles.buttonText}>Ekle</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                {/*Yetenekler kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, marginTop: 15 }}>
                    <SImage width={40} source={require('../images/abilityTitle.png')} />
                    <Text style={styles.inputTitle}>Yetenekler</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <FlatList
                            style={{ width: '100%', marginTop: 10 }}
                            data={helper.userAbilities}
                            renderItem={data => this.setAbilities(data)}
                            showsVerticalScrollIndicator={false}
                        />

                        <View style={styles.chooseTalentContainer}>
                            <View style={{ width: '35%' }}>
                                <Text style={styles.chooseTalentTitle}>Yetenek gir</Text>
                                <TextInput
                                    placeholder='...'
                                    value={this.state.userAbility}
                                    onChangeText={(text) => { ability.name = text; this.setState({ userAbility: text }) }}
                                    style={[styles.abilityInput, this.state.warningAbility && ability.name === '' && { borderColor: 'red' }]} />


                            </View>
                            <View style={{ width: '40%', }}>
                                <Text style={styles.chooseTalentTitle}>Seviye seç</Text>
                                <Ability />

                            </View>
                            <TouchableOpacity onPress={() => this.controlAbility()} style={styles.selectAbilityButton}>
                                <Text style={styles.buttonText}>Ekle</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                {/*Bildiği diller kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, marginTop: 15 }}>
                    <SImage width={40} source={require('../images/languageTitle.png')} />
                    <Text style={styles.inputTitle}>Diller</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <FlatList
                            style={{ width: '100%', marginTop: 10 }}
                            data={helper.UserLanguages}
                            renderItem={data => this.setLanguage(data)}
                            showsVerticalScrollIndicator={false}
                        />
                        <View style={styles.chooseTalentContainer}>
                            <View style={{ width: '35%' }}>
                                <Text style={styles.chooseTalentTitle}>Dil gir</Text>
                                <TextInput
                                    value={this.state.userLanguage}
                                    placeholder='...'
                                    onChangeText={(text) => { language.name = text; this.setState({ userLanguage: text }) }}
                                    style={[styles.abilityInput, this.state.warningLanguage && language.name === '' && { borderColor: 'red' }]} />

                            </View>
                            <View style={{ width: '40%' }}>
                                <Text style={styles.chooseTalentTitle}>Seviye seç</Text>
                                <Language />

                            </View>
                            <TouchableOpacity onPress={() => this.controlLanguage()} style={styles.selectAbilityButton}>
                                <Text style={styles.buttonText}>Ekle</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                {/*Ilgi alanı kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, marginTop: 15 }}>
                    <SImage width={40} source={require('../images/heart.png')} />
                    <Text style={styles.inputTitle}>İlgi alanı</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={{ width: '100%', alignItems: 'center' }}>

                        <FlatList
                            style={{ width: '100%', marginTop: 10 }}
                            data={helper.userHobbies}
                            renderItem={data => this.setHobbies(data)}
                            showsVerticalScrollIndicator={false}
                        />

                        <View style={styles.chooseTalentContainer}>
                            <View style={{ width: '72%' }}>
                                <Text style={styles.chooseTalentTitle}>İlgi alanı gir</Text>
                                <TextInput
                                    value={this.state.userHobby}
                                    placeholder='...'
                                    onChangeText={(text) => { hobby = text; this.setState({ userHobby: text }) }}
                                    style={[styles.abilityInput, this.state.warningHobby && hobby === '' && { borderColor: 'red' }]} />

                            </View>
                            <TouchableOpacity onPress={() => this.controlHobby()} style={styles.selectHobbyButton}>
                                <Text style={styles.buttonText}>Ekle</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/*Topluluk kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, marginTop: 15 }}>
                    <SImage width={40} source={require('../images/communityTitle.png')} />
                    <Text style={styles.inputTitle}>Topluluk</Text>
                </View>
                <View style={styles.infoContainer}>
                    <FlatList
                        style={{ width: '100%', marginTop: 5, }}
                        data={helper.userCommunities}
                        renderItem={data => this.setCommunities(data)}
                        showsVerticalScrollIndicator={false}
                    />
                    <View style={{ width: '90%', alignItems: 'center' }}>
                        <Text style={styles.infoTitle}>Topluluk adı</Text>
                        <View style={[styles.experiencesInputView, this.state.warningCommunityName && community.communityName === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/community.png')} />
                            <TextInput
                                placeholder='...'
                                value={this.state.userCommunityName}
                                onChangeText={(text) => { community.communityName = text; this.setState({ userCommunityName: text }) }}
                                style={styles.infoInput} />
                        </View>

                        <Text style={styles.infoTitle}>Ünvan</Text>
                        <View style={[styles.experiencesInputView, this.state.warningCommunityTitle && community.communityTitle === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/manager.png')} />
                            <TextInput
                                placeholder='...'
                                value={this.state.userCommunityTitle}
                                onChangeText={(text) => { community.communityTitle = text; this.setState({ userCommunityTitle: text }) }}
                                style={styles.infoInput} />
                        </View>

                        <Text style={styles.infoTitle}>Başlangıç ve bitiş tarihi</Text>
                        <View style={[styles.experiencesInputView, this.state.warningCommunityDate && community.communityStartDate === '' && { borderColor: 'red' }, this.state.warningCommunityDate && community.communityFinishDate === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/calendar.png')} />
                            <DatePicker
                                androidMode='spinner'
                                style={[styles.infoInput, { width: 65, marginBottom: 5, padding: 0 }]}
                                date={this.state.userCommunityStartDate}
                                showIcon={false}
                                placeholder='aa-yyyy'
                                mode="date"
                                format="MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    placeholderText: {
                                        color: '#8D8D8D',
                                        fontSize: 15
                                    },
                                    dateInput: {
                                        borderWidth: 0
                                    },
                                    dateText: {
                                        width: '100%',
                                        color: '#8D8D8D',
                                    }
                                }}
                                onDateChange={(date) => { community.communityStartDate = date; this.setState({ userCommunityStartDate: date }) }}
                            />
                            <Text style={{ fontSize: 20, color: '#737373' }}>/</Text>
                            <DatePicker
                                androidMode='spinner'
                                style={[styles.infoInput, { width: 100, marginBottom: 5, paddingLeft: 0 }]}
                                date={this.state.userCommunityFinishDate}
                                showIcon={false}
                                placeholder='aa-yyyy'
                                mode="date"
                                format="MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    placeholderText: {
                                        color: '#8D8D8D',
                                        fontSize: 15,
                                        width: '100%'
                                    },
                                    dateInput: {
                                        borderWidth: 0,
                                    },
                                    dateText: {
                                        width: '100%',
                                        color: '#8D8D8D',
                                        paddingLeft: 5
                                    }
                                }}
                                onDateChange={(date) => { community.communityFinishDate = date; this.setState({ userCommunityFinishDate: date }) }}
                            />
                        </View>

                        <Text style={styles.infoTitle}>Açıklama</Text>
                        <View style={styles.experiencesDescInputView}>
                            <SImage width={23} source={require('../images/comment.png')} />
                            <TextInput
                                value={this.state.userCommunityDescription}
                                onChangeText={(text) => { community.communityDescription = text; this.setState({ userCommunityDescription: text }) }}
                                multiline={true}
                                numberOfLines={4}
                                placeholder={'...'}
                                style={styles.descriptionInput} />
                        </View>
                    </View>
                    <View style={{ width: '90%', alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => this.controlCommunity()} style={[styles.linkAddButton, { marginTop: 10 }]}>
                            <Text style={styles.buttonText}>Ekle</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                {/*Referans kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, marginTop: 15 }}>
                    <SImage width={40} source={require('../images/referance.png')} />
                    <Text style={styles.inputTitle}>Referans</Text>
                </View>
                <View style={styles.infoContainer}>
                    <FlatList
                        style={{ width: '100%', marginTop: 10 }}
                        data={helper.userReferences}
                        renderItem={data => this.setReferences(data)}
                        showsVerticalScrollIndicator={false}
                    />

                    <View style={{ width: '90%', alignItems: 'center', marginTop: 40, }}>
                        <Text style={styles.infoTitle}>İsim, soy isim</Text>
                        <View style={[styles.experiencesInputView, this.state.warningReferenceName && reference.name === '' && { borderColor: 'red' }]}>
                            <SImage width={20} source={require('../images/userForm.png')} />
                            <TextInput
                                placeholder='...'
                                value={this.state.userReferenceName}
                                onChangeText={(text) => { reference.name = text; this.setState({ userReferenceName: text }) }}
                                style={styles.infoInput} />
                        </View>


                        <Text style={styles.infoTitle}>Telefon numarası</Text>
                        <View style={[styles.experiencesInputView, this.state.warningReferenceTel && reference.tel === '' && { borderColor: 'red' }]}>
                            <SImage width={20} source={require('../images/phone.png')} />
                            <TextInput
                                placeholder='...'
                                keyboardType='numeric'
                                value={this.state.userReferenceNumber}
                                onChangeText={(text) => { reference.tel = text; this.setState({ userReferenceNumber: text }) }}
                                style={styles.infoInput} />
                        </View>


                        <Text style={styles.infoTitle}>E-posta</Text>
                        <View style={[styles.experiencesInputView, this.state.warningReferenceEmail && reference.email === '' && { borderColor: 'red' }]}>
                            <SImage width={20} source={require('../images/mail.png')} />
                            <TextInput
                                placeholder='...'
                                keyboardType='email-address'
                                value={this.state.userReferenceEmail}
                                onChangeText={(text) => { reference.email = text; this.setState({ userReferenceEmail: text }) }}
                                style={styles.infoInput} />
                        </View>


                        <Text style={styles.infoTitle}>İş yeri</Text>
                        <View style={styles.experiencesInputView}>
                            <SImage width={20} source={require('../images/workplace.png')} />
                            <TextInput
                                placeholder='...'
                                value={this.state.userReferenceCompanyName}
                                onChangeText={(text) => { reference.companyName = text; this.setState({ userReferenceCompanyName: text }) }}
                                style={styles.infoInput} />
                        </View>
                    </View>
                    <View style={{ width: '90%', alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => this.controlReference()} style={[styles.linkAddButton, { marginTop: 10 }]}>
                            <Text style={styles.buttonText}>Ekle</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{ width: '100%', marginBottom: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={() => this.showPersonalInformation()} style={styles.selectButton}>
                        <Text style={styles.buttonText}>Geri</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.conrtolShowResultCV()} style={styles.selectButton}>
                        <Text style={styles.buttonText}>İleri</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderResultCV() {
        return (
            <View style={{ width: '100%', marginTop: 60, alignItems: 'center' }}>
                <View style={{ width: 280, height: 380, backgroundColor: '#3ef08b', marginBottom: 10 }}>

                </View>

                <TouchableOpacity style={styles.downloadButton}>
                    <SImage width={40} source={require('../images/download.png')} />
                    <Text style={styles.downloadText}>PDF oarak indir</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => this.showExperiences()} style={styles.selectButton}>
                    <Text style={styles.buttonText}>Geri</Text>
                </TouchableOpacity>

            </View>
        )
    }



    render() {
        return (
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <View style={{ alignItems: 'center', backgroundColor: '#fff' }}>
                    {this.renderProgressBar()}
                    {
                        this.state.showPersonalInformation &&
                        this.renderPersonalInformation()
                    }
                    {
                        this.state.showExperiences &&
                        this.renderExperiences()
                    }
                    {
                        this.state.showResultCV &&
                        this.renderResultCV()
                    }
                </View>
                <AlertPro
                    ref={ref => {
                        this.AlertPro = ref;
                    }}
                    onConfirm={() => this.AlertPro.close()}
                    title="Hata"
                    message={'Lütfen zorunlu(*) olan yerleri doldurunuz'}
                    textConfirm='TAMAM'
                    showConfirm
                    showCancel={false}
                    customStyles={{
                        mask: {
                            backgroundColor: 'rgba(0,0,0,0.7)'
                        },
                        container: {
                            borderWidth: 1,
                            borderRadius: 8,
                            borderColor: '#5181fc',
                            width: 300
                        },
                        title: {
                            fontSize: 18,
                            color: '#545454',
                        },
                        buttonConfirm: {
                            backgroundColor: 'green',
                        },
                        message: {
                            color: '#2f6478',
                        }
                    }}
                />
            </ScrollView>

        )
    }
}



export default observer(CVForm);
