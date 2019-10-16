import React, {
    useState,
    useRef
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import Background from '~/Components/Background';
import Header from '~/Components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Container,
    Logout,
    LabelSave,
    Save,
    FormInput,
    Form,
    PasswordGroup
} from './style';
import { updateProfileRequest } from '~/Services/store/user/action';
import { signOutRequest } from '~/Services/store/auth/action';

function Profile() {
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user.user);
    const emailRef = useRef();
    const oldpasswordRef = useRef();
    const conpasswordRef = useRef();
    const passwordRef = useRef();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');

    async function handlerUpdate() {
        try {
            dispatch(updateProfileRequest({
                name,
                email,
                password,
                oldPassword,
                confirmPassword,
            }));
        } catch (err) {
            console.log(err);
        }
    }

    function handlerSignOut() {
        try {
            dispatch(signOutRequest());
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Background>
            <Header />
            <Container>
                <Form>
                    <FormInput placeholder="Digite seu nome"
                        autoCorrect={true}
                        value={name}
                        onChangeText={setName}
                        returnKeyType="next"
                        onSubmitEditing={()=>emailRef.current.focus()}
                    />
                    <FormInput placeholder="Digite seu e-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                        ref={emailRef}
                        returnKeyType="next"
                        onSubmitEditing={()=>oldpasswordRef.current.focus()}
                    />
                    <PasswordGroup>
                        <FormInput placeholder="Senha atual"
                            secureTextEntry={true}
                            value={oldPassword}
                            onChangeText={setOldPassword}
                            ref={oldpasswordRef}
                            returnKeyType="next"
                            onSubmitEditing={()=>passwordRef.current.focus()}
                        />
                        <FormInput placeholder="Nova senha"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                            ref={passwordRef}
                            returnKeyType="next"
                            onSubmitEditing={()=>conpasswordRef.current.focus()}
                        />
                        <FormInput placeholder="Confirmação de senha"
                            secureTextEntry={true}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            ref={conpasswordRef}
                            returnKeyType="send"
                            onSubmitEditing={handlerUpdate}
                        />
                    </PasswordGroup>
                    <Save onPress={handlerUpdate}>
                        <LabelSave>Salvar perfil</LabelSave>
                    </Save>
                    <Logout onPress={handlerSignOut}>Sair do Meetapp</Logout>
                </Form>
            </Container>
        </Background>
    )
}

export default Profile;

Profile.navigationOptions = {
    tabBarLabel: 'Meu Perfil',
    tabBarIcon: ({ tintColor }) => <Icon name="person" size={20} color={tintColor} /> 
};