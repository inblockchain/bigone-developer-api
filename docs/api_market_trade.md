---
id: api_market_trade
title: Market Trade
sidebar_label: Market Trade
---

## Trades of a market

Only returns 50 latest trades

```
GET /markets/:market/trades
```

Parameters

Name | Description | Example
---- | --- | ---
market | market name | ETH-BTC

Response is a [Trade](/docs/data_structs.html#trade) collection

```
[{
    "user_id": "6b0ffa5e-a9ea-4913-b9b8-a84a32dd478c",
    "trade_id": "0f0e1b61-a2d2-4d6a-8261-b27bfcd82977",
    "market": "ETH-BTC",
    "side": "ASK",
    "order_id": "224946b7-53c7-40d4-9ffe-a78a0199f478",
    "price": "1",
    "amount": "1",
    "created_at": "2018-02-08T07:40:12.022105731Z"
}]
```