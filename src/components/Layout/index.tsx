import React from 'react';
import { GeneratedPassword } from '../GeneratedPassword';
import { PasswordOptions } from '../PasswordOptions';

import { Container, Title } from './styles';

export function Layout() {
  return (
    <Container>
      <Title>Password Generator</Title>
      <GeneratedPassword />
      <PasswordOptions />
    </Container>
  );
}
