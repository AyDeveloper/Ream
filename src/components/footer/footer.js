import React from 'react'
import Style from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={Style.container}>
        <p>
            copyright 2022
        </p>
        <div>
            <Link to='/dashboard'>ream</Link>
            <Link to='/pricing'>contact us</Link>
        </div>
    </div>
  )
}

export default Footer