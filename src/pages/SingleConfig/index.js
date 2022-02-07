import React, {useEffect, useState, useCallback, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import { getData, saveData, deleteData } from '../../service/configService';
import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import List from '../../components/List';
import { Container, Title, Listagem,  FormContent, SubmitButton, SubmitButtonTitle  } from './styles';
import { Alert } from 'react-native';

function SingleConfig({route}){
    const navigation = useNavigation();
    const { repository } = route.params;
    console.log(repository);
    const formRef = useRef(null);
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

    async function registerData(data, {reset}) {
        if(data && data.nome) {
            const saved = await saveData(data.nome,repository);
            if(saved) {
                const reverifyData = await getData(repository);
                setDataType(reverifyData);
                reset();
            }
            else Alert.alert('Erro ao salvar registro, tente novamente');
        }
        else {
            Alert.alert('O campo é obrigatório');
        }
    }
    
    useEffect(async () => {
        const verifyData = await getData(repository);
        setDataType(verifyData);
    }, []);

    return (
        <Container>
            <Title>Configuração dos Campos</Title>
            
            <Listagem
                data={dataType}
                keyExtractor={item=>String(item.id)}
                renderItem={({ item }) => <List  onCancel={()=> prepareDelete(item.id)} data={item}/> }
            />

            <FormContent behavior={Platform.OS === 'ios' ? 'padding' : ''}>
                <Form ref={formRef} onSubmit={registerData}>
                    <Input name="nome" placeholder="Digite aqui..."/>
                    <SubmitButton onPress={() => formRef.current.submitForm()}>
                        <SubmitButtonTitle>Enviar</SubmitButtonTitle>
                    </SubmitButton>
                </Form>
            </FormContent>  


        </Container>
    );
}

export default SingleConfig;