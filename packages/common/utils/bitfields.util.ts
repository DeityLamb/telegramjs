import { BitFieldsResolvable } from '../interfaces';

export class BitFields {

  private constructor (private bitfields: bigint) {}

  public static create (resolvable: BitFieldsResolvable): BitFields {
    
    const bits = BitFields.resolve(resolvable);
    return new BitFields(bits);
  }

  public has (...resolvable: BitFieldsResolvable[]): boolean {
    
    const bits = BitFields.resolve(resolvable);
    return (this.bitfields & bits) === bits;
  }

  public equals (resolvable: BitFieldsResolvable): boolean {

    const bits = BitFields.resolve(resolvable);
    return bits === this.bitfields;
  }

  public add (...resolvable: BitFieldsResolvable[]): this {
    
    const bits = BitFields.resolve(resolvable);
    this.bitfields |= bits;

    return this;
  }

  public remove (...resolvable: BitFieldsResolvable[]): this {
    
    const bits = BitFields.resolve(resolvable);
    this.bitfields &= ~bits;
    
    return this;
  }

  private static resolve (bits: BitFieldsResolvable): bigint {
    
    if (Array.isArray(bits)) {
      return bits
        .map((o) => this.resolve(o))
        .reduce((prev, curr) => prev | curr, BigInt(0));
    }

    if (bits instanceof BitFields) {
      return bits.bitfields;
    }

    return BigInt(bits);
  }

}
