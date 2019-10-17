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
    const [page, setPage] = useState(1);

    useEffect(()=>{
        loadMeetups();
    }, [date, page]);
    async function loadMeetups() {
        const res = await api.get(`/schedules?page=${page}&date=${getDate()}`);

        setMeetups(res.data);
    }
    function getDate() {
        const dt = `${date.getFullYear()}-${date.getMonth()<10?'0'+date.getMonth(): date.getMonth()}-${date.getDate()}`;
        return dt;
    }
    async function handlerPress(id) {
        try {
            await api.post(`/subscribe/${id}`);
            Alert.alert("Cadastro realizado", "Sua inscrição foi realizada com sucesso.");
            setTimeout(()=>{
                loadMeetups();
            }, 1000);
        } catch (err) {
            Alert.alert("Erro ao se inscrever", `Houve um erro ao se inscrever, tente novamente mais tarde. \n\n${err}`);
        }
    }
    function nextPage() {
        setPage(page + 1);

        loadMeetups();
    }
    function prevPage() {
        if (page === 1) return;

        setPage(page - 1);

        loadMeetups();
    }
    return (
        <Background>
            <Header />
            <DateTimeInput 
                date={date}
                onChange={setDate}
                prevPage={prevPage}
                nextPage={nextPage}
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