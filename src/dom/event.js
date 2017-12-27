import required from '../tools/required';
import mixMap from '../array/mixMap';

/**
 * Subscribes a single or multiple events on a single or multiple elements
 * @param {HTMLElement|Array<HTMLElement>} elms, The dom element to attach events on
 * @param {string|Array<string>} evts, the events to attach
 * @param {Function} cb, The function to call when the event occurs
 * @returns {Function} A function allowing to unsubscribe all the events
 */
const events = (elms = required('elms'), evts = required('evts'), cb = required('cb')) => {
  const add = mixMap((element, event) => element.addEventListener(event, cb));
  const remove = mixMap((element, event) => element.removeEventListener(event, cb));
  add(elms, evts);
  return () => {
    remove(elms, evts);
  };
};

export default events;
