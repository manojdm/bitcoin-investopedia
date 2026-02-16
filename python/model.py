from pydantic import BaseModel


class Result(BaseModel):
    open: float
    high: float
    low: float
    day: int
