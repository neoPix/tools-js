import { assert } from 'chai';
import required from '../../src/tools/required';

describe('tools/required', () => {
  it('should throw an error', () => {
    assert.throws(() => {
      required('test');
    }, 'test is required');
  });
  it('should throw an error on undefined field name', () => {
    assert.throws(() => {
      required();
    }, 'field is required');
  });
});
