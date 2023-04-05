import React, { useEffect } from 'react'
import initChart from '../scripts/chart'
import updateEMA from '../scripts/update';


const Market = () => {

    useEffect(() => {
        initChart()
        updateEMA()
    }, []);

  return (
        <div className="container">
        <div className="section market">
            <div className="content">
            <div className="head">Market Movement</div>
            <div className="msg">
                We use Exponential moving average indicator to predict the ongoing
                market Movement. The market movement is necessary and the basic tool to
                start investing in crypto{" "}
            </div>
            </div>
            <div className="chart">
            <div className="tradingview-widget-container">
                <div id="tradingview_4d811">
                </div>
            </div>
            </div>
            <div className="statistics">
            <div className="details">
                <div className="head">Indicator Statistics: </div>
                <div className="params">
                <div className="row">
                    <span className="title">Indicator Momentum: </span>
                    <span className="ans moment">&nbsp; Bearish</span>
                </div>
                <div className="row ema9">
                    <span className="title">EMA 9 Price:</span> $
                    <span className="ans emap9"> 20,750</span>
                </div>
                <div className="row ema20">
                    <span className="title">EMA 20 Price:</span> $
                    <span className="ans emap20"> 20,484</span>
                </div>
                <div className="row ema200">
                    <span className="title">EMA 50 Price:</span> $
                    <span className="ans emap50"> 20,484</span>
                </div>
                </div>
            </div>
            <div className="details">
                <div className="head">Market Statistics: </div>
                <div className="params">
                <div className="row">
                    <span className="title">Current Price:</span> $
                    <span className="ans price"> 20,300</span>
                </div>
                <div className="row">
                    <span className="title">Daily Low:</span> $
                    <span className="ans low"> 20,750</span>
                </div>
                <div className="row">
                    <span className="title">Daily open:</span> $
                    <span className="ans open"> 20,484</span>
                </div>
                <div className="row">
                    <span className="title">Daily High:</span> $
                    <span className="ans high"> 20,484</span>
                </div>
                </div>
            </div>
            </div>
            <div className="conclusion">
            <div className="head">Conclusion: </div>
            <div className="text">
                The EMA's indicate <span className="result">Bearish</span> momentum, You
                can also help of other indicators to be extra sure.
            </div>
            </div>
        </div>
        </div>
  )
}

export default Market