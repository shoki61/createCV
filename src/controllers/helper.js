import { observable, action, decorate } from 'mobx';
import { AsyncStorage } from 'react-native';




class helper {
    userToken = null
}

decorate(
    helper,
    {
        userToken: observable

    }
);

export default new helper();
