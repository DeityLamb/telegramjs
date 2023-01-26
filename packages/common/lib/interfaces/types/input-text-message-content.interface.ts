import { MessageEntity } from './message-entity.interface';

/**
 * Represents the content of a text message to be sent as the result of an inline
 * query.
 * @see {@link https://core.telegram.org/bots/api#inputtextmessagecontent}
 */
export interface InputTextMessageContent {
  /**
   * Text of the message to be sent, 1-4096 characters
   */
  messageText: string;

  /**
   * Mode for parsing entities in the message text. See formatting options for more
   * details.
   */
  parseMode?: string;

  /**
   * List of special entities that appear in message text, which can be specified
   * instead of parse_mode
   */
  entities?: MessageEntity;

  /**
   * Disables link previews for links in the sent message
   */
  disableWebPagePreview?: boolean;
}
