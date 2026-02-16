from fastapi import APIRouter
from models import priceprediction

router = APIRouter(prefix='/api/prediction', tags=['Candles'])


@router.get('/Bitcoin')
def btcCandle():
    pred = priceprediction.get_current_close_price()

    print(pred)

    return {'prediction': pred}
