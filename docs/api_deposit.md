---
id: api_deposit
title: Deposit
sidebar_label: Deposit
---

## Deposit of user

**Required read permission of wallet**

```
GET /private/deposits
```

Parameters

Name | Description | Example
---- | --- | ---
asset | asset name | BTC
page | | |
per_page | | |

Response is a [Deposit](/docs/data_structs.html#deposit) collection

```
[{
    "user_id": "6b0ffa5e-a9ea-4913-b9b8-a84a32dd478c",
    "asset": "ETH",
    "state": "initial",
    "tx_id": "",
    "amount": "2",
    "created_at": "2018-03-15T16:13:45.610463Z"
}]
```