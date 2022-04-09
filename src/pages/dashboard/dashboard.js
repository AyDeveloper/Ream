import React from 'react'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import Api from '../../components/api/api'

const Dashboard = () => {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <Api/>
    </div>
  )
}

export default Dashboard