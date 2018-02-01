---
id: sdk_specification
title: Specification
---

本规范使用 `必须` 和 `应该` 两种关键字来表示规范的约束性。

* 必须（MUST）- Client SDK 必须按照此规范来实现。
* 应该 (SHOULD) - Client SDK 可以按照此规范来实现，也可以使用符合自己需求/规范的方式。

## 配置

Client SDK `必须` 同时支持两种配置方式：

* 配置项
* 环境变量

## 账号

Client SDK `必须` 支持可以同时使用多个 BigONE 账号。

## Rate Limit

Client SDK `必须` 遵循 BigONE Pro API 中定义的接口访问频率限制，主动控制接口调用频率。

## 日志

Client SDK `必须` 实现日志输出的功能。

Client SDK 的日志默认 `必须` 输出到 `STDOUT` 中。

Client SDK `必须` 可以根据配置输出不同的日志等级、输出到不同位置。

## 文档

Client SDK `必须` 提供一个完整的示例文档，以方便开发者使用。此文档 `应该` 包括 SDK 的安装、集成、配置、示例调用等场景。

Client SDK `必须` 为每个 API 提供注释。注释中 `应该` 包含该 API 的调用方法、参数、返回值等。

## 版本

Client SDK 的版本号 `应该` 按照 `major.minor[.maintenance]` 格式。

其中 `major` 表示不向下兼容的更新或者重构。`minor` 表示在某一个版本中增加新的特性或者对某一个接口进行了修改（此修改可以不向下兼容）。`maintenance` 表示对某一个 `minor` 版本的 patch version 。patch 只做 Bug fix , 不 `应该` 造成接口变动。

Client SDK `必须` 在 Github 上通过打 Tag 的方式发布新版本。Tag name `必须` 采用 `vX.Y.Z` 的格式。

Client SDK `应该` 在 Github 上通过 Release 功能发布相应的版本。

如果 Client SDK 所采用的语言拥有包管理平台，Client SDK `必须` 将版本发布到此平台。例如 `rubygems`, `npm`, `pypi` 等平台。同时需要在文档示例中展示如何从包管理平台安装。

## Changelog

Client SDK `必须` 维护 Changelog。Changelog `必须` 包含每次版本更新所包含的修改项。

