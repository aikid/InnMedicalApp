import React from 'react';
import { Image } from 'react-native';
import logo from '../../assets/logo.png';
import { Container, Title } from './styles';

function Triagem(){
    return (
        <Container>
            <Image source={logo} />
            <Title>Triagem</Title>
        </Container>
    );
}

export default Triagem;