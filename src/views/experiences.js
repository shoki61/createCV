import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput,Picker, ScrollView, Dimensions, FlatList } from 'react-native';
import SImage from 'react-native-scalable-image';
import DatePicker from 'react-native-datepicker';
import { observer } from 'mobx-react';
import AlertPro from "react-native-alert-pro";
import CheckBox from 'react-native-check-box';
import * as Animatable from 'react-native-animatable';


import styles from '../styles/cvFormStyle';
import helper from '../controllers/helper';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;


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
    schoolFinishDate: '',

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
        <View style={[styles.abilityInput, { paddingLeft: 0, width: '65%' }]}>
            <Picker
                selectedValue={selectedValue}
                itemStyle={{ color: 'green', fontSize: 10 }}
                style={{
                    width: '100%', height: 35, color: 'grey', transform: [
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
        <View style={[styles.abilityInput, { paddingLeft: 0, width: '65%' }]}>
            <Picker
                selectedValue={selectedValue}
                itemStyle={{ color: 'green', fontSize: 10 }}
                style={{
                    width: '100%', height: 35, color: 'grey', transform: [
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
                <Picker.Item label="Profesyonel" value="Profesyonel" />
            </Picker>
        </View>
    )
}
function SchoolGrade() {
    const [selectedValue, setSelectedValue] = useState("Lisans");
    school.schoolGrade = selectedValue
    return (
        <View style={{ width: '100%' }}>
            <Picker
                selectedValue={selectedValue}
                itemStyle={{ color: 'green', fontSize: 10 }}
                style={{ width: '90%', height: 35, color: 'grey' }}
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


const Experiences = () => {

    
    
    const renderProgressBar = () => {
        return (
            <View style={styles.progressBarView}>
                <View style={[styles.progressBarIconContainer, this.state.showPersonalInformation ? { width: 65, height: 65, borderWidth: 3, borderColor: '#fff', elevation: 20, top: -30 } : { top: -18 }]}>
                    <SImage width={20} source={require('../images/checkIcon.png')} />
                </View>
                <View style={{ width: '50%', height: 5,backgroundColor: '#399eff'  }}>
                </View>
                <View style={[styles.progressBarIconContainer,{width: 65, height: 65, borderWidth: 3, borderColor: '#fff', elevation: 20, top: -30, left: '40%' }]}>
                    <SImage width={35} source={require('../images/cvProgressBar.png')} />
                </View >

                <View style={[{ width: '50%', height: 5 }, helper.userSchools.length <= 0 || helper.userAbilities.length <= 0 ? { backgroundColor: '#e0e0e0' } : { backgroundColor: '#399eff' }]}></View>
                <View style={[styles.progressBarIconContainer, { top: -18, right: 0 }, helper.userSchools.length <= 0 || helper.userAbilities.length <= 0 ? { backgroundColor: '#e0e0e0' } : {}]}>
                    <SImage width={17} source={require('../images/downloadProgressBar.png')} />
                </View>
            </View>

        )
    }
    
    const setReferences = (item) => {
        return (
            <View style={{ width: '100%', borderBottomColor: 'lightgrey', borderBottomWidth: 1, paddingBottom: 10, marginBottom: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-end', marginTop: 10, paddingLeft: 15, paddingRight: 15 }}>
                <View style={{ width: '100%' }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.referansText, { width: '49%' }]} numberOfLines={1} >{item.item.name}</Text>
                        <Text style={[styles.referansText, { width: '49%' }]} numberOfLines={1} >{item.item.tel}</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        {
                            item.item.companyName !== '' &&
                            <Text style={styles.referansText} numberOfLines={1} >{item.item.companyName}</Text>
                        }
                        <Text style={[styles.referansText, item.item.companyName === '' && { width: '78%' }]} numberOfLines={1} >{item.item.email}</Text>
                        <TouchableOpacity onPress={() => this.removeReference(item)} style={[styles.removeAbilityButton, { marginTop: 7 }]}>
                            <Text style={styles.buttonText}>Çıkar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
    const setHobbies = (item) => {
        return (
            <Animatable.View animation="fadeInUp" duration={300} style={styles.abilityContainer}>
                <Text style={styles.hobbyText} numberOfLines={1}>{item.item.hobby}</Text>
                <TouchableOpacity onPress={() => this.removeHobby(item)} style={styles.removeAbilityButton}>
                    <Text style={styles.buttonText}>Çıkar</Text>
                </TouchableOpacity>
            </Animatable.View>
        )
    }
    const setAbilities = (v) => {
        return (
            <Animatable.View animation="fadeInUp" duration={300}  style={styles.abilityContainer}>
                <Text style={styles.abilityText} numberOfLines={1}>{v.item.name}</Text>
                <Text style={styles.abilityGradeText}>{v.item.level}</Text>
                <TouchableOpacity onPress={() => this.removeAbility(v)} style={styles.removeAbilityButton}>
                    <Text style={styles.buttonText}>Çıkar</Text>
                </TouchableOpacity>
            </Animatable.View>
        )
    }
    const setLanguage = (v) => {
        return (
            <Animatable.View animation="fadeInUp" duration={300}  style={styles.abilityContainer}>
                <Text style={styles.abilityText} numberOfLines={1}>{v.item.name}</Text>
                <Text style={styles.abilityGradeText}>{v.item.level}</Text>
                <TouchableOpacity onPress={() => this.removeLanguage(v)} style={styles.removeAbilityButton}>
                    <Text style={styles.buttonText}>Çıkar</Text>
                </TouchableOpacity>
            </Animatable.View>
        )
    }
    const setSchools = (item) => {
        return (
            <View style={[{ width: '100%', justifyContent: 'center', alignItems: 'center' }, helper.userSchools && { marginBottom: 10, marginTop: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 1, }]}>
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
    const setCompanies = (item) => {
        return (
            <View style={{ width: '100%', marginBottom: 10, marginTop: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 1, alignItems: 'center' }}>
                <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.companyName}</Text>
                <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.companyJob}</Text>
                {
                    item.item.companyDescription !== '' &&
                    <Text style={styles.descriptionText}>{item.item.companyDescription}</Text>
                }
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                    <Text style={[styles.schoolInfoText, { width: '75%' }]}>{item.item.companyStartDate} / {item.item.companyFinishDate}</Text>
                    <TouchableOpacity onPress={() => this.removeCompany(item)} style={styles.removeAbilityButton}>
                        <Text style={styles.buttonText}>Çıkar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const setProjects = (item) => {
        return (
            <View style={{ width: '100%', marginBottom: 10, marginTop: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 1, alignItems: 'center' }}>
                <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.projectName}</Text>
                {
                    item.item.projectTools !== '' &&
                    <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.projectTools}</Text>
                }
                <ScrollView style={{
                    width: '90%',
                    borderRadius: 3,
                    borderWidth: 1,
                    borderColor: '#DADADA',
                    padding: 10,
                    marginBottom: 10,
                }}><Text style={{ textAlignVertical: 'top', color: '#6b6b6b' }}>{item.item.projectDescription}</Text></ScrollView>
                <View style={[{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }, item.item.projectLink === '' && { justifyContent: 'flex-end', paddingBottom: 10 }]}>
                    {
                        item.item.projectLink !== '' &&
                        <Text style={[styles.schoolInfoText, { width: '75%' }]} numberOfLines={1}>{item.item.projectLink}</Text>
                    }
                    <TouchableOpacity onPress={() => this.removeProject(item)} style={styles.removeAbilityButton}>
                        <Text style={styles.buttonText}>Çıkar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const setCommunities = (item) => {
        return (
            <View style={{ width: '100%', marginBottom: 10, marginTop: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 1, alignItems: 'center' }}>
                <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.communityName}</Text>
                <Text style={styles.schoolInfoText} numberOfLines={1}>{item.item.communityTitle}</Text>
                {
                    item.item.communityDescription !== '' &&
                    <ScrollView style={{
                        width: '90%',
                        borderRadius: 3,
                        borderWidth: 1,
                        borderColor: '#DADADA',
                        padding: 10,
                        marginBottom: 10,
                    }}><Text style={{ textAlignVertical: 'top', color: '#6b6b6b' }}>{item.item.communityDescription}</Text></ScrollView>
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
    

    const removeHobby = (v) => {
        helper.userHobbies.splice(v.index, 1)
        this.setState({ userHobby: hobby })
    }
    const removeReference = (v) => {
        helper.userReferences.splice(v.index, 1)
        this.setState({ userReferenceName: reference.name })
    }
    const removeLanguage = (v) => {
        helper.UserLanguages.splice(v.index, 1)
        this.setState({ userLanguage: language })
    }
    const removeAbility = (v) => {
        helper.userAbilities.splice(v.index, 1)
        this.setState({ userAbility: ability })
    }
    const removeSchool = (v) => {
        helper.userSchools.splice(v.index, 1)
        this.setState({ userSchoolName: school.schoolName })
    }
    const removeCommunity = (v) => {
        helper.userCommunities.splice(v.index, 1)
        this.setState({ userCommunityName: community.communityName })
    }
    const removeProject = (v) => {
        helper.userProjects.splice(v.index, 1)
        this.setState({ userProjectName: project.projectName })
    }
    const removeCompany = (v) => {
        helper.userCompanies.splice(v.index, 1)
        this.setState({ userCompanyName: company.companyName })
    }

    const controlAbility = () => {
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
    const controlLanguage = () => {
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
    const controlHobby = () => {
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
    const controlReference = () => {
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
                showReferenceInput: false,

                warningReferenceName: false,
                warningReferenceTel: false,
                warningReferenceEmail: false,
            });
            reference.name = '';
            reference.tel = '';
            reference.email = '';
            reference.companyName = '';
        }
    }
    const controlProject = () => {
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
                showProjectInput: false,

                warningProjectName: false,
                warningProjectDescription: false
            });
            project.projectName = '';
            project.projectTools = '';
            project.projectLink = '';
            project.projectDescription = '';
        }
    }
    const controlCompany = () => {
        if (company.companyName === '' || company.companyJob === '' || company.companyStartDate === '' || company.companyFinishDate === '' ) {
            if (company.companyName === '') this.setState({ warningCompanyName: true })
            if (company.companyJob === '') this.setState({ warningCompanyJob: true })
            if (company.companyStartDate === '' || company.companyFinishDate === '') this.setState({ warningCompanyDate: true })
        } else {
            helper.setUserCompanies(company, this.state.color);
            this.setState({
                userCompanyName: '',
                userCompanyJob: '',
                userCompanyStartDate: '',
                userCompanyFinishDate: '',
                userCompanyDescription: '',
                showCompanyInput: false,

                warningCompanyName: false,
                warningCompanyJob: false,
                warningCompanyDate: false,
            });
            company.companyName = '';
            company.companyJob = '';
            company.companyStartDate = '';
            company.companyFinishDate = '';
            company.companyDescription = '';
        }
    }
    const controlSchool = () => {
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
                userSchoolContinuation: '',
                userSchoolContinuesState: false,
                showSchoolInput: false,

                warningSchoolName: false,
                warningSchoolDepartment: false,
                warningSchoolDate: false,
            });
            school.schoolName = '';
            school.schoolDepartment = '';
            school.schoolStartDate = '';
            school.schoolFinishDate = '';
            school.schoolContinues = ''

        }
    }
    const controlCommunity = () => {
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
                showCommunityInput: false,

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
    
    const continuesFunc = async (v) => {
        if (v === 'school') {
            await this.setState({ userSchoolContinuesState: !this.state.userSchoolContinuesState });
            await this.setState({ userSchoolContinues: `${this.state.userSchoolContinuesState === true ? 'Devam ediyor' : ''}`, userSchoolFinishDate: '' })
            school.schoolFinishDate = this.state.userSchoolContinues;
        }
        else if (v === 'company') {
            await this.setState({ userCompanyContinuesState: !this.state.userCompanyContinuesState });
            await this.setState({ userCompanyContinues: `${this.state.userCompanyContinuesState === true ? 'Devam ediyor' : ''}`, userCompanyFinishDate: '' })
            company.companyFinishDate = this.state.userCompanyContinues;
        } else {
            await this.setState({ userCommunityContinuesState: !this.state.userCommunityContinuesState });
            await this.setState({ userCommunityContinues: `${this.state.userCommunityContinuesState === true ? 'Devam ediyor' : ''}`, userCommunityFinishDate: '' })
            community.communityFinishDate = this.state.userCommunityContinues;
        }

    }

    const controlNavigation = () => {
        if(helper.userSchools.length <= 0 || helper.userAbilities.length <= 0) this.AlertPro.open()
        else this.props.navigation.navigate('saveCV')
    }

    const renderExperiences = () => {

        return (
            <View style={{ width: '100%', marginTop: 80, alignItems: 'center' }}>

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

                    {
                        !this.state.showSchoolInput &&
                        <TouchableOpacity onPress={() => this.setState({ showSchoolInput: true, autoSchool: true })}>
                            <SImage width={35} source={require('../images/addIcon.png')} />
                        </TouchableOpacity>
                    }
                    {
                        this.state.showSchoolInput &&

                        <View style={{ width: '90%', alignItems: 'center', paddingTop: 10 }}>
                            <Text style={styles.infoTitle}>Okul/Fakülte</Text>
                            <View style={[styles.experiencesInputView, this.state.warningSchoolName && school.schoolName === '' && { borderColor: 'red' }]}>
                                <SImage width={23} source={require('../images/school.png')} />
                                <TextInput
                                    autoFocus={this.state.autoSchool}
                                    value={school.name}
                                    placeholder='...'
                                    autoCapitalize='words'
                                    onChangeText={text => school.schoolName = text}
                                    style={styles.infoInput} />
                            </View>

                            <Text style={styles.infoTitle}>Bölüm</Text>
                            <View style={[styles.experiencesInputView, this.state.warningSchoolDepartment && school.schoolDepartment === '' && { borderColor: 'red' }]}>
                                <SImage width={23} source={require('../images/department.png')} />
                                <TextInput
                                    placeholder='...'
                                    autoCapitalize='words'
                                    value={this.state.userSchoolDepartment}
                                    onChangeText={text => { school.schoolDepartment = text; this.setState({ userSchoolDepartment: text }) }}
                                    style={styles.infoInput} />
                            </View>

                            <Text style={styles.infoTitle}>Derece</Text>
                            <View style={[styles.experiencesInputView, this.state.warningSchoolGrade && school.schoolGrade === '' && { borderColor: 'red' }]}>
                                <SImage width={23} source={require('../images/degree.png')} />
                                <SchoolGrade />
                            </View>


                            <Text style={styles.infoTitle}>{this.state.userSchoolContinuesState ? 'Başlangıç tarihi' : 'Başlangıç ve bitiş tarihi'}</Text>
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={[styles.experiencesInputView, this.state.warningSchoolDate && school.schoolStartDate === '' && { borderColor: 'red' }, this.state.warningSchoolDate && school.schoolFinishDate === '' && { borderColor: 'red' }]}>
                                    <SImage width={23} source={require('../images/calendar.png')} />
                                    <DatePicker
                                        androidMode='spinner'
                                        style={[styles.infoInput, { width: 50, marginBottom: 5, }]}
                                        date={school.schoolStartDate}
                                        showIcon={false}
                                        placeholder='YYYY'
                                        mode="date"
                                        format="YYYY"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            placeholderText: {
                                                color: '#8D8D8D',
                                                width: '100%',
                                            },
                                            dateInput: {
                                                borderWidth: 0,

                                            },
                                            dateText: {
                                                width: '100%',
                                                color: '#8D8D8D',
                                            }
                                        }}
                                        onDateChange={(date) => { school.schoolStartDate = date; this.setState({ userSchoolStartDate: date }) }}
                                    />
                                    {
                                        !this.state.userSchoolContinuesState &&
                                        <>
                                            <Text style={{ fontSize: 18, color: '#737373', marginRight: 10 }}>/</Text>
                                            <DatePicker
                                                androidMode='spinner'
                                                style={[styles.infoInput, { width: 50, marginBottom: 5, paddingLeft: 0 }]}
                                                date={this.state.userSchoolFinishDate}
                                                showIcon={false}
                                                placeholder='YYYY'
                                                mode="date"
                                                format="YYYY"
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"
                                                customStyles={{
                                                    placeholderText: {
                                                        color: '#8D8D8D',
                                                        width: '100%',
                                                    },
                                                    dateInput: {
                                                        borderWidth: 0,
                                                    },
                                                    dateText: {
                                                        color: '#8D8D8D',
                                                        width: '100%',
                                                    }
                                                }}
                                                onDateChange={(date) => { school.schoolFinishDate = date; this.setState({ userSchoolFinishDate: date }) }}
                                            />
                                        </>
                                    }

                                </View>
                            </View>
                            <View style={{ width: '100%' }}>
                                <CheckBox
                                    style={{ flex: 1 }}
                                    onClick={() => this.continuesFunc('school')}
                                    isChecked={this.state.userSchoolContinuesState}
                                    checkBoxColor={'#0a8fbf'}
                                    rightText={'Devam ediyorum'}
                                    rightTextStyle={styles.checkBoxText}
                                />
                            </View>
                            <View style={{ width: '100%', alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={() => this.controlSchool()} style={[styles.linkAddButton, { marginTop: 10, right: 0 }]}>
                                    <Text style={styles.buttonText}>Ekle</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    }


                </View>

                {/*Iş deneyimi kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, marginTop: 15 }}>
                    <SImage width={35} source={require('../images/work.png')} />
                    <Text style={styles.inputTitle}>İş deneyimi</Text>
                </View>
                <View style={styles.infoContainer}>
                    <FlatList
                        style={[{ width: '100%' }, helper.userCompanies.length > 0 && { marginBottom: 15 }]}
                        data={helper.userCompanies}
                        renderItem={data => this.setCompanies(data)}
                        showsVerticalScrollIndicator={false}
                    />

                    {
                        !this.state.showCompanyInput &&
                        <TouchableOpacity onPress={() => this.setState({ showCompanyInput: true, autoCompany: true })}>
                            <SImage width={35} source={require('../images/addIcon.png')} />
                        </TouchableOpacity>
                    }
                    {
                        this.state.showCompanyInput &&

                        <View style={{ width: '90%', alignItems: 'center' }}>
                            <Text style={styles.infoTitle}>İş yeri</Text>
                            <View style={[styles.experiencesInputView, this.state.warningCompanyName && this.state.userCompanyName === '' && { borderColor: 'red' }]}>
                                <SImage width={23} source={require('../images/workplace.png')} />
                                <TextInput
                                    autoFocus={this.state.autoCompany}
                                    value={this.state.userCompanyName}
                                    placeholder='...'
                                    autoCapitalize='characters'
                                    onChangeText={(text) => { company.companyName = text; this.setState({ userCompanyName: text }) }}
                                    style={styles.infoInput} />
                            </View>

                            <Text style={styles.infoTitle}>Meslek</Text>
                            <View style={[styles.experiencesInputView, this.state.warningCompanyJob && this.state.userCompanyJob === '' && { borderColor: 'red' }]}>
                                <SImage width={23} source={require('../images/manager.png')} />
                                <TextInput
                                    placeholder='...'
                                    autoCapitalize='words'
                                    value={this.state.userCompanyJob}
                                    onChangeText={(text) => { company.companyJob = text; this.setState({ userCompanyJob: text }) }}
                                    style={styles.infoInput} />
                            </View>


                            <Text style={styles.infoTitle}>Başlangıç ve bitiş tarihi</Text>
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={[styles.experiencesInputView, this.state.warningCompanyDate && company.companyStartDate === '' && { borderColor: 'red' }, this.state.warningCompanyDate && company.companyFinishDate === '' && { borderColor: 'red' }]}>
                                    <SImage width={20} source={require('../images/calendar.png')} />
                                    <DatePicker
                                        androidMode='spinner'
                                        style={[styles.infoInput, { width: 70, marginBottom: 5, }]}
                                        date={company.companyStartDate}
                                        showIcon={false}
                                        placeholder='AA.YYYY'
                                        mode="date"
                                        format="MM.YYYY"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            placeholderText: {
                                                color: '#8D8D8D',
                                                width: '100%',
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
                                    {
                                        !this.state.userCompanyContinuesState &&
                                        <>
                                            <Text style={{ fontSize: 18, color: '#737373', marginRight: 10 }}>/</Text>
                                            <DatePicker
                                                androidMode='spinner'
                                                style={[styles.infoInput, { width: 70, marginBottom: 5, paddingLeft: 0 }]}
                                                date={this.state.userCompanyFinishDate}
                                                showIcon={false}
                                                placeholder='AA.YYYY'
                                                mode="date"
                                                format="MM.YYYY"
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"
                                                customStyles={{
                                                    placeholderText: {
                                                        color: '#8D8D8D',
                                                    },
                                                    dateInput: {
                                                        borderWidth: 0,
                                                    },
                                                    dateText: {
                                                        color: '#8D8D8D',
                                                    }
                                                }}
                                                onDateChange={(date) => { company.companyFinishDate = date; this.setState({ userCompanyFinishDate: date }) }}
                                            />
                                        </>
                                    }
                                </View>

                            </View>
                            <View style={{ width: '100%', marginBottom: 10 }} >
                                <CheckBox
                                    style={{ flex: 1, marginLeft: 0 }}
                                    onClick={() => this.continuesFunc('company')}
                                    isChecked={this.state.userCompanyContinuesState}
                                    checkBoxColor={'#0a8fbf'}
                                    rightText={'Devam ediyorum'}
                                    rightTextStyle={styles.checkBoxText}
                                />
                            </View>


                            <Text style={styles.infoTitle}>Açıklama</Text>
                            <View style={styles.experiencesDescInputView}>
                                <SImage width={23} source={require('../images/comment.png')} />
                                <TextInput
                                    value={this.state.userCompanyDescription}
                                    onChangeText={(text) => { company.companyDescription = text; this.setState({ userCompanyDescription: text }) }}
                                    multiline={true}
                                    numberOfLines={4}
                                    placeholder={'...'}
                                    style={styles.descriptionInput} />
                            </View>
                            <View style={{ width: '100%', alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={() => this.controlCompany()} style={[styles.linkAddButton, { marginTop: 10 }]}>
                                    <Text style={styles.buttonText}>Ekle</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }

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

                    {
                        !this.state.showProjectInput &&
                        <TouchableOpacity onPress={() => this.setState({ showProjectInput: true, autoProject: true })}>
                            <SImage width={35} source={require('../images/addIcon.png')} />
                        </TouchableOpacity>
                    }
                    {
                        this.state.showProjectInput &&
                        <View style={{ width: '90%', alignItems: 'center' }}>
                            <Text style={styles.infoTitle}>Proje adı</Text>
                            <View style={[styles.experiencesInputView, this.state.warningProjectName && project.projectName === '' && { borderColor: 'red' }]}>
                                <SImage width={23} source={require('../images/projectName.png')} />
                                <TextInput
                                    autoFocus={this.state.autoProject}
                                    placeholder='...'
                                    autoCapitalize='words'
                                    value={this.state.userProjectName}
                                    onChangeText={(text) => { project.projectName = text; this.setState({ userProjectName: text }) }}
                                    style={styles.infoInput} />
                            </View>

                            <Text style={styles.infoTitle}>Araçlar</Text>
                            <View style={styles.experiencesInputView}>
                                <SImage width={23} source={require('../images/tools.png')} />
                                <TextInput
                                    placeholder='...'
                                    autoCapitalize='words'
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
                                    autoCapitalize='none'
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
                            <View style={{ width: '90%', alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={() => this.controlProject()} style={[styles.linkAddButton, { marginTop: 10 }]}>
                                    <Text style={styles.buttonText}>Ekle</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }

                </View>


                {/*Yetenekler kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, marginTop: 15 }}>
                    <SImage width={40} source={require('../images/abilityTitle.png')} />
                    <Text style={styles.inputTitle}>Yetenekler <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <FlatList
                            style={[, helper.userAbilities.length > 0 && { width: '100%', marginTop: 10 }]}
                            data={helper.userAbilities}
                            renderItem={data => this.setAbilities(data)}
                            showsVerticalScrollIndicator={false}
                        />

                        <View style={styles.chooseTalentContainer}>
                            <View style={{ width: '100%' }}>
                                <Text style={styles.chooseTalentTitle}>Yetenek gir</Text>
                                <TextInput
                                    placeholder='...'
                                    value={this.state.userAbility}
                                    onChangeText={(text) => { ability.name = text; this.setState({ userAbility: text }) }}
                                    style={[styles.abilityInput, this.state.warningAbility && ability.name === '' && { borderColor: 'red' }]} />


                            </View>
                            <View style={{ width: '100%', }}>
                                <Text style={styles.chooseTalentTitle}>Seviye seç</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Ability />
                                    <TouchableOpacity onPress={() => this.controlAbility()} style={styles.selectAbilityButton}>
                                        <Text style={styles.buttonText}>Ekle</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

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
                            style={helper.UserLanguages.length > 0 && { width: '100%', marginTop: 10 }}
                            data={helper.UserLanguages}
                            renderItem={data => this.setLanguage(data)}
                            showsVerticalScrollIndicator={false}
                        />


                        <View style={styles.chooseTalentContainer}>
                            <View style={{ width: '100%' }}>
                                <Text style={styles.chooseTalentTitle}>Dil gir</Text>
                                <TextInput
                                    value={this.state.userLanguage}
                                    placeholder='...'
                                    onChangeText={(text) => { language.name = text; this.setState({ userLanguage: text }) }}
                                    style={[styles.abilityInput, this.state.warningLanguage && language.name === '' && { borderColor: 'red' }]} />

                            </View>
                            <View style={{ width: '100%' }}>
                                <Text style={styles.chooseTalentTitle}>Seviye seç</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Language />
                                    <TouchableOpacity onPress={() => this.controlLanguage()} style={styles.selectAbilityButton}>
                                        <Text style={styles.buttonText}>Ekle</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>


                {/*Ilgi alanı kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, marginTop: 15 }}>
                    <SImage width={40} source={require('../images/heart.png')} />
                    <Text style={styles.inputTitle}>İlgi alanları</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={{ width: '100%', alignItems: 'center' }}>

                        <FlatList
                            style={{ width: '100%', marginTop:helper.userHobbies.length !== 0 ? 10:0 }}
                            data={helper.userHobbies}
                            renderItem={data => this.setHobbies(data)}
                            showsVerticalScrollIndicator={false}
                        />

                        <View style={[styles.chooseTalentContainer, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', }]}>
                            <View style={{ width: '72%' }}>
                                <Text style={styles.chooseTalentTitle}>İlgi alanı gir</Text>
                                <TextInput
                                    value={this.state.userHobby}
                                    placeholder='tek tek ekleyiniz...'
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
                    {
                        !this.state.showCommunityInput &&
                        <TouchableOpacity onPress={() => this.setState({ showCommunityInput: true, autoCommunity: true })}>
                            <SImage width={35} source={require('../images/addIcon.png')} />
                        </TouchableOpacity>
                    }
                    {
                        this.state.showCommunityInput &&
                        <View style={{ width: '90%', alignItems: 'center' }}>
                            <Text style={styles.infoTitle}>Topluluk adı</Text>
                            <View style={[styles.experiencesInputView, this.state.warningCommunityName && community.communityName === '' && { borderColor: 'red' }]}>
                                <SImage width={23} source={require('../images/community.png')} />
                                <TextInput
                                    autoCapitalize='characters'
                                    autoFocus={this.state.autoCommunity}
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
                                    autoCapitalize='none'
                                    value={this.state.userCommunityTitle}
                                    onChangeText={(text) => { community.communityTitle = text; this.setState({ userCommunityTitle: text }) }}
                                    style={styles.infoInput} />
                            </View>

                            <Text style={styles.infoTitle}>Başlangıç ve bitiş tarihi</Text>
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={[styles.experiencesInputView, this.state.warningCommunityDate && community.communityStartDate === '' && { borderColor: 'red' }, this.state.warningCommunityDate && community.communityFinishDate === '' && { borderColor: 'red' }]}>
                                    <SImage width={23} source={require('../images/calendar.png')} />
                                    <DatePicker
                                        androidMode='spinner'
                                        style={[styles.infoInput, { width: 70, marginBottom: 5 }]}
                                        date={this.state.userCommunityStartDate}
                                        showIcon={false}
                                        placeholder='AA.YYYY'
                                        mode="date"
                                        format="MM.YYYY"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            placeholderText: {
                                                color: '#8D8D8D',
                                                width: '100%'
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
                                    {
                                        !this.state.userCommunityContinuesState &&
                                        <>
                                            <Text style={{ fontSize: 18, marginRight: 10, color: '#737373' }}>/</Text>
                                            <DatePicker
                                                androidMode='spinner'
                                                style={[styles.infoInput, { width: 70, marginBottom: 5, paddingLeft: 0 }]}
                                                date={this.state.userCommunityFinishDate}
                                                showIcon={false}
                                                placeholder='AA.YYYY'
                                                mode="date"
                                                format="MM.YYYY"
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"
                                                customStyles={{
                                                    placeholderText: {
                                                        color: '#8D8D8D',
                                                        width: '100%'
                                                    },
                                                    dateInput: {
                                                        borderWidth: 0,
                                                    },
                                                    dateText: {
                                                        width: '100%',
                                                        color: '#8D8D8D',
                                                    }
                                                }}
                                                onDateChange={(date) => { community.communityFinishDate = date; this.setState({ userCommunityFinishDate: date }) }}
                                            />
                                        </>
                                    }
                                </View>

                            </View>
                            <View style={{ width: '100%', marginBottom: 10 }}>
                                <CheckBox
                                    style={{ flex: 1 }}
                                    onClick={() => this.continuesFunc('community')}
                                    isChecked={this.state.userCommunityContinuesState}
                                    checkBoxColor={'#0a8fbf'}
                                    rightText={'Devam ediyorum'}
                                    rightTextStyle={styles.checkBoxText}
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
                            <View style={{ width: '90%', alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={() => this.controlCommunity()} style={[styles.linkAddButton, { marginTop: 10 }]}>
                                    <Text style={styles.buttonText}>Ekle</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }

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
                    {
                        !this.state.showReferenceInput &&
                        <TouchableOpacity onPress={() => this.setState({ showReferenceInput: true, autoReference: true })}>
                            <SImage width={35} source={require('../images/addIcon.png')} />
                        </TouchableOpacity>
                    }
                    {
                        this.state.showReferenceInput &&
                        <View style={{ width: '90%', alignItems: 'center', marginTop: 40, }}>
                            <Text style={styles.infoTitle}>İsim, soy isim</Text>
                            <View style={[styles.experiencesInputView, this.state.warningReferenceName && reference.name === '' && { borderColor: 'red' }]}>
                                <SImage width={20} source={require('../images/userForm.png')} />
                                <TextInput
                                    autoFocus={this.state.autoReference}
                                    autoCapitalize='words'
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
                                    autoCapitalize='none'
                                    value={this.state.userReferenceEmail}
                                    onChangeText={(text) => { reference.email = text; this.setState({ userReferenceEmail: text }) }}
                                    style={styles.infoInput} />
                            </View>


                            <Text style={styles.infoTitle}>İş yeri</Text>
                            <View style={styles.experiencesInputView}>
                                <SImage width={20} source={require('../images/workplace.png')} />
                                <TextInput
                                    placeholder='...'
                                    autoCapitalize='words'
                                    value={this.state.userReferenceCompanyName}
                                    onChangeText={(text) => { reference.companyName = text; this.setState({ userReferenceCompanyName: text }) }}
                                    style={styles.infoInput} />
                            </View>
                            <View style={{ width: '90%', alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={() => this.controlReference()} style={[styles.linkAddButton, { marginTop: 10 }]}>
                                    <Text style={styles.buttonText}>Ekle</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }

                </View>


                <View style={{ width: '100%', marginBottom: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={() => this.controlNavigation()} style={styles.nextButton}>
                        <Text style={styles.buttonText}>İleri</Text>
                    </TouchableOpacity>
                </View>

            </View >
        )
    }

    const goToTop = () => {
        this.scroll.scrollTo({ x: 0, y: 0, animated: true });
        this.setState({sayi:this.scroll.y})

    }
    const handleScroll = (event) => {
        this.setState({
            scrollY : event.nativeEvent.contentOffset.y,
        })
    }

        return (
            <View style={{flex:1}}>
                <View style={{ width: '100%', height: 50, backgroundColor: '#235F98', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ position: 'absolute', left: 5,width:40,height:30,alignItems:'center',justifyContent:'center' }}>
                        <SImage width={20} source={require('../images/backIcon.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', fontSize: 20 }}>Deneyimler</Text>
                </View>
            <ScrollView
                ref={(c) => { this.scroll = c }}
                onScroll={this.handleScroll.bind(this)}
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: '#fff' }}>
                <View style={{ alignItems: 'center' }}>
                    {this.renderProgressBar()}
                    {this.renderExperiences()}
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
                            backgroundColor: '#37cc75',
                        },
                        message: {
                            color: '#2f6478',
                        }
                    }}
                />

            </ScrollView>
                {   this.state.scrollY > 300 &&

                          <TouchableOpacity  onPress={this.goToTop} style={styles.upButton} >
                              <SImage width={25} source={require('../images/upIcon.png')} />
                          </TouchableOpacity>
                }


            </View>
        )
    
}



export default observer(Experiences);
