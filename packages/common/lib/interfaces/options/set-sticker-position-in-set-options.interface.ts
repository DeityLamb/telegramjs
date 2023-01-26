/**
 * Use this method to move a sticker in a set created by the bot to a specific
 * position. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setstickerpositioninset}
 */
export interface SetStickerPositionInSetOptions {
  /**
   * File identifier of the sticker
   */
  sticker: string;

  /**
   * New sticker position in the set, zero-based
   */
  position: number;
}
