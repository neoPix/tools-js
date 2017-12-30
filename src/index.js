// array
import asArray from './array/asArray';
import mixMap from './array/mixMap';
// async
import executionDuration from './async/executionDuration';
import promisify from './async/promisify';
import sleep from './async/sleep';
import retry from './async/retry';
// patterns
import command from './patterns/command';
import commandBus from './patterns/commandBus';
// async
import cache from './cache/cache';
// dom
import event from './dom/event';
// math
import clamp from './math/clamp';
// random
import random from './string/random';
// tools
import required from './tools/required';
// value
import funcOrValue from './value/funcOrValue';

export default {
  // array
  asArray,
  mixMap,
  // async
  executionDuration,
  promisify,
  sleep,
  retry,
  // patterns
  command,
  commandBus,
  // cache
  cache,
  // dom
  event,
  // math
  clamp,
  // string
  random,
  // tools
  required,
  // value
  funcOrValue,
};
