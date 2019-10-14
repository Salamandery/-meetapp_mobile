import React from 'react'
import { View, Text } from 'react-native'

import Background from '~/Components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Subscribe() {
    return (
        <Background>
            <Text></Text>
        </Background>
    )
}

export default Subscribe;

Subscribe.navigationOptions = {
    tabBarLabel: 'Inscrições',
    tabBarIcon: ({ tintColor }) => <Icon name="local-offer" size={20} color={tintColor} /> 
};