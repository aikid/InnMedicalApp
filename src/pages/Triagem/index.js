import React, { useRef, useState, useEffect } from 'react';
import { Form } from '@unform/mobile';
import { Container, FormContent, Title, SubmitButton, SubmitButtonTitle } from './styles';
import Input from '../../components/Input';
import MaskInput from '../../components/MaskInput';
import Select from '../../components/Select';
export default function Triagem(){
    const formRef = useRef(null);
    const [steep,setSteep] = useState(1);
    const [formData, setFormData] = useState({});
    
    const pickerOptions = [
        { value: 'diego3g', label: 'Diego Fernandes' },
        { value: 'EliasGcf', label: 'Elias Gabriel' },
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
			Incress: () => { if(steep >= 1) setSteep(prevState => prevState + 1)},
			Decress: () => { if(steep >= 1) setSteep(prevState => prevState - 1)},
		};
		actionsOptions[action]();
	};

    function updateFormData(data){
        console.log(data);
        setFormData(prevState=>({...prevState, ...data}));
        console.log('Dados atuais do formulario: ', formData);
        nextStepp('Incress');
    }


    function handleSubmit(data) {
        console.log(data);
    }

    useEffect(()=>{

    },[])

    
    
    return (
        <Container>
            <FormContent>
                <Form ref={formRef} onSubmit={updateFormData}>
                    { steep == 1 &&
                        <>
                            <Title>Dados iniciais do paciente</Title>
                            <Input name="nome" placeholder="Nome do Paciente"/>
                            <Input name="email" placeholder="E-mail do Paciente" autoCorrect={false} autoCapitalize="none" keyboardType="email-address"/>
                            <MaskInput type="cpf" name="cpf" keyboardType="numeric" placeholder="CPF do Paciente" />
                            <MaskInput type="cel-phone" name="telefone1" keyboardType="numeric" placeholder="Telefone 1 do Paciente" />
                            <MaskInput type="cel-phone" name="telefone2" keyboardType="numeric" placeholder="Telefone 2 do Paciente" />
                            <SubmitButton onPress={() => formRef.current.submitForm()}>
                                <SubmitButtonTitle>Próximo</SubmitButtonTitle>
                            </SubmitButton>
                        </>
                    }
                    { steep == 2 &&
                        <>
                            <Title>Dados da Cirurgia</Title>
                            
                            <Select name="consultorio" items={pickerOptions} placeholder={{label: 'Consultório de Origem',value: null,color: '#9EA0A4'}}/>
                            <Select name="tipodeProcesso" items={pickerOptions} placeholder={{label: 'Tipo de Processo',value: null,color: '#9EA0A4'}}/>
                            <Select name="porteCirurgico" items={pickerOptions} placeholder={{label: 'Porte Cirúrgico',value: null,color: '#9EA0A4'}}/>
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
                            <Select name="tipodeCirurgia" items={pickerOptions} placeholder={{label: 'Tipo de Cirurgia',value: null,color: '#9EA0A4'}}/>
                            <Select name="oncologica" items={pickerOptions} placeholder={{label: 'Oncológica',value: null,color: '#9EA0A4'}}/>
                            <Select name="cid10" items={pickerOptions} placeholder={{label: 'Cid10',value: null,color: '#9EA0A4'}}/>
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
                           
                            <Select name="cirurgias" items={pickerOptions} placeholder={{label: 'Cirurgias',value: null,color: '#9EA0A4'}}/>
                            <Select name="materiaisCirurgicos" items={pickerOptions} placeholder={{label: 'Materiais Cirúrgicos',value: null,color: '#9EA0A4'}}/>
                            <Input name="materialOpme" placeholder="Material OPME" multiline/>
                            <Input name="materialPermanente" placeholder="Material Permanente" multiline/>
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
                           
                            <Select name="empresaMaterial" items={pickerOptions} placeholder={{label: 'Empresa Material',value: null,color: '#9EA0A4'}}/>
                            <Select name="anestesista" items={pickerOptions} placeholder={{label: 'Anestesista',value: null,color: '#9EA0A4'}}/>
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