import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 20px;
    align-self: center;
    width: 70%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const DataButton = styled.TouchableOpacity`
    padding: 0 0px;
    height: 64px;
    background: rgba(0, 0, 0, .1);
    border-radius: 4px;
    align-items: center;
    flex-direction: row;
`;
export const PageButton = styled.TouchableOpacity`
    padding: 0 10px;
    height: 64px;
    background: rgba(0, 0, 0, .1);
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #fff;
    margin: 0 15px;
    font-weight: bold;
`;