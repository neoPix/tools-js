import { assert } from 'chai';
import Emitter from '../../src/patterns/emitter';

describe('patterns/emitter', () => {
  it('should create an new instance', () => {
    const instance = new Emitter();
    assert.isObject(instance);
    assert.property(instance, 'on');
    assert.property(instance, 'off');
    assert.property(instance, 'emit');
    assert.property(instance, 'addEventListener');
    assert.property(instance, 'removeEventListener');

    assert.isFunction(instance.on);
    assert.isFunction(instance.off);
    assert.isFunction(instance.emit);

    assert.equal(instance.on, instance.addEventListener);
    assert.equal(instance.off, instance.removeEventListener);
  });
  it('should create an new instance with no new', () => {
    const instance = Emitter();
    assert.isObject(instance);
    assert.property(instance, 'on');
    assert.property(instance, 'off');
    assert.property(instance, 'emit');
    assert.property(instance, 'addEventListener');
    assert.property(instance, 'removeEventListener');

    assert.isFunction(instance.on);
    assert.isFunction(instance.off);
    assert.isFunction(instance.emit);

    assert.equal(instance.on, instance.addEventListener);
    assert.equal(instance.off, instance.removeEventListener);
  });
  it('should manage inheritance', () => {
    /**
     * Some test class
     */
    class InheritedEmitter extends Emitter {}
    const instance = new InheritedEmitter();
    assert.isObject(instance);
    assert.property(instance, 'on');
    assert.property(instance, 'once');
    assert.property(instance, 'off');
    assert.property(instance, 'emit');
    assert.property(instance, 'addEventListener');
    assert.property(instance, 'removeEventListener');

    assert.isFunction(instance.on);
    assert.isFunction(instance.once);
    assert.isFunction(instance.off);
    assert.isFunction(instance.emit);

    assert.equal(instance.on, instance.addEventListener);
    assert.equal(instance.off, instance.removeEventListener);
  });
  it('should register events', () => {
    const instance = new Emitter();
    assert.throws(() => {
      instance.on();
    }, 'eventName is required');
    assert.throws(() => {
      instance.on('test');
    }, 'cb is required');
    const unregister = instance.on('test', () => {});
    instance.on('test', () => {});
    assert.isFunction(unregister);
  });
  it('should emit events', () => {
    let count = 0;
    const instance = new Emitter();
    instance.emit('test');
    const unregister = instance.on('test', () => {
      count += 1;
    });
    assert.throws(() => {
      instance.emit();
    }, 'eventName is required');
    instance.emit('test');
    assert.equal(count, 1);
  });
  it('should register once', () => {
    let count = 0;
    const instance = new Emitter();
    assert.throws(() => {
      instance.once();
    }, 'eventName is required');
    assert.throws(() => {
      instance.once('test');
    }, 'cb is required');
    const unregister = instance.once('test', () => {
      count += 1;
    });
    instance.emit('test');
    instance.emit('test');
    assert.equal(count, 1);
  });
  it('should unregister', () => {
    let count = 0;
    const instance = new Emitter();
    assert.throws(() => {
      instance.off();
    }, 'eventName is required');
    assert.throws(() => {
      instance.off('test');
    }, 'cb is required');
    const unregister = instance.once('test', () => {
      count += 1;
    });
    unregister();
    instance.emit('test');
    assert.equal(count, 0);
  });
  it('should unregister event if not registerd yet', () => {
    const instance = new Emitter();
    instance.off('test', () => {});
  });
  it('should register once the same function', () => {
    let count = 0;
    const instance = new Emitter();
    const func = () => { count += 1; };
    instance.on('test', func);
    instance.on('test', func);
    instance.emit('test');
    assert.equal(count, 1);
    instance.off('test', func);
    instance.emit('test');
    assert.equal(count, 1);
  });
  it('should unregister only one listener', () => {
    const instance = new Emitter();
    const unregister1 = instance.on('test', () => {});
    const unregister2 = instance.on('test', () => {});
    unregister1();
    unregister2();
  });
});
