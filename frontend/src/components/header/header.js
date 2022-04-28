import React from 'react'
import { Link } from 'react-router-dom';
import Styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={Styles.headerContainer}>
      <div className={Styles.headerWrapper}>
        <div>
            <h1 className={Styles.header}>r<span>e</span>am</h1>
        </div>
        <nav className={Styles.navContainer}>
            <Link to='/'>Home</Link>
            <Link to='/pricing'>pricing</Link>
            <Link to='/contact'>contact</Link>
            <Link to='/dashboard'>dashboard</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header