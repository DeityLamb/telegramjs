import { Location } from './location.interface';
import { User } from './user.interface';

export interface InlineQuery {
  id: string;
  from: User;
  location?: Location;
  query: string;
  offset: string;
}
