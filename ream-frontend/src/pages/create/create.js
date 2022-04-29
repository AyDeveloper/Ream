import React from 'react'
import Header from './../../components/header/header'
import Sidebar from './../../components/sidebar/sidebar'
import Api from './../../components/api/api'
import Styles from './create.module.css'
import ContractInteraction from '../../components/contractInteraction/contractInteraction'

const Dashboard = () => {
  return (
    <div>
        <Header/>
        <div className={Styles.wrapper}>
            <Sidebar/>
            <ContractInteraction/>
        </div>
    </div>
  )
}

export default Dashboard