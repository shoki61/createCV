import { observable, action, decorate } from 'mobx';
import { AsyncStorage } from 'react-native';




class helper {
    userToken = null;
    splashState = true;

    userLinks = []
    setUserLinks(v) {
        this.userLinks.push(
            {
                link: v
            }
        )
        alert(JSON.stringify(this.userLinks))
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
        setToken: action,
        setUserLinks: action

    }
);

export default new helper();
