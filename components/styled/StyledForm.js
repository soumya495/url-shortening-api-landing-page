import styled from 'styled-components'
import bg from '../../assets/bg-shorten-desktop.svg'
import mobileBg from '../../assets/bg-shorten-mobile.svg'

export const StyledForm = styled.form`
  background-image: url(${bg.src});
  background-size: cover;
  background-color: ${({ theme }) => theme.pmViolet};
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
  border-radius: 0.5rem;

  & > div {
    width: calc(90% - 125px);
    position: relative;
  }

  & > div > p {
    position: absolute;
    left: 0;
    top: 105%;
    font-size: 0.85rem;
    font-style: italic;
    color: ${({ theme }) => theme.scRed};
  }

  & > div > input {
    width: 100%;
    padding: 0.65rem 1rem;
    border-radius: 0.45rem;
    border: none;
    outline: ${({ isError }) =>
      isError ? '3px dotted hsl(0, 87%, 67%)' : 'none'};
  }
  & > input:focus {
    outline: 3px dotted ${({ theme }) => theme.ntGray};
  }

  @media (max-width: 700px) {
    background-image: url(${mobileBg.src});
    flex-direction: column;
    padding-block: 1.5rem;
    gap: 2rem;

    & > div {
      width: 90%;
    }

    & > button {
      width: 90%;
    }
  }
`
