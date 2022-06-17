import { MessageEntityType } from '../../enums';
import type { User } from './user.interface';

export interface MessageEntity {
  type: MessageEntityType;
  offset: number;
  length: number;
  url?: string;
  user?: User;
  language?: string;
}
