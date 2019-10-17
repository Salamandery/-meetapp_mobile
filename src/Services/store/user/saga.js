import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../api';
import { updateProfileSuccess, updateProfileFailure } from './action';
export function* updateProfile({ payload }) {
    try {
        const { name, email, ...rest} = payload.data;
        const profile = Object.assign(
            { name, email },
            rest.oldPassword ? rest : {},
        );

        const res = yield call(api.put, 'users', profile);

        Alert.alert('Perfil atualizado com sucesso');

        yield put(updateProfileSuccess(res.data));
    } catch (err) {
        yield put(updateProfileFailure());
        Alert.alert('Houve algum problema ao atualizar seu perfil', 'Confira os dados informados');
        console.log(err);
    }
}

export default all([
    takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
]);