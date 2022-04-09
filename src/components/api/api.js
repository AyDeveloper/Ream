import React, { useEffect, useState } from 'react'


const Api = () => {
    const [data, setData] = useState([])
    const getApi = async() =>{
        const fetchApi = await fetch("https://atm-web-291907.ue.r.appspot.com/balances/0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5");
        const useApi = await fetchApi.json()
        setData(useApi)
    }

  console.log(data);

  useEffect(() =>{
    getApi();
  },[])

  return (
    <div>Api</div>
  )
}

export default Api