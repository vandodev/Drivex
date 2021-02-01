import React, {useState} from 'react';
import {Text, Image,Keyboard} from 'react-native';

import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  Input,
  Spacer,
} from '../../styles';

const Car = () => {
  return (
    <Container padding={30} justify="flex-start">
      <Container align="flex-start" height={40}>
        <Title>Cadastre seu veículo</Title>
        <SubTitle>Preencha os campos abaixo</SubTitle>
      </Container>
      <Container justify="flex-start">
        <Spacer height={50} />
        <Input placeholder="Placa do veículo" />
        <Spacer />
        <Input placeholder="Marca do veículo" />
        <Spacer />
        <Input placeholder="Modelo do veículo" />
        <Spacer />
        <Input placeholder="Cor do veículo" />
      </Container>
      <Container height={70} justify="flex-end">
        <Button>
          <ButtonText>Comece a usar</ButtonText>
        </Button>
      </Container>
    </Container>
  );
};

export default Car;
