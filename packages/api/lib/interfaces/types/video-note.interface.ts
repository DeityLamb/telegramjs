import { PhotoSize } from './photo-size.interface';

/**
 * This object represents a video message (available in Telegram apps as of v.4.0).
 * @see {@link https://core.telegram.org/bots/api#videonote}
 */
export interface VideoNote {
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
   * Video width and height (diameter of the video message) as defined by sender
   */
  length: number;

  /**
   * Duration of the video in seconds as defined by sender
   */
  duration: number;

  /**
   * Video thumbnail
   */
  thumb?: PhotoSize;

  /**
   * File size in bytes
   */
  fileSize?: number;
}
