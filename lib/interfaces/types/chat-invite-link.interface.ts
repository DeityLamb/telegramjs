import { User } from './user.interface';

/**
 * Represents an invite link for a chat.
 * @see {@link https://core.telegram.org/bots/api#chatinvitelink}
 */
export interface ChatInviteLink {
  /**
   * The invite link. If the link was created by another chat administrator, then the
   * second part of the link will be replaced with "...".
   */
  inviteLink: string;

  /**
   * Creator of the link
   */
  creator: User;

  /**
   * True, if users joining the chat via the link need to be approved by chat
   * administrators
   */
  createsJoinRequest: boolean;

  /**
   * True, if the link is primary
   */
  isPrimary: boolean;

  /**
   * True, if the link is revoked
   */
  isRevoked: boolean;

  /**
   * Invite link name
   */
  name?: string;

  /**
   * Point in time (Unix timestamp) when the link will expire or has been expired
   */
  expireDate?: number;

  /**
   * The maximum number of users that can be members of the chat simultaneously
   * after joining the chat via this invite link; 1-99999
   */
  memberLimit?: number;

  /**
   * Number of pending join requests created using this link
   */
  pendingJoinRequestCount?: number;
}
