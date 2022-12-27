import React from 'react';

import { Container } from './styles';

interface CheckboxProps {
  label: string;
  name: string;
}

export function Checkbox({ label, name }: CheckboxProps) {
  return (
    <Container>
      <input type="checkbox" name={name} id="" />
      <label htmlFor={name}>{label}</label>
    </Container>
  );
}
