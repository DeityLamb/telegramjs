import { Location } from './location.interface';

/**
 * This object represents a venue.
 * @see {@link https://core.telegram.org/bots/api#venue}
 */
export interface Venue {
  /**
   * Venue location. Can't be a live location
   */
  location: Location;

  /**
   * Name of the venue
   */
  title: string;

  /**
   * Address of the venue
   */
  address: string;

  /**
   * Foursquare identifier of the venue
   */
  foursquareId?: string;

  /**
   * Foursquare type of the venue. (For example, "arts_entertainment/default",
   * "arts_entertainment/aquarium" or "food/icecream".)
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
