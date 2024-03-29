import { StyleSheet, Dimensions } from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const styles = StyleSheet.create({
    progressBarView: {
        width: 330,
        backgroundColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50
    },
    progressBarIconContainer: {
        width: 40,
        height: 40,
        position: 'absolute',
        borderRadius: 100,
        backgroundColor: '#399EFF',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    photoContainer: {
        width: 130,
        height: 130,
        borderRadius: 100,
        elevation: 3
    },
    photoStyle: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        borderRadius: 100
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    },
    photoButtonText: {
        color: '#fff',
        fontSize: 13
    },
    selectButton: {
        elevation: 5,
        borderRadius: 2,
        width: '100%',
        padding: 8,
        backgroundColor: '#399EFF',
        alignItems: 'center',
        marginTop: 10
    },
    nextButton: {
        width: w / 2.3,
        elevation: 5,
        borderRadius: 2,
        padding: 10,
        backgroundColor: '#399EFF',
        alignItems: 'center',
        marginTop: 10,
        flexDirection:'row',
        justifyContent:'center'
    },
    previousButton: {
        width: w / 2.3,
        elevation: 5,
        borderRadius: 2,
        padding: 8,
        backgroundColor: '#399EFF',
        alignItems: 'center',
        marginTop: 10
    },
    removeButton: {
        elevation: 5,
        borderRadius: 2,
        width: '100%',
        padding: 8,
        backgroundColor: '#ff6969',
        alignItems: 'center',
        marginTop: 10
    },
    inputTitle: {
        color: '#399EFF',
        width: '90%',
        fontSize: 20,
        marginLeft: 10,
    },

    downloadButton: {
        alignItems: 'center'
    },
    downloadText: {
        margin: 5,
        marginBottom: 10,
        fontSize: 18,
        color: '#12A3D0'
    },

    inputView: {
        borderRadius: 3,
        elevation: 2,
        backgroundColor: '#fff',
        marginBottom: 15,
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    inputStyle: {
        width: '90%',
        padding: 0,
        paddingLeft: 5,
        fontSize: 17,
        color: '#676767',
        marginTop: 3
    },
    dateInput: {
        width: '90%',
        backgroundColor: '#fff',
        elevation: 3,
        borderRadius: 5,
        height: 35,
        marginBottom: 15,
        paddingLeft: 10,
        textAlignVertical: 'center'
    },


    schoolInfoText: {
        width: '90%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DADADA',
        height: 35,
        paddingLeft: 10,
        marginBottom: 10,
        textAlignVertical: 'center',
        color: '#6b6b6b'
    },
    descriptionText: {
        width: '90%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DADADA',
        padding: 10,
        marginBottom: 10,
        color: '#6b6b6b'
    },
    checkBoxText: {
        color: '#6b6b6b',
        marginLeft: 0
    },



    experiencesInputView: {
        width: '100%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DADADA',
        height: 35,
        paddingLeft: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    experiencesDescInputView: {
        width: '100%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DADADA',
        height: 100,
        padding: 0,
        paddingLeft: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 5
    },
    infoInput: {
        width: '80%',
        padding: 0,
        color: '#8D8D8D',
        paddingLeft: 10,
        marginTop: 5
    },
    descriptionInput: {
        width: '90%',
        padding: 0,
        fontSize: 15,
        color: '#8D8D8D',
        paddingLeft: 10,
        textAlignVertical: 'top'
    },

    moreButton: {
        alignItems: 'center',
        margin: 10
    },
    linksContainer: {
        width: '90%',
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 15,
        paddingBottom: 30
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom:10,
        paddingLeft: 20,
        paddingRight: 20
    },
    linkInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 10,
        marginBottom: 20,
        marginTop: 10,
    },
    linkNameStyle: {
        borderRadius: 3,
        borderColor: '#DADADA',
        width: '57%',
        borderWidth: 1,
        height: 35,
        textAlignVertical: 'center',
        paddingLeft: 10,
        color: '#6E6E6E',
        overflow: 'hidden',
    },
    linkIconStyle: {
        width: '15%',
        height: 35,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DADADA',
        alignItems: 'center',
        justifyContent: 'center'
    },
    linkRemoveButton: {
        elevation: 5,
        borderRadius: 2,
        width: '25%',
        height: 35,
        backgroundColor: '#ff6969',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkAddButton: {
        elevation: 5,
        borderRadius: 2,
        width: '25%',
        height: 35,
        backgroundColor: '#399eff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkInputStyle: {
        borderRadius: 3,
        borderColor: '#DADADA',
        width: '55%',
        height: 35,
        paddingLeft: 10,
        padding: 0,
        borderWidth: 1,
        color: '#6E6E6E',
        fontSize: 18
    },

    infoContainer: {
        width: '95%',
        borderRadius: 10,
        elevation: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 15,
        marginBottom: 15,
        paddingBottom: 30,
    },
    infoTitle: {
        color: '#8D8D8D',
        width: '100%',
        marginBottom: 1
    },
    abilityContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom:15
    },
    abilityText: {
        width: '35%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DADADA',
        height: 35,
        fontSize: 15,
        color: '#6E6E6E',
        paddingLeft: 10,
        textAlignVertical: 'center'
    },
    abilityGradeText: {
        width: '40%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DADADA',
        height: 35,
        fontSize: 15,
        color: '#6E6E6E',
        paddingLeft: 10,
        textAlignVertical: 'center'
    },
    removeAbilityButton: {
        width: '20%',
        elevation: 5,
        borderRadius: 2,
        height: 35,
        backgroundColor: '#ff6969',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chooseTalentContainer: {
        width: '100%',
    },
    abilityInput: {
        width: '100%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DADADA',
        height: 35,
        fontSize: 15,
        color: '#6E6E6E',
        paddingLeft: 10,
        padding: 0
    },
    abilityGradeInput: {
        width: '100%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DADADA',
        height: 35,
        fontSize: 15,
        color: '#6E6E6E',
        paddingLeft: 10,
        padding: 0
    },
    selectAbilityButton: {
        width: '30%',
        elevation: 5,
        borderRadius: 2,
        height: 35,
        backgroundColor: '#399eff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chooseTalentTitle: {
        color: '#8D8D8D',
        marginBottom: 1
    },
    hobbyText: {
        width: '72%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DADADA',
        height: 35,
        fontSize: 15,
        color: '#6E6E6E',
        paddingLeft: 10,
        paddingRight: 5,
        textAlignVertical: 'center'
    },
    selectHobbyButton: {
        width: '25%',
        height: 35,
        backgroundColor: '#399eff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        borderRadius: 2,
    },
    referansText: {
        width: '38%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DADADA',
        height: 35,
        fontSize: 15,
        color: '#6E6E6E',
        paddingLeft: 10,
        textAlignVertical: 'center',
        overflow: 'hidden',
        marginTop: 7
    },


    drivingLicence: {
        width: w / 6,
        height: 35,
        borderRadius: 100,
        borderColor: 'grey',
        borderWidth: 2,
        color: 'grey',
        margin: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18
    },

    upButton: {
        elevation: 5,
        width: 60,
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#399EFF',
        position: 'absolute',
        right:30,
        bottom:30
    }

})

export default styles;

