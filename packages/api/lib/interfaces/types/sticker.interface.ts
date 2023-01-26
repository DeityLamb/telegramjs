import { PhotoSize } from './photo-size.interface';
import { File } from './file.interface';
import { MaskPosition } from './mask-position.interface';

/**
 * This object represents a sticker.
 * @see {@link https://core.telegram.org/bots/api#sticker}
 */
export interface Sticker {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  fileId: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and
   * for different bots. Can't be used to download or reuse the file.
   */
  fileUniqueId: string;

  /**
   * Type of the sticker, currently one of "regular", "mask", "custom_emoji". The
   * type of the sticker is independent from its format, which is determined by the
   * fields is_animated and is_video.
   */
  type: string;

  /**
   * Sticker width
   */
  width: number;

  /**
   * Sticker height
   */
  height: number;

  /**
   * True, if the sticker is animated
   */
  isAnimated: boolean;

  /**
   * True, if the sticker is a video sticker
   */
  isVideo: boolean;

  /**
   * Sticker thumbnail in the .WEBP or .JPG format
   */
  thumb?: PhotoSize;

  /**
   * Emoji associated with the sticker
   */
  emoji?: string;

  /**
   * Name of the sticker set to which the sticker belongs
   */
  setName?: string;

  /**
   * For premium regular stickers, premium animation for the sticker
   */
  premiumAnimation?: File;

  /**
   * For mask stickers, the position where the mask should be placed
   */
  maskPosition?: MaskPosition;

  /**
   * For custom emoji stickers, unique identifier of the custom emoji
   */
  customEmojiId?: string;

  /**
   * File size in bytes
   */
  fileSize?: number;
}
