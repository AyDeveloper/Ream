import React from 'react'
import {Link} from 'react-router-dom'
import Styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={Styles.container}>
        <Link to='/create'>Create</Link>
        <Link to='/receipt'>Receipt</Link>
        <Link to='/investment'>Investment</Link>
        <Link to='/sendfund'>Send Funds</Link>
    </div>
  )
}

export default Sidebar