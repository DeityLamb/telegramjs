import { FileBase } from './bases/file.interface';

export interface Voice extends FileBase {
  duration: number;
  mime_type?: string;
}
