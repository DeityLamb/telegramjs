import { InputMediaBase } from './bases/input-media.interface';

export interface InputMediaVideo extends InputMediaBase {
  type: 'video';
  width?: number;
  height?: number;
  duration?: number;
  supports_streaming?: boolean;
}
