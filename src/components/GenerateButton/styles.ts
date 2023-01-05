import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  
  width: 100%;
  margin-top: 12px;
  
  > button {
    background: var(--color-primary);
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    outline: 1px solid var(--color-primary);
    
    color: var(--color-bg);
    font-weight: bold;
    font-size: 1rem;
    
    cursor: pointer;

    transition: .2s;
    
    &:hover {
      background: var(--color-bg);
      outline: 1px solid var(--color-primary);
      color: var(--color-primary);
    }
  }
`;
