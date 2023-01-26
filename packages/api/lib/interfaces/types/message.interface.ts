import { User } from './user.interface';
import { Chat } from './chat.interface';
import { MessageEntity } from './message-entity.interface';
import { Animation } from './animation.interface';
import { Audio } from './audio.interface';
import { Document } from './document.interface';
import { PhotoSize } from './photo-size.interface';
import { Sticker } from './sticker.interface';
import { Video } from './video.interface';
import { VideoNote } from './video-note.interface';
import { Voice } from './voice.interface';
import { Contact } from './contact.interface';
import { Dice } from './dice.interface';
import { Game } from './game.interface';
import { Poll } from './poll.interface';
import { Venue } from './venue.interface';
import { Location } from './location.interface';
import { MessageAutoDeleteTimerChanged } from './message-auto-delete-timer-changed.interface';
import { Invoice } from './invoice.interface';
import { SuccessfulPayment } from './successful-payment.interface';
import { WriteAccessAllowed } from './write-access-allowed.interface';
import { PassportData } from './passport-data.interface';
import { ProximityAlertTriggered } from './proximity-alert-triggered.interface';
import { ForumTopicCreated } from './forum-topic-created.interface';
import { ForumTopicEdited } from './forum-topic-edited.interface';
import { ForumTopicClosed } from './forum-topic-closed.interface';
import { ForumTopicReopened } from './forum-topic-reopened.interface';
import { GeneralForumTopicHidden } from './general-forum-topic-hidden.interface';
import { GeneralForumTopicUnhidden } from './general-forum-topic-unhidden.interface';
import { VideoChatScheduled } from './video-chat-scheduled.interface';
import { VideoChatStarted } from './video-chat-started.interface';
import { VideoChatEnded } from './video-chat-ended.interface';
import { VideoChatParticipantsInvited } from './video-chat-participants-invited.interface';
import { WebAppData } from './web-app-data.interface';
import { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';

/**
 * This object represents a message.
 * @see {@link https://core.telegram.org/bots/api#message}
 */
export interface Message {
  /**
   * Unique message identifier inside this chat
   */
  messageId: number;

  /**
   * Unique identifier of a message thread to which the message belongs; for
   * supergroups only
   */
  messageThreadId?: number;

  /**
   * Sender of the message; empty for messages sent to channels. For backward
   * compatibility, the field contains a fake sender user in non-channel chats, if
   * the message was sent on behalf of a chat.
   */
  from?: User;

  /**
   * Sender of the message, sent on behalf of a chat. For example, the channel
   * itself for channel posts, the supergroup itself for messages from anonymous
   * group administrators, the linked channel for messages automatically forwarded to
   * the discussion group. For backward compatibility, the field from contains a fake
   * sender user in non-channel chats, if the message was sent on behalf of a chat.
   */
  senderChat?: Chat;

  /**
   * Date the message was sent in Unix time
   */
  date: number;

  /**
   * Conversation the message belongs to
   */
  chat: Chat;

  /**
   * For forwarded messages, sender of the original message
   */
  forwardFrom?: User;

  /**
   * For messages forwarded from channels or from anonymous administrators,
   * information about the original sender chat
   */
  forwardFromChat?: Chat;

  /**
   * For messages forwarded from channels, identifier of the original message in the
   * channel
   */
  forwardFromMessageId?: number;

  /**
   * For forwarded messages that were originally sent in channels or by an anonymous
   * chat administrator, signature of the message sender if present
   */
  forwardSignature?: string;

  /**
   * Sender's name for messages forwarded from users who disallow adding a link to
   * their account in forwarded messages
   */
  forwardSenderName?: string;

  /**
   * For forwarded messages, date the original message was sent in Unix time
   */
  forwardDate?: number;

  /**
   * True, if the message is sent to a forum topic
   */
  isTopicMessage?: boolean;

  /**
   * True, if the message is a channel post that was automatically forwarded to the
   * connected discussion group
   */
  isAutomaticForward?: boolean;

  /**
   * For replies, the original message. Note that the Message object in this field
   * will not contain further reply_to_message fields even if it itself is a reply.
   */
  replyToMessage?: Message;

  /**
   * Bot through which the message was sent
   */
  viaBot?: User;

  /**
   * Date the message was last edited in Unix time
   */
  editDate?: number;

  /**
   * True, if the message can't be forwarded
   */
  hasProtectedContent?: boolean;

  /**
   * The unique identifier of a media message group this message belongs to
   */
  mediaGroupId?: string;

  /**
   * Signature of the post author for messages in channels, or the custom title of
   * an anonymous group administrator
   */
  authorSignature?: string;

  /**
   * For text messages, the actual UTF-8 text of the message
   */
  text?: string;

  /**
   * For text messages, special entities like usernames, URLs, bot commands, etc.
   * that appear in the text
   */
  entities?: MessageEntity;

  /**
   * Message is an animation, information about the animation. For backward
   * compatibility, when this field is set, the document field will also be set
   */
  animation?: Animation;

  /**
   * Message is an audio file, information about the file
   */
  audio?: Audio;

  /**
   * Message is a general file, information about the file
   */
  document?: Document;

  /**
   * Message is a photo, available sizes of the photo
   */
  photo?: PhotoSize;

  /**
   * Message is a sticker, information about the sticker
   */
  sticker?: Sticker;

  /**
   * Message is a video, information about the video
   */
  video?: Video;

  /**
   * Message is a video note, information about the video message
   */
  videoNote?: VideoNote;

  /**
   * Message is a voice message, information about the file
   */
  voice?: Voice;

  /**
   * Caption for the animation, audio, document, photo, video or voice
   */
  caption?: string;

  /**
   * For messages with a caption, special entities like usernames, URLs, bot
   * commands, etc. that appear in the caption
   */
  captionEntities?: MessageEntity;

  /**
   * True, if the message media is covered by a spoiler animation
   */
  hasMediaSpoiler?: boolean;

  /**
   * Message is a shared contact, information about the contact
   */
  contact?: Contact;

  /**
   * Message is a dice with random value
   */
  dice?: Dice;

  /**
   * Message is a game, information about the game. More about games:
   * https://core.telegram.org/bots/api#games
   */
  game?: Game;

  /**
   * Message is a native poll, information about the poll
   */
  poll?: Poll;

  /**
   * Message is a venue, information about the venue. For backward compatibility,
   * when this field is set, the location field will also be set
   */
  venue?: Venue;

  /**
   * Message is a shared location, information about the location
   */
  location?: Location;

  /**
   * New members that were added to the group or supergroup and information about
   * them (the bot itself may be one of these members)
   */
  newChatMembers?: User;

  /**
   * A member was removed from the group, information about them (this member may be
   * the bot itself)
   */
  leftChatMember?: User;

  /**
   * A chat title was changed to this value
   */
  newChatTitle?: string;

  /**
   * A chat photo was change to this value
   */
  newChatPhoto?: PhotoSize;

  /**
   * Service message: the chat photo was deleted
   */
  deleteChatPhoto?: boolean;

  /**
   * Service message: the group has been created
   */
  groupChatCreated?: boolean;

  /**
   * Service message: the supergroup has been created. This field can't be received
   * in a message coming through updates, because bot can't be a member of a
   * supergroup when it is created. It can only be found in reply_to_message if
   * someone replies to a very first message in a directly created supergroup.
   */
  supergroupChatCreated?: boolean;

  /**
   * Service message: the channel has been created. This field can't be received in
   * a message coming through updates, because bot can't be a member of a channel
   * when it is created. It can only be found in reply_to_message if someone replies
   * to a very first message in a channel.
   */
  channelChatCreated?: boolean;

  /**
   * Service message: auto-delete timer settings changed in the chat
   */
  messageAutoDeleteTimerChanged?: MessageAutoDeleteTimerChanged;

  /**
   * The group has been migrated to a supergroup with the specified identifier. This
   * number may have more than 32 significant bits and some programming languages may
   * have difficulty/silent defects in interpreting it. But it has at most 52
   * significant bits, so a signed 64-bit integer or double-precision float type are
   * safe for storing this identifier.
   */
  migrateToChatId?: number;

  /**
   * The supergroup has been migrated from a group with the specified identifier.
   * This number may have more than 32 significant bits and some programming
   * languages may have difficulty/silent defects in interpreting it. But it has at
   * most 52 significant bits, so a signed 64-bit integer or double-precision float
   * type are safe for storing this identifier.
   */
  migrateFromChatId?: number;

  /**
   * Specified message was pinned. Note that the Message object in this field will
   * not contain further reply_to_message fields even if it is itself a reply.
   */
  pinnedMessage?: Message;

  /**
   * Message is an invoice for a payment, information about the invoice. More about
   * payments: https://core.telegram.org/bots/api#payments
   */
  invoice?: Invoice;

  /**
   * Message is a service message about a successful payment, information about the
   * payment. More about payments: https://core.telegram.org/bots/api#payments
   */
  successfulPayment?: SuccessfulPayment;

  /**
   * The domain name of the website on which the user has logged in. More about
   * Telegram Login: https://core.telegram.org/widgets/login
   */
  connectedWebsite?: string;

  /**
   * Service message: the user allowed the bot added to the attachment menu to write
   * messages
   */
  writeAccessAllowed?: WriteAccessAllowed;

  /**
   * Telegram Passport data
   */
  passportData?: PassportData;

  /**
   * Service message. A user in the chat triggered another user's proximity alert
   * while sharing Live Location.
   */
  proximityAlertTriggered?: ProximityAlertTriggered;

  /**
   * Service message: forum topic created
   */
  forumTopicCreated?: ForumTopicCreated;

  /**
   * Service message: forum topic edited
   */
  forumTopicEdited?: ForumTopicEdited;

  /**
   * Service message: forum topic closed
   */
  forumTopicClosed?: ForumTopicClosed;

  /**
   * Service message: forum topic reopened
   */
  forumTopicReopened?: ForumTopicReopened;

  /**
   * Service message: the 'General' forum topic hidden
   */
  generalForumTopicHidden?: GeneralForumTopicHidden;

  /**
   * Service message: the 'General' forum topic unhidden
   */
  generalForumTopicUnhidden?: GeneralForumTopicUnhidden;

  /**
   * Service message: video chat scheduled
   */
  videoChatScheduled?: VideoChatScheduled;

  /**
   * Service message: video chat started
   */
  videoChatStarted?: VideoChatStarted;

  /**
   * Service message: video chat ended
   */
  videoChatEnded?: VideoChatEnded;

  /**
   * Service message: new participants invited to a video chat
   */
  videoChatParticipantsInvited?: VideoChatParticipantsInvited;

  /**
   * Service message: data sent by a Web App
   */
  webAppData?: WebAppData;

  /**
   * Inline keyboard attached to the message. login_url buttons are represented as
   * ordinary url buttons.
   */
  replyMarkup?: InlineKeyboardMarkup;
}
