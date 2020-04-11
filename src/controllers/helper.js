import { observable, action, decorate } from 'mobx';
import { AsyncStorage } from 'react-native';




class helper {
    userToken = null;
    splashState = true
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
        setToken: action

    }
);

export default new helper();
