import { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';
import { InputMessageContent } from './input-message-content.interface';

/**
 * Represents a link to a sticker stored on the Telegram servers. By default, this
 * sticker will be sent by the user. Alternatively, you can use
 * input_message_content to send a message with the specified content instead of
 * the sticker.
 * Note: This will only work in Telegram versions released after 9 April, 2016 for
 * static stickers and after 06 July, 2019 for animated stickers. Older clients
 * will ignore them.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedsticker}
 */
export interface InlineQueryResultCachedSticker {
  /**
   * Type of the result, must be sticker
   */
  type: 'sticker';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier of the sticker
   */
  stickerFileId: string;

  /**
   * Inline keyboard attached to the message
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the sticker
   */
  inputMessageContent?: InputMessageContent;
}
