import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import SImage from 'react-native-scalable-image';

import styles from '../styles/cvFormStyle';


class CVForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            showPersonalInformation: false,
            showExperiences: true
        }
    }

    /* 
                   
                   */

    renderProgressBar() {
        return (
            <View style={styles.progressBarView}>
                <View style={[styles.progressBarIconContainer, { width: 63, height: 63, borderWidth: 2, borderColor: '#fff', elevation: 20 }]}>
                    <SImage width={35} source={require('../images/userProgressBar.png')} />
                </View>
                <View style={styles.progressBarIconContainer}>
                    <SImage width={25} source={require('../images/cvProgressBar.png')} />
                </View >
                <View style={styles.progressBarIconContainer}>
                    <SImage width={25} source={require('../images/downloadProgressBar.png')} />
                </View>
            </View>

        )
    }

    renderPersonalInformation() {
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
                        <TextInput placeholder='...' style={styles.inputStyle} />

                        <Text style={styles.inputTitle}>Telefon numarası</Text>
                        <TextInput placeholder='...' style={styles.inputStyle} />

                        <Text style={styles.inputTitle}>E-posta</Text>
                        <TextInput placeholder='...' style={styles.inputStyle} />
                    </View>
                </View>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text style={styles.inputTitle}>Adress</Text>
                    <TextInput placeholder='...' style={[styles.inputStyle, { width: '90%' }]} />

                    <Text style={styles.inputTitle}>Şehir/ilçe</Text>
                    <TextInput placeholder='...' style={[styles.inputStyle, { width: '90%' }]} />

                    <Text style={styles.inputTitle}>Posta kodu</Text>
                    <TextInput placeholder='...' style={[styles.inputStyle, { width: '90%' }]} />

                    {
                        this.state.hidden === false &&
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <Text style={styles.inputTitle}>Doğum tarihi</Text>
                            <TextInput placeholder='...' style={[styles.inputStyle, { width: '90%' }]} />

                            <Text style={styles.inputTitle}>Cinsiyet</Text>
                            <TextInput placeholder='...' style={[styles.inputStyle, { width: '90%' }]} />

                            <Text style={styles.inputTitle}>Sürücü ehliyeti</Text>
                            <TextInput placeholder='...' style={[styles.inputStyle, { width: '90%' }]} />

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
                                    <TextInput style={styles.linkInputStyle} />
                                    <TouchableOpacity style={styles.linkAddButton}><Text style={styles.buttonText}>Ekle</Text></TouchableOpacity>
                                </View>


                            </View>

                        </View>
                    }
                </View>







                <TouchableOpacity onPress={() => this.setState({ hidden: !this.state.hidden })} style={styles.moreButton}>
                    <SImage width={35} source={this.state.hidden ? require('../images/plusIcon.png') : require('../images/minusIcon.png')} />
                    <Text style={{ color: '#B0B0B0' }}>Daha fazla...</Text>
                </TouchableOpacity>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.selectButton}>
                        <Text style={styles.buttonText}>İleri</Text>
                    </TouchableOpacity>
                </View>



            </View>
        )
    }

    renderExperiences() {
        return (
            <View style={{ width: '100%', marginTop: 100, alignItems: 'center' }}>


                <Text style={styles.inputTitle}>Okul</Text>
                <View style={styles.infoContainer}>
                    <View style={{ width: '90%', alignItems: 'center' }}>
                        <Text style={styles.infoTitle}>Okul/Fakülte</Text>
                        <TextInput style={styles.infoInput} />

                        <Text style={styles.infoTitle}>Bölüm</Text>
                        <TextInput style={styles.infoInput} />

                        <Text style={styles.infoTitle}>Derece</Text>
                        <TextInput style={styles.infoInput} />

                        <Text style={styles.infoTitle}>Şehir/ilçe</Text>
                        <TextInput style={styles.infoInput} />

                        <Text style={styles.infoTitle}>Başlangıç ve bitiş tarihi</Text>
                        <TextInput style={styles.infoInput} />
                    </View>
                    <TouchableOpacity style={[styles.linkAddButton, { marginTop: 10, right: 0 }]}><Text style={styles.buttonText}>Ekle</Text></TouchableOpacity>
                </View>


                <Text style={styles.inputTitle}>Meslek</Text>
                <TextInput placeholder='...' style={[styles.inputStyle, { width: '90%' }]} />

                <Text style={styles.inputTitle}>İş deneyimi</Text>
                <View style={styles.infoContainer}>
                    <View style={{ width: '90%', alignItems: 'center' }}>
                        <Text style={styles.infoTitle}>İş yeri</Text>
                        <TextInput style={styles.infoInput} />

                        <Text style={styles.infoTitle}>Meslek</Text>
                        <TextInput style={styles.infoInput} />

                        <Text style={styles.infoTitle}>Başlangıç ve bitiş tarihi</Text>
                        <TextInput style={styles.infoInput} />


                        <Text style={styles.infoTitle}>Açıklama</Text>
                        <TextInput multiline={true} numberOfLines={4} placeholder={'...'} style={styles.descriptionInput} />
                    </View>
                    <TouchableOpacity style={[styles.linkAddButton, { marginTop: 10, right: 0 }]}><Text style={styles.buttonText}>Ekle</Text></TouchableOpacity>
                </View>

                <Text style={styles.inputTitle}>Projeler</Text>
                <View style={styles.infoContainer}>
                    <View style={{ width: '90%', alignItems: 'center' }}>
                        <Text style={styles.infoTitle}>Proje adı</Text>
                        <TextInput style={styles.infoInput} />

                        <Text style={styles.infoTitle}>Araçlar</Text>
                        <TextInput style={styles.infoInput} />

                        <Text style={styles.infoTitle}>Link</Text>
                        <TextInput style={styles.infoInput} />


                        <Text style={styles.infoTitle}>Açıklama</Text>
                        <TextInput multiline={true} numberOfLines={4} placeholder={'...'} style={styles.descriptionInput} />
                    </View>
                    <TouchableOpacity style={[styles.linkAddButton, { marginTop: 10, right: 0 }]}><Text style={styles.buttonText}>Ekle</Text></TouchableOpacity>
                </View>



                <Text style={styles.inputTitle}>Yetenekler</Text>
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
                                <TextInput style={styles.abilityInput} />
                            </View>
                            <View style={{ width: '35%' }}>
                                <Text style={styles.chooseTalentTitle}>Seviye seç</Text>
                                <TextInput placeholder='Başlangıç' style={styles.abilityGradeInput} />
                            </View>
                            <TouchableOpacity style={styles.selectAbilityButton}>
                                <Text style={styles.buttonText}>Ekle</Text>
                            </TouchableOpacity>
                        </View>


                    </View>

                </View>


                <Text style={styles.inputTitle}>Diller</Text>
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
                                <TextInput style={styles.abilityInput} />
                            </View>
                            <View style={{ width: '35%' }}>
                                <Text style={styles.chooseTalentTitle}>Seviye seç</Text>
                                <TextInput placeholder='Başlangıç' style={styles.abilityGradeInput} />
                            </View>
                            <TouchableOpacity style={styles.selectAbilityButton}>
                                <Text style={styles.buttonText}>Ekle</Text>
                            </TouchableOpacity>
                        </View>


                    </View>

                </View>



                <Text style={styles.inputTitle}>İlgi alanı</Text>
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
                                <TextInput style={styles.abilityInput} />
                            </View>

                            <TouchableOpacity style={styles.selectHobbyButton}>
                                <Text style={styles.buttonText}>Ekle</Text>
                            </TouchableOpacity>
                        </View>


                    </View>

                </View>

                <Text style={styles.inputTitle}>Topluluk</Text>
                <View style={styles.infoContainer}>
                    <View style={{ width: '90%', alignItems: 'center' }}>
                        <Text style={styles.infoTitle}>Topluluk adı</Text>
                        <TextInput style={styles.infoInput} />

                        <Text style={styles.infoTitle}>??????</Text>
                        <TextInput style={styles.infoInput} />

                        <Text style={styles.infoTitle}>Başlangıç ve bitiş tarihi</Text>
                        <TextInput style={styles.infoInput} />

                        <Text style={styles.infoTitle}>Açıklama</Text>
                        <TextInput multiline={true} numberOfLines={4} placeholder={'...'} style={styles.descriptionInput} />
                    </View>
                    <TouchableOpacity style={[styles.linkAddButton, { marginTop: 10 }]}><Text style={styles.buttonText}>Ekle</Text></TouchableOpacity>
                </View>



            </View>
        )
    }


    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
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
