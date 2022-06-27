import { Container } from 'inversify';
import { Type } from '@telegramjs/common';

export interface EntityFactory<T> {
  create (data: any): T
}
