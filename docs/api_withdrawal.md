---
id: api_withdrawal
title: Withdrawal
sidebar_label: Withdrawal
---

## Withdrawal of user

**Required read permission of wallet**

```
GET /private/withdrawals
```

Parameters

Name | Description | Example
---- | --- | ---
asset | asset name | BTC
page | | |
per_page | | |

Response is a [Withdrawal](/docs/data_structs.html#withdrawal) collection

```
[{
    "user_id": "6b0ffa5e-a9ea-4913-b9b8-a84a32dd478c",
    "asset": "ETH",
    "state": "initial",
    "tx_id": "",
    "amount": "2",
    "label": "111",
    "memo": "",
    "address": "0xD0b1EEBE6F289b9E3bE7C9925A8580a5C60704F1",
    "created_at": "2018-03-15T16:13:45.610463Z"
}]
```