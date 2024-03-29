import type FormData from 'form-data';
import type {
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
} from './options';
import type {
  BotCommand, Chat,
  ChatAdministratorRights, ChatInviteLink, ChatMember,
  File, ForumTopic, GameHighScore,
  MenuButton, Message, MessageId,
  Poll, SentWebAppMessage, Sticker,
  StickerSet, Update, User,
  UserProfilePhotos, WebhookInfo
} from './types';

/**
 * @see {@link https://core.telegram.org/bots/api}
 */
export interface ITelegramBotApi {
  /**
   * Use this method to receive incoming updates using long polling (wiki).
   * Returns an Array of Update objects
   * @see {@link https://core.telegram.org/bots/api#getupdates}
   */
  getUpdates(options: GetUpdatesOptions): Promise<Update[]>;

  /**
   * Use this method to specify a URL and receive incoming updates via an outgoing webhook.
   * 
   * Whenever there is an update for the bot,
   * we will send an HTTPS POST request to the specified URL,
   * containing a JSON-serialized Update.
   * 
   * In case of an unsuccessful request, we will give up after a reasonable amount of attempts.
   * Returns True on success.
   * 
   * If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token.
   * If specified, the request will contain a header "X-Telegram-Bot-Api-Secret-Token" with the secret token as content
   * @see {@link https://core.telegram.org/bots/api#setwebhook}
   */
  setWebhook(options: SetWebhookOptions): Promise<boolean>;

  /**
   * Use this method to remove webhook integration if you decide to switch back to getUpdates.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#deletewebhook}
   */
  deleteWebhook(options: DeleteWebhookOptions): Promise<boolean>;

  /**
   * Use this method to get current webhook status.
   * Requires no parameters.
   * On success, returns a WebhookInfo object.
   * If the bot is using getUpdates, will return an object with the url field empty
   * @see {@link https://core.telegram.org/bots/api#getwebhookinfo}
   */
  getWebhookInfo(): Promise<WebhookInfo>;

  /**
   * A simple method for testing your bot's authentication token.
   * Requires no parameters.
   * Returns basic information about the bot in form of a User object
   * @see {@link https://core.telegram.org/bots/api#getme}
   */
  getMe(): Promise<User>;

  /**
   * Use this method to log out from the cloud Bot API server before launching the bot locally.
   * 
   * You must log out the bot before running it locally,
   * otherwise there is no guarantee that the bot will receive updates.
   * 
   * After a successful call, you can immediately log in on a local server,
   * but will not be able to log in back to the cloud Bot API server for 10 minutes.
   * 
   * Returns True on success.
   * Requires no parameters
   * @see {@link https://core.telegram.org/bots/api#logout}
   */
  logOut(): Promise<boolean>;

  /**
   * Use this method to close the bot instance before moving it from one local server to another.
   * You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart.
   * The method will return error 429 in the first 10 minutes after the bot is launched.
   * Returns True on success.
   * Requires no parameters
   * @see {@link https://core.telegram.org/bots/api#close}
   */
  close(): Promise<boolean>;

  /**
   * Use this method to send text messages.
   * On success, the sent Message is returned
   * @see {@link https://core.telegram.org/bots/api#sendmessage}
   */
  sendMessage(options: SendMessageOptions): Promise<Message>;

  /**
   * Use this method to forward messages of any kind.
   * Service messages can't be forwarded.
   * On success, the sent Message is returned
   * @see {@link https://core.telegram.org/bots/api#forwardmessage}
   */
  forwardMessage(options: ForwardMessageOptions): Promise<Message>;

  /**
   * Use this method to copy messages of any kind.
   * Service messages and invoice messages can't be copied.
   * A quiz poll can be copied only if the value of the field correct_option_id is known to the bot.
   * The method is analogous to the method forwardMessage,
   * but the copied message doesn't have a link to the original message.
   * Returns the MessageId of the sent message on success
   * @see {@link https://core.telegram.org/bots/api#copymessage}
   */
  copyMessage(options: CopyMessageOptions): Promise<MessageId>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * Use this method to send photos.
   * On success, the sent Message is returned
   * @see {@link https://core.telegram.org/bots/api#sendphoto}
   */
  sendPhoto(options: SendPhotoOptions | FormData): Promise<Message>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * Use this method to send audio files, if you want Telegram clients to display them in the music player.
   * Your audio must be in the MP3 or M4A format.
   * On success, the sent Message is returned.
   * Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
   * For sending voice messages, use the sendVoice method instead
   * @see {@link https://core.telegram.org/bots/api#sendaudio}
   */
  sendAudio(options: SendAudioOptions | FormData): Promise<Message>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * Use this method to send general files.
   * On success, the sent Message is returned.
   * Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future
   * @see {@link https://core.telegram.org/bots/api#senddocument}
   */
  sendDocument(options: SendDocumentOptions | FormData): Promise<Message>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * Use this method to send video files,
   * Telegram clients support MPEG4 videos (other formats may be sent as Document).
   * 
   * On success, the sent Message is returned.
   * Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future
   * @see {@link https://core.telegram.org/bots/api#sendvideo}
   */
  sendVideo(options: SendVideoOptions | FormData): Promise<Message>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * Use this method to send animation files (GIF or H.
   * 264/MPEG-4 AVC video without sound).
   * On success, the sent Message is returned.
   * Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future
   * @see {@link https://core.telegram.org/bots/api#sendanimation}
   */
  sendAnimation(options: SendAnimationOptions | FormData): Promise<Message>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message.
   * For this to work, your audio must be in an.
   * OGG file encoded with OPUS (other formats may be sent as Audio or Document).
   * On success, the sent Message is returned.
   * Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future
   * @see {@link https://core.telegram.org/bots/api#sendvoice}
   */
  sendVoice(options: SendVoiceOptions | FormData): Promise<Message>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * As of [v4](https://telegram.org/blog/video-messages-and-telescope).
   * 0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long.
   * Use this method to send video messages.
   * On success, the sent Message is returned
   * @see {@link https://core.telegram.org/bots/api#sendvideonote}
   */
  sendVideoNote(options: SendVideoNoteOptions | FormData): Promise<Message>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * Use this method to send a group of photos, videos, documents or audios as an album.
   * Documents and audio files can be only grouped in an album with messages of the same type.
   * On success, an array of Messages that were sent is returned
   * @see {@link https://core.telegram.org/bots/api#sendmediagroup}
   */
  sendMediaGroup(options: SendMediaGroupOptions | FormData): Promise<Message>;

  /**
   * Use this method to send point on the map.
   * On success, the sent Message is returned
   * @see {@link https://core.telegram.org/bots/api#sendlocation}
   */
  sendLocation(options: SendLocationOptions): Promise<Message>;

  /**
   * Use this method to edit live location messages.
   * A location can be edited until its live_period expires or editing
   * is explicitly disabled by a call to stopMessageLiveLocation.
   * 
   * On success, if the edited message is not an inline message,
   * the edited Message is returned, otherwise True is returned
   * @see {@link https://core.telegram.org/bots/api#editmessagelivelocation}
   */
  editMessageLiveLocation(options: EditMessageLiveLocationOptions): Promise<Message | boolean>;

  /**
   * Use this method to stop updating a live location message before live_period expires.
   * 
   * On success, if the message is not an inline message,
   * the edited Message is returned, otherwise True is returned
   * @see {@link https://core.telegram.org/bots/api#stopmessagelivelocation}
   */
  stopMessageLiveLocation(options: StopMessageLiveLocationOptions): Promise<Message | boolean>;

  /**
   * Use this method to send information about a venue.
   * On success, the sent Message is returned
   * @see {@link https://core.telegram.org/bots/api#sendvenue}
   */
  sendVenue(options: SendVenueOptions): Promise<Message>;

  /**
   * Use this method to send phone contacts.
   * On success, the sent Message is returned
   * @see {@link https://core.telegram.org/bots/api#sendcontact}
   */
  sendContact(options: SendContactOptions): Promise<Message>;

  /**
   * Use this method to send a native poll.
   * On success, the sent Message is returned
   * @see {@link https://core.telegram.org/bots/api#sendpoll}
   */
  sendPoll(options: SendPollOptions): Promise<Message>;

  /**
   * Use this method to send an animated emoji that will display a random value.
   * On success, the sent Message is returned
   * @see {@link https://core.telegram.org/bots/api#senddice}
   */
  sendDice(options: SendDiceOptions): Promise<Message>;

  /**
   * Use this method when you need to tell the user that something is happening on the bot's side.
   * 
   * The status is set for 5 seconds or less
   * (when a message arrives from your bot, Telegram clients clear its typing status).
   * 
   * Returns True on success.
   * 
   * We only recommend using this method when a response
   * from the bot will take a noticeable amount of time to arrive
   * @see {@link https://core.telegram.org/bots/api#sendchataction}
   */
  sendChatAction(options: SendChatActionOptions): Promise<boolean>;

  /**
   * Use this method to get a list of profile pictures for a user.
   * Returns a UserProfilePhotos object
   * @see {@link https://core.telegram.org/bots/api#getuserprofilephotos}
   */
  getUserProfilePhotos(options: GetUserProfilePhotosOptions): Promise<UserProfilePhotos>;

  /**
   * Use this method to get basic information about a file and prepare it for downloading.
   * For the moment, bots can download files of up to 20MB in size.
   * 
   * On success, a File object is returned.
   * 
   * The file can then be downloaded via the link https://api.telegram.org/file/bot<token>;/<file_path>;,
   * where <file_path>; is taken from the response.
   * 
   * It is guaranteed that the link will be valid for at least 1 hour.
   * When the link expires, a new one can be requested by calling getFile again.
   * 
   * Note: This function may not preserve the original file name and MIME type.
   * You should save the file's MIME type and name (if available) when the File object is received
   * @see {@link https://core.telegram.org/bots/api#getfile}
   */
  getFile(options: GetFileOptions): Promise<File>;

  /**
   * Use this method to ban a user in a group, a supergroup or a channel.
   * 
   * In the case of supergroups and channels,the user will not be able to return to
   * the chat on their own using invite links, etc., unless unbanned first.
   * 
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#banchatmember}
   */
  banChatMember(options: BanChatMemberOptions): Promise<boolean>;

  /**
   * Use this method to unban a previously banned user in a supergroup or channel.
   * The user will not return to the group or channel automatically, but will be able to join via link, etc.
   * The bot must be an administrator for this to work.
   * By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it.
   * So if the user is a member of the chat they will also be removed from the chat.
   * If you don't want this, use the parameter only_if_banned.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#unbanchatmember}
   */
  unbanChatMember(options: UnbanChatMemberOptions): Promise<boolean>;

  /**
   * Use this method to restrict a user in a supergroup.
   * The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights.
   * Pass True for all permissions to lift restrictions from a user.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#restrictchatmember}
   */
  restrictChatMember(options: RestrictChatMemberOptions): Promise<boolean>;

  /**
   * Use this method to promote or demote a user in a supergroup or a channel.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Pass False for all boolean parameters to demote a user.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#promotechatmember}
   */
  promoteChatMember(options: PromoteChatMemberOptions): Promise<boolean>;

  /**
   * Use this method to set a custom title for an administrator in a supergroup promoted by the bot.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#setchatadministratorcustomtitle}
   */
  setChatAdministratorCustomTitle(options: SetChatAdministratorCustomTitleOptions): Promise<boolean>;

  /**
   * Use this method to ban a channel chat in a supergroup or a channel.
   * 
   * Until the chat is unbanned, the owner of the banned chat
   * won't be able to send messages on behalf of any of their channels.
   * 
   * The bot must be an administrator in the supergroup or channel for this
   * to work and must have the appropriate administrator rights.
   * 
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#banchatsenderchat}
   */
  banChatSenderChat(options: BanChatSenderChatOptions): Promise<boolean>;

  /**
   * Use this method to unban a previously banned channel chat in a supergroup or channel.
   * The bot must be an administrator for this to work and must have the appropriate administrator rights.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#unbanchatsenderchat}
   */
  unbanChatSenderChat(options: UnbanChatSenderChatOptions): Promise<boolean>;

  /**
   * Use this method to set default chat permissions for all members.
   * 
   * The bot must be an administrator in the group or a supergroup
   * for this to work and must have the can_restrict_members administrator rights.
   * 
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#setchatpermissions}
   */
  setChatPermissions(options: SetChatPermissionsOptions): Promise<boolean>;

  /**
   * Use this method to generate a new primary invite link for a chat;
   * any previously generated primary link is revoked.
   * 
   * The bot must be an administrator in the chat for this to work
   * and must have the appropriate administrator rights.
   * 
   * Returns the new invite link as String on success
   * @see {@link https://core.telegram.org/bots/api#exportchatinvitelink}
   */
  exportChatInviteLink(options: ExportChatInviteLinkOptions): Promise<string>;

  /**
   * Use this method to create an additional invite link for a chat.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * The link can be revoked using the method revokeChatInviteLink.
   * Returns the new invite link as ChatInviteLink object
   * @see {@link https://core.telegram.org/bots/api#createchatinvitelink}
   */
  createChatInviteLink(options: CreateChatInviteLinkOptions): Promise<ChatInviteLink>;

  /**
   * Use this method to edit a non-primary invite link created by the bot.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Returns the edited invite link as a ChatInviteLink object
   * @see {@link https://core.telegram.org/bots/api#editchatinvitelink}
   */
  editChatInviteLink(options: EditChatInviteLinkOptions): Promise<ChatInviteLink>;

  /**
   * Use this method to revoke an invite link created by the bot.
   * If the primary link is revoked, a new link is automatically generated.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Returns the revoked invite link as ChatInviteLink object
   * @see {@link https://core.telegram.org/bots/api#revokechatinvitelink}
   */
  revokeChatInviteLink(options: RevokeChatInviteLinkOptions): Promise<ChatInviteLink>;

  /**
   * Use this method to approve a chat join request.
   * The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#approvechatjoinrequest}
   */
  approveChatJoinRequest(options: ApproveChatJoinRequestOptions): Promise<boolean>;

  /**
   * Use this method to decline a chat join request.
   * The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#declinechatjoinrequest}
   */
  declineChatJoinRequest(options: DeclineChatJoinRequestOptions): Promise<boolean>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * Use this method to set a new profile photo for the chat.
   * Photos can't be changed for private chats.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#setchatphoto}
   */
  setChatPhoto(options: SetChatPhotoOptions | FormData): Promise<boolean>;

  /**
   * Use this method to delete a chat photo.
   * Photos can't be changed for private chats.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#deletechatphoto}
   */
  deleteChatPhoto(options: DeleteChatPhotoOptions): Promise<boolean>;

  /**
   * Use this method to change the title of a chat.
   * Titles can't be changed for private chats.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#setchattitle}
   */
  setChatTitle(options: SetChatTitleOptions): Promise<boolean>;

  /**
   * Use this method to change the description of a group, a supergroup or a channel.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#setchatdescription}
   */
  setChatDescription(options: SetChatDescriptionOptions): Promise<boolean>;

  /**
   * Use this method to add a message to the list of pinned messages in a chat.
   * 
   * If the chat is not a private chat, the bot must be an administrator in the chat
   * for this to work and must have the 'can_pin_messages' administrator right
   * in a supergroup or 'can_edit_messages' administrator right in a channel.
   * 
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#pinchatmessage}
   */
  pinChatMessage(options: PinChatMessageOptions): Promise<boolean>;

  /**
   * Use this method to remove a message from the list of pinned messages in a chat.
   * 
   * If the chat is not a private chat, the bot must be an administrator in
   * the chat for this to work and must have the 'can_pin_messages' administrator right
   * in a supergroup or 'can_edit_messages' administrator right in a channel.
   * 
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#unpinchatmessage}
   */
  unpinChatMessage(options: UnpinChatMessageOptions): Promise<boolean>;

  /**
   * Use this method to clear the list of pinned messages in a chat.
   * 
   * If the chat is not a private chat, the bot must be an administrator in
   * the chat for this to work and must have the 'can_pin_messages' administrator right
   * in a supergroup or 'can_edit_messages' administrator right in a channel.
   * 
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#unpinallchatmessages}
   */
  unpinAllChatMessages(options: UnpinAllChatMessagesOptions): Promise<boolean>;

  /**
   * Use this method for your bot to leave a group, supergroup or channel.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#leavechat}
   */
  leaveChat(options: LeaveChatOptions): Promise<boolean>;

  /**
   * Use this method to get up to date information about the chat
   * (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.).
   * Returns a Chat object on success
   * @see {@link https://core.telegram.org/bots/api#getchat}
   */
  getChat(options: GetChatOptions): Promise<Chat>;

  /**
   * Use this method to get a list of administrators in a chat, which aren't bots.
   * Returns an Array of ChatMember objects
   * @see {@link https://core.telegram.org/bots/api#getchatadministrators}
   */
  getChatAdministrators(options: GetChatAdministratorsOptions): Promise<ChatMember[]>;

  /**
   * Use this method to get the number of members in a chat.
   * Returns Int on success
   * @see {@link https://core.telegram.org/bots/api#getchatmembercount}
   */
  getChatMemberCount(options: GetChatMemberCountOptions): Promise<number>;

  /**
   * Use this method to get information about a member of a chat.
   * The method is guaranteed to work for other users, only if the bot is an administrator in the chat.
   * Returns a ChatMember object on success
   * @see {@link https://core.telegram.org/bots/api#getchatmember}
   */
  getChatMember(options: GetChatMemberOptions): Promise<ChatMember>;

  /**
   * Use this method to set a new group sticker set for a supergroup.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#setchatstickerset}
   */
  setChatStickerSet(options: SetChatStickerSetOptions): Promise<boolean>;

  /**
   * Use this method to delete a group sticker set from a supergroup.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#deletechatstickerset}
   */
  deleteChatStickerSet(options: DeleteChatStickerSetOptions): Promise<boolean>;

  /**
   * Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user.
   * Requires no parameters.
   * Returns an Array of Sticker objects
   * @see {@link https://core.telegram.org/bots/api#getforumtopiciconstickers}
   */
  getForumTopicIconStickers(): Promise<Sticker[]>;

  /**
   * Use this method to create a topic in a forum supergroup chat.
   * The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights.
   * Returns information about the created topic as a ForumTopic object
   * @see {@link https://core.telegram.org/bots/api#createforumtopic}
   */
  createForumTopic(options: CreateForumTopicOptions): Promise<ForumTopic>;

  /**
   * Use this method to edit name and icon of a topic in a forum supergroup chat.
   * 
   * The bot must be an administrator in the chat for this
   * to work and must have can_manage_topics administrator rights, unless it is the creator of the topic.
   * 
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#editforumtopic}
   */
  editForumTopic(options: EditForumTopicOptions): Promise<boolean>;

  /**
   * Use this method to close an open topic in a forum supergroup chat.
   * 
   * The bot must be an administrator in the chat for this to work and must have
   * the can_manage_topics administrator rights, unless it is the creator of the topic.
   * 
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#closeforumtopic}
   */
  closeForumTopic(options: CloseForumTopicOptions): Promise<boolean>;

  /**
   * Use this method to reopen a closed topic in a forum supergroup chat.
   * 
   * The bot must be an administrator in the chat for this to work and must have
   * the can_manage_topics administrator rights, unless it is the creator of the topic.
   * 
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#reopenforumtopic}
   */
  reopenForumTopic(options: ReopenForumTopicOptions): Promise<boolean>;

  /**
   * Use this method to delete a forum topic along with all its messages in a forum supergroup chat.
   * The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#deleteforumtopic}
   */
  deleteForumTopic(options: DeleteForumTopicOptions): Promise<boolean>;

  /**
   * Use this method to clear the list of pinned messages in a forum topic.
   * 
   * The bot must be an administrator in the chat for this to work and must have
   * the can_pin_messages administrator right in the supergroup.
   * 
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#unpinallforumtopicmessages}
   */
  unpinAllForumTopicMessages(options: UnpinAllForumTopicMessagesOptions): Promise<boolean>;

  /**
   * Use this method to edit the name of the 'General' topic in a forum supergroup chat.
   * 
   * The bot must be an administrator in the chat for this to work and must have
   * the can_manage_topics administrator rights.
   * 
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#editgeneralforumtopic}
   */
  editGeneralForumTopic(options: EditGeneralForumTopicOptions): Promise<boolean>;

  /**
   * Use this method to close an open 'General' topic in a forum supergroup chat.
   * 
   * The bot must be an administrator in the chat for this to work and must have
   * the can_manage_topics administrator rights.
   * 
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#closegeneralforumtopic}
   */
  closeGeneralForumTopic(options: CloseGeneralForumTopicOptions): Promise<boolean>;

  /**
   * Use this method to reopen a closed 'General' topic in a forum supergroup chat.
   * 
   * The bot must be an administrator in the chat for this to work and must have
   * the can_manage_topics administrator rights.
   * 
   * The topic will be automatically unhidden if it was hidden.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#reopengeneralforumtopic}
   */
  reopenGeneralForumTopic(options: ReopenGeneralForumTopicOptions): Promise<boolean>;

  /**
   * Use this method to hide the 'General' topic in a forum supergroup chat.
   * 
   * The bot must be an administrator in the chat for this to work and must
   * have the can_manage_topics administrator rights.
   * 
   * The topic will be automatically closed if it was open.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#hidegeneralforumtopic}
   */
  hideGeneralForumTopic(options: HideGeneralForumTopicOptions): Promise<boolean>;

  /**
   * Use this method to unhide the 'General' topic in a forum supergroup chat.
   * 
   * The bot must be an administrator in the chat for this to work and must have
   * the can_manage_topics administrator rights.
   * 
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#unhidegeneralforumtopic}
   */
  unhideGeneralForumTopic(options: UnhideGeneralForumTopicOptions): Promise<boolean>;

  /**
   * Use this method to send answers to callback queries sent from inline keyboards.
   * The answer will be displayed to the user as a notification at the top of the chat screen or as an alert.
   * On success, True is returned
   * @see {@link https://core.telegram.org/bots/api#answercallbackquery}
   */
  answerCallbackQuery(options: AnswerCallbackQueryOptions): Promise<boolean>;

  /**
   * Use this method to change the list of the bot's commands.
   * See this manual for more details about bot commands.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#setmycommands}
   */
  setMyCommands(options: SetMyCommandsOptions): Promise<boolean>;

  /**
   * Use this method to delete the list of the bot's commands for the given scope and user language.
   * After deletion, higher level commands will be shown to affected users.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#deletemycommands}
   */
  deleteMyCommands(options: DeleteMyCommandsOptions): Promise<boolean>;

  /**
   * Use this method to get the current list of the bot's commands for the given scope and user language.
   * Returns an Array of BotCommand objects.
   * If commands aren't set, an empty list is returned
   * @see {@link https://core.telegram.org/bots/api#getmycommands}
   */
  getMyCommands(options: GetMyCommandsOptions): Promise<BotCommand[]>;

  /**
   * Use this method to change the bot's menu button in a private chat, or the default menu button.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#setchatmenubutton}
   */
  setChatMenuButton(options: SetChatMenuButtonOptions): Promise<boolean>;

  /**
   * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button.
   * Returns MenuButton on success
   * @see {@link https://core.telegram.org/bots/api#getchatmenubutton}
   */
  getChatMenuButton(options: GetChatMenuButtonOptions): Promise<MenuButton>;

  /**
   * Use this method to change the default administrator rights requested by
   * the bot when it's added as an administrator to groups or channels.
   * 
   * These rights will be suggested to users, but they are are free to modify the list before adding the bot.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#setmydefaultadministratorrights}
   */
  setMyDefaultAdministratorRights(options: SetMyDefaultAdministratorRightsOptions): Promise<boolean>;

  /**
   * Use this method to get the current default administrator rights of the bot.
   * Returns ChatAdministratorRights on success
   * @see {@link https://core.telegram.org/bots/api#getmydefaultadministratorrights}
   */
  getMyDefaultAdministratorRights(options: GetMyDefaultAdministratorRightsOptions): Promise<ChatAdministratorRights>;

  /**
   * Use this method to edit text and game messages.
   * On success, if the edited message is not an inline message, the edited Message is returned,
   * otherwise True is returned
   * @see {@link https://core.telegram.org/bots/api#editmessagetext}
   */
  editMessageText(options: EditMessageTextOptions): Promise<Message | boolean>;

  /**
   * Use this method to edit captions of messages.
   * On success, if the edited message is not an inline message, the edited Message is returned,
   * otherwise True is returned
   * @see {@link https://core.telegram.org/bots/api#editmessagecaption}
   */
  editMessageCaption(options: EditMessageCaptionOptions): Promise<Message | boolean>;

  /**
   * Use this method to edit animation, audio, document, photo, or video messages.
   * 
   * If a message is part of a message album, then it can be edited only to an audio for audio albums,
   * only to a document for document albums and to a photo or a video otherwise.
   * 
   * When an inline message is edited, a new file can't be uploaded;
   * use a previously uploaded file via its file_id or specify a URL.
   * 
   * On success, if the edited message is not an inline message,
   * the edited Message is returned, otherwise True is returned
   * @see {@link https://core.telegram.org/bots/api#editmessagemedia}
   */
  editMessageMedia(options: EditMessageMediaOptions): Promise<Message | boolean>;

  /**
   * Use this method to edit only the reply markup of messages.
   * 
   * On success, if the edited message is not an inline message,
   * the edited Message is returned, otherwise True is returned
   * @see {@link https://core.telegram.org/bots/api#editmessagereplymarkup}
   */
  editMessageReplyMarkup(options: EditMessageReplyMarkupOptions): Promise<Message | boolean>;

  /**
   * Use this method to stop a poll which was sent by the bot.
   * On success, the stopped Poll is returned
   * @see {@link https://core.telegram.org/bots/api#stoppoll}
   */
  stopPoll(options: StopPollOptions): Promise<Poll>;

  /**
   * Use this method to delete a message, including service messages, with the following limitations:
   * - A message can only be deleted if it was sent less than 48 hours ago.
   * - Service messages about a supergroup, channel, or forum topic creation can't be deleted.
   * - A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
   * - Bots can delete outgoing messages in private chats, groups, and supergroups.
   * - Bots can delete incoming messages in private chats.
   * - Bots granted can_post_messages permissions can delete outgoing messages in channels.
   * - If the bot is an administrator of a group, it can delete any message there.
   * - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#deletemessage}
   */
  deleteMessage(options: DeleteMessageOptions): Promise<boolean>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * Use this method to send static.
   * WEBP, animated.
   * TGS, or video.
   * WEBM stickers.
   * On success, the sent Message is returned
   * @see {@link https://core.telegram.org/bots/api#sendsticker}
   */
  sendSticker(options: SendStickerOptions | FormData): Promise<Message>;

  /**
   * Use this method to get a sticker set.
   * On success, a StickerSet object is returned
   * @see {@link https://core.telegram.org/bots/api#getstickerset}
   */
  getStickerSet(options: GetStickerSetOptions): Promise<StickerSet>;

  /**
   * Use this method to get information about custom emoji stickers by their identifiers.
   * Returns an Array of Sticker objects
   * @see {@link https://core.telegram.org/bots/api#getcustomemojistickers}
   */
  getCustomEmojiStickers(options: GetCustomEmojiStickersOptions): Promise<Sticker[]>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * Use this method to upload a.
   * PNG file with a sticker for later use in createNewStickerSet and addStickerToSet methods
   * (can be used multiple times).
   * 
   * Returns the uploaded File on success
   * @see {@link https://core.telegram.org/bots/api#uploadstickerfile}
   */
  uploadStickerFile(options: UploadStickerFileOptions | FormData): Promise<File>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * Use this method to create a new sticker set owned by a user.
   * The bot will be able to edit the sticker set thus created.
   * You must use exactly one of the fields png_sticker, tgs_sticker, or webm_sticker.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#createnewstickerset}
   */
  createNewStickerSet(options: CreateNewStickerSetOptions | FormData): Promise<boolean>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * Use this method to add a new sticker to a set created by the bot.
   * You must use exactly one of the fields png_sticker, tgs_sticker, or webm_sticker.
   * Animated stickers can be added to animated sticker sets and only to them.
   * Animated sticker sets can have up to 50 stickers.
   * Static sticker sets can have up to 120 stickers.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#addstickertoset}
   */
  addStickerToSet(options: AddStickerToSetOptions | FormData): Promise<boolean>;

  /**
   * Use this method to move a sticker in a set created by the bot to a specific position.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#setstickerpositioninset}
   */
  setStickerPositionInSet(options: SetStickerPositionInSetOptions): Promise<boolean>;

  /**
   * Use this method to delete a sticker from a set created by the bot.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#deletestickerfromset}
   */
  deleteStickerFromSet(options: DeleteStickerFromSetOptions): Promise<boolean>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * Use this method to set the thumbnail of a sticker set.
   * Animated thumbnails can be set for animated sticker sets only.
   * Video thumbnails can be set only for video sticker sets only.
   * Returns True on success
   * @see {@link https://core.telegram.org/bots/api#setstickersetthumb}
   */
  setStickerSetThumb(options: SetStickerSetThumbOptions | FormData): Promise<boolean>;

  /**
   * Use this method to send answers to an inline query.
   * On success, True is returned.
   * No more than 50 results per query are allowed
   * @see {@link https://core.telegram.org/bots/api#answerinlinequery}
   */
  answerInlineQuery(options: AnswerInlineQueryOptions): Promise<boolean>;

  /**
   * Use this method to set the result of an interaction with a Web App and send
   * a corresponding message on behalf of the user to the chat from which the query originated.
   * 
   * On success, a SentWebAppMessage object is returned
   * @see {@link https://core.telegram.org/bots/api#answerwebappquery}
   */
  answerWebAppQuery(options: AnswerWebAppQueryOptions): Promise<SentWebAppMessage>;

  /**
   * Use this method to send invoices.
   * On success, the sent Message is returned
   * @see {@link https://core.telegram.org/bots/api#sendinvoice}
   */
  sendInvoice(options: SendInvoiceOptions): Promise<Message>;

  /**
   * Use this method to create a link for an invoice.
   * Returns the created invoice link as String on success
   * @see {@link https://core.telegram.org/bots/api#createinvoicelink}
   */
  createInvoiceLink(options: CreateInvoiceLinkOptions): Promise<string>;

  /**
   * If you sent an invoice requesting a shipping address andthe parameter is_flexible
   * was specified, the Bot API will send an Update with a shipping_query field to the bot.
   * 
   * Use this method to reply to shipping queries.
   * On success, True is returned
   * @see {@link https://core.telegram.org/bots/api#answershippingquery}
   */
  answerShippingQuery(options: AnswerShippingQueryOptions): Promise<boolean>;

  /**
   * Once the user has confirmed their payment and shipping details, the Bot API sends
   * the final confirmation in the form of an Update with the field pre_checkout_query.
   * 
   * Use this method to respond to such pre-checkout queries.
   * On success, True is returned.
   * Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent
   * @see {@link https://core.telegram.org/bots/api#answerprecheckoutquery}
   */
  answerPreCheckoutQuery(options: AnswerPreCheckoutQueryOptions): Promise<boolean>;

  /**
   * Informs a user that some of the Telegram Passport elements they provided contains errors.
   * 
   * The user will not be able to re-submit their Passport to you until the errors are fixed
   * (the contents of the field for which you returned the error must change).
   * 
   * Returns True on success.
   * Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason.
   * For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc.
   * Supply some details in the error message to make sure the user knows how to correct the issues
   * @see {@link https://core.telegram.org/bots/api#setpassportdataerrors}
   */
  setPassportDataErrors(options: SetPassportDataErrorsOptions): Promise<boolean>;

  /**
   * Use this method to send a game.
   * On success, the sent Message is returned
   * @see {@link https://core.telegram.org/bots/api#sendgame}
   */
  sendGame(options: SendGameOptions): Promise<Message>;

  /**
   * Use this method to set the score of the specified user in a game message.
   * On success, if the message is not an inline message, the Message is returned, otherwise True is returned.
   * Returns an error, if the new score is not greater than the user's current score in the chat and force is False
   * @see {@link https://core.telegram.org/bots/api#setgamescore}
   */
  setGameScore(options: SetGameScoreOptions): Promise<Message | boolean>;

  /**
   * if you pass FormData as parameter then all fields in snake_case
   * 
   * Use this method to get data for high score tables.
   * Will return the score of the specified user and several of their neighbors in a game.
   * Returns an Array of GameHighScore objects
   * @see {@link https://core.telegram.org/bots/api#getgamehighscores}
   */
  getGameHighScores(options: GetGameHighScoresOptions): Promise<GameHighScore[]>;
}
