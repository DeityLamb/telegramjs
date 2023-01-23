/**
 * Use this method to get the number of members in a chat. Returns Int on success.
 * @see {@link https://core.telegram.org/bots/api#getchatmembercount}
 */
export interface GetChatMemberCountOptions {
  /**
   * Unique identifier for the target chat or username of the target supergroup or
   * channel (in the format @channelusername)
   */
  chatId: number | string;
}
