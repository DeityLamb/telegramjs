import { ChatPermissions } from '../types/chat-permissions.interface';

/**
 * Use this method to set default chat permissions for all members. The bot must be
 * an administrator in the group or a supergroup for this to work and must have the
 * can_restrict_members administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setchatpermissions}
 */
export interface SetChatPermissionsOptions {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in
   * the format @supergroupusername)
   */
  chatId: number | string;

  /**
   * A JSON-serialized object for new default chat permissions
   */
  permissions: ChatPermissions;
}
