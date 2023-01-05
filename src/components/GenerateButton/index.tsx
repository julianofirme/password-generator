import React, { MouseEventHandler } from 'react';

import { Container } from './styles';

interface GenerateButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  value: string;
}

export function GenerateButton({ onClick, value }: GenerateButtonProps ) {
  return (
    <Container>
      <button onClick={onClick}>{value}</button>
    </Container>
  );
}
