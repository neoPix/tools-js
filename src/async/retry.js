import required from '../tools/required';
import sleep from './sleep';

/**
 * Tries to run the callback a defined number of time,
 * throws when the number of tries is exceeded
 * @param {Function} cb The function to run
 * @param {int} times The number of time to try running th callback, default(2)
 * @param {int} delay The delay between each call, default(0)
 * @returns {*} The result of a valid callback
 */
const retry = async (cb = required('cb'), { times = 2, delay = 0 } = {}) => {
  let tried = 0;
  const tryOnce = async () => {
    try {
      return await cb();
    } catch (e) {
      tried += 1;
      if (tried < times) {
        await sleep(delay);
        return tryOnce();
      }
      e.tried = tried;
      throw e;
    }
  };
  return tryOnce();
};

export default retry;
