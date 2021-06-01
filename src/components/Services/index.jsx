import React from 'react'
import Icon1 from '../../images/svg-online.svg'
import Icon2 from '../../images/svg-verified.svg'
import Icon3 from '../../images/svg-rating.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Hassle Free Experiance</ServicesH2>
          <ServicesP>You can access our platform online anywhere in India.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Verified Profiles</ServicesH2>
          <ServicesP>All the workers listed on our app are verified.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Sort By Rating</ServicesH2>
          <ServicesP>You can sort the workers on the basis of there rating.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
