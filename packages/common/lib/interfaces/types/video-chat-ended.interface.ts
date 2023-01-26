/**
 * This object represents a service message about a video chat ended in the chat.
 * @see {@link https://core.telegram.org/bots/api#videochatended}
 */
export interface VideoChatEnded {
  /**
   * Video chat duration in seconds
   */
  duration: number;
}
