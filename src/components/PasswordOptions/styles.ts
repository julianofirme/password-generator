import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-bg-container);
  color: var(--color-text);
  
  width: 360px;
  padding: 12px 16px;
  margin-top: 16px;
  border-radius: 4px;
`;

export const CharLength = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 12px;

    span {
      color: var(--color-primary);
    }
  }
`;


