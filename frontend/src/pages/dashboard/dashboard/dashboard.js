import React from 'react'
import Header from '../../../components/header/header'
import Sidebar from '../../../components/sidebar/sidebar'
import Api from '../../../components/api/api'
import Styles from './dashboard.module.css'

const Dashboard = () => {
  return (
    <div>
        <Header/>
        <div className={Styles.wrapper}>
            <Sidebar/>
            <Api/>
        </div>
    </div>
  )
}

export default Dashboard