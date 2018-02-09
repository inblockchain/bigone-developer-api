---
id: api_orders
title: Orders
sidebar_label: Orders
---

## Get user orders in a market

```
GET /private/orders
```

Parameters

Name | Description | Example
---- | --- | ---
market | market name | ETH-BTC
state | order state | one of open/closed, default is open
page | page number | default: 1
per_page | orders count per page | default: 20


Response is [Order](/docs/data_structs.html#order) collection 

```
[
    {
        "user_id": "6b0ffa5e-a9ea-4913-b9b8-a84a32dd478c",
        "order_id": "cf4734e2-d859-4417-aa74-cc8c95a72776",
        "market": "ETH-BTC",
        "order_type": "LIMIT",
        "side": "BID",
        "state": "FILLED",
        "price": "1.2",
        "amount": "2",
        "filled": "2",
        "created_at": "2018-02-08T12:57:06.605327164Z",
        "updated_at": "2018-02-08T12:57:08.850330039Z"
    }
]
```

## Create Order

```
POST /private/orders
```

Parameters

Name | Description | Example
---- | --- | ---
market | market name | ETH-BTC
side | order side | one of ASK/BID
price | order price | string
amount | order amount | string, must larger than 0

Response is the ID of Order

```
{
    "order_id": "da023165-3e80-4cb9-980a-c0f13d30bf6f"
}
```

## Cancle Orders

```
POST /private/orders/cancle
```

Parameters

Name | Description | Example
---- | --- | ---
order_ids | id collection of orders | ["id1", "id2"]

Response is a basic Success Response

Case cancle orders is an async action, so we force return a success response.
