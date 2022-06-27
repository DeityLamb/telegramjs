import type { BitFields } from '../utils';

export type BitFieldsResolvable = number | string | bigint | BitFields | BitFieldsResolvable[];
