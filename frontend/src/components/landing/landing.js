import React from 'react'
import Styles from "./Landing.module.css"
import Banner from '../../images/reambanner.png'

const Landing = () => {
  return (
    <div className={Styles.LandingContainer}>
        <main>
            <h1>STAY ACCOUNTABLE WITH <span>REAM</span></h1>
            <p>...building financial structure for DAO’s</p>
            <div className={Styles.buttonWrapper}>
                <button>Try for free</button>
                <button>Premium</button>
            </div>
        </main>
        <div className={Styles.bannerDiv}>
            <img src={Banner} alt="" />
        </div>
    </div>
  )
}

export default Landing