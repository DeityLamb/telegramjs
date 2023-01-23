/**
 * This object represents a shipping address.
 * @see {@link https://core.telegram.org/bots/api#shippingaddress}
 */
export interface ShippingAddress {
  /**
   * Two-letter ISO 3166-1 alpha-2 country code
   */
  countryCode: string;

  /**
   * State, if applicable
   */
  state: string;

  /**
   * City
   */
  city: string;

  /**
   * First line for the address
   */
  streetLine1: string;

  /**
   * Second line for the address
   */
  streetLine2: string;

  /**
   * Address post code
   */
  postCode: string;
}
