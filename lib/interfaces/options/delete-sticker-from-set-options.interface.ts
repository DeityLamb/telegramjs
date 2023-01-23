/**
 * Use this method to delete a sticker from a set created by the bot. Returns True
 * on success.
 * @see {@link https://core.telegram.org/bots/api#deletestickerfromset}
 */
export interface DeleteStickerFromSetOptions {
  /**
   * File identifier of the sticker
   */
  sticker: string;
}
