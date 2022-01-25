import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo.png';
import Button from '../../components/Button';
import { Container, Title, ScrollButtonList } from './styles';

function Configuracoes(){
    const navigation = useNavigation();

    return (
        <Container>
            <Title>Configurações do App</Title>
            <ScrollButtonList>
                <Button loading={false} onPress={() => navigation.navigate('SingleConfig', {repository: "Consultorio"})}>
                    Consultórios
                </Button>
                <Button loading={false} onPress={() => navigation.navigate('SingleConfig', {repository: "Tipodeprocesso"})}>
                    Tipos de Processo
                </Button>
                <Button loading={false} onPress={() => navigation.navigate('SingleConfig', {repository: "Portecirurgico"})}>
                    Portes Cirúrgicos
                </Button>
                <Button loading={false} onPress={() => navigation.navigate('SingleConfig', {repository: "Tipodecirurgia"})}>
                    Tipos de Cirurgias
                </Button>
                <Button loading={false} onPress={() => navigation.navigate('SingleConfig', {repository: "Cid10"})}>
                    Cid10
                </Button>
                <Button loading={false} onPress={() => navigation.navigate('SingleConfig', {repository: "Gruposcirurgico"})}>
                    Grupos Cirurgicos
                </Button>
                <Button loading={false} onPress={() => navigation.navigate('SingleConfig', {repository: "Gruposcirurgico"})}>
                    Cirurgias
                </Button>
                <Button loading={false} onPress={() => navigation.navigate('MultConfig', {repository: "MaterialOPME"})}>
                    Materiais OPME
                </Button>
                <Button loading={false} onPress={() => navigation.navigate('MultConfig', {repository: "MaterialPermanente"})}>
                    Materiais Permanentes
                </Button>
                <Button loading={false} onPress={() => navigation.navigate('SingleConfig', {repository: "Empresamaterial"})}>
                    Empresas de Materiais
                </Button>
                <Button loading={false} onPress={() => navigation.navigate('SingleConfig', {repository: "Tipoanestesia"})}>
                    Tipos de Anestesisas
                </Button>
            </ScrollButtonList>
        </Container>
    );
}

export default Configuracoes;