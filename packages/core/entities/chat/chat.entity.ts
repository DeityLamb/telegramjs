import { inject } from 'inversify';
import { Chat, ChatType, ChatPhoto } from '@telegramjs/common';
import { MessageEntity } from '../message.entity';
import { ChatPhotoEntity } from './chat-photo.entity';
import { ChatPermissionsEntity } from './chat-permissions.entity';

export class ChatEntity {
  public readonly id!: string;
  public readonly type!: ChatType;
  public readonly title!: string | null;

  // TODO: Create UserChatEntity extends ChatEntity
  public readonly username!: string | null;
  public readonly firstname!: string | null;
  public readonly lastname!: string | null;
  
  public readonly photo!: ChatPhotoEntity | null;
  public readonly description!: string | null;
  public readonly inviteLink!: string | null;
  public readonly pinnedMessage!: MessageEntity | null;
  public readonly permissions!: ChatPermissionsEntity | null;

  // TODO: Move fields to a StickerSetEntity
  public readonly canSetStickerSet!: boolean;
  public readonly stickerSetName!: string | null;
  
  public readonly hasPrivateForwards!: boolean;
  public readonly hasProtectedContent!: boolean;

  public readonly slowModeDelay!: number;
  public readonly messageAutoDeleteTime!: number;

  public readonly linkedChatId!: string;
}
