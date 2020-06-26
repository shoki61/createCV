import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from 'react-navigation-stack';

import Home from './views/home';
import CVExamples from './views/cvExamples';
import ShowCV from './views/showCV';
import PersonalInformation from './views/personalInformation';
import Experiences from './views/experiences';
import SaveCV from './views/saveCV';

const MyTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                    {
                        scale: next
                            ? next.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 0.9],
                            })
                            : 1,
                    },
                ],
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0],
                }),
            },
        };
    },
}

const settings = {
    ...MyTransition,
    header: false,
};

const pages = createStackNavigator(
    {
        home: { screen: Home, navigationOptions: settings },
        cvExamples: { screen: CVExamples, navigationOptions: settings },
        showCV: { screen: ShowCV, navigationOptions: settings },
        personalInformation: { screen: PersonalInformation, navigationOptions: settings },
        experiences: { screen: Experiences, navigationOptions: settings },
        saveCV: { screen: SaveCV, navigationOptions: settings },
    }

);


export default createAppContainer(pages);
