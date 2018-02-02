---
id: api_tickers
title: Tickers
sidebar_label: Tickers
---

Ticker is the state of a market

## Tickers of all market

```
GET /tickers
```

Response is a [Ticker](/docs/data_structs.html#ticker) Collection

```
[
    {
        "ask": "0.0",
        "bid": "1.00000000",
        "high": "0.00000000",
        "last": "1.00000000",
        "low": "0.00000000",
        "market": "ETH-BTC",
        "volume": "0.00000000"
    }
]
```

## Ticker of one market 

```
GET /tickers/{market}
```

Parameters

Name | Description | Example
---- | --- | ---
market | market name | ETH-BTC

Response is a [Ticker](/docs/data_structs.html#ticker) object

```
{
    "ask": "0.0",
    "bid": "1.00000000",
    "high": "0.00000000",
    "last": "1.00000000",
    "low": "0.00000000",
    "market": "ETH-BTC",
    "volume": "0.00000000"
}
```