import { ParseMode } from '../../../enums';

export interface InputMediaBase {
  media: string;
  caption?: string;
  parse_mode?: ParseMode;
}
