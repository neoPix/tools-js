import required from '../tools/required';
import randomString from '../string/random';

export default (func = required('func'), name = randomString()) => async (...args) => {
  console.time(name);
  const result = await func(...args);
  console.timeEnd(name);
  return result;
};
