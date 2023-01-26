import { InputMediaAnimation } from './input-media-animation.interface';
import { InputMediaDocument } from './input-media-document.interface';
import { InputMediaAudio } from './input-media-audio.interface';
import { InputMediaPhoto } from './input-media-photo.interface';
import { InputMediaVideo } from './input-media-video.interface';

/**
 * This object represents the content of a media message to be sent. It should be
 * one of
 * - InputMediaAnimation
 * - InputMediaDocument
 * - InputMediaAudio
 * - InputMediaPhoto
 * - InputMediaVideo
 * @see {@link https://core.telegram.org/bots/api#inputmedia}
 */
export type InputMedia =
  | InputMediaAnimation
  | InputMediaDocument
  | InputMediaAudio
  | InputMediaPhoto
  | InputMediaVideo;
