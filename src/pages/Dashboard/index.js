import React from 'react';
import { Image } from 'react-native';
import Logo from '../../components/Logo';
import { Container, Title } from './styles';

function Dashboard(){
    return (
        <Container>
            <Logo />
            <Title>Triagens ja cadastradas</Title>
        </Container>
    );
}

export default Dashboard;