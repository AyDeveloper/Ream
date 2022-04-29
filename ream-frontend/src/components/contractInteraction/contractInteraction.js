import React, { useEffect, useState } from 'react'
import {CA}  from "../../utils/contract"
import {abi} from '../../utils/abi'
import { addressShortner } from '../../utils/helper'
import Styles from './contractInteraction.module.css'
import { ethers } from 'ethers'

const ContractInteraction = () => {
    const [adminAddress,setAdminAddress] = useState("");
    const[contract, setContract] = useState("")
    const[displayContract, setDisplayContract] = useState(false);

    
    const createReamTreasury = async() =>{
      try {
          if (window.ethereum) {
              const accounts =await window.ethereum.request({method:'eth_requestAccounts'});
              const account = accounts[0]; 
              setAdminAddress(account);
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              const signer = provider.getSigner();
              const reamFactory = new ethers.Contract(CA,abi,signer)
              const createReamTreasury = await reamFactory.createReamTreasury(account);
              const waitCreateReamTreasury = await createReamTreasury.wait();
             const newContract = await waitCreateReamTreasury.events[0].args[1];
             setContract(newContract)
             setDisplayContract(true)
          } else {
              console.log("connect metamask");
          }
      } catch (error) {
       console.log(error);    
      }
   }
    const allReamTreasury = async() =>{
      try {
          if (window.ethereum) {
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              const signer = provider.getSigner();
              const reamFactory = new ethers.Contract(CA,abi,signer)  

              const allReamTreasury = await reamFactory.allReamTreasury();
              console.log(allReamTreasury);
          } else {
            console.log("connect metamask");
          }
      } catch (error) {
       console.log(error);    
      }
   }

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
            <p>new dao address:{contract}</p>
        </div>
        <h2>Assets</h2>
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