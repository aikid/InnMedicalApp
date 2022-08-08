import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo.png';
import { Container, Title, ScrollButtonList, ListContent, ListTitle, Icon } from './styles';

function Configuracoes(){
    const navigation = useNavigation();

    return (
        <Container>
            <Title>Configurações do App</Title>
            <ScrollButtonList>
                <ListContent onPress={() => navigation.navigate('SingleConfig', {repository: "Consultorio"})}>
                    <Icon name='home' size={20} />
                    <ListTitle>Consultórios</ListTitle>
                </ListContent>
                <ListContent onPress={() => navigation.navigate('SingleConfig', {repository: "Tipodeprocesso"})}>
                    <Icon name='file-tray-full' size={20} />
                    <ListTitle>Tipos de Processo</ListTitle>
                </ListContent>
                <ListContent onPress={() => navigation.navigate('SingleConfig', {repository: "Portecirurgico"})}>
                    <Icon name='logo-buffer' size={20} />
                    <ListTitle>Portes Cirúrgicos</ListTitle>
                </ListContent>
                <ListContent onPress={() => navigation.navigate('SingleConfig', {repository: "Tipodecirurgia"})}>
                    <Icon name='medkit' size={20} />
                    <ListTitle>Tipos de Cirurgias</ListTitle>
                </ListContent>
                <ListContent onPress={() => navigation.navigate('SingleConfig', {repository: "Cid10"})}>
                    <Icon name='server-outline' size={20} />
                    <ListTitle>Cid10</ListTitle>
                </ListContent>
                <ListContent onPress={() => navigation.navigate('SingleConfig', {repository: "Gruposcirurgico"})}>
                    <Icon name='ios-apps' size={20} />
                    <ListTitle>Grupos Cirurgicos</ListTitle>
                </ListContent>
                <ListContent onPress={() => navigation.navigate('SingleConfig', {repository: "Cirurgia"})}>
                    <Icon name='ios-bandage' size={20} />
                    <ListTitle>Cirurgias</ListTitle>
                </ListContent>
                <ListContent onPress={() => navigation.navigate('MultConfig', {repository: "MaterialOPME"})}>
                    <Icon name='ios-briefcase' size={20} />
                    <ListTitle>Materiais OPME</ListTitle>
                </ListContent>
                <ListContent onPress={() => navigation.navigate('MultConfig', {repository: "MaterialPermanente"})}>
                    <Icon name='ios-briefcase' size={20} />
                    <ListTitle>Materiais Permanentes</ListTitle>
                </ListContent>
                <ListContent onPress={() => navigation.navigate('SingleConfig', {repository: "Empresamaterial"})}>
                    <Icon name='ios-business' size={20} />
                    <ListTitle>Empresas de Materiais</ListTitle>
                </ListContent>
                <ListContent onPress={() => navigation.navigate('SingleConfig', {repository: "Tipoanestesia"})}>
                    <Icon name='thermometer' size={20} />
                    <ListTitle>Tipos de Anestesisas</ListTitle>
                </ListContent>
            </ScrollButtonList>
        </Container>
    );
}

export default Configuracoes;