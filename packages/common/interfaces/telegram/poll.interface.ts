import { PollType } from './enums';
import { PollOption } from './poll-options.interface';

export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  is_closed: boolean;
  is_anonymous: boolean;
  allows_multiple_answers: boolean;
  type: PollType;
  total_voter_count: number;
}
