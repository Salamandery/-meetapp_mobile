import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import {
    useDispatch
} from 'react-redux';
import {
    Label,
    Container,
    New,
    Link,
    Entrar,
    FormInput,
    Form
} from './style';
import { signInRequest } from '~/Services/store/auth/action';
import Background from '~/Components/Background';

export default function SignIn({ navigation }) {
    const dispatch = useDispatch();
    const passwordRef = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handlerSignIn() {
        try {
            dispatch(signInRequest(email, password));
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
                <Form>
                    <FormInput placeholder="Digite seu e-mail"
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                        returnKeyType="next"
                        onSubmitEditing={()=>passwordRef.current.focus()}
                    />
                    <FormInput placeholder="Digite sua senha"
                        icon="lock-outline"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={handlerSignIn}
                    />
                    <Entrar onPress={handlerSignIn}>ENTRAR</Entrar>
                    <Link onPress={handlerSignUp}>
                        <New>Criar conta grátis</New>
                    </Link>
                </Form>
            </Container>
        </Background>
    );
}