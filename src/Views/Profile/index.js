import React from 'react'
import { View, Text } from 'react-native'

import Background from '~/Components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Profile() {
    return (
        <Background>
            <Text></Text>
        </Background>
    )
}

export default Profile;

Profile.navigationOptions = {
    tabBarLabel: 'Meu Perfil',
    tabBarIcon: ({ tintColor }) => <Icon name="person" size={20} color={tintColor} /> 
};