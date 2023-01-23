/**
 * This object represents a file uploaded to Telegram Passport. Currently all
 * Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.
 * @see {@link https://core.telegram.org/bots/api#passportfile}
 */
export interface PassportFile {
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
   * File size in bytes
   */
  fileSize: number;

  /**
   * Unix time when the file was uploaded
   */
  fileDate: number;
}
