import snakecase from 'lodash.snakecase';
import { CamelToSnakeCaseNested } from '../interfaces/utils';

export function snakelize<T>(target: T): CamelToSnakeCaseNested<T> {

  if (!(target instanceof Object)) {
    return target as T as any;
  }

  if (target instanceof Array) {
    return target.map(snakelize) as any;
  }

  return Object.keys(target)
    .reduce((prev, key) => {

      const value = (target as any)[key];

      return {
        ...prev,
        [snakecase(key)]: value instanceof Array
          ? value.map(snakelize)
          : value instanceof Object
            ? snakelize(value)
            : value
      };

    }, {} as CamelToSnakeCaseNested<T>);
}
