import required from '../tools/required';

export default (func = required('func')) => (...args) => new Promise((resolve, reject) => func(...args, (err, data) => {
  if (err) reject(err);
  else resolve(data);
}));
