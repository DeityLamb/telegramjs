import { Message } from './message.interface';
import { InlineQuery } from './inline-query.interface';
import { ChosenInlineResult } from './chosen-inline-result.interface';
import { CallbackQuery } from './callback-query.interface';
import { ShippingQuery } from './shipping-query.interface';
import { PreCheckoutQuery } from './pre-checkout-query.interface';
import { Poll } from './poll.interface';
import { PollAnswer } from './poll-answer.interface';
import { ChatMemberUpdated } from './chat-member-updated.interface';
import { ChatJoinRequest } from './chat-join-request.interface';

/**
 * This object represents an incoming update.
 * At most one of the optional parameters can be present in any given update.
 * @see {@link https://core.telegram.org/bots/api#update}
 */
export interface Update {
  /**
   * The update's unique identifier. Update identifiers start from a certain positive
   * number and increase sequentially. This ID becomes especially handy if you're
   * using webhooks, since it allows you to ignore repeated updates or to restore the
   * correct update sequence, should they get out of order. If there are no new
   * updates for at least a week, then identifier of the next update will be chosen
   * randomly instead of sequentially.
   */
  updateId: number;

  /**
   * New incoming message of any kind - text, photo, sticker, etc.
   */
  message?: Message;

  /**
   * New version of a message that is known to the bot and was edited
   */
  editedMessage?: Message;

  /**
   * New incoming channel post of any kind - text, photo, sticker, etc.
   */
  channelPost?: Message;

  /**
   * New version of a channel post that is known to the bot and was edited
   */
  editedChannelPost?: Message;

  /**
   * New incoming inline query
   */
  inlineQuery?: InlineQuery;

  /**
   * The result of an inline query that was chosen by a user and sent to their chat
   * partner. Please see our documentation on the feedback collecting for details on
   * how to enable these updates for your bot.
   */
  chosenInlineResult?: ChosenInlineResult;

  /**
   * New incoming callback query
   */
  callbackQuery?: CallbackQuery;

  /**
   * New incoming shipping query. Only for invoices with flexible price
   */
  shippingQuery?: ShippingQuery;

  /**
   * New incoming pre-checkout query. Contains full information about checkout
   */
  preCheckoutQuery?: PreCheckoutQuery;

  /**
   * New poll state. Bots receive only updates about stopped polls and polls, which
   * are sent by the bot
   */
  poll?: Poll;

  /**
   * A user changed their answer in a non-anonymous poll. Bots receive new votes
   * only in polls that were sent by the bot itself.
   */
  pollAnswer?: PollAnswer;

  /**
   * The bot's chat member status was updated in a chat. For private chats, this
   * update is received only when the bot is blocked or unblocked by the user.
   */
  myChatMember?: ChatMemberUpdated;

  /**
   * A chat member's status was updated in a chat. The bot must be an administrator
   * in the chat and must explicitly specify "chat_member" in the list of
   * allowed_updates to receive these updates.
   */
  chatMember?: ChatMemberUpdated;

  /**
   * A request to join the chat has been sent. The bot must have the
   * can_invite_users administrator right in the chat to receive these updates.
   */
  chatJoinRequest?: ChatJoinRequest;
}
