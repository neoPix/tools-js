import required from '../tools/required';

/**
 * Sets a process asleep for a defined period
 * @param {int} delay The delay to sleep for
 * @returns {Promise<undefined>} A promise resolving once the delay has passed
 */
const sleep = (delay = required('delay')) => new Promise(resolve => setTimeout(resolve, delay));

export default sleep;
