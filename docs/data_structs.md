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

## Order

Order is the user's trading order

Attrubute Name | Type | Description | Example
---- | --- | --- | ---
id | string | order id | 448411365
market | string | which market this order belongs to | btcusd
price | string | order price | 0.02
avg_price | string | Average deal price | 0.015
side | string | whether this order is a sell order or buy order, one value of ask/bid | ask
type | string | order type, one value of limit or market | limit
state | string | status of this order, one value of pending/partial/done/canceled | pending
original_amount | string | original request amount | 0.02
remaining_amount | string | amount has not deal | 0.01
executed_amount | string | amount has already deal  | 0.01
timestamp | integer | order create time | 144425342

## OrderBook

Attrubute Name | Type | Description | Example
---- | --- | --- | ---
market | string | market name | btceth
bids | list | buy orders collection ||
asks | list | sell orders collection ||
