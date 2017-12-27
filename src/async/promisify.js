import required from '../tools/required';

/**
 * Transforms a callback function to a promise
 * @param {Function} func The function to call
 * @returns {Function} The function returning a callback
 */
const promisify = (func = required('func')) => (...args) => new Promise((resolve, reject) => func(...args, (err, data) => {
  if (err) reject(err);
  else resolve(data);
}));

export default promisify;
