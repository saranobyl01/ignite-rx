import { GetStartedSec } from '@/components/GetStartedSec'
import { Header } from '@/components/Header'
import { TreatmentHero } from '@/components/TreatmentHero'
import { TreatmentMain } from '@/components/TreatmentMain'
import React from 'react'

const TreatmentsPage = () => {
  return (
    <div>
      <Header />
        <TreatmentHero/>
        <TreatmentMain/>
        <GetStartedSec />
    </div>
  )
}

export default TreatmentsPage