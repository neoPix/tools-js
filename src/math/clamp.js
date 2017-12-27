import required from '../tools/required';

/**
 * Clamps a number between a min and a max value
 * @param {number} num The number to clamp
 * @param {number} min The min number to clamp with
 * @param {number} max The max number to clamp with
 * @returns {number} The clamped number
 */
const clamp = (num = required('num'), min = required('min'), max = required('max')) => Math.min(Math.max(num, min), max);

export default clamp;
