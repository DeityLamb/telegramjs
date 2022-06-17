import { FileBase } from './bases/file.interface';
import { PhotoSize } from './photo-size.interface';

export interface Document extends FileBase {
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
}
