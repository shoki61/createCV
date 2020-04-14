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

        setUserAbilities: action,
        setUserLanguages: action,
        setUserHobbyes: action,
        setToken: action,
        setUserLinks: action,
        setUserReferences: action

    }
);

export default new helper();
