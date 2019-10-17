import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import Button from '../Button';

export const Container = styled.View`
    padding: 0 20px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Subscribe = styled(Button)`
    align-self: stretch;
    background: #99003d;
    justify-content: center;
    align-items: center;
    margin: 15px;
`;

export const Card = styled.View`
    flex: 1;
    background: #fff;
    margin-bottom: 15px;
    border-radius: 4px;
`;

export const Info = styled.View`
    align-self: stretch;
    padding: 0 15px;
`;

export const Group = styled.View`
    align-self: stretch;
    margin-top: 2px;
    padding: 5px 10px;
    flex-direction: row;
    align-items: baseline;
`;

export const Title = styled.Text`
    align-self: stretch;
    color: #000;
    padding: 0px 10px 5px;
    font-weight: bold;
    font-size: 18px;
`;

export const TextInfo = styled.Text`
    align-self: stretch;
    color: #999;
    font-size: 14px;
    margin-left: 5px;
`;

export const Banner = styled.Image`
    align-self: stretch;
    height: 160px;
    background: #e1e1e1;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin-bottom: 15px;
`;

export const FList = styled(FlatList)`
    margin-top: 15px;
`;