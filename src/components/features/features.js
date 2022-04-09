import React from 'react'
import Styles from "./Features.module.css"
import asset from "../../images/assetTracker.png";
import dao from "../../images/dao.png"
import financialPerformance from '../../images/financialPerformance.png'
import opensource from '../../images/opensource.png'
import treasury from '../../images/treasury.png'

const Features = () => {
  return (
    <div className={Styles.container}>
        <div><h2>WHAT YOU GET</h2></div>
        <div className={Styles.wrapper}>
            <div>
                <img src={opensource} alt="" />
                <p>open source</p>
            </div>
            <div>
                <img src={asset} alt="" />
                <p>asset tracker</p>
            </div>
            <div>
                <img src={financialPerformance} alt="" />
                <p>financial performance</p>
            </div>
            <div>
                <img src={treasury} alt="" />
                <p>treasury mangement</p>
            </div>
            <div>
                <img src={dao} alt="" />
                <p>easy dao subscription</p>
            </div>
        </div>
    </div>
  )
}

export default Features