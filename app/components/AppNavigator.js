import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

/**import [ComponentName]Screen from './[componentname]/[componentname] */          //the second [componentname] is the actual js file where the component codes are
import SplashScreen from './Splash/Splash'
import LandingScreen from './Landing/Landing'
import RadioScreen from './Radio/Radio'
import NewsScreen from './News/News'
import NewsitemmodalScreen from './Newsitemmodal/Newsitemmodal'

/**add the identifier(eg. LoginScreen) along with the actual component to the stack*/
const AppNavigator = createStackNavigator({
    Splash: SplashScreen,
    Landing: LandingScreen,
    Radio: RadioScreen,
    News: NewsScreen,
    Newsitemmodal: NewsitemmodalScreen
},
    {
        initialRouteName: "Splash"   /**the component u want to see load first when the app starts */
    }
);

export default createAppContainer(AppNavigator);