import React, {
    useMemo
} from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DatePickerAndroid } from 'react-native';
import { DataButton, Container, Text, PageButton } from './styles';

function DateTimeInput({ date, onChange, prevPage, nextPage }) {
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
            <PageButton onPress={prevPage}>
                <Icon name="navigate-before" size={20} color="#fff" />
            </PageButton>
            <DataButton onPress={handlerOpenPicker}>
                <Text>{dateFormatted}</Text>
            </DataButton>
            <PageButton onPress={nextPage}>
                <Icon name="navigate-next" size={20} color="#fff" />
            </PageButton>
        </Container>
    )
}

export default DateTimeInput;
