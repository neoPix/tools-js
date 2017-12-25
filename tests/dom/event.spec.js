import { assert } from 'chai';
import event from '../../src/dom/event';

describe('dom/event', () => {
  describe('errors', () => {
    it('should throw on no params', () => {
      assert.throws(() => {
        event();
      }, 'elms is required');
    });
    it('should throw on first parameter', () => {
      assert.throws(() => {
        event(123);
      }, 'evts is required');
    });
    it('should throw on second parameter', () => {
      assert.throws(() => {
        event(123, 456);
      }, 'cb is required');
    });
  });
  describe('on action', () => {
    const links = [
      document.createElement('a'),
      document.createElement('a'),
    ];
    it('should return a function', () => {
      assert.isFunction(event([], 'click', () => {}));
    });
    it('should add and remove events', () => {
      let addCount = 0;
      let removeCount = 0;
      links.forEach((element) => {
        Object.assign(element, {
          addEventListener() {
            addCount += 1;
          },
          removeEventListener() {
            removeCount += 1;
          },
        });
      });
      const removeEvents = event(links, 'click', () => {});
      assert.isFunction(removeEvents);
      assert.equal(addCount, 2);
      assert.equal(removeCount, 0);
      removeEvents();
      assert.equal(addCount, 2);
      assert.equal(removeCount, 2);
    });
  });
});
