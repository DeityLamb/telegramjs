import { User } from './user.interface';

/**
 * This object represents an answer of a user in a non-anonymous poll.
 * @see {@link https://core.telegram.org/bots/api#pollanswer}
 */
export interface PollAnswer {
  /**
   * Unique poll identifier
   */
  pollId: string;

  /**
   * The user, who changed the answer to the poll
   */
  user: User;

  /**
   * 0-based identifiers of answer options, chosen by the user. May be empty if the
   * user retracted their vote.
   */
  optionIds: number;
}
