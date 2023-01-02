import React from 'react';

import { Container } from './styles';

interface GenerateButtonProps {
  onClick: (event: MouseEvent) => void;
}

export function GenerateButton({ onClick }: GenerateButtonProps ) {
  return (
    <Container>
      <input type="button" value="GENERATE" onClick={() => onClick}/>
    </Container>
  );
}
