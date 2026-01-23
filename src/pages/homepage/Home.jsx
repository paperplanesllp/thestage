import React from 'react'
import Hero from './home_components/Hero'
import StageDescription from './home_components/StageDescription'
import PreviousTalks from './home_components/PreviousTalks'
import EventsGlimpse from './home_components/EventsGlimpse'
import StoreGlimpse from './home_components/StoreGlimpse'

const Home = () => {
  return (
    <>
    <Hero/>
   <StageDescription/>
   <PreviousTalks/>
   <EventsGlimpse/>
   <StoreGlimpse/>
    </>
  )
}

export default Home