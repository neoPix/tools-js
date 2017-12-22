import { assert } from 'chai';
import random from '../../src/string/random';

describe('string/random', () => {
  it('should be default length', () => {
    const rnd = random();
    assert.isString(rnd);
    assert.equal(rnd.length, 8);
  });
  it('should be a specified length', () => {
    const rnd = random(12);
    assert.isString(rnd);
    assert.equal(rnd.length, 12);
  });
});
