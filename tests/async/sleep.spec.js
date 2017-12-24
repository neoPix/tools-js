import { assert } from 'chai';
import sleep from '../../src/async/sleep';

describe('async/sleep', () => {
  describe('errors', () => {
    it('should throw on no delay', async (done) => {
      try {
        await sleep();
        assert.fail();
      } catch (e) {
        done();
      }
    });
  });
  describe('on action', () => {
    it('should sleep', async () => {
      const now = Date.now();
      await sleep(50);
      assert.isAtLeast(Date.now() - now, 50);
    });
  });
});
