import styled from 'styled-components';

export const Container = styled.div`
> input[type="checkbox"] {
  -moz-appearance:none;
  -webkit-appearance:none;
  -o-appearance:none;
  
  display: inline-block;
  margin-right: 8px;
  outline: 1px solid var(--color-text);
  
  width: 12px;
  height: 12px;
  cursor: pointer;
  position: relative;
  
  &:before {
    background: none;
  }
  
  &:checked {
    background: var(--color-primary);
  }
  
  &:checked:before {
    content: "✔";
    color: var(--bg-container);
    font-size: 14px;
    line-height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
`;
