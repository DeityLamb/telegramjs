import { Chat } from '@telegramjs/common';
import { Container, injectable } from 'inversify';
import { ChatEntity } from '../../entities';
import { initializeEntity } from '../../helpers';
import { EntityFactory } from '../entity.factory';
import { MessageFactory } from '../message.factory';
import { ChatPhotoFactory } from './chat-photo.factory';
import { ChatPermissionsFactory } from './chat-permissions.factory';

@injectable()
class ChatFactory implements EntityFactory<ChatEntity> {

  constructor (
    private readonly container: Container,
    private readonly photoFactory: ChatPhotoFactory,
    private readonly messageFactory: MessageFactory,
    private readonly permissionsFactory: ChatPermissionsFactory
  ) {}

  create (data: Chat): ChatEntity {
    const chat = this.container.resolve(ChatEntity);
    
    const photo = this.photoFactory.create(data.photo);
    const pinnedMessage = this.messageFactory.create(data.pinned_message);
    const permissions = this.permissionsFactory.create(data.permissions);

    return initializeEntity(chat, {
      pinnedMessage,
      permissions,
      photo,
      id: String(data.id),
      type: data.type,
      title: data.title,
      username: data.username || null,
      firstname: data.first_name || null,
      lastname: data.last_name || null,
      description: data.description || null,
      inviteLink: data.invite_link || null,
      canSetStickerSet: data.can_set_sticker_set || false,
      stickerSetName: data.sticker_set_name || null,
      hasPrivateForwards: data.has_private_forwards || null,
      hasProtectedContent: data.has_protected_content || false,
      slowModeDelay: Number(data.slow_mode_delay) || 0,
      messageAutoDeleteTime: Number(data.message_auto_delete_time),
      linkedChatId: String(data.linked_chat_id),
    })
  }
}
