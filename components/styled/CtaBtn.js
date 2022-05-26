import styled from 'styled-components'

export const CtaBtn = styled.button`
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'none')};
  border: none;
  outline: none;
  padding: 0.65rem 1.5rem;
  color: white;
  font-weight: 700;
  background-color: ${({ theme, copied }) =>
    copied ? theme.pmViolet : theme.pmCyan};
  border-radius: ${({ radius }) => radius};
  cursor: pointer;
  letter-spacing: 0.5px;
  display: ${({ loading }) => (loading ? 'flex' : 'block')};
  justify-content: center;
  align-items: center;
  gap: 0 0.25rem;
  transition: background-color 300ms ease;

  & .spinner {
    animation: loadingAnimation 2s linear infinite;
  }

  @keyframes loadingAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &:hover {
    background-color: ${({ copied }) =>
      copied ? 'hsl(257, 27%, 36%)' : 'hsl(180, 66%, 70%)'};
  }

  &:focus {
    outline: 3px dotted ${({ theme }) => theme.scRed};
  }
`
