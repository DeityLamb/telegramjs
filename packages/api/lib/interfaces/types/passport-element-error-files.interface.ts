/**
 * Represents an issue with a list of scans. The error is considered resolved when
 * the list of files containing the scans changes.
 * @see {@link https://core.telegram.org/bots/api#passportelementerrorfiles}
 */
export interface PassportElementErrorFiles {
  /**
   * Error source, must be files
   */
  source: 'files';

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
   * List of base64-encoded file hashes
   */
  fileHashes: string;

  /**
   * Error message
   */
  message: string;
}
