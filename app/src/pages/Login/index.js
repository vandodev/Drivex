import React from 'react';
import {Image} from 'react-native';
import {Container, Button, ButtonText} from '../../styles';

import Logo from '../../assets/logo.png';
import bgBottom from '../../assets/bg-bottom-login.png';

const Login = () => {
  return (
    <Container color="info50" justify="flex-end">
      <Container
        justify="space-around"
        padding={30}
        position="absolute"
        height={270}
        top={0}
        zIndex={9}>
        <Image source={Logo} />

        <Button type="info">
          <ButtonText>Fazer Login com Facebook</ButtonText>
        </Button>
        <Button type="light">
          <ButtonText>Fazer Login com Facebook</ButtonText>
        </Button>
      </Container>
      <Image source={bgBottom} />
    </Container>
  );
};

export default Login;
