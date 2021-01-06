import { c as createCommonjsModule, b as commonjsRequire, a as commonjsGlobal, r as react } from './index-c314220c.js';

/* SNOWPACK PROCESS POLYFILL (based on https://github.com/calvinmetcalf/node-process-es6) */
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== 'undefined') {
    globalContext = window;
} else if (typeof self !== 'undefined') {
    globalContext = self;
} else {
    globalContext = {};
}
if (typeof globalContext.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance$1 = globalContext.performance || {};
var performanceNow =
  performance$1.now        ||
  performance$1.mozNow     ||
  performance$1.msNow      ||
  performance$1.oNow       ||
  performance$1.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance$1)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: {"NODE_ENV":"production"},
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

var es6Promise = createCommonjsModule(function (module, exports) {
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 module.exports = factory() ;
}(commonjsGlobal, (function () {
function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && typeof commonjsRequire === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) ; else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof commonjsGlobal !== 'undefined') {
    local = commonjsGlobal;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));




});

var auto = es6Promise.polyfill();

/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */

function assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));
    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}

function polyfill() {
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

var es6ObjectAssign = {
  assign: assign,
  polyfill: polyfill
};

es6ObjectAssign.polyfill();

!function(){function r(r){for(var t=[],e=0;e<r.length;e++)t.push(r[e]);return t}String.prototype.codePointAt||!function(){var r=function(){try{var r={},t=Object.defineProperty,e=t(r,r,r)&&t;}catch(r){}return e}(),t=function(r){if(null==this)throw TypeError();var t=this+"",e=t.length,n=r?+r:0;if(n!=n&&(n=0),!(n<0||n>=e)){var o,i=t.charCodeAt(n);return i>=55296&&i<=56319&&e>n+1&&(o=t.charCodeAt(n+1),o>=56320&&o<=57343)?1024*(i-55296)+o-56320+65536:i}};r?r(String.prototype,"codePointAt",{value:t,configurable:!0,writable:!0}):String.prototype.codePointAt=t;}(),String.prototype.repeat||!function(){var r=function(){try{var r={},t=Object.defineProperty,e=t(r,r,r)&&t;}catch(r){}return e}(),t=function(r){if(null==this)throw TypeError();var t=this+"",e=r?+r:0;if(e!=e&&(e=0),e<0||e==1/0)throw RangeError();for(var n="";e;)e%2==1&&(n+=t),e>1&&(t+=t),e>>=1;return n};r?r(String.prototype,"repeat",{value:t,configurable:!0,writable:!0}):String.prototype.repeat=t;}(),String.prototype.includes||!function(){var r={}.toString,t=function(){try{var r={},t=Object.defineProperty,e=t(r,r,r)&&t;}catch(r){}return e}(),e="".indexOf,n=function(t){if(null==this)throw TypeError();var n=this+"";if(t&&"[object RegExp]"==r.call(t))throw TypeError();var o=n.length,i=t+"",a=i.length,c=arguments.length>1?arguments[1]:void 0,u=c?+c:0;return u!=u&&(u=0),!(a+Math.min(Math.max(u,0),o)>o)&&e.call(n,i,u)!=-1};t?t(String.prototype,"includes",{value:n,configurable:!0,writable:!0}):String.prototype.includes=n;}(),String.prototype.startsWith||!function(){var r=function(){try{var r={},t=Object.defineProperty,e=t(r,r,r)&&t;}catch(r){}return e}(),t={}.toString,e=function(r){if(null==this)throw TypeError();var e=this+"";if(r&&"[object RegExp]"==t.call(r))throw TypeError();var n=e.length,o=r+"",i=o.length,a=arguments.length>1?arguments[1]:void 0,c=a?+a:0;c!=c&&(c=0);var u=Math.min(Math.max(c,0),n);if(i+u>n)return !1;for(var l=-1;++l<i;)if(e.charCodeAt(u+l)!=o.charCodeAt(l))return !1;return !0};r?r(String.prototype,"startsWith",{value:e,configurable:!0,writable:!0}):String.prototype.startsWith=e;}(),String.prototype.endsWith||!function(){var r=function(){try{var r={},t=Object.defineProperty,e=t(r,r,r)&&t;}catch(r){}return e}(),t={}.toString,e=function(r){if(null==this)throw TypeError();var e=this+"";if(r&&"[object RegExp]"==t.call(r))throw TypeError();var n=e.length,o=r+"",i=o.length,a=n;if(arguments.length>1){var c=arguments[1];void 0!==c&&(a=c?+c:0,a!=a&&(a=0));}var u=Math.min(Math.max(a,0),n),l=u-i;if(l<0)return !1;for(var h=-1;++h<i;)if(e.charCodeAt(l+h)!=o.charCodeAt(h))return !1;return !0};r?r(String.prototype,"endsWith",{value:e,configurable:!0,writable:!0}):String.prototype.endsWith=e;}(),String.fromCodePoint||!function(){var r=function(){try{var r={},t=Object.defineProperty,e=t(r,r,r)&&t;}catch(r){}return e}(),t=String.fromCharCode,e=Math.floor,n=function(r){var n,o,i=16384,a=[],c=-1,u=arguments.length;if(!u)return "";for(var l="";++c<u;){var h=+arguments[c];if(!isFinite(h)||h<0||h>1114111||e(h)!=h)throw RangeError("Invalid code point: "+h);h<=65535?a.push(h):(h-=65536,n=(h>>10)+55296,o=h%1024+56320,a.push(n,o)),(c+1==u||a.length>i)&&(l+=t.apply(null,a),a.length=0);}return l};r?r(String,"fromCodePoint",{value:n,configurable:!0,writable:!0}):String.fromCodePoint=n;}(),Object.defineProperty(String,"raw",{configurable:!0,enumerable:!1,writable:!0,value:function(t,e){var n;t=null!=t?t:{},e=arguments.length>1?r(arguments).slice(1):[];try{n=r(t.raw);}catch(r){throw new TypeError("Cannot convert undefined or null to object")}return n.map(function(r,n){return t.raw.length<=n?r:null!=e[n-1]?e[n-1]+r:r}).join("")}});}();

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */

(function(window, document) {


// Exits early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }
  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}(window, document));

// Polyfill Array.findIndex
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return k.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return k;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return -1.
            return -1;
        }
    });
}

// Polyfill Array.find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var i = this.findIndex(predicate);
            if (i === -1) {
                return undefined;
            }
            else {
                return this[i];
            }
        }
    });
}

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
var global = window;
if (typeof global.false === "undefined") {
    global.false = false;
}
// Polyfill MAX_SAFE_INTEGER and MIN_SAFE_INTEGER
if (!Number.MAX_SAFE_INTEGER) {
    Number.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
}
if (!Number.MIN_SAFE_INTEGER) {
    Number.MIN_SAFE_INTEGER = -(Math.pow(2, 53) - 1);
}

/** SNOWPACK INJECT STYLE: azure-devops-ui/Core/core.css */
function __snowpack__injectStyle(css) {
  const headEl = document.head || document.getElementsByTagName('head')[0];
  const styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  if (styleEl.styleSheet) {
    styleEl.styleSheet.cssText = css;
  } else {
    styleEl.appendChild(document.createTextNode(css));
  }
  headEl.appendChild(styleEl);
}
__snowpack__injectStyle("/**\r\n * User-agent style overrides required for the components to function correctly.\r\n */\n* {\n  box-sizing: inherit; }\n\nbody {\n  box-sizing: border-box; }\n\n/* Layout styles */\n.absolute-fill {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.absolute {\n  position: absolute; }\n\n.relative {\n  position: relative; }\n\n.no-events {\n  pointer-events: none; }\n\n.scroll-hidden {\n  overflow: hidden; }\n\n.v-scroll-hidden {\n  overflow-y: hidden; }\n\n.h-scroll-hidden {\n  overflow-x: hidden; }\n\n.scroll-auto {\n  overflow: auto; }\n  @media screen and (max-width: 600px) {\n    .scroll-auto {\n      -webkit-overflow-scrolling: touch; } }\n\n.v-scroll-auto {\n  overflow-y: auto; }\n  @media screen and (max-width: 600px) {\n    .v-scroll-auto {\n      -webkit-overflow-scrolling: touch; } }\n\n.h-scroll-auto {\n  overflow-x: auto; }\n  @media screen and (max-width: 600px) {\n    .h-scroll-auto {\n      -webkit-overflow-scrolling: touch; } }\n\n.full-size {\n  display: flex;\n  flex-grow: 1;\n  overflow: hidden; }\n\n/* \r\n * Flex styles - applied to the flexbox (flex container).\r\n */\n.flex-column {\n  display: flex;\n  flex-direction: column; }\n\n.flex-row {\n  display: flex;\n  flex-direction: row; }\n\n.inline-flex-column {\n  display: inline-flex;\n  flex-direction: column; }\n\n.inline-flex-row {\n  display: inline-flex;\n  flex-direction: row; }\n\n.flex-center {\n  align-items: center; }\n\n.flex-end {\n  align-items: flex-end; }\n\n.flex-start {\n  align-items: flex-start; }\n\n.flex-stretch {\n  align-items: stretch; }\n\n.flex-baseline {\n  align-items: baseline; }\n\n.justify-start {\n  justify-content: flex-start; }\n\n.justify-center {\n  justify-content: center; }\n\n.justify-end {\n  justify-content: flex-end; }\n\n.justify-space-between {\n  justify-content: space-between; }\n\n.flex-wrap {\n  flex-wrap: wrap; }\n\n/* \r\n * Flex styles - appled to the flex-items (flexbox children).\r\n */\n.flex-grow {\n  flex-grow: 1; }\n\n.flex-noshrink {\n  flex-shrink: 0; }\n\n.flex-self-center {\n  align-self: center; }\n\n.flex-self-end {\n  align-self: flex-end; }\n\n.flex-self-start {\n  align-self: flex-start; }\n\n.flex-self-stretch {\n  align-self: stretch; }\n\n/*\r\n * FlexBox semantic styles.\r\n */\n.flex-cell {\n  align-items: center;\n  align-self: stretch;\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  padding: 0;\n  position: relative; }\n\n/* Typography styles */\n.title-l {\n  font-size: 1.75rem;\n  font-weight: bold;\n  letter-spacing: -0.04em; }\n\n.title-m {\n  font-size: 1.3125rem;\n  font-weight: 600;\n  letter-spacing: -0.02em; }\n\n.title-s {\n  font-size: 1.0625rem;\n  font-weight: 600; }\n\n.title-xs {\n  font-size: 0.9375rem;\n  font-weight: 600; }\n\n.body-xl {\n  font-size: 1.0625rem; }\n\n.body-l {\n  font-size: 0.9375rem; }\n\n.body-m {\n  font-size: 0.875rem; }\n\n.body-s {\n  font-size: 0.75rem; }\n\n.body-xs {\n  font-size: 0.6875rem; }\n\n.monospaced-m {\n  font-family: Menlo, Consolas, Courier New, monospace;\n  font-size: 0.8125rem; }\n\n.monospaced-s {\n  font-family: Menlo, Consolas, Courier New, monospace;\n  font-size: 0.75rem; }\n\n.monospaced-xs {\n  font-family: Menlo, Consolas, Courier New, monospace;\n  font-size: 0.6875rem; }\n\n/* Font size styles - these can be used to override typography styles */\n.font-size-xxs {\n  font-size: 0.5625rem; }\n\n.font-size-xs {\n  font-size: 0.625rem; }\n\n.font-size-s {\n  font-size: 0.6875rem; }\n\n.font-size {\n  font-size: 0.75rem; }\n\n.font-size-ms {\n  font-size: 0.8125rem; }\n\n.font-size-m {\n  font-size: 0.875rem; }\n\n.font-size-mm {\n  font-size: 0.9375rem; }\n\n.font-size-ml {\n  font-size: 1rem; }\n\n.font-size-l {\n  font-size: 1.125rem; }\n\n.font-size-ll {\n  font-size: 1.5rem; }\n\n.font-size-lll {\n  font-size: 1.75rem; }\n\n.font-size-xl {\n  font-size: 2.25rem; }\n\n.font-size-xxl {\n  font-size: 2.5rem; }\n\n.font-size-xxxl {\n  font-size: 3.5rem; }\n\n.font-size-xxxxl {\n  font-size: 4.5rem; }\n\n/* Font weight styles - these can be used to override typography styles */\n.font-weight-light {\n  font-weight: 200; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-semibold {\n  font-weight: 600; }\n\n.font-weight-heavy {\n  font-weight: bold; }\n\n.secondary-text {\n  color: rgba(0, 0, 0, .55);\n  color: var(--text-secondary-color,rgba(0, 0, 0, .55)); }\n  @media screen and (-ms-high-contrast: active) {\n    .secondary-text {\n      color: graytext; } }\n\n.monospaced-text {\n  font-family: Menlo, Consolas, Courier New, monospace; }\n\n.error-text {\n  color: rgba(218, 10, 0, 1);\n  color: var(--status-error-text,rgba(218, 10, 0, 1)); }\n\n/* Theme-related styles */\n.themed {\n  background-color: rgba(255, 255, 255, 1);\n  background-color: var(--background-color,rgba(255, 255, 255, 1));\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9)); }\n\n.v-align-middle {\n  vertical-align: middle; }\n\n/* Depth styles */\n.depth-0 {\n  box-shadow: 0 0 0 0 transparent; }\n\n.depth-4 {\n  box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, .132), 0 0.3px 0.9px 0 rgba(0, 0, 0, .108);\n  box-shadow: 0 1.6px 3.6px 0 var(--callout-shadow-color,rgba(0, 0, 0, .132)), 0 0.3px 0.9px 0 var(--callout-shadow-secondary-color,rgba(0, 0, 0, .108)); }\n\n.depth-8 {\n  box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, .132), 0 0.6px 1.8px 0 rgba(0, 0, 0, .108);\n  box-shadow: 0 3.2px 7.2px 0 var(--callout-shadow-color,rgba(0, 0, 0, .132)), 0 0.6px 1.8px 0 var(--callout-shadow-secondary-color,rgba(0, 0, 0, .108)); }\n\n.depth-16 {\n  box-shadow: 0 6.4px 14.4px 0 rgba(0, 0, 0, .132), 0 1.2px 3.6px 0 rgba(0, 0, 0, .108);\n  box-shadow: 0 6.4px 14.4px 0 var(--callout-shadow-color,rgba(0, 0, 0, .132)), 0 1.2px 3.6px 0 var(--callout-shadow-secondary-color,rgba(0, 0, 0, .108)); }\n\n.depth-64 {\n  box-shadow: 0 25.6px 57.6px 0 rgba(0, 0, 0, .132), 0 4.8px 14.4px 0 rgba(0, 0, 0, .108);\n  box-shadow: 0 25.6px 57.6px 0 var(--callout-shadow-color,rgba(0, 0, 0, .132)), 0 4.8px 14.4px 0 var(--callout-shadow-secondary-color,rgba(0, 0, 0, .108)); }\n\n/* Sub layer styles */\n.sub-layer {\n  z-index: 10; }\n\n/* General cursor styles */\n.cursor-default {\n  cursor: default; }\n\n.cursor-pointer {\n  cursor: pointer; }\n\n/* General text styles */\n.text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.white-space-nowrap {\n  white-space: nowrap; }\n\n.word-break {\n  word-break: break-all;\n  word-break: break-word; }\n\n.selectable-text {\n  user-select: text;\n  cursor: text; }\n\n/* General link styles */\n.link-icon {\n  padding: 2px 2px; }\n\n.link-text {\n  padding: 0 2px; }\n\n.no-outline {\n  outline: none; }\n\n/* General icon styles */\n.icon-margin {\n  margin-right: 6px; }\n\n.icon-large-margin {\n  margin-right: 12px; }\n\n.contributed-icon-image {\n  background-size: contain; }\n  .contributed-icon-image.non-themed {\n    filter: none;\n    filter: var(--third-party-icon-filter,none); }\n\n/* \r\n    Padding / Margin styles \r\n    \r\n    The no/-0 styles have !important because they are intended to remove padding / Margin.\r\n    They shouldn't be added as the default case, only when trying to reset the padding / Margin \r\n    that a different selector with a single level of selectivity has added.\r\n*/\n.shadow-padding {\n  margin: -4px;\n  padding: 4px; }\n\n.margin-0,\n.no-margin {\n  margin: 0px !important; }\n\n.margin-4 {\n  margin: 4px; }\n\n.margin-8 {\n  margin: 8px; }\n\n.margin-16 {\n  margin: 16px; }\n\n.margin-bottom-4 {\n  margin-bottom: 4px; }\n\n.margin-bottom-8 {\n  margin-bottom: 8px; }\n\n.margin-bottom-16 {\n  margin-bottom: 16px; }\n\n.margin-horizontal-0,\n.no-h-margin {\n  margin-left: 0px !important;\n  margin-right: 0px !important; }\n\n.margin-horizontal-4 {\n  margin-left: 4px;\n  margin-right: 4px; }\n\n.margin-horizontal-8 {\n  margin-left: 8px;\n  margin-right: 8px; }\n\n.margin-horizontal-16 {\n  margin-left: 16px;\n  margin-right: 16px; }\n\n.margin-horizontal-20 {\n  margin-left: 20px;\n  margin-right: 20px; }\n\n.margin-left-4 {\n  margin-left: 4px; }\n\n.margin-left-8 {\n  margin-left: 8px; }\n\n.margin-left-16 {\n  margin-left: 16px; }\n\n.margin-right-4 {\n  margin-right: 4px; }\n\n.margin-right-8 {\n  margin-right: 8px; }\n\n.margin-right-16 {\n  margin-right: 16px; }\n\n.margin-top-4 {\n  margin-top: 4px; }\n\n.margin-top-8 {\n  margin-top: 8px; }\n\n.margin-top-16 {\n  margin-top: 16px; }\n\n.margin-vertical-0,\n.no-v-margin {\n  margin-bottom: 0px !important;\n  margin-top: 0px !important; }\n\n.margin-vertical-4 {\n  margin-bottom: 4px;\n  margin-top: 4px; }\n\n.margin-vertical-8 {\n  margin-bottom: 8px;\n  margin-top: 8px; }\n\n.margin-vertical-16 {\n  margin-bottom: 16px;\n  margin-top: 16px; }\n\n.margin-vertical-20 {\n  margin-bottom: 20px;\n  margin-top: 20px; }\n\n.padding-0,\n.no-padding {\n  padding: 0px !important; }\n\n.padding-4 {\n  padding: 4px; }\n\n.padding-8 {\n  padding: 8px; }\n\n.padding-16 {\n  padding: 16px; }\n\n.padding-bottom-0,\n.no-bottom-padding {\n  padding-bottom: 0px !important; }\n\n.padding-bottom-4 {\n  padding-bottom: 4px; }\n\n.padding-bottom-8 {\n  padding-bottom: 8px; }\n\n.padding-bottom-16 {\n  padding-bottom: 16px; }\n\n.padding-horizontal-0,\n.no-h-padding {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n\n.padding-horizontal-4 {\n  padding-left: 4px;\n  padding-right: 4px; }\n\n.padding-horizontal-8 {\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.padding-horizontal-16 {\n  padding-left: 16px;\n  padding-right: 16px; }\n\n.padding-horizontal-20 {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.padding-left-4 {\n  padding-left: 4px; }\n\n.padding-left-8 {\n  padding-left: 8px; }\n\n.padding-left-16 {\n  padding-left: 16px; }\n\n.padding-right-4 {\n  padding-right: 4px; }\n\n.padding-right-8 {\n  padding-right: 8px; }\n\n.padding-right-16 {\n  padding-right: 16px; }\n\n.padding-top-0,\n.no-top-padding {\n  padding-top: 0px !important; }\n\n.padding-top-4 {\n  padding-top: 4px; }\n\n.padding-top-8 {\n  padding-top: 8px; }\n\n.padding-top-16 {\n  padding-top: 16px; }\n\n.padding-vertical-0,\n.no-v-padding {\n  padding-bottom: 0px !important;\n  padding-top: 0px !important; }\n\n.padding-vertical-4 {\n  padding-bottom: 4px;\n  padding-top: 4px; }\n\n.padding-vertical-8 {\n  padding-bottom: 8px;\n  padding-top: 8px; }\n\n.padding-vertical-16 {\n  padding-bottom: 16px;\n  padding-top: 16px; }\n\n.padding-vertical-20 {\n  padding-bottom: 20px;\n  padding-top: 20px; }\n\n/* Rhythm styles */\n.rhythm-horizontal-4 > :not(:first-child) {\n  margin-left: 4px; }\n\n.rhythm-horizontal-8 > :not(:first-child) {\n  margin-left: 8px; }\n\n.rhythm-horizontal-16 > :not(:first-child) {\n  margin-left: 16px; }\n\n.rhythm-vertical-4 > :not(:first-child) {\n  margin-top: 4px; }\n\n.rhythm-vertical-8 > :not(:first-child) {\n  margin-top: 8px; }\n\n.rhythm-vertical-16 > :not(:first-child) {\n  margin-top: 16px; }\n\n.rhythm-vertical-20 > :not(:first-child) {\n  margin-top: 20px; }\n\n.rhythm-vertical-24 > :not(:first-child) {\n  margin-top: 24px; }\n\n.rhythm-vertical-32 > :not(:first-child) {\n  margin-top: 32px; }\n\n/* \r\n    Visibility styles\r\n    NOTE - leave at the end of the file so they will override the general layout styles above.\r\n*/\n.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.hidden {\n  display: none; }\n\n.invisible {\n  visibility: hidden; }\n\n.rotate-180 {\n  transform: rotate(180deg); }\n\n.separator-line-top {\n  border-top:  1px solid;\n  border-top-color: rgba( 234, 234, 234 ,  1 );\n  border-top-color: rgba( var(--palette-neutral-8,234, 234, 234) ,  1 ); }\n\n.separator-line-bottom {\n  border-bottom:  1px solid;\n  border-bottom-color: rgba( 234, 234, 234 ,  1 );\n  border-bottom-color: rgba( var(--palette-neutral-8,234, 234, 234) ,  1 ); }\n\n.subtle-border {\n  border:  1px solid;\n  border-color: rgba( 234, 234, 234 ,  1 );\n  border-color: rgba( var(--palette-neutral-8,234, 234, 234) ,  1 ); }\n\n/*\r\n    Custom styles for shimmer effects on elements.\r\n*/\n.shimmer {\n  animation-duration: 4s;\n  animation-timing-function: ease-in-out;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  background: linear-gradient(to right, rgba( 244, 244, 244 ,  1 ) 0%, rgba( 234, 234, 234 ,  1 ) 50%, rgba( 244, 244, 244 ,  1 ) 100%) 0px 0px/90% 100% no-repeat rgba( 244, 244, 244 ,  1 );\n  background: linear-gradient(to right, rgba( var(--palette-neutral-4,244, 244, 244) ,  1 ) 0%, rgba( var(--palette-neutral-8,234, 234, 234) ,  1 ) 50%, rgba( var(--palette-neutral-4,244, 244, 244) ,  1 ) 100%) 0px 0px/90% 100% no-repeat rgba( var(--palette-neutral-4,244, 244, 244) ,  1 );\n  transition: opacity 200ms ease 0s; }\n\n@keyframes shimmer-wide {\n  0% {\n    background-position: -500px; }\n  100% {\n    background-position: 500px; } }\n\n@keyframes shimmer-thin {\n  0% {\n    background-position: -200px; }\n  100% {\n    background-position: 200px; } }\n\n.shimmer-line {\n  animation-name: shimmer-wide;\n  border-radius: 0.5em; }\n\n.shimmer-circle-small {\n  animation-name: shimmer-thin;\n  border-radius: 50%;\n  height: 1.3em;\n  margin-right: 4px;\n  width: 1.3em; }\n\n.shimmer-circle-large {\n  animation-name: shimmer-thin;\n  border-radius: 50%;\n  height: 2.3em;\n  margin-right: 4px;\n  width: 2.3em; }\n\n/*\r\n    Custom scrollbar support (only on Chrome)\r\n*/\n.custom-scrollbar {\n  scrollbar-color: rgba(0, 0, 0, 0.20) transparent;\n  scrollbar-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20)) transparent;\n  scrollbar-width: thin; }\n  .custom-scrollbar.scroll-auto-hide {\n    scrollbar-color: transparent transparent; }\n    .custom-scrollbar.scroll-auto-hide:hover {\n      scrollbar-color: rgba(0, 0, 0, 0.20) transparent;\n      scrollbar-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20)) transparent; }\n\n.custom-scrollbar::-webkit-scrollbar {\n  width: 18px;\n  height: 18px; }\n\n.custom-scrollbar::-webkit-scrollbar-thumb {\n  border: 6px solid transparent;\n  background: rgba(0, 0, 0, 0.20);\n  background: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20));\n  border-radius: 10px;\n  background-clip: padding-box; }\n\n.custom-scrollbar::-webkit-scrollbar-corner {\n  background: transparent; }\n\n.custom-scrollbar::-webkit-scrollbar-thumb:vertical {\n  min-height: 30px; }\n\n.custom-scrollbar::-webkit-scrollbar-thumb:horizontal {\n  min-width: 30px; }\n\n.custom-scrollbar.scroll-auto-hide::-webkit-scrollbar-thumb {\n  background: transparent;\n  background-clip: padding-box; }\n\n.custom-scrollbar.scroll-auto-hide:hover::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.20);\n  background: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20));\n  background-clip: padding-box; }\n\n.custom-scrollbar::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.30);\n  background: var(--palette-black-alpha-30,rgba(0, 0, 0, 0.30));\n  background-clip: padding-box; }\n\n.custom-scrollbar-hidden {\n  -ms-overflow-style: none;\n  scrollbar-width: none; }\n\n.custom-scrollbar-hidden::-webkit-scrollbar {\n  width: 0; }\n\n.grayscale {\n  filter: grayscale(100%); }\n");

/**
 * Set of KeyCodes that are used in the platform.
 */
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["backspace"] = 8] = "backspace";
    KeyCode[KeyCode["tab"] = 9] = "tab";
    KeyCode[KeyCode["enter"] = 13] = "enter";
    KeyCode[KeyCode["shift"] = 16] = "shift";
    KeyCode[KeyCode["ctrl"] = 17] = "ctrl";
    KeyCode[KeyCode["alt"] = 18] = "alt";
    KeyCode[KeyCode["pause"] = 19] = "pause";
    KeyCode[KeyCode["capsLock"] = 20] = "capsLock";
    KeyCode[KeyCode["escape"] = 27] = "escape";
    KeyCode[KeyCode["space"] = 32] = "space";
    KeyCode[KeyCode["pageUp"] = 33] = "pageUp";
    KeyCode[KeyCode["pageDown"] = 34] = "pageDown";
    KeyCode[KeyCode["end"] = 35] = "end";
    KeyCode[KeyCode["home"] = 36] = "home";
    KeyCode[KeyCode["leftArrow"] = 37] = "leftArrow";
    KeyCode[KeyCode["upArrow"] = 38] = "upArrow";
    KeyCode[KeyCode["rightArrow"] = 39] = "rightArrow";
    KeyCode[KeyCode["downArrow"] = 40] = "downArrow";
    KeyCode[KeyCode["delete"] = 46] = "delete";
    KeyCode[KeyCode["b"] = 66] = "b";
    KeyCode[KeyCode["i"] = 73] = "i";
    KeyCode[KeyCode["k"] = 75] = "k";
    KeyCode[KeyCode["t"] = 84] = "t";
    KeyCode[KeyCode["windowsKey"] = 91] = "windowsKey";
    KeyCode[KeyCode["macCommand"] = 91] = "macCommand";
    KeyCode[KeyCode["F10"] = 121] = "F10";
    KeyCode[KeyCode["numLock"] = 144] = "numLock";
    KeyCode[KeyCode["scrollLock"] = 145] = "scrollLock";
    KeyCode[KeyCode["comma"] = 188] = "comma";
})(KeyCode || (KeyCode = {}));
/**
 * Type guard function to determine if children are defined as a function
 * @param children (usually from this.props.children)
 */
function isFunctionalChildren(children) {
    return typeof children === "function";
}
/**
 * childCount is used to determine the number of defined renderable children within
 * a standard set of React.Children. This is different than React.Children.length
 * which includes children that are null or undefined.
 */
function childCount(children) {
    var childCount = 0;
    react.Children.forEach(children, function (child) {
        if (child) {
            childCount++;
        }
    });
    return childCount;
}
/**
 * getSafeId is designed to create a string from the input id that is safe for use
 * as the id attribute of a component. The ids appear in the global javscript namespace.
 * This means if you create an element and assign the "id" property to a value
 * the element is accessible by doing window.<id>. This causes problems when the
 * id of the element collides with other global objects. Using a SafeId adds a prefix
 * intended to avoid conflicts.
 *
 * This should be called anytime a DOM elements property is being set that refers to
 * the components id. This should not be called when passing the id as a prop to a
 * component. It is the components responsibility to make the Id safe when attaching
 * it to an element.
 *
 * This includes but is not limited to properties like:
 *  aria-controls, aria-describedby, aria-labelledby, id, htmlFor, ...
 *
 * @param id The root id that is being made "Safe".
 */
function getSafeId(id) {
    // querySelector won't select id's with .'s in them replace them with '-'.
    return id ? "__bolt-" + id.replace(/[^0-9A-Za-z_]/g, "-") : undefined;
}
/**
 * function that does nothing and accepts any set of arguments.
 */
function noop$1() { }
/**
 * Basic function for building a css classlist string from and array of classes, where
 * one of more of the arguments may be null or undefined.
 *
 * @param classes Array of strings the represents the css class list.
 *
 * @example css("base", "active", x === 42 && "optional") will return "base active optional" if x === 42 or "base active" otherwise
 */
function css() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes
        .filter(function (c) { return c; })
        .join(" ")
        .trim();
}
/**
 * Returns the set of parent elements with index 0 the root and the last
 * element is either the direct parent or itself based on includeSelf.
 *
 * @param element The element to get the parent element hierarchy from.
 * @param includeSelf Should the element supplied be included in the parent list.
 * @param rootElement Optional root element to stop processing
 * @param includeRoot Should the root element supplied be included in the parent list.
 */
function getParents(element, includeSelf, rootElement, includeRoot) {
    var parentElements = [];
    if (includeSelf) {
        parentElements.push(element);
    }
    while (element.parentElement && element.parentElement !== rootElement) {
        parentElements.splice(0, 0, element.parentElement);
        element = element.parentElement;
    }
    if (element.parentElement && includeRoot) {
        parentElements.splice(0, 0, element.parentElement);
    }
    return parentElements;
}
/**
 * ElementRelationship is used to define how two elements in the same
 * document are related in position to each other.
 */
var ElementRelationship;
(function (ElementRelationship) {
    ElementRelationship[ElementRelationship["Unrelated"] = 0] = "Unrelated";
    ElementRelationship[ElementRelationship["Before"] = 1] = "Before";
    ElementRelationship[ElementRelationship["After"] = 2] = "After";
    ElementRelationship[ElementRelationship["Child"] = 3] = "Child";
    ElementRelationship[ElementRelationship["Parent"] = 4] = "Parent";
})(ElementRelationship || (ElementRelationship = {}));
/**
 * getRelationship returns the relationship of the two specified elements.
 *
 * @param element1
 * @param element2
 */
function getRelationship(element1, element2) {
    // If the second element is a child of the first element, then element1 occurs before element2.
    if (element1.contains(element2)) {
        return ElementRelationship.Parent;
    }
    // If the first element is a child of the second element, then element1 occurs after element2.
    if (element2.contains(element1)) {
        return ElementRelationship.Child;
    }
    // Retrieve the parents of both the elements.
    var parents1 = getParents(element1, true);
    var parents2 = getParents(element2, true);
    for (var elementIndex = 0;; elementIndex++) {
        if (parents1[elementIndex] !== parents2[elementIndex]) {
            var siblings = parents1[elementIndex - 1].children;
            for (var siblingIndex = 0; siblingIndex < siblings.length; siblingIndex++) {
                if (siblings[siblingIndex] === parents1[elementIndex]) {
                    return ElementRelationship.Before;
                }
                if (siblings[siblingIndex] === parents2[elementIndex]) {
                    return ElementRelationship.After;
                }
            }
        }
    }
}
/**
 * shimRef is used to acquire a React Ref from a child component. If the child
 * has an existing ref, it will return the existing ref, if not it will
 * create a new one.
 */
function shimRef(child) {
    // @HACK: This uses an internal property on the created element which is the
    //  forwarded ref property of the element. If React ever changes the implementation
    //  removing this property this code will need to be updated.
    // @NOTE: The ref MUST be a React.createRef if the a ref property is specified,
    //  otherwise we will not be able to share the ref.
    var ref = child.ref;
    // If no ref was created by the element owner we will add one.
    if (!ref) {
        ref = react.createRef();
    }
    else {
        // @DEBUG: Ensure the ref is a React.createRef by validated the current property
        if (!ref.hasOwnProperty("current")) {
            throw Error("Children of a focus zone MUST use React.createRef to obtain child references");
        }
        // @DEBUG
    }
    return ref;
}
var focusVisible = false;
/**
 * Determine whether or not focus is currently visible to the user. This generally
 * means the user is using the keyboard to manage focus instead of the mouse.
 */
function getFocusVisible() {
    return focusVisible;
}
/**
 * Make sure the focus treatment is enabled and disabled based on
 * the state of mouse and keyboard usage.
 */
function setFocusVisible(visible) {
    if ((focusVisible = visible) === true) {
        document.body && document.body.classList.add("bolt-focus-visible");
    }
    else {
        document.body && document.body.classList.remove("bolt-focus-visible");
    }
}
/* Setup the set of non-focus keys, when these are pressed it doesnt start showing focus treatment */
var nonFocusKeys = new Array(255);
nonFocusKeys[KeyCode.alt] = true;
nonFocusKeys[KeyCode.capsLock] = true;
nonFocusKeys[KeyCode.ctrl] = true;
nonFocusKeys[KeyCode.numLock] = true;
nonFocusKeys[KeyCode.pause] = true;
nonFocusKeys[KeyCode.scrollLock] = true;
nonFocusKeys[KeyCode.shift] = true;
nonFocusKeys[KeyCode.windowsKey] = true;
document.addEventListener("keydown", function (event) {
    if (!nonFocusKeys[event.which]) {
        setFocusVisible(true);
    }
}, true);
var mouseCapture;
// MouseCaptureFunction is the global mouse handler we use to trap events and forward
// them to the current capture if one exists.
var mouseCaptureFunction = function (event) {
    // Track the position of the mouse as it moves.
    Mouse.position.x = event.clientX;
    Mouse.position.y = event.clientY;
    // Notify the mouse capture of the mouse movement and mouseup if one is signed up.
    if (mouseCapture && mouseCapture.callback && mouseCapture.button === event.button) {
        mouseCapture.callback(event);
        if (event.type === "mouseup") {
            Mouse.releaseCapture(mouseCapture.callback);
        }
    }
};
var Mouse = {
    position: {
        x: 0,
        y: 0
    },
    releaseCapture: function releaseCapture(callback) {
        if (mouseCapture && mouseCapture.callback === callback) {
            mouseCapture = undefined;
        }
    },
    setCapture: function setCapture(callback, button) {
        if (button === void 0) { button = 0; }
        // Before starting a new capture, we will release the current capture.
        if (mouseCapture) {
            Mouse.releaseCapture(mouseCapture.callback);
        }
        // Update the mouseCapture to the new capture.
        mouseCapture = { button: button, callback: callback };
    }
};
document.addEventListener("mousemove", mouseCaptureFunction);
document.addEventListener("mouseup", mouseCaptureFunction);
document.addEventListener("mousedown", function (event) {
    // Screen readers on scan mode trigger some key strokes as Mouse events.
    // We can easily identify those events because they have no coordinates.
    if (event.button === 0 &&
        event.clientX === 0 &&
        event.clientY === 0 &&
        event.screenX === 0 &&
        event.screenY === 0 &&
        event.pageX === 0 &&
        event.pageY === 0) {
        return;
    }
    setFocusVisible(false);
}, true);
var touchCapture;
// touchCaptureFunction is the global touch handler we use to trap events and forward
// them to the current capture if one exists.
var touchCaptureFunction = function (event) {
    var touch = event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event.touches[0];
    // Track the position of the touch as it moves.
    Touch.position.x = touch.clientX;
    Touch.position.y = touch.clientY;
    // Notify the touch capture of the touch movement and touchend if one is signed up.
    if (touchCapture && touchCapture.callback) {
        touchCapture.callback(event);
        if (event.type === "touchend") {
            Touch.releaseCapture(touchCapture.callback);
        }
    }
};
/**
 * Currently only basic touch support - assumes a single touch
 * throughout the touch operation.
 */
var Touch = {
    position: {
        x: 0,
        y: 0
    },
    releaseCapture: function releaseCapture(callback) {
        if (touchCapture && touchCapture.callback === callback) {
            touchCapture = undefined;
        }
    },
    setCapture: function setCapture(callback) {
        // Before starting a new capture, we will release the current capture.
        if (touchCapture) {
            Touch.releaseCapture(touchCapture.callback);
        }
        // Update the touchCapture to the new capture.
        touchCapture = { callback: callback };
    }
};
document.addEventListener("touchmove", touchCaptureFunction);
document.addEventListener("touchend", touchCaptureFunction);
document.addEventListener("touchstart", function () { return setFocusVisible(false); }, true);

/**
 * Maximum number of messages to have in the containers that announce() uses.
 */
var MaxAnnounceChildren = 1;
/**
 * Maximum number of containers for announce() to have per assertiveness level.
 */
var MaxAnnounceContainers = 10;
/**
 * ID of the container for the announce() containers.
 */
var ParentContainerId = "utils-accessibility-announce";
var nextId = 0;
/**
 * Gets the parent container for all the announce containers.
 */
function getAnnounceContainer() {
    var container = document.getElementById(ParentContainerId);
    if (!container) {
        container = document.createElement("div");
        container.id = ParentContainerId;
        container.classList.add("visually-hidden");
        document.body.appendChild(container);
    }
    return container;
}
/**
 * Causes screen readers to read the given message.
 * @param message
 * @param assertive if true, the screen reader will read the announcement immediately, instead of waiting for "the next graceful opportunity"
 */
function announce(message, assertive, pause) {
    if (assertive === void 0) { assertive = false; }
    if (pause === void 0) { pause = 100; }
    if (!message) {
        return;
    }
    var assertiveness = assertive ? "assertive" : "polite";
    var parentContainer = getAnnounceContainer();
    var containerList = parentContainer.getElementsByClassName(assertiveness);
    var container = (containerList.length > 0 ? containerList[containerList.length - 1] : null);
    if (!container || container.childElementCount >= MaxAnnounceChildren) {
        container = document.createElement("div");
        container.id = ParentContainerId + nextId++;
        container.setAttribute("aria-live", assertiveness);
        container.classList.add(assertiveness);
        container.setAttribute("aria-relevant", "additions");
        parentContainer.appendChild(container);
        // getElementsByClassName() returns a live list so the new container is already in this list
        if (containerList.length > MaxAnnounceContainers) {
            // remove old containers
            parentContainer.removeChild(containerList[0]);
        }
        window.setTimeout(function () {
            // live regions get announced on update not create, so wait a bit and then update
            announce(message, assertive);
        }, pause);
    }
    else {
        var child = document.createElement("p");
        child.textContent = message;
        container.appendChild(child);
        // toggling the visibility like this seems to help Edge
        container.style.visibility = "hidden";
        container.style.visibility = "visible";
    }
}

export { ElementRelationship as E, KeyCode as K, Mouse as M, getRelationship as a, getFocusVisible as b, css as c, childCount as d, announce as e, setFocusVisible as f, getSafeId as g, isFunctionalChildren as i, noop$1 as n, shimRef as s };
