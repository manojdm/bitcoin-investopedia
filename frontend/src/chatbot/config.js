// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import ChartCustom from './CustomMessages/ChartCustom';
import Calculator from './Widgets/Calculator';
import Charts from './Widgets/Charts';
import Price from './Widgets/Price';
import Result from './Widgets/Result';
import Spot from './Widgets/Spot';
import Start from './Widgets/Start';
import Profits from './Widgets/Profits';
import Target from './Widgets/Target';
import USDM from './Widgets/USDM';
import PnL from './Widgets/PnL';
import UsdTarget from './Widgets/UsdTarget';
import COINM from './Widgets/CoinM';
import CoinMPnL from './Widgets/CoinMPnL';
import CoinMTarget from './Widgets/CoinMTarget';
import AI from './Widgets/AI';
import Candles from './Widgets/Candles';
import KnowledgeBase from './Widgets/KnowledgeBase';
import CryptoCurrencies from './Widgets/CryptoCurrencies';
import TopCoins from './Widgets/TopCoins';
import Blockchain from './Widgets/Blockchain';
import TypesBlockchain from './Widgets/TypesBlockchain';
import NFT from './Widgets/NFT';
import Trading from './Widgets/Trading';
import TradingTypes from './Widgets/TradingTypes';
import Tips from './Widgets/Tips';
import TradingTips from './CustomMessages/TradingTips';
import TradersMindset from './CustomMessages/TradersMindset';

const botName = 'Bitcoin Investopedia';

const config = {
  initialMessages: [createChatBotMessage(`Hi! Please select an option to start!`,{
    widget: "start",
    delay: 1000
  })],
  botName: botName,
  state: {
    chart: "BTCUSDT",
    price: "BTCUSDT",
    results: {}
  },
  customMessages: {
    chartCustom: (props) => <ChartCustom {...props} />,
    tradingTips: (props) => <TradingTips {...props} />,
    tradersMindset: (props) => <TradersMindset {...props} />
  }
  ,
  widgets: [
    {
      widgetName: "start",
      widgetFunc: (props) => <Start {...props} />
    },
    {
      widgetName: "charts",
      widgetFunc: (props) => <Charts {...props} />
    },
    {
      widgetName: "prices",
      widgetFunc: (props) => <Price {...props} />
    },
    {
      widgetName: "calculator",
      widgetFunc: (props) => <Calculator {...props} />
    }
    ,
    {
      widgetName: "spot",
      widgetFunc: (props) => <Spot {...props} />
    },
    {
      widgetName: "profits",
      widgetFunc: (props) => <Profits {...props} />
    },
    {
      widgetName: 'target',
      widgetFunc: (props) => <Target {...props} />
    },
    {
      widgetName: 'usdm',
      widgetFunc: (props) => <USDM {...props} />
    },
    {
      widgetName: 'coinm',
      widgetFunc: (props) => <COINM {...props} />
    },
    {
      widgetName: 'usdpnl',
      widgetFunc: (props) => <PnL {...props} />
    },
    {
      widgetName: 'coinpnl',
      widgetFunc: (props) => <CoinMPnL {...props} />
    },
    {
      widgetName: 'cointarget',
      widgetFunc: (props) => <CoinMTarget {...props} />
    },
    {
      widgetName: 'usdtarget',
      widgetFunc: (props) => <UsdTarget {...props} />
    },
    {
      widgetName: "results",
      widgetFunc: (props) => <Result {...props} />
    }
    ,
    {
      widgetName: "ai",
      widgetFunc: (props) => <AI {...props} />
    },
    {
      widgetName: "candles",
      widgetFunc: (props) => <Candles {...props} />
    },
    {
      widgetName: "knowledge",
      widgetFunc: (props) => <KnowledgeBase {...props} />
    },
    {
      widgetName: "cryptocurrency",
      widgetFunc: (props) => <CryptoCurrencies {...props} />
    },
    {
      widgetName: "topcoins",
      widgetFunc: (props) => <TopCoins {...props} />
    },
    {
      widgetName: "blockchain",
      widgetFunc: (props) => <Blockchain {...props} />
    },
    {
      widgetName: "typesblockchain",
      widgetFunc: (props) => <TypesBlockchain {...props} />
    },
    {
      widgetName: "nft",
      widgetFunc: (props) => <NFT {...props} />
    },
    {
      widgetName: "trading",
      widgetFunc: (props) => <Trading {...props} />
    },
    {
      widgetName: "tradingtypes",
      widgetFunc: (props) => <TradingTypes {...props} />
    },
    {
      widgetName: "tips",
      widgetFunc: (props) => <Tips {...props} />
    }
  ]
};

export default config;