import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { contract } from '../../utils/contract'
import {abi} from '../../utils/abi'

const ContractInteraction = () => {
    const [adminAddress,setAdminAddress] = useState("");

    
    const createReamTreasury = async() =>{
      try {
          if (window.ethereum) {
              const accounts =await window.ethereum.request({method:'eth_requestAccounts'});
              const account = accounts[0]; 
              setAdminAddress(account);
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              const signer = provider.getSigner();
              const reamFactory = new ethers.Contract(contract,abi,signer)  
              const createReamTreasury = await reamFactory.createReamTreasury(account);
              const waitCreateReamTreasury = await createReamTreasury.wait();
              console.log(waitCreateReamTreasury);
              
          } else {
              
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
              const reamFactory = new ethers.Contract(contract,abi,signer)  
              const allReamTreasury = await reamFactory.allReamTreasury();
              console.log(allReamTreasury);
              
          } else {
              
          }
      } catch (error) {
       console.log(error);    
      }
   }
 useEffect(()=>{
    createReamTreasury()
 })

  return (
    <div>
        <h1>ContractInteraction</h1> 
        <button onClick={allReamTreasury}>clickme</button>   
    </div>
  )
}

export default ContractInteraction