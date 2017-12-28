import { assert } from 'chai';
import command from '../../src/async/command';
import sleep from '../../src/async/sleep';

describe('async/command', () => {
  describe('on error', () => {
    it('should require a function', () => {
      assert.throws(() => {
        command();
      }, 'process is required');
    });
  });
  describe('on action', () => {
    it('should return a generator', () => {
      const returned = command(() => { });
      assert.isFunction(returned);
    });
    it('should generate an instance', () => {
      const EmptyCommand = command(() => { });
      assert.isFunction(EmptyCommand);
      const cmd = new EmptyCommand();
      assert.isObject(cmd);
      assert.isFunction(cmd.do);
      assert.isFunction(cmd.undo);
    });
    it('should generate an instance as a function call', () => {
      const EmptyCommand = command(() => { });
      assert.isFunction(EmptyCommand);
      const cmd = EmptyCommand();
      assert.isObject(cmd);
      assert.isFunction(cmd.do);
      assert.isFunction(cmd.undo);
    });
    it('should be doable and returning a result', async () => {
      let runned = 0;
      const TimedCommand = command(async (state, duration) => {
        await sleep(duration);
        runned += 1;
        return runned;
      });
      const cmd = TimedCommand(10);
      const result = await cmd.do();
      assert.equal(runned, 1);
      assert.equal(runned, result);
    });
    it('should throw when not done but undone', async () => {
      let runned = 0;
      const TimedCommand = command(async (state, duration) => {
        await sleep(duration);
        runned += 1;
        return runned;
      });
      const cmd = TimedCommand(10);
      try {
        await cmd.undo();
        assert.fail();
      } catch (e) {
        assert.equal(runned, 0);
        assert.equal(e.message, 'Command needs to be done before being undone');
      }
    });
    it('should be undoable', async () => {
      let runned = 0;
      const TimedCommand = command(async (state, duration) => {
        await sleep(duration);
        runned += 1;
        return runned;
      }, async (state, duration) => {
        await sleep(duration);
        runned -= 1;
        return runned;
      });
      const cmd = TimedCommand(10);
      await cmd.do();
      const result = await cmd.undo();
      assert.equal(result, 0);
      assert.equal(runned, result);
    });
    it('should wait do before undo', async () => {
      let done = null;
      let undone = null;
      const TimedCommand = command(async () => {
        await sleep(10);
        done = Date.now();
      }, () => {
        undone = Date.now();
      });
      const cmd = TimedCommand();
      cmd.do();
      await cmd.undo();
      assert.isAtLeast(undone, done);
    });
    it('should wait undo before redo', async () => {
      let done = null;
      let undone = null;
      const TimedCommand = command(async () => {
        await sleep(10);
        done = Date.now();
      }, () => {
        undone = Date.now();
      });
      const cmd = TimedCommand();
      cmd.do();
      cmd.undo();
      await cmd.do();
      assert.isAtLeast(done, undone);
    });
  });
});
