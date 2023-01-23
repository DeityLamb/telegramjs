import { InputFile } from '../types/input-file.interface';

/**
 * Use this method to upload a .PNG file with a sticker for later use in
 * createNewStickerSet and addStickerToSet methods (can be used multiple times).
 * Returns the uploaded File on success.
 * @see {@link https://core.telegram.org/bots/api#uploadstickerfile}
 */
export interface UploadStickerFileOptions {
  /**
   * User identifier of sticker file owner
   */
  userId: number;

  /**
   * PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must
   * not exceed 512px, and either width or height must be exactly 512px. More
   * information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  pngSticker: InputFile;
}
