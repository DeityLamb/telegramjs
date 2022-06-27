import { injectable } from 'inversify';
import {
  ChatPermissions, BitFieldsResolvable,
  ChatPermissionsBitfields, BitFields
} from '@telegramjs/common';

@injectable()
export class ChatPermissionsEntity {
  public readonly _permissions!: ChatPermissions;
  private bitifelds: BitFields;

  constructor () {
    this.bitifelds = this.toBitFields(this._permissions);
  }

  public has (resolvable: BitFieldsResolvable): boolean {
    return this.bitifelds.has(resolvable);
  }

  private toBitFields (data: ChatPermissions): BitFields {

    const bitfields = BitFields.create(0);

    const properties = Object.entries(data)
      .filter(([, value]) => value)
      .map(([property]) => property.toUpperCase()) as Uppercase<keyof ChatPermissions>[]

    for (const property of properties) {
      bitfields.add(ChatPermissionsBitfields[property]);
    }

    return bitfields;
  }
  
}
