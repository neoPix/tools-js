import required from '../tools/required';

/**
 * Takes a value or a function and returns the result of the function, or the value
 * @param {*|Function} value, the value or a function returning the value
 * @returns {*} A value
 */
const funcOrValue = (value = required('value')) => {
  if (value instanceof Function) {
    return value();
  }
  return value;
};

export default funcOrValue;
