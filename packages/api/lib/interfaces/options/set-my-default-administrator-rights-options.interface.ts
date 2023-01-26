import { ChatAdministratorRights } from '../types/chat-administrator-rights.interface';

/**
 * Use this method to change the default administrator rights requested by the bot
 * when it's added as an administrator to groups or channels. These rights will be
 * suggested to users, but they are are free to modify the list before adding the
 * bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setmydefaultadministratorrights}
 */
export interface SetMyDefaultAdministratorRightsOptions {
  /**
   * A JSON-serialized object describing new default administrator rights. If not
   * specified, the default administrator rights will be cleared.
   */
  rights?: ChatAdministratorRights;

  /**
   * Pass True to change the default administrator rights of the bot in channels.
   * Otherwise, the default administrator rights of the bot for groups and
   * supergroups will be changed.
   */
  forChannels?: boolean;
}
