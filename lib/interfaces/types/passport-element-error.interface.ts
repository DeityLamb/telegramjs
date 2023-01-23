import { PassportElementErrorDataField } from './passport-element-error-data-field.interface';
import { PassportElementErrorFrontSide } from './passport-element-error-front-side.interface';
import { PassportElementErrorReverseSide } from './passport-element-error-reverse-side.interface';
import { PassportElementErrorSelfie } from './passport-element-error-selfie.interface';
import { PassportElementErrorFile } from './passport-element-error-file.interface';
import { PassportElementErrorFiles } from './passport-element-error-files.interface';
import { PassportElementErrorTranslationFile } from './passport-element-error-translation-file.interface';
import { PassportElementErrorTranslationFiles } from './passport-element-error-translation-files.interface';
import { PassportElementErrorUnspecified } from './passport-element-error-unspecified.interface';

/**
 * This object represents an error in the Telegram Passport element which was
 * submitted that should be resolved by the user. It should be one of:
 * - PassportElementErrorDataField
 * - PassportElementErrorFrontSide
 * - PassportElementErrorReverseSide
 * - PassportElementErrorSelfie
 * - PassportElementErrorFile
 * - PassportElementErrorFiles
 * - PassportElementErrorTranslationFile
 * - PassportElementErrorTranslationFiles
 * - PassportElementErrorUnspecified
 * @see {@link https://core.telegram.org/bots/api#passportelementerror}
 */
export type PassportElementError =
  | PassportElementErrorDataField
  | PassportElementErrorFrontSide
  | PassportElementErrorReverseSide
  | PassportElementErrorSelfie
  | PassportElementErrorFile
  | PassportElementErrorFiles
  | PassportElementErrorTranslationFile
  | PassportElementErrorTranslationFiles
  | PassportElementErrorUnspecified;
