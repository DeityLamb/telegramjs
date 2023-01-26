/**
 * Use this method to forward messages of any kind. Service messages can't be
 * forwarded. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#forwardmessage}
 */
export interface ForwardMessageOptions {
  /**
   * Unique identifier for the target chat or username of the target channel (in the
   * format @channelusername)
   */
  chatId: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum
   * supergroups only
   */
  messageThreadId?: number;

  /**
   * Unique identifier for the chat where the original message was sent (or channel
   * username in the format @channelusername)
   */
  fromChatId: number | string;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disableNotification?: boolean;

  /**
   * Protects the contents of the forwarded message from forwarding and saving
   */
  protectContent?: boolean;

  /**
   * Message identifier in the chat specified in from_chat_id
   */
  messageId: number;
}
