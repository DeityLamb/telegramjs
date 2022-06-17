import type { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';
import type { InlineQueryResultType } from '../../enums';


interface BaseInlineQueryResult {
  id: string;
  reply_markup?: InlineKeyboardMarkup;
  type: InlineQueryResultType;
  input_message_content?: Record<any, any>;
}


interface InlineQueryResultArticle extends BaseInlineQueryResult {
  type: InlineQueryResultType.ARTICLE;
  title: string;
  url?: string;
  hide_url?: boolean;
  description?: string;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
}

interface InlineQueryResultPhoto extends BaseInlineQueryResult {
  type: InlineQueryResultType.PHOTO;
  photo_url: string;
  thumb_url: string;
  photo_width?: number;
  photo_height?: number;
  title?: string;
  description?: string;
  caption?: string;
}

interface InlineQueryResultGif extends BaseInlineQueryResult {
  type: InlineQueryResultType.GIF;
  gif_url: string;
  gif_width?: number;
  gif_height?: number;
  gif_duration?: number;
  thumb_url?: string;
  title?: string;
  caption?: string;
}

interface InlineQueryResultMpeg4Gif extends BaseInlineQueryResult {
  type: InlineQueryResultType.MPEG4_GIF;
  mpeg4_url: string;
  mpeg4_width?: number;
  mpeg4_height?: number;
  mpeg4_duration?: number;
  thumb_url?: string;
  title?: string;
  caption?: string;
}

interface InlineQueryResultVideo extends BaseInlineQueryResult {
  type: InlineQueryResultType.VIDEO;
  video_url: string;
  mime_type: string;
  thumb_url: string;
  title: string;
  caption?: string;
  video_width?: number;
  video_height?: number;
  video_duration?: number;
  description?: string;
}

interface InlineQueryResultAudio extends BaseInlineQueryResult {
  type: InlineQueryResultType.AUDIO;
  audio_url: string;
  title: string;
  caption?: string;
  performer?: string;
  audio_duration?: number;
}

interface InlineQueryResultVoice extends BaseInlineQueryResult {
  type: InlineQueryResultType.VOICE;
  voice_url: string;
  title: string;
  caption?: string;
  voice_duration?: number;
}

interface InlineQueryResultDocument extends BaseInlineQueryResult {
  type: InlineQueryResultType.DOCUMENT;
  title: string;
  caption?: string;
  document_url: string;
  mime_type: string;
  description?: string;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
}

interface BaseInlineQueryResultLocation extends BaseInlineQueryResult {
  latitude: number;
  longitude: number;
  title: string;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
}

interface InlineQueryResultLocation extends BaseInlineQueryResultLocation {
  type: InlineQueryResultType.LOCATION;
}

interface InlineQueryResultVenue extends BaseInlineQueryResultLocation {
  type: InlineQueryResultType.VENUE;
  address: string;
  foursquare_id?: string;
}

interface InlineQueryResultContact extends BaseInlineQueryResult {
  type: InlineQueryResultType.CONTACT;
  phone_number: string;
  first_name: string;
  last_name?: string;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
}

interface InlineQueryResultGame extends Omit<BaseInlineQueryResult, 'input_message_content'> {
  type: InlineQueryResultType.GAME;
  game_short_name: string;
}

interface InlineQueryResultCachedPhoto extends BaseInlineQueryResult {
  type: InlineQueryResultType.PHOTO;
  photo_file_id: string;
  title?: string;
  description?: string;
  caption?: string;
}

interface InlineQueryResultCachedGif extends BaseInlineQueryResult {
  type: InlineQueryResultType.GIF;
  gif_file_id: string;
  title?: string;
  caption?: string;
}

interface InlineQueryResultCachedMpeg4Gif extends BaseInlineQueryResult {
  type: InlineQueryResultType.MPEG4_GIF;
  mpeg4_file_id: string;
  title?: string;
  caption?: string;
}

interface InlineQueryResultCachedSticker extends BaseInlineQueryResult {
  type: InlineQueryResultType.STICKER;
  sticker_file_id: string;
}

interface InlineQueryResultCachedDocument extends BaseInlineQueryResult {
  type: InlineQueryResultType.DOCUMENT;
  title: string;
  document_file_id: string;
  description?: string;
  caption?: string;
}

interface InlineQueryResultCachedVideo extends BaseInlineQueryResult {
  type: InlineQueryResultType.VIDEO;
  video_file_id: string;
  title: string;
  description?: string;
  caption?: string;
}

interface InlineQueryResultCachedAudio extends BaseInlineQueryResult {
  type: InlineQueryResultType.AUDIO;
  audio_file_id: string;
  caption?: string;
}

interface InlineQueryResultCachedVoice extends BaseInlineQueryResult {
  type: InlineQueryResultType.VOICE;
  voice_file_id: string;
  title: string;
  caption?: string;
}


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
