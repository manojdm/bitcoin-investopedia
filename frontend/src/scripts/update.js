/* Elements */
let e9;
let e20;
let e50;

/* API keys */
const key = '9df42e688f394a5e87228a035c72ba00'

const updateMarket = async () => {
    const open = document.querySelector('.ans.open')
    const high = document.querySelector('.ans.high')
    const low = document.querySelector('.ans.low')
    const price= document.querySelector('.ans.price')
    
    
    const res  = await fetch('https://api.binance.com/api/v3/ticker/24hr?symbols=[%22BTCUSDT%22]')
    const json = await res.json()
    const data = json[0]

    price.textContent = parseFloat(data.lastPrice).toFixed(2);
    high.textContent = parseFloat(data.highPrice).toFixed(2)
    low.textContent = parseFloat(data.lowPrice).toFixed(2)
    open.textContent = parseFloat(data.openPrice).toFixed(2)

}

const update9EMA = async () => {

    const ema9 = document.querySelector('.ans.emap9')

    try {
        const url = `https://api.twelvedata.com/ema?symbol=BTC/USD&interval=1day&exchange=Binance&apikey=${key}`

        const res  = await fetch(url)
        const json = await res.json()

        e9 = json.values[0].ema

        ema9.textContent = parseFloat(e9).toFixed(2)
    } catch(e) {
    }

}

const update20EMA = async () => {
    const ema20 = document.querySelector('.ans.emap20')

    try {
        const url = `https://api.twelvedata.com/ema?symbol=BTC/USD&interval=1day&time_period=20&exchange=Binance&apikey=${key}`

        const res  = await fetch(url)
        const json = await res.json()
        e20 = json.values[0].ema

        ema20.textContent = parseFloat(e20).toFixed(2)
        } catch {

    }
}

const update50EMA = async () => {
    const ema50 = document.querySelector('.ans.emap50')

    try {
        const url = `https://api.twelvedata.com/ema?symbol=BTC/USD&interval=1day&time_period=50&exchange=Binance&apikey=${key}`

        const res  = await fetch(url)
        const json = await res.json()
        e50 = json.values[0].ema

        ema50.textContent = parseFloat(e50).toFixed(2)

        } catch {

        }

}

const updateConclusion = (ema9,ema20,ema50) => {
    const moment = document.querySelector('.ans.moment')
    const result = document.querySelector('.result')
    
    if(ema9 > ema20 && ema20 > ema50){
        result.textContent = 'Highly Bullish'
        moment.textContent = 'Highly Bullish'
        result.classList.add('green')
    } else if(ema9 > ema20 && ema20 < ema50) {
        result.textContent = 'Bullish'
        moment.textContent = 'Bullish'
        result.classList.add('green')
    } else if(ema9 < ema20 && ema20 < ema50){
        result.textContent = 'Highly Bearish'
        moment.textContent = 'Highly Bearish'
        result.classList.add('red')
    } else if(ema9 < ema20 && ema20 > ema50) {
        result.textContent =  'Bearish'
        moment.textContent = 'Bearish'
        result.classList.add('red')
    }


}

const updateData = () => {
    updateMarket()
    update9EMA()
    update20EMA()
    update50EMA()
    
    setTimeout(() => {
        updateConclusion(e9,e20,e50)
    },2000)
}

export default updateData