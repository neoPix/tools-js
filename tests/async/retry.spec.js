import { assert } from 'chai';
import retry from '../../src/async/retry';
import sleep from '../../src/async/sleep';

describe('async/retry', () => {
  describe('on error', () => {
    it('should throw on no callback', () => {
      assert.throws(() => {
        retry();
      }, 'cb is required');
    });
  });
  describe('on action', () => {
    it('should call the function', async () => {
      let called = 0;
      const result = await retry(async () => {
        await sleep(10);
        called += 1;
        return called;
      });
      assert.equal(called, 1);
      assert.equal(called, result);
    });
    it('should call the function twice', async () => {
      let called = 0;
      const result = await retry(async () => {
        await sleep(10);
        called += 1;
        if (called < 2) {
          throw new Error('Not now');
        }
        return called;
      });
      assert.equal(called, 2);
      assert.equal(called, result);
    });
    it('should call the function multiple times until if it fails', async () => {
      let called = 0;
      try {
        await retry(async () => {
          called += 1;
          throw new Error('Not now');
        });
        assert.fail();
      } catch (e) {
        assert.equal(e.message, 'Not now');
        assert.equal(e.tried, 2);
        assert.equal(called, 2);
      }
    });
    it('should call the function a defined number of times until if it fails', async () => {
      let called = 0;
      try {
        await retry(async () => {
          called += 1;
          throw new Error('Not now');
        }, { times: 10 });
        assert.fail();
      } catch (e) {
        assert.equal(e.message, 'Not now');
        assert.equal(e.tried, 10);
        assert.equal(called, 10);
      }
    });
    it('should call the function with a delay', async () => {
      const start = Date.now();
      try {
        await retry(async () => {
          throw new Error('Not now');
        }, { delay: 20 });
        assert.fail();
      } catch (e) {
        assert.isAtLeast(Date.now() - start, 20);
      }
    });
    it('should call the function with a delay on each call', async () => {
      const start = Date.now();
      try {
        await retry(async () => {
          throw new Error('Not now');
        }, { delay: 20, times: 20 });
        assert.fail();
      } catch (e) {
        assert.isAtLeast(Date.now() - start, 20 * 19);
      }
    });
  });
});
