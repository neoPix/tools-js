import { assert } from 'chai';
import noop from '../../src/tools/noop';

describe('tools/required', () => {
  it('should be callable', () => {
    const result = noop();
    assert.isUndefined(result);
  });
});
