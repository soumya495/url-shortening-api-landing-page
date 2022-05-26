import styled from 'styled-components'

export const StyledLinkEl = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-block: 1rem;
  padding: 1rem;
  gap: 2rem;
  border-radius: 0.35rem;

  & > p {
    min-width: 50%;
    color: ${({ theme }) => theme.ntDarkViolet};
    text-align: left;
    font-size: 1rem;
  }

  & > div {
    /* min-width: 50%; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
  }

  & > div > p {
    color: ${({ theme }) => theme.pmCyan};
    font-size: 1rem;
  }

  @media (max-width: 900px) {
    & {
      max-width: 600px;
      margin: 1.5rem auto;
      flex-direction: column;
      gap: 0;
    }

    & > p {
      max-width: 100%;
      word-wrap: break-word;
      border-bottom: 2px solid whitesmoke;
      padding-bottom: 1rem;
    }

    & > div {
      padding-top: 1rem;
    }

    & > div > p {
      max-width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    & > div {
      width: 100%;
      flex-direction: column;
    }

    & > div > button {
      width: 100%;
    }
  }
`
