import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom:15px;
  padding:20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 75%;
`;

export const Bandeira = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const Info = styled.View`
    margin-left: 15px;

`;

export const Nome = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: #333;
`;

export const Numero = styled.Text`
    color: #999;
    font-size: 13px;
    margin-top: 4px;
`;