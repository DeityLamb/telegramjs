/**
 * Represents the content of a contact message to be sent as the result of an
 * inline query.
 * @see {@link https://core.telegram.org/bots/api#inputcontactmessagecontent}
 */
export interface InputContactMessageContent {
  /**
   * Contact's phone number
   */
  phoneNumber: string;

  /**
   * Contact's first name
   */
  firstName: string;

  /**
   * Contact's last name
   */
  lastName?: string;

  /**
   * Additional data about the contact in the form of a vCard, 0-2048 bytes
   */
  vcard?: string;
}
