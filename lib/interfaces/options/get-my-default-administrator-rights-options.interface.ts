/**
 * Use this method to get the current default administrator rights of the bot.
 * Returns ChatAdministratorRights on success.
 * @see {@link https://core.telegram.org/bots/api#getmydefaultadministratorrights}
 */
export interface GetMyDefaultAdministratorRightsOptions {
  /**
   * Pass True to get default administrator rights of the bot in channels. Otherwise,
   * default administrator rights of the bot for groups and supergroups will be
   * returned.
   */
  forChannels?: boolean;
}
