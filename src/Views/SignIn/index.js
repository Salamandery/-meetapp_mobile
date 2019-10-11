import React, {
    useState,
    useEffect
} from 'react';
import api from '../../Services/api';
import {
    Label,
    Input,
    Container,
    New,
    Link,
    Entrar,
    LabelButton
} from './style';
import Background from '~/Components/Background';

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handlerSignIn() {
        try {
            const res = await api.post('/sessions', {
                email,
                password
            });
            
            if (res.data) {
                
            }

        } catch (err) {
            console.log(err);
        }
    }

    function handlerSignUp() {
        navigation.navigate('SignUp');
    }
    return (
        <Background>
            <Container>
                <Label>M</Label>
                <Input placeholder="Digite seu e-mail"
                       autoCapitalize={false}
                       autoCorrect={false}
                       placeholderTextColor="#999"
                       value={email}
                       onChangeText={setEmail}
                />
                <Input placeholder="Digite sua senha"
                       autoCapitalize={false}
                       autoCorrect={false}
                       secureTextEntry={true}
                       placeholderTextColor="#999"
                       value={password}
                       onChangeText={setPassword}
                />
                <Entrar onPress={handlerSignIn}>
                    <LabelButton>ENTRAR</LabelButton>
                </Entrar>
                <Link onPress={handlerSignUp}>
                    <New>Criar conta grátis</New>
                </Link>
            </Container>
        </Background>
    );
}