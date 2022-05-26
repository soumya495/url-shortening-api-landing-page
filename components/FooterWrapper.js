import logo from '../assets/logo.svg'
import { StyledFooterWrapper } from './styled/StyledFooterWrapper'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa'

function FooterWrapper() {
  return (
    <StyledFooterWrapper>
      <Image src={logo} alt='logo' className='footerLogo' />
      <div className='footer-list-container'>
        <div className='footer-list'>
          <h4>Features</h4>
          <ul>
            <li>
              <Link href='#'>
                <a>Link Shortening</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Branded Links</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Analytics</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer-list'>
          <h4>Resources</h4>
          <ul>
            <li>
              <Link href='#'>
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Developers</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Support</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer-list'>
          <h4>Company</h4>
          <ul>
            <li>
              <Link href='#'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Our Team</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Careers</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='social-links'>
        <Link href='#'>
          <a>
            <FaFacebookSquare />
          </a>
        </Link>
        <Link href='#'>
          <a>
            <FaTwitter />
          </a>
        </Link>
        <Link href='#'>
          <a>
            <FaPinterest />
          </a>
        </Link>
        <Link href='#'>
          <a>
            <FaInstagram />
          </a>
        </Link>
      </div>
    </StyledFooterWrapper>
  )
}

export default FooterWrapper
