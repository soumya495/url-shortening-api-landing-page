import styled from 'styled-components'

export const StyledStatsBox = styled.div`
  background-color: #fff;
  position: relative;
  padding: 2rem;
  padding-bottom: 0rem;
  min-height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.35rem;
  z-index: 2;

  &:nth-child(2) {
    margin-top: 2.5rem;
  }

  &:nth-child(3) {
    margin-top: 5rem;
  }

  & > div {
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.pmViolet};
    position: absolute;
    top: -2.5rem;
    left: 2rem;
  }

  & > h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.ntDarkViolet};
    margin-bottom: 0.45rem;
  }

  & > p {
    font-size: 0.925rem;
    color: ${({ theme }) => theme.ntViolet};
  }

  @media (max-width: 1100px) {
    & {
      width: 45%;
    }

    &:nth-child(2) {
      margin-top: unset;
    }

    &:nth-child(3) {
      margin-top: 2rem;
    }
  }

  @media (max-width: 768px) {
    &:nth-child(3) {
      margin-top: unset;
    }

    & {
      width: 100%;
      max-width: 500px;
      margin-block: 3rem;
      padding-top: 1rem;
      min-height: 200px;
    }

    & > div {
      width: 4rem;
      height: 4rem;
      top: -2rem;
      left: 50%;
      transform: translateX(-50%);
    }

    & > h3,
    > p {
      text-align: center;
    }
  }
`
