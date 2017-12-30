/**
 * Generates a CommandBus able to do, undo and redo a command suite
 * @param {int} size The max size of the command bus
 * @returns {CommandBus} An instance of a bus of command
 */
function CommandBusGenerator(size = 10) {
  let running = null;
  let position = 0;
  const commands = [];
  const bus = {
    /**
     * @returns {int} The position in the bus
     */
    get position() {
      return position;
    },
    /**
     * @returns {int} The current size of the bus
     */
    get size() {
      return commands.length;
    },
    /**
     * Exexutes a command and push it in th bus
     * @param {Command} command A command to add in the bus
     * @returns {Promise<undefined>} A promise to the end of the command
     */
    async do(command) {
      running = (async () => {
        await running;
        commands.splice(position + 1, size);
        if (commands.length === size) {
          commands.shift();
        }
        commands.push(command);
        position = commands.length - 1;
        await command.do();
      })();
      await running;
    },
    /**
     * Undoes the last action pushed in the bus
     * @returns {Promise<undefined>} A promise to the end of the command
     */
    async undo() {
      running = (async () => {
        await running;
        const newPosition = position - 1;
        if (newPosition >= 0) {
          const command = commands[position];
          await command.undo();
          position = newPosition;
        }
      })();
      await running;
    },
    /**
     * Redoes the last action undone from the bus
     * @returns {Promise<undefined>} A promise to the end of the command
     */
    async redo() {
      running = (async () => {
        await running;
        const newPosition = position + 1;
        if (newPosition < commands.length) {
          const command = commands[newPosition];
          await command.do();
          position = newPosition;
        }
      })();
      await running;
    },
  };

  Object.freeze(bus);

  return bus;
}

export default CommandBusGenerator;
