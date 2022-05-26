import styled from 'styled-components'

export const CtaBtn = styled.button`
  border: none;
  outline: none;
  padding: 0.65rem 1.5rem;
  color: white;
  font-weight: 700;
  background-color: ${({ theme }) => theme.pmCyan};
  border-radius: ${({ radius }) => radius};
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: background-color 300ms ease;

  &:hover {
    background-color: hsl(180, 66%, 70%);
  }

  &:focus {
    outline: 3px dotted ${({ theme }) => theme.scRed};
  }
`
