import { User } from './user.interface';

/**
 * This object represents one row of the high scores table for a game.
 * @see {@link https://core.telegram.org/bots/api#gamehighscore}
 */
export interface GameHighScore {
  /**
   * Position in high score table for the game
   */
  position: number;

  /**
   * User
   */
  user: User;

  /**
   * Score
   */
  score: number;
}
