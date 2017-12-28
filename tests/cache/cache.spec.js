import { assert } from 'chai';
import cache from '../../src/cache/cache';
import sleep from '../../src/async/sleep';

describe('cache/cache', () => {
  describe('errors', () => {
    it('should throw on no loader', () => {
      assert.throws(() => {
        cache();
      });
    });
  });
  describe('on action', () => {
    it('should create a cache manager', () => {
      const testCache = cache(() => {});
      assert.isObject(testCache);
      assert.isFunction(testCache.get);
      assert.isFunction(testCache.remove);
      assert.isFunction(testCache.clear);
      assert.property(testCache, 'size');
      assert.equal(testCache.size, 0);
    });
    it('should get object from loader', () => {
      const testCache = cache(key => ({ key }));
      const a = testCache.get('a');
      assert.equal(testCache.size, 1);
      assert.deepEqual(a, { key: 'a' });
    });
    it('should not create a new object when requested twice', () => {
      const testCache = cache(key => ({ key }));
      const a = testCache.get('a');
      const b = testCache.get('a');
      assert.equal(testCache.size, 1);
      assert.equal(a, b);
      assert.deepEqual(a, b);
    });
    it('should refresh the object on exceeded cache', async () => {
      let called = 0;
      const testCache = cache((key) => {
        called += 1;
        return { key };
      }, 5);
      const a = testCache.get('a');
      await sleep(10);
      const b = testCache.get('a');
      assert.equal(testCache.size, 1);
      assert.notEqual(a, b);
      assert.equal(called, 2);
    });
    it('should remove element from cache', () => {
      const testCache = cache(key => ({ key }));
      const a = testCache.get('a');
      assert.equal(testCache.size, 1);
      testCache.remove('a');
      assert.equal(testCache.size, 0);
    });
    it('should clear elements from the cache', () => {
      const testCache = cache(key => ({ key }));
      testCache.get('a');
      testCache.get('b');
      testCache.get('c');
      testCache.get('d');
      testCache.get('a');
      assert.equal(testCache.size, 4);
      testCache.clear();
      assert.equal(testCache.size, 0);
    });
  });
});
