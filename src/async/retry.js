import required from '../tools/required';
import sleep from './sleep';

export default async (cb = required('cb'), { times = 2, delay = 0 } = {}) => {
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
