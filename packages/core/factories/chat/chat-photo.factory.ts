import { ChatPhoto } from '@telegramjs/common';
import { injectable, Container } from 'inversify';
import { ChatPhotoEntity } from '../../entities';
import { EntityFactory } from '../entity.factory';
import { initializeEntity } from '../../helpers';

@injectable()
export class ChatPhotoFactory extends EntityFactory<ChatPhotoEntity> {

  constructor (
    private readonly container: Container
  ) {
    super()
  }
  
  create (data: ChatPhoto): ChatPhotoEntity {
    const photo = this.container.resolve(ChatPhotoEntity);
    
    return initializeEntity(photo, {
      smallFileId: String(data.small_file_id),
      bigFileId: String(data.big_file_id),
    })
  }
}
