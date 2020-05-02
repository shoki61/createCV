import { observable, action, decorate } from 'mobx';
import { AsyncStorage } from 'react-native';




class helper {
    userToken = null;
    splashState = true;

    userLinks = []
    userHobbies = []
    userAbilities = []
    UserLanguages = []
    userReferences = []
    userSchools = []
    userCompanies = []
    userProjects = []
    userCommunities = []
    userDrivingLicencies = []

    selectedCV = []

    selectedCVColor = ''

    selectedOrderCV = ''

    setSelectedOrderCV(v) {
        this.selectedCV = v
    }

    setUserDrivingLicencies(v, color) {
        this.userDrivingLicencies.push({
            licence: v,
            color: color
        })
    }

    setUserCommunities(v, color) {
        this.userCommunities.push({
            communityName: v.communityName,
            communityTitle: v.communityTitle,
            communityStartDate: v.communityStartDate,
            communityFinishDate: v.communityFinishDate,
            communityDescription: v.communityDescription,
            listNumberColor: color
        })
    }

    setUserProjects(v, color) {
        this.userProjects.push({
            projectName: v.projectName,
            projectTools: v.projectTools,
            projectLink: v.projectLink,
            projectDescription: v.projectDescription,
            listNumberColor: color
        })
    }

    setUserCompanies(v, color) {
        this.userCompanies.push(
            {
                companyName: v.companyName,
                companyJob: v.companyJob,
                companyStartDate: v.companyStartDate,
                companyFinishDate: v.companyFinishDate,
                companyDescription: v.companyDescription,
                listNumberColor: color
            }
        )
    }

    setUserReferences(v, color) {
        this.userReferences.push(
            {
                name: v.name,
                email: v.email,
                companyName: v.companyName,
                tel: v.tel,
                listNumberColor: color
            }
        )
        //alert(JSON.stringify(this.userReferences))
    }
    setUserSchools(v, color) {
        this.userSchools.push(
            {
                schoolName: v.schoolName,
                schoolDepartment: v.schoolDepartment,
                schoolGrade: v.schoolGrade,
                schoolCity: v.schoolCity,
                schoolStartDate: v.schoolStartDate,
                schoolFinishDate: v.schoolFinishDate,
                listNumberColor: color
            }
        )
        //alert(JSON.stringify(this.userSchools))
    }

    setUserLanguages(v, color) {
        this.UserLanguages.push(
            {
                name: v.name,
                level: v.level,
                listNumberColor: color
            }
        )
    }
    setUserHobbies(v, color) {
        this.userHobbies.push(
            {
                hobby: v,
                listNumberColor: color
            }
        )
        //alert(JSON.stringify(this.userHobbies))
    }

    setUserAbilities(v, color) {
        this.userAbilities.push(
            {
                name: v.name,
                level: v.level,
                listNumberColor: color
            }
        )
    }

    setUserLinks(v, color, i, iCV) {
        this.userLinks.push(
            {
                link: v,
                listNumberColor: color,
                linkIcon: i,
                linkIconCV: iCV
            }
        )
    }

    setToken() {
        AsyncStorage.getItem('userToken')
            .then((response) => {
                this.userToken = response
            })
    }

}

decorate(
    helper,
    {
        userToken: observable,
        splashState: observable,
        userLinks: observable,
        UserLanguages: observable,
        userHobbies: observable,
        userReferences: observable,
        userSchools: observable,
        userCompanies: observable,
        userProjects: observable,
        userCommunities: observable,
        userDrivingLicencies: observable,
        selectedCV: observable,
        selectedOrderCV: observable,
        selectedCVColor: observable,

        setUserAbilities: action,
        setUserLanguages: action,
        setUserHobbies: action,
        setToken: action,
        setUserLinks: action,
        setUserReferences: action,
        setUserSchools: action,
        setUserCompanies: action,
        setUserProjects: action,
        setUserCommunities: action,
        setUserDrivingLicencies: action,
        setSelectedOrderCV: action

    }
);

export default new helper();
