import { User, Chat } from '@telegramjs/common';
import { ChatEntity } from './chat';
import { inject, injectable } from 'inversify';
import { ApiService } from '../services';

@injectable()
export class UserEntity {

  public readonly id!: string;
  public readonly firstname!: string;
  public readonly lastname!: string | null;
  public readonly username!: string | null;
  public readonly languageCode!: string | null;

  public readonly isBot!: boolean;

  constructor (private readonly api: ApiService) {}
}
