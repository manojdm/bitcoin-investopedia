from fastapi import APIRouter
import model
from joblib import load
import pandas as pd

router = APIRouter(prefix='/api/candles', tags=['Candles'])


@router.post('/Bitcoin')
def btcCandle(request: model.Result):

    # preparing data
    features = ['Open', 'High', 'Low', 'Week_0', 'Week_1',
                'Week_2', 'Week_3', 'Week_4', 'Week_5', 'Week_6']
    data = [request.open, request.high, request.low, 0, 0, 0, 0, 0, 0, 0]
    day = request.day+3
    data[day] = 1

    df = pd.DataFrame(data=[data], columns=features)

    # load model
    linear_model = load('../models/btc-model.joblib')
    pred = linear_model.predict(df)

    print(data)

    return {'prediction': pred[0]}


@router.post('/Ethereum')
def btcCandle(request: model.Result):

    # preparing data
    features = ['Open', 'High', 'Low', 'Week_0', 'Week_1',
                'Week_2', 'Week_3', 'Week_4', 'Week_5', 'Week_6']
    data = [request.open, request.high, request.low, 0, 0, 0, 0, 0, 0, 0]
    day = request.day+3
    data[day] = 1

    df = pd.DataFrame(data=[data], columns=features)

    # load model
    linear_model = load('../models/eth-model.joblib')
    pred = linear_model.predict(df)

    return {'prediction': pred[0]}


@router.post('/Solana')
def btcCandle(request: model.Result):

    # preparing data
    features = ['Open', 'High', 'Low', 'Week_0', 'Week_1',
                'Week_2', 'Week_3', 'Week_4', 'Week_5', 'Week_6']
    data = [request.open, request.high, request.low, 0, 0, 0, 0, 0, 0, 0]
    day = request.day+3
    data[day] = 1

    df = pd.DataFrame(data=[data], columns=features)

    # load model
    linear_model = load('../models/sol-model.joblib')
    pred = linear_model.predict(df)

    return {'prediction': pred[0]}


@router.post('/Polygon')
def btcCandle(request: model.Result):

    # preparing data
    features = ['Open', 'High', 'Low', 'Week_0', 'Week_1',
                'Week_2', 'Week_3', 'Week_4', 'Week_5', 'Week_6']
    data = [request.open, request.high, request.low, 0, 0, 0, 0, 0, 0, 0]
    day = request.day+3
    data[day] = 1

    df = pd.DataFrame(data=[data], columns=features)

    # load model
    linear_model = load('../models/matic-model.joblib')
    pred = linear_model.predict(df)

    return {'prediction': pred[0]}


@router.post('/Dogecoin')
def btcCandle(request: model.Result):

    # preparing data
    features = ['Open', 'High', 'Low', 'Week_0', 'Week_1',
                'Week_2', 'Week_3', 'Week_4', 'Week_5', 'Week_6']
    data = [request.open, request.high, request.low, 0, 0, 0, 0, 0, 0, 0]
    day = request.day+3
    data[day] = 1

    df = pd.DataFrame(data=[data], columns=features)

    # load model
    linear_model = load('../models/doge-model.joblib')
    pred = linear_model.predict(df)

    return {'prediction': pred[0]}
