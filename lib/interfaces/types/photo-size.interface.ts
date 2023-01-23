/**
 * This object represents one size of a photo or a file / sticker thumbnail.
 * @see {@link https://core.telegram.org/bots/api#photosize}
 */
export interface PhotoSize {
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
   * Photo width
   */
  width: number;

  /**
   * Photo height
   */
  height: number;

  /**
   * File size in bytes
   */
  fileSize?: number;
}
