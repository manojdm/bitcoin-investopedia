var studies = [
    {
     id: "MASimple@tv-basicstudies",
     inputs: {
       length: 50,
     },
    },
    {
     id: "MASimple@tv-basicstudies",
     inputs: {
       length: 20,
     },
     styles: {
      color: "#fff"
     }
    
    },
    {
     id: "MASimple@tv-basicstudies",
     inputs: {
       length: 9
     }
    
    }
    
    ];

    const initChart = () => {

      new TradingView.widget(
      {
      "autosize": true,
      "symbol": "BINANCE:BTCUSDT",
      "interval": "D",
      "timezone": "Asia/Kolkata",
      "theme": "dark",
      "style": "1",
      "locale": "in",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "save_image": false,
      "studies": studies,
      "container_id": "tradingview_4d811",
      "studies_overrides": {
        "moving average.ma.color": "#fff",
    },
    
    }
      );

}

export default initChart