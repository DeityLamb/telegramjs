import { EncryptedPassportElement } from './encrypted-passport-element.interface';
import { EncryptedCredentials } from './encrypted-credentials.interface';

/**
 * Describes Telegram Passport data shared with the bot by the user.
 * @see {@link https://core.telegram.org/bots/api#passportdata}
 */
export interface PassportData {
  /**
   * Array with information about documents and other Telegram Passport elements that
   * was shared with the bot
   */
  data: EncryptedPassportElement;

  /**
   * Encrypted credentials required to decrypt the data
   */
  credentials: EncryptedCredentials;
}
