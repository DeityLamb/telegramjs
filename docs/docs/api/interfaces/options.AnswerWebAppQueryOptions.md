---
id: "options.AnswerWebAppQueryOptions"
title: "Interface: AnswerWebAppQueryOptions"
sidebar_label: "AnswerWebAppQueryOptions"
custom_edit_url: null
---

[options](../modules/options.md).AnswerWebAppQueryOptions

Use this method to set the result of an interaction with a Web App and send a
corresponding message on behalf of the user to the chat from which the query
originated. On success, a SentWebAppMessage object is returned.

**`See`**

[https://core.telegram.org/bots/api#answerwebappquery](https://core.telegram.org/bots/api#answerwebappquery)

## Properties

### result

• **result**: [`InlineQueryResult`](../modules/types.md#inlinequeryresult)

A JSON-serialized object describing the message to be sent

#### Defined in

[options/answer-web-app-query-options.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/answer-web-app-query-options.interface.ts#L18)

___

### webAppQueryId

• **webAppQueryId**: `string`

Unique identifier for the query to be answered

#### Defined in

[options/answer-web-app-query-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/answer-web-app-query-options.interface.ts#L13)
