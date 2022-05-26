import { StyledLinkEl } from './styled/StyledLinkEl'
import { CtaBtn } from './styled/CtaBtn'
import copy from 'copy-text-to-clipboard'
import { useState } from 'react'

function LinkEl({ link }) {
  const { full_short_link, original_link } = link
  const [copied, setCopied] = useState(false)

  const handleCopy = (copyText) => {
    copy(copyText)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 10000)
  }

  return (
    <StyledLinkEl>
      <p>{original_link}</p>
      <div>
        <p>{full_short_link}</p>
        <CtaBtn
          radius='0.35rem'
          onClick={() => handleCopy(full_short_link)}
          minWidth='110px'
          copied={copied ? true : false}
        >
          {copied ? 'Copied!' : 'Copy'}
        </CtaBtn>
      </div>
    </StyledLinkEl>
  )
}

export default LinkEl
