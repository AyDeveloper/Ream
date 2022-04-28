import React from 'react'
import Sidebar from '../../../components/sidebar/sidebar'
import Header from '../../../components/header/header'
import Styles from './sendfund.module.css'

const Sendfund = () => {
  return (
    <div>
        <Header/>
        <div className={Styles.wrapper}>
            <Sidebar/>
        </div>
    </div>
  )
}

export default Sendfund