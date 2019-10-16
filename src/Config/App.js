import React from 'react';
import {
    StatusBar
} from 'react-native';
import { useSelector } from 'react-redux';
import createRouter from '~/Route';

export default function App() {
    const signed = useSelector(state=>state.auth.signed);

    const Routes = createRouter(signed);

    return (
        <>
        <StatusBar backgroundColor={ signed ? "#260d1a" : "#391326"} barStyle="light-content" />
        <Routes />
        </>
    );
}
