import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { sliderState } from '../../atoms/slider';

import { Container, StyledSlider } from './styles';

export function Slider() {
  const [sliderValue, setSliderValue] = useRecoilState(sliderState)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  }

  return (
    <Container>
      <StyledSlider
        type="range"
        min="8"
        max="12"
        value={sliderValue}
        onChange={handleChange}
      />
    </Container>
  );
}
