import required from '../tools/required';

export default (delay = required('delay')) => new Promise(resolve => setTimeout(resolve, delay));
