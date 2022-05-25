import styled from 'styled-components'

export const StyledHeader = styled.header``

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
