import type { PhotoSize } from './photo-size.interface';

export interface UserProfilePhotos {
  total_count: number;
  photos: PhotoSize[][];
}
