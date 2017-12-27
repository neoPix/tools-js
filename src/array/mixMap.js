import asArray from './asArray';
import required from '../tools/required';

/**
 * Created a function to mix and map multiple arrays
 * @param {Function} cb The callback to call on every combinaison
 * @returns {Function} Function to map multiple arrays
 */
const mixMap = (cb = required('cb')) => (...args) => {
  if (args.length < 2) {
    throw new Error('Should be called with at least 2 values');
  }
  const arrays = args.map(asArray);
  const maxLen = arrays.length - 1;
  const compose = (pos = 0, values = []) =>
    arrays[pos].reduce((acc, value) => {
      if (pos < maxLen) {
        return acc.concat(compose(pos + 1, [...values, value]));
      }
      return acc.concat([cb(...[...values, value])]);
    }, []);
  return compose();
};

export default mixMap;
