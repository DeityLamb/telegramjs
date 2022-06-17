import { FileBase } from './bases/file.interface';
import { PhotoSize } from './photo-size.interface';

export interface Animation extends FileBase {
  width: number;
  height: number;
  duration: number;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
}
