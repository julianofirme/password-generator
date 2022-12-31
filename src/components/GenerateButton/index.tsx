import React from 'react';

import { Container } from './styles';

export function GenerateButton() {
  return (
    <Container>
      <input type="button" value="GENERATE" onClick={() => console.log("a")}/>
    </Container>
  );
}
