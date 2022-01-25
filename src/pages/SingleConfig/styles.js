import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;

export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
`;

export const Listagem = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle:{ padding: 30 }
})`
  width: 100%;
`;

export const FormContent = styled.KeyboardAvoidingView`
  width: 100%
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
  align-items: stretch;
  justify-content: center;
`;

export const SubmitButton = styled.TouchableOpacity`
    margin-top: 10px;
    background-color: #557CF2;
    border-radius: 4px;
    padding: 16px;
    align-items: center;
`;

export const SubmitButtonTitle = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
`;