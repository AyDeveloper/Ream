import React,{useContext, useEffect} from 'react'


const ReceiptEvent = ({contract, getSendEvents,getReceiveEvents}) => {
 const CA = contract

 useEffect(()=>{
    getReceiveEvents()
 },[])

  return (
    <div>
       
    </div>
  )
}

export default ReceiptEvent