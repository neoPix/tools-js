import { assert } from 'chai';
import bench from '../../src/async/executionDuration';
import sleep from '../../src/async/sleep';

const myFunction = async (a, b, c) => {
  await sleep(100);
  return a * b * c;
};

describe('async/exexutinDuration', () => {
  describe('on error', () => {
    it('should require a function', () => {
      assert.throws(() => {
        bench();
      }, 'func is required');
    });
  });
  describe('on action', () => {
    it('should create a function', () => {
      const benchedFunction = bench(myFunction);
      assert.isFunction(benchedFunction);
    });
    it('should can take a name parameter', () => {
      const benchedFunction = bench(myFunction, 'testName');
      assert.isFunction(benchedFunction);
    });
    it('should call the function', async () => {
      const benchedFunction = bench(myFunction);
      const res = await benchedFunction(1, 2, 3);
      assert.equal(res, 6);
    });
  });
});
