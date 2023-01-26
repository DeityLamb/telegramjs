/**
 * This object represents a service message about a video chat scheduled in the
 * chat.
 * @see {@link https://core.telegram.org/bots/api#videochatscheduled}
 */
export interface VideoChatScheduled {
  /**
   * Point in time (Unix timestamp) when the video chat is supposed to be started by
   * a chat administrator
   */
  startDate: number;
}
