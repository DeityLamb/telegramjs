import type { ChatType } from '../../enums';
import type { ChatPhoto } from './chat-photo.interface';
import type { Message } from './message.interface';
import type { ChatPermissions } from './chat-permissions.interface';

export interface Chat {
  id: number;
  type: ChatType;
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  photo?: ChatPhoto;
  description?: string;
  invite_link?: string;
  pinned_message?: Message;
  permissions?: ChatPermissions;
  can_set_sticker_set?: boolean;
  sticker_set_name?: string;
  has_private_forwards?: boolean;
  has_protected_content?: boolean;
  slow_mode_delay?: number;
  message_auto_delete_time?: number;
  linked_chat_id?: number;
}
