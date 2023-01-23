import { Sticker } from './sticker.interface';
import { PhotoSize } from './photo-size.interface';

/**
 * This object represents a sticker set.
 * @see {@link https://core.telegram.org/bots/api#stickerset}
 */
export interface StickerSet {
  /**
   * Sticker set name
   */
  name: string;

  /**
   * Sticker set title
   */
  title: string;

  /**
   * Type of stickers in the set, currently one of "regular", "mask", "custom_emoji"
   */
  stickerType: string;

  /**
   * True, if the sticker set contains animated stickers
   */
  isAnimated: boolean;

  /**
   * True, if the sticker set contains video stickers
   */
  isVideo: boolean;

  /**
   * List of all set stickers
   */
  stickers: Sticker;

  /**
   * Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format
   */
  thumb?: PhotoSize;
}
