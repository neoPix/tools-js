import { assert } from 'chai';
import promisify from '../../src/async/promisify';

const callbackFunction = (a, b, c, cb) => {
  cb(null, a + b + c);
};
const callbackErrorFunction = (a, b, c, cb) => {
  cb(new Error());
};

describe('async/promisify', () => {
  describe('on action', () => {
    it('should throw on no func', () => {
      assert.throws(() => {
        promisify();
      }, 'func is required');
    });
  });
  describe('on action', () => {
    it('should change a callback to an async function', () => {
      const promiseFunction = promisify(callbackFunction);
      assert.isFunction(promiseFunction);
      assert.isFunction(promiseFunction(1, 2, 3).then);
    });
    it('should return a value', async () => {
      const promiseFunction = promisify(callbackFunction);
      const value = await promiseFunction(1, 2, 3);
      assert.equal(value, 6);
    });
    it('should reject on error', async () => {
      const promiseFunction = promisify(callbackErrorFunction);
      try {
        const value = await promiseFunction(1, 2, 3);
        assert.fail();
      } catch (e) {
        console.log(e);
      }
    });
  });
});
