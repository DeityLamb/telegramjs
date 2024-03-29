/**
 * Use this method to set a new group sticker set for a supergroup. The bot must be
 * an administrator in the chat for this to work and must have the appropriate
 * administrator rights. Use the field can_set_sticker_set optionally returned in
 * getChat requests to check if the bot can use this method. Returns True on
 * success.
 * @see {@link https://core.telegram.org/bots/api#setchatstickerset}
 */
export interface SetChatStickerSetOptions {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in
   * the format @supergroupusername)
   */
  chatId: number | string;

  /**
   * Name of the sticker set to be set as the group sticker set
   */
  stickerSetName: string;
}
