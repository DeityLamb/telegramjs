/**
 * This object represents a service message about a change in auto-delete timer
 * settings.
 * @see {@link https://core.telegram.org/bots/api#messageautodeletetimerchanged}
 */
export interface MessageAutoDeleteTimerChanged {
  /**
   * New auto-delete time for messages in the chat; in seconds
   */
  messageAutoDeleteTime: number;
}
