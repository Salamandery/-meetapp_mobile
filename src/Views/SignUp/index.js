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
    Cadastrar,
    LabelButton
} from './style';
import Background from '~/Components/Background';

export default function SignUp({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function handlerSignUp() {
        try {
            const res = await api.post('/users', {
                name,
                email,
                password
            });
            
            setTimeout(()=>{
                navigation.navigate('SignIn');
            }, 1000);

        } catch (err) {
            console.log(err);
        }
    }

    function handlerSignIn() {
        navigation.navigate('SignIn');
    }
    return (
        <Background>
            <Container>
                <Label>M</Label>
                <Input placeholder="Nome completo"
                       autoCapitalize={false}
                       autoCorrect={false}
                       placeholderTextColor="#999"
                       value={name}
                       onChangeText={setName}
                />
                <Input placeholder="Digite seu e-mail"
                       autoCapitalize={false}
                       autoCorrect={false}
                       placeholderTextColor="#999"
                       value={email}
                       onChangeText={setEmail}
                />
                <Input placeholder="Sua senha secreta"
                       autoCapitalize={false}
                       autoCorrect={false}
                       secureTextEntry={true}
                       placeholderTextColor="#999"
                       value={password}
                       onChangeText={setPassword}
                />
                <Cadastrar onPress={handlerSignUp}>
                    <LabelButton>CADASTRAR</LabelButton>
                </Cadastrar>
                <Link onPress={handlerSignIn}>
                    <New>Já tenho uma conta.</New>
                </Link>
            </Container>
        </Background>
    );
}