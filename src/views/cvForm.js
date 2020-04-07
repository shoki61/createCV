import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Button, Picker } from 'react-native';
import SImage from 'react-native-scalable-image';
import DatePicker from 'react-native-datepicker'
import RNPickerSelect from 'react-native-picker-select';

import styles from '../styles/cvFormStyle';


class CVForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
            userSchoolGrade: '',
            userSchoolCity: '',
            userSchoolDate: '',

            userJob: '',

            userCompanyName: '',
            userCompanyJob: '',
            userCompanyDate: '',
            userCompanyDescription: '',

            userProjectName: '',
            userProjectTools: '',
            userProjectLink: '',
            userProjectDescription: '',

            userAbility: '',
            userAbilityLevel: '',

            userLanguage: '',
            userLanguageLevel: '',

            userHobby: '',

            userCommunityName: '',
            userCommunityTitle: '',
            userCommunityDate: '',
            userCommunityDescription: '',

            userReferenceName: '',
            userReferenceNumber: '',
            userReferenceEmail: '',
            userReferenceCompanyName: '',

            hidden: true,
            showPersonalInformation: false,
            showExperiences: true,

            minDate: '01-01-1950',
            date: '01-01-1990',
            maxDate: '01-01-2016',

        }
    }


    showPersonalInformation() {
        this.setState({ showPersonalInformation: true })
        this.setState({ showExperiences: false })
    }


    showExperiences() {
        this.setState({ showPersonalInformation: false })
        this.setState({ showExperiences: true })
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
                <View style={styles.progressBarIconContainer}>
                    <SImage width={17} source={require('../images/downloadProgressBar.png')} />
                </View>
            </View>

        )
    }

    deleteMore() {
        this.setState({ hidden: !this.state.hidden })
        if (this.state.hidden) {
            this.setState({ userBirthDay: '' })
            this.setState({ userGender: '' })
            this.setState({ userDrivingLicence: '' })
            this.setState({ userLink: '' })
        }
    }

    renderPersonalInformation() {
        console.log('şatır')
        return (

            <View style={{ width: '100%', marginTop: 100, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View >
                        <View style={styles.photoContainer}>
                            <Image style={styles.photoStyle} source={require('../images/defaultPhoto.png')} />
                        </View>

                        <TouchableOpacity style={styles.selectButton}>
                            <Text style={styles.buttonText}>Fotograf yükle</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.removeButton}>
                            <Text style={styles.buttonText}>Fotografı çıkar</Text>
                        </TouchableOpacity>
                    </View>







                    <View style={{ width: '60%' }}>
                        <Text style={styles.inputTitle}>İsim soy isim</Text>
                        <View style={styles.inputView}>
                            <SImage width={20} source={require('../images/userForm.png')} />
                            <TextInput
                                value={this.state.userName}
                                onChangeText={(text) => this.setState({ userName: text })}
                                placeholder='...'
                                style={styles.inputStyle} />
                        </View>



                        <Text style={styles.inputTitle}>Telefon numarası</Text>
                        <View style={styles.inputView}>
                            <SImage width={20} source={require('../images/phone.png')} />
                            <TextInput
                                value={this.state.userNumber}
                                onChangeText={(text) => this.setState({ userNumber: text })}
                                placeholder='...'
                                keyboardType='numeric'
                                style={styles.inputStyle} />
                        </View>


                        <Text style={styles.inputTitle}>E-posta</Text>
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

                    <Text style={styles.inputTitle}>Meslek</Text>
                    <View style={[styles.inputView, { width: '90%' }]}>
                        <SImage width={20} source={require('../images/manager.png')} />
                        <TextInput
                            value={this.state.userJob}
                            onChangeText={(text) => this.setState({ userJob: text })}
                            placeholder='...'
                            style={[styles.inputStyle, { width: '90%', paddingLeft: 10 }]} />
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


                    <Text style={styles.inputTitle}>Şehir/ilçe</Text>
                    <View style={[styles.inputView, { width: '90%' }]}>
                        <SImage width={20} source={require('../images/pin.png')} />
                        <TextInput
                            value={this.state.userCity}
                            onChangeText={(text) => this.setState({ userCity: text })}
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
                                style={styles.dateInput}
                                date={this.state.date}
                                mode="date"
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate={this.state.minDate}
                                maxDate={this.state.maxDate}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        display: 'none'
                                    },
                                    dateInput: {
                                        borderWidth: 0
                                    },
                                    dateText: {
                                        width: '100%',
                                        color: '#737373'
                                    }
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />



                            <Text style={styles.inputTitle}>Cinsiyet</Text>
                            <View style={[styles.inputView, { width: '90%' }]}>
                                <SImage width={20} source={require('../images/gender.png')} />
                                <TextInput
                                    value={this.state.userGender}
                                    onChangeText={(text) => this.setState({ userGender: text })}
                                    placeholder='...'
                                    style={[styles.inputStyle, { width: '90%' }]} />
                            </View>



                            <Text style={styles.inputTitle}>Sürücü ehliyeti</Text>
                            <View style={[styles.inputView, { width: '90%' }]}>
                                <SImage width={20} source={require('../images/drivingLicense.png')} />
                                <TextInput
                                    value={this.state.userDrivingLicence}
                                    onChangeText={(text) => this.setState({ userDrivingLicence: text })}
                                    placeholder='...'
                                    style={[styles.inputStyle, { width: '90%' }]} />
                            </View>

                            <Text style={styles.inputTitle}>Linkler</Text>
                            <View style={styles.linksContainer}>
                                <View style={styles.linkContainer}>
                                    <View style={styles.linkIconStyle}><SImage width={25} source={require('../images/github.png')} /></View>
                                    <Text style={styles.linkNameStyle} >shoki61</Text>
                                    <TouchableOpacity style={styles.linkRemoveButton}><Text style={styles.buttonText}>Çıkar</Text></TouchableOpacity>
                                </View>
                                <View style={styles.linkContainer}>
                                    <View style={styles.linkIconStyle}><SImage width={25} source={require('../images/linkedin.png')} /></View>
                                    <Text numberOfLines={1} style={styles.linkNameStyle} >sohratjumadurdyyew</Text>
                                    <TouchableOpacity style={styles.linkRemoveButton}><Text style={styles.buttonText}>Çıkar</Text></TouchableOpacity>
                                </View>
                                <View style={styles.linkInputContainer}>
                                    <View style={styles.linkIconStyle}><SImage width={25} source={require('../images/github.png')} /></View>
                                    <TextInput
                                        value={this.state.userLink}
                                        onChangeText={(text) => this.setState({ userLink: text })}
                                        style={styles.linkInputStyle} />
                                    <TouchableOpacity style={styles.linkAddButton}><Text style={styles.buttonText}>Ekle</Text></TouchableOpacity>
                                </View>


                            </View>

                        </View>
                    }
                </View>







                <TouchableOpacity onPress={() => this.deleteMore()} style={styles.moreButton}>
                    <SImage width={35} source={this.state.hidden ? require('../images/plusIcon.png') : require('../images/minusIcon.png')} />
                    <Text style={{ color: '#B0B0B0' }}>Daha fazla...</Text>
                </TouchableOpacity>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.showExperiences()} style={styles.selectButton}>
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
                    <Text style={styles.inputTitle}>Eğitim</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={{ width: '90%', alignItems: 'center' }}>
                        <Text style={styles.infoTitle}>Okul/Fakülte</Text>
                        <View style={styles.experiencesInputView}>
                            <SImage width={23} source={require('../images/school.png')} />
                            <TextInput
                                value={this.state.userSchoolName}
                                placeholder='...'
                                onChangeText={(text) => this.setState({ userSchoolName: text })}
                                style={styles.infoInput} />
                        </View>


                        <Text style={styles.infoTitle}>Bölüm</Text>
                        <View style={styles.experiencesInputView}>
                            <SImage width={23} source={require('../images/department.png')} />
                            <TextInput
                                value={this.state.userSchoolDepartment}
                                onChangeText={(text) => this.setState({ userSchoolDepartment: text })}
                                style={styles.infoInput} />
                        </View>





                        <Text style={styles.infoTitle}>Derece</Text>
                        <View style={styles.experiencesInputView}>
                            <SImage width={23} source={require('../images/degree.png')} />
                            <TextInput
                                value={this.state.userSchoolGrade}
                                onChangeText={(text) => this.setState({ userSchoolGrade: text })}
                                style={styles.infoInput} />
                        </View>






                        <Text style={styles.infoTitle}>Şehir/ilçe</Text>
                        <View style={styles.experiencesInputView}>
                            <SImage width={23} source={require('../images/pin.png')} />
                            <TextInput
                                value={this.state.userSchoolCity}
                                onChangeText={(text) => this.setState({ userSchoolCity: text })}
                                style={styles.infoInput} />
                        </View>





                        <Text style={styles.infoTitle}>Başlangıç ve bitiş tarihi</Text>
                        <View style={styles.experiencesInputView}>
                            <SImage width={23} source={require('../images/calendar.png')} />
                            <TextInput
                                value={this.state.userSchoolDate}
                                onChangeText={(text) => this.setState({ userSchoolDate: text })}
                                style={styles.infoInput} />
                        </View>



                    </View>
                    <View style={{ width: '90%', alignItems: 'flex-end' }}>
                        <TouchableOpacity style={[styles.linkAddButton, { marginTop: 10, right: 0 }]}><Text style={styles.buttonText}>Ekle</Text></TouchableOpacity>
                    </View>
                </View>




                {/*Iş deneyimi kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, marginTop: 15 }}>
                    <SImage width={40} source={require('../images/work.png')} />
                    <Text style={styles.inputTitle}>İş deneyimi</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={{ width: '90%', alignItems: 'center' }}>
                        <Text style={styles.infoTitle}>İş yeri</Text>
                        <View style={styles.experiencesInputView}>
                            <SImage width={23} source={require('../images/workplace.png')} />
                            <TextInput
                                value={this.state.userCompanyName}
                                placeholder='...'
                                onChangeText={(text) => this.setState({ userCompanyName: text })}
                                style={styles.infoInput} />
                        </View>

                        <Text style={styles.infoTitle}>Meslek</Text>
                        <View style={styles.experiencesInputView}>
                            <SImage width={23} source={require('../images/manager.png')} />
                            <TextInput
                                placeholder='...'
                                value={this.state.userCompanyJob}
                                onChangeText={(text) => this.setState({ userCompanyJob: text })}
                                style={styles.infoInput} />
                        </View>


                        <Text style={styles.infoTitle}>Başlangıç ve bitiş tarihi</Text>
                        <View style={styles.experiencesInputView}>
                            <SImage width={23} source={require('../images/calendar.png')} />
                            <TextInput
                                placeholder='...'
                                value={this.state.userCompanyDate}
                                onChangeText={(text) => this.setState({ userCompanyDate: text })}
                                style={styles.infoInput} />
                        </View>


                        <Text style={styles.infoTitle}>Açıklama</Text>
                        <View style={styles.experiencesDescInputView}>
                            <SImage width={23} source={require('../images/comment.png')} />
                            <TextInput
                                value={this.state.userCompanyDescription}
                                onChangeText={(text) => this.setState({ userCompanyDescription: text })}
                                multiline={true}
                                numberOfLines={4}
                                placeholder={'...'}
                                style={styles.descriptionInput} />
                        </View>
                    </View>
                    <View style={{ width: '90%', alignItems: 'flex-end' }}>
                        <TouchableOpacity style={[styles.linkAddButton, { marginTop: 10 }]}><Text style={styles.buttonText}>Ekle</Text></TouchableOpacity>
                    </View>
                </View>


                {/*Projeler kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, marginTop: 15 }}>
                    <SImage width={40} source={require('../images/project.png')} />
                    <Text style={styles.inputTitle}>Projeler</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={{ width: '90%', alignItems: 'center' }}>
                        <Text style={styles.infoTitle}>Proje adı</Text>
                        <View style={styles.experiencesInputView}>
                            <SImage width={23} source={require('../images/projectName.png')} />
                            <TextInput
                                value={this.state.userProjectName}
                                onChangeText={(text) => this.setState({ userProjectName: text })}
                                style={styles.infoInput} />
                        </View>



                        <Text style={styles.infoTitle}>Araçlar</Text>
                        <View style={styles.experiencesInputView}>
                            <SImage width={23} source={require('../images/tools.png')} />
                            <TextInput
                                value={this.state.userProjectTools}
                                onChangeText={(text) => this.setState({ userProjectTools: text })}
                                style={styles.infoInput} />
                        </View>



                        <Text style={styles.infoTitle}>Link</Text>
                        <View style={styles.experiencesInputView}>
                            <SImage width={20} source={require('../images/linkIcon.png')} />
                            <TextInput
                                value={this.state.userProjectLink}
                                onChangeText={(text) => this.setState({ userProjectLink: text })}
                                style={styles.infoInput} />
                        </View>



                        <Text style={styles.infoTitle}>Açıklama</Text>
                        <View style={styles.experiencesDescInputView}>
                            <SImage width={23} source={require('../images/comment.png')} />
                            <TextInput
                                value={this.state.userProjectDescription}
                                onChangeText={(text) => this.setState({ userProjectDescription: text })}
                                multiline={true}
                                numberOfLines={4}
                                placeholder={'...'}
                                style={styles.descriptionInput} />
                        </View>
                    </View>
                    <View style={{ width: '90%', alignItems: 'flex-end' }}>
                        <TouchableOpacity style={[styles.linkAddButton, { marginTop: 10 }]}><Text style={styles.buttonText}>Ekle</Text></TouchableOpacity>
                    </View>
                </View>


                {/*Yetenekler kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, marginTop: 15 }}>
                    <SImage width={40} source={require('../images/abilityTitle.png')} />
                    <Text style={styles.inputTitle}>Yetenekler</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <View style={styles.abilityContainer}>
                            <Text style={styles.abilityText}>Java Script</Text>
                            <Text style={styles.abilityGradeText}>Profesyonel</Text>
                            <TouchableOpacity style={styles.removeAbilityButton}>
                                <Text style={styles.buttonText}>Çıkar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.abilityContainer}>
                            <Text style={styles.abilityText}>Java Script</Text>
                            <Text style={styles.abilityGradeText}>Profesyonel</Text>
                            <TouchableOpacity style={styles.removeAbilityButton}>
                                <Text style={styles.buttonText}>Çıkar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.chooseTalentContainer}>
                            <View style={{ width: '40%' }}>
                                <Text style={styles.chooseTalentTitle}>Yetenek gir</Text>
                                <TextInput
                                    value={this.state.userAbility}
                                    onChangeText={(text) => this.setState({ userAbility: text })}
                                    style={styles.abilityInput} />


                            </View>
                            <View style={{ width: '35%' }}>
                                <Text style={styles.chooseTalentTitle}>Seviye seç</Text>
                                <TextInput
                                    value={this.state.userAbilityLevel}
                                    onChangeText={(text) => this.setState({ userAbilityLevel: text })}
                                    placeholder='Başlangıç'
                                    style={styles.abilityGradeInput} />
                            </View>
                            <TouchableOpacity style={styles.selectAbilityButton}>
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
                        <View style={styles.abilityContainer}>
                            <Text style={styles.abilityText}>Rusça</Text>
                            <Text style={styles.abilityGradeText}>Orta</Text>
                            <TouchableOpacity style={styles.removeAbilityButton}>
                                <Text style={styles.buttonText}>Çıkar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.abilityContainer}>
                            <Text style={styles.abilityText}>Inglizce</Text>
                            <Text style={styles.abilityGradeText}>Başlangıç</Text>
                            <TouchableOpacity style={styles.removeAbilityButton}>
                                <Text style={styles.buttonText}>Çıkar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.chooseTalentContainer}>
                            <View style={{ width: '40%' }}>
                                <Text style={styles.chooseTalentTitle}>Dil gir</Text>
                                <TextInput
                                    value={this.state.userLanguage}
                                    onChangeText={(text) => this.setState({ userLanguage: text })}
                                    style={styles.abilityInput} />

                            </View>
                            <View style={{ width: '35%' }}>
                                <Text style={styles.chooseTalentTitle}>Seviye seç</Text>
                                <TextInput
                                    value={this.state.userLanguageLevel}
                                    onChangeText={(text) => this.setState({ userLanguageLevel: text })}
                                    placeholder='Başlangıç'
                                    style={styles.abilityGradeInput} />

                            </View>
                            <TouchableOpacity style={styles.selectAbilityButton}>
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
                        <View style={styles.abilityContainer}>
                            <Text style={styles.hobbyText}>Doğa yürüyüşü</Text>
                            <TouchableOpacity style={styles.removeAbilityButton}>
                                <Text style={styles.buttonText}>Çıkar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.abilityContainer}>
                            <Text style={styles.hobbyText}>Balık tutmak</Text>
                            <TouchableOpacity style={styles.removeAbilityButton}>
                                <Text style={styles.buttonText}>Çıkar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.chooseTalentContainer}>
                            <View style={{ width: '72%' }}>
                                <Text style={styles.chooseTalentTitle}>İlgi alanı gir</Text>
                                <TextInput
                                    value={this.state.userHobby}
                                    onChangeText={(text) => this.setState({ userHobby: text })}
                                    style={styles.abilityInput} />

                            </View>
                            <TouchableOpacity style={styles.selectHobbyButton}>
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
                    <View style={{ width: '90%', alignItems: 'center' }}>
                        <Text style={styles.infoTitle}>Topluluk adı</Text>
                        <TextInput
                            value={this.state.userCommunityName}
                            onChangeText={(text) => this.setState({ userCommunityName: text })}
                            style={styles.infoInput} />


                        <Text style={styles.infoTitle}>Ünvan</Text>
                        <TextInput
                            value={this.state.userCommunityTitle}
                            onChangeText={(text) => this.setState({ userCommunityTitle: text })}
                            style={styles.infoInput} />


                        <Text style={styles.infoTitle}>Başlangıç ve bitiş tarihi</Text>
                        <TextInput
                            value={this.state.userCommunityDate}
                            onChangeText={(text) => this.setState({ userCommunityDate: text })}
                            style={styles.infoInput} />


                        <Text style={styles.infoTitle}>Açıklama</Text>
                        <TextInput
                            value={this.state.userCommunityDescription}
                            onChangeText={(text) => this.setState({ userCommunityDescription: text })}
                            multiline={true}
                            numberOfLines={4}
                            placeholder={'...'}
                            style={styles.descriptionInput} />
                    </View>
                    <View style={{ width: '90%', alignItems: 'flex-end' }}>
                        <TouchableOpacity style={[styles.linkAddButton, { marginTop: 10 }]}><Text style={styles.buttonText}>Ekle</Text></TouchableOpacity>
                    </View>
                </View>


                {/*Referans kısmı*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 5, marginTop: 15 }}>
                    <SImage width={40} source={require('../images/referance.png')} />
                    <Text style={styles.inputTitle}>Referans</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={{ width: '90%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-end', marginTop: 5 }}>
                        <View style={{ width: '35%' }}>
                            <Text style={styles.referansText} numberOfLines={1} >Murat Artan</Text>
                            <Text style={styles.referansText} numberOfLines={1} >05556669988</Text>
                        </View>
                        <View style={{ width: '35%' }}>
                            <Text style={styles.referansText} numberOfLines={1} >Logo Yazılım</Text>
                            <Text style={styles.referansText} numberOfLines={1} >murti61@gmail.com</Text>
                        </View>
                        <TouchableOpacity style={styles.removeAbilityButton}>
                            <Text style={styles.buttonText}>Çıkar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', alignItems: 'center', marginTop: 40, }}>
                        <Text style={styles.infoTitle}>İsim, soy isim</Text>
                        <TextInput
                            value={this.state.userReferenceName}
                            onChangeText={(text) => this.setState({ userReferenceName: text })}
                            style={styles.infoInput} />


                        <Text style={styles.infoTitle}>Telefon numarası</Text>
                        <TextInput
                            value={this.state.userReferenceNumber}
                            onChangeText={(text) => this.setState({ userReferenceNumber: text })}
                            style={styles.infoInput} />


                        <Text style={styles.infoTitle}>E-posta</Text>
                        <TextInput
                            value={this.state.userReferenceEmail}
                            onChangeText={(text) => this.setState({ userReferenceEmail: text })}
                            style={styles.infoInput} />


                        <Text style={styles.infoTitle}>İş yeri</Text>
                        <TextInput
                            value={this.state.userReferenceCompanyName}
                            onChangeText={(text) => this.setState({ userReferenceCompanyName: text })}
                            style={styles.infoInput} />
                    </View>
                    <View style={{ width: '90%', alignItems: 'flex-end' }}>
                        <TouchableOpacity style={[styles.linkAddButton, { marginTop: 10 }]}><Text style={styles.buttonText}>Ekle</Text></TouchableOpacity>
                    </View>
                </View>


                <View style={{ width: '100%', marginBottom: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={() => this.showPersonalInformation()} style={styles.selectButton}>
                        <Text style={styles.buttonText}>Geri</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectButton}>
                        <Text style={styles.buttonText}>İleri</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }





    render() {
        return (
            <ScrollView>
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
                </View>
            </ScrollView>

        )
    }
}



export default CVForm;
