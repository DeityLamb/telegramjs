import { InputFile } from '../types/input-file.interface';

/**
 * Use this method to set a new profile photo for the chat. Photos can't be changed
 * for private chats. The bot must be an administrator in the chat for this to work
 * and must have the appropriate administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setchatphoto}
 */
export interface SetChatPhotoOptions {
  /**
   * Unique identifier for the target chat or username of the target channel (in the
   * format @channelusername)
   */
  chatId: number | string;

  /**
   * New chat photo, uploaded using multipart/form-data
   */
  photo: InputFile;
}
