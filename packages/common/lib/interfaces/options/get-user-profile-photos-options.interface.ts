/**
 * Use this method to get a list of profile pictures for a user. Returns a
 * UserProfilePhotos object.
 * @see {@link https://core.telegram.org/bots/api#getuserprofilephotos}
 */
export interface GetUserProfilePhotosOptions {
  /**
   * Unique identifier of the target user
   */
  userId: number;

  /**
   * Sequential number of the first photo to be returned. By default, all photos are
   * returned.
   */
  offset?: number;

  /**
   * Limits the number of photos to be retrieved. Values between 1-100 are accepted.
   * Defaults to 100.
   */
  limit?: number;
}
