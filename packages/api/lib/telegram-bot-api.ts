import fetch from 'node-fetch';
import FormData from 'form-data';
import snakelize from 'snakecase-keys';
import camelize from 'camelcase-keys';
import { API_URL } from './constants';
import { 
  AnswerCallbackQueryOptions, AddStickerToSetOptions,
  AnswerInlineQueryOptions, AnswerPreCheckoutQueryOptions,
  AnswerShippingQueryOptions, AnswerWebAppQueryOptions,
  ApproveChatJoinRequestOptions, BanChatMemberOptions,
  BanChatSenderChatOptions, CloseForumTopicOptions,
  CloseGeneralForumTopicOptions, CopyMessageOptions,
  CreateChatInviteLinkOptions, CreateForumTopicOptions,
  CreateInvoiceLinkOptions, CreateNewStickerSetOptions,
  DeclineChatJoinRequestOptions, DeleteChatPhotoOptions,
  DeleteChatStickerSetOptions, DeleteForumTopicOptions,
  DeleteMessageOptions, DeleteMyCommandsOptions,
  DeleteStickerFromSetOptions, DeleteWebhookOptions,
  EditChatInviteLinkOptions, EditForumTopicOptions,
  EditGeneralForumTopicOptions, EditMessageCaptionOptions,
  EditMessageLiveLocationOptions, EditMessageMediaOptions,
  EditMessageReplyMarkupOptions, EditMessageTextOptions,
  ExportChatInviteLinkOptions, ForwardMessageOptions,
  GetChatAdministratorsOptions, GetChatMemberCountOptions,
  GetChatMemberOptions, GetChatMenuButtonOptions,
  GetChatOptions, GetCustomEmojiStickersOptions,
  GetFileOptions, GetGameHighScoresOptions,
  GetMyCommandsOptions, GetMyDefaultAdministratorRightsOptions,
  GetStickerSetOptions, GetUpdatesOptions,
  GetUserProfilePhotosOptions, HideGeneralForumTopicOptions,
  LeaveChatOptions, PinChatMessageOptions,
  PromoteChatMemberOptions, ReopenForumTopicOptions,
  ReopenGeneralForumTopicOptions, RestrictChatMemberOptions,
  RevokeChatInviteLinkOptions, SendAnimationOptions,
  SendAudioOptions, SendChatActionOptions,
  SendContactOptions, SendDiceOptions,
  SendDocumentOptions, SendGameOptions, SendInvoiceOptions,
  SendLocationOptions, SendMediaGroupOptions, SendMessageOptions,
  SendPhotoOptions, SendPollOptions,
  SendStickerOptions, SendVenueOptions,
  SendVideoNoteOptions, SendVideoOptions,
  SendVoiceOptions, SetChatAdministratorCustomTitleOptions,
  SetChatDescriptionOptions, SetChatMenuButtonOptions,
  SetChatPermissionsOptions, SetChatPhotoOptions,
  SetChatStickerSetOptions, SetChatTitleOptions,
  SetGameScoreOptions, SetMyCommandsOptions,
  SetMyDefaultAdministratorRightsOptions, SetPassportDataErrorsOptions,
  SetStickerPositionInSetOptions, SetStickerSetThumbOptions,
  SetWebhookOptions, StopMessageLiveLocationOptions,
  StopPollOptions, UnbanChatMemberOptions,
  UnbanChatSenderChatOptions, UnhideGeneralForumTopicOptions,
  UnpinAllChatMessagesOptions, UnpinAllForumTopicMessagesOptions,
  UnpinChatMessageOptions, UploadStickerFileOptions
} from '@telegramjs/common';
import {
  BotCommand, Chat,
  ChatAdministratorRights, ChatInviteLink, ChatMember,
  File, ForumTopic, GameHighScore,
  MenuButton, Message, MessageId,
  Poll, SentWebAppMessage, Sticker,
  StickerSet, Update, User,
  UserProfilePhotos, WebhookInfo
} from '@telegramjs/common';

import { ITelegramBotApi } from '@telegramjs/common';

export class TelegramBotApi implements ITelegramBotApi {
  constructor (private readonly token: string) {}
  
  public getUpdates(options: GetUpdatesOptions): Promise<Update[]> {
    return this.fetch<Update[]>('getUpdates', options);
  }
  
  public setWebhook(options: SetWebhookOptions): Promise<boolean> {
    return this.fetch<boolean>('setWebhook', options);
  }
  
  public deleteWebhook(options: DeleteWebhookOptions): Promise<boolean> {
    return this.fetch<boolean>('deleteWebhook', options);
  }
  
  public getWebhookInfo(): Promise<WebhookInfo> {
    return this.fetch<WebhookInfo>('getWebhookInfo');
  }
  
  public getMe(): Promise<User> {
    return this.fetch<User>('getMe');
  }
  
  public logOut(): Promise<boolean> {
    return this.fetch<boolean>('logOut');
  }
  
  public close(): Promise<boolean> {
    return this.fetch<boolean>('close');
  }
  
  public sendMessage(options: SendMessageOptions): Promise<Message> {
    return this.fetch<Message>('sendMessage', options);
  }
  
  public forwardMessage(options: ForwardMessageOptions): Promise<Message> {
    return this.fetch<Message>('forwardMessage', options);
  }
  
  public copyMessage(options: CopyMessageOptions): Promise<MessageId> {
    return this.fetch<MessageId>('copyMessage', options);
  }
  
  public sendPhoto(options: SendPhotoOptions | FormData): Promise<Message> {
    return this.fetch<Message>('sendPhoto', options);
  }
  
  public sendAudio(options: SendAudioOptions | FormData): Promise<Message> {
    return this.fetch<Message>('sendAudio', options);
  }
  
  public sendDocument(options: SendDocumentOptions | FormData): Promise<Message> {
    return this.fetch<Message>('sendDocument', options);
  }
  
  public sendVideo(options: SendVideoOptions | FormData): Promise<Message> {
    return this.fetch<Message>('sendVideo', options);
  }
  
  public sendAnimation(options: SendAnimationOptions | FormData): Promise<Message> {
    return this.fetch<Message>('sendAnimation', options);
  }
  
  public sendVoice(options: SendVoiceOptions | FormData): Promise<Message> {
    return this.fetch<Message>('sendVoice', options);
  }
  
  public sendVideoNote(options: SendVideoNoteOptions | FormData): Promise<Message> {
    return this.fetch<Message>('sendVideoNote', options);
  }
  
  public sendMediaGroup(options: SendMediaGroupOptions | FormData): Promise<Message> {
    return this.fetch<Message>('sendMediaGroup', options);
  }
  
  public sendLocation(options: SendLocationOptions): Promise<Message> {
    return this.fetch<Message>('sendLocation', options);
  }
  
  public editMessageLiveLocation(
    options: EditMessageLiveLocationOptions
  ): Promise<Message | boolean> {
    return this.fetch<Message | boolean>('editMessageLiveLocation', options);
  }
  
  public stopMessageLiveLocation(
    options: StopMessageLiveLocationOptions
  ): Promise<Message | boolean> {
    return this.fetch<Message | boolean>('stopMessageLiveLocation', options);
  }
  
  public sendVenue(options: SendVenueOptions): Promise<Message> {
    return this.fetch<Message>('sendVenue', options);
  }
  
  public sendContact(options: SendContactOptions): Promise<Message> {
    return this.fetch<Message>('sendContact', options);
  }
  
  public sendPoll(options: SendPollOptions): Promise<Message> {
    return this.fetch<Message>('sendPoll', options);
  }
  
  public sendDice(options: SendDiceOptions): Promise<Message> {
    return this.fetch<Message>('sendDice', options);
  }
  
  public sendChatAction(options: SendChatActionOptions): Promise<boolean> {
    return this.fetch<boolean>('sendChatAction', options);
  }
  
  public getUserProfilePhotos(
    options: GetUserProfilePhotosOptions
  ): Promise<UserProfilePhotos> {
    return this.fetch<UserProfilePhotos>('getUserProfilePhotos', options);
  }
  
  public getFile(options: GetFileOptions): Promise<File> {
    return this.fetch<File>('getFile', options);
  }
  
  public banChatMember(options: BanChatMemberOptions): Promise<boolean> {
    return this.fetch<boolean>('banChatMember', options);
  }
  
  public unbanChatMember(options: UnbanChatMemberOptions): Promise<boolean> {
    return this.fetch<boolean>('unbanChatMember', options);
  }
  
  public restrictChatMember(
    options: RestrictChatMemberOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('restrictChatMember', options);
  }
  
  public promoteChatMember(
    options: PromoteChatMemberOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('promoteChatMember', options);
  }
  
  public setChatAdministratorCustomTitle(
    options: SetChatAdministratorCustomTitleOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('setChatAdministratorCustomTitle', options);
  }
  
  public banChatSenderChat(
    options: BanChatSenderChatOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('banChatSenderChat', options);
  }
  
  public unbanChatSenderChat(
    options: UnbanChatSenderChatOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('unbanChatSenderChat', options);
  }
  
  public setChatPermissions(
    options: SetChatPermissionsOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('setChatPermissions', options);
  }
  
  public exportChatInviteLink(
    options: ExportChatInviteLinkOptions
  ): Promise<string> {
    return this.fetch<string>('exportChatInviteLink', options);
  }
  
  public createChatInviteLink(
    options: CreateChatInviteLinkOptions
  ): Promise<ChatInviteLink> {
    return this.fetch<ChatInviteLink>('createChatInviteLink', options);
  }
  
  public editChatInviteLink(
    options: EditChatInviteLinkOptions
  ): Promise<ChatInviteLink> {
    return this.fetch<ChatInviteLink>('editChatInviteLink', options);
  }
  
  public revokeChatInviteLink(
    options: RevokeChatInviteLinkOptions
  ): Promise<ChatInviteLink> {
    return this.fetch<ChatInviteLink>('revokeChatInviteLink', options);
  }
  
  public approveChatJoinRequest(
    options: ApproveChatJoinRequestOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('approveChatJoinRequest', options);
  }
  
  public declineChatJoinRequest(
    options: DeclineChatJoinRequestOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('declineChatJoinRequest', options);
  }
  
  public setChatPhoto(options: SetChatPhotoOptions | FormData): Promise<boolean> {
    return this.fetch<boolean>('setChatPhoto', options);
  }
  
  public deleteChatPhoto(options: DeleteChatPhotoOptions): Promise<boolean> {
    return this.fetch<boolean>('deleteChatPhoto', options);
  }
  
  public setChatTitle(options: SetChatTitleOptions): Promise<boolean> {
    return this.fetch<boolean>('setChatTitle', options);
  }
  
  public setChatDescription(
    options: SetChatDescriptionOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('setChatDescription', options);
  }
  
  public pinChatMessage(options: PinChatMessageOptions): Promise<boolean> {
    return this.fetch<boolean>('pinChatMessage', options);
  }
  
  public unpinChatMessage(options: UnpinChatMessageOptions): Promise<boolean> {
    return this.fetch<boolean>('unpinChatMessage', options);
  }
  
  public unpinAllChatMessages(
    options: UnpinAllChatMessagesOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('unpinAllChatMessages', options);
  }
  
  public leaveChat(options: LeaveChatOptions): Promise<boolean> {
    return this.fetch<boolean>('leaveChat', options);
  }
  
  public getChat(options: GetChatOptions): Promise<Chat> {
    return this.fetch<Chat>('getChat', options);
  }
  
  public getChatAdministrators(
    options: GetChatAdministratorsOptions
  ): Promise<ChatMember[]> {
    return this.fetch<ChatMember[]>('getChatAdministrators', options);
  }
  
  public getChatMemberCount(
    options: GetChatMemberCountOptions
  ): Promise<number> {
    return this.fetch<number>('getChatMemberCount', options);
  }
  
  public getChatMember(options: GetChatMemberOptions): Promise<ChatMember> {
    return this.fetch<ChatMember>('getChatMember', options);
  }
  
  public setChatStickerSet(
    options: SetChatStickerSetOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('setChatStickerSet', options);
  }
  
  public deleteChatStickerSet(
    options: DeleteChatStickerSetOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('deleteChatStickerSet', options);
  }
  
  public getForumTopicIconStickers(): Promise<Sticker[]> {
    return this.fetch<Sticker[]>('getForumTopicIconStickers');
  }
  
  public createForumTopic(
    options: CreateForumTopicOptions
  ): Promise<ForumTopic> {
    return this.fetch<ForumTopic>('createForumTopic', options);
  }
  
  public editForumTopic(options: EditForumTopicOptions): Promise<boolean> {
    return this.fetch<boolean>('editForumTopic', options);
  }
  
  public closeForumTopic(options: CloseForumTopicOptions): Promise<boolean> {
    return this.fetch<boolean>('closeForumTopic', options);
  }
  
  public reopenForumTopic(options: ReopenForumTopicOptions): Promise<boolean> {
    return this.fetch<boolean>('reopenForumTopic', options);
  }
  
  public deleteForumTopic(options: DeleteForumTopicOptions): Promise<boolean> {
    return this.fetch<boolean>('deleteForumTopic', options);
  }
  
  public unpinAllForumTopicMessages(
    options: UnpinAllForumTopicMessagesOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('unpinAllForumTopicMessages', options);
  }
  
  public editGeneralForumTopic(
    options: EditGeneralForumTopicOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('editGeneralForumTopic', options);
  }
  
  public closeGeneralForumTopic(
    options: CloseGeneralForumTopicOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('closeGeneralForumTopic', options);
  }
  
  public reopenGeneralForumTopic(
    options: ReopenGeneralForumTopicOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('reopenGeneralForumTopic', options);
  }
  
  public hideGeneralForumTopic(
    options: HideGeneralForumTopicOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('hideGeneralForumTopic', options);
  }
  
  public unhideGeneralForumTopic(
    options: UnhideGeneralForumTopicOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('unhideGeneralForumTopic', options);
  }
  
  public answerCallbackQuery(
    options: AnswerCallbackQueryOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('answerCallbackQuery', options);
  }
  
  public setMyCommands(options: SetMyCommandsOptions): Promise<boolean> {
    return this.fetch<boolean>('setMyCommands', options);
  }
  
  public deleteMyCommands(options: DeleteMyCommandsOptions): Promise<boolean> {
    return this.fetch<boolean>('deleteMyCommands', options);
  }
  
  public getMyCommands(options: GetMyCommandsOptions): Promise<BotCommand[]> {
    return this.fetch<BotCommand[]>('getMyCommands', options);
  }
  
  public setChatMenuButton(
    options: SetChatMenuButtonOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('setChatMenuButton', options);
  }
  
  public getChatMenuButton(
    options: GetChatMenuButtonOptions
  ): Promise<MenuButton> {
    return this.fetch<MenuButton>('getChatMenuButton', options);
  }
  
  public setMyDefaultAdministratorRights(
    options: SetMyDefaultAdministratorRightsOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('setMyDefaultAdministratorRights', options);
  }
  
  public getMyDefaultAdministratorRights(
    options: GetMyDefaultAdministratorRightsOptions
  ): Promise<ChatAdministratorRights> {
    return this.fetch<ChatAdministratorRights>(
      'getMyDefaultAdministratorRights',
      options
    );
  }
  
  public editMessageText(
    options: EditMessageTextOptions
  ): Promise<Message | boolean> {
    return this.fetch<Message | boolean>('editMessageText', options);
  }
  
  public editMessageCaption(
    options: EditMessageCaptionOptions
  ): Promise<Message | boolean> {
    return this.fetch<Message | boolean>('editMessageCaption', options);
  }
  
  public editMessageMedia(
    options: EditMessageMediaOptions
  ): Promise<Message | boolean> {
    return this.fetch<Message | boolean>('editMessageMedia', options);
  }
  
  public editMessageReplyMarkup(
    options: EditMessageReplyMarkupOptions
  ): Promise<Message | boolean> {
    return this.fetch<Message | boolean>('editMessageReplyMarkup', options);
  }
  
  public stopPoll(options: StopPollOptions): Promise<Poll> {
    return this.fetch<Poll>('stopPoll', options);
  }
  
  public deleteMessage(options: DeleteMessageOptions): Promise<boolean> {
    return this.fetch<boolean>('deleteMessage', options);
  }
  
  public sendSticker(options: SendStickerOptions | FormData): Promise<Message> {
    return this.fetch<Message>('sendSticker', options);
  }
  
  public getStickerSet(options: GetStickerSetOptions): Promise<StickerSet> {
    return this.fetch<StickerSet>('getStickerSet', options);
  }
  
  public getCustomEmojiStickers(
    options: GetCustomEmojiStickersOptions
  ): Promise<Sticker[]> {
    return this.fetch<Sticker[]>('getCustomEmojiStickers', options);
  }
  
  public uploadStickerFile(options: UploadStickerFileOptions | FormData): Promise<File> {
    return this.fetch<File>('uploadStickerFile', options);
  }
  
  public createNewStickerSet(
    options: CreateNewStickerSetOptions | FormData
  ): Promise<boolean> {
    return this.fetch<boolean>('createNewStickerSet', options);
  }
  
  public addStickerToSet(options: AddStickerToSetOptions | FormData): Promise<boolean> {
    return this.fetch<boolean>('addStickerToSet', options);
  }
  
  public setStickerPositionInSet(
    options: SetStickerPositionInSetOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('setStickerPositionInSet', options);
  }
  
  public deleteStickerFromSet(
    options: DeleteStickerFromSetOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('deleteStickerFromSet', options);
  }
  
  public setStickerSetThumb(
    options: SetStickerSetThumbOptions | FormData
  ): Promise<boolean> {
    return this.fetch<boolean>('setStickerSetThumb', options);
  }
  
  public answerInlineQuery(
    options: AnswerInlineQueryOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('answerInlineQuery', options);
  }
  
  public answerWebAppQuery(
    options: AnswerWebAppQueryOptions
  ): Promise<SentWebAppMessage> {
    return this.fetch<SentWebAppMessage>('answerWebAppQuery', options);
  }
  
  public sendInvoice(options: SendInvoiceOptions): Promise<Message> {
    return this.fetch<Message>('sendInvoice', options);
  }
  
  public createInvoiceLink(options: CreateInvoiceLinkOptions): Promise<string> {
    return this.fetch<string>('createInvoiceLink', options);
  }
  
  public answerShippingQuery(
    options: AnswerShippingQueryOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('answerShippingQuery', options);
  }
  
  public answerPreCheckoutQuery(
    options: AnswerPreCheckoutQueryOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('answerPreCheckoutQuery', options);
  }
  
  public setPassportDataErrors(
    options: SetPassportDataErrorsOptions
  ): Promise<boolean> {
    return this.fetch<boolean>('setPassportDataErrors', options);
  }
  
  public sendGame(options: SendGameOptions): Promise<Message> {
    return this.fetch<Message>('sendGame', options);
  }
  
  public setGameScore(
    options: SetGameScoreOptions
  ): Promise<Message | boolean> {
    return this.fetch<Message | boolean>('setGameScore', options);
  }
  
  public getGameHighScores(
    options: GetGameHighScoresOptions
  ): Promise<GameHighScore[]> {
    return this.fetch<GameHighScore[]>('getGameHighScores', options);
  }

  private async fetch<T>(
    method: string,
    body: Record<string, any> = {}
  ): Promise<T> {
    const url = API_URL + '/' + 'bot' + this.token + '/' + method;

    const res = await fetch(url, {
      method: 'POST',

      body: this.isFormData(body)
        ? body as FormData
        : JSON.stringify(snakelize(body)),

      headers: this.isFormData(body)
        ? body.getHeaders()
        : { 'Content-Type':  'application/json' }
    })
      .then((res) => res.json() as Promise<{ ok: boolean, result: T }>);

    if (!res.ok) {
      return Promise.reject(camelize(res));
    }

    return camelize(res.result as any) as T;
  }

  private isFormData (data: any): boolean {
    return data.toString().includes('FormData');
  }
}
