---
id: "types.Message"
title: "Interface: Message"
sidebar_label: "Message"
custom_edit_url: null
---

[types](../modules/types.md).Message

This object represents a message.

**`See`**

[https://core.telegram.org/bots/api#message](https://core.telegram.org/bots/api#message)

## Properties

### animation

• `Optional` **animation**: [`Animation`](types.Animation.md)

Message is an animation, information about the animation. For backward
compatibility, when this field is set, the document field will also be set

#### Defined in

[types/message.interface.ts:171](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L171)

___

### audio

• `Optional` **audio**: [`Audio`](types.Audio.md)

Message is an audio file, information about the file

#### Defined in

[types/message.interface.ts:176](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L176)

___

### authorSignature

• `Optional` **authorSignature**: `string`

Signature of the post author for messages in channels, or the custom title of
an anonymous group administrator

#### Defined in

[types/message.interface.ts:154](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L154)

___

### caption

• `Optional` **caption**: `string`

Caption for the animation, audio, document, photo, video or voice

#### Defined in

[types/message.interface.ts:211](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L211)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

For messages with a caption, special entities like usernames, URLs, bot
commands, etc. that appear in the caption

#### Defined in

[types/message.interface.ts:217](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L217)

___

### channelChatCreated

• `Optional` **channelChatCreated**: `boolean`

Service message: the channel has been created. This field can't be received in
a message coming through updates, because bot can't be a member of a channel
when it is created. It can only be found in reply_to_message if someone replies
to a very first message in a channel.

#### Defined in

[types/message.interface.ts:302](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L302)

___

### chat

• **chat**: [`Chat`](types.Chat.md)

Conversation the message belongs to

#### Defined in

[types/message.interface.ts:77](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L77)

___

### connectedWebsite

• `Optional` **connectedWebsite**: `string`

The domain name of the website on which the user has logged in. More about
Telegram Login: https://core.telegram.org/widgets/login

#### Defined in

[types/message.interface.ts:349](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L349)

___

### contact

• `Optional` **contact**: [`Contact`](types.Contact.md)

Message is a shared contact, information about the contact

#### Defined in

[types/message.interface.ts:227](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L227)

___

### date

• **date**: `number`

Date the message was sent in Unix time

#### Defined in

[types/message.interface.ts:72](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L72)

___

### deleteChatPhoto

• `Optional` **deleteChatPhoto**: `boolean`

Service message: the chat photo was deleted

#### Defined in

[types/message.interface.ts:281](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L281)

___

### dice

• `Optional` **dice**: [`Dice`](types.Dice.md)

Message is a dice with random value

#### Defined in

[types/message.interface.ts:232](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L232)

___

### document

• `Optional` **document**: [`Document`](types.Document.md)

Message is a general file, information about the file

#### Defined in

[types/message.interface.ts:181](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L181)

___

### editDate

• `Optional` **editDate**: `number`

Date the message was last edited in Unix time

#### Defined in

[types/message.interface.ts:138](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L138)

___

### entities

• `Optional` **entities**: [`MessageEntity`](types.MessageEntity.md)

For text messages, special entities like usernames, URLs, bot commands, etc.
that appear in the text

#### Defined in

[types/message.interface.ts:165](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L165)

___

### forumTopicClosed

• `Optional` **forumTopicClosed**: [`ForumTopicClosed`](types.ForumTopicClosed.md)

Service message: forum topic closed

#### Defined in

[types/message.interface.ts:381](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L381)

___

### forumTopicCreated

• `Optional` **forumTopicCreated**: [`ForumTopicCreated`](types.ForumTopicCreated.md)

Service message: forum topic created

#### Defined in

[types/message.interface.ts:371](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L371)

___

### forumTopicEdited

• `Optional` **forumTopicEdited**: [`ForumTopicEdited`](types.ForumTopicEdited.md)

Service message: forum topic edited

#### Defined in

[types/message.interface.ts:376](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L376)

___

### forumTopicReopened

• `Optional` **forumTopicReopened**: [`ForumTopicReopened`](types.ForumTopicReopened.md)

Service message: forum topic reopened

#### Defined in

[types/message.interface.ts:386](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L386)

___

### forwardDate

• `Optional` **forwardDate**: `number`

For forwarded messages, date the original message was sent in Unix time

#### Defined in

[types/message.interface.ts:111](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L111)

___

### forwardFrom

• `Optional` **forwardFrom**: [`User`](types.User.md)

For forwarded messages, sender of the original message

#### Defined in

[types/message.interface.ts:82](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L82)

___

### forwardFromChat

• `Optional` **forwardFromChat**: [`Chat`](types.Chat.md)

For messages forwarded from channels or from anonymous administrators,
information about the original sender chat

#### Defined in

[types/message.interface.ts:88](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L88)

___

### forwardFromMessageId

• `Optional` **forwardFromMessageId**: `number`

For messages forwarded from channels, identifier of the original message in the
channel

#### Defined in

[types/message.interface.ts:94](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L94)

___

### forwardSenderName

• `Optional` **forwardSenderName**: `string`

Sender's name for messages forwarded from users who disallow adding a link to
their account in forwarded messages

#### Defined in

[types/message.interface.ts:106](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L106)

___

### forwardSignature

• `Optional` **forwardSignature**: `string`

For forwarded messages that were originally sent in channels or by an anonymous
chat administrator, signature of the message sender if present

#### Defined in

[types/message.interface.ts:100](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L100)

___

### from

• `Optional` **from**: [`User`](types.User.md)

Sender of the message; empty for messages sent to channels. For backward
compatibility, the field contains a fake sender user in non-channel chats, if
the message was sent on behalf of a chat.

#### Defined in

[types/message.interface.ts:58](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L58)

___

### game

• `Optional` **game**: [`Game`](types.Game.md)

Message is a game, information about the game. More about games:
https://core.telegram.org/bots/api#games

#### Defined in

[types/message.interface.ts:238](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L238)

___

### generalForumTopicHidden

• `Optional` **generalForumTopicHidden**: [`GeneralForumTopicHidden`](types.GeneralForumTopicHidden.md)

Service message: the 'General' forum topic hidden

#### Defined in

[types/message.interface.ts:391](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L391)

___

### generalForumTopicUnhidden

• `Optional` **generalForumTopicUnhidden**: [`GeneralForumTopicUnhidden`](types.GeneralForumTopicUnhidden.md)

Service message: the 'General' forum topic unhidden

#### Defined in

[types/message.interface.ts:396](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L396)

___

### groupChatCreated

• `Optional` **groupChatCreated**: `boolean`

Service message: the group has been created

#### Defined in

[types/message.interface.ts:286](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L286)

___

### hasMediaSpoiler

• `Optional` **hasMediaSpoiler**: `boolean`

True, if the message media is covered by a spoiler animation

#### Defined in

[types/message.interface.ts:222](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L222)

___

### hasProtectedContent

• `Optional` **hasProtectedContent**: `boolean`

True, if the message can't be forwarded

#### Defined in

[types/message.interface.ts:143](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L143)

___

### invoice

• `Optional` **invoice**: [`Invoice`](types.Invoice.md)

Message is an invoice for a payment, information about the invoice. More about
payments: https://core.telegram.org/bots/api#payments

#### Defined in

[types/message.interface.ts:337](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L337)

___

### isAutomaticForward

• `Optional` **isAutomaticForward**: `boolean`

True, if the message is a channel post that was automatically forwarded to the
connected discussion group

#### Defined in

[types/message.interface.ts:122](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L122)

___

### isTopicMessage

• `Optional` **isTopicMessage**: `boolean`

True, if the message is sent to a forum topic

#### Defined in

[types/message.interface.ts:116](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L116)

___

### leftChatMember

• `Optional` **leftChatMember**: [`User`](types.User.md)

A member was removed from the group, information about them (this member may be
the bot itself)

#### Defined in

[types/message.interface.ts:266](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L266)

___

### location

• `Optional` **location**: [`Location`](types.Location.md)

Message is a shared location, information about the location

#### Defined in

[types/message.interface.ts:254](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L254)

___

### mediaGroupId

• `Optional` **mediaGroupId**: `string`

The unique identifier of a media message group this message belongs to

#### Defined in

[types/message.interface.ts:148](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L148)

___

### messageAutoDeleteTimerChanged

• `Optional` **messageAutoDeleteTimerChanged**: [`MessageAutoDeleteTimerChanged`](types.MessageAutoDeleteTimerChanged.md)

Service message: auto-delete timer settings changed in the chat

#### Defined in

[types/message.interface.ts:307](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L307)

___

### messageId

• **messageId**: `number`

Unique message identifier inside this chat

#### Defined in

[types/message.interface.ts:45](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L45)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier of a message thread to which the message belongs; for
supergroups only

#### Defined in

[types/message.interface.ts:51](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L51)

___

### migrateFromChatId

• `Optional` **migrateFromChatId**: `number`

The supergroup has been migrated from a group with the specified identifier.
This number may have more than 32 significant bits and some programming
languages may have difficulty/silent defects in interpreting it. But it has at
most 52 significant bits, so a signed 64-bit integer or double-precision float
type are safe for storing this identifier.

#### Defined in

[types/message.interface.ts:325](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L325)

___

### migrateToChatId

• `Optional` **migrateToChatId**: `number`

The group has been migrated to a supergroup with the specified identifier. This
number may have more than 32 significant bits and some programming languages may
have difficulty/silent defects in interpreting it. But it has at most 52
significant bits, so a signed 64-bit integer or double-precision float type are
safe for storing this identifier.

#### Defined in

[types/message.interface.ts:316](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L316)

___

### newChatMembers

• `Optional` **newChatMembers**: [`User`](types.User.md)

New members that were added to the group or supergroup and information about
them (the bot itself may be one of these members)

#### Defined in

[types/message.interface.ts:260](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L260)

___

### newChatPhoto

• `Optional` **newChatPhoto**: [`PhotoSize`](types.PhotoSize.md)

A chat photo was change to this value

#### Defined in

[types/message.interface.ts:276](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L276)

___

### newChatTitle

• `Optional` **newChatTitle**: `string`

A chat title was changed to this value

#### Defined in

[types/message.interface.ts:271](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L271)

___

### passportData

• `Optional` **passportData**: [`PassportData`](types.PassportData.md)

Telegram Passport data

#### Defined in

[types/message.interface.ts:360](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L360)

___

### photo

• `Optional` **photo**: [`PhotoSize`](types.PhotoSize.md)

Message is a photo, available sizes of the photo

#### Defined in

[types/message.interface.ts:186](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L186)

___

### pinnedMessage

• `Optional` **pinnedMessage**: [`Message`](types.Message.md)

Specified message was pinned. Note that the Message object in this field will
not contain further reply_to_message fields even if it is itself a reply.

#### Defined in

[types/message.interface.ts:331](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L331)

___

### poll

• `Optional` **poll**: [`Poll`](types.Poll.md)

Message is a native poll, information about the poll

#### Defined in

[types/message.interface.ts:243](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L243)

___

### proximityAlertTriggered

• `Optional` **proximityAlertTriggered**: [`ProximityAlertTriggered`](types.ProximityAlertTriggered.md)

Service message. A user in the chat triggered another user's proximity alert
while sharing Live Location.

#### Defined in

[types/message.interface.ts:366](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L366)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message. login_url buttons are represented as
ordinary url buttons.

#### Defined in

[types/message.interface.ts:427](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L427)

___

### replyToMessage

• `Optional` **replyToMessage**: [`Message`](types.Message.md)

For replies, the original message. Note that the Message object in this field
will not contain further reply_to_message fields even if it itself is a reply.

#### Defined in

[types/message.interface.ts:128](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L128)

___

### senderChat

• `Optional` **senderChat**: [`Chat`](types.Chat.md)

Sender of the message, sent on behalf of a chat. For example, the channel
itself for channel posts, the supergroup itself for messages from anonymous
group administrators, the linked channel for messages automatically forwarded to
the discussion group. For backward compatibility, the field from contains a fake
sender user in non-channel chats, if the message was sent on behalf of a chat.

#### Defined in

[types/message.interface.ts:67](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L67)

___

### sticker

• `Optional` **sticker**: [`Sticker`](types.Sticker.md)

Message is a sticker, information about the sticker

#### Defined in

[types/message.interface.ts:191](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L191)

___

### successfulPayment

• `Optional` **successfulPayment**: [`SuccessfulPayment`](types.SuccessfulPayment.md)

Message is a service message about a successful payment, information about the
payment. More about payments: https://core.telegram.org/bots/api#payments

#### Defined in

[types/message.interface.ts:343](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L343)

___

### supergroupChatCreated

• `Optional` **supergroupChatCreated**: `boolean`

Service message: the supergroup has been created. This field can't be received
in a message coming through updates, because bot can't be a member of a
supergroup when it is created. It can only be found in reply_to_message if
someone replies to a very first message in a directly created supergroup.

#### Defined in

[types/message.interface.ts:294](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L294)

___

### text

• `Optional` **text**: `string`

For text messages, the actual UTF-8 text of the message

#### Defined in

[types/message.interface.ts:159](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L159)

___

### venue

• `Optional` **venue**: [`Venue`](types.Venue.md)

Message is a venue, information about the venue. For backward compatibility,
when this field is set, the location field will also be set

#### Defined in

[types/message.interface.ts:249](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L249)

___

### viaBot

• `Optional` **viaBot**: [`User`](types.User.md)

Bot through which the message was sent

#### Defined in

[types/message.interface.ts:133](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L133)

___

### video

• `Optional` **video**: [`Video`](types.Video.md)

Message is a video, information about the video

#### Defined in

[types/message.interface.ts:196](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L196)

___

### videoChatEnded

• `Optional` **videoChatEnded**: [`VideoChatEnded`](types.VideoChatEnded.md)

Service message: video chat ended

#### Defined in

[types/message.interface.ts:411](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L411)

___

### videoChatParticipantsInvited

• `Optional` **videoChatParticipantsInvited**: [`VideoChatParticipantsInvited`](types.VideoChatParticipantsInvited.md)

Service message: new participants invited to a video chat

#### Defined in

[types/message.interface.ts:416](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L416)

___

### videoChatScheduled

• `Optional` **videoChatScheduled**: [`VideoChatScheduled`](types.VideoChatScheduled.md)

Service message: video chat scheduled

#### Defined in

[types/message.interface.ts:401](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L401)

___

### videoChatStarted

• `Optional` **videoChatStarted**: [`VideoChatStarted`](types.VideoChatStarted.md)

Service message: video chat started

#### Defined in

[types/message.interface.ts:406](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L406)

___

### videoNote

• `Optional` **videoNote**: [`VideoNote`](types.VideoNote.md)

Message is a video note, information about the video message

#### Defined in

[types/message.interface.ts:201](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L201)

___

### voice

• `Optional` **voice**: [`Voice`](types.Voice.md)

Message is a voice message, information about the file

#### Defined in

[types/message.interface.ts:206](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L206)

___

### webAppData

• `Optional` **webAppData**: [`WebAppData`](types.WebAppData.md)

Service message: data sent by a Web App

#### Defined in

[types/message.interface.ts:421](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L421)

___

### writeAccessAllowed

• `Optional` **writeAccessAllowed**: [`WriteAccessAllowed`](types.WriteAccessAllowed.md)

Service message: the user allowed the bot added to the attachment menu to write
messages

#### Defined in

[types/message.interface.ts:355](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message.interface.ts#L355)
