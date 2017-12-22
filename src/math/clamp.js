import required from '../tools/required';

export default (num = required('num'), min = required('min'), max = required('max')) => Math.min(Math.max(num, min), max);
