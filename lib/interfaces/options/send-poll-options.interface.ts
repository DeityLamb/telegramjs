import { MessageEntity } from '../types/message-entity.interface';
import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';
import { ReplyKeyboardMarkup } from '../types/reply-keyboard-markup.interface';
import { ReplyKeyboardRemove } from '../types/reply-keyboard-remove.interface';
import { ForceReply } from '../types/force-reply.interface';

/**
 * Use this method to send a native poll. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendpoll}
 */
export interface SendPollOptions {
  /**
   * Unique identifier for the target chat or username of the target channel (in the
   * format @channelusername)
   */
  chatId: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum
   * supergroups only
   */
  messageThreadId?: number;

  /**
   * Poll question, 1-300 characters
   */
  question: string;

  /**
   * A JSON-serialized list of answer options, 2-10 strings 1-100 characters each
   */
  options: string;

  /**
   * True, if the poll needs to be anonymous, defaults to True
   */
  isAnonymous?: boolean;

  /**
   * Poll type, "quiz" or "regular", defaults to "regular"
   */
  type?: string;

  /**
   * True, if the poll allows multiple answers, ignored for polls in quiz mode,
   * defaults to False
   */
  allowsMultipleAnswers?: boolean;

  /**
   * 0-based identifier of the correct answer option, required for polls in quiz mode
   */
  correctOptionId?: number;

  /**
   * Text that is shown when a user chooses an incorrect answer or taps on the lamp
   * icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after
   * entities parsing
   */
  explanation?: string;

  /**
   * Mode for parsing entities in the explanation. See formatting options for more
   * details.
   */
  explanationParseMode?: string;

  /**
   * A JSON-serialized list of special entities that appear in the poll explanation,
   * which can be specified instead of parse_mode
   */
  explanationEntities?: MessageEntity;

  /**
   * Amount of time in seconds the poll will be active after creation, 5-600. Can't
   * be used together with close_date.
   */
  openPeriod?: number;

  /**
   * Point in time (Unix timestamp) when the poll will be automatically closed. Must
   * be at least 5 and no more than 600 seconds in the future. Can't be used together
   * with open_period.
   */
  closeDate?: number;

  /**
   * Pass True if the poll needs to be immediately closed. This can be useful for
   * poll preview.
   */
  isClosed?: boolean;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disableNotification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protectContent?: boolean;

  /**
   * If the message is a reply, ID of the original message
   */
  replyToMessageId?: number;

  /**
   * Pass True if the message should be sent even if the specified replied-to message
   * is not found
   */
  allowSendingWithoutReply?: boolean;

  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard,
   * custom reply keyboard, instructions to remove reply keyboard or to force a reply
   * from the user.
   */
  replyMarkup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}
