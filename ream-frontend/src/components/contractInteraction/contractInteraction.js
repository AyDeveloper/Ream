import React, { useEffect, useState, createContext } from 'react'
import { addressShortner } from '../../utils/helper'
import Styles from './contractInteraction.module.css'
import { ethers } from 'ethers'
import { reamAbi } from '../../utils/reamabi'

const ContractInteraction = ({adminAddress,contract,displayContract,createReamTreasury}) => {
    const CA = contract
    const[depositValue,setDepositValue] = useState();

    const deposit = async(e) =>{
        e.preventDefault();
        try {
            if (window.ethereum) {
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              const signer = provider.getSigner();
              const ream = new ethers.Contract(CA,reamAbi,signer);
              const sendEvent = await ream.deposit();
              console.log(sendEvent);
            } else {
                
            }
        } catch (error) {
            console.log(error);
        }
      }

    const handleDeposit = ({target}) =>{
        switch (target.id) {
            case 'deposit':
                setDepositValue(target.value)
                break;
        
            default:
                break;
        }
    }


 useEffect(()=>{
    createReamTreasury()
 },[])

  return (
    <div className={Styles.container}>
        <div className={Styles.adminContainer}>
            <div className={Styles.admin}>
                <p>Admin</p>
                <p>{addressShortner(adminAddress,true)}</p>
            </div>
            <div className={Styles.status}>
            </div>
        </div>
        <div className={displayContract?Styles.display:Styles.nodisplay}>
            <p>dao address:{contract}</p>
        </div>
        <div>
            <form onSubmit={deposit}>
                <input type="text" placeholder='Deposit matic' id='deposit' onChange={handleDeposit}/>
                <button>Deposit</button>
            </form>
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