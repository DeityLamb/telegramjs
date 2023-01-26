/**
 * Describes an inline message sent by a Web App on behalf of a user.
 * @see {@link https://core.telegram.org/bots/api#sentwebappmessage}
 */
export interface SentWebAppMessage {
  /**
   * Identifier of the sent inline message. Available only if there is an inline
   * keyboard attached to the message.
   */
  inlineMessageId?: string;
}
