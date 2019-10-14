import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signSuccess, signFailure } from './action';

import api from '../../api';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const res = yield call(api.post, 'sessions', {
            email,
            password
        });

        const { token, user } = res.data;

        api.defaults.headers.authorization = `Bearer ${token}`;

        yield put(signSuccess(token, user));
    } catch (err) {
        yield put(signFailure());
        Alert.alert('Erro ao fazer o login', 'Verifique os dados informados!');
        console.log(err);
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;

        yield call(api.post, 'users', {
            name,
            email,
            password
        });

        Alert.alert('Cadastro realizado com sucesso');
    } catch (err) {
        yield put(signFailure());
        Alert.alert('Erro ao cadastrar', 'verifique os dados informados');
        console.log(err);
    }


}

export function setToken({ payload }) {
    if (!payload) return;
    
    const { token } = payload.auth;
    api.defaults.headers.authorization = `Bearer ${token}`;
}

export function signOut() {

}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT_REQUEST', signOut),
]);