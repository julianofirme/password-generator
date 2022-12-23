import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const StyledSlider = styled.input`
  -webkit-appearance: none;
  border-radius: 10px;
  height: .5rem;
  width: 100%;
  background: var(--color-bg);
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: var(--color-text);
    border-radius: 50%;
    cursor: pointer;
  }
`;
