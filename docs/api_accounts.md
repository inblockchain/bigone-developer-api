---
id: api_accounts
title: Accounts
sidebar_label: Accounts
---

### Balance of all assets

```
GET /private/accounts
```
Response is an [Account](/docs/data_structs.html#account) Collection type.

```
[
    {
        "asset": "BTC",
        "balance": "0",
        "locked": "0"
    }
]
```

### Balance of one asset 

```
GET /private/accounts/{asset}
```

Parameters

Name | Description | Example
---- | --- | ---
asset | asset name | btc 

Response is an [Account](/docs/data_structs.html#account) type

```
{
    "asset": "BTC",
    "balance": "0",
    "locked": "0"
  }
```