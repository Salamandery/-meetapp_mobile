import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/Components/Input';
import Button from '~/Components/Button';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: 0 15px;
`;
export const Form = styled.View`
    align-self: stretch;
    margin-top: 25px;
`;
export const FormInput = styled(Input)`
    margin-bottom: 10px;
`;
export const LabelSave = styled.Text`
    font-size: 18px;
`;
export const Save = styled(Button)`
    background: #99003d;
    margin-top: 5px;
    padding: 5px 0;
`;
export const Logout = styled(Button)`
    background: #990000;
    margin-top: 5px;
`;
export const PasswordGroup = styled.View`
    align-items: center;
    border-top-width: 1px;
    border-top-color: #333;
    margin-top: 20px;
    padding-top: 15px;
`;