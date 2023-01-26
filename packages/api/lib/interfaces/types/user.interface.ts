/**
 * This object represents a Telegram user or bot.
 * @see {@link https://core.telegram.org/bots/api#user}
 */
export interface User {
  /**
   * Unique identifier for this user or bot. This number may have more than 32
   * significant bits and some programming languages may have difficulty/silent
   * defects in interpreting it. But it has at most 52 significant bits, so a 64-bit
   * integer or double-precision float type are safe for storing this identifier.
   */
  id: number;

  /**
   * True, if this user is a bot
   */
  isBot: boolean;

  /**
   * User's or bot's first name
   */
  firstName: string;

  /**
   * User's or bot's last name
   */
  lastName?: string;

  /**
   * User's or bot's username
   */
  username?: string;

  /**
   * IETF language tag of the user's language
   */
  languageCode?: string;

  /**
   * True, if this user is a Telegram Premium user
   */
  isPremium?: boolean;

  /**
   * True, if this user added the bot to the attachment menu
   */
  addedToAttachmentMenu?: boolean;

  /**
   * True, if the bot can be invited to groups. Returned only in getMe.
   */
  canJoinGroups?: boolean;

  /**
   * True, if privacy mode is disabled for the bot. Returned only in getMe.
   */
  canReadAllGroupMessages?: boolean;

  /**
   * True, if the bot supports inline queries. Returned only in getMe.
   */
  supportsInlineQueries?: boolean;
}
