import React, {
    useState,
    useRef
} from 'react';
import {
    useDispatch
} from 'react-redux';
import {
    Label,
    Container,
    Back,
    Link,
    Cadastrar,
    FormInput,
    Form
} from './style';
import { signUpRequest } from '~/Services/store/auth/action';
import Background from '~/Components/Background';

export default function SignUp({ navigation }) {
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function handlerSignUp() {
        try {
            dispatch(signUpRequest(name, email, password));

            navigation.navigate('SignIn');
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
                <Form>
                    <FormInput placeholder="Nome Completo"
                        icon="person-outline"
                        value={name}
                        onChangeText={setName}
                        ref={emailRef}
                        returnKeyType="next"
                        onSubmitEditing={()=>emailRef.current.focus()}
                    />
                    <FormInput placeholder="Digite seu e-mail"
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                        returnKeyType="next"
                        ref={emailRef}
                        onSubmitEditing={()=>passwordRef.current.focus()}
                    />
                    <FormInput placeholder="Digite sua senha"
                        icon="lock-outline"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={handlerSignUp}
                    />
                    <Cadastrar onPress={handlerSignUp}>CADASTRAR</Cadastrar>
                    <Link onPress={handlerSignUp}>
                        <Back onPress={handlerSignIn}>Já tenho conta</Back>
                    </Link>
                </Form>
            </Container>
        </Background>
    );
}