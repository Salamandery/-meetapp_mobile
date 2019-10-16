import React, {
    useState,
    useMemo
} from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, DatePickerAndroid } from 'react-native'

function DateTimeInput({ date, onChange }) {
    const [opened, setOpened] = useState(false);
    const dateFormatted = useMemo(()=>{
        return format(date, "dd 'de' MMMM", { locale: pt });
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
        <View onPress={handlerOpenPicker}>
            <Icon name="event" size={20} color="#fff" />
            <Text>{dateFormatted}</Text>
        </View>
    )
}

export default DateTimeInput;
