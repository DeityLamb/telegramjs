/**
 * This object represents an animated emoji that displays a random value.
 * @see {@link https://core.telegram.org/bots/api#dice}
 */
export interface Dice {
  /**
   * Emoji on which the dice throw animation is based
   */
  emoji: string;

  /**
   * Value of the dice, 1-6 for "🎲", "🎯" and "🎳" base emoji, 1-5 for "🏀" and "⚽"
   * base emoji, 1-64 for "🎰" base emoji
   */
  value: number;
}
