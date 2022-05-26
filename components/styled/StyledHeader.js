import styled from 'styled-components'

export const StyledHeader = styled.header`
  & section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 90vh;
    padding-bottom: 6rem;
  }

  & .left {
    width: 50%;
  }

  & h1 {
    font-size: 4.75rem;
    line-height: 1.125;
    color: ${({ theme }) => theme.ntDarkViolet};
  }

  & .left > p {
    max-width: 500px;
    color: ${({ theme }) => theme.ntViolet};
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }

  & .right {
    width: 50%;
    position: relative;
  }

  & .right .hero-img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -240px;
  }

  @media (max-width: 1000px) {
    & section {
      min-height: 70vh;
      padding-bottom: 6rem;
    }

    & .left {
      width: 55%;
      padding-right: 1rem;
    }

    & .right {
      width: 45%;
    }

    & h1 {
      font-size: 3.75rem;
    }

    & .left > p {
      font-size: 1.15rem;
    }

    & .right .hero-img {
      right: -200px;
    }
  }

  @media (max-width: 768px) {
    & section {
      min-height: 90vh;
      padding-bottom: 6rem;
      flex-direction: column-reverse;
      justify-content: center;
      gap: 2rem;
    }

    & .left,
    .right {
      width: 100%;
    }

    & .left {
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-right: unset;
    }

    & h1 {
      font-size: 2.75rem;
      text-align: center;
    }

    & .left > p {
      text-align: center;
    }

    & .right .hero-img {
      width: 100%;
      max-width: 480px;
      margin: 0 auto;
      transform: unset;
      position: unset;
      right: unset;
    }
  }
`

export const StyledNav = styled.nav`
  padding-block: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  & > div,
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  & a {
    color: ${({ theme }) => theme.ntViolet};
    text-decoration: none;
    font-size: 1rem;
    transition: color ${({ theme }) => theme.transitionTime} ease;
  }

  & a:hover {
    color: ${({ theme }) => theme.ntBlue};
  }

  & a:focus {
    color: ${({ theme }) => theme.ntBlue};
    outline: 3px dotted ${({ theme }) => theme.scRed};
  }

  & .hamburger {
    display: none;
  }

  & .mobile-menu {
    display: none;
  }

  @media (max-width: 700px) {
    & div > ul {
      display: none;
    }

    & div:nth-child(2) {
      display: none;
    }

    & .hamburger {
      display: block;
      color: ${({ theme }) => theme.ntViolet};
      font-size: 1.75rem;
      align-self: center;
      cursor: pointer;
      transition: color ${({ theme }) => theme.transitionTime} ease;
    }

    & .hamburger:hover {
      color: ${({ theme }) => theme.ntBlue};
    }

    & .mobile-menu {
      display: block;
      position: absolute;
      opacity: ${({ mobileMenuOpen }) => (mobileMenuOpen ? '1' : '0')};
      visibility: ${({ mobileMenuOpen }) =>
        mobileMenuOpen ? 'visible' : 'hidden'};
      max-width: 450px;
      width: 100%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      top: 100%;
      padding: 1.5rem;
      border-radius: 1.5rem;
      background-color: ${({ theme }) => theme.pmViolet};
      transition: opacity ${({ theme }) => theme.transitionTime} ease;
      z-index: 999;
    }

    & .mobile-menu div {
      padding-top: 1rem;
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      border-top: 1px solid ${({ theme }) => theme.ntGray};
      font-weight: 700;
    }

    & .mobile-menu > ul {
      display: flex;
      flex-direction: column;
      padding-bottom: 1rem;
      font-weight: 700;
    }

    & .mobile-menu a {
      display: block;
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
    }
  }
`
