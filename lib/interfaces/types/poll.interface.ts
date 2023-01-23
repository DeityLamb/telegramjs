import { PollOption } from './poll-option.interface';
import { MessageEntity } from './message-entity.interface';

/**
 * This object contains information about a poll.
 * @see {@link https://core.telegram.org/bots/api#poll}
 */
export interface Poll {
  /**
   * Unique poll identifier
   */
  id: string;

  /**
   * Poll question, 1-300 characters
   */
  question: string;

  /**
   * List of poll options
   */
  options: PollOption;

  /**
   * Total number of users that voted in the poll
   */
  totalVoterCount: number;

  /**
   * True, if the poll is closed
   */
  isClosed: boolean;

  /**
   * True, if the poll is anonymous
   */
  isAnonymous: boolean;

  /**
   * Poll type, currently can be "regular" or "quiz"
   */
  type: string;

  /**
   * True, if the poll allows multiple answers
   */
  allowsMultipleAnswers: boolean;

  /**
   * 0-based identifier of the correct answer option. Available only for polls in
   * the quiz mode, which are closed, or was sent (not forwarded) by the bot or to
   * the private chat with the bot.
   */
  correctOptionId?: number;

  /**
   * Text that is shown when a user chooses an incorrect answer or taps on the lamp
   * icon in a quiz-style poll, 0-200 characters
   */
  explanation?: string;

  /**
   * Special entities like usernames, URLs, bot commands, etc. that appear in the
   * explanation
   */
  explanationEntities?: MessageEntity;

  /**
   * Amount of time in seconds the poll will be active after creation
   */
  openPeriod?: number;

  /**
   * Point in time (Unix timestamp) when the poll will be automatically closed
   */
  closeDate?: number;
}
