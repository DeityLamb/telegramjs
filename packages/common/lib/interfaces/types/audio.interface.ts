import { PhotoSize } from './photo-size.interface';

/**
 * This object represents an audio file to be treated as music by the Telegram
 * clients.
 * @see {@link https://core.telegram.org/bots/api#audio}
 */
export interface Audio {
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
   * Duration of the audio in seconds as defined by sender
   */
  duration: number;

  /**
   * Performer of the audio as defined by sender or by audio tags
   */
  performer?: string;

  /**
   * Title of the audio as defined by sender or by audio tags
   */
  title?: string;

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

  /**
   * Thumbnail of the album cover to which the music file belongs
   */
  thumb?: PhotoSize;
}
