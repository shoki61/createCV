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

import CV1 from '../views/convertCV1';
import CV2 from '../views/convertCV2';
import CV3 from '../views/convertCV3';
import CV4 from '../views/convertCV4';
import convertCV1 from '../views/convertCV1';


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

export let linkIcon = ''


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
                <Picker.Item label="Çok iyi" value="Çok iyi" />
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
                <Picker.Item label="Çok iyi" value="Çok iyi" />
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
        linkIcon = helper.userLinks.map(el => el.linkIconCV);
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
            userLinkIcon: '',

            userSchoolName: '',
            userSchoolDepartment: '',
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
            linksShow: true,
            selectedLinkIcon: '',
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
        }
    }

    async createPDF() {

        let options = '';

        if (helper.selectedOrderCV === 1) {
            options = {
                html: CV1.convertCV1
                ,
                padding: 0,
                fileName: 'deneme1',
                directory: 'docs'
            };
        }
        if (helper.selectedOrderCV === 2) {
            options = {
                base64: true,
                width: 400,
                height: 590,
                html: `
    <style>
    @page{ 
        margin:-4px;
    }
    </style>

                <div style="width:100%;background-color: ${helper.selectedCVColor};height:100%">
        <div style="width: 100%;min-height: 130px;display: flex;margin-bottom:10px">
            <div style="width: 35%;min-height: 100%;display: flex;justify-content: center;align-items: center">
                <div style="width: 100px;height: 100px;border:2px solid ${helper.selectedCVColor === '#FFFFFF' ? '#FF8F8F' : '#fff'};border-radius: 100px;align-items: center;display: flex;justify-content: center;background: url(${helper.userPhoto.uri}) no-repeat center;background-size: cover"></div>
            </div>
            <div style="width: 65%;min-height: 100%">
                <p style="font-family: Calibri;text-align: center;font-size: 25px;color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : `${helper.selectedCVColor === '#FFFFFF' ? '#5E5E5E' : '#fff'}`};margin: 15px 5px 5px 5px">${helper.userJob}</p>

                <div style="display: flex;margin: 5px;margin-left: 15px">
                    <div>
                        <p style="font-size: 14px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#606060' : '#fff'};margin: 0">Adı:</p>
                        <p style="font-size: 14px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#606060' : '#fff'};margin: 0">Tel no:</p>
                        <p style="font-size: 14px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#606060' : '#fff'};margin: 0">Email:</p>
                        <p style="font-size: 14px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#606060' : '#fff'};margin: 0">Şehir:</p>
                    </div>
                    <div style="margin-left: 5px">
                        <p style="font-size: 14px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'};margin: 0">${helper.userName}</p>
                        <p style="font-size: 14px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'};margin: 0">${helper.userTel}</p>
                        <p style="font-size: 14px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'};margin: 0">${helper.userEmail}</p>
                        <p style="font-size: 14px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'};margin: 0">${helper.userCity}</p>
                    </div>
                </div>
            </div>

        </div>

        <div style="width: 100%;min-height:25px;background-color:${helper.selectedCVColor === '#FFFFFF' ? '#FF8F8F' : '#fff'};flex-wrap: wrap;display: flex;align-items: center;justify-content:space-between;padding:0 15px;box-sizing: border-box">
           
            ${helper.userGithubLink !== '' ?
                        `<div style="display: flex;align-items: center;margin:0 10px 0 10px">
                   ${helper.selectedCVColor === '#FFFFFF' ? `<img height="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />` : ``}
                   ${helper.selectedCVColor === '#2A2A2A' ? `<img height="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />` : ``} 
                   ${helper.selectedCVColor === '#12A3D0' ? `<img height="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />` : ``} 
                   ${helper.selectedCVColor === '#FF7373' ? `<img height="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />` : ``}
                   ${helper.selectedCVColor === '#299BE8' ? `<img height="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />` : ``}
                   ${helper.selectedCVColor === '#407F92' ? `<img height="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />` : ``}
                   <p style="font-family: Calibri;font-size: 13px;color: ${helper.selectedCVColor === '#FFFFFF' ? '#fff' : `${helper.selectedCVColor === '#FFFFFF' ? '#5E5E5E' : `${helper.selectedCVColor}`}`}; margin:5px">${helper.userGithubLink}</p>
                </div>` : ``
                    }

            ${helper.userLinkedInLink !== '' ?
                        `<div style="display: flex;align-items: center;margin:0 10px 0 10px">
                    ${helper.selectedCVColor === '#FFFFFF' ? `<img height="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTE2OCw0MDguMkg5NnYtMjA4aDcyVjQwOC4yeiBNMTMxLjYsMTY4LjJjLTIwLjQsMC0zNi44LTE2LjQtMzYuOC0zNi44YzAtMjAuNCwxNi40LTM2LjgsMzYuOC0zNi44ICAgIGMyMC40LDAsMzYuOCwxNi40LDM2LjgsMzYuOEMxNjgsMTUxLjgsMTUxLjYsMTY4LjIsMTMxLjYsMTY4LjJ6IE00MDguNCw0MDguMkg0MDhoLTYwVjMwNy40YzAtMjQuNC0zLjItNTUuNi0zNi40LTU1LjYgICAgYy0zNCwwLTM5LjYsMjYuNC0zOS42LDU0djEwMi40aC02MHYtMjA4aDU2djI4aDEuNmM4LjgtMTYsMjkuMi0yOC40LDYxLjItMjguNGM2NiwwLDc3LjYsMzgsNzcuNiw5NC40VjQwOC4yeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
                    ${helper.selectedCVColor === '#2A2A2A' ? `<img height="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTE2OCw0MDguMkg5NnYtMjA4aDcyVjQwOC4yeiBNMTMxLjYsMTY4LjJjLTIwLjQsMC0zNi44LTE2LjQtMzYuOC0zNi44YzAtMjAuNCwxNi40LTM2LjgsMzYuOC0zNi44ICAgIGMyMC40LDAsMzYuOCwxNi40LDM2LjgsMzYuOEMxNjgsMTUxLjgsMTUxLjYsMTY4LjIsMTMxLjYsMTY4LjJ6IE00MDguNCw0MDguMkg0MDhoLTYwVjMwNy40YzAtMjQuNC0zLjItNTUuNi0zNi40LTU1LjYgICAgYy0zNCwwLTM5LjYsMjYuNC0zOS42LDU0djEwMi40aC02MHYtMjA4aDU2djI4aDEuNmM4LjgtMTYsMjkuMi0yOC40LDYxLjItMjguNGM2NiwwLDc3LjYsMzgsNzcuNiw5NC40VjQwOC4yeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzJBMkEyQSI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``} 
                    ${helper.selectedCVColor === '#12A3D0' ? `<img height="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTE2OCw0MDguMkg5NnYtMjA4aDcyVjQwOC4yeiBNMTMxLjYsMTY4LjJjLTIwLjQsMC0zNi44LTE2LjQtMzYuOC0zNi44YzAtMjAuNCwxNi40LTM2LjgsMzYuOC0zNi44ICAgIGMyMC40LDAsMzYuOCwxNi40LDM2LjgsMzYuOEMxNjgsMTUxLjgsMTUxLjYsMTY4LjIsMTMxLjYsMTY4LjJ6IE00MDguNCw0MDguMkg0MDhoLTYwVjMwNy40YzAtMjQuNC0zLjItNTUuNi0zNi40LTU1LjYgICAgYy0zNCwwLTM5LjYsMjYuNC0zOS42LDU0djEwMi40aC02MHYtMjA4aDU2djI4aDEuNmM4LjgtMTYsMjkuMi0yOC40LDYxLjItMjguNGM2NiwwLDc3LjYsMzgsNzcuNiw5NC40VjQwOC4yeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzEyQTNEMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``} 
                    ${helper.selectedCVColor === '#FF7373' ? `<img height="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTE2OCw0MDguMkg5NnYtMjA4aDcyVjQwOC4yeiBNMTMxLjYsMTY4LjJjLTIwLjQsMC0zNi44LTE2LjQtMzYuOC0zNi44YzAtMjAuNCwxNi40LTM2LjgsMzYuOC0zNi44ICAgIGMyMC40LDAsMzYuOCwxNi40LDM2LjgsMzYuOEMxNjgsMTUxLjgsMTUxLjYsMTY4LjIsMTMxLjYsMTY4LjJ6IE00MDguNCw0MDguMkg0MDhoLTYwVjMwNy40YzAtMjQuNC0zLjItNTUuNi0zNi40LTU1LjYgICAgYy0zNCwwLTM5LjYsMjYuNC0zOS42LDU0djEwMi40aC02MHYtMjA4aDU2djI4aDEuNmM4LjgtMTYsMjkuMi0yOC40LDYxLjItMjguNGM2NiwwLDc3LjYsMzgsNzcuNiw5NC40VjQwOC4yeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGNzM3MyI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
                    ${helper.selectedCVColor === '#299BE8' ? `<img height="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTE2OCw0MDguMkg5NnYtMjA4aDcyVjQwOC4yeiBNMTMxLjYsMTY4LjJjLTIwLjQsMC0zNi44LTE2LjQtMzYuOC0zNi44YzAtMjAuNCwxNi40LTM2LjgsMzYuOC0zNi44ICAgIGMyMC40LDAsMzYuOCwxNi40LDM2LjgsMzYuOEMxNjgsMTUxLjgsMTUxLjYsMTY4LjIsMTMxLjYsMTY4LjJ6IE00MDguNCw0MDguMkg0MDhoLTYwVjMwNy40YzAtMjQuNC0zLjItNTUuNi0zNi40LTU1LjYgICAgYy0zNCwwLTM5LjYsMjYuNC0zOS42LDU0djEwMi40aC02MHYtMjA4aDU2djI4aDEuNmM4LjgtMTYsMjkuMi0yOC40LDYxLjItMjguNGM2NiwwLDc3LjYsMzgsNzcuNiw5NC40VjQwOC4yeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzI5OUJFOCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
                    ${helper.selectedCVColor === '#407F92' ? `<img height="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTE2OCw0MDguMkg5NnYtMjA4aDcyVjQwOC4yeiBNMTMxLjYsMTY4LjJjLTIwLjQsMC0zNi44LTE2LjQtMzYuOC0zNi44YzAtMjAuNCwxNi40LTM2LjgsMzYuOC0zNi44ICAgIGMyMC40LDAsMzYuOCwxNi40LDM2LjgsMzYuOEMxNjgsMTUxLjgsMTUxLjYsMTY4LjIsMTMxLjYsMTY4LjJ6IE00MDguNCw0MDguMkg0MDhoLTYwVjMwNy40YzAtMjQuNC0zLjItNTUuNi0zNi40LTU1LjYgICAgYy0zNCwwLTM5LjYsMjYuNC0zOS42LDU0djEwMi40aC02MHYtMjA4aDU2djI4aDEuNmM4LjgtMTYsMjkuMi0yOC40LDYxLjItMjguNGM2NiwwLDc3LjYsMzgsNzcuNiw5NC40VjQwOC4yeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzQwN0Y5MiI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
                    <p style="font-family: Calibri;font-size: 13px;color: ${helper.selectedCVColor === '#FFFFFF' ? '#fff' : `${helper.selectedCVColor === '#FFFFFF' ? '#5E5E5E' : `${helper.selectedCVColor}`}`}; margin:5px">${helper.userLinkedInLink}</p>
                </div>` : ``
                    }

            ${helper.userPinterestLink !== '' ?
                        `<div style="display: flex;align-items: center;margin:0 10px 0 10px">
                    ${helper.selectedCVColor === '#FFFFFF' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc3LjYsMEgxMjZDNTYuOCwwLDAsNTYuOCwwLDEyNi40VjM3OGMwLDY5LjIsNTYuOCwxMjYsMTI2LDEyNmgyNTEuNmM2OS42LDAsMTI2LjQtNTYuOCwxMjYuNC0xMjYuNFYxMjYuNCAgICBDNTA0LDU2LjgsNDQ3LjIsMCwzNzcuNiwweiBNMjc3LjIsMzIyYy0yMCwwLTM5LjItMTAuNC00NS42LTIyLjRjMCwwLTEwLjgsNDEuNi0xMy4yLDQ5LjZjLTgsMjguNC0zMiw1Ni44LTMzLjYsNTkuMiAgICBjLTEuMiwxLjYtNCwxLjItNC40LTEuMmMtMC40LTMuNi02LjQtMzkuNiwwLjQtNjguOGMzLjYtMTQuOCwyNC05OC40LDI0LTk4LjRzLTYtMTEuNi02LTI4LjRjMC0yNi44LDE2LTQ2LjgsMzYtNDYuOCAgICBjMTYuOCwwLDI1LjIsMTIuNCwyNS4yLDI3LjJjMCwxNi40LTEwLjgsNDEuMi0xNi40LDY0Yy00LjgsMTkuMiwxMCwzNC44LDI5LjYsMzQuOGMzNS4yLDAsNTkuMi00NCw1OS4yLTk2ICAgIGMwLTM5LjYtMjcuNi02OS4yLTc3LjYtNjkuMmMtNTYuNCwwLTkyLDQwLjgtOTIsODYuNGMwLDE1LjYsNC44LDI2LjgsMTIuNCwzNS42YzMuNiw0LDQsNS42LDIuOCwxMGMtMC44LDMuMi0yLjgsMTEuMi00LDE0LjQgICAgYy0xLjIsNC40LTUuMiw2LjQtOS4yLDQuNGMtMjYtMTAuNC0zOC0zOC0zOC02OS4yYzAtNTEuMiw0NC44LTExMi44LDEzMy4yLTExMi44YzcxLjIsMCwxMTgsNTAsMTE4LDEwMy42ICAgIEMzNzcuNiwyNjkuMiwzMzcuMiwzMjIsMjc3LjIsMzIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
                    ${helper.selectedCVColor === '#2A2A2A' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc3LjYsMEgxMjZDNTYuOCwwLDAsNTYuOCwwLDEyNi40VjM3OGMwLDY5LjIsNTYuOCwxMjYsMTI2LDEyNmgyNTEuNmM2OS42LDAsMTI2LjQtNTYuOCwxMjYuNC0xMjYuNFYxMjYuNCAgICBDNTA0LDU2LjgsNDQ3LjIsMCwzNzcuNiwweiBNMjc3LjIsMzIyYy0yMCwwLTM5LjItMTAuNC00NS42LTIyLjRjMCwwLTEwLjgsNDEuNi0xMy4yLDQ5LjZjLTgsMjguNC0zMiw1Ni44LTMzLjYsNTkuMiAgICBjLTEuMiwxLjYtNCwxLjItNC40LTEuMmMtMC40LTMuNi02LjQtMzkuNiwwLjQtNjguOGMzLjYtMTQuOCwyNC05OC40LDI0LTk4LjRzLTYtMTEuNi02LTI4LjRjMC0yNi44LDE2LTQ2LjgsMzYtNDYuOCAgICBjMTYuOCwwLDI1LjIsMTIuNCwyNS4yLDI3LjJjMCwxNi40LTEwLjgsNDEuMi0xNi40LDY0Yy00LjgsMTkuMiwxMCwzNC44LDI5LjYsMzQuOGMzNS4yLDAsNTkuMi00NCw1OS4yLTk2ICAgIGMwLTM5LjYtMjcuNi02OS4yLTc3LjYtNjkuMmMtNTYuNCwwLTkyLDQwLjgtOTIsODYuNGMwLDE1LjYsNC44LDI2LjgsMTIuNCwzNS42YzMuNiw0LDQsNS42LDIuOCwxMGMtMC44LDMuMi0yLjgsMTEuMi00LDE0LjQgICAgYy0xLjIsNC40LTUuMiw2LjQtOS4yLDQuNGMtMjYtMTAuNC0zOC0zOC0zOC02OS4yYzAtNTEuMiw0NC44LTExMi44LDEzMy4yLTExMi44YzcxLjIsMCwxMTgsNTAsMTE4LDEwMy42ICAgIEMzNzcuNiwyNjkuMiwzMzcuMiwzMjIsMjc3LjIsMzIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzJBMkEyQSI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``} 
                    ${helper.selectedCVColor === '#12A3D0' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc3LjYsMEgxMjZDNTYuOCwwLDAsNTYuOCwwLDEyNi40VjM3OGMwLDY5LjIsNTYuOCwxMjYsMTI2LDEyNmgyNTEuNmM2OS42LDAsMTI2LjQtNTYuOCwxMjYuNC0xMjYuNFYxMjYuNCAgICBDNTA0LDU2LjgsNDQ3LjIsMCwzNzcuNiwweiBNMjc3LjIsMzIyYy0yMCwwLTM5LjItMTAuNC00NS42LTIyLjRjMCwwLTEwLjgsNDEuNi0xMy4yLDQ5LjZjLTgsMjguNC0zMiw1Ni44LTMzLjYsNTkuMiAgICBjLTEuMiwxLjYtNCwxLjItNC40LTEuMmMtMC40LTMuNi02LjQtMzkuNiwwLjQtNjguOGMzLjYtMTQuOCwyNC05OC40LDI0LTk4LjRzLTYtMTEuNi02LTI4LjRjMC0yNi44LDE2LTQ2LjgsMzYtNDYuOCAgICBjMTYuOCwwLDI1LjIsMTIuNCwyNS4yLDI3LjJjMCwxNi40LTEwLjgsNDEuMi0xNi40LDY0Yy00LjgsMTkuMiwxMCwzNC44LDI5LjYsMzQuOGMzNS4yLDAsNTkuMi00NCw1OS4yLTk2ICAgIGMwLTM5LjYtMjcuNi02OS4yLTc3LjYtNjkuMmMtNTYuNCwwLTkyLDQwLjgtOTIsODYuNGMwLDE1LjYsNC44LDI2LjgsMTIuNCwzNS42YzMuNiw0LDQsNS42LDIuOCwxMGMtMC44LDMuMi0yLjgsMTEuMi00LDE0LjQgICAgYy0xLjIsNC40LTUuMiw2LjQtOS4yLDQuNGMtMjYtMTAuNC0zOC0zOC0zOC02OS4yYzAtNTEuMiw0NC44LTExMi44LDEzMy4yLTExMi44YzcxLjIsMCwxMTgsNTAsMTE4LDEwMy42ICAgIEMzNzcuNiwyNjkuMiwzMzcuMiwzMjIsMjc3LjIsMzIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzEyQTNEMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``} 
                    ${helper.selectedCVColor === '#FF7373' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc3LjYsMEgxMjZDNTYuOCwwLDAsNTYuOCwwLDEyNi40VjM3OGMwLDY5LjIsNTYuOCwxMjYsMTI2LDEyNmgyNTEuNmM2OS42LDAsMTI2LjQtNTYuOCwxMjYuNC0xMjYuNFYxMjYuNCAgICBDNTA0LDU2LjgsNDQ3LjIsMCwzNzcuNiwweiBNMjc3LjIsMzIyYy0yMCwwLTM5LjItMTAuNC00NS42LTIyLjRjMCwwLTEwLjgsNDEuNi0xMy4yLDQ5LjZjLTgsMjguNC0zMiw1Ni44LTMzLjYsNTkuMiAgICBjLTEuMiwxLjYtNCwxLjItNC40LTEuMmMtMC40LTMuNi02LjQtMzkuNiwwLjQtNjguOGMzLjYtMTQuOCwyNC05OC40LDI0LTk4LjRzLTYtMTEuNi02LTI4LjRjMC0yNi44LDE2LTQ2LjgsMzYtNDYuOCAgICBjMTYuOCwwLDI1LjIsMTIuNCwyNS4yLDI3LjJjMCwxNi40LTEwLjgsNDEuMi0xNi40LDY0Yy00LjgsMTkuMiwxMCwzNC44LDI5LjYsMzQuOGMzNS4yLDAsNTkuMi00NCw1OS4yLTk2ICAgIGMwLTM5LjYtMjcuNi02OS4yLTc3LjYtNjkuMmMtNTYuNCwwLTkyLDQwLjgtOTIsODYuNGMwLDE1LjYsNC44LDI2LjgsMTIuNCwzNS42YzMuNiw0LDQsNS42LDIuOCwxMGMtMC44LDMuMi0yLjgsMTEuMi00LDE0LjQgICAgYy0xLjIsNC40LTUuMiw2LjQtOS4yLDQuNGMtMjYtMTAuNC0zOC0zOC0zOC02OS4yYzAtNTEuMiw0NC44LTExMi44LDEzMy4yLTExMi44YzcxLjIsMCwxMTgsNTAsMTE4LDEwMy42ICAgIEMzNzcuNiwyNjkuMiwzMzcuMiwzMjIsMjc3LjIsMzIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGNzM3MyI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
                    ${helper.selectedCVColor === '#299BE8' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc3LjYsMEgxMjZDNTYuOCwwLDAsNTYuOCwwLDEyNi40VjM3OGMwLDY5LjIsNTYuOCwxMjYsMTI2LDEyNmgyNTEuNmM2OS42LDAsMTI2LjQtNTYuOCwxMjYuNC0xMjYuNFYxMjYuNCAgICBDNTA0LDU2LjgsNDQ3LjIsMCwzNzcuNiwweiBNMjc3LjIsMzIyYy0yMCwwLTM5LjItMTAuNC00NS42LTIyLjRjMCwwLTEwLjgsNDEuNi0xMy4yLDQ5LjZjLTgsMjguNC0zMiw1Ni44LTMzLjYsNTkuMiAgICBjLTEuMiwxLjYtNCwxLjItNC40LTEuMmMtMC40LTMuNi02LjQtMzkuNiwwLjQtNjguOGMzLjYtMTQuOCwyNC05OC40LDI0LTk4LjRzLTYtMTEuNi02LTI4LjRjMC0yNi44LDE2LTQ2LjgsMzYtNDYuOCAgICBjMTYuOCwwLDI1LjIsMTIuNCwyNS4yLDI3LjJjMCwxNi40LTEwLjgsNDEuMi0xNi40LDY0Yy00LjgsMTkuMiwxMCwzNC44LDI5LjYsMzQuOGMzNS4yLDAsNTkuMi00NCw1OS4yLTk2ICAgIGMwLTM5LjYtMjcuNi02OS4yLTc3LjYtNjkuMmMtNTYuNCwwLTkyLDQwLjgtOTIsODYuNGMwLDE1LjYsNC44LDI2LjgsMTIuNCwzNS42YzMuNiw0LDQsNS42LDIuOCwxMGMtMC44LDMuMi0yLjgsMTEuMi00LDE0LjQgICAgYy0xLjIsNC40LTUuMiw2LjQtOS4yLDQuNGMtMjYtMTAuNC0zOC0zOC0zOC02OS4yYzAtNTEuMiw0NC44LTExMi44LDEzMy4yLTExMi44YzcxLjIsMCwxMTgsNTAsMTE4LDEwMy42ICAgIEMzNzcuNiwyNjkuMiwzMzcuMiwzMjIsMjc3LjIsMzIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzI5OUJFOCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
                    ${helper.selectedCVColor === '#407F92' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc3LjYsMEgxMjZDNTYuOCwwLDAsNTYuOCwwLDEyNi40VjM3OGMwLDY5LjIsNTYuOCwxMjYsMTI2LDEyNmgyNTEuNmM2OS42LDAsMTI2LjQtNTYuOCwxMjYuNC0xMjYuNFYxMjYuNCAgICBDNTA0LDU2LjgsNDQ3LjIsMCwzNzcuNiwweiBNMjc3LjIsMzIyYy0yMCwwLTM5LjItMTAuNC00NS42LTIyLjRjMCwwLTEwLjgsNDEuNi0xMy4yLDQ5LjZjLTgsMjguNC0zMiw1Ni44LTMzLjYsNTkuMiAgICBjLTEuMiwxLjYtNCwxLjItNC40LTEuMmMtMC40LTMuNi02LjQtMzkuNiwwLjQtNjguOGMzLjYtMTQuOCwyNC05OC40LDI0LTk4LjRzLTYtMTEuNi02LTI4LjRjMC0yNi44LDE2LTQ2LjgsMzYtNDYuOCAgICBjMTYuOCwwLDI1LjIsMTIuNCwyNS4yLDI3LjJjMCwxNi40LTEwLjgsNDEuMi0xNi40LDY0Yy00LjgsMTkuMiwxMCwzNC44LDI5LjYsMzQuOGMzNS4yLDAsNTkuMi00NCw1OS4yLTk2ICAgIGMwLTM5LjYtMjcuNi02OS4yLTc3LjYtNjkuMmMtNTYuNCwwLTkyLDQwLjgtOTIsODYuNGMwLDE1LjYsNC44LDI2LjgsMTIuNCwzNS42YzMuNiw0LDQsNS42LDIuOCwxMGMtMC44LDMuMi0yLjgsMTEuMi00LDE0LjQgICAgYy0xLjIsNC40LTUuMiw2LjQtOS4yLDQuNGMtMjYtMTAuNC0zOC0zOC0zOC02OS4yYzAtNTEuMiw0NC44LTExMi44LDEzMy4yLTExMi44YzcxLjIsMCwxMTgsNTAsMTE4LDEwMy42ICAgIEMzNzcuNiwyNjkuMiwzMzcuMiwzMjIsMjc3LjIsMzIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzQwN0Y5MiI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
                    <p style="font-family: Calibri;font-size: 13px;color: ${helper.selectedCVColor === '#FFFFFF' ? '#fff' : `${helper.selectedCVColor === '#FFFFFF' ? '#5E5E5E' : `${helper.selectedCVColor}`}`}; margin:5px">${helper.userPinterestLink}</p>
                </div>` : ``
                    }

            ${helper.userInstagramLink !== '' ?
                        `<div style="display: flex;align-items: center;margin: 0 0 0 15px">
                    ${helper.selectedCVColor === '#FFFFFF' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTM3NiA5MWgtMjQwYy0yNC44MTI1IDAtNDUgMjAuMTg3NS00NSA0NXYyNDBjMCAyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVoMjQwYzI0LjgxMjUgMCA0NS0yMC4xODc1IDQ1LTQ1di0yNDBjMC0yNC44MTI1LTIwLjE4NzUtNDUtNDUtNDV6bS0xMjAgMjcwYy01Ny44OTA2MjUgMC0xMDUtNDcuMTA5Mzc1LTEwNS0xMDVzNDcuMTA5Mzc1LTEwNSAxMDUtMTA1IDEwNSA0Ny4xMDkzNzUgMTA1IDEwNS00Ny4xMDkzNzUgMTA1LTEwNSAxMDV6bTEwNS0xODBjLTE2LjUzOTA2MiAwLTMwLTEzLjQ2MDkzOC0zMC0zMHMxMy40NjA5MzgtMzAgMzAtMzAgMzAgMTMuNDYwOTM4IDMwIDMwLTEzLjQ2MDkzOCAzMC0zMCAzMHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTI1NiAxODFjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXMzMy42NDg0MzggNzUgNzUgNzUgNzUtMzMuNjQ4NDM4IDc1LTc1LTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQzNiAwaC0zNjBjLTQxLjM1MTU2MiAwLTc2IDM0LjY0ODQzOC03NiA3NnYzNjBjMCA0MS4zNTE1NjIgMzQuNjQ4NDM4IDc2IDc2IDc2aDM2MGM0MS4zNTE1NjIgMCA3Ni0zNC42NDg0MzggNzYtNzZ2LTM2MGMwLTQxLjM1MTU2Mi0zNC42NDg0MzgtNzYtNzYtNzZ6bTE1IDM3NmMwIDQxLjM1MTU2Mi0zMy42NDg0MzggNzUtNzUgNzVoLTI0MGMtNDEuMzUxNTYyIDAtNzUtMzMuNjQ4NDM4LTc1LTc1di0yNDBjMC00MS4zNTE1NjIgMzMuNjQ4NDM4LTc1IDc1LTc1aDI0MGM0MS4zNTE1NjIgMCA3NSAzMy42NDg0MzggNzUgNzV6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#2A2A2A' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTM3NiA5MWgtMjQwYy0yNC44MTI1IDAtNDUgMjAuMTg3NS00NSA0NXYyNDBjMCAyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVoMjQwYzI0LjgxMjUgMCA0NS0yMC4xODc1IDQ1LTQ1di0yNDBjMC0yNC44MTI1LTIwLjE4NzUtNDUtNDUtNDV6bS0xMjAgMjcwYy01Ny44OTA2MjUgMC0xMDUtNDcuMTA5Mzc1LTEwNS0xMDVzNDcuMTA5Mzc1LTEwNSAxMDUtMTA1IDEwNSA0Ny4xMDkzNzUgMTA1IDEwNS00Ny4xMDkzNzUgMTA1LTEwNSAxMDV6bTEwNS0xODBjLTE2LjUzOTA2MiAwLTMwLTEzLjQ2MDkzOC0zMC0zMHMxMy40NjA5MzgtMzAgMzAtMzAgMzAgMTMuNDYwOTM4IDMwIDMwLTEzLjQ2MDkzOCAzMC0zMCAzMHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+PHBhdGggZD0ibTI1NiAxODFjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXMzMy42NDg0MzggNzUgNzUgNzUgNzUtMzMuNjQ4NDM4IDc1LTc1LTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+PHBhdGggZD0ibTQzNiAwaC0zNjBjLTQxLjM1MTU2MiAwLTc2IDM0LjY0ODQzOC03NiA3NnYzNjBjMCA0MS4zNTE1NjIgMzQuNjQ4NDM4IDc2IDc2IDc2aDM2MGM0MS4zNTE1NjIgMCA3Ni0zNC42NDg0MzggNzYtNzZ2LTM2MGMwLTQxLjM1MTU2Mi0zNC42NDg0MzgtNzYtNzYtNzZ6bTE1IDM3NmMwIDQxLjM1MTU2Mi0zMy42NDg0MzggNzUtNzUgNzVoLTI0MGMtNDEuMzUxNTYyIDAtNzUtMzMuNjQ4NDM4LTc1LTc1di0yNDBjMC00MS4zNTE1NjIgMzMuNjQ4NDM4LTc1IDc1LTc1aDI0MGM0MS4zNTE1NjIgMCA3NSAzMy42NDg0MzggNzUgNzV6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzJBMkEyQSI+PC9wYXRoPjwvZz4gPC9zdmc+" />` : ``} 
                    ${helper.selectedCVColor === '#12A3D0' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiI+PGc+PHBhdGggZD0ibTM3NiA5MWgtMjQwYy0yNC44MTI1IDAtNDUgMjAuMTg3NS00NSA0NXYyNDBjMCAyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVoMjQwYzI0LjgxMjUgMCA0NS0yMC4xODc1IDQ1LTQ1di0yNDBjMC0yNC44MTI1LTIwLjE4NzUtNDUtNDUtNDV6bS0xMjAgMjcwYy01Ny44OTA2MjUgMC0xMDUtNDcuMTA5Mzc1LTEwNS0xMDVzNDcuMTA5Mzc1LTEwNSAxMDUtMTA1IDEwNSA0Ny4xMDkzNzUgMTA1IDEwNS00Ny4xMDkzNzUgMTA1LTEwNSAxMDV6bTEwNS0xODBjLTE2LjUzOTA2MiAwLTMwLTEzLjQ2MDkzOC0zMC0zMHMxMy40NjA5MzgtMzAgMzAtMzAgMzAgMTMuNDYwOTM4IDMwIDMwLTEzLjQ2MDkzOCAzMC0zMCAzMHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+PHBhdGggZD0ibTI1NiAxODFjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXMzMy42NDg0MzggNzUgNzUgNzUgNzUtMzMuNjQ4NDM4IDc1LTc1LTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+PHBhdGggZD0ibTQzNiAwaC0zNjBjLTQxLjM1MTU2MiAwLTc2IDM0LjY0ODQzOC03NiA3NnYzNjBjMCA0MS4zNTE1NjIgMzQuNjQ4NDM4IDc2IDc2IDc2aDM2MGM0MS4zNTE1NjIgMCA3Ni0zNC42NDg0MzggNzYtNzZ2LTM2MGMwLTQxLjM1MTU2Mi0zNC42NDg0MzgtNzYtNzYtNzZ6bTE1IDM3NmMwIDQxLjM1MTU2Mi0zMy42NDg0MzggNzUtNzUgNzVoLTI0MGMtNDEuMzUxNTYyIDAtNzUtMzMuNjQ4NDM4LTc1LTc1di0yNDBjMC00MS4zNTE1NjIgMzMuNjQ4NDM4LTc1IDc1LTc1aDI0MGM0MS4zNTE1NjIgMCA3NSAzMy42NDg0MzggNzUgNzV6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzEyQTNEMCI+PC9wYXRoPjwvZz4gPC9zdmc+" />` : ``} 
                    ${helper.selectedCVColor === '#FF7373' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiI+PGc+PHBhdGggZD0ibTM3NiA5MWgtMjQwYy0yNC44MTI1IDAtNDUgMjAuMTg3NS00NSA0NXYyNDBjMCAyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVoMjQwYzI0LjgxMjUgMCA0NS0yMC4xODc1IDQ1LTQ1di0yNDBjMC0yNC44MTI1LTIwLjE4NzUtNDUtNDUtNDV6bS0xMjAgMjcwYy01Ny44OTA2MjUgMC0xMDUtNDcuMTA5Mzc1LTEwNS0xMDVzNDcuMTA5Mzc1LTEwNSAxMDUtMTA1IDEwNSA0Ny4xMDkzNzUgMTA1IDEwNS00Ny4xMDkzNzUgMTA1LTEwNSAxMDV6bTEwNS0xODBjLTE2LjUzOTA2MiAwLTMwLTEzLjQ2MDkzOC0zMC0zMHMxMy40NjA5MzgtMzAgMzAtMzAgMzAgMTMuNDYwOTM4IDMwIDMwLTEzLjQ2MDkzOCAzMC0zMCAzMHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+PHBhdGggZD0ibTI1NiAxODFjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXMzMy42NDg0MzggNzUgNzUgNzUgNzUtMzMuNjQ4NDM4IDc1LTc1LTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+PHBhdGggZD0ibTQzNiAwaC0zNjBjLTQxLjM1MTU2MiAwLTc2IDM0LjY0ODQzOC03NiA3NnYzNjBjMCA0MS4zNTE1NjIgMzQuNjQ4NDM4IDc2IDc2IDc2aDM2MGM0MS4zNTE1NjIgMCA3Ni0zNC42NDg0MzggNzYtNzZ2LTM2MGMwLTQxLjM1MTU2Mi0zNC42NDg0MzgtNzYtNzYtNzZ6bTE1IDM3NmMwIDQxLjM1MTU2Mi0zMy42NDg0MzggNzUtNzUgNzVoLTI0MGMtNDEuMzUxNTYyIDAtNzUtMzMuNjQ4NDM4LTc1LTc1di0yNDBjMC00MS4zNTE1NjIgMzMuNjQ4NDM4LTc1IDc1LTc1aDI0MGM0MS4zNTE1NjIgMCA3NSAzMy42NDg0MzggNzUgNzV6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGNzM3MyI+PC9wYXRoPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#299BE8' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiI+PGc+PHBhdGggZD0ibTM3NiA5MWgtMjQwYy0yNC44MTI1IDAtNDUgMjAuMTg3NS00NSA0NXYyNDBjMCAyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVoMjQwYzI0LjgxMjUgMCA0NS0yMC4xODc1IDQ1LTQ1di0yNDBjMC0yNC44MTI1LTIwLjE4NzUtNDUtNDUtNDV6bS0xMjAgMjcwYy01Ny44OTA2MjUgMC0xMDUtNDcuMTA5Mzc1LTEwNS0xMDVzNDcuMTA5Mzc1LTEwNSAxMDUtMTA1IDEwNSA0Ny4xMDkzNzUgMTA1IDEwNS00Ny4xMDkzNzUgMTA1LTEwNSAxMDV6bTEwNS0xODBjLTE2LjUzOTA2MiAwLTMwLTEzLjQ2MDkzOC0zMC0zMHMxMy40NjA5MzgtMzAgMzAtMzAgMzAgMTMuNDYwOTM4IDMwIDMwLTEzLjQ2MDkzOCAzMC0zMCAzMHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+PHBhdGggZD0ibTI1NiAxODFjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXMzMy42NDg0MzggNzUgNzUgNzUgNzUtMzMuNjQ4NDM4IDc1LTc1LTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+PHBhdGggZD0ibTQzNiAwaC0zNjBjLTQxLjM1MTU2MiAwLTc2IDM0LjY0ODQzOC03NiA3NnYzNjBjMCA0MS4zNTE1NjIgMzQuNjQ4NDM4IDc2IDc2IDc2aDM2MGM0MS4zNTE1NjIgMCA3Ni0zNC42NDg0MzggNzYtNzZ2LTM2MGMwLTQxLjM1MTU2Mi0zNC42NDg0MzgtNzYtNzYtNzZ6bTE1IDM3NmMwIDQxLjM1MTU2Mi0zMy42NDg0MzggNzUtNzUgNzVoLTI0MGMtNDEuMzUxNTYyIDAtNzUtMzMuNjQ4NDM4LTc1LTc1di0yNDBjMC00MS4zNTE1NjIgMzMuNjQ4NDM4LTc1IDc1LTc1aDI0MGM0MS4zNTE1NjIgMCA3NSAzMy42NDg0MzggNzUgNzV6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzI5OUJFOCI+PC9wYXRoPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#407F92' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiI+PGc+PHBhdGggZD0ibTM3NiA5MWgtMjQwYy0yNC44MTI1IDAtNDUgMjAuMTg3NS00NSA0NXYyNDBjMCAyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVoMjQwYzI0LjgxMjUgMCA0NS0yMC4xODc1IDQ1LTQ1di0yNDBjMC0yNC44MTI1LTIwLjE4NzUtNDUtNDUtNDV6bS0xMjAgMjcwYy01Ny44OTA2MjUgMC0xMDUtNDcuMTA5Mzc1LTEwNS0xMDVzNDcuMTA5Mzc1LTEwNSAxMDUtMTA1IDEwNSA0Ny4xMDkzNzUgMTA1IDEwNS00Ny4xMDkzNzUgMTA1LTEwNSAxMDV6bTEwNS0xODBjLTE2LjUzOTA2MiAwLTMwLTEzLjQ2MDkzOC0zMC0zMHMxMy40NjA5MzgtMzAgMzAtMzAgMzAgMTMuNDYwOTM4IDMwIDMwLTEzLjQ2MDkzOCAzMC0zMCAzMHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+PHBhdGggZD0ibTI1NiAxODFjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXMzMy42NDg0MzggNzUgNzUgNzUgNzUtMzMuNjQ4NDM4IDc1LTc1LTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+PHBhdGggZD0ibTQzNiAwaC0zNjBjLTQxLjM1MTU2MiAwLTc2IDM0LjY0ODQzOC03NiA3NnYzNjBjMCA0MS4zNTE1NjIgMzQuNjQ4NDM4IDc2IDc2IDc2aDM2MGM0MS4zNTE1NjIgMCA3Ni0zNC42NDg0MzggNzYtNzZ2LTM2MGMwLTQxLjM1MTU2Mi0zNC42NDg0MzgtNzYtNzYtNzZ6bTE1IDM3NmMwIDQxLjM1MTU2Mi0zMy42NDg0MzggNzUtNzUgNzVoLTI0MGMtNDEuMzUxNTYyIDAtNzUtMzMuNjQ4NDM4LTc1LTc1di0yNDBjMC00MS4zNTE1NjIgMzMuNjQ4NDM4LTc1IDc1LTc1aDI0MGM0MS4zNTE1NjIgMCA3NSAzMy42NDg0MzggNzUgNzV6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzQwN0Y5MiI+PC9wYXRoPjwvZz4gPC9zdmc+" />` : ``}
                    <p style="font-family: Calibri;font-size: 13px;color: ${helper.selectedCVColor === '#FFFFFF' ? '#fff' : `${helper.selectedCVColor === '#FFFFFF' ? '#5E5E5E' : `${helper.selectedCVColor}`}`}; margin:5px">${helper.userInstagramLink}</p>
                </div>` : ``
                    }

            ${helper.userSkypeLink !== '' ?
                        `<div style="display: flex;align-items: center;margin:0 10px 0 10px">
                    ${helper.selectedCVColor === '#FFFFFF' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM0LDI2NS42Yy0zLjItNy42LTguOC0xMy4yLTE2LTE4Yy03LjItNC40LTE1LjYtOC40LTI1LjYtMTEuNnMtMjEuMi02LTMzLjItOC40Yy05LjYtMi0xNi44LTQtMjAuOC01LjIgICAgYy00LTEuMi04LTIuOC0xMi00LjhjLTMuNi0yLTYuOC00LTguOC02LjhjLTItMi40LTMuMi01LjItMy4yLTguNGMwLTUuNiwzLjItMTAsOS4yLTE0YzYuNC00LDE1LjItNi40LDI2LTYuNCAgICBjMTEuNiwwLDIwLDIsMjUuMiw1LjZjNS4yLDQsOS42LDkuNiwxMy42LDE2LjRjMy4yLDUuNiw2LDkuMiw4LjgsMTEuNmMzLjIsMi44LDcuMiw0LDEyLjgsNGM2LDAsMTEuMi0yLDE1LjYtNi40ICAgIGM0LTQsNi04LjgsNi0xNC40YzAtNS42LTEuNi0xMS4yLTQuOC0xNi44Yy0zLjItNS42LTgtMTEuMi0xNC40LTE2Yy02LjQtNS4yLTE0LjgtOS4yLTI0LjgtMTJjLTEwLTMuMi0yMS42LTQuNC0zNS4yLTQuNCAgICBjLTE2LjgsMC0zMS42LDIuNC00NCw2LjhjLTEyLjgsNC40LTIyLjQsMTEuMi0yOS4yLDIwcy0xMCwxOC44LTEwLDMwYzAsMTEuNiwzLjIsMjEuNiw5LjYsMjkuNmM2LjQsOCwxNS4yLDE0LDI1LjYsMTguOCAgICBjMTAuNCw0LjQsMjMuNiw4LjQsMzkuMiwxMS42YzExLjYsMi40LDIwLjgsNC44LDI3LjYsNi44YzYuNCwyLDEyLDQuOCwxNiw4LjhjNCwzLjYsNS42LDgsNS42LDE0YzAsNy4yLTMuNiwxMy42LTExLjIsMTguNCAgICBjLTcuNiw1LjItMTgsNy42LTMwLjQsNy42Yy04LjgsMC0xNi40LTEuMi0yMS42LTRjLTUuMi0yLjQtOS42LTUuNi0xMi40LTkuNmMtMy4yLTQtNi05LjItOC44LTE1LjJjLTIuNC01LjYtNS4yLTkuNi04LjgtMTIuOCAgICBjLTMuNi0yLjgtOC00LjQtMTMuMi00LjRjLTYuNCwwLTExLjYsMi0xNS42LDUuNmMtNCw0LTYuNCw4LjQtNi40LDE0YzAsOC44LDMuMiwxNy42LDkuNiwyNi44YzYuNCw4LjgsMTQuOCwxNi40LDI0LjgsMjEuNiAgICBjMTQsNy4yLDMyLDExLjIsNTMuNiwxMS4yYzE4LDAsMzMuNi0yLjgsNDYuOC04YzEzLjItNS42LDIzLjYtMTMuMiwzMC40LTIyLjhzMTAuNC0yMC44LDEwLjQtMzIuOEMzNDAsMjgxLjYsMzM4LDI3Mi44LDMzNCwyNjUuNiAgICB6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE0zMjIuNCw0MDkuMmMtMTQuOCwwLTI4LjgtMy42LTQxLjItMTBjLTguOCwxLjYtMTgsMi40LTI3LjYsMi40Yy04Mi44LDAtMTUwLTY2LjQtMTUwLTE0OCAgICBjMC0xMCwxLjItMjAsMy4yLTI5LjZjLTcuNi0xMi44LTEyLTI3LjYtMTItNDMuMmMwLTQ3LjIsMzguOC04NS42LDg2LjgtODUuNmMxNi44LDAsMzIuOCw0LjgsNDYuNCwxMy4yYzguNC0xLjIsMTYuOC0yLDI1LjYtMiAgICBjODIuOCwwLDE1MCw2Ni40LDE1MCwxNDhjMCwxMC44LTEuMiwyMS42LTMuNiwzMS42YzUuNiwxMS42LDkuMiwyNC40LDkuMiwzOEM0MDkuMiwzNzAuOCwzNzAuNCw0MDkuMiwzMjIuNCw0MDkuMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#2A2A2A' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM0LDI2NS42Yy0zLjItNy42LTguOC0xMy4yLTE2LTE4Yy03LjItNC40LTE1LjYtOC40LTI1LjYtMTEuNnMtMjEuMi02LTMzLjItOC40Yy05LjYtMi0xNi44LTQtMjAuOC01LjIgICAgYy00LTEuMi04LTIuOC0xMi00LjhjLTMuNi0yLTYuOC00LTguOC02LjhjLTItMi40LTMuMi01LjItMy4yLTguNGMwLTUuNiwzLjItMTAsOS4yLTE0YzYuNC00LDE1LjItNi40LDI2LTYuNCAgICBjMTEuNiwwLDIwLDIsMjUuMiw1LjZjNS4yLDQsOS42LDkuNiwxMy42LDE2LjRjMy4yLDUuNiw2LDkuMiw4LjgsMTEuNmMzLjIsMi44LDcuMiw0LDEyLjgsNGM2LDAsMTEuMi0yLDE1LjYtNi40ICAgIGM0LTQsNi04LjgsNi0xNC40YzAtNS42LTEuNi0xMS4yLTQuOC0xNi44Yy0zLjItNS42LTgtMTEuMi0xNC40LTE2Yy02LjQtNS4yLTE0LjgtOS4yLTI0LjgtMTJjLTEwLTMuMi0yMS42LTQuNC0zNS4yLTQuNCAgICBjLTE2LjgsMC0zMS42LDIuNC00NCw2LjhjLTEyLjgsNC40LTIyLjQsMTEuMi0yOS4yLDIwcy0xMCwxOC44LTEwLDMwYzAsMTEuNiwzLjIsMjEuNiw5LjYsMjkuNmM2LjQsOCwxNS4yLDE0LDI1LjYsMTguOCAgICBjMTAuNCw0LjQsMjMuNiw4LjQsMzkuMiwxMS42YzExLjYsMi40LDIwLjgsNC44LDI3LjYsNi44YzYuNCwyLDEyLDQuOCwxNiw4LjhjNCwzLjYsNS42LDgsNS42LDE0YzAsNy4yLTMuNiwxMy42LTExLjIsMTguNCAgICBjLTcuNiw1LjItMTgsNy42LTMwLjQsNy42Yy04LjgsMC0xNi40LTEuMi0yMS42LTRjLTUuMi0yLjQtOS42LTUuNi0xMi40LTkuNmMtMy4yLTQtNi05LjItOC44LTE1LjJjLTIuNC01LjYtNS4yLTkuNi04LjgtMTIuOCAgICBjLTMuNi0yLjgtOC00LjQtMTMuMi00LjRjLTYuNCwwLTExLjYsMi0xNS42LDUuNmMtNCw0LTYuNCw4LjQtNi40LDE0YzAsOC44LDMuMiwxNy42LDkuNiwyNi44YzYuNCw4LjgsMTQuOCwxNi40LDI0LjgsMjEuNiAgICBjMTQsNy4yLDMyLDExLjIsNTMuNiwxMS4yYzE4LDAsMzMuNi0yLjgsNDYuOC04YzEzLjItNS42LDIzLjYtMTMuMiwzMC40LTIyLjhzMTAuNC0yMC44LDEwLjQtMzIuOEMzNDAsMjgxLjYsMzM4LDI3Mi44LDMzNCwyNjUuNiAgICB6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE0zMjIuNCw0MDkuMmMtMTQuOCwwLTI4LjgtMy42LTQxLjItMTBjLTguOCwxLjYtMTgsMi40LTI3LjYsMi40Yy04Mi44LDAtMTUwLTY2LjQtMTUwLTE0OCAgICBjMC0xMCwxLjItMjAsMy4yLTI5LjZjLTcuNi0xMi44LTEyLTI3LjYtMTItNDMuMmMwLTQ3LjIsMzguOC04NS42LDg2LjgtODUuNmMxNi44LDAsMzIuOCw0LjgsNDYuNCwxMy4yYzguNC0xLjIsMTYuOC0yLDI1LjYtMiAgICBjODIuOCwwLDE1MCw2Ni40LDE1MCwxNDhjMCwxMC44LTEuMiwyMS42LTMuNiwzMS42YzUuNiwxMS42LDkuMiwyNC40LDkuMiwzOEM0MDkuMiwzNzAuOCwzNzAuNCw0MDkuMiwzMjIuNCw0MDkuMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``} 
                    ${helper.selectedCVColor === '#12A3D0' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM0LDI2NS42Yy0zLjItNy42LTguOC0xMy4yLTE2LTE4Yy03LjItNC40LTE1LjYtOC40LTI1LjYtMTEuNnMtMjEuMi02LTMzLjItOC40Yy05LjYtMi0xNi44LTQtMjAuOC01LjIgICAgYy00LTEuMi04LTIuOC0xMi00LjhjLTMuNi0yLTYuOC00LTguOC02LjhjLTItMi40LTMuMi01LjItMy4yLTguNGMwLTUuNiwzLjItMTAsOS4yLTE0YzYuNC00LDE1LjItNi40LDI2LTYuNCAgICBjMTEuNiwwLDIwLDIsMjUuMiw1LjZjNS4yLDQsOS42LDkuNiwxMy42LDE2LjRjMy4yLDUuNiw2LDkuMiw4LjgsMTEuNmMzLjIsMi44LDcuMiw0LDEyLjgsNGM2LDAsMTEuMi0yLDE1LjYtNi40ICAgIGM0LTQsNi04LjgsNi0xNC40YzAtNS42LTEuNi0xMS4yLTQuOC0xNi44Yy0zLjItNS42LTgtMTEuMi0xNC40LTE2Yy02LjQtNS4yLTE0LjgtOS4yLTI0LjgtMTJjLTEwLTMuMi0yMS42LTQuNC0zNS4yLTQuNCAgICBjLTE2LjgsMC0zMS42LDIuNC00NCw2LjhjLTEyLjgsNC40LTIyLjQsMTEuMi0yOS4yLDIwcy0xMCwxOC44LTEwLDMwYzAsMTEuNiwzLjIsMjEuNiw5LjYsMjkuNmM2LjQsOCwxNS4yLDE0LDI1LjYsMTguOCAgICBjMTAuNCw0LjQsMjMuNiw4LjQsMzkuMiwxMS42YzExLjYsMi40LDIwLjgsNC44LDI3LjYsNi44YzYuNCwyLDEyLDQuOCwxNiw4LjhjNCwzLjYsNS42LDgsNS42LDE0YzAsNy4yLTMuNiwxMy42LTExLjIsMTguNCAgICBjLTcuNiw1LjItMTgsNy42LTMwLjQsNy42Yy04LjgsMC0xNi40LTEuMi0yMS42LTRjLTUuMi0yLjQtOS42LTUuNi0xMi40LTkuNmMtMy4yLTQtNi05LjItOC44LTE1LjJjLTIuNC01LjYtNS4yLTkuNi04LjgtMTIuOCAgICBjLTMuNi0yLjgtOC00LjQtMTMuMi00LjRjLTYuNCwwLTExLjYsMi0xNS42LDUuNmMtNCw0LTYuNCw4LjQtNi40LDE0YzAsOC44LDMuMiwxNy42LDkuNiwyNi44YzYuNCw4LjgsMTQuOCwxNi40LDI0LjgsMjEuNiAgICBjMTQsNy4yLDMyLDExLjIsNTMuNiwxMS4yYzE4LDAsMzMuNi0yLjgsNDYuOC04YzEzLjItNS42LDIzLjYtMTMuMiwzMC40LTIyLjhzMTAuNC0yMC44LDEwLjQtMzIuOEMzNDAsMjgxLjYsMzM4LDI3Mi44LDMzNCwyNjUuNiAgICB6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE0zMjIuNCw0MDkuMmMtMTQuOCwwLTI4LjgtMy42LTQxLjItMTBjLTguOCwxLjYtMTgsMi40LTI3LjYsMi40Yy04Mi44LDAtMTUwLTY2LjQtMTUwLTE0OCAgICBjMC0xMCwxLjItMjAsMy4yLTI5LjZjLTcuNi0xMi44LTEyLTI3LjYtMTItNDMuMmMwLTQ3LjIsMzguOC04NS42LDg2LjgtODUuNmMxNi44LDAsMzIuOCw0LjgsNDYuNCwxMy4yYzguNC0xLjIsMTYuOC0yLDI1LjYtMiAgICBjODIuOCwwLDE1MCw2Ni40LDE1MCwxNDhjMCwxMC44LTEuMiwyMS42LTMuNiwzMS42YzUuNiwxMS42LDkuMiwyNC40LDkuMiwzOEM0MDkuMiwzNzAuOCwzNzAuNCw0MDkuMiwzMjIuNCw0MDkuMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``} 
                    ${helper.selectedCVColor === '#FF7373' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM0LDI2NS42Yy0zLjItNy42LTguOC0xMy4yLTE2LTE4Yy03LjItNC40LTE1LjYtOC40LTI1LjYtMTEuNnMtMjEuMi02LTMzLjItOC40Yy05LjYtMi0xNi44LTQtMjAuOC01LjIgICAgYy00LTEuMi04LTIuOC0xMi00LjhjLTMuNi0yLTYuOC00LTguOC02LjhjLTItMi40LTMuMi01LjItMy4yLTguNGMwLTUuNiwzLjItMTAsOS4yLTE0YzYuNC00LDE1LjItNi40LDI2LTYuNCAgICBjMTEuNiwwLDIwLDIsMjUuMiw1LjZjNS4yLDQsOS42LDkuNiwxMy42LDE2LjRjMy4yLDUuNiw2LDkuMiw4LjgsMTEuNmMzLjIsMi44LDcuMiw0LDEyLjgsNGM2LDAsMTEuMi0yLDE1LjYtNi40ICAgIGM0LTQsNi04LjgsNi0xNC40YzAtNS42LTEuNi0xMS4yLTQuOC0xNi44Yy0zLjItNS42LTgtMTEuMi0xNC40LTE2Yy02LjQtNS4yLTE0LjgtOS4yLTI0LjgtMTJjLTEwLTMuMi0yMS42LTQuNC0zNS4yLTQuNCAgICBjLTE2LjgsMC0zMS42LDIuNC00NCw2LjhjLTEyLjgsNC40LTIyLjQsMTEuMi0yOS4yLDIwcy0xMCwxOC44LTEwLDMwYzAsMTEuNiwzLjIsMjEuNiw5LjYsMjkuNmM2LjQsOCwxNS4yLDE0LDI1LjYsMTguOCAgICBjMTAuNCw0LjQsMjMuNiw4LjQsMzkuMiwxMS42YzExLjYsMi40LDIwLjgsNC44LDI3LjYsNi44YzYuNCwyLDEyLDQuOCwxNiw4LjhjNCwzLjYsNS42LDgsNS42LDE0YzAsNy4yLTMuNiwxMy42LTExLjIsMTguNCAgICBjLTcuNiw1LjItMTgsNy42LTMwLjQsNy42Yy04LjgsMC0xNi40LTEuMi0yMS42LTRjLTUuMi0yLjQtOS42LTUuNi0xMi40LTkuNmMtMy4yLTQtNi05LjItOC44LTE1LjJjLTIuNC01LjYtNS4yLTkuNi04LjgtMTIuOCAgICBjLTMuNi0yLjgtOC00LjQtMTMuMi00LjRjLTYuNCwwLTExLjYsMi0xNS42LDUuNmMtNCw0LTYuNCw4LjQtNi40LDE0YzAsOC44LDMuMiwxNy42LDkuNiwyNi44YzYuNCw4LjgsMTQuOCwxNi40LDI0LjgsMjEuNiAgICBjMTQsNy4yLDMyLDExLjIsNTMuNiwxMS4yYzE4LDAsMzMuNi0yLjgsNDYuOC04YzEzLjItNS42LDIzLjYtMTMuMiwzMC40LTIyLjhzMTAuNC0yMC44LDEwLjQtMzIuOEMzNDAsMjgxLjYsMzM4LDI3Mi44LDMzNCwyNjUuNiAgICB6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE0zMjIuNCw0MDkuMmMtMTQuOCwwLTI4LjgtMy42LTQxLjItMTBjLTguOCwxLjYtMTgsMi40LTI3LjYsMi40Yy04Mi44LDAtMTUwLTY2LjQtMTUwLTE0OCAgICBjMC0xMCwxLjItMjAsMy4yLTI5LjZjLTcuNi0xMi44LTEyLTI3LjYtMTItNDMuMmMwLTQ3LjIsMzguOC04NS42LDg2LjgtODUuNmMxNi44LDAsMzIuOCw0LjgsNDYuNCwxMy4yYzguNC0xLjIsMTYuOC0yLDI1LjYtMiAgICBjODIuOCwwLDE1MCw2Ni40LDE1MCwxNDhjMCwxMC44LTEuMiwyMS42LTMuNiwzMS42YzUuNiwxMS42LDkuMiwyNC40LDkuMiwzOEM0MDkuMiwzNzAuOCwzNzAuNCw0MDkuMiwzMjIuNCw0MDkuMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#299BE8' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM0LDI2NS42Yy0zLjItNy42LTguOC0xMy4yLTE2LTE4Yy03LjItNC40LTE1LjYtOC40LTI1LjYtMTEuNnMtMjEuMi02LTMzLjItOC40Yy05LjYtMi0xNi44LTQtMjAuOC01LjIgICAgYy00LTEuMi04LTIuOC0xMi00LjhjLTMuNi0yLTYuOC00LTguOC02LjhjLTItMi40LTMuMi01LjItMy4yLTguNGMwLTUuNiwzLjItMTAsOS4yLTE0YzYuNC00LDE1LjItNi40LDI2LTYuNCAgICBjMTEuNiwwLDIwLDIsMjUuMiw1LjZjNS4yLDQsOS42LDkuNiwxMy42LDE2LjRjMy4yLDUuNiw2LDkuMiw4LjgsMTEuNmMzLjIsMi44LDcuMiw0LDEyLjgsNGM2LDAsMTEuMi0yLDE1LjYtNi40ICAgIGM0LTQsNi04LjgsNi0xNC40YzAtNS42LTEuNi0xMS4yLTQuOC0xNi44Yy0zLjItNS42LTgtMTEuMi0xNC40LTE2Yy02LjQtNS4yLTE0LjgtOS4yLTI0LjgtMTJjLTEwLTMuMi0yMS42LTQuNC0zNS4yLTQuNCAgICBjLTE2LjgsMC0zMS42LDIuNC00NCw2LjhjLTEyLjgsNC40LTIyLjQsMTEuMi0yOS4yLDIwcy0xMCwxOC44LTEwLDMwYzAsMTEuNiwzLjIsMjEuNiw5LjYsMjkuNmM2LjQsOCwxNS4yLDE0LDI1LjYsMTguOCAgICBjMTAuNCw0LjQsMjMuNiw4LjQsMzkuMiwxMS42YzExLjYsMi40LDIwLjgsNC44LDI3LjYsNi44YzYuNCwyLDEyLDQuOCwxNiw4LjhjNCwzLjYsNS42LDgsNS42LDE0YzAsNy4yLTMuNiwxMy42LTExLjIsMTguNCAgICBjLTcuNiw1LjItMTgsNy42LTMwLjQsNy42Yy04LjgsMC0xNi40LTEuMi0yMS42LTRjLTUuMi0yLjQtOS42LTUuNi0xMi40LTkuNmMtMy4yLTQtNi05LjItOC44LTE1LjJjLTIuNC01LjYtNS4yLTkuNi04LjgtMTIuOCAgICBjLTMuNi0yLjgtOC00LjQtMTMuMi00LjRjLTYuNCwwLTExLjYsMi0xNS42LDUuNmMtNCw0LTYuNCw4LjQtNi40LDE0YzAsOC44LDMuMiwxNy42LDkuNiwyNi44YzYuNCw4LjgsMTQuOCwxNi40LDI0LjgsMjEuNiAgICBjMTQsNy4yLDMyLDExLjIsNTMuNiwxMS4yYzE4LDAsMzMuNi0yLjgsNDYuOC04YzEzLjItNS42LDIzLjYtMTMuMiwzMC40LTIyLjhzMTAuNC0yMC44LDEwLjQtMzIuOEMzNDAsMjgxLjYsMzM4LDI3Mi44LDMzNCwyNjUuNiAgICB6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE0zMjIuNCw0MDkuMmMtMTQuOCwwLTI4LjgtMy42LTQxLjItMTBjLTguOCwxLjYtMTgsMi40LTI3LjYsMi40Yy04Mi44LDAtMTUwLTY2LjQtMTUwLTE0OCAgICBjMC0xMCwxLjItMjAsMy4yLTI5LjZjLTcuNi0xMi44LTEyLTI3LjYtMTItNDMuMmMwLTQ3LjIsMzguOC04NS42LDg2LjgtODUuNmMxNi44LDAsMzIuOCw0LjgsNDYuNCwxMy4yYzguNC0xLjIsMTYuOC0yLDI1LjYtMiAgICBjODIuOCwwLDE1MCw2Ni40LDE1MCwxNDhjMCwxMC44LTEuMiwyMS42LTMuNiwzMS42YzUuNiwxMS42LDkuMiwyNC40LDkuMiwzOEM0MDkuMiwzNzAuOCwzNzAuNCw0MDkuMiwzMjIuNCw0MDkuMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#407F92' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM0LDI2NS42Yy0zLjItNy42LTguOC0xMy4yLTE2LTE4Yy03LjItNC40LTE1LjYtOC40LTI1LjYtMTEuNnMtMjEuMi02LTMzLjItOC40Yy05LjYtMi0xNi44LTQtMjAuOC01LjIgICAgYy00LTEuMi04LTIuOC0xMi00LjhjLTMuNi0yLTYuOC00LTguOC02LjhjLTItMi40LTMuMi01LjItMy4yLTguNGMwLTUuNiwzLjItMTAsOS4yLTE0YzYuNC00LDE1LjItNi40LDI2LTYuNCAgICBjMTEuNiwwLDIwLDIsMjUuMiw1LjZjNS4yLDQsOS42LDkuNiwxMy42LDE2LjRjMy4yLDUuNiw2LDkuMiw4LjgsMTEuNmMzLjIsMi44LDcuMiw0LDEyLjgsNGM2LDAsMTEuMi0yLDE1LjYtNi40ICAgIGM0LTQsNi04LjgsNi0xNC40YzAtNS42LTEuNi0xMS4yLTQuOC0xNi44Yy0zLjItNS42LTgtMTEuMi0xNC40LTE2Yy02LjQtNS4yLTE0LjgtOS4yLTI0LjgtMTJjLTEwLTMuMi0yMS42LTQuNC0zNS4yLTQuNCAgICBjLTE2LjgsMC0zMS42LDIuNC00NCw2LjhjLTEyLjgsNC40LTIyLjQsMTEuMi0yOS4yLDIwcy0xMCwxOC44LTEwLDMwYzAsMTEuNiwzLjIsMjEuNiw5LjYsMjkuNmM2LjQsOCwxNS4yLDE0LDI1LjYsMTguOCAgICBjMTAuNCw0LjQsMjMuNiw4LjQsMzkuMiwxMS42YzExLjYsMi40LDIwLjgsNC44LDI3LjYsNi44YzYuNCwyLDEyLDQuOCwxNiw4LjhjNCwzLjYsNS42LDgsNS42LDE0YzAsNy4yLTMuNiwxMy42LTExLjIsMTguNCAgICBjLTcuNiw1LjItMTgsNy42LTMwLjQsNy42Yy04LjgsMC0xNi40LTEuMi0yMS42LTRjLTUuMi0yLjQtOS42LTUuNi0xMi40LTkuNmMtMy4yLTQtNi05LjItOC44LTE1LjJjLTIuNC01LjYtNS4yLTkuNi04LjgtMTIuOCAgICBjLTMuNi0yLjgtOC00LjQtMTMuMi00LjRjLTYuNCwwLTExLjYsMi0xNS42LDUuNmMtNCw0LTYuNCw4LjQtNi40LDE0YzAsOC44LDMuMiwxNy42LDkuNiwyNi44YzYuNCw4LjgsMTQuOCwxNi40LDI0LjgsMjEuNiAgICBjMTQsNy4yLDMyLDExLjIsNTMuNiwxMS4yYzE4LDAsMzMuNi0yLjgsNDYuOC04YzEzLjItNS42LDIzLjYtMTMuMiwzMC40LTIyLjhzMTAuNC0yMC44LDEwLjQtMzIuOEMzNDAsMjgxLjYsMzM4LDI3Mi44LDMzNCwyNjUuNiAgICB6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE0zMjIuNCw0MDkuMmMtMTQuOCwwLTI4LjgtMy42LTQxLjItMTBjLTguOCwxLjYtMTgsMi40LTI3LjYsMi40Yy04Mi44LDAtMTUwLTY2LjQtMTUwLTE0OCAgICBjMC0xMCwxLjItMjAsMy4yLTI5LjZjLTcuNi0xMi44LTEyLTI3LjYtMTItNDMuMmMwLTQ3LjIsMzguOC04NS42LDg2LjgtODUuNmMxNi44LDAsMzIuOCw0LjgsNDYuNCwxMy4yYzguNC0xLjIsMTYuOC0yLDI1LjYtMiAgICBjODIuOCwwLDE1MCw2Ni40LDE1MCwxNDhjMCwxMC44LTEuMiwyMS42LTMuNiwzMS42YzUuNiwxMS42LDkuMiwyNC40LDkuMiwzOEM0MDkuMiwzNzAuOCwzNzAuNCw0MDkuMiwzMjIuNCw0MDkuMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    <p style="font-family: Calibri;font-size: 13px;color: ${helper.selectedCVColor === '#FFFFFF' ? '#fff' : `${helper.selectedCVColor === '#FFFFFF' ? '#5E5E5E' : `${helper.selectedCVColor}`}`}; margin:5px">${helper.userSkypeLink}</p>
                </div>` : ``
                    }

            ${helper.userTelegramLink !== '' ?
                        `<div style="display: flex;align-items: center;margin:0 10px 0 10px">
                    ${helper.selectedCVColor === '#FFFFFF' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDU1LjczMSA0NTUuNzMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuNzMxIDQ1NS43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8cGF0aCBkPSJNMzE2LjI0NCwxNDkuOTAzTDE0OS4wODIsMjUzLjU3OWMtMi45NDMsMS44MjUtNC4yODIsNS40MDktMy4yNTUsOC43MTdsMjIuNDIzLDcyLjI1MyAgIGMwLjQ3MSwxLjUxOCwyLjY4MywxLjMwOSwyLjg2MS0wLjI3MWw1LjQ1LTQ4LjQ0OGMwLjIxLTEuODcyLDEuMTA4LTMuNTk5LDIuNTE5LTQuODQ3bDE0MS41NTYtMTI1LjE3NyAgIEMzMjQuMDI1LDE1Mi44MSwzMjAuMDg5LDE0Ny41MTgsMzE2LjI0NCwxNDkuOTAzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPHBhdGggZD0iTTAsMHY0NTUuNzMxaDQ1NS43MzFWMEgweiBNMzc5Ljg4MiwxMTguNDE4bC01Mi4wMzEsMjQ4Ljc2Yy0yLjQ0MiwxMS42NzMtMTYuMTMzLDE2LjkxNi0yNS43NDcsOS44NTlsLTc4LjU1OS01Ny42NjUgICBsLTQwLjAzOSw0MC44ODFjLTcuMDI3LDcuMTc1LTE5LjE2Niw0LjI3MS0yMi4xODUtNS4zMDhsLTI4LjkwMS05MS43MDZsLTc3LjQ0MS0yMi44NjhjLTEwLjE2LTMtMTAuNzU5LTE3LjE2NS0wLjg4OC0yMS4wMTIgICBsMzA0Ljc1My0xMTguNzU5QzM3MC40NDQsOTYuMDgsMzgyLjQzMSwxMDYuMjMyLDM3OS44ODIsMTE4LjQxOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#2A2A2A' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDU1LjczMSA0NTUuNzMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuNzMxIDQ1NS43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8cGF0aCBkPSJNMzE2LjI0NCwxNDkuOTAzTDE0OS4wODIsMjUzLjU3OWMtMi45NDMsMS44MjUtNC4yODIsNS40MDktMy4yNTUsOC43MTdsMjIuNDIzLDcyLjI1MyAgIGMwLjQ3MSwxLjUxOCwyLjY4MywxLjMwOSwyLjg2MS0wLjI3MWw1LjQ1LTQ4LjQ0OGMwLjIxLTEuODcyLDEuMTA4LTMuNTk5LDIuNTE5LTQuODQ3bDE0MS41NTYtMTI1LjE3NyAgIEMzMjQuMDI1LDE1Mi44MSwzMjAuMDg5LDE0Ny41MTgsMzE2LjI0NCwxNDkuOTAzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzJBMkEyQSI+PC9wYXRoPgoJPHBhdGggZD0iTTAsMHY0NTUuNzMxaDQ1NS43MzFWMEgweiBNMzc5Ljg4MiwxMTguNDE4bC01Mi4wMzEsMjQ4Ljc2Yy0yLjQ0MiwxMS42NzMtMTYuMTMzLDE2LjkxNi0yNS43NDcsOS44NTlsLTc4LjU1OS01Ny42NjUgICBsLTQwLjAzOSw0MC44ODFjLTcuMDI3LDcuMTc1LTE5LjE2Niw0LjI3MS0yMi4xODUtNS4zMDhsLTI4LjkwMS05MS43MDZsLTc3LjQ0MS0yMi44NjhjLTEwLjE2LTMtMTAuNzU5LTE3LjE2NS0wLjg4OC0yMS4wMTIgICBsMzA0Ljc1My0xMTguNzU5QzM3MC40NDQsOTYuMDgsMzgyLjQzMSwxMDYuMjMyLDM3OS44ODIsMTE4LjQxOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />` : ``} 
                    ${helper.selectedCVColor === '#12A3D0' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDU1LjczMSA0NTUuNzMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuNzMxIDQ1NS43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8cGF0aCBkPSJNMzE2LjI0NCwxNDkuOTAzTDE0OS4wODIsMjUzLjU3OWMtMi45NDMsMS44MjUtNC4yODIsNS40MDktMy4yNTUsOC43MTdsMjIuNDIzLDcyLjI1MyAgIGMwLjQ3MSwxLjUxOCwyLjY4MywxLjMwOSwyLjg2MS0wLjI3MWw1LjQ1LTQ4LjQ0OGMwLjIxLTEuODcyLDEuMTA4LTMuNTk5LDIuNTE5LTQuODQ3bDE0MS41NTYtMTI1LjE3NyAgIEMzMjQuMDI1LDE1Mi44MSwzMjAuMDg5LDE0Ny41MTgsMzE2LjI0NCwxNDkuOTAzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzEyQTNEMCI+PC9wYXRoPgoJPHBhdGggZD0iTTAsMHY0NTUuNzMxaDQ1NS43MzFWMEgweiBNMzc5Ljg4MiwxMTguNDE4bC01Mi4wMzEsMjQ4Ljc2Yy0yLjQ0MiwxMS42NzMtMTYuMTMzLDE2LjkxNi0yNS43NDcsOS44NTlsLTc4LjU1OS01Ny42NjUgICBsLTQwLjAzOSw0MC44ODFjLTcuMDI3LDcuMTc1LTE5LjE2Niw0LjI3MS0yMi4xODUtNS4zMDhsLTI4LjkwMS05MS43MDZsLTc3LjQ0MS0yMi44NjhjLTEwLjE2LTMtMTAuNzU5LTE3LjE2NS0wLjg4OC0yMS4wMTIgICBsMzA0Ljc1My0xMTguNzU5QzM3MC40NDQsOTYuMDgsMzgyLjQzMSwxMDYuMjMyLDM3OS44ODIsMTE4LjQxOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />` : ``} 
                    ${helper.selectedCVColor === '#FF7373' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDU1LjczMSA0NTUuNzMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuNzMxIDQ1NS43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8cGF0aCBkPSJNMzE2LjI0NCwxNDkuOTAzTDE0OS4wODIsMjUzLjU3OWMtMi45NDMsMS44MjUtNC4yODIsNS40MDktMy4yNTUsOC43MTdsMjIuNDIzLDcyLjI1MyAgIGMwLjQ3MSwxLjUxOCwyLjY4MywxLjMwOSwyLjg2MS0wLjI3MWw1LjQ1LTQ4LjQ0OGMwLjIxLTEuODcyLDEuMTA4LTMuNTk5LDIuNTE5LTQuODQ3bDE0MS41NTYtMTI1LjE3NyAgIEMzMjQuMDI1LDE1Mi44MSwzMjAuMDg5LDE0Ny41MTgsMzE2LjI0NCwxNDkuOTAzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGNzM3MyI+PC9wYXRoPgoJPHBhdGggZD0iTTAsMHY0NTUuNzMxaDQ1NS43MzFWMEgweiBNMzc5Ljg4MiwxMTguNDE4bC01Mi4wMzEsMjQ4Ljc2Yy0yLjQ0MiwxMS42NzMtMTYuMTMzLDE2LjkxNi0yNS43NDcsOS44NTlsLTc4LjU1OS01Ny42NjUgICBsLTQwLjAzOSw0MC44ODFjLTcuMDI3LDcuMTc1LTE5LjE2Niw0LjI3MS0yMi4xODUtNS4zMDhsLTI4LjkwMS05MS43MDZsLTc3LjQ0MS0yMi44NjhjLTEwLjE2LTMtMTAuNzU5LTE3LjE2NS0wLjg4OC0yMS4wMTIgICBsMzA0Ljc1My0xMTguNzU5QzM3MC40NDQsOTYuMDgsMzgyLjQzMSwxMDYuMjMyLDM3OS44ODIsMTE4LjQxOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#299BE8' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDU1LjczMSA0NTUuNzMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuNzMxIDQ1NS43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8cGF0aCBkPSJNMzE2LjI0NCwxNDkuOTAzTDE0OS4wODIsMjUzLjU3OWMtMi45NDMsMS44MjUtNC4yODIsNS40MDktMy4yNTUsOC43MTdsMjIuNDIzLDcyLjI1MyAgIGMwLjQ3MSwxLjUxOCwyLjY4MywxLjMwOSwyLjg2MS0wLjI3MWw1LjQ1LTQ4LjQ0OGMwLjIxLTEuODcyLDEuMTA4LTMuNTk5LDIuNTE5LTQuODQ3bDE0MS41NTYtMTI1LjE3NyAgIEMzMjQuMDI1LDE1Mi44MSwzMjAuMDg5LDE0Ny41MTgsMzE2LjI0NCwxNDkuOTAzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzI5OUJFOCI+PC9wYXRoPgoJPHBhdGggZD0iTTAsMHY0NTUuNzMxaDQ1NS43MzFWMEgweiBNMzc5Ljg4MiwxMTguNDE4bC01Mi4wMzEsMjQ4Ljc2Yy0yLjQ0MiwxMS42NzMtMTYuMTMzLDE2LjkxNi0yNS43NDcsOS44NTlsLTc4LjU1OS01Ny42NjUgICBsLTQwLjAzOSw0MC44ODFjLTcuMDI3LDcuMTc1LTE5LjE2Niw0LjI3MS0yMi4xODUtNS4zMDhsLTI4LjkwMS05MS43MDZsLTc3LjQ0MS0yMi44NjhjLTEwLjE2LTMtMTAuNzU5LTE3LjE2NS0wLjg4OC0yMS4wMTIgICBsMzA0Ljc1My0xMTguNzU5QzM3MC40NDQsOTYuMDgsMzgyLjQzMSwxMDYuMjMyLDM3OS44ODIsMTE4LjQxOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#407F92' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDU1LjczMSA0NTUuNzMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuNzMxIDQ1NS43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8cGF0aCBkPSJNMzE2LjI0NCwxNDkuOTAzTDE0OS4wODIsMjUzLjU3OWMtMi45NDMsMS44MjUtNC4yODIsNS40MDktMy4yNTUsOC43MTdsMjIuNDIzLDcyLjI1MyAgIGMwLjQ3MSwxLjUxOCwyLjY4MywxLjMwOSwyLjg2MS0wLjI3MWw1LjQ1LTQ4LjQ0OGMwLjIxLTEuODcyLDEuMTA4LTMuNTk5LDIuNTE5LTQuODQ3bDE0MS41NTYtMTI1LjE3NyAgIEMzMjQuMDI1LDE1Mi44MSwzMjAuMDg5LDE0Ny41MTgsMzE2LjI0NCwxNDkuOTAzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzQwN0Y5MiI+PC9wYXRoPgoJPHBhdGggZD0iTTAsMHY0NTUuNzMxaDQ1NS43MzFWMEgweiBNMzc5Ljg4MiwxMTguNDE4bC01Mi4wMzEsMjQ4Ljc2Yy0yLjQ0MiwxMS42NzMtMTYuMTMzLDE2LjkxNi0yNS43NDcsOS44NTlsLTc4LjU1OS01Ny42NjUgICBsLTQwLjAzOSw0MC44ODFjLTcuMDI3LDcuMTc1LTE5LjE2Niw0LjI3MS0yMi4xODUtNS4zMDhsLTI4LjkwMS05MS43MDZsLTc3LjQ0MS0yMi44NjhjLTEwLjE2LTMtMTAuNzU5LTE3LjE2NS0wLjg4OC0yMS4wMTIgICBsMzA0Ljc1My0xMTguNzU5QzM3MC40NDQsOTYuMDgsMzgyLjQzMSwxMDYuMjMyLDM3OS44ODIsMTE4LjQxOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    <p style="font-family: Calibri;font-size: 13px;color: ${helper.selectedCVColor === '#FFFFFF' ? '#fff' : `${helper.selectedCVColor === '#FFFFFF' ? '#5E5E5E' : `${helper.selectedCVColor}`}`}; margin:5px">${helper.userTelegramLink}</p>
                </div>` : ``
                    }

            ${helper.userFacebookLink !== '' ?
                        `<div style="display: flex;align-items: center;margin:0 10px 0 10px">
                    ${helper.selectedCVColor === '#FFFFFF' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDE1MXYtMTgxaC02MHYtOTBoNjB2LTYxYzAtNDkuNjI4OTA2IDQwLjM3MTA5NC05MCA5MC05MGg5MXY5MGgtOTF2NjFoOTFsLTE1IDkwaC03NnYxODFoMTIxYzQxLjM1MTU2MiAwIDc1LTMzLjY0ODQzOCA3NS03NXYtMzYyYzAtNDEuMzUxNTYyLTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />` : ``}
                    ${helper.selectedCVColor === '#2A2A2A' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDE1MXYtMTgxaC02MHYtOTBoNjB2LTYxYzAtNDkuNjI4OTA2IDQwLjM3MTA5NC05MCA5MC05MGg5MXY5MGgtOTF2NjFoOTFsLTE1IDkwaC03NnYxODFoMTIxYzQxLjM1MTU2MiAwIDc1LTMzLjY0ODQzOCA3NS03NXYtMzYyYzAtNDEuMzUxNTYyLTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />` : ``} 
                    ${helper.selectedCVColor === '#12A3D0' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDE1MXYtMTgxaC02MHYtOTBoNjB2LTYxYzAtNDkuNjI4OTA2IDQwLjM3MTA5NC05MCA5MC05MGg5MXY5MGgtOTF2NjFoOTFsLTE1IDkwaC03NnYxODFoMTIxYzQxLjM1MTU2MiAwIDc1LTMzLjY0ODQzOCA3NS03NXYtMzYyYzAtNDEuMzUxNTYyLTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />` : ``} 
                    ${helper.selectedCVColor === '#FF7373' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDE1MXYtMTgxaC02MHYtOTBoNjB2LTYxYzAtNDkuNjI4OTA2IDQwLjM3MTA5NC05MCA5MC05MGg5MXY5MGgtOTF2NjFoOTFsLTE1IDkwaC03NnYxODFoMTIxYzQxLjM1MTU2MiAwIDc1LTMzLjY0ODQzOCA3NS03NXYtMzYyYzAtNDEuMzUxNTYyLTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />` : ``}
                    ${helper.selectedCVColor === '#299BE8' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDE1MXYtMTgxaC02MHYtOTBoNjB2LTYxYzAtNDkuNjI4OTA2IDQwLjM3MTA5NC05MCA5MC05MGg5MXY5MGgtOTF2NjFoOTFsLTE1IDkwaC03NnYxODFoMTIxYzQxLjM1MTU2MiAwIDc1LTMzLjY0ODQzOCA3NS03NXYtMzYyYzAtNDEuMzUxNTYyLTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+PC9nPiA8L3N2Zz4=" />` : ``}
                    ${helper.selectedCVColor === '#407F92' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDE1MXYtMTgxaC02MHYtOTBoNjB2LTYxYzAtNDkuNjI4OTA2IDQwLjM3MTA5NC05MCA5MC05MGg5MXY5MGgtOTF2NjFoOTFsLTE1IDkwaC03NnYxODFoMTIxYzQxLjM1MTU2MiAwIDc1LTMzLjY0ODQzOCA3NS03NXYtMzYyYzAtNDEuMzUxNTYyLTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />` : ``}
                    <p style="font-family: Calibri;font-size: 13px;color: ${helper.selectedCVColor === '#FFFFFF' ? '#fff' : `${helper.selectedCVColor === '#FFFFFF' ? '#5E5E5E' : `${helper.selectedCVColor}`}`}; margin:5px">${helper.userFacebookLink}</p>
               </div>` : ``
                    }

            ${helper.userTwitterLink !== '' ?
                        `<div style="display: flex;align-items: center;margin:0 10px 0 10px">
                    ${helper.selectedCVColor === '#FFFFFF' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTM3Ny4yLDE4OWMwLDIuOCwwLDUuNiwwLDguNGMwLDg0LTY0LjgsMTgwLjgtMTgzLjYsMTgwLjhjLTM2LjQsMC03MC40LTEwLjQtOTguOC0yOC40ICAgIGM1LjIsMC40LDEwLDAuOCwxNS4yLDAuOGMzMC40LDAsNTgtMTAsODAtMjcuMmMtMjguNC0wLjQtNTItMTguOC02MC40LTQ0YzQsMC44LDgsMS4yLDEyLDEuMmM2LDAsMTItMC44LDE3LjItMi40ICAgIGMtMjguOC02LTUwLjgtMzEuNi01MC44LTYyLjRWMjE1YzgsNC44LDE4LjQsNy42LDI4LjgsOGMtMTcuMi0xMS4yLTI4LjgtMzAuOC0yOC44LTUyLjhjMC0xMS42LDMuMi0yMi40LDguOC0zMiAgICBjMzIsMzguNCw3OS4yLDYzLjYsMTMyLjgsNjYuNGMtMS4yLTQuOC0xLjYtOS42LTEuNi0xNC40YzAtMzUuMiwyOC44LTYzLjYsNjQuNC02My42YzE4LjQsMCwzNS4yLDcuNiw0Ny4yLDIwICAgIGMxNC44LTIuOCwyOC40LTgsNDAuOC0xNS42Yy00LjgsMTQuOC0xNS4yLDI3LjItMjguNCwzNS4yYzEzLjItMS42LDI1LjYtNC44LDM3LjItMTBDNDAwLjQsMTY5LDM4OS42LDE4MC4yLDM3Ny4yLDE4OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#2A2A2A' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTM3Ny4yLDE4OWMwLDIuOCwwLDUuNiwwLDguNGMwLDg0LTY0LjgsMTgwLjgtMTgzLjYsMTgwLjhjLTM2LjQsMC03MC40LTEwLjQtOTguOC0yOC40ICAgIGM1LjIsMC40LDEwLDAuOCwxNS4yLDAuOGMzMC40LDAsNTgtMTAsODAtMjcuMmMtMjguNC0wLjQtNTItMTguOC02MC40LTQ0YzQsMC44LDgsMS4yLDEyLDEuMmM2LDAsMTItMC44LDE3LjItMi40ICAgIGMtMjguOC02LTUwLjgtMzEuNi01MC44LTYyLjRWMjE1YzgsNC44LDE4LjQsNy42LDI4LjgsOGMtMTcuMi0xMS4yLTI4LjgtMzAuOC0yOC44LTUyLjhjMC0xMS42LDMuMi0yMi40LDguOC0zMiAgICBjMzIsMzguNCw3OS4yLDYzLjYsMTMyLjgsNjYuNGMtMS4yLTQuOC0xLjYtOS42LTEuNi0xNC40YzAtMzUuMiwyOC44LTYzLjYsNjQuNC02My42YzE4LjQsMCwzNS4yLDcuNiw0Ny4yLDIwICAgIGMxNC44LTIuOCwyOC40LTgsNDAuOC0xNS42Yy00LjgsMTQuOC0xNS4yLDI3LjItMjguNCwzNS4yYzEzLjItMS42LDI1LjYtNC44LDM3LjItMTBDNDAwLjQsMTY5LDM4OS42LDE4MC4yLDM3Ny4yLDE4OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``} 
                    ${helper.selectedCVColor === '#12A3D0' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTM3Ny4yLDE4OWMwLDIuOCwwLDUuNiwwLDguNGMwLDg0LTY0LjgsMTgwLjgtMTgzLjYsMTgwLjhjLTM2LjQsMC03MC40LTEwLjQtOTguOC0yOC40ICAgIGM1LjIsMC40LDEwLDAuOCwxNS4yLDAuOGMzMC40LDAsNTgtMTAsODAtMjcuMmMtMjguNC0wLjQtNTItMTguOC02MC40LTQ0YzQsMC44LDgsMS4yLDEyLDEuMmM2LDAsMTItMC44LDE3LjItMi40ICAgIGMtMjguOC02LTUwLjgtMzEuNi01MC44LTYyLjRWMjE1YzgsNC44LDE4LjQsNy42LDI4LjgsOGMtMTcuMi0xMS4yLTI4LjgtMzAuOC0yOC44LTUyLjhjMC0xMS42LDMuMi0yMi40LDguOC0zMiAgICBjMzIsMzguNCw3OS4yLDYzLjYsMTMyLjgsNjYuNGMtMS4yLTQuOC0xLjYtOS42LTEuNi0xNC40YzAtMzUuMiwyOC44LTYzLjYsNjQuNC02My42YzE4LjQsMCwzNS4yLDcuNiw0Ny4yLDIwICAgIGMxNC44LTIuOCwyOC40LTgsNDAuOC0xNS42Yy00LjgsMTQuOC0xNS4yLDI3LjItMjguNCwzNS4yYzEzLjItMS42LDI1LjYtNC44LDM3LjItMTBDNDAwLjQsMTY5LDM4OS42LDE4MC4yLDM3Ny4yLDE4OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``} 
                    ${helper.selectedCVColor === '#FF7373' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTM3Ny4yLDE4OWMwLDIuOCwwLDUuNiwwLDguNGMwLDg0LTY0LjgsMTgwLjgtMTgzLjYsMTgwLjhjLTM2LjQsMC03MC40LTEwLjQtOTguOC0yOC40ICAgIGM1LjIsMC40LDEwLDAuOCwxNS4yLDAuOGMzMC40LDAsNTgtMTAsODAtMjcuMmMtMjguNC0wLjQtNTItMTguOC02MC40LTQ0YzQsMC44LDgsMS4yLDEyLDEuMmM2LDAsMTItMC44LDE3LjItMi40ICAgIGMtMjguOC02LTUwLjgtMzEuNi01MC44LTYyLjRWMjE1YzgsNC44LDE4LjQsNy42LDI4LjgsOGMtMTcuMi0xMS4yLTI4LjgtMzAuOC0yOC44LTUyLjhjMC0xMS42LDMuMi0yMi40LDguOC0zMiAgICBjMzIsMzguNCw3OS4yLDYzLjYsMTMyLjgsNjYuNGMtMS4yLTQuOC0xLjYtOS42LTEuNi0xNC40YzAtMzUuMiwyOC44LTYzLjYsNjQuNC02My42YzE4LjQsMCwzNS4yLDcuNiw0Ny4yLDIwICAgIGMxNC44LTIuOCwyOC40LTgsNDAuOC0xNS42Yy00LjgsMTQuOC0xNS4yLDI3LjItMjguNCwzNS4yYzEzLjItMS42LDI1LjYtNC44LDM3LjItMTBDNDAwLjQsMTY5LDM4OS42LDE4MC4yLDM3Ny4yLDE4OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#299BE8' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTM3Ny4yLDE4OWMwLDIuOCwwLDUuNiwwLDguNGMwLDg0LTY0LjgsMTgwLjgtMTgzLjYsMTgwLjhjLTM2LjQsMC03MC40LTEwLjQtOTguOC0yOC40ICAgIGM1LjIsMC40LDEwLDAuOCwxNS4yLDAuOGMzMC40LDAsNTgtMTAsODAtMjcuMmMtMjguNC0wLjQtNTItMTguOC02MC40LTQ0YzQsMC44LDgsMS4yLDEyLDEuMmM2LDAsMTItMC44LDE3LjItMi40ICAgIGMtMjguOC02LTUwLjgtMzEuNi01MC44LTYyLjRWMjE1YzgsNC44LDE4LjQsNy42LDI4LjgsOGMtMTcuMi0xMS4yLTI4LjgtMzAuOC0yOC44LTUyLjhjMC0xMS42LDMuMi0yMi40LDguOC0zMiAgICBjMzIsMzguNCw3OS4yLDYzLjYsMTMyLjgsNjYuNGMtMS4yLTQuOC0xLjYtOS42LTEuNi0xNC40YzAtMzUuMiwyOC44LTYzLjYsNjQuNC02My42YzE4LjQsMCwzNS4yLDcuNiw0Ny4yLDIwICAgIGMxNC44LTIuOCwyOC40LTgsNDAuOC0xNS42Yy00LjgsMTQuOC0xNS4yLDI3LjItMjguNCwzNS4yYzEzLjItMS42LDI1LjYtNC44LDM3LjItMTBDNDAwLjQsMTY5LDM4OS42LDE4MC4yLDM3Ny4yLDE4OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#407F92' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTM3Ny4yLDE4OWMwLDIuOCwwLDUuNiwwLDguNGMwLDg0LTY0LjgsMTgwLjgtMTgzLjYsMTgwLjhjLTM2LjQsMC03MC40LTEwLjQtOTguOC0yOC40ICAgIGM1LjIsMC40LDEwLDAuOCwxNS4yLDAuOGMzMC40LDAsNTgtMTAsODAtMjcuMmMtMjguNC0wLjQtNTItMTguOC02MC40LTQ0YzQsMC44LDgsMS4yLDEyLDEuMmM2LDAsMTItMC44LDE3LjItMi40ICAgIGMtMjguOC02LTUwLjgtMzEuNi01MC44LTYyLjRWMjE1YzgsNC44LDE4LjQsNy42LDI4LjgsOGMtMTcuMi0xMS4yLTI4LjgtMzAuOC0yOC44LTUyLjhjMC0xMS42LDMuMi0yMi40LDguOC0zMiAgICBjMzIsMzguNCw3OS4yLDYzLjYsMTMyLjgsNjYuNGMtMS4yLTQuOC0xLjYtOS42LTEuNi0xNC40YzAtMzUuMiwyOC44LTYzLjYsNjQuNC02My42YzE4LjQsMCwzNS4yLDcuNiw0Ny4yLDIwICAgIGMxNC44LTIuOCwyOC40LTgsNDAuOC0xNS42Yy00LjgsMTQuOC0xNS4yLDI3LjItMjguNCwzNS4yYzEzLjItMS42LDI1LjYtNC44LDM3LjItMTBDNDAwLjQsMTY5LDM4OS42LDE4MC4yLDM3Ny4yLDE4OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    <p style="font-family: Calibri;font-size: 13px;color: ${helper.selectedCVColor === '#FFFFFF' ? '#fff' : `${helper.selectedCVColor === '#FFFFFF' ? '#5E5E5E' : `${helper.selectedCVColor}`}`}; margin:5px">${helper.userTwitterLink}</p>
               </div>` : ``
                    }

            ${helper.userYoutubeLink !== '' ?
                        `<div style="display: flex;align-items: center;margin:0 10px 0 10px">
                    ${helper.selectedCVColor === '#FFFFFF' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjIxOS42LDIwMi40IDIxOS42LDI5NC40IDMwNC40LDI0OC44ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BvbHlnb24+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE00MDgsMjY0LjRjMCwyNi40LTIuNCw1My4yLTIuNCw1My4ycy0yLjgsMjIuNC0xMiwzMi40Yy0xMiwxMy4yLTI1LjIsMTMuMi0zMS4yLDE0ICAgIGMtNDQsMy4yLTExMCwzLjYtMTEwLDMuNnMtODItMS4yLTEwNy4yLTMuNmMtNi44LTEuMi0yMi44LTAuOC0zNC44LTE0Yy05LjYtMTAtMTItMzIuNC0xMi0zMi40Uzk2LDI5MC44LDk2LDI2NC40di0yNC44ICAgIGMwLTI2LjQsMi40LTUzLjIsMi40LTUzLjJzMi44LTIyLjQsMTItMzIuNGMxMi0xMy4yLDI1LjItMTMuNiwzMS4yLTE0LjRDMTg2LDEzNi40LDI1MiwxMzYsMjUyLDEzNnM2NiwwLjQsMTEwLDMuNiAgICBjNiwwLjgsMTkuNiwxLjIsMzEuNiwxNGM5LjYsMTAsMTIsMzIuOCwxMiwzMi44czIuNCwyNi44LDIuNCw1My4yVjI2NC40eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
                    ${helper.selectedCVColor === '#2A2A2A' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjIxOS42LDIwMi40IDIxOS42LDI5NC40IDMwNC40LDI0OC44ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BvbHlnb24+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE00MDgsMjY0LjRjMCwyNi40LTIuNCw1My4yLTIuNCw1My4ycy0yLjgsMjIuNC0xMiwzMi40Yy0xMiwxMy4yLTI1LjIsMTMuMi0zMS4yLDE0ICAgIGMtNDQsMy4yLTExMCwzLjYtMTEwLDMuNnMtODItMS4yLTEwNy4yLTMuNmMtNi44LTEuMi0yMi44LTAuOC0zNC44LTE0Yy05LjYtMTAtMTItMzIuNC0xMi0zMi40Uzk2LDI5MC44LDk2LDI2NC40di0yNC44ICAgIGMwLTI2LjQsMi40LTUzLjIsMi40LTUzLjJzMi44LTIyLjQsMTItMzIuNGMxMi0xMy4yLDI1LjItMTMuNiwzMS4yLTE0LjRDMTg2LDEzNi40LDI1MiwxMzYsMjUyLDEzNnM2NiwwLjQsMTEwLDMuNiAgICBjNiwwLjgsMTkuNiwxLjIsMzEuNiwxNGM5LjYsMTAsMTIsMzIuOCwxMiwzMi44czIuNCwyNi44LDIuNCw1My4yVjI2NC40eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzJBMkEyQSI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``} 
                    ${helper.selectedCVColor === '#12A3D0' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjIxOS42LDIwMi40IDIxOS42LDI5NC40IDMwNC40LDI0OC44ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BvbHlnb24+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE00MDgsMjY0LjRjMCwyNi40LTIuNCw1My4yLTIuNCw1My4ycy0yLjgsMjIuNC0xMiwzMi40Yy0xMiwxMy4yLTI1LjIsMTMuMi0zMS4yLDE0ICAgIGMtNDQsMy4yLTExMCwzLjYtMTEwLDMuNnMtODItMS4yLTEwNy4yLTMuNmMtNi44LTEuMi0yMi44LTAuOC0zNC44LTE0Yy05LjYtMTAtMTItMzIuNC0xMi0zMi40Uzk2LDI5MC44LDk2LDI2NC40di0yNC44ICAgIGMwLTI2LjQsMi40LTUzLjIsMi40LTUzLjJzMi44LTIyLjQsMTItMzIuNGMxMi0xMy4yLDI1LjItMTMuNiwzMS4yLTE0LjRDMTg2LDEzNi40LDI1MiwxMzYsMjUyLDEzNnM2NiwwLjQsMTEwLDMuNiAgICBjNiwwLjgsMTkuNiwxLjIsMzEuNiwxNGM5LjYsMTAsMTIsMzIuOCwxMiwzMi44czIuNCwyNi44LDIuNCw1My4yVjI2NC40eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzEyQTNEMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``} 
                    ${helper.selectedCVColor === '#FF7373' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjIxOS42LDIwMi40IDIxOS42LDI5NC40IDMwNC40LDI0OC44ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BvbHlnb24+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE00MDgsMjY0LjRjMCwyNi40LTIuNCw1My4yLTIuNCw1My4ycy0yLjgsMjIuNC0xMiwzMi40Yy0xMiwxMy4yLTI1LjIsMTMuMi0zMS4yLDE0ICAgIGMtNDQsMy4yLTExMCwzLjYtMTEwLDMuNnMtODItMS4yLTEwNy4yLTMuNmMtNi44LTEuMi0yMi44LTAuOC0zNC44LTE0Yy05LjYtMTAtMTItMzIuNC0xMi0zMi40Uzk2LDI5MC44LDk2LDI2NC40di0yNC44ICAgIGMwLTI2LjQsMi40LTUzLjIsMi40LTUzLjJzMi44LTIyLjQsMTItMzIuNGMxMi0xMy4yLDI1LjItMTMuNiwzMS4yLTE0LjRDMTg2LDEzNi40LDI1MiwxMzYsMjUyLDEzNnM2NiwwLjQsMTEwLDMuNiAgICBjNiwwLjgsMTkuNiwxLjIsMzEuNiwxNGM5LjYsMTAsMTIsMzIuOCwxMiwzMi44czIuNCwyNi44LDIuNCw1My4yVjI2NC40eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGNzM3MyI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
                    ${helper.selectedCVColor === '#299BE8' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjIxOS42LDIwMi40IDIxOS42LDI5NC40IDMwNC40LDI0OC44ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BvbHlnb24+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE00MDgsMjY0LjRjMCwyNi40LTIuNCw1My4yLTIuNCw1My4ycy0yLjgsMjIuNC0xMiwzMi40Yy0xMiwxMy4yLTI1LjIsMTMuMi0zMS4yLDE0ICAgIGMtNDQsMy4yLTExMCwzLjYtMTEwLDMuNnMtODItMS4yLTEwNy4yLTMuNmMtNi44LTEuMi0yMi44LTAuOC0zNC44LTE0Yy05LjYtMTAtMTItMzIuNC0xMi0zMi40Uzk2LDI5MC44LDk2LDI2NC40di0yNC44ICAgIGMwLTI2LjQsMi40LTUzLjIsMi40LTUzLjJzMi44LTIyLjQsMTItMzIuNGMxMi0xMy4yLDI1LjItMTMuNiwzMS4yLTE0LjRDMTg2LDEzNi40LDI1MiwxMzYsMjUyLDEzNnM2NiwwLjQsMTEwLDMuNiAgICBjNiwwLjgsMTkuNiwxLjIsMzEuNiwxNGM5LjYsMTAsMTIsMzIuOCwxMiwzMi44czIuNCwyNi44LDIuNCw1My4yVjI2NC40eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzI5OUJFOCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
                    ${helper.selectedCVColor === '#407F92' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjIxOS42LDIwMi40IDIxOS42LDI5NC40IDMwNC40LDI0OC44ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BvbHlnb24+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE00MDgsMjY0LjRjMCwyNi40LTIuNCw1My4yLTIuNCw1My4ycy0yLjgsMjIuNC0xMiwzMi40Yy0xMiwxMy4yLTI1LjIsMTMuMi0zMS4yLDE0ICAgIGMtNDQsMy4yLTExMCwzLjYtMTEwLDMuNnMtODItMS4yLTEwNy4yLTMuNmMtNi44LTEuMi0yMi44LTAuOC0zNC44LTE0Yy05LjYtMTAtMTItMzIuNC0xMi0zMi40Uzk2LDI5MC44LDk2LDI2NC40di0yNC44ICAgIGMwLTI2LjQsMi40LTUzLjIsMi40LTUzLjJzMi44LTIyLjQsMTItMzIuNGMxMi0xMy4yLDI1LjItMTMuNiwzMS4yLTE0LjRDMTg2LDEzNi40LDI1MiwxMzYsMjUyLDEzNnM2NiwwLjQsMTEwLDMuNiAgICBjNiwwLjgsMTkuNiwxLjIsMzEuNiwxNGM5LjYsMTAsMTIsMzIuOCwxMiwzMi44czIuNCwyNi44LDIuNCw1My4yVjI2NC40eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzQwN0Y5MiI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
                    <p style="font-family: Calibri;font-size: 13px;color: ${helper.selectedCVColor === '#FFFFFF' ? '#fff' : `${helper.selectedCVColor === '#FFFFFF' ? '#5E5E5E' : `${helper.selectedCVColor}`}`}; margin:5px">${helper.userYoutubeLink}</p>
               </div>` : ``
                    }

           
            ${helper.userPersonalLink.map((item, i) => `<div style="display: ${helper.userPersonalLink.length > 0 ? 'flex' : 'none'};align-items: center;margin:0 10px 0 10px">
                    ${helper.selectedCVColor === '#FFFFFF' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#2A2A2A' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``} 
                    ${helper.selectedCVColor === '#12A3D0' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``} 
                    ${helper.selectedCVColor === '#FF7373' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#299BE8' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    ${helper.selectedCVColor === '#407F92' ? `<img height="13px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
                    <p style="font-family: Calibri;font-size: 13px;color: ${helper.selectedCVColor === '#FFFFFF' ? '#fff' : `${helper.selectedCVColor === '#FFFFFF' ? '#5E5E5E' : `${helper.selectedCVColor}`}`}; margin:5px">${item.link}</p>
               </div >`.trim()).join('')}

        </div>

        <div style="width: 100%;display: flex">
            <div style="width: 55%;padding-bottom: 25px">
                <div style="width: 95%;margin: auto;margin-top: 20px">
                    <p style="color:${helper.selectedCVColor === '#FFFFFF' ? '#FF8F8F' : '#fff'};font-family:Calibri;font-size: 18px;margin: 0 0 0 10px;">Eğitim</p>
                    ${helper.userSchools.map((item, i) => `<div style="margin-left: 15px;margin-top: 3px">
                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:${helper.selectedCVColor === '#FFFFFF' ? '#606060' : '#fff'}">${item.schoolName}</p>
                        <p style="margin:2px 0 0 20px;font-family: Calibri;font-size: 11px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">${item.schoolDepartment}</p>
                        <p style="margin:2px 0 0 20px;font-family: Calibri;font-size: 10px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">${item.schoolGrade}</p>
                        <p style="margin:2px 0 7px 20px;font-family: Calibri;font-size: 10px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">${item.schoolStartDate} - ${item.schoolFinishDate}</p>
                    </div>`.trim()).join('')}
                </div>

                ${helper.userCompanies.length > 0 ? `<div style="width: 95%;margin: auto;margin-top: 15px">
                    <p style="color:${helper.selectedCVColor === '#FFFFFF' ? '#FF8F8F' : '#fff'};font-family:Calibri;font-size: 18px;margin: 0 0 0 10px;">İş Deneyimi</p>
                    ${helper.userCompanies.map((item, i) => `<div style="margin-left: 15px;margin-top: 3px">
                        <p style="margin:0 0 0 10px;font-family: Calibri;font-size: 13px;color:${helper.selectedCVColor === '#FFFFFF' ? '#606060' : '#fff'}">${item.companyName}</p>
                        <p style="margin:2px 0 0 20px;font-family: Calibri;font-size: 12px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">${item.companyJob}</p>
                        <p style="margin:2px 0 0 20px;font-family: Calibri;font-size: 10px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">${item.companyStartDate} - ${item.companyFinishDate}</p>
                        <p style="margin:2px 0 7px 20px;font-family: Calibri;font-size: 10px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">${item.companyDescription}</p>
                    </div>`.trim()).join('')}
                </div>`: ``}

                ${helper.userProjects.length > 0 ? `<div style="width: 95%;margin: auto;margin-top: 15px">
                    <p style="color:${helper.selectedCVColor === '#FFFFFF' ? '#FF8F8F' : '#fff'};font-family:Calibri;font-size: 18px;margin: 0 0 0 10px;">Projeler</p>
                    ${helper.userProjects.map((item, i) => `<div style="margin-left: 15px;margin-top: 3px">
                        <p style="margin: 0 0 0 10px;font-family: Calibri;font-size: 13px;color:${helper.selectedCVColor === '#FFFFFF' ? '#606060' : '#fff'}">${item.projectName}</p>
                        <p style="margin: 2px 0 0 20px;font-family: Calibri;font-size: 10px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">Araçlar: ${item.projectTools}</p>
                        <p style="margin: 2px 0 0 20px;font-family: Calibri;font-size: 10px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">${item.projectLink}</p>
                        <p style="margin:2px 0 7px 20px;font-family: Calibri;font-size: 10px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">${item.projectDescription}</p>
                    </div>`.trim()).join('')}
                </div>`: ``}

                ${helper.userReferences.length > 0 ? `<div style="width: 95%;margin: auto;margin-top: 15px">
                    <p style="color:${helper.selectedCVColor === '#FFFFFF' ? '#FF8F8F' : '#fff'};font-family:Calibri;font-size: 18px;margin: 0 0 0 10px;">Referans</p>
                    ${helper.userReferences.map((item, i) => `<div style="margin-left: 15px;margin-top: 3px">
                        <p style="margin: 0 0 0 10px;font-family: Calibri;font-size: 13px;color:${helper.selectedCVColor === '#FFFFFF' ? '#606060' : '#fff'}">${item.name}</p>
                        <p style="margin: 0 0 2px 20px;font-family: Calibri;font-size: 10px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">Tel: ${item.tel}</p>
                        <p style="margin: 0 0 2px 20px;font-family: Calibri;font-size: 10px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">Email: ${item.email}</p>
                        <p style="margin: 0 0 7px 20px;font-family: Calibri;font-size: 10px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">İş yeri: ${item.companyName}</p>
                    </div>`.trim()).join('')}
                </div>`: ``}

            </div>


            <div style="width: 45%;padding-bottom: 25px">
                ${helper.UserLanguages.length > 0 ? `<div style="width: 95%;margin: auto;margin-top: 20px">
                    <p style="color:${helper.selectedCVColor === '#FFFFFF' ? '#FF8F8F' : '#fff'};font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Bildiği Diller</p>
                    ${helper.UserLanguages.map((item, i) => `<div style="margin-left: 10px;margin-top: 3px;display: flex;width:80%">
                        <div style="margin-right: 20px;min-width:40%">
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:${helper.selectedCVColor === '#FFFFFF' ? '#606060' : '#fff'}">${item.name}:</p>
                        </div>
                        <div >
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">${item.level}</p>
                        </div >
                    </div > `.trim()).join('')}
                </div>`: ``}

                <div style="width: 95%;margin: auto;margin-top: 15px">
                    <p style="color:${helper.selectedCVColor === '#FFFFFF' ? '#FF8F8F' : '#fff'};font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Yetenekler</p>
                    ${helper.userAbilities.map((item, i) => `<div style="margin-left: 10px;margin-top: 3px;display: flex;width:80%">
                        <div style="margin-right: 5px;min-width:40%">
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:${helper.selectedCVColor === '#FFFFFF' ? '#606060' : '#fff'}">${item.name}:</p>
                        </div>
                        <div>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">${item.level}</p>
                        </div>
                    </div>`.trim()).join('')}
                </div>

                ${helper.userAbilities.length > 0 ? `<div style="width: 95%;margin: auto;margin-top: 15px">
                    <p style="color:${helper.selectedCVColor === '#FFFFFF' ? '#FF8F8F' : '#fff'};font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">İlgi Alanları</p>
                    ${helper.userHobbies.map((item, i) => `<div style="margin-left: 10px;margin-top: 3px">
                        <p style="margin: 0 0 0 20px;font-family: Calibri;font-size: 13px;color:${helper.selectedCVColor === '#FFFFFF' ? '#606060' : '#fff'}">${item.hobby}</p>
                    </div>`.trim()).join('')}
                </div>`: ``}

                ${helper.userCommunities.length > 0 ? `<div style="width: 95%;margin: auto;margin-top: 15px">
                    <p style="color:${helper.selectedCVColor === '#FFFFFF' ? '#FF8F8F' : '#fff'};font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Topluluklar</p>
                    ${helper.userCommunities.map((item, i) => `<div style="margin-left: 10px;margin-top: 3px">
                        <p style="margin: 0 0 2px 10px;font-family: Calibri;font-size: 13px;color:${helper.selectedCVColor === '#FFFFFF' ? '#606060' : '#fff'}">${item.communityName}/ <i style="font-size:11px">${item.communityTitle}</i></p>
                        <p style="margin: 0 0 2px 20px;font-family: Calibri;font-size: 10px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">${item.communityStartDate} - ${item.communityFinishDate}</p>
                        <p style="margin: 0 0 7px 20px;font-family: Calibri;font-size: 10px;color:${helper.selectedCVColor === '#FFFFFF' ? '#7D7D7D' : '#fff'}">${item.communityDescription}</p>
                    </div>`.trim()).join('')}
                </div>`: ``}

            </div>
        </div>


    </div>`
                ,
                fileName: 'deneme1',
                directory: 'docs'
            };
        }
        if (helper.selectedOrderCV === 3) {
            options = {
                html: CV3
                ,
                fileName: 'deneme1',
                directory: 'docs'
            };
        }
        if (helper.selectedOrderCV === 4) {
            options = {
                html: `<div style="width: 800px;min-height: 1000px;background-color: ${helper.selectedCVColor}">


        <div style="width: 100%;min-height: 40px;background-color: ${helper.selectedCVColor === '#FFFFFF' ? '#12A3D0' : '#fff'};display: flex;justify-content: space-between;align-items: center;flex-wrap: wrap;padding:0 25px 0 25px;box-sizing: border-box">
            ${helper.userGithubLink !== '' ? `<div style="margin:0 5px 0 5px;display: flex;align-items: center">
                ${helper.selectedCVColor === '#FFFFFF' ? `<img height="21px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />` : ``}
                ${helper.selectedCVColor === '#2A2A2A' ? `<img height="21px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />` : ``}
                ${helper.selectedCVColor === '#12A3D0' ? `<img height="21px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />` : ``}
                ${helper.selectedCVColor === '#FF7373' ? `<img height="21px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />` : ``}
                ${helper.selectedCVColor === '#299BE8' ? `<img height="21px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />` : ``}
                ${helper.selectedCVColor === '#407F92' ? `<img height="21px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />` : ``}
                <p style="color:${helper.selectedCVColor};font-family: Calibri;margin:0 0 0 5px;font-size: 22px">github</p>
            </div>` : ``}

            ${helper.userLinkedInLink !== '' ? `<div style="margin:0 5px 0 5px;display: flex;align-items: center">
               ${helper.selectedCVColor === '#FFFFFF' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTE2OCw0MDguMkg5NnYtMjA4aDcyVjQwOC4yeiBNMTMxLjYsMTY4LjJjLTIwLjQsMC0zNi44LTE2LjQtMzYuOC0zNi44YzAtMjAuNCwxNi40LTM2LjgsMzYuOC0zNi44ICAgIGMyMC40LDAsMzYuOCwxNi40LDM2LjgsMzYuOEMxNjgsMTUxLjgsMTUxLjYsMTY4LjIsMTMxLjYsMTY4LjJ6IE00MDguNCw0MDguMkg0MDhoLTYwVjMwNy40YzAtMjQuNC0zLjItNTUuNi0zNi40LTU1LjYgICAgYy0zNCwwLTM5LjYsMjYuNC0zOS42LDU0djEwMi40aC02MHYtMjA4aDU2djI4aDEuNmM4LjgtMTYsMjkuMi0yOC40LDYxLjItMjguNGM2NiwwLDc3LjYsMzgsNzcuNiw5NC40VjQwOC4yeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
               ${helper.selectedCVColor === '#2A2A2A' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTE2OCw0MDguMkg5NnYtMjA4aDcyVjQwOC4yeiBNMTMxLjYsMTY4LjJjLTIwLjQsMC0zNi44LTE2LjQtMzYuOC0zNi44YzAtMjAuNCwxNi40LTM2LjgsMzYuOC0zNi44ICAgIGMyMC40LDAsMzYuOCwxNi40LDM2LjgsMzYuOEMxNjgsMTUxLjgsMTUxLjYsMTY4LjIsMTMxLjYsMTY4LjJ6IE00MDguNCw0MDguMkg0MDhoLTYwVjMwNy40YzAtMjQuNC0zLjItNTUuNi0zNi40LTU1LjYgICAgYy0zNCwwLTM5LjYsMjYuNC0zOS42LDU0djEwMi40aC02MHYtMjA4aDU2djI4aDEuNmM4LjgtMTYsMjkuMi0yOC40LDYxLjItMjguNGM2NiwwLDc3LjYsMzgsNzcuNiw5NC40VjQwOC4yeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzJBMkEyQSI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``} 
               ${helper.selectedCVColor === '#12A3D0' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTE2OCw0MDguMkg5NnYtMjA4aDcyVjQwOC4yeiBNMTMxLjYsMTY4LjJjLTIwLjQsMC0zNi44LTE2LjQtMzYuOC0zNi44YzAtMjAuNCwxNi40LTM2LjgsMzYuOC0zNi44ICAgIGMyMC40LDAsMzYuOCwxNi40LDM2LjgsMzYuOEMxNjgsMTUxLjgsMTUxLjYsMTY4LjIsMTMxLjYsMTY4LjJ6IE00MDguNCw0MDguMkg0MDhoLTYwVjMwNy40YzAtMjQuNC0zLjItNTUuNi0zNi40LTU1LjYgICAgYy0zNCwwLTM5LjYsMjYuNC0zOS42LDU0djEwMi40aC02MHYtMjA4aDU2djI4aDEuNmM4LjgtMTYsMjkuMi0yOC40LDYxLjItMjguNGM2NiwwLDc3LjYsMzgsNzcuNiw5NC40VjQwOC4yeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzEyQTNEMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``} 
               ${helper.selectedCVColor === '#FF7373' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTE2OCw0MDguMkg5NnYtMjA4aDcyVjQwOC4yeiBNMTMxLjYsMTY4LjJjLTIwLjQsMC0zNi44LTE2LjQtMzYuOC0zNi44YzAtMjAuNCwxNi40LTM2LjgsMzYuOC0zNi44ICAgIGMyMC40LDAsMzYuOCwxNi40LDM2LjgsMzYuOEMxNjgsMTUxLjgsMTUxLjYsMTY4LjIsMTMxLjYsMTY4LjJ6IE00MDguNCw0MDguMkg0MDhoLTYwVjMwNy40YzAtMjQuNC0zLjItNTUuNi0zNi40LTU1LjYgICAgYy0zNCwwLTM5LjYsMjYuNC0zOS42LDU0djEwMi40aC02MHYtMjA4aDU2djI4aDEuNmM4LjgtMTYsMjkuMi0yOC40LDYxLjItMjguNGM2NiwwLDc3LjYsMzgsNzcuNiw5NC40VjQwOC4yeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGNzM3MyI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
               ${helper.selectedCVColor === '#299BE8' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTE2OCw0MDguMkg5NnYtMjA4aDcyVjQwOC4yeiBNMTMxLjYsMTY4LjJjLTIwLjQsMC0zNi44LTE2LjQtMzYuOC0zNi44YzAtMjAuNCwxNi40LTM2LjgsMzYuOC0zNi44ICAgIGMyMC40LDAsMzYuOCwxNi40LDM2LjgsMzYuOEMxNjgsMTUxLjgsMTUxLjYsMTY4LjIsMTMxLjYsMTY4LjJ6IE00MDguNCw0MDguMkg0MDhoLTYwVjMwNy40YzAtMjQuNC0zLjItNTUuNi0zNi40LTU1LjYgICAgYy0zNCwwLTM5LjYsMjYuNC0zOS42LDU0djEwMi40aC02MHYtMjA4aDU2djI4aDEuNmM4LjgtMTYsMjkuMi0yOC40LDYxLjItMjguNGM2NiwwLDc3LjYsMzgsNzcuNiw5NC40VjQwOC4yeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzI5OUJFOCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
               ${helper.selectedCVColor === '#407F92' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTE2OCw0MDguMkg5NnYtMjA4aDcyVjQwOC4yeiBNMTMxLjYsMTY4LjJjLTIwLjQsMC0zNi44LTE2LjQtMzYuOC0zNi44YzAtMjAuNCwxNi40LTM2LjgsMzYuOC0zNi44ICAgIGMyMC40LDAsMzYuOCwxNi40LDM2LjgsMzYuOEMxNjgsMTUxLjgsMTUxLjYsMTY4LjIsMTMxLjYsMTY4LjJ6IE00MDguNCw0MDguMkg0MDhoLTYwVjMwNy40YzAtMjQuNC0zLjItNTUuNi0zNi40LTU1LjYgICAgYy0zNCwwLTM5LjYsMjYuNC0zOS42LDU0djEwMi40aC02MHYtMjA4aDU2djI4aDEuNmM4LjgtMTYsMjkuMi0yOC40LDYxLjItMjguNGM2NiwwLDc3LjYsMzgsNzcuNiw5NC40VjQwOC4yeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzQwN0Y5MiI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
               <p style="font-family: Calibri;font-size: 17px;color:${helper.selectedCVColor};margin: 3px 3px 3px 7px;">linkedin</p>
            </div>` : ``}

            ${helper.userPinterestLink !== '' ? `<div style="margin:0 5px 0 5px;display: flex;align-items: center">
               ${helper.selectedCVColor === '#FFFFFF' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc3LjYsMEgxMjZDNTYuOCwwLDAsNTYuOCwwLDEyNi40VjM3OGMwLDY5LjIsNTYuOCwxMjYsMTI2LDEyNmgyNTEuNmM2OS42LDAsMTI2LjQtNTYuOCwxMjYuNC0xMjYuNFYxMjYuNCAgICBDNTA0LDU2LjgsNDQ3LjIsMCwzNzcuNiwweiBNMjc3LjIsMzIyYy0yMCwwLTM5LjItMTAuNC00NS42LTIyLjRjMCwwLTEwLjgsNDEuNi0xMy4yLDQ5LjZjLTgsMjguNC0zMiw1Ni44LTMzLjYsNTkuMiAgICBjLTEuMiwxLjYtNCwxLjItNC40LTEuMmMtMC40LTMuNi02LjQtMzkuNiwwLjQtNjguOGMzLjYtMTQuOCwyNC05OC40LDI0LTk4LjRzLTYtMTEuNi02LTI4LjRjMC0yNi44LDE2LTQ2LjgsMzYtNDYuOCAgICBjMTYuOCwwLDI1LjIsMTIuNCwyNS4yLDI3LjJjMCwxNi40LTEwLjgsNDEuMi0xNi40LDY0Yy00LjgsMTkuMiwxMCwzNC44LDI5LjYsMzQuOGMzNS4yLDAsNTkuMi00NCw1OS4yLTk2ICAgIGMwLTM5LjYtMjcuNi02OS4yLTc3LjYtNjkuMmMtNTYuNCwwLTkyLDQwLjgtOTIsODYuNGMwLDE1LjYsNC44LDI2LjgsMTIuNCwzNS42YzMuNiw0LDQsNS42LDIuOCwxMGMtMC44LDMuMi0yLjgsMTEuMi00LDE0LjQgICAgYy0xLjIsNC40LTUuMiw2LjQtOS4yLDQuNGMtMjYtMTAuNC0zOC0zOC0zOC02OS4yYzAtNTEuMiw0NC44LTExMi44LDEzMy4yLTExMi44YzcxLjIsMCwxMTgsNTAsMTE4LDEwMy42ICAgIEMzNzcuNiwyNjkuMiwzMzcuMiwzMjIsMjc3LjIsMzIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
               ${helper.selectedCVColor === '#2A2A2A' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc3LjYsMEgxMjZDNTYuOCwwLDAsNTYuOCwwLDEyNi40VjM3OGMwLDY5LjIsNTYuOCwxMjYsMTI2LDEyNmgyNTEuNmM2OS42LDAsMTI2LjQtNTYuOCwxMjYuNC0xMjYuNFYxMjYuNCAgICBDNTA0LDU2LjgsNDQ3LjIsMCwzNzcuNiwweiBNMjc3LjIsMzIyYy0yMCwwLTM5LjItMTAuNC00NS42LTIyLjRjMCwwLTEwLjgsNDEuNi0xMy4yLDQ5LjZjLTgsMjguNC0zMiw1Ni44LTMzLjYsNTkuMiAgICBjLTEuMiwxLjYtNCwxLjItNC40LTEuMmMtMC40LTMuNi02LjQtMzkuNiwwLjQtNjguOGMzLjYtMTQuOCwyNC05OC40LDI0LTk4LjRzLTYtMTEuNi02LTI4LjRjMC0yNi44LDE2LTQ2LjgsMzYtNDYuOCAgICBjMTYuOCwwLDI1LjIsMTIuNCwyNS4yLDI3LjJjMCwxNi40LTEwLjgsNDEuMi0xNi40LDY0Yy00LjgsMTkuMiwxMCwzNC44LDI5LjYsMzQuOGMzNS4yLDAsNTkuMi00NCw1OS4yLTk2ICAgIGMwLTM5LjYtMjcuNi02OS4yLTc3LjYtNjkuMmMtNTYuNCwwLTkyLDQwLjgtOTIsODYuNGMwLDE1LjYsNC44LDI2LjgsMTIuNCwzNS42YzMuNiw0LDQsNS42LDIuOCwxMGMtMC44LDMuMi0yLjgsMTEuMi00LDE0LjQgICAgYy0xLjIsNC40LTUuMiw2LjQtOS4yLDQuNGMtMjYtMTAuNC0zOC0zOC0zOC02OS4yYzAtNTEuMiw0NC44LTExMi44LDEzMy4yLTExMi44YzcxLjIsMCwxMTgsNTAsMTE4LDEwMy42ICAgIEMzNzcuNiwyNjkuMiwzMzcuMiwzMjIsMjc3LjIsMzIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzJBMkEyQSI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``} 
               ${helper.selectedCVColor === '#12A3D0' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc3LjYsMEgxMjZDNTYuOCwwLDAsNTYuOCwwLDEyNi40VjM3OGMwLDY5LjIsNTYuOCwxMjYsMTI2LDEyNmgyNTEuNmM2OS42LDAsMTI2LjQtNTYuOCwxMjYuNC0xMjYuNFYxMjYuNCAgICBDNTA0LDU2LjgsNDQ3LjIsMCwzNzcuNiwweiBNMjc3LjIsMzIyYy0yMCwwLTM5LjItMTAuNC00NS42LTIyLjRjMCwwLTEwLjgsNDEuNi0xMy4yLDQ5LjZjLTgsMjguNC0zMiw1Ni44LTMzLjYsNTkuMiAgICBjLTEuMiwxLjYtNCwxLjItNC40LTEuMmMtMC40LTMuNi02LjQtMzkuNiwwLjQtNjguOGMzLjYtMTQuOCwyNC05OC40LDI0LTk4LjRzLTYtMTEuNi02LTI4LjRjMC0yNi44LDE2LTQ2LjgsMzYtNDYuOCAgICBjMTYuOCwwLDI1LjIsMTIuNCwyNS4yLDI3LjJjMCwxNi40LTEwLjgsNDEuMi0xNi40LDY0Yy00LjgsMTkuMiwxMCwzNC44LDI5LjYsMzQuOGMzNS4yLDAsNTkuMi00NCw1OS4yLTk2ICAgIGMwLTM5LjYtMjcuNi02OS4yLTc3LjYtNjkuMmMtNTYuNCwwLTkyLDQwLjgtOTIsODYuNGMwLDE1LjYsNC44LDI2LjgsMTIuNCwzNS42YzMuNiw0LDQsNS42LDIuOCwxMGMtMC44LDMuMi0yLjgsMTEuMi00LDE0LjQgICAgYy0xLjIsNC40LTUuMiw2LjQtOS4yLDQuNGMtMjYtMTAuNC0zOC0zOC0zOC02OS4yYzAtNTEuMiw0NC44LTExMi44LDEzMy4yLTExMi44YzcxLjIsMCwxMTgsNTAsMTE4LDEwMy42ICAgIEMzNzcuNiwyNjkuMiwzMzcuMiwzMjIsMjc3LjIsMzIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzEyQTNEMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``} 
               ${helper.selectedCVColor === '#FF7373' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc3LjYsMEgxMjZDNTYuOCwwLDAsNTYuOCwwLDEyNi40VjM3OGMwLDY5LjIsNTYuOCwxMjYsMTI2LDEyNmgyNTEuNmM2OS42LDAsMTI2LjQtNTYuOCwxMjYuNC0xMjYuNFYxMjYuNCAgICBDNTA0LDU2LjgsNDQ3LjIsMCwzNzcuNiwweiBNMjc3LjIsMzIyYy0yMCwwLTM5LjItMTAuNC00NS42LTIyLjRjMCwwLTEwLjgsNDEuNi0xMy4yLDQ5LjZjLTgsMjguNC0zMiw1Ni44LTMzLjYsNTkuMiAgICBjLTEuMiwxLjYtNCwxLjItNC40LTEuMmMtMC40LTMuNi02LjQtMzkuNiwwLjQtNjguOGMzLjYtMTQuOCwyNC05OC40LDI0LTk4LjRzLTYtMTEuNi02LTI4LjRjMC0yNi44LDE2LTQ2LjgsMzYtNDYuOCAgICBjMTYuOCwwLDI1LjIsMTIuNCwyNS4yLDI3LjJjMCwxNi40LTEwLjgsNDEuMi0xNi40LDY0Yy00LjgsMTkuMiwxMCwzNC44LDI5LjYsMzQuOGMzNS4yLDAsNTkuMi00NCw1OS4yLTk2ICAgIGMwLTM5LjYtMjcuNi02OS4yLTc3LjYtNjkuMmMtNTYuNCwwLTkyLDQwLjgtOTIsODYuNGMwLDE1LjYsNC44LDI2LjgsMTIuNCwzNS42YzMuNiw0LDQsNS42LDIuOCwxMGMtMC44LDMuMi0yLjgsMTEuMi00LDE0LjQgICAgYy0xLjIsNC40LTUuMiw2LjQtOS4yLDQuNGMtMjYtMTAuNC0zOC0zOC0zOC02OS4yYzAtNTEuMiw0NC44LTExMi44LDEzMy4yLTExMi44YzcxLjIsMCwxMTgsNTAsMTE4LDEwMy42ICAgIEMzNzcuNiwyNjkuMiwzMzcuMiwzMjIsMjc3LjIsMzIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGNzM3MyI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
               ${helper.selectedCVColor === '#299BE8' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc3LjYsMEgxMjZDNTYuOCwwLDAsNTYuOCwwLDEyNi40VjM3OGMwLDY5LjIsNTYuOCwxMjYsMTI2LDEyNmgyNTEuNmM2OS42LDAsMTI2LjQtNTYuOCwxMjYuNC0xMjYuNFYxMjYuNCAgICBDNTA0LDU2LjgsNDQ3LjIsMCwzNzcuNiwweiBNMjc3LjIsMzIyYy0yMCwwLTM5LjItMTAuNC00NS42LTIyLjRjMCwwLTEwLjgsNDEuNi0xMy4yLDQ5LjZjLTgsMjguNC0zMiw1Ni44LTMzLjYsNTkuMiAgICBjLTEuMiwxLjYtNCwxLjItNC40LTEuMmMtMC40LTMuNi02LjQtMzkuNiwwLjQtNjguOGMzLjYtMTQuOCwyNC05OC40LDI0LTk4LjRzLTYtMTEuNi02LTI4LjRjMC0yNi44LDE2LTQ2LjgsMzYtNDYuOCAgICBjMTYuOCwwLDI1LjIsMTIuNCwyNS4yLDI3LjJjMCwxNi40LTEwLjgsNDEuMi0xNi40LDY0Yy00LjgsMTkuMiwxMCwzNC44LDI5LjYsMzQuOGMzNS4yLDAsNTkuMi00NCw1OS4yLTk2ICAgIGMwLTM5LjYtMjcuNi02OS4yLTc3LjYtNjkuMmMtNTYuNCwwLTkyLDQwLjgtOTIsODYuNGMwLDE1LjYsNC44LDI2LjgsMTIuNCwzNS42YzMuNiw0LDQsNS42LDIuOCwxMGMtMC44LDMuMi0yLjgsMTEuMi00LDE0LjQgICAgYy0xLjIsNC40LTUuMiw2LjQtOS4yLDQuNGMtMjYtMTAuNC0zOC0zOC0zOC02OS4yYzAtNTEuMiw0NC44LTExMi44LDEzMy4yLTExMi44YzcxLjIsMCwxMTgsNTAsMTE4LDEwMy42ICAgIEMzNzcuNiwyNjkuMiwzMzcuMiwzMjIsMjc3LjIsMzIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzI5OUJFOCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
               ${helper.selectedCVColor === '#407F92' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc3LjYsMEgxMjZDNTYuOCwwLDAsNTYuOCwwLDEyNi40VjM3OGMwLDY5LjIsNTYuOCwxMjYsMTI2LDEyNmgyNTEuNmM2OS42LDAsMTI2LjQtNTYuOCwxMjYuNC0xMjYuNFYxMjYuNCAgICBDNTA0LDU2LjgsNDQ3LjIsMCwzNzcuNiwweiBNMjc3LjIsMzIyYy0yMCwwLTM5LjItMTAuNC00NS42LTIyLjRjMCwwLTEwLjgsNDEuNi0xMy4yLDQ5LjZjLTgsMjguNC0zMiw1Ni44LTMzLjYsNTkuMiAgICBjLTEuMiwxLjYtNCwxLjItNC40LTEuMmMtMC40LTMuNi02LjQtMzkuNiwwLjQtNjguOGMzLjYtMTQuOCwyNC05OC40LDI0LTk4LjRzLTYtMTEuNi02LTI4LjRjMC0yNi44LDE2LTQ2LjgsMzYtNDYuOCAgICBjMTYuOCwwLDI1LjIsMTIuNCwyNS4yLDI3LjJjMCwxNi40LTEwLjgsNDEuMi0xNi40LDY0Yy00LjgsMTkuMiwxMCwzNC44LDI5LjYsMzQuOGMzNS4yLDAsNTkuMi00NCw1OS4yLTk2ICAgIGMwLTM5LjYtMjcuNi02OS4yLTc3LjYtNjkuMmMtNTYuNCwwLTkyLDQwLjgtOTIsODYuNGMwLDE1LjYsNC44LDI2LjgsMTIuNCwzNS42YzMuNiw0LDQsNS42LDIuOCwxMGMtMC44LDMuMi0yLjgsMTEuMi00LDE0LjQgICAgYy0xLjIsNC40LTUuMiw2LjQtOS4yLDQuNGMtMjYtMTAuNC0zOC0zOC0zOC02OS4yYzAtNTEuMiw0NC44LTExMi44LDEzMy4yLTExMi44YzcxLjIsMCwxMTgsNTAsMTE4LDEwMy42ICAgIEMzNzcuNiwyNjkuMiwzMzcuMiwzMjIsMjc3LjIsMzIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzQwN0Y5MiI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
               <p style="font-family: Calibri;font-size: 17px;color:${helper.selectedCVColor};margin: 3px 3px 3px 7px;">pinterest</p>
            </div>` : ``}

            ${helper.userTelegramLink !== '' ? `<div style="margin:0 5px 0 5px;display: flex;align-items: center">
               ${helper.selectedCVColor === '#FFFFFF' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDU1LjczMSA0NTUuNzMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuNzMxIDQ1NS43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8cGF0aCBkPSJNMzE2LjI0NCwxNDkuOTAzTDE0OS4wODIsMjUzLjU3OWMtMi45NDMsMS44MjUtNC4yODIsNS40MDktMy4yNTUsOC43MTdsMjIuNDIzLDcyLjI1MyAgIGMwLjQ3MSwxLjUxOCwyLjY4MywxLjMwOSwyLjg2MS0wLjI3MWw1LjQ1LTQ4LjQ0OGMwLjIxLTEuODcyLDEuMTA4LTMuNTk5LDIuNTE5LTQuODQ3bDE0MS41NTYtMTI1LjE3NyAgIEMzMjQuMDI1LDE1Mi44MSwzMjAuMDg5LDE0Ny41MTgsMzE2LjI0NCwxNDkuOTAzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPHBhdGggZD0iTTAsMHY0NTUuNzMxaDQ1NS43MzFWMEgweiBNMzc5Ljg4MiwxMTguNDE4bC01Mi4wMzEsMjQ4Ljc2Yy0yLjQ0MiwxMS42NzMtMTYuMTMzLDE2LjkxNi0yNS43NDcsOS44NTlsLTc4LjU1OS01Ny42NjUgICBsLTQwLjAzOSw0MC44ODFjLTcuMDI3LDcuMTc1LTE5LjE2Niw0LjI3MS0yMi4xODUtNS4zMDhsLTI4LjkwMS05MS43MDZsLTc3LjQ0MS0yMi44NjhjLTEwLjE2LTMtMTAuNzU5LTE3LjE2NS0wLjg4OC0yMS4wMTIgICBsMzA0Ljc1My0xMTguNzU5QzM3MC40NDQsOTYuMDgsMzgyLjQzMSwxMDYuMjMyLDM3OS44ODIsMTE4LjQxOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#2A2A2A' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDU1LjczMSA0NTUuNzMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuNzMxIDQ1NS43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8cGF0aCBkPSJNMzE2LjI0NCwxNDkuOTAzTDE0OS4wODIsMjUzLjU3OWMtMi45NDMsMS44MjUtNC4yODIsNS40MDktMy4yNTUsOC43MTdsMjIuNDIzLDcyLjI1MyAgIGMwLjQ3MSwxLjUxOCwyLjY4MywxLjMwOSwyLjg2MS0wLjI3MWw1LjQ1LTQ4LjQ0OGMwLjIxLTEuODcyLDEuMTA4LTMuNTk5LDIuNTE5LTQuODQ3bDE0MS41NTYtMTI1LjE3NyAgIEMzMjQuMDI1LDE1Mi44MSwzMjAuMDg5LDE0Ny41MTgsMzE2LjI0NCwxNDkuOTAzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzJBMkEyQSI+PC9wYXRoPgoJPHBhdGggZD0iTTAsMHY0NTUuNzMxaDQ1NS43MzFWMEgweiBNMzc5Ljg4MiwxMTguNDE4bC01Mi4wMzEsMjQ4Ljc2Yy0yLjQ0MiwxMS42NzMtMTYuMTMzLDE2LjkxNi0yNS43NDcsOS44NTlsLTc4LjU1OS01Ny42NjUgICBsLTQwLjAzOSw0MC44ODFjLTcuMDI3LDcuMTc1LTE5LjE2Niw0LjI3MS0yMi4xODUtNS4zMDhsLTI4LjkwMS05MS43MDZsLTc3LjQ0MS0yMi44NjhjLTEwLjE2LTMtMTAuNzU5LTE3LjE2NS0wLjg4OC0yMS4wMTIgICBsMzA0Ljc1My0xMTguNzU5QzM3MC40NDQsOTYuMDgsMzgyLjQzMSwxMDYuMjMyLDM3OS44ODIsMTE4LjQxOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />` : ``}  
               ${helper.selectedCVColor === '#12A3D0' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDU1LjczMSA0NTUuNzMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuNzMxIDQ1NS43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8cGF0aCBkPSJNMzE2LjI0NCwxNDkuOTAzTDE0OS4wODIsMjUzLjU3OWMtMi45NDMsMS44MjUtNC4yODIsNS40MDktMy4yNTUsOC43MTdsMjIuNDIzLDcyLjI1MyAgIGMwLjQ3MSwxLjUxOCwyLjY4MywxLjMwOSwyLjg2MS0wLjI3MWw1LjQ1LTQ4LjQ0OGMwLjIxLTEuODcyLDEuMTA4LTMuNTk5LDIuNTE5LTQuODQ3bDE0MS41NTYtMTI1LjE3NyAgIEMzMjQuMDI1LDE1Mi44MSwzMjAuMDg5LDE0Ny41MTgsMzE2LjI0NCwxNDkuOTAzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzEyQTNEMCI+PC9wYXRoPgoJPHBhdGggZD0iTTAsMHY0NTUuNzMxaDQ1NS43MzFWMEgweiBNMzc5Ljg4MiwxMTguNDE4bC01Mi4wMzEsMjQ4Ljc2Yy0yLjQ0MiwxMS42NzMtMTYuMTMzLDE2LjkxNi0yNS43NDcsOS44NTlsLTc4LjU1OS01Ny42NjUgICBsLTQwLjAzOSw0MC44ODFjLTcuMDI3LDcuMTc1LTE5LjE2Niw0LjI3MS0yMi4xODUtNS4zMDhsLTI4LjkwMS05MS43MDZsLTc3LjQ0MS0yMi44NjhjLTEwLjE2LTMtMTAuNzU5LTE3LjE2NS0wLjg4OC0yMS4wMTIgICBsMzA0Ljc1My0xMTguNzU5QzM3MC40NDQsOTYuMDgsMzgyLjQzMSwxMDYuMjMyLDM3OS44ODIsMTE4LjQxOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />` : ``}  
               ${helper.selectedCVColor === '#FF7373' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDU1LjczMSA0NTUuNzMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuNzMxIDQ1NS43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8cGF0aCBkPSJNMzE2LjI0NCwxNDkuOTAzTDE0OS4wODIsMjUzLjU3OWMtMi45NDMsMS44MjUtNC4yODIsNS40MDktMy4yNTUsOC43MTdsMjIuNDIzLDcyLjI1MyAgIGMwLjQ3MSwxLjUxOCwyLjY4MywxLjMwOSwyLjg2MS0wLjI3MWw1LjQ1LTQ4LjQ0OGMwLjIxLTEuODcyLDEuMTA4LTMuNTk5LDIuNTE5LTQuODQ3bDE0MS41NTYtMTI1LjE3NyAgIEMzMjQuMDI1LDE1Mi44MSwzMjAuMDg5LDE0Ny41MTgsMzE2LjI0NCwxNDkuOTAzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGNzM3MyI+PC9wYXRoPgoJPHBhdGggZD0iTTAsMHY0NTUuNzMxaDQ1NS43MzFWMEgweiBNMzc5Ljg4MiwxMTguNDE4bC01Mi4wMzEsMjQ4Ljc2Yy0yLjQ0MiwxMS42NzMtMTYuMTMzLDE2LjkxNi0yNS43NDcsOS44NTlsLTc4LjU1OS01Ny42NjUgICBsLTQwLjAzOSw0MC44ODFjLTcuMDI3LDcuMTc1LTE5LjE2Niw0LjI3MS0yMi4xODUtNS4zMDhsLTI4LjkwMS05MS43MDZsLTc3LjQ0MS0yMi44NjhjLTEwLjE2LTMtMTAuNzU5LTE3LjE2NS0wLjg4OC0yMS4wMTIgICBsMzA0Ljc1My0xMTguNzU5QzM3MC40NDQsOTYuMDgsMzgyLjQzMSwxMDYuMjMyLDM3OS44ODIsMTE4LjQxOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#299BE8' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDU1LjczMSA0NTUuNzMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuNzMxIDQ1NS43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8cGF0aCBkPSJNMzE2LjI0NCwxNDkuOTAzTDE0OS4wODIsMjUzLjU3OWMtMi45NDMsMS44MjUtNC4yODIsNS40MDktMy4yNTUsOC43MTdsMjIuNDIzLDcyLjI1MyAgIGMwLjQ3MSwxLjUxOCwyLjY4MywxLjMwOSwyLjg2MS0wLjI3MWw1LjQ1LTQ4LjQ0OGMwLjIxLTEuODcyLDEuMTA4LTMuNTk5LDIuNTE5LTQuODQ3bDE0MS41NTYtMTI1LjE3NyAgIEMzMjQuMDI1LDE1Mi44MSwzMjAuMDg5LDE0Ny41MTgsMzE2LjI0NCwxNDkuOTAzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzI5OUJFOCI+PC9wYXRoPgoJPHBhdGggZD0iTTAsMHY0NTUuNzMxaDQ1NS43MzFWMEgweiBNMzc5Ljg4MiwxMTguNDE4bC01Mi4wMzEsMjQ4Ljc2Yy0yLjQ0MiwxMS42NzMtMTYuMTMzLDE2LjkxNi0yNS43NDcsOS44NTlsLTc4LjU1OS01Ny42NjUgICBsLTQwLjAzOSw0MC44ODFjLTcuMDI3LDcuMTc1LTE5LjE2Niw0LjI3MS0yMi4xODUtNS4zMDhsLTI4LjkwMS05MS43MDZsLTc3LjQ0MS0yMi44NjhjLTEwLjE2LTMtMTAuNzU5LTE3LjE2NS0wLjg4OC0yMS4wMTIgICBsMzA0Ljc1My0xMTguNzU5QzM3MC40NDQsOTYuMDgsMzgyLjQzMSwxMDYuMjMyLDM3OS44ODIsMTE4LjQxOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#407F92' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDU1LjczMSA0NTUuNzMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuNzMxIDQ1NS43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8cGF0aCBkPSJNMzE2LjI0NCwxNDkuOTAzTDE0OS4wODIsMjUzLjU3OWMtMi45NDMsMS44MjUtNC4yODIsNS40MDktMy4yNTUsOC43MTdsMjIuNDIzLDcyLjI1MyAgIGMwLjQ3MSwxLjUxOCwyLjY4MywxLjMwOSwyLjg2MS0wLjI3MWw1LjQ1LTQ4LjQ0OGMwLjIxLTEuODcyLDEuMTA4LTMuNTk5LDIuNTE5LTQuODQ3bDE0MS41NTYtMTI1LjE3NyAgIEMzMjQuMDI1LDE1Mi44MSwzMjAuMDg5LDE0Ny41MTgsMzE2LjI0NCwxNDkuOTAzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzQwN0Y5MiI+PC9wYXRoPgoJPHBhdGggZD0iTTAsMHY0NTUuNzMxaDQ1NS43MzFWMEgweiBNMzc5Ljg4MiwxMTguNDE4bC01Mi4wMzEsMjQ4Ljc2Yy0yLjQ0MiwxMS42NzMtMTYuMTMzLDE2LjkxNi0yNS43NDcsOS44NTlsLTc4LjU1OS01Ny42NjUgICBsLTQwLjAzOSw0MC44ODFjLTcuMDI3LDcuMTc1LTE5LjE2Niw0LjI3MS0yMi4xODUtNS4zMDhsLTI4LjkwMS05MS43MDZsLTc3LjQ0MS0yMi44NjhjLTEwLjE2LTMtMTAuNzU5LTE3LjE2NS0wLjg4OC0yMS4wMTIgICBsMzA0Ljc1My0xMTguNzU5QzM3MC40NDQsOTYuMDgsMzgyLjQzMSwxMDYuMjMyLDM3OS44ODIsMTE4LjQxOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               <p style="font-family: Calibri;font-size: 17px;color:${helper.selectedCVColor};margin: 3px 3px 3px 7px;">telegram</p>
            </div>` : ``}

            ${helper.userInstagramLink !== '' ? `<div style="margin:0 5px 0 5px;display: flex;align-items: center">
               ${helper.selectedCVColor === '#FFFFFF' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTM3NiA5MWgtMjQwYy0yNC44MTI1IDAtNDUgMjAuMTg3NS00NSA0NXYyNDBjMCAyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVoMjQwYzI0LjgxMjUgMCA0NS0yMC4xODc1IDQ1LTQ1di0yNDBjMC0yNC44MTI1LTIwLjE4NzUtNDUtNDUtNDV6bS0xMjAgMjcwYy01Ny44OTA2MjUgMC0xMDUtNDcuMTA5Mzc1LTEwNS0xMDVzNDcuMTA5Mzc1LTEwNSAxMDUtMTA1IDEwNSA0Ny4xMDkzNzUgMTA1IDEwNS00Ny4xMDkzNzUgMTA1LTEwNSAxMDV6bTEwNS0xODBjLTE2LjUzOTA2MiAwLTMwLTEzLjQ2MDkzOC0zMC0zMHMxMy40NjA5MzgtMzAgMzAtMzAgMzAgMTMuNDYwOTM4IDMwIDMwLTEzLjQ2MDkzOCAzMC0zMCAzMHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTI1NiAxODFjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXMzMy42NDg0MzggNzUgNzUgNzUgNzUtMzMuNjQ4NDM4IDc1LTc1LTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQzNiAwaC0zNjBjLTQxLjM1MTU2MiAwLTc2IDM0LjY0ODQzOC03NiA3NnYzNjBjMCA0MS4zNTE1NjIgMzQuNjQ4NDM4IDc2IDc2IDc2aDM2MGM0MS4zNTE1NjIgMCA3Ni0zNC42NDg0MzggNzYtNzZ2LTM2MGMwLTQxLjM1MTU2Mi0zNC42NDg0MzgtNzYtNzYtNzZ6bTE1IDM3NmMwIDQxLjM1MTU2Mi0zMy42NDg0MzggNzUtNzUgNzVoLTI0MGMtNDEuMzUxNTYyIDAtNzUtMzMuNjQ4NDM4LTc1LTc1di0yNDBjMC00MS4zNTE1NjIgMzMuNjQ4NDM4LTc1IDc1LTc1aDI0MGM0MS4zNTE1NjIgMCA3NSAzMy42NDg0MzggNzUgNzV6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#2A2A2A' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTM3NiA5MWgtMjQwYy0yNC44MTI1IDAtNDUgMjAuMTg3NS00NSA0NXYyNDBjMCAyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVoMjQwYzI0LjgxMjUgMCA0NS0yMC4xODc1IDQ1LTQ1di0yNDBjMC0yNC44MTI1LTIwLjE4NzUtNDUtNDUtNDV6bS0xMjAgMjcwYy01Ny44OTA2MjUgMC0xMDUtNDcuMTA5Mzc1LTEwNS0xMDVzNDcuMTA5Mzc1LTEwNSAxMDUtMTA1IDEwNSA0Ny4xMDkzNzUgMTA1IDEwNS00Ny4xMDkzNzUgMTA1LTEwNSAxMDV6bTEwNS0xODBjLTE2LjUzOTA2MiAwLTMwLTEzLjQ2MDkzOC0zMC0zMHMxMy40NjA5MzgtMzAgMzAtMzAgMzAgMTMuNDYwOTM4IDMwIDMwLTEzLjQ2MDkzOCAzMC0zMCAzMHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+PHBhdGggZD0ibTI1NiAxODFjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXMzMy42NDg0MzggNzUgNzUgNzUgNzUtMzMuNjQ4NDM4IDc1LTc1LTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+PHBhdGggZD0ibTQzNiAwaC0zNjBjLTQxLjM1MTU2MiAwLTc2IDM0LjY0ODQzOC03NiA3NnYzNjBjMCA0MS4zNTE1NjIgMzQuNjQ4NDM4IDc2IDc2IDc2aDM2MGM0MS4zNTE1NjIgMCA3Ni0zNC42NDg0MzggNzYtNzZ2LTM2MGMwLTQxLjM1MTU2Mi0zNC42NDg0MzgtNzYtNzYtNzZ6bTE1IDM3NmMwIDQxLjM1MTU2Mi0zMy42NDg0MzggNzUtNzUgNzVoLTI0MGMtNDEuMzUxNTYyIDAtNzUtMzMuNjQ4NDM4LTc1LTc1di0yNDBjMC00MS4zNTE1NjIgMzMuNjQ4NDM4LTc1IDc1LTc1aDI0MGM0MS4zNTE1NjIgMCA3NSAzMy42NDg0MzggNzUgNzV6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzJBMkEyQSI+PC9wYXRoPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#12A3D0' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiI+PGc+PHBhdGggZD0ibTM3NiA5MWgtMjQwYy0yNC44MTI1IDAtNDUgMjAuMTg3NS00NSA0NXYyNDBjMCAyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVoMjQwYzI0LjgxMjUgMCA0NS0yMC4xODc1IDQ1LTQ1di0yNDBjMC0yNC44MTI1LTIwLjE4NzUtNDUtNDUtNDV6bS0xMjAgMjcwYy01Ny44OTA2MjUgMC0xMDUtNDcuMTA5Mzc1LTEwNS0xMDVzNDcuMTA5Mzc1LTEwNSAxMDUtMTA1IDEwNSA0Ny4xMDkzNzUgMTA1IDEwNS00Ny4xMDkzNzUgMTA1LTEwNSAxMDV6bTEwNS0xODBjLTE2LjUzOTA2MiAwLTMwLTEzLjQ2MDkzOC0zMC0zMHMxMy40NjA5MzgtMzAgMzAtMzAgMzAgMTMuNDYwOTM4IDMwIDMwLTEzLjQ2MDkzOCAzMC0zMCAzMHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+PHBhdGggZD0ibTI1NiAxODFjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXMzMy42NDg0MzggNzUgNzUgNzUgNzUtMzMuNjQ4NDM4IDc1LTc1LTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+PHBhdGggZD0ibTQzNiAwaC0zNjBjLTQxLjM1MTU2MiAwLTc2IDM0LjY0ODQzOC03NiA3NnYzNjBjMCA0MS4zNTE1NjIgMzQuNjQ4NDM4IDc2IDc2IDc2aDM2MGM0MS4zNTE1NjIgMCA3Ni0zNC42NDg0MzggNzYtNzZ2LTM2MGMwLTQxLjM1MTU2Mi0zNC42NDg0MzgtNzYtNzYtNzZ6bTE1IDM3NmMwIDQxLjM1MTU2Mi0zMy42NDg0MzggNzUtNzUgNzVoLTI0MGMtNDEuMzUxNTYyIDAtNzUtMzMuNjQ4NDM4LTc1LTc1di0yNDBjMC00MS4zNTE1NjIgMzMuNjQ4NDM4LTc1IDc1LTc1aDI0MGM0MS4zNTE1NjIgMCA3NSAzMy42NDg0MzggNzUgNzV6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzEyQTNEMCI+PC9wYXRoPjwvZz4gPC9zdmc+" />` : ``} 
               ${helper.selectedCVColor === '#FF7373' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiI+PGc+PHBhdGggZD0ibTM3NiA5MWgtMjQwYy0yNC44MTI1IDAtNDUgMjAuMTg3NS00NSA0NXYyNDBjMCAyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVoMjQwYzI0LjgxMjUgMCA0NS0yMC4xODc1IDQ1LTQ1di0yNDBjMC0yNC44MTI1LTIwLjE4NzUtNDUtNDUtNDV6bS0xMjAgMjcwYy01Ny44OTA2MjUgMC0xMDUtNDcuMTA5Mzc1LTEwNS0xMDVzNDcuMTA5Mzc1LTEwNSAxMDUtMTA1IDEwNSA0Ny4xMDkzNzUgMTA1IDEwNS00Ny4xMDkzNzUgMTA1LTEwNSAxMDV6bTEwNS0xODBjLTE2LjUzOTA2MiAwLTMwLTEzLjQ2MDkzOC0zMC0zMHMxMy40NjA5MzgtMzAgMzAtMzAgMzAgMTMuNDYwOTM4IDMwIDMwLTEzLjQ2MDkzOCAzMC0zMCAzMHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+PHBhdGggZD0ibTI1NiAxODFjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXMzMy42NDg0MzggNzUgNzUgNzUgNzUtMzMuNjQ4NDM4IDc1LTc1LTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+PHBhdGggZD0ibTQzNiAwaC0zNjBjLTQxLjM1MTU2MiAwLTc2IDM0LjY0ODQzOC03NiA3NnYzNjBjMCA0MS4zNTE1NjIgMzQuNjQ4NDM4IDc2IDc2IDc2aDM2MGM0MS4zNTE1NjIgMCA3Ni0zNC42NDg0MzggNzYtNzZ2LTM2MGMwLTQxLjM1MTU2Mi0zNC42NDg0MzgtNzYtNzYtNzZ6bTE1IDM3NmMwIDQxLjM1MTU2Mi0zMy42NDg0MzggNzUtNzUgNzVoLTI0MGMtNDEuMzUxNTYyIDAtNzUtMzMuNjQ4NDM4LTc1LTc1di0yNDBjMC00MS4zNTE1NjIgMzMuNjQ4NDM4LTc1IDc1LTc1aDI0MGM0MS4zNTE1NjIgMCA3NSAzMy42NDg0MzggNzUgNzV6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGNzM3MyI+PC9wYXRoPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#299BE8' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiI+PGc+PHBhdGggZD0ibTM3NiA5MWgtMjQwYy0yNC44MTI1IDAtNDUgMjAuMTg3NS00NSA0NXYyNDBjMCAyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVoMjQwYzI0LjgxMjUgMCA0NS0yMC4xODc1IDQ1LTQ1di0yNDBjMC0yNC44MTI1LTIwLjE4NzUtNDUtNDUtNDV6bS0xMjAgMjcwYy01Ny44OTA2MjUgMC0xMDUtNDcuMTA5Mzc1LTEwNS0xMDVzNDcuMTA5Mzc1LTEwNSAxMDUtMTA1IDEwNSA0Ny4xMDkzNzUgMTA1IDEwNS00Ny4xMDkzNzUgMTA1LTEwNSAxMDV6bTEwNS0xODBjLTE2LjUzOTA2MiAwLTMwLTEzLjQ2MDkzOC0zMC0zMHMxMy40NjA5MzgtMzAgMzAtMzAgMzAgMTMuNDYwOTM4IDMwIDMwLTEzLjQ2MDkzOCAzMC0zMCAzMHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+PHBhdGggZD0ibTI1NiAxODFjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXMzMy42NDg0MzggNzUgNzUgNzUgNzUtMzMuNjQ4NDM4IDc1LTc1LTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+PHBhdGggZD0ibTQzNiAwaC0zNjBjLTQxLjM1MTU2MiAwLTc2IDM0LjY0ODQzOC03NiA3NnYzNjBjMCA0MS4zNTE1NjIgMzQuNjQ4NDM4IDc2IDc2IDc2aDM2MGM0MS4zNTE1NjIgMCA3Ni0zNC42NDg0MzggNzYtNzZ2LTM2MGMwLTQxLjM1MTU2Mi0zNC42NDg0MzgtNzYtNzYtNzZ6bTE1IDM3NmMwIDQxLjM1MTU2Mi0zMy42NDg0MzggNzUtNzUgNzVoLTI0MGMtNDEuMzUxNTYyIDAtNzUtMzMuNjQ4NDM4LTc1LTc1di0yNDBjMC00MS4zNTE1NjIgMzMuNjQ4NDM4LTc1IDc1LTc1aDI0MGM0MS4zNTE1NjIgMCA3NSAzMy42NDg0MzggNzUgNzV6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzI5OUJFOCI+PC9wYXRoPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#407F92' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiI+PGc+PHBhdGggZD0ibTM3NiA5MWgtMjQwYy0yNC44MTI1IDAtNDUgMjAuMTg3NS00NSA0NXYyNDBjMCAyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVoMjQwYzI0LjgxMjUgMCA0NS0yMC4xODc1IDQ1LTQ1di0yNDBjMC0yNC44MTI1LTIwLjE4NzUtNDUtNDUtNDV6bS0xMjAgMjcwYy01Ny44OTA2MjUgMC0xMDUtNDcuMTA5Mzc1LTEwNS0xMDVzNDcuMTA5Mzc1LTEwNSAxMDUtMTA1IDEwNSA0Ny4xMDkzNzUgMTA1IDEwNS00Ny4xMDkzNzUgMTA1LTEwNSAxMDV6bTEwNS0xODBjLTE2LjUzOTA2MiAwLTMwLTEzLjQ2MDkzOC0zMC0zMHMxMy40NjA5MzgtMzAgMzAtMzAgMzAgMTMuNDYwOTM4IDMwIDMwLTEzLjQ2MDkzOCAzMC0zMCAzMHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+PHBhdGggZD0ibTI1NiAxODFjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXMzMy42NDg0MzggNzUgNzUgNzUgNzUtMzMuNjQ4NDM4IDc1LTc1LTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+PHBhdGggZD0ibTQzNiAwaC0zNjBjLTQxLjM1MTU2MiAwLTc2IDM0LjY0ODQzOC03NiA3NnYzNjBjMCA0MS4zNTE1NjIgMzQuNjQ4NDM4IDc2IDc2IDc2aDM2MGM0MS4zNTE1NjIgMCA3Ni0zNC42NDg0MzggNzYtNzZ2LTM2MGMwLTQxLjM1MTU2Mi0zNC42NDg0MzgtNzYtNzYtNzZ6bTE1IDM3NmMwIDQxLjM1MTU2Mi0zMy42NDg0MzggNzUtNzUgNzVoLTI0MGMtNDEuMzUxNTYyIDAtNzUtMzMuNjQ4NDM4LTc1LTc1di0yNDBjMC00MS4zNTE1NjIgMzMuNjQ4NDM4LTc1IDc1LTc1aDI0MGM0MS4zNTE1NjIgMCA3NSAzMy42NDg0MzggNzUgNzV6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzQwN0Y5MiI+PC9wYXRoPjwvZz4gPC9zdmc+" />` : ``}
               <p style="font-family: Calibri;font-size: 17px;color:${helper.selectedCVColor};margin: 3px 3px 3px 7px;">instagram</p>
            </div>` : ``}

            ${helper.userYoutubeLink !== '' ? `<div style="margin:0 5px 0 5px;display: flex;align-items: center">
               ${helper.selectedCVColor === '#FFFFFF' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjIxOS42LDIwMi40IDIxOS42LDI5NC40IDMwNC40LDI0OC44ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BvbHlnb24+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE00MDgsMjY0LjRjMCwyNi40LTIuNCw1My4yLTIuNCw1My4ycy0yLjgsMjIuNC0xMiwzMi40Yy0xMiwxMy4yLTI1LjIsMTMuMi0zMS4yLDE0ICAgIGMtNDQsMy4yLTExMCwzLjYtMTEwLDMuNnMtODItMS4yLTEwNy4yLTMuNmMtNi44LTEuMi0yMi44LTAuOC0zNC44LTE0Yy05LjYtMTAtMTItMzIuNC0xMi0zMi40Uzk2LDI5MC44LDk2LDI2NC40di0yNC44ICAgIGMwLTI2LjQsMi40LTUzLjIsMi40LTUzLjJzMi44LTIyLjQsMTItMzIuNGMxMi0xMy4yLDI1LjItMTMuNiwzMS4yLTE0LjRDMTg2LDEzNi40LDI1MiwxMzYsMjUyLDEzNnM2NiwwLjQsMTEwLDMuNiAgICBjNiwwLjgsMTkuNiwxLjIsMzEuNiwxNGM5LjYsMTAsMTIsMzIuOCwxMiwzMi44czIuNCwyNi44LDIuNCw1My4yVjI2NC40eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
               ${helper.selectedCVColor === '#2A2A2A' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjIxOS42LDIwMi40IDIxOS42LDI5NC40IDMwNC40LDI0OC44ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BvbHlnb24+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE00MDgsMjY0LjRjMCwyNi40LTIuNCw1My4yLTIuNCw1My4ycy0yLjgsMjIuNC0xMiwzMi40Yy0xMiwxMy4yLTI1LjIsMTMuMi0zMS4yLDE0ICAgIGMtNDQsMy4yLTExMCwzLjYtMTEwLDMuNnMtODItMS4yLTEwNy4yLTMuNmMtNi44LTEuMi0yMi44LTAuOC0zNC44LTE0Yy05LjYtMTAtMTItMzIuNC0xMi0zMi40Uzk2LDI5MC44LDk2LDI2NC40di0yNC44ICAgIGMwLTI2LjQsMi40LTUzLjIsMi40LTUzLjJzMi44LTIyLjQsMTItMzIuNGMxMi0xMy4yLDI1LjItMTMuNiwzMS4yLTE0LjRDMTg2LDEzNi40LDI1MiwxMzYsMjUyLDEzNnM2NiwwLjQsMTEwLDMuNiAgICBjNiwwLjgsMTkuNiwxLjIsMzEuNiwxNGM5LjYsMTAsMTIsMzIuOCwxMiwzMi44czIuNCwyNi44LDIuNCw1My4yVjI2NC40eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzJBMkEyQSI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``} 
               ${helper.selectedCVColor === '#12A3D0' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjIxOS42LDIwMi40IDIxOS42LDI5NC40IDMwNC40LDI0OC44ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BvbHlnb24+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE00MDgsMjY0LjRjMCwyNi40LTIuNCw1My4yLTIuNCw1My4ycy0yLjgsMjIuNC0xMiwzMi40Yy0xMiwxMy4yLTI1LjIsMTMuMi0zMS4yLDE0ICAgIGMtNDQsMy4yLTExMCwzLjYtMTEwLDMuNnMtODItMS4yLTEwNy4yLTMuNmMtNi44LTEuMi0yMi44LTAuOC0zNC44LTE0Yy05LjYtMTAtMTItMzIuNC0xMi0zMi40Uzk2LDI5MC44LDk2LDI2NC40di0yNC44ICAgIGMwLTI2LjQsMi40LTUzLjIsMi40LTUzLjJzMi44LTIyLjQsMTItMzIuNGMxMi0xMy4yLDI1LjItMTMuNiwzMS4yLTE0LjRDMTg2LDEzNi40LDI1MiwxMzYsMjUyLDEzNnM2NiwwLjQsMTEwLDMuNiAgICBjNiwwLjgsMTkuNiwxLjIsMzEuNiwxNGM5LjYsMTAsMTIsMzIuOCwxMiwzMi44czIuNCwyNi44LDIuNCw1My4yVjI2NC40eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzEyQTNEMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``} 
               ${helper.selectedCVColor === '#FF7373' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjIxOS42LDIwMi40IDIxOS42LDI5NC40IDMwNC40LDI0OC44ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BvbHlnb24+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE00MDgsMjY0LjRjMCwyNi40LTIuNCw1My4yLTIuNCw1My4ycy0yLjgsMjIuNC0xMiwzMi40Yy0xMiwxMy4yLTI1LjIsMTMuMi0zMS4yLDE0ICAgIGMtNDQsMy4yLTExMCwzLjYtMTEwLDMuNnMtODItMS4yLTEwNy4yLTMuNmMtNi44LTEuMi0yMi44LTAuOC0zNC44LTE0Yy05LjYtMTAtMTItMzIuNC0xMi0zMi40Uzk2LDI5MC44LDk2LDI2NC40di0yNC44ICAgIGMwLTI2LjQsMi40LTUzLjIsMi40LTUzLjJzMi44LTIyLjQsMTItMzIuNGMxMi0xMy4yLDI1LjItMTMuNiwzMS4yLTE0LjRDMTg2LDEzNi40LDI1MiwxMzYsMjUyLDEzNnM2NiwwLjQsMTEwLDMuNiAgICBjNiwwLjgsMTkuNiwxLjIsMzEuNiwxNGM5LjYsMTAsMTIsMzIuOCwxMiwzMi44czIuNCwyNi44LDIuNCw1My4yVjI2NC40eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGNzM3MyI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
               ${helper.selectedCVColor === '#299BE8' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjIxOS42LDIwMi40IDIxOS42LDI5NC40IDMwNC40LDI0OC44ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BvbHlnb24+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE00MDgsMjY0LjRjMCwyNi40LTIuNCw1My4yLTIuNCw1My4ycy0yLjgsMjIuNC0xMiwzMi40Yy0xMiwxMy4yLTI1LjIsMTMuMi0zMS4yLDE0ICAgIGMtNDQsMy4yLTExMCwzLjYtMTEwLDMuNnMtODItMS4yLTEwNy4yLTMuNmMtNi44LTEuMi0yMi44LTAuOC0zNC44LTE0Yy05LjYtMTAtMTItMzIuNC0xMi0zMi40Uzk2LDI5MC44LDk2LDI2NC40di0yNC44ICAgIGMwLTI2LjQsMi40LTUzLjIsMi40LTUzLjJzMi44LTIyLjQsMTItMzIuNGMxMi0xMy4yLDI1LjItMTMuNiwzMS4yLTE0LjRDMTg2LDEzNi40LDI1MiwxMzYsMjUyLDEzNnM2NiwwLjQsMTEwLDMuNiAgICBjNiwwLjgsMTkuNiwxLjIsMzEuNiwxNGM5LjYsMTAsMTIsMzIuOCwxMiwzMi44czIuNCwyNi44LDIuNCw1My4yVjI2NC40eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzI5OUJFOCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
               ${helper.selectedCVColor === '#407F92' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjIxOS42LDIwMi40IDIxOS42LDI5NC40IDMwNC40LDI0OC44ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BvbHlnb24+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE00MDgsMjY0LjRjMCwyNi40LTIuNCw1My4yLTIuNCw1My4ycy0yLjgsMjIuNC0xMiwzMi40Yy0xMiwxMy4yLTI1LjIsMTMuMi0zMS4yLDE0ICAgIGMtNDQsMy4yLTExMCwzLjYtMTEwLDMuNnMtODItMS4yLTEwNy4yLTMuNmMtNi44LTEuMi0yMi44LTAuOC0zNC44LTE0Yy05LjYtMTAtMTItMzIuNC0xMi0zMi40Uzk2LDI5MC44LDk2LDI2NC40di0yNC44ICAgIGMwLTI2LjQsMi40LTUzLjIsMi40LTUzLjJzMi44LTIyLjQsMTItMzIuNGMxMi0xMy4yLDI1LjItMTMuNiwzMS4yLTE0LjRDMTg2LDEzNi40LDI1MiwxMzYsMjUyLDEzNnM2NiwwLjQsMTEwLDMuNiAgICBjNiwwLjgsMTkuNiwxLjIsMzEuNiwxNGM5LjYsMTAsMTIsMzIuOCwxMiwzMi44czIuNCwyNi44LDIuNCw1My4yVjI2NC40eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzQwN0Y5MiI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` : ``}
               <p style="font-family: Calibri;font-size: 17px;color:${helper.selectedCVColor};margin: 3px 3px 3px 7px;">youtube</p>
            </div>` : ``}

            ${helper.userSkypeLink !== '' ? `<div style="margin:0 5px 0 5px;display: flex;align-items: center">
               ${helper.selectedCVColor === '#FFFFFF' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM0LDI2NS42Yy0zLjItNy42LTguOC0xMy4yLTE2LTE4Yy03LjItNC40LTE1LjYtOC40LTI1LjYtMTEuNnMtMjEuMi02LTMzLjItOC40Yy05LjYtMi0xNi44LTQtMjAuOC01LjIgICAgYy00LTEuMi04LTIuOC0xMi00LjhjLTMuNi0yLTYuOC00LTguOC02LjhjLTItMi40LTMuMi01LjItMy4yLTguNGMwLTUuNiwzLjItMTAsOS4yLTE0YzYuNC00LDE1LjItNi40LDI2LTYuNCAgICBjMTEuNiwwLDIwLDIsMjUuMiw1LjZjNS4yLDQsOS42LDkuNiwxMy42LDE2LjRjMy4yLDUuNiw2LDkuMiw4LjgsMTEuNmMzLjIsMi44LDcuMiw0LDEyLjgsNGM2LDAsMTEuMi0yLDE1LjYtNi40ICAgIGM0LTQsNi04LjgsNi0xNC40YzAtNS42LTEuNi0xMS4yLTQuOC0xNi44Yy0zLjItNS42LTgtMTEuMi0xNC40LTE2Yy02LjQtNS4yLTE0LjgtOS4yLTI0LjgtMTJjLTEwLTMuMi0yMS42LTQuNC0zNS4yLTQuNCAgICBjLTE2LjgsMC0zMS42LDIuNC00NCw2LjhjLTEyLjgsNC40LTIyLjQsMTEuMi0yOS4yLDIwcy0xMCwxOC44LTEwLDMwYzAsMTEuNiwzLjIsMjEuNiw5LjYsMjkuNmM2LjQsOCwxNS4yLDE0LDI1LjYsMTguOCAgICBjMTAuNCw0LjQsMjMuNiw4LjQsMzkuMiwxMS42YzExLjYsMi40LDIwLjgsNC44LDI3LjYsNi44YzYuNCwyLDEyLDQuOCwxNiw4LjhjNCwzLjYsNS42LDgsNS42LDE0YzAsNy4yLTMuNiwxMy42LTExLjIsMTguNCAgICBjLTcuNiw1LjItMTgsNy42LTMwLjQsNy42Yy04LjgsMC0xNi40LTEuMi0yMS42LTRjLTUuMi0yLjQtOS42LTUuNi0xMi40LTkuNmMtMy4yLTQtNi05LjItOC44LTE1LjJjLTIuNC01LjYtNS4yLTkuNi04LjgtMTIuOCAgICBjLTMuNi0yLjgtOC00LjQtMTMuMi00LjRjLTYuNCwwLTExLjYsMi0xNS42LDUuNmMtNCw0LTYuNCw4LjQtNi40LDE0YzAsOC44LDMuMiwxNy42LDkuNiwyNi44YzYuNCw4LjgsMTQuOCwxNi40LDI0LjgsMjEuNiAgICBjMTQsNy4yLDMyLDExLjIsNTMuNiwxMS4yYzE4LDAsMzMuNi0yLjgsNDYuOC04YzEzLjItNS42LDIzLjYtMTMuMiwzMC40LTIyLjhzMTAuNC0yMC44LDEwLjQtMzIuOEMzNDAsMjgxLjYsMzM4LDI3Mi44LDMzNCwyNjUuNiAgICB6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE0zMjIuNCw0MDkuMmMtMTQuOCwwLTI4LjgtMy42LTQxLjItMTBjLTguOCwxLjYtMTgsMi40LTI3LjYsMi40Yy04Mi44LDAtMTUwLTY2LjQtMTUwLTE0OCAgICBjMC0xMCwxLjItMjAsMy4yLTI5LjZjLTcuNi0xMi44LTEyLTI3LjYtMTItNDMuMmMwLTQ3LjIsMzguOC04NS42LDg2LjgtODUuNmMxNi44LDAsMzIuOCw0LjgsNDYuNCwxMy4yYzguNC0xLjIsMTYuOC0yLDI1LjYtMiAgICBjODIuOCwwLDE1MCw2Ni40LDE1MCwxNDhjMCwxMC44LTEuMiwyMS42LTMuNiwzMS42YzUuNiwxMS42LDkuMiwyNC40LDkuMiwzOEM0MDkuMiwzNzAuOCwzNzAuNCw0MDkuMiwzMjIuNCw0MDkuMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#2A2A2A' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM0LDI2NS42Yy0zLjItNy42LTguOC0xMy4yLTE2LTE4Yy03LjItNC40LTE1LjYtOC40LTI1LjYtMTEuNnMtMjEuMi02LTMzLjItOC40Yy05LjYtMi0xNi44LTQtMjAuOC01LjIgICAgYy00LTEuMi04LTIuOC0xMi00LjhjLTMuNi0yLTYuOC00LTguOC02LjhjLTItMi40LTMuMi01LjItMy4yLTguNGMwLTUuNiwzLjItMTAsOS4yLTE0YzYuNC00LDE1LjItNi40LDI2LTYuNCAgICBjMTEuNiwwLDIwLDIsMjUuMiw1LjZjNS4yLDQsOS42LDkuNiwxMy42LDE2LjRjMy4yLDUuNiw2LDkuMiw4LjgsMTEuNmMzLjIsMi44LDcuMiw0LDEyLjgsNGM2LDAsMTEuMi0yLDE1LjYtNi40ICAgIGM0LTQsNi04LjgsNi0xNC40YzAtNS42LTEuNi0xMS4yLTQuOC0xNi44Yy0zLjItNS42LTgtMTEuMi0xNC40LTE2Yy02LjQtNS4yLTE0LjgtOS4yLTI0LjgtMTJjLTEwLTMuMi0yMS42LTQuNC0zNS4yLTQuNCAgICBjLTE2LjgsMC0zMS42LDIuNC00NCw2LjhjLTEyLjgsNC40LTIyLjQsMTEuMi0yOS4yLDIwcy0xMCwxOC44LTEwLDMwYzAsMTEuNiwzLjIsMjEuNiw5LjYsMjkuNmM2LjQsOCwxNS4yLDE0LDI1LjYsMTguOCAgICBjMTAuNCw0LjQsMjMuNiw4LjQsMzkuMiwxMS42YzExLjYsMi40LDIwLjgsNC44LDI3LjYsNi44YzYuNCwyLDEyLDQuOCwxNiw4LjhjNCwzLjYsNS42LDgsNS42LDE0YzAsNy4yLTMuNiwxMy42LTExLjIsMTguNCAgICBjLTcuNiw1LjItMTgsNy42LTMwLjQsNy42Yy04LjgsMC0xNi40LTEuMi0yMS42LTRjLTUuMi0yLjQtOS42LTUuNi0xMi40LTkuNmMtMy4yLTQtNi05LjItOC44LTE1LjJjLTIuNC01LjYtNS4yLTkuNi04LjgtMTIuOCAgICBjLTMuNi0yLjgtOC00LjQtMTMuMi00LjRjLTYuNCwwLTExLjYsMi0xNS42LDUuNmMtNCw0LTYuNCw4LjQtNi40LDE0YzAsOC44LDMuMiwxNy42LDkuNiwyNi44YzYuNCw4LjgsMTQuOCwxNi40LDI0LjgsMjEuNiAgICBjMTQsNy4yLDMyLDExLjIsNTMuNiwxMS4yYzE4LDAsMzMuNi0yLjgsNDYuOC04YzEzLjItNS42LDIzLjYtMTMuMiwzMC40LTIyLjhzMTAuNC0yMC44LDEwLjQtMzIuOEMzNDAsMjgxLjYsMzM4LDI3Mi44LDMzNCwyNjUuNiAgICB6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE0zMjIuNCw0MDkuMmMtMTQuOCwwLTI4LjgtMy42LTQxLjItMTBjLTguOCwxLjYtMTgsMi40LTI3LjYsMi40Yy04Mi44LDAtMTUwLTY2LjQtMTUwLTE0OCAgICBjMC0xMCwxLjItMjAsMy4yLTI5LjZjLTcuNi0xMi44LTEyLTI3LjYtMTItNDMuMmMwLTQ3LjIsMzguOC04NS42LDg2LjgtODUuNmMxNi44LDAsMzIuOCw0LjgsNDYuNCwxMy4yYzguNC0xLjIsMTYuOC0yLDI1LjYtMiAgICBjODIuOCwwLDE1MCw2Ni40LDE1MCwxNDhjMCwxMC44LTEuMiwyMS42LTMuNiwzMS42YzUuNiwxMS42LDkuMiwyNC40LDkuMiwzOEM0MDkuMiwzNzAuOCwzNzAuNCw0MDkuMiwzMjIuNCw0MDkuMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``} 
               ${helper.selectedCVColor === '#12A3D0' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM0LDI2NS42Yy0zLjItNy42LTguOC0xMy4yLTE2LTE4Yy03LjItNC40LTE1LjYtOC40LTI1LjYtMTEuNnMtMjEuMi02LTMzLjItOC40Yy05LjYtMi0xNi44LTQtMjAuOC01LjIgICAgYy00LTEuMi04LTIuOC0xMi00LjhjLTMuNi0yLTYuOC00LTguOC02LjhjLTItMi40LTMuMi01LjItMy4yLTguNGMwLTUuNiwzLjItMTAsOS4yLTE0YzYuNC00LDE1LjItNi40LDI2LTYuNCAgICBjMTEuNiwwLDIwLDIsMjUuMiw1LjZjNS4yLDQsOS42LDkuNiwxMy42LDE2LjRjMy4yLDUuNiw2LDkuMiw4LjgsMTEuNmMzLjIsMi44LDcuMiw0LDEyLjgsNGM2LDAsMTEuMi0yLDE1LjYtNi40ICAgIGM0LTQsNi04LjgsNi0xNC40YzAtNS42LTEuNi0xMS4yLTQuOC0xNi44Yy0zLjItNS42LTgtMTEuMi0xNC40LTE2Yy02LjQtNS4yLTE0LjgtOS4yLTI0LjgtMTJjLTEwLTMuMi0yMS42LTQuNC0zNS4yLTQuNCAgICBjLTE2LjgsMC0zMS42LDIuNC00NCw2LjhjLTEyLjgsNC40LTIyLjQsMTEuMi0yOS4yLDIwcy0xMCwxOC44LTEwLDMwYzAsMTEuNiwzLjIsMjEuNiw5LjYsMjkuNmM2LjQsOCwxNS4yLDE0LDI1LjYsMTguOCAgICBjMTAuNCw0LjQsMjMuNiw4LjQsMzkuMiwxMS42YzExLjYsMi40LDIwLjgsNC44LDI3LjYsNi44YzYuNCwyLDEyLDQuOCwxNiw4LjhjNCwzLjYsNS42LDgsNS42LDE0YzAsNy4yLTMuNiwxMy42LTExLjIsMTguNCAgICBjLTcuNiw1LjItMTgsNy42LTMwLjQsNy42Yy04LjgsMC0xNi40LTEuMi0yMS42LTRjLTUuMi0yLjQtOS42LTUuNi0xMi40LTkuNmMtMy4yLTQtNi05LjItOC44LTE1LjJjLTIuNC01LjYtNS4yLTkuNi04LjgtMTIuOCAgICBjLTMuNi0yLjgtOC00LjQtMTMuMi00LjRjLTYuNCwwLTExLjYsMi0xNS42LDUuNmMtNCw0LTYuNCw4LjQtNi40LDE0YzAsOC44LDMuMiwxNy42LDkuNiwyNi44YzYuNCw4LjgsMTQuOCwxNi40LDI0LjgsMjEuNiAgICBjMTQsNy4yLDMyLDExLjIsNTMuNiwxMS4yYzE4LDAsMzMuNi0yLjgsNDYuOC04YzEzLjItNS42LDIzLjYtMTMuMiwzMC40LTIyLjhzMTAuNC0yMC44LDEwLjQtMzIuOEMzNDAsMjgxLjYsMzM4LDI3Mi44LDMzNCwyNjUuNiAgICB6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE0zMjIuNCw0MDkuMmMtMTQuOCwwLTI4LjgtMy42LTQxLjItMTBjLTguOCwxLjYtMTgsMi40LTI3LjYsMi40Yy04Mi44LDAtMTUwLTY2LjQtMTUwLTE0OCAgICBjMC0xMCwxLjItMjAsMy4yLTI5LjZjLTcuNi0xMi44LTEyLTI3LjYtMTItNDMuMmMwLTQ3LjIsMzguOC04NS42LDg2LjgtODUuNmMxNi44LDAsMzIuOCw0LjgsNDYuNCwxMy4yYzguNC0xLjIsMTYuOC0yLDI1LjYtMiAgICBjODIuOCwwLDE1MCw2Ni40LDE1MCwxNDhjMCwxMC44LTEuMiwyMS42LTMuNiwzMS42YzUuNiwxMS42LDkuMiwyNC40LDkuMiwzOEM0MDkuMiwzNzAuOCwzNzAuNCw0MDkuMiwzMjIuNCw0MDkuMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``} 
               ${helper.selectedCVColor === '#FF7373' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM0LDI2NS42Yy0zLjItNy42LTguOC0xMy4yLTE2LTE4Yy03LjItNC40LTE1LjYtOC40LTI1LjYtMTEuNnMtMjEuMi02LTMzLjItOC40Yy05LjYtMi0xNi44LTQtMjAuOC01LjIgICAgYy00LTEuMi04LTIuOC0xMi00LjhjLTMuNi0yLTYuOC00LTguOC02LjhjLTItMi40LTMuMi01LjItMy4yLTguNGMwLTUuNiwzLjItMTAsOS4yLTE0YzYuNC00LDE1LjItNi40LDI2LTYuNCAgICBjMTEuNiwwLDIwLDIsMjUuMiw1LjZjNS4yLDQsOS42LDkuNiwxMy42LDE2LjRjMy4yLDUuNiw2LDkuMiw4LjgsMTEuNmMzLjIsMi44LDcuMiw0LDEyLjgsNGM2LDAsMTEuMi0yLDE1LjYtNi40ICAgIGM0LTQsNi04LjgsNi0xNC40YzAtNS42LTEuNi0xMS4yLTQuOC0xNi44Yy0zLjItNS42LTgtMTEuMi0xNC40LTE2Yy02LjQtNS4yLTE0LjgtOS4yLTI0LjgtMTJjLTEwLTMuMi0yMS42LTQuNC0zNS4yLTQuNCAgICBjLTE2LjgsMC0zMS42LDIuNC00NCw2LjhjLTEyLjgsNC40LTIyLjQsMTEuMi0yOS4yLDIwcy0xMCwxOC44LTEwLDMwYzAsMTEuNiwzLjIsMjEuNiw5LjYsMjkuNmM2LjQsOCwxNS4yLDE0LDI1LjYsMTguOCAgICBjMTAuNCw0LjQsMjMuNiw4LjQsMzkuMiwxMS42YzExLjYsMi40LDIwLjgsNC44LDI3LjYsNi44YzYuNCwyLDEyLDQuOCwxNiw4LjhjNCwzLjYsNS42LDgsNS42LDE0YzAsNy4yLTMuNiwxMy42LTExLjIsMTguNCAgICBjLTcuNiw1LjItMTgsNy42LTMwLjQsNy42Yy04LjgsMC0xNi40LTEuMi0yMS42LTRjLTUuMi0yLjQtOS42LTUuNi0xMi40LTkuNmMtMy4yLTQtNi05LjItOC44LTE1LjJjLTIuNC01LjYtNS4yLTkuNi04LjgtMTIuOCAgICBjLTMuNi0yLjgtOC00LjQtMTMuMi00LjRjLTYuNCwwLTExLjYsMi0xNS42LDUuNmMtNCw0LTYuNCw4LjQtNi40LDE0YzAsOC44LDMuMiwxNy42LDkuNiwyNi44YzYuNCw4LjgsMTQuOCwxNi40LDI0LjgsMjEuNiAgICBjMTQsNy4yLDMyLDExLjIsNTMuNiwxMS4yYzE4LDAsMzMuNi0yLjgsNDYuOC04YzEzLjItNS42LDIzLjYtMTMuMiwzMC40LTIyLjhzMTAuNC0yMC44LDEwLjQtMzIuOEMzNDAsMjgxLjYsMzM4LDI3Mi44LDMzNCwyNjUuNiAgICB6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE0zMjIuNCw0MDkuMmMtMTQuOCwwLTI4LjgtMy42LTQxLjItMTBjLTguOCwxLjYtMTgsMi40LTI3LjYsMi40Yy04Mi44LDAtMTUwLTY2LjQtMTUwLTE0OCAgICBjMC0xMCwxLjItMjAsMy4yLTI5LjZjLTcuNi0xMi44LTEyLTI3LjYtMTItNDMuMmMwLTQ3LjIsMzguOC04NS42LDg2LjgtODUuNmMxNi44LDAsMzIuOCw0LjgsNDYuNCwxMy4yYzguNC0xLjIsMTYuOC0yLDI1LjYtMiAgICBjODIuOCwwLDE1MCw2Ni40LDE1MCwxNDhjMCwxMC44LTEuMiwyMS42LTMuNiwzMS42YzUuNiwxMS42LDkuMiwyNC40LDkuMiwzOEM0MDkuMiwzNzAuOCwzNzAuNCw0MDkuMiwzMjIuNCw0MDkuMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#299BE8' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM0LDI2NS42Yy0zLjItNy42LTguOC0xMy4yLTE2LTE4Yy03LjItNC40LTE1LjYtOC40LTI1LjYtMTEuNnMtMjEuMi02LTMzLjItOC40Yy05LjYtMi0xNi44LTQtMjAuOC01LjIgICAgYy00LTEuMi04LTIuOC0xMi00LjhjLTMuNi0yLTYuOC00LTguOC02LjhjLTItMi40LTMuMi01LjItMy4yLTguNGMwLTUuNiwzLjItMTAsOS4yLTE0YzYuNC00LDE1LjItNi40LDI2LTYuNCAgICBjMTEuNiwwLDIwLDIsMjUuMiw1LjZjNS4yLDQsOS42LDkuNiwxMy42LDE2LjRjMy4yLDUuNiw2LDkuMiw4LjgsMTEuNmMzLjIsMi44LDcuMiw0LDEyLjgsNGM2LDAsMTEuMi0yLDE1LjYtNi40ICAgIGM0LTQsNi04LjgsNi0xNC40YzAtNS42LTEuNi0xMS4yLTQuOC0xNi44Yy0zLjItNS42LTgtMTEuMi0xNC40LTE2Yy02LjQtNS4yLTE0LjgtOS4yLTI0LjgtMTJjLTEwLTMuMi0yMS42LTQuNC0zNS4yLTQuNCAgICBjLTE2LjgsMC0zMS42LDIuNC00NCw2LjhjLTEyLjgsNC40LTIyLjQsMTEuMi0yOS4yLDIwcy0xMCwxOC44LTEwLDMwYzAsMTEuNiwzLjIsMjEuNiw5LjYsMjkuNmM2LjQsOCwxNS4yLDE0LDI1LjYsMTguOCAgICBjMTAuNCw0LjQsMjMuNiw4LjQsMzkuMiwxMS42YzExLjYsMi40LDIwLjgsNC44LDI3LjYsNi44YzYuNCwyLDEyLDQuOCwxNiw4LjhjNCwzLjYsNS42LDgsNS42LDE0YzAsNy4yLTMuNiwxMy42LTExLjIsMTguNCAgICBjLTcuNiw1LjItMTgsNy42LTMwLjQsNy42Yy04LjgsMC0xNi40LTEuMi0yMS42LTRjLTUuMi0yLjQtOS42LTUuNi0xMi40LTkuNmMtMy4yLTQtNi05LjItOC44LTE1LjJjLTIuNC01LjYtNS4yLTkuNi04LjgtMTIuOCAgICBjLTMuNi0yLjgtOC00LjQtMTMuMi00LjRjLTYuNCwwLTExLjYsMi0xNS42LDUuNmMtNCw0LTYuNCw4LjQtNi40LDE0YzAsOC44LDMuMiwxNy42LDkuNiwyNi44YzYuNCw4LjgsMTQuOCwxNi40LDI0LjgsMjEuNiAgICBjMTQsNy4yLDMyLDExLjIsNTMuNiwxMS4yYzE4LDAsMzMuNi0yLjgsNDYuOC04YzEzLjItNS42LDIzLjYtMTMuMiwzMC40LTIyLjhzMTAuNC0yMC44LDEwLjQtMzIuOEMzNDAsMjgxLjYsMzM4LDI3Mi44LDMzNCwyNjUuNiAgICB6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE0zMjIuNCw0MDkuMmMtMTQuOCwwLTI4LjgtMy42LTQxLjItMTBjLTguOCwxLjYtMTgsMi40LTI3LjYsMi40Yy04Mi44LDAtMTUwLTY2LjQtMTUwLTE0OCAgICBjMC0xMCwxLjItMjAsMy4yLTI5LjZjLTcuNi0xMi44LTEyLTI3LjYtMTItNDMuMmMwLTQ3LjIsMzguOC04NS42LDg2LjgtODUuNmMxNi44LDAsMzIuOCw0LjgsNDYuNCwxMy4yYzguNC0xLjIsMTYuOC0yLDI1LjYtMiAgICBjODIuOCwwLDE1MCw2Ni40LDE1MCwxNDhjMCwxMC44LTEuMiwyMS42LTMuNiwzMS42YzUuNiwxMS42LDkuMiwyNC40LDkuMiwzOEM0MDkuMiwzNzAuOCwzNzAuNCw0MDkuMiwzMjIuNCw0MDkuMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#407F92' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM0LDI2NS42Yy0zLjItNy42LTguOC0xMy4yLTE2LTE4Yy03LjItNC40LTE1LjYtOC40LTI1LjYtMTEuNnMtMjEuMi02LTMzLjItOC40Yy05LjYtMi0xNi44LTQtMjAuOC01LjIgICAgYy00LTEuMi04LTIuOC0xMi00LjhjLTMuNi0yLTYuOC00LTguOC02LjhjLTItMi40LTMuMi01LjItMy4yLTguNGMwLTUuNiwzLjItMTAsOS4yLTE0YzYuNC00LDE1LjItNi40LDI2LTYuNCAgICBjMTEuNiwwLDIwLDIsMjUuMiw1LjZjNS4yLDQsOS42LDkuNiwxMy42LDE2LjRjMy4yLDUuNiw2LDkuMiw4LjgsMTEuNmMzLjIsMi44LDcuMiw0LDEyLjgsNGM2LDAsMTEuMi0yLDE1LjYtNi40ICAgIGM0LTQsNi04LjgsNi0xNC40YzAtNS42LTEuNi0xMS4yLTQuOC0xNi44Yy0zLjItNS42LTgtMTEuMi0xNC40LTE2Yy02LjQtNS4yLTE0LjgtOS4yLTI0LjgtMTJjLTEwLTMuMi0yMS42LTQuNC0zNS4yLTQuNCAgICBjLTE2LjgsMC0zMS42LDIuNC00NCw2LjhjLTEyLjgsNC40LTIyLjQsMTEuMi0yOS4yLDIwcy0xMCwxOC44LTEwLDMwYzAsMTEuNiwzLjIsMjEuNiw5LjYsMjkuNmM2LjQsOCwxNS4yLDE0LDI1LjYsMTguOCAgICBjMTAuNCw0LjQsMjMuNiw4LjQsMzkuMiwxMS42YzExLjYsMi40LDIwLjgsNC44LDI3LjYsNi44YzYuNCwyLDEyLDQuOCwxNiw4LjhjNCwzLjYsNS42LDgsNS42LDE0YzAsNy4yLTMuNiwxMy42LTExLjIsMTguNCAgICBjLTcuNiw1LjItMTgsNy42LTMwLjQsNy42Yy04LjgsMC0xNi40LTEuMi0yMS42LTRjLTUuMi0yLjQtOS42LTUuNi0xMi40LTkuNmMtMy4yLTQtNi05LjItOC44LTE1LjJjLTIuNC01LjYtNS4yLTkuNi04LjgtMTIuOCAgICBjLTMuNi0yLjgtOC00LjQtMTMuMi00LjRjLTYuNCwwLTExLjYsMi0xNS42LDUuNmMtNCw0LTYuNCw4LjQtNi40LDE0YzAsOC44LDMuMiwxNy42LDkuNiwyNi44YzYuNCw4LjgsMTQuOCwxNi40LDI0LjgsMjEuNiAgICBjMTQsNy4yLDMyLDExLjIsNTMuNiwxMS4yYzE4LDAsMzMuNi0yLjgsNDYuOC04YzEzLjItNS42LDIzLjYtMTMuMiwzMC40LTIyLjhzMTAuNC0yMC44LDEwLjQtMzIuOEMzNDAsMjgxLjYsMzM4LDI3Mi44LDMzNCwyNjUuNiAgICB6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwSDEyNkM1Ni44LDAsMCw1Ni44LDAsMTI2LjRWMzc4YzAsNjkuMiw1Ni44LDEyNiwxMjYsMTI2aDI1MS42YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi40ICAgIEM1MDQsNTYuOCw0NDcuMiwwLDM3Ny42LDB6IE0zMjIuNCw0MDkuMmMtMTQuOCwwLTI4LjgtMy42LTQxLjItMTBjLTguOCwxLjYtMTgsMi40LTI3LjYsMi40Yy04Mi44LDAtMTUwLTY2LjQtMTUwLTE0OCAgICBjMC0xMCwxLjItMjAsMy4yLTI5LjZjLTcuNi0xMi44LTEyLTI3LjYtMTItNDMuMmMwLTQ3LjIsMzguOC04NS42LDg2LjgtODUuNmMxNi44LDAsMzIuOCw0LjgsNDYuNCwxMy4yYzguNC0xLjIsMTYuOC0yLDI1LjYtMiAgICBjODIuOCwwLDE1MCw2Ni40LDE1MCwxNDhjMCwxMC44LTEuMiwyMS42LTMuNiwzMS42YzUuNiwxMS42LDkuMiwyNC40LDkuMiwzOEM0MDkuMiwzNzAuOCwzNzAuNCw0MDkuMiwzMjIuNCw0MDkuMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               <p style="font-family: Calibri;font-size: 17px;color:${helper.selectedCVColor};margin: 3px 3px 3px 7px;">skype</p>
            </div>` : ``}

            ${helper.userFacebookLink !== '' ? `<div style="margin:0 5px 0 5px;display: flex;align-items: center">
               ${helper.selectedCVColor === '#FFFFFF' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDE1MXYtMTgxaC02MHYtOTBoNjB2LTYxYzAtNDkuNjI4OTA2IDQwLjM3MTA5NC05MCA5MC05MGg5MXY5MGgtOTF2NjFoOTFsLTE1IDkwaC03NnYxODFoMTIxYzQxLjM1MTU2MiAwIDc1LTMzLjY0ODQzOCA3NS03NXYtMzYyYzAtNDEuMzUxNTYyLTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />` : ``}
               ${helper.selectedCVColor === '#2A2A2A' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDE1MXYtMTgxaC02MHYtOTBoNjB2LTYxYzAtNDkuNjI4OTA2IDQwLjM3MTA5NC05MCA5MC05MGg5MXY5MGgtOTF2NjFoOTFsLTE1IDkwaC03NnYxODFoMTIxYzQxLjM1MTU2MiAwIDc1LTMzLjY0ODQzOCA3NS03NXYtMzYyYzAtNDEuMzUxNTYyLTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkEyQTJBIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />` : ``}
               ${helper.selectedCVColor === '#12A3D0' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDE1MXYtMTgxaC02MHYtOTBoNjB2LTYxYzAtNDkuNjI4OTA2IDQwLjM3MTA5NC05MCA5MC05MGg5MXY5MGgtOTF2NjFoOTFsLTE1IDkwaC03NnYxODFoMTIxYzQxLjM1MTU2MiAwIDc1LTMzLjY0ODQzOCA3NS03NXYtMzYyYzAtNDEuMzUxNTYyLTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />` : ``}
               ${helper.selectedCVColor === '#FF7373' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDE1MXYtMTgxaC02MHYtOTBoNjB2LTYxYzAtNDkuNjI4OTA2IDQwLjM3MTA5NC05MCA5MC05MGg5MXY5MGgtOTF2NjFoOTFsLTE1IDkwaC03NnYxODFoMTIxYzQxLjM1MTU2MiAwIDc1LTMzLjY0ODQzOCA3NS03NXYtMzYyYzAtNDEuMzUxNTYyLTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkY3MzczIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />` : ``}
               ${helper.selectedCVColor === '#299BE8' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDE1MXYtMTgxaC02MHYtOTBoNjB2LTYxYzAtNDkuNjI4OTA2IDQwLjM3MTA5NC05MCA5MC05MGg5MXY5MGgtOTF2NjFoOTFsLTE1IDkwaC03NnYxODFoMTIxYzQxLjM1MTU2MiAwIDc1LTMzLjY0ODQzOCA3NS03NXYtMzYyYzAtNDEuMzUxNTYyLTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMjk5QkU4Ij48L3BhdGg+PC9nPiA8L3N2Zz4=" />` : ``}
               ${helper.selectedCVColor === '#407F92' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDE1MXYtMTgxaC02MHYtOTBoNjB2LTYxYzAtNDkuNjI4OTA2IDQwLjM3MTA5NC05MCA5MC05MGg5MXY5MGgtOTF2NjFoOTFsLTE1IDkwaC03NnYxODFoMTIxYzQxLjM1MTU2MiAwIDc1LTMzLjY0ODQzOCA3NS03NXYtMzYyYzAtNDEuMzUxNTYyLTMzLjY0ODQzOC03NS03NS03NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNDA3RjkyIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />` : ``}
               <p style="font-family: Calibri;font-size: 17px;color:${helper.selectedCVColor};margin: 3px 3px 3px 7px;">facebook</p>
            </div>` : ``}

            ${helper.userTwitterLink !== '' ? `<div style="margin:0 5px 0 5px;display: flex;align-items: center">
               ${helper.selectedCVColor === '#FFFFFF' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTM3Ny4yLDE4OWMwLDIuOCwwLDUuNiwwLDguNGMwLDg0LTY0LjgsMTgwLjgtMTgzLjYsMTgwLjhjLTM2LjQsMC03MC40LTEwLjQtOTguOC0yOC40ICAgIGM1LjIsMC40LDEwLDAuOCwxNS4yLDAuOGMzMC40LDAsNTgtMTAsODAtMjcuMmMtMjguNC0wLjQtNTItMTguOC02MC40LTQ0YzQsMC44LDgsMS4yLDEyLDEuMmM2LDAsMTItMC44LDE3LjItMi40ICAgIGMtMjguOC02LTUwLjgtMzEuNi01MC44LTYyLjRWMjE1YzgsNC44LDE4LjQsNy42LDI4LjgsOGMtMTcuMi0xMS4yLTI4LjgtMzAuOC0yOC44LTUyLjhjMC0xMS42LDMuMi0yMi40LDguOC0zMiAgICBjMzIsMzguNCw3OS4yLDYzLjYsMTMyLjgsNjYuNGMtMS4yLTQuOC0xLjYtOS42LTEuNi0xNC40YzAtMzUuMiwyOC44LTYzLjYsNjQuNC02My42YzE4LjQsMCwzNS4yLDcuNiw0Ny4yLDIwICAgIGMxNC44LTIuOCwyOC40LTgsNDAuOC0xNS42Yy00LjgsMTQuOC0xNS4yLDI3LjItMjguNCwzNS4yYzEzLjItMS42LDI1LjYtNC44LDM3LjItMTBDNDAwLjQsMTY5LDM4OS42LDE4MC4yLDM3Ny4yLDE4OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#2A2A2A' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTM3Ny4yLDE4OWMwLDIuOCwwLDUuNiwwLDguNGMwLDg0LTY0LjgsMTgwLjgtMTgzLjYsMTgwLjhjLTM2LjQsMC03MC40LTEwLjQtOTguOC0yOC40ICAgIGM1LjIsMC40LDEwLDAuOCwxNS4yLDAuOGMzMC40LDAsNTgtMTAsODAtMjcuMmMtMjguNC0wLjQtNTItMTguOC02MC40LTQ0YzQsMC44LDgsMS4yLDEyLDEuMmM2LDAsMTItMC44LDE3LjItMi40ICAgIGMtMjguOC02LTUwLjgtMzEuNi01MC44LTYyLjRWMjE1YzgsNC44LDE4LjQsNy42LDI4LjgsOGMtMTcuMi0xMS4yLTI4LjgtMzAuOC0yOC44LTUyLjhjMC0xMS42LDMuMi0yMi40LDguOC0zMiAgICBjMzIsMzguNCw3OS4yLDYzLjYsMTMyLjgsNjYuNGMtMS4yLTQuOC0xLjYtOS42LTEuNi0xNC40YzAtMzUuMiwyOC44LTYzLjYsNjQuNC02My42YzE4LjQsMCwzNS4yLDcuNiw0Ny4yLDIwICAgIGMxNC44LTIuOCwyOC40LTgsNDAuOC0xNS42Yy00LjgsMTQuOC0xNS4yLDI3LjItMjguNCwzNS4yYzEzLjItMS42LDI1LjYtNC44LDM3LjItMTBDNDAwLjQsMTY5LDM4OS42LDE4MC4yLDM3Ny4yLDE4OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``} 
               ${helper.selectedCVColor === '#12A3D0' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTM3Ny4yLDE4OWMwLDIuOCwwLDUuNiwwLDguNGMwLDg0LTY0LjgsMTgwLjgtMTgzLjYsMTgwLjhjLTM2LjQsMC03MC40LTEwLjQtOTguOC0yOC40ICAgIGM1LjIsMC40LDEwLDAuOCwxNS4yLDAuOGMzMC40LDAsNTgtMTAsODAtMjcuMmMtMjguNC0wLjQtNTItMTguOC02MC40LTQ0YzQsMC44LDgsMS4yLDEyLDEuMmM2LDAsMTItMC44LDE3LjItMi40ICAgIGMtMjguOC02LTUwLjgtMzEuNi01MC44LTYyLjRWMjE1YzgsNC44LDE4LjQsNy42LDI4LjgsOGMtMTcuMi0xMS4yLTI4LjgtMzAuOC0yOC44LTUyLjhjMC0xMS42LDMuMi0yMi40LDguOC0zMiAgICBjMzIsMzguNCw3OS4yLDYzLjYsMTMyLjgsNjYuNGMtMS4yLTQuOC0xLjYtOS42LTEuNi0xNC40YzAtMzUuMiwyOC44LTYzLjYsNjQuNC02My42YzE4LjQsMCwzNS4yLDcuNiw0Ny4yLDIwICAgIGMxNC44LTIuOCwyOC40LTgsNDAuOC0xNS42Yy00LjgsMTQuOC0xNS4yLDI3LjItMjguNCwzNS4yYzEzLjItMS42LDI1LjYtNC44LDM3LjItMTBDNDAwLjQsMTY5LDM4OS42LDE4MC4yLDM3Ny4yLDE4OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``} 
               ${helper.selectedCVColor === '#FF7373' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTM3Ny4yLDE4OWMwLDIuOCwwLDUuNiwwLDguNGMwLDg0LTY0LjgsMTgwLjgtMTgzLjYsMTgwLjhjLTM2LjQsMC03MC40LTEwLjQtOTguOC0yOC40ICAgIGM1LjIsMC40LDEwLDAuOCwxNS4yLDAuOGMzMC40LDAsNTgtMTAsODAtMjcuMmMtMjguNC0wLjQtNTItMTguOC02MC40LTQ0YzQsMC44LDgsMS4yLDEyLDEuMmM2LDAsMTItMC44LDE3LjItMi40ICAgIGMtMjguOC02LTUwLjgtMzEuNi01MC44LTYyLjRWMjE1YzgsNC44LDE4LjQsNy42LDI4LjgsOGMtMTcuMi0xMS4yLTI4LjgtMzAuOC0yOC44LTUyLjhjMC0xMS42LDMuMi0yMi40LDguOC0zMiAgICBjMzIsMzguNCw3OS4yLDYzLjYsMTMyLjgsNjYuNGMtMS4yLTQuOC0xLjYtOS42LTEuNi0xNC40YzAtMzUuMiwyOC44LTYzLjYsNjQuNC02My42YzE4LjQsMCwzNS4yLDcuNiw0Ny4yLDIwICAgIGMxNC44LTIuOCwyOC40LTgsNDAuOC0xNS42Yy00LjgsMTQuOC0xNS4yLDI3LjItMjguNCwzNS4yYzEzLjItMS42LDI1LjYtNC44LDM3LjItMTBDNDAwLjQsMTY5LDM4OS42LDE4MC4yLDM3Ny4yLDE4OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#299BE8' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTM3Ny4yLDE4OWMwLDIuOCwwLDUuNiwwLDguNGMwLDg0LTY0LjgsMTgwLjgtMTgzLjYsMTgwLjhjLTM2LjQsMC03MC40LTEwLjQtOTguOC0yOC40ICAgIGM1LjIsMC40LDEwLDAuOCwxNS4yLDAuOGMzMC40LDAsNTgtMTAsODAtMjcuMmMtMjguNC0wLjQtNTItMTguOC02MC40LTQ0YzQsMC44LDgsMS4yLDEyLDEuMmM2LDAsMTItMC44LDE3LjItMi40ICAgIGMtMjguOC02LTUwLjgtMzEuNi01MC44LTYyLjRWMjE1YzgsNC44LDE4LjQsNy42LDI4LjgsOGMtMTcuMi0xMS4yLTI4LjgtMzAuOC0yOC44LTUyLjhjMC0xMS42LDMuMi0yMi40LDguOC0zMiAgICBjMzIsMzguNCw3OS4yLDYzLjYsMTMyLjgsNjYuNGMtMS4yLTQuOC0xLjYtOS42LTEuNi0xNC40YzAtMzUuMiwyOC44LTYzLjYsNjQuNC02My42YzE4LjQsMCwzNS4yLDcuNiw0Ny4yLDIwICAgIGMxNC44LTIuOCwyOC40LTgsNDAuOC0xNS42Yy00LjgsMTQuOC0xNS4yLDI3LjItMjguNCwzNS4yYzEzLjItMS42LDI1LjYtNC44LDM3LjItMTBDNDAwLjQsMTY5LDM4OS42LDE4MC4yLDM3Ny4yLDE4OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#407F92' ? `<img height="17px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNC40IDUwNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuNCA1MDQuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzcuNiwwLjJIMTI2LjRDNTYuOCwwLjIsMCw1NywwLDEyNi42djI1MS42YzAsNjkuMiw1Ni44LDEyNiwxMjYuNCwxMjZIMzc4YzY5LjYsMCwxMjYuNC01Ni44LDEyNi40LTEyNi40VjEyNi42ICAgIEM1MDQsNTcsNDQ3LjIsMC4yLDM3Ny42LDAuMnogTTM3Ny4yLDE4OWMwLDIuOCwwLDUuNiwwLDguNGMwLDg0LTY0LjgsMTgwLjgtMTgzLjYsMTgwLjhjLTM2LjQsMC03MC40LTEwLjQtOTguOC0yOC40ICAgIGM1LjIsMC40LDEwLDAuOCwxNS4yLDAuOGMzMC40LDAsNTgtMTAsODAtMjcuMmMtMjguNC0wLjQtNTItMTguOC02MC40LTQ0YzQsMC44LDgsMS4yLDEyLDEuMmM2LDAsMTItMC44LDE3LjItMi40ICAgIGMtMjguOC02LTUwLjgtMzEuNi01MC44LTYyLjRWMjE1YzgsNC44LDE4LjQsNy42LDI4LjgsOGMtMTcuMi0xMS4yLTI4LjgtMzAuOC0yOC44LTUyLjhjMC0xMS42LDMuMi0yMi40LDguOC0zMiAgICBjMzIsMzguNCw3OS4yLDYzLjYsMTMyLjgsNjYuNGMtMS4yLTQuOC0xLjYtOS42LTEuNi0xNC40YzAtMzUuMiwyOC44LTYzLjYsNjQuNC02My42YzE4LjQsMCwzNS4yLDcuNiw0Ny4yLDIwICAgIGMxNC44LTIuOCwyOC40LTgsNDAuOC0xNS42Yy00LjgsMTQuOC0xNS4yLDI3LjItMjguNCwzNS4yYzEzLjItMS42LDI1LjYtNC44LDM3LjItMTBDNDAwLjQsMTY5LDM4OS42LDE4MC4yLDM3Ny4yLDE4OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               <p style="font-family: Calibri;font-size: 17px;color:${helper.selectedCVColor};margin: 3px 3px 3px 7px;">twitter</p>
            </div>` : ``}

            ${helper.userPersonalLink.map((item, i) => `<div style="display: ${helper.userPersonalLink.length > 0 ? 'flex' : 'none'};margin:0 5px 0 5px;align-items: center">
               ${helper.selectedCVColor === '#FFFFFF' ? `<img height="16px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#2A2A2A' ? `<img height="16px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyQTJBMkEiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``} 
               ${helper.selectedCVColor === '#12A3D0' ? `<img height="16px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``} 
               ${helper.selectedCVColor === '#FF7373' ? `<img height="16px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRjczNzMiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#299BE8' ? `<img height="16px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               ${helper.selectedCVColor === '#407F92' ? `<img height="16px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0MDdGOTIiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` : ``}
               <p style="font-family: Calibri;font-size: 17px;color:${helper.selectedCVColor};margin: 3px 3px 3px 7px;">link</p>
            </div>`.trim()).join('')}

        </div>

        <div style="width: 100%;min-height: 200px;display: flex">

           <div style="width: 65%;min-height: 200px;">
               <div style="width: 60%;margin:40px 10px 0 50px">
                    <div style="display: flex;align-items: center">
                       ${helper.selectedCVColor === '#FFFFFF' ? `<img height="19px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBjLTc0LjQzOSwwLTEzNSw2MC41NjEtMTM1LDEzNXM2MC41NjEsMTM1LDEzNSwxMzVzMTM1LTYwLjU2MSwxMzUtMTM1UzMzMC40MzksMCwyNTYsMHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQyMy45NjYsMzU4LjE5NUMzODcuMDA2LDMyMC42NjcsMzM4LjAwOSwzMDAsMjg2LDMwMGgtNjBjLTUyLjAwOCwwLTEwMS4wMDYsMjAuNjY3LTEzNy45NjYsNTguMTk1ICAgIEM1MS4yNTUsMzk1LjUzOSwzMSw0NDQuODMzLDMxLDQ5N2MwLDguMjg0LDYuNzE2LDE1LDE1LDE1aDQyMGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1ICAgIEM0ODEsNDQ0LjgzMyw0NjAuNzQ1LDM5NS41MzksNDIzLjk2NiwzNTguMTk1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />` :
                        `<img height="19px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBjLTc0LjQzOSwwLTEzNSw2MC41NjEtMTM1LDEzNXM2MC41NjEsMTM1LDEzNSwxMzVzMTM1LTYwLjU2MSwxMzUtMTM1UzMzMC40MzksMCwyNTYsMHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQyMy45NjYsMzU4LjE5NUMzODcuMDA2LDMyMC42NjcsMzM4LjAwOSwzMDAsMjg2LDMwMGgtNjBjLTUyLjAwOCwwLTEwMS4wMDYsMjAuNjY3LTEzNy45NjYsNTguMTk1ICAgIEM1MS4yNTUsMzk1LjUzOSwzMSw0NDQuODMzLDMxLDQ5N2MwLDguMjg0LDYuNzE2LDE1LDE1LDE1aDQyMGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1ICAgIEM0ODEsNDQ0LjgzMyw0NjAuNzQ1LDM5NS41MzksNDIzLjk2NiwzNTguMTk1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />`} 
                       <p style="font-family: Calibri;font-size: 19px;margin:2px 5px;color:${helper.selectedCVColor === '#FFFFFF' ? '#737373' : '#fff'}">${helper.userName}</p>
                    </div>
                    <div style="display: flex;align-items: center">
                       ${helper.selectedCVColor === '#FFFFFF' ? `<img height="19px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzg0IDM4NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0IDM4NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNTMuMTg4LDI1Mi4wNTJjLTIzLjUxLDAtNDYuNTk0LTMuNjc3LTY4LjQ2OS0xMC45MDZjLTEwLjcxOS0zLjY1Ni0yMy44OTYtMC4zMDItMzAuNDM4LDYuNDE3bC00My4xNzcsMzIuNTk0ICAgIGMtNTAuMDczLTI2LjcyOS04MC45MTctNTcuNTYzLTEwNy4yODEtMTA3LjI2bDMxLjYzNS00Mi4wNTJjOC4yMTktOC4yMDgsMTEuMTY3LTIwLjE5OCw3LjYzNS0zMS40NDggICAgYy03LjI2LTIxLjk5LTEwLjk0OC00NS4wNjMtMTAuOTQ4LTY4LjU4M0MxMzIuMTQ2LDEzLjgyMywxMTguMzIzLDAsMTAxLjMzMywwSDMwLjgxM0MxMy44MjMsMCwwLDEzLjgyMywwLDMwLjgxMyAgICBDMCwyMjUuNTYzLDE1OC40MzgsMzg0LDM1My4xODgsMzg0YzE2Ljk5LDAsMzAuODEzLTEzLjgyMywzMC44MTMtMzAuODEzdi03MC4zMjNDMzg0LDI2NS44NzUsMzcwLjE3NywyNTIuMDUyLDM1My4xODgsMjUyLjA1MnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` :
                        `<img height="19px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzg0IDM4NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0IDM4NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNTMuMTg4LDI1Mi4wNTJjLTIzLjUxLDAtNDYuNTk0LTMuNjc3LTY4LjQ2OS0xMC45MDZjLTEwLjcxOS0zLjY1Ni0yMy44OTYtMC4zMDItMzAuNDM4LDYuNDE3bC00My4xNzcsMzIuNTk0ICAgIGMtNTAuMDczLTI2LjcyOS04MC45MTctNTcuNTYzLTEwNy4yODEtMTA3LjI2bDMxLjYzNS00Mi4wNTJjOC4yMTktOC4yMDgsMTEuMTY3LTIwLjE5OCw3LjYzNS0zMS40NDggICAgYy03LjI2LTIxLjk5LTEwLjk0OC00NS4wNjMtMTAuOTQ4LTY4LjU4M0MxMzIuMTQ2LDEzLjgyMywxMTguMzIzLDAsMTAxLjMzMywwSDMwLjgxM0MxMy44MjMsMCwwLDEzLjgyMywwLDMwLjgxMyAgICBDMCwyMjUuNTYzLDE1OC40MzgsMzg0LDM1My4xODgsMzg0YzE2Ljk5LDAsMzAuODEzLTEzLjgyMywzMC44MTMtMzAuODEzdi03MC4zMjNDMzg0LDI2NS44NzUsMzcwLjE3NywyNTIuMDUyLDM1My4xODgsMjUyLjA1MnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />`}
                       <p style="font-family: Calibri;font-size: 19px;margin:2px 5px;color:${helper.selectedCVColor === '#FFFFFF' ? '#737373' : '#fff'}">${helper.userTel}</p>
                    </div>
                    <div style="display: flex;align-items: center">
                       ${helper.selectedCVColor === '#FFFFFF' ? `<img height="19px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTEwLjY4OCw5NS4xNTZDODAuOTU4LDE1NC42NjcsMjA0LjI2LDI1OS4zNjUsMjQwLjUsMjkyLjAxYzQuODY1LDQuNDA2LDEwLjA4Myw2LjY0NiwxNS41LDYuNjQ2ICAgICBjNS40MDYsMCwxMC42MTUtMi4yMTksMTUuNDY5LTYuNjA0YzM2LjI3MS0zMi42NzcsMTU5LjU3My0xMzcuMzg1LDIyOS44NDQtMTk2Ljg5NmM0LjM3NS0zLjY5OCw1LjA0Mi0xMC4xOTgsMS41LTE0LjcxOSAgICAgQzQ5NC42MjUsNjkuOTksNDgyLjQxNyw2NCw0NjkuMzMzLDY0SDQyLjY2N2MtMTMuMDgzLDAtMjUuMjkyLDUuOTktMzMuNDc5LDE2LjQzOEM1LjY0Niw4NC45NTgsNi4zMTMsOTEuNDU4LDEwLjY4OCw5NS4xNTZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik01MDUuODEzLDEyNy40MDZjLTMuNzgxLTEuNzYtOC4yMjktMS4xNDYtMTEuMzc1LDEuNTQyQzQxNi41MSwxOTUuMDEsMzE3LjA1MiwyNzkuNjg4LDI4NS43NiwzMDcuODg1ICAgICBjLTE3LjU2MywxNS44NTQtNDEuOTM4LDE1Ljg1NC01OS41NDItMC4wMjFjLTMzLjM1NC0zMC4wNTItMTQ1LjA0Mi0xMjUtMjA4LjY1Ni0xNzguOTE3Yy0zLjE2Ny0yLjY4OC03LjYyNS0zLjI4MS0xMS4zNzUtMS41NDIgICAgIEMyLjQxNywxMjkuMTU2LDAsMTMyLjkyNywwLDEzNy4wODN2MjY4LjI1QzAsNDI4Ljg2NSwxOS4xMzUsNDQ4LDQyLjY2Nyw0NDhoNDI2LjY2N0M0OTIuODY1LDQ0OCw1MTIsNDI4Ljg2NSw1MTIsNDA1LjMzMyAgICAgdi0yNjguMjVDNTEyLDEzMi45MjcsNTA5LjU4MywxMjkuMTQ2LDUwNS44MTMsMTI3LjQwNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />` :
                        `<img height="19px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTEwLjY4OCw5NS4xNTZDODAuOTU4LDE1NC42NjcsMjA0LjI2LDI1OS4zNjUsMjQwLjUsMjkyLjAxYzQuODY1LDQuNDA2LDEwLjA4Myw2LjY0NiwxNS41LDYuNjQ2ICAgICBjNS40MDYsMCwxMC42MTUtMi4yMTksMTUuNDY5LTYuNjA0YzM2LjI3MS0zMi42NzcsMTU5LjU3My0xMzcuMzg1LDIyOS44NDQtMTk2Ljg5NmM0LjM3NS0zLjY5OCw1LjA0Mi0xMC4xOTgsMS41LTE0LjcxOSAgICAgQzQ5NC42MjUsNjkuOTksNDgyLjQxNyw2NCw0NjkuMzMzLDY0SDQyLjY2N2MtMTMuMDgzLDAtMjUuMjkyLDUuOTktMzMuNDc5LDE2LjQzOEM1LjY0Niw4NC45NTgsNi4zMTMsOTEuNDU4LDEwLjY4OCw5NS4xNTZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik01MDUuODEzLDEyNy40MDZjLTMuNzgxLTEuNzYtOC4yMjktMS4xNDYtMTEuMzc1LDEuNTQyQzQxNi41MSwxOTUuMDEsMzE3LjA1MiwyNzkuNjg4LDI4NS43NiwzMDcuODg1ICAgICBjLTE3LjU2MywxNS44NTQtNDEuOTM4LDE1Ljg1NC01OS41NDItMC4wMjFjLTMzLjM1NC0zMC4wNTItMTQ1LjA0Mi0xMjUtMjA4LjY1Ni0xNzguOTE3Yy0zLjE2Ny0yLjY4OC03LjYyNS0zLjI4MS0xMS4zNzUtMS41NDIgICAgIEMyLjQxNywxMjkuMTU2LDAsMTMyLjkyNywwLDEzNy4wODN2MjY4LjI1QzAsNDI4Ljg2NSwxOS4xMzUsNDQ4LDQyLjY2Nyw0NDhoNDI2LjY2N0M0OTIuODY1LDQ0OCw1MTIsNDI4Ljg2NSw1MTIsNDA1LjMzMyAgICAgdi0yNjguMjVDNTEyLDEzMi45MjcsNTA5LjU4MywxMjkuMTQ2LDUwNS44MTMsMTI3LjQwNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />`}
                       <p style="font-family: Calibri;font-size: 19px;margin:2px 5px;color:${helper.selectedCVColor === '#FFFFFF' ? '#737373' : '#fff'}">${helper.userEmail}</p>
                    </div>
                    <div style="display: flex;align-items: center">
                       ${helper.selectedCVColor === '#FFFFFF' ? `<img height="19px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBDMTUzLjc1NSwwLDcwLjU3Myw4My4xODIsNzAuNTczLDE4NS40MjZjMCwxMjYuODg4LDE2NS45MzksMzEzLjE2NywxNzMuMDA0LDMyMS4wMzUgICAgYzYuNjM2LDcuMzkxLDE4LjIyMiw3LjM3OCwyNC44NDYsMGM3LjA2NS03Ljg2OCwxNzMuMDA0LTE5NC4xNDcsMTczLjAwNC0zMjEuMDM1QzQ0MS40MjUsODMuMTgyLDM1OC4yNDQsMCwyNTYsMHogTTI1NiwyNzguNzE5ICAgIGMtNTEuNDQyLDAtOTMuMjkyLTQxLjg1MS05My4yOTItOTMuMjkzUzIwNC41NTksOTIuMTM0LDI1Niw5Mi4xMzRzOTMuMjkxLDQxLjg1MSw5My4yOTEsOTMuMjkzUzMwNy40NDEsMjc4LjcxOSwyNTYsMjc4LjcxOXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` :
                        `<img height="19px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBDMTUzLjc1NSwwLDcwLjU3Myw4My4xODIsNzAuNTczLDE4NS40MjZjMCwxMjYuODg4LDE2NS45MzksMzEzLjE2NywxNzMuMDA0LDMyMS4wMzUgICAgYzYuNjM2LDcuMzkxLDE4LjIyMiw3LjM3OCwyNC44NDYsMGM3LjA2NS03Ljg2OCwxNzMuMDA0LTE5NC4xNDcsMTczLjAwNC0zMjEuMDM1QzQ0MS40MjUsODMuMTgyLDM1OC4yNDQsMCwyNTYsMHogTTI1NiwyNzguNzE5ICAgIGMtNTEuNDQyLDAtOTMuMjkyLTQxLjg1MS05My4yOTItOTMuMjkzUzIwNC41NTksOTIuMTM0LDI1Niw5Mi4xMzRzOTMuMjkxLDQxLjg1MSw5My4yOTEsOTMuMjkzUzMwNy40NDEsMjc4LjcxOSwyNTYsMjc4LjcxOXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />`}
                       <p style="font-family: Calibri;font-size: 19px;margin:2px 5px;color:${helper.selectedCVColor === '#FFFFFF' ? '#737373' : '#fff'}">${helper.userCity}</p>
                    </div>
               </div>
           </div>

           <div style="width: 35%;min-height: 200px">
               <div style="width: 180px;height: 190px;background-color: ${helper.selectedCVColor === '#FFFFFF' ? '#12A3D0' : '#fff'};border-radius: 0 0 100px 100px;display: flex;align-items: flex-end">
                   <div style="width: 180px;height: 180px;border-radius: 100px;background: url(${helper.userPhoto.uri}) no-repeat center;background-size: cover"></div>
               </div>
           </div>
        </div>

        <p style="text-align: center;padding-bottom: 7px;color:${helper.selectedCVColor === '#FFFFFF' ? '#12A3D0' : '#fff'};font-family: Calibri;font-size: 35px;margin:0;border-bottom: 3px solid ${helper.selectedCVColor === '#FFFFFF' ? '#12A3D0' : '#fff'}">${helper.userJob}</p>



        <div style="width: 100%;display: flex">
            <div style="width: 50%" align="center">
                <div style="margin-bottom: 25px;padding:0 20px 0 20px">
                    <div style="position: relative;margin:15px 0 5px 0;padding-top: 32px">
                        ${helper.selectedCVColor === '#FFFFFF' ? `<img height="40px" style="position: absolute;top:0;left:157px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTUwMS45OTEgMTI4LjM1NC0yNDEtODUuMDMxYy0zLjIyOS0xLjE0LTYuNzUyLTEuMTQtOS45ODEgMGwtMjQxIDg1LjAzMWMtNS45OTIgMi4xMTQtMTAuMDAyIDcuNzc0LTEwLjAxIDE0LjEyOHMzLjk4OSAxMi4wMjMgOS45NzYgMTQuMTUxbDI0MSA4NS42NzdjMS42MjUuNTc4IDMuMzI1Ljg2NyA1LjAyNC44NjcgMS43IDAgMy4zOTktLjI4OSA1LjAyNC0uODY3bDI0MS04NS42NzdjNS45ODctMi4xMjggOS45ODMtNy43OTcgOS45NzYtMTQuMTUxLS4wMDgtNi4zNTQtNC4wMTgtMTIuMDE0LTEwLjAwOS0xNC4xMjh6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQ3NS45NzMgMzI4LjU3NHYtMTMwLjg0bC0zMCAxMC42NjV2MTIwLjE3NWMtOS4wMzYgNS4yMDEtMTUuMTI1IDE0Ljk0Ni0xNS4xMjUgMjYuMTIxIDAgMTEuMTc0IDYuMDg5IDIwLjkyIDE1LjEyNSAyNi4xMjF2NzMuNzE2YzAgOC4yODQgNi43MTYgMTUgMTUgMTVzMTUtNi43MTYgMTUtMTV2LTczLjcxNWM5LjAzNi01LjIgMTUuMTI1LTE0Ljk0NyAxNS4xMjUtMjYuMTIxIDAtMTEuMTc1LTYuMDg4LTIwLjkyMS0xNS4xMjUtMjYuMTIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0yNTYgMjczLjE3N2MtNS4xNDkgMC0xMC4yMi0uODc1LTE1LjA3My0yLjZsLTEzNS40ODMtNDguMTY1djY2LjAwOGMwIDE2LjE0OSAxNi44NDcgMjkuODA2IDUwLjA3MyA0MC41OSAyOC45NjEgOS40IDY0LjY0NyAxNC41NzcgMTAwLjQ4MyAxNC41NzdzNzEuNTIxLTUuMTc3IDEwMC40ODMtMTQuNTc3YzMzLjIyNi0xMC43ODQgNTAuMDczLTI0LjQ0MSA1MC4wNzMtNDAuNTl2LTY2LjAwOGwtMTM1LjQ4MiA0OC4xNjVjLTQuODU0IDEuNzI1LTkuOTI1IDIuNi0xNS4wNzQgMi42eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" />` :
                        `<img height="40px" style="position: absolute;top:0;left:157px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTUwMS45OTEgMTI4LjM1NC0yNDEtODUuMDMxYy0zLjIyOS0xLjE0LTYuNzUyLTEuMTQtOS45ODEgMGwtMjQxIDg1LjAzMWMtNS45OTIgMi4xMTQtMTAuMDAyIDcuNzc0LTEwLjAxIDE0LjEyOHMzLjk4OSAxMi4wMjMgOS45NzYgMTQuMTUxbDI0MSA4NS42NzdjMS42MjUuNTc4IDMuMzI1Ljg2NyA1LjAyNC44NjcgMS43IDAgMy4zOTktLjI4OSA1LjAyNC0uODY3bDI0MS04NS42NzdjNS45ODctMi4xMjggOS45ODMtNy43OTcgOS45NzYtMTQuMTUxLS4wMDgtNi4zNTQtNC4wMTgtMTIuMDE0LTEwLjAwOS0xNC4xMjh6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQ3NS45NzMgMzI4LjU3NHYtMTMwLjg0bC0zMCAxMC42NjV2MTIwLjE3NWMtOS4wMzYgNS4yMDEtMTUuMTI1IDE0Ljk0Ni0xNS4xMjUgMjYuMTIxIDAgMTEuMTc0IDYuMDg5IDIwLjkyIDE1LjEyNSAyNi4xMjF2NzMuNzE2YzAgOC4yODQgNi43MTYgMTUgMTUgMTVzMTUtNi43MTYgMTUtMTV2LTczLjcxNWM5LjAzNi01LjIgMTUuMTI1LTE0Ljk0NyAxNS4xMjUtMjYuMTIxIDAtMTEuMTc1LTYuMDg4LTIwLjkyMS0xNS4xMjUtMjYuMTIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0yNTYgMjczLjE3N2MtNS4xNDkgMC0xMC4yMi0uODc1LTE1LjA3My0yLjZsLTEzNS40ODMtNDguMTY1djY2LjAwOGMwIDE2LjE0OSAxNi44NDcgMjkuODA2IDUwLjA3MyA0MC41OSAyOC45NjEgOS40IDY0LjY0NyAxNC41NzcgMTAwLjQ4MyAxNC41NzdzNzEuNTIxLTUuMTc3IDEwMC40ODMtMTQuNTc3YzMzLjIyNi0xMC43ODQgNTAuMDczLTI0LjQ0MSA1MC4wNzMtNDAuNTl2LTY2LjAwOGwtMTM1LjQ4MiA0OC4xNjVjLTQuODU0IDEuNzI1LTkuOTI1IDIuNi0xNS4wNzQgMi42eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" />`}                      
                        <p style="font-family: Calibri;font-size: 25px;color:${helper.selectedCVColor === '#FFFFFF' ? '#12A3D0' : '#fff'};margin:0">Eğitim</p>
                    </div>
                    <div>
                       <p style="font-family: Calibri;font-size: 19px;margin: 2px;color:${helper.selectedCVColor === '#FFFFFF' ? '#505050' : '#fff'}">Gaziantep Üniversitesi</p>
                       <p style="font-family: Calibri;font-size: 17px;margin: 2px;color:${helper.selectedCVColor === '#FFFFFF' ? '#646464' : '#fff'}">Fen Edebiyat Fakültesi/Biyoloji Bölümü</p>
                       <p style="font-family: Calibri;font-size: 17px;margin: 2px;color:${helper.selectedCVColor === '#FFFFFF' ? '#646464' : '#fff'}">09.2013-05.2020</p>
                    </div>
                </div>

                <div style="margin-bottom: 25px;padding:0 20px 0 20px">
                    <div style="position: relative;margin:15px 0 5px 0;padding-top: 35px">
                        ${helper.selectedCVColor === '#FFFFFF' ? `<img height="40px" style="position: absolute;top:0;left:157px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDY1Ljk4NyA0NjUuOTg3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjUuOTg3IDQ2NS45ODc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzcyLjczNSwyMzYuNTQ3Yy0yLjY1MS0zLjUzNS03LjY2NS00LjI1MS0xMS4yLTEuNmMtMS42OTgsMS4yNzQtMi44MjEsMy4xNy0zLjEyLDUuMjcybC00LjQ0LDMxLjEyICAgIGMtMC4xMDcsMC40LTAuMjQ3LDAuNzktMC40MTYsMS4xNjhjOC4xNTktMTAuODM0LDE0Ljc0NC0yMi43NjksMTkuNTYtMzUuNDQ4TDM3Mi43MzUsMjM2LjU0N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTM0Ni4wNDcsMjc4LjIwM2MtMC4zNzcsMC0wLjc1NC0wLjAyNC0xLjEyOC0wLjA3MmwtNDcuNTItNi43OTJjLTQuMzc0LTAuNjI3LTcuNDExLTQuNjgtNi43ODQtOS4wNTQgICAgYzAtMC4wMDEsMC0wLjAwMSwwLTAuMDAybDQuNDQtMzEuMTJjMC42MTktNC4zNzUtMi40MjUtOC40MjMtNi44LTkuMDQyYy0yLjA5My0wLjI5Ni00LjIxOSwwLjI0OC01LjkxMiwxLjUxNGwtMjUuMTUyLDE4Ljg1NiAgICBjLTMuNTM1LDIuNjUxLTguNTQ5LDEuOTM1LTExLjItMS42djBsLTI4LjgtMzguNGMtMi42NTEtMy41MzUtMS45MzUtOC41NDksMS42LTExLjJsMjUuMTQ0LTE4Ljg1NiAgICBjMy41MzUtMi42NTEsNC4yNTEtNy42NjUsMS42LTExLjJjLTEuMjc0LTEuNjk4LTMuMTctMi44MjEtNS4yNzItMy4xMmwtMzEuMTItNC40NDhjLTQuMzc0LTAuNjIyLTcuNDE2LTQuNjczLTYuNzkzLTkuMDQ3ICAgIGMwLTAuMDAzLDAuMDAxLTAuMDA2LDAuMDAxLTAuMDA5bDYuNzkyLTQ3LjUxMmMwLjYyMi00LjM3NCw0LjY3My03LjQxNiw5LjA0Ny02Ljc5M2MwLjAwMywwLDAuMDA2LDAuMDAxLDAuMDA5LDAuMDAxbDMxLjEyLDQuNDQ4ICAgIGMzLjIwMSwwLjQ2NCw2LjM2NC0xLjA1OCw4LTMuODQ4YzEuNjk5LTIuNzczLDEuNTA4LTYuMzA3LTAuNDgtOC44OGwtMTguODQtMjUuMTM2Yy0yLjY1MS0zLjUzNS0xLjkzNS04LjU0OSwxLjYtMTEuMmw0LjUzNi0zLjQgICAgYy03LjM0OC0wLjM1NS0xNC43MTMtMC4xNTgtMjIuMDMyLDAuNTkyQzE0My4wODcsNTEuOTA1LDg2LjM0NywxMjMuMjc0LDk1LjM2OSwyMDIuMjljNC45MTUsNDMuMDQ1LDI4Ljk0OSw4MS41ODksNjUuNDM4LDEwNC45NDUgICAgYzEzLjMyMiw4LjI2LDIxLjUwNCwyMi43NSwyMS42OTYsMzguNDI0djMyLjMyOGMwLDEzLjI1NSwxMC43NDUsMjQsMjQsMjRoNjRjMTMuMjU1LDAsMjQtMTAuNzQ1LDI0LTI0di0zMS42NjQgICAgYzAuMjAzLTE2LjA0Miw4LjU1My0zMC44NzgsMjIuMTYtMzkuMzc2YzEyLjYxMi04LjE4MiwyMy44NzUtMTguMjc2LDMzLjM4NC0yOS45MiAgICBDMzQ4Ljg0MSwyNzcuNzY2LDM0Ny40NjEsMjc4LjE3MiwzNDYuMDQ3LDI3OC4yMDN6IE0yNDYuNTAzLDM3Ny45ODdoLTE2di0yNGgxNlYzNzcuOTg3eiBNMjMwLjUwMywzMzcuOTg3ICAgIGMtMC4wMDUtMjEuMTUyLTEzLjA0OC00MC4xMTItMzIuOC00Ny42OGMtNTcuNjA5LTIyLjUyNi04Ni4wNDktODcuNDg3LTYzLjUyMy0xNDUuMDk2YzguNzIyLTIyLjMwNywyNC4zNjYtNDEuMjMsNDQuNjM1LTUzLjk5MiAgICBsOC40ODgsMTMuNTM2Yy00NC44NzUsMjguMjM3LTU4LjM2Miw4Ny41MDUtMzAuMTI1LDEzMi4zOGMxMC45NCwxNy4zODYsMjcuMTY5LDMwLjgwNSw0Ni4zMDEsMzguMjg0ICAgIGMyNS45MjgsOS45MTcsNDMuMDQ0LDM0LjgwOCw0My4wMjQsNjIuNTY4SDIzMC41MDN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMDYuNTAzLDQ0MS45ODd2OGMwLDguODM3LDcuMTYzLDE2LDE2LDE2aDMyYzguODM3LDAsMTYtNy4xNjMsMTYtMTZ2LThIMjA2LjUwM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTE1Ni40ODcsMzEzLjk4N2MtNC43NC0zLjA3My05LjMwNS02LjQwOS0xMy42NzItOS45OTJjLTEyLjA3NywyMy41MS00MC45MjUsMzIuNzc4LTY0LjQzNSwyMC43MDIgICAgYy0xNi4wMDItOC4yMi0yNi4wNDItMjQuNzItMjUuOTg5LTQyLjcxYzAuMDM3LTI0LjE4NywxOC4wNS00NC41NzUsNDIuMDQ4LTQ3LjU5MmMtMi45MzYtOC44My01LjA1Ny0xNy45MTEtNi4zMzYtMjcuMTI4ICAgIGwtMS40LDYuNjU2Yy0xLjgxOCw4LjY0Ny0xMC4zMDMsMTQuMTgzLTE4Ljk1LDEyLjM2NWMtMi4wNzEtMC40MzUtNC4wMzUtMS4yNzctNS43NzgtMi40NzdsLTE2LjY0LTExLjQyNGwtMTQuNTc2LDE0LjU0NCAgICBsMTEuNDU2LDE2LjY1NmM1LjAxNCw3LjI3NiwzLjE4LDE3LjI0LTQuMDk2LDIyLjI1NGMtMS43NDUsMS4yMDItMy43MTEsMi4wNDYtNS43ODQsMi40ODJsLTE5Ljk0NCw0LjJ2MTkuMDA4bDE5Ljk0NCw0LjIgICAgYzguNjQ3LDEuODIxLDE0LjE4MSwxMC4zMDcsMTIuMzYsMTguOTU0Yy0wLjQzNywyLjA3Ni0xLjI4Myw0LjA0NC0yLjQ4OCw1Ljc5bC0xMS40NDgsMTYuNTY4bDE0LjU3NiwxNC41NDRsMTYuNjI0LTExLjQ1NiAgICBjNy4yNzYtNS4wMTQsMTcuMjQtMy4xOCwyMi4yNTQsNC4wOTZjMS4yMDIsMS43NDUsMi4wNDYsMy43MTEsMi40ODIsNS43ODRsNC4xOTIsMTkuOTc2aDE5LjAxNmw0LjE5Mi0xOS45NDQgICAgYzEuODItOC42NDcsMTAuMzA1LTE0LjE4MiwxOC45NTItMTIuMzYyYzIuMDczLDAuNDM2LDQuMDM5LDEuMjgsNS43ODQsMi40ODJsMTYuNjE2LDExLjQyNGwxNy4xNi0xNy4xNiAgICBDMTY5LjczLDMyNS45NzEsMTY0LjA0LDMxOC43NTYsMTU2LjQ4NywzMTMuOTg3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PGc+Cgk8Zz4KCQk8cmVjdCB4PSIyMDYuNTAzIiB5PSI0MDkuOTg3IiB3aWR0aD0iNjQiIGhlaWdodD0iMTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQzOC4yNTUsMTM3LjkxNWMtMTMuMTIxLTEuODc2LTIyLjIzNy0xNC4wMzUtMjAuMzYxLTI3LjE1NmMwLjkwMS02LjMwMSw0LjI2OC0xMS45ODYsOS4zNjEtMTUuODA0bDE4Ljc0NC0xNC4wNjQgICAgbC0xOS4yLTI1LjZsLTE4Ljc0NCwxNC4wNTZjLTEwLjYwMiw3Ljk1Ni0yNS42NDYsNS44MS0zMy42MDEtNC43OTFjLTMuODE1LTUuMDg0LTUuNDU4LTExLjQ3NS00LjU2Ny0xNy43NjlsMy4zMTItMjMuMiAgICBsLTMxLjY3Mi00LjUybC0zLjMxMiwyMy4yYy0xLjg3NywxMy4xMjEtMTQuMDM1LDIyLjIzNy0yNy4xNTYsMjAuMzYxYy02LjMwMS0wLjkwMS0xMS45ODYtNC4yNjgtMTUuODA0LTkuMzYxbC0xNC4wNjQtMTguNzc2ICAgIGwtMjUuNiwxOS4ybDE0LjA1NiwxOC43NDRjNy45NTQsMTAuNjAzLDUuODA3LDI1LjY0Ni00Ljc5NiwzMy42MDFjLTUuMDk1LDMuODIyLTExLjQ5OSw1LjQ2Mi0xNy44MDQsNC41NTlsLTIzLjItMy4zMTIgICAgbC00LjU0NCwzMS42OGwyMy4yLDMuMzEyYzEzLjEyMSwxLjg3NywyMi4yMzcsMTQuMDM1LDIwLjM2MSwyNy4xNTZjLTAuOTAxLDYuMzAxLTQuMjY4LDExLjk4Ni05LjM2MSwxNS44MDRsLTE4LjczNiwxNC4wNjQgICAgbDE5LjIsMjUuNmwxOC43NDQtMTQuMDU2YzEwLjYwMy03Ljk1NCwyNS42NDYtNS44MDcsMzMuNjAxLDQuNzk2YzMuODIyLDUuMDk1LDUuNDYyLDExLjUsNC41NTksMTcuODA0bC0zLjMxMiwyMy4ybDMxLjc0NCw0LjU0NCAgICBsMy4zMTItMjMuMmMxLjg3Ny0xMy4xMjEsMTQuMDM1LTIyLjIzNywyNy4xNTYtMjAuMzYxYzYuMzAxLDAuOTAxLDExLjk4Niw0LjI2OCwxNS44MDQsOS4zNjFsMTQuMDY0LDE4LjczNmwyNS42LTE5LjIgICAgbC0xNC4xMDQtMTguNzc2Yy03Ljk1MS0xMC42MDUtNS44LTI1LjY0OCw0LjgwNS0zMy41OTljNS4wODQtMy44MTIsMTEuNDcyLTUuNDUyLDE3Ljc2My00LjU2MWwyMy4yLDMuMzEybDQuNTItMzEuNjcyICAgIEw0MzguMjU1LDEzNy45MTV6IE0zNDAuMzkxLDE4OC4wOTljLTI2LjUxLDAtNDgtMjEuNDktNDgtNDhzMjEuNDktNDgsNDgtNDhjMjYuNTEsMCw0OCwyMS40OSw0OCw0OCAgICBDMzg4LjM2LDE2Ni41OTYsMzY2Ljg4OCwxODguMDY4LDM0MC4zOTEsMTg4LjA5OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHJlY3QgeD0iMzkwLjUwMyIgeT0iMjk3Ljk4NyIgd2lkdGg9IjU2IiBoZWlnaHQ9IjE2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3JlY3Q+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxyZWN0IHg9IjM5OC41MDQiIHk9IjMzNC43NSIgdHJhbnNmb3JtPSJtYXRyaXgoMC42NDAxIC0wLjc2ODMgMC43NjgzIDAuNjQwMSAtMTM0Ljg4NzYgNDQ0LjAyNTQpIiB3aWR0aD0iMTYiIGhlaWdodD0iNjIuNDgiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHJlY3QgeD0iMzQyLjUwMyIgeT0iMzYxLjk4NyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjU2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3JlY3Q+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxyZWN0IHg9IjUuNTE5IiB5PSIxMjkuOTg3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk3MDEgLTAuMjQyNSAwLjI0MjUgMC45NzAxIC0zMi4zMTU1IDEzLjQ1NzcpIiB3aWR0aD0iNjUuOTY4IiBoZWlnaHQ9IjE1Ljk5MiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9yZWN0PgoJPC9nPgo8L2c+PGc+Cgk8Zz4KCQk8cmVjdCB4PSI0Mi41MDIiIHk9IjM1LjU4NSIgdHJhbnNmb3JtPSJtYXRyaXgoMC41ODEyIC0wLjgxMzcgMC44MTM3IDAuNTgxMiAtMzUuODA4OCA3MC40MDIxKSIgd2lkdGg9IjE1Ljk5MiIgaGVpZ2h0PSI2OC44MTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHJlY3QgeD0iOTQuMzI5IiB5PSIwLjk1MiIgdHJhbnNmb3JtPSJtYXRyaXgoMC45Njg4IC0wLjI0NzcgMC4yNDc3IDAuOTY4OCAtNS4yMjc3IDI2LjQwMSkiIHdpZHRoPSIxNiIgaGVpZ2h0PSI2Ni4wNTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` :
                        `<img height="40px" style="position: absolute;top:0;left:157px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDY1Ljk4NyA0NjUuOTg3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjUuOTg3IDQ2NS45ODc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzcyLjczNSwyMzYuNTQ3Yy0yLjY1MS0zLjUzNS03LjY2NS00LjI1MS0xMS4yLTEuNmMtMS42OTgsMS4yNzQtMi44MjEsMy4xNy0zLjEyLDUuMjcybC00LjQ0LDMxLjEyICAgIGMtMC4xMDcsMC40LTAuMjQ3LDAuNzktMC40MTYsMS4xNjhjOC4xNTktMTAuODM0LDE0Ljc0NC0yMi43NjksMTkuNTYtMzUuNDQ4TDM3Mi43MzUsMjM2LjU0N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTM0Ni4wNDcsMjc4LjIwM2MtMC4zNzcsMC0wLjc1NC0wLjAyNC0xLjEyOC0wLjA3MmwtNDcuNTItNi43OTJjLTQuMzc0LTAuNjI3LTcuNDExLTQuNjgtNi43ODQtOS4wNTQgICAgYzAtMC4wMDEsMC0wLjAwMSwwLTAuMDAybDQuNDQtMzEuMTJjMC42MTktNC4zNzUtMi40MjUtOC40MjMtNi44LTkuMDQyYy0yLjA5My0wLjI5Ni00LjIxOSwwLjI0OC01LjkxMiwxLjUxNGwtMjUuMTUyLDE4Ljg1NiAgICBjLTMuNTM1LDIuNjUxLTguNTQ5LDEuOTM1LTExLjItMS42djBsLTI4LjgtMzguNGMtMi42NTEtMy41MzUtMS45MzUtOC41NDksMS42LTExLjJsMjUuMTQ0LTE4Ljg1NiAgICBjMy41MzUtMi42NTEsNC4yNTEtNy42NjUsMS42LTExLjJjLTEuMjc0LTEuNjk4LTMuMTctMi44MjEtNS4yNzItMy4xMmwtMzEuMTItNC40NDhjLTQuMzc0LTAuNjIyLTcuNDE2LTQuNjczLTYuNzkzLTkuMDQ3ICAgIGMwLTAuMDAzLDAuMDAxLTAuMDA2LDAuMDAxLTAuMDA5bDYuNzkyLTQ3LjUxMmMwLjYyMi00LjM3NCw0LjY3My03LjQxNiw5LjA0Ny02Ljc5M2MwLjAwMywwLDAuMDA2LDAuMDAxLDAuMDA5LDAuMDAxbDMxLjEyLDQuNDQ4ICAgIGMzLjIwMSwwLjQ2NCw2LjM2NC0xLjA1OCw4LTMuODQ4YzEuNjk5LTIuNzczLDEuNTA4LTYuMzA3LTAuNDgtOC44OGwtMTguODQtMjUuMTM2Yy0yLjY1MS0zLjUzNS0xLjkzNS04LjU0OSwxLjYtMTEuMmw0LjUzNi0zLjQgICAgYy03LjM0OC0wLjM1NS0xNC43MTMtMC4xNTgtMjIuMDMyLDAuNTkyQzE0My4wODcsNTEuOTA1LDg2LjM0NywxMjMuMjc0LDk1LjM2OSwyMDIuMjljNC45MTUsNDMuMDQ1LDI4Ljk0OSw4MS41ODksNjUuNDM4LDEwNC45NDUgICAgYzEzLjMyMiw4LjI2LDIxLjUwNCwyMi43NSwyMS42OTYsMzguNDI0djMyLjMyOGMwLDEzLjI1NSwxMC43NDUsMjQsMjQsMjRoNjRjMTMuMjU1LDAsMjQtMTAuNzQ1LDI0LTI0di0zMS42NjQgICAgYzAuMjAzLTE2LjA0Miw4LjU1My0zMC44NzgsMjIuMTYtMzkuMzc2YzEyLjYxMi04LjE4MiwyMy44NzUtMTguMjc2LDMzLjM4NC0yOS45MiAgICBDMzQ4Ljg0MSwyNzcuNzY2LDM0Ny40NjEsMjc4LjE3MiwzNDYuMDQ3LDI3OC4yMDN6IE0yNDYuNTAzLDM3Ny45ODdoLTE2di0yNGgxNlYzNzcuOTg3eiBNMjMwLjUwMywzMzcuOTg3ICAgIGMtMC4wMDUtMjEuMTUyLTEzLjA0OC00MC4xMTItMzIuOC00Ny42OGMtNTcuNjA5LTIyLjUyNi04Ni4wNDktODcuNDg3LTYzLjUyMy0xNDUuMDk2YzguNzIyLTIyLjMwNywyNC4zNjYtNDEuMjMsNDQuNjM1LTUzLjk5MiAgICBsOC40ODgsMTMuNTM2Yy00NC44NzUsMjguMjM3LTU4LjM2Miw4Ny41MDUtMzAuMTI1LDEzMi4zOGMxMC45NCwxNy4zODYsMjcuMTY5LDMwLjgwNSw0Ni4zMDEsMzguMjg0ICAgIGMyNS45MjgsOS45MTcsNDMuMDQ0LDM0LjgwOCw0My4wMjQsNjIuNTY4SDIzMC41MDN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMDYuNTAzLDQ0MS45ODd2OGMwLDguODM3LDcuMTYzLDE2LDE2LDE2aDMyYzguODM3LDAsMTYtNy4xNjMsMTYtMTZ2LThIMjA2LjUwM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTE1Ni40ODcsMzEzLjk4N2MtNC43NC0zLjA3My05LjMwNS02LjQwOS0xMy42NzItOS45OTJjLTEyLjA3NywyMy41MS00MC45MjUsMzIuNzc4LTY0LjQzNSwyMC43MDIgICAgYy0xNi4wMDItOC4yMi0yNi4wNDItMjQuNzItMjUuOTg5LTQyLjcxYzAuMDM3LTI0LjE4NywxOC4wNS00NC41NzUsNDIuMDQ4LTQ3LjU5MmMtMi45MzYtOC44My01LjA1Ny0xNy45MTEtNi4zMzYtMjcuMTI4ICAgIGwtMS40LDYuNjU2Yy0xLjgxOCw4LjY0Ny0xMC4zMDMsMTQuMTgzLTE4Ljk1LDEyLjM2NWMtMi4wNzEtMC40MzUtNC4wMzUtMS4yNzctNS43NzgtMi40NzdsLTE2LjY0LTExLjQyNGwtMTQuNTc2LDE0LjU0NCAgICBsMTEuNDU2LDE2LjY1NmM1LjAxNCw3LjI3NiwzLjE4LDE3LjI0LTQuMDk2LDIyLjI1NGMtMS43NDUsMS4yMDItMy43MTEsMi4wNDYtNS43ODQsMi40ODJsLTE5Ljk0NCw0LjJ2MTkuMDA4bDE5Ljk0NCw0LjIgICAgYzguNjQ3LDEuODIxLDE0LjE4MSwxMC4zMDcsMTIuMzYsMTguOTU0Yy0wLjQzNywyLjA3Ni0xLjI4Myw0LjA0NC0yLjQ4OCw1Ljc5bC0xMS40NDgsMTYuNTY4bDE0LjU3NiwxNC41NDRsMTYuNjI0LTExLjQ1NiAgICBjNy4yNzYtNS4wMTQsMTcuMjQtMy4xOCwyMi4yNTQsNC4wOTZjMS4yMDIsMS43NDUsMi4wNDYsMy43MTEsMi40ODIsNS43ODRsNC4xOTIsMTkuOTc2aDE5LjAxNmw0LjE5Mi0xOS45NDQgICAgYzEuODItOC42NDcsMTAuMzA1LTE0LjE4MiwxOC45NTItMTIuMzYyYzIuMDczLDAuNDM2LDQuMDM5LDEuMjgsNS43ODQsMi40ODJsMTYuNjE2LDExLjQyNGwxNy4xNi0xNy4xNiAgICBDMTY5LjczLDMyNS45NzEsMTY0LjA0LDMxOC43NTYsMTU2LjQ4NywzMTMuOTg3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PGc+Cgk8Zz4KCQk8cmVjdCB4PSIyMDYuNTAzIiB5PSI0MDkuOTg3IiB3aWR0aD0iNjQiIGhlaWdodD0iMTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQzOC4yNTUsMTM3LjkxNWMtMTMuMTIxLTEuODc2LTIyLjIzNy0xNC4wMzUtMjAuMzYxLTI3LjE1NmMwLjkwMS02LjMwMSw0LjI2OC0xMS45ODYsOS4zNjEtMTUuODA0bDE4Ljc0NC0xNC4wNjQgICAgbC0xOS4yLTI1LjZsLTE4Ljc0NCwxNC4wNTZjLTEwLjYwMiw3Ljk1Ni0yNS42NDYsNS44MS0zMy42MDEtNC43OTFjLTMuODE1LTUuMDg0LTUuNDU4LTExLjQ3NS00LjU2Ny0xNy43NjlsMy4zMTItMjMuMiAgICBsLTMxLjY3Mi00LjUybC0zLjMxMiwyMy4yYy0xLjg3NywxMy4xMjEtMTQuMDM1LDIyLjIzNy0yNy4xNTYsMjAuMzYxYy02LjMwMS0wLjkwMS0xMS45ODYtNC4yNjgtMTUuODA0LTkuMzYxbC0xNC4wNjQtMTguNzc2ICAgIGwtMjUuNiwxOS4ybDE0LjA1NiwxOC43NDRjNy45NTQsMTAuNjAzLDUuODA3LDI1LjY0Ni00Ljc5NiwzMy42MDFjLTUuMDk1LDMuODIyLTExLjQ5OSw1LjQ2Mi0xNy44MDQsNC41NTlsLTIzLjItMy4zMTIgICAgbC00LjU0NCwzMS42OGwyMy4yLDMuMzEyYzEzLjEyMSwxLjg3NywyMi4yMzcsMTQuMDM1LDIwLjM2MSwyNy4xNTZjLTAuOTAxLDYuMzAxLTQuMjY4LDExLjk4Ni05LjM2MSwxNS44MDRsLTE4LjczNiwxNC4wNjQgICAgbDE5LjIsMjUuNmwxOC43NDQtMTQuMDU2YzEwLjYwMy03Ljk1NCwyNS42NDYtNS44MDcsMzMuNjAxLDQuNzk2YzMuODIyLDUuMDk1LDUuNDYyLDExLjUsNC41NTksMTcuODA0bC0zLjMxMiwyMy4ybDMxLjc0NCw0LjU0NCAgICBsMy4zMTItMjMuMmMxLjg3Ny0xMy4xMjEsMTQuMDM1LTIyLjIzNywyNy4xNTYtMjAuMzYxYzYuMzAxLDAuOTAxLDExLjk4Niw0LjI2OCwxNS44MDQsOS4zNjFsMTQuMDY0LDE4LjczNmwyNS42LTE5LjIgICAgbC0xNC4xMDQtMTguNzc2Yy03Ljk1MS0xMC42MDUtNS44LTI1LjY0OCw0LjgwNS0zMy41OTljNS4wODQtMy44MTIsMTEuNDcyLTUuNDUyLDE3Ljc2My00LjU2MWwyMy4yLDMuMzEybDQuNTItMzEuNjcyICAgIEw0MzguMjU1LDEzNy45MTV6IE0zNDAuMzkxLDE4OC4wOTljLTI2LjUxLDAtNDgtMjEuNDktNDgtNDhzMjEuNDktNDgsNDgtNDhjMjYuNTEsMCw0OCwyMS40OSw0OCw0OCAgICBDMzg4LjM2LDE2Ni41OTYsMzY2Ljg4OCwxODguMDY4LDM0MC4zOTEsMTg4LjA5OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHJlY3QgeD0iMzkwLjUwMyIgeT0iMjk3Ljk4NyIgd2lkdGg9IjU2IiBoZWlnaHQ9IjE2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3JlY3Q+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxyZWN0IHg9IjM5OC41MDQiIHk9IjMzNC43NSIgdHJhbnNmb3JtPSJtYXRyaXgoMC42NDAxIC0wLjc2ODMgMC43NjgzIDAuNjQwMSAtMTM0Ljg4NzYgNDQ0LjAyNTQpIiB3aWR0aD0iMTYiIGhlaWdodD0iNjIuNDgiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHJlY3QgeD0iMzQyLjUwMyIgeT0iMzYxLjk4NyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjU2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3JlY3Q+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxyZWN0IHg9IjUuNTE5IiB5PSIxMjkuOTg3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk3MDEgLTAuMjQyNSAwLjI0MjUgMC45NzAxIC0zMi4zMTU1IDEzLjQ1NzcpIiB3aWR0aD0iNjUuOTY4IiBoZWlnaHQ9IjE1Ljk5MiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9yZWN0PgoJPC9nPgo8L2c+PGc+Cgk8Zz4KCQk8cmVjdCB4PSI0Mi41MDIiIHk9IjM1LjU4NSIgdHJhbnNmb3JtPSJtYXRyaXgoMC41ODEyIC0wLjgxMzcgMC44MTM3IDAuNTgxMiAtMzUuODA4OCA3MC40MDIxKSIgd2lkdGg9IjE1Ljk5MiIgaGVpZ2h0PSI2OC44MTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHJlY3QgeD0iOTQuMzI5IiB5PSIwLjk1MiIgdHJhbnNmb3JtPSJtYXRyaXgoMC45Njg4IC0wLjI0NzcgMC4yNDc3IDAuOTY4OCAtNS4yMjc3IDI2LjQwMSkiIHdpZHRoPSIxNiIgaGVpZ2h0PSI2Ni4wNTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />`}
                        <p style="font-family: Calibri;font-size: 25px;color:${helper.selectedCVColor === '#FFFFFF' ? '#12A3D0' : '#fff'};margin:0">Projeler</p>
                    </div>
                    <p style="font-family: Calibri;font-size: 19px;margin: 2px;color:${helper.selectedCVColor === '#FFFFFF' ? '#505050' : '#fff'}">NotePad</p>
                    <p style="font-family: Calibri;font-size: 17px;margin: 3px 0;color:${helper.selectedCVColor === '#FFFFFF' ? '#646464' : '#fff'}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>
                    <p style="font-family: Calibri;font-size: 17px;margin: 5px 0 2px 0;color:${helper.selectedCVColor === '#FFFFFF' ? '#646464' : '#fff'}"><span style="color:#505050">Araçlar:</span> Vue.js, Firebase, Git, Bootstrap</p>
                    <div style="display: flex;align-items: center;justify-content: center">
                        <img height="16px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />
                        <p style="font-family: Calibri;font-size: 17px;margin: 2px 0 0 5px;color:${helper.selectedCVColor === '#FFFFFF' ? '#646464' : '#fff'}">shokidev-notepad.web.app</p>
                    </div>
                </div>

                <div style="margin-bottom: 25px;padding:0 20px 0 20px">
                    <div style="position: relative;margin:15px 0 5px 0;padding-top: 40px">
                        ${helper.selectedCVColor === '#FFFFFF' ? `<img height="40px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9ImhvdmVyZWQtcGF0aHMiPjxnPjxnPgoJPGc+CgkJPHBvbHlnb24gcG9pbnRzPSIxMzguNzEsMTM3IDEzMi4yOSwxMzcgMTIwLjI5MywxOTcgMTUwLjcwNywxOTcgICAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJob3ZlcmVkLXBhdGggYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BvbHlnb24+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zODEuMzc0LDI1N2M2LjQ3NywxNy4zOTksMTUuMDkyLDMxLjQ4MywyNC42MjYsNDMuNDY3YzkuNTM0LTExLjk4NCwxOS4xNDktMjYuMDY5LDI1LjYyNi00My40NjdIMzgxLjM3NHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJob3ZlcmVkLXBhdGggYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NjcsOTFIMjgwLjcxN2wzOC44NDIsMzExLjY3OWMwLjY4NywxMi43NDgtMi43OTgsMjQuNzUtMTEuMTE4LDM0LjE0NkwyNDIuNjYzLDUxMkg0NjdjMjQuODE0LDAsNDUtMjAuMTg2LDQ1LTQ1VjEzNyAgICBDNTEyLDExMi4xODYsNDkxLjgxNCw5MSw0NjcsOTF6IE00NjcsMjU3aC00LjAwNmMtOC41MzUsMjcuMzgzLTIyLjA3LDQ4LjgxLTM2LjEzNiw2NS43MDIgICAgYzExLjAxOSwxMC4wNzQsMjIuODAyLDE4LjMzOCwzNC41MTcsMjcuNTk0YzYuNDYsNS4xNzEsNy41MTUsMTQuNjA0LDIuMzI5LDIxLjA3OWMtNS4xNjIsNi40NjUtMTQuNjMyLDcuNTEzLTIxLjA3OSwyLjMyOSAgICBjLTEyLjcyOS0xMC4wNDctMjQuNjc3LTE4LjQ1Ny0zNi42MjUtMjkuNDIxYy0xMS45NDgsMTAuOTY0LTIyLjg5NiwxOS4zNzQtMzUuNjI1LDI5LjQyMWMtNi40NDcsNS4xODQtMTUuOTE3LDQuMTM2LTIxLjA3OS0yLjMyOSAgICBjLTUuMTg2LTYuNDc1LTQuMTMxLTE1LjkwOCwyLjMyOS0yMS4wNzljMTEuNzE1LTkuMjU2LDIyLjQ5OC0xNy41MiwzMy41MTctMjcuNTk0Yy0xNC4wNjYtMTYuODkxLTI2LjYwMi0zOC4zMTgtMzUuMTM2LTY1LjcwMiAgICBIMzQ2Yy04LjI5MSwwLTE1LTYuNzA5LTE1LTE1czYuNzA5LTE1LDE1LTE1aDQ1di0xNWMwLTguMjkxLDYuNzA5LTE1LDE1LTE1YzguMjkxLDAsMTUsNi43MDksMTUsMTV2MTVoNDZjOC4yOTEsMCwxNSw2LjcwOSwxNSwxNSAgICBTNDc1LjI5MSwyNTcsNDY3LDI1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJob3ZlcmVkLXBhdGggYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNDQuMTY0LDM5LjQxOUMyNDEuMzY2LDE2Ljk0OCwyMjIuMTYyLDAsMTk5LjUxNiwwSDQ1QzIwLjE4NiwwLDAsMjAuMTg2LDAsNDV2MzMyYzAsMjQuODE0LDIwLjE4Niw0NSw0NSw0NSAgICBjODkuNjcsMCwxNTQuMTc3LDAsMjM2LjU1MSwwYzQuMzc2LTUuMDAyLDguMDQ0LTguMTM0LDguMTk5LTE0LjY2M0MyODkuNzg4LDQwNS43LDI0NC4zNjcsNDEuMDQzLDI0NC4xNjQsMzkuNDE5eiAgICAgTTE4My45NDQsMjg2LjcwN2MtNy45NTQsMS42MzctMTYuMDExLTMuNTI3LTE3LjY1MS0xMS43NjNMMTU2LjcwNiwyMjdoLTQyLjQxMWwtOS41ODcsNDcuOTQ0ICAgIGMtMS42MTEsOC4xMTUtOS40MzQsMTMuNDQ3LTE3LjY1MSwxMS43NjNjLTguMTE1LTEuNjI2LTEzLjM4OS05LjUyMS0xMS43NjMtMTcuNjUxbDI5Ljk5OS0xNTAgICAgQzEwNi42OTksMTEyLjA1NCwxMTIuODUyLDEwNywxMjAsMTA3aDMxYzcuMTQ4LDAsMTMuMzAxLDUuMDU0LDE0LjcwNywxMi4wNTZsMzAsMTUwICAgIEMxOTcuMzMzLDI3Ny4xODYsMTkyLjA2LDI4NS4wODEsMTgzLjk0NCwyODYuNzA3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImhvdmVyZWQtcGF0aCBhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTE3NS4yNjEsNDUybDIuNTc0LDIwLjU4MWMxLjcxNiwxMy43ODMsMTAuODc0LDI3LjgzOCwyNS45MzgsMzQuODU2YzI4LjQyOC0zMS4yOTQsMTEuMjI5LTEyLjM2Miw1MC4zNTktNTUuNDM3SDE3NS4yNjF6ICAgICIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImhvdmVyZWQtcGF0aCBhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` :
                        `<img height="40px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjEzOC43MSwxMzcgMTMyLjI5LDEzNyAxMjAuMjkzLDE5NyAxNTAuNzA3LDE5NyAgICIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wb2x5Z29uPgoJPC9nPgo8L2c+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzgxLjM3NCwyNTdjNi40NzcsMTcuMzk5LDE1LjA5MiwzMS40ODMsMjQuNjI2LDQzLjQ2N2M5LjUzNC0xMS45ODQsMTkuMTQ5LTI2LjA2OSwyNS42MjYtNDMuNDY3SDM4MS4zNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkZGRkZGIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NjcsOTFIMjgwLjcxN2wzOC44NDIsMzExLjY3OWMwLjY4NywxMi43NDgtMi43OTgsMjQuNzUtMTEuMTE4LDM0LjE0NkwyNDIuNjYzLDUxMkg0NjdjMjQuODE0LDAsNDUtMjAuMTg2LDQ1LTQ1VjEzNyAgICBDNTEyLDExMi4xODYsNDkxLjgxNCw5MSw0NjcsOTF6IE00NjcsMjU3aC00LjAwNmMtOC41MzUsMjcuMzgzLTIyLjA3LDQ4LjgxLTM2LjEzNiw2NS43MDIgICAgYzExLjAxOSwxMC4wNzQsMjIuODAyLDE4LjMzOCwzNC41MTcsMjcuNTk0YzYuNDYsNS4xNzEsNy41MTUsMTQuNjA0LDIuMzI5LDIxLjA3OWMtNS4xNjIsNi40NjUtMTQuNjMyLDcuNTEzLTIxLjA3OSwyLjMyOSAgICBjLTEyLjcyOS0xMC4wNDctMjQuNjc3LTE4LjQ1Ny0zNi42MjUtMjkuNDIxYy0xMS45NDgsMTAuOTY0LTIyLjg5NiwxOS4zNzQtMzUuNjI1LDI5LjQyMWMtNi40NDcsNS4xODQtMTUuOTE3LDQuMTM2LTIxLjA3OS0yLjMyOSAgICBjLTUuMTg2LTYuNDc1LTQuMTMxLTE1LjkwOCwyLjMyOS0yMS4wNzljMTEuNzE1LTkuMjU2LDIyLjQ5OC0xNy41MiwzMy41MTctMjcuNTk0Yy0xNC4wNjYtMTYuODkxLTI2LjYwMi0zOC4zMTgtMzUuMTM2LTY1LjcwMiAgICBIMzQ2Yy04LjI5MSwwLTE1LTYuNzA5LTE1LTE1czYuNzA5LTE1LDE1LTE1aDQ1di0xNWMwLTguMjkxLDYuNzA5LTE1LDE1LTE1YzguMjkxLDAsMTUsNi43MDksMTUsMTV2MTVoNDZjOC4yOTEsMCwxNSw2LjcwOSwxNSwxNSAgICBTNDc1LjI5MSwyNTcsNDY3LDI1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRkZGRkYiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTI0NC4xNjQsMzkuNDE5QzI0MS4zNjYsMTYuOTQ4LDIyMi4xNjIsMCwxOTkuNTE2LDBINDVDMjAuMTg2LDAsMCwyMC4xODYsMCw0NXYzMzJjMCwyNC44MTQsMjAuMTg2LDQ1LDQ1LDQ1ICAgIGM4OS42NywwLDE1NC4xNzcsMCwyMzYuNTUxLDBjNC4zNzYtNS4wMDIsOC4wNDQtOC4xMzQsOC4xOTktMTQuNjYzQzI4OS43ODgsNDA1LjcsMjQ0LjM2Nyw0MS4wNDMsMjQ0LjE2NCwzOS40MTl6ICAgICBNMTgzLjk0NCwyODYuNzA3Yy03Ljk1NCwxLjYzNy0xNi4wMTEtMy41MjctMTcuNjUxLTExLjc2M0wxNTYuNzA2LDIyN2gtNDIuNDExbC05LjU4Nyw0Ny45NDQgICAgYy0xLjYxMSw4LjExNS05LjQzNCwxMy40NDctMTcuNjUxLDExLjc2M2MtOC4xMTUtMS42MjYtMTMuMzg5LTkuNTIxLTExLjc2My0xNy42NTFsMjkuOTk5LTE1MCAgICBDMTA2LjY5OSwxMTIuMDU0LDExMi44NTIsMTA3LDEyMCwxMDdoMzFjNy4xNDgsMCwxMy4zMDEsNS4wNTQsMTQuNzA3LDEyLjA1NmwzMCwxNTAgICAgQzE5Ny4zMzMsMjc3LjE4NiwxOTIuMDYsMjg1LjA4MSwxODMuOTQ0LDI4Ni43MDd6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkZGRkZGIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xNzUuMjYxLDQ1MmwyLjU3NCwyMC41ODFjMS43MTYsMTMuNzgzLDEwLjg3NCwyNy44MzgsMjUuOTM4LDM0Ljg1NmMyOC40MjgtMzEuMjk0LDExLjIyOS0xMi4zNjIsNTAuMzU5LTU1LjQzN0gxNzUuMjYxeiAgICAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRkZGRkYiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />`}
                        <p style="font-family: Calibri;font-size: 25px;color:${helper.selectedCVColor === '#FFFFFF' ? '#12A3D0' : '#fff'};margin:0">Bildiği Diller</p>
                    </div>
                    <div style="display: flex;justify-content: center">
                        <div>
                            <p style="text-align:start;margin:2px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#505050' : '#fff'};font-size: 19px">Türkçe</p>
                        </div>
                        <div style="margin-left: 10px">
                            <div style="display: flex;height: 23px;margin:2px;width: 110px;align-items: center;justify-content: space-between">
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                            </div>

                            <div style="display: flex;height: 23px;margin:2px;width: 110px;align-items: center;justify-content: space-between">
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                            </div>

                            <div style="display: flex;height: 23px;margin:2px;width: 110px;align-items: center;justify-content: space-between">
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                            </div>

                            <div style="display: flex;height: 23px;margin:2px;width: 110px;align-items: center;justify-content: space-between">
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                            </div>

                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 25px;padding:0 20px 0 20px">
                    <div style="position: relative;margin:15px 0 5px 0;padding-top: 30px">
                        ${helper.selectedCVColor === '#FFFFFF' ? `<img height="40px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDg4LjQgNDg4LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OC40IDQ4OC40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGNsYXNzPSIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTI0My44LDI0MS4xMTNMMjQzLjgsMjQxLjExM2MwLjEsMCwwLjIsMCwwLjQsMGMwLjEsMCwwLjIsMCwwLjQsMGwwLDBjNjQuMS0wLjcsNTQuOC04Ni4zLDU0LjgtODYuMyAgICBjLTIuNi01Ny4yLTUwLjUtNTYuNy01NS4yLTU2LjVjLTQuNy0wLjItNTIuNS0wLjctNTUuMiw1Ni41QzE4OSwxNTQuOTEzLDE3OS43LDI0MC41MTMsMjQzLjgsMjQxLjExM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMzkzLjgsMjcwLjMxM0wzOTMuOCwyNzAuMzEzYzAuMSwwLDAuMiwwLDAuMywwYzAuMSwwLDAuMiwwLDAuMywwbDAsMGM1MS41LTAuNSw0NC4xLTY5LjQsNDQuMS02OS40ICAgIGMtMi4xLTQ2LTQwLjYtNDUuNi00NC40LTQ1LjVjLTMuOC0wLjItNDIuMy0wLjUtNDQuNCw0NS41QzM0OS43LDIwMS4wMTMsMzQyLjIsMjY5LjgxMywzOTMuOCwyNzAuMzEzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik00ODguMywzNDAuMTEzYy0wLjQtMTQuOC0zLjMtMjUuMS0xOC40LTM0LjZjLTIwLjEtMTIuNi00Mi42LTIzLjUtNDIuNi0yMy41bC0xNy45LDU2LjZsLTEwLjQtMjkuNyAgICBjMTguMy0yNS42LTEuMy0yNi45LTQuOC0yNi45bDAsMGgtMC4xSDM5NGwwLDBjLTMuNSwwLTIzLjEsMS4zLTQuOCwyNi45bC0xMC40LDI5LjZsLTE3LjktNTYuNmMwLDAtNi40LDMuMS0xNS40LDcuOSAgICBjLTIuMS0xLjctNC40LTMuNC03LTVjLTI1LTE1LjctNTIuOS0yOS4zLTUyLjktMjkuM2wtMjIuMiw3MC4zbC0xMy0zNi45YzIyLjgtMzEuOC0xLjYtMzMuNC02LTMzLjVsMCwwaC0wLjFoLTAuMWwwLDAgICAgYy00LjQsMC0yOC44LDEuNi02LDMzLjVsLTEzLDM2LjlsLTIyLjItNzAuM2MwLDAtMjcuOSwxMy42LTUyLjksMjkuM2MtMi43LDEuNy01LDMuNC03LjEsNS4xYy05LjEtNC45LTE1LjYtOC0xNS42LThsLTE3LjksNTYuNiAgICBsLTEwLjQtMjkuNmMxOC4zLTI1LjYtMS4zLTI2LjktNC44LTI2LjlsMCwwaC0wLjFoLTAuMWwwLDBjLTMuNSwwLTIzLjEsMS4zLTQuOCwyNi45bC0xMC40LDI5LjZsLTE3LjktNTYuNiAgICBjMCwwLTIyLjUsMTAuOS00Mi42LDIzLjVjLTE1LjIsOS41LTE4LDE5LjgtMTguNCwzNC42djUwLjFoOTRoMzIuOWg2MS4zSDI0NGg1NS44aDYxLjVIMzk0aDk0LjRMNDg4LjMsMzQwLjExM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTMuNiwyNzAuMzEzTDkzLjYsMjcwLjMxM2MwLjEsMCwwLjIsMCwwLjMsMGMwLjEsMCwwLjIsMCwwLjMsMGwwLDBjNTEuNi0wLjUsNDQuMS02OS40LDQ0LjEtNjkuNCAgICBjLTIuMS00Ni00MC42LTQ1LjYtNDQuNC00NS41Yy0zLjgtMC4yLTQyLjMtMC41LTQ0LjQsNDUuNUM0OS41LDIwMS4wMTMsNDIuMSwyNjkuODEzLDkzLjYsMjcwLjMxM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` :
                        `<img height="40px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDg4LjQgNDg4LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OC40IDQ4OC40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGNsYXNzPSIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTI0My44LDI0MS4xMTNMMjQzLjgsMjQxLjExM2MwLjEsMCwwLjIsMCwwLjQsMGMwLjEsMCwwLjIsMCwwLjQsMGwwLDBjNjQuMS0wLjcsNTQuOC04Ni4zLDU0LjgtODYuMyAgICBjLTIuNi01Ny4yLTUwLjUtNTYuNy01NS4yLTU2LjVjLTQuNy0wLjItNTIuNS0wLjctNTUuMiw1Ni41QzE4OSwxNTQuOTEzLDE3OS43LDI0MC41MTMsMjQzLjgsMjQxLjExM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMzkzLjgsMjcwLjMxM0wzOTMuOCwyNzAuMzEzYzAuMSwwLDAuMiwwLDAuMywwYzAuMSwwLDAuMiwwLDAuMywwbDAsMGM1MS41LTAuNSw0NC4xLTY5LjQsNDQuMS02OS40ICAgIGMtMi4xLTQ2LTQwLjYtNDUuNi00NC40LTQ1LjVjLTMuOC0wLjItNDIuMy0wLjUtNDQuNCw0NS41QzM0OS43LDIwMS4wMTMsMzQyLjIsMjY5LjgxMywzOTMuOCwyNzAuMzEzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik00ODguMywzNDAuMTEzYy0wLjQtMTQuOC0zLjMtMjUuMS0xOC40LTM0LjZjLTIwLjEtMTIuNi00Mi42LTIzLjUtNDIuNi0yMy41bC0xNy45LDU2LjZsLTEwLjQtMjkuNyAgICBjMTguMy0yNS42LTEuMy0yNi45LTQuOC0yNi45bDAsMGgtMC4xSDM5NGwwLDBjLTMuNSwwLTIzLjEsMS4zLTQuOCwyNi45bC0xMC40LDI5LjZsLTE3LjktNTYuNmMwLDAtNi40LDMuMS0xNS40LDcuOSAgICBjLTIuMS0xLjctNC40LTMuNC03LTVjLTI1LTE1LjctNTIuOS0yOS4zLTUyLjktMjkuM2wtMjIuMiw3MC4zbC0xMy0zNi45YzIyLjgtMzEuOC0xLjYtMzMuNC02LTMzLjVsMCwwaC0wLjFoLTAuMWwwLDAgICAgYy00LjQsMC0yOC44LDEuNi02LDMzLjVsLTEzLDM2LjlsLTIyLjItNzAuM2MwLDAtMjcuOSwxMy42LTUyLjksMjkuM2MtMi43LDEuNy01LDMuNC03LjEsNS4xYy05LjEtNC45LTE1LjYtOC0xNS42LThsLTE3LjksNTYuNiAgICBsLTEwLjQtMjkuNmMxOC4zLTI1LjYtMS4zLTI2LjktNC44LTI2LjlsMCwwaC0wLjFoLTAuMWwwLDBjLTMuNSwwLTIzLjEsMS4zLTQuOCwyNi45bC0xMC40LDI5LjZsLTE3LjktNTYuNiAgICBjMCwwLTIyLjUsMTAuOS00Mi42LDIzLjVjLTE1LjIsOS41LTE4LDE5LjgtMTguNCwzNC42djUwLjFoOTRoMzIuOWg2MS4zSDI0NGg1NS44aDYxLjVIMzk0aDk0LjRMNDg4LjMsMzQwLjExM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTMuNiwyNzAuMzEzTDkzLjYsMjcwLjMxM2MwLjEsMCwwLjIsMCwwLjMsMGMwLjEsMCwwLjIsMCwwLjMsMGwwLDBjNTEuNi0wLjUsNDQuMS02OS40LDQ0LjEtNjkuNCAgICBjLTIuMS00Ni00MC42LTQ1LjYtNDQuNC00NS41Yy0zLjgtMC4yLTQyLjMtMC41LTQ0LjQsNDUuNUM0OS41LDIwMS4wMTMsNDIuMSwyNjkuODEzLDkzLjYsMjcwLjMxM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />`}
                        <p style="font-family: Calibri;font-size: 25px;color:${helper.selectedCVColor === '#FFFFFF' ? '#12A3D0' : '#fff'};margin:0">Topluluklar</p>
                    </div>
                    <p style="font-family: Calibri;font-size: 17px;margin: 2px;color:${helper.selectedCVColor === '#FFFFFF' ? '#505050' : '#fff'}">GAÜN YAZILIM TOPLULUĞU / <i style="color:${helper.selectedCVColor === '#FFFFFF' ? '#646464' : '#fff'}">üye</i></p>
                    <p style="font-family: Calibri;font-size: 13px;margin: 3px 0;color:${helper.selectedCVColor === '#FFFFFF' ? '#646464' : '#fff'}">loerm psum dolar sit amet</p>
                </div>

            </div>



            <div style="width: 50%;" align="center">
                <div style="margin-bottom: 25px;padding:0 20px 0 20px">
                    <div style="position: relative;margin:15px 0 5px 0;padding-top: 35px">
                        ${helper.selectedCVColor === '#FFFFFF' ? `<img height="40px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTMxIDUxMiA1MTIiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMjExIDI0MGg5MHYzMGgtOTB6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im00MTUuMzc4OTA2IDI3MGgtODQuMzc4OTA2djE1YzAgOC4yODkwNjItNi43MTA5MzggMTUtMTUgMTVoLTEyMGMtOC4yODkwNjIgMC0xNS02LjcxMDkzOC0xNS0xNXYtMTVoLTg0LjM3ODkwNmMtMTkuMzk0NTMyIDAtMzYuNTQ2ODc1LTEyLjM2MzI4MS00Mi42ODc1LTMwLjc2MTcxOWwtNTMuOTMzNTk0LTE2MS44MjgxMjV2MzI3LjU4OTg0NGMwIDI0LjgxMjUgMjAuMTg3NSA0NSA0NSA0NWg0MjJjMjQuODEyNSAwIDQ1LTIwLjE4NzUgNDUtNDV2LTMyNy41NzgxMjVsLTUzLjkzNzUgMTYxLjgxNjQwNmMtNi4xMzY3MTkgMTguMzk4NDM4LTIzLjI4OTA2MiAzMC43NjE3MTktNDIuNjgzNTk0IDMwLjc2MTcxOXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTMxNiAwaC0xMjBjLTI0LjgxMjUgMC00NSAyMC4xODc1LTQ1IDQ1djE1aC0xMjUuMTkxNDA2bDU2LjU3NDIxOCAxNjkuNzQ2MDk0YzIuMDUwNzgyIDYuMTM2NzE4IDcuNzc3MzQ0IDEwLjI1MzkwNiAxNC4yMzgyODIgMTAuMjUzOTA2aDg0LjM3ODkwNnYtMTVjMC04LjI4OTA2MiA2LjcxMDkzOC0xNSAxNS0xNWgxMjBjOC4yODkwNjIgMCAxNSA2LjcxMDkzOCAxNSAxNXYxNWg4NC4zNzg5MDZjNi40NjA5MzggMCAxMi4xODc1LTQuMTE3MTg4IDE0LjIzODI4Mi0xMC4yNTM5MDZsNTYuNTc4MTI0LTE2OS43NDYwOTRoLTEyNS4xOTUzMTJ2LTE1YzAtMjQuODEyNS0yMC4xODc1LTQ1LTQ1LTQ1em0tMTM1IDYwdi0xNWMwLTguMjc3MzQ0IDYuNzIyNjU2LTE1IDE1LTE1aDEyMGM4LjI3NzM0NCAwIDE1IDYuNzIyNjU2IDE1IDE1djE1em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />` :
                        `<img height="40px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTMxIDUxMiA1MTIiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMjExIDI0MGg5MHYzMGgtOTB6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im00MTUuMzc4OTA2IDI3MGgtODQuMzc4OTA2djE1YzAgOC4yODkwNjItNi43MTA5MzggMTUtMTUgMTVoLTEyMGMtOC4yODkwNjIgMC0xNS02LjcxMDkzOC0xNS0xNXYtMTVoLTg0LjM3ODkwNmMtMTkuMzk0NTMyIDAtMzYuNTQ2ODc1LTEyLjM2MzI4MS00Mi42ODc1LTMwLjc2MTcxOWwtNTMuOTMzNTk0LTE2MS44MjgxMjV2MzI3LjU4OTg0NGMwIDI0LjgxMjUgMjAuMTg3NSA0NSA0NSA0NWg0MjJjMjQuODEyNSAwIDQ1LTIwLjE4NzUgNDUtNDV2LTMyNy41NzgxMjVsLTUzLjkzNzUgMTYxLjgxNjQwNmMtNi4xMzY3MTkgMTguMzk4NDM4LTIzLjI4OTA2MiAzMC43NjE3MTktNDIuNjgzNTk0IDMwLjc2MTcxOXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTMxNiAwaC0xMjBjLTI0LjgxMjUgMC00NSAyMC4xODc1LTQ1IDQ1djE1aC0xMjUuMTkxNDA2bDU2LjU3NDIxOCAxNjkuNzQ2MDk0YzIuMDUwNzgyIDYuMTM2NzE4IDcuNzc3MzQ0IDEwLjI1MzkwNiAxNC4yMzgyODIgMTAuMjUzOTA2aDg0LjM3ODkwNnYtMTVjMC04LjI4OTA2MiA2LjcxMDkzOC0xNSAxNS0xNWgxMjBjOC4yODkwNjIgMCAxNSA2LjcxMDkzOCAxNSAxNXYxNWg4NC4zNzg5MDZjNi40NjA5MzggMCAxMi4xODc1LTQuMTE3MTg4IDE0LjIzODI4Mi0xMC4yNTM5MDZsNTYuNTc4MTI0LTE2OS43NDYwOTRoLTEyNS4xOTUzMTJ2LTE1YzAtMjQuODEyNS0yMC4xODc1LTQ1LTQ1LTQ1em0tMTM1IDYwdi0xNWMwLTguMjc3MzQ0IDYuNzIyNjU2LTE1IDE1LTE1aDEyMGM4LjI3NzM0NCAwIDE1IDYuNzIyNjU2IDE1IDE1djE1em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />`}
                        <p style="font-family: Calibri;font-size: 25px;color:${helper.selectedCVColor === '#FFFFFF' ? '#12A3D0' : '#fff'};margin:0">İş Deneyimi</p>
                    </div>
                    <p style="font-family: Calibri;font-size: 19px;margin: 2px;color:${helper.selectedCVColor === '#FFFFFF' ? '#505050' : '#fff'}">Logo Yazılım</p>
                    <p style="font-family: Calibri;font-size: 13px;margin: 3px 0;color:${helper.selectedCVColor === '#FFFFFF' ? '#646464' : '#fff'}">Backend Developer</p>
                    <p style="font-family: Calibri;font-size: 13px;margin: 5px 0 2px 0;color:${helper.selectedCVColor === '#FFFFFF' ? '#646464' : '#fff'}">08.2010-02.2018</p>
                    <p style="font-family: Calibri;font-size: 13px;margin: 2px 0 0 5px;color:${helper.selectedCVColor === '#FFFFFF' ? '#646464' : '#fff'}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div style="margin-bottom: 25px;padding:0 20px 0 20px">
                    <div style="position: relative;margin:15px 0 5px 0;padding-top: 40px">
                        ${helper.selectedCVColor === '#FFFFFF' ? `<img height="45px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJib2xkIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTEyIDMuNDU3Yy0uNDE0IDAtLjc1LS4zMzYtLjc1LS43NXYtMS45NTdjMC0uNDE0LjMzNi0uNzUuNzUtLjc1cy43NS4zMzYuNzUuNzV2MS45NTdjMCAuNDE0LS4zMzYuNzUtLjc1Ljc1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzEyQTNEMCI+PC9wYXRoPjxwYXRoIGQ9Im0xOC41NzEgNi4xNzljLS4xOTIgMC0uMzg0LS4wNzMtLjUzLS4yMi0uMjkzLS4yOTMtLjI5My0uNzY4IDAtMS4wNjFsMS4zODQtMS4zODRjLjI5My0uMjkzLjc2OC0uMjkzIDEuMDYxIDBzLjI5My43NjggMCAxLjA2MWwtMS4zODQgMS4zODRjLS4xNDcuMTQ2LS4zMzkuMjItLjUzMS4yMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD48cGF0aCBkPSJtMjMuMjUgMTIuNzVoLTEuOTU3Yy0uNDE0IDAtLjc1LS4zMzYtLjc1LS43NXMuMzM2LS43NS43NS0uNzVoMS45NTdjLjQxNCAwIC43NS4zMzYuNzUuNzVzLS4zMzYuNzUtLjc1Ljc1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzEyQTNEMCI+PC9wYXRoPjxwYXRoIGQ9Im0xOS45NTUgMjAuNzA1Yy0uMTkyIDAtLjM4NC0uMDczLS41My0uMjJsLTEuMzg0LTEuMzg0Yy0uMjkzLS4yOTMtLjI5My0uNzY4IDAtMS4wNjFzLjc2OC0uMjkzIDEuMDYxIDBsMS4zODQgMS4zODRjLjI5My4yOTMuMjkzLjc2OCAwIDEuMDYxLS4xNDcuMTQ3LS4zMzkuMjItLjUzMS4yMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD48cGF0aCBkPSJtNC4wNDUgMjAuNzA1Yy0uMTkyIDAtLjM4NC0uMDczLS41My0uMjItLjI5My0uMjkzLS4yOTMtLjc2OCAwLTEuMDYxbDEuMzg0LTEuMzg0Yy4yOTMtLjI5My43NjgtLjI5MyAxLjA2MSAwcy4yOTMuNzY4IDAgMS4wNjFsLTEuMzg0IDEuMzg0Yy0uMTQ3LjE0Ny0uMzM5LjIyLS41MzEuMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+PHBhdGggZD0ibTIuNzA3IDEyLjc1aC0xLjk1N2MtLjQxNCAwLS43NS0uMzM2LS43NS0uNzVzLjMzNi0uNzUuNzUtLjc1aDEuOTU3Yy40MTQgMCAuNzUuMzM2Ljc1Ljc1cy0uMzM2Ljc1LS43NS43NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD48cGF0aCBkPSJtNS40MjkgNi4xNzljLS4xOTIgMC0uMzg0LS4wNzMtLjUzLS4yMmwtMS4zODQtMS4zODRjLS4yOTMtLjI5My0uMjkzLS43NjggMC0xLjA2MXMuNzY4LS4yOTMgMS4wNjEgMGwxLjM4NCAxLjM4NGMuMjkzLjI5My4yOTMuNzY4IDAgMS4wNjEtLjE0OC4xNDYtLjMzOS4yMi0uNTMxLjIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzEyQTNEMCI+PC9wYXRoPjxwYXRoIGQ9Im0xNSAyMXYxLjI1YzAgLjk2LS43OSAxLjc1LTEuNzUgMS43NWgtMi41Yy0uODQgMC0xLjc1LS42NC0xLjc1LTIuMDR2LS45NnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD48cGF0aCBkPSJtMTYuNDEgNi41NmMtMS42NC0xLjMzLTMuOC0xLjg1LTUuOTEtMS40LTIuNjUuNTUtNC44IDIuNzEtNS4zNSA1LjM2LS41NiAyLjcyLjQ2IDUuNDIgMi42NCA3LjA3LjU5LjQ0IDEgMS4xMiAxLjE0IDEuOTF2LjAxYy4wMi0uMDEuMDUtLjAxLjA3LS4wMWg2Yy4wMiAwIC4wMyAwIC4wNS4wMXYtLjAxYy4xNC0uNzYuNTktMS40NiAxLjI4LTIgMS42OS0xLjM0IDIuNjctMy4zNCAyLjY3LTUuNSAwLTIuMTItLjk0LTQuMS0yLjU5LTUuNDR6bS0uNjYgNS45NGMtLjQxIDAtLjc1LS4zNC0uNzUtLjc1IDAtMS41Mi0xLjIzLTIuNzUtMi43NS0yLjc1LS40MSAwLS43NS0uMzQtLjc1LS43NXMuMzQtLjc1Ljc1LS43NWMyLjM0IDAgNC4yNSAxLjkxIDQuMjUgNC4yNSAwIC40MS0uMzQuNzUtLjc1Ljc1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzEyQTNEMCI+PC9wYXRoPjxwYXRoIGQ9Im04LjkzIDE5LjVoLjA3Yy0uMDIgMC0uMDUgMC0uMDcuMDF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMTJBM0QwIj48L3BhdGg+PHBhdGggZD0ibTE1LjA1IDE5LjV2LjAxYy0uMDItLjAxLS4wMy0uMDEtLjA1LS4wMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD48L2c+IDwvc3ZnPg==" /> ` :
                        `<img height="45px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJib2xkIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiI+PGc+PHBhdGggZD0ibTEyIDMuNDU3Yy0uNDE0IDAtLjc1LS4zMzYtLjc1LS43NXYtMS45NTdjMC0uNDE0LjMzNi0uNzUuNzUtLjc1cy43NS4zMzYuNzUuNzV2MS45NTdjMCAuNDE0LS4zMzYuNzUtLjc1Ljc1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0xOC41NzEgNi4xNzljLS4xOTIgMC0uMzg0LS4wNzMtLjUzLS4yMi0uMjkzLS4yOTMtLjI5My0uNzY4IDAtMS4wNjFsMS4zODQtMS4zODRjLjI5My0uMjkzLjc2OC0uMjkzIDEuMDYxIDBzLjI5My43NjggMCAxLjA2MWwtMS4zODQgMS4zODRjLS4xNDcuMTQ2LS4zMzkuMjItLjUzMS4yMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjMuMjUgMTIuNzVoLTEuOTU3Yy0uNDE0IDAtLjc1LS4zMzYtLjc1LS43NXMuMzM2LS43NS43NS0uNzVoMS45NTdjLjQxNCAwIC43NS4zMzYuNzUuNzVzLS4zMzYuNzUtLjc1Ljc1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0xOS45NTUgMjAuNzA1Yy0uMTkyIDAtLjM4NC0uMDczLS41My0uMjJsLTEuMzg0LTEuMzg0Yy0uMjkzLS4yOTMtLjI5My0uNzY4IDAtMS4wNjFzLjc2OC0uMjkzIDEuMDYxIDBsMS4zODQgMS4zODRjLjI5My4yOTMuMjkzLjc2OCAwIDEuMDYxLS4xNDcuMTQ3LS4zMzkuMjItLjUzMS4yMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtNC4wNDUgMjAuNzA1Yy0uMTkyIDAtLjM4NC0uMDczLS41My0uMjItLjI5My0uMjkzLS4yOTMtLjc2OCAwLTEuMDYxbDEuMzg0LTEuMzg0Yy4yOTMtLjI5My43NjgtLjI5MyAxLjA2MSAwcy4yOTMuNzY4IDAgMS4wNjFsLTEuMzg0IDEuMzg0Yy0uMTQ3LjE0Ny0uMzM5LjIyLS41MzEuMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTIuNzA3IDEyLjc1aC0xLjk1N2MtLjQxNCAwLS43NS0uMzM2LS43NS0uNzVzLjMzNi0uNzUuNzUtLjc1aDEuOTU3Yy40MTQgMCAuNzUuMzM2Ljc1Ljc1cy0uMzM2Ljc1LS43NS43NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtNS40MjkgNi4xNzljLS4xOTIgMC0uMzg0LS4wNzMtLjUzLS4yMmwtMS4zODQtMS4zODRjLS4yOTMtLjI5My0uMjkzLS43NjggMC0xLjA2MXMuNzY4LS4yOTMgMS4wNjEgMGwxLjM4NCAxLjM4NGMuMjkzLjI5My4yOTMuNzY4IDAgMS4wNjEtLjE0OC4xNDYtLjMzOS4yMi0uNTMxLjIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0xNSAyMXYxLjI1YzAgLjk2LS43OSAxLjc1LTEuNzUgMS43NWgtMi41Yy0uODQgMC0xLjc1LS42NC0xLjc1LTIuMDR2LS45NnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMTYuNDEgNi41NmMtMS42NC0xLjMzLTMuOC0xLjg1LTUuOTEtMS40LTIuNjUuNTUtNC44IDIuNzEtNS4zNSA1LjM2LS41NiAyLjcyLjQ2IDUuNDIgMi42NCA3LjA3LjU5LjQ0IDEgMS4xMiAxLjE0IDEuOTF2LjAxYy4wMi0uMDEuMDUtLjAxLjA3LS4wMWg2Yy4wMiAwIC4wMyAwIC4wNS4wMXYtLjAxYy4xNC0uNzYuNTktMS40NiAxLjI4LTIgMS42OS0xLjM0IDIuNjctMy4zNCAyLjY3LTUuNSAwLTIuMTItLjk0LTQuMS0yLjU5LTUuNDR6bS0uNjYgNS45NGMtLjQxIDAtLjc1LS4zNC0uNzUtLjc1IDAtMS41Mi0xLjIzLTIuNzUtMi43NS0yLjc1LS40MSAwLS43NS0uMzQtLjc1LS43NXMuMzQtLjc1Ljc1LS43NWMyLjM0IDAgNC4yNSAxLjkxIDQuMjUgNC4yNSAwIC40MS0uMzQuNzUtLjc1Ljc1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im04LjkzIDE5LjVoLjA3Yy0uMDIgMC0uMDUgMC0uMDcuMDF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTE1LjA1IDE5LjV2LjAxYy0uMDItLjAxLS4wMy0uMDEtLjA1LS4wMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />`}
                        <p style="font-family: Calibri;font-size: 25px;color:${helper.selectedCVColor === '#FFFFFF' ? '#12A3D0' : '#fff'};margin:0">Yetenekler</p>
                    </div>
                    <div style="display: flex;justify-content: center">
                        <div>
                            <p style="text-align:start;margin:2px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#505050' : '#fff'};font-size: 19px">JavaScript</p>
                            <p style="text-align:start;margin:2px;font-family: Calibri;color:#505050;font-size: 19px">Vue.js</p>
                            <p style="text-align:start;margin:2px;font-family: Calibri;color:#505050;font-size: 19px">java</p>
                            <p style="text-align:start;margin:2px;font-family: Calibri;color:#505050;font-size: 19px">Kodlin</p>
                        </div>
                        <div style="margin-left: 10px">
                            <div style="display: flex;height: 23px;margin:2px;width: 110px;align-items: center;justify-content: space-between">
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                            </div>

                            <div style="display: flex;height: 23px;margin:2px;width: 110px;align-items: center;justify-content: space-between">
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                            </div>

                            <div style="display: flex;height: 23px;margin:2px;width: 110px;align-items: center;justify-content: space-between">
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                            </div>

                            <div style="display: flex;height: 23px;margin:2px;width: 110px;align-items: center;justify-content: space-between">
                                <div style="width: 18px;height: 18px;border-radius: 100px;background-color: #12A3D0"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                                <div style="width: 18px;height: 18px;border-radius: 100px;border:3px solid #12A3D0;box-sizing: border-box"></div>
                            </div>

                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 25px;padding:0 20px 0 20px">
                    <div style="position: relative;margin:15px 0 5px 0;padding-top: 40px">
                        ${helper.selectedCVColor === '#FFFFFF' ? `<img height="40px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTI4IDUxMi4wMDAwMiA1MTIiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNDcxLjM4MjgxMiA0NC41NzgxMjVjLTI2LjUwMzkwNi0yOC43NDYwOTQtNjIuODcxMDkzLTQ0LjU3ODEyNS0xMDIuNDEwMTU2LTQ0LjU3ODEyNS0yOS41NTQ2ODcgMC01Ni42MjEwOTQgOS4zNDM3NS04MC40NDkyMTggMjcuNzY5NTMxLTEyLjAyMzQzOCA5LjMwMDc4MS0yMi45MTc5NjkgMjAuNjc5Njg4LTMyLjUyMzQzOCAzMy45NjA5MzgtOS42MDE1NjItMTMuMjc3MzQ0LTIwLjUtMjQuNjYwMTU3LTMyLjUyNzM0NC0zMy45NjA5MzgtMjMuODI0MjE4LTE4LjQyNTc4MS01MC44OTA2MjUtMjcuNzY5NTMxLTgwLjQ0NTMxMi0yNy43Njk1MzEtMzkuNTM5MDYzIDAtNzUuOTEwMTU2IDE1LjgzMjAzMS0xMDIuNDE0MDYzIDQ0LjU3ODEyNS0yNi4xODc1IDI4LjQxMDE1Ni00MC42MTMyODEgNjcuMjIyNjU2LTQwLjYxMzI4MSAxMDkuMjkyOTY5IDAgNDMuMzAwNzgxIDE2LjEzNjcxOSA4Mi45Mzc1IDUwLjc4MTI1IDEyNC43NDIxODcgMzAuOTkyMTg4IDM3LjM5NDUzMSA3NS41MzUxNTYgNzUuMzU1NDY5IDEyNy4xMTcxODggMTE5LjMxMjUgMTcuNjEzMjgxIDE1LjAxMTcxOSAzNy41NzgxMjQgMzIuMDI3MzQ0IDU4LjMwODU5MyA1MC4xNTIzNDQgNS40NzY1NjMgNC43OTY4NzUgMTIuNTAzOTA3IDcuNDM3NSAxOS43OTI5NjkgNy40Mzc1IDcuMjg1MTU2IDAgMTQuMzE2NDA2LTIuNjQwNjI1IDE5Ljc4NTE1Ni03LjQyOTY4NyAyMC43MzA0NjktMTguMTI4OTA3IDQwLjcwNzAzMi0zNS4xNTIzNDQgNTguMzI4MTI1LTUwLjE3MTg3NiA1MS41NzQyMTktNDMuOTQ5MjE4IDk2LjExNzE4OC04MS45MDYyNSAxMjcuMTA5Mzc1LTExOS4zMDQ2ODcgMzQuNjQ0NTMyLTQxLjgwMDc4MSA1MC43NzczNDQtODEuNDM3NSA1MC43NzczNDQtMTI0Ljc0MjE4NyAwLTQyLjA2NjQwNy0xNC40MjU3ODEtODAuODc4OTA3LTQwLjYxNzE4OC0xMDkuMjg5MDYzem0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />` :
                        `<img height="40px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTI4IDUxMi4wMDAwMiA1MTIiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48cGF0aCBkPSJtNDcxLjM4MjgxMiA0NC41NzgxMjVjLTI2LjUwMzkwNi0yOC43NDYwOTQtNjIuODcxMDkzLTQ0LjU3ODEyNS0xMDIuNDEwMTU2LTQ0LjU3ODEyNS0yOS41NTQ2ODcgMC01Ni42MjEwOTQgOS4zNDM3NS04MC40NDkyMTggMjcuNzY5NTMxLTEyLjAyMzQzOCA5LjMwMDc4MS0yMi45MTc5NjkgMjAuNjc5Njg4LTMyLjUyMzQzOCAzMy45NjA5MzgtOS42MDE1NjItMTMuMjc3MzQ0LTIwLjUtMjQuNjYwMTU3LTMyLjUyNzM0NC0zMy45NjA5MzgtMjMuODI0MjE4LTE4LjQyNTc4MS01MC44OTA2MjUtMjcuNzY5NTMxLTgwLjQ0NTMxMi0yNy43Njk1MzEtMzkuNTM5MDYzIDAtNzUuOTEwMTU2IDE1LjgzMjAzMS0xMDIuNDE0MDYzIDQ0LjU3ODEyNS0yNi4xODc1IDI4LjQxMDE1Ni00MC42MTMyODEgNjcuMjIyNjU2LTQwLjYxMzI4MSAxMDkuMjkyOTY5IDAgNDMuMzAwNzgxIDE2LjEzNjcxOSA4Mi45Mzc1IDUwLjc4MTI1IDEyNC43NDIxODcgMzAuOTkyMTg4IDM3LjM5NDUzMSA3NS41MzUxNTYgNzUuMzU1NDY5IDEyNy4xMTcxODggMTE5LjMxMjUgMTcuNjEzMjgxIDE1LjAxMTcxOSAzNy41NzgxMjQgMzIuMDI3MzQ0IDU4LjMwODU5MyA1MC4xNTIzNDQgNS40NzY1NjMgNC43OTY4NzUgMTIuNTAzOTA3IDcuNDM3NSAxOS43OTI5NjkgNy40Mzc1IDcuMjg1MTU2IDAgMTQuMzE2NDA2LTIuNjQwNjI1IDE5Ljc4NTE1Ni03LjQyOTY4NyAyMC43MzA0NjktMTguMTI4OTA3IDQwLjcwNzAzMi0zNS4xNTIzNDQgNTguMzI4MTI1LTUwLjE3MTg3NiA1MS41NzQyMTktNDMuOTQ5MjE4IDk2LjExNzE4OC04MS45MDYyNSAxMjcuMTA5Mzc1LTExOS4zMDQ2ODcgMzQuNjQ0NTMyLTQxLjgwMDc4MSA1MC43NzczNDQtODEuNDM3NSA1MC43NzczNDQtMTI0Ljc0MjE4NyAwLTQyLjA2NjQwNy0xNC40MjU3ODEtODAuODc4OTA3LTQwLjYxNzE4OC0xMDkuMjg5MDYzem0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />`}
                        <p style="font-family: Calibri;font-size: 25px;color:${helper.selectedCVColor === '#FFFFFF' ? '#12A3D0' : '#fff'};margin:0">İlgi Alanları</p>
                    </div>
                    <div style="display: flex;justify-content: center">
                        <div>
                            <p style="margin:2px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#505050' : '#fff'};font-size: 19px">Kampçılık</p>
                            <p style="margin:2px;font-family: Calibri;color:#505050;font-size: 19px">Film</p>
                            <p style="margin:2px;font-family: Calibri;color:#505050;font-size: 19px">Oyun</p>
                            <p style="margin:2px;font-family: Calibri;color:#505050;font-size: 19px">Kitap</p>
                        </div>

                    </div>
                </div>

                <div style="margin-bottom: 25px;padding:0 20px 0 20px">
                    <div style="position: relative;margin:15px 0 5px 0;padding-top: 40px">
                        ${helper.selectedCVColor === '#FFFFFF' ? `<img height="37px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDc3Ljg2MiA0NzcuODYyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzcuODYyIDQ3Ny44NjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTg3LjcyMiwxMDIuODU2VjE3LjA2MkMxODcuNzE5LDcuNjM2LDE4MC4wNzYtMC4wMDMsMTcwLjY1LDBjLTQuODM0LDAuMDAxLTkuNDQsMi4wNTMtMTIuNjc2LDUuNjQ0TDQuMzc1LDE3Ni4zMTEgICAgYy01LjYxNyw2LjI1Ni01Ljg0MiwxNS42Ny0wLjUyOSwyMi4xODdsMTUzLjYsMTg3LjczM2M1Ljk2OCw3LjI5NSwxNi43Miw4LjM3MSwyNC4wMTYsMi40MDNjMy45NTItMy4yMzMsNi4yNDktOC4wNjYsNi4yNi0xMy4xNzIgICAgdi04NS4wNDNjMTM0LjgyNyw0LjM4NiwyMTguOTY1LDYyLjAyLDI1Ni44ODgsMTc1Ljc4N2MyLjMyNiw2Ljk2LDguODQxLDExLjY1MywxNi4xNzksMTEuNjU2YzAuOTIsMC4wMDMsMS44NC0wLjA3MiwyLjc0OC0wLjIyMiAgICBjOC4yNTYtMS4zNDcsMTQuMzE5LTguNDc5LDE0LjMxOS0xNi44NDVDNDc3Ljg1NSwyNTkuODE4LDM1Ni44NywxMTIuMTc0LDE4Ny43MjIsMTAyLjg1NnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />` :
                        `<img height="37px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDc3Ljg2MiA0NzcuODYyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzcuODYyIDQ3Ny44NjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTg3LjcyMiwxMDIuODU2VjE3LjA2MkMxODcuNzE5LDcuNjM2LDE4MC4wNzYtMC4wMDMsMTcwLjY1LDBjLTQuODM0LDAuMDAxLTkuNDQsMi4wNTMtMTIuNjc2LDUuNjQ0TDQuMzc1LDE3Ni4zMTEgICAgYy01LjYxNyw2LjI1Ni01Ljg0MiwxNS42Ny0wLjUyOSwyMi4xODdsMTUzLjYsMTg3LjczM2M1Ljk2OCw3LjI5NSwxNi43Miw4LjM3MSwyNC4wMTYsMi40MDNjMy45NTItMy4yMzMsNi4yNDktOC4wNjYsNi4yNi0xMy4xNzIgICAgdi04NS4wNDNjMTM0LjgyNyw0LjM4NiwyMTguOTY1LDYyLjAyLDI1Ni44ODgsMTc1Ljc4N2MyLjMyNiw2Ljk2LDguODQxLDExLjY1MywxNi4xNzksMTEuNjU2YzAuOTIsMC4wMDMsMS44NC0wLjA3MiwyLjc0OC0wLjIyMiAgICBjOC4yNTYtMS4zNDcsMTQuMzE5LTguNDc5LDE0LjMxOS0xNi44NDVDNDc3Ljg1NSwyNTkuODE4LDM1Ni44NywxMTIuMTc0LDE4Ny43MjIsMTAyLjg1NnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />`}
                        <p style="font-family: Calibri;font-size: 25px;color:${helper.selectedCVColor === '#FFFFFF' ? '#12A3D0' : '#fff'};margin:0">Referans</p>
                    </div>
                    <div style="display: flex;justify-content: center">
                        <div>
                            <p style="margin:2px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#505050' : '#fff'};font-size: 19px">Sohrat Jumadurdyyew</p>
                            <p style="margin:2px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#646464' : '#fff'};font-size: 13px">0 561 614 7728</p>
                            <p style="margin:2px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#646464' : '#fff'};font-size: 13px">sohrat6128@gmail.com</p>
                            <p style="margin:2px;font-family: Calibri;color:${helper.selectedCVColor === '#FFFFFF' ? '#646464' : '#fff'};font-size: 13px">Rat Yazılım Şirketi</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>





    </div>`
                ,
                fileName: 'deneme1',
                directory: 'docs'
            };
        }


        let file = await RNHTMLtoPDF.convert(options);
        this.setState({ filePath: file.filePath });
        alert(this.state.filePath)


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
                // const source = {uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    photoSource: source
                });
                helper.userPhoto = source;

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
                <View style={styles.linkIconStyle}><SImage width={25} source={item.item.linkIcon} /></View>
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
        linkIcon = helper.userLinks.map(el => el.linkIconCV);
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
            if (this.state.userLinkIcon === 'github') helper.userGithubLink = this.state.userLink
            else if (this.state.userLinkIcon === 'linkedin') helper.userLinkedInLink = this.state.userLink
            else if (this.state.userLinkIcon === 'pinterest') helper.userPinterestLink = this.state.userLink
            else if (this.state.userLinkIcon === 'instagram') helper.userInstagramLink = this.state.userLink
            else if (this.state.userLinkIcon === 'skype') helper.userSkypeLink = this.state.userLink
            else if (this.state.userLinkIcon === 'telegram') helper.userTelegramLink = this.state.userLink
            else if (this.state.userLinkIcon === 'facebook') helper.userFacebookLink = this.state.userLink
            else if (this.state.userLinkIcon === 'twitter') helper.userTwitterLink = this.state.userLink
            else if (this.state.userLinkIcon === 'youtube') helper.userYoutubeLink = this.state.userLink
            else {
                helper.userPersonalLink.push(
                    {
                        link: this.state.userLink
                    }
                )
            }



            helper.setUserLinks(link, this.state.color, this.state.selectedLinkIcon, this.state.userLinkIcon);
            this.setState({
                userLink: '',
                warningLink: false,
                linksShow: !this.state.linksShow
            });
            link = ''
            linkIcon = helper.userLinks.map(el => el.linkIconCV);
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
        if (school.schoolName === '' || school.schoolDepartment === '' || school.schoolGrade === '' || school.schoolStartDate === '' || school.schoolFinishDate === '') {
            if (school.schoolName === '') this.setState({ warningSchoolName: true })
            if (school.schoolDepartment === '') this.setState({ warningSchoolDepartment: true })
            if (school.schoolStartDate === '' || school.schoolFinishDate === '') this.setState({ warningSchoolDate: true })
        } else {
            helper.setUserSchools(school, this.state.color);

            this.setState({
                userSchoolName: '',
                userSchoolDepartment: '',
                userSchoolStartDate: '',
                userSchoolFinishDate: '',

                warningSchoolName: false,
                warningSchoolDepartment: false,
                warningSchoolDate: false,
            });
            school.schoolName = '';
            school.schoolDepartment = '';
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

    changeLinksShow(v, iCV) {
        this.setState({
            linksShow: !this.state.linksShow,
            selectedLinkIcon: v,
            userLinkIcon: iCV
        })
    }

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
                                onChangeText={(text) => { this.setState({ userName: text }); helper.userName = text }}
                                placeholder='...'
                                style={styles.inputStyle} />
                        </View>

                        <Text style={styles.inputTitle}>Telefon numarası <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                        <View style={styles.inputView}>
                            <SImage width={20} source={require('../images/phone.png')} />
                            <TextInput
                                value={this.state.userNumber}
                                onChangeText={(text) => { this.setState({ userNumber: text }); helper.userTel = text }}
                                placeholder='...'
                                keyboardType='numeric'
                                style={styles.inputStyle} />
                        </View>


                        <Text style={styles.inputTitle}>E-posta <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                        <View style={styles.inputView}>
                            <SImage width={20} source={require('../images/mail.png')} />
                            <TextInput
                                value={this.state.userEmail}
                                onChangeText={(text) => { this.setState({ userEmail: text }); helper.userEmail = text }}
                                placeholder='...'
                                keyboardType='email-address'
                                style={styles.inputStyle} />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={this.askPermission.bind(this)}>
                    <Text>pdf dönüştür/////{helper.selectedOrderCV}</Text>
                </TouchableOpacity>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text style={styles.inputTitle}>Meslek <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                    <View style={[styles.inputView, { width: '90%' }]}>
                        <SImage width={20} source={require('../images/manager.png')} />
                        <TextInput
                            value={this.state.userJob}
                            onChangeText={(text) => { this.setState({ userJob: text }); helper.userJob = text }}
                            placeholder='...'
                            style={[styles.inputStyle, { width: '90%', paddingLeft: 10 }]} />
                    </View>
                    <Text>{helper.selectedCVColor}</Text>
                    <Text style={styles.inputTitle}>Şehir/ilçe <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                    <View style={[styles.inputView, { width: '90%' }]}>
                        <SImage width={20} source={require('../images/pin.png')} />
                        <TextInput
                            value={this.state.userCity}
                            onChangeText={(text) => { this.setState({ userCity: text }); helper.userCity = text }}
                            placeholder='...'
                            style={[styles.inputStyle, { width: '90%' }]} />
                    </View>

                    <Text style={styles.inputTitle}>Posta kodu</Text>
                    <View style={[styles.inputView, { width: '90%' }]}>
                        <SImage width={20} source={require('../images/post.png')} />
                        <TextInput
                            value={this.state.userPostalCode}
                            onChangeText={(text) => { this.setState({ userPostalCode: text }); helper.userPostalCode = text }}
                            placeholder='...'
                            keyboardType='numeric'
                            style={[styles.inputStyle, { width: '90%' }]} />
                    </View>

                    {
                        this.state.hidden === true &&
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
                                onDateChange={(date) => { this.setState({ userBirthDay: date }); helper.userBirthDay = date }}
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
                                    onValueChange={(text) => { this.setState({ userGender: text }); helper.userGender = text }}
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
                                    style={[{ width: '100%' }, helper.userLinks.length > 0 && { borderBottomColor: '#DADADA', borderBottomWidth: 1, marginBottom: 10 }]}
                                    data={helper.userLinks}
                                    renderItem={data => this.setLinks(data)}
                                    showsVerticalScrollIndicator={false}
                                />

                                <View style={{ width: '100%', alignItems: 'center' }}>
                                    {
                                        this.state.linksShow &&
                                        <View style={{ width: '100%', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
                                            {
                                                !linkIcon.includes('github') &&
                                                <TouchableOpacity onPress={() => this.changeLinksShow(require('../images/github.png'), 'github')} style={{ width: 50, height: 40, borderRadius: 3, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/github.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('linkedin') &&
                                                <TouchableOpacity onPress={() => this.changeLinksShow(require('../images/linkedin.png'), 'linkedin')} style={{ width: 50, height: 40, borderRadius: 3, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/linkedin.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('pinterest') &&
                                                <TouchableOpacity onPress={() => this.changeLinksShow(require('../images/pinterest.png'), 'pinterest')} style={{ width: 50, height: 40, borderRadius: 3, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/pinterest.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('instagram') &&
                                                <TouchableOpacity onPress={() => this.changeLinksShow(require('../images/instagram.png'), 'instagram')} style={{ width: 50, height: 40, borderRadius: 3, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/instagram.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('skype') &&
                                                <TouchableOpacity onPress={() => this.changeLinksShow(require('../images/skype.png'), 'skype')} style={{ width: 50, height: 40, borderRadius: 3, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/skype.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('telegram') &&
                                                <TouchableOpacity onPress={() => this.changeLinksShow(require('../images/telegram.png'), 'telegram')} style={{ width: 50, height: 40, borderRadius: 3, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/telegram.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('facebook') &&
                                                <TouchableOpacity onPress={() => this.changeLinksShow(require('../images/facebook.png'), 'facebook')} style={{ width: 50, height: 40, borderRadius: 3, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/facebook.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('twitter') &&
                                                <TouchableOpacity onPress={() => this.changeLinksShow(require('../images/twitter.png'), 'twitter')} style={{ width: 50, height: 40, borderRadius: 3, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/twitter.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('youtube') &&
                                                <TouchableOpacity onPress={() => this.changeLinksShow(require('../images/youtube.png'), 'youtube')} style={{ width: 50, height: 40, borderRadius: 3, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/youtube.png')} /></TouchableOpacity>
                                            }
                                            <TouchableOpacity onPress={() => this.changeLinksShow(require('../images/link.png'), 'link')} style={{ width: 40, height: 40, borderRadius: 3, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={20} source={require('../images/plus.png')} /></TouchableOpacity>

                                        </View>
                                    }


                                    {
                                        !this.state.linksShow &&
                                        <View>
                                            <TouchableOpacity onPress={() => this.setState({ linksShow: true })}>
                                                <SImage width={25} source={require('../images/backLink.png')} />
                                            </TouchableOpacity>
                                            <View style={styles.linkInputContainer}>
                                                <View style={styles.linkIconStyle}><SImage width={25} source={this.state.selectedLinkIcon} /></View>
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
                                    }
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


                        <Text style={styles.infoTitle}>Başlangıç ve bitiş tarihi</Text>
                        <View style={[styles.experiencesInputView, this.state.warningSchoolDate && school.schoolStartDate === '' && { borderColor: 'red' }, this.state.warningSchoolDate && school.schoolFinishDate === '' && { borderColor: 'red' }]}>
                            <SImage width={23} source={require('../images/calendar.png')} />
                            <DatePicker
                                androidMode='spinner'
                                style={[styles.infoInput, { width: 65, marginBottom: 5, padding: 0 }]}
                                date={this.state.userSchoolStartDate}
                                showIcon={false}
                                placeholder='aa.yyyy'
                                mode="date"
                                format="MM.YYYY"
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
                                placeholder='aa.yyyy'
                                mode="date"
                                format="MM.YYYY"
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
                                placeholder='aa.yyyy'
                                mode="date"
                                format="MM.YYYY"
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
                                placeholder='aa.yyyy'
                                mode="date"
                                format="MM.YYYY"
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

                <TouchableOpacity onPress={this.askPermission.bind(this)}>
                    <Text>pdf dönüştür/////{helper.selectedOrderCV}</Text>
                </TouchableOpacity>
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
                                placeholder='aa.yyyy'
                                mode="date"
                                format="MM.YYYY"
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
                                placeholder='aa.yyyy'
                                mode="date"
                                format="MM.YYYY"
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
