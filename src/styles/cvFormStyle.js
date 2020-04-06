import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    progressBarView: {
        width: 330,
        backgroundColor: '#399EFF',
        height: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50
    },
    progressBarIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#399EFF',
        alignItems: 'center',
        justifyContent: 'center'
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
    selectButton: {
        width: 120,
        padding: 6,
        backgroundColor: '#399EFF',
        alignItems: 'center',
        borderRadius: 7,
        marginTop: 10,
        marginBottom: 10,
        elevation: 5,
    },
    removeButton: {
        width: 120,
        padding: 6,
        backgroundColor: '#FC4B4B',
        alignItems: 'center',
        borderRadius: 7,
        elevation: 5
    },
    inputTitle: {
        color: '#399EFF',
        fontSize: 18,
        marginBottom: 3,
        width: '90%'
    },
    inputStyle: {
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#fff',
        fontSize: 15,
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#737373',
        marginBottom: 15
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
        width: '90%',
        height: 10,
        marginBottom: 35
    },
    linkInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        height: 10,
        marginBottom: 20,
        marginTop: 20
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
        width: '20%',
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
        backgroundColor: '#399EFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
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


    /*renderExperiences styles*/
    infoContainer: {
        width: '90%',
        borderRadius: 10,
        elevation: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 15,
        paddingBottom: 30,
        marginBottom: 15
    },
    infoTitle: {
        color: '#8D8D8D',
        width: '100%',
        marginBottom: 1
    },
    infoInput: {
        width: '100%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DADADA',
        height: 35,
        padding: 0,
        fontSize: 18,
        color: '#8D8D8D',
        paddingLeft: 10,
        marginBottom: 10
    },
    descriptionInput: {
        width: '100%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DADADA',
        padding: 0,
        fontSize: 18,
        color: '#8D8D8D',
        paddingLeft: 10,
        marginBottom: 10,
        textAlignVertical: 'top'
    },
    abilityContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    abilityText: {
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
    abilityGradeText: {
        width: '30%',
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
        width: '25%',
        height: 35,
        backgroundColor: '#FC4B4B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    chooseTalentContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        alignItems: 'flex-end'
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
        backgroundColor: '#399EFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
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
        textAlignVertical: 'center'
    },
    selectHobbyButton: {
        width: '25%',
        height: 35,
        backgroundColor: '#399EFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    referansText: {
        width: '100%',
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
    }



})

export default styles;

