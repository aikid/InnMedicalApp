import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
  align-items: stretch;
  justify-content: center;
`;

export const FormContent = styled.KeyboardAvoidingView`

`;

export const ProgressContent = styled.View`
  flex: 1;
  width: 100%
  padding-left: 20px;
  padding-right: 20px;
  align-items: stretch;
`;


export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
    background-color: #557CF2;
    border-radius: 4px;
    padding: 16px;
    align-items: center;
    margin-top: 10px;
`;

export const SubmitButtonTitle = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
`;