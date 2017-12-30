import required from '../tools/required';

/**
 * Generates a new EventEmitter
 * @returns {EventEmitter} An event emitter
 */
function EventEmitterGenerator() {
  const listenners = new Map();
  /**
   * The event emitter class
   */
  class EventEmitter {
    /**
     * Registers an event listener called only once
     * @param {string} eventName The name of the event
     * @param {Function} cb The function to call when the event is emitted
     * @returns {Function} A function to unregister
     */
    once(eventName = required('eventName'), cb = required('cb')) {
      const unregister = this.on(eventName, (...args) => {
        cb.apply(this, args);
        unregister();
      });
      return unregister;
    }
    /**
     * Registers an event listener
     * @param {string} eventName The name of the event
     * @param {Function} cb The function to call when the event is emitted
     * @returns {Function} A function to unregister
     */
    on(eventName = required('eventName'), cb = required('cb')) {
      if (listenners.has(eventName) === false) {
        listenners.set(eventName, new Set());
      }
      listenners.get(eventName).add(cb);
      return this.off.bind(this, eventName, cb);
    }
    /**
     * Unregister an event listener
     * @param {string} eventName The name of the event
     * @param {Function} cb The function called when the event is emitted
     * @returns {EventEmitter} The current event emiter
     */
    off(eventName = required('eventName'), cb = required('cb')) {
      if (listenners.has(eventName) === true) {
        const set = listenners.get(eventName);
        set.delete(cb);
        if (set.size === 0) {
          listenners.delete(eventName);
        }
      }
      return this;
    }
    /**
     * Emit an event
     * @param {string} eventName The event to emit
     * @param {Array<*>} args The arguments applied
     * @return {EventEmitter} The current event emiter
     */
    emit(eventName = required('eventName'), ...args) {
      if (listenners.has(eventName) === true) {
        listenners.get(eventName).forEach(cb => cb.apply(this, args));
      }
      return this;
    }
  }

  EventEmitter.prototype.addEventListener = EventEmitter.prototype.on;
  EventEmitter.prototype.removeEventListener = EventEmitter.prototype.off;

  return new EventEmitter();
}

export default EventEmitterGenerator;
