import { PhotoSize } from './photo-size.interface';

/**
 * This object represent a user's profile pictures.
 * @see {@link https://core.telegram.org/bots/api#userprofilephotos}
 */
export interface UserProfilePhotos {
  /**
   * Total number of profile pictures the target user has
   */
  totalCount: number;

  /**
   * Requested profile pictures (in up to 4 sizes each)
   */
  photos: PhotoSize;
}
