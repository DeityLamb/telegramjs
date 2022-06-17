import { User } from './user.interface';

export interface ChatInviteLink {
  invite_link: string;
  creator: User;
  is_primary: boolean;
  is_revoked: boolean;
  expire_date?: number;
  member_limit?: number;
  name?: string;
}
