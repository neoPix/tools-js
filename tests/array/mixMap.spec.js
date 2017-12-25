import { assert } from 'chai';
import mixMap from '../../src/array/mixMap';

describe('array/mixMap', () => {
  describe('errors', () => {
    it('should throw on no params', () => {
      assert.throws(() => {
        mixMap();
      }, 'cb is required');
    });
    it('should throw on no value', () => {
      assert.throws(() => {
        mixMap(() => { })();
      }, 'Should be called with at least 2 values');
    });
    it('should throw on few values', () => {
      assert.throws(() => {
        mixMap(() => { })(2);
      }, 'Should be called with at least 2 values');
    });
  });
  describe('on action', () => {
    it('should return a function', () => {
      assert.isFunction(mixMap(() => { }));
    });
    it('should map values', () => {
      const map = mixMap((a, b) => a * b);
      const res = map([1, 2], [1, 2]);
      assert.isArray(res);
      assert.deepEqual(res, [1, 2, 2, 4]);
    });
    it('should map more than two values', () => {
      const map = mixMap((a, b, c) => a * b * c);
      const res = map([1, 2], [1, 2], [1, 2]);
      assert.isArray(res);
      assert.deepEqual(res, [1, 2, 2, 4, 2, 4, 4, 8]);
    });
  });
});
