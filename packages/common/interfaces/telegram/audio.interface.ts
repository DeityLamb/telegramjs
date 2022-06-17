import { FileBase } from './bases/file.interface';
import { PhotoSize } from './photo-size.interface';

export interface Audio extends FileBase {
  duration: number;
  performer?: string;
  title?: string;
  mime_type?: string;
  thumb?: PhotoSize;
}
