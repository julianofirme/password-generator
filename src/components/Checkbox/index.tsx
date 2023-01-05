import React from 'react';

import { Container } from './styles';

interface CheckboxProps {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox({ label, name, onChange }: CheckboxProps) {
  return (
    <Container>
      <input type="checkbox" name={name} id="" onChange={onChange} />
      <label htmlFor={name}>{label}</label>
    </Container>
  );
}
