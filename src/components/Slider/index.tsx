import React, { ChangeEvent, useState } from 'react';

import { Container, StyledSlider } from './styles';

export function Slider() {
  const [value, setValue] = useState(6);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  }

  return (
    <Container>
      <StyledSlider
        type="range"
        min="6"
        max="12"
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}
