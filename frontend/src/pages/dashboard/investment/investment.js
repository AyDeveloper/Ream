import React from 'react'
import Sidebar from '../../../components/sidebar/sidebar'
import Header from '../../../components/header/header'
import Styles from './investment.module.css'

const Investment = () => {
  return (
    <div>
        <Header/>
        <div className={Styles.wrapper}>
            <Sidebar/>
        </div>
    </div>
  )
}

export default Investment