import { StyledStats } from './styled/StyledStats'
import Form from './Form'
import { StyledStatsBox } from './styled/StyledStatsBox'
import iconRecog from '../assets/icon-brand-recognition.svg'
import iconRecord from '../assets/icon-detailed-records.svg'
import iconCust from '../assets/icon-fully-customizable.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import LinkLists from './LinkLists'

function StatsSection() {
  const [allLinks, setAllLinks] = useState([])

  useEffect(() => {
    if (typeof window !== undefined) {
      const localData = localStorage.getItem('localLinks')
      if (localData) {
        setAllLinks(JSON.parse(localData))
      }
    }
  }, [])

  return (
    <StyledStats>
      <Form setAllLinks={setAllLinks} />
      {allLinks && allLinks.length >= 1 && <LinkLists links={allLinks} />}
      <div>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className='stats-box-container'>
          <StyledStatsBox>
            <div>
              <Image src={iconRecog} alt='Recognition' />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links
              don&apos;t mean a thing. Branded links instil confidence in your
              content.
            </p>
          </StyledStatsBox>
          <StyledStatsBox>
            <div>
              <Image src={iconRecord} alt='Records' />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </StyledStatsBox>
          <StyledStatsBox>
            <div>
              <Image src={iconCust} alt='Customizable' />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging engagement.
            </p>
          </StyledStatsBox>
          <div className='blue-bar'></div>
        </div>
      </div>
    </StyledStats>
  )
}

export default StatsSection
