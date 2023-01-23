import { ChatPhoto } from './chat-photo.interface';
import { Message } from './message.interface';
import { ChatPermissions } from './chat-permissions.interface';
import { ChatLocation } from './chat-location.interface';

/**
 * This object represents a chat.
 * @see {@link https://core.telegram.org/bots/api#chat}
 */
export interface Chat {
  /**
   * Unique identifier for this chat. This number may have more than 32 significant
   * bits and some programming languages may have difficulty/silent defects in
   * interpreting it. But it has at most 52 significant bits, so a signed 64-bit
   * integer or double-precision float type are safe for storing this identifier.
   */
  id: number;

  /**
   * Type of chat, can be either "private", "group", "supergroup" or "channel"
   */
  type: string;

  /**
   * Title, for supergroups, channels and group chats
   */
  title?: string;

  /**
   * Username, for private chats, supergroups and channels if available
   */
  username?: string;

  /**
   * First name of the other party in a private chat
   */
  firstName?: string;

  /**
   * Last name of the other party in a private chat
   */
  lastName?: string;

  /**
   * True, if the supergroup chat is a forum (has topics enabled)
   */
  isForum?: boolean;

  /**
   * Chat photo. Returned only in getChat.
   */
  photo?: ChatPhoto;

  /**
   * If non-empty, the list of all active chat usernames; for private chats,
   * supergroups and channels. Returned only in getChat.
   */
  activeUsernames?: string;

  /**
   * Custom emoji identifier of emoji status of the other party in a private chat.
   * Returned only in getChat.
   */
  emojiStatusCustomEmojiId?: string;

  /**
   * Bio of the other party in a private chat. Returned only in getChat.
   */
  bio?: string;

  /**
   * True, if privacy settings of the other party in the private chat allows to use
   * tg://user?id=<user_id> links only in chats with the user. Returned only in
   * getChat.
   */
  hasPrivateForwards?: boolean;

  /**
   * True, if the privacy settings of the other party restrict sending voice and
   * video note messages in the private chat. Returned only in getChat.
   */
  hasRestrictedVoiceAndVideoMessages?: boolean;

  /**
   * True, if users need to join the supergroup before they can send messages.
   * Returned only in getChat.
   */
  joinToSendMessages?: boolean;

  /**
   * True, if all users directly joining the supergroup need to be approved by
   * supergroup administrators. Returned only in getChat.
   */
  joinByRequest?: boolean;

  /**
   * Description, for groups, supergroups and channel chats. Returned only in
   * getChat.
   */
  description?: string;

  /**
   * Primary invite link, for groups, supergroups and channel chats. Returned only
   * in getChat.
   */
  inviteLink?: string;

  /**
   * The most recent pinned message (by sending date). Returned only in getChat.
   */
  pinnedMessage?: Message;

  /**
   * Default chat member permissions, for groups and supergroups. Returned only in
   * getChat.
   */
  permissions?: ChatPermissions;

  /**
   * For supergroups, the minimum allowed delay between consecutive messages sent by
   * each unpriviledged user; in seconds. Returned only in getChat.
   */
  slowModeDelay?: number;

  /**
   * The time after which all messages sent to the chat will be automatically
   * deleted; in seconds. Returned only in getChat.
   */
  messageAutoDeleteTime?: number;

  /**
   * True, if aggressive anti-spam checks are enabled in the supergroup. The field
   * is only available to chat administrators. Returned only in getChat.
   */
  hasAggressiveAntiSpamEnabled?: boolean;

  /**
   * True, if non-administrators can only get the list of bots and administrators in
   * the chat. Returned only in getChat.
   */
  hasHiddenMembers?: boolean;

  /**
   * True, if messages from the chat can't be forwarded to other chats. Returned
   * only in getChat.
   */
  hasProtectedContent?: boolean;

  /**
   * For supergroups, name of group sticker set. Returned only in getChat.
   */
  stickerSetName?: string;

  /**
   * True, if the bot can change the group sticker set. Returned only in getChat.
   */
  canSetStickerSet?: boolean;

  /**
   * Unique identifier for the linked chat, i.e. the discussion group identifier for
   * a channel and vice versa; for supergroups and channel chats. This identifier may
   * be greater than 32 bits and some programming languages may have
   * difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so
   * a signed 64 bit integer or double-precision float type are safe for storing this
   * identifier. Returned only in getChat.
   */
  linkedChatId?: number;

  /**
   * For supergroups, the location to which the supergroup is connected. Returned
   * only in getChat.
   */
  location?: ChatLocation;
}
