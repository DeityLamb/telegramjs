import { InputFile } from '../types/input-file.interface';
import { MaskPosition } from '../types/mask-position.interface';

/**
 * Use this method to add a new sticker to a set created by the bot. You must use
 * exactly one of the fields png_sticker, tgs_sticker, or webm_sticker. Animated
 * stickers can be added to animated sticker sets and only to them. Animated
 * sticker sets can have up to 50 stickers. Static sticker sets can have up to 120
 * stickers. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#addstickertoset}
 */
export interface AddStickerToSetOptions {
  /**
   * User identifier of sticker set owner
   */
  userId: number;

  /**
   * Sticker set name
   */
  name: string;

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
   * One or more emoji corresponding to the sticker
   */
  emojis: string;

  /**
   * A JSON-serialized object for position where the mask should be placed on faces
   */
  maskPosition?: MaskPosition;
}
