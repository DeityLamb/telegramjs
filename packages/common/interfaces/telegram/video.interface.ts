import { FileBase } from './bases/file.interface';
import { PhotoSize } from './photo-size.interface';

export interface Video extends FileBase {
  width: number;
  height: number;
  duration: number;
  thumb?: PhotoSize;
  mime_type?: string;
}
