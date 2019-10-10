import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// Views
import SignIn from '~/Views/SignIn';
import SignUp from '~/Views/SignUp';

export default createAppContainer(
    createSwitchNavigator({
        SignIn,
        SignUp
    })
);

