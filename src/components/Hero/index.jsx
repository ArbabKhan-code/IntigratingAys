import React, {useState} from 'react';
import Video from '../../videos/videod.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1> Finding a Perfect House Help Made Easy.</HeroH1>
        <HeroP>Sign up for a new account today and get the verified service professionals for your Home.</HeroP>
        <HeroBtnWrapper>
          <Button to='/signup_client' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
