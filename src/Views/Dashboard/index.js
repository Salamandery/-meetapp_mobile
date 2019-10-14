import React from 'react'
import { View, Text } from 'react-native'

import Background from '~/Components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Dashboard() {
    return (
        <Background>
            <Text></Text>
        </Background>
    )
}

export default Dashboard;

Dashboard.navigationOptions = {
    tabBarLabel: 'Meetups',
    tabBarIcon: ({ tintColor }) => <Icon name="list" size={24} color={tintColor} /> 
};