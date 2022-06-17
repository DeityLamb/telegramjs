import { FileBase } from './bases/file.interface';

export interface PhotoSize extends FileBase {
  width: number;
  height: number;
}
