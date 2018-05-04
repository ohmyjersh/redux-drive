import camelize from './camelize';
export default name => camelize(name.toLowerCase().replace(/_/g, " ")).split(" ").join("");











