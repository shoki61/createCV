import { observable, action, decorate } from 'mobx';
import { AsyncStorage } from 'react-native';




class helper {
    userToken = null;
    splashState = true;

    userLinks = []
    userHobbyes = []
    userAbilities = []
    UserLanguages = []
    userReferences = []
    userSchools = []

    setUserReferences(v) {
        this.userReferences.push(
            {
                name: v.name,
                email: v.email,
                companyName: v.companyName,
                tel: v.tel
            }
        )
        alert(JSON.stringify(this.userReferences))
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
        alert(JSON.stringify(this.userSchools))
    }

    setUserLanguages(v) {
        this.UserLanguages.push(
            {
                name: v.name,
                level: v.level
            }
        )
    }
    setUserHobbyes(v) {
        this.userHobbyes.push(
            {
                hobby: v
            }
        )
        //alert(JSON.stringify(this.userHobbyes))
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
        userHobbyes: observable,
        userReferences: observable,
        userSchools: observable,

        setUserAbilities: action,
        setUserLanguages: action,
        setUserHobbyes: action,
        setToken: action,
        setUserLinks: action,
        setUserReferences: action,
        setUserSchools: action

    }
);

export default new helper();
