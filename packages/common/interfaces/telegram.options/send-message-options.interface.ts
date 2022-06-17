// import { SendBasicOptions } from './bases';
import { ParseMode } from '../../enums';
import { MessageEntity } from '../telegram';

// TODO: to implement actual interface
export interface SendMessageOptions {
  text: string;
  parse_mode?: ParseMode;
  entities: MessageEntity[];
  disable_web_page_preview?: boolean;
  disable_notification: 
}
