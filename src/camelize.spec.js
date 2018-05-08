import camelize from './camelize';

test('should camel case the string', () => {
  expect(camelize('AsdfAsdf')).toEqual('asdfAsdf');
});
