import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 32px;

  padding: 12px 16px;
  background: var(--color-bg);

  color: var(--color-text);

  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    font-size: .75rem;
  }

  > div {
    display: flex;
    gap: .2rem;
  }
  
`;

export const Bar = styled.div<{ strength: number | null}>`
  width: 4px;
  height: 18px;
  outline: 1px solid var(--color-text);
  background: ${(props) => {
    if (props.strength === 0 || props.strength === 1) {
      return 'var(--strength-weak)';
    }
    if (props.strength === 2 || props.strength === 3) {
      return 'var(--strength-medium)';
    }
    if (props.strength === 4) {
      return 'var(--strength-strong)';
    }
  }};
`