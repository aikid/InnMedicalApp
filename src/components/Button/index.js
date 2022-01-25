import React from 'react';
import { ActivityIndicator } from 'react-native';
import propTypes from 'prop-types';
import { Container,Text } from './styles';

const Button = ({children, loading, ...rest}) => {
  return (
    <Container {...rest}>
        {loading ? (
            <ActivityIndicator size="small" color="#d41132"/>
        ):(
            <Text>{children}</Text>
        )}
    </Container>
  );
}

Button.propTypes = {
    children: propTypes.string.isRequired,
    loading: propTypes.bool,
};

Button.defaultProps = {
    loading: false,
};

export default Button;