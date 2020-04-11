import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './views/home';
import CVForm from './views/cvForm';
import LoginPage from './views/loginPage';
import SignInPage from './views/signInPage';
import MyCVs from './views/myCVs';

const settings = {
    header: null
};

const pages = createStackNavigator(
    {
        home: { screen: Home, navigationOptions: settings },
        cvForm: { screen: CVForm, navigationOptions: settings },
        loginPage: { screen: LoginPage, navigationOptions: settings },
        signInPage: { screen: SignInPage, navigationOptions: settings },
        myCVs: { screen: MyCVs, navigationOptions: settings }
    }

);


export default createAppContainer(pages);