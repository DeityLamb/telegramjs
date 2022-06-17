import type { Sticker } from './sticker.interface';

export interface StickerSet {
  name: string;
  title: string;
  contains_masks: boolean;
  stickers: Sticker[];
}
