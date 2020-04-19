import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Picker, ScrollView, Dimensions, PermissionsAndroid, Platform, FlatList } from 'react-native';
import SImage from 'react-native-scalable-image';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { observer } from 'mobx-react';
import AlertPro from "react-native-alert-pro";


import styles from '../styles/cvFormStyle';
import helper from '../controllers/helper';

const h = Dimensions.get('window').height;



class Example extends React.Component {
    state = {
        filePath: ''
    };
    constructor(props) {
        super(props);
    }

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

        let options = {
            //Content to print
            html: '<img src=${`${this.state.photoSource}`} width="500" height="333"/>'
            ,
            //File Name
            fileName: 'denesene',
            //File directory
            directory: 'docs',
        };
        let file = await RNHTMLtoPDF.convert(options);
        alert(file.filePath);
        this.setState({ filePath: file.filePath });
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
        setInterval(() => {
            let color = Math.floor(Math.random() * 4)
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
            userGender: 'Erkek',
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

            hidden: false,
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


            color: '#47ceff'
        }
    }


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
        RNHTMLtoPDF.convert
        this.setState({ hidden: !this.state.hidden })
        if (this.state.hidden) {
            this.setState({ userBirthDay: '' })
            this.setState({ userGender: '' })
            this.setState({ userDrivingLicence: '' })
            this.setState({ userLink: '' })
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
                    photoSource: source,
                });

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
            <View style={{ width: '100%', marginBottom: 10, marginTop: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
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
    ////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////

    ////////listeleri çıkaran fonksyonlar////////////////////////
    removeHobby(v) {
        helper.userHobbies.splice(v.index, 1)
        this.setState({ userHobby: hobby })
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
    pushdrivingLicence(v) {

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
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.pushdrivingLicence('A')}><Text style={styles.drivingLicence}>+ A</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.pushdrivingLicence('AM')}><Text style={styles.drivingLicence}>+ AM</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.pushdrivingLicence('B')}><Text style={styles.drivingLicence}>+ B</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.pushdrivingLicence('BE')}><Text style={styles.drivingLicence}>+ BE</Text></TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.pushdrivingLicence('C')}><Text style={styles.drivingLicence}>+ C</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.pushdrivingLicence('CE')}><Text style={styles.drivingLicence}>+ CE</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.pushdrivingLicence('C1')}><Text style={styles.drivingLicence}>+ C1</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.pushdrivingLicence('C1E')}><Text style={styles.drivingLicence}>+ C1E</Text></TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.pushdrivingLicence('D')}><Text style={styles.drivingLicence}>+ D</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.pushdrivingLicence('DE')}><Text style={styles.drivingLicence}>+ DE</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.pushdrivingLicence('D1')}><Text style={styles.drivingLicence}>+ D1</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.pushdrivingLicence('D1E')}><Text style={styles.drivingLicence}>+ D1E</Text></TouchableOpacity>
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
                    <Text style={{ color: '#B0B0B0' }}>Daha fazla...</Text>
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
                        style={{ width: '100%', marginTop: 5, }}
                        data={helper.userSchools}
                        renderItem={data => this.setSchools(data)}
                        showsVerticalScrollIndicator={false}
                    />

                    <View style={{ width: '90%', alignItems: 'center' }}>
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
                        style={{ width: '100%', marginTop: 5, }}
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
