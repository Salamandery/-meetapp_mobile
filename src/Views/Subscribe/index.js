import React, {
    useState,
    useEffect
} from 'react';
import api from '~/Services/api';
import {
    Alert
} from 'react-native';
import Background from '~/Components/Background';
import Header from '~/Components/Header';
import FlatList from '~/Components/FlatList';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Subscribe() {
    const [meetups, setMeetups] = useState([]);

    useEffect(()=>{
        loadMeetups();
    }, []);
    async function loadMeetups() {
        const res = await api.get(`/subscribe`);

        setMeetups(res.data);
    }
    async function handlerPress(id) {
        try {
            await api.delete(`/subscribe/${id}`);
            Alert.alert("Cancelamento realizado", "Seu cancelamento foi realizada com sucesso.");
            setTimeout(()=>{
                loadMeetups();
            }, 1000);
        } catch (err) {
            Alert.alert("Erro ao se inscrever", "Houve um erro ao se inscrever, tente novamente mais tarde.");
        }
    }
    return (
        <Background>
            <Header />
            <FlatList 
                func={handlerPress} 
                item={meetups} 
                titleButton="Cancelar inscrição"
            />
        </Background>
    )
}

export default Subscribe;

Subscribe.navigationOptions = {
    tabBarLabel: 'Inscrições',
    tabBarIcon: ({ tintColor }) => <Icon name="local-offer" size={20} color={tintColor} /> 
};