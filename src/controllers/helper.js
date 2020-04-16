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

    setUserCommunities(v) {
        this.userCommunities.push({
            communityName: v.communityName,
            communityTitle: v.communityTitle,
            communityStartDate: v.communityStartDate,
            communityFinishDate: v.communityFinishDate,
            communityDescription: v.communityDescription
        })
    }

    setUserProjects(v) {
        this.userProjects.push({
            projectName: v.projectName,
            projectTools: v.projectTools,
            projectLink: v.projectLink,
            projectDescription: v.projectDescription
        })
    }

    setUserCompanies(v) {
        this.userCompanies.push(
            {
                companyName: v.companyName,
                companyJob: v.companyJob,
                companyStartDate: v.companyStartDate,
                companyFinishDate: v.companyFinishDate,
                companyDescription: v.companyDescription
            }
        )
    }

    setUserReferences(v) {
        this.userReferences.push(
            {
                name: v.name,
                email: v.email,
                companyName: v.companyName,
                tel: v.tel
            }
        )
        //alert(JSON.stringify(this.userReferences))
    }
    setUserSchools(v) {
        this.userSchools.push(
            {
                schoolName: v.schoolName,
                schoolDepartment: v.schoolDepartment,
                schoolGrade: v.schoolGrade,
                schoolCity: v.schoolCity,
                schoolStartDate: v.schoolStartDate,
                schoolFinishDate: v.schoolFinishDate
            }
        )
        //alert(JSON.stringify(this.userSchools))
    }

    setUserLanguages(v) {
        this.UserLanguages.push(
            {
                name: v.name,
                level: v.level
            }
        )
    }
    setUserHobbies(v) {
        this.userHobbies.push(
            {
                hobby: v
            }
        )
        //alert(JSON.stringify(this.userHobbies))
    }

    setUserAbilities(v) {
        this.userAbilities.push(
            {
                name: v.name,
                level: v.level
            }
        )
    }

    setUserLinks(v) {
        this.userLinks.push(
            {
                link: v
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

        setUserAbilities: action,
        setUserLanguages: action,
        setUserHobbies: action,
        setToken: action,
        setUserLinks: action,
        setUserReferences: action,
        setUserSchools: action,
        setUserCompanies: action,
        setUserProjects: action,
        setUserCommunities: action

    }
);

export default new helper();
