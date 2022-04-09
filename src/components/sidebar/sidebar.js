import React from 'react'
import {Link} from 'react-router-dom'
import Styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={Styles.container}>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/analysis'>Analysis</Link>
    </div>
  )
}

export default Sidebar