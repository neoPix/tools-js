import { assert } from 'chai';
import funcOrValue from '../../src/value/funcOrValue';

describe('value/funcOrValue', () => {
  it('should throw on no value', () => {
    assert.throws(() => {
      funcOrValue();
    });
  });
  it('should get a value', () => {
    const value = {};
    const result = funcOrValue(value);
    assert.equal(value, result);
  });
  it('should get a value out of a function', () => {
    const value = {};
    const result = funcOrValue(() => value);
    assert.equal(value, result);
  });
});
