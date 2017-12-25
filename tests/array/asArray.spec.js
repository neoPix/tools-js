import { assert } from 'chai';
import asArray from '../../src/array/asArray';

describe('array/asArray', () => {
  describe('errors', () => {
    it('should throw on noe params', () => {
      assert.throws(() => {
        asArray();
      }, 'item is required');
    });
  });
  describe('on action', () => {
    it('should return an array when passed a single element', () => {
      const result = asArray('213');
      assert.isArray(result);
      assert.deepEqual(result, ['213']);
    });
    it('should return an array when passed an array', () => {
      const result = asArray([123]);
      assert.isArray(result);
      assert.deepEqual(result, [123]);
    });
  });
});
