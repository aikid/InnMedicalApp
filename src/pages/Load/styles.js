import React from 'react';
import styled from 'styled-components/native';
import LottieView from "lottie-react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
`;

export const AnimationIcon = styled(LottieView)`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;