/**
 * Represents the content of a venue message to be sent as the result of an inline
 * query.
 * @see {@link https://core.telegram.org/bots/api#inputvenuemessagecontent}
 */
export interface InputVenueMessageContent {
  /**
   * Latitude of the venue in degrees
   */
  latitude: number;

  /**
   * Longitude of the venue in degrees
   */
  longitude: number;

  /**
   * Name of the venue
   */
  title: string;

  /**
   * Address of the venue
   */
  address: string;

  /**
   * Foursquare identifier of the venue, if known
   */
  foursquareId?: string;

  /**
   * Foursquare type of the venue, if known. (For example,
   * "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)
   */
  foursquareType?: string;

  /**
   * Google Places identifier of the venue
   */
  googlePlaceId?: string;

  /**
   * Google Places type of the venue. (See supported types.)
   */
  googlePlaceType?: string;
}
