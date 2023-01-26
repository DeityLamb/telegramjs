/**
 * Use this method to get information about custom emoji stickers by their
 * identifiers. Returns an Array of Sticker objects.
 * @see {@link https://core.telegram.org/bots/api#getcustomemojistickers}
 */
export interface GetCustomEmojiStickersOptions {
  /**
   * List of custom emoji identifiers. At most 200 custom emoji identifiers can be
   * specified.
   */
  customEmojiIds: string;
}
