(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/phitien/apphub/node_modules/babel-runtime/core-js/array/from.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/core-js/get-iterator.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/assign.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/create.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/define-property.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/object/get-prototype-of.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/keys.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/object/keys.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/set-prototype-of.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/core-js/symbol.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/core-js/symbol/iterator.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/define-property.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"../core-js/object/assign":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/assign.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/create.js","../core-js/object/set-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/set-prototype-of.js","../helpers/typeof":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/typeof.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/helpers/objectWithoutProperties.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/typeof.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/helpers/toArray.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};
},{"../core-js/array/from":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/array/from.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/helpers/toConsumableArray.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"../core-js/array/from":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/array/from.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/helpers/typeof.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/symbol.js","../core-js/symbol/iterator":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/symbol/iterator.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js":[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js","../../modules/es6.array.from":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js","../../modules/es6.string.iterator":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js":[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js","../modules/es6.string.iterator":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js","../modules/web.dom.iterable":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js":[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.assign":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js":[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.create":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js":[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.define-property":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/object/get-prototype-of.js":[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.get-prototype-of.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/object/keys.js":[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.keys":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.keys.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js":[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.set-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js":[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.to-string":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js","../../modules/es6.symbol":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js","../../modules/es7.symbol.async-iterator":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js","../../modules/es7.symbol.observable":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js":[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js","../../modules/es6.string.iterator":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js","../../modules/web.dom.iterable":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js":[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js":[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-index.js","./_to-iobject":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js","./_to-length":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js":[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js","./_wks":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js":[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js":[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js","./_property-desc":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js":[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js","./_is-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js":[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js","./_object-keys":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js","./_object-pie":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js","./_ctx":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js","./_global":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js","./_hide":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js","./_object-dp":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js","./_property-desc":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js":[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js","./_dom-create":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js","./_fails":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js":[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js":[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js","./_wks":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js":[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js":[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js":[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js","./_object-create":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js","./_property-desc":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js","./_set-to-string-tag":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js","./_wks":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js":[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js","./_has":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js","./_hide":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js","./_iter-create":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js","./_iterators":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js","./_library":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js","./_object-gpo":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js","./_redefine":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js","./_set-to-string-tag":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js","./_wks":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js":[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js":[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js":[function(require,module,exports){
module.exports = {};
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_keyof.js":[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js","./_to-iobject":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js":[function(require,module,exports){
module.exports = true;
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js":[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js","./_has":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js","./_is-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js","./_object-dp":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js","./_uid":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js":[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js","./_iobject":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js","./_object-gops":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js","./_object-keys":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js","./_object-pie":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js","./_to-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js":[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js","./_dom-create":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js","./_enum-bug-keys":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js","./_html":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js","./_object-dps":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js","./_shared-key":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js","./_descriptors":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js","./_ie8-dom-define":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js","./_to-primitive":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js":[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js","./_descriptors":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js","./_object-dp":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js","./_object-keys":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js":[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js","./_has":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js","./_ie8-dom-define":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js","./_object-pie":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js","./_property-desc":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js","./_to-iobject":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js","./_to-primitive":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js":[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js","./_to-iobject":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js":[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js","./_object-keys-internal":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js":[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js":[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js","./_shared-key":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js","./_to-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js":[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js","./_has":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js","./_shared-key":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js","./_to-iobject":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js":[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js","./_object-keys-internal":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js":[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js":[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js","./_export":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js","./_fails":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js":[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js":[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object')
  , anObject = require('./_an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./_an-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js","./_ctx":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js","./_is-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js","./_object-gopd":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js":[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js","./_object-dp":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js","./_wks":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js":[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js","./_uid":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js":[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js":[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js","./_to-integer":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-index.js":[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js":[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js":[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js","./_iobject":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js":[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js":[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js":[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js":[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js","./_global":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js","./_library":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js","./_object-dp":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js","./_wks-ext":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js":[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js":[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js","./_shared":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js","./_uid":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js":[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js","./_core":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js","./_iterators":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js","./_wks":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js":[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js","./_core":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js","./core.get-iterator-method":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js":[function(require,module,exports){
'use strict';
var ctx            = require('./_ctx')
  , $export        = require('./_export')
  , toObject       = require('./_to-object')
  , call           = require('./_iter-call')
  , isArrayIter    = require('./_is-array-iter')
  , toLength       = require('./_to-length')
  , createProperty = require('./_create-property')
  , getIterFn      = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js","./_ctx":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js","./_export":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js","./_is-array-iter":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js","./_iter-call":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js","./_iter-detect":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js","./_to-length":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js","./_to-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js","./core.get-iterator-method":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js":[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js","./_iter-define":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js","./_iter-step":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js","./_iterators":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js","./_to-iobject":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js":[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js","./_object-assign":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js":[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js","./_object-create":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js":[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js","./_export":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js","./_object-dp":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.get-prototype-of.js":[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js","./_object-sap":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js","./_to-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.keys.js":[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js","./_object-sap":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js","./_to-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js":[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js","./_set-proto":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js":[function(require,module,exports){

},{}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js":[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js","./_string-at":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js":[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js","./_descriptors":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js","./_enum-keys":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js","./_export":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js","./_fails":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js","./_global":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js","./_has":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js","./_hide":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js","./_is-array":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js","./_keyof":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_keyof.js","./_library":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js","./_meta":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js","./_object-create":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js","./_object-dp":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js","./_object-gopd":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js","./_object-gopn":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js","./_object-gopn-ext":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js","./_object-gops":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js","./_object-keys":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js","./_object-pie":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js","./_property-desc":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js","./_redefine":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js","./_set-to-string-tag":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js","./_shared":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js","./_to-iobject":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js","./_to-primitive":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js","./_uid":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js","./_wks":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js","./_wks-define":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js","./_wks-ext":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js":[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js"}],"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js":[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js","./_hide":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js","./_iterators":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js","./_wks":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js","./es6.array.iterator":"/Users/phitien/apphub/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js"}],"/Users/phitien/apphub/node_modules/bowser/src/bowser.js":[function(require,module,exports){
/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (root, name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(name, definition)
  else root[name] = definition()
}(this, 'bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)os/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , samsungBrowser = /SamsungBrowser/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    } else if (/opr|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera'
        , opera: t
        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android'
        , samsungBrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      }
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/chrome.+? edge/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      }
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      }
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.windowsphone && !result.msedge && (android || result.silk)) {
      result.android = t
    } else if (!result.windowsphone && !result.msedge && iosdevice) {
      result[iosdevice] = t
      result.ios = t
    } else if (mac) {
      result.mac = t
    } else if (xbox) {
      result.xbox = t
    } else if (windows) {
      result.windows = t
    } else if (linux) {
      result.linux = t
    }

    // OS version extraction
    var osVersion = '';
    if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  return bowser
});

},{}],"/Users/phitien/apphub/node_modules/cookie/index.js":[function(require,module,exports){
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

},{}],"/Users/phitien/apphub/node_modules/fbjs/lib/emptyFunction.js":[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],"/Users/phitien/apphub/node_modules/fbjs/lib/emptyObject.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var emptyObject = {};

if ("production" !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
},{}],"/Users/phitien/apphub/node_modules/fbjs/lib/invariant.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if ("production" !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
},{}],"/Users/phitien/apphub/node_modules/fbjs/lib/shallowEqual.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;
},{}],"/Users/phitien/apphub/node_modules/fbjs/lib/warning.js":[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if ("production" !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
},{"./emptyFunction":"/Users/phitien/apphub/node_modules/fbjs/lib/emptyFunction.js"}],"/Users/phitien/apphub/node_modules/hyphenate-style-name/index.js":[function(require,module,exports){
'use strict';

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
    return string in cache
    ? cache[string]
    : cache[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

},{}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/Prefixer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// special flexbox specifications


var _prefixAll2 = require('./static/prefixAll');

var _prefixAll3 = _interopRequireDefault(_prefixAll2);

var _getBrowserInformation = require('./utils/getBrowserInformation');

var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);

var _getPrefixedKeyframes = require('./utils/getPrefixedKeyframes');

var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);

var _capitalizeString = require('./utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _sortPrefixedStyle = require('./utils/sortPrefixedStyle');

var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

var _prefixProps = require('./prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var _position = require('./plugins/position');

var _position2 = _interopRequireDefault(_position);

var _calc = require('./plugins/calc');

var _calc2 = _interopRequireDefault(_calc);

var _zoomCursor = require('./plugins/zoomCursor');

var _zoomCursor2 = _interopRequireDefault(_zoomCursor);

var _grabCursor = require('./plugins/grabCursor');

var _grabCursor2 = _interopRequireDefault(_grabCursor);

var _flex = require('./plugins/flex');

var _flex2 = _interopRequireDefault(_flex);

var _sizing = require('./plugins/sizing');

var _sizing2 = _interopRequireDefault(_sizing);

var _gradient = require('./plugins/gradient');

var _gradient2 = _interopRequireDefault(_gradient);

var _transition = require('./plugins/transition');

var _transition2 = _interopRequireDefault(_transition);

var _flexboxIE = require('./plugins/flexboxIE');

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = require('./plugins/flexboxOld');

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var plugins = [_position2.default, _calc2.default, _zoomCursor2.default, _grabCursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default,
// this must be run AFTER the flexbox specs
_flex2.default];

var Prefixer = function () {
  /**
   * Instantiante a new prefixer
   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
   * @param {string} keepUnprefixed - keeps unprefixed properties and values
   */

  function Prefixer() {
    var _this = this;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Prefixer);

    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

    this._userAgent = options.userAgent || defaultUserAgent;
    this._keepUnprefixed = options.keepUnprefixed || false;

    this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);

    // Checks if the userAgent was resolved correctly
    if (this._browserInfo && this._browserInfo.prefix) {
      // set additional prefix information
      this.cssPrefix = this._browserInfo.prefix.css;
      this.jsPrefix = this._browserInfo.prefix.inline;
      this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo);
    } else {
      this._usePrefixAllFallback = true;
      return false;
    }

    var data = this._browserInfo.browser && _prefixProps2.default[this._browserInfo.browser];
    if (data) {
      this._requiresPrefix = Object.keys(data).filter(function (key) {
        return data[key] >= _this._browserInfo.version;
      }).reduce(function (result, name) {
        result[name] = true;
        return result;
      }, {});
      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
    } else {
      this._usePrefixAllFallback = true;
    }
  }

  /**
   * Returns a prefixed version of the style object
   * @param {Object} styles - Style object that gets prefixed properties added
   * @returns {Object} - Style object with prefixed properties and values
   */


  _createClass(Prefixer, [{
    key: 'prefix',
    value: function prefix(styles) {
      var _this2 = this;

      // use prefixAll as fallback if userAgent can not be resolved
      if (this._usePrefixAllFallback) {
        return (0, _prefixAll3.default)(styles);
      }

      // only add prefixes if needed
      if (!this._hasPropsRequiringPrefix) {
        return styles;
      }

      Object.keys(styles).forEach(function (property) {
        var value = styles[property];
        if (value instanceof Object && !Array.isArray(value)) {
          // recurse through nested style objects
          styles[property] = _this2.prefix(value);
        } else {
          // add prefixes if needed
          if (_this2._requiresPrefix[property]) {
            styles[_this2.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
            if (!_this2._keepUnprefixed) {
              delete styles[property];
            }
          }
        }
      });

      Object.keys(styles).forEach(function (property) {
        [].concat(styles[property]).forEach(function (value) {
          // resolve plugins
          plugins.forEach(function (plugin) {
            // generates a new plugin interface with current data
            assignStyles(styles, plugin({
              property: property,
              value: value,
              styles: styles,
              browserInfo: _this2._browserInfo,
              prefix: {
                js: _this2.jsPrefix,
                css: _this2.cssPrefix,
                keyframes: _this2.prefixedKeyframes
              },
              keepUnprefixed: _this2._keepUnprefixed,
              requiresPrefix: _this2._requiresPrefix
            }), value, _this2._keepUnprefixed);
          });
        });
      });

      return (0, _sortPrefixedStyle2.default)(styles);
    }

    /**
     * Returns a prefixed version of the style object using all vendor prefixes
     * @param {Object} styles - Style object that gets prefixed properties added
     * @returns {Object} - Style object with prefixed properties and values
     */

  }], [{
    key: 'prefixAll',
    value: function prefixAll(styles) {
      return (0, _prefixAll3.default)(styles);
    }
  }]);

  return Prefixer;
}();

exports.default = Prefixer;


function assignStyles(base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var value = arguments[2];
  var keepUnprefixed = arguments[3];

  Object.keys(extend).forEach(function (property) {
    var baseValue = base[property];
    if (Array.isArray(baseValue)) {
      [].concat(extend[property]).forEach(function (val) {
        if (base[property].indexOf(val) === -1) {
          base[property].splice(baseValue.indexOf(value), keepUnprefixed ? 0 : 1, val);
        }
      });
    } else {
      base[property] = extend[property];
    }
  });
}
module.exports = exports['default'];
},{"./plugins/calc":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/calc.js","./plugins/flex":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/flex.js","./plugins/flexboxIE":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/flexboxIE.js","./plugins/flexboxOld":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/flexboxOld.js","./plugins/grabCursor":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/grabCursor.js","./plugins/gradient":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/gradient.js","./plugins/position":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/position.js","./plugins/sizing":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/sizing.js","./plugins/transition":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/transition.js","./plugins/zoomCursor":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/zoomCursor.js","./prefixProps":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/prefixProps.js","./static/prefixAll":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/prefixAll.js","./utils/capitalizeString":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/capitalizeString.js","./utils/getBrowserInformation":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/getBrowserInformation.js","./utils/getPrefixedKeyframes":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/getPrefixedKeyframes.js","./utils/sortPrefixedStyle":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/sortPrefixedStyle.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/calc.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function calc(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, css + 'calc('), value, keepUnprefixed));
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/getPrefixedValue.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/flex.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = { flex: true, 'inline-flex': true };

function flex(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'display' && values[value] && (browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
    return {
      display: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
    };
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/getPrefixedValue.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/flexboxIE.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  flex: 'flexbox',
  'inline-flex': 'inline-flexbox'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var styles = _ref.styles;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if ((alternativeProps[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
    if (!keepUnprefixed && !Array.isArray(styles[property])) {
      delete styles[property];
    }
    if (property === 'display' && alternativeValues[value]) {
      return {
        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
      };
    }
    if (alternativeProps[property]) {
      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
    }
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/getPrefixedValue.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/flexboxOld.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
var properties = Object.keys(alternativeProps).concat(otherProps);

function flexboxOld(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var styles = _ref.styles;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
    if (!keepUnprefixed && !Array.isArray(styles[property])) {
      delete styles[property];
    }
    if (property === 'flexDirection' && typeof value === 'string') {
      return {
        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
      };
    }
    if (property === 'display' && alternativeValues[value]) {
      return {
        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
      };
    }
    if (alternativeProps[property]) {
      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
    }
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/getPrefixedValue.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/grabCursor.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = grabCursor;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = { grab: true, grabbing: true };

function grabCursor(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var browser = _ref.browserInfo.browser;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  // adds prefixes for firefox, chrome, safari, and opera regardless of version until a reliable brwoser support info can be found (see: https://github.com/rofrischmann/inline-style-prefixer/issues/79)
  if (property === 'cursor' && values[value] && (browser === 'firefox' || browser === 'chrome' || browser === 'safari' || browser === 'opera')) {
    return {
      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
    };
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/getPrefixedValue.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/gradient.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.match(values) !== null && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/getPrefixedValue.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/position.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function position(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var browser = _ref.browserInfo.browser;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'position' && value === 'sticky' && (browser === 'safari' || browser === 'ios_saf')) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/getPrefixedValue.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/sizing.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  // This might change in the future
  // Keep an eye on it
  if (properties[property] && values[value]) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/getPrefixedValue.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/transition.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = transition;

var _hyphenateStyleName = require('hyphenate-style-name');

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _unprefixProperty = require('../utils/unprefixProperty');

var _unprefixProperty2 = _interopRequireDefault(_unprefixProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = { transition: true, transitionProperty: true };

function transition(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var css = _ref.prefix.css;
  var requiresPrefix = _ref.requiresPrefix;
  var keepUnprefixed = _ref.keepUnprefixed;

  // also check for already prefixed transitions
  var unprefixedProperty = (0, _unprefixProperty2.default)(property);

  if (typeof value === 'string' && properties[unprefixedProperty]) {
    var _ret = function () {
      // TODO: memoize this array
      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
        return (0, _hyphenateStyleName2.default)(prop);
      });

      // only split multi values, not cubic beziers
      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

      requiresPrefixDashCased.forEach(function (prop) {
        multipleValues.forEach(function (val, index) {
          if (val.indexOf(prop) > -1 && prop !== 'order') {
            multipleValues[index] = val.replace(prop, css + prop) + (keepUnprefixed ? ',' + val : '');
          }
        });
      });

      return {
        v: _defineProperty({}, property, multipleValues.join(','))
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
}
module.exports = exports['default'];
},{"../utils/unprefixProperty":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/unprefixProperty.js","hyphenate-style-name":"/Users/phitien/apphub/node_modules/hyphenate-style-name/index.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/plugins/zoomCursor.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = zoomCursor;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = { 'zoom-in': true, 'zoom-out': true };

function zoomCursor(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'cursor' && values[value] && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
    return {
      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
    };
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/getPrefixedValue.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/prefixProps.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 55, "userSelect": 55, "fontKerning": 32, "textEmphasisPosition": 55, "textEmphasis": 55, "textEmphasisStyle": 55, "textEmphasisColor": 55, "boxDecorationBreak": 55, "clipPath": 55, "maskImage": 55, "maskMode": 55, "maskRepeat": 55, "maskPosition": 55, "maskClip": 55, "maskOrigin": 55, "maskSize": 55, "maskComposite": 55, "mask": 55, "maskBorderSource": 55, "maskBorderMode": 55, "maskBorderSlice": 55, "maskBorderWidth": 55, "maskBorderOutset": 55, "maskBorderRepeat": 55, "maskBorder": 55, "maskType": 55, "textDecorationStyle": 55, "textDecorationSkip": 55, "textDecorationLine": 55, "textDecorationColor": 55, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 49, "breakBefore": 49, "breakInside": 49, "columnCount": 49, "columnFill": 49, "columnGap": 49, "columnRule": 49, "columnRuleColor": 49, "columnRuleStyle": 49, "columnRuleWidth": 49, "columns": 49, "columnSpan": 49, "columnWidth": 49 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 10, "userSelect": 10, "backdropFilter": 10, "fontKerning": 9, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 10, "clipPath": 10, "maskImage": 10, "maskMode": 10, "maskRepeat": 10, "maskPosition": 10, "maskClip": 10, "maskOrigin": 10, "maskSize": 10, "maskComposite": 10, "mask": 10, "maskBorderSource": 10, "maskBorderMode": 10, "maskBorderSlice": 10, "maskBorderWidth": 10, "maskBorderOutset": 10, "maskBorderRepeat": 10, "maskBorder": 10, "maskType": 10, "textDecorationStyle": 10, "textDecorationSkip": 10, "textDecorationLine": 10, "textDecorationColor": 10, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10, "flowInto": 10, "flowFrom": 10, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 10, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 51, "userSelect": 51, "boxSizing": 28, "textAlignLast": 48, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 51, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 41, "userSelect": 41, "fontKerning": 19, "textEmphasisPosition": 41, "textEmphasis": 41, "textEmphasisStyle": 41, "textEmphasisColor": 41, "boxDecorationBreak": 41, "clipPath": 41, "maskImage": 41, "maskMode": 41, "maskRepeat": 41, "maskPosition": 41, "maskClip": 41, "maskOrigin": 41, "maskSize": 41, "maskComposite": 41, "mask": 41, "maskBorderSource": 41, "maskBorderMode": 41, "maskBorderSlice": 41, "maskBorderWidth": 41, "maskBorderOutset": 41, "maskBorderRepeat": 41, "maskBorder": 41, "maskType": 41, "textDecorationStyle": 41, "textDecorationSkip": 41, "textDecorationLine": 41, "textDecorationColor": 41, "filter": 39, "fontFeatureSettings": 34, "breakAfter": 36, "breakBefore": 36, "breakInside": 36, "columnCount": 36, "columnFill": 36, "columnGap": 36, "columnRule": 36, "columnRuleColor": 36, "columnRuleStyle": 36, "columnRuleWidth": 36, "columns": 36, "columnSpan": 36, "columnWidth": 36 }, "ie": { "flex": 10, "flexDirection": 10, "flexFlow": 10, "flexWrap": 10, "transform": 9, "transformOrigin": 9, "transformOriginX": 9, "transformOriginY": 9, "userSelect": 11, "wrapFlow": 11, "wrapThrough": 11, "wrapMargin": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "touchAction": 10, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "gridTemplateColumns": 11, "gridTemplateRows": 11, "gridTemplateAreas": 11, "gridTemplate": 11, "gridAutoColumns": 11, "gridAutoRows": 11, "gridAutoFlow": 11, "grid": 11, "gridRowStart": 11, "gridColumnStart": 11, "gridRowEnd": 11, "gridRow": 11, "gridColumn": 11, "gridColumnEnd": 11, "gridColumnGap": 11, "gridRowGap": 11, "gridArea": 11, "gridGap": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 14, "wrapFlow": 14, "wrapThrough": 14, "wrapMargin": 14, "scrollSnapType": 14, "scrollSnapPointsX": 14, "scrollSnapPointsY": 14, "scrollSnapDestination": 14, "scrollSnapCoordinate": 14, "hyphens": 14, "flowInto": 14, "flowFrom": 14, "breakBefore": 14, "breakAfter": 14, "breakInside": 14, "regionFragment": 14, "gridTemplateColumns": 14, "gridTemplateRows": 14, "gridTemplateAreas": 14, "gridTemplate": 14, "gridAutoColumns": 14, "gridAutoRows": 14, "gridAutoFlow": 14, "grid": 14, "gridRowStart": 14, "gridColumnStart": 14, "gridRowEnd": 14, "gridRow": 14, "gridColumn": 14, "gridColumnEnd": 14, "gridColumnGap": 14, "gridRowGap": 14, "gridArea": 14, "gridGap": 14 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 9.3, "userSelect": 9.3, "backdropFilter": 9.3, "fontKerning": 9.3, "scrollSnapType": 9.3, "scrollSnapPointsX": 9.3, "scrollSnapPointsY": 9.3, "scrollSnapDestination": 9.3, "scrollSnapCoordinate": 9.3, "boxDecorationBreak": 9.3, "clipPath": 9.3, "maskImage": 9.3, "maskMode": 9.3, "maskRepeat": 9.3, "maskPosition": 9.3, "maskClip": 9.3, "maskOrigin": 9.3, "maskSize": 9.3, "maskComposite": 9.3, "mask": 9.3, "maskBorderSource": 9.3, "maskBorderMode": 9.3, "maskBorderSlice": 9.3, "maskBorderWidth": 9.3, "maskBorderOutset": 9.3, "maskBorderRepeat": 9.3, "maskBorder": 9.3, "maskType": 9.3, "textSizeAdjust": 9.3, "textDecorationStyle": 9.3, "textDecorationSkip": 9.3, "textDecorationLine": 9.3, "textDecorationColor": 9.3, "shapeImageThreshold": 9.3, "shapeImageMargin": 9.3, "shapeImageOutside": 9.3, "filter": 9, "hyphens": 9.3, "flowInto": 9.3, "flowFrom": 9.3, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 9.3, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 51, "userSelect": 51, "fontKerning": 4.4, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "filter": 51, "fontFeatureSettings": 4.4, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "and_chr": { "appearance": 51, "userSelect": 51, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "textDecorationStyle": 51, "textDecorationSkip": 51, "textDecorationLine": 51, "textDecorationColor": 51, "filter": 51 }, "and_uc": { "flex": 9.9, "flexBasis": 9.9, "flexDirection": 9.9, "flexGrow": 9.9, "flexFlow": 9.9, "flexShrink": 9.9, "flexWrap": 9.9, "alignContent": 9.9, "alignItems": 9.9, "alignSelf": 9.9, "justifyContent": 9.9, "order": 9.9, "transition": 9.9, "transitionDelay": 9.9, "transitionDuration": 9.9, "transitionProperty": 9.9, "transitionTimingFunction": 9.9, "transform": 9.9, "transformOrigin": 9.9, "transformOriginX": 9.9, "transformOriginY": 9.9, "backfaceVisibility": 9.9, "perspective": 9.9, "perspectiveOrigin": 9.9, "transformStyle": 9.9, "transformOriginZ": 9.9, "animation": 9.9, "animationDelay": 9.9, "animationDirection": 9.9, "animationFillMode": 9.9, "animationDuration": 9.9, "animationIterationCount": 9.9, "animationName": 9.9, "animationPlayState": 9.9, "animationTimingFunction": 9.9, "appearance": 9.9, "userSelect": 9.9, "fontKerning": 9.9, "textEmphasisPosition": 9.9, "textEmphasis": 9.9, "textEmphasisStyle": 9.9, "textEmphasisColor": 9.9, "maskImage": 9.9, "maskMode": 9.9, "maskRepeat": 9.9, "maskPosition": 9.9, "maskClip": 9.9, "maskOrigin": 9.9, "maskSize": 9.9, "maskComposite": 9.9, "mask": 9.9, "maskBorderSource": 9.9, "maskBorderMode": 9.9, "maskBorderSlice": 9.9, "maskBorderWidth": 9.9, "maskBorderOutset": 9.9, "maskBorderRepeat": 9.9, "maskBorder": 9.9, "maskType": 9.9, "textSizeAdjust": 9.9, "filter": 9.9, "hyphens": 9.9, "flowInto": 9.9, "flowFrom": 9.9, "breakBefore": 9.9, "breakAfter": 9.9, "breakInside": 9.9, "regionFragment": 9.9, "fontFeatureSettings": 9.9, "columnCount": 9.9, "columnFill": 9.9, "columnGap": 9.9, "columnRule": 9.9, "columnRuleColor": 9.9, "columnRuleStyle": 9.9, "columnRuleWidth": 9.9, "columns": 9.9, "columnSpan": 9.9, "columnWidth": 9.9 }, "op_mini": {} };
module.exports = exports["default"];
},{}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/calc.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
module.exports = exports['default'];
},{"../../utils/isPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js","../../utils/joinPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/cursor.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/joinPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/flex.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = { flex: true, 'inline-flex': true };

function flex(property, value) {
  if (property === 'display' && values[value]) {
    return {
      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
    };
  }
}
module.exports = exports['default'];
},{}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/flexboxIE.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(property, value) {
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];
},{}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/flexboxOld.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value) {
  if (property === 'flexDirection' && typeof value === 'string') {
    return {
      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
    };
  }
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];
},{}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/gradient.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/isPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js","../../utils/joinPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/position.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return { position: ['-webkit-sticky', 'sticky'] };
  }
}
module.exports = exports['default'];
},{}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/sizing.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties[property] && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/joinPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/transition.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateStyleName = require('hyphenate-style-name');

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _capitalizeString = require('../../utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _prefixProps = require('../prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true
};

function transition(property, value) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties[property]) {
    var _ref2;

    var outputValue = prefixValue(value);
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
      return value.match(/-moz-|-ms-/) === null;
    }).join(',');

    // if the property is already prefixed
    if (property.indexOf('Webkit') > -1) {
      return _defineProperty({}, property, webkitOutput);
    }

    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
  }
}

function prefixValue(value) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  // iterate each single value and check for transitioned properties
  // that need to be prefixed as well
  multipleValues.forEach(function (val, index) {
    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);

        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
          // join all prefixes and create a new value
          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
        }
      });
      return out;
    }, val);
  });

  return multipleValues.join(',');
}
module.exports = exports['default'];
},{"../../utils/capitalizeString":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/capitalizeString.js","../../utils/isPrefixedValue":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js","../prefixProps":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/prefixProps.js","hyphenate-style-name":"/Users/phitien/apphub/node_modules/hyphenate-style-name/index.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/prefixAll.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixAll;

var _prefixProps = require('./prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var _capitalizeString = require('../utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _sortPrefixedStyle = require('../utils/sortPrefixedStyle');

var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

var _position = require('./plugins/position');

var _position2 = _interopRequireDefault(_position);

var _calc = require('./plugins/calc');

var _calc2 = _interopRequireDefault(_calc);

var _cursor = require('./plugins/cursor');

var _cursor2 = _interopRequireDefault(_cursor);

var _flex = require('./plugins/flex');

var _flex2 = _interopRequireDefault(_flex);

var _sizing = require('./plugins/sizing');

var _sizing2 = _interopRequireDefault(_sizing);

var _gradient = require('./plugins/gradient');

var _gradient2 = _interopRequireDefault(_gradient);

var _transition = require('./plugins/transition');

var _transition2 = _interopRequireDefault(_transition);

var _flexboxIE = require('./plugins/flexboxIE');

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = require('./plugins/flexboxOld');

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// special flexbox specifications


var plugins = [_position2.default, _calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];

/**
 * Returns a prefixed version of the style object using all vendor prefixes
 * @param {Object} styles - Style object that gets prefixed properties added
 * @returns {Object} - Style object with prefixed properties and values
 */
function prefixAll(styles) {
  Object.keys(styles).forEach(function (property) {
    var value = styles[property];
    if (value instanceof Object && !Array.isArray(value)) {
      // recurse through nested style objects
      styles[property] = prefixAll(value);
    } else {
      Object.keys(_prefixProps2.default).forEach(function (prefix) {
        var properties = _prefixProps2.default[prefix];
        // add prefixes if needed
        if (properties[property]) {
          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
        }
      });
    }
  });

  Object.keys(styles).forEach(function (property) {
    [].concat(styles[property]).forEach(function (value, index) {
      // resolve every special plugins
      plugins.forEach(function (plugin) {
        return assignStyles(styles, plugin(property, value));
      });
    });
  });

  return (0, _sortPrefixedStyle2.default)(styles);
}

function assignStyles(base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  Object.keys(extend).forEach(function (property) {
    var baseValue = base[property];
    if (Array.isArray(baseValue)) {
      [].concat(extend[property]).forEach(function (value) {
        var valueIndex = baseValue.indexOf(value);
        if (valueIndex > -1) {
          base[property].splice(valueIndex, 1);
        }
        base[property].push(value);
      });
    } else {
      base[property] = extend[property];
    }
  });
}
module.exports = exports['default'];
},{"../utils/capitalizeString":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/capitalizeString.js","../utils/sortPrefixedStyle":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/sortPrefixedStyle.js","./plugins/calc":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/calc.js","./plugins/cursor":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/cursor.js","./plugins/flex":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/flex.js","./plugins/flexboxIE":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/flexboxIE.js","./plugins/flexboxOld":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/flexboxOld.js","./plugins/gradient":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/gradient.js","./plugins/position":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/position.js","./plugins/sizing":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/sizing.js","./plugins/transition":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/plugins/transition.js","./prefixProps":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/prefixProps.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/static/prefixProps.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
module.exports = exports["default"];
},{}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/capitalizeString.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// helper to capitalize strings

exports.default = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = exports["default"];
},{}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/getBrowserInformation.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bowser = require('bowser');

var _bowser2 = _interopRequireDefault(_bowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendorPrefixes = {
  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen', 'chromium', 'vivaldi'],
  Moz: ['firefox', 'seamonkey', 'sailfish'],
  ms: ['msie', 'msedge']
};
var browsers = {
  chrome: [['chrome'], ['chromium']],
  safari: [['safari']],
  firefox: [['firefox']],
  edge: [['msedge']],
  opera: [['opera'], ['vivaldi']],
  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
  ie: [['msie']],
  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
  and_uc: [['android', 'mobile'], ['android', 'tablet']],
  android: [['android', 'mobile'], ['android', 'tablet']]
};

var browserByInfo = function browserByInfo(info) {
  if (info.firefox) {
    return 'firefox';
  }
  var name = '';

  Object.keys(browsers).forEach(function (browser) {
    browsers[browser].forEach(function (condition) {
      var match = 0;
      condition.forEach(function (single) {
        if (info[single]) {
          match += 1;
        }
      });
      if (condition.length === match) {
        name = browser;
      }
    });
  });

  return name;
};

/**
 * Uses bowser to get default browser information such as version and name
 * Evaluates bowser info and adds vendorPrefix information
 * @param {string} userAgent - userAgent that gets evaluated
 */

exports.default = function (userAgent) {
  if (!userAgent) {
    return false;
  }
  var info = _bowser2.default._detect(userAgent);

  Object.keys(vendorPrefixes).forEach(function (prefix) {
    vendorPrefixes[prefix].forEach(function (browser) {
      if (info[browser]) {
        info.prefix = {
          inline: prefix,
          css: '-' + prefix.toLowerCase() + '-'
        };
      }
    });
  });

  info.browser = browserByInfo(info);

  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);
  info.osversion = parseFloat(info.osversion);

  // iOS forces all browsers to use Safari under the hood
  // as the Safari version seems to match the iOS version
  // we just explicitely use the osversion instead
  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
  if (info.browser === 'ios_saf' && info.version > info.osversion) {
    info.version = info.osversion;
    info.safari = true;
  }

  // seperate native android chrome
  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
  if (info.browser === 'android' && info.chrome && info.version > 37) {
    info.browser = 'and_chr';
  }

  // For android < 4.4 we want to check the osversion
  // not the chrome version, see issue #26
  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
  if (info.browser === 'android' && info.osversion < 5) {
    info.version = info.osversion;
  }

  return info;
};

module.exports = exports['default'];
},{"bowser":"/Users/phitien/apphub/node_modules/bowser/src/bowser.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/getPrefixedKeyframes.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var browser = _ref.browser;
  var version = _ref.version;
  var prefix = _ref.prefix;

  var prefixedKeyframes = 'keyframes';

  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
    prefixedKeyframes = prefix.css + prefixedKeyframes;
  }
  return prefixedKeyframes;
};

module.exports = exports['default'];
},{}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/getPrefixedValue.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (prefixedValue, value, keepUnprefixed) {
  return keepUnprefixed ? [prefixedValue, value] : prefixedValue;
};

module.exports = exports["default"];
},{}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/isPrefixedProperty.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (property) {
  return property.match(/^(Webkit|Moz|O|ms)/) !== null;
};

module.exports = exports["default"];
},{}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  if (Array.isArray(value)) value = value.join(',');

  return value.match(/-webkit-|-moz-|-ms-/) !== null;
};

module.exports = exports['default'];
},{}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// returns a style object with a single concated prefixed value string

exports.default = function (property, value) {
  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
    return prefix + value;
  } : arguments[2];
  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
    return replacer(prefix, value);
  }));
};

module.exports = exports['default'];
},{}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/sortPrefixedStyle.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortPrefixedStyle;

var _isPrefixedProperty = require('./isPrefixedProperty');

var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sortPrefixedStyle(style) {
  return Object.keys(style).sort(function (left, right) {
    if ((0, _isPrefixedProperty2.default)(left) && !(0, _isPrefixedProperty2.default)(right)) {
      return -1;
    } else if (!(0, _isPrefixedProperty2.default)(left) && (0, _isPrefixedProperty2.default)(right)) {
      return 1;
    }
    return 0;
  }).reduce(function (sortedStyle, prop) {
    sortedStyle[prop] = style[prop];
    return sortedStyle;
  }, {});
}
module.exports = exports['default'];
},{"./isPrefixedProperty":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/isPrefixedProperty.js"}],"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/utils/unprefixProperty.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (property) {
  var unprefixed = property.replace(/^(ms|Webkit|Moz|O)/, '');
  return unprefixed.charAt(0).toLowerCase() + unprefixed.slice(1);
};

module.exports = exports['default'];
},{}],"/Users/phitien/apphub/node_modules/is-node/index.js":[function(require,module,exports){
(function (process){
// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md
'use strict';

exports = module.exports = !!(typeof process !== 'undefined' && process.versions && process.versions.node);

}).call(this,require('_process'))

},{"_process":"/Users/phitien/apphub/node_modules/process/browser.js"}],"/Users/phitien/apphub/node_modules/keycode/index.js":[function(require,module,exports){
// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

exports = module.exports = function(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
}


/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}

},{}],"/Users/phitien/apphub/node_modules/lodash.merge/index.js":[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (typeof key == 'number' && value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  if (!(isArray(source) || isTypedArray(source))) {
    var props = baseKeysIn(source);
  }
  arrayEach(props || source, function(srcValue, key) {
    if (props) {
      key = srcValue;
      srcValue = source[key];
    }
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  });
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    newValue = srcValue;
    if (isArray(srcValue) || isTypedArray(srcValue)) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else {
        isCommon = false;
        newValue = baseClone(srcValue, true);
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        isCommon = false;
        newValue = baseClone(srcValue, true);
      }
      else {
        newValue = objValue;
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/Users/phitien/apphub/node_modules/material-ui/Checkbox/Checkbox.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EnhancedSwitch = require('../internal/EnhancedSwitch');

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _checkBoxOutlineBlank = require('../svg-icons/toggle/check-box-outline-blank');

var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

var _checkBox = require('../svg-icons/toggle/check-box');

var _checkBox2 = _interopRequireDefault(_checkBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var checkbox = context.muiTheme.checkbox;

  var checkboxSize = 24;

  return {
    icon: {
      height: checkboxSize,
      width: checkboxSize
    },
    check: {
      position: 'absolute',
      opacity: 0,
      transform: 'scale(0)',
      transitionOrigin: '50% 50%',
      transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('0ms', 'transform', '450ms'),
      fill: checkbox.checkedColor
    },
    checkWhenSwitched: {
      opacity: 1,
      transform: 'scale(1)',
      transition: _transitions2.default.easeOut('0ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('800ms', 'transform', '0ms')
    },
    checkWhenDisabled: {
      fill: checkbox.disabledColor
    },
    box: {
      position: 'absolute',
      opacity: 1,
      fill: checkbox.boxColor,
      transition: _transitions2.default.easeOut('1000ms', 'opacity', '200ms')
    },
    boxWhenSwitched: {
      opacity: 0,
      transition: _transitions2.default.easeOut('650ms', 'opacity', '150ms'),
      fill: checkbox.checkedColor
    },
    boxWhenDisabled: {
      fill: props.checked ? 'transparent' : checkbox.disabledColor
    },
    label: {
      color: props.disabled ? checkbox.labelDisabledColor : checkbox.labelColor
    }
  };
}

var Checkbox = function (_Component) {
  (0, _inherits3.default)(Checkbox, _Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      switched: false
    }, _this.handleStateChange = function (newSwitched) {
      _this.setState({
        switched: newSwitched
      });
    }, _this.handleCheck = function (event, isInputChecked) {
      if (_this.props.onCheck) {
        _this.props.onCheck(event, isInputChecked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          checked = _props.checked,
          defaultChecked = _props.defaultChecked,
          valueLink = _props.valueLink;


      if (checked || defaultChecked || valueLink && valueLink.value) {
        this.setState({
          switched: true
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.checked !== nextProps.checked) {
        this.setState({
          switched: nextProps.checked
        });
      }
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.refs.enhancedSwitch.isSwitched();
    }
  }, {
    key: 'setChecked',
    value: function setChecked(newCheckedValue) {
      this.refs.enhancedSwitch.setSwitched(newCheckedValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          iconStyle = _props2.iconStyle,
          onCheck = _props2.onCheck,
          checkedIcon = _props2.checkedIcon,
          uncheckedIcon = _props2.uncheckedIcon,
          other = (0, _objectWithoutProperties3.default)(_props2, ['iconStyle', 'onCheck', 'checkedIcon', 'uncheckedIcon']);

      var styles = getStyles(this.props, this.context);
      var boxStyles = (0, _simpleAssign2.default)(styles.box, this.state.switched && styles.boxWhenSwitched, iconStyle, this.props.disabled && styles.boxWhenDisabled);
      var checkStyles = (0, _simpleAssign2.default)(styles.check, this.state.switched && styles.checkWhenSwitched, iconStyle, this.props.disabled && styles.checkWhenDisabled);

      var checkedElement = checkedIcon ? _react2.default.cloneElement(checkedIcon, {
        style: (0, _simpleAssign2.default)(checkStyles, checkedIcon.props.style)
      }) : _react2.default.createElement(_checkBox2.default, {
        style: checkStyles
      });

      var unCheckedElement = uncheckedIcon ? _react2.default.cloneElement(uncheckedIcon, {
        style: (0, _simpleAssign2.default)(boxStyles, uncheckedIcon.props.style)
      }) : _react2.default.createElement(_checkBoxOutlineBlank2.default, {
        style: boxStyles
      });

      var checkboxElement = _react2.default.createElement(
        'div',
        null,
        unCheckedElement,
        checkedElement
      );

      var rippleColor = this.state.switched ? checkStyles.fill : boxStyles.fill;
      var mergedIconStyle = (0, _simpleAssign2.default)(styles.icon, iconStyle);

      var labelStyle = (0, _simpleAssign2.default)(styles.label, this.props.labelStyle);

      var enhancedSwitchProps = {
        ref: 'enhancedSwitch',
        inputType: 'checkbox',
        switched: this.state.switched,
        switchElement: checkboxElement,
        rippleColor: rippleColor,
        iconStyle: mergedIconStyle,
        onSwitch: this.handleCheck,
        labelStyle: labelStyle,
        onParentShouldUpdate: this.handleStateChange,
        labelPosition: this.props.labelPosition
      };

      return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, enhancedSwitchProps));
    }
  }]);
  return Checkbox;
}(_react.Component);

Checkbox.defaultProps = {
  labelPosition: 'right',
  disabled: false
};
Checkbox.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? Checkbox.propTypes = {
  /**
   * Checkbox is checked if true.
   */
  checked: _react.PropTypes.bool,
  /**
   * The SvgIcon to use for the checked state.
   * This is useful to create icon toggles.
   */
  checkedIcon: _react.PropTypes.element,
  /**
   * The default state of our checkbox component.
   * **Warning:** This cannot be used in conjunction with `checked`.
   * Decide between using a controlled or uncontrolled input element and remove one of these props.
   * More info: https://fb.me/react-controlled-components
   */
  defaultChecked: _react.PropTypes.bool,
  /**
   * Disabled if true.
   */
  disabled: _react.PropTypes.bool,
  /**
   * Overrides the inline-styles of the icon element.
   */
  iconStyle: _react.PropTypes.object,
  /**
   * Overrides the inline-styles of the input element.
   */
  inputStyle: _react.PropTypes.object,
  /**
   * Where the label will be placed next to the checkbox.
   */
  labelPosition: _react.PropTypes.oneOf(['left', 'right']),
  /**
   * Overrides the inline-styles of the Checkbox element label.
   */
  labelStyle: _react.PropTypes.object,
  /**
   * Callback function that is fired when the checkbox is checked.
   *
   * @param {object} event `change` event targeting the underlying checkbox `input`.
   * @param {boolean} isInputChecked The `checked` value of the underlying checkbox `input`.
   */
  onCheck: _react.PropTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * The SvgIcon to use for the unchecked state.
   * This is useful to create icon toggles.
   */
  uncheckedIcon: _react.PropTypes.element,
  /**
   * ValueLink for when using controlled checkbox.
   */
  valueLink: _react.PropTypes.object
} : void 0;
exports.default = Checkbox;
}).call(this,require('_process'))

},{"../internal/EnhancedSwitch":"/Users/phitien/apphub/node_modules/material-ui/internal/EnhancedSwitch.js","../styles/transitions":"/Users/phitien/apphub/node_modules/material-ui/styles/transitions.js","../svg-icons/toggle/check-box":"/Users/phitien/apphub/node_modules/material-ui/svg-icons/toggle/check-box.js","../svg-icons/toggle/check-box-outline-blank":"/Users/phitien/apphub/node_modules/material-ui/svg-icons/toggle/check-box-outline-blank.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/extends":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/objectWithoutProperties":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/objectWithoutProperties.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/Checkbox/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Checkbox2.default;
},{"./Checkbox":"/Users/phitien/apphub/node_modules/material-ui/Checkbox/Checkbox.js"}],"/Users/phitien/apphub/node_modules/material-ui/Paper/Paper.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('../utils/propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var rounded = props.rounded,
      circle = props.circle,
      transitionEnabled = props.transitionEnabled,
      zDepth = props.zDepth;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      paper = _context$muiTheme.paper,
      borderRadius = _context$muiTheme.borderRadius;


  return {
    root: {
      color: paper.color,
      backgroundColor: paper.backgroundColor,
      transition: transitionEnabled && _transitions2.default.easeOut(),
      boxSizing: 'border-box',
      fontFamily: baseTheme.fontFamily,
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
      borderRadius: circle ? '50%' : rounded ? borderRadius : '0px'
    }
  };
}

var Paper = function (_Component) {
  (0, _inherits3.default)(Paper, _Component);

  function Paper() {
    (0, _classCallCheck3.default)(this, Paper);
    return (0, _possibleConstructorReturn3.default)(this, (Paper.__proto__ || (0, _getPrototypeOf2.default)(Paper)).apply(this, arguments));
  }

  (0, _createClass3.default)(Paper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          circle = _props.circle,
          rounded = _props.rounded,
          style = _props.style,
          transitionEnabled = _props.transitionEnabled,
          zDepth = _props.zDepth,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        children
      );
    }
  }]);
  return Paper;
}(_react.Component);

Paper.defaultProps = {
  circle: false,
  rounded: true,
  transitionEnabled: true,
  zDepth: 1
};
Paper.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? Paper.propTypes = {
  /**
   * Children passed into the paper element.
   */
  children: _react.PropTypes.node,
  /**
   * Set to true to generate a circlular paper container.
   */
  circle: _react.PropTypes.bool,
  /**
   * By default, the paper container will have a border radius.
   * Set this to false to generate a container with sharp corners.
   */
  rounded: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * Set to false to disable CSS transitions for the paper element.
   */
  transitionEnabled: _react.PropTypes.bool,
  /**
   * This number represents the zDepth of the paper shadow.
   */
  zDepth: _propTypes2.default.zDepth
} : void 0;
exports.default = Paper;
}).call(this,require('_process'))

},{"../styles/transitions":"/Users/phitien/apphub/node_modules/material-ui/styles/transitions.js","../utils/propTypes":"/Users/phitien/apphub/node_modules/material-ui/utils/propTypes.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/extends":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/objectWithoutProperties":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/objectWithoutProperties.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/Paper/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Paper = require('./Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Paper2.default;
},{"./Paper":"/Users/phitien/apphub/node_modules/material-ui/Paper/Paper.js"}],"/Users/phitien/apphub/node_modules/material-ui/SvgIcon/SvgIcon.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = function (_Component) {
  (0, _inherits3.default)(SvgIcon, _Component);

  function SvgIcon() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SvgIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleMouseEnter = function (event) {
      _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SvgIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          color = _props.color,
          hoverColor = _props.hoverColor,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          style = _props.style,
          viewBox = _props.viewBox,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
      var _context$muiTheme = this.context.muiTheme,
          svgIcon = _context$muiTheme.svgIcon,
          prepareStyles = _context$muiTheme.prepareStyles;


      var offColor = color ? color : 'currentColor';
      var onColor = hoverColor ? hoverColor : offColor;

      var mergedStyles = (0, _simpleAssign2.default)({
        display: 'inline-block',
        color: svgIcon.color,
        fill: this.state.hovered ? onColor : offColor,
        height: 24,
        width: 24,
        userSelect: 'none',
        transition: _transitions2.default.easeOut()
      }, style);

      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, other, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          style: prepareStyles(mergedStyles),
          viewBox: viewBox
        }),
        children
      );
    }
  }]);
  return SvgIcon;
}(_react.Component);

SvgIcon.muiName = 'SvgIcon';
SvgIcon.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  viewBox: '0 0 24 24'
};
SvgIcon.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? SvgIcon.propTypes = {
  /**
   * Elements passed into the SVG Icon.
   */
  children: _react.PropTypes.node,
  /**
   * This is the fill color of the svg icon.
   * If not specified, this component will default
   * to muiTheme.palette.textColor.
   */
  color: _react.PropTypes.string,
  /**
   * This is the icon color when the mouse hovers over the icon.
   */
  hoverColor: _react.PropTypes.string,
  /** @ignore */
  onMouseEnter: _react.PropTypes.func,
  /** @ignore */
  onMouseLeave: _react.PropTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * Allows you to redefine what the coordinates
   * without units mean inside an svg element. For example,
   * if the SVG element is 500 (width) by 200 (height), and you
   * pass viewBox="0 0 50 20", this means that the coordinates inside
   * the svg will go from the top left corner (0,0) to bottom right (50,20)
   * and each unit will be worth 10px.
   */
  viewBox: _react.PropTypes.string
} : void 0;
exports.default = SvgIcon;
}).call(this,require('_process'))

},{"../styles/transitions":"/Users/phitien/apphub/node_modules/material-ui/styles/transitions.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/extends":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/objectWithoutProperties":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/objectWithoutProperties.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/SvgIcon/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _SvgIcon = require('./SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SvgIcon2.default;
},{"./SvgIcon":"/Users/phitien/apphub/node_modules/material-ui/SvgIcon/SvgIcon.js"}],"/Users/phitien/apphub/node_modules/material-ui/Table/Table.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      table = _context$muiTheme.table;


  return {
    root: {
      backgroundColor: table.backgroundColor,
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      tableLayout: 'fixed',
      fontFamily: baseTheme.fontFamily
    },
    bodyTable: {
      height: props.fixedHeader || props.fixedFooter ? props.height : 'auto',
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    tableWrapper: {
      height: props.fixedHeader || props.fixedFooter ? 'auto' : props.height,
      overflow: 'auto'
    }
  };
}

var Table = function (_Component) {
  (0, _inherits3.default)(Table, _Component);

  function Table() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      allRowsSelected: false
    }, _this.onCellClick = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellClick) _this.props.onCellClick(rowNumber, columnNumber, event);
    }, _this.onCellHover = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellHover) _this.props.onCellHover(rowNumber, columnNumber, event);
    }, _this.onCellHoverExit = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellHoverExit) _this.props.onCellHoverExit(rowNumber, columnNumber, event);
    }, _this.onRowHover = function (rowNumber) {
      if (_this.props.onRowHover) _this.props.onRowHover(rowNumber);
    }, _this.onRowHoverExit = function (rowNumber) {
      if (_this.props.onRowHoverExit) _this.props.onRowHoverExit(rowNumber);
    }, _this.onRowSelection = function (selectedRows) {
      if (_this.state.allRowsSelected) _this.setState({ allRowsSelected: false });
      if (_this.props.onRowSelection) _this.props.onRowSelection(selectedRows);
    }, _this.onSelectAll = function () {
      if (_this.props.onRowSelection) {
        if (!_this.state.allRowsSelected) {
          _this.props.onRowSelection('all');
        } else {
          _this.props.onRowSelection('none');
        }
      }

      _this.setState({ allRowsSelected: !_this.state.allRowsSelected });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Table, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.allRowsSelected) {
        this.setState({ allRowsSelected: true });
      }
    }
  }, {
    key: 'isScrollbarVisible',
    value: function isScrollbarVisible() {
      var tableDivHeight = this.refs.tableDiv.clientHeight;
      var tableBodyHeight = this.refs.tableBody.clientHeight;

      return tableBodyHeight > tableDivHeight;
    }
  }, {
    key: 'createTableHeader',
    value: function createTableHeader(base) {
      return _react2.default.cloneElement(base, {
        enableSelectAll: base.props.enableSelectAll && this.props.selectable && this.props.multiSelectable,
        onSelectAll: this.onSelectAll,
        selectAllSelected: this.state.allRowsSelected
      });
    }
  }, {
    key: 'createTableBody',
    value: function createTableBody(base) {
      return _react2.default.cloneElement(base, {
        allRowsSelected: this.state.allRowsSelected,
        multiSelectable: this.props.multiSelectable,
        onCellClick: this.onCellClick,
        onCellHover: this.onCellHover,
        onCellHoverExit: this.onCellHoverExit,
        onRowHover: this.onRowHover,
        onRowHoverExit: this.onRowHoverExit,
        onRowSelection: this.onRowSelection,
        selectable: this.props.selectable,
        style: (0, _simpleAssign2.default)({ height: this.props.height }, base.props.style)
      });
    }
  }, {
    key: 'createTableFooter',
    value: function createTableFooter(base) {
      return base;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          fixedFooter = _props.fixedFooter,
          fixedHeader = _props.fixedHeader,
          style = _props.style,
          wrapperStyle = _props.wrapperStyle,
          headerStyle = _props.headerStyle,
          bodyStyle = _props.bodyStyle,
          footerStyle = _props.footerStyle;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var tHead = void 0;
      var tFoot = void 0;
      var tBody = void 0;

      _react2.default.Children.forEach(children, function (child) {
        if (!_react2.default.isValidElement(child)) return;

        var muiName = child.type.muiName;

        if (muiName === 'TableBody') {
          tBody = _this2.createTableBody(child);
        } else if (muiName === 'TableHeader') {
          tHead = _this2.createTableHeader(child);
        } else if (muiName === 'TableFooter') {
          tFoot = _this2.createTableFooter(child);
        } else {
          process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: Children of the Table component must be TableBody or TableHeader or TableFooter.\n           Nothing is rendered.') : void 0;
        }
      });

      // If we could not find a table-header and a table-body, do not attempt to display anything.
      if (!tBody && !tHead) return null;

      var mergedTableStyle = (0, _simpleAssign2.default)(styles.root, style);
      var headerTable = void 0;
      var footerTable = void 0;
      var inlineHeader = void 0;
      var inlineFooter = void 0;

      if (fixedHeader) {
        headerTable = _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _simpleAssign2.default)({}, headerStyle)) },
          _react2.default.createElement(
            'table',
            { className: className, style: mergedTableStyle },
            tHead
          )
        );
      } else {
        inlineHeader = tHead;
      }

      if (tFoot !== undefined) {
        if (fixedFooter) {
          footerTable = _react2.default.createElement(
            'div',
            { style: prepareStyles((0, _simpleAssign2.default)({}, footerStyle)) },
            _react2.default.createElement(
              'table',
              { className: className, style: prepareStyles(mergedTableStyle) },
              tFoot
            )
          );
        } else {
          inlineFooter = tFoot;
        }
      }

      return _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.tableWrapper, wrapperStyle)) },
        headerTable,
        _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _simpleAssign2.default)(styles.bodyTable, bodyStyle)), ref: 'tableDiv' },
          _react2.default.createElement(
            'table',
            { className: className, style: mergedTableStyle, ref: 'tableBody' },
            inlineHeader,
            inlineFooter,
            tBody
          )
        ),
        footerTable
      );
    }
  }]);
  return Table;
}(_react.Component);

Table.defaultProps = {
  allRowsSelected: false,
  fixedFooter: true,
  fixedHeader: true,
  height: 'inherit',
  multiSelectable: false,
  selectable: true
};
Table.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? Table.propTypes = {
  /**
   * Set to true to indicate that all rows should be selected.
   */
  allRowsSelected: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the body's table element.
   */
  bodyStyle: _react.PropTypes.object,
  /**
   * Children passed to table.
   */
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If true, the footer will appear fixed below the table.
   * The default value is true.
   */
  fixedFooter: _react.PropTypes.bool,
  /**
   * If true, the header will appear fixed above the table.
   * The default value is true.
   */
  fixedHeader: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the footer's table element.
   */
  footerStyle: _react.PropTypes.object,
  /**
   * Override the inline-styles of the header's table element.
   */
  headerStyle: _react.PropTypes.object,
  /**
   * The height of the table.
   */
  height: _react.PropTypes.string,
  /**
   * If true, multiple table rows can be selected.
   * CTRL/CMD+Click and SHIFT+Click are valid actions.
   * The default value is false.
   */
  multiSelectable: _react.PropTypes.bool,
  /**
   * Called when a row cell is clicked.
   * rowNumber is the row number and columnId is
   * the column number or the column key.
   */
  onCellClick: _react.PropTypes.func,
  /**
   * Called when a table cell is hovered.
   * rowNumber is the row number of the hovered row
   * and columnId is the column number or the column key of the cell.
   */
  onCellHover: _react.PropTypes.func,
  /**
   * Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _react.PropTypes.func,
  /**
   * Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _react.PropTypes.func,
  /**
   * Called when a table row is no longer hovered.
   * rowNumber is the row number of the row that is no longer hovered.
   */
  onRowHoverExit: _react.PropTypes.func,
  /**
   * Called when a row is selected.
   * selectedRows is an array of all row selections.
   * IF all rows have been selected, the string "all"
   * will be returned instead to indicate that all rows have been selected.
   */
  onRowSelection: _react.PropTypes.func,
  /**
   * If true, table rows can be selected.
   * If multiple row selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * Override the inline-styles of the table's wrapper element.
   */
  wrapperStyle: _react.PropTypes.object
} : void 0;
exports.default = Table;
}).call(this,require('_process'))

},{"_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js","warning":"/Users/phitien/apphub/node_modules/warning/browser.js"}],"/Users/phitien/apphub/node_modules/material-ui/Table/TableBody.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _TableRowColumn = require('./TableRowColumn');

var _TableRowColumn2 = _interopRequireDefault(_TableRowColumn);

var _ClickAwayListener = require('../internal/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function (_Component) {
  (0, _inherits3.default)(TableBody, _Component);

  function TableBody() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableBody.__proto__ || (0, _getPrototypeOf2.default)(TableBody)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedRows: []
    }, _this.handleClickAway = function () {
      if (_this.props.deselectOnClickaway && _this.state.selectedRows.length) {
        _this.setState({
          selectedRows: []
        });
        if (_this.props.onRowSelection) {
          _this.props.onRowSelection([]);
        }
      }
    }, _this.onRowClick = function (event, rowNumber) {
      event.stopPropagation();

      if (_this.props.selectable) {
        // Prevent text selection while selecting rows.
        window.getSelection().removeAllRanges();
        _this.processRowSelection(event, rowNumber);
      }
    }, _this.onCellClick = function (event, rowNumber, columnNumber) {
      event.stopPropagation();
      if (_this.props.onCellClick) {
        _this.props.onCellClick(rowNumber, _this.getColumnId(columnNumber), event);
      }
    }, _this.onCellHover = function (event, rowNumber, columnNumber) {
      if (_this.props.onCellHover) {
        _this.props.onCellHover(rowNumber, _this.getColumnId(columnNumber), event);
      }
      _this.onRowHover(event, rowNumber);
    }, _this.onCellHoverExit = function (event, rowNumber, columnNumber) {
      if (_this.props.onCellHoverExit) {
        _this.props.onCellHoverExit(rowNumber, _this.getColumnId(columnNumber), event);
      }
      _this.onRowHoverExit(event, rowNumber);
    }, _this.onRowHover = function (event, rowNumber) {
      if (_this.props.onRowHover) {
        _this.props.onRowHover(rowNumber);
      }
    }, _this.onRowHoverExit = function (event, rowNumber) {
      if (_this.props.onRowHoverExit) {
        _this.props.onRowHoverExit(rowNumber);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableBody, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ selectedRows: this.calculatePreselectedRows(this.props) });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.allRowsSelected !== nextProps.allRowsSelected) {
        if (!nextProps.allRowsSelected) {
          this.setState({
            selectedRows: []
          });
        } else {
          this.setState({
            selectedRows: this.calculatePreselectedRows(nextProps)
          });
        }
      }
    }
  }, {
    key: 'createRows',
    value: function createRows() {
      var _this2 = this;

      var numChildren = _react2.default.Children.count(this.props.children);
      var rowNumber = 0;
      var handlers = {
        onCellClick: this.onCellClick,
        onCellHover: this.onCellHover,
        onCellHoverExit: this.onCellHoverExit,
        onRowHover: this.onRowHover,
        onRowHoverExit: this.onRowHoverExit,
        onRowClick: this.onRowClick
      };

      return _react2.default.Children.map(this.props.children, function (child) {
        if (_react2.default.isValidElement(child)) {
          var _ret2 = function () {
            var props = {
              hoverable: _this2.props.showRowHover,
              selected: _this2.isRowSelected(rowNumber),
              striped: _this2.props.stripedRows && rowNumber % 2 === 0,
              rowNumber: rowNumber++
            };

            if (rowNumber === numChildren) {
              props.displayBorder = false;
            }

            var children = [_this2.createRowCheckboxColumn(props)];

            _react2.default.Children.forEach(child.props.children, function (child) {
              children.push(child);
            });

            return {
              v: _react2.default.cloneElement(child, (0, _extends3.default)({}, props, handlers), children)
            };
          }();

          if ((typeof _ret2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret2)) === "object") return _ret2.v;
        }
      });
    }
  }, {
    key: 'createRowCheckboxColumn',
    value: function createRowCheckboxColumn(rowProps) {
      if (!this.props.displayRowCheckbox) {
        return null;
      }

      var key = rowProps.rowNumber + '-cb';
      var disabled = !this.props.selectable;
      var checkbox = _react2.default.createElement(_Checkbox2.default, {
        ref: 'rowSelectCB',
        name: key,
        value: 'selected',
        disabled: disabled,
        checked: rowProps.selected
      });

      return _react2.default.createElement(
        _TableRowColumn2.default,
        {
          key: key,
          columnNumber: 0,
          style: {
            width: 24,
            cursor: disabled ? 'not-allowed' : 'inherit'
          }
        },
        checkbox
      );
    }
  }, {
    key: 'calculatePreselectedRows',
    value: function calculatePreselectedRows(props) {
      // Determine what rows are 'pre-selected'.
      var preSelectedRows = [];

      if (props.selectable && props.preScanRows) {
        (function () {
          var index = 0;
          _react2.default.Children.forEach(props.children, function (child) {
            if (_react2.default.isValidElement(child)) {
              if (child.props.selected && (preSelectedRows.length === 0 || props.multiSelectable)) {
                preSelectedRows.push(index);
              }

              index++;
            }
          });
        })();
      }

      return preSelectedRows;
    }
  }, {
    key: 'isRowSelected',
    value: function isRowSelected(rowNumber) {
      if (this.props.allRowsSelected) {
        return true;
      }

      for (var i = 0; i < this.state.selectedRows.length; i++) {
        var selection = this.state.selectedRows[i];

        if ((typeof selection === 'undefined' ? 'undefined' : (0, _typeof3.default)(selection)) === 'object') {
          if (this.isValueInRange(rowNumber, selection)) return true;
        } else {
          if (selection === rowNumber) return true;
        }
      }

      return false;
    }
  }, {
    key: 'isValueInRange',
    value: function isValueInRange(value, range) {
      if (!range) return false;

      if (range.start <= value && value <= range.end || range.end <= value && value <= range.start) {
        return true;
      }

      return false;
    }
  }, {
    key: 'processRowSelection',
    value: function processRowSelection(event, rowNumber) {
      var selectedRows = this.state.selectedRows;

      if (event.shiftKey && this.props.multiSelectable && selectedRows.length) {
        var lastIndex = selectedRows.length - 1;
        var lastSelection = selectedRows[lastIndex];

        if ((typeof lastSelection === 'undefined' ? 'undefined' : (0, _typeof3.default)(lastSelection)) === 'object') {
          lastSelection.end = rowNumber;
        } else {
          selectedRows.splice(lastIndex, 1, { start: lastSelection, end: rowNumber });
        }
      } else if ((event.ctrlKey && !event.metaKey || event.metaKey && !event.ctrlKey) && this.props.multiSelectable) {
        var idx = selectedRows.indexOf(rowNumber);
        if (idx < 0) {
          var foundRange = false;
          for (var i = 0; i < selectedRows.length; i++) {
            var range = selectedRows[i];
            if ((typeof range === 'undefined' ? 'undefined' : (0, _typeof3.default)(range)) !== 'object') continue;

            if (this.isValueInRange(rowNumber, range)) {
              var _selectedRows;

              foundRange = true;
              var values = this.splitRange(range, rowNumber);
              (_selectedRows = selectedRows).splice.apply(_selectedRows, [i, 1].concat((0, _toConsumableArray3.default)(values)));
            }
          }

          if (!foundRange) selectedRows.push(rowNumber);
        } else {
          selectedRows.splice(idx, 1);
        }
      } else {
        if (selectedRows.length === 1 && selectedRows[0] === rowNumber) {
          selectedRows = [];
        } else {
          selectedRows = [rowNumber];
        }
      }

      this.setState({ selectedRows: selectedRows });
      if (this.props.onRowSelection) this.props.onRowSelection(this.flattenRanges(selectedRows));
    }
  }, {
    key: 'splitRange',
    value: function splitRange(range, splitPoint) {
      var splitValues = [];
      var startOffset = range.start - splitPoint;
      var endOffset = range.end - splitPoint;

      // Process start half
      splitValues.push.apply(splitValues, (0, _toConsumableArray3.default)(this.genRangeOfValues(splitPoint, startOffset)));

      // Process end half
      splitValues.push.apply(splitValues, (0, _toConsumableArray3.default)(this.genRangeOfValues(splitPoint, endOffset)));

      return splitValues;
    }
  }, {
    key: 'genRangeOfValues',
    value: function genRangeOfValues(start, offset) {
      var values = [];
      var dir = offset > 0 ? -1 : 1; // This forces offset to approach 0 from either direction.
      while (offset !== 0) {
        values.push(start + offset);
        offset += dir;
      }

      return values;
    }
  }, {
    key: 'flattenRanges',
    value: function flattenRanges(selectedRows) {
      var rows = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(selectedRows), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var selection = _step.value;

          if ((typeof selection === 'undefined' ? 'undefined' : (0, _typeof3.default)(selection)) === 'object') {
            var values = this.genRangeOfValues(selection.end, selection.start - selection.end);
            rows.push.apply(rows, [selection.end].concat((0, _toConsumableArray3.default)(values)));
          } else {
            rows.push(selection);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return rows.sort();
    }
  }, {
    key: 'getColumnId',
    value: function getColumnId(columnNumber) {
      var columnId = columnNumber;
      if (this.props.displayRowCheckbox) {
        columnId--;
      }

      return columnId;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;


      return _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: this.handleClickAway },
        _react2.default.createElement(
          'tbody',
          { className: className, style: prepareStyles((0, _simpleAssign2.default)({}, style)) },
          this.createRows()
        )
      );
    }
  }]);
  return TableBody;
}(_react.Component);

TableBody.muiName = 'TableBody';
TableBody.defaultProps = {
  allRowsSelected: false,
  deselectOnClickaway: true,
  displayRowCheckbox: true,
  multiSelectable: false,
  preScanRows: true,
  selectable: true,
  style: {}
};
TableBody.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? TableBody.propTypes = {
  /**
   * @ignore
   * Set to true to indicate that all rows should be selected.
   */
  allRowsSelected: _react.PropTypes.bool,
  /**
   * Children passed to table body.
   */
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Controls whether or not to deselect all selected
   * rows after clicking outside the table.
   */
  deselectOnClickaway: _react.PropTypes.bool,
  /**
   * Controls the display of the row checkbox. The default value is true.
   */
  displayRowCheckbox: _react.PropTypes.bool,
  /**
   * @ignore
   * If true, multiple table rows can be selected.
   * CTRL/CMD+Click and SHIFT+Click are valid actions.
   * The default value is false.
   */
  multiSelectable: _react.PropTypes.bool,
  /**
   * @ignore
   * Callback function for when a cell is clicked.
   */
  onCellClick: _react.PropTypes.func,
  /**
   * @ignore
   * Called when a table cell is hovered. rowNumber
   * is the row number of the hovered row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHover: _react.PropTypes.func,
  /**
   * @ignore
   * Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _react.PropTypes.func,
  /**
   * @ignore
   * Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _react.PropTypes.func,
  /**
   * @ignore
   * Called when a table row is no longer
   * hovered. rowNumber is the row number of the row
   * that is no longer hovered.
   */
  onRowHoverExit: _react.PropTypes.func,
  /**
   * @ignore
   * Called when a row is selected. selectedRows is an
   * array of all row selections. IF all rows have been selected,
   * the string "all" will be returned instead to indicate that
   * all rows have been selected.
   */
  onRowSelection: _react.PropTypes.func,
  /**
   * Controls whether or not the rows are pre-scanned to determine
   * initial state. If your table has a large number of rows and
   * you are experiencing a delay in rendering, turn off this property.
   */
  preScanRows: _react.PropTypes.bool,
  /**
   * @ignore
   * If true, table rows can be selected. If multiple
   * row selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _react.PropTypes.bool,
  /**
   * If true, table rows will be highlighted when
   * the cursor is hovering over the row. The default
   * value is false.
   */
  showRowHover: _react.PropTypes.bool,
  /**
   * If true, every other table row starting
   * with the first row will be striped. The default value is false.
   */
  stripedRows: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;
exports.default = TableBody;
}).call(this,require('_process'))

},{"../Checkbox":"/Users/phitien/apphub/node_modules/material-ui/Checkbox/index.js","../internal/ClickAwayListener":"/Users/phitien/apphub/node_modules/material-ui/internal/ClickAwayListener.js","./TableRowColumn":"/Users/phitien/apphub/node_modules/material-ui/Table/TableRowColumn.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/get-iterator":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/get-iterator.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/extends":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","babel-runtime/helpers/toConsumableArray":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/toConsumableArray.js","babel-runtime/helpers/typeof":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/typeof.js","react":"react","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/Table/TableFooter.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableRowColumn = require('./TableRowColumn');

var _TableRowColumn2 = _interopRequireDefault(_TableRowColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableFooter = context.muiTheme.tableFooter;


  return {
    cell: {
      borderTop: '1px solid ' + tableFooter.borderColor,
      verticalAlign: 'bottom',
      padding: 20,
      textAlign: 'left',
      whiteSpace: 'nowrap'
    }
  };
}

var TableFooter = function (_Component) {
  (0, _inherits3.default)(TableFooter, _Component);

  function TableFooter() {
    (0, _classCallCheck3.default)(this, TableFooter);
    return (0, _possibleConstructorReturn3.default)(this, (TableFooter.__proto__ || (0, _getPrototypeOf2.default)(TableFooter)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableFooter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          adjustForCheckbox = _props.adjustForCheckbox,
          children = _props.children,
          className = _props.className,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['adjustForCheckbox', 'children', 'className', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var footerRows = _react2.default.Children.map(children, function (child, rowNumber) {
        var newChildProps = {
          displayBorder: false,
          key: 'f-' + rowNumber,
          rowNumber: rowNumber,
          style: (0, _simpleAssign2.default)({}, styles.cell, child.props.style)
        };

        var newDescendants = void 0;

        if (adjustForCheckbox) {
          newDescendants = [_react2.default.createElement(_TableRowColumn2.default, { key: 'fpcb' + rowNumber, style: { width: 24 } })].concat((0, _toConsumableArray3.default)(_react2.default.Children.toArray(child.props.children)));
        } else {
          newDescendants = child.props.children;
        }

        return _react2.default.cloneElement(child, newChildProps, newDescendants);
      });

      return _react2.default.createElement(
        'tfoot',
        (0, _extends3.default)({ className: className, style: prepareStyles((0, _simpleAssign2.default)({}, style)) }, other),
        footerRows
      );
    }
  }]);
  return TableFooter;
}(_react.Component);

TableFooter.muiName = 'TableFooter';
TableFooter.defaultProps = {
  adjustForCheckbox: true,
  style: {}
};
TableFooter.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? TableFooter.propTypes = {
  /**
   * @ignore
   * Controls whether or not header rows should be adjusted
   * for a checkbox column. If the select all checkbox is true,
   * this property will not influence the number of columns.
   * This is mainly useful for "super header" rows so that
   * the checkbox column does not create an offset that needs
   * to be accounted for manually.
   */
  adjustForCheckbox: _react.PropTypes.bool,
  /**
   * Children passed to table footer.
   */
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;
exports.default = TableFooter;
}).call(this,require('_process'))

},{"./TableRowColumn":"/Users/phitien/apphub/node_modules/material-ui/Table/TableRowColumn.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/extends":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/objectWithoutProperties":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/objectWithoutProperties.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","babel-runtime/helpers/toConsumableArray":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/toConsumableArray.js","react":"react","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/Table/TableHeader.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _TableHeaderColumn = require('./TableHeaderColumn');

var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableHeader = context.muiTheme.tableHeader;


  return {
    root: {
      borderBottom: '1px solid ' + tableHeader.borderColor
    }
  };
}

var TableHeader = function (_Component) {
  (0, _inherits3.default)(TableHeader, _Component);

  function TableHeader() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableHeader.__proto__ || (0, _getPrototypeOf2.default)(TableHeader)).call.apply(_ref, [this].concat(args))), _this), _this.handleCheckAll = function (event, checked) {
      if (_this.props.onSelectAll) {
        _this.props.onSelectAll(checked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableHeader, [{
    key: 'createSuperHeaderRows',
    value: function createSuperHeaderRows() {
      var numChildren = _react2.default.Children.count(this.props.children);
      if (numChildren === 1) return undefined;

      var superHeaders = [];
      for (var index = 0; index < numChildren - 1; index++) {
        var child = this.props.children[index];

        if (!_react2.default.isValidElement(child)) continue;

        var props = {
          key: 'sh' + index,
          rowNumber: index
        };
        superHeaders.push(this.createSuperHeaderRow(child, props));
      }

      if (superHeaders.length) return superHeaders;
    }
  }, {
    key: 'createSuperHeaderRow',
    value: function createSuperHeaderRow(child, props) {
      var children = [];
      if (this.props.adjustForCheckbox) {
        children.push(this.getCheckboxPlaceholder(props));
      }
      _react2.default.Children.forEach(child.props.children, function (child) {
        children.push(child);
      });

      return _react2.default.cloneElement(child, props, children);
    }
  }, {
    key: 'createBaseHeaderRow',
    value: function createBaseHeaderRow() {
      var numChildren = _react2.default.Children.count(this.props.children);
      var child = numChildren === 1 ? this.props.children : this.props.children[numChildren - 1];
      var props = {
        key: 'h' + numChildren,
        rowNumber: numChildren
      };

      var children = [this.getSelectAllCheckboxColumn(props)];
      _react2.default.Children.forEach(child.props.children, function (child) {
        children.push(child);
      });

      return _react2.default.cloneElement(child, props, children);
    }
  }, {
    key: 'getCheckboxPlaceholder',
    value: function getCheckboxPlaceholder(props) {
      if (!this.props.adjustForCheckbox) return null;

      var disabled = !this.props.enableSelectAll;
      var key = 'hpcb' + props.rowNumber;
      return _react2.default.createElement(_TableHeaderColumn2.default, {
        key: key,
        style: {
          width: 24,
          cursor: disabled ? 'not-allowed' : 'inherit'
        }
      });
    }
  }, {
    key: 'getSelectAllCheckboxColumn',
    value: function getSelectAllCheckboxColumn(props) {
      if (!this.props.displaySelectAll) return this.getCheckboxPlaceholder(props);

      var disabled = !this.props.enableSelectAll;
      var checkbox = _react2.default.createElement(_Checkbox2.default, {
        key: 'selectallcb',
        name: 'selectallcb',
        value: 'selected',
        disabled: disabled,
        checked: this.props.selectAllSelected,
        onCheck: this.handleCheckAll
      });

      var key = 'hpcb' + props.rowNumber;
      return _react2.default.createElement(
        _TableHeaderColumn2.default,
        {
          key: key,
          style: {
            width: 24,
            cursor: disabled ? 'not-allowed' : 'inherit'
          }
        },
        checkbox
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var superHeaderRows = this.createSuperHeaderRows();
      var baseHeaderRow = this.createBaseHeaderRow();

      return _react2.default.createElement(
        'thead',
        { className: className, style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
        superHeaderRows,
        baseHeaderRow
      );
    }
  }]);
  return TableHeader;
}(_react.Component);

TableHeader.muiName = 'TableHeader';
TableHeader.defaultProps = {
  adjustForCheckbox: true,
  displaySelectAll: true,
  enableSelectAll: true,
  selectAllSelected: false
};
TableHeader.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? TableHeader.propTypes = {
  /**
   * Controls whether or not header rows should be
   * adjusted for a checkbox column. If the select all
   * checkbox is true, this property will not influence
   * the number of columns. This is mainly useful for
   * "super header" rows so that the checkbox column
   * does not create an offset that needs to be accounted
   * for manually.
   */
  adjustForCheckbox: _react.PropTypes.bool,
  /**
   * Children passed to table header.
   */
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Controls whether or not the select all checkbox is displayed.
   */
  displaySelectAll: _react.PropTypes.bool,
  /**
   * If set to true, the select all button will be interactable.
   * If set to false, the button will not be interactable.
   * To hide the checkbox, set displaySelectAll to false.
   */
  enableSelectAll: _react.PropTypes.bool,
  /**
   * @ignore
   * Callback when select all has been checked.
   */
  onSelectAll: _react.PropTypes.func,
  /**
   * @ignore
   * True when select all has been checked.
   */
  selectAllSelected: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;
exports.default = TableHeader;
}).call(this,require('_process'))

},{"../Checkbox":"/Users/phitien/apphub/node_modules/material-ui/Checkbox/index.js","./TableHeaderColumn":"/Users/phitien/apphub/node_modules/material-ui/Table/TableHeaderColumn.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/Table/TableHeaderColumn.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tooltip = require('../internal/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableHeaderColumn = context.muiTheme.tableHeaderColumn;


  return {
    root: {
      fontWeight: 'normal',
      fontSize: 12,
      paddingLeft: tableHeaderColumn.spacing,
      paddingRight: tableHeaderColumn.spacing,
      height: tableHeaderColumn.height,
      textAlign: 'left',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      color: tableHeaderColumn.textColor,
      position: 'relative'
    },
    tooltip: {
      boxSizing: 'border-box',
      marginTop: tableHeaderColumn.height / 2
    }
  };
}

var TableHeaderColumn = function (_Component) {
  (0, _inherits3.default)(TableHeaderColumn, _Component);

  function TableHeaderColumn() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableHeaderColumn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableHeaderColumn.__proto__ || (0, _getPrototypeOf2.default)(TableHeaderColumn)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.onMouseEnter = function () {
      if (_this.props.tooltip !== undefined) {
        _this.setState({ hovered: true });
      }
    }, _this.onMouseLeave = function () {
      if (_this.props.tooltip !== undefined) {
        _this.setState({ hovered: false });
      }
    }, _this.onClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event, _this.props.columnNumber);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableHeaderColumn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          columnNumber = _props.columnNumber,
          hoverable = _props.hoverable,
          onClick = _props.onClick,
          onHover = _props.onHover,
          onHoverExit = _props.onHoverExit,
          style = _props.style,
          tooltip = _props.tooltip,
          tooltipStyle = _props.tooltipStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'columnNumber', 'hoverable', 'onClick', 'onHover', 'onHoverExit', 'style', 'tooltip', 'tooltipStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var handlers = {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onClick: this.onClick
      };

      var tooltipNode = void 0;

      if (tooltip !== undefined) {
        tooltipNode = _react2.default.createElement(_Tooltip2.default, {
          label: tooltip,
          show: this.state.hovered,
          style: (0, _simpleAssign2.default)(styles.tooltip, tooltipStyle)
        });
      }

      return _react2.default.createElement(
        'th',
        (0, _extends3.default)({
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }, handlers, other),
        tooltipNode,
        children
      );
    }
  }]);
  return TableHeaderColumn;
}(_react.Component);

TableHeaderColumn.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? TableHeaderColumn.propTypes = {
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Number to identify the header row. This property
   * is automatically populated when used with TableHeader.
   */
  columnNumber: _react.PropTypes.number,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  hoverable: _react.PropTypes.bool,
  /** @ignore */
  onClick: _react.PropTypes.func,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  onHover: _react.PropTypes.func,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  onHoverExit: _react.PropTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * The string to supply to the tooltip. If not
   * string is supplied no tooltip will be shown.
   */
  tooltip: _react.PropTypes.string,
  /**
   * Additional styling that can be applied to the tooltip.
   */
  tooltipStyle: _react.PropTypes.object
} : void 0;
exports.default = TableHeaderColumn;
}).call(this,require('_process'))

},{"../internal/Tooltip":"/Users/phitien/apphub/node_modules/material-ui/internal/Tooltip.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/extends":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/objectWithoutProperties":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/objectWithoutProperties.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/Table/TableRow.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var tableRow = context.muiTheme.tableRow;


  var cellBgColor = 'inherit';
  if (props.hovered || state.hovered) {
    cellBgColor = tableRow.hoverColor;
  } else if (props.selected) {
    cellBgColor = tableRow.selectedColor;
  } else if (props.striped) {
    cellBgColor = tableRow.stripeColor;
  }

  return {
    root: {
      borderBottom: props.displayBorder && '1px solid ' + tableRow.borderColor,
      color: tableRow.textColor,
      height: tableRow.height
    },
    cell: {
      backgroundColor: cellBgColor
    }
  };
}

var TableRow = function (_Component) {
  (0, _inherits3.default)(TableRow, _Component);

  function TableRow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableRow.__proto__ || (0, _getPrototypeOf2.default)(TableRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.onCellClick = function (event, columnIndex) {
      if (_this.props.selectable && _this.props.onCellClick) {
        _this.props.onCellClick(event, _this.props.rowNumber, columnIndex);
      }
      event.ctrlKey = true;
      _this.onRowClick(event);
    }, _this.onCellHover = function (event, columnIndex) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: true });
        if (_this.props.onCellHover) _this.props.onCellHover(event, _this.props.rowNumber, columnIndex);
        _this.onRowHover(event);
      }
    }, _this.onCellHoverExit = function (event, columnIndex) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: false });
        if (_this.props.onCellHoverExit) _this.props.onCellHoverExit(event, _this.props.rowNumber, columnIndex);
        _this.onRowHoverExit(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableRow, [{
    key: 'onRowClick',
    value: function onRowClick(event) {
      if (this.props.selectable && this.props.onRowClick) this.props.onRowClick(event, this.props.rowNumber);
    }
  }, {
    key: 'onRowHover',
    value: function onRowHover(event) {
      if (this.props.onRowHover) this.props.onRowHover(event, this.props.rowNumber);
    }
  }, {
    key: 'onRowHoverExit',
    value: function onRowHoverExit(event) {
      if (this.props.onRowHoverExit) this.props.onRowHoverExit(event, this.props.rowNumber);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          displayBorder = _props.displayBorder,
          hoverable = _props.hoverable,
          hovered = _props.hovered,
          onCellClick = _props.onCellClick,
          onCellHover = _props.onCellHover,
          onCellHoverExit = _props.onCellHoverExit,
          onRowClick = _props.onRowClick,
          onRowHover = _props.onRowHover,
          onRowHoverExit = _props.onRowHoverExit,
          rowNumber = _props.rowNumber,
          selectable = _props.selectable,
          selected = _props.selected,
          striped = _props.striped,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['className', 'displayBorder', 'hoverable', 'hovered', 'onCellClick', 'onCellHover', 'onCellHoverExit', 'onRowClick', 'onRowHover', 'onRowHoverExit', 'rowNumber', 'selectable', 'selected', 'striped', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var rowColumns = _react2.default.Children.map(this.props.children, function (child, columnNumber) {
        if (_react2.default.isValidElement(child)) {
          return _react2.default.cloneElement(child, {
            columnNumber: columnNumber,
            hoverable: _this2.props.hoverable,
            key: _this2.props.rowNumber + '-' + columnNumber,
            onClick: _this2.onCellClick,
            onHover: _this2.onCellHover,
            onHoverExit: _this2.onCellHoverExit,
            style: (0, _simpleAssign2.default)({}, styles.cell, child.props.style)
          });
        }
      });

      return _react2.default.createElement(
        'tr',
        (0, _extends3.default)({
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }, other),
        rowColumns
      );
    }
  }]);
  return TableRow;
}(_react.Component);

TableRow.defaultProps = {
  displayBorder: true,
  hoverable: false,
  hovered: false,
  selectable: true,
  selected: false,
  striped: false
};
TableRow.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? TableRow.propTypes = {
  /**
   * Children passed to table row.
   */
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If true, row border will be displayed for the row.
   * If false, no border will be drawn.
   */
  displayBorder: _react.PropTypes.bool,
  /**
   * Controls whether or not the row reponseds to hover events.
   */
  hoverable: _react.PropTypes.bool,
  /**
   * Controls whether or not the row should be rendered as being
   * hovered. This property is evaluated in addition to this.state.hovered
   * and can be used to synchronize the hovered state with some other
   * external events.
   */
  hovered: _react.PropTypes.bool,
  /**
   * @ignore
   * Called when a row cell is clicked.
   * rowNumber is the row number and columnId is
   * the column number or the column key.
   */
  onCellClick: _react.PropTypes.func,
  /**
   * @ignore
   * Called when a table cell is hovered.
   * rowNumber is the row number of the hovered row
   * and columnId is the column number or the column key of the cell.
   */
  onCellHover: _react.PropTypes.func,
  /**
   * @ignore
   * Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _react.PropTypes.func,
  /**
   * @ignore
   * Called when row is clicked.
   */
  onRowClick: _react.PropTypes.func,
  /**
   * @ignore
   * Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _react.PropTypes.func,
  /**
   * @ignore
   * Called when a table row is no longer hovered.
   * rowNumber is the row number of the row that is no longer hovered.
   */
  onRowHoverExit: _react.PropTypes.func,
  /**
   * Number to identify the row. This property is
   * automatically populated when used with the TableBody component.
   */
  rowNumber: _react.PropTypes.number,
  /**
   * If true, table rows can be selected. If multiple row
   * selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _react.PropTypes.bool,
  /**
   * Indicates that a particular row is selected.
   * This property can be used to programmatically select rows.
   */
  selected: _react.PropTypes.bool,
  /**
   * Indicates whether or not the row is striped.
   */
  striped: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;
exports.default = TableRow;
}).call(this,require('_process'))

},{"_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/extends":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/objectWithoutProperties":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/objectWithoutProperties.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/Table/TableRowColumn.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableRowColumn = context.muiTheme.tableRowColumn;


  var styles = {
    root: {
      paddingLeft: tableRowColumn.spacing,
      paddingRight: tableRowColumn.spacing,
      height: tableRowColumn.height,
      textAlign: 'left',
      fontSize: 13,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }
  };

  if (_react2.default.Children.count(props.children) === 1 && !isNaN(props.children)) {
    styles.textAlign = 'right';
  }

  return styles;
}

var TableRowColumn = function (_Component) {
  (0, _inherits3.default)(TableRowColumn, _Component);

  function TableRowColumn() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableRowColumn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableRowColumn.__proto__ || (0, _getPrototypeOf2.default)(TableRowColumn)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.onClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event, _this.props.columnNumber);
      }
    }, _this.onMouseEnter = function (event) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: true });
        if (_this.props.onHover) {
          _this.props.onHover(event, _this.props.columnNumber);
        }
      }
    }, _this.onMouseLeave = function (event) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: false });
        if (_this.props.onHoverExit) {
          _this.props.onHoverExit(event, _this.props.columnNumber);
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableRowColumn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          columnNumber = _props.columnNumber,
          hoverable = _props.hoverable,
          onClick = _props.onClick,
          onHover = _props.onHover,
          onHoverExit = _props.onHoverExit,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'columnNumber', 'hoverable', 'onClick', 'onHover', 'onHoverExit', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var handlers = {
        onClick: this.onClick,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      };

      return _react2.default.createElement(
        'td',
        (0, _extends3.default)({
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }, handlers, other),
        children
      );
    }
  }]);
  return TableRowColumn;
}(_react.Component);

TableRowColumn.defaultProps = {
  hoverable: false
};
TableRowColumn.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? TableRowColumn.propTypes = {
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * @ignore
   * Number to identify the header row. This property
   * is automatically populated when used with TableHeader.
   */
  columnNumber: _react.PropTypes.number,
  /**
   * @ignore
   * If true, this column responds to hover events.
   */
  hoverable: _react.PropTypes.bool,
  /** @ignore */
  onClick: _react.PropTypes.func,
  /** @ignore */
  onHover: _react.PropTypes.func,
  /**
   * @ignore
   * Callback function for hover exit event.
   */
  onHoverExit: _react.PropTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;
exports.default = TableRowColumn;
}).call(this,require('_process'))

},{"_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/extends":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/objectWithoutProperties":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/objectWithoutProperties.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/Table/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TableRowColumn = exports.TableRow = exports.TableHeaderColumn = exports.TableHeader = exports.TableFooter = exports.TableBody = exports.Table = undefined;

var _Table2 = require('./Table');

var _Table3 = _interopRequireDefault(_Table2);

var _TableBody2 = require('./TableBody');

var _TableBody3 = _interopRequireDefault(_TableBody2);

var _TableFooter2 = require('./TableFooter');

var _TableFooter3 = _interopRequireDefault(_TableFooter2);

var _TableHeader2 = require('./TableHeader');

var _TableHeader3 = _interopRequireDefault(_TableHeader2);

var _TableHeaderColumn2 = require('./TableHeaderColumn');

var _TableHeaderColumn3 = _interopRequireDefault(_TableHeaderColumn2);

var _TableRow2 = require('./TableRow');

var _TableRow3 = _interopRequireDefault(_TableRow2);

var _TableRowColumn2 = require('./TableRowColumn');

var _TableRowColumn3 = _interopRequireDefault(_TableRowColumn2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Table = _Table3.default;
exports.TableBody = _TableBody3.default;
exports.TableFooter = _TableFooter3.default;
exports.TableHeader = _TableHeader3.default;
exports.TableHeaderColumn = _TableHeaderColumn3.default;
exports.TableRow = _TableRow3.default;
exports.TableRowColumn = _TableRowColumn3.default;
exports.default = _Table3.default;
},{"./Table":"/Users/phitien/apphub/node_modules/material-ui/Table/Table.js","./TableBody":"/Users/phitien/apphub/node_modules/material-ui/Table/TableBody.js","./TableFooter":"/Users/phitien/apphub/node_modules/material-ui/Table/TableFooter.js","./TableHeader":"/Users/phitien/apphub/node_modules/material-ui/Table/TableHeader.js","./TableHeaderColumn":"/Users/phitien/apphub/node_modules/material-ui/Table/TableHeaderColumn.js","./TableRow":"/Users/phitien/apphub/node_modules/material-ui/Table/TableRow.js","./TableRowColumn":"/Users/phitien/apphub/node_modules/material-ui/Table/TableRowColumn.js"}],"/Users/phitien/apphub/node_modules/material-ui/internal/CircleRipple.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = require('recompose/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _autoPrefix = require('../utils/autoPrefix');

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircleRipple = function (_Component) {
  (0, _inherits3.default)(CircleRipple, _Component);

  function CircleRipple() {
    (0, _classCallCheck3.default)(this, CircleRipple);
    return (0, _possibleConstructorReturn3.default)(this, (CircleRipple.__proto__ || (0, _getPrototypeOf2.default)(CircleRipple)).apply(this, arguments));
  }

  (0, _createClass3.default)(CircleRipple, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2.default)(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentDidAppear',
    value: function componentDidAppear() {
      this.animate();
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      this.animate();
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;
      style.opacity = 0;
      // If the animation is aborted, remove from the DOM immediately
      var removeAfter = this.props.aborted ? 0 : 2000;
      this.enterTimer = setTimeout(callback, removeAfter);
    }
  }, {
    key: 'animate',
    value: function animate() {
      var style = _reactDom2.default.findDOMNode(this).style;
      var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform');
      _autoPrefix2.default.set(style, 'transition', transitionValue);
      _autoPrefix2.default.set(style, 'transform', 'scale(1)');
    }
  }, {
    key: 'initializeAnimation',
    value: function initializeAnimation(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;
      style.opacity = this.props.opacity;
      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
      this.leaveTimer = setTimeout(callback, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          aborted = _props.aborted,
          color = _props.color,
          opacity = _props.opacity,
          style = _props.style,
          touchGenerated = _props.touchGenerated,
          other = (0, _objectWithoutProperties3.default)(_props, ['aborted', 'color', 'opacity', 'style', 'touchGenerated']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedStyles = (0, _simpleAssign2.default)({
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        backgroundColor: color
      }, style);

      return _react2.default.createElement('div', (0, _extends3.default)({}, other, { style: prepareStyles(mergedStyles) }));
    }
  }]);
  return CircleRipple;
}(_react.Component);

CircleRipple.defaultProps = {
  opacity: 0.1,
  aborted: false
};
CircleRipple.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? CircleRipple.propTypes = {
  aborted: _react.PropTypes.bool,
  color: _react.PropTypes.string,
  opacity: _react.PropTypes.number,
  style: _react.PropTypes.object,
  touchGenerated: _react.PropTypes.bool
} : void 0;
exports.default = CircleRipple;
}).call(this,require('_process'))

},{"../styles/transitions":"/Users/phitien/apphub/node_modules/material-ui/styles/transitions.js","../utils/autoPrefix":"/Users/phitien/apphub/node_modules/material-ui/utils/autoPrefix.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/extends":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/objectWithoutProperties":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/objectWithoutProperties.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react","react-dom":"react-dom","recompose/shallowEqual":"/Users/phitien/apphub/node_modules/recompose/shallowEqual.js","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/internal/ClickAwayListener.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _events = require('../utils/events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDescendant = function isDescendant(el, target) {
  if (target !== null) {
    return el === target || isDescendant(el, target.parentNode);
  }
  return false;
};

var clickAwayEvents = ['mouseup', 'touchend'];
var bind = function bind(callback) {
  return clickAwayEvents.forEach(function (event) {
    return _events2.default.on(document, event, callback);
  });
};
var unbind = function unbind(callback) {
  return clickAwayEvents.forEach(function (event) {
    return _events2.default.off(document, event, callback);
  });
};

var ClickAwayListener = function (_Component) {
  (0, _inherits3.default)(ClickAwayListener, _Component);

  function ClickAwayListener() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClickAwayListener);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClickAwayListener.__proto__ || (0, _getPrototypeOf2.default)(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickAway = function (event) {
      if (event.defaultPrevented) {
        return;
      }

      // IE11 support, which trigger the handleClickAway even after the unbind
      if (_this.isCurrentlyMounted) {
        var el = _reactDom2.default.findDOMNode(_this);

        if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
          _this.props.onClickAway(event);
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ClickAwayListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.isCurrentlyMounted = true;
      if (this.props.onClickAway) {
        bind(this.handleClickAway);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.onClickAway !== this.props.onClickAway) {
        unbind(this.handleClickAway);
        if (this.props.onClickAway) {
          bind(this.handleClickAway);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.isCurrentlyMounted = false;
      unbind(this.handleClickAway);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return ClickAwayListener;
}(_react.Component);

process.env.NODE_ENV !== "production" ? ClickAwayListener.propTypes = {
  children: _react.PropTypes.element,
  onClickAway: _react.PropTypes.func
} : void 0;
exports.default = ClickAwayListener;
}).call(this,require('_process'))

},{"../utils/events":"/Users/phitien/apphub/node_modules/material-ui/utils/events.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react","react-dom":"react-dom"}],"/Users/phitien/apphub/node_modules/material-ui/internal/EnhancedSwitch.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _FocusRipple = require('./FocusRipple');

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

var _TouchRipple = require('./TouchRipple');

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

var _Paper = require('./../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      position: 'relative',
      overflow: 'visible',
      display: 'table',
      height: 'auto',
      width: '100%'
    },
    input: {
      position: 'absolute',
      cursor: 'inherit',
      pointerEvents: 'all',
      opacity: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
      left: 0,
      boxSizing: 'border-box',
      padding: 0,
      margin: 0
    },
    controls: {
      display: 'flex',
      width: '100%',
      height: '100%'
    },
    label: {
      float: 'left',
      position: 'relative',
      display: 'block',
      width: 'calc(100% - 60px)',
      lineHeight: '24px',
      color: baseTheme.palette.textColor,
      fontFamily: baseTheme.fontFamily
    },
    wrap: {
      transition: _transitions2.default.easeOut(),
      float: 'left',
      position: 'relative',
      display: 'block',
      flexShrink: 0,
      width: 60 - baseTheme.spacing.desktopGutterLess,
      marginRight: props.labelPosition === 'right' ? baseTheme.spacing.desktopGutterLess : 0,
      marginLeft: props.labelPosition === 'left' ? baseTheme.spacing.desktopGutterLess : 0
    },
    ripple: {
      color: props.rippleColor || baseTheme.palette.primary1Color,
      height: '200%',
      width: '200%',
      top: -12,
      left: -12
    }
  };
}

var EnhancedSwitch = function (_Component) {
  (0, _inherits3.default)(EnhancedSwitch, _Component);

  function EnhancedSwitch() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedSwitch.__proto__ || (0, _getPrototypeOf2.default)(EnhancedSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isKeyboardFocused: false
    }, _this.handleChange = function (event) {
      _this.tabPressed = false;
      _this.setState({
        isKeyboardFocused: false
      });

      var isInputChecked = _this.refs.checkbox.checked;

      if (!_this.props.hasOwnProperty('checked') && _this.props.onParentShouldUpdate) {
        _this.props.onParentShouldUpdate(isInputChecked);
      }

      if (_this.props.onSwitch) {
        _this.props.onSwitch(event, isInputChecked);
      }
    }, _this.handleKeyDown = function (event) {
      var code = (0, _keycode2.default)(event);

      if (code === 'tab') {
        _this.tabPressed = true;
      }
      if (_this.state.isKeyboardFocused && code === 'space') {
        _this.handleChange(event);
      }
    }, _this.handleKeyUp = function (event) {
      if (_this.state.isKeyboardFocused && (0, _keycode2.default)(event) === 'space') {
        _this.handleChange(event);
      }
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.refs.touchRipple.start(event);
      }
    }, _this.handleMouseUp = function () {
      _this.refs.touchRipple.end();
    }, _this.handleMouseLeave = function () {
      _this.refs.touchRipple.end();
    }, _this.handleTouchStart = function (event) {
      _this.refs.touchRipple.start(event);
    }, _this.handleTouchEnd = function () {
      _this.refs.touchRipple.end();
    }, _this.handleBlur = function (event) {
      _this.setState({
        isKeyboardFocused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      // setTimeout is needed becuase the focus event fires first
      // Wait so that we can capture if this was a keyboard focus
      // or touch focus
      setTimeout(function () {
        if (_this.tabPressed) {
          _this.setState({
            isKeyboardFocused: true
          });
        }
      }, 150);

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EnhancedSwitch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var inputNode = this.refs.checkbox;
      if ((!this.props.switched || inputNode.checked !== this.props.switched) && this.props.onParentShouldUpdate) {
        this.props.onParentShouldUpdate(inputNode.checked);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var hasCheckedProp = nextProps.hasOwnProperty('checked');
      var hasNewDefaultProp = nextProps.hasOwnProperty('defaultChecked') && nextProps.defaultChecked !== this.props.defaultChecked;

      if (hasCheckedProp || hasNewDefaultProp) {
        var switched = nextProps.checked || nextProps.defaultChecked || false;

        this.setState({
          switched: switched
        });

        if (this.props.onParentShouldUpdate && switched !== this.props.switched) {
          this.props.onParentShouldUpdate(switched);
        }
      }
    }
  }, {
    key: 'isSwitched',
    value: function isSwitched() {
      return this.refs.checkbox.checked;
    }

    // no callback here because there is no event

  }, {
    key: 'setSwitched',
    value: function setSwitched(newSwitchedValue) {
      if (!this.props.hasOwnProperty('checked') || this.props.checked === false) {
        if (this.props.onParentShouldUpdate) {
          this.props.onParentShouldUpdate(newSwitchedValue);
        }
        this.refs.checkbox.checked = newSwitchedValue;
      } else {
        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: Cannot call set method while checked is defined as a property.') : void 0;
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.checkbox.value;
    }

    // Checkbox inputs only use SPACE to change their state. Using ENTER will
    // update the ui but not the input.


    /**
     * Because both the ripples and the checkbox input cannot share pointer
     * events, the checkbox input takes control of pointer events and calls
     * ripple animations manually.
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          value = _props.value,
          iconStyle = _props.iconStyle,
          inputStyle = _props.inputStyle,
          inputType = _props.inputType,
          label = _props.label,
          labelStyle = _props.labelStyle,
          labelPosition = _props.labelPosition,
          onSwitch = _props.onSwitch,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onMouseUp = _props.onMouseUp,
          onMouseDown = _props.onMouseDown,
          onMouseLeave = _props.onMouseLeave,
          onTouchStart = _props.onTouchStart,
          onTouchEnd = _props.onTouchEnd,
          onParentShouldUpdate = _props.onParentShouldUpdate,
          disabled = _props.disabled,
          disableTouchRipple = _props.disableTouchRipple,
          disableFocusRipple = _props.disableFocusRipple,
          className = _props.className,
          rippleColor = _props.rippleColor,
          rippleStyle = _props.rippleStyle,
          style = _props.style,
          switched = _props.switched,
          switchElement = _props.switchElement,
          thumbStyle = _props.thumbStyle,
          trackStyle = _props.trackStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['name', 'value', 'iconStyle', 'inputStyle', 'inputType', 'label', 'labelStyle', 'labelPosition', 'onSwitch', 'onBlur', 'onFocus', 'onMouseUp', 'onMouseDown', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'onParentShouldUpdate', 'disabled', 'disableTouchRipple', 'disableFocusRipple', 'className', 'rippleColor', 'rippleStyle', 'style', 'switched', 'switchElement', 'thumbStyle', 'trackStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var wrapStyles = (0, _simpleAssign2.default)(styles.wrap, iconStyle);
      var mergedRippleStyle = (0, _simpleAssign2.default)(styles.ripple, rippleStyle);

      if (thumbStyle) {
        wrapStyles.marginLeft /= 2;
        wrapStyles.marginRight /= 2;
      }

      var labelElement = label && _react2.default.createElement(
        'label',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
        label
      );

      var showTouchRipple = !disabled && !disableTouchRipple;
      var showFocusRipple = !disabled && !disableFocusRipple;

      var touchRipple = _react2.default.createElement(_TouchRipple2.default, {
        ref: 'touchRipple',
        key: 'touchRipple',
        style: mergedRippleStyle,
        color: mergedRippleStyle.color,
        muiTheme: this.context.muiTheme,
        centerRipple: true
      });

      var focusRipple = _react2.default.createElement(_FocusRipple2.default, {
        key: 'focusRipple',
        innerStyle: mergedRippleStyle,
        color: mergedRippleStyle.color,
        muiTheme: this.context.muiTheme,
        show: this.state.isKeyboardFocused
      });

      var ripples = [showTouchRipple ? touchRipple : null, showFocusRipple ? focusRipple : null];

      var inputElement = _react2.default.createElement('input', (0, _extends3.default)({}, other, {
        ref: 'checkbox',
        type: inputType,
        style: prepareStyles((0, _simpleAssign2.default)(styles.input, inputStyle)),
        name: name,
        value: value,
        disabled: disabled,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        onMouseUp: showTouchRipple && this.handleMouseUp,
        onMouseDown: showTouchRipple && this.handleMouseDown,
        onMouseLeave: showTouchRipple && this.handleMouseLeave,
        onTouchStart: showTouchRipple && this.handleTouchStart,
        onTouchEnd: showTouchRipple && this.handleTouchEnd
      }));

      // If toggle component (indicated by whether the style includes thumb) manually lay out
      // elements in order to nest ripple elements
      var switchOrThumbElement = !thumbStyle ? _react2.default.createElement(
        'div',
        { style: prepareStyles(wrapStyles) },
        switchElement,
        ripples
      ) : _react2.default.createElement(
        'div',
        { style: prepareStyles(wrapStyles) },
        _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, trackStyle)) }),
        _react2.default.createElement(
          _Paper2.default,
          { style: thumbStyle, zDepth: 1, circle: true },
          ' ',
          ripples,
          ' '
        )
      );

      var elementsInOrder = labelPosition === 'right' ? _react2.default.createElement(
        'div',
        { style: styles.controls },
        switchOrThumbElement,
        labelElement
      ) : _react2.default.createElement(
        'div',
        { style: styles.controls },
        labelElement,
        switchOrThumbElement
      );

      return _react2.default.createElement(
        'div',
        { ref: 'root', className: className, style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
        _react2.default.createElement(_reactEventListener2.default, {
          target: 'window',
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp
        }),
        inputElement,
        elementsInOrder
      );
    }
  }]);
  return EnhancedSwitch;
}(_react.Component);

EnhancedSwitch.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? EnhancedSwitch.propTypes = {
  checked: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  defaultChecked: _react.PropTypes.bool,
  disableFocusRipple: _react.PropTypes.bool,
  disableTouchRipple: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  iconStyle: _react.PropTypes.object,
  inputStyle: _react.PropTypes.object,
  inputType: _react.PropTypes.string.isRequired,
  label: _react.PropTypes.node,
  labelPosition: _react.PropTypes.oneOf(['left', 'right']),
  labelStyle: _react.PropTypes.object,
  name: _react.PropTypes.string,
  onBlur: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onMouseDown: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onMouseUp: _react.PropTypes.func,
  onParentShouldUpdate: _react.PropTypes.func,
  onSwitch: _react.PropTypes.func,
  onTouchEnd: _react.PropTypes.func,
  onTouchStart: _react.PropTypes.func,
  rippleColor: _react.PropTypes.string,
  rippleStyle: _react.PropTypes.object,
  style: _react.PropTypes.object,
  switchElement: _react.PropTypes.element.isRequired,
  switched: _react.PropTypes.bool.isRequired,
  thumbStyle: _react.PropTypes.object,
  trackStyle: _react.PropTypes.object,
  value: _react.PropTypes.any
} : void 0;
exports.default = EnhancedSwitch;
}).call(this,require('_process'))

},{"../styles/transitions":"/Users/phitien/apphub/node_modules/material-ui/styles/transitions.js","./../Paper":"/Users/phitien/apphub/node_modules/material-ui/Paper/index.js","./FocusRipple":"/Users/phitien/apphub/node_modules/material-ui/internal/FocusRipple.js","./TouchRipple":"/Users/phitien/apphub/node_modules/material-ui/internal/TouchRipple.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/extends":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/objectWithoutProperties":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/objectWithoutProperties.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","keycode":"/Users/phitien/apphub/node_modules/keycode/index.js","react":"react","react-event-listener":"/Users/phitien/apphub/node_modules/react-event-listener/lib/index.js","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js","warning":"/Users/phitien/apphub/node_modules/warning/browser.js"}],"/Users/phitien/apphub/node_modules/material-ui/internal/FocusRipple.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = require('recompose/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _autoPrefix = require('../utils/autoPrefix');

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _ScaleIn = require('./ScaleIn');

var _ScaleIn2 = _interopRequireDefault(_ScaleIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pulsateDuration = 750;

var FocusRipple = function (_Component) {
  (0, _inherits3.default)(FocusRipple, _Component);

  function FocusRipple() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FocusRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FocusRipple.__proto__ || (0, _getPrototypeOf2.default)(FocusRipple)).call.apply(_ref, [this].concat(args))), _this), _this.pulsate = function () {
      var innerCircle = _reactDom2.default.findDOMNode(_this.refs.innerCircle);
      if (!innerCircle) return;

      var startScale = 'scale(1)';
      var endScale = 'scale(0.85)';
      var currentScale = innerCircle.style.transform || startScale;
      var nextScale = currentScale === startScale ? endScale : startScale;

      _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale);
      _this.timeout = setTimeout(_this.pulsate, pulsateDuration);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FocusRipple, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.show) {
        this.setRippleSize();
        this.pulsate();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.show) {
        this.setRippleSize();
        this.pulsate();
      } else {
        if (this.timeout) clearTimeout(this.timeout);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'getRippleElement',
    value: function getRippleElement(props) {
      var color = props.color,
          innerStyle = props.innerStyle,
          opacity = props.opacity;
      var _context$muiTheme = this.context.muiTheme,
          prepareStyles = _context$muiTheme.prepareStyles,
          ripple = _context$muiTheme.ripple;


      var innerStyles = (0, _simpleAssign2.default)({
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        opacity: opacity ? opacity : 0.16,
        backgroundColor: color || ripple.color,
        transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
      }, innerStyle);

      return _react2.default.createElement('div', { ref: 'innerCircle', style: prepareStyles((0, _simpleAssign2.default)({}, innerStyles)) });
    }
  }, {
    key: 'setRippleSize',
    value: function setRippleSize() {
      var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
      var height = el.offsetHeight;
      var width = el.offsetWidth;
      var size = Math.max(height, width);

      var oldTop = 0;
      // For browsers that don't support endsWith()
      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
        oldTop = parseInt(el.style.top);
      }
      el.style.height = size + 'px';
      el.style.top = height / 2 - size / 2 + oldTop + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          show = _props.show,
          style = _props.style;


      var mergedRootStyles = (0, _simpleAssign2.default)({
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }, style);

      var ripple = show ? this.getRippleElement(this.props) : null;

      return _react2.default.createElement(
        _ScaleIn2.default,
        {
          maxScale: 0.85,
          style: mergedRootStyles
        },
        ripple
      );
    }
  }]);
  return FocusRipple;
}(_react.Component);

FocusRipple.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? FocusRipple.propTypes = {
  color: _react.PropTypes.string,
  innerStyle: _react.PropTypes.object,
  opacity: _react.PropTypes.number,
  show: _react.PropTypes.bool,
  style: _react.PropTypes.object
} : void 0;
exports.default = FocusRipple;
}).call(this,require('_process'))

},{"../styles/transitions":"/Users/phitien/apphub/node_modules/material-ui/styles/transitions.js","../utils/autoPrefix":"/Users/phitien/apphub/node_modules/material-ui/utils/autoPrefix.js","./ScaleIn":"/Users/phitien/apphub/node_modules/material-ui/internal/ScaleIn.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react","react-dom":"react-dom","recompose/shallowEqual":"/Users/phitien/apphub/node_modules/recompose/shallowEqual.js","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/internal/ScaleIn.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _ScaleInChild = require('./ScaleInChild');

var _ScaleInChild2 = _interopRequireDefault(_ScaleInChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScaleIn = function (_Component) {
  (0, _inherits3.default)(ScaleIn, _Component);

  function ScaleIn() {
    (0, _classCallCheck3.default)(this, ScaleIn);
    return (0, _possibleConstructorReturn3.default)(this, (ScaleIn.__proto__ || (0, _getPrototypeOf2.default)(ScaleIn)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScaleIn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          childStyle = _props.childStyle,
          enterDelay = _props.enterDelay,
          maxScale = _props.maxScale,
          minScale = _props.minScale,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
        position: 'relative',
        overflow: 'hidden',
        height: '100%'
      }, style);

      var newChildren = _react2.default.Children.map(children, function (child) {
        return _react2.default.createElement(
          _ScaleInChild2.default,
          {
            key: child.key,
            enterDelay: enterDelay,
            maxScale: maxScale,
            minScale: minScale,
            style: childStyle
          },
          child
        );
      });

      return _react2.default.createElement(
        _reactAddonsTransitionGroup2.default,
        (0, _extends3.default)({}, other, {
          style: prepareStyles(mergedRootStyles),
          component: 'div'
        }),
        newChildren
      );
    }
  }]);
  return ScaleIn;
}(_react.Component);

ScaleIn.defaultProps = {
  enterDelay: 0
};
ScaleIn.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? ScaleIn.propTypes = {
  childStyle: _react.PropTypes.object,
  children: _react.PropTypes.node,
  enterDelay: _react.PropTypes.number,
  maxScale: _react.PropTypes.number,
  minScale: _react.PropTypes.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;
exports.default = ScaleIn;
}).call(this,require('_process'))

},{"./ScaleInChild":"/Users/phitien/apphub/node_modules/material-ui/internal/ScaleInChild.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/extends":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/objectWithoutProperties":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/objectWithoutProperties.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react","react-addons-transition-group":"/Users/phitien/apphub/node_modules/react-addons-transition-group/index.js","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/internal/ScaleInChild.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _autoPrefix = require('../utils/autoPrefix');

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScaleInChild = function (_Component) {
  (0, _inherits3.default)(ScaleInChild, _Component);

  function ScaleInChild() {
    (0, _classCallCheck3.default)(this, ScaleInChild);
    return (0, _possibleConstructorReturn3.default)(this, (ScaleInChild.__proto__ || (0, _getPrototypeOf2.default)(ScaleInChild)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScaleInChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentDidAppear',
    value: function componentDidAppear() {
      this.animate();
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      this.animate();
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;

      style.opacity = '0';
      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')');

      this.leaveTimer = setTimeout(callback, 450);
    }
  }, {
    key: 'animate',
    value: function animate() {
      var style = _reactDom2.default.findDOMNode(this).style;

      style.opacity = '1';
      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
    }
  }, {
    key: 'initializeAnimation',
    value: function initializeAnimation(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;

      style.opacity = '0';
      _autoPrefix2.default.set(style, 'transform', 'scale(0)');

      this.enterTimer = setTimeout(callback, this.props.enterDelay);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          enterDelay = _props.enterDelay,
          maxScale = _props.maxScale,
          minScale = _props.minScale,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterDelay', 'maxScale', 'minScale', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
      }, style);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
        children
      );
    }
  }]);
  return ScaleInChild;
}(_react.Component);

ScaleInChild.defaultProps = {
  enterDelay: 0,
  maxScale: 1,
  minScale: 0
};
ScaleInChild.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? ScaleInChild.propTypes = {
  children: _react.PropTypes.node,
  enterDelay: _react.PropTypes.number,
  maxScale: _react.PropTypes.number,
  minScale: _react.PropTypes.number,
  style: _react.PropTypes.object
} : void 0;
exports.default = ScaleInChild;
}).call(this,require('_process'))

},{"../styles/transitions":"/Users/phitien/apphub/node_modules/material-ui/styles/transitions.js","../utils/autoPrefix":"/Users/phitien/apphub/node_modules/material-ui/utils/autoPrefix.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/extends":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/objectWithoutProperties":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/objectWithoutProperties.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react","react-dom":"react-dom","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/internal/Tooltip.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var verticalPosition = props.verticalPosition;
  var horizontalPosition = props.horizontalPosition;
  var touchMarginOffset = props.touch ? 10 : 0;
  var touchOffsetTop = props.touch ? -20 : -10;
  var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;

  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      zIndex = _context$muiTheme.zIndex,
      tooltip = _context$muiTheme.tooltip,
      borderRadius = _context$muiTheme.borderRadius;


  var styles = {
    root: {
      position: 'absolute',
      fontFamily: baseTheme.fontFamily,
      fontSize: '10px',
      lineHeight: '22px',
      padding: '0 8px',
      zIndex: zIndex.tooltip,
      color: tooltip.color,
      overflow: 'hidden',
      top: -10000,
      borderRadius: borderRadius,
      userSelect: 'none',
      opacity: 0,
      right: horizontalPosition === 'left' ? 12 : null,
      left: horizontalPosition === 'center' ? (state.offsetWidth - 48) / 2 * -1 : horizontalPosition === 'right' ? 12 : null,
      transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
    },
    label: {
      position: 'relative',
      whiteSpace: 'nowrap'
    },
    ripple: {
      position: 'absolute',
      left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
      top: verticalPosition === 'bottom' ? 0 : '100%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ', ' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
    },
    rootWhenShown: {
      top: verticalPosition === 'top' ? touchOffsetTop : 36,
      opacity: 0.9,
      transform: 'translate(0px, ' + offset + 'px)',
      transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
    },
    rootWhenTouched: {
      fontSize: '14px',
      lineHeight: '32px',
      padding: '0 16px'
    },
    rippleWhenShown: {
      backgroundColor: tooltip.rippleBackgroundColor,
      transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
    }
  };

  return styles;
}

var Tooltip = function (_Component) {
  (0, _inherits3.default)(Tooltip, _Component);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offsetWidth: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setRippleSize();
      this.setTooltipPosition();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setTooltipPosition();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setRippleSize();
    }
  }, {
    key: 'setRippleSize',
    value: function setRippleSize() {
      var ripple = this.refs.ripple;
      var tooltip = this.refs.tooltip;
      var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
      var tooltipHeight = parseInt(tooltip.offsetHeight, 10);

      var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
      if (this.props.show) {
        ripple.style.height = rippleDiameter + 'px';
        ripple.style.width = rippleDiameter + 'px';
      } else {
        ripple.style.width = '0px';
        ripple.style.height = '0px';
      }
    }
  }, {
    key: 'setTooltipPosition',
    value: function setTooltipPosition() {
      this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          horizontalPosition = _props.horizontalPosition,
          label = _props.label,
          show = _props.show,
          touch = _props.touch,
          verticalPosition = _props.verticalPosition,
          other = (0, _objectWithoutProperties3.default)(_props, ['horizontalPosition', 'label', 'show', 'touch', 'verticalPosition']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, {
          ref: 'tooltip',
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style))
        }),
        _react2.default.createElement('div', {
          ref: 'ripple',
          style: prepareStyles((0, _simpleAssign2.default)(styles.ripple, this.props.show && styles.rippleWhenShown))
        }),
        _react2.default.createElement(
          'span',
          { style: prepareStyles(styles.label) },
          label
        )
      );
    }
  }]);
  return Tooltip;
}(_react.Component);

Tooltip.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? Tooltip.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  horizontalPosition: _react.PropTypes.oneOf(['left', 'right', 'center']),
  label: _react.PropTypes.node.isRequired,
  show: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  touch: _react.PropTypes.bool,
  verticalPosition: _react.PropTypes.oneOf(['top', 'bottom'])
} : void 0;
exports.default = Tooltip;
}).call(this,require('_process'))

},{"../styles/transitions":"/Users/phitien/apphub/node_modules/material-ui/styles/transitions.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/extends":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/objectWithoutProperties":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/objectWithoutProperties.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/internal/TouchRipple.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _toArray2 = require('babel-runtime/helpers/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _dom = require('../utils/dom');

var _dom2 = _interopRequireDefault(_dom);

var _CircleRipple = require('./CircleRipple');

var _CircleRipple2 = _interopRequireDefault(_CircleRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Remove the first element of the array
var shift = function shift(_ref) {
  var _ref2 = (0, _toArray3.default)(_ref),
      newArray = _ref2.slice(1);

  return newArray;
};

var TouchRipple = function (_Component) {
  (0, _inherits3.default)(TouchRipple, _Component);

  function TouchRipple(props, context) {
    (0, _classCallCheck3.default)(this, TouchRipple);

    // Touch start produces a mouse down event for compat reasons. To avoid
    // showing ripples twice we skip showing a ripple for the first mouse down
    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
    // to avoid re-rendering when we change it.
    var _this = (0, _possibleConstructorReturn3.default)(this, (TouchRipple.__proto__ || (0, _getPrototypeOf2.default)(TouchRipple)).call(this, props, context));

    _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.start(event, false);
      }
    };

    _this.handleMouseUp = function () {
      _this.end();
    };

    _this.handleMouseLeave = function () {
      _this.end();
    };

    _this.handleTouchStart = function (event) {
      event.stopPropagation();
      // If the user is swiping (not just tapping), save the position so we can
      // abort ripples if the user appears to be scrolling.
      if (_this.props.abortOnScroll && event.touches) {
        _this.startListeningForScrollAbort(event);
        _this.startTime = Date.now();
      }
      _this.start(event, true);
    };

    _this.handleTouchEnd = function () {
      _this.end();
    };

    _this.handleTouchMove = function (event) {
      // Stop trying to abort if we're already 300ms into the animation
      var timeSinceStart = Math.abs(Date.now() - _this.startTime);
      if (timeSinceStart > 300) {
        _this.stopListeningForScrollAbort();
        return;
      }

      // If the user is scrolling...
      var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
      var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
      // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
      if (deltaY > 6 || deltaX > 6) {
        var currentRipples = _this.state.ripples;
        var ripple = currentRipples[0];
        // This clone will replace the ripple in ReactTransitionGroup with a
        // version that will disappear immediately when removed from the DOM
        var abortedRipple = _react2.default.cloneElement(ripple, { aborted: true });
        // Remove the old ripple and replace it with the new updated one
        currentRipples = shift(currentRipples);
        currentRipples = [].concat((0, _toConsumableArray3.default)(currentRipples), [abortedRipple]);
        _this.setState({ ripples: currentRipples }, function () {
          // Call end after we've set the ripple to abort otherwise the setState
          // in end() merges with this and the ripple abort fails
          _this.end();
        });
      }
    };

    _this.ignoreNextMouseDown = false;

    _this.state = {
      // This prop allows us to only render the ReactTransitionGroup
      // on the first click of the component, making the inital render faster.
      hasRipples: false,
      nextKey: 0,
      ripples: []
    };
    return _this;
  }

  (0, _createClass3.default)(TouchRipple, [{
    key: 'start',
    value: function start(event, isRippleTouchGenerated) {
      var theme = this.context.muiTheme.ripple;

      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
        this.ignoreNextMouseDown = false;
        return;
      }

      var ripples = this.state.ripples;

      // Add a ripple to the ripples array
      ripples = [].concat((0, _toConsumableArray3.default)(ripples), [_react2.default.createElement(_CircleRipple2.default, {
        key: this.state.nextKey,
        style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
        color: this.props.color || theme.color,
        opacity: this.props.opacity,
        touchGenerated: isRippleTouchGenerated
      })]);

      this.ignoreNextMouseDown = isRippleTouchGenerated;
      this.setState({
        hasRipples: true,
        nextKey: this.state.nextKey + 1,
        ripples: ripples
      });
    }
  }, {
    key: 'end',
    value: function end() {
      var currentRipples = this.state.ripples;
      this.setState({
        ripples: shift(currentRipples)
      });
      if (this.props.abortOnScroll) {
        this.stopListeningForScrollAbort();
      }
    }

    // Check if the user seems to be scrolling and abort the animation if so

  }, {
    key: 'startListeningForScrollAbort',
    value: function startListeningForScrollAbort(event) {
      this.firstTouchY = event.touches[0].clientY;
      this.firstTouchX = event.touches[0].clientX;
      // Note that when scolling Chrome throttles this event to every 200ms
      // Also note we don't listen for scroll events directly as there's no general
      // way to cover cases like scrolling within containers on the page
      document.body.addEventListener('touchmove', this.handleTouchMove);
    }
  }, {
    key: 'stopListeningForScrollAbort',
    value: function stopListeningForScrollAbort() {
      document.body.removeEventListener('touchmove', this.handleTouchMove);
    }
  }, {
    key: 'getRippleStyle',
    value: function getRippleStyle(event) {
      var el = _reactDom2.default.findDOMNode(this);
      var elHeight = el.offsetHeight;
      var elWidth = el.offsetWidth;
      var offset = _dom2.default.offset(el);
      var isTouchEvent = event.touches && event.touches.length;
      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
      var pointerX = pageX - offset.left;
      var pointerY = pageY - offset.top;
      var topLeftDiag = this.calcDiag(pointerX, pointerY);
      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
      var rippleSize = rippleRadius * 2;
      var left = pointerX - rippleRadius;
      var top = pointerY - rippleRadius;

      return {
        directionInvariant: true,
        height: rippleSize,
        width: rippleSize,
        top: top,
        left: left
      };
    }
  }, {
    key: 'calcDiag',
    value: function calcDiag(a, b) {
      return Math.sqrt(a * a + b * b);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style;
      var _state = this.state,
          hasRipples = _state.hasRipples,
          ripples = _state.ripples;
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var rippleGroup = void 0;

      if (hasRipples) {
        var mergedStyles = (0, _simpleAssign2.default)({
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }, style);

        rippleGroup = _react2.default.createElement(
          _reactAddonsTransitionGroup2.default,
          { style: prepareStyles(mergedStyles) },
          ripples
        );
      }

      return _react2.default.createElement(
        'div',
        {
          onMouseUp: this.handleMouseUp,
          onMouseDown: this.handleMouseDown,
          onMouseLeave: this.handleMouseLeave,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        },
        rippleGroup,
        children
      );
    }
  }]);
  return TouchRipple;
}(_react.Component);

TouchRipple.defaultProps = {
  abortOnScroll: true
};
TouchRipple.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? TouchRipple.propTypes = {
  abortOnScroll: _react.PropTypes.bool,
  centerRipple: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  color: _react.PropTypes.string,
  opacity: _react.PropTypes.number,
  style: _react.PropTypes.object
} : void 0;
exports.default = TouchRipple;
}).call(this,require('_process'))

},{"../utils/dom":"/Users/phitien/apphub/node_modules/material-ui/utils/dom.js","./CircleRipple":"/Users/phitien/apphub/node_modules/material-ui/internal/CircleRipple.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","babel-runtime/helpers/toArray":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/toArray.js","babel-runtime/helpers/toConsumableArray":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/toConsumableArray.js","react":"react","react-addons-transition-group":"/Users/phitien/apphub/node_modules/react-addons-transition-group/index.js","react-dom":"react-dom","simple-assign":"/Users/phitien/apphub/node_modules/simple-assign/index.js"}],"/Users/phitien/apphub/node_modules/material-ui/styles/MuiThemeProvider.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _getMuiTheme = require('./getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MuiThemeProvider = function (_Component) {
  (0, _inherits3.default)(MuiThemeProvider, _Component);

  function MuiThemeProvider() {
    (0, _classCallCheck3.default)(this, MuiThemeProvider);
    return (0, _possibleConstructorReturn3.default)(this, (MuiThemeProvider.__proto__ || (0, _getPrototypeOf2.default)(MuiThemeProvider)).apply(this, arguments));
  }

  (0, _createClass3.default)(MuiThemeProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        muiTheme: this.props.muiTheme || (0, _getMuiTheme2.default)()
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return MuiThemeProvider;
}(_react.Component);

MuiThemeProvider.childContextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? MuiThemeProvider.propTypes = {
  children: _react.PropTypes.element,
  muiTheme: _react.PropTypes.object
} : void 0;
exports.default = MuiThemeProvider;
}).call(this,require('_process'))

},{"./getMuiTheme":"/Users/phitien/apphub/node_modules/material-ui/styles/getMuiTheme.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","react":"react"}],"/Users/phitien/apphub/node_modules/material-ui/styles/baseThemes/darkBaseTheme.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('../colors');

var _colorManipulator = require('../../utils/colorManipulator');

var _spacing = require('../spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  spacing: _spacing2.default,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: _colors.cyan700,
    primary2Color: _colors.cyan700,
    primary3Color: _colors.grey600,
    accent1Color: _colors.pinkA200,
    accent2Color: _colors.pinkA400,
    accent3Color: _colors.pinkA100,
    textColor: _colors.fullWhite,
    secondaryTextColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.7),
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
    disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
    pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
    clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)
  }
};
},{"../../utils/colorManipulator":"/Users/phitien/apphub/node_modules/material-ui/utils/colorManipulator.js","../colors":"/Users/phitien/apphub/node_modules/material-ui/styles/colors.js","../spacing":"/Users/phitien/apphub/node_modules/material-ui/styles/spacing.js"}],"/Users/phitien/apphub/node_modules/material-ui/styles/baseThemes/lightBaseTheme.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('../colors');

var _colorManipulator = require('../../utils/colorManipulator');

var _spacing = require('../spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
exports.default = {
  spacing: _spacing2.default,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: _colors.cyan500,
    primary2Color: _colors.cyan700,
    primary3Color: _colors.grey400,
    accent1Color: _colors.pinkA200,
    accent2Color: _colors.grey100,
    accent3Color: _colors.grey500,
    textColor: _colors.darkBlack,
    secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
    alternateTextColor: _colors.white,
    canvasColor: _colors.white,
    borderColor: _colors.grey300,
    disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
    pickerHeaderColor: _colors.cyan500,
    clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
    shadowColor: _colors.fullBlack
  }
}; /**
    * NB: If you update this file, please also update `docs/src/app/customization/Themes.js`
    */
},{"../../utils/colorManipulator":"/Users/phitien/apphub/node_modules/material-ui/utils/colorManipulator.js","../colors":"/Users/phitien/apphub/node_modules/material-ui/styles/colors.js","../spacing":"/Users/phitien/apphub/node_modules/material-ui/styles/spacing.js"}],"/Users/phitien/apphub/node_modules/material-ui/styles/colors.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var red50 = exports.red50 = '#ffebee';
var red100 = exports.red100 = '#ffcdd2';
var red200 = exports.red200 = '#ef9a9a';
var red300 = exports.red300 = '#e57373';
var red400 = exports.red400 = '#ef5350';
var red500 = exports.red500 = '#f44336';
var red600 = exports.red600 = '#e53935';
var red700 = exports.red700 = '#d32f2f';
var red800 = exports.red800 = '#c62828';
var red900 = exports.red900 = '#b71c1c';
var redA100 = exports.redA100 = '#ff8a80';
var redA200 = exports.redA200 = '#ff5252';
var redA400 = exports.redA400 = '#ff1744';
var redA700 = exports.redA700 = '#d50000';

var pink50 = exports.pink50 = '#fce4ec';
var pink100 = exports.pink100 = '#f8bbd0';
var pink200 = exports.pink200 = '#f48fb1';
var pink300 = exports.pink300 = '#f06292';
var pink400 = exports.pink400 = '#ec407a';
var pink500 = exports.pink500 = '#e91e63';
var pink600 = exports.pink600 = '#d81b60';
var pink700 = exports.pink700 = '#c2185b';
var pink800 = exports.pink800 = '#ad1457';
var pink900 = exports.pink900 = '#880e4f';
var pinkA100 = exports.pinkA100 = '#ff80ab';
var pinkA200 = exports.pinkA200 = '#ff4081';
var pinkA400 = exports.pinkA400 = '#f50057';
var pinkA700 = exports.pinkA700 = '#c51162';

var purple50 = exports.purple50 = '#f3e5f5';
var purple100 = exports.purple100 = '#e1bee7';
var purple200 = exports.purple200 = '#ce93d8';
var purple300 = exports.purple300 = '#ba68c8';
var purple400 = exports.purple400 = '#ab47bc';
var purple500 = exports.purple500 = '#9c27b0';
var purple600 = exports.purple600 = '#8e24aa';
var purple700 = exports.purple700 = '#7b1fa2';
var purple800 = exports.purple800 = '#6a1b9a';
var purple900 = exports.purple900 = '#4a148c';
var purpleA100 = exports.purpleA100 = '#ea80fc';
var purpleA200 = exports.purpleA200 = '#e040fb';
var purpleA400 = exports.purpleA400 = '#d500f9';
var purpleA700 = exports.purpleA700 = '#aa00ff';

var deepPurple50 = exports.deepPurple50 = '#ede7f6';
var deepPurple100 = exports.deepPurple100 = '#d1c4e9';
var deepPurple200 = exports.deepPurple200 = '#b39ddb';
var deepPurple300 = exports.deepPurple300 = '#9575cd';
var deepPurple400 = exports.deepPurple400 = '#7e57c2';
var deepPurple500 = exports.deepPurple500 = '#673ab7';
var deepPurple600 = exports.deepPurple600 = '#5e35b1';
var deepPurple700 = exports.deepPurple700 = '#512da8';
var deepPurple800 = exports.deepPurple800 = '#4527a0';
var deepPurple900 = exports.deepPurple900 = '#311b92';
var deepPurpleA100 = exports.deepPurpleA100 = '#b388ff';
var deepPurpleA200 = exports.deepPurpleA200 = '#7c4dff';
var deepPurpleA400 = exports.deepPurpleA400 = '#651fff';
var deepPurpleA700 = exports.deepPurpleA700 = '#6200ea';

var indigo50 = exports.indigo50 = '#e8eaf6';
var indigo100 = exports.indigo100 = '#c5cae9';
var indigo200 = exports.indigo200 = '#9fa8da';
var indigo300 = exports.indigo300 = '#7986cb';
var indigo400 = exports.indigo400 = '#5c6bc0';
var indigo500 = exports.indigo500 = '#3f51b5';
var indigo600 = exports.indigo600 = '#3949ab';
var indigo700 = exports.indigo700 = '#303f9f';
var indigo800 = exports.indigo800 = '#283593';
var indigo900 = exports.indigo900 = '#1a237e';
var indigoA100 = exports.indigoA100 = '#8c9eff';
var indigoA200 = exports.indigoA200 = '#536dfe';
var indigoA400 = exports.indigoA400 = '#3d5afe';
var indigoA700 = exports.indigoA700 = '#304ffe';

var blue50 = exports.blue50 = '#e3f2fd';
var blue100 = exports.blue100 = '#bbdefb';
var blue200 = exports.blue200 = '#90caf9';
var blue300 = exports.blue300 = '#64b5f6';
var blue400 = exports.blue400 = '#42a5f5';
var blue500 = exports.blue500 = '#2196f3';
var blue600 = exports.blue600 = '#1e88e5';
var blue700 = exports.blue700 = '#1976d2';
var blue800 = exports.blue800 = '#1565c0';
var blue900 = exports.blue900 = '#0d47a1';
var blueA100 = exports.blueA100 = '#82b1ff';
var blueA200 = exports.blueA200 = '#448aff';
var blueA400 = exports.blueA400 = '#2979ff';
var blueA700 = exports.blueA700 = '#2962ff';

var lightBlue50 = exports.lightBlue50 = '#e1f5fe';
var lightBlue100 = exports.lightBlue100 = '#b3e5fc';
var lightBlue200 = exports.lightBlue200 = '#81d4fa';
var lightBlue300 = exports.lightBlue300 = '#4fc3f7';
var lightBlue400 = exports.lightBlue400 = '#29b6f6';
var lightBlue500 = exports.lightBlue500 = '#03a9f4';
var lightBlue600 = exports.lightBlue600 = '#039be5';
var lightBlue700 = exports.lightBlue700 = '#0288d1';
var lightBlue800 = exports.lightBlue800 = '#0277bd';
var lightBlue900 = exports.lightBlue900 = '#01579b';
var lightBlueA100 = exports.lightBlueA100 = '#80d8ff';
var lightBlueA200 = exports.lightBlueA200 = '#40c4ff';
var lightBlueA400 = exports.lightBlueA400 = '#00b0ff';
var lightBlueA700 = exports.lightBlueA700 = '#0091ea';

var cyan50 = exports.cyan50 = '#e0f7fa';
var cyan100 = exports.cyan100 = '#b2ebf2';
var cyan200 = exports.cyan200 = '#80deea';
var cyan300 = exports.cyan300 = '#4dd0e1';
var cyan400 = exports.cyan400 = '#26c6da';
var cyan500 = exports.cyan500 = '#00bcd4';
var cyan600 = exports.cyan600 = '#00acc1';
var cyan700 = exports.cyan700 = '#0097a7';
var cyan800 = exports.cyan800 = '#00838f';
var cyan900 = exports.cyan900 = '#006064';
var cyanA100 = exports.cyanA100 = '#84ffff';
var cyanA200 = exports.cyanA200 = '#18ffff';
var cyanA400 = exports.cyanA400 = '#00e5ff';
var cyanA700 = exports.cyanA700 = '#00b8d4';

var teal50 = exports.teal50 = '#e0f2f1';
var teal100 = exports.teal100 = '#b2dfdb';
var teal200 = exports.teal200 = '#80cbc4';
var teal300 = exports.teal300 = '#4db6ac';
var teal400 = exports.teal400 = '#26a69a';
var teal500 = exports.teal500 = '#009688';
var teal600 = exports.teal600 = '#00897b';
var teal700 = exports.teal700 = '#00796b';
var teal800 = exports.teal800 = '#00695c';
var teal900 = exports.teal900 = '#004d40';
var tealA100 = exports.tealA100 = '#a7ffeb';
var tealA200 = exports.tealA200 = '#64ffda';
var tealA400 = exports.tealA400 = '#1de9b6';
var tealA700 = exports.tealA700 = '#00bfa5';

var green50 = exports.green50 = '#e8f5e9';
var green100 = exports.green100 = '#c8e6c9';
var green200 = exports.green200 = '#a5d6a7';
var green300 = exports.green300 = '#81c784';
var green400 = exports.green400 = '#66bb6a';
var green500 = exports.green500 = '#4caf50';
var green600 = exports.green600 = '#43a047';
var green700 = exports.green700 = '#388e3c';
var green800 = exports.green800 = '#2e7d32';
var green900 = exports.green900 = '#1b5e20';
var greenA100 = exports.greenA100 = '#b9f6ca';
var greenA200 = exports.greenA200 = '#69f0ae';
var greenA400 = exports.greenA400 = '#00e676';
var greenA700 = exports.greenA700 = '#00c853';

var lightGreen50 = exports.lightGreen50 = '#f1f8e9';
var lightGreen100 = exports.lightGreen100 = '#dcedc8';
var lightGreen200 = exports.lightGreen200 = '#c5e1a5';
var lightGreen300 = exports.lightGreen300 = '#aed581';
var lightGreen400 = exports.lightGreen400 = '#9ccc65';
var lightGreen500 = exports.lightGreen500 = '#8bc34a';
var lightGreen600 = exports.lightGreen600 = '#7cb342';
var lightGreen700 = exports.lightGreen700 = '#689f38';
var lightGreen800 = exports.lightGreen800 = '#558b2f';
var lightGreen900 = exports.lightGreen900 = '#33691e';
var lightGreenA100 = exports.lightGreenA100 = '#ccff90';
var lightGreenA200 = exports.lightGreenA200 = '#b2ff59';
var lightGreenA400 = exports.lightGreenA400 = '#76ff03';
var lightGreenA700 = exports.lightGreenA700 = '#64dd17';

var lime50 = exports.lime50 = '#f9fbe7';
var lime100 = exports.lime100 = '#f0f4c3';
var lime200 = exports.lime200 = '#e6ee9c';
var lime300 = exports.lime300 = '#dce775';
var lime400 = exports.lime400 = '#d4e157';
var lime500 = exports.lime500 = '#cddc39';
var lime600 = exports.lime600 = '#c0ca33';
var lime700 = exports.lime700 = '#afb42b';
var lime800 = exports.lime800 = '#9e9d24';
var lime900 = exports.lime900 = '#827717';
var limeA100 = exports.limeA100 = '#f4ff81';
var limeA200 = exports.limeA200 = '#eeff41';
var limeA400 = exports.limeA400 = '#c6ff00';
var limeA700 = exports.limeA700 = '#aeea00';

var yellow50 = exports.yellow50 = '#fffde7';
var yellow100 = exports.yellow100 = '#fff9c4';
var yellow200 = exports.yellow200 = '#fff59d';
var yellow300 = exports.yellow300 = '#fff176';
var yellow400 = exports.yellow400 = '#ffee58';
var yellow500 = exports.yellow500 = '#ffeb3b';
var yellow600 = exports.yellow600 = '#fdd835';
var yellow700 = exports.yellow700 = '#fbc02d';
var yellow800 = exports.yellow800 = '#f9a825';
var yellow900 = exports.yellow900 = '#f57f17';
var yellowA100 = exports.yellowA100 = '#ffff8d';
var yellowA200 = exports.yellowA200 = '#ffff00';
var yellowA400 = exports.yellowA400 = '#ffea00';
var yellowA700 = exports.yellowA700 = '#ffd600';

var amber50 = exports.amber50 = '#fff8e1';
var amber100 = exports.amber100 = '#ffecb3';
var amber200 = exports.amber200 = '#ffe082';
var amber300 = exports.amber300 = '#ffd54f';
var amber400 = exports.amber400 = '#ffca28';
var amber500 = exports.amber500 = '#ffc107';
var amber600 = exports.amber600 = '#ffb300';
var amber700 = exports.amber700 = '#ffa000';
var amber800 = exports.amber800 = '#ff8f00';
var amber900 = exports.amber900 = '#ff6f00';
var amberA100 = exports.amberA100 = '#ffe57f';
var amberA200 = exports.amberA200 = '#ffd740';
var amberA400 = exports.amberA400 = '#ffc400';
var amberA700 = exports.amberA700 = '#ffab00';

var orange50 = exports.orange50 = '#fff3e0';
var orange100 = exports.orange100 = '#ffe0b2';
var orange200 = exports.orange200 = '#ffcc80';
var orange300 = exports.orange300 = '#ffb74d';
var orange400 = exports.orange400 = '#ffa726';
var orange500 = exports.orange500 = '#ff9800';
var orange600 = exports.orange600 = '#fb8c00';
var orange700 = exports.orange700 = '#f57c00';
var orange800 = exports.orange800 = '#ef6c00';
var orange900 = exports.orange900 = '#e65100';
var orangeA100 = exports.orangeA100 = '#ffd180';
var orangeA200 = exports.orangeA200 = '#ffab40';
var orangeA400 = exports.orangeA400 = '#ff9100';
var orangeA700 = exports.orangeA700 = '#ff6d00';

var deepOrange50 = exports.deepOrange50 = '#fbe9e7';
var deepOrange100 = exports.deepOrange100 = '#ffccbc';
var deepOrange200 = exports.deepOrange200 = '#ffab91';
var deepOrange300 = exports.deepOrange300 = '#ff8a65';
var deepOrange400 = exports.deepOrange400 = '#ff7043';
var deepOrange500 = exports.deepOrange500 = '#ff5722';
var deepOrange600 = exports.deepOrange600 = '#f4511e';
var deepOrange700 = exports.deepOrange700 = '#e64a19';
var deepOrange800 = exports.deepOrange800 = '#d84315';
var deepOrange900 = exports.deepOrange900 = '#bf360c';
var deepOrangeA100 = exports.deepOrangeA100 = '#ff9e80';
var deepOrangeA200 = exports.deepOrangeA200 = '#ff6e40';
var deepOrangeA400 = exports.deepOrangeA400 = '#ff3d00';
var deepOrangeA700 = exports.deepOrangeA700 = '#dd2c00';

var brown50 = exports.brown50 = '#efebe9';
var brown100 = exports.brown100 = '#d7ccc8';
var brown200 = exports.brown200 = '#bcaaa4';
var brown300 = exports.brown300 = '#a1887f';
var brown400 = exports.brown400 = '#8d6e63';
var brown500 = exports.brown500 = '#795548';
var brown600 = exports.brown600 = '#6d4c41';
var brown700 = exports.brown700 = '#5d4037';
var brown800 = exports.brown800 = '#4e342e';
var brown900 = exports.brown900 = '#3e2723';

var blueGrey50 = exports.blueGrey50 = '#eceff1';
var blueGrey100 = exports.blueGrey100 = '#cfd8dc';
var blueGrey200 = exports.blueGrey200 = '#b0bec5';
var blueGrey300 = exports.blueGrey300 = '#90a4ae';
var blueGrey400 = exports.blueGrey400 = '#78909c';
var blueGrey500 = exports.blueGrey500 = '#607d8b';
var blueGrey600 = exports.blueGrey600 = '#546e7a';
var blueGrey700 = exports.blueGrey700 = '#455a64';
var blueGrey800 = exports.blueGrey800 = '#37474f';
var blueGrey900 = exports.blueGrey900 = '#263238';

var grey50 = exports.grey50 = '#fafafa';
var grey100 = exports.grey100 = '#f5f5f5';
var grey200 = exports.grey200 = '#eeeeee';
var grey300 = exports.grey300 = '#e0e0e0';
var grey400 = exports.grey400 = '#bdbdbd';
var grey500 = exports.grey500 = '#9e9e9e';
var grey600 = exports.grey600 = '#757575';
var grey700 = exports.grey700 = '#616161';
var grey800 = exports.grey800 = '#424242';
var grey900 = exports.grey900 = '#212121';

var black = exports.black = '#000000';
var white = exports.white = '#ffffff';

var transparent = exports.transparent = 'rgba(0, 0, 0, 0)';
var fullBlack = exports.fullBlack = 'rgba(0, 0, 0, 1)';
var darkBlack = exports.darkBlack = 'rgba(0, 0, 0, 0.87)';
var lightBlack = exports.lightBlack = 'rgba(0, 0, 0, 0.54)';
var minBlack = exports.minBlack = 'rgba(0, 0, 0, 0.26)';
var faintBlack = exports.faintBlack = 'rgba(0, 0, 0, 0.12)';
var fullWhite = exports.fullWhite = 'rgba(255, 255, 255, 1)';
var darkWhite = exports.darkWhite = 'rgba(255, 255, 255, 0.87)';
var lightWhite = exports.lightWhite = 'rgba(255, 255, 255, 0.54)';
},{}],"/Users/phitien/apphub/node_modules/material-ui/styles/getMuiTheme.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = getMuiTheme;

var _lodash = require('lodash.merge');

var _lodash2 = _interopRequireDefault(_lodash);

var _colorManipulator = require('../utils/colorManipulator');

var _lightBaseTheme = require('./baseThemes/lightBaseTheme');

var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

var _zIndex = require('./zIndex');

var _zIndex2 = _interopRequireDefault(_zIndex);

var _autoprefixer = require('../utils/autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _callOnce = require('../utils/callOnce');

var _callOnce2 = _interopRequireDefault(_callOnce);

var _rtl = require('../utils/rtl');

var _rtl2 = _interopRequireDefault(_rtl);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _typography = require('./typography');

var _typography2 = _interopRequireDefault(_typography);

var _colors = require('./colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the MUI theme corresponding to a base theme.
 * It's possible to override the computed theme values
 * by providing a second argument. The calculated
 * theme will be deeply merged with the second argument.
 */
function getMuiTheme(muiTheme) {
  for (var _len = arguments.length, more = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    more[_key - 1] = arguments[_key];
  }

  muiTheme = _lodash2.default.apply(undefined, [{
    zIndex: _zIndex2.default,
    isRtl: false,
    userAgent: undefined
  }, _lightBaseTheme2.default, muiTheme].concat(more));

  var _muiTheme = muiTheme,
      spacing = _muiTheme.spacing,
      fontFamily = _muiTheme.fontFamily,
      palette = _muiTheme.palette;

  var baseTheme = { spacing: spacing, fontFamily: fontFamily, palette: palette };

  muiTheme = (0, _lodash2.default)({
    appBar: {
      color: palette.primary1Color,
      textColor: palette.alternateTextColor,
      height: spacing.desktopKeylineIncrement,
      titleFontWeight: _typography2.default.fontWeightNormal,
      padding: spacing.desktopGutter
    },
    avatar: {
      color: palette.canvasColor,
      backgroundColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.26)
    },
    badge: {
      color: palette.alternateTextColor,
      textColor: palette.textColor,
      primaryColor: palette.primary1Color,
      primaryTextColor: palette.alternateTextColor,
      secondaryColor: palette.accent1Color,
      secondaryTextColor: palette.alternateTextColor,
      fontWeight: _typography2.default.fontWeightMedium
    },
    bottomNavigation: {
      backgroundColor: palette.canvasColor,
      unselectedColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
      selectedColor: palette.primary1Color,
      height: 56,
      unselectedFontSize: 12,
      selectedFontSize: 14
    },
    button: {
      height: 36,
      minWidth: 88,
      iconButtonSize: spacing.iconSize * 2
    },
    card: {
      titleColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
      subtitleColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
      fontWeight: _typography2.default.fontWeightMedium
    },
    cardMedia: {
      color: _colors.darkWhite,
      overlayContentBackground: _colors.lightBlack,
      titleColor: _colors.darkWhite,
      subtitleColor: _colors.lightWhite
    },
    cardText: {
      textColor: palette.textColor
    },
    checkbox: {
      boxColor: palette.textColor,
      checkedColor: palette.primary1Color,
      requiredColor: palette.primary1Color,
      disabledColor: palette.disabledColor,
      labelColor: palette.textColor,
      labelDisabledColor: palette.disabledColor
    },
    chip: {
      backgroundColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.12),
      deleteIconColor: (0, _colorManipulator.fade)(palette.textColor, 0.26),
      textColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
      fontSize: 14,
      fontWeight: _typography2.default.fontWeightNormal,
      shadow: '0 1px 6px ' + (0, _colorManipulator.fade)(palette.shadowColor, 0.12) + ',\n        0 1px 4px ' + (0, _colorManipulator.fade)(palette.shadowColor, 0.12)
    },
    datePicker: {
      color: palette.primary1Color,
      textColor: palette.alternateTextColor,
      calendarTextColor: palette.textColor,
      selectColor: palette.primary2Color,
      selectTextColor: palette.alternateTextColor,
      calendarYearBackgroundColor: palette.canvasColor
    },
    dialog: {
      titleFontSize: 22,
      bodyFontSize: 16,
      bodyColor: (0, _colorManipulator.fade)(palette.textColor, 0.6)
    },
    dropDownMenu: {
      accentColor: palette.borderColor
    },
    enhancedButton: {
      tapHighlightColor: _colors.transparent
    },
    flatButton: {
      color: _colors.transparent,
      buttonFilterColor: '#999999',
      disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3),
      textColor: palette.textColor,
      primaryTextColor: palette.primary1Color,
      secondaryTextColor: palette.accent1Color,
      fontSize: _typography2.default.fontStyleButtonFontSize,
      fontWeight: _typography2.default.fontWeightMedium
    },
    floatingActionButton: {
      buttonSize: 56,
      miniSize: 40,
      color: palette.primary1Color,
      iconColor: palette.alternateTextColor,
      secondaryColor: palette.accent1Color,
      secondaryIconColor: palette.alternateTextColor,
      disabledTextColor: palette.disabledColor,
      disabledColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.12)
    },
    gridTile: {
      textColor: _colors.white
    },
    icon: {
      color: palette.canvasColor,
      backgroundColor: palette.primary1Color
    },
    inkBar: {
      backgroundColor: palette.accent1Color
    },
    drawer: {
      width: spacing.desktopKeylineIncrement * 4,
      color: palette.canvasColor
    },
    listItem: {
      nestedLevelDepth: 18,
      secondaryTextColor: palette.secondaryTextColor,
      leftIconColor: _colors.grey600,
      rightIconColor: _colors.grey600
    },
    menu: {
      backgroundColor: palette.canvasColor,
      containerBackgroundColor: palette.canvasColor
    },
    menuItem: {
      dataHeight: 32,
      height: 48,
      hoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.1),
      padding: spacing.desktopGutter,
      selectedTextColor: palette.accent1Color,
      rightIconDesktopFill: _colors.grey600
    },
    menuSubheader: {
      padding: spacing.desktopGutter,
      borderColor: palette.borderColor,
      textColor: palette.primary1Color
    },
    overlay: {
      backgroundColor: _colors.lightBlack
    },
    paper: {
      color: palette.textColor,
      backgroundColor: palette.canvasColor,
      zDepthShadows: [[1, 6, 0.12, 1, 4, 0.12], [3, 10, 0.16, 3, 10, 0.23], [10, 30, 0.19, 6, 10, 0.23], [14, 45, 0.25, 10, 18, 0.22], [19, 60, 0.30, 15, 20, 0.22]].map(function (d) {
        return '0 ' + d[0] + 'px ' + d[1] + 'px ' + (0, _colorManipulator.fade)(palette.shadowColor, d[2]) + ',\n         0 ' + d[3] + 'px ' + d[4] + 'px ' + (0, _colorManipulator.fade)(palette.shadowColor, d[5]);
      })
    },
    radioButton: {
      borderColor: palette.textColor,
      backgroundColor: palette.alternateTextColor,
      checkedColor: palette.primary1Color,
      requiredColor: palette.primary1Color,
      disabledColor: palette.disabledColor,
      size: 24,
      labelColor: palette.textColor,
      labelDisabledColor: palette.disabledColor
    },
    raisedButton: {
      color: palette.alternateTextColor,
      textColor: palette.textColor,
      primaryColor: palette.primary1Color,
      primaryTextColor: palette.alternateTextColor,
      secondaryColor: palette.accent1Color,
      secondaryTextColor: palette.alternateTextColor,
      disabledColor: (0, _colorManipulator.darken)(palette.alternateTextColor, 0.1),
      disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3),
      fontSize: _typography2.default.fontStyleButtonFontSize,
      fontWeight: _typography2.default.fontWeightMedium
    },
    refreshIndicator: {
      strokeColor: palette.borderColor,
      loadingStrokeColor: palette.primary1Color
    },
    ripple: {
      color: (0, _colorManipulator.fade)(palette.textColor, 0.87)
    },
    slider: {
      trackSize: 2,
      trackColor: palette.primary3Color,
      trackColorSelected: palette.accent3Color,
      handleSize: 12,
      handleSizeDisabled: 8,
      handleSizeActive: 18,
      handleColorZero: palette.primary3Color,
      handleFillColor: palette.alternateTextColor,
      selectionColor: palette.primary1Color,
      rippleColor: palette.primary1Color
    },
    snackbar: {
      textColor: palette.alternateTextColor,
      backgroundColor: palette.textColor,
      actionColor: palette.accent1Color
    },
    subheader: {
      color: (0, _colorManipulator.fade)(palette.textColor, 0.54),
      fontWeight: _typography2.default.fontWeightMedium
    },
    stepper: {
      backgroundColor: 'transparent',
      hoverBackgroundColor: (0, _colorManipulator.fade)(_colors.black, 0.06),
      iconColor: palette.primary1Color,
      hoveredIconColor: _colors.grey700,
      inactiveIconColor: _colors.grey500,
      textColor: (0, _colorManipulator.fade)(_colors.black, 0.87),
      disabledTextColor: (0, _colorManipulator.fade)(_colors.black, 0.26),
      connectorLineColor: _colors.grey400
    },
    svgIcon: {
      color: palette.textColor
    },
    table: {
      backgroundColor: palette.canvasColor
    },
    tableFooter: {
      borderColor: palette.borderColor,
      textColor: palette.accent3Color
    },
    tableHeader: {
      borderColor: palette.borderColor
    },
    tableHeaderColumn: {
      textColor: palette.accent3Color,
      height: 56,
      spacing: 24
    },
    tableRow: {
      hoverColor: palette.accent2Color,
      stripeColor: (0, _colorManipulator.fade)((0, _colorManipulator.lighten)(palette.primary1Color, 0.5), 0.4),
      selectedColor: palette.borderColor,
      textColor: palette.textColor,
      borderColor: palette.borderColor,
      height: 48
    },
    tableRowColumn: {
      height: 48,
      spacing: 24
    },
    tabs: {
      backgroundColor: palette.primary1Color,
      textColor: (0, _colorManipulator.fade)(palette.alternateTextColor, 0.7),
      selectedTextColor: palette.alternateTextColor
    },
    textField: {
      textColor: palette.textColor,
      hintColor: palette.disabledColor,
      floatingLabelColor: palette.disabledColor,
      disabledTextColor: palette.disabledColor,
      errorColor: _colors.red500,
      focusColor: palette.primary1Color,
      backgroundColor: 'transparent',
      borderColor: palette.borderColor
    },
    timePicker: {
      color: palette.alternateTextColor,
      textColor: palette.alternateTextColor,
      accentColor: palette.primary1Color,
      clockColor: palette.textColor,
      clockCircleColor: palette.clockCircleColor,
      headerColor: palette.pickerHeaderColor || palette.primary1Color,
      selectColor: palette.primary2Color,
      selectTextColor: palette.alternateTextColor
    },
    toggle: {
      thumbOnColor: palette.primary1Color,
      thumbOffColor: palette.accent2Color,
      thumbDisabledColor: palette.borderColor,
      thumbRequiredColor: palette.primary1Color,
      trackOnColor: (0, _colorManipulator.fade)(palette.primary1Color, 0.5),
      trackOffColor: palette.primary3Color,
      trackDisabledColor: palette.primary3Color,
      labelColor: palette.textColor,
      labelDisabledColor: palette.disabledColor,
      trackRequiredColor: (0, _colorManipulator.fade)(palette.primary1Color, 0.5)
    },
    toolbar: {
      color: (0, _colorManipulator.fade)(palette.textColor, 0.54),
      hoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
      backgroundColor: (0, _colorManipulator.darken)(palette.accent2Color, 0.05),
      height: 56,
      titleFontSize: 20,
      iconColor: (0, _colorManipulator.fade)(palette.textColor, 0.4),
      separatorColor: (0, _colorManipulator.fade)(palette.textColor, 0.175),
      menuHoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.1)
    },
    tooltip: {
      color: _colors.white,
      rippleBackgroundColor: _colors.grey700
    }
  }, muiTheme, {
    baseTheme: baseTheme, // To provide backward compatibility.
    rawTheme: baseTheme });

  var transformers = [_autoprefixer2.default, _rtl2.default, _callOnce2.default].map(function (t) {
    return t(muiTheme);
  }).filter(function (t) {
    return t;
  });

  muiTheme.prepareStyles = _compose2.default.apply(undefined, (0, _toConsumableArray3.default)(transformers));

  return muiTheme;
}
},{"../utils/autoprefixer":"/Users/phitien/apphub/node_modules/material-ui/utils/autoprefixer.js","../utils/callOnce":"/Users/phitien/apphub/node_modules/material-ui/utils/callOnce.js","../utils/colorManipulator":"/Users/phitien/apphub/node_modules/material-ui/utils/colorManipulator.js","../utils/rtl":"/Users/phitien/apphub/node_modules/material-ui/utils/rtl.js","./baseThemes/lightBaseTheme":"/Users/phitien/apphub/node_modules/material-ui/styles/baseThemes/lightBaseTheme.js","./colors":"/Users/phitien/apphub/node_modules/material-ui/styles/colors.js","./typography":"/Users/phitien/apphub/node_modules/material-ui/styles/typography.js","./zIndex":"/Users/phitien/apphub/node_modules/material-ui/styles/zIndex.js","babel-runtime/helpers/toConsumableArray":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/toConsumableArray.js","lodash.merge":"/Users/phitien/apphub/node_modules/lodash.merge/index.js","recompose/compose":"/Users/phitien/apphub/node_modules/recompose/compose.js"}],"/Users/phitien/apphub/node_modules/material-ui/styles/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zIndex = exports.typography = exports.transitions = exports.spacing = exports.muiThemeable = exports.getMuiTheme = exports.LightRawTheme = exports.lightBaseTheme = exports.DarkRawTheme = exports.darkBaseTheme = exports.colors = exports.MuiThemeProvider = undefined;

var _MuiThemeProvider2 = require('./MuiThemeProvider');

var _MuiThemeProvider3 = _interopRequireDefault(_MuiThemeProvider2);

var _colors2 = require('./colors');

var _colors = _interopRequireWildcard(_colors2);

var _darkBaseTheme2 = require('./baseThemes/darkBaseTheme');

var _darkBaseTheme3 = _interopRequireDefault(_darkBaseTheme2);

var _lightBaseTheme2 = require('./baseThemes/lightBaseTheme');

var _lightBaseTheme3 = _interopRequireDefault(_lightBaseTheme2);

var _getMuiTheme2 = require('./getMuiTheme');

var _getMuiTheme3 = _interopRequireDefault(_getMuiTheme2);

var _muiThemeable2 = require('./muiThemeable');

var _muiThemeable3 = _interopRequireDefault(_muiThemeable2);

var _spacing2 = require('./spacing');

var _spacing3 = _interopRequireDefault(_spacing2);

var _transitions2 = require('./transitions');

var _transitions3 = _interopRequireDefault(_transitions2);

var _typography2 = require('./typography');

var _typography3 = _interopRequireDefault(_typography2);

var _zIndex2 = require('./zIndex');

var _zIndex3 = _interopRequireDefault(_zIndex2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MuiThemeProvider = _MuiThemeProvider3.default;
exports.colors = _colors;
exports.darkBaseTheme = _darkBaseTheme3.default;
exports.DarkRawTheme = _darkBaseTheme3.default;
exports.lightBaseTheme = _lightBaseTheme3.default;
exports.LightRawTheme = _lightBaseTheme3.default;
exports.getMuiTheme = _getMuiTheme3.default;
exports.muiThemeable = _muiThemeable3.default;
exports.spacing = _spacing3.default;
exports.transitions = _transitions3.default;
exports.typography = _typography3.default;
exports.zIndex = _zIndex3.default;
},{"./MuiThemeProvider":"/Users/phitien/apphub/node_modules/material-ui/styles/MuiThemeProvider.js","./baseThemes/darkBaseTheme":"/Users/phitien/apphub/node_modules/material-ui/styles/baseThemes/darkBaseTheme.js","./baseThemes/lightBaseTheme":"/Users/phitien/apphub/node_modules/material-ui/styles/baseThemes/lightBaseTheme.js","./colors":"/Users/phitien/apphub/node_modules/material-ui/styles/colors.js","./getMuiTheme":"/Users/phitien/apphub/node_modules/material-ui/styles/getMuiTheme.js","./muiThemeable":"/Users/phitien/apphub/node_modules/material-ui/styles/muiThemeable.js","./spacing":"/Users/phitien/apphub/node_modules/material-ui/styles/spacing.js","./transitions":"/Users/phitien/apphub/node_modules/material-ui/styles/transitions.js","./typography":"/Users/phitien/apphub/node_modules/material-ui/styles/typography.js","./zIndex":"/Users/phitien/apphub/node_modules/material-ui/styles/zIndex.js"}],"/Users/phitien/apphub/node_modules/material-ui/styles/muiThemeable.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = muiThemeable;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getMuiTheme = require('./getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_THEME = void 0;

function getDefaultTheme() {
  if (!DEFAULT_THEME) {
    DEFAULT_THEME = (0, _getMuiTheme2.default)();
  }
  return DEFAULT_THEME;
}

function muiThemeable() {
  return function (Component) {
    var MuiComponent = function MuiComponent(props, context) {
      var _context$muiTheme = context.muiTheme,
          muiTheme = _context$muiTheme === undefined ? getDefaultTheme() : _context$muiTheme;


      return _react2.default.createElement(Component, (0, _extends3.default)({ muiTheme: muiTheme }, props));
    };

    MuiComponent.contextTypes = {
      muiTheme: _react.PropTypes.object.isRequired
    };

    return MuiComponent;
  };
}
},{"./getMuiTheme":"/Users/phitien/apphub/node_modules/material-ui/styles/getMuiTheme.js","babel-runtime/helpers/extends":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/extends.js","react":"react"}],"/Users/phitien/apphub/node_modules/material-ui/styles/spacing.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  iconSize: 24,

  desktopGutter: 24,
  desktopGutterMore: 32,
  desktopGutterLess: 16,
  desktopGutterMini: 8,
  desktopKeylineIncrement: 64,
  desktopDropDownMenuItemHeight: 32,
  desktopDropDownMenuFontSize: 15,
  desktopDrawerMenuItemHeight: 48,
  desktopSubheaderHeight: 48,
  desktopToolbarHeight: 56
};
},{}],"/Users/phitien/apphub/node_modules/material-ui/styles/transitions.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

  easeOut: function easeOut(duration, property, delay, easeFunction) {
    easeFunction = easeFunction || this.easeOutFunction;

    if (property && Object.prototype.toString.call(property) === '[object Array]') {
      var transitions = '';
      for (var i = 0; i < property.length; i++) {
        if (transitions) transitions += ',';
        transitions += this.create(duration, property[i], delay, easeFunction);
      }

      return transitions;
    } else {
      return this.create(duration, property, delay, easeFunction);
    }
  },
  create: function create(duration, property, delay, easeFunction) {
    duration = duration || '450ms';
    property = property || 'all';
    delay = delay || '0ms';
    easeFunction = easeFunction || 'linear';

    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
  }
};
},{}],"/Users/phitien/apphub/node_modules/material-ui/styles/typography.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _colors = require('./colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Typography = function Typography() {
  (0, _classCallCheck3.default)(this, Typography);

  // text colors
  this.textFullBlack = _colors.fullBlack;
  this.textDarkBlack = _colors.darkBlack;
  this.textLightBlack = _colors.lightBlack;
  this.textMinBlack = _colors.minBlack;
  this.textFullWhite = _colors.fullWhite;
  this.textDarkWhite = _colors.darkWhite;
  this.textLightWhite = _colors.lightWhite;

  // font weight
  this.fontWeightLight = 300;
  this.fontWeightNormal = 400;
  this.fontWeightMedium = 500;

  this.fontStyleButtonFontSize = 14;
};

exports.default = new Typography();
},{"./colors":"/Users/phitien/apphub/node_modules/material-ui/styles/colors.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/phitien/apphub/node_modules/material-ui/styles/zIndex.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  menu: 1000,
  appBar: 1100,
  drawerOverlay: 1200,
  drawer: 1300,
  dialogOverlay: 1400,
  dialog: 1500,
  layer: 2000,
  popover: 2100,
  snackbar: 2900,
  tooltip: 3000
};
},{}],"/Users/phitien/apphub/node_modules/material-ui/svg-icons/toggle/check-box-outline-blank.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('../../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleCheckBoxOutlineBlank = function ToggleCheckBoxOutlineBlank(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' })
  );
};
ToggleCheckBoxOutlineBlank = (0, _pure2.default)(ToggleCheckBoxOutlineBlank);
ToggleCheckBoxOutlineBlank.displayName = 'ToggleCheckBoxOutlineBlank';
ToggleCheckBoxOutlineBlank.muiName = 'SvgIcon';

exports.default = ToggleCheckBoxOutlineBlank;
},{"../../SvgIcon":"/Users/phitien/apphub/node_modules/material-ui/SvgIcon/index.js","react":"react","recompose/pure":"/Users/phitien/apphub/node_modules/recompose/pure.js"}],"/Users/phitien/apphub/node_modules/material-ui/svg-icons/toggle/check-box.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('../../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleCheckBox = function ToggleCheckBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
  );
};
ToggleCheckBox = (0, _pure2.default)(ToggleCheckBox);
ToggleCheckBox.displayName = 'ToggleCheckBox';
ToggleCheckBox.muiName = 'SvgIcon';

exports.default = ToggleCheckBox;
},{"../../SvgIcon":"/Users/phitien/apphub/node_modules/material-ui/SvgIcon/index.js","react":"react","recompose/pure":"/Users/phitien/apphub/node_modules/recompose/pure.js"}],"/Users/phitien/apphub/node_modules/material-ui/utils/autoPrefix.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  set: function set(style, key, value) {
    style[key] = value;
  }
};
},{}],"/Users/phitien/apphub/node_modules/material-ui/utils/autoprefixer.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = function (muiTheme) {
  var isClient = typeof navigator !== 'undefined';
  var userAgent = muiTheme.userAgent;

  if (userAgent === undefined && isClient) {
    userAgent = navigator.userAgent;
  }

  if (userAgent === undefined && !hasWarnedAboutUserAgent) {
    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: userAgent should be supplied in the muiTheme context\n      for server-side rendering.') : void 0;

    hasWarnedAboutUserAgent = true;
  }

  if (userAgent === false) {
    // Disabled autoprefixer
    return null;
  } else if (userAgent === 'all' || userAgent === undefined) {
    // Prefix for all user agent
    return function (style) {
      var isFlex = ['flex', 'inline-flex'].indexOf(style.display) !== -1;
      var stylePrefixed = _inlineStylePrefixer2.default.prefixAll(style);

      if (isFlex) {
        var display = stylePrefixed.display;
        if (isClient) {
          // We can't apply this join with react-dom:
          // #https://github.com/facebook/react/issues/6467
          stylePrefixed.display = display[display.length - 1];
        } else {
          stylePrefixed.display = display.join('; display: ');
        }
      }

      return stylePrefixed;
    };
  } else {
    var _ret = function () {
      var prefixer = new _inlineStylePrefixer2.default({
        userAgent: userAgent
      });

      return {
        v: function v(style) {
          return prefixer.prefix(style);
        }
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
  }
};

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasWarnedAboutUserAgent = false;
}).call(this,require('_process'))

},{"_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/helpers/typeof":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/typeof.js","inline-style-prefixer":"/Users/phitien/apphub/node_modules/inline-style-prefixer/lib/Prefixer.js","warning":"/Users/phitien/apphub/node_modules/warning/browser.js"}],"/Users/phitien/apphub/node_modules/material-ui/utils/callOnce.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = callOnce;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CALLED_ONCE = 'muiPrepared';

function callOnce() {
  if (process.env.NODE_ENV !== 'production') {
    return function (style) {
      if (style[CALLED_ONCE]) {
        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: You cannot call prepareStyles() on the same style object more than once.') : void 0;
      }
      style[CALLED_ONCE] = true;
      return style;
    };
  }
}
}).call(this,require('_process'))

},{"_process":"/Users/phitien/apphub/node_modules/process/browser.js","warning":"/Users/phitien/apphub/node_modules/warning/browser.js"}],"/Users/phitien/apphub/node_modules/material-ui/utils/colorManipulator.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertColorToString = convertColorToString;
exports.convertHexToRGB = convertHexToRGB;
exports.decomposeColor = decomposeColor;
exports.getContrastRatio = getContrastRatio;
exports.getLuminance = getLuminance;
exports.emphasize = emphasize;
exports.fade = fade;
exports.darken = darken;
exports.lighten = lighten;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function convertColorToString(color) {
  var type = color.type,
      values = color.values;


  if (type.indexOf('rgb') > -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    for (var i = 0; i < 3; i++) {
      values[i] = parseInt(values[i]);
    }
  }

  var colorString = void 0;

  if (type.indexOf('hsl') > -1) {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
  } else {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + ', ' + values[2];
  }

  if (values.length === 4) {
    colorString += ', ' + color.values[3] + ')';
  } else {
    colorString += ')';
  }

  return colorString;
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 *  @returns {string} A CSS rgb color string
 */
function convertHexToRGB(color) {
  if (color.length === 4) {
    var extendedColor = '#';
    for (var i = 1; i < color.length; i++) {
      extendedColor += color.charAt(i) + color.charAt(i);
    }
    color = extendedColor;
  }

  var values = {
    r: parseInt(color.substr(1, 2), 16),
    g: parseInt(color.substr(3, 2), 16),
    b: parseInt(color.substr(5, 2), 16)
  };

  return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values and color names.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {{type: string, values: number[]}} A MUI color object
 */
function decomposeColor(color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  var marker = color.indexOf('(');

  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(marker !== -1, 'Material-UI: The ' + color + ' color was not parsed correctly,\n  because it has an unsupported format (color name or RGB %). This may cause issues in component rendering.') : void 0;

  var type = color.substring(0, marker);
  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });

  return { type: type, values: values };
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21 with 2 digit precision.
 */
function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  var contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);

  return Number(contrastRatio.toFixed(2)); // Truncate at two digits
}

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);

  if (color.type.indexOf('rgb') > -1) {
    var rgb = color.values.map(function (val) {
      val /= 255; // normalized
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)); // Truncate at 3 digits
  } else if (color.type.indexOf('hsl') > -1) {
    return color.values[2] / 100;
  }
}

/**
 * Darken or lighten a colour, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;

  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}

/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value, 0, 1);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  color.values[3] = value;

  return convertColorToString(color);
}

/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i++) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return convertColorToString(color);
}

/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i++) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return convertColorToString(color);
}
}).call(this,require('_process'))

},{"_process":"/Users/phitien/apphub/node_modules/process/browser.js","warning":"/Users/phitien/apphub/node_modules/warning/browser.js"}],"/Users/phitien/apphub/node_modules/material-ui/utils/dom.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  isDescendant: function isDescendant(parent, child) {
    var node = child.parentNode;

    while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
    }

    return false;
  },
  offset: function offset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  }
};
},{}],"/Users/phitien/apphub/node_modules/material-ui/utils/events.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  once: function once(el, type, callback) {
    var typeArray = type ? type.split(' ') : [];
    var recursiveFunction = function recursiveFunction(event) {
      event.target.removeEventListener(event.type, recursiveFunction);
      return callback(event);
    };

    for (var i = typeArray.length - 1; i >= 0; i--) {
      this.on(el, typeArray[i], recursiveFunction);
    }
  },
  on: function on(el, type, callback) {
    if (el.addEventListener) {
      el.addEventListener(type, callback);
    } else {
      // IE8+ Support
      el.attachEvent('on' + type, function () {
        callback.call(el);
      });
    }
  },
  off: function off(el, type, callback) {
    if (el.removeEventListener) {
      el.removeEventListener(type, callback);
    } else {
      // IE8+ Support
      el.detachEvent('on' + type, callback);
    }
  },
  isKeyboard: function isKeyboard(event) {
    return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
  }
};
},{}],"/Users/phitien/apphub/node_modules/material-ui/utils/propTypes.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var horizontal = _react.PropTypes.oneOf(['left', 'middle', 'right']);
var vertical = _react.PropTypes.oneOf(['top', 'center', 'bottom']);

exports.default = {

  corners: _react.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),

  horizontal: horizontal,

  vertical: vertical,

  origin: _react.PropTypes.shape({
    horizontal: horizontal,
    vertical: vertical
  }),

  cornersAndCenter: _react.PropTypes.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),

  stringOrNumber: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

  zDepth: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5])

};
},{"react":"react"}],"/Users/phitien/apphub/node_modules/material-ui/utils/rtl.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = rtl;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;

/**
 * This function ensures that `style` supports both ltr and rtl directions by
 * checking `styleConstants` in `muiTheme` and replacing attribute keys if
 * necessary.
 */
function rtl(muiTheme) {
  if (muiTheme.isRtl) {
    return function (style) {
      if (style.directionInvariant === true) {
        return style;
      }

      var flippedAttributes = {
        // Keys and their replacements.
        right: 'left',
        left: 'right',
        marginRight: 'marginLeft',
        marginLeft: 'marginRight',
        paddingRight: 'paddingLeft',
        paddingLeft: 'paddingRight',
        borderRight: 'borderLeft',
        borderLeft: 'borderRight'
      };

      var newStyle = {};

      (0, _keys2.default)(style).forEach(function (attribute) {
        var value = style[attribute];
        var key = attribute;

        if (flippedAttributes.hasOwnProperty(attribute)) {
          key = flippedAttributes[attribute];
        }

        switch (attribute) {
          case 'float':
          case 'textAlign':
            if (value === 'right') {
              value = 'left';
            } else if (value === 'left') {
              value = 'right';
            }
            break;

          case 'direction':
            if (value === 'ltr') {
              value = 'rtl';
            } else if (value === 'rtl') {
              value = 'ltr';
            }
            break;

          case 'transform':
            if (!value) break;
            var matches = void 0;
            if (matches = value.match(reTranslate)) {
              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
            }
            if (matches = value.match(reSkew)) {
              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ', ' + (-parseFloat(matches[7]) + matches[8]) : '');
            }
            break;

          case 'transformOrigin':
            if (!value) break;
            if (value.indexOf('right') > -1) {
              value = value.replace('right', 'left');
            } else if (value.indexOf('left') > -1) {
              value = value.replace('left', 'right');
            }
            break;
        }

        newStyle[key] = value;
      });

      return newStyle;
    };
  }
}
},{"babel-runtime/core-js/object/keys":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/keys.js"}],"/Users/phitien/apphub/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
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

process.nextTick = function (fun) {
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
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/phitien/apphub/node_modules/react-addons-shallow-compare/index.js":[function(require,module,exports){
module.exports = require('react/lib/shallowCompare');
},{"react/lib/shallowCompare":"/Users/phitien/apphub/node_modules/react/lib/shallowCompare.js"}],"/Users/phitien/apphub/node_modules/react-addons-transition-group/index.js":[function(require,module,exports){
module.exports = require('react/lib/ReactTransitionGroup');
},{"react/lib/ReactTransitionGroup":"/Users/phitien/apphub/node_modules/react/lib/ReactTransitionGroup.js"}],"/Users/phitien/apphub/node_modules/react-cookie/build/cookie.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.load = load;
exports.select = select;
exports.save = save;
exports.remove = remove;
exports.setRawCookie = setRawCookie;
exports.plugToRequest = plugToRequest;

var _cookie = require('cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _isNode = require('is-node');

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _rawCookie = {};
var _res = undefined;

function _isResWritable() {
  return _res && !_res.headersSent;
}

function load(name, doNotParse, opt) {
  var cookies = _isNode2.default ? _rawCookie : _cookie2.default.parse(document.cookie, opt);
  var cookieVal = cookies && cookies[name];

  if (typeof doNotParse === 'undefined') {
    doNotParse = !cookieVal || cookieVal[0] !== '{' && cookieVal[0] !== '[';
  }

  if (!doNotParse) {
    try {
      cookieVal = JSON.parse(cookieVal);
    } catch (e) {
      // Not serialized object
    }
  }

  return cookieVal;
}

function select(regex) {
  var cookies = _isNode2.default ? _rawCookie : _cookie2.default.parse(document.cookie);

  if (!cookies) {
    return {};
  }

  if (!regex) {
    return cookies;
  }

  return Object.keys(cookies).reduce(function (accumulator, name) {
    if (!regex.test(name)) {
      return accumulator;
    }

    var newCookie = {};
    newCookie[name] = cookies[name];
    return (0, _objectAssign2.default)({}, accumulator, newCookie);
  }, {});
}

function save(name, val, opt) {
  _rawCookie[name] = val;

  // allow you to work with cookies as objects.
  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
    _rawCookie[name] = JSON.stringify(val);
  }

  // Cookies only work in the browser
  if (!_isNode2.default) {
    document.cookie = _cookie2.default.serialize(name, _rawCookie[name], opt);
  }

  if (_isResWritable() && _res.cookie) {
    var expressOpt = _extends({}, opt);
    if (expressOpt.maxAge) {
      // the standard for maxAge is seconds but express uses milliseconds
      expressOpt.maxAge = opt.maxAge * 1000;
    }

    _res.cookie(name, val, opt);
  }
}

function remove(name, opt) {
  delete _rawCookie[name];

  if (typeof opt === 'undefined') {
    opt = {};
  } else if (typeof opt === 'string') {
    // Will be deprecated in future versions
    opt = { path: opt };
  } else {
    // Prevent mutation of opt below
    opt = (0, _objectAssign2.default)({}, opt);
  }

  if (typeof document !== 'undefined') {
    opt.expires = new Date(1970, 1, 1, 0, 0, 1);
    opt.maxAge = 0;
    document.cookie = _cookie2.default.serialize(name, '', opt);
  }

  if (_isResWritable() && _res.clearCookie) {
    _res.clearCookie(name, opt);
  }
}

function setRawCookie(rawCookie) {
  if (rawCookie) {
    _rawCookie = _cookie2.default.parse(rawCookie);
  } else {
    _rawCookie = {};
  }
}

function plugToRequest(req, res) {
  if (req.cookie) {
    _rawCookie = req.cookie;
  } else if (req.cookies) {
    _rawCookie = req.cookies;
  } else if (req.headers && req.headers.cookie) {
    setRawCookie(req.headers.cookie);
  } else {
    _rawCookie = {};
  }

  _res = res;

  return function unplug() {
    _res = null;
    _rawCookie = {};
  };
}

exports.default = {
  setRawCookie: setRawCookie,
  load: load,
  select: select,
  save: save,
  remove: remove,
  plugToRequest: plugToRequest
};
},{"cookie":"/Users/phitien/apphub/node_modules/cookie/index.js","is-node":"/Users/phitien/apphub/node_modules/is-node/index.js","object-assign":"object-assign"}],"/Users/phitien/apphub/node_modules/react-event-listener/lib/define-property.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

exports.default = defineProperty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

function defineProperty(o, p, attr) {
  return (0, _defineProperty2.default)(o, p, attr);
}
},{"babel-runtime/core-js/object/define-property":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/define-property.js"}],"/Users/phitien/apphub/node_modules/react-event-listener/lib/index.js":[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.withOptions = withOptions;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _supports = require('./supports');

var supports = _interopRequireWildcard(_supports);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-spread */

var defaultEventOptions = {
  capture: false,
  passive: false
};

function mergeDefaultEventOptions(options) {
  return (0, _assign2.default)({}, defaultEventOptions, options);
}

function getEventListenerArgs(eventName, callback, options) {
  var args = [eventName, callback];
  args.push(supports.passiveOption ? options : options.capture);
  return args;
}

function on(target, eventName, callback, options) {
  if (supports.addEventListener) {
    target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  } else if (supports.attachEvent) {
    // IE8+ Support
    target.attachEvent('on' + eventName, function () {
      callback.call(target);
    });
  }
}

function off(target, eventName, callback, options) {
  if (supports.removeEventListener) {
    target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  } else if (supports.detachEvent) {
    // IE8+ Support
    target.detachEvent('on' + eventName, callback);
  }
}

var state = {};

function forEachListener(props, iteratee) {
  var children = props.children,
      target = props.target,
      eventProps = (0, _objectWithoutProperties3.default)(props, ['children', 'target']);


  (0, _keys2.default)(eventProps).forEach(function (name) {
    if (name.substring(0, 2) !== 'on') {
      return;
    }

    var prop = eventProps[name];
    var type = typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop);
    var isObject = type === 'object';
    var isFunction = type === 'function';

    if (!isObject && !isFunction) {
      return;
    }

    var capture = name.substr(-7).toLowerCase() === 'capture';
    var eventName = name.substring(2).toLowerCase();
    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

    if (isObject) {
      iteratee(eventName, prop.handler, prop.options);
    } else {
      iteratee(eventName, prop, mergeDefaultEventOptions({ capture: capture }));
    }
  });
}

function withOptions(handler, options) {
  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(options, 'react-event-listener: Should be specified options in withOptions.') : void 0;

  return {
    handler: handler,
    options: mergeDefaultEventOptions(options)
  };
}

var EventListener = function (_Component) {
  (0, _inherits3.default)(EventListener, _Component);

  function EventListener() {
    (0, _classCallCheck3.default)(this, EventListener);
    return (0, _possibleConstructorReturn3.default)(this, (EventListener.__proto__ || (0, _getPrototypeOf2.default)(EventListener)).apply(this, arguments));
  }

  (0, _createClass3.default)(EventListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addListeners();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return (0, _reactAddonsShallowCompare2.default)({
        props: this.props,
        state: state
      }, nextProps, state);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.removeListeners();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.addListeners();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListeners();
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      this.applyListeners(on);
    }
  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      this.applyListeners(off);
    }
  }, {
    key: 'applyListeners',
    value: function applyListeners(onOrOff) {
      var target = this.props.target;


      if (target) {
        var element = target;

        if (typeof target === 'string') {
          element = window[target];
        }

        forEachListener(this.props, onOrOff.bind(null, element));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children || null;
    }
  }]);
  return EventListener;
}(_react.Component);

process.env.NODE_ENV !== "production" ? EventListener.propTypes = {
  /**
   * You can provide a single child too.
   */
  children: _react.PropTypes.element,
  /**
   * The DOM target to listen to.
   */
  target: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]).isRequired
} : void 0;
exports.default = EventListener;
}).call(this,require('_process'))

},{"./supports":"/Users/phitien/apphub/node_modules/react-event-listener/lib/supports.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","babel-runtime/core-js/object/assign":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/assign.js","babel-runtime/core-js/object/get-prototype-of":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/core-js/object/keys":"/Users/phitien/apphub/node_modules/babel-runtime/core-js/object/keys.js","babel-runtime/helpers/classCallCheck":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/inherits":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/objectWithoutProperties":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/objectWithoutProperties.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/possibleConstructorReturn.js","babel-runtime/helpers/typeof":"/Users/phitien/apphub/node_modules/babel-runtime/helpers/typeof.js","react":"react","react-addons-shallow-compare":"/Users/phitien/apphub/node_modules/react-addons-shallow-compare/index.js","warning":"/Users/phitien/apphub/node_modules/warning/browser.js"}],"/Users/phitien/apphub/node_modules/react-event-listener/lib/supports.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passiveOption = exports.detachEvent = exports.attachEvent = exports.removeEventListener = exports.addEventListener = exports.canUseDOM = undefined;

var _defineProperty = require('./define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Inspired by https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = canUseDOM && 'addEventListener' in window;
var removeEventListener = exports.removeEventListener = canUseDOM && 'removeEventListener' in window;

// IE8+ Support
var attachEvent = exports.attachEvent = canUseDOM && 'attachEvent' in window;
var detachEvent = exports.detachEvent = canUseDOM && 'detachEvent' in window;

// Passive options
// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
var passiveOption = exports.passiveOption = function () {
  var cache = null;

  return function () {
    if (cache !== null) {
      return cache;
    }

    var supportsPassiveOption = false;

    try {
      window.addEventListener('test', null, (0, _defineProperty2.default)({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      }));
    } catch (e) {} // eslint-disable-line no-empty

    cache = supportsPassiveOption;

    return supportsPassiveOption;
  }();
}();
},{"./define-property":"/Users/phitien/apphub/node_modules/react-event-listener/lib/define-property.js"}],"/Users/phitien/apphub/node_modules/react/lib/KeyEscapeUtils.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

module.exports = KeyEscapeUtils;
},{}],"/Users/phitien/apphub/node_modules/react/lib/PooledClass.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

var _prodInvariant = require('./reactProdInvariant');

var invariant = require('fbjs/lib/invariant');

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? "production" !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler
};

module.exports = PooledClass;
},{"./reactProdInvariant":"/Users/phitien/apphub/node_modules/react/lib/reactProdInvariant.js","fbjs/lib/invariant":"/Users/phitien/apphub/node_modules/fbjs/lib/invariant.js"}],"/Users/phitien/apphub/node_modules/react/lib/React.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _assign = require('object-assign');

var ReactChildren = require('./ReactChildren');
var ReactComponent = require('./ReactComponent');
var ReactPureComponent = require('./ReactPureComponent');
var ReactClass = require('./ReactClass');
var ReactDOMFactories = require('./ReactDOMFactories');
var ReactElement = require('./ReactElement');
var ReactPropTypes = require('./ReactPropTypes');
var ReactVersion = require('./ReactVersion');

var onlyChild = require('./onlyChild');
var warning = require('fbjs/lib/warning');

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if ("production" !== 'production') {
  var ReactElementValidator = require('./ReactElementValidator');
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = _assign;

if ("production" !== 'production') {
  var warned = false;
  __spread = function () {
    "production" !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
    warned = true;
    return _assign.apply(null, arguments);
  };
}

var React = {

  // Modern

  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
    only: onlyChild
  },

  Component: ReactComponent,
  PureComponent: ReactPureComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: ReactClass.createClass,
  createFactory: createFactory,
  createMixin: function (mixin) {
    // Currently a noop. Will be used to validate and trace mixins.
    return mixin;
  },

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories,

  version: ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

module.exports = React;
},{"./ReactChildren":"/Users/phitien/apphub/node_modules/react/lib/ReactChildren.js","./ReactClass":"/Users/phitien/apphub/node_modules/react/lib/ReactClass.js","./ReactComponent":"/Users/phitien/apphub/node_modules/react/lib/ReactComponent.js","./ReactDOMFactories":"/Users/phitien/apphub/node_modules/react/lib/ReactDOMFactories.js","./ReactElement":"/Users/phitien/apphub/node_modules/react/lib/ReactElement.js","./ReactElementValidator":"/Users/phitien/apphub/node_modules/react/lib/ReactElementValidator.js","./ReactPropTypes":"/Users/phitien/apphub/node_modules/react/lib/ReactPropTypes.js","./ReactPureComponent":"/Users/phitien/apphub/node_modules/react/lib/ReactPureComponent.js","./ReactVersion":"/Users/phitien/apphub/node_modules/react/lib/ReactVersion.js","./onlyChild":"/Users/phitien/apphub/node_modules/react/lib/onlyChild.js","fbjs/lib/warning":"/Users/phitien/apphub/node_modules/fbjs/lib/warning.js","object-assign":"object-assign"}],"/Users/phitien/apphub/node_modules/react/lib/ReactChildren.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var PooledClass = require('./PooledClass');
var ReactElement = require('./ReactElement');

var emptyFunction = require('fbjs/lib/emptyFunction');
var traverseAllChildren = require('./traverseAllChildren');

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

module.exports = ReactChildren;
},{"./PooledClass":"/Users/phitien/apphub/node_modules/react/lib/PooledClass.js","./ReactElement":"/Users/phitien/apphub/node_modules/react/lib/ReactElement.js","./traverseAllChildren":"/Users/phitien/apphub/node_modules/react/lib/traverseAllChildren.js","fbjs/lib/emptyFunction":"/Users/phitien/apphub/node_modules/fbjs/lib/emptyFunction.js"}],"/Users/phitien/apphub/node_modules/react/lib/ReactClass.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _prodInvariant = require('./reactProdInvariant'),
    _assign = require('object-assign');

var ReactComponent = require('./ReactComponent');
var ReactElement = require('./ReactElement');
var ReactPropTypeLocationNames = require('./ReactPropTypeLocationNames');
var ReactNoopUpdateQueue = require('./ReactNoopUpdateQueue');

var emptyObject = require('fbjs/lib/emptyObject');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

/**
 * Policies that describe methods in `ReactClassInterface`.
 */


var injectedMixins = [];

/**
 * Composite components are higher-level components that compose other composite
 * or host components.
 *
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will be available on the prototype.
 *
 * @interface ReactClassInterface
 * @internal
 */
var ReactClassInterface = {

  /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */
  mixins: 'DEFINE_MANY',

  /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */
  statics: 'DEFINE_MANY',

  /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */
  propTypes: 'DEFINE_MANY',

  /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */
  contextTypes: 'DEFINE_MANY',

  /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */
  childContextTypes: 'DEFINE_MANY',

  // ==== Definition methods ====

  /**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */
  getDefaultProps: 'DEFINE_MANY_MERGED',

  /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */
  getInitialState: 'DEFINE_MANY_MERGED',

  /**
   * @return {object}
   * @optional
   */
  getChildContext: 'DEFINE_MANY_MERGED',

  /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @nosideeffects
   * @required
   */
  render: 'DEFINE_ONCE',

  // ==== Delegate methods ====

  /**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */
  componentWillMount: 'DEFINE_MANY',

  /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidMount: 'DEFINE_MANY',

  /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */
  componentWillReceiveProps: 'DEFINE_MANY',

  /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */
  shouldComponentUpdate: 'DEFINE_ONCE',

  /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */
  componentWillUpdate: 'DEFINE_MANY',

  /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidUpdate: 'DEFINE_MANY',

  /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */
  componentWillUnmount: 'DEFINE_MANY',

  // ==== Advanced methods ====

  /**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */
  updateComponent: 'OVERRIDE_BASE'

};

/**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */
var RESERVED_SPEC_KEYS = {
  displayName: function (Constructor, displayName) {
    Constructor.displayName = displayName;
  },
  mixins: function (Constructor, mixins) {
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        mixSpecIntoComponent(Constructor, mixins[i]);
      }
    }
  },
  childContextTypes: function (Constructor, childContextTypes) {
    if ("production" !== 'production') {
      validateTypeDef(Constructor, childContextTypes, 'childContext');
    }
    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
  },
  contextTypes: function (Constructor, contextTypes) {
    if ("production" !== 'production') {
      validateTypeDef(Constructor, contextTypes, 'context');
    }
    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
  },
  /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */
  getDefaultProps: function (Constructor, getDefaultProps) {
    if (Constructor.getDefaultProps) {
      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
    } else {
      Constructor.getDefaultProps = getDefaultProps;
    }
  },
  propTypes: function (Constructor, propTypes) {
    if ("production" !== 'production') {
      validateTypeDef(Constructor, propTypes, 'prop');
    }
    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
  },
  statics: function (Constructor, statics) {
    mixStaticSpecIntoComponent(Constructor, statics);
  },
  autobind: function () {} };

function validateTypeDef(Constructor, typeDef, location) {
  for (var propName in typeDef) {
    if (typeDef.hasOwnProperty(propName)) {
      // use a warning instead of an invariant so components
      // don't show up in prod but only in __DEV__
      "production" !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
    }
  }
}

function validateMethodOverride(isAlreadyDefined, name) {
  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

  // Disallow overriding of base class methods unless explicitly allowed.
  if (ReactClassMixin.hasOwnProperty(name)) {
    !(specPolicy === 'OVERRIDE_BASE') ? "production" !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
  }

  // Disallow defining methods more than once unless explicitly allowed.
  if (isAlreadyDefined) {
    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? "production" !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
  }
}

/**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classes.
 */
function mixSpecIntoComponent(Constructor, spec) {
  if (!spec) {
    if ("production" !== 'production') {
      var typeofSpec = typeof spec;
      var isMixinValid = typeofSpec === 'object' && spec !== null;

      "production" !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
    }

    return;
  }

  !(typeof spec !== 'function') ? "production" !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
  !!ReactElement.isValidElement(spec) ? "production" !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

  var proto = Constructor.prototype;
  var autoBindPairs = proto.__reactAutoBindPairs;

  // By handling mixins before any other properties, we ensure the same
  // chaining order is applied to methods with DEFINE_MANY policy, whether
  // mixins are listed before or after these methods in the spec.
  if (spec.hasOwnProperty(MIXINS_KEY)) {
    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
  }

  for (var name in spec) {
    if (!spec.hasOwnProperty(name)) {
      continue;
    }

    if (name === MIXINS_KEY) {
      // We have already handled mixins in a special case above.
      continue;
    }

    var property = spec[name];
    var isAlreadyDefined = proto.hasOwnProperty(name);
    validateMethodOverride(isAlreadyDefined, name);

    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
      RESERVED_SPEC_KEYS[name](Constructor, property);
    } else {
      // Setup methods on prototype:
      // The following member methods should not be automatically bound:
      // 1. Expected ReactClass methods (in the "interface").
      // 2. Overridden methods (that were mixed in).
      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
      var isFunction = typeof property === 'function';
      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

      if (shouldAutoBind) {
        autoBindPairs.push(name, property);
        proto[name] = property;
      } else {
        if (isAlreadyDefined) {
          var specPolicy = ReactClassInterface[name];

          // These cases should already be caught by validateMethodOverride.
          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? "production" !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

          // For methods which are defined more than once, call the existing
          // methods before calling the new property, merging if appropriate.
          if (specPolicy === 'DEFINE_MANY_MERGED') {
            proto[name] = createMergedResultFunction(proto[name], property);
          } else if (specPolicy === 'DEFINE_MANY') {
            proto[name] = createChainedFunction(proto[name], property);
          }
        } else {
          proto[name] = property;
          if ("production" !== 'production') {
            // Add verbose displayName to the function, which helps when looking
            // at profiling tools.
            if (typeof property === 'function' && spec.displayName) {
              proto[name].displayName = spec.displayName + '_' + name;
            }
          }
        }
      }
    }
  }
}

function mixStaticSpecIntoComponent(Constructor, statics) {
  if (!statics) {
    return;
  }
  for (var name in statics) {
    var property = statics[name];
    if (!statics.hasOwnProperty(name)) {
      continue;
    }

    var isReserved = name in RESERVED_SPEC_KEYS;
    !!isReserved ? "production" !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

    var isInherited = name in Constructor;
    !!isInherited ? "production" !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
    Constructor[name] = property;
  }
}

/**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */
function mergeIntoWithNoDuplicateKeys(one, two) {
  !(one && two && typeof one === 'object' && typeof two === 'object') ? "production" !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

  for (var key in two) {
    if (two.hasOwnProperty(key)) {
      !(one[key] === undefined) ? "production" !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
      one[key] = two[key];
    }
  }
  return one;
}

/**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createMergedResultFunction(one, two) {
  return function mergedResult() {
    var a = one.apply(this, arguments);
    var b = two.apply(this, arguments);
    if (a == null) {
      return b;
    } else if (b == null) {
      return a;
    }
    var c = {};
    mergeIntoWithNoDuplicateKeys(c, a);
    mergeIntoWithNoDuplicateKeys(c, b);
    return c;
  };
}

/**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createChainedFunction(one, two) {
  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);
  };
}

/**
 * Binds a method to the component.
 *
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */
function bindAutoBindMethod(component, method) {
  var boundMethod = method.bind(component);
  if ("production" !== 'production') {
    boundMethod.__reactBoundContext = component;
    boundMethod.__reactBoundMethod = method;
    boundMethod.__reactBoundArguments = null;
    var componentName = component.constructor.displayName;
    var _bind = boundMethod.bind;
    boundMethod.bind = function (newThis) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // User is trying to bind() an autobound method; we effectively will
      // ignore the value of "this" that the user is trying to use, so
      // let's warn.
      if (newThis !== component && newThis !== null) {
        "production" !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
      } else if (!args.length) {
        "production" !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
        return boundMethod;
      }
      var reboundMethod = _bind.apply(boundMethod, arguments);
      reboundMethod.__reactBoundContext = component;
      reboundMethod.__reactBoundMethod = method;
      reboundMethod.__reactBoundArguments = args;
      return reboundMethod;
    };
  }
  return boundMethod;
}

/**
 * Binds all auto-bound methods in a component.
 *
 * @param {object} component Component whose method is going to be bound.
 */
function bindAutoBindMethods(component) {
  var pairs = component.__reactAutoBindPairs;
  for (var i = 0; i < pairs.length; i += 2) {
    var autoBindKey = pairs[i];
    var method = pairs[i + 1];
    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

/**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */
var ReactClassMixin = {

  /**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */
  replaceState: function (newState, callback) {
    this.updater.enqueueReplaceState(this, newState);
    if (callback) {
      this.updater.enqueueCallback(this, callback, 'replaceState');
    }
  },

  /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function () {
    return this.updater.isMounted(this);
  }
};

var ReactClassComponent = function () {};
_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

/**
 * Module for creating composite components.
 *
 * @class ReactClass
 */
var ReactClass = {

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  createClass: function (spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function (props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if ("production" !== 'production') {
        "production" !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if ("production" !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (initialState === undefined && this.getInitialState._isMockFunction) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? "production" !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, spec);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if ("production" !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    !Constructor.prototype.render ? "production" !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

    if ("production" !== 'production') {
      "production" !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
      "production" !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  },

  injection: {
    injectMixin: function (mixin) {
      injectedMixins.push(mixin);
    }
  }

};

module.exports = ReactClass;
},{"./ReactComponent":"/Users/phitien/apphub/node_modules/react/lib/ReactComponent.js","./ReactElement":"/Users/phitien/apphub/node_modules/react/lib/ReactElement.js","./ReactNoopUpdateQueue":"/Users/phitien/apphub/node_modules/react/lib/ReactNoopUpdateQueue.js","./ReactPropTypeLocationNames":"/Users/phitien/apphub/node_modules/react/lib/ReactPropTypeLocationNames.js","./reactProdInvariant":"/Users/phitien/apphub/node_modules/react/lib/reactProdInvariant.js","fbjs/lib/emptyObject":"/Users/phitien/apphub/node_modules/fbjs/lib/emptyObject.js","fbjs/lib/invariant":"/Users/phitien/apphub/node_modules/fbjs/lib/invariant.js","fbjs/lib/warning":"/Users/phitien/apphub/node_modules/fbjs/lib/warning.js","object-assign":"object-assign"}],"/Users/phitien/apphub/node_modules/react/lib/ReactComponent.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _prodInvariant = require('./reactProdInvariant');

var ReactNoopUpdateQueue = require('./ReactNoopUpdateQueue');

var canDefineProperty = require('./canDefineProperty');
var emptyObject = require('fbjs/lib/emptyObject');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? "production" !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if ("production" !== 'production') {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          "production" !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

module.exports = ReactComponent;
},{"./ReactNoopUpdateQueue":"/Users/phitien/apphub/node_modules/react/lib/ReactNoopUpdateQueue.js","./canDefineProperty":"/Users/phitien/apphub/node_modules/react/lib/canDefineProperty.js","./reactProdInvariant":"/Users/phitien/apphub/node_modules/react/lib/reactProdInvariant.js","fbjs/lib/emptyObject":"/Users/phitien/apphub/node_modules/fbjs/lib/emptyObject.js","fbjs/lib/invariant":"/Users/phitien/apphub/node_modules/fbjs/lib/invariant.js","fbjs/lib/warning":"/Users/phitien/apphub/node_modules/fbjs/lib/warning.js"}],"/Users/phitien/apphub/node_modules/react/lib/ReactComponentTreeHook.js":[function(require,module,exports){
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

var _prodInvariant = require('./reactProdInvariant');

var ReactCurrentOwner = require('./ReactCurrentOwner');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(hasOwnProperty)
  // Strip regex characters so we can use it for regex
  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  // Remove hasOwnProperty from the template to make it generic
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };

  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}

function getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  "production" !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
  return describeComponentFrame(name, element && element._source, ownerName);
}

var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ? "production" !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? "production" !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? "production" !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
      !nextChild.isMounted ? "production" !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ? "production" !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ? "production" !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var name = getDisplayName(topElement);
      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }

    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },


  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs
};

module.exports = ReactComponentTreeHook;
},{"./ReactCurrentOwner":"/Users/phitien/apphub/node_modules/react/lib/ReactCurrentOwner.js","./reactProdInvariant":"/Users/phitien/apphub/node_modules/react/lib/reactProdInvariant.js","fbjs/lib/invariant":"/Users/phitien/apphub/node_modules/fbjs/lib/invariant.js","fbjs/lib/warning":"/Users/phitien/apphub/node_modules/fbjs/lib/warning.js"}],"/Users/phitien/apphub/node_modules/react/lib/ReactCurrentOwner.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {

  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null

};

module.exports = ReactCurrentOwner;
},{}],"/Users/phitien/apphub/node_modules/react/lib/ReactDOMFactories.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var ReactElement = require('./ReactElement');

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var createDOMFactory = ReactElement.createFactory;
if ("production" !== 'production') {
  var ReactElementValidator = require('./ReactElementValidator');
  createDOMFactory = ReactElementValidator.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),

  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};

module.exports = ReactDOMFactories;
},{"./ReactElement":"/Users/phitien/apphub/node_modules/react/lib/ReactElement.js","./ReactElementValidator":"/Users/phitien/apphub/node_modules/react/lib/ReactElementValidator.js"}],"/Users/phitien/apphub/node_modules/react/lib/ReactElement.js":[function(require,module,exports){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _assign = require('object-assign');

var ReactCurrentOwner = require('./ReactCurrentOwner');

var warning = require('fbjs/lib/warning');
var canDefineProperty = require('./canDefineProperty');
var hasOwnProperty = Object.prototype.hasOwnProperty;

var REACT_ELEMENT_TYPE = require('./ReactElementSymbol');

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown, specialPropRefWarningShown;

function hasValidRef(config) {
  if ("production" !== 'production') {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if ("production" !== 'production') {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      "production" !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      "production" !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if ("production" !== 'production') {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if ("production" !== 'production') {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if ("production" !== 'production') {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};

module.exports = ReactElement;
},{"./ReactCurrentOwner":"/Users/phitien/apphub/node_modules/react/lib/ReactCurrentOwner.js","./ReactElementSymbol":"/Users/phitien/apphub/node_modules/react/lib/ReactElementSymbol.js","./canDefineProperty":"/Users/phitien/apphub/node_modules/react/lib/canDefineProperty.js","fbjs/lib/warning":"/Users/phitien/apphub/node_modules/fbjs/lib/warning.js","object-assign":"object-assign"}],"/Users/phitien/apphub/node_modules/react/lib/ReactElementSymbol.js":[function(require,module,exports){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

module.exports = REACT_ELEMENT_TYPE;
},{}],"/Users/phitien/apphub/node_modules/react/lib/ReactElementValidator.js":[function(require,module,exports){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

'use strict';

var ReactCurrentOwner = require('./ReactCurrentOwner');
var ReactComponentTreeHook = require('./ReactComponentTreeHook');
var ReactElement = require('./ReactElement');

var checkReactTypeSpec = require('./checkReactTypeSpec');

var canDefineProperty = require('./canDefineProperty');
var getIteratorFn = require('./getIteratorFn');
var warning = require('fbjs/lib/warning');

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = ReactCurrentOwner.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

  "production" !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    "production" !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

var ReactElementValidator = {

  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
        }
        info += getDeclarationErrorAddendum();
        "production" !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
      }
    }

    var element = ReactElement.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if ("production" !== 'production') {
      if (canDefineProperty) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            "production" !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }

};

module.exports = ReactElementValidator;
},{"./ReactComponentTreeHook":"/Users/phitien/apphub/node_modules/react/lib/ReactComponentTreeHook.js","./ReactCurrentOwner":"/Users/phitien/apphub/node_modules/react/lib/ReactCurrentOwner.js","./ReactElement":"/Users/phitien/apphub/node_modules/react/lib/ReactElement.js","./canDefineProperty":"/Users/phitien/apphub/node_modules/react/lib/canDefineProperty.js","./checkReactTypeSpec":"/Users/phitien/apphub/node_modules/react/lib/checkReactTypeSpec.js","./getIteratorFn":"/Users/phitien/apphub/node_modules/react/lib/getIteratorFn.js","fbjs/lib/warning":"/Users/phitien/apphub/node_modules/fbjs/lib/warning.js"}],"/Users/phitien/apphub/node_modules/react/lib/ReactNoopUpdateQueue.js":[function(require,module,exports){
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var warning = require('fbjs/lib/warning');

function warnNoop(publicInstance, callerName) {
  if ("production" !== 'production') {
    var constructor = publicInstance.constructor;
    "production" !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {

  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};

module.exports = ReactNoopUpdateQueue;
},{"fbjs/lib/warning":"/Users/phitien/apphub/node_modules/fbjs/lib/warning.js"}],"/Users/phitien/apphub/node_modules/react/lib/ReactPropTypeLocationNames.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

var ReactPropTypeLocationNames = {};

if ("production" !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

module.exports = ReactPropTypeLocationNames;
},{}],"/Users/phitien/apphub/node_modules/react/lib/ReactPropTypes.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var ReactElement = require('./ReactElement');
var ReactPropTypeLocationNames = require('./ReactPropTypeLocationNames');
var ReactPropTypesSecret = require('./ReactPropTypesSecret');

var emptyFunction = require('fbjs/lib/emptyFunction');
var getIteratorFn = require('./getIteratorFn');
var warning = require('fbjs/lib/warning');

/**
 * Collection of methods that allow declaration and validation of props that are
 * supplied to React components. Example usage:
 *
 *   var Props = require('ReactPropTypes');
 *   var MyArticle = React.createClass({
 *     propTypes: {
 *       // An optional string prop named "description".
 *       description: Props.string,
 *
 *       // A required enum prop named "category".
 *       category: Props.oneOf(['News','Photos']).isRequired,
 *
 *       // A prop named "dialog" that requires an instance of Dialog.
 *       dialog: Props.instanceOf(Dialog).isRequired
 *     },
 *     render: function() { ... }
 *   });
 *
 * A more formal specification of how these methods are used:
 *
 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
 *   decl := ReactPropTypes.{type}(.isRequired)?
 *
 * Each and every declaration produces a function with the same signature. This
 * allows the creation of custom validation functions. For example:
 *
 *  var MyLink = React.createClass({
 *    propTypes: {
 *      // An optional string or URI prop named "href".
 *      href: function(props, propName, componentName) {
 *        var propValue = props[propName];
 *        if (propValue != null && typeof propValue !== 'string' &&
 *            !(propValue instanceof URI)) {
 *          return new Error(
 *            'Expected a string or an URI for ' + propName + ' in ' +
 *            componentName
 *          );
 *        }
 *      }
 *    },
 *    render: function() {...}
 *  });
 *
 * @internal
 */

var ANONYMOUS = '<<anonymous>>';

var ReactPropTypes = {
  array: createPrimitiveTypeChecker('array'),
  bool: createPrimitiveTypeChecker('boolean'),
  func: createPrimitiveTypeChecker('function'),
  number: createPrimitiveTypeChecker('number'),
  object: createPrimitiveTypeChecker('object'),
  string: createPrimitiveTypeChecker('string'),
  symbol: createPrimitiveTypeChecker('symbol'),

  any: createAnyTypeChecker(),
  arrayOf: createArrayOfTypeChecker,
  element: createElementTypeChecker(),
  instanceOf: createInstanceTypeChecker,
  node: createNodeChecker(),
  objectOf: createObjectOfTypeChecker,
  oneOf: createEnumTypeChecker,
  oneOfType: createUnionTypeChecker,
  shape: createShapeTypeChecker
};

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
/*eslint-disable no-self-compare*/
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}
/*eslint-enable no-self-compare*/

/**
 * We use an Error-like object for backward compatibility as people may call
 * PropTypes directly and inspect their output. However we don't use real
 * Errors anymore. We don't inspect their stack anyway, and creating them
 * is prohibitively expensive if they are created too often, such as what
 * happens in oneOfType() for any type before the one that matched.
 */
function PropTypeError(message) {
  this.message = message;
  this.stack = '';
}
// Make `instanceof Error` still work for returned errors.
PropTypeError.prototype = Error.prototype;

function createChainableTypeChecker(validate) {
  if ("production" !== 'production') {
    var manualPropTypeCallCache = {};
  }
  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
    componentName = componentName || ANONYMOUS;
    propFullName = propFullName || propName;
    if ("production" !== 'production') {
      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
        var cacheKey = componentName + ':' + propName;
        if (!manualPropTypeCallCache[cacheKey]) {
          "production" !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in production with the next major version. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName) : void 0;
          manualPropTypeCallCache[cacheKey] = true;
        }
      }
    }
    if (props[propName] == null) {
      var locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        if (props[propName] === null) {
          return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
        }
        return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
      }
      return null;
    } else {
      return validate(props, propName, componentName, location, propFullName);
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function createPrimitiveTypeChecker(expectedType) {
  function validate(props, propName, componentName, location, propFullName, secret) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== expectedType) {
      var locationName = ReactPropTypeLocationNames[location];
      // `propValue` being instance of, say, date/regexp, pass the 'object'
      // check, but we can offer a more precise error message here rather than
      // 'of type `object`'.
      var preciseType = getPreciseType(propValue);

      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createAnyTypeChecker() {
  return createChainableTypeChecker(emptyFunction.thatReturns(null));
}

function createArrayOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location, propFullName) {
    if (typeof typeChecker !== 'function') {
      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
    }
    var propValue = props[propName];
    if (!Array.isArray(propValue)) {
      var locationName = ReactPropTypeLocationNames[location];
      var propType = getPropType(propValue);
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
    }
    for (var i = 0; i < propValue.length; i++) {
      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
      if (error instanceof Error) {
        return error;
      }
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createElementTypeChecker() {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    if (!ReactElement.isValidElement(propValue)) {
      var locationName = ReactPropTypeLocationNames[location];
      var propType = getPropType(propValue);
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createInstanceTypeChecker(expectedClass) {
  function validate(props, propName, componentName, location, propFullName) {
    if (!(props[propName] instanceof expectedClass)) {
      var locationName = ReactPropTypeLocationNames[location];
      var expectedClassName = expectedClass.name || ANONYMOUS;
      var actualClassName = getClassName(props[propName]);
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createEnumTypeChecker(expectedValues) {
  if (!Array.isArray(expectedValues)) {
    "production" !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
    return emptyFunction.thatReturnsNull;
  }

  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    for (var i = 0; i < expectedValues.length; i++) {
      if (is(propValue, expectedValues[i])) {
        return null;
      }
    }

    var locationName = ReactPropTypeLocationNames[location];
    var valuesString = JSON.stringify(expectedValues);
    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
  }
  return createChainableTypeChecker(validate);
}

function createObjectOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location, propFullName) {
    if (typeof typeChecker !== 'function') {
      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
    }
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== 'object') {
      var locationName = ReactPropTypeLocationNames[location];
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
    }
    for (var key in propValue) {
      if (propValue.hasOwnProperty(key)) {
        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createUnionTypeChecker(arrayOfTypeCheckers) {
  if (!Array.isArray(arrayOfTypeCheckers)) {
    "production" !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
    return emptyFunction.thatReturnsNull;
  }

  function validate(props, propName, componentName, location, propFullName) {
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
        return null;
      }
    }

    var locationName = ReactPropTypeLocationNames[location];
    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
  }
  return createChainableTypeChecker(validate);
}

function createNodeChecker() {
  function validate(props, propName, componentName, location, propFullName) {
    if (!isNode(props[propName])) {
      var locationName = ReactPropTypeLocationNames[location];
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createShapeTypeChecker(shapeTypes) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== 'object') {
      var locationName = ReactPropTypeLocationNames[location];
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
    }
    for (var key in shapeTypes) {
      var checker = shapeTypes[key];
      if (!checker) {
        continue;
      }
      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
      if (error) {
        return error;
      }
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function isNode(propValue) {
  switch (typeof propValue) {
    case 'number':
    case 'string':
    case 'undefined':
      return true;
    case 'boolean':
      return !propValue;
    case 'object':
      if (Array.isArray(propValue)) {
        return propValue.every(isNode);
      }
      if (propValue === null || ReactElement.isValidElement(propValue)) {
        return true;
      }

      var iteratorFn = getIteratorFn(propValue);
      if (iteratorFn) {
        var iterator = iteratorFn.call(propValue);
        var step;
        if (iteratorFn !== propValue.entries) {
          while (!(step = iterator.next()).done) {
            if (!isNode(step.value)) {
              return false;
            }
          }
        } else {
          // Iterator will provide entry [k,v] tuples rather than values.
          while (!(step = iterator.next()).done) {
            var entry = step.value;
            if (entry) {
              if (!isNode(entry[1])) {
                return false;
              }
            }
          }
        }
      } else {
        return false;
      }

      return true;
    default:
      return false;
  }
}

function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === 'symbol') {
    return true;
  }

  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
  if (propValue['@@toStringTag'] === 'Symbol') {
    return true;
  }

  // Fallback for non-spec compliant Symbols which are polyfilled.
  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
    return true;
  }

  return false;
}

// Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue) {
  var propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return 'array';
  }
  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return 'object';
  }
  if (isSymbol(propType, propValue)) {
    return 'symbol';
  }
  return propType;
}

// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue) {
  var propType = getPropType(propValue);
  if (propType === 'object') {
    if (propValue instanceof Date) {
      return 'date';
    } else if (propValue instanceof RegExp) {
      return 'regexp';
    }
  }
  return propType;
}

// Returns class name of the object, if any.
function getClassName(propValue) {
  if (!propValue.constructor || !propValue.constructor.name) {
    return ANONYMOUS;
  }
  return propValue.constructor.name;
}

module.exports = ReactPropTypes;
},{"./ReactElement":"/Users/phitien/apphub/node_modules/react/lib/ReactElement.js","./ReactPropTypeLocationNames":"/Users/phitien/apphub/node_modules/react/lib/ReactPropTypeLocationNames.js","./ReactPropTypesSecret":"/Users/phitien/apphub/node_modules/react/lib/ReactPropTypesSecret.js","./getIteratorFn":"/Users/phitien/apphub/node_modules/react/lib/getIteratorFn.js","fbjs/lib/emptyFunction":"/Users/phitien/apphub/node_modules/fbjs/lib/emptyFunction.js","fbjs/lib/warning":"/Users/phitien/apphub/node_modules/fbjs/lib/warning.js"}],"/Users/phitien/apphub/node_modules/react/lib/ReactPropTypesSecret.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;
},{}],"/Users/phitien/apphub/node_modules/react/lib/ReactPureComponent.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _assign = require('object-assign');

var ReactComponent = require('./ReactComponent');
var ReactNoopUpdateQueue = require('./ReactNoopUpdateQueue');

var emptyObject = require('fbjs/lib/emptyObject');

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
_assign(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;

module.exports = ReactPureComponent;
},{"./ReactComponent":"/Users/phitien/apphub/node_modules/react/lib/ReactComponent.js","./ReactNoopUpdateQueue":"/Users/phitien/apphub/node_modules/react/lib/ReactNoopUpdateQueue.js","fbjs/lib/emptyObject":"/Users/phitien/apphub/node_modules/fbjs/lib/emptyObject.js","object-assign":"object-assign"}],"/Users/phitien/apphub/node_modules/react/lib/ReactTransitionChildMapping.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var flattenChildren = require('./flattenChildren');

var ReactTransitionChildMapping = {
  /**
   * Given `this.props.children`, return an object mapping key to child. Just
   * simple syntactic sugar around flattenChildren().
   *
   * @param {*} children `this.props.children`
   * @param {number=} selfDebugID Optional debugID of the current internal instance.
   * @return {object} Mapping of key to child
   */
  getChildMapping: function (children, selfDebugID) {
    if (!children) {
      return children;
    }

    if ("production" !== 'production') {
      return flattenChildren(children, selfDebugID);
    }

    return flattenChildren(children);
  },

  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */
  mergeChildMappings: function (prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      if (next.hasOwnProperty(key)) {
        return next[key];
      } else {
        return prev[key];
      }
    }

    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = {};

    var pendingKeys = [];
    for (var prevKey in prev) {
      if (next.hasOwnProperty(prevKey)) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};
    for (var nextKey in next) {
      if (nextKeysPending.hasOwnProperty(nextKey)) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }

    // Finally, add the keys which didn't appear before any key in `next`
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }
};

module.exports = ReactTransitionChildMapping;
},{"./flattenChildren":"/Users/phitien/apphub/node_modules/react/lib/flattenChildren.js"}],"/Users/phitien/apphub/node_modules/react/lib/ReactTransitionGroup.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _assign = require('object-assign');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('./React');
var ReactTransitionChildMapping = require('./ReactTransitionChildMapping');

var emptyFunction = require('fbjs/lib/emptyFunction');

/**
 * A basis for animations. When children are declaratively added or removed,
 * special lifecycle hooks are called.
 * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
 */

var ReactTransitionGroup = function (_React$Component) {
  _inherits(ReactTransitionGroup, _React$Component);

  function ReactTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, ReactTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      // TODO: can we get useful debug information to show at this point?
      children: ReactTransitionChildMapping.getChildMapping(_this.props.children)
    }, _this.performAppear = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.refs[key];

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key));
      } else {
        _this._handleDoneAppearing(key);
      }
    }, _this._handleDoneAppearing = function (key) {
      var component = _this.refs[key];
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key);
      }
    }, _this.performEnter = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.refs[key];

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key));
      } else {
        _this._handleDoneEntering(key);
      }
    }, _this._handleDoneEntering = function (key) {
      var component = _this.refs[key];
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key);
      }
    }, _this.performLeave = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.refs[key];
      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key);
      }
    }, _this._handleDoneLeaving = function (key) {
      var component = _this.refs[key];

      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.performEnter(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _assign({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ReactTransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  ReactTransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key);
      }
    }
  };

  ReactTransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
    });

    var key;

    for (key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
        this.keysToLeave.push(key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  ReactTransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(this.performEnter);

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(this.performLeave);
  };

  ReactTransitionGroup.prototype.render = function render() {
    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];
    for (var key in this.state.children) {
      var child = this.state.children[key];
      if (child) {
        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
      }
    }

    // Do not forward ReactTransitionGroup props to primitive DOM nodes
    var props = _assign({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return React.createElement(this.props.component, props, childrenToRender);
  };

  return ReactTransitionGroup;
}(React.Component);

ReactTransitionGroup.displayName = 'ReactTransitionGroup';
ReactTransitionGroup.propTypes = {
  component: React.PropTypes.any,
  childFactory: React.PropTypes.func
};
ReactTransitionGroup.defaultProps = {
  component: 'span',
  childFactory: emptyFunction.thatReturnsArgument
};


module.exports = ReactTransitionGroup;
},{"./React":"/Users/phitien/apphub/node_modules/react/lib/React.js","./ReactTransitionChildMapping":"/Users/phitien/apphub/node_modules/react/lib/ReactTransitionChildMapping.js","fbjs/lib/emptyFunction":"/Users/phitien/apphub/node_modules/fbjs/lib/emptyFunction.js","object-assign":"object-assign"}],"/Users/phitien/apphub/node_modules/react/lib/ReactVersion.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

module.exports = '15.4.2';
},{}],"/Users/phitien/apphub/node_modules/react/lib/canDefineProperty.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

var canDefineProperty = false;
if ("production" !== 'production') {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

module.exports = canDefineProperty;
},{}],"/Users/phitien/apphub/node_modules/react/lib/checkReactTypeSpec.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _prodInvariant = require('./reactProdInvariant');

var ReactPropTypeLocationNames = require('./ReactPropTypeLocationNames');
var ReactPropTypesSecret = require('./ReactPropTypesSecret');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && "production" === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = require('./ReactComponentTreeHook');
}

var loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ? "production" !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
      } catch (ex) {
        error = ex;
      }
      "production" !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if ("production" !== 'production') {
          if (!ReactComponentTreeHook) {
            ReactComponentTreeHook = require('./ReactComponentTreeHook');
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
          }
        }

        "production" !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

module.exports = checkReactTypeSpec;
}).call(this,require('_process'))

},{"./ReactComponentTreeHook":"/Users/phitien/apphub/node_modules/react/lib/ReactComponentTreeHook.js","./ReactPropTypeLocationNames":"/Users/phitien/apphub/node_modules/react/lib/ReactPropTypeLocationNames.js","./ReactPropTypesSecret":"/Users/phitien/apphub/node_modules/react/lib/ReactPropTypesSecret.js","./reactProdInvariant":"/Users/phitien/apphub/node_modules/react/lib/reactProdInvariant.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","fbjs/lib/invariant":"/Users/phitien/apphub/node_modules/fbjs/lib/invariant.js","fbjs/lib/warning":"/Users/phitien/apphub/node_modules/fbjs/lib/warning.js"}],"/Users/phitien/apphub/node_modules/react/lib/flattenChildren.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

var KeyEscapeUtils = require('./KeyEscapeUtils');
var traverseAllChildren = require('./traverseAllChildren');
var warning = require('fbjs/lib/warning');

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && "production" === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = require('./ReactComponentTreeHook');
}

/**
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 * @param {number=} selfDebugID Optional debugID of the current internal instance.
 */
function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
  // We found a component instance.
  if (traverseContext && typeof traverseContext === 'object') {
    var result = traverseContext;
    var keyUnique = result[name] === undefined;
    if ("production" !== 'production') {
      if (!ReactComponentTreeHook) {
        ReactComponentTreeHook = require('./ReactComponentTreeHook');
      }
      if (!keyUnique) {
        "production" !== 'production' ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
      }
    }
    if (keyUnique && child != null) {
      result[name] = child;
    }
  }
}

/**
 * Flattens children that are typically specified as `props.children`. Any null
 * children will not be included in the resulting object.
 * @return {!object} flattened children keyed by name.
 */
function flattenChildren(children, selfDebugID) {
  if (children == null) {
    return children;
  }
  var result = {};

  if ("production" !== 'production') {
    traverseAllChildren(children, function (traverseContext, child, name) {
      return flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
    }, result);
  } else {
    traverseAllChildren(children, flattenSingleChildIntoContext, result);
  }
  return result;
}

module.exports = flattenChildren;
}).call(this,require('_process'))

},{"./KeyEscapeUtils":"/Users/phitien/apphub/node_modules/react/lib/KeyEscapeUtils.js","./ReactComponentTreeHook":"/Users/phitien/apphub/node_modules/react/lib/ReactComponentTreeHook.js","./traverseAllChildren":"/Users/phitien/apphub/node_modules/react/lib/traverseAllChildren.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js","fbjs/lib/warning":"/Users/phitien/apphub/node_modules/fbjs/lib/warning.js"}],"/Users/phitien/apphub/node_modules/react/lib/getIteratorFn.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;
},{}],"/Users/phitien/apphub/node_modules/react/lib/onlyChild.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

var _prodInvariant = require('./reactProdInvariant');

var ReactElement = require('./ReactElement');

var invariant = require('fbjs/lib/invariant');

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement.isValidElement(children) ? "production" !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
  return children;
}

module.exports = onlyChild;
},{"./ReactElement":"/Users/phitien/apphub/node_modules/react/lib/ReactElement.js","./reactProdInvariant":"/Users/phitien/apphub/node_modules/react/lib/reactProdInvariant.js","fbjs/lib/invariant":"/Users/phitien/apphub/node_modules/fbjs/lib/invariant.js"}],"/Users/phitien/apphub/node_modules/react/lib/reactProdInvariant.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */
'use strict';

/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;
},{}],"/Users/phitien/apphub/node_modules/react/lib/shallowCompare.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var shallowEqual = require('fbjs/lib/shallowEqual');

/**
 * Does a shallow comparison for props and state.
 * See ReactComponentWithPureRenderMixin
 * See also https://facebook.github.io/react/docs/shallow-compare.html
 */
function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

module.exports = shallowCompare;
},{"fbjs/lib/shallowEqual":"/Users/phitien/apphub/node_modules/fbjs/lib/shallowEqual.js"}],"/Users/phitien/apphub/node_modules/react/lib/traverseAllChildren.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _prodInvariant = require('./reactProdInvariant');

var ReactCurrentOwner = require('./ReactCurrentOwner');
var REACT_ELEMENT_TYPE = require('./ReactElementSymbol');

var getIteratorFn = require('./getIteratorFn');
var invariant = require('fbjs/lib/invariant');
var KeyEscapeUtils = require('./KeyEscapeUtils');
var warning = require('fbjs/lib/warning');

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if ("production" !== 'production') {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          "production" !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if ("production" !== 'production') {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
      !false ? "production" !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;
},{"./KeyEscapeUtils":"/Users/phitien/apphub/node_modules/react/lib/KeyEscapeUtils.js","./ReactCurrentOwner":"/Users/phitien/apphub/node_modules/react/lib/ReactCurrentOwner.js","./ReactElementSymbol":"/Users/phitien/apphub/node_modules/react/lib/ReactElementSymbol.js","./getIteratorFn":"/Users/phitien/apphub/node_modules/react/lib/getIteratorFn.js","./reactProdInvariant":"/Users/phitien/apphub/node_modules/react/lib/reactProdInvariant.js","fbjs/lib/invariant":"/Users/phitien/apphub/node_modules/fbjs/lib/invariant.js","fbjs/lib/warning":"/Users/phitien/apphub/node_modules/fbjs/lib/warning.js"}],"/Users/phitien/apphub/node_modules/recompose/compose.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = compose;
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}
},{}],"/Users/phitien/apphub/node_modules/recompose/createEagerFactory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _createEagerElementUtil = require('./utils/createEagerElementUtil');

var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);

var _isReferentiallyTransparentFunctionComponent = require('./isReferentiallyTransparentFunctionComponent');

var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFactory = function createFactory(type) {
  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
  return function (p, c) {
    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
  };
};

exports.default = createFactory;
},{"./isReferentiallyTransparentFunctionComponent":"/Users/phitien/apphub/node_modules/recompose/isReferentiallyTransparentFunctionComponent.js","./utils/createEagerElementUtil":"/Users/phitien/apphub/node_modules/recompose/utils/createEagerElementUtil.js"}],"/Users/phitien/apphub/node_modules/recompose/createHelper.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
var createHelper = function createHelper(func, helperName) {
  var setDisplayName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var noArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (process.env.NODE_ENV !== 'production' && setDisplayName) {
    var _ret = function () {
      /* eslint-disable global-require */
      var wrapDisplayName = require('./wrapDisplayName').default;
      /* eslint-enable global-require */

      if (noArgs) {
        return {
          v: function v(BaseComponent) {
            var Component = func(BaseComponent);
            Component.displayName = wrapDisplayName(BaseComponent, helperName);
            return Component;
          }
        };
      }

      return {
        v: function v() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return function (BaseComponent) {
            var Component = func.apply(undefined, args)(BaseComponent);
            Component.displayName = wrapDisplayName(BaseComponent, helperName);
            return Component;
          };
        }
      };
    }();

    if (typeof _ret === "object") return _ret.v;
  }

  return func;
};

exports.default = createHelper;
}).call(this,require('_process'))

},{"./wrapDisplayName":"/Users/phitien/apphub/node_modules/recompose/wrapDisplayName.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js"}],"/Users/phitien/apphub/node_modules/recompose/getDisplayName.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;
},{}],"/Users/phitien/apphub/node_modules/recompose/isClassComponent.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && typeof Component.prototype.isReactComponent === 'object');
};

exports.default = isClassComponent;
},{}],"/Users/phitien/apphub/node_modules/recompose/isReferentiallyTransparentFunctionComponent.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _isClassComponent = require('./isClassComponent.js');

var _isClassComponent2 = _interopRequireDefault(_isClassComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && (process.env.NODE_ENV === 'production' || !Component.propTypes));
};

exports.default = isReferentiallyTransparentFunctionComponent;
}).call(this,require('_process'))

},{"./isClassComponent.js":"/Users/phitien/apphub/node_modules/recompose/isClassComponent.js","_process":"/Users/phitien/apphub/node_modules/process/browser.js"}],"/Users/phitien/apphub/node_modules/recompose/pure.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _shouldUpdate = require('./shouldUpdate');

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

var _shallowEqual = require('./shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _createHelper = require('./createHelper');

var _createHelper2 = _interopRequireDefault(_createHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pure = (0, _shouldUpdate2.default)(function (props, nextProps) {
  return !(0, _shallowEqual2.default)(props, nextProps);
});

exports.default = (0, _createHelper2.default)(pure, 'pure', true, true);
},{"./createHelper":"/Users/phitien/apphub/node_modules/recompose/createHelper.js","./shallowEqual":"/Users/phitien/apphub/node_modules/recompose/shallowEqual.js","./shouldUpdate":"/Users/phitien/apphub/node_modules/recompose/shouldUpdate.js"}],"/Users/phitien/apphub/node_modules/recompose/shallowEqual.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _shallowEqual = require('fbjs/lib/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _shallowEqual2.default;
},{"fbjs/lib/shallowEqual":"/Users/phitien/apphub/node_modules/fbjs/lib/shallowEqual.js"}],"/Users/phitien/apphub/node_modules/recompose/shouldUpdate.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _createHelper = require('./createHelper');

var _createHelper2 = _interopRequireDefault(_createHelper);

var _createEagerFactory = require('./createEagerFactory');

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    return function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      _class.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      _class.prototype.render = function render() {
        return factory(this.props);
      };

      return _class;
    }(_react.Component);
  };
};

exports.default = (0, _createHelper2.default)(shouldUpdate, 'shouldUpdate');
},{"./createEagerFactory":"/Users/phitien/apphub/node_modules/recompose/createEagerFactory.js","./createHelper":"/Users/phitien/apphub/node_modules/recompose/createHelper.js","react":"react"}],"/Users/phitien/apphub/node_modules/recompose/utils/createEagerElementUtil.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
  if (!hasKey && isReferentiallyTransparent) {
    if (children) {
      return type(_extends({}, props, { children: children }));
    }
    return type(props);
  }

  var Component = type;

  if (children) {
    return _react2.default.createElement(
      Component,
      props,
      children
    );
  }

  return _react2.default.createElement(Component, props);
};

exports.default = createEagerElementUtil;
},{"react":"react"}],"/Users/phitien/apphub/node_modules/recompose/wrapDisplayName.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _getDisplayName = require('./getDisplayName');

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;
},{"./getDisplayName":"/Users/phitien/apphub/node_modules/recompose/getDisplayName.js"}],"/Users/phitien/apphub/node_modules/simple-assign/index.js":[function(require,module,exports){
module.exports = function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};

},{}],"/Users/phitien/apphub/node_modules/uuid/lib/bytesToUuid.js":[function(require,module,exports){
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;

},{}],"/Users/phitien/apphub/node_modules/uuid/lib/rng-browser.js":[function(require,module,exports){
(function (global){
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/Users/phitien/apphub/node_modules/uuid/v1.js":[function(require,module,exports){
// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

},{"./lib/bytesToUuid":"/Users/phitien/apphub/node_modules/uuid/lib/bytesToUuid.js","./lib/rng":"/Users/phitien/apphub/node_modules/uuid/lib/rng-browser.js"}],"/Users/phitien/apphub/node_modules/warning/browser.js":[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if ("production" !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

},{}],"/Users/phitien/apphub/src/apps/dmr/Application.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RoutesApplication = require('../../common/applications/RoutesApplication');

var _RoutesApplication2 = _interopRequireDefault(_RoutesApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Application extends _RoutesApplication2.default {
    get container() {
        return 'container';
    }
}
exports.default = Application;

},{"../../common/applications/RoutesApplication":"/Users/phitien/apphub/src/common/applications/RoutesApplication.js","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/Breadcrumbs.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _components = require('../../../common/components');

var _redux = require('../redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Breadcrumbs extends _components.Breadcrumbs {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.extra = _react2.default.createElement(_materialUi.Checkbox, { className: 'switch-view', title: 'Switch view', label: 'View', labelPosition: 'left',
            checkedIcon: _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'ac_unit'
            ),
            uncheckedIcon: _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'grid_on'
            )
        }), _temp;
    }

}

exports.default = new _redux.Connect(Breadcrumbs).klass;

},{"../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","material-ui":"material-ui","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/Hierarchy.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _components = require('../../../common/components');

var _redux = require('../redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Hierarchy extends _components.Style {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.shouldShowNode = node => !node || node.hide ? false : true, this.shouldExpanNode = node => node.expanded || this.hierarchy.searching, this.canExpanNode = node => node.subNodes && node.subNodes.length, this.renderIcon = (node, lv) => _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            this.shouldExpanNode(node) ? 'remove' : 'add'
        ), this.nodeClassName = (node, lv) => `node node-lv-${lv} ${this.shouldExpanNode(node) ? 'expanded' : 'collapsed'}`, this.renderHierarchy = (node, lv, i) => !this.shouldShowNode(node) ? null : _react2.default.createElement(
            'li',
            { key: i, className: this.nodeClassName(node, lv) },
            _react2.default.createElement(
                'div',
                { className: 'node-name', onClick: this.expandNode.bind(this, node) },
                this.renderIcon(node, lv),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: `/dmr/products/${node.id}`, className: 'name' },
                    node.name,
                    ' ',
                    node.subNodes ? `(${node.subNodes.length})` : ''
                )
            ),
            _react2.default.createElement(
                'ul',
                null,
                !node.subNodes ? null : node.subNodes.map((item, i) => this.renderHierarchy(item, lv + 1, i))
            )
        ), this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            _react2.default.createElement(
                'ul',
                { className: 'hierarchy' },
                this.hierarchy ? this.renderHierarchy(this.hierarchy, 0, 0) : null
            )
        ), _temp;
    }

    get componentClassName() {
        return 'hierarchy';
    }
    get hierarchy() {
        return this.util.assign({ id: null, name: null, template: null, subNodes: [], expanded: true }, this.props.hierarchy);
    }

    expandNode(node) {
        node.expanded = !node.expanded;
        this.state.selectedNode = node;
        this.setState(this.state);
        this.props.executeSetCurrentHierarchyAction(node);
        this.props.executeSearchDataElementsAction({ id: node.id });
    }
}

exports.default = new _redux.Connect(Hierarchy).klass;

},{"../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","react":"react","react-router":"react-router"}],"/Users/phitien/apphub/src/apps/dmr/components/Page.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../common/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Page extends _components.Page {
    get pageClassName() {
        return `${this.props.hideSidebarLeft ? 'has-sidebar-left-collapsed' : 'has-sidebar-left'} ${this.props.hideSidebarRight ? 'has-sidebar-right-collapsed' : 'has-sidebar-right'}`;
    }
}
exports.default = Page;

},{"../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/Product.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../common/components');

var _redux = require('../redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Product extends _components.Style {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.render = () => _react2.default.createElement('div', { className: this.className }), _temp;
    }

    get componentClassName() {
        return `product`;
    }
}

exports.default = new _redux.Connect(Product).klass;

},{"../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/SidebarLeft.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../common/components');

var _redux = require('../redux');

var _Hierarchy = require('./Hierarchy');

var _Hierarchy2 = _interopRequireDefault(_Hierarchy);

var _Product = require('./Product');

var _Product2 = _interopRequireDefault(_Product);

var _SidebarLeftSearch = require('./SidebarLeftSearch');

var _SidebarLeftSearch2 = _interopRequireDefault(_SidebarLeftSearch);

var _SidebarLeftExpandButton = require('./SidebarLeftExpandButton');

var _SidebarLeftExpandButton2 = _interopRequireDefault(_SidebarLeftExpandButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SidebarLeft extends _components.Style {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            _react2.default.createElement(
                'div',
                { className: 'view-type' },
                this.props.sidebarLeftViewName == 'Hierarchy' ? 'Logical Data Hierarchy' : 'Business Product'
            ),
            this.props.hideSidebarLeft ? _react2.default.createElement(_SidebarLeftExpandButton2.default, null) : null,
            this.props.hideSidebarLeft ? null : _react2.default.createElement(_SidebarLeftSearch2.default, null),
            this.props.sidebarLeftViewName == 'Hierarchy' ? _react2.default.createElement(_Hierarchy2.default, null) : _react2.default.createElement(_Product2.default, null)
        ), _temp;
    }

    get componentClassName() {
        return `lightdark-box sidebar-left`;
    }
}

exports.default = new _redux.Connect(SidebarLeft).klass;

},{"../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","./Hierarchy":"/Users/phitien/apphub/src/apps/dmr/components/Hierarchy.js","./Product":"/Users/phitien/apphub/src/apps/dmr/components/Product.js","./SidebarLeftExpandButton":"/Users/phitien/apphub/src/apps/dmr/components/SidebarLeftExpandButton.js","./SidebarLeftSearch":"/Users/phitien/apphub/src/apps/dmr/components/SidebarLeftSearch.js","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/SidebarLeftCollapseButton.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../common/components');

var _redux = require('../redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SidebarLeftCollapseButton extends _components.Style {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.collapseSidebarLeft = () => this.props.executeToggleSidebarLeftAction(true), this.render = () => _react2.default.createElement(
            'i',
            { className: this.className,
                onClick: this.collapseSidebarLeft },
            'chevron_left'
        ), _temp;
    }

    get componentClassName() {
        return `sidebar-left-collapse-button material-icons`;
    }
}

exports.default = new _redux.Connect(SidebarLeftCollapseButton).klass;

},{"../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/SidebarLeftExpandButton.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../common/components');

var _redux = require('../redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SidebarLeftExpandButton extends _components.Style {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.expandSidebarLeft = () => this.props.executeToggleSidebarLeftAction(false), this.render = () => _react2.default.createElement(
            'i',
            { className: this.className,
                onClick: this.expandSidebarLeft },
            'chevron_right'
        ), _temp;
    }

    get componentClassName() {
        return `sidebar-left-expand-button material-icons`;
    }
}

exports.default = new _redux.Connect(SidebarLeftExpandButton).klass;

},{"../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/SidebarLeftSearch.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _components = require('../../../common/components');

var _redux = require('../redux');

var _SidebarLeftCollapseButton = require('./SidebarLeftCollapseButton');

var _SidebarLeftCollapseButton2 = _interopRequireDefault(_SidebarLeftCollapseButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SidebarLeftSearch extends _components.Style {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.renderSwitchViewMenu = () => _react2.default.createElement(
            _materialUi.IconMenu,
            {
                iconButtonElement: _react2.default.createElement(
                    _materialUi.IconButton,
                    { style: { padding: '0', color: '#ffffff', width: 24 } },
                    _react2.default.createElement(
                        'i',
                        { className: 'material-icons' },
                        'more_vert'
                    )
                ) },
            this.views.map((item, i) => _react2.default.createElement(_materialUi.MenuItem, { key: i, primaryText: item.title, onClick: this.switchSidebarLeftView.bind(this, item.value) }))
        ), this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            _react2.default.createElement(_SidebarLeftCollapseButton2.default, null),
            _react2.default.createElement('input', { type: 'text', ref: e => this.searchInput = e,
                onChange: e => this.props.executeSearchHierarchyAction(e.target.value),
                placeholder: 'Search' }),
            this.renderSwitchViewMenu()
        ), _temp;
    }

    get componentClassName() {
        return 'sidebar-left-search';
    }
    get views() {
        return [{ title: 'Logical Data Hierarchy', value: 'Hierarchy' }, { title: 'Business Product', value: 'Product' }];
    }
    switchSidebarLeftView(view) {
        this.props.executeSwitchSidebarLeftViewAction(view);
    }
}

exports.default = new _redux.Connect(SidebarLeftSearch).klass;

},{"../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","./SidebarLeftCollapseButton":"/Users/phitien/apphub/src/apps/dmr/components/SidebarLeftCollapseButton.js","material-ui":"material-ui","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/SidebarRight.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../common/components');

var _redux = require('../redux');

var _SidebarRightSearch = require('./SidebarRightSearch');

var _SidebarRightSearch2 = _interopRequireDefault(_SidebarRightSearch);

var _SidebarRightExpandButton = require('./SidebarRightExpandButton');

var _SidebarRightExpandButton2 = _interopRequireDefault(_SidebarRightExpandButton);

var _SidebarRightCollapseButton = require('./SidebarRightCollapseButton');

var _SidebarRightCollapseButton2 = _interopRequireDefault(_SidebarRightCollapseButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SidebarRight extends _components.Style {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            this.props.hideSidebarRight ? _react2.default.createElement(_SidebarRightExpandButton2.default, null) : _react2.default.createElement(_SidebarRightCollapseButton2.default, null),
            this.props.hideSidebarRight ? null : _react2.default.createElement(_SidebarRightSearch2.default, null)
        ), _temp;
    }

    get componentClassName() {
        return `lightdark-box sidebar-right`;
    }
}

exports.default = new _redux.Connect(SidebarRight).klass;

},{"../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","./SidebarRightCollapseButton":"/Users/phitien/apphub/src/apps/dmr/components/SidebarRightCollapseButton.js","./SidebarRightExpandButton":"/Users/phitien/apphub/src/apps/dmr/components/SidebarRightExpandButton.js","./SidebarRightSearch":"/Users/phitien/apphub/src/apps/dmr/components/SidebarRightSearch.js","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/SidebarRightCollapseButton.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../common/components');

var _redux = require('../redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SidebarRightCollapseButton extends _components.Style {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.collapseSidebarRight = () => this.props.executeToggleSidebarRightAction(true), this.render = () => _react2.default.createElement(
            'i',
            { className: this.className,
                onClick: this.collapseSidebarRight },
            'chevron_right'
        ), _temp;
    }

    get componentClassName() {
        return `sidebar-right-collapse-button material-icons`;
    }
}

exports.default = new _redux.Connect(SidebarRightCollapseButton).klass;

},{"../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/SidebarRightExpandButton.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../common/components');

var _redux = require('../redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SidebarRightExpandButton extends _components.Style {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.expandSidebarRight = () => this.props.executeToggleSidebarRightAction(false), this.render = () => _react2.default.createElement(
            'i',
            { className: this.className,
                onClick: this.expandSidebarRight },
            'chevron_left'
        ), _temp;
    }

    get componentClassName() {
        return `sidebar-right-expand-button material-icons`;
    }
}

exports.default = new _redux.Connect(SidebarRightExpandButton).klass;

},{"../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/SidebarRightSearch.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _components = require('../../../common/components');

var _redux = require('../redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SidebarRightSearch extends _components.Style {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.renderColumnsSelection = () => _react2.default.createElement(
            'div',
            { className: 'data-element-table-columns-selection' },
            _react2.default.createElement(
                'div',
                { className: 'choices' },
                this.props.dataElementColumns.filter(item => item.optional).map((item, i) => _react2.default.createElement(_materialUi.Toggle, { key: i, className: 'choice', labelPosition: 'right',
                    label: item.name, defaultToggled: item.show, disabled: !item.optional,
                    onToggle: this.onToggle.bind(this, item) }))
            )
        ), this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            _react2.default.createElement(
                'div',
                { className: 'sidebar-right-search-section' },
                _react2.default.createElement(
                    'h4',
                    null,
                    'Show/Hide columns'
                ),
                this.renderColumnsSelection()
            )
        ), _temp;
    }

    get componentClassName() {
        return `sidebar-right-search`;
    }
    onToggle(col, e, checked) {
        col.show = checked;
        this.props.executeSetDataElementColumnsAction(this.props.dataElementColumns);
    }
}

exports.default = new _redux.Connect(SidebarRightSearch).klass;

},{"../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","material-ui":"material-ui","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/Viewport.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = require('../../../common/components');

class Viewport extends _components.Viewport {}
exports.default = Viewport;

},{"../../../common/components":"/Users/phitien/apphub/src/common/components/index.js"}],"/Users/phitien/apphub/src/apps/dmr/components/index.js":[function(require,module,exports){
'use strict';

exports.Viewport = require('./Viewport').default;
exports.LandingPage = require('./landing/Page').default;
exports.ProductsPage = require('./products/Page').default;

},{"./Viewport":"/Users/phitien/apphub/src/apps/dmr/components/Viewport.js","./landing/Page":"/Users/phitien/apphub/src/apps/dmr/components/landing/Page.js","./products/Page":"/Users/phitien/apphub/src/apps/dmr/components/products/Page.js"}],"/Users/phitien/apphub/src/apps/dmr/components/landing/Page.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Page = require('../Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LandingPage extends _Page2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.children = () => _react2.default.createElement(
            'div',
            null,
            'Landing page for DMR'
        ), _temp;
    }

}

exports.default = new _redux.Connect(LandingPage).klass;

},{"../../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","../Page":"/Users/phitien/apphub/src/apps/dmr/components/Page.js","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/products/Content.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../../common/components');

var _redux = require('../../redux');

var _Breadcrumbs = require('../Breadcrumbs');

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _ProductsList = require('./ProductsList');

var _ProductsList2 = _interopRequireDefault(_ProductsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Content extends _components.Style {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            _react2.default.createElement(_Breadcrumbs2.default, null),
            _react2.default.createElement(_ProductsList2.default, null)
        ), _temp;
    }

    get componentClassName() {
        return `content`;
    }
}

exports.default = new _redux.Connect(Content).klass;

},{"../../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","../../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","../Breadcrumbs":"/Users/phitien/apphub/src/apps/dmr/components/Breadcrumbs.js","./ProductsList":"/Users/phitien/apphub/src/apps/dmr/components/products/ProductsList.js","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/products/Detail.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _components = require('../../../../common/components');

var _redux = require('../../redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Detail extends _components.Style {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.render = () => _react2.default.createElement(
            _components.Card,
            { className: this.className },
            _react2.default.createElement(
                'div',
                { className: 'output-models' },
                !this.info.outputModels ? null : this.info.outputModels.map((model, j) => _react2.default.createElement(
                    'div',
                    { key: j, className: 'output-model' },
                    _react2.default.createElement(
                        'div',
                        { className: 'model-attributes' },
                        _react2.default.createElement(
                            'div',
                            { className: 'heading' },
                            model.name
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'description' },
                            model.description
                        ),
                        !model.attributes ? null : model.attributes.map((attr, k) => _react2.default.createElement(
                            'div',
                            { key: k, className: 'model-attribute' },
                            _react2.default.createElement(
                                'div',
                                { className: 'name', title: `${attr.name}: ${attr.value}` },
                                attr.name,
                                ' ',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'value' },
                                    attr.value
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'description' },
                                attr.description
                            )
                        ))
                    )
                ))
            ),
            _react2.default.createElement(
                'table',
                { className: 'model-interfaces' },
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        { className: 'model-interface model-interface-header' },
                        _react2.default.createElement(
                            'th',
                            { className: 'model-interface-sourceSystem' },
                            'Source System'
                        ),
                        _react2.default.createElement(
                            'th',
                            { className: 'model-interface-sourceProduct' },
                            'Source Product'
                        ),
                        _react2.default.createElement(
                            'th',
                            { className: 'model-interface-contextName' },
                            'Context'
                        ),
                        _react2.default.createElement(
                            'th',
                            { className: 'model-interface-derivedName' },
                            'Derived Name'
                        ),
                        _react2.default.createElement(
                            'th',
                            { className: 'model-interface-derivedLogic' },
                            'Derived Logic'
                        )
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    !this.info.interfaces ? null : this.info.interfaces.map((inte, k) => _react2.default.createElement(
                        'tr',
                        { key: k, className: 'model-interface' },
                        _react2.default.createElement(
                            'td',
                            { className: 'model-interface-sourceSystem' },
                            inte.sourceSystem
                        ),
                        _react2.default.createElement(
                            'td',
                            { className: 'model-interface-sourceProduct' },
                            inte.sourceProduct
                        ),
                        _react2.default.createElement(
                            'td',
                            { className: 'model-interface-contextName' },
                            inte.contextName
                        ),
                        _react2.default.createElement(
                            'td',
                            { className: 'model-interface-derivedName' },
                            inte.derivedName
                        ),
                        _react2.default.createElement(
                            'td',
                            { className: 'model-interface-derivedLogic' },
                            _react2.default.createElement(
                                'div',
                                { className: 'wrapper' },
                                _react2.default.createElement(
                                    _reactHighlight2.default,
                                    { className: 'javascript hljs' },
                                    inte.derivedLogic
                                )
                            )
                        )
                    ))
                )
            )
        ), _temp;
    }

    get componentClassName() {
        return 'data-element';
    }
    get info() {
        return this.props.info;
    }
}

exports.default = new _redux.Connect(Detail).klass;

},{"../../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","../../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","react":"react","react-highlight":"react-highlight"}],"/Users/phitien/apphub/src/apps/dmr/components/products/Page.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _SidebarLeft = require('../SidebarLeft');

var _SidebarLeft2 = _interopRequireDefault(_SidebarLeft);

var _SidebarRight = require('../SidebarRight');

var _SidebarRight2 = _interopRequireDefault(_SidebarRight);

var _Page = require('../Page');

var _Page2 = _interopRequireDefault(_Page);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProductsPage extends _Page2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.onRouteChanged = (prev, next) => prev.params.id != next.params.id ? this.loadData(next.params.id) : false, this.children = () => _react2.default.createElement(
            'div',
            { className: 'wrapper' },
            _react2.default.createElement(_SidebarLeft2.default, null),
            _react2.default.createElement(_Content2.default, null),
            _react2.default.createElement(_SidebarRight2.default, null)
        ), _temp;
    }

    loadData(id) {
        this.props.executeLoadHierarchyAction(id);
        this.props.executeSearchDataElementsAction({ id });
    }
    postComponentDidMount() {
        this.props.executeSetDataElementColumnsAction();
        this.props.executeSetListOutputTypesAction();
        this.props.executeSetCurrentOutputTypeAction();
        this.props.executeSetListSourceSystemsAction();
        this.props.executeSetCurrentSourceSystemAction();
        this.props.executeSetCurrentPageNoAction();
        this.props.executeSetCurrentPageSizeAction();
        this.loadData(this.route.params.id);
    }
}

exports.default = new _redux.Connect(ProductsPage).klass;

},{"../../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","../Page":"/Users/phitien/apphub/src/apps/dmr/components/Page.js","../SidebarLeft":"/Users/phitien/apphub/src/apps/dmr/components/SidebarLeft.js","../SidebarRight":"/Users/phitien/apphub/src/apps/dmr/components/SidebarRight.js","./Content":"/Users/phitien/apphub/src/apps/dmr/components/products/Content.js","react":"react"}],"/Users/phitien/apphub/src/apps/dmr/components/products/ProductsList.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Table = require('material-ui/Table');

var _components = require('../../../../common/components');

var _redux = require('../../redux');

var _Detail = require('./Detail');

var _Detail2 = _interopRequireDefault(_Detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProductsList extends _components.Style {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.onSearchFieldChange = e => this.props.executeSetCurrentSearchValueAction(e.target.value, () => {
            this.props.executeSearchDataElementsAction({ id: this.route.params.id });
        }), this.onOutputSelectChange = (e, index, value) => this.props.executeSetCurrentOutputTypeAction(value, () => {
            this.props.executeSearchDataElementsAction({ id: this.route.params.id });
        }), this.onPageChange = pageNo => this.props.executeSetCurrentPageNoAction(pageNo, () => {
            this.props.executeSearchDataElementsAction({ id: this.route.params.id });
        }), this.onPageSizeChange = pageSize => {
            this.props.executeSetCurrentPageSizeAction(pageSize, () => {
                this.props.executeSearchDataElementsAction({ id: this.route.params.id });
            });
        }, this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            _react2.default.createElement(
                'div',
                { className: 'view-toolbar' },
                _react2.default.createElement(_components.TextField, { className: 'seach-field',
                    floatingLabelText: 'Name, description, xpath',
                    hintText: 'Search for name, description, xpath',
                    onChange: this.onSearchFieldChange }),
                _react2.default.createElement(_components.SelectField, { source: this.props.listOutputTypes,
                    floatingLabelText: 'Output type',
                    onChange: this.onOutputSelectChange,
                    value: this.props.currentOutputType }),
                _react2.default.createElement(_components.SelectField, { source: this.props.listSourceSystems,
                    floatingLabelText: 'Source system',
                    onChange: this.onSourceSystemChange,
                    value: this.props.currentSourceSystem })
            ),
            _react2.default.createElement(_components.Table, { fixedHeader: true, fixedFooter: true,
                columns: this.columns.filter(item => item.show),
                data: this.data.data,
                pageSize: this.props.currentPageSize, onPageChange: this.onPageChange,
                currentPage: this.props.currentPageNo, onPageSizeChange: this.onPageSizeChange,
                fieldRenderer: this.fieldRenderer,
                rowDetailRenderer: this.rowDetailRenderer.bind(this),
                onCellClick: (rowIndex, cellIndex, e) => {
                    const row = e.target.closest('.row');
                    const index = row.getAttribute('data-index');
                    if (parseInt(index) == index) {
                        const row = this.data.data[index];
                        this.props.executeLoadDataElementInfoAction(row, () => {
                            row.expanded = !row.expanded;
                            this.refresh();
                        });
                    }
                }
            })
        ), _temp;
    }

    get componentClassName() {
        return 'products-list';
    }
    get data() {
        return { data: this.props.searchDataElementsResults.elements };
    }
    get columns() {
        return this.props.dataElementColumns;
    }
    getInfo(row) {
        return this.props.dataElements ? this.props.dataElements[row.elementId] : null;
    }
    fieldRenderer(row, i, col, j) {
        return _react2.default.createElement(
            _reactRouter.Link,
            null,
            row[col.field]
        );
    }
    rowDetailRenderer(rowi, i) {
        let info = this.getInfo(rowi);
        return !info ? null : _react2.default.createElement(_Detail2.default, { info: info, className: 'data-element' });
    }
}

exports.default = new _redux.Connect(ProductsList).klass;

},{"../../../../common/components":"/Users/phitien/apphub/src/common/components/index.js","../../redux":"/Users/phitien/apphub/src/apps/dmr/redux/index.js","./Detail":"/Users/phitien/apphub/src/apps/dmr/components/products/Detail.js","material-ui/Table":"/Users/phitien/apphub/node_modules/material-ui/Table/index.js","react":"react","react-router":"react-router"}],"/Users/phitien/apphub/src/apps/dmr/config/base.js":[function(require,module,exports){
'use strict';

const primaryColor = 'rgba(52, 142, 40, 1)';
module.exports = exports = {
    api: {
        urls: {
            hierarchy: 'http://uklvauems02a.uk.standardchartered.com:8083/dmr-api/mapper-service/datahierarchy',
            searchDataElements: 'http://uklvauems02a.uk.standardchartered.com:8083/dmr-api/mapper-service/elements',
            dataElement: 'http://uklvauems02a.uk.standardchartered.com:8083/dmr-api/mapper-service/elementInfo',
            productList: 'http://uklvauems02a.uk.standardchartered.com:8083/dmr-api/mapper-service/productList',
            pageInfo: '/static/dmr/api/page.json',
            pageInfoLogged: '/static/dmr/api/page-logged.json',
            login: '/static/dmr/api/login.json'
        }
    },
    ui: {
        currentPageNo: 1,
        currentPageSize: 10,
        currentOutputType: 'SCBML',
        currentSourceSystem: 'FEDS',
        setCurrentSearchValue: '',
        listOutputTypes: [{ primaryText: 'BCDF', value: 'BCDF' }, { primaryText: 'SCBML', value: 'SCBML' }],
        listSourceSystems: [{ primaryText: 'FEDS', value: 'FEDS' }, { primaryText: 'BTS', value: 'BTS' }],
        dataElementColumns: [{ name: 'ID', field: 'elementId', width: '40px', optional: true }, { name: 'Element Name', field: 'elementName', show: true }, { name: 'Asset Class', field: 'assetClass', show: true }, { name: 'Element Category', field: 'elementCategory', show: true }, { name: 'Description', field: 'elementDesc', show: true, optional: true }, { name: 'Xpath', field: 'context', optional: true }, { name: 'LifeCycle', field: 'lifeCycle', optional: true }],
        theme: {
            lineHeight: '32px',
            padding: '24px',
            paddingSmall: '5px',
            paddingTop: '24px',
            paddingRight: '24px',
            paddingBottom: '24px',
            paddingLeft: '24px',
            paddingTopSmall: '5px',
            paddingBottomSmall: '5px',
            paddingRightSmall: '5px',
            paddingLeftSmall: '5px',
            buttonFontSize: '14px',
            buttonBackgroundColor: primaryColor,
            fontSizeBig: '16px',
            fontSize: '14px',
            fontSizeSmall: '13px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: 'rgba(0, 0, 0, .7)',
            inputFontSize: '13px',
            inputColor: 'rgba(0, 0, 0, .8)',
            inputBackgroundColor: 'transparent',
            hintFontSize: '13px',
            hintColor: 'rgba(0, 0, 0, .6)',
            labelFontSize: '14px',
            labelColor: primaryColor,
            floatingLabelFontSize: '14px',
            floatingLabelFontSize: '13px',
            floatingLabelColor: primaryColor,
            floatingLabelFocusFontSize: '13px',
            floatingLabelFocusColor: primaryColor,
            materialTheme: {
                palette: {
                    primary1Color: primaryColor,
                    accent1Color: 'rgba(50, 200, 254, 1)',
                    borderColor: 'rgba(0, 0, 0, .1)'
                }
            }
        }
    }
};

},{}],"/Users/phitien/apphub/src/apps/dmr/config/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Config = require('../../../core/Config');

exports.default = new _Config.Config({ env: 'production', appname: 'Data Model Repository', app: 'DMR', apppath: '/dmr', version: '0.0.1' }, require('./base'), require('./production')).all();

},{"../../../core/Config":"/Users/phitien/apphub/src/core/Config.js","./base":"/Users/phitien/apphub/src/apps/dmr/config/base.js","./production":"/Users/phitien/apphub/src/apps/dmr/config/production.js"}],"/Users/phitien/apphub/src/apps/dmr/config/production.js":[function(require,module,exports){
'use strict';

module.exports = exports = {
    api: {
        urls: {
            hierarchy: 'http://uklvauems02a.uk.standardchartered.com:8083/dmr-api/mapper-service/datahierarchy',
            searchDataElements: 'http://uklvauems02a.uk.standardchartered.com:8083/dmr-api/mapper-service/elements',
            dataElement: 'http://uklvauems02a.uk.standardchartered.com:8083/dmr-api/mapper-service/elementInfo',
            pageInfo: '/static/dmr/api/page.json',
            pageInfoLogged: '/static/dmr/api/page-logged.json',
            login: '/static/dmr/api/login.json'
        }
    }
};

},{}],"/Users/phitien/apphub/src/apps/dmr/events.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ['cookie_deleted', 'cookie_updated', 'route_entered', 'route_changed'];

},{}],"/Users/phitien/apphub/src/apps/dmr/index.js":[function(require,module,exports){
'use strict';

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _redux = require('../../core/redux');

var _Reducer = require('../../common/redux/Reducer');

var DefaultReducers = _interopRequireWildcard(_Reducer);

var _Reducer2 = require('./redux/Reducer');

var DrmReducers = _interopRequireWildcard(_Reducer2);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _applications = require('../../common/applications');

var _Application = require('./Application');

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './sass/styles.scss'
require('./config');

_applications.HeaderApplication.addEvents(_events2.default);

const store = (0, _redux.getStore)((0, _objectAssign2.default)(DefaultReducers, DrmReducers));

const headerApplication = new _applications.HeaderApplication();
// headerApplication.routes = routes
headerApplication.render(store);

const footerApplication = new _applications.FooterApplication();
// footerApplication.routes = routes
footerApplication.render(store);

const application = new _Application2.default();
application.routes = _routes2.default;
application.render(store);

},{"../../common/applications":"/Users/phitien/apphub/src/common/applications/index.js","../../common/redux/Reducer":"/Users/phitien/apphub/src/common/redux/Reducer.js","../../core/redux":"/Users/phitien/apphub/src/core/redux/index.js","./Application":"/Users/phitien/apphub/src/apps/dmr/Application.js","./config":"/Users/phitien/apphub/src/apps/dmr/config/index.js","./events":"/Users/phitien/apphub/src/apps/dmr/events.js","./redux/Reducer":"/Users/phitien/apphub/src/apps/dmr/redux/Reducer.js","./routes":"/Users/phitien/apphub/src/apps/dmr/routes.js","object-assign":"object-assign"}],"/Users/phitien/apphub/src/apps/dmr/redux/Action.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadDataElementInfoAction = exports.SearchDataElementsAction = exports.LoadHierarchyAction = exports.SetCurrentHierarchyAction = exports.SwitchSidebarLeftViewAction = exports.SetDataElementColumnsAction = exports.SetListSourceSystemsAction = exports.SetListOutputTypesAction = exports.SetCurrentSourceSystemAction = exports.SetCurrentOutputTypeAction = exports.SearchHierarchyAction = undefined;

var _redux = require('../../../core/redux');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class SearchHierarchyAction extends _redux.SearchAction {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.proxyClasses = 'ApiSuccessLoadHierarchyAction', _temp;
    }

    searchFn(state, q) {
        let hierarchy = this.util.assign({}, state.hierarchy);
        hierarchy.searching = false;
        function showhide(n, hide, arr) {
            if (!n.id) n.hide = false;else if (arr) n.hide = !arr.includes(n);else n.hide = hide;
            if (n.subNodes && n.subNodes.length) {
                n.subNodes.map(sn => showhide(sn, hide, arr));
            }
        }
        showhide(hierarchy, false);
        if (q) {
            hierarchy.searching = true;
            let rs = [];
            function traverseup(n) {
                if (n) {
                    if (!rs.includes(n)) rs.push(n);
                    traverseup(n.parent);
                }
            }
            function traversedown(n) {
                if (n.name && n.name.toLowerCase().indexOf(q.toLowerCase()) >= 0) {
                    if (!rs.includes(n)) rs.push(n);
                    traverseup(n.parent);
                }
                if (n.subNodes && n.subNodes.length) {
                    n.subNodes.map(sn => traversedown(sn));
                }
            }
            traversedown(hierarchy);
            showhide(hierarchy, true, rs);
        }
        return { data: { body: hierarchy } };
    }
}
exports.SearchHierarchyAction = SearchHierarchyAction;
class SetCurrentOutputTypeAction extends _redux.Action {}
exports.SetCurrentOutputTypeAction = SetCurrentOutputTypeAction;
class SetCurrentSourceSystemAction extends _redux.Action {}
exports.SetCurrentSourceSystemAction = SetCurrentSourceSystemAction;
class SetListOutputTypesAction extends _redux.Action {}
exports.SetListOutputTypesAction = SetListOutputTypesAction;
class SetListSourceSystemsAction extends _redux.Action {}
exports.SetListSourceSystemsAction = SetListSourceSystemsAction;
class SetDataElementColumnsAction extends _redux.Action {}
exports.SetDataElementColumnsAction = SetDataElementColumnsAction;
class SwitchSidebarLeftViewAction extends _redux.Action {}
exports.SwitchSidebarLeftViewAction = SwitchSidebarLeftViewAction;
class SetCurrentHierarchyAction extends _redux.ProxyAction {
    constructor(...args) {
        var _temp2;

        return _temp2 = super(...args), this.proxyClasses = 'SetBreadcrumbsAction', _temp2;
    }

    proxyNormalize(state, node) {
        const breadcrumbs = [];
        function* loop(n) {
            if (!n || !n.parent) yield breadcrumbs;else {
                breadcrumbs.push({ title: n.name, url: `/dmr/products/${n.id}` });
                yield* loop(n.parent);
            }
        }
        return loop(node).next().value.reverse();
    }
}
exports.SetCurrentHierarchyAction = SetCurrentHierarchyAction;
class LoadHierarchyAction extends _redux.Action {
    beforeDispatch(id, root, node) {
        let load = (() => {
            var _ref = _asyncToGenerator(function* (node) {
                if (node.id == id) _redux.Action.execute(SetCurrentHierarchyAction, node);
                if (!node.loaded) {
                    let payload = { product: node.path, id: node.id };
                    let res = yield me.util.query(me.configuration.api.urls.hierarchy.format(payload), payload).run(true);
                    if (res.data.body) {
                        me.util.assign(node, res.data.body, { loaded: true });
                        if (!me.util.isEmpty(node.subNodes)) {
                            node.subNodes.map(function (subnode) {
                                me.util.assign(subnode, { parent: node });
                                load(subnode);
                            });
                        }
                    }
                }
            });

            return function load(_x) {
                return _ref.apply(this, arguments);
            };
        })();

        if (!root) {
            root = { loaded: false, path: '', id: '' };
        }
        const me = this;

        load(root);
        _redux.Action.execute('ApiSuccessLoadHierarchyAction', { data: { body: root } });
    }
}
exports.LoadHierarchyAction = LoadHierarchyAction;
class SearchDataElementsAction extends _redux.ApiAction {
    get searchParams() {
        const states = this.getStates();
        const outputType = states.currentOutputType;
        const sourceSystem = states.currentSourceSystem;
        const searchValue = states.currentSearchValue;
        const pageNo = states.currentPageNo;
        const pageSize = states.currentPageSize;
        return {
            header: null, serverDateTime: null, token: null,
            body: {
                sourceSystem,
                outputType,
                searchValue,
                page: { pageNo, pageSize }
            }
        };
    }
    loadRequest(payload) {
        const searchParams = this.searchParams;
        searchParams.body.contextPathId = parseInt(payload.id) ? parseInt(payload.id) : 0;
        return this.util.post(this.configuration.api.urls.searchDataElements.format(payload), searchParams);
    }
}
exports.SearchDataElementsAction = SearchDataElementsAction;
class LoadDataElementInfoAction extends _redux.ApiAction {
    loadCache(payload) {
        const state = this.apiSuccessState;
        return state && state.dataElements ? state.dataElements[payload.elementId] : null;
    }
    loadRequest(payload) {
        return this.util.query(this.configuration.api.urls.dataElement.format(payload), { elemId: payload.elementId });
    }
}
exports.LoadDataElementInfoAction = LoadDataElementInfoAction;

},{"../../../core/redux":"/Users/phitien/apphub/src/core/redux/index.js"}],"/Users/phitien/apphub/src/apps/dmr/redux/Connect.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('../../../common/redux');

var _Action = require('./Action');

var actions = _interopRequireWildcard(_Action);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

class Connect extends _redux.Connect {
    getActions(dispatch, ownProps, ...args) {
        return actions;
    }
}
exports.default = Connect;

},{"../../../common/redux":"/Users/phitien/apphub/src/common/redux/index.js","./Action":"/Users/phitien/apphub/src/apps/dmr/redux/Action.js"}],"/Users/phitien/apphub/src/apps/dmr/redux/Reducer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApiSuccessLoadDataElementInfoActionReducer = exports.ApiSuccessLoadHierarchyActionReducer = exports.ApiSuccessSearchDataElementsActionReducer = exports.SwitchSidebarLeftViewActionReducer = exports.SetCurrentHierarchyActionReducer = exports.SetDataElementColumnsActionReducer = exports.SetListSourceSystemsActionReducer = exports.SetListOutputTypesActionReducer = exports.SetCurrentSourceSystemActionReducer = exports.SetCurrentOutputTypeActionReducer = undefined;

var _redux = require('../../../core/redux');

class SetCurrentOutputTypeActionReducer extends _redux.ConfigReducer {
    get fieldName() {
        return 'currentOutputType';
    }
}
exports.SetCurrentOutputTypeActionReducer = SetCurrentOutputTypeActionReducer;
class SetCurrentSourceSystemActionReducer extends _redux.ConfigReducer {
    get fieldName() {
        return 'currentSourceSystem';
    }
}
exports.SetCurrentSourceSystemActionReducer = SetCurrentSourceSystemActionReducer;
class SetListOutputTypesActionReducer extends _redux.ConfigReducer {
    get fieldName() {
        return 'listOutputTypes';
    }
}
exports.SetListOutputTypesActionReducer = SetListOutputTypesActionReducer;
class SetListSourceSystemsActionReducer extends _redux.ConfigReducer {
    get fieldName() {
        return 'listSourceSystems';
    }
}
exports.SetListSourceSystemsActionReducer = SetListSourceSystemsActionReducer;
class SetDataElementColumnsActionReducer extends _redux.ConfigReducer {
    get fieldName() {
        return 'dataElementColumns';
    }
}
exports.SetDataElementColumnsActionReducer = SetDataElementColumnsActionReducer;
class SetCurrentHierarchyActionReducer extends _redux.Reducer {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.debug = true, _temp;
    }

    get fieldName() {
        return 'currentHierarchy';
    }
}
exports.SetCurrentHierarchyActionReducer = SetCurrentHierarchyActionReducer;
class SwitchSidebarLeftViewActionReducer extends _redux.Reducer {
    get fieldName() {
        return 'sidebarLeftViewName';
    }
    get defaultValue() {
        return 'Hierarchy';
    }
}
exports.SwitchSidebarLeftViewActionReducer = SwitchSidebarLeftViewActionReducer;
class ApiSuccessSearchDataElementsActionReducer extends _redux.Reducer {
    get defaultValue() {
        return { elements: [], pageInfo: { pageNo: 1, pageSize: 10, totalPage: 2 } };
    }
    get fieldName() {
        return 'searchDataElementsResults';
    }
    normalize(action) {
        return action.data.body;
    }
}
exports.ApiSuccessSearchDataElementsActionReducer = ApiSuccessSearchDataElementsActionReducer;
class ApiSuccessLoadHierarchyActionReducer extends _redux.Reducer {
    get fieldName() {
        return 'hierarchy';
    }
    normalize(action) {
        return action.data.body;
    }
}
exports.ApiSuccessLoadHierarchyActionReducer = ApiSuccessLoadHierarchyActionReducer;
class ApiSuccessLoadDataElementInfoActionReducer extends _redux.ListReducer {
    get fieldName() {
        return 'dataElements';
    }
    normalize(action) {
        return action.data.body;
    }
}
exports.ApiSuccessLoadDataElementInfoActionReducer = ApiSuccessLoadDataElementInfoActionReducer;

},{"../../../core/redux":"/Users/phitien/apphub/src/core/redux/index.js"}],"/Users/phitien/apphub/src/apps/dmr/redux/index.js":[function(require,module,exports){
'use strict';

exports.Connect = require('./Connect').default;

},{"./Connect":"/Users/phitien/apphub/src/apps/dmr/redux/Connect.js"}],"/Users/phitien/apphub/src/apps/dmr/routes.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _routes = require('../../common/routes');

var _components = require('./components');

const hierarchyPaths = ['/dmr'];
const subRoutes = [{ path: 'products', component: _components.ProductsPage, onEnter: _routes.onRouteEntered }, { path: 'products/:id', component: _components.ProductsPage, onEnter: _routes.onRouteEntered }];
const routes = [];

hierarchyPaths.map(hierarchy => {
    routes.push({
        path: hierarchy,
        component: _components.Viewport,
        indexRoute: {
            component: _components.LandingPage
        },
        childRoutes: subRoutes,
        onChange: _routes.onRouteChanged
    });
});

exports.default = routes;

},{"../../common/routes":"/Users/phitien/apphub/src/common/routes/index.js","./components":"/Users/phitien/apphub/src/apps/dmr/components/index.js"}],"/Users/phitien/apphub/src/common/applications/Application.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _core = require('../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Application {
    constructor() {
        this.children = () => {
            throw 'No children';
        };

        this.afterRender = () => {};

        this.render = store => {
            this.store = store;
            _reactDom2.default.render(_react2.default.createElement(
                _reactRedux.Provider,
                { store: this.store },
                this.children()
            ), document.getElementById(this.container), this.afterRender);
        };
    }

    get configuration() {
        return _core.configuration;
    }
    get util() {
        return _core.util;
    }
    get container() {
        throw 'No container id provided';
    }

    static addEvents(events) {
        events.map(event => addEventListener(event, e => {
            dispatchEvent(new CustomEvent(`global_${event}`, { detail: e.detail }));
        }));
    }
}
exports.default = Application;

},{"../../core":"/Users/phitien/apphub/src/core/index.js","react":"react","react-dom":"react-dom","react-redux":"react-redux"}],"/Users/phitien/apphub/src/common/applications/FooterApplication.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Application = require('./Application');

var _Application2 = _interopRequireDefault(_Application);

var _Footer = require('../components/navigation/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FooterApplication extends _Application2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.children = () => _react2.default.createElement(_Footer2.default, null), _temp;
    }

    get container() {
        return 'footer';
    }
}
exports.default = FooterApplication;

},{"../components/navigation/Footer":"/Users/phitien/apphub/src/common/components/navigation/Footer.js","./Application":"/Users/phitien/apphub/src/common/applications/Application.js","react":"react"}],"/Users/phitien/apphub/src/common/applications/HeaderApplication.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Application = require('./Application');

var _Application2 = _interopRequireDefault(_Application);

var _Header = require('../components/navigation/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HeaderApplication extends _Application2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.children = () => _react2.default.createElement(_Header2.default, null), _temp;
    }

    get container() {
        return 'header';
    }
}
exports.default = HeaderApplication;

},{"../components/navigation/Header":"/Users/phitien/apphub/src/common/components/navigation/Header.js","./Application":"/Users/phitien/apphub/src/common/applications/Application.js","react":"react"}],"/Users/phitien/apphub/src/common/applications/RoutesApplication.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Application = require('./Application');

var _Application2 = _interopRequireDefault(_Application);

var _core = require('../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RoutesApplication extends _Application2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.children = () => _react2.default.createElement(
            'div',
            { className: 'application' },
            _react2.default.createElement(_reactRouter.Router, { routes: this.routes, history: this.history }),
            this.configuration.showDevTool ? _react2.default.createElement(_core.DevTools, null) : null
        ), _temp;
    }

    get routes() {
        if (!this.__routes) throw 'No routes provided';
        return this.__routes;
    }
    set routes(v) {
        this.__routes = v;
    }
    get history() {
        return this.util.history;
    }

}
exports.default = RoutesApplication;

},{"../../core":"/Users/phitien/apphub/src/core/index.js","./Application":"/Users/phitien/apphub/src/common/applications/Application.js","react":"react","react-router":"react-router"}],"/Users/phitien/apphub/src/common/applications/index.js":[function(require,module,exports){
'use strict';

exports.Application = require('./Application').default;
exports.FooterApplication = require('./FooterApplication').default;
exports.HeaderApplication = require('./HeaderApplication').default;
exports.RoutesApplication = require('./RoutesApplication').default;

},{"./Application":"/Users/phitien/apphub/src/common/applications/Application.js","./FooterApplication":"/Users/phitien/apphub/src/common/applications/FooterApplication.js","./HeaderApplication":"/Users/phitien/apphub/src/common/applications/HeaderApplication.js","./RoutesApplication":"/Users/phitien/apphub/src/common/applications/RoutesApplication.js"}],"/Users/phitien/apphub/src/common/components/Breadcrumbs.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Breadcrumbs extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.extra = null, this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            _react2.default.createElement(
                'div',
                { className: 'links' },
                this.props.breadcrumbs.map((item, i) => _react2.default.createElement(
                    _reactRouter.Link,
                    { key: i, to: item.url, className: 'breadcrumb' },
                    item.title
                ))
            ),
            this.extra
        ), _temp;
    }

    get componentClassName() {
        return 'breadcrumbs';
    }
}
exports.default = Breadcrumbs;

},{"./Style":"/Users/phitien/apphub/src/common/components/Style.js","react":"react","react-router":"react-router"}],"/Users/phitien/apphub/src/common/components/Card.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Card extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.header = () => _react2.default.createElement(
            'div',
            { className: 'card-header', style: { display: !this.props.title ? 'none' : '' } },
            _react2.default.createElement(
                'h3',
                null,
                this.props.title
            ),
            this.subtitle()
        ), this.subtitle = () => _react2.default.createElement(
            'label',
            { style: { display: !this.props.subtitle ? 'none' : '' } },
            this.props.subtitle
        ), this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            this.header(),
            _react2.default.createElement(
                'div',
                { className: 'card-content' },
                this.props.children
            )
        ), _temp;
    }

    get componentClassName() {
        return 'card';
    }
}
exports.default = Card;

},{"./Style":"/Users/phitien/apphub/src/common/components/Style.js","react":"react"}],"/Users/phitien/apphub/src/common/components/Component.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _core = require('../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Component extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.onRouteEntered = (route, replace) => {};

        this.onRouteChanged = (prev, next) => {};

        this.state = { validationErrors: {}, refresh: false };
        this.init();
    }
    init() {}
    componentDidMount() {
        this.__mounted = true;
        addEventListener('global_cookie_deleted', this.refresh.bind(this));
        addEventListener('global_cookie_updated', this.refresh.bind(this));
        addEventListener('global_route_entered', e => {
            const { route, replace } = e.detail;
            this.setState({ pageRoute: route });
            this.onRouteEntered(route, replace);
        });
        addEventListener('global_route_changed', e => {
            const { prev, next } = e.detail;
            this.onRouteChanged(prev, next);
        });
        this.postComponentDidMount();
    }
    postComponentDidMount() {}
    componentWillUnmount() {
        this.__mounted = false;
    }

    refresh() {
        if (this.__mounted) {
            this.setState(this.state);
        }
    }
    setError(field, msg) {
        this.state.validationErrors[field] = msg;
        this.setState(this.state);
        return false;
    }
    removeError(field) {
        this.state.validationErrors[field] = null;
        this.setState(this.state);
        return true;
    }
    get dom() {
        return _reactDom2.default.findDOMNode(this);
    }
    get configuration() {
        return _core.configuration;
    }
    get util() {
        return _core.util;
    }
    get componentClassName() {
        return '';
    }
    get className() {
        return `${this.componentClassName} ${this.props.className ? this.props.className : ''}`;
    }
    get route() {
        return this.util.cookie.read('route_entered').route;
    }
}
exports.default = Component;

},{"../../core":"/Users/phitien/apphub/src/core/index.js","react":"react","react-dom":"react-dom"}],"/Users/phitien/apphub/src/common/components/HighLight.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HighLight extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.render = () => _react2.default.createElement(_reactHighlight2.default, _extends({}, this.cmpStyleProps, { className: this.className })), _temp;
    }

    get componentClassName() {
        return 'javascript';
    }
    get themeProps() {
        return ['innerHTML', 'element', 'value'];
    }
    get defaultProps() {
        const theme = this.theme;
        return {
            innerHTML: true
        };
    }
}
exports.default = HighLight;

},{"./Style":"/Users/phitien/apphub/src/common/components/Style.js","react":"react","react-highlight":"react-highlight"}],"/Users/phitien/apphub/src/common/components/Login.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _redux = require('../redux');

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Login extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.validate = () => {
            if (!this.accountInput.getValue()) {
                return this.setError('account', 'This field is required');
            } else {
                this.removeError('account');
            }
            if (!this.passwordInput.getValue()) {
                return this.setError('password', 'This field is required');
            } else {
                this.removeError('password');
            }
            return true;
        }, this.onLogin = e => {
            if (this.validate()) {
                this.props.executeUserLoginAction({
                    account: this.accountInput.getValue(),
                    password: this.passwordInput.getValue()
                });
            }
        }, this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            _react2.default.createElement(
                'h1',
                null,
                'Sign in to ',
                _react2.default.createElement(
                    'span',
                    { className: 'app' },
                    this.configuration.app
                )
            ),
            _react2.default.createElement(
                'form',
                { className: 'login-form' },
                _react2.default.createElement(_materialUi.TextField, { type: 'text', ref: e => this.accountInput = e,
                    errorText: this.state.validationErrors.account,
                    hintText: 'Account', fullWidth: true }),
                _react2.default.createElement(_materialUi.TextField, { type: 'password', ref: e => this.passwordInput = e, style: { marginTop: 12, marginBottom: 12 },
                    errorText: this.state.validationErrors.password,
                    hintText: 'Password', fullWidth: true }),
                _react2.default.createElement(_materialUi.RaisedButton, { label: 'Login', primary: true, fullWidth: true, onClick: this.onLogin })
            )
        ), _temp;
    }

    get componentClassName() {
        return `container-fluid grey-box page login-page`;
    }
}
exports.default = new _redux.Connect(Login).klass;

},{"../redux":"/Users/phitien/apphub/src/common/redux/index.js","./Style":"/Users/phitien/apphub/src/common/components/Style.js","material-ui":"material-ui","react":"react"}],"/Users/phitien/apphub/src/common/components/Menu.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Menu extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.renderMenu = (menus, className, subMenuClassName) => !menus || !menus.length ? null : _react2.default.createElement(
            'ul',
            { className: className },
            menus.map((item, i) => {
                let props = item.onClick ? { onClick: item.onClick } : { href: item.url, onClick: e => {
                        e.preventDefault();
                        if (item.url) this.util.history.push(item.url);
                    } };
                return item.html ? _react2.default.createElement(
                    'li',
                    { key: i, className: this.getNodeClassName(item) },
                    item.html
                ) : _react2.default.createElement(
                    'li',
                    { key: i, className: this.getNodeClassName(item) },
                    _react2.default.createElement(
                        'a',
                        props,
                        item.title,
                        item.subNodes && item.subNodes.length > 0 ? _react2.default.createElement(
                            'i',
                            { className: 'material-icons' },
                            'chevron_right'
                        ) : null
                    ),
                    !item.description ? null : _react2.default.createElement(
                        'div',
                        { className: 'description' },
                        item.description
                    ),
                    _react2.default.createElement(Menu, { menus: item.subNodes,
                        level: this.level + 1,
                        className: subMenuClassName,
                        subMenuClassName: subMenuClassName })
                );
            })
        ), this.render = () => this.renderMenu(this.props.menus, this.className, this.props.subMenuClassName), _temp;
    }

    get componentClassName() {
        return '';
    }
    get level() {
        return this.props.level ? this.props.level : 0;
    }
    getNodeClassName(node) {
        return `level${this.level} ${node.subNodes && node.subNodes.length > 0 ? 'has-children' : ''}`;
    }
}
exports.default = Menu;

},{"./Style":"/Users/phitien/apphub/src/common/components/Style.js","react":"react"}],"/Users/phitien/apphub/src/common/components/Page.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _materialUi = require('material-ui');

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();

class Page extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.children = () => this.props.children, this.modal = () => this.props.modal, this.render = () => _react2.default.createElement(
            _styles.MuiThemeProvider,
            { muiTheme: (0, _styles.getMuiTheme)(this.theme.materialTheme) },
            _react2.default.createElement(
                'div',
                { className: this.className },
                this.util.user.isLogged ? this.children() : _react2.default.createElement(_Login2.default, null),
                this.modal()
            )
        ), _temp;
    }

    get componentClassName() {
        return `container-fluid grey-box page ${this.pageClassName}`;
    }
    get pageClassName() {
        return '';
    }
}
exports.default = Page;

},{"./Login":"/Users/phitien/apphub/src/common/components/Login.js","./Style":"/Users/phitien/apphub/src/common/components/Style.js","material-ui":"material-ui","material-ui/styles":"/Users/phitien/apphub/node_modules/material-ui/styles/index.js","react":"react","react-tap-event-plugin":"react-tap-event-plugin"}],"/Users/phitien/apphub/src/common/components/SelectField.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SelectField extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.render = () => _react2.default.createElement(
            _materialUi.SelectField,
            _extends({}, this.cmpStyleProps, { className: this.className, hintText: 'asdasd' }),
            this.props.children ? this.props.children : this.props.source.map((option, i) => _react2.default.createElement(_materialUi.MenuItem, this.util.assign({ key: i }, option)))
        ), _temp;
    }

    get componentClassName() {
        return 'select-field';
    }
    get themeProps() {
        return ['autoWidth', 'children', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelStyle', 'floatingLabelText', 'fullWidth', 'hintStyle', 'hintText', 'iconStyle', 'labelStyle', 'listStyle', 'maxHeight', 'menuItemStyle', 'menuStyle', 'multiple', 'onChange', 'selectedMenuItemStyle', 'selectionRenderer', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineStyle', 'value'];
    }
    get defaultProps() {
        const theme = this.theme;
        return {
            floatingLabelStyle: this.util.assign({
                top: '5px', left: '0px',
                fontSize: theme.fontSizeSmall
            }, theme.paddingLeftRightSmall),
            hintStyle: this.util.assign({ top: '0', padding: '0' }, theme.lineStyle),
            labelStyle: this.util.assign({ top: '0', padding: '0' }, theme.lineStyle),
            iconStyle: this.util.assign({ top: '0', border: '0', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', width: theme.lineHeight }, theme.lineStyle),
            menuStyle: this.util.assign({ margin: '0', padding: '0' }, theme.lineStyle, theme.paddingLeftRightSmall),
            underlineStyle: this.util.assign({}, theme.underlineStyle),
            style: this.util.assign({
                fontSize: theme.fontSizeSmall
            }, theme.lineStyle)
        };
    }
}
exports.default = SelectField;

},{"./Style":"/Users/phitien/apphub/src/common/components/Style.js","material-ui":"material-ui","react":"react"}],"/Users/phitien/apphub/src/common/components/Style.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component = require('./Component');

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Style extends _Component2.default {
    get uuid() {
        return this.__uuid = !this.__uuid ? this.util.uuid() : this.__uuid;
    }
    get defaultTheme() {
        const theme = this.configuration.ui.theme;
        return this.util.assign({ id: this.uuid, name: this.uuid }, theme, {
            paddingLeftRight: {
                paddingLeft: theme.paddingLeft,
                paddingRight: theme.paddingRight
            },
            paddingTopBottom: {
                paddingTop: theme.paddingTop,
                paddingBottom: theme.paddingBottom
            },
            paddingLeftRightSmall: {
                paddingLeft: theme.paddingLeftSmall,
                paddingRight: theme.paddingRightSmall
            },
            paddingTopBottomSmall: {
                paddingTop: theme.paddingTopSmall,
                paddingBottom: theme.paddingBottomSmall
            },
            lineStyle: {
                height: theme.lineHeight,
                lineHeight: theme.lineHeight
            },
            buttonStyle: {
                fontSize: theme.buttonFontSize,
                backgroundColor: theme.buttonBackgroundColor,
                paddingLeft: theme.paddingLeftSmall,
                paddingRight: theme.paddingRightSmall
            },
            underlineStyle: { bottom: '0', left: '0' },
            underlineFocusStyle: { borderBottomWidth: '1px' },
            tableStyle: {},
            rowStyle: {
                height: 'auto',
                lineHeight: theme.lineHeight
            },
            cellStyle: {
                margin: '0', padding: `0px ${theme.paddingSmall}`
            },
            breadcrumbsStyle: {
                lineHeight: theme.lineHeight
            }
        });
    }
    get themeProps() {
        return [];
    }
    getThemeProps() {
        return ['id', 'name', 'style'].concat(this.themeProps);
    }
    get theme() {
        return this.util.assign({}, this.defaultTheme, this.props);
    }
    get cmpStyleProps() {
        return this.util.include(this.util.assign({}, this.theme, this.cmpProps), this.getThemeProps());
    }
    get cmpProps() {
        return this.util.assignDeep({}, this.defaultProps, this.props);
    }
    get defaultProps() {
        return {};
    }
}
exports.default = Style;

},{"./Component":"/Users/phitien/apphub/src/common/components/Component.js","react":"react"}],"/Users/phitien/apphub/src/common/components/Table.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('material-ui/Table');

var _materialUi = require('material-ui');

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

var _TextField = require('./TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Table extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.header = () => _react2.default.createElement(
            _Table.TableHeader,
            { style: { display: !this.cmpProps.showHeader ? 'none' : '' },
                displaySelectAll: this.cmpProps.showCheckboxes,
                adjustForCheckbox: this.cmpProps.showCheckboxes,
                enableSelectAll: this.cmpProps.enableSelectAll },
            _react2.default.createElement(
                _Table.TableRow,
                { style: this.theme.rowStyle },
                this.cmpProps.columns.map((col, i) => _react2.default.createElement(
                    _Table.TableHeaderColumn,
                    { key: i, tooltip: col.tooltip,
                        style: this.cellStyle(col) },
                    col.name
                ))
            )
        ), this.body = () => _react2.default.createElement(
            _Table.TableBody,
            { style: { display: !this.cmpProps.data ? 'none' : '' },
                displayRowCheckbox: this.cmpProps.showCheckboxes,
                deselectOnClickaway: this.cmpProps.deselectOnClickaway,
                showRowHover: this.cmpProps.showRowHover,
                stripedRows: this.cmpProps.stripedRows
            },
            this.cmpProps.data.map((row, i) => this.rowRenderer(row, i))
        ), this.footer = () => _react2.default.createElement(
            _Table.TableFooter,
            { style: { display: !this.cmpProps.showFooter ? 'none' : '' },
                adjustForCheckbox: this.cmpProps.showCheckboxes },
            this.pagination()
        ), this.openPrevPage = () => this.onPageChage(this.cmpProps.currentPage > 0 ? this.cmpProps.currentPage - 1 : 1), this.openNextPage = () => this.onPageChage(this.cmpProps.currentPage + 1), this.onPageFieldChange = e => this.onPageChage(e.target.value), this.onPageChage = page => {
            if (page != this.cmpProps.currentPage) {
                this.cmpProps.currentPage = page;
                this.setState(this.state);
                this.cmpProps.onPageChange(page);
            }
        }, this.onPageSizeFieldChange = e => this.onPageSizeChange(e.target.value), this.onPageSizeChange = size => {
            if (size != this.cmpProps.pageSize) {
                this.cmpProps.pageSize = size;
                this.setState(this.state);
                this.cmpProps.onPageSizeChange(size);
            }
        }, this.pagination = () => _react2.default.createElement(
            _Table.TableRow,
            { style: this.util.assign({
                    padding: '0',
                    display: !this.cmpProps.showPagination ? 'none' : '' }, this.theme.rowStyle) },
            _react2.default.createElement(
                _Table.TableRowColumn,
                { style: this.cellStyle(), colSpan: this.cmpProps.columns.length },
                _react2.default.createElement(
                    'div',
                    { className: 'pagination' },
                    _react2.default.createElement(
                        'div',
                        { className: 'pagination-navi' },
                        _react2.default.createElement(
                            'div',
                            { className: 'title' },
                            'Page'
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _materialUi.IconButton,
                                { iconStyle: this.prevNextStyle, onClick: this.openPrevPage },
                                _react2.default.createElement(
                                    'i',
                                    { className: 'material-icons' },
                                    'chevron_left'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'pagination-pageInfo' },
                                _react2.default.createElement(_TextField2.default, { type: 'number', min: 1, step: 5,
                                    value: this.cmpProps.currentPage,
                                    onChange: this.onPageFieldChange })
                            ),
                            _react2.default.createElement(
                                _materialUi.IconButton,
                                { iconStyle: this.prevNextStyle, onClick: this.openNextPage },
                                _react2.default.createElement(
                                    'i',
                                    { className: 'material-icons' },
                                    'chevron_right'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'pagination-pagesize' },
                        _react2.default.createElement(
                            'div',
                            { className: 'title' },
                            'Size'
                        ),
                        _react2.default.createElement(_TextField2.default, { type: 'number', min: 10, max: 100, step: 5,
                            value: this.cmpProps.pageSize,
                            onChange: this.onPageSizeFieldChange })
                    )
                )
            )
        ), this.render = () => _react2.default.createElement(
            _Table.Table,
            _extends({}, this.cmpStyleProps, { className: this.className }),
            this.header(),
            this.body(),
            this.footer()
        ), _temp;
    }

    get componentClassName() {
        return 'table';
    }
    get themeProps() {
        return ['allRowsSelected', 'bodyStyle', 'children', 'className', 'fixedFooter', 'fixedHeader', 'footerStyle', 'headerStyle', 'height', 'multiSelectable', 'onCellClick', 'onCellHover', 'onCellHoverExit', 'onRowHover', 'onRowHoverExit', 'onRowSelection', 'selectable', 'wrapperStyle', 'height'];
    }
    get defaultProps() {
        return {
            showHeader: true, showFooter: true, showCheckboxes: false,
            columns: [], data: [], currentPage: 1, totalPage: 1, pageSize: 10,
            showPagination: true, showFilters: true,
            height: '362px', stripedRows: true, showRowHover: true, selectable: false
        };
    }
    cellStyle(col) {
        return this.util.assign({ width: col && col.width ? col.width : 'auto' }, this.theme.rowStyle, this.theme.cellStyle);
    }
    get prevNextStyle() {
        return this.util.assign({ display: 'flex', alignItem: 'center' }, this.theme.rowStyle);
    }

    fieldRenderer(row, i, col, j) {
        return this.props.fieldRenderer ? this.props.fieldRenderer.call(this, row, i, col, j) : _react2.default.createElement(
            'a',
            null,
            row && row[col.field] ? row[col.field].toString() : ''
        );
    }
    cellRenderer(row, i, col, j) {
        return this.props.cellRenderer ? this.props.cellRenderer.call(this, row, i, col, j) : _react2.default.createElement(
            _Table.TableRowColumn,
            { key: j, className: `cell${j}`, style: this.cellStyle(col) },
            this.fieldRenderer(row, i, col, j)
        );
    }
    rowRenderer(row, i) {
        if (this.props.rowRenderer) return this.props.rowRenderer.call(this, row, i);
        const rs = [_react2.default.createElement(
            _Table.TableRow,
            { key: i, 'data-index': i, className: `row`, style: this.theme.rowStyle,
                hoverable: true,
                selected: row.selected },
            this.cmpProps.columns.map((col, j) => this.cellRenderer(row, i, col, j))
        )];
        if (row.expanded && this.props.rowDetailRenderer) rs.push(_react2.default.createElement(
            _Table.TableRow,
            { key: i + 0.5, 'data-index': i + 0.5, className: `row row-detail`, style: row.expanded ? this.theme.rowStyle : { display: 'none' } },
            _react2.default.createElement(
                _Table.TableRowColumn,
                { style: this.cellStyle(), colSpan: this.cmpProps.columns.length },
                this.cmpProps.rowDetailRenderer.call(this, row, i)
            )
        ));
        return rs;
    }

}
exports.default = Table;

},{"./Style":"/Users/phitien/apphub/src/common/components/Style.js","./TextField":"/Users/phitien/apphub/src/common/components/TextField.js","material-ui":"material-ui","material-ui/Table":"/Users/phitien/apphub/node_modules/material-ui/Table/index.js","react":"react"}],"/Users/phitien/apphub/src/common/components/Tabs.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Tabs extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.state = {
            activeIndex: this.cmpProps.activeIndex ? this.cmpProps.activeIndex : 0
        }, this.handleNext = () => this.activeIndex < this.childCount ? this.setState({ activeIndex: this.activeIndex + 1 }) : false, this.handlePrev = () => this.activeIndex > 0 ? this.setState({ activeIndex: this.activeIndex - 1 }) : false, this.getTitle = (el, i) => el.props.children.reduce((v, child) => {
            return child.type == 'title' ? v = child.props.children : v;
        }, i), this.getContent = (el, i) => el.props.children.reduce((v, child) => {
            return child.type == 'content' ? v = child.props.children : v;
        }, i), this.render = () => _react2.default.createElement(
            'div',
            { className: this.className, style: { display: !this.childCount ? 'none' : '' } },
            _react2.default.createElement(
                'div',
                { className: 'tabs-header' },
                this.props.children.map((tab, i) => _react2.default.createElement(_materialUi.RaisedButton, { key: i, onClick: () => this.setState({ activeIndex: i }), label: this.getTitle(tab, i),
                    className: `tab ${i == this.activeIndex ? 'active' : ''}`, primary: i == this.activeIndex,
                    buttonStyle: this.theme.buttonStyle,
                    labelStyle: this.theme.labelStyle
                }))
            ),
            _react2.default.createElement(
                'div',
                { className: 'tab-content' },
                this.getContent(this.props.children[this.activeIndex], this.activeIndex)
            )
        ), _temp;
    }

    get componentClassName() {
        return `tabs ${this.cmpProps.vertical ? 'tabs-vertical' : 'tabs-horizontal'}`;
    }

    get childCount() {
        return this.props.children.length;
    }
    get activeIndex() {
        return this.state.activeIndex;
    }
}

exports.default = Tabs;

},{"./Style":"/Users/phitien/apphub/src/common/components/Style.js","material-ui":"material-ui","react":"react"}],"/Users/phitien/apphub/src/common/components/TextField.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TextField extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.render = () => _react2.default.createElement(_materialUi.TextField, _extends({}, this.cmpStyleProps, { className: this.className })), _temp;
    }

    get componentClassName() {
        return 'text-field';
    }
    get themeProps() {
        return ['min', 'max', 'step', 'placeholder', 'children', 'defaultValue', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelShrinkStyle', 'floatingLabelStyle', 'floatingLabelText', 'fullWidth', 'hintStyle', 'hintText', 'inputStyle', 'multiLine', 'onChange', 'rows', 'rowsMax', 'textareaStyle', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'value'];
    }
    get defaultProps() {
        const theme = this.theme;
        return {
            floatingLabelFixed: true,
            floatingLabelStyle: this.util.assign({
                margin: '0', padding: '0', top: '0'
            }, theme.lineStyle, theme.paddingLeftRightSmall),
            hintStyle: this.util.assign({
                width: '100%', whiteSpace: 'nowrap', margin: '0', padding: '0', top: '2px'
            }, theme.lineStyle, theme.paddingLeftRightSmall),
            inputStyle: this.util.assign({
                width: '100%', margin: '0', padding: '0'
            }, theme.inputStyle, theme.paddingLeftRightSmall),
            style: this.util.assign({
                width: '100%', margin: '0', padding: '0',
                fontSize: theme.fontSize
            }, theme.lineStyle)
        };
    }
}
exports.default = TextField;

},{"./Style":"/Users/phitien/apphub/src/common/components/Style.js","material-ui":"material-ui","react":"react"}],"/Users/phitien/apphub/src/common/components/Viewport.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Viewport extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.children = () => this.props.children, this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            this.children()
        ), _temp;
    }

    get componentClassName() {
        return 'viewport container-fluid';
    }
}
exports.default = Viewport;

},{"./Style":"/Users/phitien/apphub/src/common/components/Style.js","react":"react"}],"/Users/phitien/apphub/src/common/components/index.js":[function(require,module,exports){
'use strict';

exports.Card = require('./Card').default;
exports.Component = require('./Component').default;
exports.Style = require('./Style').default;
exports.Breadcrumbs = require('./Breadcrumbs').default;
exports.Menu = require('./Menu').default;
exports.Page = require('./Page').default;
exports.SelectField = require('./SelectField').default;
exports.Table = require('./Table').default;
exports.Tabs = require('./Tabs').default;
exports.TextField = require('./TextField').default;
exports.Viewport = require('./Viewport').default;
exports.HighLight = require('./HighLight').default;

},{"./Breadcrumbs":"/Users/phitien/apphub/src/common/components/Breadcrumbs.js","./Card":"/Users/phitien/apphub/src/common/components/Card.js","./Component":"/Users/phitien/apphub/src/common/components/Component.js","./HighLight":"/Users/phitien/apphub/src/common/components/HighLight.js","./Menu":"/Users/phitien/apphub/src/common/components/Menu.js","./Page":"/Users/phitien/apphub/src/common/components/Page.js","./SelectField":"/Users/phitien/apphub/src/common/components/SelectField.js","./Style":"/Users/phitien/apphub/src/common/components/Style.js","./Table":"/Users/phitien/apphub/src/common/components/Table.js","./Tabs":"/Users/phitien/apphub/src/common/components/Tabs.js","./TextField":"/Users/phitien/apphub/src/common/components/TextField.js","./Viewport":"/Users/phitien/apphub/src/common/components/Viewport.js"}],"/Users/phitien/apphub/src/common/components/navigation/Footer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style = require('../Style');

var _Style2 = _interopRequireDefault(_Style);

var _Version = require('./Version');

var _Version2 = _interopRequireDefault(_Version);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Footer extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            _react2.default.createElement(_Version2.default, null)
        ), _temp;
    }

    get componentClassName() {
        return 'lightdark-box footer';
    }
}
exports.default = new _redux.Connect(Footer).klass;

},{"../../redux":"/Users/phitien/apphub/src/common/redux/index.js","../Style":"/Users/phitien/apphub/src/common/components/Style.js","./Version":"/Users/phitien/apphub/src/common/components/navigation/Version.js","react":"react"}],"/Users/phitien/apphub/src/common/components/navigation/Header.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style = require('../Style');

var _Style2 = _interopRequireDefault(_Style);

var _LinksHub = require('./LinksHub');

var _LinksHub2 = _interopRequireDefault(_LinksHub);

var _LogoBox = require('./LogoBox');

var _LogoBox2 = _interopRequireDefault(_LogoBox);

var _SearchBox = require('./SearchBox');

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _Help = require('./Help');

var _Help2 = _interopRequireDefault(_Help);

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _UserBox = require('./UserBox');

var _UserBox2 = _interopRequireDefault(_UserBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Header extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.onRouteEntered = (route, replace) => this.props.executeLoadPageInfoAction(), this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            _react2.default.createElement(_LinksHub2.default, null),
            _react2.default.createElement(_LogoBox2.default, null),
            _react2.default.createElement(_SearchBox2.default, null),
            _react2.default.createElement(_Notification2.default, null),
            _react2.default.createElement(_UserBox2.default, null),
            _react2.default.createElement(_Help2.default, null)
        ), _temp;
    }

    get componentClassName() {
        return 'dark-box header';
    }
}
exports.default = new _redux.Connect(Header).klass;

},{"../../redux":"/Users/phitien/apphub/src/common/redux/index.js","../Style":"/Users/phitien/apphub/src/common/components/Style.js","./Help":"/Users/phitien/apphub/src/common/components/navigation/Help.js","./LinksHub":"/Users/phitien/apphub/src/common/components/navigation/LinksHub.js","./LogoBox":"/Users/phitien/apphub/src/common/components/navigation/LogoBox.js","./Notification":"/Users/phitien/apphub/src/common/components/navigation/Notification.js","./SearchBox":"/Users/phitien/apphub/src/common/components/navigation/SearchBox.js","./UserBox":"/Users/phitien/apphub/src/common/components/navigation/UserBox.js","react":"react"}],"/Users/phitien/apphub/src/common/components/navigation/Help.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style = require('../Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Help extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.children = () => _react2.default.createElement(
            'div',
            { className: 'wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'icon' },
                _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    'help'
                )
            )
        ), this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            this.children()
        ), _temp;
    }

    get componentClassName() {
        return 'help';
    }
}

exports.default = new _redux.Connect(Help).klass;

},{"../../redux":"/Users/phitien/apphub/src/common/redux/index.js","../Style":"/Users/phitien/apphub/src/common/components/Style.js","react":"react"}],"/Users/phitien/apphub/src/common/components/navigation/LinksHub.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style = require('../Style');

var _Style2 = _interopRequireDefault(_Style);

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LinksHub extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.children = () => _react2.default.createElement(
            'div',
            { className: 'wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'icon' },
                _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    'apps'
                )
            ),
            _react2.default.createElement(_Menu2.default, { menus: this.props.pageInfo.menus, className: 'lightgrey-box menus', subMenuClassName: 'lightgrey-box' })
        ), this.render = () => {
            return _react2.default.createElement(
                'div',
                { className: this.className },
                this.children(),
                _react2.default.createElement('img', { className: 'svg-image', alt: 'Standard Chartered', src: '/static/images/bc-scb.png' }),
                _react2.default.createElement(
                    'h3',
                    null,
                    this.configuration.appname
                )
            );
        }, _temp;
    }

    get componentClassName() {
        return 'links-hub';
    }
    getTitle(nodes, value) {
        return nodes.reduce((value, node) => {
            if (location.pathname == node.url) return value = node.subNodes && node.subNodes.length ? this.getTitle(node.subNodes, value) : node.title;
            if (location.pathname.indexOf(node.url) >= 0) return value = node.subNodes && node.subNodes.length ? this.getTitle(node.subNodes, value) : node.title;
            return node.subNodes && node.subNodes.length ? this.getAppName(node.subNodes, value) : value;
        }, value);
    }
}

exports.default = new _redux.Connect(LinksHub).klass;

},{"../../redux":"/Users/phitien/apphub/src/common/redux/index.js","../Menu":"/Users/phitien/apphub/src/common/components/Menu.js","../Style":"/Users/phitien/apphub/src/common/components/Style.js","react":"react"}],"/Users/phitien/apphub/src/common/components/navigation/LogoBox.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style = require('../Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LogoBox extends _Style2.default {
    get componentClassName() {
        return 'logo-box';
    }
    render() {
        return _react2.default.createElement(
            'div',
            { className: this.className },
            _react2.default.createElement(
                'a',
                null,
                _react2.default.createElement('img', { className: 'svg-image', alt: 'Standard Chartered', src: '/static/images/standard_chartered_logo_svg.svg' })
            ),
            _react2.default.createElement(
                'h3',
                null,
                this.props.pageTitle
            )
        );
    }
}
exports.default = new _redux.Connect(LogoBox).klass;

},{"../../redux":"/Users/phitien/apphub/src/common/redux/index.js","../Style":"/Users/phitien/apphub/src/common/components/Style.js","react":"react"}],"/Users/phitien/apphub/src/common/components/navigation/Notification.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style = require('../Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Notification extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.children = () => _react2.default.createElement(
            'div',
            { className: 'wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'icon' },
                _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    'notifications'
                )
            )
        ), this.render = () => !this.util.user.isLogged ? null : _react2.default.createElement(
            'div',
            { className: this.className },
            this.children()
        ), _temp;
    }

    get componentClassName() {
        return 'notification';
    }
}

exports.default = new _redux.Connect(Notification).klass;

},{"../../redux":"/Users/phitien/apphub/src/common/redux/index.js","../Style":"/Users/phitien/apphub/src/common/components/Style.js","react":"react"}],"/Users/phitien/apphub/src/common/components/navigation/SearchBox.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style = require('../Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SearchBox extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.children = () => _react2.default.createElement(
            'div',
            { className: 'wrapper' },
            _react2.default.createElement('input', { type: 'text', ref: e => this.searchInput = e,
                placeholder: 'Search' })
        ), this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            !this.util.user.isLogged ? null : this.children()
        ), _temp;
    }

    get componentClassName() {
        return 'search-box';
    }
}
exports.default = new _redux.Connect(SearchBox).klass;

},{"../../redux":"/Users/phitien/apphub/src/common/redux/index.js","../Style":"/Users/phitien/apphub/src/common/components/Style.js","react":"react"}],"/Users/phitien/apphub/src/common/components/navigation/UserBox.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style = require('../Style');

var _Style2 = _interopRequireDefault(_Style);

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserBox extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.children = () => _react2.default.createElement(
            'div',
            { className: 'wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'icon' },
                _react2.default.createElement(
                    'div',
                    { className: 'user-info' },
                    _react2.default.createElement(
                        'div',
                        { className: 'display-name' },
                        this.util.user.displayName
                    )
                ),
                _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    'person'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'menus' },
                _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement('div', { className: 'avatar' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'name' },
                        this.util.user.displayName
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'occupation' },
                        this.util.user.occupation
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'department' },
                        this.util.user.department
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'email' },
                        this.util.user.email
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'last-login' },
                        this.util.user.lastLogin
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'links' },
                    _react2.default.createElement(_Menu2.default, { menus: this.menus })
                )
            )
        ), this.render = () => !this.util.user.isLogged ? null : _react2.default.createElement(
            'div',
            { className: this.className },
            this.children()
        ), _temp;
    }

    get componentClassName() {
        return 'user-box';
    }
    get menus() {
        return [{
            title: 'Manage',
            subNodes: [{
                title: 'View profile'
            }, {
                title: 'Preferences'
            }, {
                title: 'Logout',
                onClick: () => this.props.executeUserLogoutAction()
            }]
        }];
    }
}
exports.default = new _redux.Connect(UserBox).klass;

},{"../../redux":"/Users/phitien/apphub/src/common/redux/index.js","../Menu":"/Users/phitien/apphub/src/common/components/Menu.js","../Style":"/Users/phitien/apphub/src/common/components/Style.js","react":"react"}],"/Users/phitien/apphub/src/common/components/navigation/Version.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style = require('../Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Version extends _Style2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.render = () => _react2.default.createElement(
            'div',
            { className: this.className },
            'Version ',
            this.props.pageInfo.version ? this.props.pageInfo.version : this.configuration.version
        ), _temp;
    }

    get componentClassName() {
        return 'version';
    }
}
exports.default = new _redux.Connect(Version).klass;

},{"../../redux":"/Users/phitien/apphub/src/common/redux/index.js","../Style":"/Users/phitien/apphub/src/common/components/Style.js","react":"react"}],"/Users/phitien/apphub/src/common/redux/Action.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadPageInfoAction = exports.ToggleSidebarRightAction = exports.ToggleSidebarLeftAction = exports.SetCurrentPageSizeAction = exports.SetCurrentPageNoAction = exports.SetCurrentSearchValueAction = exports.UserLoginAction = exports.UserLogoutAction = exports.UserLoggedInAction = exports.LoadedPageInfoAction = exports.RemoveModalFromViewAction = exports.AddModalToViewAction = exports.SetBreadcrumbsAction = undefined;

var _redux = require('../../core/redux');

class SetBreadcrumbsAction extends _redux.Action {}
exports.SetBreadcrumbsAction = SetBreadcrumbsAction;
class AddModalToViewAction extends _redux.Action {}
exports.AddModalToViewAction = AddModalToViewAction;
class RemoveModalFromViewAction extends _redux.Action {}
exports.RemoveModalFromViewAction = RemoveModalFromViewAction;
class LoadedPageInfoAction extends _redux.Action {}
exports.LoadedPageInfoAction = LoadedPageInfoAction;
class UserLoggedInAction extends _redux.Action {}
exports.UserLoggedInAction = UserLoggedInAction;
class UserLogoutAction extends _redux.Action {}
exports.UserLogoutAction = UserLogoutAction;
class UserLoginAction extends _redux.ApiAction {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.successActions = ['LoadPageInfoAction'], _temp;
    }

    loadRequest(payload) {
        return this.util.query(this.configuration.api.urls.login, payload);
    }
}
exports.UserLoginAction = UserLoginAction;
class SetCurrentSearchValueAction extends _redux.Action {}
exports.SetCurrentSearchValueAction = SetCurrentSearchValueAction;
class SetCurrentPageNoAction extends _redux.Action {}
exports.SetCurrentPageNoAction = SetCurrentPageNoAction;
class SetCurrentPageSizeAction extends _redux.Action {}
exports.SetCurrentPageSizeAction = SetCurrentPageSizeAction;
class ToggleSidebarLeftAction extends _redux.Action {}
exports.ToggleSidebarLeftAction = ToggleSidebarLeftAction;
class ToggleSidebarRightAction extends _redux.Action {}
exports.ToggleSidebarRightAction = ToggleSidebarRightAction;
class LoadPageInfoAction extends _redux.ApiAction {
    loadRequest(payload) {
        return this.util.query(this.util.user.isLogged ? this.configuration.api.urls.pageInfoLogged : this.configuration.api.urls.pageInfo);
    }
}
exports.LoadPageInfoAction = LoadPageInfoAction;

},{"../../core/redux":"/Users/phitien/apphub/src/core/redux/index.js"}],"/Users/phitien/apphub/src/common/redux/Connect.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('../../core/redux');

var _Action = require('./Action');

var actions = _interopRequireWildcard(_Action);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

class Connect extends _redux.Connect {
    getActions(dispatch, ownProps, ...args) {
        return actions;
    }
}
exports.default = Connect;

},{"../../core/redux":"/Users/phitien/apphub/src/core/redux/index.js","./Action":"/Users/phitien/apphub/src/common/redux/Action.js"}],"/Users/phitien/apphub/src/common/redux/Reducer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApiSuccessLoadPageInfoActionReducer = exports.ToggleSidebarRightActionReducer = exports.ToggleSidebarLeftActionReducer = exports.SetCurrentPageSizeActionReducer = exports.SetCurrentPageNoActionReducer = exports.SetCurrentSearchValueActionReducer = exports.RemoveModalFromViewActionReducer = exports.AddModalToViewActionReducer = exports.ApiSuccessUserLoginActionReducer = exports.UserLogoutActionReducer = exports.SetBreadcrumbsActionReducer = undefined;

var _redux = require('../../core/redux');

class SetBreadcrumbsActionReducer extends _redux.Reducer {
    get defaultValue() {
        return [];
    }
    get fieldName() {
        return 'breadcrumbs';
    }
}
exports.SetBreadcrumbsActionReducer = SetBreadcrumbsActionReducer;
class UserLogoutActionReducer extends _redux.CookieReducer {
    get defaultValue() {
        return null;
    }
    get fieldName() {
        return 'user';
    }
    setCookie() {
        this.util.user.unload();
    }
}
exports.UserLogoutActionReducer = UserLogoutActionReducer;
class ApiSuccessUserLoginActionReducer extends _redux.CookieReducer {
    get fieldName() {
        return 'user';
    }
    setCookie() {
        this.util.assign(this.__value[this.fieldName], { displayName: this.action.extra[0].account }); //TODO remove
        this.util.user.load(this.__value[this.fieldName]);
    }
}
exports.ApiSuccessUserLoginActionReducer = ApiSuccessUserLoginActionReducer;
class AddModalToViewActionReducer extends _redux.Reducer {
    get fieldName() {
        return 'modal';
    }
}
exports.AddModalToViewActionReducer = AddModalToViewActionReducer;
class RemoveModalFromViewActionReducer extends _redux.Reducer {
    get fieldName() {
        return 'modal';
    }
    normalize(action) {
        return null;
    }
}
exports.RemoveModalFromViewActionReducer = RemoveModalFromViewActionReducer;
class SetCurrentSearchValueActionReducer extends _redux.ConfigReducer {
    get fieldName() {
        return 'currentSearchValue';
    }
}
exports.SetCurrentSearchValueActionReducer = SetCurrentSearchValueActionReducer;
class SetCurrentPageNoActionReducer extends _redux.ConfigReducer {
    get fieldName() {
        return 'currentPageNo';
    }
}
exports.SetCurrentPageNoActionReducer = SetCurrentPageNoActionReducer;
class SetCurrentPageSizeActionReducer extends _redux.ConfigReducer {
    get fieldName() {
        return 'currentPageSize';
    }
}
exports.SetCurrentPageSizeActionReducer = SetCurrentPageSizeActionReducer;
class ToggleSidebarLeftActionReducer extends _redux.FalseReducer {
    get fieldName() {
        return 'hideSidebarLeft';
    }
}
exports.ToggleSidebarLeftActionReducer = ToggleSidebarLeftActionReducer;
class ToggleSidebarRightActionReducer extends _redux.TrueReducer {
    get fieldName() {
        return 'hideSidebarRight';
    }
}
exports.ToggleSidebarRightActionReducer = ToggleSidebarRightActionReducer;
class ApiSuccessLoadPageInfoActionReducer extends _redux.Reducer {
    get fieldName() {
        return 'pageInfo';
    }
    get defaultValue() {
        return { app: '', menus: [] };
    }
    normalize(action) {
        return action.data.body;
    }
}
exports.ApiSuccessLoadPageInfoActionReducer = ApiSuccessLoadPageInfoActionReducer;

},{"../../core/redux":"/Users/phitien/apphub/src/core/redux/index.js"}],"/Users/phitien/apphub/src/common/redux/index.js":[function(require,module,exports){
arguments[4]["/Users/phitien/apphub/src/apps/dmr/redux/index.js"][0].apply(exports,arguments)
},{"./Connect":"/Users/phitien/apphub/src/common/redux/Connect.js"}],"/Users/phitien/apphub/src/common/routes/index.js":[function(require,module,exports){
'use strict';

exports.onRouteEntered = require('./onRouteEntered').default;
exports.onRouteChanged = require('./onRouteChanged').default;

},{"./onRouteChanged":"/Users/phitien/apphub/src/common/routes/onRouteChanged.js","./onRouteEntered":"/Users/phitien/apphub/src/common/routes/onRouteEntered.js"}],"/Users/phitien/apphub/src/common/routes/onRouteChanged.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (prev, next) {
    _core.cookie.value('route_changed', { prev, next });
    dispatchEvent(new CustomEvent('route_changed', { detail: { prev, next } }));
};

var _core = require('../../core');

},{"../../core":"/Users/phitien/apphub/src/core/index.js"}],"/Users/phitien/apphub/src/common/routes/onRouteEntered.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (route, replace) {
    _core.cookie.value('route_entered', { route, replace });
    dispatchEvent(new CustomEvent('route_entered', { detail: { route, replace } }));
};

var _core = require('../../core');

},{"../../core":"/Users/phitien/apphub/src/core/index.js"}],"/Users/phitien/apphub/src/core/Config.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Config = exports.configuration = exports.WINDOW = undefined;

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const WINDOW = exports.WINDOW = {
    configuration: {
        env: 'mock',
        showDevTool: false,
        getEnv: function () {
            return;
            window != undefined && window.configuration && window.configuration.env ? window.configuration.env : this.env;
        },
        isDebug: function () {
            let env = this.getEnv();
            return env ? env == 'mock' || env == 'dev' : true;
        },
        isMock: function () {
            return this.getEnv() == 'mock';
        }
    }
};
const configuration = exports.configuration = WINDOW.configuration;
class Config {
    constructor() {
        this.configuration = {};

        for (var i = 0; i < arguments.length; i++) {
            const config = arguments[i];
            _util2.default.assign(WINDOW.configuration, config);
        }
        this.configuration = WINDOW.configuration;
    }
    all() {
        // if (this.configuration.isDebug()) console.log(this.configuration)
        return this.configuration;
    }
}
exports.Config = Config;

},{"./util":"/Users/phitien/apphub/src/core/util.js"}],"/Users/phitien/apphub/src/core/DevTools.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
             value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = require('redux-devtools');

var _reduxDevtoolsLogMonitor = require('redux-devtools-log-monitor');

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = require('redux-devtools-dock-monitor');

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
             _reduxDevtoolsDockMonitor2.default,
             { toggleVisibilityKey: 'ctrl-h',
                          changePositionKey: 'ctrl-w' },
             _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, null)
));

},{"react":"react","redux-devtools":"redux-devtools","redux-devtools-dock-monitor":"redux-devtools-dock-monitor","redux-devtools-log-monitor":"redux-devtools-log-monitor"}],"/Users/phitien/apphub/src/core/Request.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _when = require('when');

var _when2 = _interopRequireDefault(_when);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _Config = require('./Config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class REQUEST {
    get defaultHeaders() {
        return {
            'Content-Type': 'application/json'
        };
    }
    get payload() {
        return this.__options.data;
    }

    constructor(url, method) {
        _initialiseProps.call(this);

        method = _Config.configuration.isMock() && method ? method.toLowerCase() : 'get';
        this.__options = { url, method };
        this.headers({});
    }
}
exports.default = REQUEST;

var _initialiseProps = function () {
    this.execute = isAsync => this.exe = isAsync ? (0, _axios2.default)(this.__options) : (0, _when2.default)((0, _axios2.default)(this.__options));

    this.option = (n, v) => {
        this.__options[n] = v;
        return this;
    };

    this.headers = headers => this.option('headers', (0, _objectAssign2.default)(this.defaultHeaders, headers));

    this.url = url => this.option('url', url);

    this.data = data => {
        this.option('data', data);
        if (this.__options.method == 'get') {
            const url = this.__options.url;
            return this.option('url', this.buildUrl(url, this.buildQuery(data)));
        }
        return this;
    };

    this.buildUrl = (url, query) => url.indexOf('?') >= 0 ? `${url}&${query}` : `${url}?${query}`;

    this.buildQuery = json => json ? Object.keys(json).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(json[k] ? json[k] : '')}`).join('&') : '';

    this.__before = [];
    this.__after = [];
    this.__success = [];
    this.__failure = [];

    this.__run = (payload, ...args) => {
        args.map(fn => fn(payload));
        return this;
    };

    this.before = (...args) => {
        this.__before = args;
        return this;
    };

    this.after = (...args) => {
        this.__after = args;
        return this;
    };

    this.success = (...args) => {
        this.__success = args;
        return this;
    };

    this.failure = (...args) => {
        this.__failure = args;
        return this;
    };

    this.run = isAsync => {
        return isAsync ? this.__run(undefined, ...this.__before).execute(isAsync) : this.__run(undefined, ...this.__before).execute(isAsync).then(res => {
            try {
                this.__run(res, ...this.__success);
            } catch (e) {
                console.error('request:success', e);
            }
            return res;
        }).catch(res => {
            try {
                this.__run(res, ...this.__failure);
            } catch (e) {
                console.error('request:failure', e);
            }
            return res;
        }).then(res => {
            try {
                this.__run(undefined, ...this.__after);
            } catch (e) {
                console.error('request:after', e);
            }
            return res;
        });
    };
};

},{"./Config":"/Users/phitien/apphub/src/core/Config.js","axios":"axios","object-assign":"object-assign","when":"when"}],"/Users/phitien/apphub/src/core/UserProfile.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cookie = require('./cookie');

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserProfile {
    constructor() {
        this.loadFromCookie = () => {
            this.data = _cookie2.default.read('user');
        };

        this.saveToCookie = () => {
            _cookie2.default.value('user', this.data);
        };

        this.load = data => {
            if (!data) this.unload();else {
                this.data = data;
                this.saveToCookie();
            }
        };

        this.unload = () => {
            _cookie2.default.remove('user');
            this.data = null;
        };

        this.update = (field, value) => {
            this.data[field] = value;
            this.saveToCookie();
        };

        this.loadFromCookie();
    }

    get isLogged() {
        return this.data ? true : false;
    }
    get email() {
        return this.data.email;
    }
    set email(v) {
        this.update('email', v);
    }
    get firstName() {
        return this.data.firstName;
    }
    set firstName(v) {
        this.update('firstName', v);
    }
    get lastName() {
        return this.data.lastName;
    }
    set lastName(v) {
        this.update('lastName', v);
    }
    get displayName() {
        return this.data.displayName;
    }
    set displayName(v) {
        this.save('displayName', v);
    }
    get occupation() {
        return this.data.occupation;
    }
    set occupation(v) {
        this.save('occupation', v);
    }
    get department() {
        return this.data.department;
    }
    set department(v) {
        this.save('department', v);
    }
    get lastLogin() {
        return this.data.lastLogin;
    }
    set lastLogin(v) {
        this.save('lastLogin', v);
    }
}
exports.default = UserProfile;

},{"./cookie":"/Users/phitien/apphub/src/core/cookie.js"}],"/Users/phitien/apphub/src/core/cookie.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Cookie {
    constructor() {
        this.value = (name, value, opts) => {
            if (value === undefined) {
                return _reactCookie2.default.load(name);
            } else if (value === null) {
                _reactCookie2.default.remove(name, (0, _objectAssign2.default)({ path: '/' }, opts));
                dispatchEvent(new CustomEvent('cookie_deleted', { detail: { name } }));
            } else {
                _reactCookie2.default.save(name, value, (0, _objectAssign2.default)({ path: '/' }, opts));
                dispatchEvent(new CustomEvent('cookie_updated', { detail: { name, value } }));
            }
        };

        this.remove = (name, opts) => this.value(name, null, opts);

        this.read = name => this.value(name);
    }

}
exports.default = new Cookie();

},{"object-assign":"object-assign","react-cookie":"/Users/phitien/apphub/node_modules/react-cookie/build/cookie.js"}],"/Users/phitien/apphub/src/core/index.js":[function(require,module,exports){
'use strict';

exports.configuration = require('./Config').WINDOW.configuration;
exports.cookie = require('./cookie').default;
exports.REQUEST = require('./Request').default;
exports.UserProfile = require('./UserProfile').default;
exports.user = require('./user').default;
exports.util = require('./util').default;
exports.DevTools = require('./DevTools').default;

},{"./Config":"/Users/phitien/apphub/src/core/Config.js","./DevTools":"/Users/phitien/apphub/src/core/DevTools.js","./Request":"/Users/phitien/apphub/src/core/Request.js","./UserProfile":"/Users/phitien/apphub/src/core/UserProfile.js","./cookie":"/Users/phitien/apphub/src/core/cookie.js","./user":"/Users/phitien/apphub/src/core/user.js","./util":"/Users/phitien/apphub/src/core/util.js"}],"/Users/phitien/apphub/src/core/redux/Connect.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Connect {
    constructor(klass) {
        this.__klass = klass;
        this.getDefaultProps = this.getDefaultProps.bind(this);
        this.getActions = this.getActions.bind(this);
    }
    getDefaultProps() {
        return {};
    }
    getActions(dispatch, ownProps, ...args) {
        return {};
    }
    registerActions(dispatch, ownProps, ...args) {
        const actions = this.getActions(dispatch, ownProps, ...args);
        Object.keys(actions).map(k => _actions.Action.put(actions[k], dispatch, ownProps, ...args));
    }
    get util() {
        return _util2.default;
    }
    get mapStateToProps() {
        return (state, ownProps) => {
            const newProps = this.util.assign({}, this.getDefaultProps);
            if (state) Object.keys(state).map(k => this.util.assign(newProps, state[k]));
            return newProps;
        };
    }
    get mapDispatchToProps() {
        return (dispatch, ownProps, ...args) => {
            this.registerActions(dispatch, ownProps, ...args);
            return _actions.Action.actions();
        };
    }
    get klass() {
        return (0, _reactRedux.connect)(this.mapStateToProps, this.util.assign(this.mapDispatchToProps, {
            dispatch: function (dispatch, ownProps) {
                return function (payload) {
                    dispatch(...arguments);
                };
            }
        }))(this.__klass);
    }

    static createStore(reducer) {
        return createStore(combineReducers(reducer), applyMiddleware(_reduxThunk2.default));
    }
}
exports.default = Connect;

},{"../util":"/Users/phitien/apphub/src/core/util.js","./actions":"/Users/phitien/apphub/src/core/redux/actions/index.js","react-redux":"react-redux","redux-thunk":"redux-thunk"}],"/Users/phitien/apphub/src/core/redux/Store.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getStore = undefined;

var _redux = require('redux');

var _reduxSaga = require('redux-saga');

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let store = null;
const getStore = exports.getStore = (reducers, initialState) => {
    if (_.util.isEmpty(store) && reducers) {
        const transformers = {};
        if (typeof reducers == 'function') {
            const reducer = new reducers();
            transformers[reducers.name] = reducer.transform.bind(reducer);
        } else {
            for (var j in reducers) {
                if (typeof reducers[j] == 'function') {
                    const reducer = new reducers[j]();
                    transformers[reducers[j].name] = reducer.transform.bind(reducer);
                }
            }
        }
        store = (0, _redux.createStore)((0, _redux.combineReducers)(transformers), initialState, _middlewares2.default);
        store.runSaga = _middlewares.runSaga;
        store.close = () => store.dispatch(_reduxSaga.END);
    }
    return store;
};

exports.default = store;

},{"..":"/Users/phitien/apphub/src/core/index.js","./middlewares":"/Users/phitien/apphub/src/core/redux/middlewares/index.js","redux":"redux","redux-saga":"redux-saga"}],"/Users/phitien/apphub/src/core/redux/actions/Action.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ = require('../..');

var _Store = require('../Store');

let __dispatcher = null;
const __actions = {};

function normalize(name, payload, ...args) {
    if (!payload || !payload.hasOwnProperty('data')) payload = _.util.assign({}, { data: payload });
    return _.util.assign({ extra: args }, payload, { type: name });
}
function normalizeSearch(name, results, ...args) {
    return { search: results, type: name };
}

class Action {
    constructor() {
        this.dispatchable = true;
        this.debug = false;
    }

    get name() {
        return this.constructor.name;
    }
    get configuration() {
        return _.configuration;
    }
    get util() {
        return _.util;
    }
    get store() {
        return (0, _Store.getStore)();
    }
    get state() {
        return this.getState(this.name);
    }
    get dispatcher() {
        return __dispatcher;
    }
    get fn() {
        return this.__fn;
    }

    preProcess(payload, ...args) {}
    beforeDispatch(payload, ...args) {}
    normalize(payload, ...args) {
        if (!payload || !payload.hasOwnProperty('data')) payload = this.util.assign({}, { data: payload });
        return normalize(this.name, payload, ...args);
    }
    normalizeSearch(results) {
        return normalizeSearch(this.name, ...arguments);
    }
    getState(name) {
        return this.store.getState()[`${name}Reducer`];
    }
    getStates() {
        const states = this.store.getState();
        const newStates = {};
        Object.keys(states).map(k => this.util.assign(newStates, states[k]));
        return newStates;
    }
    debugFn(payload, ...args) {}
    dispatch(payload, ...args) {
        this.dispatcher(payload, ...args);
    }
    getFn(dispatch, ownProps, ...args) {
        const me = this;
        if (!__dispatcher) __dispatcher = dispatch;
        if (!this.__fn) this.__fn = function (payload, ...argus) {
            me.preProcess(payload, ...argus);
            if (me.beforeDispatch(payload, ...argus) !== false) {
                if (me.dispatchable) me.dispatch(me.normalize(payload, ...argus));
            }
            if (me.debug) me.debugFn(payload, ...argus);
        }.bind(this);
        return this.__fn;
    }
    static actions() {
        const rs = {};
        Object.keys(__actions).map(k => rs[k] = __actions[k].fn);
        return rs;
    }
    static getName(klass) {
        if (klass) return typeof klass == 'string' ? klass : klass.name;
    }
    static execute(klass, payload, ...args) {
        const name = Action.getName(klass);
        const action = Action.fn(name);
        if (action) action(payload, ...args);else if (__dispatcher) {
            __dispatcher(normalize(`${name}Reducer`, payload, ...args));
        }
    }
    static action(klass) {
        const name = Action.getName(klass);
        if (Object.keys(__actions).indexOf(`execute${name}`) >= 0) {
            return __actions[`execute${name}`];
        }
        return null;
    }
    static fn(klass) {
        const action = Action.action(klass);
        if (action) return action.fn;
    }
    static instance(klass) {
        const action = Action.action(klass);
        if (action) return action.instance;
    }
    static put(klass, dispatch, ownProps, ...args) {
        if (!__dispatcher) __dispatcher = dispatch;
        const name = Action.getName(klass);
        if (name) {
            let action = Action.action(name);
            if (!action) {
                const instance = new klass();
                if (instance.isApiAction) instance.runSaga();
                __actions[`execute${name}`] = {
                    instance: instance,
                    fn: instance.getFn(__dispatcher, ownProps, ...args)
                };
            }
        }
    }
}
exports.default = Action;

},{"../..":"/Users/phitien/apphub/src/core/index.js","../Store":"/Users/phitien/apphub/src/core/redux/Store.js"}],"/Users/phitien/apphub/src/core/redux/actions/ApiAction.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxSaga = require('redux-saga');

var _Action = require('./Action');

var _Action2 = _interopRequireDefault(_Action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ApiAction extends _Action2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.request = null, this.successActions = null, this.failureActions = null, this.saga = function* (me) {
            yield (0, _reduxSaga.takeLatest)(me.name, function* (action) {
                const { cache, request, name, successActions, failureActions } = me;
                function* success(res, request) {
                    let actions = [`ApiSuccess${name}`].concat(successActions);
                    actions.map(action => action ? _Action2.default.execute(action, res, request.payload) : false);
                    if (me.callback) me.callback(res, request.payload);
                }
                function* failure(res, request) {
                    let actions = [`ApiFailure${name}`].concat(failureActions);
                    actions.map(action => action ? _Action2.default.execute(action, res, request.payload) : false);
                    if (me.callback) me.callback(res, request.payload);
                }
                let res = yield cache ? cache : request.run();
                if (res.status < 300) yield success(res, request);else yield failure(res, request);
            });
        }, _temp;
    }

    get isApiAction() {
        return true;
    }
    get apiSuccessState() {
        return this.getState(`ApiSuccess${this.name}`);
    }

    preProcess(payload, ...args) {
        this.request = this.loadRequest(payload, ...args);
        this.cache = this.loadCache(payload, ...args);
        let callback = args[args.length - 1];
        if (typeof callback == 'function') this.callback = callback;
    }
    loadRequest(payload, ...args) {
        throw `${this.name}: No implementation of function loadRequest`;
    }
    loadCache(payload, ...args) {
        return undefined;
    }
    shouldCallApi(payload, ...args) {
        return true;
    }
    runSaga() {
        this.store.runSaga(this.saga, this);
    }
}
exports.default = ApiAction;

},{"./Action":"/Users/phitien/apphub/src/core/redux/actions/Action.js","redux-saga":"redux-saga"}],"/Users/phitien/apphub/src/core/redux/actions/ProxyAction.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Action = require('./Action');

var _Action2 = _interopRequireDefault(_Action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProxyAction extends _Action2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.dispatchable = false, this.proxyClasses = null, _temp;
    }

    proxyNormalize(state, payload, ...args) {
        return payload;
    }
    beforeDispatch(payload, ...args) {
        [].concat(this.proxyClasses).map(klass => {
            let name = _Action2.default.getName(klass);
            _Action2.default.execute(name, this.proxyNormalize(this.getState(name), payload, ...args), ...args);
        });
    }
}
exports.default = ProxyAction;

},{"./Action":"/Users/phitien/apphub/src/core/redux/actions/Action.js"}],"/Users/phitien/apphub/src/core/redux/actions/SearchAction.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ProxyAction = require('./ProxyAction');

var _ProxyAction2 = _interopRequireDefault(_ProxyAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SearchAction extends _ProxyAction2.default {
    proxyNormalize(state, payload, ...args) {
        return this.searchFn(state, payload, ...args);
    }
    searchFn(state, payload, ...args) {
        return state;
    }
}
exports.default = SearchAction;

},{"./ProxyAction":"/Users/phitien/apphub/src/core/redux/actions/ProxyAction.js"}],"/Users/phitien/apphub/src/core/redux/actions/index.js":[function(require,module,exports){
'use strict';

exports.Action = require('./Action').default;
exports.ApiAction = require('./ApiAction').default;
exports.ProxyAction = require('./ProxyAction').default;
exports.SearchAction = require('./SearchAction').default;

},{"./Action":"/Users/phitien/apphub/src/core/redux/actions/Action.js","./ApiAction":"/Users/phitien/apphub/src/core/redux/actions/ApiAction.js","./ProxyAction":"/Users/phitien/apphub/src/core/redux/actions/ProxyAction.js","./SearchAction":"/Users/phitien/apphub/src/core/redux/actions/SearchAction.js"}],"/Users/phitien/apphub/src/core/redux/index.js":[function(require,module,exports){
'use strict';

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _reducers = require('./reducers');

var reducers = _interopRequireWildcard(_reducers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.Action = actions.Action;
exports.ApiAction = actions.ApiAction;
exports.ProxyAction = actions.ProxyAction;
exports.SearchAction = actions.SearchAction;
exports.Connect = require('./Connect').default;
exports.Reducer = reducers.Reducer;
exports.ConfigReducer = reducers.ConfigReducer;
exports.CookieReducer = reducers.CookieReducer;
exports.FalseReducer = reducers.FalseReducer;
exports.TrueReducer = reducers.TrueReducer;
exports.NullReducer = reducers.NullReducer;
exports.ListReducer = reducers.ListReducer;
exports.getStore = require('./Store').getStore;

},{"./Connect":"/Users/phitien/apphub/src/core/redux/Connect.js","./Store":"/Users/phitien/apphub/src/core/redux/Store.js","./actions":"/Users/phitien/apphub/src/core/redux/actions/index.js","./reducers":"/Users/phitien/apphub/src/core/redux/reducers/index.js"}],"/Users/phitien/apphub/src/core/redux/middlewares/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.runSaga = undefined;

var _redux = require('redux');

var _thunk2 = require('./thunk');

var _thunk3 = _interopRequireDefault(_thunk2);

var _saga2 = require('./saga');

var _saga3 = _interopRequireDefault(_saga2);

var _logger2 = require('./logger');

var _logger3 = _interopRequireDefault(_logger2);

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _.configuration.isDebug() ? (0, _redux.compose)((0, _redux.applyMiddleware)(_saga3.default, _thunk3.default), _.DevTools.instrument()) : (0, _redux.applyMiddleware)(_saga3.default, _thunk3.default);
const runSaga = exports.runSaga = _saga3.default.run;

},{"../..":"/Users/phitien/apphub/src/core/index.js","./logger":"/Users/phitien/apphub/src/core/redux/middlewares/logger.js","./saga":"/Users/phitien/apphub/src/core/redux/middlewares/saga.js","./thunk":"/Users/phitien/apphub/src/core/redux/middlewares/thunk.js","redux":"redux"}],"/Users/phitien/apphub/src/core/redux/middlewares/logger.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxLogger = require('redux-logger');

const logger = (0, _reduxLogger.createLogger)();
exports.default = logger;

},{"redux-logger":"redux-logger"}],"/Users/phitien/apphub/src/core/redux/middlewares/saga.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const saga = (0, _reduxSaga2.default)();
exports.default = saga;

},{"redux-saga":"redux-saga"}],"/Users/phitien/apphub/src/core/redux/middlewares/thunk.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _thunk = _reduxThunk2.default;
exports.default = _thunk;

},{"redux-thunk":"redux-thunk"}],"/Users/phitien/apphub/src/core/redux/reducers/ConfigReducer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Reducer = require('./Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ConfigReducer extends _Reducer2.default {
    get defaultValue() {
        return this.configuration.ui[this.fieldName];
    }
    normalize(action) {
        return action.data ? action.data : this.configuration.ui[this.fieldName];
    }
}
exports.default = ConfigReducer;

},{"./Reducer":"/Users/phitien/apphub/src/core/redux/reducers/Reducer.js"}],"/Users/phitien/apphub/src/core/redux/reducers/CookieReducer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Reducer = require('./Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CookieReducer extends _Reducer2.default {
  get defaultValue() {
    return this.util.cookie.read(this.fieldName);
  }
  get value() {
    return this.__value;
  }
  set value(v) {
    this.__value = v;
    this.setCookie();
  }
  setCookie() {
    this.util.cookie.value(this.fieldName, this.__value[this.fieldName]);
  }
}
exports.default = CookieReducer;

},{"./Reducer":"/Users/phitien/apphub/src/core/redux/reducers/Reducer.js"}],"/Users/phitien/apphub/src/core/redux/reducers/FalseReducer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Reducer = require('./Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FalseReducer extends _Reducer2.default {
    get defaultValue() {
        return false;
    }
}
exports.default = FalseReducer;

},{"./Reducer":"/Users/phitien/apphub/src/core/redux/reducers/Reducer.js"}],"/Users/phitien/apphub/src/core/redux/reducers/ListReducer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Reducer = require('./Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListReducer extends _Reducer2.default {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.isList = true, this.primaryKey = 'id', _temp;
    }

    get defaultValue() {
        return {};
    }
    get value() {
        return this.__value;
    }
    set value(v) {
        const value = v[this.fieldName];
        if (value) {
            const id = value[this.primaryKey];
            this.state[this.fieldName][id] = value;
            this.__value = this.util.assign({}, this.state);
        } else {
            this.__value = this.state;
        }
    }
}
exports.default = ListReducer;

},{"./Reducer":"/Users/phitien/apphub/src/core/redux/reducers/Reducer.js"}],"/Users/phitien/apphub/src/core/redux/reducers/NullReducer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Reducer = require('./Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NullReducer extends _Reducer2.default {
    get defaultValue() {
        return null;
    }
    normalize(action) {
        return null;
    }
}
exports.default = NullReducer;

},{"./Reducer":"/Users/phitien/apphub/src/core/redux/reducers/Reducer.js"}],"/Users/phitien/apphub/src/core/redux/reducers/Reducer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ = require('../..');

var _Store = require('../Store');

class Reducer {
    constructor() {
        this.debug = false;
    }

    get name() {
        return this.constructor.name;
    }
    get configuration() {
        return _.configuration;
    }
    get util() {
        return _.util;
    }
    get store() {
        return (0, _Store.getStore)();
    }
    get state() {
        return this.store.getState()[this.name];
    }

    get fieldName() {
        throw `${this.name}: No fieldName`;
    }
    get defaultState() {
        return {
            [this.fieldName]: this.defaultValue,
            [`Search${this.fieldName}Results`]: null
        };
    }
    get defaultValue() {
        return null;
    }
    transform(state = this.defaultState, action, ...args) {
        return `${action.type}` == this.name || `${action.type}Reducer` == this.name || `Search${action.type}Reducer` == `Search${this.name}` ? this.matchedTransform(state, action, ...args) : this.notMatchedTransform(state, action, ...args);
    }
    normalize(action) {
        return action.data;
    }
    normalizeSearch(action) {
        return action.search;
    }
    debugFn(state, action, ...args) {
        console.log(this.name);
        console.log('prev-state', state);
        console.log('next-state', this.value);
        console.log('action', action);
        console.log('extra', ...args);
    }
    matchedTransform(state, action, ...args) {
        this.action = action;
        if (action.hasOwnProperty('data')) this.value = { [this.fieldName]: this.normalize(action) };else if (action.hasOwnProperty('search')) this.value = { [`Search${this.fieldName}Results`]: this.normalizeSearch(action) };
        if (this.debug) this.debugFn(state, action, ...args);
        return this.util.assign({}, this.defaultState, state, this.value);
    }
    notMatchedTransform(state, action, ...args) {
        return state;
    }
}
exports.default = Reducer;

},{"../..":"/Users/phitien/apphub/src/core/index.js","../Store":"/Users/phitien/apphub/src/core/redux/Store.js"}],"/Users/phitien/apphub/src/core/redux/reducers/TrueReducer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Reducer = require('./Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TrueReducer extends _Reducer2.default {
    get defaultValue() {
        return true;
    }
}
exports.default = TrueReducer;

},{"./Reducer":"/Users/phitien/apphub/src/core/redux/reducers/Reducer.js"}],"/Users/phitien/apphub/src/core/redux/reducers/index.js":[function(require,module,exports){
'use strict';

exports.Reducer = require('./Reducer').default;
exports.ConfigReducer = require('./ConfigReducer').default;
exports.CookieReducer = require('./CookieReducer').default;
exports.FalseReducer = require('./FalseReducer').default;
exports.TrueReducer = require('./TrueReducer').default;
exports.NullReducer = require('./NullReducer').default;
exports.ListReducer = require('./ListReducer').default;

},{"./ConfigReducer":"/Users/phitien/apphub/src/core/redux/reducers/ConfigReducer.js","./CookieReducer":"/Users/phitien/apphub/src/core/redux/reducers/CookieReducer.js","./FalseReducer":"/Users/phitien/apphub/src/core/redux/reducers/FalseReducer.js","./ListReducer":"/Users/phitien/apphub/src/core/redux/reducers/ListReducer.js","./NullReducer":"/Users/phitien/apphub/src/core/redux/reducers/NullReducer.js","./Reducer":"/Users/phitien/apphub/src/core/redux/reducers/Reducer.js","./TrueReducer":"/Users/phitien/apphub/src/core/redux/reducers/TrueReducer.js"}],"/Users/phitien/apphub/src/core/user.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserProfile = require('./UserProfile');

var _UserProfile2 = _interopRequireDefault(_UserProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const user = new _UserProfile2.default();
exports.default = user;

},{"./UserProfile":"/Users/phitien/apphub/src/core/UserProfile.js"}],"/Users/phitien/apphub/src/core/util.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _stringFormat = require('string-format');

var _stringFormat2 = _interopRequireDefault(_stringFormat);

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

var _objectAssignDeep = require('object-assign-deep');

var _objectAssignDeep2 = _interopRequireDefault(_objectAssignDeep);

var _Request = require('./Request');

var _Request2 = _interopRequireDefault(_Request);

var _cookie = require('./cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_stringFormat2.default.extend(String.prototype);

class Util {
    constructor() {
        this.extractPairs = str => {
            let rs = {};
            let pairs = str.split('&');
            for (var i = 0; i < pairs.length; i++) {
                let pair = pairs[i];
                if (pair.indexOf('=') > 0) {
                    pair = pair.split('=');
                    rs[pair[0]] = pair[1];
                } else rs[pair] = true;
            }
            return rs;
        };

        this.getQueryValue = name => {
            var url = location.href;
            var name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        };

        this.isEmpty = o => _lodash2.default.isEmpty(o);

        this.isNumber = o => typeof o == 'number' || o && parseFloat(o.toString().replace(/,/g, ''));

        this.numberOf = o => typeof o == 'number' ? o : o && parseFloat(o.toString().replace(/,/g, '')) ? parseFloat(o.toString().replace(/,/g, '')) : 0;

        this.valueOf = (o, d) => this.isEmpty(o) ? d : o;

        this.amountOf = o => this.numberWithCommas(o);

        this.dateOf = o => (0, _moment2.default)(o).format('MMMM Do YYYY');

        this.random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        this.exclude = (origin, excludes) => {
            const props = {};
            Object.keys(origin).map(k => {
                if (origin.hasOwnProperty(k) && excludes.indexOf(k) < 0) {
                    this.assign(props, { [k]: origin[k] });
                }
            });
            return props;
        };

        this.include = (origin, includes) => {
            const props = {};
            Object.keys(origin).map(k => {
                if (origin.hasOwnProperty(k) && includes.indexOf(k) >= 0) {
                    this.assign(props, { [k]: origin[k] });
                }
            });
            return props;
        };

        this.request = (url, method, data) => {
            return new _Request2.default(url, method).data(data);
        };

        this.query = (url, data) => this.request(url, 'GET', data);

        this.post = (url, data) => this.request(url, 'POST', data);

        this.update = (url, data) => this.request(url, 'PUT', data);

        this.remove = (url, data) => this.request(url, 'DELETE', data);

        this.options = (url, data) => this.request(url, 'OPTIONS', data);

        this.newTab = link => window.open(link, '_blank');

        this.redirect = link => window.open(link);

        this.addJsScript = (src, id, innerHTML) => this.appendTag('script', { src }, id, innerHTML);

        this.addCssLink = (href, id) => this.addLink(href, { type: 'text/css', rel: 'stylesheet' }, id);

        this.addLink = (href, props, id) => this.appendTag('link', _extends({ href }, props), id);

        this.addMeta = (name, content, id) => this.appendTag('meta', { name, content }, id);

        this.appendTag = (tagName, props, id, innerHTML) => {
            if (typeof document == 'undefined' || document.getElementById(id)) return;
            let tags = document.getElementsByTagName(tagName),
                last = tags[tags.length - 1],
                tag = document.createElement(tagName);
            tag.id = id;
            Object.keys(props).map(k => {
                if (props[k]) tag[k] = props[k];
            });
            if (innerHTML) try {
                tag.innerHTML = innerHTML;
            } catch (e) {}
            last.parentNode.insertBefore(tag, last.nextSibling);
        };
    }

    get user() {
        return _user2.default;
    }
    get assign() {
        return _objectAssign2.default;
    }
    get format() {
        return _stringFormat2.default;
    }
    get uuid() {
        return _v2.default;
    }
    get assignDeep() {
        return _objectAssignDeep2.default;
    }
    get lodash() {
        return _lodash2.default;
    }
    get history() {
        return _reactRouter.browserHistory;
    }
    get cookie() {
        return _cookie2.default;
    }

    get hash() {
        return this.extractPairs((location.hash ? location.hash : '#').slice(1));
    }
    get queries() {
        return this.extractPairs((location.search ? location.search : '?').slice(1));
    }
}
exports.default = new Util();

},{"./Request":"/Users/phitien/apphub/src/core/Request.js","./cookie":"/Users/phitien/apphub/src/core/cookie.js","./user":"/Users/phitien/apphub/src/core/user.js","lodash":"lodash","moment":"moment","object-assign":"object-assign","object-assign-deep":"object-assign-deep","react-router":"react-router","string-format":"string-format","uuid/v1":"/Users/phitien/apphub/node_modules/uuid/v1.js"}]},{},["/Users/phitien/apphub/src/apps/dmr/index.js"])