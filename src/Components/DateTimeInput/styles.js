import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 20px 0 30px;
    align-self: center;
    width: 70%;
`;
export const DataButton = styled.TouchableOpacity`
    padding: 0 15px;
    height: 64px;
    background: rgba(0, 0, 0, .1);
    border-radius: 4px;
    margin: 0 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-left: 15px;
    margin-right: 15px;
    font-weight: bold;
`;