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
        }
    }

    async createPDF() {

        let options = '';

        if (helper.selectedOrderCV === 1) {
            options = {
                html: `
                 <div style="width:650px;min-height: 700px;padding-top: 15px;background-color: ${helper.selectedCVColor}">


        <div style="width: 100%;min-height: 170px;display: flex;border-bottom: 4px solid #707070">
            <div style="width: 35%;min-height: 100%;display: flex;justify-content: center;align-items: center">
                <div style="width: 120px;height: 120px;border:3px solid #707070;border-radius: 100px;background: url(${this.state.photoSource.uri}) no-repeat center;background-size: cover"></div>
            </div>
            <div style="width: 65%;min-height: 100%">
                <p style="font-family: Calibri;font-size: 28px;text-align: center;color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};margin: 15px 0 10px;">${this.state.userJob}</p>
                <div style="display: flex;width: 100%;justify-content: space-between">
                    <div>
                        <div style="display: flex;align-items: center"> <img height="15px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBjLTc0LjQzOSwwLTEzNSw2MC41NjEtMTM1LDEzNXM2MC41NjEsMTM1LDEzNSwxMzVzMTM1LTYwLjU2MSwxMzUtMTM1UzMzMC40MzksMCwyNTYsMHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQyMy45NjYsMzU4LjE5NUMzODcuMDA2LDMyMC42NjcsMzM4LjAwOSwzMDAsMjg2LDMwMGgtNjBjLTUyLjAwOCwwLTEwMS4wMDYsMjAuNjY3LTEzNy45NjYsNTguMTk1ICAgIEM1MS4yNTUsMzk1LjUzOSwzMSw0NDQuODMzLDMxLDQ5N2MwLDguMjg0LDYuNzE2LDE1LDE1LDE1aDQyMGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1ICAgIEM0ODEsNDQ0LjgzMyw0NjAuNzQ1LDM5NS41MzksNDIzLjk2NiwzNTguMTk1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRTRFNEU0IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" /><p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};margin:3px;font-family: Calibri">${this.state.userName}</p></div>
                        <div style="display: flex;align-items: center"> <img height="15px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzg0IDM4NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0IDM4NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNTMuMTg4LDI1Mi4wNTJjLTIzLjUxLDAtNDYuNTk0LTMuNjc3LTY4LjQ2OS0xMC45MDZjLTEwLjcxOS0zLjY1Ni0yMy44OTYtMC4zMDItMzAuNDM4LDYuNDE3bC00My4xNzcsMzIuNTk0ICAgIGMtNTAuMDczLTI2LjcyOS04MC45MTctNTcuNTYzLTEwNy4yODEtMTA3LjI2bDMxLjYzNS00Mi4wNTJjOC4yMTktOC4yMDgsMTEuMTY3LTIwLjE5OCw3LjYzNS0zMS40NDggICAgYy03LjI2LTIxLjk5LTEwLjk0OC00NS4wNjMtMTAuOTQ4LTY4LjU4M0MxMzIuMTQ2LDEzLjgyMywxMTguMzIzLDAsMTAxLjMzMywwSDMwLjgxM0MxMy44MjMsMCwwLDEzLjgyMywwLDMwLjgxMyAgICBDMCwyMjUuNTYzLDE1OC40MzgsMzg0LDM1My4xODgsMzg0YzE2Ljk5LDAsMzAuODEzLTEzLjgyMywzMC44MTMtMzAuODEzdi03MC4zMjNDMzg0LDI2NS44NzUsMzcwLjE3NywyNTIuMDUyLDM1My4xODgsMjUyLjA1MnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" /><p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};margin:3px;font-family: Calibri">${this.state.userNumber}</p></div>
                        <div style="display: flex;align-items: center"> <img height="15px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTEwLjY4OCw5NS4xNTZDODAuOTU4LDE1NC42NjcsMjA0LjI2LDI1OS4zNjUsMjQwLjUsMjkyLjAxYzQuODY1LDQuNDA2LDEwLjA4Myw2LjY0NiwxNS41LDYuNjQ2ICAgICBjNS40MDYsMCwxMC42MTUtMi4yMTksMTUuNDY5LTYuNjA0YzM2LjI3MS0zMi42NzcsMTU5LjU3My0xMzcuMzg1LDIyOS44NDQtMTk2Ljg5NmM0LjM3NS0zLjY5OCw1LjA0Mi0xMC4xOTgsMS41LTE0LjcxOSAgICAgQzQ5NC42MjUsNjkuOTksNDgyLjQxNyw2NCw0NjkuMzMzLDY0SDQyLjY2N2MtMTMuMDgzLDAtMjUuMjkyLDUuOTktMzMuNDc5LDE2LjQzOEM1LjY0Niw4NC45NTgsNi4zMTMsOTEuNDU4LDEwLjY4OCw5NS4xNTZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik01MDUuODEzLDEyNy40MDZjLTMuNzgxLTEuNzYtOC4yMjktMS4xNDYtMTEuMzc1LDEuNTQyQzQxNi41MSwxOTUuMDEsMzE3LjA1MiwyNzkuNjg4LDI4NS43NiwzMDcuODg1ICAgICBjLTE3LjU2MywxNS44NTQtNDEuOTM4LDE1Ljg1NC01OS41NDItMC4wMjFjLTMzLjM1NC0zMC4wNTItMTQ1LjA0Mi0xMjUtMjA4LjY1Ni0xNzguOTE3Yy0zLjE2Ny0yLjY4OC03LjYyNS0zLjI4MS0xMS4zNzUtMS41NDIgICAgIEMyLjQxNywxMjkuMTU2LDAsMTMyLjkyNywwLDEzNy4wODN2MjY4LjI1QzAsNDI4Ljg2NSwxOS4xMzUsNDQ4LDQyLjY2Nyw0NDhoNDI2LjY2N0M0OTIuODY1LDQ0OCw1MTIsNDI4Ljg2NSw1MTIsNDA1LjMzMyAgICAgdi0yNjguMjVDNTEyLDEzMi45MjcsNTA5LjU4MywxMjkuMTQ2LDUwNS44MTMsMTI3LjQwNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" /><p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};margin:3px;font-family: Calibri">${this.state.userEmail}</p></div>
                        <div style="display: flex;align-items: center"> <img height="15px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBDMTUzLjc1NSwwLDcwLjU3Myw4My4xODIsNzAuNTczLDE4NS40MjZjMCwxMjYuODg4LDE2NS45MzksMzEzLjE2NywxNzMuMDA0LDMyMS4wMzUgICAgYzYuNjM2LDcuMzkxLDE4LjIyMiw3LjM3OCwyNC44NDYsMGM3LjA2NS03Ljg2OCwxNzMuMDA0LTE5NC4xNDcsMTczLjAwNC0zMjEuMDM1QzQ0MS40MjUsODMuMTgyLDM1OC4yNDQsMCwyNTYsMHogTTI1NiwyNzguNzE5ICAgIGMtNTEuNDQyLDAtOTMuMjkyLTQxLjg1MS05My4yOTItOTMuMjkzUzIwNC41NTksOTIuMTM0LDI1Niw5Mi4xMzRzOTMuMjkxLDQxLjg1MSw5My4yOTEsOTMuMjkzUzMwNy40NDEsMjc4LjcxOSwyNTYsMjc4LjcxOXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" /><p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};margin:3px;font-family: Calibri">${this.state.userCity}</p></div>
                    </div>
                    <div style="margin-right: 15px">
                        <div style="display: flex;align-items: center"> <img height="15px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" /><p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};margin:3px;font-family: Calibri">kuzey61</p></div>
                        <div style="display: flex;align-items: center"> <img height="15px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDM2MmM0MS4zNTE1NjIgMCA3NS0zMy42NDg0MzggNzUtNzV2LTM2MmMwLTQxLjM1MTU2Mi0zMy42NDg0MzgtNzUtNzUtNzV6bS0yNTYgNDA2aC02MHYtMjEwaDYwem0wLTI0MGgtNjB2LTYwaDYwem0yMTAgMjQwaC02MHYtMTIwYzAtMTYuNTM5MDYyLTEzLjQ2MDkzOC0zMC0zMC0zMHMtMzAgMTMuNDYwOTM4LTMwIDMwdjEyMGgtNjB2LTIxMGg2MHYxMS4zMDg1OTRjMTUuNzE4NzUtNC44ODY3MTkgMjUuOTI5Njg4LTExLjMwODU5NCA0NS0xMS4zMDg1OTQgNDAuNjkxNDA2LjA0Mjk2OSA3NSAzNi41NDY4NzUgNzUgNzkuNjg3NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" /><p style="color:#E4E4E4;margin:3px;font-family: Calibri">kuzeymollaoğlu</p></div>
                        <div style="display: flex;align-items: center"> <img height="15px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+Cgk8cGF0aCBkPSJNNDE0LjQxLDI0LjEyM0MzOTguMzMzLDguMDQyLDM3OC45NjMsMCwzNTYuMzE1LDBIODIuMjI4QzU5LjU4LDAsNDAuMjEsOC4wNDIsMjQuMTI2LDI0LjEyMyAgIEM4LjA0NSw0MC4yMDcsMC4wMDMsNTkuNTc2LDAuMDAzLDgyLjIyNXYyNzQuMDg0YzAsMjIuNjQ3LDguMDQyLDQyLjAxOCwyNC4xMjMsNTguMTAyYzE2LjA4NCwxNi4wODQsMzUuNDU0LDI0LjEyNiw1OC4xMDIsMjQuMTI2ICAgaDI3NC4wODRjMjIuNjQ4LDAsNDIuMDE4LTguMDQyLDU4LjA5NS0yNC4xMjZjMTYuMDg0LTE2LjA4NCwyNC4xMjYtMzUuNDU0LDI0LjEyNi01OC4xMDJWODIuMjI1ICAgQzQzOC41MzIsNTkuNTc2LDQzMC40OSw0MC4yMDQsNDE0LjQxLDI0LjEyM3ogTTMzNS40NzEsMTY4LjczNWMwLjE5MSwxLjcxMywwLjI4OCw0LjI3OCwwLjI4OCw3LjcxICAgYzAsMTUuOTg5LTIuMzM0LDMyLjAyNS02Ljk5NSw0OC4xMDRjLTQuNjYxLDE2LjA4Ny0xMS44LDMxLjUwNC0yMS40MTYsNDYuMjU0Yy05LjYwNiwxNC43NDktMjEuMDc0LDI3Ljc5MS0zNC4zOTYsMzkuMTE1ICAgYy0xMy4zMjUsMTEuMzItMjkuMzExLDIwLjM2NS00Ny45NjgsMjcuMTE3Yy0xOC42NDgsNi43NjItMzguNjM3LDEwLjE0My01OS45NTMsMTAuMTQzYy0zMy4xMTYsMC02My43Ni04Ljk1Mi05MS45MzEtMjYuODM2ICAgYzQuNTY4LDAuNTY4LDkuMzI5LDAuODU1LDE0LjI3NSwwLjg1NWMyNy42LDAsNTIuNDM5LTguNTY1LDc0LjUxOS0yNS43Yy0xMi45NDEtMC4xODUtMjQuNTA2LTQuMTc5LTM0LjY4OC0xMS45OTEgICBjLTEwLjE4NS03LjgwMy0xNy4yNzMtMTcuNjk5LTIxLjI3MS0yOS42OTFjNC45NDcsMC43Niw4LjY1OCwxLjEzNywxMS4xMzIsMS4xMzdjNC4xODcsMCw5LjA0Mi0wLjc2LDE0LjU2LTIuMjc5ICAgYy0xMy44OTQtMi42NjktMjUuNTk4LTkuNTYyLTM1LjExNS0yMC42OTdjLTkuNTE5LTExLjEzNi0xNC4yNzctMjMuODQtMTQuMjc3LTM4LjExNHYtMC41NzEgICBjMTAuMDg1LDQuNzU1LDE5LjYwMiw3LjIyOSwyOC41NDksNy40MjJjLTE3LjMyMS0xMS42MTMtMjUuOTgxLTI4LjI2NS0yNS45ODEtNDkuOTYzYzAtMTAuNjYsMi43NTgtMjAuNzQ3LDguMjc4LTMwLjI2NCAgIGMxNS4wMzUsMTguNDY0LDMzLjMxMSwzMy4yMTMsNTQuODE2LDQ0LjI1MmMyMS41MDcsMTEuMDM4LDQ0LjU0LDE3LjIyNyw2OS4wOTIsMTguNTU4Yy0wLjk1LTMuNjE2LTEuNDI3LTguMTg2LTEuNDI3LTEzLjcwNCAgIGMwLTE2LjU2Miw1Ljg1My0zMC42OTIsMTcuNTYtNDIuMzk5YzExLjcwMy0xMS43MDYsMjUuODM3LTE3LjU2MSw0Mi4zOTQtMTcuNTYxYzE3LjUxNSwwLDMyLjA3OSw2LjI4Myw0My42ODgsMTguODQ2ICAgYzEzLjEzNC0yLjQ3NCwyNS44OTItNy4zMywzOC4yNi0xNC41NmMtNC43NTcsMTQuNjUyLTEzLjYxMywyNS43ODgtMjYuNTUsMzMuNDAyYzEyLjM2OC0xLjcxNiwyMy44OC00Ljk1LDM0LjUzNy05LjcwOCAgIEMzNTcuNDU4LDE0OS43OTMsMzQ3LjQ2MiwxNjAuMTY2LDMzNS40NzEsMTY4LjczNXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" /><p style="color:#E4E4E4;margin:3px;font-family: Calibri">@kuzey61</p></div>
                        <div style="display: flex;align-items: center"> <img height="15px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDQ3LjYzMiA0NDciIHdpZHRoPSI1MTIiPjxnPjxwYXRoIGQ9Im0yMzEuODE2NDA2IDQ0Ny4wNTA3ODFjMzQuMjMwNDY5LTQuODYzMjgxIDY0LjIzODI4Mi00MC41ODk4NDMgODMuMTIxMDk0LTkzLjM1MTU2Mi0yNy4yOTY4NzUtNi4xMTMyODEtNTUuMTUyMzQ0LTkuMzk0NTMxLTgzLjEyMTA5NC05Ljc4NTE1N3ptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTI4Ni41MDM5MDYgNDM4LjY2MDE1NmMyLjAyMzQzOC0uNTg1OTM3IDQuMDM5MDYzLTEuMTc1NzgxIDYuMDM5MDYzLTEuODI0MjE4IDEuNjg3NS0uNTQyOTY5IDMuMzUxNTYyLTEuMTI4OTA3IDUuMDE1NjI1LTEuNzEwOTM4IDEuOTY4NzUtLjY3OTY4OCAzLjkyOTY4Ny0xLjM3ODkwNiA1Ljg4MjgxMi0yLjEyMTA5NCAxLjY2NDA2My0uNjMyODEyIDMuMzEyNS0xLjMwNDY4NyA0Ljk2NDg0NC0xLjk3NjU2MiAxLjkwNjI1LS44MDA3ODIgMy44MDg1OTQtMS41OTc2NTYgNS42OTE0MDYtMi4zOTg0MzggMS42NDQ1MzItLjcyMjY1NiAzLjI3NzM0NC0xLjQ4MDQ2OCA0LjkxMDE1Ni0yLjI0MjE4NyAxLjg0NzY1Ny0uODcxMDk0IDMuNjg3NS0xLjc1NzgxMyA1LjUxMTcxOS0yLjY3OTY4OCAxLjYwMTU2My0uODE2NDA2IDMuMTk5MjE5LTEuNjQ4NDM3IDQuODAwNzgxLTIuNTAzOTA2IDEuNzkyOTY5LS45NjA5MzcgMy41NzQyMTktMS45NDE0MDYgNS4zNDM3NS0yLjk0OTIxOSAxLjYwMTU2My0uOTA2MjUgMy4xNDQ1MzItMS44MTY0MDYgNC43MDMxMjYtMi43NTM5MDYgMS43MzQzNzQtMS4wNjY0MDYgMy40NjA5MzctMi4xMzI4MTIgNS4xNzU3ODEtMy4xOTkyMTkgMS41MzUxNTYtLjk3NjU2MiAzLjA2NjQwNi0xLjk2ODc1IDQuNTc4MTI1LTIuOTkyMTg3IDEuNjg3NS0xLjEzNjcxOSAzLjM1MTU2Mi0yLjMyMDMxMyA1LjAwNzgxMi0zLjUwMzkwNiAxLjQ4ODI4Mi0xLjA2NjQwNyAyLjk2ODc1LTIuMTI4OTA3IDQuNDIxODc1LTMuMTk5MjE5IDEuNjAxNTYzLTEuMjM0Mzc1IDMuMjQyMTg4LTIuNTExNzE5IDQuODQ3NjU3LTMuNzkyOTY5IDEuNDI1NzgxLTEuMTM2NzE5IDIuODQ3NjU2LTIuMjY1NjI1IDQuMjUtMy40MzM1OTQgMS41OTc2NTYtMS4zMjgxMjUgMy4xMjg5MDYtMi43MDMxMjUgNC42Nzk2ODctNC4wNzgxMjUgMS4zNTkzNzUtMS4yMDcwMzEgMi43MjY1NjMtMi40MDIzNDMgNC4wNTQ2ODctMy42NDA2MjUgMS41MjczNDQtMS40MjU3ODEgMy4wMTU2MjYtMi45MDIzNDQgNC41MDM5MDctNC4zNjcxODcgMS4yODkwNjItMS4yNzM0MzggMi41OTM3NS0yLjUyNzM0NCAzLjg1NTQ2OS0zLjgzMjAzMS4yMzQzNzQtLjI0MjE4OC40NTcwMzEtLjUwMzkwNy42OTkyMTgtLjc1MzkwNy0xNy40NDkyMTgtOS4wMTE3MTktMzUuODI4MTI1LTE2LjA4NTkzNy01NC44MTY0MDYtMjEuMDkzNzUtOS44NzUgMzEuNDkyMTg4LTI3LjQ0OTIxOSA2MC4wMzEyNS01MS4xMjg5MDYgODMuMDIzNDM4LjY0ODQzNy0uMTY3OTY5IDEuMjk2ODc1LS4zMDQ2ODggMS45NDUzMTItLjQ3MjY1NyAxLjcxMDkzOC0uNDgwNDY4IDMuMzkwNjI1LTEuMDA3ODEyIDUuMDYyNS0xLjUwMzkwNnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQ0Ny42MzI4MTIgMjMxLjY4MzU5NGgtOTUuOTIxODc0Yy0uMzYzMjgyIDM3LjQ1MzEyNS01Ljc5Njg3NiA3NC42ODM1OTQtMTYuMTUyMzQ0IDExMC42Nzk2ODcgMjEuMTE3MTg3IDUuNjQwNjI1IDQxLjQ5NjA5NCAxMy43NSA2MC43MTQ4NDQgMjQuMTYwMTU3IDMxLjU1NDY4Ny0zOC4wMzEyNSA0OS42MTcxODctODUuNDQ5MjE5IDUxLjM1OTM3NC0xMzQuODM5ODQ0em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjMxLjgxNjQwNiAyMTUuNjgzNTk0aDEwMy44OTQ1MzJjLS40MDYyNS0zNi4xMjg5MDYtNS43MDcwMzItNzIuMDM1MTU2LTE1Ljc1LTEwNi43NDIxODgtMjguOTI5Njg4IDYuNTk3NjU2LTU4LjQ3NjU2MyAxMC4xMjEwOTQtODguMTQ0NTMyIDEwLjUxMTcxOXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTIzMS44MTY0MDYuMzE2NDA2djEwMy4xMzY3MTljMjcuOTY4NzUtLjM5NDUzMSA1NS44MjQyMTktMy42NzE4NzUgODMuMTIxMDk0LTkuNzg1MTU2LTE4Ljg4MjgxMi01Mi43NjE3MTktNDguODkwNjI1LTg4LjQ4ODI4MS04My4xMjEwOTQtOTMuMzUxNTYzem0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjMxLjgxNjQwNiAzMjcuOTE0MDYyYzI5LjY2Nzk2OS4zOTQ1MzIgNTkuMjE0ODQ0IDMuOTE3OTY5IDg4LjE0NDUzMiAxMC41MTU2MjYgMTAuMDQyOTY4LTM0LjcwNzAzMiAxNS4zNDM3NS03MC42MTcxODggMTUuNzUtMTA2Ljc0NjA5NGgtMTAzLjg5NDUzMnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTM5Ni4yNzM0MzggODAuODQzNzVjLTE5LjIxODc1IDEwLjQxMDE1Ni0zOS41OTc2NTcgMTguNTE5NTMxLTYwLjcxNDg0NCAyNC4xNjAxNTYgMTAuMzU1NDY4IDM1Ljk5NjA5NCAxNS43ODkwNjIgNzMuMjI2NTYzIDE2LjE1MjM0NCAxMTAuNjc5Njg4aDk1LjkyMTg3NGMtMS43NDYwOTMtNDkuMzg2NzE5LTE5LjgwODU5My05Ni44MDQ2ODgtNTEuMzU5Mzc0LTEzNC44Mzk4NDR6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRTRFNEU0IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0zODUuNDY0ODQ0IDY4LjcwNzAzMWMtLjIzNDM3NS0uMjM4MjgxLS40NTcwMzItLjQ5NjA5My0uNjg3NS0uNzQyMTg3LTEuMjY1NjI1LTEuMzA0Njg4LTIuNTc4MTI1LTIuNTYyNS0zLjg2NzE4OC0zLjgzMjAzMi0xLjQ4NDM3NS0xLjQ2NDg0My0yLjk2NDg0NC0yLjk0NTMxMi00LjQ5NjA5NC00LjM2NzE4Ny0xLjMyNDIxOC0xLjIzNDM3NS0yLjY5NTMxMi0yLjQwMjM0NC00LjA1NDY4Ny0zLjYzMjgxMy0xLjU1MDc4MS0xLjM3NS0zLjEwMTU2My0yLjc2MTcxOC00LjY5NTMxMy00LjA4OTg0My0xLjM4MjgxMi0xLjE2Nzk2OS0yLjgwMDc4MS0yLjI4NTE1Ny00LjIwNzAzMS0zLjQwNjI1LTEuNjAxNTYyLTEuMjk2ODc1LTMuMjQyMTg3LTIuNTg1OTM4LTQuODkwNjI1LTMuODI0MjE5LTEuNDQ1MzEyLTEuMDg5ODQ0LTIuOTEwMTU2LTIuMTQ0NTMxLTQuMzgyODEyLTMuMTk5MjE5LTEuNjcxODc1LTEuMjAzMTI1LTMuMzUxNTYzLTIuNDAyMzQzLTUuMDU0Njg4LTMuNTQ2ODc1LTEuNDk2MDk0LTEuMDA3ODEyLTMuMDE1NjI1LTEuOTkyMTg3LTQuNTM1MTU2LTIuOTU3MDMxLTEuNzMwNDY5LTEuMTEzMjgxLTMuNDU3MDMxLTIuMjAzMTI1LTUuMjE4NzUtMy4yNTc4MTMtMS41NDI5NjktLjkyNTc4MS0zLjEwMTU2Mi0xLjgzOTg0My00LjY2NDA2Mi0yLjcyNjU2Mi0xLjc4OTA2My0xLjAyMzQzOC0zLjU4MjAzMi0yLjAxNTYyNS01LjM5MDYyNi0yLjk4NDM3NS0xLjYwMTU2Mi0uODAwNzgxLTMuMTk5MjE4LTEuNjcxODc1LTQuODAwNzgxLTIuNDcyNjU2LTEuODM5ODQzLS45Mjk2ODgtMy42OTUzMTItMS44MjQyMTktNS41OTc2NTYtMi43MDMxMjUtMS42MDE1NjMtLjc2MTcxOS0zLjIyNjU2My0xLjUwMzkwNi00Ljg3NS0yLjIyNjU2My0xLjg5NDUzMS0uODM5ODQzLTMuODA4NTk0LTEuNTk3NjU2LTUuNzE4NzUtMi4zOTg0MzctMS42NDg0MzctLjY3MTg3NS0zLjI4OTA2My0xLjMzNTkzOC00Ljk1MzEyNS0xLjk2ODc1LTEuOTQxNDA2LS43NDIxODgtMy45MTAxNTYtMS40Mzc1LTUuODc4OTA2LTIuMTE3MTg4LTEuNjY0MDYzLS41ODU5MzctMy4zMjgxMjUtMS4xNjc5NjgtNS4wMTU2MjUtMS43MTQ4NDQtMi0uNjQ4NDM3LTQtMS4yMzgyODEtNi4wNTQ2ODgtMS44MzIwMzEtMS42NjQwNjItLjQ4ODI4MS0zLjMzNTkzNy0uOTg0Mzc1LTUuMDE5NTMxLTEuNDI5Njg3LS42NDQ1MzEtLjE3NTc4Mi0xLjMwMDc4MS0uMzEyNS0xLjk0OTIxOS0uNDgwNDY5IDIzLjY3OTY4OCAyMi45OTIxODcgNDEuMjUgNTEuNTI3MzQ0IDUxLjEyODkwNyA4My4wMjM0MzcgMTkuMDA3ODEyLTUuMDA3ODEyIDM3LjQxNDA2Mi0xMi4wODU5MzcgNTQuODc4OTA2LTIxLjExMzI4MXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTAgMjE1LjY4MzU5NGg5NS45MjE4NzVjLjM2MzI4MS0zNy40NTMxMjUgNS43OTY4NzUtNzQuNjgzNTk0IDE2LjE0ODQzNy0xMTAuNjc5Njg4LTIxLjExMzI4MS01LjYzNjcxOC00MS40OTIxODctMTMuNzQ2MDk0LTYwLjcxMDkzNy0yNC4xNjAxNTYtMzEuNTU0Njg3IDM4LjAzMTI1LTQ5LjYxNzE4NyA4NS40NTMxMjUtNTEuMzU5Mzc1IDEzNC44Mzk4NDR6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRTRFNEU0IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0yMTUuODE2NDA2IDQ0Ny4wNTA3ODF2LTEwMy4xMzY3MTljLTI3Ljk2ODc1LjM5NDUzMi01NS44MjQyMTggMy42NzE4NzYtODMuMTIxMDk0IDkuNzg1MTU3IDE4Ljg3ODkwNyA1Mi43NjE3MTkgNDguODkwNjI2IDg4LjQ4ODI4MSA4My4xMjEwOTQgOTMuMzUxNTYyem0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjE1LjgxNjQwNiAyMzEuNjgzNTk0aC0xMDMuODk0NTMxYy40MDYyNSAzNi4xMjg5MDYgNS43MDMxMjUgNzIuMDM5MDYyIDE1Ljc1IDEwNi43NDYwOTQgMjguOTI5Njg3LTYuNjAxNTYzIDU4LjQ3MjY1Ni0xMC4xMjUgODguMTQ0NTMxLTEwLjUxNTYyNnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTIxNS44MTY0MDYuMzE2NDA2Yy0zNC4yMzA0NjggNC44NjMyODItNjQuMjQyMTg3IDQwLjU4OTg0NC04My4xMjEwOTQgOTMuMzUxNTYzIDI3LjI5Njg3NiA2LjExNzE4NyA1NS4xNTIzNDQgOS4zOTQ1MzEgODMuMTIxMDk0IDkuNzg1MTU2em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjE1LjgxNjQwNiAxMTkuNDUzMTI1Yy0yOS42Njc5NjgtLjM5MDYyNS01OS4yMTQ4NDQtMy45MTQwNjMtODguMTQ0NTMxLTEwLjUxMTcxOS0xMC4wNDY4NzUgMzQuNzA3MDMyLTE1LjM0Mzc1IDcwLjYxMzI4Mi0xNS43NSAxMDYuNzQyMTg4aDEwMy44OTQ1MzF6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRTRFNEU0IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0xNjguMTEzMjgxIDYuNzg5MDYyYy0uNjQ4NDM3LjE2Nzk2OS0xLjI5Njg3NS4zMDQ2ODgtMS45NDUzMTIuNDcyNjU3LTEuNjk1MzEzLjQ1MzEyNS0zLjM2NzE4OC45NTcwMzEtNS4wNTQ2ODggMS40NDUzMTItMi4wMDc4MTIuNTg1OTM4LTQgMS4xNzU3ODEtNi4wMTU2MjUgMS44MTY0MDctMS42OTkyMTguNTUwNzgxLTMuMzcxMDk0IDEuMTM2NzE4LTUuMDQyOTY4IDEuNzE4NzUtMS45NTcwMzIuNjkxNDA2LTMuOTE3OTY5IDEuMzc4OTA2LTUuODU1NDY5IDIuMTEzMjgxLTEuNjcxODc1LjY0MDYyNS0zLjMyMDMxMyAxLjMwNDY4Ny00Ljk3NjU2MyAxLjk4NDM3NS0xLjkwMjM0NC44MDA3ODEtMy44MDg1OTQgMS42MDE1NjItNS42ODc1IDIuMzk4NDM3LTEuNjQ4NDM3LjcyMjY1Ny0zLjI3NzM0NCAxLjQ4MDQ2OS00LjkxMDE1NiAyLjI0MjE4OC0xLjg0NzY1Ni44NzEwOTMtMy42ODc1IDEuNzU3ODEyLTUuNTExNzE5IDIuNjc5Njg3LTEuNjAxNTYyLjgxNjQwNi0zLjIwMzEyNSAxLjY1MjM0NC00LjgwMDc4MSAyLjUwMzkwNi0xLjc5Mjk2OS45NjA5MzgtMy41NzAzMTIgMS45NDUzMTMtNS4zMzU5MzggMi45NTMxMjYtMS42MDE1NjIuODk0NTMxLTMuMTc1NzgxIDEuODEyNS00LjcxODc1IDIuNzUtMS43MzgyODEgMS4wNDY4NzQtMy40NTcwMzEgMi4xMjg5MDYtNS4xNjc5NjggMy4xOTkyMTgtMS41MzkwNjMuOTg0Mzc1LTMuMDY2NDA2IDEuOTc2NTYzLTQuNTc4MTI1IDMtMS42ODc1IDEuMTM2NzE5LTMuMzUxNTYzIDIuMzIwMzEzLTUuMDA3ODEzIDMuNTAzOTA2LTEuNDg4MjgxIDEuMDY2NDA3LTIuOTY4NzUgMi4xMjg5MDctNC40MjU3ODEgMy4yMDMxMjYtMS42MzY3MTkgMS4yMzA0NjgtMy4xOTkyMTkgMi41MTE3MTgtNC44NDc2NTYgMy43ODkwNjItMS40MjE4NzUgMS4xMzY3MTktMi44NTU0NjkgMi4yNjU2MjUtNC4yNDYwOTQgMy40NDE0MDYtMS42MDE1NjMgMS4zMjAzMTMtMy4xMjEwOTQgMi42ODc1LTQuNjY0MDYzIDQuMDU0Njg4LTEuMzY3MTg3IDEuMjE4NzUtMi43NDYwOTMgMi40MDIzNDQtNC4wODIwMzEgMy42NjQwNjItMS41MTk1MzEgMS40MTc5NjktMyAyLjg5MDYyNS00LjQ4NDM3NSA0LjM1MTU2My0xLjI4OTA2MiAxLjI3MzQzNy0yLjYwMTU2MiAyLjUzMTI1LTMuODY3MTg3IDMuODM5ODQzLS4yMzA0NjkuMjQyMTg4LS40NTMxMjUuNTA3ODEzLS42OTUzMTMuNzUzOTA3IDE3LjQ0NTMxMyA5LjAxNTYyNSAzNS44MjgxMjUgMTYuMDg5ODQzIDU0LjgxNjQwNiAyMS4wOTc2NTYgOS44NzUtMzEuNDc2NTYzIDI3LjQzNzUtNTkuOTk2MDk0IDUxLjEwNTQ2OS04Mi45NzY1NjN6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRTRFNEU0IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im02Ni43MTg3NSAzODMuMjM0Mzc1YzEuNDg4MjgxIDEuNDY0ODQ0IDIuOTY4NzUgMi45NDUzMTMgNC40OTYwOTQgNC4zNzEwOTQgMS4zMjgxMjUgMS4yMzA0NjkgMi42OTUzMTIgMi4zOTg0MzcgNC4wNTg1OTQgMy42Mjg5MDYgMS41NTA3ODEgMS4zNzg5MDYgMy4xMDE1NjIgMi43NjE3MTkgNC42OTUzMTIgNC4wODk4NDQgMS4zODI4MTIgMS4xNjAxNTYgMi43OTI5NjkgMi4yODEyNSA0LjIwNzAzMSAzLjQwNjI1IDEuNjAxNTYzIDEuMjk2ODc1IDMuMTk5MjE5IDIuNTg1OTM3IDQuODk0NTMxIDMuODMyMDMxIDEuNDQxNDA3IDEuMDgyMDMxIDIuOTA2MjUgMi4xMjg5MDYgNC4zNzEwOTQgMy4yMDMxMjUgMS42NzE4NzUgMS4xOTkyMTkgMy4zNTkzNzUgMi4zOTg0MzcgNS4wNjI1IDMuNTUwNzgxIDEuNDk2MDk0IDEuMDA3ODEzIDMuMDE1NjI1IDEuOTkyMTg4IDQuNTM1MTU2IDIuOTYwOTM4IDEuNzMwNDY5IDEuMTA5Mzc1IDMuNDU3MDMyIDIuMTk5MjE4IDUuMjE4NzUgMy4yNTM5MDYgMS41NDI5NjkuOTI5Njg4IDMuMTAxNTYzIDEuODM5ODQ0IDQuNjY0MDYzIDIuNzMwNDY5IDEuNzg5MDYzIDEuMDIzNDM3IDMuNTgyMDMxIDIuMDE1NjI1IDUuMzkwNjI1IDIuOTgwNDY5IDEuNTk3NjU2LjgwMDc4MSAzLjE5OTIxOSAxLjY3MTg3NCA0LjgwMDc4MSAyLjQ3MjY1NiAxLjgzOTg0NC45Mjk2ODcgMy42OTUzMTMgMS44MjQyMTggNS41OTc2NTcgMi43MDcwMzEgMS42MDE1NjIuNzUzOTA2IDMuMjI2NTYyIDEuNDk2MDk0IDQuODc1IDIuMjIyNjU2IDEuODk0NTMxLjgzOTg0NCAzLjgwNDY4NyAxLjU5NzY1NyA1LjcxODc1IDIuMzk4NDM4IDEuNjQ4NDM3LjY3MTg3NSAzLjI4OTA2MiAxLjMzNTkzNyA0Ljk1MzEyNCAxLjk2ODc1IDEuOTQxNDA3Ljc0NjA5MyAzLjkxMDE1NyAxLjQ0MTQwNiA1Ljg3ODkwNyAyLjEyMTA5MyAxLjY2NDA2Mi41ODIwMzIgMy4zMjgxMjUgMS4xNjc5NjkgNS4wMTU2MjUgMS43MTA5MzggMiAuNjQ4NDM4IDQgMS4yNDIxODggNi4wNTQ2ODcgMS44MzIwMzEgMS42NjQwNjMuNDg4MjgxIDMuMzM1OTM4Ljk4NDM3NSA1LjAxNTYyNSAxLjQzMzU5NC42NDg0MzguMTc1NzgxIDEuMzA0Njg4LjMxMjUgMS45NTMxMjUuNDgwNDY5LTIzLjY3OTY4Ny0yMi45OTYwOTQtNDEuMjUtNTEuNTMxMjUtNTEuMTI4OTA2LTgzLjAyNzM0NC0xOC45ODgyODEgNS4wMTE3MTktMzcuMzcxMDk0IDEyLjA4NTkzOC01NC44MTY0MDYgMjEuMTA1NDY5LjIzNDM3NS4yMzgyODEuNDU3MDMxLjQ5NjA5My42OTE0MDYuNzQyMTg3IDEuMTk5MjE5IDEuMjk2ODc1IDIuNDkyMTg3IDIuNTU0Njg4IDMuNzk2ODc1IDMuODI0MjE5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0U0RTRFNCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtNTEuMzU5Mzc1IDM2Ni41MjM0MzhjMTkuMjE4NzUtMTAuNDEwMTU3IDM5LjU5NzY1Ni0xOC41MTk1MzIgNjAuNzEwOTM3LTI0LjE2MDE1Ny0xMC4zNTE1NjItMzUuOTk2MDkzLTE1Ljc4NTE1Ni03My4yMjY1NjItMTYuMTQ4NDM3LTExMC42Nzk2ODdoLTk1LjkyMTg3NWMxLjc0NjA5NCA0OS4zODY3MTggMTkuODA0Njg4IDk2LjgwNDY4NyA1MS4zNTkzNzUgMTM0LjgzOTg0NHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" /><p style="color:#E4E4E4;margin:3px;font-family: Calibri">kuzey61.com</p></div>
                    </div>
                </div>

            </div>
        </div>



        <div style="width: 100%;min-height: 530px;display: flex">
            <div style="width: 40%;min-height: 100%;border-right: 2px solid #707070">
                <div style="margin-bottom: 30px">
                    <p style="font-size: 18px;margin:0;margin-top: 20px;color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;margin-left: 15px">Bildiği Diller</p>
                    <div style="display: flex;margin-left: 25px">
                       <div style="margin-right: 10px">
                           <p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-size: 15px;font-family: Calibri;margin:0">- Türkçe</p>
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
                    <p style="font-size: 18px;margin:0;margin-top: 20px;color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;margin-left: 15px">Yetenekler</p>
                    <div style="display: flex;margin-left: 25px">
                        <div style="margin-right: 10px">
                            <p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-size: 15px;font-family: Calibri;margin:0">- JavaScript</p>
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
                    <p style="font-size: 18px;margin:0;margin-top: 20px;color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;margin-left: 15px">İlgi Alanları</p>
                    <div style="margin-left: 25px">
                        <div style="margin-right: 10px">
                            <p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-size: 15px;font-family: Calibri;margin:0">- Kapmçılık</p>
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
                    <p style="font-size: 20px;color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;margin: 20px 0 0 15px;display:flex;align-items:center">
                        <img height="30px" style="margin-right: 5px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiI+PGc+PHBhdGggZD0ibTUwMS45OTEgMTI4LjM1NC0yNDEtODUuMDMxYy0zLjIyOS0xLjE0LTYuNzUyLTEuMTQtOS45ODEgMGwtMjQxIDg1LjAzMWMtNS45OTIgMi4xMTQtMTAuMDAyIDcuNzc0LTEwLjAxIDE0LjEyOHMzLjk4OSAxMi4wMjMgOS45NzYgMTQuMTUxbDI0MSA4NS42NzdjMS42MjUuNTc4IDMuMzI1Ljg2NyA1LjAyNC44NjcgMS43IDAgMy4zOTktLjI4OSA1LjAyNC0uODY3bDI0MS04NS42NzdjNS45ODctMi4xMjggOS45ODMtNy43OTcgOS45NzYtMTQuMTUxLS4wMDgtNi4zNTQtNC4wMTgtMTIuMDE0LTEwLjAwOS0xNC4xMjh6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQ3NS45NzMgMzI4LjU3NHYtMTMwLjg0bC0zMCAxMC42NjV2MTIwLjE3NWMtOS4wMzYgNS4yMDEtMTUuMTI1IDE0Ljk0Ni0xNS4xMjUgMjYuMTIxIDAgMTEuMTc0IDYuMDg5IDIwLjkyIDE1LjEyNSAyNi4xMjF2NzMuNzE2YzAgOC4yODQgNi43MTYgMTUgMTUgMTVzMTUtNi43MTYgMTUtMTV2LTczLjcxNWM5LjAzNi01LjIgMTUuMTI1LTE0Ljk0NyAxNS4xMjUtMjYuMTIxIDAtMTEuMTc1LTYuMDg4LTIwLjkyMS0xNS4xMjUtMjYuMTIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRTRFNEU0IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0yNTYgMjczLjE3N2MtNS4xNDkgMC0xMC4yMi0uODc1LTE1LjA3My0yLjZsLTEzNS40ODMtNDguMTY1djY2LjAwOGMwIDE2LjE0OSAxNi44NDcgMjkuODA2IDUwLjA3MyA0MC41OSAyOC45NjEgOS40IDY0LjY0NyAxNC41NzcgMTAwLjQ4MyAxNC41NzdzNzEuNTIxLTUuMTc3IDEwMC40ODMtMTQuNTc3YzMzLjIyNi0xMC43ODQgNTAuMDczLTI0LjQ0MSA1MC4wNzMtNDAuNTl2LTY2LjAwOGwtMTM1LjQ4MiA0OC4xNjVjLTQuODU0IDEuNzI1LTkuOTI1IDIuNi0xNS4wNzQgMi42eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRTRFNEU0IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" />Eğitim
                    </p>
                    <div style="width: 90%;margin-left: 25px;margin-top: 5px">
                        <p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size: 14px;margin:0">Gaziantep Üniversitesi/Fen Edebiyat Fakültesi</p>
                        <p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size: 14px;margin:0">Biyoloji Bölümü</p>
                        <p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size: 14px;margin:0">09.2013-06.2020</p>
                    </div>
                </div>

                <div>
                    <p style="font-size: 20px;color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;margin: 20px 0 0 15px;display:flex;align-items:center">
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
                    <p style="color: ${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size:16px;margin: 5px 0 0 18px;">- Rat Yazılım</p>
                    <div style="width: 90%;margin-left: 25px;margin-top: 3px">
                        <p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size: 14px;margin: 2px 0 0;">React Native Developer</p>
                        <p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size: 14px;margin: 2px 0 0;">05.2018-09.2020</p>
                        <p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size: 14px;margin: 2px 0 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
                <div>
                    <p style="font-size: 20px;color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;margin: 20px 0 0 15px;display: flex;align-items: center">
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
                    <p style="color: ${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size:16px;margin: 5px 0 0 18px;">- WeatherApp</p>
                    <div style="width: 90%;margin-left: 25px;margin-top: 3px">
                        <p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size: 14px;margin: 2px 0 0;">Araçlar: Vue.js, Vue-Router, Vuex, Firebase, Bootstrap</p>
                        <p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size: 14px;margin: 2px 0 0;">kuzeydev-weather.wep.app</p>
                        <p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size: 14px;margin: 2px 0 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
                <div>
                    <p style="font-size: 20px;margin:0;margin-top: 20px;color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;margin-left: 15px;display:flex;align-items:center">
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
                    <p style="color: ${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size:16px;margin: 3px 0 0 25px;">GAÜN YAZILIM TOPLULUĞU / <i style="font-size: 14px">üye</i></p>
                    <p style="color: ${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size:16px;margin: 3px 0 0 25px;">KODLUYORUZ / <i style="font-size: 14px">mezun</i></p>
                </div>
                <div>
                    <p style="font-size: 20px;color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;margin: 20px 0 0 15px">
                        <img height="25px" style="margin-right: 5px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNTExLjU2Myw0MzQuMjU5Yy0xLjcyOC0xNDIuMzI5LTEyNC40Mi0yNTguMjQyLTI3Ny4wODctMjYzLjQxOVY5NS45OTljMC0xNy42NDUtMTQuMzQyLTMxLjk5OS0zMS45NzQtMzEuOTk5ICAgIGMtNy45MzEsMC0xNS41OTEsMy4wNDItMjEuNTI0LDguNTYyYzAsMC0xMzQuODI4LDEyNC44MjktMTczLjYwOSwxNjMuNzU1QzIuNjIzLDI0MS4xMDksMCwyNDguMDg4LDAsMjU1Ljk5NCAgICBjMCw3LjkwNiwyLjYyMywxNC44ODUsNy4zNjksMTkuNjg3YzM4Ljc4MSwzOC45MTUsMTczLjYwOSwxNjMuNzQ1LDE3My42MDksMTYzLjc0NWM1LjkzMyw1LjUyMSwxMy41OTMsOC41NjIsMjEuNTI0LDguNTYyICAgIGMxNy42MzEsMCwzMS45NzQtMTQuMzU0LDMxLjk3NC0zMS45OTl2LTc0LjU5MWMxNTMuNDc5LDIuMTU2LDI1NS43OTIsNTAuNjAzLDI1NS43OTIsOTUuOTI0YzAsNS44OTYsNC43NjcsMTAuNjY2LDEwLjY1OCwxMC42NjYgICAgYzAuMTY3LDAuMDIxLDAuMzMzLDAuMDEsMC40MTYsMGM1Ljg5MSwwLDEwLjY1OC00Ljc3MSwxMC42NTgtMTAuNjY2QzUxMiw0MzYuMjU5LDUxMS44NTQsNDM1LjIyOCw1MTEuNTYzLDQzNC4yNTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNFNEU0RTQiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />Referans</p>
                    <p style="color: ${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size:16px;margin: 5px 0 0 35px;">Sohrat Jumadurdyyev</p>
                    <div style="width: 90%;margin-left: 25px;margin-top: 3px">
                        <p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size: 14px;margin: 2px 0 0 25px;"><i style="font-size: 12px;margin-right: 5px;width: 13px;text-align: center" class="fas fa-phone-alt"></i> 0 555 666 2233</p>
                        <p style="color:${helper.selectedCVColor === '#2A2A2A' ? '#fff' : '#5E5E5E'};font-family: Calibri;font-size: 14px;margin: 2px 0 0 25px;"><i style="font-size: 12px;margin-right: 5px;width: 13px;text-align: center" class="fas fa-envelope"></i> shoki61@gmail.com</p>
                    </div>
                </div>


            </div>
        </div>

    </div>

            `
                ,
                fileName: 'deneme1',
                directory: 'docs'
            };
        }
        if (helper.selectedOrderCV === 2) {
            options = {
                html: ` <div style="width:550px;background-color: ${helper.selectedCVColor}">
        <div style="width: 100%;height: 130px;display: flex">
            <div style="width: 35%;height: 100%;display: flex;justify-content: flex-end;align-items: center">
                <div style="width: 100px;height: 100px;border:2px solid #FF8F8F;border-radius: 100px;align-items: center;display: flex;justify-content: center;background: url(${this.state.photoSource.uri}) no-repeat center;background-size: cover"></div>
            </div>
            <div style="width: 65%;height: 100%">
                <p style="font-family: Calibri;text-align: center;font-size: 25px;color:#FF8F8F;margin:5px">${this.state.userJob}</p>

                <div style="display: flex;margin: 5px;margin-left: 15px">
                    <div>
                        <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">Adı:</p>
                        <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">Tel no:</p>
                        <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">Email:</p>
                        <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">Şehir:</p>
                    </div>
                    <div style="margin-left: 5px">
                        <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">${this.state.userName}</p>
                        <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">${this.state.userNumber}</p>
                        <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">${this.state.userEmail}</p>
                        <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">${this.state.userCity}</p>
                    </div>
                </div>
            </div>

        </div>

        <div style="width: 100%;background-color:#FF8F8F;flex-wrap: wrap;display: flex;align-items: center;justify-content: space-between;padding:0 15px;box-sizing: border-box">
            <div style="display: flex;align-items: center"><img height="13px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" /><p style="font-family: Calibri;font-size: 13px;color:#fff; margin:5px 3px">kuzey61</p></div>
            <div style="display: flex;align-items: center"><img height="13px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDQ3LjYzMiA0NDciIHdpZHRoPSI1MTIiPjxnPjxwYXRoIGQ9Im0yMzEuODE2NDA2IDQ0Ny4wNTA3ODFjMzQuMjMwNDY5LTQuODYzMjgxIDY0LjIzODI4Mi00MC41ODk4NDMgODMuMTIxMDk0LTkzLjM1MTU2Mi0yNy4yOTY4NzUtNi4xMTMyODEtNTUuMTUyMzQ0LTkuMzk0NTMxLTgzLjEyMTA5NC05Ljc4NTE1N3ptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTI4Ni41MDM5MDYgNDM4LjY2MDE1NmMyLjAyMzQzOC0uNTg1OTM3IDQuMDM5MDYzLTEuMTc1NzgxIDYuMDM5MDYzLTEuODI0MjE4IDEuNjg3NS0uNTQyOTY5IDMuMzUxNTYyLTEuMTI4OTA3IDUuMDE1NjI1LTEuNzEwOTM4IDEuOTY4NzUtLjY3OTY4OCAzLjkyOTY4Ny0xLjM3ODkwNiA1Ljg4MjgxMi0yLjEyMTA5NCAxLjY2NDA2My0uNjMyODEyIDMuMzEyNS0xLjMwNDY4NyA0Ljk2NDg0NC0xLjk3NjU2MiAxLjkwNjI1LS44MDA3ODIgMy44MDg1OTQtMS41OTc2NTYgNS42OTE0MDYtMi4zOTg0MzggMS42NDQ1MzItLjcyMjY1NiAzLjI3NzM0NC0xLjQ4MDQ2OCA0LjkxMDE1Ni0yLjI0MjE4NyAxLjg0NzY1Ny0uODcxMDk0IDMuNjg3NS0xLjc1NzgxMyA1LjUxMTcxOS0yLjY3OTY4OCAxLjYwMTU2My0uODE2NDA2IDMuMTk5MjE5LTEuNjQ4NDM3IDQuODAwNzgxLTIuNTAzOTA2IDEuNzkyOTY5LS45NjA5MzcgMy41NzQyMTktMS45NDE0MDYgNS4zNDM3NS0yLjk0OTIxOSAxLjYwMTU2My0uOTA2MjUgMy4xNDQ1MzItMS44MTY0MDYgNC43MDMxMjYtMi43NTM5MDYgMS43MzQzNzQtMS4wNjY0MDYgMy40NjA5MzctMi4xMzI4MTIgNS4xNzU3ODEtMy4xOTkyMTkgMS41MzUxNTYtLjk3NjU2MiAzLjA2NjQwNi0xLjk2ODc1IDQuNTc4MTI1LTIuOTkyMTg3IDEuNjg3NS0xLjEzNjcxOSAzLjM1MTU2Mi0yLjMyMDMxMyA1LjAwNzgxMi0zLjUwMzkwNiAxLjQ4ODI4Mi0xLjA2NjQwNyAyLjk2ODc1LTIuMTI4OTA3IDQuNDIxODc1LTMuMTk5MjE5IDEuNjAxNTYzLTEuMjM0Mzc1IDMuMjQyMTg4LTIuNTExNzE5IDQuODQ3NjU3LTMuNzkyOTY5IDEuNDI1NzgxLTEuMTM2NzE5IDIuODQ3NjU2LTIuMjY1NjI1IDQuMjUtMy40MzM1OTQgMS41OTc2NTYtMS4zMjgxMjUgMy4xMjg5MDYtMi43MDMxMjUgNC42Nzk2ODctNC4wNzgxMjUgMS4zNTkzNzUtMS4yMDcwMzEgMi43MjY1NjMtMi40MDIzNDMgNC4wNTQ2ODctMy42NDA2MjUgMS41MjczNDQtMS40MjU3ODEgMy4wMTU2MjYtMi45MDIzNDQgNC41MDM5MDctNC4zNjcxODcgMS4yODkwNjItMS4yNzM0MzggMi41OTM3NS0yLjUyNzM0NCAzLjg1NTQ2OS0zLjgzMjAzMS4yMzQzNzQtLjI0MjE4OC40NTcwMzEtLjUwMzkwNy42OTkyMTgtLjc1MzkwNy0xNy40NDkyMTgtOS4wMTE3MTktMzUuODI4MTI1LTE2LjA4NTkzNy01NC44MTY0MDYtMjEuMDkzNzUtOS44NzUgMzEuNDkyMTg4LTI3LjQ0OTIxOSA2MC4wMzEyNS01MS4xMjg5MDYgODMuMDIzNDM4LjY0ODQzNy0uMTY3OTY5IDEuMjk2ODc1LS4zMDQ2ODggMS45NDUzMTItLjQ3MjY1NyAxLjcxMDkzOC0uNDgwNDY4IDMuMzkwNjI1LTEuMDA3ODEyIDUuMDYyNS0xLjUwMzkwNnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQ0Ny42MzI4MTIgMjMxLjY4MzU5NGgtOTUuOTIxODc0Yy0uMzYzMjgyIDM3LjQ1MzEyNS01Ljc5Njg3NiA3NC42ODM1OTQtMTYuMTUyMzQ0IDExMC42Nzk2ODcgMjEuMTE3MTg3IDUuNjQwNjI1IDQxLjQ5NjA5NCAxMy43NSA2MC43MTQ4NDQgMjQuMTYwMTU3IDMxLjU1NDY4Ny0zOC4wMzEyNSA0OS42MTcxODctODUuNDQ5MjE5IDUxLjM1OTM3NC0xMzQuODM5ODQ0em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjMxLjgxNjQwNiAyMTUuNjgzNTk0aDEwMy44OTQ1MzJjLS40MDYyNS0zNi4xMjg5MDYtNS43MDcwMzItNzIuMDM1MTU2LTE1Ljc1LTEwNi43NDIxODgtMjguOTI5Njg4IDYuNTk3NjU2LTU4LjQ3NjU2MyAxMC4xMjEwOTQtODguMTQ0NTMyIDEwLjUxMTcxOXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTIzMS44MTY0MDYuMzE2NDA2djEwMy4xMzY3MTljMjcuOTY4NzUtLjM5NDUzMSA1NS44MjQyMTktMy42NzE4NzUgODMuMTIxMDk0LTkuNzg1MTU2LTE4Ljg4MjgxMi01Mi43NjE3MTktNDguODkwNjI1LTg4LjQ4ODI4MS04My4xMjEwOTQtOTMuMzUxNTYzem0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjMxLjgxNjQwNiAzMjcuOTE0MDYyYzI5LjY2Nzk2OS4zOTQ1MzIgNTkuMjE0ODQ0IDMuOTE3OTY5IDg4LjE0NDUzMiAxMC41MTU2MjYgMTAuMDQyOTY4LTM0LjcwNzAzMiAxNS4zNDM3NS03MC42MTcxODggMTUuNzUtMTA2Ljc0NjA5NGgtMTAzLjg5NDUzMnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTM5Ni4yNzM0MzggODAuODQzNzVjLTE5LjIxODc1IDEwLjQxMDE1Ni0zOS41OTc2NTcgMTguNTE5NTMxLTYwLjcxNDg0NCAyNC4xNjAxNTYgMTAuMzU1NDY4IDM1Ljk5NjA5NCAxNS43ODkwNjIgNzMuMjI2NTYzIDE2LjE1MjM0NCAxMTAuNjc5Njg4aDk1LjkyMTg3NGMtMS43NDYwOTMtNDkuMzg2NzE5LTE5LjgwODU5My05Ni44MDQ2ODgtNTEuMzU5Mzc0LTEzNC44Mzk4NDR6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0zODUuNDY0ODQ0IDY4LjcwNzAzMWMtLjIzNDM3NS0uMjM4MjgxLS40NTcwMzItLjQ5NjA5My0uNjg3NS0uNzQyMTg3LTEuMjY1NjI1LTEuMzA0Njg4LTIuNTc4MTI1LTIuNTYyNS0zLjg2NzE4OC0zLjgzMjAzMi0xLjQ4NDM3NS0xLjQ2NDg0My0yLjk2NDg0NC0yLjk0NTMxMi00LjQ5NjA5NC00LjM2NzE4Ny0xLjMyNDIxOC0xLjIzNDM3NS0yLjY5NTMxMi0yLjQwMjM0NC00LjA1NDY4Ny0zLjYzMjgxMy0xLjU1MDc4MS0xLjM3NS0zLjEwMTU2My0yLjc2MTcxOC00LjY5NTMxMy00LjA4OTg0My0xLjM4MjgxMi0xLjE2Nzk2OS0yLjgwMDc4MS0yLjI4NTE1Ny00LjIwNzAzMS0zLjQwNjI1LTEuNjAxNTYyLTEuMjk2ODc1LTMuMjQyMTg3LTIuNTg1OTM4LTQuODkwNjI1LTMuODI0MjE5LTEuNDQ1MzEyLTEuMDg5ODQ0LTIuOTEwMTU2LTIuMTQ0NTMxLTQuMzgyODEyLTMuMTk5MjE5LTEuNjcxODc1LTEuMjAzMTI1LTMuMzUxNTYzLTIuNDAyMzQzLTUuMDU0Njg4LTMuNTQ2ODc1LTEuNDk2MDk0LTEuMDA3ODEyLTMuMDE1NjI1LTEuOTkyMTg3LTQuNTM1MTU2LTIuOTU3MDMxLTEuNzMwNDY5LTEuMTEzMjgxLTMuNDU3MDMxLTIuMjAzMTI1LTUuMjE4NzUtMy4yNTc4MTMtMS41NDI5NjktLjkyNTc4MS0zLjEwMTU2Mi0xLjgzOTg0My00LjY2NDA2Mi0yLjcyNjU2Mi0xLjc4OTA2My0xLjAyMzQzOC0zLjU4MjAzMi0yLjAxNTYyNS01LjM5MDYyNi0yLjk4NDM3NS0xLjYwMTU2Mi0uODAwNzgxLTMuMTk5MjE4LTEuNjcxODc1LTQuODAwNzgxLTIuNDcyNjU2LTEuODM5ODQzLS45Mjk2ODgtMy42OTUzMTItMS44MjQyMTktNS41OTc2NTYtMi43MDMxMjUtMS42MDE1NjMtLjc2MTcxOS0zLjIyNjU2My0xLjUwMzkwNi00Ljg3NS0yLjIyNjU2My0xLjg5NDUzMS0uODM5ODQzLTMuODA4NTk0LTEuNTk3NjU2LTUuNzE4NzUtMi4zOTg0MzctMS42NDg0MzctLjY3MTg3NS0zLjI4OTA2My0xLjMzNTkzOC00Ljk1MzEyNS0xLjk2ODc1LTEuOTQxNDA2LS43NDIxODgtMy45MTAxNTYtMS40Mzc1LTUuODc4OTA2LTIuMTE3MTg4LTEuNjY0MDYzLS41ODU5MzctMy4zMjgxMjUtMS4xNjc5NjgtNS4wMTU2MjUtMS43MTQ4NDQtMi0uNjQ4NDM3LTQtMS4yMzgyODEtNi4wNTQ2ODgtMS44MzIwMzEtMS42NjQwNjItLjQ4ODI4MS0zLjMzNTkzNy0uOTg0Mzc1LTUuMDE5NTMxLTEuNDI5Njg3LS42NDQ1MzEtLjE3NTc4Mi0xLjMwMDc4MS0uMzEyNS0xLjk0OTIxOS0uNDgwNDY5IDIzLjY3OTY4OCAyMi45OTIxODcgNDEuMjUgNTEuNTI3MzQ0IDUxLjEyODkwNyA4My4wMjM0MzcgMTkuMDA3ODEyLTUuMDA3ODEyIDM3LjQxNDA2Mi0xMi4wODU5MzcgNTQuODc4OTA2LTIxLjExMzI4MXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTAgMjE1LjY4MzU5NGg5NS45MjE4NzVjLjM2MzI4MS0zNy40NTMxMjUgNS43OTY4NzUtNzQuNjgzNTk0IDE2LjE0ODQzNy0xMTAuNjc5Njg4LTIxLjExMzI4MS01LjYzNjcxOC00MS40OTIxODctMTMuNzQ2MDk0LTYwLjcxMDkzNy0yNC4xNjAxNTYtMzEuNTU0Njg3IDM4LjAzMTI1LTQ5LjYxNzE4NyA4NS40NTMxMjUtNTEuMzU5Mzc1IDEzNC44Mzk4NDR6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0yMTUuODE2NDA2IDQ0Ny4wNTA3ODF2LTEwMy4xMzY3MTljLTI3Ljk2ODc1LjM5NDUzMi01NS44MjQyMTggMy42NzE4NzYtODMuMTIxMDk0IDkuNzg1MTU3IDE4Ljg3ODkwNyA1Mi43NjE3MTkgNDguODkwNjI2IDg4LjQ4ODI4MSA4My4xMjEwOTQgOTMuMzUxNTYyem0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjE1LjgxNjQwNiAyMzEuNjgzNTk0aC0xMDMuODk0NTMxYy40MDYyNSAzNi4xMjg5MDYgNS43MDMxMjUgNzIuMDM5MDYyIDE1Ljc1IDEwNi43NDYwOTQgMjguOTI5Njg3LTYuNjAxNTYzIDU4LjQ3MjY1Ni0xMC4xMjUgODguMTQ0NTMxLTEwLjUxNTYyNnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTIxNS44MTY0MDYuMzE2NDA2Yy0zNC4yMzA0NjggNC44NjMyODItNjQuMjQyMTg3IDQwLjU4OTg0NC04My4xMjEwOTQgOTMuMzUxNTYzIDI3LjI5Njg3NiA2LjExNzE4NyA1NS4xNTIzNDQgOS4zOTQ1MzEgODMuMTIxMDk0IDkuNzg1MTU2em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjE1LjgxNjQwNiAxMTkuNDUzMTI1Yy0yOS42Njc5NjgtLjM5MDYyNS01OS4yMTQ4NDQtMy45MTQwNjMtODguMTQ0NTMxLTEwLjUxMTcxOS0xMC4wNDY4NzUgMzQuNzA3MDMyLTE1LjM0Mzc1IDcwLjYxMzI4Mi0xNS43NSAxMDYuNzQyMTg4aDEwMy44OTQ1MzF6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0xNjguMTEzMjgxIDYuNzg5MDYyYy0uNjQ4NDM3LjE2Nzk2OS0xLjI5Njg3NS4zMDQ2ODgtMS45NDUzMTIuNDcyNjU3LTEuNjk1MzEzLjQ1MzEyNS0zLjM2NzE4OC45NTcwMzEtNS4wNTQ2ODggMS40NDUzMTItMi4wMDc4MTIuNTg1OTM4LTQgMS4xNzU3ODEtNi4wMTU2MjUgMS44MTY0MDctMS42OTkyMTguNTUwNzgxLTMuMzcxMDk0IDEuMTM2NzE4LTUuMDQyOTY4IDEuNzE4NzUtMS45NTcwMzIuNjkxNDA2LTMuOTE3OTY5IDEuMzc4OTA2LTUuODU1NDY5IDIuMTEzMjgxLTEuNjcxODc1LjY0MDYyNS0zLjMyMDMxMyAxLjMwNDY4Ny00Ljk3NjU2MyAxLjk4NDM3NS0xLjkwMjM0NC44MDA3ODEtMy44MDg1OTQgMS42MDE1NjItNS42ODc1IDIuMzk4NDM3LTEuNjQ4NDM3LjcyMjY1Ny0zLjI3NzM0NCAxLjQ4MDQ2OS00LjkxMDE1NiAyLjI0MjE4OC0xLjg0NzY1Ni44NzEwOTMtMy42ODc1IDEuNzU3ODEyLTUuNTExNzE5IDIuNjc5Njg3LTEuNjAxNTYyLjgxNjQwNi0zLjIwMzEyNSAxLjY1MjM0NC00LjgwMDc4MSAyLjUwMzkwNi0xLjc5Mjk2OS45NjA5MzgtMy41NzAzMTIgMS45NDUzMTMtNS4zMzU5MzggMi45NTMxMjYtMS42MDE1NjIuODk0NTMxLTMuMTc1NzgxIDEuODEyNS00LjcxODc1IDIuNzUtMS43MzgyODEgMS4wNDY4NzQtMy40NTcwMzEgMi4xMjg5MDYtNS4xNjc5NjggMy4xOTkyMTgtMS41MzkwNjMuOTg0Mzc1LTMuMDY2NDA2IDEuOTc2NTYzLTQuNTc4MTI1IDMtMS42ODc1IDEuMTM2NzE5LTMuMzUxNTYzIDIuMzIwMzEzLTUuMDA3ODEzIDMuNTAzOTA2LTEuNDg4MjgxIDEuMDY2NDA3LTIuOTY4NzUgMi4xMjg5MDctNC40MjU3ODEgMy4yMDMxMjYtMS42MzY3MTkgMS4yMzA0NjgtMy4xOTkyMTkgMi41MTE3MTgtNC44NDc2NTYgMy43ODkwNjItMS40MjE4NzUgMS4xMzY3MTktMi44NTU0NjkgMi4yNjU2MjUtNC4yNDYwOTQgMy40NDE0MDYtMS42MDE1NjMgMS4zMjAzMTMtMy4xMjEwOTQgMi42ODc1LTQuNjY0MDYzIDQuMDU0Njg4LTEuMzY3MTg3IDEuMjE4NzUtMi43NDYwOTMgMi40MDIzNDQtNC4wODIwMzEgMy42NjQwNjItMS41MTk1MzEgMS40MTc5NjktMyAyLjg5MDYyNS00LjQ4NDM3NSA0LjM1MTU2My0xLjI4OTA2MiAxLjI3MzQzNy0yLjYwMTU2MiAyLjUzMTI1LTMuODY3MTg3IDMuODM5ODQzLS4yMzA0NjkuMjQyMTg4LS40NTMxMjUuNTA3ODEzLS42OTUzMTMuNzUzOTA3IDE3LjQ0NTMxMyA5LjAxNTYyNSAzNS44MjgxMjUgMTYuMDg5ODQzIDU0LjgxNjQwNiAyMS4wOTc2NTYgOS44NzUtMzEuNDc2NTYzIDI3LjQzNzUtNTkuOTk2MDk0IDUxLjEwNTQ2OS04Mi45NzY1NjN6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im02Ni43MTg3NSAzODMuMjM0Mzc1YzEuNDg4MjgxIDEuNDY0ODQ0IDIuOTY4NzUgMi45NDUzMTMgNC40OTYwOTQgNC4zNzEwOTQgMS4zMjgxMjUgMS4yMzA0NjkgMi42OTUzMTIgMi4zOTg0MzcgNC4wNTg1OTQgMy42Mjg5MDYgMS41NTA3ODEgMS4zNzg5MDYgMy4xMDE1NjIgMi43NjE3MTkgNC42OTUzMTIgNC4wODk4NDQgMS4zODI4MTIgMS4xNjAxNTYgMi43OTI5NjkgMi4yODEyNSA0LjIwNzAzMSAzLjQwNjI1IDEuNjAxNTYzIDEuMjk2ODc1IDMuMTk5MjE5IDIuNTg1OTM3IDQuODk0NTMxIDMuODMyMDMxIDEuNDQxNDA3IDEuMDgyMDMxIDIuOTA2MjUgMi4xMjg5MDYgNC4zNzEwOTQgMy4yMDMxMjUgMS42NzE4NzUgMS4xOTkyMTkgMy4zNTkzNzUgMi4zOTg0MzcgNS4wNjI1IDMuNTUwNzgxIDEuNDk2MDk0IDEuMDA3ODEzIDMuMDE1NjI1IDEuOTkyMTg4IDQuNTM1MTU2IDIuOTYwOTM4IDEuNzMwNDY5IDEuMTA5Mzc1IDMuNDU3MDMyIDIuMTk5MjE4IDUuMjE4NzUgMy4yNTM5MDYgMS41NDI5NjkuOTI5Njg4IDMuMTAxNTYzIDEuODM5ODQ0IDQuNjY0MDYzIDIuNzMwNDY5IDEuNzg5MDYzIDEuMDIzNDM3IDMuNTgyMDMxIDIuMDE1NjI1IDUuMzkwNjI1IDIuOTgwNDY5IDEuNTk3NjU2LjgwMDc4MSAzLjE5OTIxOSAxLjY3MTg3NCA0LjgwMDc4MSAyLjQ3MjY1NiAxLjgzOTg0NC45Mjk2ODcgMy42OTUzMTMgMS44MjQyMTggNS41OTc2NTcgMi43MDcwMzEgMS42MDE1NjIuNzUzOTA2IDMuMjI2NTYyIDEuNDk2MDk0IDQuODc1IDIuMjIyNjU2IDEuODk0NTMxLjgzOTg0NCAzLjgwNDY4NyAxLjU5NzY1NyA1LjcxODc1IDIuMzk4NDM4IDEuNjQ4NDM3LjY3MTg3NSAzLjI4OTA2MiAxLjMzNTkzNyA0Ljk1MzEyNCAxLjk2ODc1IDEuOTQxNDA3Ljc0NjA5MyAzLjkxMDE1NyAxLjQ0MTQwNiA1Ljg3ODkwNyAyLjEyMTA5MyAxLjY2NDA2Mi41ODIwMzIgMy4zMjgxMjUgMS4xNjc5NjkgNS4wMTU2MjUgMS43MTA5MzggMiAuNjQ4NDM4IDQgMS4yNDIxODggNi4wNTQ2ODcgMS44MzIwMzEgMS42NjQwNjMuNDg4MjgxIDMuMzM1OTM4Ljk4NDM3NSA1LjAxNTYyNSAxLjQzMzU5NC42NDg0MzguMTc1NzgxIDEuMzA0Njg4LjMxMjUgMS45NTMxMjUuNDgwNDY5LTIzLjY3OTY4Ny0yMi45OTYwOTQtNDEuMjUtNTEuNTMxMjUtNTEuMTI4OTA2LTgzLjAyNzM0NC0xOC45ODgyODEgNS4wMTE3MTktMzcuMzcxMDk0IDEyLjA4NTkzOC01NC44MTY0MDYgMjEuMTA1NDY5LjIzNDM3NS4yMzgyODEuNDU3MDMxLjQ5NjA5My42OTE0MDYuNzQyMTg3IDEuMTk5MjE5IDEuMjk2ODc1IDIuNDkyMTg3IDIuNTU0Njg4IDMuNzk2ODc1IDMuODI0MjE5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtNTEuMzU5Mzc1IDM2Ni41MjM0MzhjMTkuMjE4NzUtMTAuNDEwMTU3IDM5LjU5NzY1Ni0xOC41MTk1MzIgNjAuNzEwOTM3LTI0LjE2MDE1Ny0xMC4zNTE1NjItMzUuOTk2MDkzLTE1Ljc4NTE1Ni03My4yMjY1NjItMTYuMTQ4NDM3LTExMC42Nzk2ODdoLTk1LjkyMTg3NWMxLjc0NjA5NCA0OS4zODY3MTggMTkuODA0Njg4IDk2LjgwNDY4NyA1MS4zNTkzNzUgMTM0LjgzOTg0NHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" /><p style="font-family: Calibri;font-size: 13px;color:#fff; margin:5px">kuzey.com</p></div>
            <div style="display: flex;align-items: center"><img height="13px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDM2MmM0MS4zNTE1NjIgMCA3NS0zMy42NDg0MzggNzUtNzV2LTM2MmMwLTQxLjM1MTU2Mi0zMy42NDg0MzgtNzUtNzUtNzV6bS0yNTYgNDA2aC02MHYtMjEwaDYwem0wLTI0MGgtNjB2LTYwaDYwem0yMTAgMjQwaC02MHYtMTIwYzAtMTYuNTM5MDYyLTEzLjQ2MDkzOC0zMC0zMC0zMHMtMzAgMTMuNDYwOTM4LTMwIDMwdjEyMGgtNjB2LTIxMGg2MHYxMS4zMDg1OTRjMTUuNzE4NzUtNC44ODY3MTkgMjUuOTI5Njg4LTExLjMwODU5NCA0NS0xMS4zMDg1OTQgNDAuNjkxNDA2LjA0Mjk2OSA3NSAzNi41NDY4NzUgNzUgNzkuNjg3NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" /><p style="font-family: Calibri;font-size: 13px;color:#fff; margin:5px">kuzeymollaoğlu</p></div>
            <div style="display: flex;align-items: center"><img height="13px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+Cgk8cGF0aCBkPSJNNDE0LjQxLDI0LjEyM0MzOTguMzMzLDguMDQyLDM3OC45NjMsMCwzNTYuMzE1LDBIODIuMjI4QzU5LjU4LDAsNDAuMjEsOC4wNDIsMjQuMTI2LDI0LjEyMyAgIEM4LjA0NSw0MC4yMDcsMC4wMDMsNTkuNTc2LDAuMDAzLDgyLjIyNXYyNzQuMDg0YzAsMjIuNjQ3LDguMDQyLDQyLjAxOCwyNC4xMjMsNTguMTAyYzE2LjA4NCwxNi4wODQsMzUuNDU0LDI0LjEyNiw1OC4xMDIsMjQuMTI2ICAgaDI3NC4wODRjMjIuNjQ4LDAsNDIuMDE4LTguMDQyLDU4LjA5NS0yNC4xMjZjMTYuMDg0LTE2LjA4NCwyNC4xMjYtMzUuNDU0LDI0LjEyNi01OC4xMDJWODIuMjI1ICAgQzQzOC41MzIsNTkuNTc2LDQzMC40OSw0MC4yMDQsNDE0LjQxLDI0LjEyM3ogTTMzNS40NzEsMTY4LjczNWMwLjE5MSwxLjcxMywwLjI4OCw0LjI3OCwwLjI4OCw3LjcxICAgYzAsMTUuOTg5LTIuMzM0LDMyLjAyNS02Ljk5NSw0OC4xMDRjLTQuNjYxLDE2LjA4Ny0xMS44LDMxLjUwNC0yMS40MTYsNDYuMjU0Yy05LjYwNiwxNC43NDktMjEuMDc0LDI3Ljc5MS0zNC4zOTYsMzkuMTE1ICAgYy0xMy4zMjUsMTEuMzItMjkuMzExLDIwLjM2NS00Ny45NjgsMjcuMTE3Yy0xOC42NDgsNi43NjItMzguNjM3LDEwLjE0My01OS45NTMsMTAuMTQzYy0zMy4xMTYsMC02My43Ni04Ljk1Mi05MS45MzEtMjYuODM2ICAgYzQuNTY4LDAuNTY4LDkuMzI5LDAuODU1LDE0LjI3NSwwLjg1NWMyNy42LDAsNTIuNDM5LTguNTY1LDc0LjUxOS0yNS43Yy0xMi45NDEtMC4xODUtMjQuNTA2LTQuMTc5LTM0LjY4OC0xMS45OTEgICBjLTEwLjE4NS03LjgwMy0xNy4yNzMtMTcuNjk5LTIxLjI3MS0yOS42OTFjNC45NDcsMC43Niw4LjY1OCwxLjEzNywxMS4xMzIsMS4xMzdjNC4xODcsMCw5LjA0Mi0wLjc2LDE0LjU2LTIuMjc5ICAgYy0xMy44OTQtMi42NjktMjUuNTk4LTkuNTYyLTM1LjExNS0yMC42OTdjLTkuNTE5LTExLjEzNi0xNC4yNzctMjMuODQtMTQuMjc3LTM4LjExNHYtMC41NzEgICBjMTAuMDg1LDQuNzU1LDE5LjYwMiw3LjIyOSwyOC41NDksNy40MjJjLTE3LjMyMS0xMS42MTMtMjUuOTgxLTI4LjI2NS0yNS45ODEtNDkuOTYzYzAtMTAuNjYsMi43NTgtMjAuNzQ3LDguMjc4LTMwLjI2NCAgIGMxNS4wMzUsMTguNDY0LDMzLjMxMSwzMy4yMTMsNTQuODE2LDQ0LjI1MmMyMS41MDcsMTEuMDM4LDQ0LjU0LDE3LjIyNyw2OS4wOTIsMTguNTU4Yy0wLjk1LTMuNjE2LTEuNDI3LTguMTg2LTEuNDI3LTEzLjcwNCAgIGMwLTE2LjU2Miw1Ljg1My0zMC42OTIsMTcuNTYtNDIuMzk5YzExLjcwMy0xMS43MDYsMjUuODM3LTE3LjU2MSw0Mi4zOTQtMTcuNTYxYzE3LjUxNSwwLDMyLjA3OSw2LjI4Myw0My42ODgsMTguODQ2ICAgYzEzLjEzNC0yLjQ3NCwyNS44OTItNy4zMywzOC4yNi0xNC41NmMtNC43NTcsMTQuNjUyLTEzLjYxMywyNS43ODgtMjYuNTUsMzMuNDAyYzEyLjM2OC0xLjcxNiwyMy44OC00Ljk1LDM0LjUzNy05LjcwOCAgIEMzNTcuNDU4LDE0OS43OTMsMzQ3LjQ2MiwxNjAuMTY2LDMzNS40NzEsMTY4LjczNXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" /><p style="font-family: Calibri;font-size: 13px;color:#fff; margin:5px">@kuzey61</p></div>
        </div>

        <div style="width: 100%;display: flex">
            <div style="width: 55%;padding-bottom: 25px">
                <div style="width: 95%;margin: auto;margin-top: 20px">
                    <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Eğitim</p>
                    <div style="margin-left: 10px;margin-top: 3px">
                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Gaziantep üniversitesi</p>
                        <p style="margin:0;font-family: Calibri;font-size: 10px;color:grey">Fen Edebiyat Fakültesi/Biyoloji Bölümü</p>
                        <p style="margin:0;font-family: Calibri;font-size: 10px;color:grey">09.2013-06.2017</p>
                    </div>
                </div>

                <div style="width: 95%;margin: auto;margin-top: 15px">
                    <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">İş Deneyimi</p>
                    <div style="margin-left: 10px;margin-top: 3px">
                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Logo Yazılım</p>
                        <p style="margin:0;font-family: Calibri;font-size: 10px;color:grey">React Native Developer</p>
                        <p style="margin:0;font-family: Calibri;font-size: 10px;color:grey">05.2015-06.2019</p>
                        <p style="margin:0;font-family: Calibri;font-size: 10px;color:grey;margin-left: 10px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>

                <div style="width: 95%;margin: auto;margin-top: 15px">
                    <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Projeler</p>
                    <div style="margin-left: 10px;margin-top: 3px">
                        <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">WeatherApp</p>
                        <p style="margin: 0 0 2px;font-family: Calibri;font-size: 10px;color:grey">Araçlar: Vue.js, Firebase, Bootstrap, Git, Vuex, Vue-Router</p>
                        <p style="margin: 0 0 2px;font-family: Calibri;font-size: 10px;color:grey"><i style="font-size: 8px;color:#FF8F8F" class="fa fa-link"></i> kuzeydev-weather.web.app</p>
                        <p style="margin: 0 0 2px;font-family: Calibri;font-size: 10px;color:grey"></p>
                        <p style="font-family: Calibri;font-size: 10px;color:grey;margin: 0 0 2px 10px;">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </div>
                </div>

                <div style="width: 95%;margin: auto;margin-top: 15px">
                    <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Referans</p>
                    <div style="margin-left: 10px;margin-top: 3px">
                        <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">Sohrat jumadurdyyev</p>
                        <p style="margin: 0 0 2px 10px;font-family: Calibri;font-size: 10px;color:grey">Tel: 0 566 988 6565</p>
                        <p style="margin: 0 0 2px 10px;font-family: Calibri;font-size: 10px;color:grey">Email: shokidev@gmail.com</p>
                    </div>
                </div>

            </div>


            <div style="width: 45%;padding-bottom: 25px">
                <div style="width: 95%;margin: auto;margin-top: 20px">
                    <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Bildiği Diller</p>
                    <div style="margin-left: 10px;margin-top: 3px;display: flex">
                        <div style="margin-right: 5px">
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Türkçe:</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">İngilizce:</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Türkmence:</p>
                        </div>
                        <div>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">Ana dil</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">İyi</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">Orta</p>
                        </div>
                    </div>
                </div>

                <div style="width: 95%;margin: auto;margin-top: 15px">
                    <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Yetenekler</p>
                    <div style="margin-left: 10px;margin-top: 3px;display: flex">
                        <div style="margin-right: 5px">
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">JavaScript:</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">React.js:</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Vue.js:</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">React Native:</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Python:</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Vuex:</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Mobx:</p>
                        </div>
                        <div>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">İyi</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">Orta</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">Profesyonel</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">Profesyonel</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">Başlangıç</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">İyi</p>
                            <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">Orta</p>
                        </div>
                    </div>
                </div>

                <div style="width: 95%;margin: auto;margin-top: 15px">
                    <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">İlgi Alanları</p>
                    <div style="margin-left: 10px;margin-top: 3px">
                        <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">Doğa Yürüyüşü</p>
                        <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">Kitap</p>
                        <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">Film</p>
                        <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">Oyun</p>
                    </div>
                </div>

                <div style="width: 95%;margin: auto;margin-top: 15px">
                    <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Topluluklar</p>
                    <div style="margin-left: 10px;margin-top: 3px">
                        <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">GAÜN YAZILIM TOPLULUĞU: <i style="color:grey">Üye</i></p>
                        <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">KODLUYORUZ: <i style="color:grey">Mezun</i></p>
                    </div>
                </div>

            </div>
        </div>


    </div>

            `
                ,
                fileName: 'deneme1',
                directory: 'docs'
            };
        }
        if (helper.selectedOrderCV === 3) {
            options = {
                html: `
                 <div style="width: 800px;min-height: 850px;background-color: ${helper.selectedCVColor};display: flex">


     <div style="width: 35%;min-height: 850px;background-color: #F7F7F7">
         <div style="width: 150px;height: 150px;border-radius: 100px;margin: 35px auto 25px;border:3px solid #299BE8;background:url(${this.state.photoSource.uri}) no-repeat center;background-size: cover"></div>

         <div style="width: 100%;padding-left: 45px">
             <div style="display: flex;align-items: center"><img height="17px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBjLTc0LjQzOSwwLTEzNSw2MC41NjEtMTM1LDEzNXM2MC41NjEsMTM1LDEzNSwxMzVzMTM1LTYwLjU2MSwxMzUtMTM1UzMzMC40MzksMCwyNTYsMHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQyMy45NjYsMzU4LjE5NUMzODcuMDA2LDMyMC42NjcsMzM4LjAwOSwzMDAsMjg2LDMwMGgtNjBjLTUyLjAwOCwwLTEwMS4wMDYsMjAuNjY3LTEzNy45NjYsNTguMTk1ICAgIEM1MS4yNTUsMzk1LjUzOSwzMSw0NDQuODMzLDMxLDQ5N2MwLDguMjg0LDYuNzE2LDE1LDE1LDE1aDQyMGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1ICAgIEM0ODEsNDQ0LjgzMyw0NjAuNzQ1LDM5NS41MzksNDIzLjk2NiwzNTguMTk1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMjk5QkU4IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" /><p style="font-family: Calibri;font-size: 17px;color:#858B8A;margin: 3px 3px 3px 7px;">${this.state.userName}</p></div>
             <div style="display: flex;align-items: center"><img height="17px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzg0IDM4NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0IDM4NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNTMuMTg4LDI1Mi4wNTJjLTIzLjUxLDAtNDYuNTk0LTMuNjc3LTY4LjQ2OS0xMC45MDZjLTEwLjcxOS0zLjY1Ni0yMy44OTYtMC4zMDItMzAuNDM4LDYuNDE3bC00My4xNzcsMzIuNTk0ICAgIGMtNTAuMDczLTI2LjcyOS04MC45MTctNTcuNTYzLTEwNy4yODEtMTA3LjI2bDMxLjYzNS00Mi4wNTJjOC4yMTktOC4yMDgsMTEuMTY3LTIwLjE5OCw3LjYzNS0zMS40NDggICAgYy03LjI2LTIxLjk5LTEwLjk0OC00NS4wNjMtMTAuOTQ4LTY4LjU4M0MxMzIuMTQ2LDEzLjgyMywxMTguMzIzLDAsMTAxLjMzMywwSDMwLjgxM0MxMy44MjMsMCwwLDEzLjgyMywwLDMwLjgxMyAgICBDMCwyMjUuNTYzLDE1OC40MzgsMzg0LDM1My4xODgsMzg0YzE2Ljk5LDAsMzAuODEzLTEzLjgyMywzMC44MTMtMzAuODEzdi03MC4zMjNDMzg0LDI2NS44NzUsMzcwLjE3NywyNTIuMDUyLDM1My4xODgsMjUyLjA1MnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" /><p style="font-family: Calibri;font-size: 17px;color:#858B8A;margin: 3px 3px 3px 7px;">${this.state.userNumber}</p></div>
             <div style="display: flex;align-items: center"><img height="17px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTEwLjY4OCw5NS4xNTZDODAuOTU4LDE1NC42NjcsMjA0LjI2LDI1OS4zNjUsMjQwLjUsMjkyLjAxYzQuODY1LDQuNDA2LDEwLjA4Myw2LjY0NiwxNS41LDYuNjQ2ICAgICBjNS40MDYsMCwxMC42MTUtMi4yMTksMTUuNDY5LTYuNjA0YzM2LjI3MS0zMi42NzcsMTU5LjU3My0xMzcuMzg1LDIyOS44NDQtMTk2Ljg5NmM0LjM3NS0zLjY5OCw1LjA0Mi0xMC4xOTgsMS41LTE0LjcxOSAgICAgQzQ5NC42MjUsNjkuOTksNDgyLjQxNyw2NCw0NjkuMzMzLDY0SDQyLjY2N2MtMTMuMDgzLDAtMjUuMjkyLDUuOTktMzMuNDc5LDE2LjQzOEM1LjY0Niw4NC45NTgsNi4zMTMsOTEuNDU4LDEwLjY4OCw5NS4xNTZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik01MDUuODEzLDEyNy40MDZjLTMuNzgxLTEuNzYtOC4yMjktMS4xNDYtMTEuMzc1LDEuNTQyQzQxNi41MSwxOTUuMDEsMzE3LjA1MiwyNzkuNjg4LDI4NS43NiwzMDcuODg1ICAgICBjLTE3LjU2MywxNS44NTQtNDEuOTM4LDE1Ljg1NC01OS41NDItMC4wMjFjLTMzLjM1NC0zMC4wNTItMTQ1LjA0Mi0xMjUtMjA4LjY1Ni0xNzguOTE3Yy0zLjE2Ny0yLjY4OC03LjYyNS0zLjI4MS0xMS4zNzUtMS41NDIgICAgIEMyLjQxNywxMjkuMTU2LDAsMTMyLjkyNywwLDEzNy4wODN2MjY4LjI1QzAsNDI4Ljg2NSwxOS4xMzUsNDQ4LDQyLjY2Nyw0NDhoNDI2LjY2N0M0OTIuODY1LDQ0OCw1MTIsNDI4Ljg2NSw1MTIsNDA1LjMzMyAgICAgdi0yNjguMjVDNTEyLDEzMi45MjcsNTA5LjU4MywxMjkuMTQ2LDUwNS44MTMsMTI3LjQwNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" /><p style="font-family: Calibri;font-size: 17px;color:#858B8A;margin: 3px 3px 3px 7px;">${this.state.userEmail}</p></div>
             <div style="display: flex;align-items: center"><img height="17px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBDMTUzLjc1NSwwLDcwLjU3Myw4My4xODIsNzAuNTczLDE4NS40MjZjMCwxMjYuODg4LDE2NS45MzksMzEzLjE2NywxNzMuMDA0LDMyMS4wMzUgICAgYzYuNjM2LDcuMzkxLDE4LjIyMiw3LjM3OCwyNC44NDYsMGM3LjA2NS03Ljg2OCwxNzMuMDA0LTE5NC4xNDcsMTczLjAwNC0zMjEuMDM1QzQ0MS40MjUsODMuMTgyLDM1OC4yNDQsMCwyNTYsMHogTTI1NiwyNzguNzE5ICAgIGMtNTEuNDQyLDAtOTMuMjkyLTQxLjg1MS05My4yOTItOTMuMjkzUzIwNC41NTksOTIuMTM0LDI1Niw5Mi4xMzRzOTMuMjkxLDQxLjg1MSw5My4yOTEsOTMuMjkzUzMwNy40NDEsMjc4LjcxOSwyNTYsMjc4LjcxOXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" /><p style="font-family: Calibri;font-size: 17px;color:#858B8A;margin: 3px 3px 3px 7px;">${this.state.userCity}</p></div>
             <div style="display: flex;align-items: center"><img height="17px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" /><p style="font-family: Calibri;font-size: 17px;color:#858B8A;margin: 3px 3px 3px 7px;">yıldız61</p></div>
             <div style="display: flex;align-items: center"><img height="17px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDM2MmM0MS4zNTE1NjIgMCA3NS0zMy42NDg0MzggNzUtNzV2LTM2MmMwLTQxLjM1MTU2Mi0zMy42NDg0MzgtNzUtNzUtNzV6bS0yNTYgNDA2aC02MHYtMjEwaDYwem0wLTI0MGgtNjB2LTYwaDYwem0yMTAgMjQwaC02MHYtMTIwYzAtMTYuNTM5MDYyLTEzLjQ2MDkzOC0zMC0zMC0zMHMtMzAgMTMuNDYwOTM4LTMwIDMwdjEyMGgtNjB2LTIxMGg2MHYxMS4zMDg1OTRjMTUuNzE4NzUtNC44ODY3MTkgMjUuOTI5Njg4LTExLjMwODU5NCA0NS0xMS4zMDg1OTQgNDAuNjkxNDA2LjA0Mjk2OSA3NSAzNi41NDY4NzUgNzUgNzkuNjg3NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" /><p style="font-family: Calibri;font-size: 17px;color:#858B8A;margin: 3px 3px 3px 7px;">yıldızkadıoğlu</p></div>
             <div style="display: flex;align-items: center"><img height="17px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8cGF0aCBkPSJNNDE0LjQxLDI0LjEyM0MzOTguMzMzLDguMDQyLDM3OC45NjMsMCwzNTYuMzE1LDBIODIuMjI4QzU5LjU4LDAsNDAuMjEsOC4wNDIsMjQuMTI2LDI0LjEyMyAgIEM4LjA0NSw0MC4yMDcsMC4wMDMsNTkuNTc2LDAuMDAzLDgyLjIyNXYyNzQuMDg0YzAsMjIuNjQ3LDguMDQyLDQyLjAxOCwyNC4xMjMsNTguMTAyYzE2LjA4NCwxNi4wODQsMzUuNDU0LDI0LjEyNiw1OC4xMDIsMjQuMTI2ICAgaDI3NC4wODRjMjIuNjQ4LDAsNDIuMDE4LTguMDQyLDU4LjA5NS0yNC4xMjZjMTYuMDg0LTE2LjA4NCwyNC4xMjYtMzUuNDU0LDI0LjEyNi01OC4xMDJWODIuMjI1ICAgQzQzOC41MzIsNTkuNTc2LDQzMC40OSw0MC4yMDQsNDE0LjQxLDI0LjEyM3ogTTMzNS40NzEsMTY4LjczNWMwLjE5MSwxLjcxMywwLjI4OCw0LjI3OCwwLjI4OCw3LjcxICAgYzAsMTUuOTg5LTIuMzM0LDMyLjAyNS02Ljk5NSw0OC4xMDRjLTQuNjYxLDE2LjA4Ny0xMS44LDMxLjUwNC0yMS40MTYsNDYuMjU0Yy05LjYwNiwxNC43NDktMjEuMDc0LDI3Ljc5MS0zNC4zOTYsMzkuMTE1ICAgYy0xMy4zMjUsMTEuMzItMjkuMzExLDIwLjM2NS00Ny45NjgsMjcuMTE3Yy0xOC42NDgsNi43NjItMzguNjM3LDEwLjE0My01OS45NTMsMTAuMTQzYy0zMy4xMTYsMC02My43Ni04Ljk1Mi05MS45MzEtMjYuODM2ICAgYzQuNTY4LDAuNTY4LDkuMzI5LDAuODU1LDE0LjI3NSwwLjg1NWMyNy42LDAsNTIuNDM5LTguNTY1LDc0LjUxOS0yNS43Yy0xMi45NDEtMC4xODUtMjQuNTA2LTQuMTc5LTM0LjY4OC0xMS45OTEgICBjLTEwLjE4NS03LjgwMy0xNy4yNzMtMTcuNjk5LTIxLjI3MS0yOS42OTFjNC45NDcsMC43Niw4LjY1OCwxLjEzNywxMS4xMzIsMS4xMzdjNC4xODcsMCw5LjA0Mi0wLjc2LDE0LjU2LTIuMjc5ICAgYy0xMy44OTQtMi42NjktMjUuNTk4LTkuNTYyLTM1LjExNS0yMC42OTdjLTkuNTE5LTExLjEzNi0xNC4yNzctMjMuODQtMTQuMjc3LTM4LjExNHYtMC41NzEgICBjMTAuMDg1LDQuNzU1LDE5LjYwMiw3LjIyOSwyOC41NDksNy40MjJjLTE3LjMyMS0xMS42MTMtMjUuOTgxLTI4LjI2NS0yNS45ODEtNDkuOTYzYzAtMTAuNjYsMi43NTgtMjAuNzQ3LDguMjc4LTMwLjI2NCAgIGMxNS4wMzUsMTguNDY0LDMzLjMxMSwzMy4yMTMsNTQuODE2LDQ0LjI1MmMyMS41MDcsMTEuMDM4LDQ0LjU0LDE3LjIyNyw2OS4wOTIsMTguNTU4Yy0wLjk1LTMuNjE2LTEuNDI3LTguMTg2LTEuNDI3LTEzLjcwNCAgIGMwLTE2LjU2Miw1Ljg1My0zMC42OTIsMTcuNTYtNDIuMzk5YzExLjcwMy0xMS43MDYsMjUuODM3LTE3LjU2MSw0Mi4zOTQtMTcuNTYxYzE3LjUxNSwwLDMyLjA3OSw2LjI4Myw0My42ODgsMTguODQ2ICAgYzEzLjEzNC0yLjQ3NCwyNS44OTItNy4zMywzOC4yNi0xNC41NmMtNC43NTcsMTQuNjUyLTEzLjYxMywyNS43ODgtMjYuNTUsMzMuNDAyYzEyLjM2OC0xLjcxNiwyMy44OC00Ljk1LDM0LjUzNy05LjcwOCAgIEMzNTcuNDU4LDE0OS43OTMsMzQ3LjQ2MiwxNjAuMTY2LDMzNS40NzEsMTY4LjczNXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" /><p style="font-family: Calibri;font-size: 17px;color:#858B8A;margin: 3px 3px 3px 7px;">@yıldız61</p></div>
             <div style="display: flex;align-items: center"><img height="17px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDQ3LjYzMiA0NDciIHdpZHRoPSI1MTIiIGNsYXNzPSIiPjxnPjxwYXRoIGQ9Im0yMzEuODE2NDA2IDQ0Ny4wNTA3ODFjMzQuMjMwNDY5LTQuODYzMjgxIDY0LjIzODI4Mi00MC41ODk4NDMgODMuMTIxMDk0LTkzLjM1MTU2Mi0yNy4yOTY4NzUtNi4xMTMyODEtNTUuMTUyMzQ0LTkuMzk0NTMxLTgzLjEyMTA5NC05Ljc4NTE1N3ptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTI4Ni41MDM5MDYgNDM4LjY2MDE1NmMyLjAyMzQzOC0uNTg1OTM3IDQuMDM5MDYzLTEuMTc1NzgxIDYuMDM5MDYzLTEuODI0MjE4IDEuNjg3NS0uNTQyOTY5IDMuMzUxNTYyLTEuMTI4OTA3IDUuMDE1NjI1LTEuNzEwOTM4IDEuOTY4NzUtLjY3OTY4OCAzLjkyOTY4Ny0xLjM3ODkwNiA1Ljg4MjgxMi0yLjEyMTA5NCAxLjY2NDA2My0uNjMyODEyIDMuMzEyNS0xLjMwNDY4NyA0Ljk2NDg0NC0xLjk3NjU2MiAxLjkwNjI1LS44MDA3ODIgMy44MDg1OTQtMS41OTc2NTYgNS42OTE0MDYtMi4zOTg0MzggMS42NDQ1MzItLjcyMjY1NiAzLjI3NzM0NC0xLjQ4MDQ2OCA0LjkxMDE1Ni0yLjI0MjE4NyAxLjg0NzY1Ny0uODcxMDk0IDMuNjg3NS0xLjc1NzgxMyA1LjUxMTcxOS0yLjY3OTY4OCAxLjYwMTU2My0uODE2NDA2IDMuMTk5MjE5LTEuNjQ4NDM3IDQuODAwNzgxLTIuNTAzOTA2IDEuNzkyOTY5LS45NjA5MzcgMy41NzQyMTktMS45NDE0MDYgNS4zNDM3NS0yLjk0OTIxOSAxLjYwMTU2My0uOTA2MjUgMy4xNDQ1MzItMS44MTY0MDYgNC43MDMxMjYtMi43NTM5MDYgMS43MzQzNzQtMS4wNjY0MDYgMy40NjA5MzctMi4xMzI4MTIgNS4xNzU3ODEtMy4xOTkyMTkgMS41MzUxNTYtLjk3NjU2MiAzLjA2NjQwNi0xLjk2ODc1IDQuNTc4MTI1LTIuOTkyMTg3IDEuNjg3NS0xLjEzNjcxOSAzLjM1MTU2Mi0yLjMyMDMxMyA1LjAwNzgxMi0zLjUwMzkwNiAxLjQ4ODI4Mi0xLjA2NjQwNyAyLjk2ODc1LTIuMTI4OTA3IDQuNDIxODc1LTMuMTk5MjE5IDEuNjAxNTYzLTEuMjM0Mzc1IDMuMjQyMTg4LTIuNTExNzE5IDQuODQ3NjU3LTMuNzkyOTY5IDEuNDI1NzgxLTEuMTM2NzE5IDIuODQ3NjU2LTIuMjY1NjI1IDQuMjUtMy40MzM1OTQgMS41OTc2NTYtMS4zMjgxMjUgMy4xMjg5MDYtMi43MDMxMjUgNC42Nzk2ODctNC4wNzgxMjUgMS4zNTkzNzUtMS4yMDcwMzEgMi43MjY1NjMtMi40MDIzNDMgNC4wNTQ2ODctMy42NDA2MjUgMS41MjczNDQtMS40MjU3ODEgMy4wMTU2MjYtMi45MDIzNDQgNC41MDM5MDctNC4zNjcxODcgMS4yODkwNjItMS4yNzM0MzggMi41OTM3NS0yLjUyNzM0NCAzLjg1NTQ2OS0zLjgzMjAzMS4yMzQzNzQtLjI0MjE4OC40NTcwMzEtLjUwMzkwNy42OTkyMTgtLjc1MzkwNy0xNy40NDkyMTgtOS4wMTE3MTktMzUuODI4MTI1LTE2LjA4NTkzNy01NC44MTY0MDYtMjEuMDkzNzUtOS44NzUgMzEuNDkyMTg4LTI3LjQ0OTIxOSA2MC4wMzEyNS01MS4xMjg5MDYgODMuMDIzNDM4LjY0ODQzNy0uMTY3OTY5IDEuMjk2ODc1LS4zMDQ2ODggMS45NDUzMTItLjQ3MjY1NyAxLjcxMDkzOC0uNDgwNDY4IDMuMzkwNjI1LTEuMDA3ODEyIDUuMDYyNS0xLjUwMzkwNnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQ0Ny42MzI4MTIgMjMxLjY4MzU5NGgtOTUuOTIxODc0Yy0uMzYzMjgyIDM3LjQ1MzEyNS01Ljc5Njg3NiA3NC42ODM1OTQtMTYuMTUyMzQ0IDExMC42Nzk2ODcgMjEuMTE3MTg3IDUuNjQwNjI1IDQxLjQ5NjA5NCAxMy43NSA2MC43MTQ4NDQgMjQuMTYwMTU3IDMxLjU1NDY4Ny0zOC4wMzEyNSA0OS42MTcxODctODUuNDQ5MjE5IDUxLjM1OTM3NC0xMzQuODM5ODQ0em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjMxLjgxNjQwNiAyMTUuNjgzNTk0aDEwMy44OTQ1MzJjLS40MDYyNS0zNi4xMjg5MDYtNS43MDcwMzItNzIuMDM1MTU2LTE1Ljc1LTEwNi43NDIxODgtMjguOTI5Njg4IDYuNTk3NjU2LTU4LjQ3NjU2MyAxMC4xMjEwOTQtODguMTQ0NTMyIDEwLjUxMTcxOXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTIzMS44MTY0MDYuMzE2NDA2djEwMy4xMzY3MTljMjcuOTY4NzUtLjM5NDUzMSA1NS44MjQyMTktMy42NzE4NzUgODMuMTIxMDk0LTkuNzg1MTU2LTE4Ljg4MjgxMi01Mi43NjE3MTktNDguODkwNjI1LTg4LjQ4ODI4MS04My4xMjEwOTQtOTMuMzUxNTYzem0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjMxLjgxNjQwNiAzMjcuOTE0MDYyYzI5LjY2Nzk2OS4zOTQ1MzIgNTkuMjE0ODQ0IDMuOTE3OTY5IDg4LjE0NDUzMiAxMC41MTU2MjYgMTAuMDQyOTY4LTM0LjcwNzAzMiAxNS4zNDM3NS03MC42MTcxODggMTUuNzUtMTA2Ljc0NjA5NGgtMTAzLjg5NDUzMnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTM5Ni4yNzM0MzggODAuODQzNzVjLTE5LjIxODc1IDEwLjQxMDE1Ni0zOS41OTc2NTcgMTguNTE5NTMxLTYwLjcxNDg0NCAyNC4xNjAxNTYgMTAuMzU1NDY4IDM1Ljk5NjA5NCAxNS43ODkwNjIgNzMuMjI2NTYzIDE2LjE1MjM0NCAxMTAuNjc5Njg4aDk1LjkyMTg3NGMtMS43NDYwOTMtNDkuMzg2NzE5LTE5LjgwODU5My05Ni44MDQ2ODgtNTEuMzU5Mzc0LTEzNC44Mzk4NDR6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMjk5QkU4IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0zODUuNDY0ODQ0IDY4LjcwNzAzMWMtLjIzNDM3NS0uMjM4MjgxLS40NTcwMzItLjQ5NjA5My0uNjg3NS0uNzQyMTg3LTEuMjY1NjI1LTEuMzA0Njg4LTIuNTc4MTI1LTIuNTYyNS0zLjg2NzE4OC0zLjgzMjAzMi0xLjQ4NDM3NS0xLjQ2NDg0My0yLjk2NDg0NC0yLjk0NTMxMi00LjQ5NjA5NC00LjM2NzE4Ny0xLjMyNDIxOC0xLjIzNDM3NS0yLjY5NTMxMi0yLjQwMjM0NC00LjA1NDY4Ny0zLjYzMjgxMy0xLjU1MDc4MS0xLjM3NS0zLjEwMTU2My0yLjc2MTcxOC00LjY5NTMxMy00LjA4OTg0My0xLjM4MjgxMi0xLjE2Nzk2OS0yLjgwMDc4MS0yLjI4NTE1Ny00LjIwNzAzMS0zLjQwNjI1LTEuNjAxNTYyLTEuMjk2ODc1LTMuMjQyMTg3LTIuNTg1OTM4LTQuODkwNjI1LTMuODI0MjE5LTEuNDQ1MzEyLTEuMDg5ODQ0LTIuOTEwMTU2LTIuMTQ0NTMxLTQuMzgyODEyLTMuMTk5MjE5LTEuNjcxODc1LTEuMjAzMTI1LTMuMzUxNTYzLTIuNDAyMzQzLTUuMDU0Njg4LTMuNTQ2ODc1LTEuNDk2MDk0LTEuMDA3ODEyLTMuMDE1NjI1LTEuOTkyMTg3LTQuNTM1MTU2LTIuOTU3MDMxLTEuNzMwNDY5LTEuMTEzMjgxLTMuNDU3MDMxLTIuMjAzMTI1LTUuMjE4NzUtMy4yNTc4MTMtMS41NDI5NjktLjkyNTc4MS0zLjEwMTU2Mi0xLjgzOTg0My00LjY2NDA2Mi0yLjcyNjU2Mi0xLjc4OTA2My0xLjAyMzQzOC0zLjU4MjAzMi0yLjAxNTYyNS01LjM5MDYyNi0yLjk4NDM3NS0xLjYwMTU2Mi0uODAwNzgxLTMuMTk5MjE4LTEuNjcxODc1LTQuODAwNzgxLTIuNDcyNjU2LTEuODM5ODQzLS45Mjk2ODgtMy42OTUzMTItMS44MjQyMTktNS41OTc2NTYtMi43MDMxMjUtMS42MDE1NjMtLjc2MTcxOS0zLjIyNjU2My0xLjUwMzkwNi00Ljg3NS0yLjIyNjU2My0xLjg5NDUzMS0uODM5ODQzLTMuODA4NTk0LTEuNTk3NjU2LTUuNzE4NzUtMi4zOTg0MzctMS42NDg0MzctLjY3MTg3NS0zLjI4OTA2My0xLjMzNTkzOC00Ljk1MzEyNS0xLjk2ODc1LTEuOTQxNDA2LS43NDIxODgtMy45MTAxNTYtMS40Mzc1LTUuODc4OTA2LTIuMTE3MTg4LTEuNjY0MDYzLS41ODU5MzctMy4zMjgxMjUtMS4xNjc5NjgtNS4wMTU2MjUtMS43MTQ4NDQtMi0uNjQ4NDM3LTQtMS4yMzgyODEtNi4wNTQ2ODgtMS44MzIwMzEtMS42NjQwNjItLjQ4ODI4MS0zLjMzNTkzNy0uOTg0Mzc1LTUuMDE5NTMxLTEuNDI5Njg3LS42NDQ1MzEtLjE3NTc4Mi0xLjMwMDc4MS0uMzEyNS0xLjk0OTIxOS0uNDgwNDY5IDIzLjY3OTY4OCAyMi45OTIxODcgNDEuMjUgNTEuNTI3MzQ0IDUxLjEyODkwNyA4My4wMjM0MzcgMTkuMDA3ODEyLTUuMDA3ODEyIDM3LjQxNDA2Mi0xMi4wODU5MzcgNTQuODc4OTA2LTIxLjExMzI4MXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTAgMjE1LjY4MzU5NGg5NS45MjE4NzVjLjM2MzI4MS0zNy40NTMxMjUgNS43OTY4NzUtNzQuNjgzNTk0IDE2LjE0ODQzNy0xMTAuNjc5Njg4LTIxLjExMzI4MS01LjYzNjcxOC00MS40OTIxODctMTMuNzQ2MDk0LTYwLjcxMDkzNy0yNC4xNjAxNTYtMzEuNTU0Njg3IDM4LjAzMTI1LTQ5LjYxNzE4NyA4NS40NTMxMjUtNTEuMzU5Mzc1IDEzNC44Mzk4NDR6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMjk5QkU4IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0yMTUuODE2NDA2IDQ0Ny4wNTA3ODF2LTEwMy4xMzY3MTljLTI3Ljk2ODc1LjM5NDUzMi01NS44MjQyMTggMy42NzE4NzYtODMuMTIxMDk0IDkuNzg1MTU3IDE4Ljg3ODkwNyA1Mi43NjE3MTkgNDguODkwNjI2IDg4LjQ4ODI4MSA4My4xMjEwOTQgOTMuMzUxNTYyem0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjE1LjgxNjQwNiAyMzEuNjgzNTk0aC0xMDMuODk0NTMxYy40MDYyNSAzNi4xMjg5MDYgNS43MDMxMjUgNzIuMDM5MDYyIDE1Ljc1IDEwNi43NDYwOTQgMjguOTI5Njg3LTYuNjAxNTYzIDU4LjQ3MjY1Ni0xMC4xMjUgODguMTQ0NTMxLTEwLjUxNTYyNnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTIxNS44MTY0MDYuMzE2NDA2Yy0zNC4yMzA0NjggNC44NjMyODItNjQuMjQyMTg3IDQwLjU4OTg0NC04My4xMjEwOTQgOTMuMzUxNTYzIDI3LjI5Njg3NiA2LjExNzE4NyA1NS4xNTIzNDQgOS4zOTQ1MzEgODMuMTIxMDk0IDkuNzg1MTU2em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjE1LjgxNjQwNiAxMTkuNDUzMTI1Yy0yOS42Njc5NjgtLjM5MDYyNS01OS4yMTQ4NDQtMy45MTQwNjMtODguMTQ0NTMxLTEwLjUxMTcxOS0xMC4wNDY4NzUgMzQuNzA3MDMyLTE1LjM0Mzc1IDcwLjYxMzI4Mi0xNS43NSAxMDYuNzQyMTg4aDEwMy44OTQ1MzF6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMjk5QkU4IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0xNjguMTEzMjgxIDYuNzg5MDYyYy0uNjQ4NDM3LjE2Nzk2OS0xLjI5Njg3NS4zMDQ2ODgtMS45NDUzMTIuNDcyNjU3LTEuNjk1MzEzLjQ1MzEyNS0zLjM2NzE4OC45NTcwMzEtNS4wNTQ2ODggMS40NDUzMTItMi4wMDc4MTIuNTg1OTM4LTQgMS4xNzU3ODEtNi4wMTU2MjUgMS44MTY0MDctMS42OTkyMTguNTUwNzgxLTMuMzcxMDk0IDEuMTM2NzE4LTUuMDQyOTY4IDEuNzE4NzUtMS45NTcwMzIuNjkxNDA2LTMuOTE3OTY5IDEuMzc4OTA2LTUuODU1NDY5IDIuMTEzMjgxLTEuNjcxODc1LjY0MDYyNS0zLjMyMDMxMyAxLjMwNDY4Ny00Ljk3NjU2MyAxLjk4NDM3NS0xLjkwMjM0NC44MDA3ODEtMy44MDg1OTQgMS42MDE1NjItNS42ODc1IDIuMzk4NDM3LTEuNjQ4NDM3LjcyMjY1Ny0zLjI3NzM0NCAxLjQ4MDQ2OS00LjkxMDE1NiAyLjI0MjE4OC0xLjg0NzY1Ni44NzEwOTMtMy42ODc1IDEuNzU3ODEyLTUuNTExNzE5IDIuNjc5Njg3LTEuNjAxNTYyLjgxNjQwNi0zLjIwMzEyNSAxLjY1MjM0NC00LjgwMDc4MSAyLjUwMzkwNi0xLjc5Mjk2OS45NjA5MzgtMy41NzAzMTIgMS45NDUzMTMtNS4zMzU5MzggMi45NTMxMjYtMS42MDE1NjIuODk0NTMxLTMuMTc1NzgxIDEuODEyNS00LjcxODc1IDIuNzUtMS43MzgyODEgMS4wNDY4NzQtMy40NTcwMzEgMi4xMjg5MDYtNS4xNjc5NjggMy4xOTkyMTgtMS41MzkwNjMuOTg0Mzc1LTMuMDY2NDA2IDEuOTc2NTYzLTQuNTc4MTI1IDMtMS42ODc1IDEuMTM2NzE5LTMuMzUxNTYzIDIuMzIwMzEzLTUuMDA3ODEzIDMuNTAzOTA2LTEuNDg4MjgxIDEuMDY2NDA3LTIuOTY4NzUgMi4xMjg5MDctNC40MjU3ODEgMy4yMDMxMjYtMS42MzY3MTkgMS4yMzA0NjgtMy4xOTkyMTkgMi41MTE3MTgtNC44NDc2NTYgMy43ODkwNjItMS40MjE4NzUgMS4xMzY3MTktMi44NTU0NjkgMi4yNjU2MjUtNC4yNDYwOTQgMy40NDE0MDYtMS42MDE1NjMgMS4zMjAzMTMtMy4xMjEwOTQgMi42ODc1LTQuNjY0MDYzIDQuMDU0Njg4LTEuMzY3MTg3IDEuMjE4NzUtMi43NDYwOTMgMi40MDIzNDQtNC4wODIwMzEgMy42NjQwNjItMS41MTk1MzEgMS40MTc5NjktMyAyLjg5MDYyNS00LjQ4NDM3NSA0LjM1MTU2My0xLjI4OTA2MiAxLjI3MzQzNy0yLjYwMTU2MiAyLjUzMTI1LTMuODY3MTg3IDMuODM5ODQzLS4yMzA0NjkuMjQyMTg4LS40NTMxMjUuNTA3ODEzLS42OTUzMTMuNzUzOTA3IDE3LjQ0NTMxMyA5LjAxNTYyNSAzNS44MjgxMjUgMTYuMDg5ODQzIDU0LjgxNjQwNiAyMS4wOTc2NTYgOS44NzUtMzEuNDc2NTYzIDI3LjQzNzUtNTkuOTk2MDk0IDUxLjEwNTQ2OS04Mi45NzY1NjN6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMjk5QkU4IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im02Ni43MTg3NSAzODMuMjM0Mzc1YzEuNDg4MjgxIDEuNDY0ODQ0IDIuOTY4NzUgMi45NDUzMTMgNC40OTYwOTQgNC4zNzEwOTQgMS4zMjgxMjUgMS4yMzA0NjkgMi42OTUzMTIgMi4zOTg0MzcgNC4wNTg1OTQgMy42Mjg5MDYgMS41NTA3ODEgMS4zNzg5MDYgMy4xMDE1NjIgMi43NjE3MTkgNC42OTUzMTIgNC4wODk4NDQgMS4zODI4MTIgMS4xNjAxNTYgMi43OTI5NjkgMi4yODEyNSA0LjIwNzAzMSAzLjQwNjI1IDEuNjAxNTYzIDEuMjk2ODc1IDMuMTk5MjE5IDIuNTg1OTM3IDQuODk0NTMxIDMuODMyMDMxIDEuNDQxNDA3IDEuMDgyMDMxIDIuOTA2MjUgMi4xMjg5MDYgNC4zNzEwOTQgMy4yMDMxMjUgMS42NzE4NzUgMS4xOTkyMTkgMy4zNTkzNzUgMi4zOTg0MzcgNS4wNjI1IDMuNTUwNzgxIDEuNDk2MDk0IDEuMDA3ODEzIDMuMDE1NjI1IDEuOTkyMTg4IDQuNTM1MTU2IDIuOTYwOTM4IDEuNzMwNDY5IDEuMTA5Mzc1IDMuNDU3MDMyIDIuMTk5MjE4IDUuMjE4NzUgMy4yNTM5MDYgMS41NDI5NjkuOTI5Njg4IDMuMTAxNTYzIDEuODM5ODQ0IDQuNjY0MDYzIDIuNzMwNDY5IDEuNzg5MDYzIDEuMDIzNDM3IDMuNTgyMDMxIDIuMDE1NjI1IDUuMzkwNjI1IDIuOTgwNDY5IDEuNTk3NjU2LjgwMDc4MSAzLjE5OTIxOSAxLjY3MTg3NCA0LjgwMDc4MSAyLjQ3MjY1NiAxLjgzOTg0NC45Mjk2ODcgMy42OTUzMTMgMS44MjQyMTggNS41OTc2NTcgMi43MDcwMzEgMS42MDE1NjIuNzUzOTA2IDMuMjI2NTYyIDEuNDk2MDk0IDQuODc1IDIuMjIyNjU2IDEuODk0NTMxLjgzOTg0NCAzLjgwNDY4NyAxLjU5NzY1NyA1LjcxODc1IDIuMzk4NDM4IDEuNjQ4NDM3LjY3MTg3NSAzLjI4OTA2MiAxLjMzNTkzNyA0Ljk1MzEyNCAxLjk2ODc1IDEuOTQxNDA3Ljc0NjA5MyAzLjkxMDE1NyAxLjQ0MTQwNiA1Ljg3ODkwNyAyLjEyMTA5MyAxLjY2NDA2Mi41ODIwMzIgMy4zMjgxMjUgMS4xNjc5NjkgNS4wMTU2MjUgMS43MTA5MzggMiAuNjQ4NDM4IDQgMS4yNDIxODggNi4wNTQ2ODcgMS44MzIwMzEgMS42NjQwNjMuNDg4MjgxIDMuMzM1OTM4Ljk4NDM3NSA1LjAxNTYyNSAxLjQzMzU5NC42NDg0MzguMTc1NzgxIDEuMzA0Njg4LjMxMjUgMS45NTMxMjUuNDgwNDY5LTIzLjY3OTY4Ny0yMi45OTYwOTQtNDEuMjUtNTEuNTMxMjUtNTEuMTI4OTA2LTgzLjAyNzM0NC0xOC45ODgyODEgNS4wMTE3MTktMzcuMzcxMDk0IDEyLjA4NTkzOC01NC44MTY0MDYgMjEuMTA1NDY5LjIzNDM3NS4yMzgyODEuNDU3MDMxLjQ5NjA5My42OTE0MDYuNzQyMTg3IDEuMTk5MjE5IDEuMjk2ODc1IDIuNDkyMTg3IDIuNTU0Njg4IDMuNzk2ODc1IDMuODI0MjE5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtNTEuMzU5Mzc1IDM2Ni41MjM0MzhjMTkuMjE4NzUtMTAuNDEwMTU3IDM5LjU5NzY1Ni0xOC41MTk1MzIgNjAuNzEwOTM3LTI0LjE2MDE1Ny0xMC4zNTE1NjItMzUuOTk2MDkzLTE1Ljc4NTE1Ni03My4yMjY1NjItMTYuMTQ4NDM3LTExMC42Nzk2ODdoLTk1LjkyMTg3NWMxLjc0NjA5NCA0OS4zODY3MTggMTkuODA0Njg4IDk2LjgwNDY4NyA1MS4zNTkzNzUgMTM0LjgzOTg0NHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" /><p style="font-family: Calibri;font-size: 17px;color:#858B8A;margin: 3px 3px 3px 7px;">yıldız61.com</p></div>
         </div>

         <div style="width: 100%;padding-bottom: 25px">

             <div>
                 <div style="width: 100%;height:30px;position: relative;background-color:#299BE8;display: flex;margin-top: 30px;justify-content: center;align-items: center">
                     <p style="color:#fff;font-family: Calibri;font-size: 25px;margin: 0">Yetenekler</p>
                     <div style="width:0;height: 0;border-color: #299be8 transparent transparent transparent;border-style: solid;position:absolute;bottom: -13px;border-width: 13px 141px 0 141px;"></div>

                 </div>

                 <div style="display: flex">
                     <div style="padding-left: 20px;margin-top: 25px">
                         <div style="display: flex;align-items: center">
                             <div style="width: 3px;height: 3px;border-radius: 100px;background-color: #299BE8;margin-right: 3px"></div><p style="color:#858B8A;font-family: Calibri;font-size: 15px;margin:2px">JavaScript</p>
                         </div>
                         <div style="display: flex;align-items: center">
                             <div style="width: 3px;height: 3px;border-radius: 100px;background-color: #299BE8;margin-right: 3px"></div><p style="color:#858B8A;font-family: Calibri;font-size: 15px;margin:2px">Vue.js</p>
                         </div>
                         <div style="display: flex;align-items: center">
                             <div style="width: 3px;height: 3px;border-radius: 100px;background-color: #299BE8;margin-right: 3px"></div><p style="color:#858B8A;font-family: Calibri;font-size: 15px;margin:2px">React Native</p>
                         </div>
                         <div style="display: flex;align-items: center">
                             <div style="width: 3px;height: 3px;border-radius: 100px;background-color: #299BE8;margin-right: 3px"></div><p style="color:#858B8A;font-family: Calibri;font-size: 15px;margin:2px">Firebase</p>
                         </div>
                         <div style="display: flex;align-items: center">
                             <div style="width: 3px;height: 3px;border-radius: 100px;background-color: #299BE8;margin-right: 3px"></div><p style="color:#858B8A;font-family: Calibri;font-size: 15px;margin:2px">Git</p>
                         </div>
                     </div>
                     <div style="margin-top: 25px;margin-left: 8px">
                         <div>
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMTE0LjU5Mzc1IDQ5MS4xNDA2MjVjLTUuNjA5Mzc1IDAtMTEuMTc5Njg4LTEuNzUtMTUuOTMzNTk0LTUuMTg3NS04Ljg1NTQ2OC02LjQxNzk2OS0xMi45OTIxODctMTcuNDQ5MjE5LTEwLjU4MjAzMS0yOC4wOTM3NWwzMi45Mzc1LTE0NS4wODk4NDQtMTExLjcwMzEyNS05Ny45NjA5MzdjLTguMjEwOTM4LTcuMTY3OTY5LTExLjM0NzY1Ni0xOC41MTk1MzItNy45NzY1NjItMjguOTA2MjUgMy4zNzEwOTMtMTAuMzY3MTg4IDEyLjU0Mjk2OC0xNy43MDcwMzIgMjMuNDAyMzQzLTE4LjcxMDkzOGwxNDcuNzk2ODc1LTEzLjQxNzk2OCA1OC40MzM1OTQtMTM2Ljc0NjA5NGM0LjMwODU5NC0xMC4wNDY4NzUgMTQuMTIxMDk0LTE2LjUzNTE1NiAyNS4wMjM0MzgtMTYuNTM1MTU2IDEwLjkwMjM0MyAwIDIwLjcxNDg0MyA2LjQ4ODI4MSAyNS4wMjM0MzcgMTYuNTExNzE4bDU4LjQzMzU5NCAxMzYuNzY5NTMyIDE0Ny43NzM0MzcgMTMuNDE3OTY4YzEwLjg4MjgxMy45ODA0NjkgMjAuMDU0Njg4IDguMzQzNzUgMjMuNDI1NzgyIDE4LjcxMDkzOCAzLjM3MTA5MyAxMC4zNjcxODcuMjUzOTA2IDIxLjczODI4MS03Ljk1NzAzMiAyOC45MDYyNWwtMTExLjcwMzEyNSA5Ny45NDE0MDYgMzIuOTM3NSAxNDUuMDg1OTM4YzIuNDE0MDYzIDEwLjY2Nzk2OC0xLjcyNjU2MiAyMS42OTkyMTgtMTAuNTc4MTI1IDI4LjA5NzY1Ni04LjgzMjAzMSA2LjM5ODQzNy0yMC42MDkzNzUgNi44OTA2MjUtMjkuOTEwMTU2IDEuMzAwNzgxbC0xMjcuNDQ1MzEyLTc2LjE2MDE1Ni0xMjcuNDQ1MzEzIDc2LjIwMzEyNWMtNC4zMDg1OTQgMi41NTg1OTQtOS4xMDkzNzUgMy44NjMyODEtMTMuOTUzMTI1IDMuODYzMjgxem0xNDEuMzk4NDM4LTExMi44NzVjNC44NDM3NSAwIDkuNjQwNjI0IDEuMzAwNzgxIDEzLjk1MzEyNCAzLjg1OTM3NWwxMjAuMjc3MzQ0IDcxLjkzNzUtMzEuMDg1OTM3LTEzNi45NDE0MDZjLTIuMjE4NzUtOS43NDYwOTQgMS4wODk4NDMtMTkuOTIxODc1IDguNjIxMDkzLTI2LjUxNTYyNWwxMDUuNDcyNjU3LTkyLjUtMTM5LjU0Mjk2OS0xMi42NzE4NzVjLTEwLjA0Njg3NS0uOTE3OTY5LTE4LjY4NzUtNy4yMzQzNzUtMjIuNjEzMjgxLTE2LjQ5MjE4OGwtNTUuMDgyMDMxLTEyOS4wNDY4NzUtNTUuMTQ4NDM4IDEyOS4wNjY0MDdjLTMuODgyODEyIDkuMTk1MzEyLTEyLjUyMzQzOCAxNS41MTE3MTgtMjIuNTQ2ODc1IDE2LjQyOTY4N2wtMTM5LjU2MjUgMTIuNjcxODc1IDEwNS40Njg3NSA5Mi41YzcuNTU0Njg3IDYuNjEzMjgxIDEwLjg1OTM3NSAxNi43Njk1MzEgOC42MjEwOTQgMjYuNTM5MDYybC0zMS4wNjI1IDEzNi45Mzc1IDEyMC4yNzczNDMtNzEuOTE0MDYyYzQuMzA4NTk0LTIuNTU4NTk0IDkuMTA5Mzc2LTMuODU5Mzc1IDEzLjk1MzEyNi0zLjg1OTM3NXptLTg0LjU4NTkzOC0yMjEuODQ3NjU2czAgLjAyMzQzNy0uMDIzNDM4LjA0Mjk2OXptMTY5LjEyODkwNi0uMDYyNS4wMjM0MzguMDQyOTY5YzAtLjAyMzQzOCAwLS4wMjM0MzgtLjAyMzQzOC0uMDQyOTY5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />
                         </div>
                         <div>
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMTE0LjU5Mzc1IDQ5MS4xNDA2MjVjLTUuNjA5Mzc1IDAtMTEuMTc5Njg4LTEuNzUtMTUuOTMzNTk0LTUuMTg3NS04Ljg1NTQ2OC02LjQxNzk2OS0xMi45OTIxODctMTcuNDQ5MjE5LTEwLjU4MjAzMS0yOC4wOTM3NWwzMi45Mzc1LTE0NS4wODk4NDQtMTExLjcwMzEyNS05Ny45NjA5MzdjLTguMjEwOTM4LTcuMTY3OTY5LTExLjM0NzY1Ni0xOC41MTk1MzItNy45NzY1NjItMjguOTA2MjUgMy4zNzEwOTMtMTAuMzY3MTg4IDEyLjU0Mjk2OC0xNy43MDcwMzIgMjMuNDAyMzQzLTE4LjcxMDkzOGwxNDcuNzk2ODc1LTEzLjQxNzk2OCA1OC40MzM1OTQtMTM2Ljc0NjA5NGM0LjMwODU5NC0xMC4wNDY4NzUgMTQuMTIxMDk0LTE2LjUzNTE1NiAyNS4wMjM0MzgtMTYuNTM1MTU2IDEwLjkwMjM0MyAwIDIwLjcxNDg0MyA2LjQ4ODI4MSAyNS4wMjM0MzcgMTYuNTExNzE4bDU4LjQzMzU5NCAxMzYuNzY5NTMyIDE0Ny43NzM0MzcgMTMuNDE3OTY4YzEwLjg4MjgxMy45ODA0NjkgMjAuMDU0Njg4IDguMzQzNzUgMjMuNDI1NzgyIDE4LjcxMDkzOCAzLjM3MTA5MyAxMC4zNjcxODcuMjUzOTA2IDIxLjczODI4MS03Ljk1NzAzMiAyOC45MDYyNWwtMTExLjcwMzEyNSA5Ny45NDE0MDYgMzIuOTM3NSAxNDUuMDg1OTM4YzIuNDE0MDYzIDEwLjY2Nzk2OC0xLjcyNjU2MiAyMS42OTkyMTgtMTAuNTc4MTI1IDI4LjA5NzY1Ni04LjgzMjAzMSA2LjM5ODQzNy0yMC42MDkzNzUgNi44OTA2MjUtMjkuOTEwMTU2IDEuMzAwNzgxbC0xMjcuNDQ1MzEyLTc2LjE2MDE1Ni0xMjcuNDQ1MzEzIDc2LjIwMzEyNWMtNC4zMDg1OTQgMi41NTg1OTQtOS4xMDkzNzUgMy44NjMyODEtMTMuOTUzMTI1IDMuODYzMjgxem0xNDEuMzk4NDM4LTExMi44NzVjNC44NDM3NSAwIDkuNjQwNjI0IDEuMzAwNzgxIDEzLjk1MzEyNCAzLjg1OTM3NWwxMjAuMjc3MzQ0IDcxLjkzNzUtMzEuMDg1OTM3LTEzNi45NDE0MDZjLTIuMjE4NzUtOS43NDYwOTQgMS4wODk4NDMtMTkuOTIxODc1IDguNjIxMDkzLTI2LjUxNTYyNWwxMDUuNDcyNjU3LTkyLjUtMTM5LjU0Mjk2OS0xMi42NzE4NzVjLTEwLjA0Njg3NS0uOTE3OTY5LTE4LjY4NzUtNy4yMzQzNzUtMjIuNjEzMjgxLTE2LjQ5MjE4OGwtNTUuMDgyMDMxLTEyOS4wNDY4NzUtNTUuMTQ4NDM4IDEyOS4wNjY0MDdjLTMuODgyODEyIDkuMTk1MzEyLTEyLjUyMzQzOCAxNS41MTE3MTgtMjIuNTQ2ODc1IDE2LjQyOTY4N2wtMTM5LjU2MjUgMTIuNjcxODc1IDEwNS40Njg3NSA5Mi41YzcuNTU0Njg3IDYuNjEzMjgxIDEwLjg1OTM3NSAxNi43Njk1MzEgOC42MjEwOTQgMjYuNTM5MDYybC0zMS4wNjI1IDEzNi45Mzc1IDEyMC4yNzczNDMtNzEuOTE0MDYyYzQuMzA4NTk0LTIuNTU4NTk0IDkuMTA5Mzc2LTMuODU5Mzc1IDEzLjk1MzEyNi0zLjg1OTM3NXptLTg0LjU4NTkzOC0yMjEuODQ3NjU2czAgLjAyMzQzNy0uMDIzNDM4LjA0Mjk2OXptMTY5LjEyODkwNi0uMDYyNS4wMjM0MzguMDQyOTY5YzAtLjAyMzQzOCAwLS4wMjM0MzgtLjAyMzQzOC0uMDQyOTY5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMTE0LjU5Mzc1IDQ5MS4xNDA2MjVjLTUuNjA5Mzc1IDAtMTEuMTc5Njg4LTEuNzUtMTUuOTMzNTk0LTUuMTg3NS04Ljg1NTQ2OC02LjQxNzk2OS0xMi45OTIxODctMTcuNDQ5MjE5LTEwLjU4MjAzMS0yOC4wOTM3NWwzMi45Mzc1LTE0NS4wODk4NDQtMTExLjcwMzEyNS05Ny45NjA5MzdjLTguMjEwOTM4LTcuMTY3OTY5LTExLjM0NzY1Ni0xOC41MTk1MzItNy45NzY1NjItMjguOTA2MjUgMy4zNzEwOTMtMTAuMzY3MTg4IDEyLjU0Mjk2OC0xNy43MDcwMzIgMjMuNDAyMzQzLTE4LjcxMDkzOGwxNDcuNzk2ODc1LTEzLjQxNzk2OCA1OC40MzM1OTQtMTM2Ljc0NjA5NGM0LjMwODU5NC0xMC4wNDY4NzUgMTQuMTIxMDk0LTE2LjUzNTE1NiAyNS4wMjM0MzgtMTYuNTM1MTU2IDEwLjkwMjM0MyAwIDIwLjcxNDg0MyA2LjQ4ODI4MSAyNS4wMjM0MzcgMTYuNTExNzE4bDU4LjQzMzU5NCAxMzYuNzY5NTMyIDE0Ny43NzM0MzcgMTMuNDE3OTY4YzEwLjg4MjgxMy45ODA0NjkgMjAuMDU0Njg4IDguMzQzNzUgMjMuNDI1NzgyIDE4LjcxMDkzOCAzLjM3MTA5MyAxMC4zNjcxODcuMjUzOTA2IDIxLjczODI4MS03Ljk1NzAzMiAyOC45MDYyNWwtMTExLjcwMzEyNSA5Ny45NDE0MDYgMzIuOTM3NSAxNDUuMDg1OTM4YzIuNDE0MDYzIDEwLjY2Nzk2OC0xLjcyNjU2MiAyMS42OTkyMTgtMTAuNTc4MTI1IDI4LjA5NzY1Ni04LjgzMjAzMSA2LjM5ODQzNy0yMC42MDkzNzUgNi44OTA2MjUtMjkuOTEwMTU2IDEuMzAwNzgxbC0xMjcuNDQ1MzEyLTc2LjE2MDE1Ni0xMjcuNDQ1MzEzIDc2LjIwMzEyNWMtNC4zMDg1OTQgMi41NTg1OTQtOS4xMDkzNzUgMy44NjMyODEtMTMuOTUzMTI1IDMuODYzMjgxem0xNDEuMzk4NDM4LTExMi44NzVjNC44NDM3NSAwIDkuNjQwNjI0IDEuMzAwNzgxIDEzLjk1MzEyNCAzLjg1OTM3NWwxMjAuMjc3MzQ0IDcxLjkzNzUtMzEuMDg1OTM3LTEzNi45NDE0MDZjLTIuMjE4NzUtOS43NDYwOTQgMS4wODk4NDMtMTkuOTIxODc1IDguNjIxMDkzLTI2LjUxNTYyNWwxMDUuNDcyNjU3LTkyLjUtMTM5LjU0Mjk2OS0xMi42NzE4NzVjLTEwLjA0Njg3NS0uOTE3OTY5LTE4LjY4NzUtNy4yMzQzNzUtMjIuNjEzMjgxLTE2LjQ5MjE4OGwtNTUuMDgyMDMxLTEyOS4wNDY4NzUtNTUuMTQ4NDM4IDEyOS4wNjY0MDdjLTMuODgyODEyIDkuMTk1MzEyLTEyLjUyMzQzOCAxNS41MTE3MTgtMjIuNTQ2ODc1IDE2LjQyOTY4N2wtMTM5LjU2MjUgMTIuNjcxODc1IDEwNS40Njg3NSA5Mi41YzcuNTU0Njg3IDYuNjEzMjgxIDEwLjg1OTM3NSAxNi43Njk1MzEgOC42MjEwOTQgMjYuNTM5MDYybC0zMS4wNjI1IDEzNi45Mzc1IDEyMC4yNzczNDMtNzEuOTE0MDYyYzQuMzA4NTk0LTIuNTU4NTk0IDkuMTA5Mzc2LTMuODU5Mzc1IDEzLjk1MzEyNi0zLjg1OTM3NXptLTg0LjU4NTkzOC0yMjEuODQ3NjU2czAgLjAyMzQzNy0uMDIzNDM4LjA0Mjk2OXptMTY5LjEyODkwNi0uMDYyNS4wMjM0MzguMDQyOTY5YzAtLjAyMzQzOCAwLS4wMjM0MzgtLjAyMzQzOC0uMDQyOTY5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />
                         </div>
                         <div>
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMTE0LjU5Mzc1IDQ5MS4xNDA2MjVjLTUuNjA5Mzc1IDAtMTEuMTc5Njg4LTEuNzUtMTUuOTMzNTk0LTUuMTg3NS04Ljg1NTQ2OC02LjQxNzk2OS0xMi45OTIxODctMTcuNDQ5MjE5LTEwLjU4MjAzMS0yOC4wOTM3NWwzMi45Mzc1LTE0NS4wODk4NDQtMTExLjcwMzEyNS05Ny45NjA5MzdjLTguMjEwOTM4LTcuMTY3OTY5LTExLjM0NzY1Ni0xOC41MTk1MzItNy45NzY1NjItMjguOTA2MjUgMy4zNzEwOTMtMTAuMzY3MTg4IDEyLjU0Mjk2OC0xNy43MDcwMzIgMjMuNDAyMzQzLTE4LjcxMDkzOGwxNDcuNzk2ODc1LTEzLjQxNzk2OCA1OC40MzM1OTQtMTM2Ljc0NjA5NGM0LjMwODU5NC0xMC4wNDY4NzUgMTQuMTIxMDk0LTE2LjUzNTE1NiAyNS4wMjM0MzgtMTYuNTM1MTU2IDEwLjkwMjM0MyAwIDIwLjcxNDg0MyA2LjQ4ODI4MSAyNS4wMjM0MzcgMTYuNTExNzE4bDU4LjQzMzU5NCAxMzYuNzY5NTMyIDE0Ny43NzM0MzcgMTMuNDE3OTY4YzEwLjg4MjgxMy45ODA0NjkgMjAuMDU0Njg4IDguMzQzNzUgMjMuNDI1NzgyIDE4LjcxMDkzOCAzLjM3MTA5MyAxMC4zNjcxODcuMjUzOTA2IDIxLjczODI4MS03Ljk1NzAzMiAyOC45MDYyNWwtMTExLjcwMzEyNSA5Ny45NDE0MDYgMzIuOTM3NSAxNDUuMDg1OTM4YzIuNDE0MDYzIDEwLjY2Nzk2OC0xLjcyNjU2MiAyMS42OTkyMTgtMTAuNTc4MTI1IDI4LjA5NzY1Ni04LjgzMjAzMSA2LjM5ODQzNy0yMC42MDkzNzUgNi44OTA2MjUtMjkuOTEwMTU2IDEuMzAwNzgxbC0xMjcuNDQ1MzEyLTc2LjE2MDE1Ni0xMjcuNDQ1MzEzIDc2LjIwMzEyNWMtNC4zMDg1OTQgMi41NTg1OTQtOS4xMDkzNzUgMy44NjMyODEtMTMuOTUzMTI1IDMuODYzMjgxem0xNDEuMzk4NDM4LTExMi44NzVjNC44NDM3NSAwIDkuNjQwNjI0IDEuMzAwNzgxIDEzLjk1MzEyNCAzLjg1OTM3NWwxMjAuMjc3MzQ0IDcxLjkzNzUtMzEuMDg1OTM3LTEzNi45NDE0MDZjLTIuMjE4NzUtOS43NDYwOTQgMS4wODk4NDMtMTkuOTIxODc1IDguNjIxMDkzLTI2LjUxNTYyNWwxMDUuNDcyNjU3LTkyLjUtMTM5LjU0Mjk2OS0xMi42NzE4NzVjLTEwLjA0Njg3NS0uOTE3OTY5LTE4LjY4NzUtNy4yMzQzNzUtMjIuNjEzMjgxLTE2LjQ5MjE4OGwtNTUuMDgyMDMxLTEyOS4wNDY4NzUtNTUuMTQ4NDM4IDEyOS4wNjY0MDdjLTMuODgyODEyIDkuMTk1MzEyLTEyLjUyMzQzOCAxNS41MTE3MTgtMjIuNTQ2ODc1IDE2LjQyOTY4N2wtMTM5LjU2MjUgMTIuNjcxODc1IDEwNS40Njg3NSA5Mi41YzcuNTU0Njg3IDYuNjEzMjgxIDEwLjg1OTM3NSAxNi43Njk1MzEgOC42MjEwOTQgMjYuNTM5MDYybC0zMS4wNjI1IDEzNi45Mzc1IDEyMC4yNzczNDMtNzEuOTE0MDYyYzQuMzA4NTk0LTIuNTU4NTk0IDkuMTA5Mzc2LTMuODU5Mzc1IDEzLjk1MzEyNi0zLjg1OTM3NXptLTg0LjU4NTkzOC0yMjEuODQ3NjU2czAgLjAyMzQzNy0uMDIzNDM4LjA0Mjk2OXptMTY5LjEyODkwNi0uMDYyNS4wMjM0MzguMDQyOTY5YzAtLjAyMzQzOCAwLS4wMjM0MzgtLjAyMzQzOC0uMDQyOTY5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />
                         </div>
                         <div>
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMTE0LjU5Mzc1IDQ5MS4xNDA2MjVjLTUuNjA5Mzc1IDAtMTEuMTc5Njg4LTEuNzUtMTUuOTMzNTk0LTUuMTg3NS04Ljg1NTQ2OC02LjQxNzk2OS0xMi45OTIxODctMTcuNDQ5MjE5LTEwLjU4MjAzMS0yOC4wOTM3NWwzMi45Mzc1LTE0NS4wODk4NDQtMTExLjcwMzEyNS05Ny45NjA5MzdjLTguMjEwOTM4LTcuMTY3OTY5LTExLjM0NzY1Ni0xOC41MTk1MzItNy45NzY1NjItMjguOTA2MjUgMy4zNzEwOTMtMTAuMzY3MTg4IDEyLjU0Mjk2OC0xNy43MDcwMzIgMjMuNDAyMzQzLTE4LjcxMDkzOGwxNDcuNzk2ODc1LTEzLjQxNzk2OCA1OC40MzM1OTQtMTM2Ljc0NjA5NGM0LjMwODU5NC0xMC4wNDY4NzUgMTQuMTIxMDk0LTE2LjUzNTE1NiAyNS4wMjM0MzgtMTYuNTM1MTU2IDEwLjkwMjM0MyAwIDIwLjcxNDg0MyA2LjQ4ODI4MSAyNS4wMjM0MzcgMTYuNTExNzE4bDU4LjQzMzU5NCAxMzYuNzY5NTMyIDE0Ny43NzM0MzcgMTMuNDE3OTY4YzEwLjg4MjgxMy45ODA0NjkgMjAuMDU0Njg4IDguMzQzNzUgMjMuNDI1NzgyIDE4LjcxMDkzOCAzLjM3MTA5MyAxMC4zNjcxODcuMjUzOTA2IDIxLjczODI4MS03Ljk1NzAzMiAyOC45MDYyNWwtMTExLjcwMzEyNSA5Ny45NDE0MDYgMzIuOTM3NSAxNDUuMDg1OTM4YzIuNDE0MDYzIDEwLjY2Nzk2OC0xLjcyNjU2MiAyMS42OTkyMTgtMTAuNTc4MTI1IDI4LjA5NzY1Ni04LjgzMjAzMSA2LjM5ODQzNy0yMC42MDkzNzUgNi44OTA2MjUtMjkuOTEwMTU2IDEuMzAwNzgxbC0xMjcuNDQ1MzEyLTc2LjE2MDE1Ni0xMjcuNDQ1MzEzIDc2LjIwMzEyNWMtNC4zMDg1OTQgMi41NTg1OTQtOS4xMDkzNzUgMy44NjMyODEtMTMuOTUzMTI1IDMuODYzMjgxem0xNDEuMzk4NDM4LTExMi44NzVjNC44NDM3NSAwIDkuNjQwNjI0IDEuMzAwNzgxIDEzLjk1MzEyNCAzLjg1OTM3NWwxMjAuMjc3MzQ0IDcxLjkzNzUtMzEuMDg1OTM3LTEzNi45NDE0MDZjLTIuMjE4NzUtOS43NDYwOTQgMS4wODk4NDMtMTkuOTIxODc1IDguNjIxMDkzLTI2LjUxNTYyNWwxMDUuNDcyNjU3LTkyLjUtMTM5LjU0Mjk2OS0xMi42NzE4NzVjLTEwLjA0Njg3NS0uOTE3OTY5LTE4LjY4NzUtNy4yMzQzNzUtMjIuNjEzMjgxLTE2LjQ5MjE4OGwtNTUuMDgyMDMxLTEyOS4wNDY4NzUtNTUuMTQ4NDM4IDEyOS4wNjY0MDdjLTMuODgyODEyIDkuMTk1MzEyLTEyLjUyMzQzOCAxNS41MTE3MTgtMjIuNTQ2ODc1IDE2LjQyOTY4N2wtMTM5LjU2MjUgMTIuNjcxODc1IDEwNS40Njg3NSA5Mi41YzcuNTU0Njg3IDYuNjEzMjgxIDEwLjg1OTM3NSAxNi43Njk1MzEgOC42MjEwOTQgMjYuNTM5MDYybC0zMS4wNjI1IDEzNi45Mzc1IDEyMC4yNzczNDMtNzEuOTE0MDYyYzQuMzA4NTk0LTIuNTU4NTk0IDkuMTA5Mzc2LTMuODU5Mzc1IDEzLjk1MzEyNi0zLjg1OTM3NXptLTg0LjU4NTkzOC0yMjEuODQ3NjU2czAgLjAyMzQzNy0uMDIzNDM4LjA0Mjk2OXptMTY5LjEyODkwNi0uMDYyNS4wMjM0MzguMDQyOTY5YzAtLjAyMzQzOCAwLS4wMjM0MzgtLjAyMzQzOC0uMDQyOTY5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMTE0LjU5Mzc1IDQ5MS4xNDA2MjVjLTUuNjA5Mzc1IDAtMTEuMTc5Njg4LTEuNzUtMTUuOTMzNTk0LTUuMTg3NS04Ljg1NTQ2OC02LjQxNzk2OS0xMi45OTIxODctMTcuNDQ5MjE5LTEwLjU4MjAzMS0yOC4wOTM3NWwzMi45Mzc1LTE0NS4wODk4NDQtMTExLjcwMzEyNS05Ny45NjA5MzdjLTguMjEwOTM4LTcuMTY3OTY5LTExLjM0NzY1Ni0xOC41MTk1MzItNy45NzY1NjItMjguOTA2MjUgMy4zNzEwOTMtMTAuMzY3MTg4IDEyLjU0Mjk2OC0xNy43MDcwMzIgMjMuNDAyMzQzLTE4LjcxMDkzOGwxNDcuNzk2ODc1LTEzLjQxNzk2OCA1OC40MzM1OTQtMTM2Ljc0NjA5NGM0LjMwODU5NC0xMC4wNDY4NzUgMTQuMTIxMDk0LTE2LjUzNTE1NiAyNS4wMjM0MzgtMTYuNTM1MTU2IDEwLjkwMjM0MyAwIDIwLjcxNDg0MyA2LjQ4ODI4MSAyNS4wMjM0MzcgMTYuNTExNzE4bDU4LjQzMzU5NCAxMzYuNzY5NTMyIDE0Ny43NzM0MzcgMTMuNDE3OTY4YzEwLjg4MjgxMy45ODA0NjkgMjAuMDU0Njg4IDguMzQzNzUgMjMuNDI1NzgyIDE4LjcxMDkzOCAzLjM3MTA5MyAxMC4zNjcxODcuMjUzOTA2IDIxLjczODI4MS03Ljk1NzAzMiAyOC45MDYyNWwtMTExLjcwMzEyNSA5Ny45NDE0MDYgMzIuOTM3NSAxNDUuMDg1OTM4YzIuNDE0MDYzIDEwLjY2Nzk2OC0xLjcyNjU2MiAyMS42OTkyMTgtMTAuNTc4MTI1IDI4LjA5NzY1Ni04LjgzMjAzMSA2LjM5ODQzNy0yMC42MDkzNzUgNi44OTA2MjUtMjkuOTEwMTU2IDEuMzAwNzgxbC0xMjcuNDQ1MzEyLTc2LjE2MDE1Ni0xMjcuNDQ1MzEzIDc2LjIwMzEyNWMtNC4zMDg1OTQgMi41NTg1OTQtOS4xMDkzNzUgMy44NjMyODEtMTMuOTUzMTI1IDMuODYzMjgxem0xNDEuMzk4NDM4LTExMi44NzVjNC44NDM3NSAwIDkuNjQwNjI0IDEuMzAwNzgxIDEzLjk1MzEyNCAzLjg1OTM3NWwxMjAuMjc3MzQ0IDcxLjkzNzUtMzEuMDg1OTM3LTEzNi45NDE0MDZjLTIuMjE4NzUtOS43NDYwOTQgMS4wODk4NDMtMTkuOTIxODc1IDguNjIxMDkzLTI2LjUxNTYyNWwxMDUuNDcyNjU3LTkyLjUtMTM5LjU0Mjk2OS0xMi42NzE4NzVjLTEwLjA0Njg3NS0uOTE3OTY5LTE4LjY4NzUtNy4yMzQzNzUtMjIuNjEzMjgxLTE2LjQ5MjE4OGwtNTUuMDgyMDMxLTEyOS4wNDY4NzUtNTUuMTQ4NDM4IDEyOS4wNjY0MDdjLTMuODgyODEyIDkuMTk1MzEyLTEyLjUyMzQzOCAxNS41MTE3MTgtMjIuNTQ2ODc1IDE2LjQyOTY4N2wtMTM5LjU2MjUgMTIuNjcxODc1IDEwNS40Njg3NSA5Mi41YzcuNTU0Njg3IDYuNjEzMjgxIDEwLjg1OTM3NSAxNi43Njk1MzEgOC42MjEwOTQgMjYuNTM5MDYybC0zMS4wNjI1IDEzNi45Mzc1IDEyMC4yNzczNDMtNzEuOTE0MDYyYzQuMzA4NTk0LTIuNTU4NTk0IDkuMTA5Mzc2LTMuODU5Mzc1IDEzLjk1MzEyNi0zLjg1OTM3NXptLTg0LjU4NTkzOC0yMjEuODQ3NjU2czAgLjAyMzQzNy0uMDIzNDM4LjA0Mjk2OXptMTY5LjEyODkwNi0uMDYyNS4wMjM0MzguMDQyOTY5YzAtLjAyMzQzOCAwLS4wMjM0MzgtLjAyMzQzOC0uMDQyOTY5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />
                         </div>
                         <div>
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMTE0LjU5Mzc1IDQ5MS4xNDA2MjVjLTUuNjA5Mzc1IDAtMTEuMTc5Njg4LTEuNzUtMTUuOTMzNTk0LTUuMTg3NS04Ljg1NTQ2OC02LjQxNzk2OS0xMi45OTIxODctMTcuNDQ5MjE5LTEwLjU4MjAzMS0yOC4wOTM3NWwzMi45Mzc1LTE0NS4wODk4NDQtMTExLjcwMzEyNS05Ny45NjA5MzdjLTguMjEwOTM4LTcuMTY3OTY5LTExLjM0NzY1Ni0xOC41MTk1MzItNy45NzY1NjItMjguOTA2MjUgMy4zNzEwOTMtMTAuMzY3MTg4IDEyLjU0Mjk2OC0xNy43MDcwMzIgMjMuNDAyMzQzLTE4LjcxMDkzOGwxNDcuNzk2ODc1LTEzLjQxNzk2OCA1OC40MzM1OTQtMTM2Ljc0NjA5NGM0LjMwODU5NC0xMC4wNDY4NzUgMTQuMTIxMDk0LTE2LjUzNTE1NiAyNS4wMjM0MzgtMTYuNTM1MTU2IDEwLjkwMjM0MyAwIDIwLjcxNDg0MyA2LjQ4ODI4MSAyNS4wMjM0MzcgMTYuNTExNzE4bDU4LjQzMzU5NCAxMzYuNzY5NTMyIDE0Ny43NzM0MzcgMTMuNDE3OTY4YzEwLjg4MjgxMy45ODA0NjkgMjAuMDU0Njg4IDguMzQzNzUgMjMuNDI1NzgyIDE4LjcxMDkzOCAzLjM3MTA5MyAxMC4zNjcxODcuMjUzOTA2IDIxLjczODI4MS03Ljk1NzAzMiAyOC45MDYyNWwtMTExLjcwMzEyNSA5Ny45NDE0MDYgMzIuOTM3NSAxNDUuMDg1OTM4YzIuNDE0MDYzIDEwLjY2Nzk2OC0xLjcyNjU2MiAyMS42OTkyMTgtMTAuNTc4MTI1IDI4LjA5NzY1Ni04LjgzMjAzMSA2LjM5ODQzNy0yMC42MDkzNzUgNi44OTA2MjUtMjkuOTEwMTU2IDEuMzAwNzgxbC0xMjcuNDQ1MzEyLTc2LjE2MDE1Ni0xMjcuNDQ1MzEzIDc2LjIwMzEyNWMtNC4zMDg1OTQgMi41NTg1OTQtOS4xMDkzNzUgMy44NjMyODEtMTMuOTUzMTI1IDMuODYzMjgxem0xNDEuMzk4NDM4LTExMi44NzVjNC44NDM3NSAwIDkuNjQwNjI0IDEuMzAwNzgxIDEzLjk1MzEyNCAzLjg1OTM3NWwxMjAuMjc3MzQ0IDcxLjkzNzUtMzEuMDg1OTM3LTEzNi45NDE0MDZjLTIuMjE4NzUtOS43NDYwOTQgMS4wODk4NDMtMTkuOTIxODc1IDguNjIxMDkzLTI2LjUxNTYyNWwxMDUuNDcyNjU3LTkyLjUtMTM5LjU0Mjk2OS0xMi42NzE4NzVjLTEwLjA0Njg3NS0uOTE3OTY5LTE4LjY4NzUtNy4yMzQzNzUtMjIuNjEzMjgxLTE2LjQ5MjE4OGwtNTUuMDgyMDMxLTEyOS4wNDY4NzUtNTUuMTQ4NDM4IDEyOS4wNjY0MDdjLTMuODgyODEyIDkuMTk1MzEyLTEyLjUyMzQzOCAxNS41MTE3MTgtMjIuNTQ2ODc1IDE2LjQyOTY4N2wtMTM5LjU2MjUgMTIuNjcxODc1IDEwNS40Njg3NSA5Mi41YzcuNTU0Njg3IDYuNjEzMjgxIDEwLjg1OTM3NSAxNi43Njk1MzEgOC42MjEwOTQgMjYuNTM5MDYybC0zMS4wNjI1IDEzNi45Mzc1IDEyMC4yNzczNDMtNzEuOTE0MDYyYzQuMzA4NTk0LTIuNTU4NTk0IDkuMTA5Mzc2LTMuODU5Mzc1IDEzLjk1MzEyNi0zLjg1OTM3NXptLTg0LjU4NTkzOC0yMjEuODQ3NjU2czAgLjAyMzQzNy0uMDIzNDM4LjA0Mjk2OXptMTY5LjEyODkwNi0uMDYyNS4wMjM0MzguMDQyOTY5YzAtLjAyMzQzOCAwLS4wMjM0MzgtLjAyMzQzOC0uMDQyOTY5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />
                         </div>


                     </div>
                 </div>

             </div>

             <div>
                 <div style="width: 100%;height:30px;position: relative;background-color:#299BE8;display: flex;margin-top: 30px;justify-content: center;align-items: center">
                     <p style="color:#fff;font-family: Calibri;font-size: 25px;margin: 0">Bildiği Diller</p>
                     <div style="width:0;height: 0;border-color: #299BE8 transparent transparent transparent;border-style: solid;position:absolute;bottom: -13px;border-width: 13px 141px 0 141px;"></div>

                 </div>

                 <div style="display: flex">
                     <div style="padding-left: 20px;margin-top: 25px">
                         <div style="display: flex;align-items: center">
                             <div style="width: 3px;height: 3px;border-radius: 100px;background-color: #299BE8;margin-right: 3px"></div><p style="color:#858B8A;font-family: Calibri;font-size: 15px;margin:2px">Türkçe</p>
                         </div>
                         <div style="display: flex;align-items: center">
                             <div style="width: 3px;height: 3px;border-radius: 100px;background-color: #299BE8;margin-right: 3px"></div><p style="color:#858B8A;font-family: Calibri;font-size: 15px;margin:2px">Türkmence</p>
                         </div>
                         <div style="display: flex;align-items: center">
                             <div style="width: 3px;height: 3px;border-radius: 100px;background-color: #299BE8;margin-right: 3px"></div><p style="color:#858B8A;font-family: Calibri;font-size: 15px;margin:2px">İngilizce</p>
                         </div>
                         <div style="display: flex;align-items: center">
                             <div style="width: 3px;height: 3px;border-radius: 100px;background-color: #299BE8;margin-right: 3px"></div><p style="color:#858B8A;font-family: Calibri;font-size: 15px;margin:2px">Fransızca</p>
                         </div>
                     </div>
                     <div style="margin-top: 25px;margin-left: 8px">
                         <div>
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                         </div>
                         <div>
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMTE0LjU5Mzc1IDQ5MS4xNDA2MjVjLTUuNjA5Mzc1IDAtMTEuMTc5Njg4LTEuNzUtMTUuOTMzNTk0LTUuMTg3NS04Ljg1NTQ2OC02LjQxNzk2OS0xMi45OTIxODctMTcuNDQ5MjE5LTEwLjU4MjAzMS0yOC4wOTM3NWwzMi45Mzc1LTE0NS4wODk4NDQtMTExLjcwMzEyNS05Ny45NjA5MzdjLTguMjEwOTM4LTcuMTY3OTY5LTExLjM0NzY1Ni0xOC41MTk1MzItNy45NzY1NjItMjguOTA2MjUgMy4zNzEwOTMtMTAuMzY3MTg4IDEyLjU0Mjk2OC0xNy43MDcwMzIgMjMuNDAyMzQzLTE4LjcxMDkzOGwxNDcuNzk2ODc1LTEzLjQxNzk2OCA1OC40MzM1OTQtMTM2Ljc0NjA5NGM0LjMwODU5NC0xMC4wNDY4NzUgMTQuMTIxMDk0LTE2LjUzNTE1NiAyNS4wMjM0MzgtMTYuNTM1MTU2IDEwLjkwMjM0MyAwIDIwLjcxNDg0MyA2LjQ4ODI4MSAyNS4wMjM0MzcgMTYuNTExNzE4bDU4LjQzMzU5NCAxMzYuNzY5NTMyIDE0Ny43NzM0MzcgMTMuNDE3OTY4YzEwLjg4MjgxMy45ODA0NjkgMjAuMDU0Njg4IDguMzQzNzUgMjMuNDI1NzgyIDE4LjcxMDkzOCAzLjM3MTA5MyAxMC4zNjcxODcuMjUzOTA2IDIxLjczODI4MS03Ljk1NzAzMiAyOC45MDYyNWwtMTExLjcwMzEyNSA5Ny45NDE0MDYgMzIuOTM3NSAxNDUuMDg1OTM4YzIuNDE0MDYzIDEwLjY2Nzk2OC0xLjcyNjU2MiAyMS42OTkyMTgtMTAuNTc4MTI1IDI4LjA5NzY1Ni04LjgzMjAzMSA2LjM5ODQzNy0yMC42MDkzNzUgNi44OTA2MjUtMjkuOTEwMTU2IDEuMzAwNzgxbC0xMjcuNDQ1MzEyLTc2LjE2MDE1Ni0xMjcuNDQ1MzEzIDc2LjIwMzEyNWMtNC4zMDg1OTQgMi41NTg1OTQtOS4xMDkzNzUgMy44NjMyODEtMTMuOTUzMTI1IDMuODYzMjgxem0xNDEuMzk4NDM4LTExMi44NzVjNC44NDM3NSAwIDkuNjQwNjI0IDEuMzAwNzgxIDEzLjk1MzEyNCAzLjg1OTM3NWwxMjAuMjc3MzQ0IDcxLjkzNzUtMzEuMDg1OTM3LTEzNi45NDE0MDZjLTIuMjE4NzUtOS43NDYwOTQgMS4wODk4NDMtMTkuOTIxODc1IDguNjIxMDkzLTI2LjUxNTYyNWwxMDUuNDcyNjU3LTkyLjUtMTM5LjU0Mjk2OS0xMi42NzE4NzVjLTEwLjA0Njg3NS0uOTE3OTY5LTE4LjY4NzUtNy4yMzQzNzUtMjIuNjEzMjgxLTE2LjQ5MjE4OGwtNTUuMDgyMDMxLTEyOS4wNDY4NzUtNTUuMTQ4NDM4IDEyOS4wNjY0MDdjLTMuODgyODEyIDkuMTk1MzEyLTEyLjUyMzQzOCAxNS41MTE3MTgtMjIuNTQ2ODc1IDE2LjQyOTY4N2wtMTM5LjU2MjUgMTIuNjcxODc1IDEwNS40Njg3NSA5Mi41YzcuNTU0Njg3IDYuNjEzMjgxIDEwLjg1OTM3NSAxNi43Njk1MzEgOC42MjEwOTQgMjYuNTM5MDYybC0zMS4wNjI1IDEzNi45Mzc1IDEyMC4yNzczNDMtNzEuOTE0MDYyYzQuMzA4NTk0LTIuNTU4NTk0IDkuMTA5Mzc2LTMuODU5Mzc1IDEzLjk1MzEyNi0zLjg1OTM3NXptLTg0LjU4NTkzOC0yMjEuODQ3NjU2czAgLjAyMzQzNy0uMDIzNDM4LjA0Mjk2OXptMTY5LjEyODkwNi0uMDYyNS4wMjM0MzguMDQyOTY5YzAtLjAyMzQzOCAwLS4wMjM0MzgtLjAyMzQzOC0uMDQyOTY5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMTE0LjU5Mzc1IDQ5MS4xNDA2MjVjLTUuNjA5Mzc1IDAtMTEuMTc5Njg4LTEuNzUtMTUuOTMzNTk0LTUuMTg3NS04Ljg1NTQ2OC02LjQxNzk2OS0xMi45OTIxODctMTcuNDQ5MjE5LTEwLjU4MjAzMS0yOC4wOTM3NWwzMi45Mzc1LTE0NS4wODk4NDQtMTExLjcwMzEyNS05Ny45NjA5MzdjLTguMjEwOTM4LTcuMTY3OTY5LTExLjM0NzY1Ni0xOC41MTk1MzItNy45NzY1NjItMjguOTA2MjUgMy4zNzEwOTMtMTAuMzY3MTg4IDEyLjU0Mjk2OC0xNy43MDcwMzIgMjMuNDAyMzQzLTE4LjcxMDkzOGwxNDcuNzk2ODc1LTEzLjQxNzk2OCA1OC40MzM1OTQtMTM2Ljc0NjA5NGM0LjMwODU5NC0xMC4wNDY4NzUgMTQuMTIxMDk0LTE2LjUzNTE1NiAyNS4wMjM0MzgtMTYuNTM1MTU2IDEwLjkwMjM0MyAwIDIwLjcxNDg0MyA2LjQ4ODI4MSAyNS4wMjM0MzcgMTYuNTExNzE4bDU4LjQzMzU5NCAxMzYuNzY5NTMyIDE0Ny43NzM0MzcgMTMuNDE3OTY4YzEwLjg4MjgxMy45ODA0NjkgMjAuMDU0Njg4IDguMzQzNzUgMjMuNDI1NzgyIDE4LjcxMDkzOCAzLjM3MTA5MyAxMC4zNjcxODcuMjUzOTA2IDIxLjczODI4MS03Ljk1NzAzMiAyOC45MDYyNWwtMTExLjcwMzEyNSA5Ny45NDE0MDYgMzIuOTM3NSAxNDUuMDg1OTM4YzIuNDE0MDYzIDEwLjY2Nzk2OC0xLjcyNjU2MiAyMS42OTkyMTgtMTAuNTc4MTI1IDI4LjA5NzY1Ni04LjgzMjAzMSA2LjM5ODQzNy0yMC42MDkzNzUgNi44OTA2MjUtMjkuOTEwMTU2IDEuMzAwNzgxbC0xMjcuNDQ1MzEyLTc2LjE2MDE1Ni0xMjcuNDQ1MzEzIDc2LjIwMzEyNWMtNC4zMDg1OTQgMi41NTg1OTQtOS4xMDkzNzUgMy44NjMyODEtMTMuOTUzMTI1IDMuODYzMjgxem0xNDEuMzk4NDM4LTExMi44NzVjNC44NDM3NSAwIDkuNjQwNjI0IDEuMzAwNzgxIDEzLjk1MzEyNCAzLjg1OTM3NWwxMjAuMjc3MzQ0IDcxLjkzNzUtMzEuMDg1OTM3LTEzNi45NDE0MDZjLTIuMjE4NzUtOS43NDYwOTQgMS4wODk4NDMtMTkuOTIxODc1IDguNjIxMDkzLTI2LjUxNTYyNWwxMDUuNDcyNjU3LTkyLjUtMTM5LjU0Mjk2OS0xMi42NzE4NzVjLTEwLjA0Njg3NS0uOTE3OTY5LTE4LjY4NzUtNy4yMzQzNzUtMjIuNjEzMjgxLTE2LjQ5MjE4OGwtNTUuMDgyMDMxLTEyOS4wNDY4NzUtNTUuMTQ4NDM4IDEyOS4wNjY0MDdjLTMuODgyODEyIDkuMTk1MzEyLTEyLjUyMzQzOCAxNS41MTE3MTgtMjIuNTQ2ODc1IDE2LjQyOTY4N2wtMTM5LjU2MjUgMTIuNjcxODc1IDEwNS40Njg3NSA5Mi41YzcuNTU0Njg3IDYuNjEzMjgxIDEwLjg1OTM3NSAxNi43Njk1MzEgOC42MjEwOTQgMjYuNTM5MDYybC0zMS4wNjI1IDEzNi45Mzc1IDEyMC4yNzczNDMtNzEuOTE0MDYyYzQuMzA4NTk0LTIuNTU4NTk0IDkuMTA5Mzc2LTMuODU5Mzc1IDEzLjk1MzEyNi0zLjg1OTM3NXptLTg0LjU4NTkzOC0yMjEuODQ3NjU2czAgLjAyMzQzNy0uMDIzNDM4LjA0Mjk2OXptMTY5LjEyODkwNi0uMDYyNS4wMjM0MzguMDQyOTY5YzAtLjAyMzQzOCAwLS4wMjM0MzgtLjAyMzQzOC0uMDQyOTY5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />
                         </div>
                         <div>
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMTE0LjU5Mzc1IDQ5MS4xNDA2MjVjLTUuNjA5Mzc1IDAtMTEuMTc5Njg4LTEuNzUtMTUuOTMzNTk0LTUuMTg3NS04Ljg1NTQ2OC02LjQxNzk2OS0xMi45OTIxODctMTcuNDQ5MjE5LTEwLjU4MjAzMS0yOC4wOTM3NWwzMi45Mzc1LTE0NS4wODk4NDQtMTExLjcwMzEyNS05Ny45NjA5MzdjLTguMjEwOTM4LTcuMTY3OTY5LTExLjM0NzY1Ni0xOC41MTk1MzItNy45NzY1NjItMjguOTA2MjUgMy4zNzEwOTMtMTAuMzY3MTg4IDEyLjU0Mjk2OC0xNy43MDcwMzIgMjMuNDAyMzQzLTE4LjcxMDkzOGwxNDcuNzk2ODc1LTEzLjQxNzk2OCA1OC40MzM1OTQtMTM2Ljc0NjA5NGM0LjMwODU5NC0xMC4wNDY4NzUgMTQuMTIxMDk0LTE2LjUzNTE1NiAyNS4wMjM0MzgtMTYuNTM1MTU2IDEwLjkwMjM0MyAwIDIwLjcxNDg0MyA2LjQ4ODI4MSAyNS4wMjM0MzcgMTYuNTExNzE4bDU4LjQzMzU5NCAxMzYuNzY5NTMyIDE0Ny43NzM0MzcgMTMuNDE3OTY4YzEwLjg4MjgxMy45ODA0NjkgMjAuMDU0Njg4IDguMzQzNzUgMjMuNDI1NzgyIDE4LjcxMDkzOCAzLjM3MTA5MyAxMC4zNjcxODcuMjUzOTA2IDIxLjczODI4MS03Ljk1NzAzMiAyOC45MDYyNWwtMTExLjcwMzEyNSA5Ny45NDE0MDYgMzIuOTM3NSAxNDUuMDg1OTM4YzIuNDE0MDYzIDEwLjY2Nzk2OC0xLjcyNjU2MiAyMS42OTkyMTgtMTAuNTc4MTI1IDI4LjA5NzY1Ni04LjgzMjAzMSA2LjM5ODQzNy0yMC42MDkzNzUgNi44OTA2MjUtMjkuOTEwMTU2IDEuMzAwNzgxbC0xMjcuNDQ1MzEyLTc2LjE2MDE1Ni0xMjcuNDQ1MzEzIDc2LjIwMzEyNWMtNC4zMDg1OTQgMi41NTg1OTQtOS4xMDkzNzUgMy44NjMyODEtMTMuOTUzMTI1IDMuODYzMjgxem0xNDEuMzk4NDM4LTExMi44NzVjNC44NDM3NSAwIDkuNjQwNjI0IDEuMzAwNzgxIDEzLjk1MzEyNCAzLjg1OTM3NWwxMjAuMjc3MzQ0IDcxLjkzNzUtMzEuMDg1OTM3LTEzNi45NDE0MDZjLTIuMjE4NzUtOS43NDYwOTQgMS4wODk4NDMtMTkuOTIxODc1IDguNjIxMDkzLTI2LjUxNTYyNWwxMDUuNDcyNjU3LTkyLjUtMTM5LjU0Mjk2OS0xMi42NzE4NzVjLTEwLjA0Njg3NS0uOTE3OTY5LTE4LjY4NzUtNy4yMzQzNzUtMjIuNjEzMjgxLTE2LjQ5MjE4OGwtNTUuMDgyMDMxLTEyOS4wNDY4NzUtNTUuMTQ4NDM4IDEyOS4wNjY0MDdjLTMuODgyODEyIDkuMTk1MzEyLTEyLjUyMzQzOCAxNS41MTE3MTgtMjIuNTQ2ODc1IDE2LjQyOTY4N2wtMTM5LjU2MjUgMTIuNjcxODc1IDEwNS40Njg3NSA5Mi41YzcuNTU0Njg3IDYuNjEzMjgxIDEwLjg1OTM3NSAxNi43Njk1MzEgOC42MjEwOTQgMjYuNTM5MDYybC0zMS4wNjI1IDEzNi45Mzc1IDEyMC4yNzczNDMtNzEuOTE0MDYyYzQuMzA4NTk0LTIuNTU4NTk0IDkuMTA5Mzc2LTMuODU5Mzc1IDEzLjk1MzEyNi0zLjg1OTM3NXptLTg0LjU4NTkzOC0yMjEuODQ3NjU2czAgLjAyMzQzNy0uMDIzNDM4LjA0Mjk2OXptMTY5LjEyODkwNi0uMDYyNS4wMjM0MzguMDQyOTY5YzAtLjAyMzQzOCAwLS4wMjM0MzgtLjAyMzQzOC0uMDQyOTY5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />
                         </div>
                         <div>
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTkxNDMgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTEwLjY1MjM0NCAxODUuODgyODEyYy0zLjM3MTA5NC0xMC4zNjcxODctMTIuNTY2NDA2LTE3LjcwNzAzMS0yMy40MDIzNDQtMTguNjg3NWwtMTQ3Ljc5Njg3NS0xMy40MTc5NjgtNTguNDEwMTU2LTEzNi43NWMtNC4zMTI1LTEwLjA0Njg3NS0xNC4xMjUtMTYuNTMxMjUtMjUuMDQ2ODc1LTE2LjUzMTI1cy0yMC43MzgyODIgNi40ODQzNzUtMjUuMDIzNDM4IDE2LjUzMTI1bC01OC40MTAxNTYgMTM2Ljc1LTE0Ny44MjAzMTIgMTMuNDE3OTY4Yy0xMC44MzU5MzggMS0yMC4wMTE3MTkgOC4zMzk4NDQtMjMuNDAyMzQ0IDE4LjY4NzUtMy4zNzEwOTQgMTAuMzY3MTg4LS4yNTc4MTMgMjEuNzM4MjgyIDcuOTM3NSAyOC45MjU3ODJsMTExLjcyMjY1NiA5Ny45NjQ4NDQtMzIuOTQxNDA2IDE0NS4wODU5MzdjLTIuNDEwMTU2IDEwLjY2Nzk2OSAxLjczMDQ2OCAyMS42OTkyMTkgMTAuNTgyMDMxIDI4LjA5NzY1NiA0Ljc1NzgxMyAzLjQ1NzAzMSAxMC4zNDc2NTYgNS4xODM1OTQgMTUuOTU3MDMxIDUuMTgzNTk0IDQuODIwMzEzIDAgOS42NDQ1MzItMS4yODEyNSAxMy45NTMxMjUtMy44NTkzNzVsMTI3LjQ0NTMxMy03Ni4yMDMxMjUgMTI3LjQyMTg3NSA3Ni4yMDMxMjVjOS4zNDc2NTYgNS41ODU5MzggMjEuMTAxNTYyIDUuMDc0MjE5IDI5LjkzMzU5My0xLjMyNDIxOSA4Ljg1MTU2My02LjM5ODQzNyAxMi45OTIxODgtMTcuNDI5Njg3IDEwLjU4MjAzMi0yOC4wOTc2NTZsLTMyLjk0MTQwNi0xNDUuMDg1OTM3IDExMS43MjI2NTYtOTcuOTY0ODQ0YzguMTkxNDA2LTcuMTg3NSAxMS4zMDg1OTQtMTguNTM1MTU2IDcuOTM3NS0yOC45MjU3ODJ6bS0yNTIuMjAzMTI1IDIyMy43MjI2NTciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiMyOTlCRTgiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMTE0LjU5Mzc1IDQ5MS4xNDA2MjVjLTUuNjA5Mzc1IDAtMTEuMTc5Njg4LTEuNzUtMTUuOTMzNTk0LTUuMTg3NS04Ljg1NTQ2OC02LjQxNzk2OS0xMi45OTIxODctMTcuNDQ5MjE5LTEwLjU4MjAzMS0yOC4wOTM3NWwzMi45Mzc1LTE0NS4wODk4NDQtMTExLjcwMzEyNS05Ny45NjA5MzdjLTguMjEwOTM4LTcuMTY3OTY5LTExLjM0NzY1Ni0xOC41MTk1MzItNy45NzY1NjItMjguOTA2MjUgMy4zNzEwOTMtMTAuMzY3MTg4IDEyLjU0Mjk2OC0xNy43MDcwMzIgMjMuNDAyMzQzLTE4LjcxMDkzOGwxNDcuNzk2ODc1LTEzLjQxNzk2OCA1OC40MzM1OTQtMTM2Ljc0NjA5NGM0LjMwODU5NC0xMC4wNDY4NzUgMTQuMTIxMDk0LTE2LjUzNTE1NiAyNS4wMjM0MzgtMTYuNTM1MTU2IDEwLjkwMjM0MyAwIDIwLjcxNDg0MyA2LjQ4ODI4MSAyNS4wMjM0MzcgMTYuNTExNzE4bDU4LjQzMzU5NCAxMzYuNzY5NTMyIDE0Ny43NzM0MzcgMTMuNDE3OTY4YzEwLjg4MjgxMy45ODA0NjkgMjAuMDU0Njg4IDguMzQzNzUgMjMuNDI1NzgyIDE4LjcxMDkzOCAzLjM3MTA5MyAxMC4zNjcxODcuMjUzOTA2IDIxLjczODI4MS03Ljk1NzAzMiAyOC45MDYyNWwtMTExLjcwMzEyNSA5Ny45NDE0MDYgMzIuOTM3NSAxNDUuMDg1OTM4YzIuNDE0MDYzIDEwLjY2Nzk2OC0xLjcyNjU2MiAyMS42OTkyMTgtMTAuNTc4MTI1IDI4LjA5NzY1Ni04LjgzMjAzMSA2LjM5ODQzNy0yMC42MDkzNzUgNi44OTA2MjUtMjkuOTEwMTU2IDEuMzAwNzgxbC0xMjcuNDQ1MzEyLTc2LjE2MDE1Ni0xMjcuNDQ1MzEzIDc2LjIwMzEyNWMtNC4zMDg1OTQgMi41NTg1OTQtOS4xMDkzNzUgMy44NjMyODEtMTMuOTUzMTI1IDMuODYzMjgxem0xNDEuMzk4NDM4LTExMi44NzVjNC44NDM3NSAwIDkuNjQwNjI0IDEuMzAwNzgxIDEzLjk1MzEyNCAzLjg1OTM3NWwxMjAuMjc3MzQ0IDcxLjkzNzUtMzEuMDg1OTM3LTEzNi45NDE0MDZjLTIuMjE4NzUtOS43NDYwOTQgMS4wODk4NDMtMTkuOTIxODc1IDguNjIxMDkzLTI2LjUxNTYyNWwxMDUuNDcyNjU3LTkyLjUtMTM5LjU0Mjk2OS0xMi42NzE4NzVjLTEwLjA0Njg3NS0uOTE3OTY5LTE4LjY4NzUtNy4yMzQzNzUtMjIuNjEzMjgxLTE2LjQ5MjE4OGwtNTUuMDgyMDMxLTEyOS4wNDY4NzUtNTUuMTQ4NDM4IDEyOS4wNjY0MDdjLTMuODgyODEyIDkuMTk1MzEyLTEyLjUyMzQzOCAxNS41MTE3MTgtMjIuNTQ2ODc1IDE2LjQyOTY4N2wtMTM5LjU2MjUgMTIuNjcxODc1IDEwNS40Njg3NSA5Mi41YzcuNTU0Njg3IDYuNjEzMjgxIDEwLjg1OTM3NSAxNi43Njk1MzEgOC42MjEwOTQgMjYuNTM5MDYybC0zMS4wNjI1IDEzNi45Mzc1IDEyMC4yNzczNDMtNzEuOTE0MDYyYzQuMzA4NTk0LTIuNTU4NTk0IDkuMTA5Mzc2LTMuODU5Mzc1IDEzLjk1MzEyNi0zLjg1OTM3NXptLTg0LjU4NTkzOC0yMjEuODQ3NjU2czAgLjAyMzQzNy0uMDIzNDM4LjA0Mjk2OXptMTY5LjEyODkwNi0uMDYyNS4wMjM0MzguMDQyOTY5YzAtLjAyMzQzOCAwLS4wMjM0MzgtLjAyMzQzOC0uMDQyOTY5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />
                             <img height="15px" style="margin: 2px 1px 2px 1px;" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMTE0LjU5Mzc1IDQ5MS4xNDA2MjVjLTUuNjA5Mzc1IDAtMTEuMTc5Njg4LTEuNzUtMTUuOTMzNTk0LTUuMTg3NS04Ljg1NTQ2OC02LjQxNzk2OS0xMi45OTIxODctMTcuNDQ5MjE5LTEwLjU4MjAzMS0yOC4wOTM3NWwzMi45Mzc1LTE0NS4wODk4NDQtMTExLjcwMzEyNS05Ny45NjA5MzdjLTguMjEwOTM4LTcuMTY3OTY5LTExLjM0NzY1Ni0xOC41MTk1MzItNy45NzY1NjItMjguOTA2MjUgMy4zNzEwOTMtMTAuMzY3MTg4IDEyLjU0Mjk2OC0xNy43MDcwMzIgMjMuNDAyMzQzLTE4LjcxMDkzOGwxNDcuNzk2ODc1LTEzLjQxNzk2OCA1OC40MzM1OTQtMTM2Ljc0NjA5NGM0LjMwODU5NC0xMC4wNDY4NzUgMTQuMTIxMDk0LTE2LjUzNTE1NiAyNS4wMjM0MzgtMTYuNTM1MTU2IDEwLjkwMjM0MyAwIDIwLjcxNDg0MyA2LjQ4ODI4MSAyNS4wMjM0MzcgMTYuNTExNzE4bDU4LjQzMzU5NCAxMzYuNzY5NTMyIDE0Ny43NzM0MzcgMTMuNDE3OTY4YzEwLjg4MjgxMy45ODA0NjkgMjAuMDU0Njg4IDguMzQzNzUgMjMuNDI1NzgyIDE4LjcxMDkzOCAzLjM3MTA5MyAxMC4zNjcxODcuMjUzOTA2IDIxLjczODI4MS03Ljk1NzAzMiAyOC45MDYyNWwtMTExLjcwMzEyNSA5Ny45NDE0MDYgMzIuOTM3NSAxNDUuMDg1OTM4YzIuNDE0MDYzIDEwLjY2Nzk2OC0xLjcyNjU2MiAyMS42OTkyMTgtMTAuNTc4MTI1IDI4LjA5NzY1Ni04LjgzMjAzMSA2LjM5ODQzNy0yMC42MDkzNzUgNi44OTA2MjUtMjkuOTEwMTU2IDEuMzAwNzgxbC0xMjcuNDQ1MzEyLTc2LjE2MDE1Ni0xMjcuNDQ1MzEzIDc2LjIwMzEyNWMtNC4zMDg1OTQgMi41NTg1OTQtOS4xMDkzNzUgMy44NjMyODEtMTMuOTUzMTI1IDMuODYzMjgxem0xNDEuMzk4NDM4LTExMi44NzVjNC44NDM3NSAwIDkuNjQwNjI0IDEuMzAwNzgxIDEzLjk1MzEyNCAzLjg1OTM3NWwxMjAuMjc3MzQ0IDcxLjkzNzUtMzEuMDg1OTM3LTEzNi45NDE0MDZjLTIuMjE4NzUtOS43NDYwOTQgMS4wODk4NDMtMTkuOTIxODc1IDguNjIxMDkzLTI2LjUxNTYyNWwxMDUuNDcyNjU3LTkyLjUtMTM5LjU0Mjk2OS0xMi42NzE4NzVjLTEwLjA0Njg3NS0uOTE3OTY5LTE4LjY4NzUtNy4yMzQzNzUtMjIuNjEzMjgxLTE2LjQ5MjE4OGwtNTUuMDgyMDMxLTEyOS4wNDY4NzUtNTUuMTQ4NDM4IDEyOS4wNjY0MDdjLTMuODgyODEyIDkuMTk1MzEyLTEyLjUyMzQzOCAxNS41MTE3MTgtMjIuNTQ2ODc1IDE2LjQyOTY4N2wtMTM5LjU2MjUgMTIuNjcxODc1IDEwNS40Njg3NSA5Mi41YzcuNTU0Njg3IDYuNjEzMjgxIDEwLjg1OTM3NSAxNi43Njk1MzEgOC42MjEwOTQgMjYuNTM5MDYybC0zMS4wNjI1IDEzNi45Mzc1IDEyMC4yNzczNDMtNzEuOTE0MDYyYzQuMzA4NTk0LTIuNTU4NTk0IDkuMTA5Mzc2LTMuODU5Mzc1IDEzLjk1MzEyNi0zLjg1OTM3NXptLTg0LjU4NTkzOC0yMjEuODQ3NjU2czAgLjAyMzQzNy0uMDIzNDM4LjA0Mjk2OXptMTY5LjEyODkwNi0uMDYyNS4wMjM0MzguMDQyOTY5YzAtLjAyMzQzOCAwLS4wMjM0MzgtLjAyMzQzOC0uMDQyOTY5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />
                         </div>


                     </div>
                 </div>

             </div>

             <div>
                 <div style="width: 100%;height:30px;position: relative;background-color:#299BE8;display: flex;margin-top: 30px;justify-content: center;align-items: center">
                     <p style="color:#fff;font-family: Calibri;font-size: 25px;margin: 0">İlgi Alanları</p>
                     <div style="width:0;height: 0;border-color: #299BE8 transparent transparent transparent;border-style: solid;position:absolute;bottom: -13px;border-width: 13px 141px 0 141px;"></div>
                 </div>

                     <div style="padding-left: 20px;margin-top: 25px;margin-left: 25px">
                         <div style="display: flex;align-items: center">
                             <div style="width: 3px;height: 3px;border-radius: 100px;background-color: #299BE8;margin-right: 3px"></div><p style="color:#858B8A;font-family: Calibri;font-size: 15px;margin:2px">Kampçılık</p>
                         </div>
                         <div style="display: flex;align-items: center">
                             <div style="width: 3px;height: 3px;border-radius: 100px;background-color: #299BE8;margin-right: 3px"></div><p style="color:#858B8A;font-family: Calibri;font-size: 15px;margin:2px">Kitap</p>
                         </div>
                         <div style="display: flex;align-items: center">
                             <div style="width: 3px;height: 3px;border-radius: 100px;background-color: #299BE8;margin-right: 3px"></div><p style="color:#858B8A;font-family: Calibri;font-size: 15px;margin:2px">Müzik</p>
                         </div>
                         <div style="display: flex;align-items: center">
                             <div style="width: 3px;height: 3px;border-radius: 100px;background-color: #299BE8;margin-right: 3px"></div><p style="color:#858B8A;font-family: Calibri;font-size: 15px;margin:2px">Film</p>
                         </div>
                     </div>

             </div>

         </div>
     </div>

     <div style="width: 65%;min-height: 850px">
         <p style="font-family: Calibri;font-size: 37px;color:#299be8;text-align: center;margin: 30px 0 30px;">${this.state.userJob}</p>

         <div style="margin-bottom: 35px">
             <div style="width: 180px;height: 40px;background-color: #299be8;display:flex;align-items: center;padding-left: 20px;position: relative">
                 <p style="margin:0;font-size: 25px;color:#fff;font-family: Calibri">Eğitim</p>
                 <div style="width: 0;height: 0;position: absolute;right: -80px;border-color: transparent transparent transparent #299be8;border-style: solid;border-width: 20px 40px 20px 40px;"></div>
             </div>
             <div style="padding-left: 30px;padding-right: 30px;margin-top:15px">
                 <p style="font-family: Calibri;margin:0;font-size: 19px;color:#696969;margin-bottom: 5px">Gaziantep Üniversitesi/Fen Edebiyat Fakültesi</p>
                 <p style="font-family: Calibri;margin:0;font-size: 17px;color:#7D7D7D">Biyoloji Bölümü</p>
                 <p style="font-family: Calibri;margin:0;font-size: 17px;color:#7D7D7D">09.2013-06.2020</p>
             </div>
         </div>


         <div style="margin-bottom: 35px">
             <div style="width: 180px;height: 40px;background-color: #299be8;display:flex;align-items: center;padding-left: 20px;position: relative">
                 <p style="margin:0;font-size: 25px;color:#fff;font-family: Calibri">İş Deneyimi</p>
                 <div style="width: 0;height: 0;position: absolute;right: -80px;border-color: transparent transparent transparent #299be8;border-style: solid;border-width: 20px 40px 20px 40px;"></div>
             </div>
             <div style="padding-left: 30px;padding-right: 30px;margin-top:15px">
                 <p style="font-family: Calibri;font-size: 19px;color:#696969;margin: 0 0 5px;">Logo Yazılım</p>
                 <div style="margin-left: 20px">
                     <p style="font-family: Calibri;margin:2px;font-size: 17px;color:#7D7D7D">Frontend Developer</p>
                     <p style="font-family: Calibri;margin:2px;font-size: 17px;color:#7D7D7D">09.2013-06.2020</p>
                     <p style="font-family: Calibri;margin:2px;font-size: 17px;color:#7D7D7D">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                 </div>
             </div>
         </div>

         <div style="margin-bottom: 35px">
             <div style="width: 180px;height: 40px;background-color: #299be8;display:flex;align-items: center;padding-left: 20px;position: relative">
                 <p style="margin:0;font-size: 25px;color:#fff;font-family: Calibri">Projeler</p>
                 <div style="width: 0;height: 0;position: absolute;right: -80px;border-color: transparent transparent transparent #299be8;border-style: solid;border-width: 20px 40px 20px 40px;"></div>
             </div>
             <div style="padding-left: 30px;padding-right: 30px;margin-top:15px">
                 <p style="font-family: Calibri;font-size: 19px;color:#696969;margin: 0 0 5px;">MovieApp</p>
                 <div style="margin-left: 20px">
                     <p style="font-family: Calibri;margin: 2px 2px 10px;font-size: 17px;color:#7D7D7D">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                     <p style="font-family: Calibri;margin:2px;font-size: 17px;color:#7D7D7D">Araçlar: Vue.js, Firebase, Bootstarp, Git, Vuex, Vue-Router</p>
                     <div style="display: flex;align-items: center">
                         <img height="15px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGNsYXNzPSIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" /><p style="font-family: Calibri;margin:2px;font-size: 17px;color:#7D7D7D">shokidev-movie.web.app</p>
                     </div>
                 </div>
             </div>
         </div>

         <div style="margin-bottom: 35px">
             <div style="width: 180px;height: 40px;background-color: #299be8;display:flex;align-items: center;padding-left: 20px;position: relative">
                 <p style="margin:0;font-size: 25px;color:#fff;font-family: Calibri">Eğitim</p>
                 <div style="width: 0;height: 0;position: absolute;right: -80px;border-color: transparent transparent transparent #299be8;border-style: solid;border-width: 20px 40px 20px 40px;"></div>
             </div>
             <div style="padding-left: 30px;padding-right: 30px;margin-top:15px">
                 <p style="font-family: Calibri;margin:0;font-size: 19px;color:#696969;margin-bottom: 5px">GAÜN YAZILIM TOPLULUĞU / <i style="font-size: 17px;color:#858B8A">üye</i></p>
                 <p style="font-family: Calibri;margin:0;font-size: 19px;color:#696969;margin-bottom: 5px">KODLUYORUZ / <i style="font-size: 17px;color:#858B8A">mezun</i></p>
             </div>
         </div>

         <div style="margin-bottom: 35px">
             <div style="width: 180px;height: 40px;background-color: #299be8;display:flex;align-items: center;padding-left: 20px;position: relative">
                 <p style="margin:0;font-size: 25px;color:#fff;font-family: Calibri">Referans</p>
                 <div style="width: 0;height: 0;position: absolute;right: -80px;border-color: transparent transparent transparent #299be8;border-style: solid;border-width: 20px 40px 20px 40px;"></div>
             </div>
             <div style="padding-left: 30px;padding-right: 30px;margin-top:15px">
                 <p style="font-family: Calibri;font-size: 19px;color:#696969;margin: 0 0 5px;">Sohrat Jumadurdyyev</p>
                 <div style="margin-left: 20px">
                     <div style="display: flex;align-items: center">
                         <img height="15px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzg0IDM4NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0IDM4NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNTMuMTg4LDI1Mi4wNTJjLTIzLjUxLDAtNDYuNTk0LTMuNjc3LTY4LjQ2OS0xMC45MDZjLTEwLjcxOS0zLjY1Ni0yMy44OTYtMC4zMDItMzAuNDM4LDYuNDE3bC00My4xNzcsMzIuNTk0ICAgIGMtNTAuMDczLTI2LjcyOS04MC45MTctNTcuNTYzLTEwNy4yODEtMTA3LjI2bDMxLjYzNS00Mi4wNTJjOC4yMTktOC4yMDgsMTEuMTY3LTIwLjE5OCw3LjYzNS0zMS40NDggICAgYy03LjI2LTIxLjk5LTEwLjk0OC00NS4wNjMtMTAuOTQ4LTY4LjU4M0MxMzIuMTQ2LDEzLjgyMywxMTguMzIzLDAsMTAxLjMzMywwSDMwLjgxM0MxMy44MjMsMCwwLDEzLjgyMywwLDMwLjgxMyAgICBDMCwyMjUuNTYzLDE1OC40MzgsMzg0LDM1My4xODgsMzg0YzE2Ljk5LDAsMzAuODEzLTEzLjgyMywzMC44MTMtMzAuODEzdi03MC4zMjNDMzg0LDI2NS44NzUsMzcwLjE3NywyNTIuMDUyLDM1My4xODgsMjUyLjA1MnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" /><p style="font-family: Calibri;margin:3px;font-size: 15px;color:#858B8A"><p style="font-family: Calibri;margin:0;font-size: 17px;color:#7D7D7D">0 555 666 5555</p>
                     </div>
                     <div style="display: flex;align-items: center">
                         <img height="15px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTEwLjY4OCw5NS4xNTZDODAuOTU4LDE1NC42NjcsMjA0LjI2LDI1OS4zNjUsMjQwLjUsMjkyLjAxYzQuODY1LDQuNDA2LDEwLjA4Myw2LjY0NiwxNS41LDYuNjQ2ICAgICBjNS40MDYsMCwxMC42MTUtMi4yMTksMTUuNDY5LTYuNjA0YzM2LjI3MS0zMi42NzcsMTU5LjU3My0xMzcuMzg1LDIyOS44NDQtMTk2Ljg5NmM0LjM3NS0zLjY5OCw1LjA0Mi0xMC4xOTgsMS41LTE0LjcxOSAgICAgQzQ5NC42MjUsNjkuOTksNDgyLjQxNyw2NCw0NjkuMzMzLDY0SDQyLjY2N2MtMTMuMDgzLDAtMjUuMjkyLDUuOTktMzMuNDc5LDE2LjQzOEM1LjY0Niw4NC45NTgsNi4zMTMsOTEuNDU4LDEwLjY4OCw5NS4xNTZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik01MDUuODEzLDEyNy40MDZjLTMuNzgxLTEuNzYtOC4yMjktMS4xNDYtMTEuMzc1LDEuNTQyQzQxNi41MSwxOTUuMDEsMzE3LjA1MiwyNzkuNjg4LDI4NS43NiwzMDcuODg1ICAgICBjLTE3LjU2MywxNS44NTQtNDEuOTM4LDE1Ljg1NC01OS41NDItMC4wMjFjLTMzLjM1NC0zMC4wNTItMTQ1LjA0Mi0xMjUtMjA4LjY1Ni0xNzguOTE3Yy0zLjE2Ny0yLjY4OC03LjYyNS0zLjI4MS0xMS4zNzUtMS41NDIgICAgIEMyLjQxNywxMjkuMTU2LDAsMTMyLjkyNywwLDEzNy4wODN2MjY4LjI1QzAsNDI4Ljg2NSwxOS4xMzUsNDQ4LDQyLjY2Nyw0NDhoNDI2LjY2N0M0OTIuODY1LDQ0OCw1MTIsNDI4Ljg2NSw1MTIsNDA1LjMzMyAgICAgdi0yNjguMjVDNTEyLDEzMi45MjcsNTA5LjU4MywxMjkuMTQ2LDUwNS44MTMsMTI3LjQwNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" /><p style="font-family: Calibri;margin:3px;font-size: 15px;color:#858B8A"><p style="font-family: Calibri;margin:0;font-size: 17px;color:#7D7D7D">shoki61@gmail.com</p>
                     </div>
                     <div style="display: flex;align-items: center">
                         <img height="15px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTEuOTk5IDUxMS45OTkiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiB3aWR0aD0iNTEyIiBjbGFzcz0iIj48Zz48Zz48ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTI3NS45OTkgNDAxLjk5OXYtMjcxLjk5NS0xMjAuMDA0aC0yNDB2NDkxLjk5OWg4MHYtMTAwaDgwdjEwMGg4MHoiIGZpbGw9IiNlM2VhZWYiIGRhdGEtb3JpZ2luYWw9IiNFM0VBRUYiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMyOTlCRTgiIGRhdGEtb2xkX2NvbG9yPSIjZTNlYWVmIj48L3BhdGg+PHBhdGggZD0ibTExNS45OTkgNDAxLjk5OWg4MHYxMDBoLTgweiIgZmlsbD0iI2M1ZDNkZSIgZGF0YS1vcmlnaW5hbD0iI0M1RDNERSIgY2xhc3M9IiIgc3R5bGU9ImZpbGw6IzIwN0JCOSIgZGF0YS1vbGRfY29sb3I9IiNjNWQzZGUiPjwvcGF0aD48cGF0aCBkPSJtMjc1Ljk5OSA0MDEuOTk5aDIwMHYxMDBoLTIwMHoiIGZpbGw9IiNjNWQzZGUiIGRhdGEtb3JpZ2luYWw9IiNDNUQzREUiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMyMDdCQjkiIGRhdGEtb2xkX2NvbG9yPSIjYzVkM2RlIj48L3BhdGg+PHBhdGggZD0ibTI3NS45OTkgMTMwLjAwNGgyMDB2MjcxLjk5NWgtMjAweiIgZmlsbD0iI2UzZWFlZiIgZGF0YS1vcmlnaW5hbD0iI0UzRUFFRiIgY2xhc3M9IiIgc3R5bGU9ImZpbGw6IzI5OUJFOCIgZGF0YS1vbGRfY29sb3I9IiNlM2VhZWYiPjwvcGF0aD48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMTQ1Ljk5OSA0MC4wMDFoMTkuOTk3YzUuNTIzIDAgMTAgNC40NzcgMTAgMTB2MjBjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMGgtMTkuOTk3Yy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwdi0yMGMwLTUuNTIzIDQuNDc3LTEwIDEwLTEweiIgZGF0YS1vcmlnaW5hbD0iI0ZGRiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNDUuOTk5IDExMC4wMDFoMTkuOTk3YzUuNTIzIDAgMTAgNC40NzcgMTAgMTB2MjBjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMGgtMTkuOTk3Yy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwdi0yMGMwLTUuNTIzIDQuNDc3LTEwIDEwLTEweiIgZGF0YS1vcmlnaW5hbD0iI0ZGRiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNDUuOTk5IDE4MC4wMDFoMTkuOTk3YzUuNTIzIDAgMTAgNC40NzcgMTAgMTB2MjBjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMGgtMTkuOTk3Yy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwdi0yMGMwLTUuNTIzIDQuNDc3LTEwIDEwLTEweiIgZGF0YS1vcmlnaW5hbD0iI0ZGRiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNDUuOTk5IDI1MGgxOS45OTdjNS41MjMgMCAxMCA0LjQ3NyAxMCAxMHYyMGMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwaC0xOS45OTdjLTUuNTIzIDAtMTAtNC40NzctMTAtMTB2LTIwYzAtNS41MjIgNC40NzctMTAgMTAtMTB6IiBkYXRhLW9yaWdpbmFsPSIjRkZGIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTE0NS45OTkgMzIwaDE5Ljk5N2M1LjUyMyAwIDEwIDQuNDc3IDEwIDEwdjIwYzAgNS41MjMtNC40NzcgMTAtMTAgMTBoLTE5Ljk5N2MtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHYtMjBjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHoiIGRhdGEtb3JpZ2luYWw9IiNGRkYiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNzYuMDAxIDQwLjAwMWgxOS45OTdjNS41MjMgMCAxMCA0LjQ3NyAxMCAxMHYyMGMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwaC0xOS45OTdjLTUuNTIzIDAtMTAtNC40NzctMTAtMTB2LTIwYzAtNS41MjMgNC40NzctMTAgMTAtMTB6IiBkYXRhLW9yaWdpbmFsPSIjRkZGIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTc2LjAwMSAxMTAuMDAxaDE5Ljk5N2M1LjUyMyAwIDEwIDQuNDc3IDEwIDEwdjIwYzAgNS41MjMtNC40NzcgMTAtMTAgMTBoLTE5Ljk5N2MtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHYtMjBjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHoiIGRhdGEtb3JpZ2luYWw9IiNGRkYiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNzYuMDAxIDE4MC4wMDFoMTkuOTk3YzUuNTIzIDAgMTAgNC40NzcgMTAgMTB2MjBjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMGgtMTkuOTk3Yy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwdi0yMGMwLTUuNTIzIDQuNDc3LTEwIDEwLTEweiIgZGF0YS1vcmlnaW5hbD0iI0ZGRiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im03Ni4wMDEgMjUwaDE5Ljk5N2M1LjUyMyAwIDEwIDQuNDc3IDEwIDEwdjIwYzAgNS41MjMtNC40NzcgMTAtMTAgMTBoLTE5Ljk5N2MtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHYtMjBjMC01LjUyMiA0LjQ3Ny0xMCAxMC0xMHoiIGRhdGEtb3JpZ2luYWw9IiNGRkYiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNzYuMDAxIDMyMGgxOS45OTdjNS41MjMgMCAxMCA0LjQ3NyAxMCAxMHYyMGMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwaC0xOS45OTdjLTUuNTIzIDAtMTAtNC40NzctMTAtMTB2LTIwYzAtNS41MjMgNC40NzctMTAgMTAtMTB6IiBkYXRhLW9yaWdpbmFsPSIjRkZGIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTIxNi4wMDEgNDAuMDAxaDE5Ljk5N2M1LjUyMyAwIDEwIDQuNDc3IDEwIDEwdjIwYzAgNS41MjMtNC40NzcgMTAtMTAgMTBoLTE5Ljk5N2MtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHYtMjBjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHoiIGRhdGEtb3JpZ2luYWw9IiNGRkYiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjE2LjAwMSAxMTAuMDAxaDE5Ljk5N2M1LjUyMyAwIDEwIDQuNDc3IDEwIDEwdjIwYzAgNS41MjMtNC40NzcgMTAtMTAgMTBoLTE5Ljk5N2MtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHYtMjBjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHoiIGRhdGEtb3JpZ2luYWw9IiNGRkYiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjE2LjAwMSAxODAuMDAxaDE5Ljk5N2M1LjUyMyAwIDEwIDQuNDc3IDEwIDEwdjIwYzAgNS41MjMtNC40NzcgMTAtMTAgMTBoLTE5Ljk5N2MtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHYtMjBjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHoiIGRhdGEtb3JpZ2luYWw9IiNGRkYiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjE2LjAwMSAyNTBoMTkuOTk3YzUuNTIzIDAgMTAgNC40NzcgMTAgMTB2MjBjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMGgtMTkuOTk3Yy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwdi0yMGMwLTUuNTIyIDQuNDc3LTEwIDEwLTEweiIgZGF0YS1vcmlnaW5hbD0iI0ZGRiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yMTYuMDAxIDMyMGgxOS45OTdjNS41MjMgMCAxMCA0LjQ3NyAxMCAxMHYyMGMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwaC0xOS45OTdjLTUuNTIzIDAtMTAtNC40NzctMTAtMTB2LTIwYzAtNS41MjMgNC40NzctMTAgMTAtMTB6IiBkYXRhLW9yaWdpbmFsPSIjRkZGIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTQwMSAxODAuMDAxaDE5Ljk5N2M1LjUyMyAwIDEwIDQuNDc3IDEwIDEwdjIwYzAgNS41MjMtNC40NzcgMTAtMTAgMTBoLTE5Ljk5N2MtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHYtMjBjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHoiIGRhdGEtb3JpZ2luYWw9IiNGRkYiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDAxIDI1MGgxOS45OTdjNS41MjMgMCAxMCA0LjQ3NyAxMCAxMHYyMGMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwaC0xOS45OTdjLTUuNTIzIDAtMTAtNC40NzctMTAtMTB2LTIwYzAtNS41MjIgNC40NzctMTAgMTAtMTB6IiBkYXRhLW9yaWdpbmFsPSIjRkZGIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTQwMSAzMjBoMTkuOTk3YzUuNTIzIDAgMTAgNC40NzcgMTAgMTB2MjBjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMGgtMTkuOTk3Yy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwdi0yMGMwLTUuNTIzIDQuNDc3LTEwIDEwLTEweiIgZGF0YS1vcmlnaW5hbD0iI0ZGRiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMzEuMDAyIDE4MC4wMDFoMTkuOTk3YzUuNTIzIDAgMTAgNC40NzcgMTAgMTB2MjBjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMGgtMTkuOTk3Yy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwdi0yMGMwLTUuNTIzIDQuNDc3LTEwIDEwLTEweiIgZGF0YS1vcmlnaW5hbD0iI0ZGRiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMzEuMDAyIDI1MGgxOS45OTdjNS41MjMgMCAxMCA0LjQ3NyAxMCAxMHYyMGMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwaC0xOS45OTdjLTUuNTIzIDAtMTAtNC40NzctMTAtMTB2LTIwYzAtNS41MjIgNC40NzctMTAgMTAtMTB6IiBkYXRhLW9yaWdpbmFsPSIjRkZGIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTMzMS4wMDIgMzIwaDE5Ljk5N2M1LjUyMyAwIDEwIDQuNDc3IDEwIDEwdjIwYzAgNS41MjMtNC40NzcgMTAtMTAgMTBoLTE5Ljk5N2MtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHYtMjBjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHoiIGRhdGEtb3JpZ2luYWw9IiNGRkYiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjxwYXRoIGQ9Im00NzYgMTIwLjAwNGgtMTkwdi0xMTAuMDA0YzAtNS41MjItNC40NzctMTAtMTAtMTBoLTI0MGMtNS41MjMgMC0xMCA0LjQ3OC0xMCAxMHY0OTEuOTk5YzAgNS41MjIgNC40NzcgMTAgMTAgMTBoMjQwIDIwMGM1LjUyMyAwIDEwLTQuNDc4IDEwLTEwdi0zNzEuOTk1YzAtNS41MjMtNC40NzgtMTAtMTAtMTB6bS0xOTAgMjBoMTgwdjI1MS45OTVoLTE4MHptLTE2MCAzNTEuOTk1di04MGg2MHY4MHptNjkuOTk5LTEwMGgtODBjLTUuNTIzIDAtMTAgNC40NzgtMTAgMTB2OTBoLTU5Ljk5OXYtNDcxLjk5OWgyMjB2NDcxLjk5OWgtNjB2LTkwYy0uMDAxLTUuNTIyLTQuNDc4LTEwLTEwLjAwMS0xMHptOTAgMTAwdi04MGgxODB2ODB6IiBmaWxsPSIjNmQ5MWFjIiBkYXRhLW9yaWdpbmFsPSIjNkQ5MUFDIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyMDdCQjkiIGRhdGEtb2xkX2NvbG9yPSIjNmQ5MWFjIj48L3BhdGg+PC9nPjwvZz4gPC9zdmc+" /><p style="font-family: Calibri;margin:3px;font-size: 15px;color:#858B8A"><p style="font-family: Calibri;margin:0;font-size: 17px;color:#7D7D7D">Rat Yazılım</p>
                     </div>
                 </div>
             </div>
         </div>



     </div>

 </div>
            `
                ,
                fileName: 'deneme1',
                directory: 'docs'
            };
        }
        if (helper.selectedOrderCV === 4) {
            options = {
                html: `
                <div style="width: 800px;min-height: 1000px;background-color: ${helper.selectedCVColor}">


        <div style="width: 100%;min-height: 40px;background-color: #12A3D0;display: flex;justify-content: space-between;align-items: center;flex-wrap: wrap;padding:0 25px 0 25px;box-sizing: border-box">
            <div style="margin:0 5px 0 5px;display: flex;align-items: center">
                <img height="21px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" /><p style="color:#fff;font-family: Calibri;margin:0 0 0 5px;font-size: 22px">sefer61</p>
            </div>
            <div style="margin:0 5px 0 5px;display: flex;align-items: center">
                <img height="21px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTQzNyAwaC0zNjJjLTQxLjM1MTU2MiAwLTc1IDMzLjY0ODQzOC03NSA3NXYzNjJjMCA0MS4zNTE1NjIgMzMuNjQ4NDM4IDc1IDc1IDc1aDM2MmM0MS4zNTE1NjIgMCA3NS0zMy42NDg0MzggNzUtNzV2LTM2MmMwLTQxLjM1MTU2Mi0zMy42NDg0MzgtNzUtNzUtNzV6bS0yNTYgNDA2aC02MHYtMjEwaDYwem0wLTI0MGgtNjB2LTYwaDYwem0yMTAgMjQwaC02MHYtMTIwYzAtMTYuNTM5MDYyLTEzLjQ2MDkzOC0zMC0zMC0zMHMtMzAgMTMuNDYwOTM4LTMwIDMwdjEyMGgtNjB2LTIxMGg2MHYxMS4zMDg1OTRjMTUuNzE4NzUtNC44ODY3MTkgMjUuOTI5Njg4LTExLjMwODU5NCA0NS0xMS4zMDg1OTQgNDAuNjkxNDA2LjA0Mjk2OSA3NSAzNi41NDY4NzUgNzUgNzkuNjg3NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" /><p style="color:#fff;font-family: Calibri;margin:0 0 0 5px;font-size: 22px">seferkadıoğlu</p>
            </div>
            <div style="margin:0 5px 0 5px;display: flex;align-items: center">
                <img height="21px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8cGF0aCBkPSJNNDE0LjQxLDI0LjEyM0MzOTguMzMzLDguMDQyLDM3OC45NjMsMCwzNTYuMzE1LDBIODIuMjI4QzU5LjU4LDAsNDAuMjEsOC4wNDIsMjQuMTI2LDI0LjEyMyAgIEM4LjA0NSw0MC4yMDcsMC4wMDMsNTkuNTc2LDAuMDAzLDgyLjIyNXYyNzQuMDg0YzAsMjIuNjQ3LDguMDQyLDQyLjAxOCwyNC4xMjMsNTguMTAyYzE2LjA4NCwxNi4wODQsMzUuNDU0LDI0LjEyNiw1OC4xMDIsMjQuMTI2ICAgaDI3NC4wODRjMjIuNjQ4LDAsNDIuMDE4LTguMDQyLDU4LjA5NS0yNC4xMjZjMTYuMDg0LTE2LjA4NCwyNC4xMjYtMzUuNDU0LDI0LjEyNi01OC4xMDJWODIuMjI1ICAgQzQzOC41MzIsNTkuNTc2LDQzMC40OSw0MC4yMDQsNDE0LjQxLDI0LjEyM3ogTTMzNS40NzEsMTY4LjczNWMwLjE5MSwxLjcxMywwLjI4OCw0LjI3OCwwLjI4OCw3LjcxICAgYzAsMTUuOTg5LTIuMzM0LDMyLjAyNS02Ljk5NSw0OC4xMDRjLTQuNjYxLDE2LjA4Ny0xMS44LDMxLjUwNC0yMS40MTYsNDYuMjU0Yy05LjYwNiwxNC43NDktMjEuMDc0LDI3Ljc5MS0zNC4zOTYsMzkuMTE1ICAgYy0xMy4zMjUsMTEuMzItMjkuMzExLDIwLjM2NS00Ny45NjgsMjcuMTE3Yy0xOC42NDgsNi43NjItMzguNjM3LDEwLjE0My01OS45NTMsMTAuMTQzYy0zMy4xMTYsMC02My43Ni04Ljk1Mi05MS45MzEtMjYuODM2ICAgYzQuNTY4LDAuNTY4LDkuMzI5LDAuODU1LDE0LjI3NSwwLjg1NWMyNy42LDAsNTIuNDM5LTguNTY1LDc0LjUxOS0yNS43Yy0xMi45NDEtMC4xODUtMjQuNTA2LTQuMTc5LTM0LjY4OC0xMS45OTEgICBjLTEwLjE4NS03LjgwMy0xNy4yNzMtMTcuNjk5LTIxLjI3MS0yOS42OTFjNC45NDcsMC43Niw4LjY1OCwxLjEzNywxMS4xMzIsMS4xMzdjNC4xODcsMCw5LjA0Mi0wLjc2LDE0LjU2LTIuMjc5ICAgYy0xMy44OTQtMi42NjktMjUuNTk4LTkuNTYyLTM1LjExNS0yMC42OTdjLTkuNTE5LTExLjEzNi0xNC4yNzctMjMuODQtMTQuMjc3LTM4LjExNHYtMC41NzEgICBjMTAuMDg1LDQuNzU1LDE5LjYwMiw3LjIyOSwyOC41NDksNy40MjJjLTE3LjMyMS0xMS42MTMtMjUuOTgxLTI4LjI2NS0yNS45ODEtNDkuOTYzYzAtMTAuNjYsMi43NTgtMjAuNzQ3LDguMjc4LTMwLjI2NCAgIGMxNS4wMzUsMTguNDY0LDMzLjMxMSwzMy4yMTMsNTQuODE2LDQ0LjI1MmMyMS41MDcsMTEuMDM4LDQ0LjU0LDE3LjIyNyw2OS4wOTIsMTguNTU4Yy0wLjk1LTMuNjE2LTEuNDI3LTguMTg2LTEuNDI3LTEzLjcwNCAgIGMwLTE2LjU2Miw1Ljg1My0zMC42OTIsMTcuNTYtNDIuMzk5YzExLjcwMy0xMS43MDYsMjUuODM3LTE3LjU2MSw0Mi4zOTQtMTcuNTYxYzE3LjUxNSwwLDMyLjA3OSw2LjI4Myw0My42ODgsMTguODQ2ICAgYzEzLjEzNC0yLjQ3NCwyNS44OTItNy4zMywzOC4yNi0xNC41NmMtNC43NTcsMTQuNjUyLTEzLjYxMywyNS43ODgtMjYuNTUsMzMuNDAyYzEyLjM2OC0xLjcxNiwyMy44OC00Ljk1LDM0LjUzNy05LjcwOCAgIEMzNTcuNDU4LDE0OS43OTMsMzQ3LjQ2MiwxNjAuMTY2LDMzNS40NzEsMTY4LjczNXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" /><p style="color:#fff;font-family: Calibri;margin:0 0 0 5px;font-size: 22px">@sefer61</p>
            </div>
            <div style="margin:0 5px 0 5px;display: flex;align-items: center">
                <img height="21px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDQ3LjYzMiA0NDciIHdpZHRoPSI1MTIiPjxnPjxwYXRoIGQ9Im0yMzEuODE2NDA2IDQ0Ny4wNTA3ODFjMzQuMjMwNDY5LTQuODYzMjgxIDY0LjIzODI4Mi00MC41ODk4NDMgODMuMTIxMDk0LTkzLjM1MTU2Mi0yNy4yOTY4NzUtNi4xMTMyODEtNTUuMTUyMzQ0LTkuMzk0NTMxLTgzLjEyMTA5NC05Ljc4NTE1N3ptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTI4Ni41MDM5MDYgNDM4LjY2MDE1NmMyLjAyMzQzOC0uNTg1OTM3IDQuMDM5MDYzLTEuMTc1NzgxIDYuMDM5MDYzLTEuODI0MjE4IDEuNjg3NS0uNTQyOTY5IDMuMzUxNTYyLTEuMTI4OTA3IDUuMDE1NjI1LTEuNzEwOTM4IDEuOTY4NzUtLjY3OTY4OCAzLjkyOTY4Ny0xLjM3ODkwNiA1Ljg4MjgxMi0yLjEyMTA5NCAxLjY2NDA2My0uNjMyODEyIDMuMzEyNS0xLjMwNDY4NyA0Ljk2NDg0NC0xLjk3NjU2MiAxLjkwNjI1LS44MDA3ODIgMy44MDg1OTQtMS41OTc2NTYgNS42OTE0MDYtMi4zOTg0MzggMS42NDQ1MzItLjcyMjY1NiAzLjI3NzM0NC0xLjQ4MDQ2OCA0LjkxMDE1Ni0yLjI0MjE4NyAxLjg0NzY1Ny0uODcxMDk0IDMuNjg3NS0xLjc1NzgxMyA1LjUxMTcxOS0yLjY3OTY4OCAxLjYwMTU2My0uODE2NDA2IDMuMTk5MjE5LTEuNjQ4NDM3IDQuODAwNzgxLTIuNTAzOTA2IDEuNzkyOTY5LS45NjA5MzcgMy41NzQyMTktMS45NDE0MDYgNS4zNDM3NS0yLjk0OTIxOSAxLjYwMTU2My0uOTA2MjUgMy4xNDQ1MzItMS44MTY0MDYgNC43MDMxMjYtMi43NTM5MDYgMS43MzQzNzQtMS4wNjY0MDYgMy40NjA5MzctMi4xMzI4MTIgNS4xNzU3ODEtMy4xOTkyMTkgMS41MzUxNTYtLjk3NjU2MiAzLjA2NjQwNi0xLjk2ODc1IDQuNTc4MTI1LTIuOTkyMTg3IDEuNjg3NS0xLjEzNjcxOSAzLjM1MTU2Mi0yLjMyMDMxMyA1LjAwNzgxMi0zLjUwMzkwNiAxLjQ4ODI4Mi0xLjA2NjQwNyAyLjk2ODc1LTIuMTI4OTA3IDQuNDIxODc1LTMuMTk5MjE5IDEuNjAxNTYzLTEuMjM0Mzc1IDMuMjQyMTg4LTIuNTExNzE5IDQuODQ3NjU3LTMuNzkyOTY5IDEuNDI1NzgxLTEuMTM2NzE5IDIuODQ3NjU2LTIuMjY1NjI1IDQuMjUtMy40MzM1OTQgMS41OTc2NTYtMS4zMjgxMjUgMy4xMjg5MDYtMi43MDMxMjUgNC42Nzk2ODctNC4wNzgxMjUgMS4zNTkzNzUtMS4yMDcwMzEgMi43MjY1NjMtMi40MDIzNDMgNC4wNTQ2ODctMy42NDA2MjUgMS41MjczNDQtMS40MjU3ODEgMy4wMTU2MjYtMi45MDIzNDQgNC41MDM5MDctNC4zNjcxODcgMS4yODkwNjItMS4yNzM0MzggMi41OTM3NS0yLjUyNzM0NCAzLjg1NTQ2OS0zLjgzMjAzMS4yMzQzNzQtLjI0MjE4OC40NTcwMzEtLjUwMzkwNy42OTkyMTgtLjc1MzkwNy0xNy40NDkyMTgtOS4wMTE3MTktMzUuODI4MTI1LTE2LjA4NTkzNy01NC44MTY0MDYtMjEuMDkzNzUtOS44NzUgMzEuNDkyMTg4LTI3LjQ0OTIxOSA2MC4wMzEyNS01MS4xMjg5MDYgODMuMDIzNDM4LjY0ODQzNy0uMTY3OTY5IDEuMjk2ODc1LS4zMDQ2ODggMS45NDUzMTItLjQ3MjY1NyAxLjcxMDkzOC0uNDgwNDY4IDMuMzkwNjI1LTEuMDA3ODEyIDUuMDYyNS0xLjUwMzkwNnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQ0Ny42MzI4MTIgMjMxLjY4MzU5NGgtOTUuOTIxODc0Yy0uMzYzMjgyIDM3LjQ1MzEyNS01Ljc5Njg3NiA3NC42ODM1OTQtMTYuMTUyMzQ0IDExMC42Nzk2ODcgMjEuMTE3MTg3IDUuNjQwNjI1IDQxLjQ5NjA5NCAxMy43NSA2MC43MTQ4NDQgMjQuMTYwMTU3IDMxLjU1NDY4Ny0zOC4wMzEyNSA0OS42MTcxODctODUuNDQ5MjE5IDUxLjM1OTM3NC0xMzQuODM5ODQ0em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjMxLjgxNjQwNiAyMTUuNjgzNTk0aDEwMy44OTQ1MzJjLS40MDYyNS0zNi4xMjg5MDYtNS43MDcwMzItNzIuMDM1MTU2LTE1Ljc1LTEwNi43NDIxODgtMjguOTI5Njg4IDYuNTk3NjU2LTU4LjQ3NjU2MyAxMC4xMjEwOTQtODguMTQ0NTMyIDEwLjUxMTcxOXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTIzMS44MTY0MDYuMzE2NDA2djEwMy4xMzY3MTljMjcuOTY4NzUtLjM5NDUzMSA1NS44MjQyMTktMy42NzE4NzUgODMuMTIxMDk0LTkuNzg1MTU2LTE4Ljg4MjgxMi01Mi43NjE3MTktNDguODkwNjI1LTg4LjQ4ODI4MS04My4xMjEwOTQtOTMuMzUxNTYzem0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjMxLjgxNjQwNiAzMjcuOTE0MDYyYzI5LjY2Nzk2OS4zOTQ1MzIgNTkuMjE0ODQ0IDMuOTE3OTY5IDg4LjE0NDUzMiAxMC41MTU2MjYgMTAuMDQyOTY4LTM0LjcwNzAzMiAxNS4zNDM3NS03MC42MTcxODggMTUuNzUtMTA2Ljc0NjA5NGgtMTAzLjg5NDUzMnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTM5Ni4yNzM0MzggODAuODQzNzVjLTE5LjIxODc1IDEwLjQxMDE1Ni0zOS41OTc2NTcgMTguNTE5NTMxLTYwLjcxNDg0NCAyNC4xNjAxNTYgMTAuMzU1NDY4IDM1Ljk5NjA5NCAxNS43ODkwNjIgNzMuMjI2NTYzIDE2LjE1MjM0NCAxMTAuNjc5Njg4aDk1LjkyMTg3NGMtMS43NDYwOTMtNDkuMzg2NzE5LTE5LjgwODU5My05Ni44MDQ2ODgtNTEuMzU5Mzc0LTEzNC44Mzk4NDR6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0zODUuNDY0ODQ0IDY4LjcwNzAzMWMtLjIzNDM3NS0uMjM4MjgxLS40NTcwMzItLjQ5NjA5My0uNjg3NS0uNzQyMTg3LTEuMjY1NjI1LTEuMzA0Njg4LTIuNTc4MTI1LTIuNTYyNS0zLjg2NzE4OC0zLjgzMjAzMi0xLjQ4NDM3NS0xLjQ2NDg0My0yLjk2NDg0NC0yLjk0NTMxMi00LjQ5NjA5NC00LjM2NzE4Ny0xLjMyNDIxOC0xLjIzNDM3NS0yLjY5NTMxMi0yLjQwMjM0NC00LjA1NDY4Ny0zLjYzMjgxMy0xLjU1MDc4MS0xLjM3NS0zLjEwMTU2My0yLjc2MTcxOC00LjY5NTMxMy00LjA4OTg0My0xLjM4MjgxMi0xLjE2Nzk2OS0yLjgwMDc4MS0yLjI4NTE1Ny00LjIwNzAzMS0zLjQwNjI1LTEuNjAxNTYyLTEuMjk2ODc1LTMuMjQyMTg3LTIuNTg1OTM4LTQuODkwNjI1LTMuODI0MjE5LTEuNDQ1MzEyLTEuMDg5ODQ0LTIuOTEwMTU2LTIuMTQ0NTMxLTQuMzgyODEyLTMuMTk5MjE5LTEuNjcxODc1LTEuMjAzMTI1LTMuMzUxNTYzLTIuNDAyMzQzLTUuMDU0Njg4LTMuNTQ2ODc1LTEuNDk2MDk0LTEuMDA3ODEyLTMuMDE1NjI1LTEuOTkyMTg3LTQuNTM1MTU2LTIuOTU3MDMxLTEuNzMwNDY5LTEuMTEzMjgxLTMuNDU3MDMxLTIuMjAzMTI1LTUuMjE4NzUtMy4yNTc4MTMtMS41NDI5NjktLjkyNTc4MS0zLjEwMTU2Mi0xLjgzOTg0My00LjY2NDA2Mi0yLjcyNjU2Mi0xLjc4OTA2My0xLjAyMzQzOC0zLjU4MjAzMi0yLjAxNTYyNS01LjM5MDYyNi0yLjk4NDM3NS0xLjYwMTU2Mi0uODAwNzgxLTMuMTk5MjE4LTEuNjcxODc1LTQuODAwNzgxLTIuNDcyNjU2LTEuODM5ODQzLS45Mjk2ODgtMy42OTUzMTItMS44MjQyMTktNS41OTc2NTYtMi43MDMxMjUtMS42MDE1NjMtLjc2MTcxOS0zLjIyNjU2My0xLjUwMzkwNi00Ljg3NS0yLjIyNjU2My0xLjg5NDUzMS0uODM5ODQzLTMuODA4NTk0LTEuNTk3NjU2LTUuNzE4NzUtMi4zOTg0MzctMS42NDg0MzctLjY3MTg3NS0zLjI4OTA2My0xLjMzNTkzOC00Ljk1MzEyNS0xLjk2ODc1LTEuOTQxNDA2LS43NDIxODgtMy45MTAxNTYtMS40Mzc1LTUuODc4OTA2LTIuMTE3MTg4LTEuNjY0MDYzLS41ODU5MzctMy4zMjgxMjUtMS4xNjc5NjgtNS4wMTU2MjUtMS43MTQ4NDQtMi0uNjQ4NDM3LTQtMS4yMzgyODEtNi4wNTQ2ODgtMS44MzIwMzEtMS42NjQwNjItLjQ4ODI4MS0zLjMzNTkzNy0uOTg0Mzc1LTUuMDE5NTMxLTEuNDI5Njg3LS42NDQ1MzEtLjE3NTc4Mi0xLjMwMDc4MS0uMzEyNS0xLjk0OTIxOS0uNDgwNDY5IDIzLjY3OTY4OCAyMi45OTIxODcgNDEuMjUgNTEuNTI3MzQ0IDUxLjEyODkwNyA4My4wMjM0MzcgMTkuMDA3ODEyLTUuMDA3ODEyIDM3LjQxNDA2Mi0xMi4wODU5MzcgNTQuODc4OTA2LTIxLjExMzI4MXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTAgMjE1LjY4MzU5NGg5NS45MjE4NzVjLjM2MzI4MS0zNy40NTMxMjUgNS43OTY4NzUtNzQuNjgzNTk0IDE2LjE0ODQzNy0xMTAuNjc5Njg4LTIxLjExMzI4MS01LjYzNjcxOC00MS40OTIxODctMTMuNzQ2MDk0LTYwLjcxMDkzNy0yNC4xNjAxNTYtMzEuNTU0Njg3IDM4LjAzMTI1LTQ5LjYxNzE4NyA4NS40NTMxMjUtNTEuMzU5Mzc1IDEzNC44Mzk4NDR6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0yMTUuODE2NDA2IDQ0Ny4wNTA3ODF2LTEwMy4xMzY3MTljLTI3Ljk2ODc1LjM5NDUzMi01NS44MjQyMTggMy42NzE4NzYtODMuMTIxMDk0IDkuNzg1MTU3IDE4Ljg3ODkwNyA1Mi43NjE3MTkgNDguODkwNjI2IDg4LjQ4ODI4MSA4My4xMjEwOTQgOTMuMzUxNTYyem0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjE1LjgxNjQwNiAyMzEuNjgzNTk0aC0xMDMuODk0NTMxYy40MDYyNSAzNi4xMjg5MDYgNS43MDMxMjUgNzIuMDM5MDYyIDE1Ljc1IDEwNi43NDYwOTQgMjguOTI5Njg3LTYuNjAxNTYzIDU4LjQ3MjY1Ni0xMC4xMjUgODguMTQ0NTMxLTEwLjUxNTYyNnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTIxNS44MTY0MDYuMzE2NDA2Yy0zNC4yMzA0NjggNC44NjMyODItNjQuMjQyMTg3IDQwLjU4OTg0NC04My4xMjEwOTQgOTMuMzUxNTYzIDI3LjI5Njg3NiA2LjExNzE4NyA1NS4xNTIzNDQgOS4zOTQ1MzEgODMuMTIxMDk0IDkuNzg1MTU2em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtMjE1LjgxNjQwNiAxMTkuNDUzMTI1Yy0yOS42Njc5NjgtLjM5MDYyNS01OS4yMTQ4NDQtMy45MTQwNjMtODguMTQ0NTMxLTEwLjUxMTcxOS0xMC4wNDY4NzUgMzQuNzA3MDMyLTE1LjM0Mzc1IDcwLjYxMzI4Mi0xNS43NSAxMDYuNzQyMTg4aDEwMy44OTQ1MzF6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0xNjguMTEzMjgxIDYuNzg5MDYyYy0uNjQ4NDM3LjE2Nzk2OS0xLjI5Njg3NS4zMDQ2ODgtMS45NDUzMTIuNDcyNjU3LTEuNjk1MzEzLjQ1MzEyNS0zLjM2NzE4OC45NTcwMzEtNS4wNTQ2ODggMS40NDUzMTItMi4wMDc4MTIuNTg1OTM4LTQgMS4xNzU3ODEtNi4wMTU2MjUgMS44MTY0MDctMS42OTkyMTguNTUwNzgxLTMuMzcxMDk0IDEuMTM2NzE4LTUuMDQyOTY4IDEuNzE4NzUtMS45NTcwMzIuNjkxNDA2LTMuOTE3OTY5IDEuMzc4OTA2LTUuODU1NDY5IDIuMTEzMjgxLTEuNjcxODc1LjY0MDYyNS0zLjMyMDMxMyAxLjMwNDY4Ny00Ljk3NjU2MyAxLjk4NDM3NS0xLjkwMjM0NC44MDA3ODEtMy44MDg1OTQgMS42MDE1NjItNS42ODc1IDIuMzk4NDM3LTEuNjQ4NDM3LjcyMjY1Ny0zLjI3NzM0NCAxLjQ4MDQ2OS00LjkxMDE1NiAyLjI0MjE4OC0xLjg0NzY1Ni44NzEwOTMtMy42ODc1IDEuNzU3ODEyLTUuNTExNzE5IDIuNjc5Njg3LTEuNjAxNTYyLjgxNjQwNi0zLjIwMzEyNSAxLjY1MjM0NC00LjgwMDc4MSAyLjUwMzkwNi0xLjc5Mjk2OS45NjA5MzgtMy41NzAzMTIgMS45NDUzMTMtNS4zMzU5MzggMi45NTMxMjYtMS42MDE1NjIuODk0NTMxLTMuMTc1NzgxIDEuODEyNS00LjcxODc1IDIuNzUtMS43MzgyODEgMS4wNDY4NzQtMy40NTcwMzEgMi4xMjg5MDYtNS4xNjc5NjggMy4xOTkyMTgtMS41MzkwNjMuOTg0Mzc1LTMuMDY2NDA2IDEuOTc2NTYzLTQuNTc4MTI1IDMtMS42ODc1IDEuMTM2NzE5LTMuMzUxNTYzIDIuMzIwMzEzLTUuMDA3ODEzIDMuNTAzOTA2LTEuNDg4MjgxIDEuMDY2NDA3LTIuOTY4NzUgMi4xMjg5MDctNC40MjU3ODEgMy4yMDMxMjYtMS42MzY3MTkgMS4yMzA0NjgtMy4xOTkyMTkgMi41MTE3MTgtNC44NDc2NTYgMy43ODkwNjItMS40MjE4NzUgMS4xMzY3MTktMi44NTU0NjkgMi4yNjU2MjUtNC4yNDYwOTQgMy40NDE0MDYtMS42MDE1NjMgMS4zMjAzMTMtMy4xMjEwOTQgMi42ODc1LTQuNjY0MDYzIDQuMDU0Njg4LTEuMzY3MTg3IDEuMjE4NzUtMi43NDYwOTMgMi40MDIzNDQtNC4wODIwMzEgMy42NjQwNjItMS41MTk1MzEgMS40MTc5NjktMyAyLjg5MDYyNS00LjQ4NDM3NSA0LjM1MTU2My0xLjI4OTA2MiAxLjI3MzQzNy0yLjYwMTU2MiAyLjUzMTI1LTMuODY3MTg3IDMuODM5ODQzLS4yMzA0NjkuMjQyMTg4LS40NTMxMjUuNTA3ODEzLS42OTUzMTMuNzUzOTA3IDE3LjQ0NTMxMyA5LjAxNTYyNSAzNS44MjgxMjUgMTYuMDg5ODQzIDU0LjgxNjQwNiAyMS4wOTc2NTYgOS44NzUtMzEuNDc2NTYzIDI3LjQzNzUtNTkuOTk2MDk0IDUxLjEwNTQ2OS04Mi45NzY1NjN6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im02Ni43MTg3NSAzODMuMjM0Mzc1YzEuNDg4MjgxIDEuNDY0ODQ0IDIuOTY4NzUgMi45NDUzMTMgNC40OTYwOTQgNC4zNzEwOTQgMS4zMjgxMjUgMS4yMzA0NjkgMi42OTUzMTIgMi4zOTg0MzcgNC4wNTg1OTQgMy42Mjg5MDYgMS41NTA3ODEgMS4zNzg5MDYgMy4xMDE1NjIgMi43NjE3MTkgNC42OTUzMTIgNC4wODk4NDQgMS4zODI4MTIgMS4xNjAxNTYgMi43OTI5NjkgMi4yODEyNSA0LjIwNzAzMSAzLjQwNjI1IDEuNjAxNTYzIDEuMjk2ODc1IDMuMTk5MjE5IDIuNTg1OTM3IDQuODk0NTMxIDMuODMyMDMxIDEuNDQxNDA3IDEuMDgyMDMxIDIuOTA2MjUgMi4xMjg5MDYgNC4zNzEwOTQgMy4yMDMxMjUgMS42NzE4NzUgMS4xOTkyMTkgMy4zNTkzNzUgMi4zOTg0MzcgNS4wNjI1IDMuNTUwNzgxIDEuNDk2MDk0IDEuMDA3ODEzIDMuMDE1NjI1IDEuOTkyMTg4IDQuNTM1MTU2IDIuOTYwOTM4IDEuNzMwNDY5IDEuMTA5Mzc1IDMuNDU3MDMyIDIuMTk5MjE4IDUuMjE4NzUgMy4yNTM5MDYgMS41NDI5NjkuOTI5Njg4IDMuMTAxNTYzIDEuODM5ODQ0IDQuNjY0MDYzIDIuNzMwNDY5IDEuNzg5MDYzIDEuMDIzNDM3IDMuNTgyMDMxIDIuMDE1NjI1IDUuMzkwNjI1IDIuOTgwNDY5IDEuNTk3NjU2LjgwMDc4MSAzLjE5OTIxOSAxLjY3MTg3NCA0LjgwMDc4MSAyLjQ3MjY1NiAxLjgzOTg0NC45Mjk2ODcgMy42OTUzMTMgMS44MjQyMTggNS41OTc2NTcgMi43MDcwMzEgMS42MDE1NjIuNzUzOTA2IDMuMjI2NTYyIDEuNDk2MDk0IDQuODc1IDIuMjIyNjU2IDEuODk0NTMxLjgzOTg0NCAzLjgwNDY4NyAxLjU5NzY1NyA1LjcxODc1IDIuMzk4NDM4IDEuNjQ4NDM3LjY3MTg3NSAzLjI4OTA2MiAxLjMzNTkzNyA0Ljk1MzEyNCAxLjk2ODc1IDEuOTQxNDA3Ljc0NjA5MyAzLjkxMDE1NyAxLjQ0MTQwNiA1Ljg3ODkwNyAyLjEyMTA5MyAxLjY2NDA2Mi41ODIwMzIgMy4zMjgxMjUgMS4xNjc5NjkgNS4wMTU2MjUgMS43MTA5MzggMiAuNjQ4NDM4IDQgMS4yNDIxODggNi4wNTQ2ODcgMS44MzIwMzEgMS42NjQwNjMuNDg4MjgxIDMuMzM1OTM4Ljk4NDM3NSA1LjAxNTYyNSAxLjQzMzU5NC42NDg0MzguMTc1NzgxIDEuMzA0Njg4LjMxMjUgMS45NTMxMjUuNDgwNDY5LTIzLjY3OTY4Ny0yMi45OTYwOTQtNDEuMjUtNTEuNTMxMjUtNTEuMTI4OTA2LTgzLjAyNzM0NC0xOC45ODgyODEgNS4wMTE3MTktMzcuMzcxMDk0IDEyLjA4NTkzOC01NC44MTY0MDYgMjEuMTA1NDY5LjIzNDM3NS4yMzgyODEuNDU3MDMxLjQ5NjA5My42OTE0MDYuNzQyMTg3IDEuMTk5MjE5IDEuMjk2ODc1IDIuNDkyMTg3IDIuNTU0Njg4IDMuNzk2ODc1IDMuODI0MjE5em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtNTEuMzU5Mzc1IDM2Ni41MjM0MzhjMTkuMjE4NzUtMTAuNDEwMTU3IDM5LjU5NzY1Ni0xOC41MTk1MzIgNjAuNzEwOTM3LTI0LjE2MDE1Ny0xMC4zNTE1NjItMzUuOTk2MDkzLTE1Ljc4NTE1Ni03My4yMjY1NjItMTYuMTQ4NDM3LTExMC42Nzk2ODdoLTk1LjkyMTg3NWMxLjc0NjA5NCA0OS4zODY3MTggMTkuODA0Njg4IDk2LjgwNDY4NyA1MS4zNTkzNzUgMTM0LjgzOTg0NHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" /><p style="color:#fff;font-family: Calibri;margin:0 0 0 5px;font-size: 22px">sefer61.com</p>
            </div>


        </div>

        <div style="width: 100%;min-height: 200px;display: flex">

           <div style="width: 65%;min-height: 200px;">
               <div style="width: 60%;margin:40px 10px 0 50px">
                   <div style="display: flex;align-items: center"><img height="19px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBjLTc0LjQzOSwwLTEzNSw2MC41NjEtMTM1LDEzNXM2MC41NjEsMTM1LDEzNSwxMzVzMTM1LTYwLjU2MSwxMzUtMTM1UzMzMC40MzksMCwyNTYsMHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQyMy45NjYsMzU4LjE5NUMzODcuMDA2LDMyMC42NjcsMzM4LjAwOSwzMDAsMjg2LDMwMGgtNjBjLTUyLjAwOCwwLTEwMS4wMDYsMjAuNjY3LTEzNy45NjYsNTguMTk1ICAgIEM1MS4yNTUsMzk1LjUzOSwzMSw0NDQuODMzLDMxLDQ5N2MwLDguMjg0LDYuNzE2LDE1LDE1LDE1aDQyMGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1ICAgIEM0ODEsNDQ0LjgzMyw0NjAuNzQ1LDM5NS41MzksNDIzLjk2NiwzNTguMTk1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" /><p style="font-family: Calibri;font-size: 19px;margin:2px 5px;color:#737373">${this.state.userName}</p></div>
                   <div style="display: flex;align-items: center"><img height="19px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzg0IDM4NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0IDM4NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNTMuMTg4LDI1Mi4wNTJjLTIzLjUxLDAtNDYuNTk0LTMuNjc3LTY4LjQ2OS0xMC45MDZjLTEwLjcxOS0zLjY1Ni0yMy44OTYtMC4zMDItMzAuNDM4LDYuNDE3bC00My4xNzcsMzIuNTk0ICAgIGMtNTAuMDczLTI2LjcyOS04MC45MTctNTcuNTYzLTEwNy4yODEtMTA3LjI2bDMxLjYzNS00Mi4wNTJjOC4yMTktOC4yMDgsMTEuMTY3LTIwLjE5OCw3LjYzNS0zMS40NDggICAgYy03LjI2LTIxLjk5LTEwLjk0OC00NS4wNjMtMTAuOTQ4LTY4LjU4M0MxMzIuMTQ2LDEzLjgyMywxMTguMzIzLDAsMTAxLjMzMywwSDMwLjgxM0MxMy44MjMsMCwwLDEzLjgyMywwLDMwLjgxMyAgICBDMCwyMjUuNTYzLDE1OC40MzgsMzg0LDM1My4xODgsMzg0YzE2Ljk5LDAsMzAuODEzLTEzLjgyMywzMC44MTMtMzAuODEzdi03MC4zMjNDMzg0LDI2NS44NzUsMzcwLjE3NywyNTIuMDUyLDM1My4xODgsMjUyLjA1MnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" /><p style="font-family: Calibri;font-size: 19px;margin:2px 5px;color:#737373">${this.state.userNumber}</p></div>
                   <div style="display: flex;align-items: center"><img height="19px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTEwLjY4OCw5NS4xNTZDODAuOTU4LDE1NC42NjcsMjA0LjI2LDI1OS4zNjUsMjQwLjUsMjkyLjAxYzQuODY1LDQuNDA2LDEwLjA4Myw2LjY0NiwxNS41LDYuNjQ2ICAgICBjNS40MDYsMCwxMC42MTUtMi4yMTksMTUuNDY5LTYuNjA0YzM2LjI3MS0zMi42NzcsMTU5LjU3My0xMzcuMzg1LDIyOS44NDQtMTk2Ljg5NmM0LjM3NS0zLjY5OCw1LjA0Mi0xMC4xOTgsMS41LTE0LjcxOSAgICAgQzQ5NC42MjUsNjkuOTksNDgyLjQxNyw2NCw0NjkuMzMzLDY0SDQyLjY2N2MtMTMuMDgzLDAtMjUuMjkyLDUuOTktMzMuNDc5LDE2LjQzOEM1LjY0Niw4NC45NTgsNi4zMTMsOTEuNDU4LDEwLjY4OCw5NS4xNTZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik01MDUuODEzLDEyNy40MDZjLTMuNzgxLTEuNzYtOC4yMjktMS4xNDYtMTEuMzc1LDEuNTQyQzQxNi41MSwxOTUuMDEsMzE3LjA1MiwyNzkuNjg4LDI4NS43NiwzMDcuODg1ICAgICBjLTE3LjU2MywxNS44NTQtNDEuOTM4LDE1Ljg1NC01OS41NDItMC4wMjFjLTMzLjM1NC0zMC4wNTItMTQ1LjA0Mi0xMjUtMjA4LjY1Ni0xNzguOTE3Yy0zLjE2Ny0yLjY4OC03LjYyNS0zLjI4MS0xMS4zNzUtMS41NDIgICAgIEMyLjQxNywxMjkuMTU2LDAsMTMyLjkyNywwLDEzNy4wODN2MjY4LjI1QzAsNDI4Ljg2NSwxOS4xMzUsNDQ4LDQyLjY2Nyw0NDhoNDI2LjY2N0M0OTIuODY1LDQ0OCw1MTIsNDI4Ljg2NSw1MTIsNDA1LjMzMyAgICAgdi0yNjguMjVDNTEyLDEzMi45MjcsNTA5LjU4MywxMjkuMTQ2LDUwNS44MTMsMTI3LjQwNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" /><p style="font-family: Calibri;font-size: 19px;margin:2px 5px;color:#737373">${this.state.userEmail}</p></div>
                   <div style="display: flex;align-items: center"><img height="19px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBDMTUzLjc1NSwwLDcwLjU3Myw4My4xODIsNzAuNTczLDE4NS40MjZjMCwxMjYuODg4LDE2NS45MzksMzEzLjE2NywxNzMuMDA0LDMyMS4wMzUgICAgYzYuNjM2LDcuMzkxLDE4LjIyMiw3LjM3OCwyNC44NDYsMGM3LjA2NS03Ljg2OCwxNzMuMDA0LTE5NC4xNDcsMTczLjAwNC0zMjEuMDM1QzQ0MS40MjUsODMuMTgyLDM1OC4yNDQsMCwyNTYsMHogTTI1NiwyNzguNzE5ICAgIGMtNTEuNDQyLDAtOTMuMjkyLTQxLjg1MS05My4yOTItOTMuMjkzUzIwNC41NTksOTIuMTM0LDI1Niw5Mi4xMzRzOTMuMjkxLDQxLjg1MSw5My4yOTEsOTMuMjkzUzMwNy40NDEsMjc4LjcxOSwyNTYsMjc4LjcxOXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" /><p style="font-family: Calibri;font-size: 19px;margin:2px 5px;color:#737373">${this.state.userCity}</p></div>
               </div>
           </div>

           <div style="width: 35%;min-height: 200px">
               <div style="width: 180px;height: 190px;background-color: #12A3D0;border-radius: 0 0 100px 100px;display: flex;align-items: flex-end">
                   <div style="width: 180px;height: 180px;border-radius: 100px;background: url(${this.state.photoSource.uri}) no-repeat center;background-size: cover"></div>
               </div>
           </div>
        </div>

        <p style="text-align: center;padding-bottom: 7px;color:#12A3D0;font-family: Calibri;font-size: 35px;margin:0;border-bottom: 3px solid #12A3D0">${this.state.userJob}</p>



        <div style="width: 100%;display: flex">
            <div style="width: 50%" align="center">

                <div style="margin-bottom: 25px;padding:0 20px 0 20px">
                    <div style="position: relative;margin:15px 0 5px 0;padding-top: 32px">
                        <img height="40px" style="position: absolute;top:0;left:157px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTUwMS45OTEgMTI4LjM1NC0yNDEtODUuMDMxYy0zLjIyOS0xLjE0LTYuNzUyLTEuMTQtOS45ODEgMGwtMjQxIDg1LjAzMWMtNS45OTIgMi4xMTQtMTAuMDAyIDcuNzc0LTEwLjAxIDE0LjEyOHMzLjk4OSAxMi4wMjMgOS45NzYgMTQuMTUxbDI0MSA4NS42NzdjMS42MjUuNTc4IDMuMzI1Ljg2NyA1LjAyNC44NjcgMS43IDAgMy4zOTktLjI4OSA1LjAyNC0uODY3bDI0MS04NS42NzdjNS45ODctMi4xMjggOS45ODMtNy43OTcgOS45NzYtMTQuMTUxLS4wMDgtNi4zNTQtNC4wMTgtMTIuMDE0LTEwLjAwOS0xNC4xMjh6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQ3NS45NzMgMzI4LjU3NHYtMTMwLjg0bC0zMCAxMC42NjV2MTIwLjE3NWMtOS4wMzYgNS4yMDEtMTUuMTI1IDE0Ljk0Ni0xNS4xMjUgMjYuMTIxIDAgMTEuMTc0IDYuMDg5IDIwLjkyIDE1LjEyNSAyNi4xMjF2NzMuNzE2YzAgOC4yODQgNi43MTYgMTUgMTUgMTVzMTUtNi43MTYgMTUtMTV2LTczLjcxNWM5LjAzNi01LjIgMTUuMTI1LTE0Ljk0NyAxNS4xMjUtMjYuMTIxIDAtMTEuMTc1LTYuMDg4LTIwLjkyMS0xNS4xMjUtMjYuMTIyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0yNTYgMjczLjE3N2MtNS4xNDkgMC0xMC4yMi0uODc1LTE1LjA3My0yLjZsLTEzNS40ODMtNDguMTY1djY2LjAwOGMwIDE2LjE0OSAxNi44NDcgMjkuODA2IDUwLjA3MyA0MC41OSAyOC45NjEgOS40IDY0LjY0NyAxNC41NzcgMTAwLjQ4MyAxNC41NzdzNzEuNTIxLTUuMTc3IDEwMC40ODMtMTQuNTc3YzMzLjIyNi0xMC43ODQgNTAuMDczLTI0LjQ0MSA1MC4wNzMtNDAuNTl2LTY2LjAwOGwtMTM1LjQ4MiA0OC4xNjVjLTQuODU0IDEuNzI1LTkuOTI1IDIuNi0xNS4wNzQgMi42eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" />
                        <p style="font-family: Calibri;font-size: 25px;color:#12A3D0;margin:0">Eğitim</p>
                    </div>
                    <p style="font-family: Calibri;font-size: 19px;margin: 2px;color:#505050">Gaziantep Üniversitesi</p>
                    <p style="font-family: Calibri;font-size: 17px;margin: 2px;color:#646464">Fen Edebiyat Fakültesi/Biyoloji Bölümü</p>
                    <p style="font-family: Calibri;font-size: 17px;margin: 2px;color:#646464">09.2013-05.2020</p>

                </div>

                <div style="margin-bottom: 25px;padding:0 20px 0 20px">
                    <div style="position: relative;margin:15px 0 5px 0;padding-top: 35px">
                        <img height="40px" style="position: absolute;top:0;left:157px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDY1Ljk4NyA0NjUuOTg3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjUuOTg3IDQ2NS45ODc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzcyLjczNSwyMzYuNTQ3Yy0yLjY1MS0zLjUzNS03LjY2NS00LjI1MS0xMS4yLTEuNmMtMS42OTgsMS4yNzQtMi44MjEsMy4xNy0zLjEyLDUuMjcybC00LjQ0LDMxLjEyICAgIGMtMC4xMDcsMC40LTAuMjQ3LDAuNzktMC40MTYsMS4xNjhjOC4xNTktMTAuODM0LDE0Ljc0NC0yMi43NjksMTkuNTYtMzUuNDQ4TDM3Mi43MzUsMjM2LjU0N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTM0Ni4wNDcsMjc4LjIwM2MtMC4zNzcsMC0wLjc1NC0wLjAyNC0xLjEyOC0wLjA3MmwtNDcuNTItNi43OTJjLTQuMzc0LTAuNjI3LTcuNDExLTQuNjgtNi43ODQtOS4wNTQgICAgYzAtMC4wMDEsMC0wLjAwMSwwLTAuMDAybDQuNDQtMzEuMTJjMC42MTktNC4zNzUtMi40MjUtOC40MjMtNi44LTkuMDQyYy0yLjA5My0wLjI5Ni00LjIxOSwwLjI0OC01LjkxMiwxLjUxNGwtMjUuMTUyLDE4Ljg1NiAgICBjLTMuNTM1LDIuNjUxLTguNTQ5LDEuOTM1LTExLjItMS42djBsLTI4LjgtMzguNGMtMi42NTEtMy41MzUtMS45MzUtOC41NDksMS42LTExLjJsMjUuMTQ0LTE4Ljg1NiAgICBjMy41MzUtMi42NTEsNC4yNTEtNy42NjUsMS42LTExLjJjLTEuMjc0LTEuNjk4LTMuMTctMi44MjEtNS4yNzItMy4xMmwtMzEuMTItNC40NDhjLTQuMzc0LTAuNjIyLTcuNDE2LTQuNjczLTYuNzkzLTkuMDQ3ICAgIGMwLTAuMDAzLDAuMDAxLTAuMDA2LDAuMDAxLTAuMDA5bDYuNzkyLTQ3LjUxMmMwLjYyMi00LjM3NCw0LjY3My03LjQxNiw5LjA0Ny02Ljc5M2MwLjAwMywwLDAuMDA2LDAuMDAxLDAuMDA5LDAuMDAxbDMxLjEyLDQuNDQ4ICAgIGMzLjIwMSwwLjQ2NCw2LjM2NC0xLjA1OCw4LTMuODQ4YzEuNjk5LTIuNzczLDEuNTA4LTYuMzA3LTAuNDgtOC44OGwtMTguODQtMjUuMTM2Yy0yLjY1MS0zLjUzNS0xLjkzNS04LjU0OSwxLjYtMTEuMmw0LjUzNi0zLjQgICAgYy03LjM0OC0wLjM1NS0xNC43MTMtMC4xNTgtMjIuMDMyLDAuNTkyQzE0My4wODcsNTEuOTA1LDg2LjM0NywxMjMuMjc0LDk1LjM2OSwyMDIuMjljNC45MTUsNDMuMDQ1LDI4Ljk0OSw4MS41ODksNjUuNDM4LDEwNC45NDUgICAgYzEzLjMyMiw4LjI2LDIxLjUwNCwyMi43NSwyMS42OTYsMzguNDI0djMyLjMyOGMwLDEzLjI1NSwxMC43NDUsMjQsMjQsMjRoNjRjMTMuMjU1LDAsMjQtMTAuNzQ1LDI0LTI0di0zMS42NjQgICAgYzAuMjAzLTE2LjA0Miw4LjU1My0zMC44NzgsMjIuMTYtMzkuMzc2YzEyLjYxMi04LjE4MiwyMy44NzUtMTguMjc2LDMzLjM4NC0yOS45MiAgICBDMzQ4Ljg0MSwyNzcuNzY2LDM0Ny40NjEsMjc4LjE3MiwzNDYuMDQ3LDI3OC4yMDN6IE0yNDYuNTAzLDM3Ny45ODdoLTE2di0yNGgxNlYzNzcuOTg3eiBNMjMwLjUwMywzMzcuOTg3ICAgIGMtMC4wMDUtMjEuMTUyLTEzLjA0OC00MC4xMTItMzIuOC00Ny42OGMtNTcuNjA5LTIyLjUyNi04Ni4wNDktODcuNDg3LTYzLjUyMy0xNDUuMDk2YzguNzIyLTIyLjMwNywyNC4zNjYtNDEuMjMsNDQuNjM1LTUzLjk5MiAgICBsOC40ODgsMTMuNTM2Yy00NC44NzUsMjguMjM3LTU4LjM2Miw4Ny41MDUtMzAuMTI1LDEzMi4zOGMxMC45NCwxNy4zODYsMjcuMTY5LDMwLjgwNSw0Ni4zMDEsMzguMjg0ICAgIGMyNS45MjgsOS45MTcsNDMuMDQ0LDM0LjgwOCw0My4wMjQsNjIuNTY4SDIzMC41MDN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMDYuNTAzLDQ0MS45ODd2OGMwLDguODM3LDcuMTYzLDE2LDE2LDE2aDMyYzguODM3LDAsMTYtNy4xNjMsMTYtMTZ2LThIMjA2LjUwM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTE1Ni40ODcsMzEzLjk4N2MtNC43NC0zLjA3My05LjMwNS02LjQwOS0xMy42NzItOS45OTJjLTEyLjA3NywyMy41MS00MC45MjUsMzIuNzc4LTY0LjQzNSwyMC43MDIgICAgYy0xNi4wMDItOC4yMi0yNi4wNDItMjQuNzItMjUuOTg5LTQyLjcxYzAuMDM3LTI0LjE4NywxOC4wNS00NC41NzUsNDIuMDQ4LTQ3LjU5MmMtMi45MzYtOC44My01LjA1Ny0xNy45MTEtNi4zMzYtMjcuMTI4ICAgIGwtMS40LDYuNjU2Yy0xLjgxOCw4LjY0Ny0xMC4zMDMsMTQuMTgzLTE4Ljk1LDEyLjM2NWMtMi4wNzEtMC40MzUtNC4wMzUtMS4yNzctNS43NzgtMi40NzdsLTE2LjY0LTExLjQyNGwtMTQuNTc2LDE0LjU0NCAgICBsMTEuNDU2LDE2LjY1NmM1LjAxNCw3LjI3NiwzLjE4LDE3LjI0LTQuMDk2LDIyLjI1NGMtMS43NDUsMS4yMDItMy43MTEsMi4wNDYtNS43ODQsMi40ODJsLTE5Ljk0NCw0LjJ2MTkuMDA4bDE5Ljk0NCw0LjIgICAgYzguNjQ3LDEuODIxLDE0LjE4MSwxMC4zMDcsMTIuMzYsMTguOTU0Yy0wLjQzNywyLjA3Ni0xLjI4Myw0LjA0NC0yLjQ4OCw1Ljc5bC0xMS40NDgsMTYuNTY4bDE0LjU3NiwxNC41NDRsMTYuNjI0LTExLjQ1NiAgICBjNy4yNzYtNS4wMTQsMTcuMjQtMy4xOCwyMi4yNTQsNC4wOTZjMS4yMDIsMS43NDUsMi4wNDYsMy43MTEsMi40ODIsNS43ODRsNC4xOTIsMTkuOTc2aDE5LjAxNmw0LjE5Mi0xOS45NDQgICAgYzEuODItOC42NDcsMTAuMzA1LTE0LjE4MiwxOC45NTItMTIuMzYyYzIuMDczLDAuNDM2LDQuMDM5LDEuMjgsNS43ODQsMi40ODJsMTYuNjE2LDExLjQyNGwxNy4xNi0xNy4xNiAgICBDMTY5LjczLDMyNS45NzEsMTY0LjA0LDMxOC43NTYsMTU2LjQ4NywzMTMuOTg3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PGc+Cgk8Zz4KCQk8cmVjdCB4PSIyMDYuNTAzIiB5PSI0MDkuOTg3IiB3aWR0aD0iNjQiIGhlaWdodD0iMTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQzOC4yNTUsMTM3LjkxNWMtMTMuMTIxLTEuODc2LTIyLjIzNy0xNC4wMzUtMjAuMzYxLTI3LjE1NmMwLjkwMS02LjMwMSw0LjI2OC0xMS45ODYsOS4zNjEtMTUuODA0bDE4Ljc0NC0xNC4wNjQgICAgbC0xOS4yLTI1LjZsLTE4Ljc0NCwxNC4wNTZjLTEwLjYwMiw3Ljk1Ni0yNS42NDYsNS44MS0zMy42MDEtNC43OTFjLTMuODE1LTUuMDg0LTUuNDU4LTExLjQ3NS00LjU2Ny0xNy43NjlsMy4zMTItMjMuMiAgICBsLTMxLjY3Mi00LjUybC0zLjMxMiwyMy4yYy0xLjg3NywxMy4xMjEtMTQuMDM1LDIyLjIzNy0yNy4xNTYsMjAuMzYxYy02LjMwMS0wLjkwMS0xMS45ODYtNC4yNjgtMTUuODA0LTkuMzYxbC0xNC4wNjQtMTguNzc2ICAgIGwtMjUuNiwxOS4ybDE0LjA1NiwxOC43NDRjNy45NTQsMTAuNjAzLDUuODA3LDI1LjY0Ni00Ljc5NiwzMy42MDFjLTUuMDk1LDMuODIyLTExLjQ5OSw1LjQ2Mi0xNy44MDQsNC41NTlsLTIzLjItMy4zMTIgICAgbC00LjU0NCwzMS42OGwyMy4yLDMuMzEyYzEzLjEyMSwxLjg3NywyMi4yMzcsMTQuMDM1LDIwLjM2MSwyNy4xNTZjLTAuOTAxLDYuMzAxLTQuMjY4LDExLjk4Ni05LjM2MSwxNS44MDRsLTE4LjczNiwxNC4wNjQgICAgbDE5LjIsMjUuNmwxOC43NDQtMTQuMDU2YzEwLjYwMy03Ljk1NCwyNS42NDYtNS44MDcsMzMuNjAxLDQuNzk2YzMuODIyLDUuMDk1LDUuNDYyLDExLjUsNC41NTksMTcuODA0bC0zLjMxMiwyMy4ybDMxLjc0NCw0LjU0NCAgICBsMy4zMTItMjMuMmMxLjg3Ny0xMy4xMjEsMTQuMDM1LTIyLjIzNywyNy4xNTYtMjAuMzYxYzYuMzAxLDAuOTAxLDExLjk4Niw0LjI2OCwxNS44MDQsOS4zNjFsMTQuMDY0LDE4LjczNmwyNS42LTE5LjIgICAgbC0xNC4xMDQtMTguNzc2Yy03Ljk1MS0xMC42MDUtNS44LTI1LjY0OCw0LjgwNS0zMy41OTljNS4wODQtMy44MTIsMTEuNDcyLTUuNDUyLDE3Ljc2My00LjU2MWwyMy4yLDMuMzEybDQuNTItMzEuNjcyICAgIEw0MzguMjU1LDEzNy45MTV6IE0zNDAuMzkxLDE4OC4wOTljLTI2LjUxLDAtNDgtMjEuNDktNDgtNDhzMjEuNDktNDgsNDgtNDhjMjYuNTEsMCw0OCwyMS40OSw0OCw0OCAgICBDMzg4LjM2LDE2Ni41OTYsMzY2Ljg4OCwxODguMDY4LDM0MC4zOTEsMTg4LjA5OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHJlY3QgeD0iMzkwLjUwMyIgeT0iMjk3Ljk4NyIgd2lkdGg9IjU2IiBoZWlnaHQ9IjE2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3JlY3Q+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxyZWN0IHg9IjM5OC41MDQiIHk9IjMzNC43NSIgdHJhbnNmb3JtPSJtYXRyaXgoMC42NDAxIC0wLjc2ODMgMC43NjgzIDAuNjQwMSAtMTM0Ljg4NzYgNDQ0LjAyNTQpIiB3aWR0aD0iMTYiIGhlaWdodD0iNjIuNDgiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHJlY3QgeD0iMzQyLjUwMyIgeT0iMzYxLjk4NyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjU2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3JlY3Q+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxyZWN0IHg9IjUuNTE5IiB5PSIxMjkuOTg3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk3MDEgLTAuMjQyNSAwLjI0MjUgMC45NzAxIC0zMi4zMTU1IDEzLjQ1NzcpIiB3aWR0aD0iNjUuOTY4IiBoZWlnaHQ9IjE1Ljk5MiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9yZWN0PgoJPC9nPgo8L2c+PGc+Cgk8Zz4KCQk8cmVjdCB4PSI0Mi41MDIiIHk9IjM1LjU4NSIgdHJhbnNmb3JtPSJtYXRyaXgoMC41ODEyIC0wLjgxMzcgMC44MTM3IDAuNTgxMiAtMzUuODA4OCA3MC40MDIxKSIgd2lkdGg9IjE1Ljk5MiIgaGVpZ2h0PSI2OC44MTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHJlY3QgeD0iOTQuMzI5IiB5PSIwLjk1MiIgdHJhbnNmb3JtPSJtYXRyaXgoMC45Njg4IC0wLjI0NzcgMC4yNDc3IDAuOTY4OCAtNS4yMjc3IDI2LjQwMSkiIHdpZHRoPSIxNiIgaGVpZ2h0PSI2Ni4wNTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />
                        <p style="font-family: Calibri;font-size: 25px;color:#12A3D0;margin:0">Projeler</p>
                    </div>
                    <p style="font-family: Calibri;font-size: 19px;margin: 2px;color:#505050">NotePad</p>
                    <p style="font-family: Calibri;font-size: 17px;margin: 3px 0;color:#646464">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>
                    <p style="font-family: Calibri;font-size: 17px;margin: 5px 0 2px 0;color:#646464"><span style="color:#505050">Araçlar:</span> Vue.js, Firebase, Git, Bootstrap</p>
                    <div style="display: flex;align-items: center;justify-content: center">
                        <img height="16px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wOTIgNTEyLjA5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA5MiA1MTIuMDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxMi40NTMsMTk5LjYwMWMtNi4wNjYtNi4xMDItMTIuNzkyLTExLjUxMS0yMC4wNTMtMTYuMTI4Yy0xOS4yMzItMTIuMzE1LTQxLjU5LTE4Ljg1OS02NC40MjctMTguODU5ICAgIGMtMzEuNjk3LTAuMDU5LTYyLjEwNiwxMi41MzUtODQuNDgsMzQuOTg3TDM0Ljk0OSwzMDguMjNjLTIyLjMzNiwyMi4zNzktMzQuODksNTIuNy0zNC45MSw4NC4zMTggICAgYy0wLjA0Miw2NS45OCw1My40MSwxMTkuNTAxLDExOS4zOSwxMTkuNTQzYzMxLjY0OCwwLjExLDYyLjAyOS0xMi40MjQsODQuMzk1LTM0LjgxNmw4OS42LTg5LjYgICAgYzEuNjI4LTEuNjE0LDIuNTM3LTMuODE2LDIuNTI0LTYuMTA4Yy0wLjAyNy00LjcxMy0zLjg3LTguNTExLTguNTgzLTguNDg0aC0zLjQxM2MtMTguNzIsMC4wNjYtMzcuMjczLTMuNTI5LTU0LjYxMy0xMC41ODEgICAgYy0zLjE5NS0xLjMxNS02Ljg2Ny0wLjU3My05LjMwMSwxLjg3N2wtNjQuNDI3LDY0LjUxMmMtMjAuMDA2LDIwLjAwNi01Mi40NDIsMjAuMDA2LTcyLjQ0OCwwICAgIGMtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyLDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUsNTIuMzczLTE5Ljk2NSw3Mi4zNjMsMCAgICBjMTMuNDcyLDEyLjY3OSwzNC40ODYsMTIuNjc5LDQ3Ljk1NywwYzUuNzk2LTUuODAxLDkuMzEtMTMuNDk1LDkuODk5LTIxLjY3NUMzMjIuOTc2LDIxNi4xMDgsMzE5LjM3MSwyMDYuNTM1LDMxMi40NTMsMTk5LjYwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ny4wNjEsMzQuOTkzYy00Ni42NTctNDYuNjU3LTEyMi4zMDMtNDYuNjU3LTE2OC45NiwwbC04OS41MTUsODkuNDI5Yy0yLjQ1OCwyLjQ3LTMuMTY3LDYuMTg1LTEuNzkyLDkuMzg3ICAgIGMxLjM1OSwzLjIxMSw0LjUzNSw1LjI3Miw4LjAyMSw1LjIwNWgzLjE1N2MxOC42OTgtMC4wMzQsMzcuMjIxLDMuNTg5LDU0LjUyOCwxMC42NjdjMy4xOTUsMS4zMTUsNi44NjcsMC41NzMsOS4zMDEtMS44NzcgICAgbDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiw1Mi40NDItMjAuMDA2LDcyLjQ0OCwwYzIwLjAwNiwyMC4wMDYsMjAuMDA2LDUyLjQ0MiwwLDcyLjQ0OGwtODAuMDQzLDc5Ljk1N2wtMC42ODMsMC43NjggICAgbC0yNy45ODksMjcuODE5Yy0xOS45OSwxOS45NjUtNTIuMzczLDE5Ljk2NS03Mi4zNjMsMGMtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NywwICAgIGMtNS44MzMsNS44NDUtOS4zNSwxMy42MDYtOS44OTksMjEuODQ1Yy0wLjYyNCw5Ljc3NSwyLjk4MSwxOS4zNDgsOS44OTksMjYuMjgzYzkuODc3LDkuOTE5LDIxLjQzMywxOC4wMDgsMzQuMTMzLDIzLjg5MyAgICBjMS43OTIsMC44NTMsMy41ODQsMS41MzYsNS4zNzYsMi4zMDRjMS43OTIsMC43NjgsMy42NjksMS4zNjUsNS40NjEsMi4wNDhjMS43OTIsMC42ODMsMy42NjksMS4yOCw1LjQ2MSwxLjc5Mmw1LjAzNSwxLjM2NSAgICBjMy40MTMsMC44NTMsNi44MjcsMS41MzYsMTAuMzI1LDIuMTMzYzQuMjE0LDAuNjI2LDguNDU4LDEuMDI1LDEyLjcxNSwxLjE5NWg1Ljk3M2gwLjUxMmw1LjEyLTAuNTk3ICAgIGMxLjg3Ny0wLjA4NSwzLjg0LTAuNTEyLDYuMDU5LTAuNTEyaDIuOTAxbDUuODg4LTAuODUzbDIuNzMxLTAuNTEybDQuOTQ5LTEuMDI0aDAuOTM5YzIwLjk2MS01LjI2NSw0MC4xMDEtMTYuMTE4LDU1LjM4MS0zMS40MDMgICAgbDEwOC42MjktMTA4LjYyOUM1MjMuNzE4LDE1Ny4yOTYsNTIzLjcxOCw4MS42NSw0NzcuMDYxLDM0Ljk5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" /><p style="font-family: Calibri;font-size: 17px;margin: 2px 0 0 5px;color:#646464">shokidev-notepad.web.app</p>
                    </div>
                </div>

                <div style="margin-bottom: 25px;padding:0 20px 0 20px">
                    <div style="position: relative;margin:15px 0 5px 0;padding-top: 40px">
                        <img height="40px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9ImhvdmVyZWQtcGF0aHMiPjxnPjxnPgoJPGc+CgkJPHBvbHlnb24gcG9pbnRzPSIxMzguNzEsMTM3IDEzMi4yOSwxMzcgMTIwLjI5MywxOTcgMTUwLjcwNywxOTcgICAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJob3ZlcmVkLXBhdGggYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BvbHlnb24+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zODEuMzc0LDI1N2M2LjQ3NywxNy4zOTksMTUuMDkyLDMxLjQ4MywyNC42MjYsNDMuNDY3YzkuNTM0LTExLjk4NCwxOS4xNDktMjYuMDY5LDI1LjYyNi00My40NjdIMzgxLjM3NHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJob3ZlcmVkLXBhdGggYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NjcsOTFIMjgwLjcxN2wzOC44NDIsMzExLjY3OWMwLjY4NywxMi43NDgtMi43OTgsMjQuNzUtMTEuMTE4LDM0LjE0NkwyNDIuNjYzLDUxMkg0NjdjMjQuODE0LDAsNDUtMjAuMTg2LDQ1LTQ1VjEzNyAgICBDNTEyLDExMi4xODYsNDkxLjgxNCw5MSw0NjcsOTF6IE00NjcsMjU3aC00LjAwNmMtOC41MzUsMjcuMzgzLTIyLjA3LDQ4LjgxLTM2LjEzNiw2NS43MDIgICAgYzExLjAxOSwxMC4wNzQsMjIuODAyLDE4LjMzOCwzNC41MTcsMjcuNTk0YzYuNDYsNS4xNzEsNy41MTUsMTQuNjA0LDIuMzI5LDIxLjA3OWMtNS4xNjIsNi40NjUtMTQuNjMyLDcuNTEzLTIxLjA3OSwyLjMyOSAgICBjLTEyLjcyOS0xMC4wNDctMjQuNjc3LTE4LjQ1Ny0zNi42MjUtMjkuNDIxYy0xMS45NDgsMTAuOTY0LTIyLjg5NiwxOS4zNzQtMzUuNjI1LDI5LjQyMWMtNi40NDcsNS4xODQtMTUuOTE3LDQuMTM2LTIxLjA3OS0yLjMyOSAgICBjLTUuMTg2LTYuNDc1LTQuMTMxLTE1LjkwOCwyLjMyOS0yMS4wNzljMTEuNzE1LTkuMjU2LDIyLjQ5OC0xNy41MiwzMy41MTctMjcuNTk0Yy0xNC4wNjYtMTYuODkxLTI2LjYwMi0zOC4zMTgtMzUuMTM2LTY1LjcwMiAgICBIMzQ2Yy04LjI5MSwwLTE1LTYuNzA5LTE1LTE1czYuNzA5LTE1LDE1LTE1aDQ1di0xNWMwLTguMjkxLDYuNzA5LTE1LDE1LTE1YzguMjkxLDAsMTUsNi43MDksMTUsMTV2MTVoNDZjOC4yOTEsMCwxNSw2LjcwOSwxNSwxNSAgICBTNDc1LjI5MSwyNTcsNDY3LDI1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJob3ZlcmVkLXBhdGggYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNDQuMTY0LDM5LjQxOUMyNDEuMzY2LDE2Ljk0OCwyMjIuMTYyLDAsMTk5LjUxNiwwSDQ1QzIwLjE4NiwwLDAsMjAuMTg2LDAsNDV2MzMyYzAsMjQuODE0LDIwLjE4Niw0NSw0NSw0NSAgICBjODkuNjcsMCwxNTQuMTc3LDAsMjM2LjU1MSwwYzQuMzc2LTUuMDAyLDguMDQ0LTguMTM0LDguMTk5LTE0LjY2M0MyODkuNzg4LDQwNS43LDI0NC4zNjcsNDEuMDQzLDI0NC4xNjQsMzkuNDE5eiAgICAgTTE4My45NDQsMjg2LjcwN2MtNy45NTQsMS42MzctMTYuMDExLTMuNTI3LTE3LjY1MS0xMS43NjNMMTU2LjcwNiwyMjdoLTQyLjQxMWwtOS41ODcsNDcuOTQ0ICAgIGMtMS42MTEsOC4xMTUtOS40MzQsMTMuNDQ3LTE3LjY1MSwxMS43NjNjLTguMTE1LTEuNjI2LTEzLjM4OS05LjUyMS0xMS43NjMtMTcuNjUxbDI5Ljk5OS0xNTAgICAgQzEwNi42OTksMTEyLjA1NCwxMTIuODUyLDEwNywxMjAsMTA3aDMxYzcuMTQ4LDAsMTMuMzAxLDUuMDU0LDE0LjcwNywxMi4wNTZsMzAsMTUwICAgIEMxOTcuMzMzLDI3Ny4xODYsMTkyLjA2LDI4NS4wODEsMTgzLjk0NCwyODYuNzA3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImhvdmVyZWQtcGF0aCBhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTE3NS4yNjEsNDUybDIuNTc0LDIwLjU4MWMxLjcxNiwxMy43ODMsMTAuODc0LDI3LjgzOCwyNS45MzgsMzQuODU2YzI4LjQyOC0zMS4yOTQsMTEuMjI5LTEyLjM2Miw1MC4zNTktNTUuNDM3SDE3NS4yNjF6ICAgICIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImhvdmVyZWQtcGF0aCBhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />
                        <p style="font-family: Calibri;font-size: 25px;color:#12A3D0;margin:0">Bildiği Diller</p>
                    </div>
                    <div style="display: flex;justify-content: center">
                        <div>
                            <p style="text-align:start;margin:2px;font-family: Calibri;color:#505050;font-size: 19px">Türkçe</p>
                            <p style="text-align:start;margin:2px;font-family: Calibri;color:#505050;font-size: 19px">Türkmence</p>
                            <p style="text-align:start;margin:2px;font-family: Calibri;color:#505050;font-size: 19px">İngilizce</p>
                            <p style="text-align:start;margin:2px;font-family: Calibri;color:#505050;font-size: 19px">Japonca</p>
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
                        <img height="40px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDg4LjQgNDg4LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OC40IDQ4OC40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGNsYXNzPSIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTI0My44LDI0MS4xMTNMMjQzLjgsMjQxLjExM2MwLjEsMCwwLjIsMCwwLjQsMGMwLjEsMCwwLjIsMCwwLjQsMGwwLDBjNjQuMS0wLjcsNTQuOC04Ni4zLDU0LjgtODYuMyAgICBjLTIuNi01Ny4yLTUwLjUtNTYuNy01NS4yLTU2LjVjLTQuNy0wLjItNTIuNS0wLjctNTUuMiw1Ni41QzE4OSwxNTQuOTEzLDE3OS43LDI0MC41MTMsMjQzLjgsMjQxLjExM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMzkzLjgsMjcwLjMxM0wzOTMuOCwyNzAuMzEzYzAuMSwwLDAuMiwwLDAuMywwYzAuMSwwLDAuMiwwLDAuMywwbDAsMGM1MS41LTAuNSw0NC4xLTY5LjQsNDQuMS02OS40ICAgIGMtMi4xLTQ2LTQwLjYtNDUuNi00NC40LTQ1LjVjLTMuOC0wLjItNDIuMy0wLjUtNDQuNCw0NS41QzM0OS43LDIwMS4wMTMsMzQyLjIsMjY5LjgxMywzOTMuOCwyNzAuMzEzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik00ODguMywzNDAuMTEzYy0wLjQtMTQuOC0zLjMtMjUuMS0xOC40LTM0LjZjLTIwLjEtMTIuNi00Mi42LTIzLjUtNDIuNi0yMy41bC0xNy45LDU2LjZsLTEwLjQtMjkuNyAgICBjMTguMy0yNS42LTEuMy0yNi45LTQuOC0yNi45bDAsMGgtMC4xSDM5NGwwLDBjLTMuNSwwLTIzLjEsMS4zLTQuOCwyNi45bC0xMC40LDI5LjZsLTE3LjktNTYuNmMwLDAtNi40LDMuMS0xNS40LDcuOSAgICBjLTIuMS0xLjctNC40LTMuNC03LTVjLTI1LTE1LjctNTIuOS0yOS4zLTUyLjktMjkuM2wtMjIuMiw3MC4zbC0xMy0zNi45YzIyLjgtMzEuOC0xLjYtMzMuNC02LTMzLjVsMCwwaC0wLjFoLTAuMWwwLDAgICAgYy00LjQsMC0yOC44LDEuNi02LDMzLjVsLTEzLDM2LjlsLTIyLjItNzAuM2MwLDAtMjcuOSwxMy42LTUyLjksMjkuM2MtMi43LDEuNy01LDMuNC03LjEsNS4xYy05LjEtNC45LTE1LjYtOC0xNS42LThsLTE3LjksNTYuNiAgICBsLTEwLjQtMjkuNmMxOC4zLTI1LjYtMS4zLTI2LjktNC44LTI2LjlsMCwwaC0wLjFoLTAuMWwwLDBjLTMuNSwwLTIzLjEsMS4zLTQuOCwyNi45bC0xMC40LDI5LjZsLTE3LjktNTYuNiAgICBjMCwwLTIyLjUsMTAuOS00Mi42LDIzLjVjLTE1LjIsOS41LTE4LDE5LjgtMTguNCwzNC42djUwLjFoOTRoMzIuOWg2MS4zSDI0NGg1NS44aDYxLjVIMzk0aDk0LjRMNDg4LjMsMzQwLjExM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTMuNiwyNzAuMzEzTDkzLjYsMjcwLjMxM2MwLjEsMCwwLjIsMCwwLjMsMGMwLjEsMCwwLjIsMCwwLjMsMGwwLDBjNTEuNi0wLjUsNDQuMS02OS40LDQ0LjEtNjkuNCAgICBjLTIuMS00Ni00MC42LTQ1LjYtNDQuNC00NS41Yy0zLjgtMC4yLTQyLjMtMC41LTQ0LjQsNDUuNUM0OS41LDIwMS4wMTMsNDIuMSwyNjkuODEzLDkzLjYsMjcwLjMxM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />
                        <p style="font-family: Calibri;font-size: 25px;color:#12A3D0;margin:0">Topluluklar</p>
                    </div>
                    <p style="font-family: Calibri;font-size: 17px;margin: 2px;color:#505050">GAÜN YAZILIM TOPLULUĞU / <i style="color:#646464">üye</i></p>
                    <p style="font-family: Calibri;font-size: 17px;margin: 2px;color:#505050">KODLUYORUZ / <i style="color:#646464">mezun</i></p>
                </div>

            </div>



            <div style="width: 50%;" align="center">
                <div style="margin-bottom: 25px;padding:0 20px 0 20px">
                    <div style="position: relative;margin:15px 0 5px 0;padding-top: 35px">
                        <img height="40px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTMxIDUxMiA1MTIiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMjExIDI0MGg5MHYzMGgtOTB6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im00MTUuMzc4OTA2IDI3MGgtODQuMzc4OTA2djE1YzAgOC4yODkwNjItNi43MTA5MzggMTUtMTUgMTVoLTEyMGMtOC4yODkwNjIgMC0xNS02LjcxMDkzOC0xNS0xNXYtMTVoLTg0LjM3ODkwNmMtMTkuMzk0NTMyIDAtMzYuNTQ2ODc1LTEyLjM2MzI4MS00Mi42ODc1LTMwLjc2MTcxOWwtNTMuOTMzNTk0LTE2MS44MjgxMjV2MzI3LjU4OTg0NGMwIDI0LjgxMjUgMjAuMTg3NSA0NSA0NSA0NWg0MjJjMjQuODEyNSAwIDQ1LTIwLjE4NzUgNDUtNDV2LTMyNy41NzgxMjVsLTUzLjkzNzUgMTYxLjgxNjQwNmMtNi4xMzY3MTkgMTguMzk4NDM4LTIzLjI4OTA2MiAzMC43NjE3MTktNDIuNjgzNTk0IDMwLjc2MTcxOXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTMxNiAwaC0xMjBjLTI0LjgxMjUgMC00NSAyMC4xODc1LTQ1IDQ1djE1aC0xMjUuMTkxNDA2bDU2LjU3NDIxOCAxNjkuNzQ2MDk0YzIuMDUwNzgyIDYuMTM2NzE4IDcuNzc3MzQ0IDEwLjI1MzkwNiAxNC4yMzgyODIgMTAuMjUzOTA2aDg0LjM3ODkwNnYtMTVjMC04LjI4OTA2MiA2LjcxMDkzOC0xNSAxNS0xNWgxMjBjOC4yODkwNjIgMCAxNSA2LjcxMDkzOCAxNSAxNXYxNWg4NC4zNzg5MDZjNi40NjA5MzggMCAxMi4xODc1LTQuMTE3MTg4IDE0LjIzODI4Mi0xMC4yNTM5MDZsNTYuNTc4MTI0LTE2OS43NDYwOTRoLTEyNS4xOTUzMTJ2LTE1YzAtMjQuODEyNS0yMC4xODc1LTQ1LTQ1LTQ1em0tMTM1IDYwdi0xNWMwLTguMjc3MzQ0IDYuNzIyNjU2LTE1IDE1LTE1aDEyMGM4LjI3NzM0NCAwIDE1IDYuNzIyNjU2IDE1IDE1djE1em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                        <p style="font-family: Calibri;font-size: 25px;color:#12A3D0;margin:0">İş Deneyimi</p>
                    </div>
                    <p style="font-family: Calibri;font-size: 19px;margin: 2px;color:#505050">Logo Yazılım</p>
                    <p style="font-family: Calibri;font-size: 17px;margin: 3px 0;color:#646464">Backend Developer</p>
                    <p style="font-family: Calibri;font-size: 17px;margin: 5px 0 2px 0;color:#646464">08.2010-02.2018</p>
                    <p style="font-family: Calibri;font-size: 17px;margin: 2px 0 0 5px;color:#646464">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div style="margin-bottom: 25px;padding:0 20px 0 20px">
                    <div style="position: relative;margin:15px 0 5px 0;padding-top: 40px">
                        <img height="40px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PGc+PGc+PGc+PHBhdGggZD0ibTQ3My4wNTYgMjgxLjMxOC0yMy4zMTQtNDguOTQxYy0xLjM4OS0yLjkxNi0yLjEyOS02LjA5OS0yLjE2OS05LjMyOWwtLjQ0Ni0zNS45NDZjMC03OC41ODQtNDcuMzMtMTQ2Ljg3OS0xMTUuMTk5LTE3Ni4yNjYtNy4wOTEtMy4wNy0xNC42MjgtNC45NTItMjIuMzMxLTUuNTcyLTQuNjU3LS4zNzUtOS4zNjQtLjU3Ny0xNC4xMTUtLjU5My0xMDIuOTI3LS4zNTctMTg2LjQ3NiA4Mi45NzMtMTg2LjQ3NiAxODUuODE2IDAgNDIuMTcxIDE0LjA0OCA4MS4wNiAzNy43MiAxMTIuMjQ0IDE4LjI5NSAyNC4xMDEgMjguMTU2IDUzLjU1IDI4LjE1NiA4My44MDh2MTA3LjIwMmgxNTUuMjg5di01Ni44NzNjMC0uNDAyLjAxMi0uOC4wMzYtMS4xOTUuNTk2LTkuNzc4IDkuNzkxLTE2Ljc2MiAxOS40ODQtMTUuMzQxbDIyLjk5MiAzLjM3MmMuNDQ5LjAzNCAyNC4yODcgMy41MDkgMjQuMjg3IDMuNTA5IDE2Ljc3OCAyLjQ2MSAzMi40NjMtOS44ODcgMzMuMjEyLTI2LjgyOC4wMjItLjQ4OC4wMzMtLjk3OC4wMzMtMS40NzJsLjAwMy02My4xMjhjLjAwMS0xMi40MTkgMTAuMTMzLTIyLjQ1MyAyMi41NTEtMjIuMzMzIDE2LjUxOC4wMDEgMjcuMzkxLTE3LjIyMiAyMC4yODctMzIuMTM0eiIgZmlsbD0iI2ZmZWNlMyIgZGF0YS1vcmlnaW5hbD0iI0ZGRUNFMyIgY2xhc3M9IiIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiNmZmVjZTMiPjwvcGF0aD48Zz48Zz48cGF0aCBkPSJtMzMyLjgzNiA0MTcuODYxYy0xMS41OTYtMS43MDEtMjEuOTk5IDcuMjg4LTIxLjk5OSAxOS4wMDd2NTYuODczaDQxLjE5OXYtNTAuODg0YzAtMTEuMjYyIDkuNjA3LTE5Ljk5NiAyMC42NDYtMTkuMTUzeiIgZmlsbD0iI2ZmZGRjZSIgZGF0YS1vcmlnaW5hbD0iI0ZGRERDRSIgY2xhc3M9IiIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiNmZmRkY2UiPjwvcGF0aD48L2c+PHBhdGggZD0ibTUwNi4wNTcgMjg0Ljg1Ni0yMi44NTMtNDcuOTczYy0xLjM2Mi0yLjg1OC0yLjA4Ny01Ljk3OC0yLjEyNi05LjE0NGwtLjQzNy0zNS4yMzVjMC0xMDAuOTY5LTc5LjcxMS0xODQuNjE0LTE3OS45OTItMTg3Ljc0IDgwLjA2MSAyMS4xNzIgMTM4Ljc5MyA5NS4wOCAxMzguNzkzIDE4MS43NTFsLjQzNyAzNS4yMzVjLjAzOSAzLjE2Ni43NjUgNi4yODYgMi4xMjYgOS4xNDRsMjIuODUzIDQ3Ljk3M2M2Ljk2MyAxNC42MTctMy42OTUgMzEuNS0xOS44ODYgMzEuNS0xMi4xNzMtLjExOC0yMi4xMDQgOS43MTctMjIuMTA1IDIxLjg5MWwtLjAwMyA2MS44NzljLS4wMDEgMTguODQ4LTE2LjIgMzMuNDQyLTM0LjcxMiAzMS43ODVsMzkuMzcxIDUuNzc0YzE5LjI2IDIuODI1IDM2LjUzOS0xMi4xMDQgMzYuNTQtMzEuNTdsLjAwMy02MS44NzljLjAwMS0xMi4xNzMgOS45MzItMjIuMDA4IDIyLjEwNS0yMS44OTEgMTYuMTkyIDAgMjYuODQ5LTE2Ljg4MyAxOS44ODYtMzEuNXoiIGZpbGw9IiNmZmRkY2UiIGRhdGEtb3JpZ2luYWw9IiNGRkREQ0UiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjZmZkZGNlIj48L3BhdGg+PC9nPjxwYXRoIGQ9Im0zNDIuMzA3IDQ5NC4xMjR2LTI0LjcwN2MwLTEuMjA2LS45MTgtMi4yMTMtMi4xMTktMi4zMjRsLTE3Ni40ODgtMTYuMzJjLTEwLjYxMi0uOTgxLTE5Ljc3MiA3LjM3MS0xOS43NzIgMTguMDI4djI0LjkwMmMwIDkuOTkyIDguMDk1IDE4LjA5NSAxOC4wODcgMTguMTA1bDE2My45MzIuMTU3YzMuNTY4LjAwMyA3LjA5Ny0xLjE0NSA5Ljc5NC0zLjQ4MSA0LjAyMS0zLjQ4NCA2LjU2Ni04LjYxOSA2LjU2Ni0xNC4zNnoiIGZpbGw9IiM4ZGI5YzIiIGRhdGEtb3JpZ2luYWw9IiM4REI5QzIiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjOGRiOWMyIj48L3BhdGg+PGc+PHBhdGggZD0ibTM2NS4wMjIgNDY5LjM4OS0yNS4wODItMi4zMTl2MjYuODI2YzAgOS43NC03LjY5OCAxNy42Ni0xNy4zMzYgMTguMDY2bDQwLjczNC4wMzhjMTAuMDA2LjAxIDE4LjEyMi04LjA5OSAxOC4xMjItMTguMTA1di02LjQ3OWMwLTkuMzUzLTcuMTI1LTE3LjE2Ni0xNi40MzgtMTguMDI3eiIgZmlsbD0iIzdiYTBiMCIgZGF0YS1vcmlnaW5hbD0iIzdCQTBCMCIgY2xhc3M9IiIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiM3YmEwYjAiPjwvcGF0aD48L2c+PC9nPjxnPjxnPjxnPjxwYXRoIGQ9Im0xNzIuMzI5IDM1Mi41di00NC4wODZoLTU0LjkxNnY0My45MThjMCAxNS41MDUgMTEuMjggMjguMzY5IDI2LjA4MSAzMC44NDcgMy4xNjkuNTMxIDYuNDE0LjEwOCA5LjM2Ny0xLjE1OSAxMS40NDgtNC45MDkgMTkuNDY4LTE2LjI3NSAxOS40NjgtMjkuNTJ6IiBmaWxsPSIjZGFlYWVmIiBkYXRhLW9yaWdpbmFsPSIjREFFQUVGIiBjbGFzcz0iIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iI2RhZWFlZiI+PC9wYXRoPjxwYXRoIGQ9Im0xNzAuODE4IDMwOC40MTR2NDMuOTE4YzAgMTUuNzIyLTExLjYwNiAyOC43MTktMjYuNzExIDMwLjkzOCAxLjQ5Ny4yMiAzLjAzNi4zNSA0LjU5NS4zNWgzMi4zNDljMTcuMjggMCAzMS4yODgtMTQuMDA4IDMxLjI4OC0zMS4yODh2LTQzLjkxOHoiIGZpbGw9IiNjOWUyZTciIGRhdGEtb3JpZ2luYWw9IiNDOUUyRTciIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjYzllMmU3Ij48L3BhdGg+PHBhdGggZD0ibTE2OC44ODQgMzI5LjU3NGMuNDkxLTM2LjU2OSAxMy43MjktNzEuNzkyIDM3LjI2OC05OS44NDMgMTUuODM2LTE4Ljg3MiAyNS4zNzQtNDMuMjA3IDI1LjM3NC02OS43NzIgMC00OC4zNjktMzEuNjItODkuMzQxLTc1LjMxMy0xMDMuNDA1LTQuNTM1LTEuNDYtOS4zODUtMS42OTUtMTQuMDQ5LS43MjYtNDguOTM0IDEwLjE2My04NS43NjggNTQuMDg3LTg1LjIyMiAxMDUuNzk2LjI3IDI1LjU5NyA5LjU0MSA0OS4wMzMgMjQuNzk3IDY3LjI5OSAyMy40NTkgMjguMDg3IDM2Ljg0NSA2My4yMDggMzYuODQ1IDk5LjgwM3YuODQ4eiIgZmlsbD0iI2ZiZTc3YiIgZGF0YS1vcmlnaW5hbD0iI0ZCRTc3QiIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI2ZiZTc3YiIgc3R5bGU9ImZpbGw6I0VERURFRCI+PC9wYXRoPjxwYXRoIGQ9Im0xNjIuMjc0IDUzLjYyYy02LjYyMy4wOTItMTMuMTAxLjgwMS0xOS4zODQgMi4wNiA0OC45NTkgOS43NiA4NS44NTcgNTIuOTY0IDg1Ljg1NyAxMDQuNzkyIDAgMjYuMTM0LTkuMzgzIDUwLjA3NC0yNC45NjIgNjguNjQtMjMuNjAxIDI4LjEyNS0zNi42ODcgNjMuNTc5LTM2LjY4NyAxMDAuMjk1di4xNjdoNDEuOTE1di0uMTY3YzAtMzYuNzE2IDEzLjA4NS03Mi4xNjkgMzYuNjg2LTEwMC4yOTUgMTUuNTgtMTguNTY2IDI0Ljk2Mi00Mi41MDYgMjQuOTYyLTY4LjY0LjAwMS01OS41MjYtNDguNjY5LTEwNy42ODUtMTA4LjM4Ny0xMDYuODUyeiIgZmlsbD0iI2ZjZGQyZSIgZGF0YS1vcmlnaW5hbD0iI0ZDREQyRSIgY2xhc3M9IiIgZGF0YS1vbGRfY29sb3I9IiNmY2RkMmUiIHN0eWxlPSJmaWxsOiNFREVERUQiPjwvcGF0aD48cGF0aCBkPSJtMjEyLjczNyAzNTAuMDI2aC05Ny44NzVjLTUuNDA2IDAtOS43ODgtNC4zODItOS43ODgtOS43ODh2LTM2Ljk4NWMwLTUuNDA2IDQuMzgyLTkuNzg4IDkuNzg4LTkuNzg4aDk3Ljg3NWM1LjQwNiAwIDkuNzg4IDQuMzgyIDkuNzg4IDkuNzg4djM2Ljk4NWMtLjAwMSA1LjQwNS00LjM4MyA5Ljc4OC05Ljc4OCA5Ljc4OHoiIGZpbGw9IiNlZmYzZjUiIGRhdGEtb3JpZ2luYWw9IiNFRkYzRjUiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMxMkEzRDAiIGRhdGEtb2xkX2NvbG9yPSIjZWZmM2Y1Ij48L3BhdGg+PC9nPjxnPjxnPjxwYXRoIGQ9Im0xNjMuNzk5IDMwLjEwNGMtNC4yMzEgMC03LjY2MS0zLjQzLTcuNjYxLTcuNjYxdi0xNC43ODJjMC00LjIzMSAzLjQzLTcuNjYxIDcuNjYxLTcuNjYxczcuNjYxIDMuNDMgNy42NjEgNy42NjF2MTQuNzgyYzAgNC4yMzEtMy40MyA3LjY2MS03LjY2MSA3LjY2MXoiIGZpbGw9IiNmY2RkMmUiIGRhdGEtb3JpZ2luYWw9IiNGQ0REMkUiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjZmNkZDJlIiBzdHlsZT0iZmlsbDojRURFREVEIj48L3BhdGg+PC9nPjwvZz48Zz48Zz48cGF0aCBkPSJtMjYxLjA4NCA3MC40MDFjLTEuOTYxIDAtMy45MjEtLjc0OC01LjQxNy0yLjI0NC0yLjk5Mi0yLjk5Mi0yLjk5Mi03Ljg0MiAwLTEwLjgzNGwxMC40NTItMTAuNDUzYzIuOTkyLTIuOTkyIDcuODQzLTIuOTkzIDEwLjgzNCAwIDIuOTkyIDIuOTkyIDIuOTkyIDcuODQyIDAgMTAuODM0bC0xMC40NTIgMTAuNDUzYy0xLjQ5NiAxLjQ5NS0zLjQ1NiAyLjI0NC01LjQxNyAyLjI0NHoiIGZpbGw9IiNmY2RkMmUiIGRhdGEtb3JpZ2luYWw9IiNGQ0REMkUiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjZmNkZDJlIiBzdHlsZT0iZmlsbDojRURFREVEIj48L3BhdGg+PC9nPjxnPjxwYXRoIGQ9Im01Ni4wNjIgMjc1LjQyMmMtMS45NjEgMC0zLjkyMS0uNzQ4LTUuNDE3LTIuMjQ0LTIuOTkyLTIuOTkyLTIuOTkyLTcuODQzIDAtMTAuODM0bDEwLjQ1My0xMC40NTJjMi45OTItMi45OTIgNy44NDMtMi45OTIgMTAuODM0IDAgMi45OTIgMi45OTIgMi45OTIgNy44NDMgMCAxMC44MzRsLTEwLjQ1MyAxMC40NTJjLTEuNDk2IDEuNDk2LTMuNDU3IDIuMjQ0LTUuNDE3IDIuMjQ0eiIgZmlsbD0iI2ZjZGQyZSIgZGF0YS1vcmlnaW5hbD0iI0ZDREQyRSIgY2xhc3M9IiIgZGF0YS1vbGRfY29sb3I9IiNmY2RkMmUiIHN0eWxlPSJmaWxsOiNFREVERUQiPjwvcGF0aD48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9Im0zMTYuMTYyIDE2Ny42ODVoLTE0Ljc4MWMtNC4yMzEgMC03LjY2MS0zLjQzLTcuNjYxLTcuNjYxczMuNDMtNy42NjEgNy42NjEtNy42NjFoMTQuNzgxYzQuMjMxIDAgNy42NjEgMy40MyA3LjY2MSA3LjY2MXMtMy40MyA3LjY2MS03LjY2MSA3LjY2MXoiIGZpbGw9IiNmY2RkMmUiIGRhdGEtb3JpZ2luYWw9IiNGQ0REMkUiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjZmNkZDJlIiBzdHlsZT0iZmlsbDojRURFREVEIj48L3BhdGg+PC9nPjxnPjxwYXRoIGQ9Im0yNi4yMTggMTY3LjY4NWgtMTQuNzgyYy00LjIzMSAwLTcuNjYxLTMuNDMtNy42NjEtNy42NjFzMy40My03LjY2MSA3LjY2MS03LjY2MWgxNC43ODJjNC4yMzEgMCA3LjY2MSAzLjQzIDcuNjYxIDcuNjYxcy0zLjQzIDcuNjYxLTcuNjYxIDcuNjYxeiIgZmlsbD0iI2ZjZGQyZSIgZGF0YS1vcmlnaW5hbD0iI0ZDREQyRSIgY2xhc3M9IiIgZGF0YS1vbGRfY29sb3I9IiNmY2RkMmUiIHN0eWxlPSJmaWxsOiNFREVERUQiPjwvcGF0aD48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9Im0yNzAuNjYyIDI3NC41NDhjLTEuOTYxIDAtMy45MjEtLjc0OC01LjQxNy0yLjI0NGwtOS41NzgtOS41NzhjLTIuOTkyLTIuOTkyLTIuOTkyLTcuODQzIDAtMTAuODM0IDIuOTkyLTIuOTkyIDcuODQzLTIuOTkyIDEwLjgzNCAwbDkuNTc4IDkuNTc4YzIuOTkyIDIuOTkyIDIuOTkyIDcuODQzIDAgMTAuODM0LTEuNDk2IDEuNDk2LTMuNDU2IDIuMjQ0LTUuNDE3IDIuMjQ0eiIgZmlsbD0iI2ZjZGQyZSIgZGF0YS1vcmlnaW5hbD0iI0ZDREQyRSIgY2xhc3M9IiIgZGF0YS1vbGRfY29sb3I9IiNmY2RkMmUiIHN0eWxlPSJmaWxsOiNFREVERUQiPjwvcGF0aD48L2c+PGc+PHBhdGggZD0ibTY2LjUxNCA3MC40MDFjLTEuOTYxIDAtMy45MjEtLjc0OC01LjQxNy0yLjI0NGwtMTAuNDUyLTEwLjQ1M2MtMi45OTItMi45OTItMi45OTItNy44NDMgMC0xMC44MzQgMi45OTItMi45OTIgNy44NDMtMi45OTIgMTAuODM0IDBsMTAuNDUzIDEwLjQ1M2MyLjk5MiAyLjk5MiAyLjk5MiA3Ljg0MyAwIDEwLjgzNC0xLjQ5NiAxLjQ5NS0zLjQ1NyAyLjI0NC01LjQxOCAyLjI0NHoiIGZpbGw9IiNmY2RkMmUiIGRhdGEtb3JpZ2luYWw9IiNGQ0REMkUiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjZmNkZDJlIiBzdHlsZT0iZmlsbDojRURFREVEIj48L3BhdGg+PC9nPjwvZz48L2c+PHBhdGggZD0ibTIxOS43NDEgMTQ4LjU5M2MtOC41MzYgMC0xMi44MTEtMTAuMzIxLTYuNzc1LTE2LjM1NiA0LjE4NC00LjE4NCA0LjE4NC0xMC45NjggMC0xNS4xNTNsLTQuMDY3LTQuMDY3Yy00LjE4NC00LjE4NC0xMC45NjgtNC4xODQtMTUuMTUzIDAtNi4wMzYgNi4wMzYtMTYuMzU3IDEuNzYxLTE2LjM1Ny02Ljc3NSAwLTUuOTE3LTQuNzk3LTEwLjcxNS0xMC43MTUtMTAuNzE1aC01Ljc1MmMtNS45MTcgMC0xMC43MTUgNC43OTctMTAuNzE1IDEwLjcxNSAwIDguNTM2LTEwLjMyMSAxMi44MTEtMTYuMzU2IDYuNzc1LTQuMTg0LTQuMTg0LTEwLjk2OC00LjE4NC0xNS4xNTMgMGwtNC4wNjcgNC4wNjdjLTQuMTg0IDQuMTg0LTQuMTg0IDEwLjk2OCAwIDE1LjE1MyA2LjAzNiA2LjAzNiAxLjc2MSAxNi4zNTYtNi43NzUgMTYuMzU2LTUuOTE3IDAtMTAuNzE1IDQuNzk3LTEwLjcxNSAxMC43MTV2NS43NTJjMCA1LjkxNyA0Ljc5NyAxMC43MTUgMTAuNzE1IDEwLjcxNSA4LjUzNiAwIDEyLjgxMSAxMC4zMjEgNi43NzUgMTYuMzU3LTQuMTg0IDQuMTg0LTQuMTg0IDEwLjk2OCAwIDE1LjE1M2w0LjA2NyA0LjA2N2M0LjE4NCA0LjE4NCAxMC45NjggNC4xODQgMTUuMTUzIDAgNi4wMzYtNi4wMzYgMTYuMzU2LTEuNzYxIDE2LjM1NiA2Ljc3NSAwIDUuOTE3IDQuNzk3IDEwLjcxNSAxMC43MTUgMTAuNzE1aDUuNzUyYzUuOTE3IDAgMTAuNzE1LTQuNzk3IDEwLjcxNS0xMC43MTUgMC04LjUzNiAxMC4zMjEtMTIuODExIDE2LjM1Ny02Ljc3NSA0LjE4NCA0LjE4NCAxMC45NjggNC4xODQgMTUuMTUzIDBsNC4wNjctNC4wNjdjNC4xODQtNC4xODQgNC4xODQtMTAuOTY4IDAtMTUuMTUzLTYuMDM2LTYuMDM2LTEuNzYxLTE2LjM1NyA2Ljc3NS0xNi4zNTcgNS45MTggMCAxMC43MTUtNC43OTcgMTAuNzE1LTEwLjcxNXYtNS43NTJjMC01LjkxOC00Ljc5Ny0xMC43MTUtMTAuNzE1LTEwLjcxNXptLTU1Ljk0MiAzMi41MjRjLTEwLjQ1NyAwLTE4LjkzNC04LjQ3Ny0xOC45MzQtMTguOTM0czguNDc3LTE4LjkzNCAxOC45MzQtMTguOTM0IDE4LjkzNCA4LjQ3NyAxOC45MzQgMTguOTM0LTguNDc3IDE4LjkzNC0xOC45MzQgMTguOTM0eiIgZmlsbD0iI2Q1YjBlYyIgZGF0YS1vcmlnaW5hbD0iI0Q1QjBFQyIgY2xhc3M9IiIgZGF0YS1vbGRfY29sb3I9IiNkNWIwZWMiIHN0eWxlPSJmaWxsOiMxMkEzRDAiPjwvcGF0aD48L2c+PC9nPjxwYXRoIGQ9Im0yMTIuNzM3IDI5My40NjVoLTQxLjUyYzUuNDA1IDAgOS43ODggNC4zODIgOS43ODggOS43ODh2MzYuOTg1YzAgNS40MDUtNC4zODIgOS43ODgtOS43ODggOS43ODhoNDEuNTJjNS40MDUgMCA5Ljc4Ny00LjM4MiA5Ljc4Ny05Ljc4OHYtMzYuOTg1YzAtNS40MDUtNC4zODItOS43ODgtOS43ODctOS43ODh6IiBmaWxsPSIjZGFlYWVmIiBkYXRhLW9yaWdpbmFsPSIjREFFQUVGIiBjbGFzcz0iIiBzdHlsZT0iZmlsbDojMTJBM0QwIiBkYXRhLW9sZF9jb2xvcj0iI2RhZWFlZiI+PC9wYXRoPjwvZz48L2c+IDwvc3ZnPg==" />
                        <p style="font-family: Calibri;font-size: 25px;color:#12A3D0;margin:0">Yetenekler</p>
                    </div>
                    <div style="display: flex;justify-content: center">
                        <div>
                            <p style="text-align:start;margin:2px;font-family: Calibri;color:#505050;font-size: 19px">JavaScript</p>
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
                        <img height="40px" style="position: absolute;top:0;left:155px" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTI4IDUxMi4wMDAwMiA1MTIiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNDcxLjM4MjgxMiA0NC41NzgxMjVjLTI2LjUwMzkwNi0yOC43NDYwOTQtNjIuODcxMDkzLTQ0LjU3ODEyNS0xMDIuNDEwMTU2LTQ0LjU3ODEyNS0yOS41NTQ2ODcgMC01Ni42MjEwOTQgOS4zNDM3NS04MC40NDkyMTggMjcuNzY5NTMxLTEyLjAyMzQzOCA5LjMwMDc4MS0yMi45MTc5NjkgMjAuNjc5Njg4LTMyLjUyMzQzOCAzMy45NjA5MzgtOS42MDE1NjItMTMuMjc3MzQ0LTIwLjUtMjQuNjYwMTU3LTMyLjUyNzM0NC0zMy45NjA5MzgtMjMuODI0MjE4LTE4LjQyNTc4MS01MC44OTA2MjUtMjcuNzY5NTMxLTgwLjQ0NTMxMi0yNy43Njk1MzEtMzkuNTM5MDYzIDAtNzUuOTEwMTU2IDE1LjgzMjAzMS0xMDIuNDE0MDYzIDQ0LjU3ODEyNS0yNi4xODc1IDI4LjQxMDE1Ni00MC42MTMyODEgNjcuMjIyNjU2LTQwLjYxMzI4MSAxMDkuMjkyOTY5IDAgNDMuMzAwNzgxIDE2LjEzNjcxOSA4Mi45Mzc1IDUwLjc4MTI1IDEyNC43NDIxODcgMzAuOTkyMTg4IDM3LjM5NDUzMSA3NS41MzUxNTYgNzUuMzU1NDY5IDEyNy4xMTcxODggMTE5LjMxMjUgMTcuNjEzMjgxIDE1LjAxMTcxOSAzNy41NzgxMjQgMzIuMDI3MzQ0IDU4LjMwODU5MyA1MC4xNTIzNDQgNS40NzY1NjMgNC43OTY4NzUgMTIuNTAzOTA3IDcuNDM3NSAxOS43OTI5NjkgNy40Mzc1IDcuMjg1MTU2IDAgMTQuMzE2NDA2LTIuNjQwNjI1IDE5Ljc4NTE1Ni03LjQyOTY4NyAyMC43MzA0NjktMTguMTI4OTA3IDQwLjcwNzAzMi0zNS4xNTIzNDQgNTguMzI4MTI1LTUwLjE3MTg3NiA1MS41NzQyMTktNDMuOTQ5MjE4IDk2LjExNzE4OC04MS45MDYyNSAxMjcuMTA5Mzc1LTExOS4zMDQ2ODcgMzQuNjQ0NTMyLTQxLjgwMDc4MSA1MC43NzczNDQtODEuNDM3NSA1MC43NzczNDQtMTI0Ljc0MjE4NyAwLTQyLjA2NjQwNy0xNC40MjU3ODEtODAuODc4OTA3LTQwLjYxNzE4OC0xMDkuMjg5MDYzem0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzEyQTNEMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                        <p style="font-family: Calibri;font-size: 25px;color:#12A3D0;margin:0">İlgi Alanları</p>
                    </div>
                    <div style="display: flex;justify-content: center">
                        <div>
                            <p style="margin:2px;font-family: Calibri;color:#505050;font-size: 19px">Kampçılık</p>
                            <p style="margin:2px;font-family: Calibri;color:#505050;font-size: 19px">Film</p>
                            <p style="margin:2px;font-family: Calibri;color:#505050;font-size: 19px">Oyun</p>
                            <p style="margin:2px;font-family: Calibri;color:#505050;font-size: 19px">Kitap</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>





    </div>
            `
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
                        <Text style={styles.buttoknText}>Çıkar</Text>
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
                    <Text>pdf dönüştür/////{helper.selectedOrderCV}</Text>
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
