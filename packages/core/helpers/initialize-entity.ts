export type ExcludeMethods<T> = Pick<T, {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]>;

export async function initializeEntity<T> (entity: T, data: ExcludeMethods<T>): T {

  Object.assign(entity, data);
  return entity;
}
