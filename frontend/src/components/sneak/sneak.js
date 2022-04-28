import React from 'react'
import Styles from './Sneak.module.css'
import Mockup from '../../images/Mockup.png'

const Sneak = () => {
  return (
    <div className={Styles.container}>
        <div><h2> A SNEAK PEEK</h2></div>
        <div className={Styles.wrapper}>
            <div>
                <img src={Mockup} alt="" />
            </div>
            <div className={Styles.detail}>
                <h3>REAM</h3>
                <p>Ream offers tracking of all your crypto assets no matter where they are.
                Be it on a blockchain, a DeFi protocol or on one of the supported exchanges.</p>
            </div>
        </div>
    </div>
  )
}

export default Sneak