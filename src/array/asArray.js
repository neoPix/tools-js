import required from '../tools/required';

export default (item = required('item')) => {
  if (Array.isArray(item) === true) return item;
  return [item];
};
