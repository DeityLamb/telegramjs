import { InputMediaAudio } from '../types/input-media-audio.interface';
import { InputMediaDocument } from '../types/input-media-document.interface';
import { InputMediaPhoto } from '../types/input-media-photo.interface';
import { InputMediaVideo } from '../types/input-media-video.interface';

/**
 * Use this method to send a group of photos, videos, documents or audios as an
 * album. Documents and audio files can be only grouped in an album with messages
 * of the same type. On success, an array of Messages that were sent is returned.
 * @see {@link https://core.telegram.org/bots/api#sendmediagroup}
 */
export interface SendMediaGroupOptions {
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
   * A JSON-serialized array describing messages to be sent, must include 2-10 items
   */
  media:
    | InputMediaAudio
    | InputMediaDocument
    | InputMediaPhoto
    | InputMediaVideo;

  /**
   * Sends messages silently. Users will receive a notification with no sound.
   */
  disableNotification?: boolean;

  /**
   * Protects the contents of the sent messages from forwarding and saving
   */
  protectContent?: boolean;

  /**
   * If the messages are a reply, ID of the original message
   */
  replyToMessageId?: number;

  /**
   * Pass True if the message should be sent even if the specified replied-to message
   * is not found
   */
  allowSendingWithoutReply?: boolean;
}
