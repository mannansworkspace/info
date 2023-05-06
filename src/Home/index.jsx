import React from 'react'
import Header from './header'
import MainSection from './MainSection'
import PartnerShips from './PartnerShips'
import Conversation from './Conversation'
import WhyUs from './WhyUs'
import Reviews from './Reviews'

const Home = () => {
  return (
    <div>
        <Header/>
        <MainSection/>
        <PartnerShips/>
        <Conversation/>
        <WhyUs/>
        <Reviews/>
    </div>
  )
}

export default Home