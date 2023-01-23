import camelcase from 'lodash.camelcase';
import { SnakeToCamelCaseNested } from '../interfaces/utils';

export function camelize<T>(target: T): SnakeToCamelCaseNested<T> {

  if (!(target instanceof Object)) {
    return target as T & any;
  }

  if (target instanceof Array) {
    return target.map(camelize) as any;
  }

  return Object.keys(target)
    .reduce((prev, key) => {
      
      const value = (target as any)[key];

      return {
        ...prev,
        [camelcase(key)]: value instanceof Array
          ? value.map(camelize)
          : value instanceof Object
            ? camelize(value)
            : value
      };

    }, {} as SnakeToCamelCaseNested<T>);
}
