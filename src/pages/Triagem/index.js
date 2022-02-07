import React, { useRef, useState, useEffect } from 'react';
import { Form } from '@unform/mobile';
import { Container, FormContent, Title, SubmitButton, SubmitButtonTitle } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from '../../components/Input';
import MaskInput from '../../components/MaskInput';
import Select from '../../components/Select';
import { setFormFieldsData,saveTriagem } from '../../service/configService';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { Alert } from 'react-native';
export default function Triagem(){
    const formRef = useRef(null);
    const [steep,setSteep] = useState(1);
    const [formData, setFormData] = useState({});
    const [dataBaseInput, setDataBaseInput] = useState({});
    const [selectedItems, setSelectedItems] = useState([]);
    const [fieldOpme, setFieldOpme] = useState('');
    const [fieldPermanente, setFieldPermanente] = useState('');
    const [fieldGruposCirurgicos, setFieldGruposCirurgicos] = useState('');
    
    const pickerOptions = [
        { value: 'Sim', label: 'Sim' },
        { value: 'Não', label: 'Não' },
    ];
    
    const checkRulesForm = (actuaSteep) =>{
        const rules = {
            Steep1: () => {if(!nome && !email && !cpf) return false},
        }
        rules[actuaSteep]();
    }
    

    const nextStepp = (action) => {
        if(steep < 1 ) return;
		const actionsOptions = {
			Incress: () => { if(steep < 6) setSteep(prevState => prevState + 1)},
			Decress: () => { if(steep > 1) setSteep(prevState => prevState - 1)},
		};
		actionsOptions[action]();
	};

    function updateFormData(data){
        setFormData(prevState=>({...prevState, ...data}));
        nextStepp('Incress');
        if(steep == 6) handleSubmit(formData);
    }


    function handleSubmit(data) {
        if(fieldOpme) data.materialOpme = fieldOpme;
        if(fieldPermanente) data.materialPermanente = fieldPermanente;
        if(fieldGruposCirurgicos) data.gruposcirurgicos = fieldGruposCirurgicos
        console.log(data);
        const save = saveTriagem(data);
        if(save) Alert.alert('Sucesso!','A triagem foi salva com sucesso');
        else Alert.alert('Opa!','O correu um erro ao salvar a triagem tente novamente');
    }

    const onSelectedItemsChange = (selectedItems) => {
        setSelectedItems(selectedItems)
    };

    useEffect(()=>{
        if(selectedItems && selectedItems.length > 0){
            for(let i=0; i<= selectedItems.length; i++){
                console.log(selectedItems[i]);
                const Materialopme = dataBaseInput.dataMaterialopme.find(data => data.groupId === selectedItems[i]);
                const Materialpermanente = dataBaseInput.dataMaterialpermanente.find(data => data.groupId === selectedItems[i]);
                const Gruposcirurgicos = dataBaseInput.dataGruposcirurgico.find(data => data.id === selectedItems[i]);
                if(Materialopme) setFieldOpme(prevState =>(prevState.concat('\n'+Materialopme.label)));
                if(Materialpermanente) setFieldPermanente(prevState =>(prevState.concat('\n'+Materialpermanente.label)));
                if(Gruposcirurgicos) setFieldGruposCirurgicos(prevState =>(prevState.concat(' , '+Gruposcirurgicos.name)));
            }
        }
        
    },[selectedItems])

    useEffect(()=>{
        async function loadFormData(){
            const dataFields = await setFormFieldsData();
            if(dataFields) setDataBaseInput(dataFields);
        }
        loadFormData();
    },[])

    
    
    return (
        <Container>
            <FormContent>
                <Form ref={formRef} onSubmit={updateFormData}>
                    { steep == 1 &&
                        <>
                            <Title>Dados iniciais do paciente</Title>
                            <Input name="nome" placeholder="Nome do Paciente"/>
                            <Input type="cpf" name="cpf" keyboardType="numeric" placeholder="CPF do Paciente" />
                            <Input name="email" placeholder="E-mail do Paciente" autoCorrect={false} autoCapitalize="none" keyboardType="email-address"/>
                            <Input type="cel-phone" name="telefone1" keyboardType="numeric" placeholder="Telefone 1 do Paciente" />
                            <Input type="cel-phone" name="telefone2" keyboardType="numeric" placeholder="Telefone 2 do Paciente" />
                            <SubmitButton onPress={() => formRef.current.submitForm()}>
                                <SubmitButtonTitle>Próximo</SubmitButtonTitle>
                            </SubmitButton>
                        </>
                    }
                    { steep == 2 &&
                        <>
                            <Title>Dados da Cirurgia</Title>
                            
                            <Select name="consultorio" items={dataBaseInput.dataConsultorios} placeholder={{label: 'Consultório de Origem',value: null,color: '#9EA0A4'}}/>
                            <Select name="tipodeProcesso" items={dataBaseInput.dataTipodeprocesso} placeholder={{label: 'Tipo de Processo',value: null,color: '#9EA0A4'}}/>
                            <Select name="porteCirurgico" items={dataBaseInput.dataPortecirurgico} placeholder={{label: 'Porte Cirúrgico',value: null,color: '#9EA0A4'}}/>
                            <Input name="cirurgiaPrincipal" placeholder="Cirurgia Principal" />
                            <SubmitButton onPress={() => formRef.current.submitForm()}>
                                <SubmitButtonTitle>Próximo</SubmitButtonTitle>
                            </SubmitButton>
                            <SubmitButton onPress={() => nextStepp('Decress')}>
                                <SubmitButtonTitle>Voltar</SubmitButtonTitle>
                            </SubmitButton>
                        </>
                    }
                    { steep == 3 &&
                        <>  
                            <Title>Dados da Cirurgia</Title>
                            <Select name="tipodeCirurgia" items={dataBaseInput.dataTipodecirurgia} placeholder={{label: 'Tipo de Cirurgia',value: null,color: '#9EA0A4'}}/>
                            <Select name="oncologica" items={pickerOptions} placeholder={{label: 'Oncológica',value: null,color: '#9EA0A4'}}/>
                            <Select name="cid10" items={dataBaseInput.dataCid10} placeholder={{label: 'Cid10',value: null,color: '#9EA0A4'}}/>
                            <Input name="diagnostico" placeholder="Diagnóstico" />
                            <SubmitButton onPress={() => formRef.current.submitForm()}>
                                <SubmitButtonTitle>Próximo</SubmitButtonTitle>
                            </SubmitButton>
                            <SubmitButton onPress={() => nextStepp('Decress')}>
                                <SubmitButtonTitle>Voltar</SubmitButtonTitle>
                            </SubmitButton>
                        </>
                    }
                    { steep == 4 &&
                        <>  
                            <Title>Dados da Cirurgia</Title>
                           
                            <Select name="cirurgias" items={dataBaseInput.dataCirurgia} placeholder={{label: 'Cirurgias',value: null,color: '#9EA0A4'}}/>
                            <SectionedMultiSelect
                                items={dataBaseInput.dataGruposcirurgico}
                                IconRenderer={Icon}
                                uniqueKey="id"
                                selectText="Grupos Cirurgicos"
                                selectedText="selecionados"
                                showDropDowns={true}
                                readOnlyHeadings={false}
                                showChips={false}
                                onSelectedItemsChange={onSelectedItemsChange}
                                selectedItems={selectedItems}
                            />
                            {/* <Select name="materiaisCirurgicos" items={dataBaseInput.dataGruposcirurgico} placeholder={{label: 'Materiais Cirúrgicos',value: null,color: '#9EA0A4'}}/> */}
                            <Input name="materialOpme" placeholder="Material OPME" value={fieldOpme} multiline/>
                            <Input name="materialPermanente" placeholder="Material Permanente" value={fieldPermanente} multiline/>
                            <SubmitButton onPress={() => formRef.current.submitForm()}>
                                <SubmitButtonTitle>Próximo</SubmitButtonTitle>
                            </SubmitButton>
                            <SubmitButton onPress={() => nextStepp('Decress')}>
                                <SubmitButtonTitle>Voltar</SubmitButtonTitle>
                            </SubmitButton>
                        </>
                    }
                    { steep == 5 &&
                        <>  
                            <Title>Dados da Cirurgia</Title>
                           
                            <Select name="empresaMaterial" items={dataBaseInput.dataEmpresamaterial} placeholder={{label: 'Empresa Material',value: null,color: '#9EA0A4'}}/>
                            <Select name="anestesista" items={dataBaseInput.dataTipoanestesia} placeholder={{label: 'Anestesista',value: null,color: '#9EA0A4'}}/>
                            <Select name="reservaCti" items={pickerOptions} placeholder={{label: 'Reserva CTI',value: null,color: '#9EA0A4'}}/>
                            <Input name="diariasCti" placeholder="Diárias CTI" />
                            <SubmitButton onPress={() => formRef.current.submitForm()}>
                                <SubmitButtonTitle>Próximo</SubmitButtonTitle>
                            </SubmitButton>
                            <SubmitButton onPress={() => nextStepp('Decress')}>
                                <SubmitButtonTitle>Voltar</SubmitButtonTitle>
                            </SubmitButton>
                        </>
                    }
                    { steep == 6 &&
                        <>  
                            <Title>Dados da Cirurgia</Title>
                           
                            <Select name="tipagemSanguinea" items={pickerOptions} placeholder={{label: 'Tipagem Sanguínea',value: null,color: '#9EA0A4'}}/>
                            <Select name="reservaSangue" items={pickerOptions} placeholder={{label: 'Reserva de Sangue',value: null,color: '#9EA0A4'}}/>
                            <Input name="tipoQuantidade" placeholder="Tipo e quantidade" />
                            <Input name="orientacoes" placeholder="Orientações Gerais" multiline/>
                            <SubmitButton onPress={() => formRef.current.submitForm()}>
                                <SubmitButtonTitle>Enviar</SubmitButtonTitle>
                            </SubmitButton>
                            <SubmitButton onPress={() => nextStepp('Decress')}>
                                <SubmitButtonTitle>Voltar</SubmitButtonTitle>
                            </SubmitButton>
                        </>
                    }
                </Form>
            </FormContent>        
        </Container>
    );
}