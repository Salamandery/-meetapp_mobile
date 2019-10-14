import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/Components/Input';
import Button from '~/Components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding'
})`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
`;
export const Form = styled.View`
    align-self: stretch;
    margin-top: 50px;
`;
export const FormInput = styled(Input)`
    margin-bottom: 10px;
`;
export const Label = styled.Text`
    font-family: sans-serif;
    font-size: 68px;
    margin-bottom: 20px;
    color: #99003d;
    font-weight: bold;
`;
export const Entrar = styled(Button)`
    background: #99003d;
    margin-top: 5px;
`;
export const Link = styled.TouchableOpacity`
    margin-top: 20px;
`;
export const New = styled.Text`
    text-align: center;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
`;