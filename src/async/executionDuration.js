import required from '../tools/required';
import randomString from '../string/random';

/**
 * Displays the duration of execution of a function
 * @param {Function} func The function to call
 * @param {string} name The name of the timer, default(undefined)
 * @returns {*} The result of func
 */
const executionDuration = (func = required('func'), name = randomString()) => async (...args) => {
  console.time(name);
  const result = await func(...args);
  console.timeEnd(name);
  return result;
};

export default executionDuration;
