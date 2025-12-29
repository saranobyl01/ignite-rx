
import { BestSellers } from '@/components/BestSellers'
import { ExploreTreatment } from '@/components/ExploreTreatment'
import { FaqSection } from '@/components/FaqSection'
import FeaturedTherapies from '@/components/FeaturedTherapies'
import { Footer } from '@/components/Footer'
import { GetStartedSec } from '@/components/GetStartedSec'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import HowItWorks from '@/components/HowItWorks'
import { OurServices } from '@/components/OurServices'
import { TestimonialSection } from '@/components/TestimonialSection'
import TrustBar from '@/components/TrustBar'
import { TrustSection } from '@/components/TrustSection'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection/>
        <TrustBar/>
        <ExploreTreatment/>
        <BestSellers/>
        <TrustSection/>
        <HowItWorks/>
        <OurServices/>
        {/* <TestimonialSection/> */}

    </div>
  )
}

export default Home