---
id: api_order_books
title: Order Book
sidebar_label: Order Book
---

Order Book is the ask orders and bid orders collection of a market

## OrderBook of a market

```
GET /order_books
```

Parameters

Name | Description | Example
---- | --- | ---
market | market name | ETH-BTC

Response is a [OrderBook](/docs/data_structs.html#orderbook)

```
{
    "ask": [{
        "price": "1.22148643",
        "amount": "9389.88250250"
    }],
    "bid": [{
        "price": "0.22148643",
        "amount": "9389.88250250"
    }]
}
```