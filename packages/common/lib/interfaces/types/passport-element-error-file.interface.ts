/**
 * Represents an issue with a document scan. The error is considered resolved when
 * the file with the document scan changes.
 * @see {@link https://core.telegram.org/bots/api#passportelementerrorfile}
 */
export interface PassportElementErrorFile {
  /**
   * Error source, must be file
   */
  source: 'file';

  /**
   * The section of the user's Telegram Passport which has the issue, one of
   * "utility_bill", "bank_statement", "rental_agreement", "passport_registration",
   * "temporary_registration"
   */
  type:
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration';

  /**
   * Base64-encoded file hash
   */
  fileHash: string;

  /**
   * Error message
   */
  message: string;
}
