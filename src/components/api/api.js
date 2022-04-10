import React, { useEffect, useState } from 'react'
import Style  from "./api.module.css";
import search from '../../images/search.png'


const Api = () => {
    const [data, setData] = useState([]);
    const [changeApi, setChangeApi] = useState("0x1a9C8182C09F50C8318d769245beA52c32BE35BC")
    // const [assetBal, setAssetBal] = useState([])
    let arr = [];
    const getApi = async() =>{
        const fetchApi = await fetch(`https://atm-web-291907.ue.r.appspot.com/balances/${changeApi}`);
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
        // setAssetBal(arr);
        setData(arr);
    }

    function exactToken(amount) {
        return (amount / Math.pow(10, 18)).toFixed(2);
    }

    useEffect(() =>{
        getApi();
        
    },[changeApi])

    const onchangeHandler = (e) => {
        setChangeApi(e.target.value)
    }
    const rates = [];
    const balances = [];

    let rateSum = 0;
    let rateBalances = 0;

    data.forEach((item)=>{
        balances.push(item.balance)
        rates.push(item.rate)
    })

    console.log(rates);
    console.log(balances);

    for (let i = 0; i < rates.length; i++) {
        rateSum += Number(rates[i]);
    }

    for (let i = 0; i < balances.length; i++) {
        rateBalances += Number(balances[i]);
    }

    console.log(rateSum);
    console.log(rateBalances);

    let Total = rateSum * rateBalances;


  return (
          <div className={Style.container}>
              <div className={Style.searchbar}>
                  {/* <input type="search" name="" id="" placeholder='Search for DAO’s'/>
                  <img src={search} alt="" /> */}
                <label htmlFor="cars">Choose a DAO:</label>
                <select name="dao" id="dao"   onClick={onchangeHandler}>
                    <option value="0x1a9C8182C09F50C8318d769245beA52c32BE35BC">Uniswap</option>
                    <option value="0x78605Df79524164911C144801f41e9811B7DB73D">Bit Dao</option>
                    <option value="0x2775b1c75658Be0F640272CCb8c72ac986009e38">Compound</option>
                    <option value="0xBE8E3e3618f7474F8cB1d074A26afFef007E98FB">MakerDao</option>
                    <option value="0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9">Moon Dao</option>
                    <option value="0x28849D2b63fA8D361e5fc15cB8aBB13019884d09">InstaDapp</option>
                    <option value="0xfB76E9be55758d0042e003c1E46E186360F0627e">Aavegotchi </option>
                    <option value="0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be">ShapeShift</option>
                    <option value="0xF0E1015C33dA062E53fEF545631e75eAD91a5456">StakeBorg Dao</option>
                    <option value="0x5efda50f22d34F262c29268506C5Fa42cB56A1Ce">Tornado Cash</option>
                </select>
              </div>
            <div className={Style.Treasury}>
                {/* {
                    data.map(item =>{
                        return(
                            <h1>{item.name}</h1>
                        )
                    })
                } */}
                <h3>Treasury</h3>
                <p>${Total.toLocaleString("en-US")}</p>
            </div>
            <div className={Style.wrapper}>
                <table>
                    <thead>
                        <tr>
                            <th>Logo</th>
                            <th>Asset</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    {
                        data.map((item, index) =>{
                            return (
                                <tbody className={Style.tbody} key={index}>
                                    <tr>
                                        <td><img src={item.logo} alt="" /></td>
                                        <td>{item.name}</td>
                                        <td>${item.rate}</td>
                                        <td>{item.balance}</td>
                                    </tr>
                                </tbody>
                            )
                        } )
                    }
                </table>
            </div>
        </div>
  )
}

export default Api