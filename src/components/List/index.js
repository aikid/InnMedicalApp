import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Left, Bandeira, Info, Nome, Numero } from './styles';

export default function List({ data, onCancel }) {
    const bandeira = require('../../assets/logo-lista.png');
    
  return (
    <Container>
        <Left>
            <Bandeira source={bandeira}></Bandeira>
            <Info>
                <Nome>Identificador: {data.id}</Nome>
                <Numero>Nome: {data.nome}</Numero>
                {data.tuss && <Numero>TUSS: {data.tuss}</Numero>}
            </Info>
        </Left>

        <TouchableOpacity onPress={onCancel}>
            <Icon name="delete" size={20} color="#f64c75"/>
        </TouchableOpacity>
    </Container>
  );
}