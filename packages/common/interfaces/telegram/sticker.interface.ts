export type { MaskPosition } from './mask-position.interface';
export type { PhotoSize } from './photo-size.interface';

export interface Sticker {
  file_id: string;
  file_unique_id: string;
  is_animated: boolean;
  width: number;
  height: number;
  thumb?: PhotoSize;
  emoji?: string;
  set_name?: string;
  mask_position?: MaskPosition;
  file_size?: number;
}
