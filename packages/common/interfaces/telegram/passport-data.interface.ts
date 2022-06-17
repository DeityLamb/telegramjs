import { EncryptedPassportElement } from './encrypted-passport-element.interface';
import { EncryptedCredentials } from './encrypted-credentials.interface';

export interface PassportData {
  data: EncryptedPassportElement[];
  credentials: EncryptedCredentials;
}
