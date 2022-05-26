import { StyledHeader, StyledNav } from './styled/StyledHeader'
import logo from '../assets/logo.svg'
import illustrationWorking from '../assets/illustration-working.svg'
import Image from 'next/image'
import Link from 'next/link'
import { CtaBtn } from './styled/CtaBtn'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import Form from './Form'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <StyledHeader>
      <StyledNav mobileMenuOpen={mobileMenuOpen}>
        <div>
          <Image src={logo} alt='logo' />
          <ul>
            <li>
              <Link href='#'>
                <a>Features</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Resources</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link href='#'>
            <a>Login</a>
          </Link>
          <CtaBtn radius='2rem'>Sign Up</CtaBtn>
        </div>
        <FaBars
          className='hamburger'
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        />
        <div className='mobile-menu'>
          <ul>
            <li>
              <Link href='#'>
                <a>Features</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Resources</a>
              </Link>
            </li>
          </ul>
          <div>
            <Link href='#'>
              <a>Log in</a>
            </Link>
            <CtaBtn radius='2rem'>Sign Up</CtaBtn>
          </div>
        </div>
      </StyledNav>
      <section>
        <div className='left'>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <CtaBtn radius='2rem'>Get Started</CtaBtn>
        </div>
        <div className='right'>
          <div className='hero-img'>
            <Image src={illustrationWorking} alt='illustration' />
          </div>
        </div>
      </section>
      <Form />
    </StyledHeader>
  )
}

export default Header
