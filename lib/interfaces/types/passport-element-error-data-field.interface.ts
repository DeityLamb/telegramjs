/**
 * Represents an issue in one of the data fields that was provided by the user. The
 * error is considered resolved when the field's value changes.
 * @see {@link https://core.telegram.org/bots/api#passportelementerrordatafield}
 */
export interface PassportElementErrorDataField {
  /**
   * Error source, must be data
   */
  source: 'data';

  /**
   * The section of the user's Telegram Passport which has the error, one of
   * "personal_details", "passport", "driver_license", "identity_card",
   * "internal_passport", "address"
   */
  type:
    | 'personal_details'
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'address';

  /**
   * Name of the data field which has the error
   */
  fieldName: string;

  /**
   * Base64-encoded data hash
   */
  dataHash: string;

  /**
   * Error message
   */
  message: string;
}
