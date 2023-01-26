import { InputMessageContent } from './input-message-content.interface';
import { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';

/**
 * Represents a link to an article or web page.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultarticle}
 */
export interface InlineQueryResultArticle {
  /**
   * Type of the result, must be article
   */
  type: 'article';

  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;

  /**
   * Title of the result
   */
  title: string;

  /**
   * Content of the message to be sent
   */
  inputMessageContent: InputMessageContent;

  /**
   * Inline keyboard attached to the message
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * URL of the result
   */
  url?: string;

  /**
   * Pass True if you don't want the URL to be shown in the message
   */
  hideUrl?: boolean;

  /**
   * Short description of the result
   */
  description?: string;

  /**
   * Url of the thumbnail for the result
   */
  thumbUrl?: string;

  /**
   * Thumbnail width
   */
  thumbWidth?: number;

  /**
   * Thumbnail height
   */
  thumbHeight?: number;
}
