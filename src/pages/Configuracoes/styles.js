import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

export const ScrollButtonList = styled.ScrollView`
  width: 100%;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
`;

export const ListTitle = styled.Text`
  color: #000;
  text-align: left;
  padding-left: 25px;
  font-size: 16px;
`;

export const ListContent = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  background: #fff;
  padding: 20px;
  border: 1px solid #ececec
`;

export const Icon = styled(Ionicons)`
  color: #ccc;
`;