/**
 * Describes the current status of a webhook.
 * @see {@link https://core.telegram.org/bots/api#webhookinfo}
 */
export interface WebhookInfo {
  /**
   * Webhook URL, may be empty if webhook is not set up
   */
  url: string;

  /**
   * True, if a custom certificate was provided for webhook certificate checks
   */
  hasCustomCertificate: boolean;

  /**
   * Number of updates awaiting delivery
   */
  pendingUpdateCount: number;

  /**
   * Currently used webhook IP address
   */
  ipAddress?: string;

  /**
   * Unix time for the most recent error that happened when trying to deliver an
   * update via webhook
   */
  lastErrorDate?: number;

  /**
   * Error message in human-readable format for the most recent error that happened
   * when trying to deliver an update via webhook
   */
  lastErrorMessage?: string;

  /**
   * Unix time of the most recent error that happened when trying to synchronize
   * available updates with Telegram datacenters
   */
  lastSynchronizationErrorDate?: number;

  /**
   * The maximum allowed number of simultaneous HTTPS connections to the webhook for
   * update delivery
   */
  maxConnections?: number;

  /**
   * A list of update types the bot is subscribed to. Defaults to all update types
   * except chat_member
   */
  allowedUpdates?: string;
}
