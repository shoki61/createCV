import { StyleSheet } from 'react-native';


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
        width: 120,
        height: 120,
        borderRadius: 100,
        elevation: 15
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
        width: 120,
        padding: 8,
        backgroundColor: '#399EFF',
        alignItems: 'center',
        marginTop: 10
    },
    removeButton: {
        width: 120,
        padding: 8,
        backgroundColor: '#ff6969',
        alignItems: 'center',
        marginTop: 10
    },
    inputTitle: {
        color: '#6a6a6a',
        width: '90%',
        fontSize: 25,
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
        fontSize: 18,
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



    experiencesInputView: {
        width: '100%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DADADA',
        height: 35,
        padding: 0,
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
        width: '85%',
        padding: 0,
        fontSize: 15,
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
        height: 10,
        marginBottom: 35,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    linkInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        height: 10,
        marginBottom: 20,
        marginTop: 10
    },
    linkNameStyle: {
        borderRadius: 3,
        borderColor: '#DADADA',
        width: '50%',
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
        width: '25%',
        height: 35,
        backgroundColor: '#FC4B4B',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    linkAddButton: {
        width: '25%',
        height: 35,
        backgroundColor: '#4a4a4a',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkInputStyle: {
        borderRadius: 3,
        borderColor: '#DADADA',
        width: '50%',
        height: 35,
        paddingLeft: 10,
        padding: 0,
        borderWidth: 1,
        color: '#6E6E6E',
        fontSize: 18
    },

    infoContainer: {
        width: '90%',
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
        marginBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
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
        height: 35,
        backgroundColor: '#ff6969',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chooseTalentContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 20
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
        width: '20%',
        height: 35,
        backgroundColor: '#4a4a4a',
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
        backgroundColor: '#4a4a4a',
        justifyContent: 'center',
        alignItems: 'center',
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

    listNumber: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        left: 10,
        zIndex: 100
    },
    SchoolListNumber: {
        position: 'absolute',
        width: 25,
        height: 25,
        borderRadius: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        left: 3,
        top: -10,
        zIndex: 100
    },

    drivingLicence: {
        width: 70,
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



})

export default styles;

