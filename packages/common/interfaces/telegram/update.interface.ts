import { Message } from './message.interface';
import { Poll } from './poll.interface';
import { InlineQuery } from './inline-query.interface';
import { ChosenInlineResult } from './chosen-inline-result.interface';
import { CallbackQuery } from './callback-query.interface';
import { ShippingQuery } from './shipping-query.interface';
import { PreCheckoutQuery } from './pre-checkout-query.interface';
import { PollAnswer } from './poll-answer.interface';
import { ChatMemberUpdated } from './chat-member-updated.interface';
import { ChatJoinRequest } from './chat-join-request.interface';

export interface Update {
  update_id: number;
  message?: Message;
  edited_message?: Message;
  channel_post?: Message;
  edited_channel_post?: Message;
  inline_query?: InlineQuery;
  chosen_inline_result?: ChosenInlineResult;
  callback_query?: CallbackQuery;
  shipping_query?: ShippingQuery;
  pre_checkout_query?: PreCheckoutQuery;
  poll?: Poll;
  poll_answer?: PollAnswer;
  my_chat_member?: ChatMemberUpdated;
  chat_member?: ChatMemberUpdated;
  chat_join_request?: ChatJoinRequest;
}
