import camelize from './camelize';
export default name =>
  name.includes('_')
    ? camelize(name.toLowerCase().replace(/_/g, ' '))
        .split(' ')
        .join('')
    : camelize(name)
        .split(' ')
        .join('');
