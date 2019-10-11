import {
    TouchableOpacity,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const Input = styled(TextInput)`
    color: #999;
    font-size: 20px;
    background: #260d1a;
    align-self: stretch;
    padding: 10px 10px;
    margin: 10px 40px;
`;
export const Label = styled(Text)`
    font-family: sans-serif;
    font-size: 68px;
    margin-bottom: 20px;
    color: #99003d;
    font-weight: bold;
`;
export const Cadastrar = styled(TouchableOpacity)`
    align-self: stretch;
    background: #99003d;
    padding: 10px 10px;
    margin: 5px 40px;
`;
export const Link = styled(TouchableOpacity)`
    margin-top: 2px;
`;
export const New = styled(Text)`
    font-size: 18px;
    color: #999;
    font-weight: bold;
`;
export const LabelButton = styled(Text)`
    font-size: 22px;
    color: #999;
    text-align: center;
    font-weight: bold;
`;