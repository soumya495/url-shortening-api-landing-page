import styled from 'styled-components'

export const CtaBtn = styled.button`
  border: none;
  outline: none;
  padding: 0.5rem 1.5rem;
  color: white;
  font-weight: 700;
  background-color: ${({ theme }) => theme.pmCyan};
  border-radius: ${({ radius }) => radius};
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.6;
  }

  &:focus {
    outline: 3px dotted ${({ theme }) => theme.scRed};
  }
`
