import React from 'react'
import Sidebar from './../../components/sidebar/sidebar'
import Header from './../../components/header/header'
import Styles from './receipt.module.css'
import ReceiptEvent from '../../components/receiptEvent/receiptEvent'

const Receipt = ({contract,getSendEvents,getReceiveEvents}) => {
  return (
    <div>
        <Header/>
        <div className={Styles.wrapper}>
            <Sidebar/>
            <ReceiptEvent
            contract={contract}
            getSendEvents={getSendEvents}
            getReceiveEvents={getReceiveEvents}
            />
        </div>
    </div>
  )
}

export default Receipt