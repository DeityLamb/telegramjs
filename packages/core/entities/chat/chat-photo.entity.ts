import { ChatPhoto } from '@telegramjs/common';

export class ChatPhotoEntity {
  private readonly smallFileId: string;
  private readonly bigFileId: string;

  // TODO
  public async getFile (options: { small?: boolean } = {}) {
    const id = options.small ? this.smallFileId : this.bigFileId;

    // return this.api.getFile(id);
  }
}
