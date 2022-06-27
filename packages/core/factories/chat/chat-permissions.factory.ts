import { ChatPermissions } from '@telegramjs/common';
import { Container, injectable } from 'inversify';
import { ChatPermissionsEntity } from '../../entities';
import { initializeEntity } from '../../helpers';
import { EntityFactory } from '../entity.factory';

@injectable()
export class ChatPermissionsFactory implements EntityFactory<ChatPermissionsEntity> {
  
  constructor(private readonly container: Container) {}

  create (data: ChatPermissions): ChatPermissionsEntity {

    const permissions = this.container.resolve(ChatPermissionsEntity);
    return initializeEntity(permissions, { _permissions: data });
  }
}
