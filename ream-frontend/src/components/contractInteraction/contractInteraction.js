import React, { useEffect, useState, createContext } from 'react'
import { addressShortner } from '../../utils/helper'
import Styles from './contractInteraction.module.css'

const ContractInteraction = ({adminAddress,contract,displayContract,createReamTreasury}) => {
    
 useEffect(()=>{
    createReamTreasury()
 },[])

  return (
    <div className={Styles.container}>
        <div className={Styles.adminContainer}>
            <div className={Styles.admin}>
                <p>{addressShortner(adminAddress,true)}</p>
            </div>
            <div className={Styles.status}>
            </div>
        </div>
        <div className={displayContract?Styles.display:Styles.nodisplay}>
            <p>new dao contract:{contract}</p>
        </div>
        <h2 style={{textAlign:"left"}}>Assets</h2>
        <div className={Styles.table}>
            <table>
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Asset</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                </tbody>
            </table>
        </div>
        {/* <button onClick={allReamTreasury}>clickme</button>    */}
    </div>
  )
}

export default ContractInteraction