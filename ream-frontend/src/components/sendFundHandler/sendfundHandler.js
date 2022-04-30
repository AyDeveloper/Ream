import React, { useState } from 'react'
import { reamAbi } from '../../utils/reamabi'
import { ethers } from 'ethers';
import Style from './sendfundHandler.module.css'

const SendFundHandler = ({adminAddress,contract}) => {
  const [amount,setAmount] = useState("");
  const [address, setAddress] = useState("");
  const[desc,setDesc] = useState("");
  const admin = adminAddress
  const CA = contract

  const onChangeHandler = ({target}) =>{
    switch (target.id) {
      case 'amount':
        setAmount(target.value)
        break;
    
      case 'address':
        setAddress(target.value)
        break;
    
      case 'desc':
        setDesc(target.value)
        break;
    
      default:
        break;
    }
  }

  const SendFunds = async(e) =>{
    e.preventDefault()
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const ream = new ethers.Contract(CA,reamAbi,signer)
        const withdrawal = ethers.utils.parseEther(amount)
        const send = await ream.sendFunds(withdrawal,address,desc)
        const waitsend = await send.wait();
        console.log("sent");
        console.log(waitsend);   
      }
      else{

      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={Style.container}>
      <div className={Style.anotherContainer}>
        <div className={Style.matic}>
          <p style={{color:"white"}}>send matic</p>
        </div>
        <div className={Style.wrapper}>
          <form onSubmit={SendFunds}>
            <input type="text" id='amount' placeholder='Enter Amount' onChange={onChangeHandler}/>
            <input type="text" id='address' placeholder='Address To' onChange={onChangeHandler}/>
            <input type="text" id='desc' placeholder='Enter Description' onChange={onChangeHandler}/>
            <button>send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SendFundHandler