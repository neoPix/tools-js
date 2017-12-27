/**
 * Generates a random string
 * @param {int} length The length of the string
 * @returns {string} a random string
 */
const random = (length = 8) => (Math.random() * Number.MAX_VALUE).toString(36).substr(0, length);

export default random;
