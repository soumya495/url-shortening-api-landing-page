import styled from 'styled-components'

export const StyledStats = styled.div`
  padding-top: 6rem;
  padding-bottom: 6rem;

  & > div h2 {
    margin-top: 3rem;
    font-size: 2.5rem;
    line-height: 1.125;
    color: ${({ theme }) => theme.ntDarkViolet};
    text-align: center;
  }

  & > div > p {
    max-width: 580px;
    color: ${({ theme }) => theme.ntViolet};
    font-size: 1.15rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 0.5rem;
  }

  & .stats-box-container {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    position: relative;
  }

  & .blue-bar {
    position: absolute;
    width: 95%;
    height: 0.65rem;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({ theme }) => theme.pmCyan};
    z-index: 1;
  }

  @media (max-width: 1100px) {
    & .blue-bar {
      width: 50%;
      top: 25%;
    }

    & .stats-box-container {
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 768px) {
    & {
      padding-top: 6rem;
      padding-bottom: 3rem;
    }

    & > div h2 {
      font-size: 2rem;
    }

    & .stats-box-container {
      margin-top: 2rem;
    }

    & .blue-bar {
      width: 0.65rem;
      height: 60%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
`
