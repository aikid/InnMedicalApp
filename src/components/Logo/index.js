import React from 'react';
import logo from '../../assets/logo.png';
import { LogoContent } from './styles';

function Logo(){
    return (
        <LogoContent source={logo} />
    );
}

export default Logo;