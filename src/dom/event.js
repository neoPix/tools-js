import required from '../tools/required';
import mixMap from '../array/mixMap';

export default (elms = required('elms'), evts = required('evts'), cb = required('cb')) => {
  const add = mixMap((element, event) => element.addEventListener(event, cb));
  const remove = mixMap((element, event) => element.removeEventListener(event, cb));
  add(elms, evts);
  return () => {
    remove(elms, evts);
  };
};
