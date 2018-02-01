---
id: authentication
title: Authentication
---

本文档是对 BigONE Developer API 鉴权方法的说明。

BigONE Developer API 分为 Public API 和 Private API。调用 Private API 需要携带包含用户信息的令牌来确定用户身份。

请求时需将 Token 放在 Header 中，示例如下：

```
curl "https://API_SERVER/private/accounts/btc" \
     -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlrZXkiOiJjZWU4OGFiMGJjNjk0MzU3ODRiN2RiMDU0NWU4NTY0NyIsIm5vbmNlIjoiMTUxNzQ5Mjc1MTYxMCJ9.NsJ6Jc6aD56O0CrYLWRE9LwwKhVgnX4rInoPWQdn4Gw'
```

## 如何获得 API Key 和 API Secret

开发者可以在 BigONE 个人设置页面，生成 API Key 和 API Secret。
## 令牌生成方法

BigONE API 令牌是一个 JWT Token。关于 JWT 请参考官方文档：https://jwt.io/

开发者需要在 JWT Token 的 payload 中携带 `apikey` 和 `nonce` 两个值。并使用自己的 API Secret 作为密钥对 JWT Token 进行签名。

* apikey：用户的 API Key
* nonce: 一个毫秒级的unix时间戳，例如：1517492751610。此时间戳需要使用`string`形式放在payload。nonce的时间应该和服务器时间差值在30s以内，超过这个时间的Token 视作过期Token。

签名算法请使用 `HS256` 算法。

`Claim` 请使用 `MapClaim` 类型。

## 令牌生成示例

JWT Header
```
{
  "typ": "JWT",
  "alg": "HS256"
}
```

JWT Payload
```
{
  "apikey": "cee88ab0bc69435784b7db0545e85647",
  "nonce": "1517492751610"
}
```

使用密钥 `testsecret` 签名

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlrZXkiOiJjZWU4OGFiMGJjNjk0MzU3ODRiN2RiMDU0NWU4NTY0NyIsIm5vbmNlIjoiMTUxNzQ5Mjc1MTYxMCJ9.PYwGqqINj4WIIDmMUzjq9uUOFMnxjnLBN7ov8OEWibg
```

可以在 jwt.io 网站上生成token、解析token以便验证。
