import React from 'react'
import Features from '../../components/features/features';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Landing from '../../components/landing/landing';
import Sneak from '../../components/sneak/sneak';

const LandingPage = () => {
  return (
    <div className='container'>
      <Header/>
      <Landing/>
      <Features/>
      <Sneak/>
      <Footer/>
    </div>
  )
}

export default LandingPage