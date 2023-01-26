import { WebAppInfo } from './web-app-info.interface';

/**
 * Represents a menu button, which launches a Web App.
 * @see {@link https://core.telegram.org/bots/api#menubuttonwebapp}
 */
export interface MenuButtonWebApp {
  /**
   * Type of the button, must be web_app
   */
  type: 'web_app';

  /**
   * Text on the button
   */
  text: string;

  /**
   * Description of the Web App that will be launched when the user presses the
   * button. The Web App will be able to send an arbitrary message on behalf of the
   * user using the method answerWebAppQuery.
   */
  webApp: WebAppInfo;
}
