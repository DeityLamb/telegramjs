import { User } from './user.interface';

/**
 * This object represents a service message about new members invited to a video
 * chat.
 * @see {@link https://core.telegram.org/bots/api#videochatparticipantsinvited}
 */
export interface VideoChatParticipantsInvited {
  /**
   * New members that were invited to the video chat
   */
  users: User;
}
