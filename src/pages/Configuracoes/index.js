import React from 'react';
import { Image } from 'react-native';
import logo from '../../assets/logo.png';
import { Container, Title } from './styles';

function Configuracoes(){
    return (
        <Container>
            <Image source={logo} />
            <Title>Configurações</Title>
        </Container>
    );
}

export default Configuracoes;