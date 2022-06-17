import { FileBase } from './bases/file.interface';
import { PhotoSize } from './photo-size.interface';

export interface VideoNote extends FileBase {
  length: number;
  duration: number;
  thumb?: PhotoSize;
}
