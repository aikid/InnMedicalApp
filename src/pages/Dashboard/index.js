import React, {useCallback, useState} from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getData, deleteData } from '../../service/configService';
import List from '../../components/List';
import { Container, Title, Listagem } from './styles';
import { Alert } from 'react-native';

function Dashboard({route}){
    const navigation = useNavigation();
    const repository = "Triagem";
    const [dataType, setDataType ] = useState([]);


    const prepareDelete = (id) =>{
        Alert.alert(
            "Aviso",
            "Você quer realmente remover esse registro?",
            [
              {
                text: "Sim",
                onPress: () => confirmDelete(id)
              },
              {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
            ]
        );
    }

    const confirmDelete = (id) => {
        deleteData(id,repository);
        setDataType(
            dataType.filter(dataType =>dataType.id !== id)
        );
    }

    useFocusEffect(
        useCallback(() => {
            async function loadData(){
                const verifyData = await getData(repository);
                setDataType(verifyData);
            }
        
            loadData();
        }, [])
    );

    return (
        <Container>
            <Title>Triagens Cadastradas</Title>
            
            <Listagem
                data={dataType}
                keyExtractor={item=>String(item.id)}
                renderItem={({ item }) => <List  onCancel={()=> prepareDelete(item.id)} data={item}/> }
            />

        </Container>
    );
}

export default Dashboard;