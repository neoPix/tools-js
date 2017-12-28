import { assert } from 'chai';
import commandBus from '../../src/async/commandBus';
import command from '../../src/async/command';
import sleep from '../../src/async/sleep';

describe('async/commandBus', () => {
  describe('on action', () => {
    it('should be a function', () => {
      assert.isFunction(commandBus);
      const bus = commandBus();
      assert.isObject(bus);
      assert.isFunction(bus.do);
      assert.isFunction(bus.undo);
      assert.isFunction(bus.redo);
    });
    it('should be added to the command bus', async () => {
      let calls = 0;
      const bus = commandBus();
      const TestCommand = command(() => { calls += 1; });
      const cmd = TestCommand();
      await bus.do(cmd);
      assert.equal(calls, 1);
    });
    it('should be added in order to the command bus', async () => {
      let calls1 = null;
      let calls2 = null;
      const bus = commandBus();
      const TestCommand = command(async () => {
        await sleep(10);
        calls1 = Date.now();
      });
      const TestCommand2 = command(() => { calls2 = Date.now(); });
      const cmd = TestCommand();
      const cmd2 = TestCommand2();
      bus.do(cmd);
      await bus.do(cmd2);
      assert.isAtLeast(calls2, calls1);
      assert.equal(bus.size, 2);
      assert.equal(bus.position, 1);
    });
    it('should remove element when exceeding max bus size', async () => {
      const bus = commandBus(2);
      const TestCommand = command(async () => {
        await sleep(10);
      });
      const cmd = TestCommand();
      bus.do(cmd);
      bus.do(cmd);
      await bus.do(cmd);
      assert.equal(bus.size, 2);
      assert.equal(bus.position, 1);
    });
    it('should be able to undo and redo a command', async () => {
      let called = 0;
      const bus = commandBus();
      const TestCommand = command(() => {
        called = 1;
      }, () => {
        called = 0;
      });
      const TestCommand2 = command(() => {
        called = 2;
      }, () => {
        called = 1;
      });
      const cmd = TestCommand();
      const cmd2 = TestCommand2();
      bus.do(cmd);
      await bus.do(cmd2);
      assert.equal(called, 2);
      await bus.undo();
      assert.equal(called, 1);
      await bus.redo();
      assert.equal(called, 2);
    });
    it('should be able to undo more than size', async () => {
      let called = 0;
      const bus = commandBus();
      const TestCommand = command(() => {
        called = 1;
      }, () => {
        called = 0;
      });
      const TestCommand2 = command(() => {
        called = 2;
      }, () => {
        called = 1;
      });
      const cmd = TestCommand();
      const cmd2 = TestCommand2();
      bus.do(cmd);
      await bus.do(cmd2);
      assert.equal(called, 2);
      bus.undo();
      await bus.undo();
      assert.equal(called, 1);
    });
    it('should be able to redo more than size', async () => {
      let called = 0;
      const bus = commandBus();
      const TestCommand = command(() => {
        called = 1;
      }, () => {
        called = 0;
      });
      const TestCommand2 = command(() => {
        called = 2;
      }, () => {
        called = 1;
      });
      const cmd = TestCommand();
      const cmd2 = TestCommand2();
      bus.do(cmd);
      await bus.do(cmd2);
      assert.equal(called, 2);
      bus.undo();
      bus.redo();
      await bus.redo();
      assert.equal(called, 2);
    });
  });
});
