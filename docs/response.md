---
id: response
title: API Response
---

本文档描述 API 返回值的结构。

## HTTP CODE

Developer API 响应中的 HTTP CODE 遵循[RFC约定](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81), 正常返回值 code 为 2xx, 错误响应会根据情况返回对应的 code.


## Success Response Struct

请求成功的 Response body 结构如下：

```
{
    "error_code": 0,
    "data": {
        ...
    }
}
```

接口数据会放在 data 字段返回。其中 data 可能是 Object 或者 Collection


## Error Response Struct

请求错误的 Response body 结构如下：

```
{
    "error_code": 0,
    "error_msg": "there is something wrong"
}
```

具体的 error code 定义详见 [错误说明](/bigone-developer-api/docs/api_error_codes.html)