import { User } from './user.interface';

export interface PollAnswer {
  poll_id: string;
  user: User;
  option_ids: number[];
}
