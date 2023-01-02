import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-bg-container);

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 360px;
  padding: 12px 16px;
  border-radius: 4px;

  > h3 {
    color: var(--color-text);
  }

  > button {
    color: var(--color-primary);
    cursor: pointer;
  }
`;
