import { User } from '@telegramjs/common';
import { Container, injectable } from 'inversify';
import { UserEntity } from '../entities';
import { EntityFactory } from './entity.factory';
import { initializeEntity } from '../helpers';

@injectable()
class UserFactory implements EntityFactory<UserEntity> {

  constructor (private readonly container: Container) {}
  
  create (data: User): UserEntity {

    const entity = this.container.resolve(UserEntity);

    return initializeEntity(entity, {
      id: String(data.id),
      firstname: data.first_name,
      lastname: data.last_name,
      username: data.username,
      languageCode: data.language_code,
      isBot: data.is_bot
    })
  }
}
