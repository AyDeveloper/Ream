import React from 'react'
import Sidebar from './../../components/sidebar/sidebar'
import Header from './../../components/header/header'
import Styles from './sendfund.module.css'
import SendFundHandler from '../../components/sendFundHandler/sendfundHandler'

const Sendfund = ({adminAddress,contract}) => {
  return (
    <div>
        <Header/>
        <div className={Styles.wrapper}>
            <Sidebar/>
            <SendFundHandler
            adminAddress={adminAddress}
            contract={contract}
            />
        </div>
    </div>
  )
}

export default Sendfund