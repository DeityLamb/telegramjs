import { PhotoSize } from './photo-size.interface';
import { MessageEntity } from './message-entity.interface';
import { Animation } from './animation.interface';

export interface Game {
  title: string;
  description: string;
  photo: PhotoSize[];
  text?: string;
  text_entities?: MessageEntity[];
  animation?: Animation;
}
