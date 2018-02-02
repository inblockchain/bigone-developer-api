---
id: api_accounts
title: Accounts
sidebar_label: Accounts
---

Accounts is the balances info of current user.

### Account List

Account List is the balances of all the assets

```
GET /private/accounts
```
Response is an [Account](/bigone-developer-api/docs/data_structs.html#account) Collection type.

```
[
    {
        "asset": "BTC",
        "balance": "0",
        "locked": "0"
    }
]
```

### Balance of one currency 

```
GET /private/accounts/{asset}
```

Parameters

Name | Description | Example
---- | --- | ---
asset | asset name | btc 

Response is an [Account](/bigone-developer-api/docs/data_structs.html#account) type

```
{
    "asset": "BTC",
    "balance": "0",
    "locked": "0"
  }
```