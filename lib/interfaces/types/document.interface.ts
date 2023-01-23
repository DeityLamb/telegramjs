import { PhotoSize } from './photo-size.interface';

/**
 * This object represents a general file (as opposed to photos, voice messages and
 * audio files).
 * @see {@link https://core.telegram.org/bots/api#document}
 */
export interface Document {
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
   * Document thumbnail as defined by sender
   */
  thumb?: PhotoSize;

  /**
   * Original filename as defined by sender
   */
  fileName?: string;

  /**
   * MIME type of the file as defined by sender
   */
  mimeType?: string;

  /**
   * File size in bytes. It can be bigger than 2^31 and some programming languages
   * may have difficulty/silent defects in interpreting it. But it has at most 52
   * significant bits, so a signed 64-bit integer or double-precision float type are
   * safe for storing this value.
   */
  fileSize?: number;
}
