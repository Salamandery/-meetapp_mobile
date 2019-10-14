import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// Views
import SignIn from '~/Views/SignIn';
import SignUp from '~/Views/SignUp';

import Dashboard from '~/Views/Dashboard';
import Subscribe from '~/Views/Subscribe';
import Profile from '~/Views/Profile';
export default (isSigned = false) => createAppContainer(
    createSwitchNavigator({
        Sign: createSwitchNavigator({
            SignIn,
            SignUp
        }),
        App: createBottomTabNavigator({
            Dashboard,
            Subscribe,
            Profile,
        }, {
            tabBarOptions: {
                keyboardHidesTabBar: true,
                activeTintColor: "#fff",
                inactiveTintColor: "rgba(255,255,255, .6)",
                style: {
                    backgroundColor: "#260d1a",
                    borderTopWidth: 0,
                }
            }
        }),
    }, {
        initialRouteName: isSigned ? 'App' : 'Sign',
    })
);

