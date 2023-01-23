import { Location } from './location.interface';

/**
 * Represents a location to which a chat is connected.
 * @see {@link https://core.telegram.org/bots/api#chatlocation}
 */
export interface ChatLocation {
  /**
   * The location to which the supergroup is connected. Can't be a live location.
   */
  location: Location;

  /**
   * Location address; 1-64 characters, as defined by the chat owner
   */
  address: string;
}
