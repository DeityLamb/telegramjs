/**
 * Describes data sent from a Web App to the bot.
 * @see {@link https://core.telegram.org/bots/api#webappdata}
 */
export interface WebAppData {
  /**
   * The data. Be aware that a bad client can send arbitrary data in this field.
   */
  data: string;

  /**
   * Text of the web_app keyboard button from which the Web App was opened. Be aware
   * that a bad client can send arbitrary data in this field.
   */
  buttonText: string;
}
