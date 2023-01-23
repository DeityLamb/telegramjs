import { InputMedia } from '../types/input-media.interface';
import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';

/**
 * Use this method to edit animation, audio, document, photo, or video messages. If
 * a message is part of a message album, then it can be edited only to an audio for
 * audio albums, only to a document for document albums and to a photo or a video
 * otherwise. When an inline message is edited, a new file can't be uploaded; use a
 * previously uploaded file via its file_id or specify a URL. On success, if the
 * edited message is not an inline message, the edited Message is returned,
 * otherwise True is returned.
 * @see {@link https://core.telegram.org/bots/api#editmessagemedia}
 */
export interface EditMessageMediaOptions {
  /**
   * Required if inline_message_id is not specified. Unique identifier for the target
   * chat or username of the target channel (in the format @channelusername)
   */
  chatId?: number | string;

  /**
   * Required if inline_message_id is not specified. Identifier of the message to
   * edit
   */
  messageId?: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline
   * message
   */
  inlineMessageId?: string;

  /**
   * A JSON-serialized object for a new media content of the message
   */
  media: InputMedia;

  /**
   * A JSON-serialized object for a new inline keyboard.
   */
  replyMarkup?: InlineKeyboardMarkup;
}
