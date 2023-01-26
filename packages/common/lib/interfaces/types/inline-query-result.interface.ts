import { InlineQueryResultCachedAudio } from './inline-query-result-cached-audio.interface';
import { InlineQueryResultCachedDocument } from './inline-query-result-cached-document.interface';
import { InlineQueryResultCachedGif } from './inline-query-result-cached-gif.interface';
import { InlineQueryResultCachedMpeg4Gif } from './inline-query-result-cached-mpeg-4-gif.interface';
import { InlineQueryResultCachedPhoto } from './inline-query-result-cached-photo.interface';
import { InlineQueryResultCachedSticker } from './inline-query-result-cached-sticker.interface';
import { InlineQueryResultCachedVideo } from './inline-query-result-cached-video.interface';
import { InlineQueryResultCachedVoice } from './inline-query-result-cached-voice.interface';
import { InlineQueryResultArticle } from './inline-query-result-article.interface';
import { InlineQueryResultAudio } from './inline-query-result-audio.interface';
import { InlineQueryResultContact } from './inline-query-result-contact.interface';
import { InlineQueryResultGame } from './inline-query-result-game.interface';
import { InlineQueryResultDocument } from './inline-query-result-document.interface';
import { InlineQueryResultGif } from './inline-query-result-gif.interface';
import { InlineQueryResultLocation } from './inline-query-result-location.interface';
import { InlineQueryResultMpeg4Gif } from './inline-query-result-mpeg-4-gif.interface';
import { InlineQueryResultPhoto } from './inline-query-result-photo.interface';
import { InlineQueryResultVenue } from './inline-query-result-venue.interface';
import { InlineQueryResultVideo } from './inline-query-result-video.interface';
import { InlineQueryResultVoice } from './inline-query-result-voice.interface';

/**
 * This object represents one result of an inline query. Telegram clients currently
 * support results of the following 20 types:
 * - InlineQueryResultCachedAudio
 * - InlineQueryResultCachedDocument
 * - InlineQueryResultCachedGif
 * - InlineQueryResultCachedMpeg4Gif
 * - InlineQueryResultCachedPhoto
 * - InlineQueryResultCachedSticker
 * - InlineQueryResultCachedVideo
 * - InlineQueryResultCachedVoice
 * - InlineQueryResultArticle
 * - InlineQueryResultAudio
 * - InlineQueryResultContact
 * - InlineQueryResultGame
 * - InlineQueryResultDocument
 * - InlineQueryResultGif
 * - InlineQueryResultLocation
 * - InlineQueryResultMpeg4Gif
 * - InlineQueryResultPhoto
 * - InlineQueryResultVenue
 * - InlineQueryResultVideo
 * - InlineQueryResultVoice
 * Note: All URLs passed in inline query results will be available to end users and
 * therefore must be assumed to be public.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresult}
 */
export type InlineQueryResult =
  | InlineQueryResultCachedAudio
  | InlineQueryResultCachedDocument
  | InlineQueryResultCachedGif
  | InlineQueryResultCachedMpeg4Gif
  | InlineQueryResultCachedPhoto
  | InlineQueryResultCachedSticker
  | InlineQueryResultCachedVideo
  | InlineQueryResultCachedVoice
  | InlineQueryResultArticle
  | InlineQueryResultAudio
  | InlineQueryResultContact
  | InlineQueryResultGame
  | InlineQueryResultDocument
  | InlineQueryResultGif
  | InlineQueryResultLocation
  | InlineQueryResultMpeg4Gif
  | InlineQueryResultPhoto
  | InlineQueryResultVenue
  | InlineQueryResultVideo
  | InlineQueryResultVoice;
