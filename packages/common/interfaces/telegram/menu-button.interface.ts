import type { WebAppInfo } from './web-app-info.interface';
import { MenuButtonType } from '../../enums';

interface BaseMenuButton {
  type: Exclude<MenuButtonType, MenuButtonType.WEB_APP>;
}

interface MenuButtonWebApp {
  type: MenuButtonType.WEB_APP;
  text: string;
  web_app: WebAppInfo;
}

export type MenuButton = MenuButtonWebApp | BaseMenuButton;
