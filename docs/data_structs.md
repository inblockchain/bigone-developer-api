---
id: data_structs
title: Data Structs
sidebar_label: Data Structs
---

*All numbers in BigONE Pro API is a float number in string format*

## Account

Account represents the state of one asset.

Attrubute Name | Type | Description | Example
---- | --- | --- | ---
asset | string | asset symbol of this account | BTC
balance | string | balance, this is a float number in string fromat | 10.034
locked | string | locked balance, this is a float number in string fromat | 10.034

## Ticker

Ticker is the current state of one market, with 24H's trading data

Attrubute Name | Type | Description | Example
---- | --- | --- | ---
market | string | market name | btceth
bid | string | higest price of the buy orders | 3000.0
ask | string | lowest price of the sell orders | 3100.0
low | string | lowest deal price in last 24h | 3100.0
high | string | highest deal price in last 24h | 3100.0
last | string | last deal price | 3100.0
volume | string | total volume in last 24h | 3100.0
timestamp | integer | ticker time | 144425342

## OrderBook

Attrubute Name | Type | Description | Example
---- | --- | --- | ---
bids | list | buy orders collection ||
asks | list | sell orders collection ||


## Order

Attrubute Name | Type | Description | Example
---- | --- | --- | ---
user_id | string | id of user ||
order_id | string | id of order ||
market | string | market name ||
order_type | string | order type, always "LIMIT"||
side | string | order side, one of ASK/BID ||
state | string | order status, one of PARTIALLY_FILLED/FILLED/PENDING/CANCLED ||
price | string | order price ||
amount | string | order amount ||
filled | string | already filled amount ||
created_at | string | create time of order ||
updated_at | string | update time of order ||


## Withdrawal

Attrubute Name | Type | Description | Example
---- | --- | --- | ---
user_id | string | id of user ||
state | string | withdraw status ||
asset | string | asset name ||
tx_id | string | withdraw transaction ||
amount | string | amount ||
label | string | withdraw label ||
memo | string |  withdraw memo ||
address | string |  withdraw address ||
created_at | string | withdraw time ||

## Deposit

Attrubute Name | Type | Description | Example
---- | --- | --- | ---
user_id | string | id of user ||
state | string | deposit status ||
asset | string | asset name ||
tx_id | string | deposit transaction ||
amount | string | amount ||
created_at | string | deposit time ||

## Trade

Attrubute Name | Type | Description | Example
---- | --- | --- | ---
user_id | string | id of user ||
trade_id | string | id of trade ||
order_id | string | id of order ||
state | string | deposit status ||
price | string | deal price ||
amount | string | amount ||
created_at | string | deal time ||