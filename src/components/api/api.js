import React, { useEffect, useState } from 'react'
import Style  from "./api.module.css"


const Api = () => {
    const [data, setData] = useState([])
    const [assetBal, setAssetBal] = useState([])
    let arr = [];
    const getApi = async() =>{
        const fetchApi = await fetch("https://atm-web-291907.ue.r.appspot.com/balances/0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5");
        const useApi = await fetchApi.json();
        const items = useApi.data.items;

        items.forEach(item => {
            arr.push({
            name: item.contract_ticker_symbol,
            logo: item.logo_url,
            balance: exactToken(item.balance),
            rate: item.quote_rate
            })
        });

        console.log(arr);
        setAssetBal(arr);
        setData(useApi);
        console.log(arr);
    }

  console.log(data);

  function exactToken(amount) {
    return (amount / Math.pow(10, 18)).toFixed(2);
}

  useEffect(() =>{
    getApi();
  },[])

  return (
    <div className={Style.container}>Api
      {
        arr.map(
          item =>{
            return(<div>
              {item.name}
              console.log(item.name);
            </div>)
          }
        )
      }
    </div>
  )
}

export default Api