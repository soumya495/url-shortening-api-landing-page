import styled from 'styled-components'

export const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .footer-list-container {
    display: flex;
    gap: 3rem;
  }

  .footer-list > h4 {
    margin-bottom: 1.5rem;
  }

  .footer-list a {
    color: ${({ theme }) => theme.ntGray};
    font-size: 0.945rem;
  }

  .social-links a {
    font-size: 1.5rem;
    color: #fff;
    display: flex;
    align-items: center;
  }

  & a {
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitionTime} ease;
  }

  & a:hover {
    color: ${({ theme }) => theme.pmCyan};
  }

  & a:focus {
    outline: 3px dotted ${({ theme }) => theme.scRed};
    color: ${({ theme }) => theme.pmCyan};
  }

  .footerLogo {
    filter: invert(1) brightness(2);
  }

  .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.55rem;
  }

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }

  @media (max-width: 500px) {
    .footer-list-container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem 0;
    }
    .footer-list > h4 {
      text-align: center;
      margin-bottom: 1rem;
    }

    .footer-list li {
      text-align: center;
    }
  }
`
