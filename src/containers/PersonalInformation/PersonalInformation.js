import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Picker, ScrollView,PermissionsAndroid, FlatList } from 'react-native';
import SImage from 'react-native-scalable-image';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import { observer } from 'mobx-react';
import AlertPro from "react-native-alert-pro";
import * as Animatable from 'react-native-animatable';


import styles from '../styles/cvFormStyle';
import helper from '../controllers/helper';
import Button from '../../components/Button/Button';


const PersonalInformation = (props) => {

    
    let link = '';
    let licence = ''
    let linkIcon = ''

    const [hidden, setHidden] = useState(false);
    const [userGender, setUserGender] = useState('');
    const [userBirthDay, setUserBirthDay] = useState('');
    const [photoSource, setPhotoSource] = useState('');
    const [userDrivingLicence, setUserDrivingLicence] = ('');
    const [warningLink, setWarningLink] = useState(false);
    const [linksShow, setLinksShow] = useState(false);
    const [userLinks, setUserLinks] = useState('');
    const [userLink, setUserLink] = useState('');
    const [selectedLinkIcon, setSelectedLinkIcon] = useState('');
    const [userLinkIcon, setUserLinkIcon] = useState('')
    const [showExperiences, setShowExperiences] = useState(false)

    linkIcon = helper.userLinks.map(el => el.linkIconCV);
    licence = helper.userDrivingLicencies.map(el => el.licence);
        
 
    const renderProgressBar = () => {
        return (
            <View style={styles.progressBarView}>
                <View style={[styles.progressBarIconContainer, { width: 65, height: 65, borderWidth: 3, borderColor: '#fff', elevation: 20, top: -30 }]}>
                    <SImage width={30} source={ require('../images/userProgressBar.png')} />
                </View>
                <View style={[{ width: '50%', height: 5 }, helper.userName === '' || helper.userTel === '' || helper.userEmail === '' || helper.userJob === '' || helper.userCity === '' ? { backgroundColor: '#e0e0e0' } : { backgroundColor: '#399eff' }]}>
                </View>
                <View style={[styles.progressBarIconContainer, { top: -18, left: '45%' }, helper.userName === '' || helper.userTel === '' || helper.userEmail === '' || helper.userJob === '' || helper.userCity === '' ? { backgroundColor: '#e0e0e0' } : {}]}>
                    <SImage width={20} source={`${helper.userSchools.length <= 0 || helper.userAbilities.length <= 0 || showExperiences ? require('../images/cvProgressBar.png') : require('../images/checkIcon.png')}`} />
                </View >

                <View style={[{ width: '50%', height: 5 }, helper.userSchools.length <= 0 || helper.userAbilities.length <= 0 ||helper.userName === '' || helper.userTel === '' || helper.userEmail === '' || helper.userJob === '' || helper.userCity === ''  ? { backgroundColor: '#e0e0e0' } : { backgroundColor: '#399eff' }]}></View>
                <View
                    style={[styles.progressBarIconContainer, { top: -18, right: 0 }, helper.userSchools.length <= 0 || helper.userAbilities.length <= 0 ||helper.userName === '' || helper.userTel === '' || helper.userEmail === '' || helper.userJob === '' || helper.userCity === '' ? { backgroundColor: '#e0e0e0' } : {}]}>
                    <SImage width={17} source={require('../images/downloadProgressBar.png')} />
                </View>
            </View>

        )
    }
    const deleteMore = () => {
        setHidden(!hidden)
        if (hidden) setUserGender('Erkek')
        else {
            setUserGender('');
            setUserBirthDay('');
            helper.userLinks = [];
            helper.userDrivingLicencies = [];
            helper.userBirthDay = '';
            helper.userGender = '';
            helper.userGithubLink = '';
            helper.userLinkedInLink = '';
            helper.userPinterestLink = '';
            helper.userInstagramLink = '';
            helper.userSkypeLink = '';
            helper.userTwitterLink = '';
            helper.userFacebookLink = '';
            helper.userTelegramLink = '';
            helper.userYoutubeLink = '';
            helper.userPersonalLink = [];
            linkIcon = [];
            licence = [];
        }
    }
    const getFoto = async () => {

        try {
            const result1 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Dosya Okuma İzni',
                    message: 'Uygulama bu izne ihtiyaç duyuyor.',
                    buttonNeutral: 'Daha Sonra Sor',
                    buttonNegative: 'İptal',
                    buttonPositive: 'İzin Ver',
                },
            );


            const result2 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Dosya Yazma İzni',
                    message: 'Uygulama bu izne ihtiyaç duyuyor.',
                    buttonNeutral: 'Daha Sonra Sor',
                    buttonNegative: 'İptal',
                    buttonPositive: 'İzin Ver',
                },
            );


            if ((result1 === PermissionsAndroid.RESULTS.GRANTED) && (result2 === PermissionsAndroid.RESULTS.GRANTED)) console.log('İZİN VERİLDİ');
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

            if (response.didCancel) console.log('User cancelled image picker')
            else if (response.error) console.log('ImagePicker Error: ', response.error)
            else if (response.customButton)console.log('User tapped custom button: ', response.customButton)
            else {
                const source = { uri: response.uri };
                setPhotoSource(source)
                helper.userPhoto = source;
            }
        });
    }
    const setLinks = (item) => {
        return (
            <Animatable.View duration={500} animation="fadeInUp" onTransitionEnd='fadeInUp' style={styles.linkContainer}>
                <View style={styles.linkIconStyle}><SImage width={25} source={item.item.linkIcon} /></View>
                <Text style={styles.linkNameStyle} numberOfLines={1} >{item.item.link}</Text>
                <TouchableOpacity onPress={() => removeLink(item)} style={styles.linkRemoveButton}><Text style={styles.buttonText}>Çıkar</Text></TouchableOpacity>
            </Animatable.View>
        )
    }
    const setDrivingLicencies = (item) => {
        return (
            <Animatable.View duration={600} animation="fadeInUp">
                <TouchableOpacity onPress={() => removeDrivingLicence(item)}>
                    <Text style={[styles.drivingLicence, { borderColor: item.item.color, color: item.item.color }]}>{item.item.licence}</Text>
                </TouchableOpacity>
            </Animatable.View>
        )
    }


    const removeDrivingLicence = (v) => {
        helper.userDrivingLicencies.splice(v.index, 1)
        licence = helper.userDrivingLicencies.map(el => el.licence);
        setUserDrivingLicence('')
    }

    const removeLink = (v) => {
        //uygulamada gösterilen kısım
        helper.userLinks.splice(v.index, 1)
        linkIcon = helper.userLinks.map(el => el.linkIconCV);

        //cv de bastırılacak kısmı
        if (v.item.linkIconCV === 'github') helper.userGithubLink = ''
        else if (v.item.linkIconCV === 'linkedin') helper.userLinkedInLink = ''
        else if (v.item.linkIconCV === 'pinterest') helper.userPinterestLink = ''
        else if (v.item.linkIconCV === 'instagram') helper.userInstagramLink = ''
        else if (v.item.linkIconCV === 'skype') helper.userSkypeLink = ''
        else if (v.item.linkIconCV === 'telegram') helper.userTelegramLink = ''
        else if (v.item.linkIconCV === 'facebook') helper.userFacebookLink = ''
        else if (v.item.linkIconCV === 'twitter') helper.userTwitterLink = ''
        else if (v.item.linkIconCV === 'link') helper.userPersonalLink.splice(v.index, 1)
        else helper.userYoutubeLink = '';

        setUserLinks(link);
    }

    const controlLink = () => {
        if (link === '') setWarningLink(true);
            else {
               if (userLink === 'github') helper.userGithubLink = userLink
               else if (userLink === 'linkedin') helper.userLinkedInLink = userLink
               else if (userLink === 'pinterest') helper.userPinterestLink = userLink
               else if (userLink === 'instagram') helper.userInstagramLink = userLink
               else if (userLink === 'skype') helper.userSkypeLink = userLink
               else if (userLink === 'telegram') helper.userTelegramLink = userLink
               else if (userLink === 'facebook') helper.userFacebookLink = userLink
               else if (userLink === 'twitter') helper.userTwitterLink = userLink
               else if (userLink === 'youtube') helper.userYoutubeLink = userLink
               else helper.userPersonalLink.push({link: userLink})
               helper.setUserLinks(link, selectedLinkIcon, userLinkIcon);
                setUserLink(''),
                setWarningLink(false),
                setLinksShow(!linksShow)
               link = ''
               linkIcon = helper.userLinks.map(el => el.linkIconCV);
            }
    }


    const pushDrivingLicence = (v, color) => {
        helper.setUserDrivingLicencies(v, color);
        setUserDrivingLicence(v)
        licence = helper.userDrivingLicencies.map(el => el.licence);
    }

    const changeLinksShow = (v, iCV) => {
        setLinksShow(!linksShow);
        setSelectedLinkIcon(v);
        setUserLinkIcon(iCV);
    }

    const controlNavigation = () => {
        if(helper.userName === '' || helper.userTel === '' || helper.userEmail === '' || helper.userJob === '' || helper.userCity === '') alert('hata')  //AlertPro.open()
        else props.navigation.navigate('experiences')
    }

    const renderPersonalInformation = () => {
        return (

            <View style={{ width: '100%', marginTop: 80 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 }}>
                    <View style={{ width: '35%', height: '100%', alignItems: 'center' }}>
                        <View style={styles.photoContainer}>
                            <Image style={styles.photoStyle} source={helper.userPhoto === '' ? require('../images/defaultPhoto.png') : helper.userPhoto} />
                        </View>

                        <TouchableOpacity onPress={() => getFoto()} style={styles.selectButton}>
                            <Text style={styles.photoButtonText}>{helper.userPhoto === '' ? 'Fotograf yükle' : 'Fotografı değiştir'}</Text>
                        </TouchableOpacity>

                        {
                            helper.userPhoto !== '' &&
                            <TouchableOpacity onPress={() => helper.userPhoto = ''} style={styles.removeButton}>
                                <Text style={styles.photoButtonText}>Fotografı çıkar</Text>
                            </TouchableOpacity>
                        }
                    </View>

                    <View style={{ width: '60%' }}>
                        <Text style={styles.inputTitle}>Ad, Soyad <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                        <View style={styles.inputView}>
                            <SImage width={20} source={require('../images/userForm.png')} />
                            <TextInput
                                value={helper.userName}
                                onChangeText={(text) => helper.userName = text}
                                placeholder='...'
                                autoCapitalize='words'
                                style={styles.inputStyle} />
                        </View>

                        <Text style={styles.inputTitle}>Telefon numarası <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                        <View style={styles.inputView}>
                            <SImage width={20} source={require('../images/phone.png')} />
                            <TextInput
                                value={helper.userTel}
                                onChangeText={(text) => helper.userTel = text}
                                placeholder='...'
                                keyboardType='numeric'
                                style={styles.inputStyle} />
                        </View>


                        <Text style={styles.inputTitle}>E-posta <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                        <View style={[styles.inputView, { marginBottom: 0 }]}>
                            <SImage width={20} source={require('../images/mail.png')} />
                            <TextInput
                                value={helper.userEmail}
                                onChangeText={(text) => helper.userEmail = text}
                                placeholder='...'
                                autoCapitalize='none'
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
                            value={helper.userJob}
                            onChangeText={(text) => helper.userJob = text}
                            placeholder='...'
                            autoCapitalize='words'
                            style={[styles.inputStyle, { width: '90%', paddingLeft: 10 }]} />
                    </View>

                    <Text style={styles.inputTitle}>Şehir/ilçe <Text style={[styles.inputTitle, { color: '#ff4f4f' }]}>*</Text></Text>
                    <View style={[styles.inputView, { width: '90%' }]}>
                        <SImage width={20} source={require('../images/pin.png')} />
                        <TextInput
                            value={helper.userCity}
                            onChangeText={(text) => helper.userCity = text}
                            placeholder='...'
                            autoCapitalize='words'
                            style={[styles.inputStyle, { width: '90%' }]} />
                    </View>

                    <Text style={styles.inputTitle}>Posta kodu</Text>
                    <View style={[styles.inputView, { width: '90%' }]}>
                        <SImage width={20} source={require('../images/post.png')} />
                        <TextInput
                            value={helper.userPostalCode}
                            onChangeText={(text) => helper.userPostalCode = text}
                            placeholder='...'
                            keyboardType='numeric'
                            style={[styles.inputStyle, { width: '90%' }]} />
                    </View>

                    {
                        hidden === false &&
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <Text style={styles.inputTitle}>Doğum tarihi</Text>
                            <DatePicker
                                androidMode='spinner'
                                iconSource={require('../images/calendar.png')}
                                style={styles.dateInput}
                                date={helper.userBirthDay}
                                mode="date"
                                placeholder='gg-aa-yyyy'
                                format="DD-MM-YYYY"
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
                                onDateChange={(date) => helper.userBirthDay = date}
                            />

                            <Text style={styles.inputTitle}>Cinsiyet</Text>
                            <View style={[styles.inputView, { width: '90%' }]}>
                                <SImage width={20} source={require('../images/gender.png')} />
                                <Picker
                                    selectedValue={helper.userGender}
                                    itemStyle={{ color: 'green', fontSize: 10 }}
                                    style={{
                                        width: '90%', height: 35, color: 'grey'
                                    }}
                                    onValueChange={text => helper.userGender = text}
                                    mode='dropdown'
                                >
                                    <Picker.Item label="..." value="" />
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
                                    renderItem={data => setDrivingLicencies(data)}
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
                                            <TouchableOpacity onPress={() => pushDrivingLicence('A')} disabled={licence.includes('A')}><Text style={styles.drivingLicence}>A</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('AM') &&
                                            <TouchableOpacity onPress={() => pushDrivingLicence('AM')} disabled={licence.includes('AM')}><Text style={styles.drivingLicence}>AM</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('B') &&
                                            <TouchableOpacity onPress={() => pushDrivingLicence('B')} disabled={licence.includes('B')}><Text style={styles.drivingLicence} >B</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('BE') &&
                                            <TouchableOpacity onPress={() => pushDrivingLicence('BE')} disabled={licence.includes('BE')}><Text style={styles.drivingLicence} >BE</Text></TouchableOpacity>
                                        }

                                        {
                                            !licence.includes('C') &&
                                            <TouchableOpacity onPress={() => pushDrivingLicence('C')} disabled={licence.includes('C')}><Text style={styles.drivingLicence}>C</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('CE') &&
                                            <TouchableOpacity onPress={() => pushDrivingLicence('CE')} disabled={licence.includes('CE')}><Text style={styles.drivingLicence} >CE</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('C1') &&
                                            <TouchableOpacity onPress={() => pushDrivingLicence('C1')} disabled={licence.includes('C1')}><Text style={styles.drivingLicence} >C1</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('C1E') &&
                                            <TouchableOpacity onPress={() => pushDrivingLicence('C1E')} disabled={licence.includes('C1E')}><Text style={styles.drivingLicence} >C1E</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('D') &&
                                            <TouchableOpacity onPress={() => pushDrivingLicence('D')} disabled={licence.includes('D')}><Text style={styles.drivingLicence} >D</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('DE') &&
                                            <TouchableOpacity onPress={() => pushDrivingLicence('DE')} disabled={licence.includes('DE')}><Text style={styles.drivingLicence}>DE</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('D1') &&
                                            <TouchableOpacity onPress={() => pushDrivingLicence('D1')} disabled={licence.includes('D1')}><Text style={styles.drivingLicence} >D1</Text></TouchableOpacity>
                                        }
                                        {
                                            !licence.includes('D1E') &&
                                            <TouchableOpacity onPress={() => pushDrivingLicence('D1E')} disabled={licence.includes('D1E')}><Text style={styles.drivingLicence} >D1E</Text></TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            </View>

                            <Text style={styles.inputTitle}>Linkler</Text>
                            <View style={styles.linksContainer}>
                                <FlatList
                                    style={[{ width: '100%' }, helper.userLinks.length > 0 && { borderBottomColor: '#DADADA', borderBottomWidth: 1, marginBottom: 10 }]}
                                    data={helper.userLinks}
                                    renderItem={data => setLinks(data)}
                                    showsVerticalScrollIndicator={false}
                                />

                                <View style={{ width: '100%', alignItems: 'center' }}>
                                    {
                                        linksShow &&
                                        <View style={{ width: '100%', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
                                            {
                                                !linkIcon.includes('github') &&
                                                <TouchableOpacity onPress={() => changeLinksShow(require('../images/github.png'), 'github')} style={{ width: 50, height: 40, borderRadius: 7, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/github.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('linkedin') &&
                                                <TouchableOpacity onPress={() => changeLinksShow(require('../images/linkedin.png'), 'linkedin')} style={{ width: 50, height: 40, borderRadius: 7, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/linkedin.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('pinterest') &&
                                                <TouchableOpacity onPress={() => changeLinksShow(require('../images/pinterest.png'), 'pinterest')} style={{ width: 50, height: 40, borderRadius: 7, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/pinterest.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('instagram') &&
                                                <TouchableOpacity onPress={() => changeLinksShow(require('../images/instagram.png'), 'instagram')} style={{ width: 50, height: 40, borderRadius: 7, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/instagram.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('skype') &&
                                                <TouchableOpacity onPress={() => changeLinksShow(require('../images/skype.png'), 'skype')} style={{ width: 50, height: 40, borderRadius: 7, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/skype.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('telegram') &&
                                                <TouchableOpacity onPress={() => changeLinksShow(require('../images/telegram.png'), 'telegram')} style={{ width: 50, height: 40, borderRadius: 7, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/telegram.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('facebook') &&
                                                <TouchableOpacity onPress={() => changeLinksShow(require('../images/facebook.png'), 'facebook')} style={{ width: 50, height: 40, borderRadius: 7, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/facebook.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('twitter') &&
                                                <TouchableOpacity onPress={() => changeLinksShow(require('../images/twitter.png'), 'twitter')} style={{ width: 50, height: 40, borderRadius: 7, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/twitter.png')} /></TouchableOpacity>
                                            }
                                            {
                                                !linkIcon.includes('youtube') &&
                                                <TouchableOpacity onPress={() => changeLinksShow(require('../images/youtube.png'), 'youtube')} style={{ width: 50, height: 40, borderRadius: 7, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={30} source={require('../images/youtube.png')} /></TouchableOpacity>
                                            }
                                            <TouchableOpacity onPress={() => changeLinksShow(require('../images/link.png'), 'link')} style={{ width: 50, height: 40, borderRadius: 7, borderColor: '#DADADA', borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}><SImage width={20} source={require('../images/plus.png')} /></TouchableOpacity>

                                        </View>
                                    }


                                    {
                                        linksShow &&
                                        <View>
                                            <TouchableOpacity style={{width:30}} onPress={() => setLinksShow(true)}>
                                                <SImage width={25} source={require('../images/backLink.png')} />
                                            </TouchableOpacity>
                                            <View style={styles.linkInputContainer}>
                                                <View style={styles.linkIconStyle}><SImage width={25} source={selectedLinkIcon} /></View>
                                                <TextInput
                                                    value={userLink}
                                                    placeholder={userLinkIcon === 'link' ? 'link...' : 'kullanıcı adınız...'}
                                                    autoFocus
                                                    autoCapitalize='none'
                                                    onChangeText={text => { link = text; setUserLink(text) }}
                                                    style={[styles.linkInputStyle,{fontSize:14}, warningLink && link === '' && { borderColor: 'red' }]} />
                                                <TouchableOpacity onPress={() => controlLink()} style={styles.linkAddButton}>
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

                <TouchableOpacity onPress={() => deleteMore()} style={styles.moreButton}>
                    <SImage width={35} source={hidden ? require('../images/plusIcon.png') : require('../images/minusIcon.png')} />
                    <Text style={{ color: '#B0B0B0' }}>{hidden ? 'Daha fazla...' : 'Daha az...'}</Text>
                </TouchableOpacity>

                <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => controlNavigation()} style={styles.nextButton}>
                        <Text style={styles.buttonText}>İleri</Text>
                    </TouchableOpacity>
                </View>



            </View >
        )
    }


        return (
            <View style={{flex:1}}>
                

            <ScrollView
                //ref={(c) => { this.scroll = c }}
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: '#fff' }}>
                <View style={{ alignItems: 'center' }}>

                    {renderProgressBar()}
                    {renderPersonalInformation()}
                </View>

                    {/*<AlertPro
                    ref={ref => {
                        AlertPro = ref;
                    }}
                    onConfirm={() => AlertPro.close()}
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
                />*/}

            </ScrollView>
            </View>
        )
    
}



export default observer(PersonalInformation);
