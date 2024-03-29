/**
 * This object contains information about one answer option in a poll.
 * @see {@link https://core.telegram.org/bots/api#polloption}
 */
export interface PollOption {
  /**
   * Option text, 1-100 characters
   */
  text: string;

  /**
   * Number of users that voted for this option
   */
  voterCount: number;
}
