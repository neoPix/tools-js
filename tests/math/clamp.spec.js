import { assert } from 'chai';
import clamp from '../../src/math/clamp';

describe('math/clamp', () => {
  describe('errors', () => {
    it('should throw on no number', () => {
      assert.throws(() => {
        clamp();
      }, 'num is required');
    });
    it('should throw on no min', () => {
      assert.throws(() => {
        clamp(2);
      }, 'min is required');
    });
    it('should throw on no max', () => {
      assert.throws(() => {
        clamp(2, 3);
      }, 'max is required');
    });
  });
  describe('on int', () => {
    it('should clamp min', () => {
      assert.equal(clamp(2, 3, 4), 3);
    });
    it('should clamp max', () => {
      assert.equal(clamp(5, 3, 4), 4);
    });
    it('should not clamp', () => {
      assert.equal(clamp(3, 2, 4), 3);
    });
  });
  describe('on double', () => {
    it('should clamp min', () => {
      assert.equal(clamp(2, 3.5, 4.6), 3.5);
    });
    it('should clamp max', () => {
      assert.equal(clamp(5, 3.5, 4.6), 4.6);
    });
    it('should not clamp', () => {
      assert.equal(clamp(3.22, 2.6, 4.25), 3.22);
    });
  });
});
