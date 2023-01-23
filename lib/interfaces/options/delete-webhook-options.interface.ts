/**
 * Use this method to remove webhook integration if you decide to switch back to
 * getUpdates. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deletewebhook}
 */
export interface DeleteWebhookOptions {
  /**
   * Pass True to drop all pending updates
   */
  dropPendingUpdates?: boolean;
}
