import React, { useRef } from 'react';
import { Image } from 'react-native';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo.png';
import Input from '../../components/Input';
import { Container, FormContent, Title, SubmitButton, SubmitButtonTitle } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
function Login(){
    const navigation = useNavigation();
    const formRef = useRef(null);
    const pickerOptions = [
        { value: 'diego3g', label: 'Diego Fernandes' },
        { value: 'EliasGcf', label: 'Elias Gabriel' },
      ];

    function handleSubmit(data) {
        console.log(data);
        navigation.navigate('Dash');
    }
    
    
    return (
        <Container>
            <Image source={logo} />
            <FormContent behavior={Platform.OS === 'ios' ? 'padding' : ''}>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="email" placeholder="Seu e-mail" autoCorrect={false} autoCapitalize="none" keyboardType="email-address"/>
                    <Input name="password" placeholder="Sua Senha" secureTextEntry={true} autoCorrect={false} autoCapitalize="none"/>
                    <SubmitButton onPress={() => formRef.current.submitForm()}>
                        <SubmitButtonTitle>Entrar</SubmitButtonTitle>
                    </SubmitButton>
                </Form>
            </FormContent>  
        </Container>
    );
}

export default Login;