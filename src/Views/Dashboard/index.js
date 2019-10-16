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
import DateTimeInput from '~/Components/DateTimeInput';
import FlatList from '~/Components/FlatList';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Dashboard() {
    const [date, setDate] = useState(new Date());
    const [meetups, setMeetups] = useState([]);

    useEffect(()=>{
        async function loadMeetups() {
            const res = await api.get(`/schedules?page=1&date=${getDate()}`);

            setMeetups(res.data);
        }

        loadMeetups();
    }, [date]);
    function getDate() {
        const dt = `${date.getFullYear()}-${date.getMonth()<10?'0'+date.getMonth(): date.getMonth()}-${date.getDate()}`;
        return dt;
    }
    async function handlerPress(id) {
        try {
            await api.post(`/subscribe/${id}`);
            Alert.alert("Cadastro realizado", "Sua inscrição foi realizada com sucesso.");
        } catch (err) {
            Alert.alert("Erro ao se inscrever", `Houve um erro ao se inscrever, tente novamente mais tarde. \n\n${err}`);
        }
    }
    return (
        <Background>
            <Header />
            <DateTimeInput 
                date={date}
                onChange={setDate}
            />
            <FlatList 
                func={handlerPress} 
                item={meetups} 
                titleButton="Realizar inscrição"
            />
        </Background>
    )
}

export default Dashboard;

Dashboard.navigationOptions = {
    tabBarLabel: 'Meetups',
    tabBarIcon: ({ tintColor }) => <Icon name="list" size={24} color={tintColor} /> 
};