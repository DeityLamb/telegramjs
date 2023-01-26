import { InputFile } from '../types/input-file.interface';
import { MaskPosition } from '../types/mask-position.interface';

/**
 * Use this method to create a new sticker set owned by a user. The bot will be
 * able to edit the sticker set thus created. You must use exactly one of the
 * fields png_sticker, tgs_sticker, or webm_sticker. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#createnewstickerset}
 */
export interface CreateNewStickerSetOptions {
  /**
   * User identifier of created sticker set owner
   */
  userId: number;

  /**
   * Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals).
   * Can contain only English letters, digits and underscores. Must begin with a
   * letter, can't contain consecutive underscores and must end in
   * "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters.
   */
  name: string;

  /**
   * Sticker set title, 1-64 characters
   */
  title: string;

  /**
   * PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must
   * not exceed 512px, and either width or height must be exactly 512px. Pass a
   * file_id as a String to send a file that already exists on the Telegram servers,
   * pass an HTTP URL as a String for Telegram to get a file from the Internet, or
   * upload a new one using multipart/form-data. More information on Sending Files:
   * https://core.telegram.org/bots/api#sending-files
   */
  pngSticker?: 'up' | 'up';

  /**
   * TGS animation with the sticker, uploaded using multipart/form-data. See
   * https://core.telegram.org/stickers#animated-sticker-requirements for technical
   * requirements
   */
  tgsSticker?: InputFile;

  /**
   * WEBM video with the sticker, uploaded using multipart/form-data. See
   * https://core.telegram.org/stickers#video-sticker-requirements for technical
   * requirements
   */
  webmSticker?: InputFile;

  /**
   * Type of stickers in the set, pass "regular" or "mask". Custom emoji sticker sets
   * can't be created via the Bot API at the moment. By default, a regular sticker
   * set is created.
   */
  stickerType?: string;

  /**
   * One or more emoji corresponding to the sticker
   */
  emojis: string;

  /**
   * A JSON-serialized object for position where the mask should be placed on faces
   */
  maskPosition?: MaskPosition;
}
