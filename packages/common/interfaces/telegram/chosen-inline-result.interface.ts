import { Location } from './location.interface';
import { User } from './user.interface';

export interface ChosenInlineResult {
  result_id: string;
  from: User;
  location?: Location;
  inline_message_id?: string;
  query: string;
}
