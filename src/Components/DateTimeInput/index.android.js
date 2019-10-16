import React, {
    useState,
    useMemo
} from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DatePickerAndroid } from 'react-native';
import { DataButton, Container, Text, } from './styles';

function DateTimeInput({ date, onChange }) {
    const dateFormatted = useMemo(()=>{
        let dt = format(date, "dd 'de' MMMM", { locale: pt });
        dt = dt.split(' ')[0] + " " + dt.split(' ')[1]+ " " + dt.charAt(6).toUpperCase() + dt.slice(7);
        return dt;
    }, [date]);

    async function handlerOpenPicker() {
        const { action, year, month, day } = await DatePickerAndroid.open({
            mode: 'spinner',
            date,
        });

        if (action === DatePickerAndroid.dateSetAction) {
            const selectedDate = new Date(year, month, day);

            onChange(selectedDate);
        }
    }
    return (
        <Container>
            <DataButton onPress={handlerOpenPicker}>
                <Icon name="navigate-before" size={20} color="#fff" />
                <Text>{dateFormatted}</Text>
                <Icon name="navigate-next" size={20} color="#fff" />
            </DataButton>
        </Container>
    )
}

export default DateTimeInput;
