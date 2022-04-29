import React from 'react'
import Sidebar from './../../components/sidebar/sidebar'
import Header from './../../components/header/header'
import Styles from './receipt.module.css'

const Receipt = () => {
  return (
    <div>
        <Header/>
        <div className={Styles.wrapper}>
            <Sidebar/>
        </div>
    </div>
  )
}

export default Receipt