import { User } from './user.interface';
import { Location } from './location.interface';

/**
 * Represents a result of an inline query that was chosen by the user and sent to
 * their chat partner.
 * Note: It is necessary to enable inline feedback via @BotFather in order to
 * receive these objects in updates.
 * @see {@link https://core.telegram.org/bots/api#choseninlineresult}
 */
export interface ChosenInlineResult {
  /**
   * The unique identifier for the result that was chosen
   */
  resultId: string;

  /**
   * The user that chose the result
   */
  from: User;

  /**
   * Sender location, only for bots that require user location
   */
  location?: Location;

  /**
   * Identifier of the sent inline message. Available only if there is an inline
   * keyboard attached to the message. Will be also received in callback queries and
   * can be used to edit the message.
   */
  inlineMessageId?: string;

  /**
   * The query that was used to obtain the result
   */
  query: string;
}
