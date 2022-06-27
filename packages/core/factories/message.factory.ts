import { Message } from '@telegramjs/common';
import { MessageEntity } from '../entities';
import { EntityFactory } from './entity.factory';
import { Container, injectable } from 'inversify';
import { initializeEntity } from '../helpers';

@injectable()
export class MessageFactory implements EntityFactory<MessageEntity> {
  
  constructor(private readonly container: Container) {}

  create (data: Message): MessageEntity {
    const message = this.container.resolve(MessageEntity);

    return initializeEntity(message, {
      id: String(data.message_id)
    })
  }
}
