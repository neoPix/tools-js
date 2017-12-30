import required from '../tools/required';
import noop from '../tools/noop';

/**
 * Generates a command element based on a do and undo method
 * @param {Function} process The method called to process the command
 * @param {Function} undo The methos called to reverse the process
 * @returns {Command} The command class
 */
const command = (process = required('process'), undo = noop) =>
  function CommandGenerator(...args) {
    let doing = null;
    let undoing = null;
    const state = {};
    const cmdClass = {
      /**
       * Executes the command
       * @returns {*} The command result
       */
      async do() {
        if (undoing !== null) {
          await undoing;
          undoing = null;
        }
        doing = process(state, ...args);
        const result = await doing;
        return result;
      },
      /**
       * Executes a reverse commend to return to the previous state
       * @returns {*} The reverse command result
       */
      async undo() {
        if (doing === null) {
          throw new Error('Command needs to be done before being undone');
        }
        undoing = (async () => {
          await doing;
          return undo(state, ...args);
        })();
        const result = await undoing;
        doing = null;
        return result;
      },
    };
    Object.freeze(cmdClass);
    return cmdClass;
  };

export default command;
