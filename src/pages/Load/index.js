import React from 'react';
import { Image } from 'react-native';
import logo from '../../assets/logo.png';
import { Container, Title, AnimationIcon } from './styles';
function Load(){
    return (
        <Container>
            <AnimationIcon
                source={require("../../assets/load.json")}
                autoPlay
            />
            <Title>Atualizando a base de dados aguarde...</Title>
        </Container>
    );
}

export default Load;