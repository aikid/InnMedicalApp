import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo.png';
import { Container, Title } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
function Login(){
    const navigation = useNavigation();
    return (
        <Container>
            <Image source={logo} />
            <TouchableOpacity onPress={()=>navigation.navigate('Dash')}>
                <Title>Entrar</Title>
            </TouchableOpacity>
        </Container>
    );
}

export default Login;