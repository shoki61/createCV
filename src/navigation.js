import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './views/home';
import CVForm from './views/cvForm';

const settings = {
    header: null
};

const pages = createStackNavigator(
    {
        home: { screen: Home, navigationOptions: settings },
        cvForm: { screen: CVForm, navigationOptions: settings }
    }

);


export default createAppContainer(pages);