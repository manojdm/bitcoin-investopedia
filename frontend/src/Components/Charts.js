import React, { useEffect } from 'react'


const Market = () => {

    const symbol = localStorage.getItem('chart') ? localStorage.getItem('chart') : 'BTCUSDT'

    new TradingView.widget(
        {
        "autosize": true,
        "symbol": symbol,
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "in",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_ab850"
      }
        );
      

  return (
        <>
        <div className="tradingview-widget-container">
            <div id="tradingview_ab850"></div>
        </div>
        </>
    )
}

export default Market