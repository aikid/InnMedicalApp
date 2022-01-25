import React from 'react';
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';


export const DinamicInputMask = styled(TextInputMask)`
    width: 100%;
    margin-bottom: 15px;
    padding-right: 12px;
    padding-left: 12px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 15px;
    color: #444;
`;
