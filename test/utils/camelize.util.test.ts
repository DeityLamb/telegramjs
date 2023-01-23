import { camelize } from '../../lib/utils' ;

it('Recursively convert an object fields from snake_case to camelCase', () => {

  expect(camelize({
    geo_location: 'Ukraine, Kyiv',
    random_number: 6,
    nested_object: {
      sence_of_life: '42',
      random_user: {
        user_name: 'lamb',
        nested_array: [{
          camel_case_value: 'rndmstr',
          deep_nested_object: {
            deep_array: [42]
          }
        }]
      }
    }
  })).toStrictEqual({
    geoLocation: 'Ukraine, Kyiv',
    randomNumber: 6,
    nestedObject: {
      senceOfLife: '42',
      randomUser: {
        userName: 'lamb',
        nestedArray: [{
          camelCaseValue: 'rndmstr',
          deepNestedObject: {
            deepArray: [42]
          }
        }]
      }
    }
  });
});

it('Recursively convert an Array of objects fields from snake_case to camelCase', () => {

  expect(camelize([
    {
      geo_location: 'Ukraine, Kyiv',
      random_number: 6
    },
    {
      nested_object: { sence_of_life: '42' }
    }
  ])).toStrictEqual([
    {
      geoLocation: 'Ukraine, Kyiv',
      randomNumber: 6
    },
    {
      nestedObject: { senceOfLife: '42' }
    }
  ]);
});
