import required from '../tools/required';
/**
 * Creates a cache manager instance
 * @param {Function} loader The loading method used to load data
 * @param {number} validity The duration for which the cache is valid
 * @returns {CacheManager} A cache management instance
 */
function cacheGenerator(loader = required('loader'), validity = Infinity) {
  const cache = new Map();
  const cacheManager = {
    /**
     * Returns an object from cache, creates on if empty
     * @param {*} key The key to the object in cache
     * @returns {*} The object in cache
     */
    get(key) {
      if (cache.has(key) === false || Date.now() >= cache.get(key).validity) {
        cache.set(key, {
          item: loader(key),
          validity: Date.now() + validity,
        });
      }
      return cache.get(key).item;
    },
    /**
     * Removes an object from cache using it's key
     * @param {*} key The key to the object in cache
     * @returns {undefined}
     */
    remove(key) {
      cache.delete(key);
    },
    /**
     * Clears all item from the cache
     * @returns {undefined}
     */
    clear() {
      cache.clear();
    },
    /**
     * @returns {int} The size of the cache
     */
    get size() {
      return cache.size;
    },
  };

  Object.freeze(cacheManager);

  return cacheManager;
}

export default cacheGenerator;
