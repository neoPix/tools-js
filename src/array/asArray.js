import required from '../tools/required';

/**
 * Transform an element to an array if it isn't already one
 * @param {*|Array} item The item to transform to array
 * @returns {Array} An array
 */
const asArray = (item = required('item')) => {
  if (Array.isArray(item) === true) return item;
  return [item];
};

export default asArray;
