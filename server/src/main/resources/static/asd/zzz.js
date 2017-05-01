(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":20}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":21}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":22}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":23}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":24}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":25}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":26}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":27}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":28}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":29}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],12:[function(require,module,exports){
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
},{"../core-js/object/define-property":4}],13:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};
},{"../core-js/object/define-property":4}],14:[function(require,module,exports){
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
},{"../core-js/object/assign":2}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _getPrototypeOf = require("../core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = require("../core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};
},{"../core-js/object/get-own-property-descriptor":5,"../core-js/object/get-prototype-of":6}],16:[function(require,module,exports){
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
},{"../core-js/object/create":3,"../core-js/object/set-prototype-of":8,"../helpers/typeof":19}],17:[function(require,module,exports){
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
},{"../helpers/typeof":19}],18:[function(require,module,exports){
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
},{"../core-js/array/from":1}],19:[function(require,module,exports){
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
},{"../core-js/symbol":9,"../core-js/symbol/iterator":10}],20:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":36,"../../modules/es6.array.from":95,"../../modules/es6.string.iterator":105}],21:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":36,"../../modules/es6.object.assign":97}],22:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":36,"../../modules/es6.object.create":98}],23:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":36,"../../modules/es6.object.define-property":99}],24:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-descriptor');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};
},{"../../modules/_core":36,"../../modules/es6.object.get-own-property-descriptor":100}],25:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":36,"../../modules/es6.object.get-prototype-of":101}],26:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":36,"../../modules/es6.object.keys":102}],27:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":36,"../../modules/es6.object.set-prototype-of":103}],28:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":36,"../../modules/es6.object.to-string":104,"../../modules/es6.symbol":106,"../../modules/es7.symbol.async-iterator":107,"../../modules/es7.symbol.observable":108}],29:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":92,"../../modules/es6.string.iterator":105,"../../modules/web.dom.iterable":109}],30:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],31:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],32:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":54}],33:[function(require,module,exports){
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
},{"./_to-index":84,"./_to-iobject":86,"./_to-length":87}],34:[function(require,module,exports){
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
},{"./_cof":35,"./_wks":93}],35:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],36:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],37:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":66,"./_property-desc":77}],38:[function(require,module,exports){
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
},{"./_a-function":30}],39:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],40:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":45}],41:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":46,"./_is-object":54}],42:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],43:[function(require,module,exports){
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
},{"./_object-gops":71,"./_object-keys":74,"./_object-pie":75}],44:[function(require,module,exports){
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
},{"./_core":36,"./_ctx":38,"./_global":46,"./_hide":48}],45:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],46:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],47:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],48:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":40,"./_object-dp":66,"./_property-desc":77}],49:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":46}],50:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":40,"./_dom-create":41,"./_fails":45}],51:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":35}],52:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":60,"./_wks":93}],53:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":35}],54:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],55:[function(require,module,exports){
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
},{"./_an-object":32}],56:[function(require,module,exports){
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
},{"./_hide":48,"./_object-create":65,"./_property-desc":77,"./_set-to-string-tag":80,"./_wks":93}],57:[function(require,module,exports){
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
},{"./_export":44,"./_has":47,"./_hide":48,"./_iter-create":56,"./_iterators":60,"./_library":62,"./_object-gpo":72,"./_redefine":78,"./_set-to-string-tag":80,"./_wks":93}],58:[function(require,module,exports){
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
},{"./_wks":93}],59:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],60:[function(require,module,exports){
module.exports = {};
},{}],61:[function(require,module,exports){
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
},{"./_object-keys":74,"./_to-iobject":86}],62:[function(require,module,exports){
module.exports = true;
},{}],63:[function(require,module,exports){
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
},{"./_fails":45,"./_has":47,"./_is-object":54,"./_object-dp":66,"./_uid":90}],64:[function(require,module,exports){
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
},{"./_fails":45,"./_iobject":51,"./_object-gops":71,"./_object-keys":74,"./_object-pie":75,"./_to-object":88}],65:[function(require,module,exports){
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

},{"./_an-object":32,"./_dom-create":41,"./_enum-bug-keys":42,"./_html":49,"./_object-dps":67,"./_shared-key":81}],66:[function(require,module,exports){
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
},{"./_an-object":32,"./_descriptors":40,"./_ie8-dom-define":50,"./_to-primitive":89}],67:[function(require,module,exports){
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
},{"./_an-object":32,"./_descriptors":40,"./_object-dp":66,"./_object-keys":74}],68:[function(require,module,exports){
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
},{"./_descriptors":40,"./_has":47,"./_ie8-dom-define":50,"./_object-pie":75,"./_property-desc":77,"./_to-iobject":86,"./_to-primitive":89}],69:[function(require,module,exports){
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

},{"./_object-gopn":70,"./_to-iobject":86}],70:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":42,"./_object-keys-internal":73}],71:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],72:[function(require,module,exports){
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
},{"./_has":47,"./_shared-key":81,"./_to-object":88}],73:[function(require,module,exports){
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
},{"./_array-includes":33,"./_has":47,"./_shared-key":81,"./_to-iobject":86}],74:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":42,"./_object-keys-internal":73}],75:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],76:[function(require,module,exports){
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
},{"./_core":36,"./_export":44,"./_fails":45}],77:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],78:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":48}],79:[function(require,module,exports){
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
},{"./_an-object":32,"./_ctx":38,"./_is-object":54,"./_object-gopd":68}],80:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":47,"./_object-dp":66,"./_wks":93}],81:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":82,"./_uid":90}],82:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":46}],83:[function(require,module,exports){
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
},{"./_defined":39,"./_to-integer":85}],84:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":85}],85:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],86:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":39,"./_iobject":51}],87:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":85}],88:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":39}],89:[function(require,module,exports){
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
},{"./_is-object":54}],90:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],91:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":36,"./_global":46,"./_library":62,"./_object-dp":66,"./_wks-ext":92}],92:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":93}],93:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":46,"./_shared":82,"./_uid":90}],94:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":34,"./_core":36,"./_iterators":60,"./_wks":93}],95:[function(require,module,exports){
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

},{"./_create-property":37,"./_ctx":38,"./_export":44,"./_is-array-iter":52,"./_iter-call":55,"./_iter-detect":58,"./_to-length":87,"./_to-object":88,"./core.get-iterator-method":94}],96:[function(require,module,exports){
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
},{"./_add-to-unscopables":31,"./_iter-define":57,"./_iter-step":59,"./_iterators":60,"./_to-iobject":86}],97:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":44,"./_object-assign":64}],98:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":44,"./_object-create":65}],99:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":40,"./_export":44,"./_object-dp":66}],100:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = require('./_to-iobject')
  , $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./_object-gopd":68,"./_object-sap":76,"./_to-iobject":86}],101:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":72,"./_object-sap":76,"./_to-object":88}],102:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":74,"./_object-sap":76,"./_to-object":88}],103:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":44,"./_set-proto":79}],104:[function(require,module,exports){

},{}],105:[function(require,module,exports){
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
},{"./_iter-define":57,"./_string-at":83}],106:[function(require,module,exports){
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
},{"./_an-object":32,"./_descriptors":40,"./_enum-keys":43,"./_export":44,"./_fails":45,"./_global":46,"./_has":47,"./_hide":48,"./_is-array":53,"./_keyof":61,"./_library":62,"./_meta":63,"./_object-create":65,"./_object-dp":66,"./_object-gopd":68,"./_object-gopn":70,"./_object-gopn-ext":69,"./_object-gops":71,"./_object-keys":74,"./_object-pie":75,"./_property-desc":77,"./_redefine":78,"./_set-to-string-tag":80,"./_shared":82,"./_to-iobject":86,"./_to-primitive":89,"./_uid":90,"./_wks":93,"./_wks-define":91,"./_wks-ext":92}],107:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":91}],108:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":91}],109:[function(require,module,exports){
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
},{"./_global":46,"./_hide":48,"./_iterators":60,"./_wks":93,"./es6.array.iterator":96}],110:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":140}],111:[function(require,module,exports){
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

},{}],112:[function(require,module,exports){
module.exports = function(opts) {
  return new ElementClass(opts)
}

function indexOf(arr, prop) {
  if (arr.indexOf) return arr.indexOf(prop)
  for (var i = 0, len = arr.length; i < len; i++)
    if (arr[i] === prop) return i
  return -1
}

function ElementClass(opts) {
  if (!(this instanceof ElementClass)) return new ElementClass(opts)
  var self = this
  if (!opts) opts = {}

  // similar doing instanceof HTMLElement but works in IE8
  if (opts.nodeType) opts = {el: opts}

  this.opts = opts
  this.el = opts.el || document.body
  if (typeof this.el !== 'object') this.el = document.querySelector(this.el)
}

ElementClass.prototype.add = function(className) {
  var el = this.el
  if (!el) return
  if (el.className === "") return el.className = className
  var classes = el.className.split(' ')
  if (indexOf(classes, className) > -1) return classes
  classes.push(className)
  el.className = classes.join(' ')
  return classes
}

ElementClass.prototype.remove = function(className) {
  var el = this.el
  if (!el) return
  if (el.className === "") return
  var classes = el.className.split(' ')
  var idx = indexOf(classes, className)
  if (idx > -1) classes.splice(idx, 1)
  el.className = classes.join(' ')
  return classes
}

ElementClass.prototype.has = function(className) {
  var el = this.el
  if (!el) return
  var classes = el.className.split(' ')
  return indexOf(classes, className) > -1
}

ElementClass.prototype.toggle = function(className) {
  var el = this.el
  if (!el) return
  if (this.has(className)) this.remove(className)
  else this.add(className)
}

},{}],113:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		define(function () {
			return ExecutionEnvironment;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());

},{}],114:[function(require,module,exports){
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
},{}],115:[function(require,module,exports){
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

if ("mock" !== 'production') {
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
},{}],116:[function(require,module,exports){
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

if ("mock" !== 'production') {
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
},{"./emptyFunction":114}],117:[function(require,module,exports){
'use strict';

module.exports = Response;

/**
 * A response from a web request
 *
 * @param {Number} statusCode
 * @param {Object} headers
 * @param {Buffer} body
 * @param {String} url
 */
function Response(statusCode, headers, body, url) {
  if (typeof statusCode !== 'number') {
    throw new TypeError('statusCode must be a number but was ' + (typeof statusCode));
  }
  if (headers === null) {
    throw new TypeError('headers cannot be null');
  }
  if (typeof headers !== 'object') {
    throw new TypeError('headers must be an object but was ' + (typeof headers));
  }
  this.statusCode = statusCode;
  this.headers = {};
  for (var key in headers) {
    this.headers[key.toLowerCase()] = headers[key];
  }
  this.body = body;
  this.url = url;
}

Response.prototype.getBody = function (encoding) {
  if (this.statusCode >= 300) {
    var err = new Error('Server responded with status code '
                    + this.statusCode + ':\n' + this.body.toString());
    err.statusCode = this.statusCode;
    err.headers = this.headers;
    err.body = this.body;
    err.url = this.url;
    throw err;
  }
  return encoding ? this.body.toString(encoding) : this.body;
};

},{}],118:[function(require,module,exports){
(function (process){
// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md
'use strict';

exports = module.exports = !!(typeof process !== 'undefined' && process.versions && process.versions.node);

}).call(this,require('_process'))

},{"_process":120}],119:[function(require,module,exports){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

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

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

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
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

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

module.exports = assign;

},{}],120:[function(require,module,exports){
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

},{}],121:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

if (process.env.NODE_ENV !== 'production') {
  var invariant = require('fbjs/lib/invariant');
  var warning = require('fbjs/lib/warning');
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

}).call(this,require('_process'))

},{"./lib/ReactPropTypesSecret":125,"_process":120,"fbjs/lib/invariant":115,"fbjs/lib/warning":116}],122:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');

module.exports = function() {
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  function shim() {
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"fbjs/lib/emptyFunction":114,"fbjs/lib/invariant":115}],123:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
var checkPropTypes = require('./checkPropTypes');

module.exports = function(isValidElement, throwOnDirectAccess) {
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

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
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
   * PropTypes directly and inspect their output. However, we don't use real
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
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
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
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
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
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
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
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
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
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
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
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
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
        if (propValue === null || isValidElement(propValue)) {
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

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

}).call(this,require('_process'))

},{"./checkPropTypes":121,"./lib/ReactPropTypesSecret":125,"_process":120,"fbjs/lib/emptyFunction":114,"fbjs/lib/invariant":115,"fbjs/lib/warning":116}],124:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}

}).call(this,require('_process'))

},{"./factoryWithThrowingShims":122,"./factoryWithTypeCheckers":123,"_process":120}],125:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],126:[function(require,module,exports){
'use strict';

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

},{}],127:[function(require,module,exports){
'use strict';

var stringify = require('./stringify');
var parse = require('./parse');
var formats = require('./formats');

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"./formats":126,"./parse":128,"./stringify":129}],128:[function(require,module,exports){
'use strict';

var utils = require('./utils');

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos));
            val = options.decoder(part.slice(pos + 1));
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function parseObjectRecursive(chain, val, options) {
    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj;
    if (root === '[]') {
        obj = [];
        obj = obj.concat(parseObject(chain, val, options));
    } else {
        obj = options.plainObjects ? Object.create(null) : {};
        var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
        var index = parseInt(cleanRoot, 10);
        if (
            !isNaN(index) &&
            root !== cleanRoot &&
            String(index) === cleanRoot &&
            index >= 0 &&
            (options.parseArrays && index <= options.arrayLimit)
        ) {
            obj = [];
            obj[index] = parseObject(chain, val, options);
        } else {
            obj[cleanRoot] = parseObject(chain, val, options);
        }
    }

    return obj;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts || {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};

},{"./utils":130}],129:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var formats = require('./formats');

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix);
            return [formatter(keyValue) + '=' + formatter(encoder(obj))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts || {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats.default;
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    return keys.join(delimiter);
};

},{"./formats":126,"./utils":130}],130:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

exports.arrayToObject = function (source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function (target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (Object.prototype.hasOwnProperty.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function (str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D || // -
            c === 0x2E || // .
            c === 0x5F || // _
            c === 0x7E || // ~
            (c >= 0x30 && c <= 0x39) || // 0-9
            (c >= 0x41 && c <= 0x5A) || // a-z
            (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]; // eslint-disable-line max-len
    }

    return out;
};

exports.compact = function (obj, references) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    var refs = references || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0; i < obj.length; ++i) {
            if (obj[i] && typeof obj[i] === 'object') {
                compacted.push(exports.compact(obj[i], refs));
            } else if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    keys.forEach(function (key) {
        obj[key] = exports.compact(obj[key], refs);
    });

    return obj;
};

exports.isRegExp = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function (obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

},{}],131:[function(require,module,exports){
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
},{"cookie":111,"is-node":118,"object-assign":"object-assign"}],132:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["Dropzone"] = factory(require("react"), require("prop-types"));
	else
		root["Dropzone"] = factory(root["react"], root["prop-types"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _attrAccept = __webpack_require__(4);
	
	var _attrAccept2 = _interopRequireDefault(_attrAccept);
	
	var _getDataTransferItems = __webpack_require__(5);
	
	var _getDataTransferItems2 = _interopRequireDefault(_getDataTransferItems);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint prefer-template: 0 */
	
	var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;
	
	var Dropzone = function (_React$Component) {
	  _inherits(Dropzone, _React$Component);
	
	  _createClass(Dropzone, null, [{
	    key: 'onDocumentDragOver',
	    value: function onDocumentDragOver(e) {
	      // allow the entire document to be a drag target
	      e.preventDefault();
	    }
	  }]);
	
	  function Dropzone(props, context) {
	    _classCallCheck(this, Dropzone);
	
	    var _this = _possibleConstructorReturn(this, (Dropzone.__proto__ || Object.getPrototypeOf(Dropzone)).call(this, props, context));
	
	    _this.renderChildren = function (children) {
	      if (typeof children === 'function') {
	        return children(_this.state);
	      }
	      return children;
	    };
	
	    _this.onClick = _this.onClick.bind(_this);
	    _this.onDocumentDrop = _this.onDocumentDrop.bind(_this);
	    _this.onDragStart = _this.onDragStart.bind(_this);
	    _this.onDragEnter = _this.onDragEnter.bind(_this);
	    _this.onDragLeave = _this.onDragLeave.bind(_this);
	    _this.onDragOver = _this.onDragOver.bind(_this);
	    _this.onDrop = _this.onDrop.bind(_this);
	    _this.onFileDialogCancel = _this.onFileDialogCancel.bind(_this);
	    _this.fileAccepted = _this.fileAccepted.bind(_this);
	    _this.setRef = _this.setRef.bind(_this);
	    _this.isFileDialogActive = false;
	    _this.state = {
	      isDragActive: false,
	      acceptedFiles: [],
	      rejectedFiles: []
	    };
	    return _this;
	  }
	
	  _createClass(Dropzone, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var preventDropOnDocument = this.props.preventDropOnDocument;
	
	      this.dragTargets = [];
	
	      if (preventDropOnDocument) {
	        document.addEventListener('dragover', Dropzone.onDocumentDragOver, false);
	        document.addEventListener('drop', this.onDocumentDrop, false);
	      }
	      // Tried implementing addEventListener, but didn't work out
	      document.body.onfocus = this.onFileDialogCancel;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var preventDropOnDocument = this.props.preventDropOnDocument;
	
	      if (preventDropOnDocument) {
	        document.removeEventListener('dragover', Dropzone.onDocumentDragOver);
	        document.removeEventListener('drop', this.onDocumentDrop);
	      }
	      // Can be replaced with removeEventListener, if addEventListener works
	      document.body.onfocus = null;
	    }
	  }, {
	    key: 'onDocumentDrop',
	    value: function onDocumentDrop(e) {
	      if (this.node.contains(e.target)) {
	        // if we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
	        return;
	      }
	      e.preventDefault();
	      this.dragTargets = [];
	    }
	  }, {
	    key: 'onDragStart',
	    value: function onDragStart(e) {
	      if (this.props.onDragStart) {
	        this.props.onDragStart.call(this, e);
	      }
	    }
	  }, {
	    key: 'onDragEnter',
	    value: function onDragEnter(e) {
	      e.preventDefault();
	
	      // Count the dropzone and any children that are entered.
	      if (this.dragTargets.indexOf(e.target) === -1) {
	        this.dragTargets.push(e.target);
	      }
	
	      var files = (0, _getDataTransferItems2.default)(e);
	      var allFilesAccepted = this.allFilesAccepted(files);
	      var isMultipleAllowed = this.props.multiple || files.length <= 1;
	
	      this.setState({
	        isDragActive: allFilesAccepted,
	        isDragReject: !allFilesAccepted || !isMultipleAllowed
	      });
	
	      if (this.props.onDragEnter) {
	        this.props.onDragEnter.call(this, e);
	      }
	    }
	  }, {
	    key: 'onDragOver',
	    value: function onDragOver(e) {
	      // eslint-disable-line class-methods-use-this
	      e.preventDefault();
	      e.stopPropagation();
	      try {
	        e.dataTransfer.dropEffect = 'copy'; // eslint-disable-line no-param-reassign
	      } catch (err) {
	        // continue regardless of error
	      }
	
	      if (this.props.onDragOver) {
	        this.props.onDragOver.call(this, e);
	      }
	      return false;
	    }
	  }, {
	    key: 'onDragLeave',
	    value: function onDragLeave(e) {
	      var _this2 = this;
	
	      e.preventDefault();
	
	      // Only deactivate once the dropzone and all children have been left.
	      this.dragTargets = this.dragTargets.filter(function (el) {
	        return el !== e.target && _this2.node.contains(el);
	      });
	      if (this.dragTargets.length > 0) {
	        return;
	      }
	
	      this.setState({
	        isDragActive: false,
	        isDragReject: false
	      });
	
	      if (this.props.onDragLeave) {
	        this.props.onDragLeave.call(this, e);
	      }
	    }
	  }, {
	    key: 'onDrop',
	    value: function onDrop(e) {
	      var _this3 = this;
	
	      var _props = this.props,
	          onDrop = _props.onDrop,
	          onDropAccepted = _props.onDropAccepted,
	          onDropRejected = _props.onDropRejected,
	          multiple = _props.multiple,
	          disablePreview = _props.disablePreview;
	
	      var fileList = (0, _getDataTransferItems2.default)(e);
	      var acceptedFiles = [];
	      var rejectedFiles = [];
	
	      // Stop default browser behavior
	      e.preventDefault();
	
	      // Reset the counter along with the drag on a drop.
	      this.dragTargets = [];
	      this.isFileDialogActive = false;
	
	      fileList.forEach(function (file) {
	        if (!disablePreview) {
	          try {
	            file.preview = window.URL.createObjectURL(file); // eslint-disable-line no-param-reassign
	          } catch (err) {
	            if (process.env.NODE_ENV !== 'production') {
	              console.error('Failed to generate preview for file', file, err); // eslint-disable-line no-console
	            }
	          }
	        }
	
	        if (_this3.fileAccepted(file) && _this3.fileMatchSize(file)) {
	          acceptedFiles.push(file);
	        } else {
	          rejectedFiles.push(file);
	        }
	      });
	
	      if (!multiple) {
	        // if not in multi mode add any extra accepted files to rejected.
	        // This will allow end users to easily ignore a multi file drop in "single" mode.
	        rejectedFiles.push.apply(rejectedFiles, _toConsumableArray(acceptedFiles.splice(1)));
	      }
	
	      if (onDrop) {
	        onDrop.call(this, acceptedFiles, rejectedFiles, e);
	      }
	
	      if (rejectedFiles.length > 0 && onDropRejected) {
	        onDropRejected.call(this, rejectedFiles, e);
	      }
	
	      if (acceptedFiles.length > 0 && onDropAccepted) {
	        onDropAccepted.call(this, acceptedFiles, e);
	      }
	
	      // Reset drag state
	      this.setState({
	        isDragActive: false,
	        isDragReject: false,
	        acceptedFiles: acceptedFiles,
	        rejectedFiles: rejectedFiles
	      });
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      var _props2 = this.props,
	          onClick = _props2.onClick,
	          disableClick = _props2.disableClick;
	
	      if (!disableClick) {
	        e.stopPropagation();
	        this.open();
	        if (onClick) {
	          onClick.call(this, e);
	        }
	      }
	    }
	  }, {
	    key: 'onFileDialogCancel',
	    value: function onFileDialogCancel() {
	      // timeout will not recognize context of this method
	      var onFileDialogCancel = this.props.onFileDialogCancel;
	      var fileInputEl = this.fileInputEl;
	      var isFileDialogActive = this.isFileDialogActive;
	      // execute the timeout only if the onFileDialogCancel is defined and FileDialog
	      // is opened in the browser
	
	      if (onFileDialogCancel && isFileDialogActive) {
	        setTimeout(function () {
	          // Returns an object as FileList
	          var FileList = fileInputEl.files;
	          if (!FileList.length) {
	            isFileDialogActive = false;
	            onFileDialogCancel();
	          }
	        }, 300);
	      }
	    }
	  }, {
	    key: 'setRef',
	    value: function setRef(ref) {
	      this.node = ref;
	    }
	  }, {
	    key: 'fileAccepted',
	    value: function fileAccepted(file) {
	      // Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
	      // that MIME type will always be accepted
	      return file.type === 'application/x-moz-file' || (0, _attrAccept2.default)(file, this.props.accept);
	    }
	  }, {
	    key: 'fileMatchSize',
	    value: function fileMatchSize(file) {
	      return file.size <= this.props.maxSize && file.size >= this.props.minSize;
	    }
	  }, {
	    key: 'allFilesAccepted',
	    value: function allFilesAccepted(files) {
	      return files.every(this.fileAccepted);
	    }
	
	    /**
	     * Open system file upload dialog.
	     *
	     * @public
	     */
	
	  }, {
	    key: 'open',
	    value: function open() {
	      this.isFileDialogActive = true;
	      this.fileInputEl.value = null;
	      this.fileInputEl.click();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var _props3 = this.props,
	          accept = _props3.accept,
	          activeClassName = _props3.activeClassName,
	          inputProps = _props3.inputProps,
	          multiple = _props3.multiple,
	          name = _props3.name,
	          rejectClassName = _props3.rejectClassName,
	          children = _props3.children,
	          rest = _objectWithoutProperties(_props3, ['accept', 'activeClassName', 'inputProps', 'multiple', 'name', 'rejectClassName', 'children']);
	
	      var activeStyle = rest.activeStyle,
	          className = rest.className,
	          rejectStyle = rest.rejectStyle,
	          style = rest.style,
	          props = _objectWithoutProperties(rest, ['activeStyle', 'className', 'rejectStyle', 'style']);
	
	      var _state = this.state,
	          isDragActive = _state.isDragActive,
	          isDragReject = _state.isDragReject;
	
	
	      className = className || '';
	
	      if (isDragActive && activeClassName) {
	        className += ' ' + activeClassName;
	      }
	      if (isDragReject && rejectClassName) {
	        className += ' ' + rejectClassName;
	      }
	
	      if (!className && !style && !activeStyle && !rejectStyle) {
	        style = {
	          width: 200,
	          height: 200,
	          borderWidth: 2,
	          borderColor: '#666',
	          borderStyle: 'dashed',
	          borderRadius: 5
	        };
	        activeStyle = {
	          borderStyle: 'solid',
	          borderColor: '#6c6',
	          backgroundColor: '#eee'
	        };
	        rejectStyle = {
	          borderStyle: 'solid',
	          borderColor: '#c66',
	          backgroundColor: '#eee'
	        };
	      }
	
	      var appliedStyle = void 0;
	      if (activeStyle && isDragActive) {
	        appliedStyle = _extends({}, style, activeStyle);
	      } else if (rejectStyle && isDragReject) {
	        appliedStyle = _extends({}, style, rejectStyle);
	      } else {
	        appliedStyle = _extends({}, style);
	      }
	
	      var inputAttributes = {
	        accept: accept,
	        type: 'file',
	        style: { display: 'none' },
	        multiple: supportMultiple && multiple,
	        ref: function ref(el) {
	          return _this4.fileInputEl = el;
	        }, // eslint-disable-line
	        onChange: this.onDrop
	      };
	
	      if (name && name.length) {
	        inputAttributes.name = name;
	      }
	
	      // Remove custom properties before passing them to the wrapper div element
	      var customProps = ['acceptedFiles', 'preventDropOnDocument', 'disablePreview', 'disableClick', 'onDropAccepted', 'onDropRejected', 'onFileDialogCancel', 'maxSize', 'minSize'];
	      var divProps = _extends({}, props);
	      customProps.forEach(function (prop) {
	        return delete divProps[prop];
	      });
	
	      return _react2.default.createElement(
	        'div',
	        _extends({
	          className: className,
	          style: appliedStyle
	        }, divProps /* expand user provided props first so event handlers are never overridden */, {
	          onClick: this.onClick,
	          onDragStart: this.onDragStart,
	          onDragEnter: this.onDragEnter,
	          onDragOver: this.onDragOver,
	          onDragLeave: this.onDragLeave,
	          onDrop: this.onDrop,
	          ref: this.setRef
	        }),
	        this.renderChildren(children),
	        _react2.default.createElement('input', _extends({}, inputProps /* expand user provided inputProps first so inputAttributes override them */, inputAttributes))
	      );
	    }
	  }]);
	
	  return Dropzone;
	}(_react2.default.Component);
	
	Dropzone.propTypes = {
	  /**
	   * Allow specific types of files. See https://github.com/okonet/attr-accept for more information.
	   * Keep in mind that mime type determination is not reliable accross platforms. CSV files,
	   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
	   * Windows. In some cases there might not be a mime type set at all.
	   * See: https://github.com/okonet/react-dropzone/issues/276
	   */
	  accept: _propTypes2.default.string,
	
	  /**
	   * Contents of the dropzone
	   */
	  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
	
	  /**
	   * Disallow clicking on the dropzone container to open file dialog
	   */
	  disableClick: _propTypes2.default.bool,
	
	  /**
	   * Enable/disable preview generation
	   */
	  disablePreview: _propTypes2.default.bool,
	
	  /**
	   * If false, allow dropped items to take over the current browser window
	   */
	  preventDropOnDocument: _propTypes2.default.bool,
	
	  /**
	   * Pass additional attributes to the `<input type="file"/>` tag
	   */
	  inputProps: _propTypes2.default.object,
	
	  /**
	   * Allow dropping multiple files
	   */
	  multiple: _propTypes2.default.bool,
	
	  /**
	   * `name` attribute for the input tag
	   */
	  name: _propTypes2.default.string,
	
	  /**
	   * Maximum file size
	   */
	  maxSize: _propTypes2.default.number,
	
	  /**
	   * Minimum file size
	   */
	  minSize: _propTypes2.default.number,
	
	  /**
	   * className
	   */
	  className: _propTypes2.default.string,
	
	  /**
	   * className for accepted state
	   */
	  activeClassName: _propTypes2.default.string,
	
	  /**
	   * className for rejected state
	   */
	  rejectClassName: _propTypes2.default.string,
	
	  /**
	   * CSS styles to apply
	   */
	  style: _propTypes2.default.object,
	
	  /**
	   * CSS styles to apply when drop will be accepted
	   */
	  activeStyle: _propTypes2.default.object,
	
	  /**
	   * CSS styles to apply when drop will be rejected
	   */
	  rejectStyle: _propTypes2.default.object,
	
	  /**
	   * onClick callback
	   * @param {Event} event
	   */
	  onClick: _propTypes2.default.func,
	
	  /**
	   * onDrop callback
	   */
	  onDrop: _propTypes2.default.func,
	
	  /**
	   * onDropAccepted callback
	   */
	  onDropAccepted: _propTypes2.default.func,
	
	  /**
	   * onDropRejected callback
	   */
	  onDropRejected: _propTypes2.default.func,
	
	  /**
	   * onDragStart callback
	   */
	  onDragStart: _propTypes2.default.func,
	
	  /**
	   * onDragEnter callback
	   */
	  onDragEnter: _propTypes2.default.func,
	
	  /**
	   * onDragOver callback
	   */
	  onDragOver: _propTypes2.default.func,
	
	  /**
	   * onDragLeave callback
	   */
	  onDragLeave: _propTypes2.default.func,
	
	  /**
	   * Provide a callback on clicking the cancel button of the file dialog
	   */
	  onFileDialogCancel: _propTypes2.default.func
	};
	
	Dropzone.defaultProps = {
	  preventDropOnDocument: true,
	  disablePreview: false,
	  disableClick: false,
	  multiple: true,
	  maxSize: Infinity,
	  minSize: 0
	};
	
	exports.default = Dropzone;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=Array.isArray(n)?n:n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,y,d=t&s.G,h=t&s.P,v=d?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=d?o:o[n]||(o[n]={});d&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],y=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,y),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getDataTransferFiles;
	function getDataTransferFiles(event) {
	  var dataTransferItemsList = [];
	  if (event.dataTransfer) {
	    var dt = event.dataTransfer;
	    if (dt.files && dt.files.length) {
	      dataTransferItemsList = dt.files;
	    } else if (dt.items && dt.items.length) {
	      // During the drag even the dataTransfer.files is null
	      // but Chrome implements some drag store, which is accesible via dataTransfer.items
	      dataTransferItemsList = dt.items;
	    }
	  } else if (event.target && event.target.files) {
	    dataTransferItemsList = event.target.files;
	  }
	  // Convert from DataTransferItemsList to the native Array
	  return Array.prototype.slice.call(dataTransferItemsList);
	}
	module.exports = exports["default"];

/***/ })
/******/ ])
});
;

},{"prop-types":124,"react":"react"}],133:[function(require,module,exports){
(function (process){
var React = require('react');
var ReactDOM = require('react-dom');
var ExecutionEnvironment = require('exenv');
var ModalPortal = React.createFactory(require('./ModalPortal'));
var ariaAppHider = require('../helpers/ariaAppHider');
var elementClass = require('element-class');
var renderSubtreeIntoContainer = require("react-dom").unstable_renderSubtreeIntoContainer;
var Assign = require('lodash.assign');

var SafeHTMLElement = ExecutionEnvironment.canUseDOM ? window.HTMLElement : {};
var AppElement = ExecutionEnvironment.canUseDOM ? document.body : {appendChild: function() {}};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = React.createClass({

  displayName: 'Modal',
  statics: {
    setAppElement: function(element) {
        AppElement = ariaAppHider.setElement(element);
    },
    injectCSS: function() {
      "production" !== process.env.NODE_ENV
        && console.warn('React-Modal: injectCSS has been deprecated ' +
                        'and no longer has any effect. It will be removed in a later version');
    }
  },

  propTypes: {
    isOpen: React.PropTypes.bool.isRequired,
    style: React.PropTypes.shape({
      content: React.PropTypes.object,
      overlay: React.PropTypes.object
    }),
    portalClassName: React.PropTypes.string,
    appElement: React.PropTypes.instanceOf(SafeHTMLElement),
    onAfterOpen: React.PropTypes.func,
    onRequestClose: React.PropTypes.func,
    closeTimeoutMS: React.PropTypes.number,
    ariaHideApp: React.PropTypes.bool,
    shouldCloseOnOverlayClick: React.PropTypes.bool,
    parentSelector: React.PropTypes.func,
    role: React.PropTypes.string,
    contentLabel: React.PropTypes.string.isRequired
  },

  getDefaultProps: function () {
    return {
      isOpen: false,
      portalClassName: 'ReactModalPortal',
      ariaHideApp: true,
      closeTimeoutMS: 0,
      shouldCloseOnOverlayClick: true,
      parentSelector: function () { return document.body; }
    };
  },

  componentDidMount: function() {
    this.node = document.createElement('div');
    this.node.className = this.props.portalClassName;

    var parent = getParentElement(this.props.parentSelector);
    parent.appendChild(this.node);
    this.renderPortal(this.props);
  },

  componentWillReceiveProps: function(newProps) {
    var currentParent = getParentElement(this.props.parentSelector);
    var newParent = getParentElement(newProps.parentSelector);

    if(newParent !== currentParent) {
      currentParent.removeChild(this.node);
      newParent.appendChild(this.node);
    }

    this.renderPortal(newProps);
  },

  componentWillUnmount: function() {
    if (this.props.ariaHideApp) {
      ariaAppHider.show(this.props.appElement);
    }

    var state = this.portal.state;
    var now = Date.now();
    var closesAt = state.isOpen && this.props.closeTimeoutMS
      && (state.closesAt
        || now + this.props.closeTimeoutMS);

    if (closesAt) {
      if (!state.beforeClose) {
        this.portal.closeWithTimeout();
      }

      var that = this;
      setTimeout(function() { that.removePortal(); }, closesAt - now);
    } else {
      this.removePortal();
    }
  },

  removePortal: function() {
    ReactDOM.unmountComponentAtNode(this.node);
    var parent = getParentElement(this.props.parentSelector);
    parent.removeChild(this.node);
    elementClass(document.body).remove('ReactModal__Body--open');
  },

  renderPortal: function(props) {
    if (props.isOpen) {
      elementClass(document.body).add('ReactModal__Body--open');
    } else {
      elementClass(document.body).remove('ReactModal__Body--open');
    }

    if (props.ariaHideApp) {
      ariaAppHider.toggle(props.isOpen, props.appElement);
    }

    this.portal = renderSubtreeIntoContainer(this, ModalPortal(Assign({}, props, {defaultStyles: Modal.defaultStyles})), this.node);
  },

  render: function () {
    return React.DOM.noscript();
  }
});

Modal.defaultStyles = {
  overlay: {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position                : 'absolute',
    top                     : '40px',
    left                    : '40px',
    right                   : '40px',
    bottom                  : '40px',
    border                  : '1px solid #ccc',
    background              : '#fff',
    overflow                : 'auto',
    WebkitOverflowScrolling : 'touch',
    borderRadius            : '4px',
    outline                 : 'none',
    padding                 : '20px'
  }
}

module.exports = Modal

}).call(this,require('_process'))

},{"../helpers/ariaAppHider":135,"./ModalPortal":134,"_process":120,"element-class":112,"exenv":113,"lodash.assign":119,"react":"react","react-dom":"react-dom"}],134:[function(require,module,exports){
var React = require('react');
var div = React.DOM.div;
var focusManager = require('../helpers/focusManager');
var scopeTab = require('../helpers/scopeTab');
var Assign = require('lodash.assign');

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: {
    base: 'ReactModal__Overlay',
    afterOpen: 'ReactModal__Overlay--after-open',
    beforeClose: 'ReactModal__Overlay--before-close'
  },
  content: {
    base: 'ReactModal__Content',
    afterOpen: 'ReactModal__Content--after-open',
    beforeClose: 'ReactModal__Content--before-close'
  }
};

var ModalPortal = module.exports = React.createClass({

  displayName: 'ModalPortal',
  shouldClose: null,

  getDefaultProps: function() {
    return {
      style: {
        overlay: {},
        content: {}
      }
    };
  },

  getInitialState: function() {
    return {
      afterOpen: false,
      beforeClose: false
    };
  },

  componentDidMount: function() {
    // Focus needs to be set when mounting and already open
    if (this.props.isOpen) {
      this.setFocusAfterRender(true);
      this.open();
    }
  },

  componentWillUnmount: function() {
    clearTimeout(this.closeTimer);
  },

  componentWillReceiveProps: function(newProps) {
    // Focus only needs to be set once when the modal is being opened
    if (!this.props.isOpen && newProps.isOpen) {
      this.setFocusAfterRender(true);
      this.open();
    } else if (this.props.isOpen && !newProps.isOpen) {
      this.close();
    }
  },

  componentDidUpdate: function () {
    if (this.focusAfterRender) {
      this.focusContent();
      this.setFocusAfterRender(false);
    }
  },

  setFocusAfterRender: function (focus) {
    this.focusAfterRender = focus;
  },

  afterClose: function () {
    focusManager.returnFocus();
    focusManager.teardownScopedFocus();
  },

  open: function () {
    if (this.state.afterOpen && this.state.beforeClose) {
      clearTimeout(this.closeTimer);
      this.setState({ beforeClose: false });
    } else {
      focusManager.setupScopedFocus(this.node);
      focusManager.markForFocusLater();
      this.setState({isOpen: true}, function() {
        this.setState({afterOpen: true});

        if (this.props.isOpen && this.props.onAfterOpen) {
          this.props.onAfterOpen();
        }
      }.bind(this));
    }
  },

  close: function() {
    if (this.props.closeTimeoutMS > 0)
      this.closeWithTimeout();
    else
      this.closeWithoutTimeout();
  },

  focusContent: function() {
    // Don't steal focus from inner elements
    if (!this.contentHasFocus()) {
      this.refs.content.focus();
    }
  },

  closeWithTimeout: function() {
    var closesAt = Date.now() + this.props.closeTimeoutMS;
    this.setState({beforeClose: true, closesAt: closesAt}, function() {
      this.closeTimer = setTimeout(this.closeWithoutTimeout, this.state.closesAt - Date.now());
    }.bind(this));
  },

  closeWithoutTimeout: function() {
    this.setState({
      beforeClose: false,
      isOpen: false,
      afterOpen: false,
      closesAt: null
    }, this.afterClose);
  },

  handleKeyDown: function(event) {
    if (event.keyCode == 9 /*tab*/) scopeTab(this.refs.content, event);
    if (event.keyCode == 27 /*esc*/) {
      event.preventDefault();
      this.requestClose(event);
    }
  },

  handleOverlayOnClick: function (event) {
    if (this.shouldClose === null) {
      this.shouldClose = true;
    }

    if (this.shouldClose && this.props.shouldCloseOnOverlayClick) {
      if (this.ownerHandlesClose())
        this.requestClose(event);
      else
        this.focusContent();
    }
    this.shouldClose = null;
  },

  handleContentOnClick: function () {
    this.shouldClose = false;
  },

  requestClose: function(event) {
    if (this.ownerHandlesClose())
      this.props.onRequestClose(event);
  },

  ownerHandlesClose: function() {
    return this.props.onRequestClose;
  },

  shouldBeClosed: function() {
    return !this.state.isOpen && !this.state.beforeClose;
  },

  contentHasFocus: function() {
    return document.activeElement === this.refs.content || this.refs.content.contains(document.activeElement);
  },

  buildClassName: function(which, additional) {
    var className = CLASS_NAMES[which].base;
    if (this.state.afterOpen)
      className += ' '+CLASS_NAMES[which].afterOpen;
    if (this.state.beforeClose)
      className += ' '+CLASS_NAMES[which].beforeClose;
    return additional ? className + ' ' + additional : className;
  },

  render: function() {
    var contentStyles = (this.props.className) ? {} : this.props.defaultStyles.content;
    var overlayStyles = (this.props.overlayClassName) ? {} : this.props.defaultStyles.overlay;

    return this.shouldBeClosed() ? div() : (
      div({
        ref: "overlay",
        className: this.buildClassName('overlay', this.props.overlayClassName),
        style: Assign({}, overlayStyles, this.props.style.overlay || {}),
        onClick: this.handleOverlayOnClick
      },
        div({
          ref: "content",
          style: Assign({}, contentStyles, this.props.style.content || {}),
          className: this.buildClassName('content', this.props.className),
          tabIndex: "-1",
          onKeyDown: this.handleKeyDown,
          onClick: this.handleContentOnClick,
          role: this.props.role,
          "aria-label": this.props.contentLabel
        },
          this.props.children
        )
      )
    );
  }
});

},{"../helpers/focusManager":136,"../helpers/scopeTab":137,"lodash.assign":119,"react":"react"}],135:[function(require,module,exports){
var _element = typeof document !== 'undefined' ? document.body : null;

function setElement(element) {
  if (typeof element === 'string') {
    var el = document.querySelectorAll(element);
    element = 'length' in el ? el[0] : el;
  }
  _element = element || _element;
  return _element;
}

function hide(appElement) {
  validateElement(appElement);
  (appElement || _element).setAttribute('aria-hidden', 'true');
}

function show(appElement) {
  validateElement(appElement);
  (appElement || _element).removeAttribute('aria-hidden');
}

function toggle(shouldHide, appElement) {
  if (shouldHide)
    hide(appElement);
  else
    show(appElement);
}

function validateElement(appElement) {
  if (!appElement && !_element)
    throw new Error('react-modal: You must set an element with `Modal.setAppElement(el)` to make this accessible');
}

function resetForTesting() {
  _element = document.body;
}

exports.toggle = toggle;
exports.setElement = setElement;
exports.show = show;
exports.hide = hide;
exports.resetForTesting = resetForTesting;

},{}],136:[function(require,module,exports){
var findTabbable = require('../helpers/tabbable');
var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur(event) {
  needToFocus = true;
}

function handleFocus(event) {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function() {
      if (modalElement.contains(document.activeElement))
        return;
      var el = (findTabbable(modalElement)[0] || modalElement);
      el.focus();
    }, 0);
  }
}

exports.markForFocusLater = function() {
  focusLaterElements.push(document.activeElement);
};

exports.returnFocus = function() {
  var toFocus = null;
  try {
    toFocus = focusLaterElements.pop();
    toFocus.focus();
    return;
  }
  catch (e) {
    console.warn('You tried to return focus to '+toFocus+' but it is not in the DOM anymore');
  }
};

exports.setupScopedFocus = function(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener('blur', handleBlur, false);
    document.addEventListener('focus', handleFocus, true);
  } else {
    window.attachEvent('onBlur', handleBlur);
    document.attachEvent('onFocus', handleFocus);
  }
};

exports.teardownScopedFocus = function() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener('blur', handleBlur);
    document.removeEventListener('focus', handleFocus);
  } else {
    window.detachEvent('onBlur', handleBlur);
    document.detachEvent('onFocus', handleFocus);
  }
};

},{"../helpers/tabbable":138}],137:[function(require,module,exports){
var findTabbable = require('../helpers/tabbable');

module.exports = function(node, event) {
  var tabbable = findTabbable(node);
  if (!tabbable.length) {
      event.preventDefault();
      return;
  }
  var finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
  var leavingFinalTabbable = (
    finalTabbable === document.activeElement ||
    // handle immediate shift+tab after opening with mouse
    node === document.activeElement
  );
  if (!leavingFinalTabbable) return;
  event.preventDefault();
  var target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];
  target.focus();
};

},{"../helpers/tabbable":138}],138:[function(require,module,exports){
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  return (/input|select|textarea|button|object/.test(nodeName) ?
    !element.disabled :
    "a" === nodeName ?
      element.href || isTabIndexNotNaN :
      isTabIndexNotNaN) && visible(element);
}

function hidden(el) {
  return (el.offsetWidth <= 0 && el.offsetHeight <= 0) ||
    el.style.display === 'none';
}

function visible(element) {
  while (element) {
    if (element === document.body) break;
    if (hidden(element)) return false;
    element = element.parentNode;
  }
  return true;
}

function tabbable(element) {
  var tabIndex = element.getAttribute('tabindex');
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll('*'), 0).filter(function(el) {
    return tabbable(el);
  });
}

module.exports = findTabbableDescendants;


},{}],139:[function(require,module,exports){
module.exports = require('./components/Modal');


},{"./components/Modal":133}],140:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./runtime":141}],141:[function(require,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":120}],142:[function(require,module,exports){
'use strict';

var Response = require('http-response-object');
var handleQs = require('then-request/lib/handle-qs.js');

module.exports = doRequest;
function doRequest(method, url, options) {
  var xhr = new XMLHttpRequest();

  // check types of arguments

  if (typeof method !== 'string') {
    throw new TypeError('The method must be a string.');
  }
  if (typeof url !== 'string') {
    throw new TypeError('The URL/path must be a string.');
  }
  if (options === null || options === undefined) {
    options = {};
  }
  if (typeof options !== 'object') {
    throw new TypeError('Options must be an object (or null).');
  }

  method = method.toUpperCase();
  options.headers = options.headers || {};

  // handle cross domain

  var match;
  var crossDomain = !!((match = /^([\w-]+:)?\/\/([^\/]+)/.exec(url)) && (match[2] != location.host));
  if (!crossDomain) options.headers['X-Requested-With'] = 'XMLHttpRequest';

  // handle query string
  if (options.qs) {
    url = handleQs(url, options.qs);
  }

  // handle json body
  if (options.json) {
    options.body = JSON.stringify(options.json);
    options.headers['content-type'] = 'application/json';
  }

  // method, url, async
  xhr.open(method, url, false);

  for (var name in options.headers) {
    xhr.setRequestHeader(name.toLowerCase(), options.headers[name]);
  }

  // avoid sending empty string (#319)
  xhr.send(options.body ? options.body : null);


  var headers = {};
  xhr.getAllResponseHeaders().split('\r\n').forEach(function (header) {
    var h = header.split(':');
    if (h.length > 1) {
      headers[h[0].toLowerCase()] = h.slice(1).join(':').trim();
    }
  });
  return new Response(xhr.status, headers, xhr.responseText);
}

},{"http-response-object":117,"then-request/lib/handle-qs.js":143}],143:[function(require,module,exports){
'use strict';

var parse = require('qs').parse;
var stringify = require('qs').stringify;

module.exports = handleQs;
function handleQs(url, query) {
  url = url.split('?');
  var start = url[0];
  var qs = (url[1] || '').split('#')[0];
  var end = url[1] && url[1].split('#').length > 1 ? '#' + url[1].split('#')[1] : '';

  var baseQs = parse(qs);
  for (var i in query) {
    baseQs[i] = query[i];
  }
  qs = stringify(baseQs);
  if (qs !== '') {
    qs = '?' + qs;
  }
  return start + qs + end;
}

},{"qs":127}],144:[function(require,module,exports){
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

},{}],145:[function(require,module,exports){
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

},{}],146:[function(require,module,exports){
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

},{"./lib/bytesToUuid":144,"./lib/rng":145}],147:[function(require,module,exports){
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

var _react2 = _interopRequireDefault(_react);

var _RoutesApplication2 = require('../../common/applications/RoutesApplication');

var _RoutesApplication3 = _interopRequireDefault(_RoutesApplication2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = function (_RoutesApplication) {
    (0, _inherits3.default)(Application, _RoutesApplication);

    function Application() {
        (0, _classCallCheck3.default)(this, Application);
        return (0, _possibleConstructorReturn3.default)(this, (Application.__proto__ || (0, _getPrototypeOf2.default)(Application)).apply(this, arguments));
    }

    (0, _createClass3.default)(Application, [{
        key: 'container',
        get: function get() {
            return 'container';
        }
    }]);
    return Application;
}(_RoutesApplication3.default);

exports.default = Application;

},{"../../common/applications/RoutesApplication":168,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],148:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _components = require('../../common/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Viewport = function (_CommonViewport) {
  (0, _inherits3.default)(Viewport, _CommonViewport);

  function Viewport() {
    (0, _classCallCheck3.default)(this, Viewport);
    return (0, _possibleConstructorReturn3.default)(this, (Viewport.__proto__ || (0, _getPrototypeOf2.default)(Viewport)).apply(this, arguments));
  }

  return Viewport;
}(_components.Viewport);

exports.default = Viewport;

},{"../../common/components":188,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17}],149:[function(require,module,exports){
"use strict";

module.exports = exports = {
    "app": "asd",
    "appname": "Asd",
    "apptitle": "Asd",
    "appdescription": "ASD application",
    "apppath": "/asd",
    "applogo": "/static/asd/images/logo.jpg",
    "appversion": "0.0.1",
    "port": 2000,
    "livereloadport": 35729
};

},{}],150:[function(require,module,exports){
'use strict';

module.exports = exports = {
    api: {
        urls: {
            pageInfo: '/static/asd/api/page.json',
            pageInfoLogged: '/static/asd/api/page-logged.json',
            login: '/static/asd/api/login.json'
        }
    }
};

},{}],151:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Config = require('../../../core/Config');

exports.default = new _Config.Config({ env: 'mock' }, require('../conf'), require('./ui'), require('./base'), require('./mock')).all();

},{"../../../core/Config":205,"../conf":149,"./base":150,"./mock":152,"./ui":153}],152:[function(require,module,exports){
"use strict";

module.exports = exports = {};

},{}],153:[function(require,module,exports){
"use strict";

module.exports = exports = {
    ui: {
        currentPageNo: 1,
        currentPageSize: 10
    }
};

},{}],154:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ['cookie_deleted', 'cookie_updated', 'route_entered', 'route_changed'];

},{}],155:[function(require,module,exports){
'use strict';

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _redux = require('../../core/redux');

var _Reducer = require('../../common/redux/Reducer');

var CommonReducers = _interopRequireWildcard(_Reducer);

var _Reducer2 = require('./redux/Reducer');

var Reducers = _interopRequireWildcard(_Reducer2);

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

var store = (0, _redux.getStore)((0, _objectAssign2.default)(CommonReducers, Reducers));

var headerApplication = new _applications.HeaderApplication();
headerApplication.render(store);

var footerApplication = new _applications.FooterApplication();
footerApplication.render(store);

var application = new _Application2.default();
application.routes = _routes2.default;
application.render(store);

},{"../../common/applications":169,"../../common/redux/Reducer":200,"../../core/redux":218,"./Application":147,"./config":151,"./events":154,"./redux/Reducer":162,"./routes":164,"object-assign":"object-assign"}],156:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../redux');

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function (_BasePage) {
    (0, _inherits3.default)(Page, _BasePage);

    function Page() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Page);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call.apply(_ref, [this].concat(args))), _this), _this.pageClassName = 'asd-landing-page', _this.pageLoadedApi = null, _this.children = function () {
            return _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                    'div',
                    null,
                    'Landing page of Asd'
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Page;
}(_Page2.default);

exports.default = new _redux.Connect(Page).klass;

},{"../redux":163,"./Page":157,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],157:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../common/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function (_CommonPage) {
  (0, _inherits3.default)(Page, _CommonPage);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);
    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
  }

  return Page;
}(_components.Page);

exports.default = Page;

},{"../../../common/components":188,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],158:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../redux');

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function (_BasePage) {
    (0, _inherits3.default)(Page, _BasePage);

    function Page() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Page);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call.apply(_ref, [this].concat(args))), _this), _this.pageClassName = 'asd-sub-page', _this.pageLoadedApi = null, _this.children = function () {
            return _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                    'div',
                    null,
                    'Sub page of Asd'
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Page;
}(_Page2.default);

exports.default = new _redux.Connect(Page).klass;

},{"../redux":163,"./Page":157,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],159:[function(require,module,exports){
'use strict';

exports.LandingPage = require('./LandingPage').default;
exports.SubPage = require('./SubPage').default;
/**NEWPAGE**/

},{"./LandingPage":156,"./SubPage":158}],160:[function(require,module,exports){
'use strict';

var _redux = require('../../../core/redux');

},{"../../../core/redux":218}],161:[function(require,module,exports){
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

var _get3 = require('babel-runtime/helpers/get');

var _get4 = _interopRequireDefault(_get3);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redux = require('../../../common/redux');

var _Action = require('./Action');

var actions = _interopRequireWildcard(_Action);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Connect = function (_CoreConnect) {
    (0, _inherits3.default)(Connect, _CoreConnect);

    function Connect() {
        (0, _classCallCheck3.default)(this, Connect);
        return (0, _possibleConstructorReturn3.default)(this, (Connect.__proto__ || (0, _getPrototypeOf2.default)(Connect)).apply(this, arguments));
    }

    (0, _createClass3.default)(Connect, [{
        key: 'getActions',
        value: function getActions(dispatch, ownProps) {
            var _get2;

            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = arguments[_key];
            }

            return this.util.assign({}, (_get2 = (0, _get4.default)(Connect.prototype.__proto__ || (0, _getPrototypeOf2.default)(Connect.prototype), 'getActions', this)).call.apply(_get2, [this, dispatch, ownProps].concat(args)), actions);
        }
    }]);
    return Connect;
}(_redux.Connect);

exports.default = Connect;

},{"../../../common/redux":201,"./Action":160,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/get":15,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17}],162:[function(require,module,exports){
'use strict';

var _redux = require('../../../core/redux');

},{"../../../core/redux":218}],163:[function(require,module,exports){
'use strict';

exports.Connect = require('./Connect').default;

},{"./Connect":161}],164:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _routes = require('../../common/routes');

var _pages = require('./pages');

var pages = _interopRequireWildcard(_pages);

var _Viewport = require('./Viewport');

var _Viewport2 = _interopRequireDefault(_Viewport);

var _conf = require('./conf');

var _conf2 = _interopRequireDefault(_conf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var subRoutes = [{ path: _conf2.default.apppath + '/sub', component: pages.SubPage, onChange: _routes.onRouteChanged }];
var routes = [{
    path: _conf2.default.apppath,
    component: _Viewport2.default,
    indexRoute: {
        component: pages.LandingPage
    },
    childRoutes: subRoutes,
    onChange: _routes.onRouteChanged
}];

exports.default = routes;

},{"../../common/routes":202,"./Viewport":148,"./conf":149,"./pages":159}],165:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _core = require('../../core');

var _redux = require('../../core/redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = function () {
    function Application() {
        var _this = this;

        (0, _classCallCheck3.default)(this, Application);
        this.configuration = _core.configuration;
        this.util = _core.util;

        this.children = function () {
            throw 'No children';
        };

        this.afterRender = function () {
            _redux.Action.execute('LoadPageInfoAction');
        };

        this.render = function (store) {
            _this.store = store;
            var _render = function _render() {
                _reactDom2.default.render(_react2.default.createElement(
                    _reactRedux.Provider,
                    { store: _this.store },
                    _this.children()
                ), document.getElementById(_this.container), _this.afterRender);
            };
            addEventListener('resize', _render);
            _render();
        };
    }

    (0, _createClass3.default)(Application, null, [{
        key: 'addEvents',
        value: function addEvents(events) {
            events.map(function (event) {
                return addEventListener(event, function (e) {
                    dispatchEvent(new CustomEvent('global_' + event, { detail: e.detail }));
                });
            });
        }
    }]);
    return Application;
}();

exports.default = Application;

},{"../../core":210,"../../core/redux":218,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"react":"react","react-dom":"react-dom","react-redux":"react-redux"}],166:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Application2 = require('./Application');

var _Application3 = _interopRequireDefault(_Application2);

var _Footer = require('../components/navigation/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterApplication = function (_Application) {
    (0, _inherits3.default)(FooterApplication, _Application);

    function FooterApplication() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, FooterApplication);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FooterApplication.__proto__ || (0, _getPrototypeOf2.default)(FooterApplication)).call.apply(_ref, [this].concat(args))), _this), _this.container = 'footer', _this.children = function () {
            return _react2.default.createElement(_Footer2.default, null);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return FooterApplication;
}(_Application3.default);

exports.default = FooterApplication;

},{"../components/navigation/Footer":189,"./Application":165,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],167:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Application2 = require('./Application');

var _Application3 = _interopRequireDefault(_Application2);

var _Header = require('../components/navigation/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderApplication = function (_Application) {
    (0, _inherits3.default)(HeaderApplication, _Application);

    function HeaderApplication() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, HeaderApplication);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HeaderApplication.__proto__ || (0, _getPrototypeOf2.default)(HeaderApplication)).call.apply(_ref, [this].concat(args))), _this), _this.container = 'header', _this.children = function () {
            return _react2.default.createElement(_Header2.default, null);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return HeaderApplication;
}(_Application3.default);

exports.default = HeaderApplication;

},{"../components/navigation/Header":190,"./Application":165,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],168:[function(require,module,exports){
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

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Application2 = require('./Application');

var _Application3 = _interopRequireDefault(_Application2);

var _core = require('../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoutesApplication = function (_Application) {
    (0, _inherits3.default)(RoutesApplication, _Application);

    function RoutesApplication() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RoutesApplication);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RoutesApplication.__proto__ || (0, _getPrototypeOf2.default)(RoutesApplication)).call.apply(_ref, [this].concat(args))), _this), _this.children = function () {
            return _react2.default.createElement(_reactRouter.Router, { routes: _this.routes, history: _this.history });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RoutesApplication, [{
        key: 'routes',
        get: function get() {
            if (!this.__routes) throw 'No routes provided';
            return this.__routes;
        },
        set: function set(v) {
            this.__routes = v;
        }
    }, {
        key: 'history',
        get: function get() {
            return this.util.history;
        }
    }]);
    return RoutesApplication;
}(_Application3.default);

exports.default = RoutesApplication;

},{"../../core":210,"./Application":165,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react","react-router":"react-router"}],169:[function(require,module,exports){
'use strict';

exports.Application = require('./Application').default;
exports.FooterApplication = require('./FooterApplication').default;
exports.HeaderApplication = require('./HeaderApplication').default;
exports.RoutesApplication = require('./RoutesApplication').default;

},{"./Application":165,"./FooterApplication":166,"./HeaderApplication":167,"./RoutesApplication":168}],170:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = function (_Style) {
    (0, _inherits3.default)(Breadcrumbs, _Style);

    function Breadcrumbs() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Breadcrumbs);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Breadcrumbs.__proto__ || (0, _getPrototypeOf2.default)(Breadcrumbs)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'breadcrumbs', _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className },
                _react2.default.createElement(
                    'div',
                    { className: 'links' },
                    _this.breadcrumbs.map(function (item, i) {
                        return _react2.default.createElement(
                            _reactRouter.Link,
                            { key: i, to: item.url, className: 'breadcrumb' },
                            item.title
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'actions' },
                    _this.breadcrumbsActions
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Breadcrumbs;
}(_Style3.default);

exports.default = Breadcrumbs;

},{"./Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react","react-router":"react-router"}],171:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_Style) {
    (0, _inherits3.default)(Button, _Style);

    function Button() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Button);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'button', _this.label = _this.props.label, _this.onClick = _this.props.onClick, _this.type = _this.props.type ? _this.props.type : 'button', _this.render = function () {
            return _react2.default.createElement(
                'button',
                { type: _this.type, className: _this.className, onClick: _this.onClick },
                _this.label
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Button;
}(_Style3.default);

exports.default = Button;

},{"./Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],172:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function (_Style) {
    (0, _inherits3.default)(Card, _Style);

    function Card() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Card);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Card.__proto__ || (0, _getPrototypeOf2.default)(Card)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'card', _this.header = function () {
            return _react2.default.createElement(
                'div',
                { className: 'card-header', style: { display: !_this.props.title ? 'none' : '' } },
                _react2.default.createElement(
                    'h3',
                    null,
                    _this.props.title
                ),
                _this.subtitle()
            );
        }, _this.subtitle = function () {
            return _react2.default.createElement(
                'label',
                { style: { display: !_this.props.subtitle ? 'none' : '' } },
                _this.props.subtitle
            );
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className },
                _this.header(),
                _react2.default.createElement(
                    'div',
                    { className: 'card-content' },
                    _this.props.children
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Card;
}(_Style3.default);

exports.default = Card;

},{"./Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],173:[function(require,module,exports){
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

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _core = require('../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = function (_React$Component) {
    (0, _inherits3.default)(Component, _React$Component);

    function Component() {
        var _ref;

        (0, _classCallCheck3.default)(this, Component);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Component.__proto__ || (0, _getPrototypeOf2.default)(Component)).call.apply(_ref, [this].concat(args)));

        _this.pageLoadedApiSuccess = function (res) {};

        _this.pageLoadedApiFailure = function (res) {};

        _this.onRouteEntered = function (route, replace) {};

        _this.onRouteChanged = function (prev, next) {};

        _this.breadcrumbs = _this.props.breadcrumbs;
        _this.breadcrumbsActions = _this.props.breadcrumbsActions;

        _this.state = { validationErrors: {}, refresh: false };
        _this.init.apply(_this, args);
        return _this;
    }

    (0, _createClass3.default)(Component, [{
        key: 'init',
        value: function init() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.__mounted = true;
            addEventListener('global_cookie_deleted', this.refresh.bind(this));
            addEventListener('global_cookie_updated', this.refresh.bind(this));
            addEventListener('global_route_entered', function (e) {
                var _e$detail = e.detail,
                    route = _e$detail.route,
                    replace = _e$detail.replace;

                _this2.setState({ pageRoute: route });
                _this2.onRouteEntered(route, replace);
            });
            addEventListener('global_route_changed', function (e) {
                var _e$detail2 = e.detail,
                    prev = _e$detail2.prev,
                    next = _e$detail2.next;

                _this2.onRouteChanged(prev, next);
            });
            this.postComponentDidMount();
            if (this.pageLoadedApi) {
                this.util.query(this.pageLoadedApi).success(this.pageLoadedApiSuccess).failure(this.pageLoadedApiFailure).run();
            }
        }
    }, {
        key: 'postComponentDidMount',
        value: function postComponentDidMount() {}
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.__mounted = false;
        }
    }, {
        key: 'refresh',
        value: function refresh(state) {
            if (this.__mounted) {
                this.setState(state ? state : this.state);
            }
        }
    }, {
        key: 'setError',
        value: function setError(field, msg) {
            this.state.validationErrors[field] = msg;
            this.setState(this.state);
            return false;
        }
    }, {
        key: 'removeError',
        value: function removeError(field) {
            this.state.validationErrors[field] = null;
            this.setState(this.state);
            return true;
        }
    }, {
        key: 'dom',
        get: function get() {
            return _reactDom2.default.findDOMNode(this);
        }
    }, {
        key: 'configuration',
        get: function get() {
            return _core.configuration;
        }
    }, {
        key: 'util',
        get: function get() {
            return _core.util;
        }
    }, {
        key: 'className',
        get: function get() {
            return this.componentClassName + ' ' + (this.props.className ? this.props.className : '');
        }
    }, {
        key: 'route',
        get: function get() {
            return this.util.cookie.read('route_entered').route;
        }
    }, {
        key: 'pageInfo',
        get: function get() {
            return this.props.pageInfo;
        }
    }]);
    return Component;
}(_react2.default.Component);

exports.default = Component;

},{"../../core":210,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react","react-dom":"react-dom"}],174:[function(require,module,exports){
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

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropzone = function (_Style) {
    (0, _inherits3.default)(Dropzone, _Style);

    function Dropzone() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Dropzone);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Dropzone.__proto__ || (0, _getPrototypeOf2.default)(Dropzone)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'dropzone', _this.state = { files: [] }, _this.open = function () {
            return _this.dropzone.open();
        }, _this.drop = function (files) {
            _this.setState({ files: files });
            if (_this.props.onDropped) _this.props.onDropped(_this.state.files);
        }, _this.render = function () {
            return _react2.default.createElement(
                _reactDropzone2.default,
                { className: _this.className, ref: function ref(e) {
                        return _this.dropzone = e;
                    }, onDrop: _this.drop },
                _this.props.children
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Dropzone, [{
        key: 'files',
        get: function get() {
            return this.state.files;
        }
    }]);
    return Dropzone;
}(_Style3.default);

exports.default = Dropzone;

},{"./Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react","react-dropzone":132}],175:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../redux');

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

var _TextField = require('./TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function (_Style) {
    (0, _inherits3.default)(Login, _Style);

    function Login() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Login);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'login', _this.validate = function () {
            if (!_this.accountInput.value) {
                return _this.setError('account', 'This field is required');
            } else {
                _this.removeError('account');
            }
            if (!_this.passwordInput.value) {
                return _this.setError('password', 'This field is required');
            } else {
                _this.removeError('password');
            }
            return true;
        }, _this.onLogin = function (e) {
            if (_this.validate()) {
                _this.props.executeUserLoginAction({
                    account: _this.accountInput.value,
                    password: _this.passwordInput.value
                });
            }
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Sign in to ',
                    _react2.default.createElement(
                        'span',
                        { className: 'app' },
                        _this.configuration.app
                    )
                ),
                _react2.default.createElement(
                    'form',
                    { className: 'login-form' },
                    _react2.default.createElement(_TextField2.default, { type: 'text', ref: function ref(e) {
                            return _this.accountInput = e;
                        },
                        errorText: _this.state.validationErrors.account,
                        placeholder: 'Account' }),
                    _react2.default.createElement(_TextField2.default, { type: 'password', ref: function ref(e) {
                            return _this.passwordInput = e;
                        },
                        errorText: _this.state.validationErrors.password,
                        placeholder: 'Password' }),
                    _react2.default.createElement(_Button2.default, { label: 'Login', onClick: _this.onLogin })
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Login;
}(_Style3.default);

exports.default = new _redux.Connect(Login).klass;

},{"../redux":201,"./Button":171,"./Style":183,"./TextField":186,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],176:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function (_Style) {
    (0, _inherits3.default)(Menu, _Style);

    function Menu() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Menu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.level = _this.props.level ? _this.props.level : 0, _this.getNodeClassName = function (node) {
            return (location.pathname == node.url ? 'active' : '') + ' level' + _this.level + ' ' + (node.subNodes && node.subNodes.length > 0 ? 'has-children' : '');
        }, _this.renderMenu = function (menus, className, subMenuClassName) {
            return !menus || !menus.length ? null : _react2.default.createElement(
                'ul',
                { className: className },
                menus.map(function (item, i) {
                    var props = item.onClick ? { onClick: item.onClick } : { href: item.url, onClick: function onClick(e) {
                            e.preventDefault();
                            if (item.url) _this.util.history.push(item.url);
                        } };
                    return item.html ? _react2.default.createElement(
                        'li',
                        { key: i, className: _this.getNodeClassName(item) },
                        item.html
                    ) : _react2.default.createElement(
                        'li',
                        { key: i, className: _this.getNodeClassName(item) },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            props,
                            item.title
                        ),
                        !item.description ? null : _react2.default.createElement(
                            'div',
                            { className: 'description' },
                            item.description
                        ),
                        _react2.default.createElement(Menu, { menus: item.subNodes,
                            level: _this.level + 1,
                            className: subMenuClassName,
                            subMenuClassName: subMenuClassName })
                    );
                })
            );
        }, _this.render = function () {
            return _this.renderMenu(_this.props.menus, _this.className, _this.props.subMenuClassName);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Menu;
}(_Style3.default);

exports.default = Menu;

},{"./Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react","react-router":"react-router"}],177:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_Style) {
    (0, _inherits3.default)(Modal, _Style);

    function Modal() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Modal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'modal-dialog ' + _this.modalClassName, _this.modalClassName = '', _this.close = function () {}, _this.message = function () {
            return !_this.props.message ? null : _react2.default.createElement(
                'div',
                { className: 'modal-message' },
                _this.props.message
            );
        }, _this.footer = function () {
            return !_this.props.footer ? null : _react2.default.createElement(
                'div',
                { className: 'modal-footer' },
                _this.props.footer
            );
        }, _this.render = function () {
            return _react2.default.createElement(
                _reactModal2.default,
                (0, _extends3.default)({}, _this.props, { className: _this.className }),
                _this.message(),
                _react2.default.createElement(
                    'div',
                    { className: 'modal-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-header' },
                        _this.props.header,
                        _react2.default.createElement(
                            'i',
                            { className: 'material-icons icon-close', onClick: _this.close },
                            'close'
                        )
                    ),
                    _this.props.children,
                    _this.footer()
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Modal;
}(_Style3.default);

exports.default = Modal;

},{"./Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/extends":14,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react","react-modal":139}],178:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../redux');

var _Modal2 = require('./Modal');

var _Modal3 = _interopRequireDefault(_Modal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalDefault = function (_Modal) {
    (0, _inherits3.default)(ModalDefault, _Modal);

    function ModalDefault() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ModalDefault);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ModalDefault.__proto__ || (0, _getPrototypeOf2.default)(ModalDefault)).call.apply(_ref, [this].concat(args))), _this), _this.modalClassName = 'default-modal', _this.close = function () {
            return _this.props.executeRemoveModalFromViewAction();
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return ModalDefault;
}(_Modal3.default);

exports.default = new _redux.Connect(ModalDefault).klass;

},{"../redux":201,"./Modal":177,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],179:[function(require,module,exports){
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

var _react2 = _interopRequireDefault(_react);

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _Breadcrumbs = require('./Breadcrumbs');

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _ModalDefault = require('./ModalDefault');

var _ModalDefault2 = _interopRequireDefault(_ModalDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function (_Style) {
    (0, _inherits3.default)(Page, _Style);

    function Page() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Page);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'container-fluid page ' + _this.sidebarLeftClassName + ' ' + _this.sidebarRightClassName + ' ' + _this.pageClassName, _this.pageClassName = '', _this.renderSibarLeft = function () {
            return _this.props.sidebarLeft;
        }, _this.renderSibarRight = function () {
            return _this.props.sidebarRight;
        }, _this.renderBreadcrumbs = function () {
            return _react2.default.createElement(_Breadcrumbs2.default, { breadcrumbs: _this.breadcrumbs, actions: _this.breadcrumbsActions });
        }, _this.content = function () {
            return _this.props.children;
        }, _this.children = function () {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _this.renderBreadcrumbs(),
                _this.renderSibarLeft(),
                _this.content(),
                _this.renderSibarRight()
            );
        }, _this.renderModal = function () {
            return !_this.props.modal ? null : _this.props.modal instanceof Modal ? _this.props.modal : _react2.default.createElement(
                _ModalDefault2.default,
                { isOpen: true, contentLabel: 'ModalDefault' },
                _this.props.modal
            );
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className },
                _this.util.user.isLogged ? _this.children() : _react2.default.createElement(_Login2.default, null),
                _this.renderModal()
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Page, [{
        key: 'sidebarLeftClassName',
        get: function get() {
            if (!this.props.sidebarLeft) return '';
            return this.props.hideSidebarLeft ? 'has-sidebar-left-collapsed' : 'has-sidebar-left';
        }
    }, {
        key: 'sidebarRightClassName',
        get: function get() {
            if (!this.props.sidebarRight) return '';
            return this.props.hideSidebarRight ? 'has-sidebar-right-collapsed' : 'has-sidebar-right';
        }
    }]);
    return Page;
}(_Style3.default);

exports.default = Page;

},{"./Breadcrumbs":170,"./Login":175,"./ModalDefault":178,"./Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],180:[function(require,module,exports){
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

var _react2 = _interopRequireDefault(_react);

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchField = function (_Style) {
    (0, _inherits3.default)(SearchField, _Style);

    function SearchField() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SearchField);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SearchField.__proto__ || (0, _getPrototypeOf2.default)(SearchField)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'search-field', _this.icon = _this.props.icon ? _this.props.icon : _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            'search'
        ), _this.iconPosition = _this.props.iconPosition == 'start' ? 'start' : 'end', _this.placeholder = _this.props.placeholder ? _this.props.placeholder : 'Search', _this.onChange = function (e) {
            return _this.props.onChanged ? _this.props.onChanged(e) : false;
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className, style: _this.props.style },
                _this.iconPosition == 'start' ? _this.icon : null,
                _react2.default.createElement('input', { type: 'text', ref: function ref(e) {
                        return _this.input = e;
                    }, placeholder: _this.placeholder,
                    onChange: _this.onChange }),
                _this.iconPosition == 'end' ? _this.icon : null
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SearchField, [{
        key: 'value',
        get: function get() {
            return this.input.value;
        },
        set: function set(v) {
            this.input.value = v;
        }
    }]);
    return SearchField;
}(_Style3.default);

exports.default = SearchField;

},{"./Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],181:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _react2 = _interopRequireDefault(_react);

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

var _SearchField = require('./SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectField = function (_Style) {
    (0, _inherits3.default)(SelectField, _Style);

    function SelectField() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SelectField);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SelectField.__proto__ || (0, _getPrototypeOf2.default)(SelectField)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'select-field', _this.placeholder = _this.props.placeholder ? _this.props.placeholder : '', _this.noneOption = { text: _this.placeholder, value: null, className: 'none-option' }, _this.shouldShowNoneOption = _this.props.hasOwnProperty('placeholder'), _this.style = _this.util.assign({}, _this.props.style), _this.title = _this.props.title, _this.optionText = _this.props.optionText ? _this.props.optionText : function (o) {
            return o.text;
        }, _this.optionValue = _this.props.optionValue ? _this.props.optionValue : function (o) {
            return o.value;
        }, _this.option = function (i) {
            return _this.options[i] ? _this.options[i] : _this.noneOption;
        }, _this.open = function (open) {
            return _this.refresh({ open: open });
        }, _this.onChange = function (o, f) {
            if (f || o != _this.selected) {
                _this.refresh({ selected: o, open: false });
                if (_this.props.onChanged) _this.props.onChanged(o, _this);
            }
        }, _this.state = {
            options: _this.normalizeOptions(_this.props.options),
            open: Boolean(_this.props.open),
            searchable: Boolean(_this.props.searchable)

        }, _this.normalizeOptions = function (options) {
            return Array.isArray(options) ? options.map(function (o) {
                return typeof o == 'string' ? { value: o, text: o } : k;
            }) : (typeof options === 'undefined' ? 'undefined' : (0, _typeof3.default)(options)) == 'object' ? (0, _keys2.default)(options).map(function (k) {
                return { value: options[k], text: k };
            }) : [];
        }, _this.renderOption = function (o, i) {
            return _react2.default.createElement(
                'div',
                { key: i, className: 'select-option ' + o.className + ' ' + (_this.selected == o ? 'selected' : ''),
                    onClick: _this.onChange.bind(_this, o) },
                _this.optionText(o)
            );
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className },
                !_this.title ? null : _react2.default.createElement(
                    'div',
                    { className: 'select-title' },
                    _this.title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'select-value ' + (_this.selected == _this.noneOption ? 'placeholder' : '') },
                    _react2.default.createElement(
                        'div',
                        { className: 'select-text' },
                        _this.optionText(_this.selected)
                    ),
                    _react2.default.createElement(
                        'i',
                        { className: 'material-icons' },
                        'arrow_drop_down'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'select-dropdown', style: _this.util.assign(_this.style, { display: _this.state.open ? '' : 'none' }) },
                    !_this.searchable ? null : _react2.default.createElement(_SearchField2.default, { ref: function ref(e) {
                            return _this.searchField = e;
                        }, onChange: _this.refresh }),
                    _react2.default.createElement(
                        'div',
                        { className: 'select-dropdown' },
                        _this.filteredOptions.map(function (o, i) {
                            return _this.renderOption(o, i);
                        })
                    )
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SelectField, [{
        key: 'init',
        value: function init(props) {
            var _this2 = this;

            this.state.selected = this.options.find(function (o) {
                return _this2.optionValue(o) == props.value;
            });
            this.state.selected = this.state.selected ? this.state.selected : this.noneOption;
            this.util.assign(this.style, {
                width: parseInt(props.width) ? parseInt(props.width) + 'px' : 'initial',
                minWidth: parseInt(props.minWidth) ? parseInt(props.minWidth) + 'px' : 'initial'
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.state.open && this.searchField) this.searchField.dom.querySelector('input').focus();
        }
    }, {
        key: 'postComponentDidMount',
        value: function postComponentDidMount() {
            var _this3 = this;

            addEventListener('click', function (e) {
                var select = e.target.closest('.select-field');
                if (select && select == _this3.dom && e.target.closest('.select-value')) _this3.open(true);else _this3.open(false);
            });
            if (this.selected != this.noneOption) this.onChange(this.selected, true);
        }
    }, {
        key: 'options',
        get: function get() {
            return this.shouldShowNoneOption ? [this.noneOption].concat(this.state.options) : this.state.options;
        }
    }, {
        key: 'filteredOptions',
        get: function get() {
            var _this4 = this;

            return this.searchField && this.searchField.value ? this.options.filter(function (o) {
                return _this4.optionText(o).toLowerCase().includes(_this4.searchField.value.toLowerCase());
            }) : this.options;
        }
    }]);
    return SelectField;
}(_Style3.default);

exports.default = SelectField;

},{"./SearchField":180,"./Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"babel-runtime/helpers/typeof":19,"react":"react"}],182:[function(require,module,exports){
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

var _react2 = _interopRequireDefault(_react);

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

var _SearchField = require('./SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stepper = function (_Style) {
    (0, _inherits3.default)(Stepper, _Style);

    function Stepper() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Stepper);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Stepper.__proto__ || (0, _getPrototypeOf2.default)(Stepper)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'stepper ' + (_this.props.autofit ? 'stepper-autofit' : ''), _this.steps = _this.props.steps ? _this.props.steps : [], _this.state = {
            current: _this.props.current ? _this.props.current : 0
        }, _this.jump = function (i) {
            return i > 0 && i < _this.steps.length && _this.steps[i].active ? _this.current = i : false;
        }, _this.next = function () {
            return _this.jump(_this.current + 1);
        }, _this.prev = function () {
            return _this.jump(_this.current - 1);
        }, _this.headers = function () {
            return _react2.default.createElement(
                'div',
                { className: 'step-headers' },
                _this.steps.map(function (s, i) {
                    return _this.header(s, i);
                })
            );
        }, _this.header = function (s, i) {
            return _react2.default.createElement(
                'div',
                { key: i, className: 'step-header ' + (s.active ? 'active' : '') },
                _this.renderHeader(s, i)
            );
        }, _this.renderHeader = _this.props.renderHeader ? _this.props.renderHeader : function (s, i) {
            return _react2.default.createElement(
                'div',
                { className: 'step-header-content' },
                _react2.default.createElement(
                    'div',
                    { className: 'step-index' },
                    _react2.default.createElement(
                        'a',
                        { onClick: _this.jump.bind(_this, i) },
                        i + 1
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'step-title' },
                    s.title
                ),
                _this.renderHeaderExtra(s, i)
            );
        }, _this.renderHeaderExtra = function (s, i) {
            return _this.props.renderHeaderExtra ? _this.props.renderHeaderExtra(s, i) : null;
        }, _this.content = function () {
            return !_this.renderContent(_this.current) ? null : _react2.default.createElement(
                'div',
                { className: 'step-content' },
                _this.renderContent(_this.current)
            );
        }, _this.renderContent = function (i) {
            return _this.props.renderContent ? _this.props.renderContent(i) : _this.steps[i].content;
        }, _this.render = function () {
            return !_this.steps ? null : _react2.default.createElement(
                'div',
                { className: _this.className },
                _this.headers(),
                _this.content()
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Stepper, [{
        key: 'current',
        get: function get() {
            return this.state.current;
        },
        set: function set(current) {
            this.refresh({ current: current });
        }
    }]);
    return Stepper;
}(_Style3.default);

exports.default = Stepper;

},{"./SearchField":180,"./Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],183:[function(require,module,exports){
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

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Style = function (_Component) {
    (0, _inherits3.default)(Style, _Component);

    function Style() {
        (0, _classCallCheck3.default)(this, Style);
        return (0, _possibleConstructorReturn3.default)(this, (Style.__proto__ || (0, _getPrototypeOf2.default)(Style)).apply(this, arguments));
    }

    (0, _createClass3.default)(Style, [{
        key: 'getThemeProps',
        value: function getThemeProps() {
            return ['id', 'name', 'style'].concat(this.themeProps);
        }
    }, {
        key: 'uuid',
        get: function get() {
            return this.__uuid = !this.__uuid ? this.util.uuid() : this.__uuid;
        }
    }, {
        key: 'defaultTheme',
        get: function get() {
            var theme = this.configuration.ui.theme;
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
                    margin: '0', padding: '0px ' + theme.paddingSmall
                },
                breadcrumbsStyle: {
                    lineHeight: theme.lineHeight
                }
            });
        }
    }, {
        key: 'themeProps',
        get: function get() {
            return [];
        }
    }, {
        key: 'theme',
        get: function get() {
            return this.util.assign({}, this.defaultTheme, this.props);
        }
    }, {
        key: 'cmpStyleProps',
        get: function get() {
            return this.util.include(this.util.assign({}, this.theme, this.cmpProps), this.getThemeProps());
        }
    }, {
        key: 'cmpProps',
        get: function get() {
            return this.util.assign({}, this.defaultProps, this.props);
        }
    }, {
        key: 'defaultProps',
        get: function get() {
            return {};
        }
    }]);
    return Style;
}(_Component3.default);

exports.default = Style;

},{"./Component":173,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],184:[function(require,module,exports){
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

var _react2 = _interopRequireDefault(_react);

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function (_Style) {
    (0, _inherits3.default)(Table, _Style);

    function Table() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Table);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'table-view', _this.state = {
            columns: _this.props.columns ? _this.props.columns : []
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Table, [{
        key: 'columns',
        get: function get() {
            return this.state.columns;
        }
    }]);
    return Table;
}(_Style3.default);

exports.default = Table;

},{"./Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],185:[function(require,module,exports){
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

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function (_Style) {
    (0, _inherits3.default)(Tabs, _Style);

    function Tabs() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Tabs);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'tabs ' + (_this.cmpProps.vertical ? 'tabs-vertical' : 'tabs-horizontal'), _this.state = {
            activeIndex: _this.cmpProps.activeIndex ? _this.cmpProps.activeIndex : 0
        }, _this.handleNext = function () {
            return _this.activeIndex < _this.childCount ? _this.setState({ activeIndex: _this.activeIndex + 1 }) : false;
        }, _this.handlePrev = function () {
            return _this.activeIndex > 0 ? _this.setState({ activeIndex: _this.activeIndex - 1 }) : false;
        }, _this.getTitle = function (el, i) {
            return el.props.children.reduce(function (v, child) {
                return child.type == 'title' ? v = child.props.children : v;
            }, i);
        }, _this.getContent = function (el, i) {
            return el.props.children.reduce(function (v, child) {
                return child.type == 'content' ? v = child.props.children : v;
            }, i);
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className, style: { display: !_this.childCount ? 'none' : '' } },
                _react2.default.createElement(
                    'div',
                    { className: 'tabs-header' },
                    _this.props.children.map(function (tab, i) {
                        return _react2.default.createElement(_Button2.default, { key: i, onClick: function onClick() {
                                return _this.setState({ activeIndex: i });
                            }, label: _this.getTitle(tab, i),
                            className: 'tab ' + (i == _this.activeIndex ? 'active' : '') });
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'tab-content' },
                    _this.getContent(_this.props.children[_this.activeIndex], _this.activeIndex)
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Tabs, [{
        key: 'childCount',
        get: function get() {
            return this.props.children.length;
        }
    }, {
        key: 'activeIndex',
        get: function get() {
            return this.state.activeIndex;
        }
    }]);
    return Tabs;
}(_Style3.default);

exports.default = Tabs;

},{"./Button":171,"./Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],186:[function(require,module,exports){
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

var _react2 = _interopRequireDefault(_react);

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = function (_Style) {
    (0, _inherits3.default)(TextField, _Style);

    function TextField() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TextField);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.renderMessage = function () {
            return !_this.props.errorText ? null : _react2.default.createElement(
                'div',
                { className: 'message' },
                _this.props.errorText
            );
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className },
                _react2.default.createElement('input', { ref: function ref(e) {
                        return _this.input = e;
                    }, type: _this.type, value: _this.defaultValue, placeholder: _this.placeholder }),
                _this.renderMessage()
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(TextField, [{
        key: 'componentClassName',
        get: function get() {
            return 'text-field ' + (this.props.errorText ? 'error' : '');
        }
    }, {
        key: 'type',
        get: function get() {
            return this.props.type ? this.props.type : 'text';
        }
    }, {
        key: 'defaultValue',
        get: function get() {
            return this.props.defaultValue;
        }
    }, {
        key: 'value',
        get: function get() {
            return this.input.value;
        },
        set: function set(v) {
            this.input.value = v;
        }
    }, {
        key: 'placeholder',
        get: function get() {
            return this.props.placeholder ? this.props.placeholder : '';
        }
    }]);
    return TextField;
}(_Style3.default);

exports.default = TextField;

},{"./Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],187:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Style2 = require('./Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Viewport = function (_Style) {
    (0, _inherits3.default)(Viewport, _Style);

    function Viewport() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Viewport);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Viewport.__proto__ || (0, _getPrototypeOf2.default)(Viewport)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'viewport container-fluid', _this.children = function () {
            return _this.props.children;
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className },
                _this.children()
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Viewport;
}(_Style3.default);

exports.default = Viewport;

},{"./Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],188:[function(require,module,exports){
'use strict';

exports.Card = require('./Card').default;
exports.Component = require('./Component').default;
exports.Style = require('./Style').default;
exports.TextField = require('./TextField').default;
exports.Button = require('./Button').default;
exports.SearchField = require('./SearchField').default;
exports.SelectField = require('./SelectField').default;
exports.Table = require('./Table').default;
exports.Tabs = require('./Tabs').default;
exports.Viewport = require('./Viewport').default;
exports.Modal = require('./Modal').default;
exports.ModalDefault = require('./ModalDefault').default;
exports.Dropzone = require('./Dropzone').default;
exports.Stepper = require('./Stepper').default;
exports.Breadcrumbs = require('./Breadcrumbs').default;
exports.Menu = require('./Menu').default;
exports.Page = require('./Page').default;

},{"./Breadcrumbs":170,"./Button":171,"./Card":172,"./Component":173,"./Dropzone":174,"./Menu":176,"./Modal":177,"./ModalDefault":178,"./Page":179,"./SearchField":180,"./SelectField":181,"./Stepper":182,"./Style":183,"./Table":184,"./Tabs":185,"./TextField":186,"./Viewport":187}],189:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style2 = require('../Style');

var _Style3 = _interopRequireDefault(_Style2);

var _Version = require('./Version');

var _Version2 = _interopRequireDefault(_Version);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function (_Style) {
    (0, _inherits3.default)(Footer, _Style);

    function Footer() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Footer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'footer', _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className },
                _react2.default.createElement(_Version2.default, null)
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Footer;
}(_Style3.default);

exports.default = new _redux.Connect(Footer).klass;

},{"../../redux":201,"../Style":183,"./Version":197,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],190:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style2 = require('../Style');

var _Style3 = _interopRequireDefault(_Style2);

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

var Header = function (_Style) {
    (0, _inherits3.default)(Header, _Style);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'header', _this.onRouteEntered = function (route, replace) {
            return _this.props.executeLoadPageInfoAction();
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className },
                _react2.default.createElement(_LinksHub2.default, null),
                _react2.default.createElement(_LogoBox2.default, null),
                _react2.default.createElement('div', { className: 'space' }),
                _react2.default.createElement(_SearchBox2.default, null),
                _react2.default.createElement(_Notification2.default, null),
                _react2.default.createElement(_Help2.default, null),
                _react2.default.createElement(_UserBox2.default, null)
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Header;
}(_Style3.default);

exports.default = new _redux.Connect(Header).klass;

},{"../../redux":201,"../Style":183,"./Help":191,"./LinksHub":192,"./LogoBox":193,"./Notification":194,"./SearchBox":195,"./UserBox":196,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],191:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style2 = require('../Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Help = function (_Style) {
    (0, _inherits3.default)(Help, _Style);

    function Help() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Help);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Help.__proto__ || (0, _getPrototypeOf2.default)(Help)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'help', _this.children = function () {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    'help'
                )
            );
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className },
                _this.children()
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Help;
}(_Style3.default);

exports.default = new _redux.Connect(Help).klass;

},{"../../redux":201,"../Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],192:[function(require,module,exports){
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

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style2 = require('../Style');

var _Style3 = _interopRequireDefault(_Style2);

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinksHub = function (_Style) {
    (0, _inherits3.default)(LinksHub, _Style);

    function LinksHub() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, LinksHub);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LinksHub.__proto__ || (0, _getPrototypeOf2.default)(LinksHub)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'links-hub', _this.children = function () {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    'apps'
                ),
                _react2.default.createElement(_Menu2.default, { menus: _this.pageInfo.menus, className: 'menus', subMenuClassName: 'sub-menus' })
            );
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className },
                _this.children()
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(LinksHub, [{
        key: 'getTitle',
        value: function getTitle(nodes, value) {
            var _this2 = this;

            return nodes.reduce(function (value, node) {
                if (location.pathname == node.url) return value = node.subNodes && node.subNodes.length ? _this2.getTitle(node.subNodes, value) : node.title;
                if (location.pathname.indexOf(node.url) >= 0) return value = node.subNodes && node.subNodes.length ? _this2.getTitle(node.subNodes, value) : node.title;
                return node.subNodes && node.subNodes.length ? _this2.getAppName(node.subNodes, value) : value;
            }, value);
        }
    }]);
    return LinksHub;
}(_Style3.default);

exports.default = new _redux.Connect(LinksHub).klass;

},{"../../redux":201,"../Menu":176,"../Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],193:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style2 = require('../Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogoBox = function (_Style) {
    (0, _inherits3.default)(LogoBox, _Style);

    function LogoBox() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, LogoBox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LogoBox.__proto__ || (0, _getPrototypeOf2.default)(LogoBox)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'logo-box', _this.children = function () {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement('img', { src: _this.configuration.applogo }),
                _react2.default.createElement(
                    'h3',
                    null,
                    _this.configuration.appname
                )
            );
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className },
                _this.children()
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return LogoBox;
}(_Style3.default);

exports.default = new _redux.Connect(LogoBox).klass;

},{"../../redux":201,"../Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],194:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style2 = require('../Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = function (_Style) {
    (0, _inherits3.default)(Notification, _Style);

    function Notification() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Notification);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Notification.__proto__ || (0, _getPrototypeOf2.default)(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'notification', _this.children = function () {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    'notifications'
                )
            );
        }, _this.render = function () {
            return !_this.util.user.isLogged ? null : _react2.default.createElement(
                'div',
                { className: _this.className },
                _this.children()
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Notification;
}(_Style3.default);

exports.default = new _redux.Connect(Notification).klass;

},{"../../redux":201,"../Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],195:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style2 = require('../Style');

var _Style3 = _interopRequireDefault(_Style2);

var _TextField = require('../TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchBox = function (_Style) {
    (0, _inherits3.default)(SearchBox, _Style);

    function SearchBox() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SearchBox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SearchBox.__proto__ || (0, _getPrototypeOf2.default)(SearchBox)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'search-box', _this.children = function () {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement(_TextField2.default, { ref: function ref(e) {
                        return _this.searchInput = e;
                    }, placeholder: 'Search' })
            );
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className },
                !_this.util.user.isLogged ? null : _this.children()
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return SearchBox;
}(_Style3.default);

exports.default = new _redux.Connect(SearchBox).klass;

},{"../../redux":201,"../Style":183,"../TextField":186,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],196:[function(require,module,exports){
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

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style2 = require('../Style');

var _Style3 = _interopRequireDefault(_Style2);

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserBox = function (_Style) {
    (0, _inherits3.default)(UserBox, _Style);

    function UserBox() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, UserBox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserBox.__proto__ || (0, _getPrototypeOf2.default)(UserBox)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'user-box', _this.children = function () {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'display-name' },
                    _this.util.user.displayName
                ),
                _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    'person'
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
                            _this.util.user.displayName
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'occupation' },
                            _this.util.user.occupation
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'department' },
                            _this.util.user.department
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'email' },
                            _this.util.user.email
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'last-login' },
                            _this.util.user.lastLogin
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'links' },
                        _react2.default.createElement(_Menu2.default, { menus: _this.menus })
                    )
                )
            );
        }, _this.render = function () {
            return !_this.util.user.isLogged ? null : _react2.default.createElement(
                'div',
                { className: _this.className },
                _this.children()
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(UserBox, [{
        key: 'menus',
        get: function get() {
            var _this2 = this;

            return [{
                title: 'Profile'
            }, {
                title: 'Preferences'
            }, {
                title: 'Logout',
                onClick: function onClick() {
                    return _this2.props.executeUserLogoutAction();
                }
            }];
        }
    }]);
    return UserBox;
}(_Style3.default);

exports.default = new _redux.Connect(UserBox).klass;

},{"../../redux":201,"../Menu":176,"../Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],197:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('../../redux');

var _Style2 = require('../Style');

var _Style3 = _interopRequireDefault(_Style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Version = function (_Style) {
    (0, _inherits3.default)(Version, _Style);

    function Version() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Version);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Version.__proto__ || (0, _getPrototypeOf2.default)(Version)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'version', _this.children = function () {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _this.configuration.appversion
            );
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this.className },
                _this.children()
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Version;
}(_Style3.default);

exports.default = new _redux.Connect(Version).klass;

},{"../../redux":201,"../Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react"}],198:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadPageInfoAction = exports.ToggleSidebarRightAction = exports.ToggleSidebarLeftAction = exports.SetCurrentPageSizeAction = exports.SetCurrentPageNoAction = exports.SetCurrentSearchValueAction = exports.UserLoginAction = exports.UserLogoutAction = exports.RemoveModalFromViewAction = exports.AddModalToViewAction = exports.SetBreadcrumbsActionsAction = exports.SetBreadcrumbsAction = undefined;

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redux = require('../../core/redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SetBreadcrumbsAction = exports.SetBreadcrumbsAction = function (_Action) {
    (0, _inherits3.default)(SetBreadcrumbsAction, _Action);

    function SetBreadcrumbsAction() {
        (0, _classCallCheck3.default)(this, SetBreadcrumbsAction);
        return (0, _possibleConstructorReturn3.default)(this, (SetBreadcrumbsAction.__proto__ || (0, _getPrototypeOf2.default)(SetBreadcrumbsAction)).apply(this, arguments));
    }

    return SetBreadcrumbsAction;
}(_redux.Action);

var SetBreadcrumbsActionsAction = exports.SetBreadcrumbsActionsAction = function (_Action2) {
    (0, _inherits3.default)(SetBreadcrumbsActionsAction, _Action2);

    function SetBreadcrumbsActionsAction() {
        (0, _classCallCheck3.default)(this, SetBreadcrumbsActionsAction);
        return (0, _possibleConstructorReturn3.default)(this, (SetBreadcrumbsActionsAction.__proto__ || (0, _getPrototypeOf2.default)(SetBreadcrumbsActionsAction)).apply(this, arguments));
    }

    return SetBreadcrumbsActionsAction;
}(_redux.Action);

var AddModalToViewAction = exports.AddModalToViewAction = function (_Action3) {
    (0, _inherits3.default)(AddModalToViewAction, _Action3);

    function AddModalToViewAction() {
        (0, _classCallCheck3.default)(this, AddModalToViewAction);
        return (0, _possibleConstructorReturn3.default)(this, (AddModalToViewAction.__proto__ || (0, _getPrototypeOf2.default)(AddModalToViewAction)).apply(this, arguments));
    }

    return AddModalToViewAction;
}(_redux.Action);

var RemoveModalFromViewAction = exports.RemoveModalFromViewAction = function (_ProxyAction) {
    (0, _inherits3.default)(RemoveModalFromViewAction, _ProxyAction);

    function RemoveModalFromViewAction() {
        var _ref;

        var _temp, _this4, _ret;

        (0, _classCallCheck3.default)(this, RemoveModalFromViewAction);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this4 = (0, _possibleConstructorReturn3.default)(this, (_ref = RemoveModalFromViewAction.__proto__ || (0, _getPrototypeOf2.default)(RemoveModalFromViewAction)).call.apply(_ref, [this].concat(args))), _this4), _this4.proxyClass = 'AddModalToViewAction', _temp), (0, _possibleConstructorReturn3.default)(_this4, _ret);
    }

    (0, _createClass3.default)(RemoveModalFromViewAction, [{
        key: 'proxyNormalize',
        value: function proxyNormalize(state, payload) {
            return null;
        }
    }]);
    return RemoveModalFromViewAction;
}(_redux.ProxyAction);

var UserLogoutAction = exports.UserLogoutAction = function (_Action4) {
    (0, _inherits3.default)(UserLogoutAction, _Action4);

    function UserLogoutAction() {
        (0, _classCallCheck3.default)(this, UserLogoutAction);
        return (0, _possibleConstructorReturn3.default)(this, (UserLogoutAction.__proto__ || (0, _getPrototypeOf2.default)(UserLogoutAction)).apply(this, arguments));
    }

    return UserLogoutAction;
}(_redux.Action);

var UserLoginAction = exports.UserLoginAction = function (_ApiAction) {
    (0, _inherits3.default)(UserLoginAction, _ApiAction);

    function UserLoginAction() {
        var _ref2;

        var _temp2, _this6, _ret2;

        (0, _classCallCheck3.default)(this, UserLoginAction);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this6 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = UserLoginAction.__proto__ || (0, _getPrototypeOf2.default)(UserLoginAction)).call.apply(_ref2, [this].concat(args))), _this6), _this6.successActions = ['LoadPageInfoAction'], _temp2), (0, _possibleConstructorReturn3.default)(_this6, _ret2);
    }

    (0, _createClass3.default)(UserLoginAction, [{
        key: 'loadRequest',
        value: function loadRequest(payload) {
            return this.util.query(this.configuration.api.urls.login, payload);
        }
    }]);
    return UserLoginAction;
}(_redux.ApiAction);

var SetCurrentSearchValueAction = exports.SetCurrentSearchValueAction = function (_Action5) {
    (0, _inherits3.default)(SetCurrentSearchValueAction, _Action5);

    function SetCurrentSearchValueAction() {
        (0, _classCallCheck3.default)(this, SetCurrentSearchValueAction);
        return (0, _possibleConstructorReturn3.default)(this, (SetCurrentSearchValueAction.__proto__ || (0, _getPrototypeOf2.default)(SetCurrentSearchValueAction)).apply(this, arguments));
    }

    return SetCurrentSearchValueAction;
}(_redux.Action);

var SetCurrentPageNoAction = exports.SetCurrentPageNoAction = function (_Action6) {
    (0, _inherits3.default)(SetCurrentPageNoAction, _Action6);

    function SetCurrentPageNoAction() {
        (0, _classCallCheck3.default)(this, SetCurrentPageNoAction);
        return (0, _possibleConstructorReturn3.default)(this, (SetCurrentPageNoAction.__proto__ || (0, _getPrototypeOf2.default)(SetCurrentPageNoAction)).apply(this, arguments));
    }

    return SetCurrentPageNoAction;
}(_redux.Action);

var SetCurrentPageSizeAction = exports.SetCurrentPageSizeAction = function (_Action7) {
    (0, _inherits3.default)(SetCurrentPageSizeAction, _Action7);

    function SetCurrentPageSizeAction() {
        (0, _classCallCheck3.default)(this, SetCurrentPageSizeAction);
        return (0, _possibleConstructorReturn3.default)(this, (SetCurrentPageSizeAction.__proto__ || (0, _getPrototypeOf2.default)(SetCurrentPageSizeAction)).apply(this, arguments));
    }

    return SetCurrentPageSizeAction;
}(_redux.Action);

var ToggleSidebarLeftAction = exports.ToggleSidebarLeftAction = function (_Action8) {
    (0, _inherits3.default)(ToggleSidebarLeftAction, _Action8);

    function ToggleSidebarLeftAction() {
        (0, _classCallCheck3.default)(this, ToggleSidebarLeftAction);
        return (0, _possibleConstructorReturn3.default)(this, (ToggleSidebarLeftAction.__proto__ || (0, _getPrototypeOf2.default)(ToggleSidebarLeftAction)).apply(this, arguments));
    }

    return ToggleSidebarLeftAction;
}(_redux.Action);

var ToggleSidebarRightAction = exports.ToggleSidebarRightAction = function (_Action9) {
    (0, _inherits3.default)(ToggleSidebarRightAction, _Action9);

    function ToggleSidebarRightAction() {
        (0, _classCallCheck3.default)(this, ToggleSidebarRightAction);
        return (0, _possibleConstructorReturn3.default)(this, (ToggleSidebarRightAction.__proto__ || (0, _getPrototypeOf2.default)(ToggleSidebarRightAction)).apply(this, arguments));
    }

    return ToggleSidebarRightAction;
}(_redux.Action);

var LoadPageInfoAction = exports.LoadPageInfoAction = function (_ApiAction2) {
    (0, _inherits3.default)(LoadPageInfoAction, _ApiAction2);

    function LoadPageInfoAction() {
        (0, _classCallCheck3.default)(this, LoadPageInfoAction);
        return (0, _possibleConstructorReturn3.default)(this, (LoadPageInfoAction.__proto__ || (0, _getPrototypeOf2.default)(LoadPageInfoAction)).apply(this, arguments));
    }

    (0, _createClass3.default)(LoadPageInfoAction, [{
        key: 'loadRequest',
        value: function loadRequest(payload) {
            return this.util.query(this.util.user.isLogged ? this.configuration.api.urls.pageInfoLogged : this.configuration.api.urls.pageInfo);
        }
    }]);
    return LoadPageInfoAction;
}(_redux.ApiAction);

},{"../../core/redux":218,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17}],199:[function(require,module,exports){
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

var _get3 = require('babel-runtime/helpers/get');

var _get4 = _interopRequireDefault(_get3);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redux = require('../../core/redux');

var _Action = require('./Action');

var actions = _interopRequireWildcard(_Action);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Connect = function (_CoreConnect) {
    (0, _inherits3.default)(Connect, _CoreConnect);

    function Connect() {
        (0, _classCallCheck3.default)(this, Connect);
        return (0, _possibleConstructorReturn3.default)(this, (Connect.__proto__ || (0, _getPrototypeOf2.default)(Connect)).apply(this, arguments));
    }

    (0, _createClass3.default)(Connect, [{
        key: 'getActions',
        value: function getActions(dispatch, ownProps) {
            var _get2;

            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = arguments[_key];
            }

            return this.util.assign({}, (_get2 = (0, _get4.default)(Connect.prototype.__proto__ || (0, _getPrototypeOf2.default)(Connect.prototype), 'getActions', this)).call.apply(_get2, [this, dispatch, ownProps].concat(args)), actions);
        }
    }]);
    return Connect;
}(_redux.Connect);

exports.default = Connect;

},{"../../core/redux":218,"./Action":198,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/get":15,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17}],200:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApiSuccessLoadPageInfoActionReducer = exports.ToggleSidebarRightActionReducer = exports.ToggleSidebarLeftActionReducer = exports.SetCurrentPageSizeActionReducer = exports.SetCurrentPageNoActionReducer = exports.SetCurrentSearchValueActionReducer = exports.AddModalToViewActionReducer = exports.ApiSuccessUserLoginActionReducer = exports.UserLogoutActionReducer = exports.SetBreadcrumbsActionActionsReducer = exports.SetBreadcrumbsActionReducer = undefined;

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

var _redux = require('../../core/redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SetBreadcrumbsActionReducer = exports.SetBreadcrumbsActionReducer = function (_Reducer) {
    (0, _inherits3.default)(SetBreadcrumbsActionReducer, _Reducer);

    function SetBreadcrumbsActionReducer() {
        (0, _classCallCheck3.default)(this, SetBreadcrumbsActionReducer);
        return (0, _possibleConstructorReturn3.default)(this, (SetBreadcrumbsActionReducer.__proto__ || (0, _getPrototypeOf2.default)(SetBreadcrumbsActionReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(SetBreadcrumbsActionReducer, [{
        key: 'defaultValue',
        get: function get() {
            return [];
        }
    }, {
        key: 'fieldName',
        get: function get() {
            return 'breadcrumbs';
        }
    }]);
    return SetBreadcrumbsActionReducer;
}(_redux.Reducer);

var SetBreadcrumbsActionActionsReducer = exports.SetBreadcrumbsActionActionsReducer = function (_Reducer2) {
    (0, _inherits3.default)(SetBreadcrumbsActionActionsReducer, _Reducer2);

    function SetBreadcrumbsActionActionsReducer() {
        (0, _classCallCheck3.default)(this, SetBreadcrumbsActionActionsReducer);
        return (0, _possibleConstructorReturn3.default)(this, (SetBreadcrumbsActionActionsReducer.__proto__ || (0, _getPrototypeOf2.default)(SetBreadcrumbsActionActionsReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(SetBreadcrumbsActionActionsReducer, [{
        key: 'defaultValue',
        get: function get() {
            return [];
        }
    }, {
        key: 'fieldName',
        get: function get() {
            return 'breadcrumbsActions';
        }
    }]);
    return SetBreadcrumbsActionActionsReducer;
}(_redux.Reducer);

var UserLogoutActionReducer = exports.UserLogoutActionReducer = function (_CookieReducer) {
    (0, _inherits3.default)(UserLogoutActionReducer, _CookieReducer);

    function UserLogoutActionReducer() {
        (0, _classCallCheck3.default)(this, UserLogoutActionReducer);
        return (0, _possibleConstructorReturn3.default)(this, (UserLogoutActionReducer.__proto__ || (0, _getPrototypeOf2.default)(UserLogoutActionReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(UserLogoutActionReducer, [{
        key: 'setCookie',
        value: function setCookie() {
            this.util.user.unload();
        }
    }, {
        key: 'defaultValue',
        get: function get() {
            return null;
        }
    }, {
        key: 'fieldName',
        get: function get() {
            return 'user';
        }
    }]);
    return UserLogoutActionReducer;
}(_redux.CookieReducer);

var ApiSuccessUserLoginActionReducer = exports.ApiSuccessUserLoginActionReducer = function (_CookieReducer2) {
    (0, _inherits3.default)(ApiSuccessUserLoginActionReducer, _CookieReducer2);

    function ApiSuccessUserLoginActionReducer() {
        (0, _classCallCheck3.default)(this, ApiSuccessUserLoginActionReducer);
        return (0, _possibleConstructorReturn3.default)(this, (ApiSuccessUserLoginActionReducer.__proto__ || (0, _getPrototypeOf2.default)(ApiSuccessUserLoginActionReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(ApiSuccessUserLoginActionReducer, [{
        key: 'setCookie',
        value: function setCookie() {
            this.util.user.load(this.__value[this.fieldName]);
        }
    }, {
        key: 'fieldName',
        get: function get() {
            return 'user';
        }
    }]);
    return ApiSuccessUserLoginActionReducer;
}(_redux.CookieReducer);

var AddModalToViewActionReducer = exports.AddModalToViewActionReducer = function (_Reducer3) {
    (0, _inherits3.default)(AddModalToViewActionReducer, _Reducer3);

    function AddModalToViewActionReducer() {
        (0, _classCallCheck3.default)(this, AddModalToViewActionReducer);
        return (0, _possibleConstructorReturn3.default)(this, (AddModalToViewActionReducer.__proto__ || (0, _getPrototypeOf2.default)(AddModalToViewActionReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(AddModalToViewActionReducer, [{
        key: 'fieldName',
        get: function get() {
            return 'modal';
        }
    }]);
    return AddModalToViewActionReducer;
}(_redux.Reducer);

var SetCurrentSearchValueActionReducer = exports.SetCurrentSearchValueActionReducer = function (_ConfigReducer) {
    (0, _inherits3.default)(SetCurrentSearchValueActionReducer, _ConfigReducer);

    function SetCurrentSearchValueActionReducer() {
        (0, _classCallCheck3.default)(this, SetCurrentSearchValueActionReducer);
        return (0, _possibleConstructorReturn3.default)(this, (SetCurrentSearchValueActionReducer.__proto__ || (0, _getPrototypeOf2.default)(SetCurrentSearchValueActionReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(SetCurrentSearchValueActionReducer, [{
        key: 'fieldName',
        get: function get() {
            return 'currentSearchValue';
        }
    }]);
    return SetCurrentSearchValueActionReducer;
}(_redux.ConfigReducer);

var SetCurrentPageNoActionReducer = exports.SetCurrentPageNoActionReducer = function (_ConfigReducer2) {
    (0, _inherits3.default)(SetCurrentPageNoActionReducer, _ConfigReducer2);

    function SetCurrentPageNoActionReducer() {
        (0, _classCallCheck3.default)(this, SetCurrentPageNoActionReducer);
        return (0, _possibleConstructorReturn3.default)(this, (SetCurrentPageNoActionReducer.__proto__ || (0, _getPrototypeOf2.default)(SetCurrentPageNoActionReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(SetCurrentPageNoActionReducer, [{
        key: 'fieldName',
        get: function get() {
            return 'currentPageNo';
        }
    }]);
    return SetCurrentPageNoActionReducer;
}(_redux.ConfigReducer);

var SetCurrentPageSizeActionReducer = exports.SetCurrentPageSizeActionReducer = function (_ConfigReducer3) {
    (0, _inherits3.default)(SetCurrentPageSizeActionReducer, _ConfigReducer3);

    function SetCurrentPageSizeActionReducer() {
        (0, _classCallCheck3.default)(this, SetCurrentPageSizeActionReducer);
        return (0, _possibleConstructorReturn3.default)(this, (SetCurrentPageSizeActionReducer.__proto__ || (0, _getPrototypeOf2.default)(SetCurrentPageSizeActionReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(SetCurrentPageSizeActionReducer, [{
        key: 'fieldName',
        get: function get() {
            return 'currentPageSize';
        }
    }]);
    return SetCurrentPageSizeActionReducer;
}(_redux.ConfigReducer);

var ToggleSidebarLeftActionReducer = exports.ToggleSidebarLeftActionReducer = function (_FalseReducer) {
    (0, _inherits3.default)(ToggleSidebarLeftActionReducer, _FalseReducer);

    function ToggleSidebarLeftActionReducer() {
        (0, _classCallCheck3.default)(this, ToggleSidebarLeftActionReducer);
        return (0, _possibleConstructorReturn3.default)(this, (ToggleSidebarLeftActionReducer.__proto__ || (0, _getPrototypeOf2.default)(ToggleSidebarLeftActionReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(ToggleSidebarLeftActionReducer, [{
        key: 'fieldName',
        get: function get() {
            return 'hideSidebarLeft';
        }
    }]);
    return ToggleSidebarLeftActionReducer;
}(_redux.FalseReducer);

var ToggleSidebarRightActionReducer = exports.ToggleSidebarRightActionReducer = function (_TrueReducer) {
    (0, _inherits3.default)(ToggleSidebarRightActionReducer, _TrueReducer);

    function ToggleSidebarRightActionReducer() {
        (0, _classCallCheck3.default)(this, ToggleSidebarRightActionReducer);
        return (0, _possibleConstructorReturn3.default)(this, (ToggleSidebarRightActionReducer.__proto__ || (0, _getPrototypeOf2.default)(ToggleSidebarRightActionReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(ToggleSidebarRightActionReducer, [{
        key: 'fieldName',
        get: function get() {
            return 'hideSidebarRight';
        }
    }]);
    return ToggleSidebarRightActionReducer;
}(_redux.TrueReducer);

var ApiSuccessLoadPageInfoActionReducer = exports.ApiSuccessLoadPageInfoActionReducer = function (_Reducer4) {
    (0, _inherits3.default)(ApiSuccessLoadPageInfoActionReducer, _Reducer4);

    function ApiSuccessLoadPageInfoActionReducer() {
        (0, _classCallCheck3.default)(this, ApiSuccessLoadPageInfoActionReducer);
        return (0, _possibleConstructorReturn3.default)(this, (ApiSuccessLoadPageInfoActionReducer.__proto__ || (0, _getPrototypeOf2.default)(ApiSuccessLoadPageInfoActionReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(ApiSuccessLoadPageInfoActionReducer, [{
        key: 'normalize',
        value: function normalize(action) {
            return action.data.body;
        }
    }, {
        key: 'fieldName',
        get: function get() {
            return 'pageInfo';
        }
    }, {
        key: 'defaultValue',
        get: function get() {
            return { app: '', menus: [] };
        }
    }]);
    return ApiSuccessLoadPageInfoActionReducer;
}(_redux.Reducer);

},{"../../core/redux":218,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17}],201:[function(require,module,exports){
arguments[4][163][0].apply(exports,arguments)
},{"./Connect":199,"dup":163}],202:[function(require,module,exports){
'use strict';

exports.onRouteEntered = require('./onRouteEntered').default;
exports.onRouteChanged = require('./onRouteChanged').default;

},{"./onRouteChanged":203,"./onRouteEntered":204}],203:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (prev, next) {
    _core.cookie.value('route_changed', { prev: prev, next: next });
    dispatchEvent(new CustomEvent('route_changed', { detail: { prev: prev, next: next } }));
};

var _core = require('../../core');

},{"../../core":210}],204:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (route, replace) {
    _core.cookie.value('route_entered', { route: route, replace: replace });
    dispatchEvent(new CustomEvent('route_entered', { detail: { route: route, replace: replace } }));
};

var _core = require('../../core');

},{"../../core":210}],205:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Config = exports.configuration = exports.WINDOW = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WINDOW = exports.WINDOW = {
    configuration: {
        env: 'mock',
        showDevTool: false,
        getEnv: function getEnv() {
            return;
            window != undefined && window.configuration && window.configuration.env ? window.configuration.env : this.env;
        },
        isDebug: function isDebug() {
            var env = this.getEnv();
            return env ? env == 'mock' || env == 'dev' : true;
        },
        isMock: function isMock() {
            return this.getEnv() == 'mock';
        }
    }
};
var configuration = exports.configuration = WINDOW.configuration;

var Config = exports.Config = function () {
    function Config() {
        (0, _classCallCheck3.default)(this, Config);
        this.configuration = {};

        for (var i = 0; i < arguments.length; i++) {
            var config = arguments[i];
            _util2.default.assign(WINDOW.configuration, config);
        }
        this.configuration = WINDOW.configuration;
    }

    (0, _createClass3.default)(Config, [{
        key: 'all',
        value: function all() {
            // if (this.configuration.isDebug()) console.log(this.configuration)
            return this.configuration;
        }
    }]);
    return Config;
}();

},{"./util":232,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],206:[function(require,module,exports){
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

},{"react":"react","redux-devtools":"redux-devtools","redux-devtools-dock-monitor":"redux-devtools-dock-monitor","redux-devtools-log-monitor":"redux-devtools-log-monitor"}],207:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _when = require('when');

var _when2 = _interopRequireDefault(_when);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _syncRequest = require('sync-request');

var _syncRequest2 = _interopRequireDefault(_syncRequest);

var _Config = require('./Config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST = function () {
    (0, _createClass3.default)(REQUEST, [{
        key: 'getOptions',
        value: function getOptions() {
            return this.__options;
        }
    }, {
        key: 'defaultHeaders',
        get: function get() {
            return {};
        }
    }, {
        key: 'payload',
        get: function get() {
            return this.__options.data;
        }
    }]);

    function REQUEST(url, method) {
        (0, _classCallCheck3.default)(this, REQUEST);

        _initialiseProps.call(this);

        method = method ? method.toLowerCase() : 'get';
        this.__options = { url: url, method: method };
        this.headers({});
    }

    return REQUEST;
}();

var _initialiseProps = function _initialiseProps() {
    var _this = this;

    this.execute = function () {
        return _this.exe = (0, _when2.default)((0, _axios2.default)(_this.__options));
    };

    this.option = function (n, v) {
        _this.__options[n] = v;
        return _this;
    };

    this.headers = function (headers) {
        return _this.option('headers', (0, _objectAssign2.default)(_this.defaultHeaders, headers));
    };

    this.url = function (url) {
        return _this.option('url', url);
    };

    this.data = function (data) {
        _this.option('data', data);
        if (_this.__options.method == 'get') {
            var url = _this.__options.url;
            _this.option('url', _this.buildUrl(url, _this.buildQuery(data)));
        }
        return _this;
    };

    this.buildUrl = function (url, query) {
        return url.indexOf('?') >= 0 ? url + '&' + query : url + '?' + query;
    };

    this.buildQuery = function (json) {
        return json ? (0, _keys2.default)(json).map(function (k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(json[k] ? json[k] : '');
        }).join('&') : '';
    };

    this.__before = [];
    this.__after = [];
    this.__success = [];
    this.__failure = [];

    this.__run = function (payload) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        args.map(function (fn) {
            return fn(payload);
        });
        return _this;
    };

    this.before = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        _this.__before = args;
        return _this;
    };

    this.after = function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        _this.__after = args;
        return _this;
    };

    this.success = function () {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        _this.__success = args;
        return _this;
    };

    this.failure = function () {
        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
        }

        _this.__failure = args;
        return _this;
    };

    this.run = function (sync) {
        return sync ? _this.sync() : _this.async();
    };

    this.async = function () {
        return _this.__run.apply(_this, [undefined].concat((0, _toConsumableArray3.default)(_this.__before))).execute().then(function (res) {
            try {
                _this.__run.apply(_this, [res].concat((0, _toConsumableArray3.default)(_this.__success)));
            } catch (e) {
                console.error('request:success', e);
            }
            return res;
        }).catch(function (res) {
            try {
                _this.__run.apply(_this, [res].concat((0, _toConsumableArray3.default)(_this.__failure)));
            } catch (e) {
                console.error('request:failure', e);
            }
            return res;
        }).then(function (res) {
            try {
                _this.__run.apply(_this, [undefined].concat((0, _toConsumableArray3.default)(_this.__after)));
            } catch (e) {
                console.error('request:after', e);
            }
            return res;
        });
    };

    this.sync = function () {
        var res = (0, _syncRequest2.default)(_this.__options.method, _this.__options.url, (0, _objectAssign2.default)({}, _this.__options, {
            json: _this.__options.data
        }));
        try {
            res.data = JSON.parse(res.getBody('utf8'));
        } catch (e) {
            res.data = null;
        }
        if (res.statusCode < 300) {
            try {
                _this.__run.apply(_this, [res].concat((0, _toConsumableArray3.default)(_this.__success)));
            } catch (e) {
                console.log('request:success', e);
            }
        } else {
            try {
                _this.__run.apply(_this, [res].concat((0, _toConsumableArray3.default)(_this.__failure)));
            } catch (e) {
                console.log('request:failure', e);
            }
        }
        try {
            _this.__run.apply(_this, [undefined].concat((0, _toConsumableArray3.default)(_this.__after)));
        } catch (e) {
            console.log('request:after', e);
        }
        return res;
    };
};

exports.default = REQUEST;

},{"./Config":205,"axios":"axios","babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/toConsumableArray":18,"object-assign":"object-assign","sync-request":142,"when":"when"}],208:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _cookie = require('./cookie');

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserProfile = function () {
    function UserProfile() {
        var _this = this;

        (0, _classCallCheck3.default)(this, UserProfile);

        this.loadFromCookie = function () {
            _this.data = _cookie2.default.read('user');
        };

        this.saveToCookie = function () {
            _cookie2.default.value('user', _this.data);
        };

        this.load = function (data) {
            if (!data) _this.unload();else {
                _this.data = data;
                _this.saveToCookie();
            }
        };

        this.unload = function () {
            _cookie2.default.remove('user');
            _this.data = null;
        };

        this.update = function (field, value) {
            _this.data[field] = value;
            _this.saveToCookie();
        };

        this.loadFromCookie();
    }

    (0, _createClass3.default)(UserProfile, [{
        key: 'isLogged',
        get: function get() {
            return this.data ? true : false;
        }
    }, {
        key: 'email',
        get: function get() {
            return this.data.email;
        },
        set: function set(v) {
            this.update('email', v);
        }
    }, {
        key: 'firstName',
        get: function get() {
            return this.data.firstName;
        },
        set: function set(v) {
            this.update('firstName', v);
        }
    }, {
        key: 'lastName',
        get: function get() {
            return this.data.lastName;
        },
        set: function set(v) {
            this.update('lastName', v);
        }
    }, {
        key: 'displayName',
        get: function get() {
            return this.data.displayName;
        },
        set: function set(v) {
            this.save('displayName', v);
        }
    }, {
        key: 'occupation',
        get: function get() {
            return this.data.occupation;
        },
        set: function set(v) {
            this.save('occupation', v);
        }
    }, {
        key: 'department',
        get: function get() {
            return this.data.department;
        },
        set: function set(v) {
            this.save('department', v);
        }
    }, {
        key: 'lastLogin',
        get: function get() {
            return this.data.lastLogin;
        },
        set: function set(v) {
            this.save('lastLogin', v);
        }
    }]);
    return UserProfile;
}();

exports.default = UserProfile;

},{"./cookie":209,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],209:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cookie = function Cookie() {
    var _this = this;

    (0, _classCallCheck3.default)(this, Cookie);

    this.value = function (name, value, opts) {
        if (value === undefined) {
            return _reactCookie2.default.load(name);
        } else if (value === null) {
            _reactCookie2.default.remove(name, (0, _objectAssign2.default)({ path: '/' }, opts));
            dispatchEvent(new CustomEvent('cookie_deleted', { detail: { name: name } }));
        } else {
            _reactCookie2.default.save(name, value, (0, _objectAssign2.default)({ path: '/' }, opts));
            dispatchEvent(new CustomEvent('cookie_updated', { detail: { name: name, value: value } }));
        }
    };

    this.remove = function (name, opts) {
        return _this.value(name, null, opts);
    };

    this.read = function (name) {
        return _this.value(name);
    };
};

exports.default = new Cookie();

},{"babel-runtime/helpers/classCallCheck":11,"object-assign":"object-assign","react-cookie":131}],210:[function(require,module,exports){
'use strict';

exports.configuration = require('./Config').WINDOW.configuration;
exports.cookie = require('./cookie').default;
exports.REQUEST = require('./Request').default;
exports.UserProfile = require('./UserProfile').default;
exports.user = require('./user').default;
exports.util = require('./util').default;
exports.DevTools = require('./DevTools').default;

},{"./Config":205,"./DevTools":206,"./Request":207,"./UserProfile":208,"./cookie":209,"./user":231,"./util":232}],211:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Connect = function () {
    function Connect(klass) {
        (0, _classCallCheck3.default)(this, Connect);

        this.__klass = klass;
        this.getDefaultProps = this.getDefaultProps.bind(this);
        this.getActions = this.getActions.bind(this);
    }

    (0, _createClass3.default)(Connect, [{
        key: 'getDefaultProps',
        value: function getDefaultProps() {
            return {};
        }
    }, {
        key: 'getActions',
        value: function getActions(dispatch, ownProps) {
            return {};
        }
    }, {
        key: 'registerActions',
        value: function registerActions(dispatch, ownProps) {
            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = arguments[_key];
            }

            var actions = this.getActions.apply(this, [dispatch, ownProps].concat(args));
            (0, _keys2.default)(actions).map(function (k) {
                return _actions.Action.put.apply(_actions.Action, [actions[k], dispatch, ownProps].concat(args));
            });
        }
    }, {
        key: 'util',
        get: function get() {
            return _util2.default;
        }
    }, {
        key: 'mapStateToProps',
        get: function get() {
            var _this = this;

            return function (state, ownProps) {
                var newProps = _this.util.assign({}, _this.getDefaultProps);
                if (state) (0, _keys2.default)(state).map(function (k) {
                    return _this.util.assign(newProps, state[k]);
                });
                return newProps;
            };
        }
    }, {
        key: 'mapDispatchToProps',
        get: function get() {
            var _this2 = this;

            return function (dispatch, ownProps) {
                for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                    args[_key2 - 2] = arguments[_key2];
                }

                _this2.registerActions.apply(_this2, [dispatch, ownProps].concat(args));
                return _actions.Action.actions();
            };
        }
    }, {
        key: 'klass',
        get: function get() {
            return (0, _reactRedux.connect)(this.mapStateToProps, this.util.assign(this.mapDispatchToProps, {
                dispatch: function dispatch(_dispatch, ownProps) {
                    return function (payload) {
                        _dispatch.apply(undefined, arguments);
                    };
                }
            }))(this.__klass);
        }
    }], [{
        key: 'createStore',
        value: function (_createStore) {
            function createStore(_x) {
                return _createStore.apply(this, arguments);
            }

            createStore.toString = function () {
                return _createStore.toString();
            };

            return createStore;
        }(function (reducer) {
            return createStore(combineReducers(reducer), applyMiddleware(_reduxThunk2.default));
        })
    }]);
    return Connect;
}();

exports.default = Connect;

},{"../util":232,"./actions":217,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"react-redux":"react-redux","redux-thunk":"redux-thunk"}],212:[function(require,module,exports){
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

var store = null;
var getStore = exports.getStore = function getStore(reducers, initialState) {
    if (_.util.isEmpty(store) && reducers) {
        var transformers = {};
        if (typeof reducers == 'function') {
            var reducer = new reducers();
            transformers[reducers.name] = reducer.transform.bind(reducer);
        } else {
            for (var j in reducers) {
                if (typeof reducers[j] == 'function') {
                    var _reducer = new reducers[j]();
                    transformers[reducers[j].name] = _reducer.transform.bind(_reducer);
                }
            }
        }
        store = (0, _redux.createStore)((0, _redux.combineReducers)(transformers), initialState, _middlewares2.default);
        store.runSaga = _middlewares.runSaga;
        store.close = function () {
            return store.dispatch(_reduxSaga.END);
        };
    }
    return store;
};

exports.default = store;

},{"..":210,"./middlewares":219,"redux":"redux","redux-saga":"redux-saga"}],213:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ = require('../..');

var _Store = require('../Store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __dispatcher = null;
var __actions = {};

function _normalize(name, payload) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
    }

    if (!payload || !payload.hasOwnProperty('data')) payload = _.util.assign({}, { data: payload });
    return _.util.assign({ extra: args }, payload, { type: name });
}
function _normalizeSearch(name, results) {
    return { search: results, type: name };
}

var Action = function () {
    function Action() {
        (0, _classCallCheck3.default)(this, Action);
        this.dispatchable = true;
        this.debug = false;
    }

    (0, _createClass3.default)(Action, [{
        key: 'preProcess',
        value: function preProcess(payload) {}
    }, {
        key: 'beforeDispatch',
        value: function beforeDispatch(payload) {}
    }, {
        key: 'normalize',
        value: function normalize(payload) {
            if (!payload || !payload.hasOwnProperty('data')) payload = this.util.assign({}, { data: payload });

            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            return _normalize.apply(undefined, [this.name, payload].concat(args));
        }
    }, {
        key: 'normalizeSearch',
        value: function normalizeSearch(results) {
            return _normalizeSearch.apply(undefined, [this.name].concat(Array.prototype.slice.call(arguments)));
        }
    }, {
        key: 'getState',
        value: function getState(name) {
            return this.store.getState()[name + 'Reducer'];
        }
    }, {
        key: 'getStates',
        value: function getStates() {
            var _this = this;

            var states = this.store.getState();
            var newStates = {};
            (0, _keys2.default)(states).map(function (k) {
                return _this.util.assign(newStates, states[k]);
            });
            return newStates;
        }
    }, {
        key: 'debugFn',
        value: function debugFn(payload) {}
    }, {
        key: 'dispatch',
        value: function dispatch(payload) {
            for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                args[_key3 - 1] = arguments[_key3];
            }

            this.dispatcher.apply(this, [payload].concat(args));
        }
    }, {
        key: 'getFn',
        value: function getFn(dispatch, ownProps) {
            var me = this;
            if (!__dispatcher) __dispatcher = dispatch;
            if (!this.__fn) this.__fn = function (payload) {
                for (var _len4 = arguments.length, argus = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                    argus[_key4 - 1] = arguments[_key4];
                }

                me.preProcess.apply(me, [payload].concat(argus));
                if (me.beforeDispatch.apply(me, [payload].concat(argus)) !== false) {
                    if (me.dispatchable) me.dispatch(me.normalize.apply(me, [payload].concat(argus)));
                }
                if (me.debug) me.debugFn.apply(me, [payload].concat(argus));
            }.bind(this);
            return this.__fn;
        }
    }, {
        key: 'name',
        get: function get() {
            return this.constructor.name;
        }
    }, {
        key: 'configuration',
        get: function get() {
            return _.configuration;
        }
    }, {
        key: 'util',
        get: function get() {
            return _.util;
        }
    }, {
        key: 'store',
        get: function get() {
            return (0, _Store.getStore)();
        }
    }, {
        key: 'state',
        get: function get() {
            return this.getState(this.name);
        }
    }, {
        key: 'dispatcher',
        get: function get() {
            return __dispatcher;
        }
    }, {
        key: 'fn',
        get: function get() {
            return this.__fn;
        }
    }], [{
        key: 'actions',
        value: function actions() {
            var rs = {};
            (0, _keys2.default)(__actions).map(function (k) {
                return rs[k] = __actions[k].fn;
            });
            return rs;
        }
    }, {
        key: 'getName',
        value: function getName(klass) {
            if (klass) return typeof klass == 'string' ? klass : klass.name;
        }
    }, {
        key: 'execute',
        value: function execute(klass, payload) {
            var name = Action.getName(klass);
            var action = Action.fn(name);

            for (var _len5 = arguments.length, args = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
                args[_key5 - 2] = arguments[_key5];
            }

            if (action) action.apply(undefined, [payload].concat(args));else if (__dispatcher) {
                __dispatcher(_normalize.apply(undefined, [name + 'Reducer', payload].concat(args)));
            }
        }
    }, {
        key: 'action',
        value: function action(klass) {
            var name = Action.getName(klass);
            if ((0, _keys2.default)(__actions).indexOf('execute' + name) >= 0) {
                return __actions['execute' + name];
            }
            return null;
        }
    }, {
        key: 'fn',
        value: function fn(klass) {
            var action = Action.action(klass);
            if (action) return action.fn;
        }
    }, {
        key: 'instance',
        value: function instance(klass) {
            var action = Action.action(klass);
            if (action) return action.instance;
        }
    }, {
        key: 'put',
        value: function put(klass, dispatch, ownProps) {
            if (!__dispatcher) __dispatcher = dispatch;
            var name = Action.getName(klass);
            if (name) {
                var action = Action.action(name);
                if (!action) {
                    var instance = new klass();
                    if (instance.isApiAction) instance.runSaga();

                    for (var _len6 = arguments.length, args = Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
                        args[_key6 - 3] = arguments[_key6];
                    }

                    __actions['execute' + name] = {
                        instance: instance,
                        fn: instance.getFn.apply(instance, [__dispatcher, ownProps].concat(args))
                    };
                }
            }
        }
    }]);
    return Action;
}();

exports.default = Action;

},{"../..":210,"../Store":212,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],214:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _reduxSaga = require('redux-saga');

var _Action2 = require('./Action');

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApiAction = function (_Action) {
    (0, _inherits3.default)(ApiAction, _Action);

    function ApiAction() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ApiAction);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ApiAction.__proto__ || (0, _getPrototypeOf2.default)(ApiAction)).call.apply(_ref, [this].concat(args))), _this), _this.request = null, _this.successActions = null, _this.failureActions = null, _this.saga = _regenerator2.default.mark(function _callee2(me) {
            return _regenerator2.default.wrap(function _callee2$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return (0, _reduxSaga.takeLatest)(me.name, _regenerator2.default.mark(function _callee(action) {
                                var _marked, cache, request, name, successActions, failureActions, success, failure, res;

                                return _regenerator2.default.wrap(function _callee$(_context3) {
                                    while (1) {
                                        switch (_context3.prev = _context3.next) {
                                            case 0:
                                                failure = function failure(res, request) {
                                                    var actions;
                                                    return _regenerator2.default.wrap(function failure$(_context2) {
                                                        while (1) {
                                                            switch (_context2.prev = _context2.next) {
                                                                case 0:
                                                                    actions = ['ApiFailure' + name].concat(failureActions);

                                                                    actions.map(function (action) {
                                                                        return action ? _Action3.default.execute(action, res, request.payload) : false;
                                                                    });
                                                                    if (me.callback) me.callback(res, request.payload);

                                                                case 3:
                                                                case 'end':
                                                                    return _context2.stop();
                                                            }
                                                        }
                                                    }, _marked[1], this);
                                                };

                                                success = function success(res, request) {
                                                    var actions;
                                                    return _regenerator2.default.wrap(function success$(_context) {
                                                        while (1) {
                                                            switch (_context.prev = _context.next) {
                                                                case 0:
                                                                    actions = ['ApiSuccess' + name].concat(successActions);

                                                                    actions.map(function (action) {
                                                                        return action ? _Action3.default.execute(action, res, request.payload) : false;
                                                                    });
                                                                    if (me.callback) me.callback(res, request.payload);

                                                                case 3:
                                                                case 'end':
                                                                    return _context.stop();
                                                            }
                                                        }
                                                    }, _marked[0], this);
                                                };

                                                _marked = [success, failure].map(_regenerator2.default.mark);
                                                cache = me.cache, request = me.request, name = me.name, successActions = me.successActions, failureActions = me.failureActions;
                                                _context3.next = 6;
                                                return cache ? cache : request.run();

                                            case 6:
                                                res = _context3.sent;

                                                if (!(res.status < 300)) {
                                                    _context3.next = 12;
                                                    break;
                                                }

                                                _context3.next = 10;
                                                return success(res, request);

                                            case 10:
                                                _context3.next = 14;
                                                break;

                                            case 12:
                                                _context3.next = 14;
                                                return failure(res, request);

                                            case 14:
                                            case 'end':
                                                return _context3.stop();
                                        }
                                    }
                                }, _callee, this);
                            }));

                        case 2:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee2, this);
        }), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ApiAction, [{
        key: 'preProcess',
        value: function preProcess(payload) {
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            this.request = this.loadRequest.apply(this, [payload].concat(args));
            this.cache = this.loadCache.apply(this, [payload].concat(args));
            var callback = args[args.length - 1];
            if (typeof callback == 'function') this.callback = callback;
        }
    }, {
        key: 'loadRequest',
        value: function loadRequest(payload) {
            throw this.name + ': No implementation of function loadRequest';
        }
    }, {
        key: 'loadCache',
        value: function loadCache(payload) {
            return undefined;
        }
    }, {
        key: 'shouldCallApi',
        value: function shouldCallApi(payload) {
            return true;
        }
    }, {
        key: 'runSaga',
        value: function runSaga() {
            this.store.runSaga(this.saga, this);
        }
    }, {
        key: 'isApiAction',
        get: function get() {
            return true;
        }
    }, {
        key: 'apiSuccessState',
        get: function get() {
            return this.getState('ApiSuccess' + this.name);
        }
    }]);
    return ApiAction;
}(_Action3.default);

exports.default = ApiAction;

},{"./Action":213,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"babel-runtime/regenerator":110,"redux-saga":"redux-saga"}],215:[function(require,module,exports){
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

var _Action2 = require('./Action');

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProxyAction = function (_Action) {
    (0, _inherits3.default)(ProxyAction, _Action);

    function ProxyAction() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ProxyAction);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProxyAction.__proto__ || (0, _getPrototypeOf2.default)(ProxyAction)).call.apply(_ref, [this].concat(args))), _this), _this.dispatchable = false, _this.proxyClasses = null, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ProxyAction, [{
        key: 'proxyNormalize',
        value: function proxyNormalize(state, payload) {
            return payload;
        }
    }, {
        key: 'beforeDispatch',
        value: function beforeDispatch(payload) {
            var _this2 = this;

            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            [].concat(this.proxyClasses).map(function (klass) {
                var name = _Action3.default.getName(klass);
                _Action3.default.execute.apply(_Action3.default, [name, _this2.proxyNormalize.apply(_this2, [_this2.getState(name), payload].concat(args))].concat(args));
            });
        }
    }]);
    return ProxyAction;
}(_Action3.default);

exports.default = ProxyAction;

},{"./Action":213,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17}],216:[function(require,module,exports){
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

var _ProxyAction2 = require('./ProxyAction');

var _ProxyAction3 = _interopRequireDefault(_ProxyAction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchAction = function (_ProxyAction) {
    (0, _inherits3.default)(SearchAction, _ProxyAction);

    function SearchAction() {
        (0, _classCallCheck3.default)(this, SearchAction);
        return (0, _possibleConstructorReturn3.default)(this, (SearchAction.__proto__ || (0, _getPrototypeOf2.default)(SearchAction)).apply(this, arguments));
    }

    (0, _createClass3.default)(SearchAction, [{
        key: 'proxyNormalize',
        value: function proxyNormalize(state, payload) {
            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = arguments[_key];
            }

            return this.searchFn.apply(this, [state, payload].concat(args));
        }
    }, {
        key: 'searchFn',
        value: function searchFn(state, payload) {
            return state;
        }
    }]);
    return SearchAction;
}(_ProxyAction3.default);

exports.default = SearchAction;

},{"./ProxyAction":215,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17}],217:[function(require,module,exports){
'use strict';

exports.Action = require('./Action').default;
exports.ApiAction = require('./ApiAction').default;
exports.ProxyAction = require('./ProxyAction').default;
exports.SearchAction = require('./SearchAction').default;

},{"./Action":213,"./ApiAction":214,"./ProxyAction":215,"./SearchAction":216}],218:[function(require,module,exports){
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

},{"./Connect":211,"./Store":212,"./actions":217,"./reducers":230}],219:[function(require,module,exports){
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
var runSaga = exports.runSaga = _saga3.default.run;

},{"../..":210,"./logger":220,"./saga":221,"./thunk":222,"redux":"redux"}],220:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxLogger = require('redux-logger');

var logger = (0, _reduxLogger.createLogger)();
exports.default = logger;

},{"redux-logger":"redux-logger"}],221:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saga = (0, _reduxSaga2.default)();
exports.default = saga;

},{"redux-saga":"redux-saga"}],222:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _thunk = _reduxThunk2.default;
exports.default = _thunk;

},{"redux-thunk":"redux-thunk"}],223:[function(require,module,exports){
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

var _Reducer2 = require('./Reducer');

var _Reducer3 = _interopRequireDefault(_Reducer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfigReducer = function (_Reducer) {
    (0, _inherits3.default)(ConfigReducer, _Reducer);

    function ConfigReducer() {
        (0, _classCallCheck3.default)(this, ConfigReducer);
        return (0, _possibleConstructorReturn3.default)(this, (ConfigReducer.__proto__ || (0, _getPrototypeOf2.default)(ConfigReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(ConfigReducer, [{
        key: 'normalize',
        value: function normalize(action) {
            return action.data ? action.data : this.configuration.ui[this.fieldName];
        }
    }, {
        key: 'defaultValue',
        get: function get() {
            return this.configuration.ui[this.fieldName];
        }
    }]);
    return ConfigReducer;
}(_Reducer3.default);

exports.default = ConfigReducer;

},{"./Reducer":228,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17}],224:[function(require,module,exports){
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

var _Reducer2 = require('./Reducer');

var _Reducer3 = _interopRequireDefault(_Reducer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CookieReducer = function (_Reducer) {
  (0, _inherits3.default)(CookieReducer, _Reducer);

  function CookieReducer() {
    (0, _classCallCheck3.default)(this, CookieReducer);
    return (0, _possibleConstructorReturn3.default)(this, (CookieReducer.__proto__ || (0, _getPrototypeOf2.default)(CookieReducer)).apply(this, arguments));
  }

  (0, _createClass3.default)(CookieReducer, [{
    key: 'setCookie',
    value: function setCookie() {
      this.util.cookie.value(this.fieldName, this.__value[this.fieldName]);
    }
  }, {
    key: 'defaultValue',
    get: function get() {
      return this.util.cookie.read(this.fieldName);
    }
  }, {
    key: 'value',
    get: function get() {
      return this.__value;
    },
    set: function set(v) {
      this.__value = v;
      this.setCookie();
    }
  }]);
  return CookieReducer;
}(_Reducer3.default);

exports.default = CookieReducer;

},{"./Reducer":228,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17}],225:[function(require,module,exports){
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

var _Reducer2 = require('./Reducer');

var _Reducer3 = _interopRequireDefault(_Reducer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FalseReducer = function (_Reducer) {
    (0, _inherits3.default)(FalseReducer, _Reducer);

    function FalseReducer() {
        (0, _classCallCheck3.default)(this, FalseReducer);
        return (0, _possibleConstructorReturn3.default)(this, (FalseReducer.__proto__ || (0, _getPrototypeOf2.default)(FalseReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(FalseReducer, [{
        key: 'defaultValue',
        get: function get() {
            return false;
        }
    }]);
    return FalseReducer;
}(_Reducer3.default);

exports.default = FalseReducer;

},{"./Reducer":228,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17}],226:[function(require,module,exports){
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

var _Reducer2 = require('./Reducer');

var _Reducer3 = _interopRequireDefault(_Reducer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListReducer = function (_Reducer) {
    (0, _inherits3.default)(ListReducer, _Reducer);

    function ListReducer() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ListReducer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ListReducer.__proto__ || (0, _getPrototypeOf2.default)(ListReducer)).call.apply(_ref, [this].concat(args))), _this), _this.isList = true, _this.primaryKey = 'id', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ListReducer, [{
        key: 'defaultValue',
        get: function get() {
            return {};
        }
    }, {
        key: 'value',
        get: function get() {
            return this.__value;
        },
        set: function set(v) {
            var value = v[this.fieldName];
            if (value) {
                var id = value[this.primaryKey];
                this.state[this.fieldName][id] = value;
                this.__value = this.util.assign({}, this.state);
            } else {
                this.__value = this.state;
            }
        }
    }]);
    return ListReducer;
}(_Reducer3.default);

exports.default = ListReducer;

},{"./Reducer":228,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17}],227:[function(require,module,exports){
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

var _Reducer2 = require('./Reducer');

var _Reducer3 = _interopRequireDefault(_Reducer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NullReducer = function (_Reducer) {
    (0, _inherits3.default)(NullReducer, _Reducer);

    function NullReducer() {
        (0, _classCallCheck3.default)(this, NullReducer);
        return (0, _possibleConstructorReturn3.default)(this, (NullReducer.__proto__ || (0, _getPrototypeOf2.default)(NullReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(NullReducer, [{
        key: 'normalize',
        value: function normalize(action) {
            return null;
        }
    }, {
        key: 'defaultValue',
        get: function get() {
            return null;
        }
    }]);
    return NullReducer;
}(_Reducer3.default);

exports.default = NullReducer;

},{"./Reducer":228,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17}],228:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ = require('../..');

var _Store = require('../Store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Reducer = function () {
    function Reducer() {
        (0, _classCallCheck3.default)(this, Reducer);
        this.debug = false;
    }

    (0, _createClass3.default)(Reducer, [{
        key: 'transform',
        value: function transform() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultState;
            var action = arguments[1];

            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = arguments[_key];
            }

            return '' + action.type == this.name || action.type + 'Reducer' == this.name || 'Search' + action.type + 'Reducer' == 'Search' + this.name ? this.matchedTransform.apply(this, [state, action].concat(args)) : this.notMatchedTransform.apply(this, [state, action].concat(args));
        }
    }, {
        key: 'normalize',
        value: function normalize(action) {
            return action.data;
        }
    }, {
        key: 'normalizeSearch',
        value: function normalizeSearch(action) {
            return action.search;
        }
    }, {
        key: 'debugFn',
        value: function debugFn(state, action) {
            var _console;

            console.log(this.name);
            console.log('prev-state', state);
            console.log('next-state', this.value);
            console.log('action', action);

            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
            }

            (_console = console).log.apply(_console, ['extra'].concat(args));
        }
    }, {
        key: 'matchedTransform',
        value: function matchedTransform(state, action) {
            this.action = action;
            if (action.hasOwnProperty('data')) this.value = (0, _defineProperty3.default)({}, this.fieldName, this.normalize(action));else if (action.hasOwnProperty('search')) this.value = (0, _defineProperty3.default)({}, 'Search' + this.fieldName + 'Results', this.normalizeSearch(action));

            for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                args[_key3 - 2] = arguments[_key3];
            }

            if (this.debug) this.debugFn.apply(this, [state, action].concat(args));
            return this.util.assign({}, this.defaultState, state, this.value);
        }
    }, {
        key: 'notMatchedTransform',
        value: function notMatchedTransform(state, action) {
            return state;
        }
    }, {
        key: 'name',
        get: function get() {
            return this.constructor.name;
        }
    }, {
        key: 'configuration',
        get: function get() {
            return _.configuration;
        }
    }, {
        key: 'util',
        get: function get() {
            return _.util;
        }
    }, {
        key: 'store',
        get: function get() {
            return (0, _Store.getStore)();
        }
    }, {
        key: 'state',
        get: function get() {
            return this.store.getState()[this.name];
        }
    }, {
        key: 'fieldName',
        get: function get() {
            throw this.name + ': No fieldName';
        }
    }, {
        key: 'defaultState',
        get: function get() {
            var _ref;

            return _ref = {}, (0, _defineProperty3.default)(_ref, this.fieldName, this.defaultValue), (0, _defineProperty3.default)(_ref, 'Search' + this.fieldName + 'Results', null), _ref;
        }
    }, {
        key: 'defaultValue',
        get: function get() {
            return null;
        }
    }]);
    return Reducer;
}();

exports.default = Reducer;

},{"../..":210,"../Store":212,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/defineProperty":13}],229:[function(require,module,exports){
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

var _Reducer2 = require('./Reducer');

var _Reducer3 = _interopRequireDefault(_Reducer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TrueReducer = function (_Reducer) {
    (0, _inherits3.default)(TrueReducer, _Reducer);

    function TrueReducer() {
        (0, _classCallCheck3.default)(this, TrueReducer);
        return (0, _possibleConstructorReturn3.default)(this, (TrueReducer.__proto__ || (0, _getPrototypeOf2.default)(TrueReducer)).apply(this, arguments));
    }

    (0, _createClass3.default)(TrueReducer, [{
        key: 'defaultValue',
        get: function get() {
            return true;
        }
    }]);
    return TrueReducer;
}(_Reducer3.default);

exports.default = TrueReducer;

},{"./Reducer":228,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17}],230:[function(require,module,exports){
'use strict';

exports.Reducer = require('./Reducer').default;
exports.ConfigReducer = require('./ConfigReducer').default;
exports.CookieReducer = require('./CookieReducer').default;
exports.FalseReducer = require('./FalseReducer').default;
exports.TrueReducer = require('./TrueReducer').default;
exports.NullReducer = require('./NullReducer').default;
exports.ListReducer = require('./ListReducer').default;

},{"./ConfigReducer":223,"./CookieReducer":224,"./FalseReducer":225,"./ListReducer":226,"./NullReducer":227,"./Reducer":228,"./TrueReducer":229}],231:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserProfile = require('./UserProfile');

var _UserProfile2 = _interopRequireDefault(_UserProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = new _UserProfile2.default();
exports.default = user;

},{"./UserProfile":208}],232:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

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

var _Request = require('./Request');

var _Request2 = _interopRequireDefault(_Request);

var _cookie = require('./cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_stringFormat2.default.extend(String.prototype);

var Util = function () {
    function Util() {
        var _this = this;

        (0, _classCallCheck3.default)(this, Util);

        this.extractPairs = function (str) {
            var rs = {};
            var pairs = str.split('&');
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                if (pair.indexOf('=') > 0) {
                    pair = pair.split('=');
                    rs[pair[0]] = pair[1];
                } else rs[pair] = true;
            }
            return rs;
        };

        this.getQueryValue = function (name) {
            var url = location.href;
            var name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        };

        this.isEmpty = function (o) {
            return _lodash2.default.isEmpty(o);
        };

        this.isNumber = function (o) {
            return typeof o == 'number' || o && parseFloat(o.toString().replace(/,/g, ''));
        };

        this.numberOf = function (o) {
            return typeof o == 'number' ? o : o && parseFloat(o.toString().replace(/,/g, '')) ? parseFloat(o.toString().replace(/,/g, '')) : 0;
        };

        this.valueOf = function (o, d) {
            return _this.isEmpty(o) ? d : o;
        };

        this.amountOf = function (o) {
            return _this.numberWithCommas(o);
        };

        this.dateOf = function (o) {
            return (0, _moment2.default)(o).format('MMMM Do YYYY');
        };

        this.random = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        this.exclude = function (origin, excludes) {
            var props = {};
            (0, _keys2.default)(origin).map(function (k) {
                if (origin.hasOwnProperty(k) && excludes.indexOf(k) < 0) {
                    _this.assign(props, (0, _defineProperty3.default)({}, k, origin[k]));
                }
            });
            return props;
        };

        this.include = function (origin, includes) {
            var props = {};
            (0, _keys2.default)(origin).map(function (k) {
                if (origin.hasOwnProperty(k) && includes.indexOf(k) >= 0) {
                    _this.assign(props, (0, _defineProperty3.default)({}, k, origin[k]));
                }
            });
            return props;
        };

        this.request = function (url, method, data) {
            return new _Request2.default(url, method).data(data);
        };

        this.query = function (url, data) {
            return _this.request(url, 'GET', data);
        };

        this.post = function (url, data) {
            return _this.request(url, 'POST', data);
        };

        this.update = function (url, data) {
            return _this.request(url, 'PUT', data);
        };

        this.remove = function (url, data) {
            return _this.request(url, 'DELETE', data);
        };

        this.options = function (url, data) {
            return _this.request(url, 'OPTIONS', data);
        };

        this.newTab = function (link) {
            return window.open(link, '_blank');
        };

        this.redirect = function (link) {
            return window.open(link);
        };

        this.addJsScript = function (src, id, innerHTML) {
            return _this.appendTag('script', { src: src }, id, innerHTML);
        };

        this.addCssLink = function (href, id) {
            return _this.addLink(href, { type: 'text/css', rel: 'stylesheet' }, id);
        };

        this.addLink = function (href, props, id) {
            return _this.appendTag('link', (0, _extends3.default)({ href: href }, props), id);
        };

        this.addMeta = function (name, content, id) {
            return _this.appendTag('meta', { name: name, content: content }, id);
        };

        this.appendTag = function (tagName, props, id, innerHTML) {
            if (typeof document == 'undefined' || document.getElementById(id)) return;
            var tags = document.getElementsByTagName(tagName),
                last = tags[tags.length - 1],
                tag = document.createElement(tagName);
            tag.id = id;
            (0, _keys2.default)(props).map(function (k) {
                if (props[k]) tag[k] = props[k];
            });
            if (innerHTML) try {
                tag.innerHTML = innerHTML;
            } catch (e) {}
            last.parentNode.insertBefore(tag, last.nextSibling);
        };
    }

    (0, _createClass3.default)(Util, [{
        key: 'user',
        get: function get() {
            return _user2.default;
        }
    }, {
        key: 'assign',
        get: function get() {
            return _objectAssign2.default;
        }
    }, {
        key: 'format',
        get: function get() {
            return _stringFormat2.default;
        }
    }, {
        key: 'uuid',
        get: function get() {
            return _v2.default;
        }
    }, {
        key: 'lodash',
        get: function get() {
            return _lodash2.default;
        }
    }, {
        key: 'history',
        get: function get() {
            return _reactRouter.browserHistory;
        }
    }, {
        key: 'cookie',
        get: function get() {
            return _cookie2.default;
        }
    }, {
        key: 'hash',
        get: function get() {
            return this.extractPairs((location.hash ? location.hash : '#').slice(1));
        }
    }, {
        key: 'queries',
        get: function get() {
            return this.extractPairs((location.search ? location.search : '?').slice(1));
        }
    }]);
    return Util;
}();

exports.default = new Util();

},{"./Request":207,"./cookie":209,"./user":231,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/defineProperty":13,"babel-runtime/helpers/extends":14,"lodash":"lodash","moment":"moment","object-assign":"object-assign","react-router":"react-router","string-format":"string-format","uuid/v1":146}]},{},[155])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29va2llL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2VsZW1lbnQtY2xhc3MvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsIm5vZGVfbW9kdWxlcy9odHRwLXJlc3BvbnNlLW9iamVjdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pcy1ub2RlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIm5vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwibm9kZV9tb2R1bGVzL3FzL2xpYi9mb3JtYXRzLmpzIiwibm9kZV9tb2R1bGVzL3FzL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9xcy9saWIvcGFyc2UuanMiLCJub2RlX21vZHVsZXMvcXMvbGliL3N0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy9xcy9saWIvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtY29va2llL2J1aWxkL2Nvb2tpZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1kcm9wem9uZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsUG9ydGFsLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2FyaWFBcHBIaWRlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9mb2N1c01hbmFnZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvc2NvcGVUYWIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvdGFiYmFibGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwibm9kZV9tb2R1bGVzL3N5bmMtcmVxdWVzdC9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3RoZW4tcmVxdWVzdC9saWIvaGFuZGxlLXFzLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJzcmMvYXBwcy9hc2QvQXBwbGljYXRpb24uanMiLCJzcmMvYXBwcy9hc2QvVmlld3BvcnQuanMiLCJzcmMvYXBwcy9hc2QvY29uZi9pbmRleC5qcyIsInNyYy9hcHBzL2FzZC9jb25maWcvYmFzZS5qcyIsInNyYy9hcHBzL2FzZC9jb25maWcvaW5kZXguanMiLCJzcmMvYXBwcy9hc2QvY29uZmlnL21vY2suanMiLCJzcmMvYXBwcy9hc2QvY29uZmlnL3VpLmpzIiwic3JjL2FwcHMvYXNkL2V2ZW50cy5qcyIsInNyYy9hcHBzL2FzZC9pbmRleC5qcyIsInNyYy9hcHBzL2FzZC9wYWdlcy9MYW5kaW5nUGFnZS5qcyIsInNyYy9hcHBzL2FzZC9wYWdlcy9QYWdlLmpzIiwic3JjL2FwcHMvYXNkL3BhZ2VzL1N1YlBhZ2UuanMiLCJzcmMvYXBwcy9hc2QvcGFnZXMvaW5kZXguanMiLCJzcmMvYXBwcy9hc2QvcmVkdXgvQWN0aW9uLmpzIiwic3JjL2FwcHMvYXNkL3JlZHV4L0Nvbm5lY3QuanMiLCJzcmMvYXBwcy9hc2QvcmVkdXgvUmVkdWNlci5qcyIsInNyYy9hcHBzL2FzZC9yZWR1eC9pbmRleC5qcyIsInNyYy9hcHBzL2FzZC9yb3V0ZXMuanMiLCJzcmMvY29tbW9uL2FwcGxpY2F0aW9ucy9BcHBsaWNhdGlvbi5qcyIsInNyYy9jb21tb24vYXBwbGljYXRpb25zL0Zvb3RlckFwcGxpY2F0aW9uLmpzIiwic3JjL2NvbW1vbi9hcHBsaWNhdGlvbnMvSGVhZGVyQXBwbGljYXRpb24uanMiLCJzcmMvY29tbW9uL2FwcGxpY2F0aW9ucy9Sb3V0ZXNBcHBsaWNhdGlvbi5qcyIsInNyYy9jb21tb24vYXBwbGljYXRpb25zL2luZGV4LmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL0JyZWFkY3J1bWJzLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL0J1dHRvbi5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9DYXJkLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL0NvbXBvbmVudC5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9Ecm9wem9uZS5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9Mb2dpbi5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9NZW51LmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL01vZGFsLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL01vZGFsRGVmYXVsdC5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9QYWdlLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL1NlYXJjaEZpZWxkLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL1NlbGVjdEZpZWxkLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL1N0ZXBwZXIuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvU3R5bGUuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvVGFibGUuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvVGFicy5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9UZXh0RmllbGQuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvVmlld3BvcnQuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvaW5kZXguanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Gb290ZXIuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9IZWFkZXIuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9IZWxwLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL25hdmlnYXRpb24vTGlua3NIdWIuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Mb2dvQm94LmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL25hdmlnYXRpb24vTm90aWZpY2F0aW9uLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL25hdmlnYXRpb24vU2VhcmNoQm94LmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL25hdmlnYXRpb24vVXNlckJveC5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1ZlcnNpb24uanMiLCJzcmMvY29tbW9uL3JlZHV4L0FjdGlvbi5qcyIsInNyYy9jb21tb24vcmVkdXgvQ29ubmVjdC5qcyIsInNyYy9jb21tb24vcmVkdXgvUmVkdWNlci5qcyIsInNyYy9jb21tb24vcm91dGVzL2luZGV4LmpzIiwic3JjL2NvbW1vbi9yb3V0ZXMvb25Sb3V0ZUNoYW5nZWQuanMiLCJzcmMvY29tbW9uL3JvdXRlcy9vblJvdXRlRW50ZXJlZC5qcyIsInNyYy9jb3JlL0NvbmZpZy5qcyIsInNyYy9jb3JlL0RldlRvb2xzLmpzIiwic3JjL2NvcmUvUmVxdWVzdC5qcyIsInNyYy9jb3JlL1VzZXJQcm9maWxlLmpzIiwic3JjL2NvcmUvY29va2llLmpzIiwic3JjL2NvcmUvaW5kZXguanMiLCJzcmMvY29yZS9yZWR1eC9Db25uZWN0LmpzIiwic3JjL2NvcmUvcmVkdXgvU3RvcmUuanMiLCJzcmMvY29yZS9yZWR1eC9hY3Rpb25zL0FjdGlvbi5qcyIsInNyYy9jb3JlL3JlZHV4L2FjdGlvbnMvQXBpQWN0aW9uLmpzIiwic3JjL2NvcmUvcmVkdXgvYWN0aW9ucy9Qcm94eUFjdGlvbi5qcyIsInNyYy9jb3JlL3JlZHV4L2FjdGlvbnMvU2VhcmNoQWN0aW9uLmpzIiwic3JjL2NvcmUvcmVkdXgvYWN0aW9ucy9pbmRleC5qcyIsInNyYy9jb3JlL3JlZHV4L2luZGV4LmpzIiwic3JjL2NvcmUvcmVkdXgvbWlkZGxld2FyZXMvaW5kZXguanMiLCJzcmMvY29yZS9yZWR1eC9taWRkbGV3YXJlcy9sb2dnZXIuanMiLCJzcmMvY29yZS9yZWR1eC9taWRkbGV3YXJlcy9zYWdhLmpzIiwic3JjL2NvcmUvcmVkdXgvbWlkZGxld2FyZXMvdGh1bmsuanMiLCJzcmMvY29yZS9yZWR1eC9yZWR1Y2Vycy9Db25maWdSZWR1Y2VyLmpzIiwic3JjL2NvcmUvcmVkdXgvcmVkdWNlcnMvQ29va2llUmVkdWNlci5qcyIsInNyYy9jb3JlL3JlZHV4L3JlZHVjZXJzL0ZhbHNlUmVkdWNlci5qcyIsInNyYy9jb3JlL3JlZHV4L3JlZHVjZXJzL0xpc3RSZWR1Y2VyLmpzIiwic3JjL2NvcmUvcmVkdXgvcmVkdWNlcnMvTnVsbFJlZHVjZXIuanMiLCJzcmMvY29yZS9yZWR1eC9yZWR1Y2Vycy9SZWR1Y2VyLmpzIiwic3JjL2NvcmUvcmVkdXgvcmVkdWNlcnMvVHJ1ZVJlZHVjZXIuanMiLCJzcmMvY29yZS9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsInNyYy9jb3JlL3VzZXIuanMiLCJzcmMvY29yZS91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFPQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzlkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzUyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBOzs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ250QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QyxDQUFsQixDQUFQO0FBQXlFOzs7NEJBQ3ZFO0FBQUMsbUJBQU8sS0FBSyxZQUFMLENBQWtCLENBQUMsU0FBUyxNQUFULEdBQWtCLFNBQVMsTUFBM0IsR0FBb0MsR0FBckMsRUFBMEMsS0FBMUMsQ0FBZ0QsQ0FBaEQsQ0FBbEIsQ0FBUDtBQUE2RTs7Ozs7a0JBNkVqRixJQUFJLElBQUosRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTsiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGluZGV4LCB2YWx1ZSl7XG4gIGlmKGluZGV4IGluIG9iamVjdCkkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTsiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTsiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduOyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTsiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7IiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpXG4gICwgZ2V0SXRlckZuICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTsiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2NyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpfSk7IiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mfSk7IiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pOyIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTsiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTsiLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXR9KTsiLCIiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyohXG4gKiBjb29raWVcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgUm9tYW4gU2h0eWxtYW5cbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZXhwb3J0cy5zZXJpYWxpemUgPSBzZXJpYWxpemU7XG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGRlY29kZSA9IGRlY29kZVVSSUNvbXBvbmVudDtcbnZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XG52YXIgcGFpclNwbGl0UmVnRXhwID0gLzsgKi87XG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIGZpZWxkLWNvbnRlbnQgaW4gUkZDIDcyMzAgc2VjIDMuMlxuICpcbiAqIGZpZWxkLWNvbnRlbnQgPSBmaWVsZC12Y2hhciBbIDEqKCBTUCAvIEhUQUIgKSBmaWVsZC12Y2hhciBdXG4gKiBmaWVsZC12Y2hhciAgID0gVkNIQVIgLyBvYnMtdGV4dFxuICogb2JzLXRleHQgICAgICA9ICV4ODAtRkZcbiAqL1xuXG52YXIgZmllbGRDb250ZW50UmVnRXhwID0gL15bXFx1MDAwOVxcdTAwMjAtXFx1MDA3ZVxcdTAwODAtXFx1MDBmZl0rJC87XG5cbi8qKlxuICogUGFyc2UgYSBjb29raWUgaGVhZGVyLlxuICpcbiAqIFBhcnNlIHRoZSBnaXZlbiBjb29raWUgaGVhZGVyIHN0cmluZyBpbnRvIGFuIG9iamVjdFxuICogVGhlIG9iamVjdCBoYXMgdGhlIHZhcmlvdXMgY29va2llcyBhcyBrZXlzKG5hbWVzKSA9PiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHN0ciBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICB2YXIgb2JqID0ge31cbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdChwYWlyU3BsaXRSZWdFeHApO1xuICB2YXIgZGVjID0gb3B0LmRlY29kZSB8fCBkZWNvZGU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYWlyID0gcGFpcnNbaV07XG4gICAgdmFyIGVxX2lkeCA9IHBhaXIuaW5kZXhPZignPScpO1xuXG4gICAgLy8gc2tpcCB0aGluZ3MgdGhhdCBkb24ndCBsb29rIGxpa2Uga2V5PXZhbHVlXG4gICAgaWYgKGVxX2lkeCA8IDApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBrZXkgPSBwYWlyLnN1YnN0cigwLCBlcV9pZHgpLnRyaW0oKVxuICAgIHZhciB2YWwgPSBwYWlyLnN1YnN0cigrK2VxX2lkeCwgcGFpci5sZW5ndGgpLnRyaW0oKTtcblxuICAgIC8vIHF1b3RlZCB2YWx1ZXNcbiAgICBpZiAoJ1wiJyA9PSB2YWxbMF0pIHtcbiAgICAgIHZhbCA9IHZhbC5zbGljZSgxLCAtMSk7XG4gICAgfVxuXG4gICAgLy8gb25seSBhc3NpZ24gb25jZVxuICAgIGlmICh1bmRlZmluZWQgPT0gb2JqW2tleV0pIHtcbiAgICAgIG9ialtrZXldID0gdHJ5RGVjb2RlKHZhbCwgZGVjKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSBkYXRhIGludG8gYSBjb29raWUgaGVhZGVyLlxuICpcbiAqIFNlcmlhbGl6ZSB0aGUgYSBuYW1lIHZhbHVlIHBhaXIgaW50byBhIGNvb2tpZSBzdHJpbmcgc3VpdGFibGUgZm9yXG4gKiBodHRwIGhlYWRlcnMuIEFuIG9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHNwZWNpZmllZCBjb29raWUgcGFyYW1ldGVycy5cbiAqXG4gKiBzZXJpYWxpemUoJ2ZvbycsICdiYXInLCB7IGh0dHBPbmx5OiB0cnVlIH0pXG4gKiAgID0+IFwiZm9vPWJhcjsgaHR0cE9ubHlcIlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc2VyaWFsaXplKG5hbWUsIHZhbCwgb3B0aW9ucykge1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGVuYyA9IG9wdC5lbmNvZGUgfHwgZW5jb2RlO1xuXG4gIGlmICh0eXBlb2YgZW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGVuY29kZSBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgbmFtZSBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICB2YXIgdmFsdWUgPSBlbmModmFsKTtcblxuICBpZiAodmFsdWUgJiYgIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHZhbCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICB2YXIgc3RyID0gbmFtZSArICc9JyArIHZhbHVlO1xuXG4gIGlmIChudWxsICE9IG9wdC5tYXhBZ2UpIHtcbiAgICB2YXIgbWF4QWdlID0gb3B0Lm1heEFnZSAtIDA7XG4gICAgaWYgKGlzTmFOKG1heEFnZSkpIHRocm93IG5ldyBFcnJvcignbWF4QWdlIHNob3VsZCBiZSBhIE51bWJlcicpO1xuICAgIHN0ciArPSAnOyBNYXgtQWdlPScgKyBNYXRoLmZsb29yKG1heEFnZSk7XG4gIH1cblxuICBpZiAob3B0LmRvbWFpbikge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LmRvbWFpbikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBkb21haW4gaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBEb21haW49JyArIG9wdC5kb21haW47XG4gIH1cblxuICBpZiAob3B0LnBhdGgpIHtcbiAgICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG9wdC5wYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHBhdGggaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBQYXRoPScgKyBvcHQucGF0aDtcbiAgfVxuXG4gIGlmIChvcHQuZXhwaXJlcykge1xuICAgIGlmICh0eXBlb2Ygb3B0LmV4cGlyZXMudG9VVENTdHJpbmcgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBleHBpcmVzIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgRXhwaXJlcz0nICsgb3B0LmV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgfVxuXG4gIGlmIChvcHQuaHR0cE9ubHkpIHtcbiAgICBzdHIgKz0gJzsgSHR0cE9ubHknO1xuICB9XG5cbiAgaWYgKG9wdC5zZWN1cmUpIHtcbiAgICBzdHIgKz0gJzsgU2VjdXJlJztcbiAgfVxuXG4gIGlmIChvcHQuc2FtZVNpdGUpIHtcbiAgICB2YXIgc2FtZVNpdGUgPSB0eXBlb2Ygb3B0LnNhbWVTaXRlID09PSAnc3RyaW5nJ1xuICAgICAgPyBvcHQuc2FtZVNpdGUudG9Mb3dlckNhc2UoKSA6IG9wdC5zYW1lU2l0ZTtcblxuICAgIHN3aXRjaCAoc2FtZVNpdGUpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPVN0cmljdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGF4JzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPUxheCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaWN0JzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPVN0cmljdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHNhbWVTaXRlIGlzIGludmFsaWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIFRyeSBkZWNvZGluZyBhIHN0cmluZyB1c2luZyBhIGRlY29kaW5nIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRlY29kZVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0cnlEZWNvZGUoc3RyLCBkZWNvZGUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlKHN0cik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50Q2xhc3Mob3B0cylcbn1cblxuZnVuY3Rpb24gaW5kZXhPZihhcnIsIHByb3ApIHtcbiAgaWYgKGFyci5pbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2YocHJvcClcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICBpZiAoYXJyW2ldID09PSBwcm9wKSByZXR1cm4gaVxuICByZXR1cm4gLTFcbn1cblxuZnVuY3Rpb24gRWxlbWVudENsYXNzKG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEVsZW1lbnRDbGFzcykpIHJldHVybiBuZXcgRWxlbWVudENsYXNzKG9wdHMpXG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fVxuXG4gIC8vIHNpbWlsYXIgZG9pbmcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCBidXQgd29ya3MgaW4gSUU4XG4gIGlmIChvcHRzLm5vZGVUeXBlKSBvcHRzID0ge2VsOiBvcHRzfVxuXG4gIHRoaXMub3B0cyA9IG9wdHNcbiAgdGhpcy5lbCA9IG9wdHMuZWwgfHwgZG9jdW1lbnQuYm9keVxuICBpZiAodHlwZW9mIHRoaXMuZWwgIT09ICdvYmplY3QnKSB0aGlzLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmVsKVxufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAoZWwuY2xhc3NOYW1lID09PSBcIlwiKSByZXR1cm4gZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lXG4gIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJylcbiAgaWYgKGluZGV4T2YoY2xhc3NlcywgY2xhc3NOYW1lKSA+IC0xKSByZXR1cm4gY2xhc3Nlc1xuICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKVxuICBlbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKVxuICByZXR1cm4gY2xhc3Nlc1xufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAoZWwuY2xhc3NOYW1lID09PSBcIlwiKSByZXR1cm5cbiAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKVxuICB2YXIgaWR4ID0gaW5kZXhPZihjbGFzc2VzLCBjbGFzc05hbWUpXG4gIGlmIChpZHggPiAtMSkgY2xhc3Nlcy5zcGxpY2UoaWR4LCAxKVxuICBlbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKVxuICByZXR1cm4gY2xhc3Nlc1xufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpXG4gIHJldHVybiBpbmRleE9mKGNsYXNzZXMsIGNsYXNzTmFtZSkgPiAtMVxufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAodGhpcy5oYXMoY2xhc3NOYW1lKSkgdGhpcy5yZW1vdmUoY2xhc3NOYW1lKVxuICBlbHNlIHRoaXMuYWRkKGNsYXNzTmFtZSlcbn1cbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgQmFzZWQgb24gY29kZSB0aGF0IGlzIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNhblVzZURPTSA9ICEhKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93LmRvY3VtZW50ICYmXG5cdFx0d2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcblx0KTtcblxuXHR2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cblx0XHRjYW5Vc2VET006IGNhblVzZURPTSxcblxuXHRcdGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG5cdFx0Y2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG5cdFx0XHRjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuXHRcdGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuXG5cblx0fTtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9XG5cbn0oKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAoXCJtb2NrXCIgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50OyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKFwibW9ja1wiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCAoeCkge31cbiAgICB9O1xuXG4gICAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZzsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzcG9uc2U7XG5cbi8qKlxuICogQSByZXNwb25zZSBmcm9tIGEgd2ViIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzQ29kZVxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlcnNcbiAqIEBwYXJhbSB7QnVmZmVyfSBib2R5XG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKi9cbmZ1bmN0aW9uIFJlc3BvbnNlKHN0YXR1c0NvZGUsIGhlYWRlcnMsIGJvZHksIHVybCkge1xuICBpZiAodHlwZW9mIHN0YXR1c0NvZGUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignc3RhdHVzQ29kZSBtdXN0IGJlIGEgbnVtYmVyIGJ1dCB3YXMgJyArICh0eXBlb2Ygc3RhdHVzQ29kZSkpO1xuICB9XG4gIGlmIChoZWFkZXJzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaGVhZGVycyBjYW5ub3QgYmUgbnVsbCcpO1xuICB9XG4gIGlmICh0eXBlb2YgaGVhZGVycyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdoZWFkZXJzIG11c3QgYmUgYW4gb2JqZWN0IGJ1dCB3YXMgJyArICh0eXBlb2YgaGVhZGVycykpO1xuICB9XG4gIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gIHRoaXMuaGVhZGVycyA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gaGVhZGVycykge1xuICAgIHRoaXMuaGVhZGVyc1trZXkudG9Mb3dlckNhc2UoKV0gPSBoZWFkZXJzW2tleV07XG4gIH1cbiAgdGhpcy5ib2R5ID0gYm9keTtcbiAgdGhpcy51cmwgPSB1cmw7XG59XG5cblJlc3BvbnNlLnByb3RvdHlwZS5nZXRCb2R5ID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIGlmICh0aGlzLnN0YXR1c0NvZGUgPj0gMzAwKSB7XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignU2VydmVyIHJlc3BvbmRlZCB3aXRoIHN0YXR1cyBjb2RlICdcbiAgICAgICAgICAgICAgICAgICAgKyB0aGlzLnN0YXR1c0NvZGUgKyAnOlxcbicgKyB0aGlzLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgZXJyLnN0YXR1c0NvZGUgPSB0aGlzLnN0YXR1c0NvZGU7XG4gICAgZXJyLmhlYWRlcnMgPSB0aGlzLmhlYWRlcnM7XG4gICAgZXJyLmJvZHkgPSB0aGlzLmJvZHk7XG4gICAgZXJyLnVybCA9IHRoaXMudXJsO1xuICAgIHRocm93IGVycjtcbiAgfVxuICByZXR1cm4gZW5jb2RpbmcgPyB0aGlzLmJvZHkudG9TdHJpbmcoZW5jb2RpbmcpIDogdGhpcy5ib2R5O1xufTtcbiIsIi8vIENvZGluZyBzdGFuZGFyZCBmb3IgdGhpcyBwcm9qZWN0IGRlZmluZWQgQCBodHRwczovL2dpdGh1Yi5jb20vTWF0dGhld1NIL3N0YW5kYXJkcy9ibG9iL21hc3Rlci9KYXZhU2NyaXB0Lm1kXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9ICEhKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnZlcnNpb25zICYmIHByb2Nlc3MudmVyc2lvbnMubm9kZSk7XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KSxcbiAgICBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqIERldGVjdCBpZiBwcm9wZXJ0aWVzIHNoYWRvd2luZyB0aG9zZSBvbiBgT2JqZWN0LnByb3RvdHlwZWAgYXJlIG5vbi1lbnVtZXJhYmxlLiAqL1xudmFyIG5vbkVudW1TaGFkb3dzID0gIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAndmFsdWVPZic6IDEgfSwgJ3ZhbHVlT2YnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IGFycmF5O1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCA/IHNvdXJjZVtrZXldIDogbmV3VmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uYXNzaWduYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduZXIgVGhlIGZ1bmN0aW9uIHRvIGFzc2lnbiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhc3NpZ25lciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgcmV0dXJuIGJhc2VSZXN0KGZ1bmN0aW9uKG9iamVjdCwgc291cmNlcykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkLFxuICAgICAgICBndWFyZCA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgY3VzdG9taXplciA9IChhc3NpZ25lci5sZW5ndGggPiAzICYmIHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicpXG4gICAgICA/IChsZW5ndGgtLSwgY3VzdG9taXplcilcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHNvdXJjZXNbMF0sIHNvdXJjZXNbMV0sIGd1YXJkKSkge1xuICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiBjdXN0b21pemVyO1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4XTtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgYXNzaWduZXIob2JqZWN0LCBzb3VyY2UsIGluZGV4LCBjdXN0b21pemVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIHZhbHVlIGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBpbmRleCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIGluZGV4IG9yIGtleSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgb2JqZWN0IGFyZ3VtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcidcbiAgICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgICAgOiAodHlwZSA9PSAnc3RyaW5nJyAmJiBpbmRleCBpbiBvYmplY3QpXG4gICAgICApIHtcbiAgICByZXR1cm4gZXEob2JqZWN0W2luZGV4XSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBBc3NpZ25zIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3RzIHRvIHRoZVxuICogZGVzdGluYXRpb24gb2JqZWN0LiBTb3VyY2Ugb2JqZWN0cyBhcmUgYXBwbGllZCBmcm9tIGxlZnQgdG8gcmlnaHQuXG4gKiBTdWJzZXF1ZW50IHNvdXJjZXMgb3ZlcndyaXRlIHByb3BlcnR5IGFzc2lnbm1lbnRzIG9mIHByZXZpb3VzIHNvdXJjZXMuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAgYW5kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgT2JqZWN0LmFzc2lnbmBdKGh0dHBzOi8vbWRuLmlvL09iamVjdC9hc3NpZ24pLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAc2VlIF8uYXNzaWduSW5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIGZ1bmN0aW9uIEJhcigpIHtcbiAqICAgdGhpcy5jID0gMztcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmIgPSAyO1xuICogQmFyLnByb3RvdHlwZS5kID0gNDtcbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMCB9LCBuZXcgRm9vLCBuZXcgQmFyKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYyc6IDMgfVxuICovXG52YXIgYXNzaWduID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgaWYgKG5vbkVudW1TaGFkb3dzIHx8IGlzUHJvdG90eXBlKHNvdXJjZSkgfHwgaXNBcnJheUxpa2Uoc291cmNlKSkge1xuICAgIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ1JlYWN0LlByb3BUeXBlcy4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUpO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgZnVuY3Rpb24gc2hpbSgpIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcbnZhciBwZXJjZW50VHdlbnRpZXMgPSAvJTIwL2c7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdkZWZhdWx0JzogJ1JGQzM5ODYnLFxuICAgIGZvcm1hdHRlcnM6IHtcbiAgICAgICAgUkZDMTczODogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZS5jYWxsKHZhbHVlLCBwZXJjZW50VHdlbnRpZXMsICcrJyk7XG4gICAgICAgIH0sXG4gICAgICAgIFJGQzM5ODY6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBSRkMxNzM4OiAnUkZDMTczOCcsXG4gICAgUkZDMzk4NjogJ1JGQzM5ODYnXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9zdHJpbmdpZnknKTtcbnZhciBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKTtcbnZhciBmb3JtYXRzID0gcmVxdWlyZSgnLi9mb3JtYXRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdHM6IGZvcm1hdHMsXG4gICAgcGFyc2U6IHBhcnNlLFxuICAgIHN0cmluZ2lmeTogc3RyaW5naWZ5XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgYWxsb3dEb3RzOiBmYWxzZSxcbiAgICBhbGxvd1Byb3RvdHlwZXM6IGZhbHNlLFxuICAgIGFycmF5TGltaXQ6IDIwLFxuICAgIGRlY29kZXI6IHV0aWxzLmRlY29kZSxcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBkZXB0aDogNSxcbiAgICBwYXJhbWV0ZXJMaW1pdDogMTAwMCxcbiAgICBwbGFpbk9iamVjdHM6IGZhbHNlLFxuICAgIHN0cmljdE51bGxIYW5kbGluZzogZmFsc2Vcbn07XG5cbnZhciBwYXJzZVZhbHVlcyA9IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmdWYWx1ZXMoc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdChvcHRpb25zLmRlbGltaXRlciwgb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9PT0gSW5maW5pdHkgPyB1bmRlZmluZWQgOiBvcHRpb25zLnBhcmFtZXRlckxpbWl0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgdmFyIHBvcyA9IHBhcnQuaW5kZXhPZignXT0nKSA9PT0gLTEgPyBwYXJ0LmluZGV4T2YoJz0nKSA6IHBhcnQuaW5kZXhPZignXT0nKSArIDE7XG5cbiAgICAgICAgdmFyIGtleSwgdmFsO1xuICAgICAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgICAgICAga2V5ID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQpO1xuICAgICAgICAgICAgdmFsID0gb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgPyBudWxsIDogJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXkgPSBvcHRpb25zLmRlY29kZXIocGFydC5zbGljZSgwLCBwb3MpKTtcbiAgICAgICAgICAgIHZhbCA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LnNsaWNlKHBvcyArIDEpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IFtdLmNvbmNhdChvYmpba2V5XSkuY29uY2F0KHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgcGFyc2VPYmplY3QgPSBmdW5jdGlvbiBwYXJzZU9iamVjdFJlY3Vyc2l2ZShjaGFpbiwgdmFsLCBvcHRpb25zKSB7XG4gICAgaWYgKCFjaGFpbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICB2YXIgcm9vdCA9IGNoYWluLnNoaWZ0KCk7XG5cbiAgICB2YXIgb2JqO1xuICAgIGlmIChyb290ID09PSAnW10nKSB7XG4gICAgICAgIG9iaiA9IFtdO1xuICAgICAgICBvYmogPSBvYmouY29uY2F0KHBhcnNlT2JqZWN0KGNoYWluLCB2YWwsIG9wdGlvbnMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmogPSBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICAgICAgdmFyIGNsZWFuUm9vdCA9IHJvb3QuY2hhckF0KDApID09PSAnWycgJiYgcm9vdC5jaGFyQXQocm9vdC5sZW5ndGggLSAxKSA9PT0gJ10nID8gcm9vdC5zbGljZSgxLCAtMSkgOiByb290O1xuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChjbGVhblJvb3QsIDEwKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWlzTmFOKGluZGV4KSAmJlxuICAgICAgICAgICAgcm9vdCAhPT0gY2xlYW5Sb290ICYmXG4gICAgICAgICAgICBTdHJpbmcoaW5kZXgpID09PSBjbGVhblJvb3QgJiZcbiAgICAgICAgICAgIGluZGV4ID49IDAgJiZcbiAgICAgICAgICAgIChvcHRpb25zLnBhcnNlQXJyYXlzICYmIGluZGV4IDw9IG9wdGlvbnMuYXJyYXlMaW1pdClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBvYmogPSBbXTtcbiAgICAgICAgICAgIG9ialtpbmRleF0gPSBwYXJzZU9iamVjdChjaGFpbiwgdmFsLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ialtjbGVhblJvb3RdID0gcGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIHBhcnNlS2V5cyA9IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmdLZXlzKGdpdmVuS2V5LCB2YWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoIWdpdmVuS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUcmFuc2Zvcm0gZG90IG5vdGF0aW9uIHRvIGJyYWNrZXQgbm90YXRpb25cbiAgICB2YXIga2V5ID0gb3B0aW9ucy5hbGxvd0RvdHMgPyBnaXZlbktleS5yZXBsYWNlKC9cXC4oW14uW10rKS9nLCAnWyQxXScpIDogZ2l2ZW5LZXk7XG5cbiAgICAvLyBUaGUgcmVnZXggY2h1bmtzXG5cbiAgICB2YXIgYnJhY2tldHMgPSAvKFxcW1teW1xcXV0qXSkvO1xuICAgIHZhciBjaGlsZCA9IC8oXFxbW15bXFxdXSpdKS9nO1xuXG4gICAgLy8gR2V0IHRoZSBwYXJlbnRcblxuICAgIHZhciBzZWdtZW50ID0gYnJhY2tldHMuZXhlYyhrZXkpO1xuICAgIHZhciBwYXJlbnQgPSBzZWdtZW50ID8ga2V5LnNsaWNlKDAsIHNlZ21lbnQuaW5kZXgpIDoga2V5O1xuXG4gICAgLy8gU3Rhc2ggdGhlIHBhcmVudCBpZiBpdCBleGlzdHNcblxuICAgIHZhciBrZXlzID0gW107XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICAvLyBJZiB3ZSBhcmVuJ3QgdXNpbmcgcGxhaW4gb2JqZWN0cywgb3B0aW9uYWxseSBwcmVmaXgga2V5c1xuICAgICAgICAvLyB0aGF0IHdvdWxkIG92ZXJ3cml0ZSBvYmplY3QgcHJvdG90eXBlIHByb3BlcnRpZXNcbiAgICAgICAgaWYgKCFvcHRpb25zLnBsYWluT2JqZWN0cyAmJiBoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBwYXJlbnQpKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAga2V5cy5wdXNoKHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGNoaWxkcmVuIGFwcGVuZGluZyB0byB0aGUgYXJyYXkgdW50aWwgd2UgaGl0IGRlcHRoXG5cbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKChzZWdtZW50ID0gY2hpbGQuZXhlYyhrZXkpKSAhPT0gbnVsbCAmJiBpIDwgb3B0aW9ucy5kZXB0aCkge1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIGlmICghb3B0aW9ucy5wbGFpbk9iamVjdHMgJiYgaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgc2VnbWVudFsxXS5zbGljZSgxLCAtMSkpKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGtleXMucHVzaChzZWdtZW50WzFdKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSdzIGEgcmVtYWluZGVyLCBqdXN0IGFkZCB3aGF0ZXZlciBpcyBsZWZ0XG5cbiAgICBpZiAoc2VnbWVudCkge1xuICAgICAgICBrZXlzLnB1c2goJ1snICsga2V5LnNsaWNlKHNlZ21lbnQuaW5kZXgpICsgJ10nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VPYmplY3Qoa2V5cywgdmFsLCBvcHRpb25zKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0ciwgb3B0cykge1xuICAgIHZhciBvcHRpb25zID0gb3B0cyB8fCB7fTtcblxuICAgIGlmIChvcHRpb25zLmRlY29kZXIgIT09IG51bGwgJiYgb3B0aW9ucy5kZWNvZGVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdGlvbnMuZGVjb2RlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdEZWNvZGVyIGhhcyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIG9wdGlvbnMuZGVsaW1pdGVyID0gdHlwZW9mIG9wdGlvbnMuZGVsaW1pdGVyID09PSAnc3RyaW5nJyB8fCB1dGlscy5pc1JlZ0V4cChvcHRpb25zLmRlbGltaXRlcikgPyBvcHRpb25zLmRlbGltaXRlciA6IGRlZmF1bHRzLmRlbGltaXRlcjtcbiAgICBvcHRpb25zLmRlcHRoID0gdHlwZW9mIG9wdGlvbnMuZGVwdGggPT09ICdudW1iZXInID8gb3B0aW9ucy5kZXB0aCA6IGRlZmF1bHRzLmRlcHRoO1xuICAgIG9wdGlvbnMuYXJyYXlMaW1pdCA9IHR5cGVvZiBvcHRpb25zLmFycmF5TGltaXQgPT09ICdudW1iZXInID8gb3B0aW9ucy5hcnJheUxpbWl0IDogZGVmYXVsdHMuYXJyYXlMaW1pdDtcbiAgICBvcHRpb25zLnBhcnNlQXJyYXlzID0gb3B0aW9ucy5wYXJzZUFycmF5cyAhPT0gZmFsc2U7XG4gICAgb3B0aW9ucy5kZWNvZGVyID0gdHlwZW9mIG9wdGlvbnMuZGVjb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuZGVjb2RlciA6IGRlZmF1bHRzLmRlY29kZXI7XG4gICAgb3B0aW9ucy5hbGxvd0RvdHMgPSB0eXBlb2Ygb3B0aW9ucy5hbGxvd0RvdHMgPT09ICdib29sZWFuJyA/IG9wdGlvbnMuYWxsb3dEb3RzIDogZGVmYXVsdHMuYWxsb3dEb3RzO1xuICAgIG9wdGlvbnMucGxhaW5PYmplY3RzID0gdHlwZW9mIG9wdGlvbnMucGxhaW5PYmplY3RzID09PSAnYm9vbGVhbicgPyBvcHRpb25zLnBsYWluT2JqZWN0cyA6IGRlZmF1bHRzLnBsYWluT2JqZWN0cztcbiAgICBvcHRpb25zLmFsbG93UHJvdG90eXBlcyA9IHR5cGVvZiBvcHRpb25zLmFsbG93UHJvdG90eXBlcyA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMgOiBkZWZhdWx0cy5hbGxvd1Byb3RvdHlwZXM7XG4gICAgb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9IHR5cGVvZiBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMucGFyYW1ldGVyTGltaXQgOiBkZWZhdWx0cy5wYXJhbWV0ZXJMaW1pdDtcbiAgICBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA9IHR5cGVvZiBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgOiBkZWZhdWx0cy5zdHJpY3ROdWxsSGFuZGxpbmc7XG5cbiAgICBpZiAoc3RyID09PSAnJyB8fCBzdHIgPT09IG51bGwgfHwgdHlwZW9mIHN0ciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgIH1cblxuICAgIHZhciB0ZW1wT2JqID0gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBwYXJzZVZhbHVlcyhzdHIsIG9wdGlvbnMpIDogc3RyO1xuICAgIHZhciBvYmogPSBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUga2V5cyBhbmQgc2V0dXAgdGhlIG5ldyBvYmplY3RcblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGVtcE9iaik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgbmV3T2JqID0gcGFyc2VLZXlzKGtleSwgdGVtcE9ialtrZXldLCBvcHRpb25zKTtcbiAgICAgICAgb2JqID0gdXRpbHMubWVyZ2Uob2JqLCBuZXdPYmosIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB1dGlscy5jb21wYWN0KG9iaik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgZm9ybWF0cyA9IHJlcXVpcmUoJy4vZm9ybWF0cycpO1xuXG52YXIgYXJyYXlQcmVmaXhHZW5lcmF0b3JzID0ge1xuICAgIGJyYWNrZXRzOiBmdW5jdGlvbiBicmFja2V0cyhwcmVmaXgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbXSc7XG4gICAgfSxcbiAgICBpbmRpY2VzOiBmdW5jdGlvbiBpbmRpY2VzKHByZWZpeCwga2V5KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnWycgKyBrZXkgKyAnXSc7XG4gICAgfSxcbiAgICByZXBlYXQ6IGZ1bmN0aW9uIHJlcGVhdChwcmVmaXgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9XG59O1xuXG52YXIgdG9JU08gPSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZztcblxudmFyIGRlZmF1bHRzID0ge1xuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGVuY29kZTogdHJ1ZSxcbiAgICBlbmNvZGVyOiB1dGlscy5lbmNvZGUsXG4gICAgZW5jb2RlVmFsdWVzT25seTogZmFsc2UsXG4gICAgc2VyaWFsaXplRGF0ZTogZnVuY3Rpb24gc2VyaWFsaXplRGF0ZShkYXRlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgICAgIHJldHVybiB0b0lTTy5jYWxsKGRhdGUpO1xuICAgIH0sXG4gICAgc2tpcE51bGxzOiBmYWxzZSxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IGZhbHNlXG59O1xuXG52YXIgc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgIG9iamVjdCxcbiAgICBwcmVmaXgsXG4gICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgc2tpcE51bGxzLFxuICAgIGVuY29kZXIsXG4gICAgZmlsdGVyLFxuICAgIHNvcnQsXG4gICAgYWxsb3dEb3RzLFxuICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgZm9ybWF0dGVyLFxuICAgIGVuY29kZVZhbHVlc09ubHlcbikge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2JqID0gZmlsdGVyKHByZWZpeCwgb2JqKTtcbiAgICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgb2JqID0gc2VyaWFsaXplRGF0ZShvYmopO1xuICAgIH0gZWxzZSBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIGlmIChzdHJpY3ROdWxsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVyICYmICFlbmNvZGVWYWx1ZXNPbmx5ID8gZW5jb2RlcihwcmVmaXgpIDogcHJlZml4O1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBvYmogPT09ICdudW1iZXInIHx8IHR5cGVvZiBvYmogPT09ICdib29sZWFuJyB8fCB1dGlscy5pc0J1ZmZlcihvYmopKSB7XG4gICAgICAgIGlmIChlbmNvZGVyKSB7XG4gICAgICAgICAgICB2YXIga2V5VmFsdWUgPSBlbmNvZGVWYWx1ZXNPbmx5ID8gcHJlZml4IDogZW5jb2RlcihwcmVmaXgpO1xuICAgICAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZXIoa2V5VmFsdWUpICsgJz0nICsgZm9ybWF0dGVyKGVuY29kZXIob2JqKSldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZm9ybWF0dGVyKHByZWZpeCkgKyAnPScgKyBmb3JtYXR0ZXIoU3RyaW5nKG9iaikpXTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICB2YXIgb2JqS2V5cztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXIpKSB7XG4gICAgICAgIG9iaktleXMgPSBmaWx0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICBvYmpLZXlzID0gc29ydCA/IGtleXMuc29ydChzb3J0KSA6IGtleXM7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpLZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgICAgIGlmIChza2lwTnVsbHMgJiYgb2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChzdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgb2JqW2tleV0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeChwcmVmaXgsIGtleSksXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChzdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgb2JqW2tleV0sXG4gICAgICAgICAgICAgICAgcHJlZml4ICsgKGFsbG93RG90cyA/ICcuJyArIGtleSA6ICdbJyArIGtleSArICddJyksXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgb3B0cykge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9O1xuXG4gICAgaWYgKG9wdGlvbnMuZW5jb2RlciAhPT0gbnVsbCAmJiBvcHRpb25zLmVuY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9ucy5lbmNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0VuY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGRlbGltaXRlciA9IHR5cGVvZiBvcHRpb25zLmRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5kZWxpbWl0ZXIgOiBvcHRpb25zLmRlbGltaXRlcjtcbiAgICB2YXIgc3RyaWN0TnVsbEhhbmRsaW5nID0gdHlwZW9mIG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nID09PSAnYm9vbGVhbicgPyBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA6IGRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZztcbiAgICB2YXIgc2tpcE51bGxzID0gdHlwZW9mIG9wdGlvbnMuc2tpcE51bGxzID09PSAnYm9vbGVhbicgPyBvcHRpb25zLnNraXBOdWxscyA6IGRlZmF1bHRzLnNraXBOdWxscztcbiAgICB2YXIgZW5jb2RlID0gdHlwZW9mIG9wdGlvbnMuZW5jb2RlID09PSAnYm9vbGVhbicgPyBvcHRpb25zLmVuY29kZSA6IGRlZmF1bHRzLmVuY29kZTtcbiAgICB2YXIgZW5jb2RlciA9IHR5cGVvZiBvcHRpb25zLmVuY29kZXIgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLmVuY29kZXIgOiBkZWZhdWx0cy5lbmNvZGVyO1xuICAgIHZhciBzb3J0ID0gdHlwZW9mIG9wdGlvbnMuc29ydCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuc29ydCA6IG51bGw7XG4gICAgdmFyIGFsbG93RG90cyA9IHR5cGVvZiBvcHRpb25zLmFsbG93RG90cyA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IG9wdGlvbnMuYWxsb3dEb3RzO1xuICAgIHZhciBzZXJpYWxpemVEYXRlID0gdHlwZW9mIG9wdGlvbnMuc2VyaWFsaXplRGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuc2VyaWFsaXplRGF0ZSA6IGRlZmF1bHRzLnNlcmlhbGl6ZURhdGU7XG4gICAgdmFyIGVuY29kZVZhbHVlc09ubHkgPSB0eXBlb2Ygb3B0aW9ucy5lbmNvZGVWYWx1ZXNPbmx5ID09PSAnYm9vbGVhbicgPyBvcHRpb25zLmVuY29kZVZhbHVlc09ubHkgOiBkZWZhdWx0cy5lbmNvZGVWYWx1ZXNPbmx5O1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5mb3JtYXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMuZm9ybWF0ID0gZm9ybWF0cy5kZWZhdWx0O1xuICAgIH0gZWxzZSBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmb3JtYXRzLmZvcm1hdHRlcnMsIG9wdGlvbnMuZm9ybWF0KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGZvcm1hdCBvcHRpb24gcHJvdmlkZWQuJyk7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXRzLmZvcm1hdHRlcnNbb3B0aW9ucy5mb3JtYXRdO1xuICAgIHZhciBvYmpLZXlzO1xuICAgIHZhciBmaWx0ZXI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmogPSBmaWx0ZXIoJycsIG9iaik7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5Rm9ybWF0O1xuICAgIGlmIChvcHRpb25zLmFycmF5Rm9ybWF0IGluIGFycmF5UHJlZml4R2VuZXJhdG9ycykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdGlvbnMuYXJyYXlGb3JtYXQ7XG4gICAgfSBlbHNlIGlmICgnaW5kaWNlcycgaW4gb3B0aW9ucykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdGlvbnMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcblxuICAgIGlmICghb2JqS2V5cykge1xuICAgICAgICBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB9XG5cbiAgICBpZiAoc29ydCkge1xuICAgICAgICBvYmpLZXlzLnNvcnQoc29ydCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpLZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgICAgIGlmIChza2lwTnVsbHMgJiYgb2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KHN0cmluZ2lmeShcbiAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgIHNraXBOdWxscyxcbiAgICAgICAgICAgIGVuY29kZSA/IGVuY29kZXIgOiBudWxsLFxuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgIGFsbG93RG90cyxcbiAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5XG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzLmpvaW4oZGVsaW1pdGVyKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgaGV4VGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgYXJyYXkucHVzaCgnJScgKyAoKGkgPCAxNiA/ICcwJyA6ICcnKSArIGkudG9TdHJpbmcoMTYpKS50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG59KCkpO1xuXG5leHBvcnRzLmFycmF5VG9PYmplY3QgPSBmdW5jdGlvbiAoc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvYmpbaV0gPSBzb3VyY2VbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuZXhwb3J0cy5tZXJnZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKHNvdXJjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBsYWluT2JqZWN0cyB8fCBvcHRpb25zLmFsbG93UHJvdG90eXBlcyB8fCAhaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtzb3VyY2VdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbdGFyZ2V0LCBzb3VyY2VdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIFt0YXJnZXRdLmNvbmNhdChzb3VyY2UpO1xuICAgIH1cblxuICAgIHZhciBtZXJnZVRhcmdldCA9IHRhcmdldDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmICFBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgbWVyZ2VUYXJnZXQgPSBleHBvcnRzLmFycmF5VG9PYmplY3QodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIEFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgaWYgKGhhcy5jYWxsKHRhcmdldCwgaSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W2ldICYmIHR5cGVvZiB0YXJnZXRbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IGV4cG9ydHMubWVyZ2UodGFyZ2V0W2ldLCBpdGVtLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhY2MsIGtleSkpIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gZXhwb3J0cy5tZXJnZShhY2Nba2V5XSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIG1lcmdlVGFyZ2V0KTtcbn07XG5cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxufTtcblxuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgLy8gVGhpcyBjb2RlIHdhcyBvcmlnaW5hbGx5IHdyaXR0ZW4gYnkgQnJpYW4gV2hpdGUgKG1zY2RleCkgZm9yIHRoZSBpby5qcyBjb3JlIHF1ZXJ5c3RyaW5nIGxpYnJhcnkuXG4gICAgLy8gSXQgaGFzIGJlZW4gYWRhcHRlZCBoZXJlIGZvciBzdHJpY3RlciBhZGhlcmVuY2UgdG8gUkZDIDM5ODZcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHZhciBzdHJpbmcgPSB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHN0ciA6IFN0cmluZyhzdHIpO1xuXG4gICAgdmFyIG91dCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYyA9PT0gMHgyRCB8fCAvLyAtXG4gICAgICAgICAgICBjID09PSAweDJFIHx8IC8vIC5cbiAgICAgICAgICAgIGMgPT09IDB4NUYgfHwgLy8gX1xuICAgICAgICAgICAgYyA9PT0gMHg3RSB8fCAvLyB+XG4gICAgICAgICAgICAoYyA+PSAweDMwICYmIGMgPD0gMHgzOSkgfHwgLy8gMC05XG4gICAgICAgICAgICAoYyA+PSAweDQxICYmIGMgPD0gMHg1QSkgfHwgLy8gYS16XG4gICAgICAgICAgICAoYyA+PSAweDYxICYmIGMgPD0gMHg3QSkgLy8gQS1aXG4gICAgICAgICkge1xuICAgICAgICAgICAgb3V0ICs9IHN0cmluZy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgaGV4VGFibGVbY107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEMwIHwgKGMgPj4gNildICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweEQ4MDAgfHwgYyA+PSAweEUwMDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEUwIHwgKGMgPj4gMTIpXSArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpICs9IDE7XG4gICAgICAgIGMgPSAweDEwMDAwICsgKCgoYyAmIDB4M0ZGKSA8PCAxMCkgfCAoc3RyaW5nLmNoYXJDb2RlQXQoaSkgJiAweDNGRikpO1xuICAgICAgICBvdXQgKz0gaGV4VGFibGVbMHhGMCB8IChjID4+IDE4KV0gKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDEyKSAmIDB4M0YpXSArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59O1xuXG5leHBvcnRzLmNvbXBhY3QgPSBmdW5jdGlvbiAob2JqLCByZWZlcmVuY2VzKSB7XG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHZhciByZWZzID0gcmVmZXJlbmNlcyB8fCBbXTtcbiAgICB2YXIgbG9va3VwID0gcmVmcy5pbmRleE9mKG9iaik7XG4gICAgaWYgKGxvb2t1cCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHJlZnNbbG9va3VwXTtcbiAgICB9XG5cbiAgICByZWZzLnB1c2gob2JqKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgdmFyIGNvbXBhY3RlZCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAob2JqW2ldICYmIHR5cGVvZiBvYmpbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY29tcGFjdGVkLnB1c2goZXhwb3J0cy5jb21wYWN0KG9ialtpXSwgcmVmcykpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbXBhY3RlZC5wdXNoKG9ialtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcGFjdGVkO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBvYmpba2V5XSA9IGV4cG9ydHMuY29tcGFjdChvYmpba2V5XSwgcmVmcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuZXhwb3J0cy5pc1JlZ0V4cCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gISEob2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnNlbGVjdCA9IHNlbGVjdDtcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbmV4cG9ydHMuc2V0UmF3Q29va2llID0gc2V0UmF3Q29va2llO1xuZXhwb3J0cy5wbHVnVG9SZXF1ZXN0ID0gcGx1Z1RvUmVxdWVzdDtcblxudmFyIF9jb29raWUgPSByZXF1aXJlKCdjb29raWUnKTtcblxudmFyIF9jb29raWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29va2llKTtcblxudmFyIF9vYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfb2JqZWN0QXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFzc2lnbik7XG5cbnZhciBfaXNOb2RlID0gcmVxdWlyZSgnaXMtbm9kZScpO1xuXG52YXIgX2lzTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc05vZGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX3Jhd0Nvb2tpZSA9IHt9O1xudmFyIF9yZXMgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIF9pc1Jlc1dyaXRhYmxlKCkge1xuICByZXR1cm4gX3JlcyAmJiAhX3Jlcy5oZWFkZXJzU2VudDtcbn1cblxuZnVuY3Rpb24gbG9hZChuYW1lLCBkb05vdFBhcnNlLCBvcHQpIHtcbiAgdmFyIGNvb2tpZXMgPSBfaXNOb2RlMi5kZWZhdWx0ID8gX3Jhd0Nvb2tpZSA6IF9jb29raWUyLmRlZmF1bHQucGFyc2UoZG9jdW1lbnQuY29va2llLCBvcHQpO1xuICB2YXIgY29va2llVmFsID0gY29va2llcyAmJiBjb29raWVzW25hbWVdO1xuXG4gIGlmICh0eXBlb2YgZG9Ob3RQYXJzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb05vdFBhcnNlID0gIWNvb2tpZVZhbCB8fCBjb29raWVWYWxbMF0gIT09ICd7JyAmJiBjb29raWVWYWxbMF0gIT09ICdbJztcbiAgfVxuXG4gIGlmICghZG9Ob3RQYXJzZSkge1xuICAgIHRyeSB7XG4gICAgICBjb29raWVWYWwgPSBKU09OLnBhcnNlKGNvb2tpZVZhbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gTm90IHNlcmlhbGl6ZWQgb2JqZWN0XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvb2tpZVZhbDtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KHJlZ2V4KSB7XG4gIHZhciBjb29raWVzID0gX2lzTm9kZTIuZGVmYXVsdCA/IF9yYXdDb29raWUgOiBfY29va2llMi5kZWZhdWx0LnBhcnNlKGRvY3VtZW50LmNvb2tpZSk7XG5cbiAgaWYgKCFjb29raWVzKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgaWYgKCFyZWdleCkge1xuICAgIHJldHVybiBjb29raWVzO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvb2tpZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIG5hbWUpIHtcbiAgICBpZiAoIXJlZ2V4LnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9XG5cbiAgICB2YXIgbmV3Q29va2llID0ge307XG4gICAgbmV3Q29va2llW25hbWVdID0gY29va2llc1tuYW1lXTtcbiAgICByZXR1cm4gKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHt9LCBhY2N1bXVsYXRvciwgbmV3Q29va2llKTtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBzYXZlKG5hbWUsIHZhbCwgb3B0KSB7XG4gIF9yYXdDb29raWVbbmFtZV0gPSB2YWw7XG5cbiAgLy8gYWxsb3cgeW91IHRvIHdvcmsgd2l0aCBjb29raWVzIGFzIG9iamVjdHMuXG4gIGlmICgodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsKSkgPT09ICdvYmplY3QnKSB7XG4gICAgX3Jhd0Nvb2tpZVtuYW1lXSA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gIH1cblxuICAvLyBDb29raWVzIG9ubHkgd29yayBpbiB0aGUgYnJvd3NlclxuICBpZiAoIV9pc05vZGUyLmRlZmF1bHQpIHtcbiAgICBkb2N1bWVudC5jb29raWUgPSBfY29va2llMi5kZWZhdWx0LnNlcmlhbGl6ZShuYW1lLCBfcmF3Q29va2llW25hbWVdLCBvcHQpO1xuICB9XG5cbiAgaWYgKF9pc1Jlc1dyaXRhYmxlKCkgJiYgX3Jlcy5jb29raWUpIHtcbiAgICB2YXIgZXhwcmVzc09wdCA9IF9leHRlbmRzKHt9LCBvcHQpO1xuICAgIGlmIChleHByZXNzT3B0Lm1heEFnZSkge1xuICAgICAgLy8gdGhlIHN0YW5kYXJkIGZvciBtYXhBZ2UgaXMgc2Vjb25kcyBidXQgZXhwcmVzcyB1c2VzIG1pbGxpc2Vjb25kc1xuICAgICAgZXhwcmVzc09wdC5tYXhBZ2UgPSBvcHQubWF4QWdlICogMTAwMDtcbiAgICB9XG5cbiAgICBfcmVzLmNvb2tpZShuYW1lLCB2YWwsIG9wdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlKG5hbWUsIG9wdCkge1xuICBkZWxldGUgX3Jhd0Nvb2tpZVtuYW1lXTtcblxuICBpZiAodHlwZW9mIG9wdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHQgPSB7fTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0ID09PSAnc3RyaW5nJykge1xuICAgIC8vIFdpbGwgYmUgZGVwcmVjYXRlZCBpbiBmdXR1cmUgdmVyc2lvbnNcbiAgICBvcHQgPSB7IHBhdGg6IG9wdCB9O1xuICB9IGVsc2Uge1xuICAgIC8vIFByZXZlbnQgbXV0YXRpb24gb2Ygb3B0IGJlbG93XG4gICAgb3B0ID0gKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHt9LCBvcHQpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHQuZXhwaXJlcyA9IG5ldyBEYXRlKDE5NzAsIDEsIDEsIDAsIDAsIDEpO1xuICAgIG9wdC5tYXhBZ2UgPSAwO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IF9jb29raWUyLmRlZmF1bHQuc2VyaWFsaXplKG5hbWUsICcnLCBvcHQpO1xuICB9XG5cbiAgaWYgKF9pc1Jlc1dyaXRhYmxlKCkgJiYgX3Jlcy5jbGVhckNvb2tpZSkge1xuICAgIF9yZXMuY2xlYXJDb29raWUobmFtZSwgb3B0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRSYXdDb29raWUocmF3Q29va2llKSB7XG4gIGlmIChyYXdDb29raWUpIHtcbiAgICBfcmF3Q29va2llID0gX2Nvb2tpZTIuZGVmYXVsdC5wYXJzZShyYXdDb29raWUpO1xuICB9IGVsc2Uge1xuICAgIF9yYXdDb29raWUgPSB7fTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwbHVnVG9SZXF1ZXN0KHJlcSwgcmVzKSB7XG4gIGlmIChyZXEuY29va2llKSB7XG4gICAgX3Jhd0Nvb2tpZSA9IHJlcS5jb29raWU7XG4gIH0gZWxzZSBpZiAocmVxLmNvb2tpZXMpIHtcbiAgICBfcmF3Q29va2llID0gcmVxLmNvb2tpZXM7XG4gIH0gZWxzZSBpZiAocmVxLmhlYWRlcnMgJiYgcmVxLmhlYWRlcnMuY29va2llKSB7XG4gICAgc2V0UmF3Q29va2llKHJlcS5oZWFkZXJzLmNvb2tpZSk7XG4gIH0gZWxzZSB7XG4gICAgX3Jhd0Nvb2tpZSA9IHt9O1xuICB9XG5cbiAgX3JlcyA9IHJlcztcblxuICByZXR1cm4gZnVuY3Rpb24gdW5wbHVnKCkge1xuICAgIF9yZXMgPSBudWxsO1xuICAgIF9yYXdDb29raWUgPSB7fTtcbiAgfTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBzZXRSYXdDb29raWU6IHNldFJhd0Nvb2tpZSxcbiAgbG9hZDogbG9hZCxcbiAgc2VsZWN0OiBzZWxlY3QsXG4gIHNhdmU6IHNhdmUsXG4gIHJlbW92ZTogcmVtb3ZlLFxuICBwbHVnVG9SZXF1ZXN0OiBwbHVnVG9SZXF1ZXN0XG59OyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJvcHpvbmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyb3B6b25lXCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0sIHJvb3RbXCJwcm9wLXR5cGVzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblx0XG5cdHZhciBfcmVhY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0dmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cdFxuXHR2YXIgX3Byb3BUeXBlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdFxuXHR2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXHRcblx0dmFyIF9hdHRyQWNjZXB0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0XG5cdHZhciBfYXR0ckFjY2VwdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdHRyQWNjZXB0KTtcblx0XG5cdHZhciBfZ2V0RGF0YVRyYW5zZmVySXRlbXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHRcblx0dmFyIF9nZXREYXRhVHJhbnNmZXJJdGVtczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXREYXRhVHJhbnNmZXJJdGVtcyk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXHRcblx0ZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0ZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cdFxuXHRmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLyogZXNsaW50IHByZWZlci10ZW1wbGF0ZTogMCAqL1xuXHRcblx0dmFyIHN1cHBvcnRNdWx0aXBsZSA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCA/ICdtdWx0aXBsZScgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSA6IHRydWU7XG5cdFxuXHR2YXIgRHJvcHpvbmUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHQgIF9pbmhlcml0cyhEcm9wem9uZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhEcm9wem9uZSwgbnVsbCwgW3tcblx0ICAgIGtleTogJ29uRG9jdW1lbnREcmFnT3ZlcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gb25Eb2N1bWVudERyYWdPdmVyKGUpIHtcblx0ICAgICAgLy8gYWxsb3cgdGhlIGVudGlyZSBkb2N1bWVudCB0byBiZSBhIGRyYWcgdGFyZ2V0XG5cdCAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIGZ1bmN0aW9uIERyb3B6b25lKHByb3BzLCBjb250ZXh0KSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJvcHpvbmUpO1xuXHRcblx0ICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEcm9wem9uZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyb3B6b25lKSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXHRcblx0ICAgIF90aGlzLnJlbmRlckNoaWxkcmVuID0gZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG5cdCAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICByZXR1cm4gY2hpbGRyZW4oX3RoaXMuc3RhdGUpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBjaGlsZHJlbjtcblx0ICAgIH07XG5cdFxuXHQgICAgX3RoaXMub25DbGljayA9IF90aGlzLm9uQ2xpY2suYmluZChfdGhpcyk7XG5cdCAgICBfdGhpcy5vbkRvY3VtZW50RHJvcCA9IF90aGlzLm9uRG9jdW1lbnREcm9wLmJpbmQoX3RoaXMpO1xuXHQgICAgX3RoaXMub25EcmFnU3RhcnQgPSBfdGhpcy5vbkRyYWdTdGFydC5iaW5kKF90aGlzKTtcblx0ICAgIF90aGlzLm9uRHJhZ0VudGVyID0gX3RoaXMub25EcmFnRW50ZXIuYmluZChfdGhpcyk7XG5cdCAgICBfdGhpcy5vbkRyYWdMZWF2ZSA9IF90aGlzLm9uRHJhZ0xlYXZlLmJpbmQoX3RoaXMpO1xuXHQgICAgX3RoaXMub25EcmFnT3ZlciA9IF90aGlzLm9uRHJhZ092ZXIuYmluZChfdGhpcyk7XG5cdCAgICBfdGhpcy5vbkRyb3AgPSBfdGhpcy5vbkRyb3AuYmluZChfdGhpcyk7XG5cdCAgICBfdGhpcy5vbkZpbGVEaWFsb2dDYW5jZWwgPSBfdGhpcy5vbkZpbGVEaWFsb2dDYW5jZWwuYmluZChfdGhpcyk7XG5cdCAgICBfdGhpcy5maWxlQWNjZXB0ZWQgPSBfdGhpcy5maWxlQWNjZXB0ZWQuYmluZChfdGhpcyk7XG5cdCAgICBfdGhpcy5zZXRSZWYgPSBfdGhpcy5zZXRSZWYuYmluZChfdGhpcyk7XG5cdCAgICBfdGhpcy5pc0ZpbGVEaWFsb2dBY3RpdmUgPSBmYWxzZTtcblx0ICAgIF90aGlzLnN0YXRlID0ge1xuXHQgICAgICBpc0RyYWdBY3RpdmU6IGZhbHNlLFxuXHQgICAgICBhY2NlcHRlZEZpbGVzOiBbXSxcblx0ICAgICAgcmVqZWN0ZWRGaWxlczogW11cblx0ICAgIH07XG5cdCAgICByZXR1cm4gX3RoaXM7XG5cdCAgfVxuXHRcblx0ICBfY3JlYXRlQ2xhc3MoRHJvcHpvbmUsIFt7XG5cdCAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdCAgICAgIHZhciBwcmV2ZW50RHJvcE9uRG9jdW1lbnQgPSB0aGlzLnByb3BzLnByZXZlbnREcm9wT25Eb2N1bWVudDtcblx0XG5cdCAgICAgIHRoaXMuZHJhZ1RhcmdldHMgPSBbXTtcblx0XG5cdCAgICAgIGlmIChwcmV2ZW50RHJvcE9uRG9jdW1lbnQpIHtcblx0ICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIERyb3B6b25lLm9uRG9jdW1lbnREcmFnT3ZlciwgZmFsc2UpO1xuXHQgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLm9uRG9jdW1lbnREcm9wLCBmYWxzZSk7XG5cdCAgICAgIH1cblx0ICAgICAgLy8gVHJpZWQgaW1wbGVtZW50aW5nIGFkZEV2ZW50TGlzdGVuZXIsIGJ1dCBkaWRuJ3Qgd29yayBvdXRcblx0ICAgICAgZG9jdW1lbnQuYm9keS5vbmZvY3VzID0gdGhpcy5vbkZpbGVEaWFsb2dDYW5jZWw7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHQgICAgICB2YXIgcHJldmVudERyb3BPbkRvY3VtZW50ID0gdGhpcy5wcm9wcy5wcmV2ZW50RHJvcE9uRG9jdW1lbnQ7XG5cdFxuXHQgICAgICBpZiAocHJldmVudERyb3BPbkRvY3VtZW50KSB7XG5cdCAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBEcm9wem9uZS5vbkRvY3VtZW50RHJhZ092ZXIpO1xuXHQgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLm9uRG9jdW1lbnREcm9wKTtcblx0ICAgICAgfVxuXHQgICAgICAvLyBDYW4gYmUgcmVwbGFjZWQgd2l0aCByZW1vdmVFdmVudExpc3RlbmVyLCBpZiBhZGRFdmVudExpc3RlbmVyIHdvcmtzXG5cdCAgICAgIGRvY3VtZW50LmJvZHkub25mb2N1cyA9IG51bGw7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnb25Eb2N1bWVudERyb3AnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRG9jdW1lbnREcm9wKGUpIHtcblx0ICAgICAgaWYgKHRoaXMubm9kZS5jb250YWlucyhlLnRhcmdldCkpIHtcblx0ICAgICAgICAvLyBpZiB3ZSBpbnRlcmNlcHRlZCBhbiBldmVudCBmb3Igb3VyIGluc3RhbmNlLCBsZXQgaXQgcHJvcGFnYXRlIGRvd24gdG8gdGhlIGluc3RhbmNlJ3Mgb25Ecm9wIGhhbmRsZXJcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgICB0aGlzLmRyYWdUYXJnZXRzID0gW107XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnb25EcmFnU3RhcnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGUpIHtcblx0ICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnU3RhcnQpIHtcblx0ICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ1N0YXJ0LmNhbGwodGhpcywgZSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdvbkRyYWdFbnRlcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnRW50ZXIoZSkge1xuXHQgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cdFxuXHQgICAgICAvLyBDb3VudCB0aGUgZHJvcHpvbmUgYW5kIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBlbnRlcmVkLlxuXHQgICAgICBpZiAodGhpcy5kcmFnVGFyZ2V0cy5pbmRleE9mKGUudGFyZ2V0KSA9PT0gLTEpIHtcblx0ICAgICAgICB0aGlzLmRyYWdUYXJnZXRzLnB1c2goZS50YXJnZXQpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB2YXIgZmlsZXMgPSAoMCwgX2dldERhdGFUcmFuc2Zlckl0ZW1zMi5kZWZhdWx0KShlKTtcblx0ICAgICAgdmFyIGFsbEZpbGVzQWNjZXB0ZWQgPSB0aGlzLmFsbEZpbGVzQWNjZXB0ZWQoZmlsZXMpO1xuXHQgICAgICB2YXIgaXNNdWx0aXBsZUFsbG93ZWQgPSB0aGlzLnByb3BzLm11bHRpcGxlIHx8IGZpbGVzLmxlbmd0aCA8PSAxO1xuXHRcblx0ICAgICAgdGhpcy5zZXRTdGF0ZSh7XG5cdCAgICAgICAgaXNEcmFnQWN0aXZlOiBhbGxGaWxlc0FjY2VwdGVkLFxuXHQgICAgICAgIGlzRHJhZ1JlamVjdDogIWFsbEZpbGVzQWNjZXB0ZWQgfHwgIWlzTXVsdGlwbGVBbGxvd2VkXG5cdCAgICAgIH0pO1xuXHRcblx0ICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnRW50ZXIpIHtcblx0ICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ0VudGVyLmNhbGwodGhpcywgZSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdvbkRyYWdPdmVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWdPdmVyKGUpIHtcblx0ICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cdCAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblx0ICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cdCAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgIC8vIGNvbnRpbnVlIHJlZ2FyZGxlc3Mgb2YgZXJyb3Jcblx0ICAgICAgfVxuXHRcblx0ICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnT3Zlcikge1xuXHQgICAgICAgIHRoaXMucHJvcHMub25EcmFnT3Zlci5jYWxsKHRoaXMsIGUpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdvbkRyYWdMZWF2ZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnTGVhdmUoZSkge1xuXHQgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblx0XG5cdCAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblx0XG5cdCAgICAgIC8vIE9ubHkgZGVhY3RpdmF0ZSBvbmNlIHRoZSBkcm9wem9uZSBhbmQgYWxsIGNoaWxkcmVuIGhhdmUgYmVlbiBsZWZ0LlxuXHQgICAgICB0aGlzLmRyYWdUYXJnZXRzID0gdGhpcy5kcmFnVGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG5cdCAgICAgICAgcmV0dXJuIGVsICE9PSBlLnRhcmdldCAmJiBfdGhpczIubm9kZS5jb250YWlucyhlbCk7XG5cdCAgICAgIH0pO1xuXHQgICAgICBpZiAodGhpcy5kcmFnVGFyZ2V0cy5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB0aGlzLnNldFN0YXRlKHtcblx0ICAgICAgICBpc0RyYWdBY3RpdmU6IGZhbHNlLFxuXHQgICAgICAgIGlzRHJhZ1JlamVjdDogZmFsc2Vcblx0ICAgICAgfSk7XG5cdFxuXHQgICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdMZWF2ZSkge1xuXHQgICAgICAgIHRoaXMucHJvcHMub25EcmFnTGVhdmUuY2FsbCh0aGlzLCBlKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ29uRHJvcCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gb25Ecm9wKGUpIHtcblx0ICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cdFxuXHQgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcblx0ICAgICAgICAgIG9uRHJvcCA9IF9wcm9wcy5vbkRyb3AsXG5cdCAgICAgICAgICBvbkRyb3BBY2NlcHRlZCA9IF9wcm9wcy5vbkRyb3BBY2NlcHRlZCxcblx0ICAgICAgICAgIG9uRHJvcFJlamVjdGVkID0gX3Byb3BzLm9uRHJvcFJlamVjdGVkLFxuXHQgICAgICAgICAgbXVsdGlwbGUgPSBfcHJvcHMubXVsdGlwbGUsXG5cdCAgICAgICAgICBkaXNhYmxlUHJldmlldyA9IF9wcm9wcy5kaXNhYmxlUHJldmlldztcblx0XG5cdCAgICAgIHZhciBmaWxlTGlzdCA9ICgwLCBfZ2V0RGF0YVRyYW5zZmVySXRlbXMyLmRlZmF1bHQpKGUpO1xuXHQgICAgICB2YXIgYWNjZXB0ZWRGaWxlcyA9IFtdO1xuXHQgICAgICB2YXIgcmVqZWN0ZWRGaWxlcyA9IFtdO1xuXHRcblx0ICAgICAgLy8gU3RvcCBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Jcblx0ICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcblx0ICAgICAgLy8gUmVzZXQgdGhlIGNvdW50ZXIgYWxvbmcgd2l0aCB0aGUgZHJhZyBvbiBhIGRyb3AuXG5cdCAgICAgIHRoaXMuZHJhZ1RhcmdldHMgPSBbXTtcblx0ICAgICAgdGhpcy5pc0ZpbGVEaWFsb2dBY3RpdmUgPSBmYWxzZTtcblx0XG5cdCAgICAgIGZpbGVMaXN0LmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcblx0ICAgICAgICBpZiAoIWRpc2FibGVQcmV2aWV3KSB7XG5cdCAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICBmaWxlLnByZXZpZXcgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXHQgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdlbmVyYXRlIHByZXZpZXcgZm9yIGZpbGUnLCBmaWxlLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgaWYgKF90aGlzMy5maWxlQWNjZXB0ZWQoZmlsZSkgJiYgX3RoaXMzLmZpbGVNYXRjaFNpemUoZmlsZSkpIHtcblx0ICAgICAgICAgIGFjY2VwdGVkRmlsZXMucHVzaChmaWxlKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgcmVqZWN0ZWRGaWxlcy5wdXNoKGZpbGUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdFxuXHQgICAgICBpZiAoIW11bHRpcGxlKSB7XG5cdCAgICAgICAgLy8gaWYgbm90IGluIG11bHRpIG1vZGUgYWRkIGFueSBleHRyYSBhY2NlcHRlZCBmaWxlcyB0byByZWplY3RlZC5cblx0ICAgICAgICAvLyBUaGlzIHdpbGwgYWxsb3cgZW5kIHVzZXJzIHRvIGVhc2lseSBpZ25vcmUgYSBtdWx0aSBmaWxlIGRyb3AgaW4gXCJzaW5nbGVcIiBtb2RlLlxuXHQgICAgICAgIHJlamVjdGVkRmlsZXMucHVzaC5hcHBseShyZWplY3RlZEZpbGVzLCBfdG9Db25zdW1hYmxlQXJyYXkoYWNjZXB0ZWRGaWxlcy5zcGxpY2UoMSkpKTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgaWYgKG9uRHJvcCkge1xuXHQgICAgICAgIG9uRHJvcC5jYWxsKHRoaXMsIGFjY2VwdGVkRmlsZXMsIHJlamVjdGVkRmlsZXMsIGUpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAocmVqZWN0ZWRGaWxlcy5sZW5ndGggPiAwICYmIG9uRHJvcFJlamVjdGVkKSB7XG5cdCAgICAgICAgb25Ecm9wUmVqZWN0ZWQuY2FsbCh0aGlzLCByZWplY3RlZEZpbGVzLCBlKTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgaWYgKGFjY2VwdGVkRmlsZXMubGVuZ3RoID4gMCAmJiBvbkRyb3BBY2NlcHRlZCkge1xuXHQgICAgICAgIG9uRHJvcEFjY2VwdGVkLmNhbGwodGhpcywgYWNjZXB0ZWRGaWxlcywgZSk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIFJlc2V0IGRyYWcgc3RhdGVcblx0ICAgICAgdGhpcy5zZXRTdGF0ZSh7XG5cdCAgICAgICAgaXNEcmFnQWN0aXZlOiBmYWxzZSxcblx0ICAgICAgICBpc0RyYWdSZWplY3Q6IGZhbHNlLFxuXHQgICAgICAgIGFjY2VwdGVkRmlsZXM6IGFjY2VwdGVkRmlsZXMsXG5cdCAgICAgICAgcmVqZWN0ZWRGaWxlczogcmVqZWN0ZWRGaWxlc1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdvbkNsaWNrJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcblx0ICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuXHQgICAgICAgICAgb25DbGljayA9IF9wcm9wczIub25DbGljayxcblx0ICAgICAgICAgIGRpc2FibGVDbGljayA9IF9wcm9wczIuZGlzYWJsZUNsaWNrO1xuXHRcblx0ICAgICAgaWYgKCFkaXNhYmxlQ2xpY2spIHtcblx0ICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHQgICAgICAgIHRoaXMub3BlbigpO1xuXHQgICAgICAgIGlmIChvbkNsaWNrKSB7XG5cdCAgICAgICAgICBvbkNsaWNrLmNhbGwodGhpcywgZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnb25GaWxlRGlhbG9nQ2FuY2VsJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBvbkZpbGVEaWFsb2dDYW5jZWwoKSB7XG5cdCAgICAgIC8vIHRpbWVvdXQgd2lsbCBub3QgcmVjb2duaXplIGNvbnRleHQgb2YgdGhpcyBtZXRob2Rcblx0ICAgICAgdmFyIG9uRmlsZURpYWxvZ0NhbmNlbCA9IHRoaXMucHJvcHMub25GaWxlRGlhbG9nQ2FuY2VsO1xuXHQgICAgICB2YXIgZmlsZUlucHV0RWwgPSB0aGlzLmZpbGVJbnB1dEVsO1xuXHQgICAgICB2YXIgaXNGaWxlRGlhbG9nQWN0aXZlID0gdGhpcy5pc0ZpbGVEaWFsb2dBY3RpdmU7XG5cdCAgICAgIC8vIGV4ZWN1dGUgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgb25GaWxlRGlhbG9nQ2FuY2VsIGlzIGRlZmluZWQgYW5kIEZpbGVEaWFsb2dcblx0ICAgICAgLy8gaXMgb3BlbmVkIGluIHRoZSBicm93c2VyXG5cdFxuXHQgICAgICBpZiAob25GaWxlRGlhbG9nQ2FuY2VsICYmIGlzRmlsZURpYWxvZ0FjdGl2ZSkge1xuXHQgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgLy8gUmV0dXJucyBhbiBvYmplY3QgYXMgRmlsZUxpc3Rcblx0ICAgICAgICAgIHZhciBGaWxlTGlzdCA9IGZpbGVJbnB1dEVsLmZpbGVzO1xuXHQgICAgICAgICAgaWYgKCFGaWxlTGlzdC5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgaXNGaWxlRGlhbG9nQWN0aXZlID0gZmFsc2U7XG5cdCAgICAgICAgICAgIG9uRmlsZURpYWxvZ0NhbmNlbCgpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0sIDMwMCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzZXRSZWYnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJlZihyZWYpIHtcblx0ICAgICAgdGhpcy5ub2RlID0gcmVmO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2ZpbGVBY2NlcHRlZCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZmlsZUFjY2VwdGVkKGZpbGUpIHtcblx0ICAgICAgLy8gRmlyZWZveCB2ZXJzaW9ucyBwcmlvciB0byA1MyByZXR1cm4gYSBib2d1cyBNSU1FIHR5cGUgZm9yIGV2ZXJ5IGZpbGUgZHJhZywgc28gZHJhZ292ZXJzIHdpdGhcblx0ICAgICAgLy8gdGhhdCBNSU1FIHR5cGUgd2lsbCBhbHdheXMgYmUgYWNjZXB0ZWRcblx0ICAgICAgcmV0dXJuIGZpbGUudHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3gtbW96LWZpbGUnIHx8ICgwLCBfYXR0ckFjY2VwdDIuZGVmYXVsdCkoZmlsZSwgdGhpcy5wcm9wcy5hY2NlcHQpO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2ZpbGVNYXRjaFNpemUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGZpbGVNYXRjaFNpemUoZmlsZSkge1xuXHQgICAgICByZXR1cm4gZmlsZS5zaXplIDw9IHRoaXMucHJvcHMubWF4U2l6ZSAmJiBmaWxlLnNpemUgPj0gdGhpcy5wcm9wcy5taW5TaXplO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2FsbEZpbGVzQWNjZXB0ZWQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGFsbEZpbGVzQWNjZXB0ZWQoZmlsZXMpIHtcblx0ICAgICAgcmV0dXJuIGZpbGVzLmV2ZXJ5KHRoaXMuZmlsZUFjY2VwdGVkKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIE9wZW4gc3lzdGVtIGZpbGUgdXBsb2FkIGRpYWxvZy5cblx0ICAgICAqXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0XG5cdCAgfSwge1xuXHQgICAga2V5OiAnb3BlbicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbigpIHtcblx0ICAgICAgdGhpcy5pc0ZpbGVEaWFsb2dBY3RpdmUgPSB0cnVlO1xuXHQgICAgICB0aGlzLmZpbGVJbnB1dEVsLnZhbHVlID0gbnVsbDtcblx0ICAgICAgdGhpcy5maWxlSW5wdXRFbC5jbGljaygpO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ3JlbmRlcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHQgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblx0XG5cdCAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcblx0ICAgICAgICAgIGFjY2VwdCA9IF9wcm9wczMuYWNjZXB0LFxuXHQgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3Byb3BzMy5hY3RpdmVDbGFzc05hbWUsXG5cdCAgICAgICAgICBpbnB1dFByb3BzID0gX3Byb3BzMy5pbnB1dFByb3BzLFxuXHQgICAgICAgICAgbXVsdGlwbGUgPSBfcHJvcHMzLm11bHRpcGxlLFxuXHQgICAgICAgICAgbmFtZSA9IF9wcm9wczMubmFtZSxcblx0ICAgICAgICAgIHJlamVjdENsYXNzTmFtZSA9IF9wcm9wczMucmVqZWN0Q2xhc3NOYW1lLFxuXHQgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMzLmNoaWxkcmVuLFxuXHQgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMzLCBbJ2FjY2VwdCcsICdhY3RpdmVDbGFzc05hbWUnLCAnaW5wdXRQcm9wcycsICdtdWx0aXBsZScsICduYW1lJywgJ3JlamVjdENsYXNzTmFtZScsICdjaGlsZHJlbiddKTtcblx0XG5cdCAgICAgIHZhciBhY3RpdmVTdHlsZSA9IHJlc3QuYWN0aXZlU3R5bGUsXG5cdCAgICAgICAgICBjbGFzc05hbWUgPSByZXN0LmNsYXNzTmFtZSxcblx0ICAgICAgICAgIHJlamVjdFN0eWxlID0gcmVzdC5yZWplY3RTdHlsZSxcblx0ICAgICAgICAgIHN0eWxlID0gcmVzdC5zdHlsZSxcblx0ICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHJlc3QsIFsnYWN0aXZlU3R5bGUnLCAnY2xhc3NOYW1lJywgJ3JlamVjdFN0eWxlJywgJ3N0eWxlJ10pO1xuXHRcblx0ICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG5cdCAgICAgICAgICBpc0RyYWdBY3RpdmUgPSBfc3RhdGUuaXNEcmFnQWN0aXZlLFxuXHQgICAgICAgICAgaXNEcmFnUmVqZWN0ID0gX3N0YXRlLmlzRHJhZ1JlamVjdDtcblx0XG5cdFxuXHQgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgfHwgJyc7XG5cdFxuXHQgICAgICBpZiAoaXNEcmFnQWN0aXZlICYmIGFjdGl2ZUNsYXNzTmFtZSkge1xuXHQgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBhY3RpdmVDbGFzc05hbWU7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKGlzRHJhZ1JlamVjdCAmJiByZWplY3RDbGFzc05hbWUpIHtcblx0ICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgcmVqZWN0Q2xhc3NOYW1lO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAoIWNsYXNzTmFtZSAmJiAhc3R5bGUgJiYgIWFjdGl2ZVN0eWxlICYmICFyZWplY3RTdHlsZSkge1xuXHQgICAgICAgIHN0eWxlID0ge1xuXHQgICAgICAgICAgd2lkdGg6IDIwMCxcblx0ICAgICAgICAgIGhlaWdodDogMjAwLFxuXHQgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXG5cdCAgICAgICAgICBib3JkZXJDb2xvcjogJyM2NjYnLFxuXHQgICAgICAgICAgYm9yZGVyU3R5bGU6ICdkYXNoZWQnLFxuXHQgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBhY3RpdmVTdHlsZSA9IHtcblx0ICAgICAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuXHQgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjNmM2Jyxcblx0ICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnXG5cdCAgICAgICAgfTtcblx0ICAgICAgICByZWplY3RTdHlsZSA9IHtcblx0ICAgICAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuXHQgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjYzY2Jyxcblx0ICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnXG5cdCAgICAgICAgfTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIGFwcGxpZWRTdHlsZSA9IHZvaWQgMDtcblx0ICAgICAgaWYgKGFjdGl2ZVN0eWxlICYmIGlzRHJhZ0FjdGl2ZSkge1xuXHQgICAgICAgIGFwcGxpZWRTdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSwgYWN0aXZlU3R5bGUpO1xuXHQgICAgICB9IGVsc2UgaWYgKHJlamVjdFN0eWxlICYmIGlzRHJhZ1JlamVjdCkge1xuXHQgICAgICAgIGFwcGxpZWRTdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSwgcmVqZWN0U3R5bGUpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGFwcGxpZWRTdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBpbnB1dEF0dHJpYnV0ZXMgPSB7XG5cdCAgICAgICAgYWNjZXB0OiBhY2NlcHQsXG5cdCAgICAgICAgdHlwZTogJ2ZpbGUnLFxuXHQgICAgICAgIHN0eWxlOiB7IGRpc3BsYXk6ICdub25lJyB9LFxuXHQgICAgICAgIG11bHRpcGxlOiBzdXBwb3J0TXVsdGlwbGUgJiYgbXVsdGlwbGUsXG5cdCAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWwpIHtcblx0ICAgICAgICAgIHJldHVybiBfdGhpczQuZmlsZUlucHV0RWwgPSBlbDtcblx0ICAgICAgICB9LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdCAgICAgICAgb25DaGFuZ2U6IHRoaXMub25Ecm9wXG5cdCAgICAgIH07XG5cdFxuXHQgICAgICBpZiAobmFtZSAmJiBuYW1lLmxlbmd0aCkge1xuXHQgICAgICAgIGlucHV0QXR0cmlidXRlcy5uYW1lID0gbmFtZTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gUmVtb3ZlIGN1c3RvbSBwcm9wZXJ0aWVzIGJlZm9yZSBwYXNzaW5nIHRoZW0gdG8gdGhlIHdyYXBwZXIgZGl2IGVsZW1lbnRcblx0ICAgICAgdmFyIGN1c3RvbVByb3BzID0gWydhY2NlcHRlZEZpbGVzJywgJ3ByZXZlbnREcm9wT25Eb2N1bWVudCcsICdkaXNhYmxlUHJldmlldycsICdkaXNhYmxlQ2xpY2snLCAnb25Ecm9wQWNjZXB0ZWQnLCAnb25Ecm9wUmVqZWN0ZWQnLCAnb25GaWxlRGlhbG9nQ2FuY2VsJywgJ21heFNpemUnLCAnbWluU2l6ZSddO1xuXHQgICAgICB2YXIgZGl2UHJvcHMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMpO1xuXHQgICAgICBjdXN0b21Qcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG5cdCAgICAgICAgcmV0dXJuIGRlbGV0ZSBkaXZQcm9wc1twcm9wXTtcblx0ICAgICAgfSk7XG5cdFxuXHQgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdCAgICAgICAgJ2RpdicsXG5cdCAgICAgICAgX2V4dGVuZHMoe1xuXHQgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG5cdCAgICAgICAgICBzdHlsZTogYXBwbGllZFN0eWxlXG5cdCAgICAgICAgfSwgZGl2UHJvcHMgLyogZXhwYW5kIHVzZXIgcHJvdmlkZWQgcHJvcHMgZmlyc3Qgc28gZXZlbnQgaGFuZGxlcnMgYXJlIG5ldmVyIG92ZXJyaWRkZW4gKi8sIHtcblx0ICAgICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcblx0ICAgICAgICAgIG9uRHJhZ1N0YXJ0OiB0aGlzLm9uRHJhZ1N0YXJ0LFxuXHQgICAgICAgICAgb25EcmFnRW50ZXI6IHRoaXMub25EcmFnRW50ZXIsXG5cdCAgICAgICAgICBvbkRyYWdPdmVyOiB0aGlzLm9uRHJhZ092ZXIsXG5cdCAgICAgICAgICBvbkRyYWdMZWF2ZTogdGhpcy5vbkRyYWdMZWF2ZSxcblx0ICAgICAgICAgIG9uRHJvcDogdGhpcy5vbkRyb3AsXG5cdCAgICAgICAgICByZWY6IHRoaXMuc2V0UmVmXG5cdCAgICAgICAgfSksXG5cdCAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbihjaGlsZHJlbiksXG5cdCAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoe30sIGlucHV0UHJvcHMgLyogZXhwYW5kIHVzZXIgcHJvdmlkZWQgaW5wdXRQcm9wcyBmaXJzdCBzbyBpbnB1dEF0dHJpYnV0ZXMgb3ZlcnJpZGUgdGhlbSAqLywgaW5wdXRBdHRyaWJ1dGVzKSlcblx0ICAgICAgKTtcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBEcm9wem9uZTtcblx0fShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblx0XG5cdERyb3B6b25lLnByb3BUeXBlcyA9IHtcblx0ICAvKipcblx0ICAgKiBBbGxvdyBzcGVjaWZpYyB0eXBlcyBvZiBmaWxlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9va29uZXQvYXR0ci1hY2NlcHQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cdCAgICogS2VlcCBpbiBtaW5kIHRoYXQgbWltZSB0eXBlIGRldGVybWluYXRpb24gaXMgbm90IHJlbGlhYmxlIGFjY3Jvc3MgcGxhdGZvcm1zLiBDU1YgZmlsZXMsXG5cdCAgICogZm9yIGV4YW1wbGUsIGFyZSByZXBvcnRlZCBhcyB0ZXh0L3BsYWluIHVuZGVyIG1hY09TIGJ1dCBhcyBhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwgdW5kZXJcblx0ICAgKiBXaW5kb3dzLiBJbiBzb21lIGNhc2VzIHRoZXJlIG1pZ2h0IG5vdCBiZSBhIG1pbWUgdHlwZSBzZXQgYXQgYWxsLlxuXHQgICAqIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL29rb25ldC9yZWFjdC1kcm9wem9uZS9pc3N1ZXMvMjc2XG5cdCAgICovXG5cdCAgYWNjZXB0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcblx0XG5cdCAgLyoqXG5cdCAgICogQ29udGVudHMgb2YgdGhlIGRyb3B6b25lXG5cdCAgICovXG5cdCAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsIF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY10pLFxuXHRcblx0ICAvKipcblx0ICAgKiBEaXNhbGxvdyBjbGlja2luZyBvbiB0aGUgZHJvcHpvbmUgY29udGFpbmVyIHRvIG9wZW4gZmlsZSBkaWFsb2dcblx0ICAgKi9cblx0ICBkaXNhYmxlQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcblx0XG5cdCAgLyoqXG5cdCAgICogRW5hYmxlL2Rpc2FibGUgcHJldmlldyBnZW5lcmF0aW9uXG5cdCAgICovXG5cdCAgZGlzYWJsZVByZXZpZXc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcblx0XG5cdCAgLyoqXG5cdCAgICogSWYgZmFsc2UsIGFsbG93IGRyb3BwZWQgaXRlbXMgdG8gdGFrZSBvdmVyIHRoZSBjdXJyZW50IGJyb3dzZXIgd2luZG93XG5cdCAgICovXG5cdCAgcHJldmVudERyb3BPbkRvY3VtZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG5cdFxuXHQgIC8qKlxuXHQgICAqIFBhc3MgYWRkaXRpb25hbCBhdHRyaWJ1dGVzIHRvIHRoZSBgPGlucHV0IHR5cGU9XCJmaWxlXCIvPmAgdGFnXG5cdCAgICovXG5cdCAgaW5wdXRQcm9wczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFsbG93IGRyb3BwaW5nIG11bHRpcGxlIGZpbGVzXG5cdCAgICovXG5cdCAgbXVsdGlwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcblx0XG5cdCAgLyoqXG5cdCAgICogYG5hbWVgIGF0dHJpYnV0ZSBmb3IgdGhlIGlucHV0IHRhZ1xuXHQgICAqL1xuXHQgIG5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuXHRcblx0ICAvKipcblx0ICAgKiBNYXhpbXVtIGZpbGUgc2l6ZVxuXHQgICAqL1xuXHQgIG1heFNpemU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuXHRcblx0ICAvKipcblx0ICAgKiBNaW5pbXVtIGZpbGUgc2l6ZVxuXHQgICAqL1xuXHQgIG1pblNpemU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuXHRcblx0ICAvKipcblx0ICAgKiBjbGFzc05hbWVcblx0ICAgKi9cblx0ICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuXHRcblx0ICAvKipcblx0ICAgKiBjbGFzc05hbWUgZm9yIGFjY2VwdGVkIHN0YXRlXG5cdCAgICovXG5cdCAgYWN0aXZlQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcblx0XG5cdCAgLyoqXG5cdCAgICogY2xhc3NOYW1lIGZvciByZWplY3RlZCBzdGF0ZVxuXHQgICAqL1xuXHQgIHJlamVjdENsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG5cdFxuXHQgIC8qKlxuXHQgICAqIENTUyBzdHlsZXMgdG8gYXBwbHlcblx0ICAgKi9cblx0ICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG5cdFxuXHQgIC8qKlxuXHQgICAqIENTUyBzdHlsZXMgdG8gYXBwbHkgd2hlbiBkcm9wIHdpbGwgYmUgYWNjZXB0ZWRcblx0ICAgKi9cblx0ICBhY3RpdmVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG5cdFxuXHQgIC8qKlxuXHQgICAqIENTUyBzdHlsZXMgdG8gYXBwbHkgd2hlbiBkcm9wIHdpbGwgYmUgcmVqZWN0ZWRcblx0ICAgKi9cblx0ICByZWplY3RTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG5cdFxuXHQgIC8qKlxuXHQgICAqIG9uQ2xpY2sgY2FsbGJhY2tcblx0ICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgICAqL1xuXHQgIG9uQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcblx0XG5cdCAgLyoqXG5cdCAgICogb25Ecm9wIGNhbGxiYWNrXG5cdCAgICovXG5cdCAgb25Ecm9wOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdFxuXHQgIC8qKlxuXHQgICAqIG9uRHJvcEFjY2VwdGVkIGNhbGxiYWNrXG5cdCAgICovXG5cdCAgb25Ecm9wQWNjZXB0ZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcblx0XG5cdCAgLyoqXG5cdCAgICogb25Ecm9wUmVqZWN0ZWQgY2FsbGJhY2tcblx0ICAgKi9cblx0ICBvbkRyb3BSZWplY3RlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXHRcblx0ICAvKipcblx0ICAgKiBvbkRyYWdTdGFydCBjYWxsYmFja1xuXHQgICAqL1xuXHQgIG9uRHJhZ1N0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdFxuXHQgIC8qKlxuXHQgICAqIG9uRHJhZ0VudGVyIGNhbGxiYWNrXG5cdCAgICovXG5cdCAgb25EcmFnRW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcblx0XG5cdCAgLyoqXG5cdCAgICogb25EcmFnT3ZlciBjYWxsYmFja1xuXHQgICAqL1xuXHQgIG9uRHJhZ092ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcblx0XG5cdCAgLyoqXG5cdCAgICogb25EcmFnTGVhdmUgY2FsbGJhY2tcblx0ICAgKi9cblx0ICBvbkRyYWdMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXHRcblx0ICAvKipcblx0ICAgKiBQcm92aWRlIGEgY2FsbGJhY2sgb24gY2xpY2tpbmcgdGhlIGNhbmNlbCBidXR0b24gb2YgdGhlIGZpbGUgZGlhbG9nXG5cdCAgICovXG5cdCAgb25GaWxlRGlhbG9nQ2FuY2VsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcblx0fTtcblx0XG5cdERyb3B6b25lLmRlZmF1bHRQcm9wcyA9IHtcblx0ICBwcmV2ZW50RHJvcE9uRG9jdW1lbnQ6IHRydWUsXG5cdCAgZGlzYWJsZVByZXZpZXc6IGZhbHNlLFxuXHQgIGRpc2FibGVDbGljazogZmFsc2UsXG5cdCAgbXVsdGlwbGU6IHRydWUsXG5cdCAgbWF4U2l6ZTogSW5maW5pdHksXG5cdCAgbWluU2l6ZTogMFxuXHR9O1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gRHJvcHpvbmU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygxKSkpXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXHR2YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cdFxuXHQvLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcblx0Ly8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG5cdC8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcblx0Ly8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblx0XG5cdHZhciBjYWNoZWRTZXRUaW1lb3V0O1xuXHR2YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXHRcblx0ZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xuXHR9XG5cdGZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcblx0fVxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG5cdCAgICAgICAgfVxuXHQgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuXHQgICAgfVxuXHQgICAgdHJ5IHtcblx0ICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcblx0ICAgICAgICB9XG5cdCAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcblx0ICAgIH1cblx0fSAoKSlcblx0ZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcblx0ICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG5cdCAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG5cdCAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcblx0ICAgIH1cblx0ICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG5cdCAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcblx0ICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcblx0ICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuXHQgICAgfVxuXHQgICAgdHJ5IHtcblx0ICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG5cdCAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcblx0ICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG5cdCAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcblx0ICAgICAgICB9IGNhdGNoKGUpe1xuXHQgICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuXHQgICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHRcblx0XG5cdH1cblx0ZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuXHQgICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG5cdCAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG5cdCAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuXHQgICAgfVxuXHQgICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuXHQgICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG5cdCAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuXHQgICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcblx0ICAgIH1cblx0ICAgIHRyeSB7XG5cdCAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuXHQgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcblx0ICAgIH0gY2F0Y2ggKGUpe1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcblx0ICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG5cdCAgICAgICAgfSBjYXRjaCAoZSl7XG5cdCAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuXHQgICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG5cdCAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0XG5cdFxuXHRcblx0fVxuXHR2YXIgcXVldWUgPSBbXTtcblx0dmFyIGRyYWluaW5nID0gZmFsc2U7XG5cdHZhciBjdXJyZW50UXVldWU7XG5cdHZhciBxdWV1ZUluZGV4ID0gLTE7XG5cdFxuXHRmdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG5cdCAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBkcmFpbmluZyA9IGZhbHNlO1xuXHQgICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcblx0ICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG5cdCAgICB9XG5cdCAgICBpZiAocXVldWUubGVuZ3RoKSB7XG5cdCAgICAgICAgZHJhaW5RdWV1ZSgpO1xuXHQgICAgfVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuXHQgICAgaWYgKGRyYWluaW5nKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG5cdCAgICBkcmFpbmluZyA9IHRydWU7XG5cdFxuXHQgICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcblx0ICAgIHdoaWxlKGxlbikge1xuXHQgICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuXHQgICAgICAgIHF1ZXVlID0gW107XG5cdCAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuXHQgICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG5cdCAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuXHQgICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcblx0ICAgIH1cblx0ICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG5cdCAgICBkcmFpbmluZyA9IGZhbHNlO1xuXHQgICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHR9XG5cdFxuXHRwcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuXHQgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuXHQgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcblx0ICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG5cdCAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcblx0ICAgIH1cblx0fTtcblx0XG5cdC8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcblx0ZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG5cdCAgICB0aGlzLmZ1biA9IGZ1bjtcblx0ICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcblx0fVxuXHRJdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcblx0fTtcblx0cHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcblx0cHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcblx0cHJvY2Vzcy5lbnYgPSB7fTtcblx0cHJvY2Vzcy5hcmd2ID0gW107XG5cdHByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xuXHRwcm9jZXNzLnZlcnNpb25zID0ge307XG5cdFxuXHRmdW5jdGlvbiBub29wKCkge31cblx0XG5cdHByb2Nlc3Mub24gPSBub29wO1xuXHRwcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcblx0cHJvY2Vzcy5vbmNlID0gbm9vcDtcblx0cHJvY2Vzcy5vZmYgPSBub29wO1xuXHRwcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcblx0cHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xuXHRwcm9jZXNzLmVtaXQgPSBub29wO1xuXHRcblx0cHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcblx0fTtcblx0XG5cdHByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5cdHByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xuXHR9O1xuXHRwcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4oZSl7aWYocltlXSlyZXR1cm4gcltlXS5leHBvcnRzO3ZhciBvPXJbZV09e2V4cG9ydHM6e30saWQ6ZSxsb2FkZWQ6ITF9O3JldHVybiB0W2VdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubG9hZGVkPSEwLG8uZXhwb3J0c312YXIgcj17fTtyZXR1cm4gbi5tPXQsbi5jPXIsbi5wPVwiXCIsbigwKX0oW2Z1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtuLl9fZXNNb2R1bGU9ITAscig4KSxyKDkpLG5bXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKHQsbil7aWYodCYmbil7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgcj1BcnJheS5pc0FycmF5KG4pP246bi5zcGxpdChcIixcIiksZT10Lm5hbWV8fFwiXCIsbz10LnR5cGV8fFwiXCIsaT1vLnJlcGxhY2UoL1xcLy4qJC8sXCJcIik7cmV0dXJue3Y6ci5zb21lKGZ1bmN0aW9uKHQpe3ZhciBuPXQudHJpbSgpO3JldHVyblwiLlwiPT09bi5jaGFyQXQoMCk/ZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKG4udG9Mb3dlckNhc2UoKSk6L1xcL1xcKiQvLnRlc3Qobik/aT09PW4ucmVwbGFjZSgvXFwvLiokLyxcIlwiKTpvPT09bn0pfX0oKTtpZihcIm9iamVjdFwiPT10eXBlb2YgcilyZXR1cm4gci52fXJldHVybiEwfSx0LmV4cG9ydHM9bltcImRlZmF1bHRcIl19LGZ1bmN0aW9uKHQsbil7dmFyIHI9dC5leHBvcnRzPXt2ZXJzaW9uOlwiMS4yLjJcIn07XCJudW1iZXJcIj09dHlwZW9mIF9fZSYmKF9fZT1yKX0sZnVuY3Rpb24odCxuKXt2YXIgcj10LmV4cG9ydHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lk1hdGg9PU1hdGg/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLk1hdGg9PU1hdGg/c2VsZjpGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XCJudW1iZXJcIj09dHlwZW9mIF9fZyYmKF9fZz1yKX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMiksbz1yKDEpLGk9cig0KSx1PXIoMTkpLGM9XCJwcm90b3R5cGVcIixmPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkobixhcmd1bWVudHMpfX0scz1mdW5jdGlvbih0LG4scil7dmFyIGEscCxsLHksZD10JnMuRyxoPXQmcy5QLHY9ZD9lOnQmcy5TP2Vbbl18fChlW25dPXt9KTooZVtuXXx8e30pW2NdLHg9ZD9vOm9bbl18fChvW25dPXt9KTtkJiYocj1uKTtmb3IoYSBpbiByKXA9ISh0JnMuRikmJnYmJmEgaW4gdixsPShwP3Y6cilbYV0seT10JnMuQiYmcD9mKGwsZSk6aCYmXCJmdW5jdGlvblwiPT10eXBlb2YgbD9mKEZ1bmN0aW9uLmNhbGwsbCk6bCx2JiYhcCYmdSh2LGEsbCkseFthXSE9bCYmaSh4LGEseSksaCYmKCh4W2NdfHwoeFtjXT17fSkpW2FdPWwpfTtlLmNvcmU9byxzLkY9MSxzLkc9MixzLlM9NCxzLlA9OCxzLkI9MTYscy5XPTMyLHQuZXhwb3J0cz1zfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig1KSxvPXIoMTgpO3QuZXhwb3J0cz1yKDIyKT9mdW5jdGlvbih0LG4scil7cmV0dXJuIGUuc2V0RGVzYyh0LG4sbygxLHIpKX06ZnVuY3Rpb24odCxuLHIpe3JldHVybiB0W25dPXIsdH19LGZ1bmN0aW9uKHQsbil7dmFyIHI9T2JqZWN0O3QuZXhwb3J0cz17Y3JlYXRlOnIuY3JlYXRlLGdldFByb3RvOnIuZ2V0UHJvdG90eXBlT2YsaXNFbnVtOnt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLGdldERlc2M6ci5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Isc2V0RGVzYzpyLmRlZmluZVByb3BlcnR5LHNldERlc2NzOnIuZGVmaW5lUHJvcGVydGllcyxnZXRLZXlzOnIua2V5cyxnZXROYW1lczpyLmdldE93blByb3BlcnR5TmFtZXMsZ2V0U3ltYm9sczpyLmdldE93blByb3BlcnR5U3ltYm9scyxlYWNoOltdLmZvckVhY2h9fSxmdW5jdGlvbih0LG4pe3ZhciByPTAsZT1NYXRoLnJhbmRvbSgpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIlN5bWJvbChcIi5jb25jYXQodm9pZCAwPT09dD9cIlwiOnQsXCIpX1wiLCgrK3IrZSkudG9TdHJpbmcoMzYpKX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIwKShcIndrc1wiKSxvPXIoMikuU3ltYm9sO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZVt0XXx8KGVbdF09byYmb1t0XXx8KG98fHIoNikpKFwiU3ltYm9sLlwiK3QpKX19LGZ1bmN0aW9uKHQsbixyKXtyKDI2KSx0LmV4cG9ydHM9cigxKS5BcnJheS5zb21lfSxmdW5jdGlvbih0LG4scil7cigyNSksdC5leHBvcnRzPXIoMSkuU3RyaW5nLmVuZHNXaXRofSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhIGZ1bmN0aW9uIVwiKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsbil7dmFyIHI9e30udG9TdHJpbmc7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByLmNhbGwodCkuc2xpY2UoOCwtMSl9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigxMCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyKXtpZihlKHQpLHZvaWQgMD09PW4pcmV0dXJuIHQ7c3dpdGNoKHIpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIHQuY2FsbChuLHIpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKHIsZSl7cmV0dXJuIHQuY2FsbChuLHIsZSl9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24ocixlLG8pe3JldHVybiB0LmNhbGwobixyLGUsbyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKX19fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZih2b2lkIDA9PXQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiK3QpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLHIpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbj0vLi87dHJ5e1wiLy4vXCJbdF0obil9Y2F0Y2goZSl7dHJ5e3JldHVybiBuW3IoNykoXCJtYXRjaFwiKV09ITEsIVwiLy4vXCJbdF0obil9Y2F0Y2gobyl7fX1yZXR1cm4hMH19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4hIXQoKX1jYXRjaChuKXtyZXR1cm4hMH19fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD9udWxsIT09dDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMTYpLG89cigxMSksaT1yKDcpKFwibWF0Y2hcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBuO3JldHVybiBlKHQpJiYodm9pZCAwIT09KG49dFtpXSk/ISFuOlwiUmVnRXhwXCI9PW8odCkpfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm57ZW51bWVyYWJsZTohKDEmdCksY29uZmlndXJhYmxlOiEoMiZ0KSx3cml0YWJsZTohKDQmdCksdmFsdWU6bn19fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyKSxvPXIoNCksaT1yKDYpKFwic3JjXCIpLHU9XCJ0b1N0cmluZ1wiLGM9RnVuY3Rpb25bdV0sZj0oXCJcIitjKS5zcGxpdCh1KTtyKDEpLmluc3BlY3RTb3VyY2U9ZnVuY3Rpb24odCl7cmV0dXJuIGMuY2FsbCh0KX0sKHQuZXhwb3J0cz1mdW5jdGlvbih0LG4scix1KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYobyhyLGksdFtuXT9cIlwiK3Rbbl06Zi5qb2luKFN0cmluZyhuKSkpLFwibmFtZVwiaW4gcnx8KHIubmFtZT1uKSksdD09PWU/dFtuXT1yOih1fHxkZWxldGUgdFtuXSxvKHQsbixyKSl9KShGdW5jdGlvbi5wcm90b3R5cGUsdSxmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMmJnRoaXNbaV18fGMuY2FsbCh0aGlzKX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyKSxvPVwiX19jb3JlLWpzX3NoYXJlZF9fXCIsaT1lW29dfHwoZVtvXT17fSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBpW3RdfHwoaVt0XT17fSl9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigxNyksbz1yKDEzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLHIpe2lmKGUobikpdGhyb3cgVHlwZUVycm9yKFwiU3RyaW5nI1wiK3IrXCIgZG9lc24ndCBhY2NlcHQgcmVnZXghXCIpO3JldHVybiBTdHJpbmcobyh0KSl9fSxmdW5jdGlvbih0LG4scil7dC5leHBvcnRzPSFyKDE1KShmdW5jdGlvbigpe3JldHVybiA3IT1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiA3fX0pLmF9KX0sZnVuY3Rpb24odCxuKXt2YXIgcj1NYXRoLmNlaWwsZT1NYXRoLmZsb29yO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaXNOYU4odD0rdCk/MDoodD4wP2U6cikodCl9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyMyksbz1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+MD9vKGUodCksOTAwNzE5OTI1NDc0MDk5MSk6MH19LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDMpLG89cigyNCksaT1yKDIxKSx1PVwiZW5kc1dpdGhcIixjPVwiXCJbdV07ZShlLlArZS5GKnIoMTQpKHUpLFwiU3RyaW5nXCIse2VuZHNXaXRoOmZ1bmN0aW9uKHQpe3ZhciBuPWkodGhpcyx0LHUpLHI9YXJndW1lbnRzLGU9ci5sZW5ndGg+MT9yWzFdOnZvaWQgMCxmPW8obi5sZW5ndGgpLHM9dm9pZCAwPT09ZT9mOk1hdGgubWluKG8oZSksZiksYT1TdHJpbmcodCk7cmV0dXJuIGM/Yy5jYWxsKG4sYSxzKTpuLnNsaWNlKHMtYS5sZW5ndGgscyk9PT1hfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig1KSxvPXIoMyksaT1yKDEpLkFycmF5fHxBcnJheSx1PXt9LGM9ZnVuY3Rpb24odCxuKXtlLmVhY2guY2FsbCh0LnNwbGl0KFwiLFwiKSxmdW5jdGlvbih0KXt2b2lkIDA9PW4mJnQgaW4gaT91W3RdPWlbdF06dCBpbltdJiYodVt0XT1yKDEyKShGdW5jdGlvbi5jYWxsLFtdW3RdLG4pKX0pfTtjKFwicG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllc1wiLDEpLGMoXCJpbmRleE9mLGV2ZXJ5LHNvbWUsZm9yRWFjaCxtYXAsZmlsdGVyLGZpbmQsZmluZEluZGV4LGluY2x1ZGVzXCIsMyksYyhcImpvaW4sc2xpY2UsY29uY2F0LHB1c2gsc3BsaWNlLHVuc2hpZnQsc29ydCxsYXN0SW5kZXhPZixyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsXCIpLG8oby5TLFwiQXJyYXlcIix1KX1dKTtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gZ2V0RGF0YVRyYW5zZmVyRmlsZXM7XG5cdGZ1bmN0aW9uIGdldERhdGFUcmFuc2ZlckZpbGVzKGV2ZW50KSB7XG5cdCAgdmFyIGRhdGFUcmFuc2Zlckl0ZW1zTGlzdCA9IFtdO1xuXHQgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpIHtcblx0ICAgIHZhciBkdCA9IGV2ZW50LmRhdGFUcmFuc2Zlcjtcblx0ICAgIGlmIChkdC5maWxlcyAmJiBkdC5maWxlcy5sZW5ndGgpIHtcblx0ICAgICAgZGF0YVRyYW5zZmVySXRlbXNMaXN0ID0gZHQuZmlsZXM7XG5cdCAgICB9IGVsc2UgaWYgKGR0Lml0ZW1zICYmIGR0Lml0ZW1zLmxlbmd0aCkge1xuXHQgICAgICAvLyBEdXJpbmcgdGhlIGRyYWcgZXZlbiB0aGUgZGF0YVRyYW5zZmVyLmZpbGVzIGlzIG51bGxcblx0ICAgICAgLy8gYnV0IENocm9tZSBpbXBsZW1lbnRzIHNvbWUgZHJhZyBzdG9yZSwgd2hpY2ggaXMgYWNjZXNpYmxlIHZpYSBkYXRhVHJhbnNmZXIuaXRlbXNcblx0ICAgICAgZGF0YVRyYW5zZmVySXRlbXNMaXN0ID0gZHQuaXRlbXM7XG5cdCAgICB9XG5cdCAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmZpbGVzKSB7XG5cdCAgICBkYXRhVHJhbnNmZXJJdGVtc0xpc3QgPSBldmVudC50YXJnZXQuZmlsZXM7XG5cdCAgfVxuXHQgIC8vIENvbnZlcnQgZnJvbSBEYXRhVHJhbnNmZXJJdGVtc0xpc3QgdG8gdGhlIG5hdGl2ZSBBcnJheVxuXHQgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkYXRhVHJhbnNmZXJJdGVtc0xpc3QpO1xuXHR9XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVxufSk7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCdleGVudicpO1xudmFyIE1vZGFsUG9ydGFsID0gUmVhY3QuY3JlYXRlRmFjdG9yeShyZXF1aXJlKCcuL01vZGFsUG9ydGFsJykpO1xudmFyIGFyaWFBcHBIaWRlciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYXJpYUFwcEhpZGVyJyk7XG52YXIgZWxlbWVudENsYXNzID0gcmVxdWlyZSgnZWxlbWVudC1jbGFzcycpO1xudmFyIHJlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKS51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcjtcbnZhciBBc3NpZ24gPSByZXF1aXJlKCdsb2Rhc2guYXNzaWduJyk7XG5cbnZhciBTYWZlSFRNTEVsZW1lbnQgPSBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyB3aW5kb3cuSFRNTEVsZW1lbnQgOiB7fTtcbnZhciBBcHBFbGVtZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gZG9jdW1lbnQuYm9keSA6IHthcHBlbmRDaGlsZDogZnVuY3Rpb24oKSB7fX07XG5cbmZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQocGFyZW50U2VsZWN0b3IpIHtcbiAgcmV0dXJuIHBhcmVudFNlbGVjdG9yKCk7XG59XG5cbnZhciBNb2RhbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ01vZGFsJyxcbiAgc3RhdGljczoge1xuICAgIHNldEFwcEVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgQXBwRWxlbWVudCA9IGFyaWFBcHBIaWRlci5zZXRFbGVtZW50KGVsZW1lbnQpO1xuICAgIH0sXG4gICAgaW5qZWN0Q1NTOiBmdW5jdGlvbigpIHtcbiAgICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICAgICAgICAmJiBjb25zb2xlLndhcm4oJ1JlYWN0LU1vZGFsOiBpbmplY3RDU1MgaGFzIGJlZW4gZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhbmQgbm8gbG9uZ2VyIGhhcyBhbnkgZWZmZWN0LiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBsYXRlciB2ZXJzaW9uJyk7XG4gICAgfVxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIGlzT3BlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNvbnRlbnQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgICBvdmVybGF5OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgfSksXG4gICAgcG9ydGFsQ2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFwcEVsZW1lbnQ6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFNhZmVIVE1MRWxlbWVudCksXG4gICAgb25BZnRlck9wZW46IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVxdWVzdENsb3NlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBjbG9zZVRpbWVvdXRNUzogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBhcmlhSGlkZUFwcDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFyZW50U2VsZWN0b3I6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHJvbGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29udGVudExhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIHBvcnRhbENsYXNzTmFtZTogJ1JlYWN0TW9kYWxQb3J0YWwnLFxuICAgICAgYXJpYUhpZGVBcHA6IHRydWUsXG4gICAgICBjbG9zZVRpbWVvdXRNUzogMCxcbiAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IHRydWUsXG4gICAgICBwYXJlbnRTZWxlY3RvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQuYm9keTsgfVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMubm9kZS5jbGFzc05hbWUgPSB0aGlzLnByb3BzLnBvcnRhbENsYXNzTmFtZTtcblxuICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KHRoaXMucHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuICAgIHRoaXMucmVuZGVyUG9ydGFsKHRoaXMucHJvcHMpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKG5ld1Byb3BzKSB7XG4gICAgdmFyIGN1cnJlbnRQYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KHRoaXMucHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgIHZhciBuZXdQYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KG5ld1Byb3BzLnBhcmVudFNlbGVjdG9yKTtcblxuICAgIGlmKG5ld1BhcmVudCAhPT0gY3VycmVudFBhcmVudCkge1xuICAgICAgY3VycmVudFBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICAgICAgbmV3UGFyZW50LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJQb3J0YWwobmV3UHJvcHMpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hcmlhSGlkZUFwcCkge1xuICAgICAgYXJpYUFwcEhpZGVyLnNob3codGhpcy5wcm9wcy5hcHBFbGVtZW50KTtcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSB0aGlzLnBvcnRhbC5zdGF0ZTtcbiAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgY2xvc2VzQXQgPSBzdGF0ZS5pc09wZW4gJiYgdGhpcy5wcm9wcy5jbG9zZVRpbWVvdXRNU1xuICAgICAgJiYgKHN0YXRlLmNsb3Nlc0F0XG4gICAgICAgIHx8IG5vdyArIHRoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMpO1xuXG4gICAgaWYgKGNsb3Nlc0F0KSB7XG4gICAgICBpZiAoIXN0YXRlLmJlZm9yZUNsb3NlKSB7XG4gICAgICAgIHRoaXMucG9ydGFsLmNsb3NlV2l0aFRpbWVvdXQoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhhdC5yZW1vdmVQb3J0YWwoKTsgfSwgY2xvc2VzQXQgLSBub3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZVBvcnRhbCgpO1xuICAgIH1cbiAgfSxcblxuICByZW1vdmVQb3J0YWw6IGZ1bmN0aW9uKCkge1xuICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5ub2RlKTtcbiAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudCh0aGlzLnByb3BzLnBhcmVudFNlbGVjdG9yKTtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgICBlbGVtZW50Q2xhc3MoZG9jdW1lbnQuYm9keSkucmVtb3ZlKCdSZWFjdE1vZGFsX19Cb2R5LS1vcGVuJyk7XG4gIH0sXG5cbiAgcmVuZGVyUG9ydGFsOiBmdW5jdGlvbihwcm9wcykge1xuICAgIGlmIChwcm9wcy5pc09wZW4pIHtcbiAgICAgIGVsZW1lbnRDbGFzcyhkb2N1bWVudC5ib2R5KS5hZGQoJ1JlYWN0TW9kYWxfX0JvZHktLW9wZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudENsYXNzKGRvY3VtZW50LmJvZHkpLnJlbW92ZSgnUmVhY3RNb2RhbF9fQm9keS0tb3BlbicpO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5hcmlhSGlkZUFwcCkge1xuICAgICAgYXJpYUFwcEhpZGVyLnRvZ2dsZShwcm9wcy5pc09wZW4sIHByb3BzLmFwcEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMucG9ydGFsID0gcmVuZGVyU3VidHJlZUludG9Db250YWluZXIodGhpcywgTW9kYWxQb3J0YWwoQXNzaWduKHt9LCBwcm9wcywge2RlZmF1bHRTdHlsZXM6IE1vZGFsLmRlZmF1bHRTdHlsZXN9KSksIHRoaXMubm9kZSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFJlYWN0LkRPTS5ub3NjcmlwdCgpO1xuICB9XG59KTtcblxuTW9kYWwuZGVmYXVsdFN0eWxlcyA9IHtcbiAgb3ZlcmxheToge1xuICAgIHBvc2l0aW9uICAgICAgICA6ICdmaXhlZCcsXG4gICAgdG9wICAgICAgICAgICAgIDogMCxcbiAgICBsZWZ0ICAgICAgICAgICAgOiAwLFxuICAgIHJpZ2h0ICAgICAgICAgICA6IDAsXG4gICAgYm90dG9tICAgICAgICAgIDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSdcbiAgfSxcbiAgY29udGVudDoge1xuICAgIHBvc2l0aW9uICAgICAgICAgICAgICAgIDogJ2Fic29sdXRlJyxcbiAgICB0b3AgICAgICAgICAgICAgICAgICAgICA6ICc0MHB4JyxcbiAgICBsZWZ0ICAgICAgICAgICAgICAgICAgICA6ICc0MHB4JyxcbiAgICByaWdodCAgICAgICAgICAgICAgICAgICA6ICc0MHB4JyxcbiAgICBib3R0b20gICAgICAgICAgICAgICAgICA6ICc0MHB4JyxcbiAgICBib3JkZXIgICAgICAgICAgICAgICAgICA6ICcxcHggc29saWQgI2NjYycsXG4gICAgYmFja2dyb3VuZCAgICAgICAgICAgICAgOiAnI2ZmZicsXG4gICAgb3ZlcmZsb3cgICAgICAgICAgICAgICAgOiAnYXV0bycsXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgOiAndG91Y2gnLFxuICAgIGJvcmRlclJhZGl1cyAgICAgICAgICAgIDogJzRweCcsXG4gICAgb3V0bGluZSAgICAgICAgICAgICAgICAgOiAnbm9uZScsXG4gICAgcGFkZGluZyAgICAgICAgICAgICAgICAgOiAnMjBweCdcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGFsXG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGRpdiA9IFJlYWN0LkRPTS5kaXY7XG52YXIgZm9jdXNNYW5hZ2VyID0gcmVxdWlyZSgnLi4vaGVscGVycy9mb2N1c01hbmFnZXInKTtcbnZhciBzY29wZVRhYiA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvc2NvcGVUYWInKTtcbnZhciBBc3NpZ24gPSByZXF1aXJlKCdsb2Rhc2guYXNzaWduJyk7XG5cbi8vIHNvIHRoYXQgb3VyIENTUyBpcyBzdGF0aWNhbGx5IGFuYWx5emFibGVcbnZhciBDTEFTU19OQU1FUyA9IHtcbiAgb3ZlcmxheToge1xuICAgIGJhc2U6ICdSZWFjdE1vZGFsX19PdmVybGF5JyxcbiAgICBhZnRlck9wZW46ICdSZWFjdE1vZGFsX19PdmVybGF5LS1hZnRlci1vcGVuJyxcbiAgICBiZWZvcmVDbG9zZTogJ1JlYWN0TW9kYWxfX092ZXJsYXktLWJlZm9yZS1jbG9zZSdcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGJhc2U6ICdSZWFjdE1vZGFsX19Db250ZW50JyxcbiAgICBhZnRlck9wZW46ICdSZWFjdE1vZGFsX19Db250ZW50LS1hZnRlci1vcGVuJyxcbiAgICBiZWZvcmVDbG9zZTogJ1JlYWN0TW9kYWxfX0NvbnRlbnQtLWJlZm9yZS1jbG9zZSdcbiAgfVxufTtcblxudmFyIE1vZGFsUG9ydGFsID0gbW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdNb2RhbFBvcnRhbCcsXG4gIHNob3VsZENsb3NlOiBudWxsLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG92ZXJsYXk6IHt9LFxuICAgICAgICBjb250ZW50OiB7fVxuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWZ0ZXJPcGVuOiBmYWxzZSxcbiAgICAgIGJlZm9yZUNsb3NlOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIEZvY3VzIG5lZWRzIHRvIGJlIHNldCB3aGVuIG1vdW50aW5nIGFuZCBhbHJlYWR5IG9wZW5cbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0Rm9jdXNBZnRlclJlbmRlcih0cnVlKTtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VUaW1lcik7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24obmV3UHJvcHMpIHtcbiAgICAvLyBGb2N1cyBvbmx5IG5lZWRzIHRvIGJlIHNldCBvbmNlIHdoZW4gdGhlIG1vZGFsIGlzIGJlaW5nIG9wZW5lZFxuICAgIGlmICghdGhpcy5wcm9wcy5pc09wZW4gJiYgbmV3UHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldEZvY3VzQWZ0ZXJSZW5kZXIodHJ1ZSk7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmICFuZXdQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNBZnRlclJlbmRlcikge1xuICAgICAgdGhpcy5mb2N1c0NvbnRlbnQoKTtcbiAgICAgIHRoaXMuc2V0Rm9jdXNBZnRlclJlbmRlcihmYWxzZSk7XG4gICAgfVxuICB9LFxuXG4gIHNldEZvY3VzQWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uIChmb2N1cykge1xuICAgIHRoaXMuZm9jdXNBZnRlclJlbmRlciA9IGZvY3VzO1xuICB9LFxuXG4gIGFmdGVyQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICBmb2N1c01hbmFnZXIucmV0dXJuRm9jdXMoKTtcbiAgICBmb2N1c01hbmFnZXIudGVhcmRvd25TY29wZWRGb2N1cygpO1xuICB9LFxuXG4gIG9wZW46IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5hZnRlck9wZW4gJiYgdGhpcy5zdGF0ZS5iZWZvcmVDbG9zZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VUaW1lcik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYmVmb3JlQ2xvc2U6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb2N1c01hbmFnZXIuc2V0dXBTY29wZWRGb2N1cyh0aGlzLm5vZGUpO1xuICAgICAgZm9jdXNNYW5hZ2VyLm1hcmtGb3JGb2N1c0xhdGVyKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpc09wZW46IHRydWV9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWZ0ZXJPcGVuOiB0cnVlfSk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmIHRoaXMucHJvcHMub25BZnRlck9wZW4pIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQWZ0ZXJPcGVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9LFxuXG4gIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZVRpbWVvdXRNUyA+IDApXG4gICAgICB0aGlzLmNsb3NlV2l0aFRpbWVvdXQoKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmNsb3NlV2l0aG91dFRpbWVvdXQoKTtcbiAgfSxcblxuICBmb2N1c0NvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIERvbid0IHN0ZWFsIGZvY3VzIGZyb20gaW5uZXIgZWxlbWVudHNcbiAgICBpZiAoIXRoaXMuY29udGVudEhhc0ZvY3VzKCkpIHtcbiAgICAgIHRoaXMucmVmcy5jb250ZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIGNsb3NlV2l0aFRpbWVvdXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjbG9zZXNBdCA9IERhdGUubm93KCkgKyB0aGlzLnByb3BzLmNsb3NlVGltZW91dE1TO1xuICAgIHRoaXMuc2V0U3RhdGUoe2JlZm9yZUNsb3NlOiB0cnVlLCBjbG9zZXNBdDogY2xvc2VzQXR9LCBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQodGhpcy5jbG9zZVdpdGhvdXRUaW1lb3V0LCB0aGlzLnN0YXRlLmNsb3Nlc0F0IC0gRGF0ZS5ub3coKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBjbG9zZVdpdGhvdXRUaW1lb3V0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGJlZm9yZUNsb3NlOiBmYWxzZSxcbiAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICBhZnRlck9wZW46IGZhbHNlLFxuICAgICAgY2xvc2VzQXQ6IG51bGxcbiAgICB9LCB0aGlzLmFmdGVyQ2xvc2UpO1xuICB9LFxuXG4gIGhhbmRsZUtleURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gOSAvKnRhYiovKSBzY29wZVRhYih0aGlzLnJlZnMuY29udGVudCwgZXZlbnQpO1xuICAgIGlmIChldmVudC5rZXlDb2RlID09IDI3IC8qZXNjKi8pIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnJlcXVlc3RDbG9zZShldmVudCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZU92ZXJsYXlPbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zaG91bGRDbG9zZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zaG91bGRDbG9zZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkQ2xvc2UgJiYgdGhpcy5wcm9wcy5zaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrKSB7XG4gICAgICBpZiAodGhpcy5vd25lckhhbmRsZXNDbG9zZSgpKVxuICAgICAgICB0aGlzLnJlcXVlc3RDbG9zZShldmVudCk7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuZm9jdXNDb250ZW50KCk7XG4gICAgfVxuICAgIHRoaXMuc2hvdWxkQ2xvc2UgPSBudWxsO1xuICB9LFxuXG4gIGhhbmRsZUNvbnRlbnRPbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaG91bGRDbG9zZSA9IGZhbHNlO1xuICB9LFxuXG4gIHJlcXVlc3RDbG9zZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5vd25lckhhbmRsZXNDbG9zZSgpKVxuICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZShldmVudCk7XG4gIH0sXG5cbiAgb3duZXJIYW5kbGVzQ2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlO1xuICB9LFxuXG4gIHNob3VsZEJlQ2xvc2VkOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIXRoaXMuc3RhdGUuaXNPcGVuICYmICF0aGlzLnN0YXRlLmJlZm9yZUNsb3NlO1xuICB9LFxuXG4gIGNvbnRlbnRIYXNGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMucmVmcy5jb250ZW50IHx8IHRoaXMucmVmcy5jb250ZW50LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICB9LFxuXG4gIGJ1aWxkQ2xhc3NOYW1lOiBmdW5jdGlvbih3aGljaCwgYWRkaXRpb25hbCkge1xuICAgIHZhciBjbGFzc05hbWUgPSBDTEFTU19OQU1FU1t3aGljaF0uYmFzZTtcbiAgICBpZiAodGhpcy5zdGF0ZS5hZnRlck9wZW4pXG4gICAgICBjbGFzc05hbWUgKz0gJyAnK0NMQVNTX05BTUVTW3doaWNoXS5hZnRlck9wZW47XG4gICAgaWYgKHRoaXMuc3RhdGUuYmVmb3JlQ2xvc2UpXG4gICAgICBjbGFzc05hbWUgKz0gJyAnK0NMQVNTX05BTUVTW3doaWNoXS5iZWZvcmVDbG9zZTtcbiAgICByZXR1cm4gYWRkaXRpb25hbCA/IGNsYXNzTmFtZSArICcgJyArIGFkZGl0aW9uYWwgOiBjbGFzc05hbWU7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29udGVudFN0eWxlcyA9ICh0aGlzLnByb3BzLmNsYXNzTmFtZSkgPyB7fSA6IHRoaXMucHJvcHMuZGVmYXVsdFN0eWxlcy5jb250ZW50O1xuICAgIHZhciBvdmVybGF5U3R5bGVzID0gKHRoaXMucHJvcHMub3ZlcmxheUNsYXNzTmFtZSkgPyB7fSA6IHRoaXMucHJvcHMuZGVmYXVsdFN0eWxlcy5vdmVybGF5O1xuXG4gICAgcmV0dXJuIHRoaXMuc2hvdWxkQmVDbG9zZWQoKSA/IGRpdigpIDogKFxuICAgICAgZGl2KHtcbiAgICAgICAgcmVmOiBcIm92ZXJsYXlcIixcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmJ1aWxkQ2xhc3NOYW1lKCdvdmVybGF5JywgdGhpcy5wcm9wcy5vdmVybGF5Q2xhc3NOYW1lKSxcbiAgICAgICAgc3R5bGU6IEFzc2lnbih7fSwgb3ZlcmxheVN0eWxlcywgdGhpcy5wcm9wcy5zdHlsZS5vdmVybGF5IHx8IHt9KSxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVPdmVybGF5T25DbGlja1xuICAgICAgfSxcbiAgICAgICAgZGl2KHtcbiAgICAgICAgICByZWY6IFwiY29udGVudFwiLFxuICAgICAgICAgIHN0eWxlOiBBc3NpZ24oe30sIGNvbnRlbnRTdHlsZXMsIHRoaXMucHJvcHMuc3R5bGUuY29udGVudCB8fCB7fSksXG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmJ1aWxkQ2xhc3NOYW1lKCdjb250ZW50JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgICAgIHRhYkluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDb250ZW50T25DbGljayxcbiAgICAgICAgICByb2xlOiB0aGlzLnByb3BzLnJvbGUsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMuY29udGVudExhYmVsXG4gICAgICAgIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG4iLCJ2YXIgX2VsZW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XG5cbmZ1bmN0aW9uIHNldEVsZW1lbnQoZWxlbWVudCkge1xuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50KTtcbiAgICBlbGVtZW50ID0gJ2xlbmd0aCcgaW4gZWwgPyBlbFswXSA6IGVsO1xuICB9XG4gIF9lbGVtZW50ID0gZWxlbWVudCB8fCBfZWxlbWVudDtcbiAgcmV0dXJuIF9lbGVtZW50O1xufVxuXG5mdW5jdGlvbiBoaWRlKGFwcEVsZW1lbnQpIHtcbiAgdmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpO1xuICAoYXBwRWxlbWVudCB8fCBfZWxlbWVudCkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG59XG5cbmZ1bmN0aW9uIHNob3coYXBwRWxlbWVudCkge1xuICB2YWxpZGF0ZUVsZW1lbnQoYXBwRWxlbWVudCk7XG4gIChhcHBFbGVtZW50IHx8IF9lbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZShzaG91bGRIaWRlLCBhcHBFbGVtZW50KSB7XG4gIGlmIChzaG91bGRIaWRlKVxuICAgIGhpZGUoYXBwRWxlbWVudCk7XG4gIGVsc2VcbiAgICBzaG93KGFwcEVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUVsZW1lbnQoYXBwRWxlbWVudCkge1xuICBpZiAoIWFwcEVsZW1lbnQgJiYgIV9lbGVtZW50KVxuICAgIHRocm93IG5ldyBFcnJvcigncmVhY3QtbW9kYWw6IFlvdSBtdXN0IHNldCBhbiBlbGVtZW50IHdpdGggYE1vZGFsLnNldEFwcEVsZW1lbnQoZWwpYCB0byBtYWtlIHRoaXMgYWNjZXNzaWJsZScpO1xufVxuXG5mdW5jdGlvbiByZXNldEZvclRlc3RpbmcoKSB7XG4gIF9lbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbn1cblxuZXhwb3J0cy50b2dnbGUgPSB0b2dnbGU7XG5leHBvcnRzLnNldEVsZW1lbnQgPSBzZXRFbGVtZW50O1xuZXhwb3J0cy5zaG93ID0gc2hvdztcbmV4cG9ydHMuaGlkZSA9IGhpZGU7XG5leHBvcnRzLnJlc2V0Rm9yVGVzdGluZyA9IHJlc2V0Rm9yVGVzdGluZztcbiIsInZhciBmaW5kVGFiYmFibGUgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3RhYmJhYmxlJyk7XG52YXIgZm9jdXNMYXRlckVsZW1lbnRzID0gW107XG52YXIgbW9kYWxFbGVtZW50ID0gbnVsbDtcbnZhciBuZWVkVG9Gb2N1cyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBoYW5kbGVCbHVyKGV2ZW50KSB7XG4gIG5lZWRUb0ZvY3VzID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgaWYgKG5lZWRUb0ZvY3VzKSB7XG4gICAgbmVlZFRvRm9jdXMgPSBmYWxzZTtcbiAgICBpZiAoIW1vZGFsRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBuZWVkIHRvIHNlZSBob3cgalF1ZXJ5IHNoaW1zIGRvY3VtZW50Lm9uKCdmb2N1c2luJykgc28gd2UgZG9uJ3QgbmVlZCB0aGVcbiAgICAvLyBzZXRUaW1lb3V0LCBmaXJlZm94IGRvZXNuJ3Qgc3VwcG9ydCBmb2N1c2luLCBpZiBpdCBkaWQsIHdlIGNvdWxkIGZvY3VzXG4gICAgLy8gdGhlIGVsZW1lbnQgb3V0c2lkZSBvZiBhIHNldFRpbWVvdXQuIFNpZGUtZWZmZWN0IG9mIHRoaXMgaW1wbGVtZW50YXRpb25cbiAgICAvLyBpcyB0aGF0IHRoZSBkb2N1bWVudC5ib2R5IGdldHMgZm9jdXMsIGFuZCB0aGVuIHdlIGZvY3VzIG91ciBlbGVtZW50IHJpZ2h0XG4gICAgLy8gYWZ0ZXIsIHNlZW1zIGZpbmUuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChtb2RhbEVsZW1lbnQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpXG4gICAgICAgIHJldHVybjtcbiAgICAgIHZhciBlbCA9IChmaW5kVGFiYmFibGUobW9kYWxFbGVtZW50KVswXSB8fCBtb2RhbEVsZW1lbnQpO1xuICAgICAgZWwuZm9jdXMoKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5leHBvcnRzLm1hcmtGb3JGb2N1c0xhdGVyID0gZnVuY3Rpb24oKSB7XG4gIGZvY3VzTGF0ZXJFbGVtZW50cy5wdXNoKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xufTtcblxuZXhwb3J0cy5yZXR1cm5Gb2N1cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdG9Gb2N1cyA9IG51bGw7XG4gIHRyeSB7XG4gICAgdG9Gb2N1cyA9IGZvY3VzTGF0ZXJFbGVtZW50cy5wb3AoKTtcbiAgICB0b0ZvY3VzLmZvY3VzKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKCdZb3UgdHJpZWQgdG8gcmV0dXJuIGZvY3VzIHRvICcrdG9Gb2N1cysnIGJ1dCBpdCBpcyBub3QgaW4gdGhlIERPTSBhbnltb3JlJyk7XG4gIH1cbn07XG5cbmV4cG9ydHMuc2V0dXBTY29wZWRGb2N1cyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgbW9kYWxFbGVtZW50ID0gZWxlbWVudDtcblxuICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUJsdXIsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29uQmx1cicsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50KCdvbkZvY3VzJywgaGFuZGxlRm9jdXMpO1xuICB9XG59O1xuXG5leHBvcnRzLnRlYXJkb3duU2NvcGVkRm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgbW9kYWxFbGVtZW50ID0gbnVsbDtcblxuICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5kZXRhY2hFdmVudCgnb25CbHVyJywgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQuZGV0YWNoRXZlbnQoJ29uRm9jdXMnLCBoYW5kbGVGb2N1cyk7XG4gIH1cbn07XG4iLCJ2YXIgZmluZFRhYmJhYmxlID0gcmVxdWlyZSgnLi4vaGVscGVycy90YWJiYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5vZGUsIGV2ZW50KSB7XG4gIHZhciB0YWJiYWJsZSA9IGZpbmRUYWJiYWJsZShub2RlKTtcbiAgaWYgKCF0YWJiYWJsZS5sZW5ndGgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gIH1cbiAgdmFyIGZpbmFsVGFiYmFibGUgPSB0YWJiYWJsZVtldmVudC5zaGlmdEtleSA/IDAgOiB0YWJiYWJsZS5sZW5ndGggLSAxXTtcbiAgdmFyIGxlYXZpbmdGaW5hbFRhYmJhYmxlID0gKFxuICAgIGZpbmFsVGFiYmFibGUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgfHxcbiAgICAvLyBoYW5kbGUgaW1tZWRpYXRlIHNoaWZ0K3RhYiBhZnRlciBvcGVuaW5nIHdpdGggbW91c2VcbiAgICBub2RlID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICk7XG4gIGlmICghbGVhdmluZ0ZpbmFsVGFiYmFibGUpIHJldHVybjtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdmFyIHRhcmdldCA9IHRhYmJhYmxlW2V2ZW50LnNoaWZ0S2V5ID8gdGFiYmFibGUubGVuZ3RoIC0gMSA6IDBdO1xuICB0YXJnZXQuZm9jdXMoKTtcbn07XG4iLCIvKiFcbiAqIEFkYXB0ZWQgZnJvbSBqUXVlcnkgVUkgY29yZVxuICpcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vY2F0ZWdvcnkvdWktY29yZS9cbiAqL1xuXG5mdW5jdGlvbiBmb2N1c2FibGUoZWxlbWVudCwgaXNUYWJJbmRleE5vdE5hTikge1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAoL2lucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b258b2JqZWN0Ly50ZXN0KG5vZGVOYW1lKSA/XG4gICAgIWVsZW1lbnQuZGlzYWJsZWQgOlxuICAgIFwiYVwiID09PSBub2RlTmFtZSA/XG4gICAgICBlbGVtZW50LmhyZWYgfHwgaXNUYWJJbmRleE5vdE5hTiA6XG4gICAgICBpc1RhYkluZGV4Tm90TmFOKSAmJiB2aXNpYmxlKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBoaWRkZW4oZWwpIHtcbiAgcmV0dXJuIChlbC5vZmZzZXRXaWR0aCA8PSAwICYmIGVsLm9mZnNldEhlaWdodCA8PSAwKSB8fFxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJztcbn1cblxuZnVuY3Rpb24gdmlzaWJsZShlbGVtZW50KSB7XG4gIHdoaWxlIChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkpIGJyZWFrO1xuICAgIGlmIChoaWRkZW4oZWxlbWVudCkpIHJldHVybiBmYWxzZTtcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB0YWJiYWJsZShlbGVtZW50KSB7XG4gIHZhciB0YWJJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICBpZiAodGFiSW5kZXggPT09IG51bGwpIHRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICB2YXIgaXNUYWJJbmRleE5hTiA9IGlzTmFOKHRhYkluZGV4KTtcbiAgcmV0dXJuIChpc1RhYkluZGV4TmFOIHx8IHRhYkluZGV4ID49IDApICYmIGZvY3VzYWJsZShlbGVtZW50LCAhaXNUYWJJbmRleE5hTik7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYWJiYWJsZURlc2NlbmRhbnRzKGVsZW1lbnQpIHtcbiAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJyksIDApLmZpbHRlcihmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiB0YWJiYWJsZShlbCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRUYWJiYWJsZURlc2NlbmRhbnRzO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Nb2RhbCcpO1xuXG4iLCIvLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPVxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXM7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2Vzcy5kb21haW4pIHtcbiAgICAgIGludm9rZSA9IHByb2Nlc3MuZG9tYWluLmJpbmQoaW52b2tlKTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEFtb25nIHRoZSB2YXJpb3VzIHRyaWNrcyBmb3Igb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWxcbiAgLy8gb2JqZWN0LCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBtb3N0IHJlbGlhYmxlIHRlY2huaXF1ZSB0aGF0IGRvZXMgbm90XG4gIC8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpc1xuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlc3BvbnNlID0gcmVxdWlyZSgnaHR0cC1yZXNwb25zZS1vYmplY3QnKTtcbnZhciBoYW5kbGVRcyA9IHJlcXVpcmUoJ3RoZW4tcmVxdWVzdC9saWIvaGFuZGxlLXFzLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZG9SZXF1ZXN0O1xuZnVuY3Rpb24gZG9SZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAvLyBjaGVjayB0eXBlcyBvZiBhcmd1bWVudHNcblxuICBpZiAodHlwZW9mIG1ldGhvZCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbWV0aG9kIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFVSTC9wYXRoIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdPcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0IChvciBudWxsKS4nKTtcbiAgfVxuXG4gIG1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG5cbiAgLy8gaGFuZGxlIGNyb3NzIGRvbWFpblxuXG4gIHZhciBtYXRjaDtcbiAgdmFyIGNyb3NzRG9tYWluID0gISEoKG1hdGNoID0gL14oW1xcdy1dKzopP1xcL1xcLyhbXlxcL10rKS8uZXhlYyh1cmwpKSAmJiAobWF0Y2hbMl0gIT0gbG9jYXRpb24uaG9zdCkpO1xuICBpZiAoIWNyb3NzRG9tYWluKSBvcHRpb25zLmhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbiAgLy8gaGFuZGxlIHF1ZXJ5IHN0cmluZ1xuICBpZiAob3B0aW9ucy5xcykge1xuICAgIHVybCA9IGhhbmRsZVFzKHVybCwgb3B0aW9ucy5xcyk7XG4gIH1cblxuICAvLyBoYW5kbGUganNvbiBib2R5XG4gIGlmIChvcHRpb25zLmpzb24pIHtcbiAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pO1xuICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gIH1cblxuICAvLyBtZXRob2QsIHVybCwgYXN5bmNcbiAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIGZhbHNlKTtcblxuICBmb3IgKHZhciBuYW1lIGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUudG9Mb3dlckNhc2UoKSwgb3B0aW9ucy5oZWFkZXJzW25hbWVdKTtcbiAgfVxuXG4gIC8vIGF2b2lkIHNlbmRpbmcgZW1wdHkgc3RyaW5nICgjMzE5KVxuICB4aHIuc2VuZChvcHRpb25zLmJvZHkgPyBvcHRpb25zLmJvZHkgOiBudWxsKTtcblxuXG4gIHZhciBoZWFkZXJzID0ge307XG4gIHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5zcGxpdCgnXFxyXFxuJykuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgdmFyIGggPSBoZWFkZXIuc3BsaXQoJzonKTtcbiAgICBpZiAoaC5sZW5ndGggPiAxKSB7XG4gICAgICBoZWFkZXJzW2hbMF0udG9Mb3dlckNhc2UoKV0gPSBoLnNsaWNlKDEpLmpvaW4oJzonKS50cmltKCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG5ldyBSZXNwb25zZSh4aHIuc3RhdHVzLCBoZWFkZXJzLCB4aHIucmVzcG9uc2VUZXh0KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHBhcnNlID0gcmVxdWlyZSgncXMnKS5wYXJzZTtcbnZhciBzdHJpbmdpZnkgPSByZXF1aXJlKCdxcycpLnN0cmluZ2lmeTtcblxubW9kdWxlLmV4cG9ydHMgPSBoYW5kbGVRcztcbmZ1bmN0aW9uIGhhbmRsZVFzKHVybCwgcXVlcnkpIHtcbiAgdXJsID0gdXJsLnNwbGl0KCc/Jyk7XG4gIHZhciBzdGFydCA9IHVybFswXTtcbiAgdmFyIHFzID0gKHVybFsxXSB8fCAnJykuc3BsaXQoJyMnKVswXTtcbiAgdmFyIGVuZCA9IHVybFsxXSAmJiB1cmxbMV0uc3BsaXQoJyMnKS5sZW5ndGggPiAxID8gJyMnICsgdXJsWzFdLnNwbGl0KCcjJylbMV0gOiAnJztcblxuICB2YXIgYmFzZVFzID0gcGFyc2UocXMpO1xuICBmb3IgKHZhciBpIGluIHF1ZXJ5KSB7XG4gICAgYmFzZVFzW2ldID0gcXVlcnlbaV07XG4gIH1cbiAgcXMgPSBzdHJpbmdpZnkoYmFzZVFzKTtcbiAgaWYgKHFzICE9PSAnJykge1xuICAgIHFzID0gJz8nICsgcXM7XG4gIH1cbiAgcmV0dXJuIHN0YXJ0ICsgcXMgKyBlbmQ7XG59XG4iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG52YXIgcm5nO1xuXG52YXIgY3J5cHRvID0gZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG87IC8vIGZvciBJRSAxMVxuaWYgKGNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG4gIHJuZyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59XG5cbmlmICghcm5nKSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyICBybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm5nO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIFdlIGZlYXR1cmVcbi8vIGRldGVjdCB0byBkZXRlcm1pbmUgdGhlIGJlc3QgUk5HIHNvdXJjZSwgbm9ybWFsaXppbmcgdG8gYSBmdW5jdGlvbiB0aGF0XG4vLyByZXR1cm5zIDEyOC1iaXRzIG9mIHJhbmRvbW5lc3MsIHNpbmNlIHRoYXQncyB3aGF0J3MgdXN1YWxseSByZXF1aXJlZFxudmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG4vLyByYW5kb20gIydzIHdlIG5lZWQgdG8gaW5pdCBub2RlIGFuZCBjbG9ja3NlcVxudmFyIF9zZWVkQnl0ZXMgPSBybmcoKTtcblxuLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG52YXIgX25vZGVJZCA9IFtcbiAgX3NlZWRCeXRlc1swXSB8IDB4MDEsXG4gIF9zZWVkQnl0ZXNbMV0sIF9zZWVkQnl0ZXNbMl0sIF9zZWVkQnl0ZXNbM10sIF9zZWVkQnl0ZXNbNF0sIF9zZWVkQnl0ZXNbNV1cbl07XG5cbi8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG52YXIgX2Nsb2Nrc2VxID0gKF9zZWVkQnl0ZXNbNl0gPDwgOCB8IF9zZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMCwgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IGJ5dGVzVG9VdWlkKGIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHYxO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlc0FwcGxpY2F0aW9uIGZyb20gJy4uLy4uL2NvbW1vbi9hcHBsaWNhdGlvbnMvUm91dGVzQXBwbGljYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGxpY2F0aW9uIGV4dGVuZHMgUm91dGVzQXBwbGljYXRpb24ge1xuICAgIGdldCBjb250YWluZXIoKSB7cmV0dXJuICdjb250YWluZXInfVxufVxuIiwiaW1wb3J0IHtWaWV3cG9ydCBhcyBDb21tb25WaWV3cG9ydH0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbXBvbmVudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdwb3J0IGV4dGVuZHMgQ29tbW9uVmlld3BvcnQge31cbiIsIm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IHtcbiAgICBcImFwcFwiOiBcImFzZFwiLFxuICAgIFwiYXBwbmFtZVwiOiBcIkFzZFwiLFxuICAgIFwiYXBwdGl0bGVcIjogXCJBc2RcIixcbiAgICBcImFwcGRlc2NyaXB0aW9uXCI6IFwiQVNEIGFwcGxpY2F0aW9uXCIsXG4gICAgXCJhcHBwYXRoXCI6IFwiL2FzZFwiLFxuICAgIFwiYXBwbG9nb1wiOiBcIi9zdGF0aWMvYXNkL2ltYWdlcy9sb2dvLmpwZ1wiLFxuICAgIFwiYXBwdmVyc2lvblwiOiBcIjAuMC4xXCIsXG4gICAgXCJwb3J0XCI6IDIwMDAsXG4gICAgXCJsaXZlcmVsb2FkcG9ydFwiOiAzNTcyOVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge1xuICAgIGFwaToge1xuICAgICAgICB1cmxzOiB7XG4gICAgICAgICAgICBwYWdlSW5mbzogJy9zdGF0aWMvYXNkL2FwaS9wYWdlLmpzb24nLFxuICAgICAgICAgICAgcGFnZUluZm9Mb2dnZWQ6ICcvc3RhdGljL2FzZC9hcGkvcGFnZS1sb2dnZWQuanNvbicsXG4gICAgICAgICAgICBsb2dpbjogJy9zdGF0aWMvYXNkL2FwaS9sb2dpbi5qc29uJyxcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7Q29uZmlnfSBmcm9tICcuLi8uLi8uLi9jb3JlL0NvbmZpZydcbmV4cG9ydCBkZWZhdWx0IG5ldyBDb25maWcoXG4gICAge2VudjogJ21vY2snfSxcbiAgICByZXF1aXJlKCcuLi9jb25mJyksXG4gICAgcmVxdWlyZSgnLi91aScpLFxuICAgIHJlcXVpcmUoJy4vYmFzZScpLFxuICAgIHJlcXVpcmUoJy4vbW9jaycpXG4pLmFsbCgpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSB7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSB7XG4gICAgdWk6IHtcbiAgICAgICAgY3VycmVudFBhZ2VObzogMSxcbiAgICAgICAgY3VycmVudFBhZ2VTaXplOiAxMCxcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBbXG4gICAgJ2Nvb2tpZV9kZWxldGVkJyxcbiAgICAnY29va2llX3VwZGF0ZWQnLFxuICAgICdyb3V0ZV9lbnRlcmVkJyxcbiAgICAncm91dGVfY2hhbmdlZCcsXG5dXG4iLCIvLyBpbXBvcnQgJy4vc2Fzcy9zdHlsZXMuc2NzcydcbnJlcXVpcmUoJy4vY29uZmlnJylcblxuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IHtnZXRTdG9yZX0gZnJvbSAnLi4vLi4vY29yZS9yZWR1eCdcbmltcG9ydCAqIGFzIENvbW1vblJlZHVjZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9yZWR1eC9SZWR1Y2VyJ1xuaW1wb3J0ICogYXMgUmVkdWNlcnMgZnJvbSAnLi9yZWR1eC9SZWR1Y2VyJ1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL2V2ZW50cydcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXG5pbXBvcnQge0hlYWRlckFwcGxpY2F0aW9uLCBGb290ZXJBcHBsaWNhdGlvbn0gZnJvbSAnLi4vLi4vY29tbW9uL2FwcGxpY2F0aW9ucydcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL0FwcGxpY2F0aW9uJ1xuXG5IZWFkZXJBcHBsaWNhdGlvbi5hZGRFdmVudHMoZXZlbnRzKVxuXG5jb25zdCBzdG9yZSA9IGdldFN0b3JlKGFzc2lnbihDb21tb25SZWR1Y2VycywgUmVkdWNlcnMpKVxuXG5jb25zdCBoZWFkZXJBcHBsaWNhdGlvbiA9IG5ldyBIZWFkZXJBcHBsaWNhdGlvbigpXG5oZWFkZXJBcHBsaWNhdGlvbi5yZW5kZXIoc3RvcmUpXG5cbmNvbnN0IGZvb3RlckFwcGxpY2F0aW9uID0gbmV3IEZvb3RlckFwcGxpY2F0aW9uKClcbmZvb3RlckFwcGxpY2F0aW9uLnJlbmRlcihzdG9yZSlcblxuY29uc3QgYXBwbGljYXRpb24gPSBuZXcgQXBwbGljYXRpb24oKVxuYXBwbGljYXRpb24ucm91dGVzID0gcm91dGVzXG5hcHBsaWNhdGlvbi5yZW5kZXIoc3RvcmUpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0Nvbm5lY3R9IGZyb20gJy4uL3JlZHV4J1xuaW1wb3J0IHtkZWZhdWx0IGFzIEJhc2VQYWdlfSBmcm9tICcuL1BhZ2UnXG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG4gICAgcGFnZUNsYXNzTmFtZSA9ICdhc2QtbGFuZGluZy1wYWdlJ1xuXG4gICAgcGFnZUxvYWRlZEFwaSA9IG51bGxcbiAgICBcbiAgICBjaGlsZHJlbiA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgICAgIDxkaXY+TGFuZGluZyBwYWdlIG9mIEFzZDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KFBhZ2UpKS5rbGFzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQYWdlIGFzIENvbW1vblBhZ2V9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgQ29tbW9uUGFnZSB7fVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb25uZWN0fSBmcm9tICcuLi9yZWR1eCdcbmltcG9ydCB7ZGVmYXVsdCBhcyBCYXNlUGFnZX0gZnJvbSAnLi9QYWdlJ1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuICAgIHBhZ2VDbGFzc05hbWUgPSAnYXNkLXN1Yi1wYWdlJ1xuXG4gICAgcGFnZUxvYWRlZEFwaSA9IG51bGxcbiAgICBcbiAgICBjaGlsZHJlbiA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgICAgIDxkaXY+U3ViIHBhZ2Ugb2YgQXNkPC9kaXY+XG4gICAgICAgIDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCAobmV3IENvbm5lY3QoUGFnZSkpLmtsYXNzXG4iLCJleHBvcnRzLkxhbmRpbmdQYWdlID0gcmVxdWlyZSgnLi9MYW5kaW5nUGFnZScpLmRlZmF1bHRcbmV4cG9ydHMuU3ViUGFnZSA9IHJlcXVpcmUoJy4vU3ViUGFnZScpLmRlZmF1bHRcbi8qKk5FV1BBR0UqKi9cbiIsImltcG9ydCB7QWN0aW9ufSBmcm9tICcuLi8uLi8uLi9jb3JlL3JlZHV4J1xuIiwiaW1wb3J0IHtDb25uZWN0IGFzIENvcmVDb25uZWN0fSBmcm9tICcuLi8uLi8uLi9jb21tb24vcmVkdXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vQWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0IGV4dGVuZHMgQ29yZUNvbm5lY3Qge1xuICAgIGdldEFjdGlvbnMoZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV0aWwuYXNzaWduKHt9LCBzdXBlci5nZXRBY3Rpb25zKGRpc3BhdGNoLCBvd25Qcm9wcywgLi4uYXJncyksIGFjdGlvbnMpXG4gICAgfVxufVxuIiwiaW1wb3J0IHtSZWR1Y2VyLCBDb25maWdSZWR1Y2VyLCBDb29raWVSZWR1Y2VyLCBGYWxzZVJlZHVjZXIsIFRydWVSZWR1Y2VyLCBOdWxsUmVkdWNlcn0gZnJvbSAnLi4vLi4vLi4vY29yZS9yZWR1eCdcbiIsImV4cG9ydHMuQ29ubmVjdCA9IHJlcXVpcmUoJy4vQ29ubmVjdCcpLmRlZmF1bHRcbiIsImltcG9ydCB7b25Sb3V0ZUVudGVyZWQsIG9uUm91dGVDaGFuZ2VkfSBmcm9tICcuLi8uLi9jb21tb24vcm91dGVzJ1xuaW1wb3J0ICogYXMgcGFnZXMgZnJvbSAnLi9wYWdlcydcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL1ZpZXdwb3J0J1xuaW1wb3J0IGNvbmYgZnJvbSAnLi9jb25mJ1xuXG5jb25zdCBzdWJSb3V0ZXMgPSBbXG57cGF0aDogY29uZi5hcHBwYXRoICsgJy9zdWInLCBjb21wb25lbnQ6IHBhZ2VzLlN1YlBhZ2UsIG9uQ2hhbmdlOiBvblJvdXRlQ2hhbmdlZH0sXG4vKipORVdQQUdFKiovXG5dXG5jb25zdCByb3V0ZXMgPSBbe1xuICAgIHBhdGg6IGNvbmYuYXBwcGF0aCxcbiAgICBjb21wb25lbnQ6IFZpZXdwb3J0LFxuICAgIGluZGV4Um91dGU6IHtcbiAgICAgICAgY29tcG9uZW50OiBwYWdlcy5MYW5kaW5nUGFnZVxuICAgIH0sXG4gICAgY2hpbGRSb3V0ZXM6IHN1YlJvdXRlcyxcbiAgICBvbkNoYW5nZTogb25Sb3V0ZUNoYW5nZWQsXG59XVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7dXRpbCwgY29uZmlndXJhdGlvbn0gZnJvbSAnLi4vLi4vY29yZSdcbmltcG9ydCB7QWN0aW9ufSBmcm9tICcuLi8uLi9jb3JlL3JlZHV4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBsaWNhdGlvbiB7XG4gICAgY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb25cbiAgICB1dGlsID0gdXRpbFxuICAgIGNoaWxkcmVuID0gKCkgPT4ge3Rocm93ICdObyBjaGlsZHJlbid9XG4gICAgYWZ0ZXJSZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIEFjdGlvbi5leGVjdXRlKCdMb2FkUGFnZUluZm9BY3Rpb24nKVxuICAgIH1cbiAgICByZW5kZXIgPSAoc3RvcmUpID0+IHtcbiAgICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlXG4gICAgICAgIGNvbnN0IF9yZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXt0aGlzLnN0b3JlfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuY2hpbGRyZW4oKX1cbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPixcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lciksXG4gICAgICAgICAgICAgICAgdGhpcy5hZnRlclJlbmRlclxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIF9yZW5kZXIpXG4gICAgICAgIF9yZW5kZXIoKVxuICAgIH1cbiAgICBzdGF0aWMgYWRkRXZlbnRzKGV2ZW50cykge1xuICAgICAgICBldmVudHMubWFwKGV2ZW50ID0+IGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChlKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChgZ2xvYmFsXyR7ZXZlbnR9YCwge2RldGFpbDogZS5kZXRhaWx9KSlcbiAgICAgICAgfSkpXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4vQXBwbGljYXRpb24nXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Gb290ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlckFwcGxpY2F0aW9uIGV4dGVuZHMgQXBwbGljYXRpb24ge1xuICAgIGNvbnRhaW5lciA9ICdmb290ZXInXG4gICAgY2hpbGRyZW4gPSAoKSA9PiA8Rm9vdGVyLz5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL0FwcGxpY2F0aW9uJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vSGVhZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJBcHBsaWNhdGlvbiBleHRlbmRzIEFwcGxpY2F0aW9uIHtcbiAgICBjb250YWluZXIgPSAnaGVhZGVyJ1xuICAgIGNoaWxkcmVuID0gKCkgPT4gPEhlYWRlci8+XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4vQXBwbGljYXRpb24nXG5pbXBvcnQge0RldlRvb2xzfSBmcm9tICcuLi8uLi9jb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXNBcHBsaWNhdGlvbiBleHRlbmRzIEFwcGxpY2F0aW9uIHtcbiAgICBnZXQgcm91dGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX19yb3V0ZXMpIHRocm93ICdObyByb3V0ZXMgcHJvdmlkZWQnXG4gICAgICAgIHJldHVybiB0aGlzLl9fcm91dGVzXG4gICAgfVxuICAgIHNldCByb3V0ZXModikge3RoaXMuX19yb3V0ZXMgPSB2fVxuICAgIGdldCBoaXN0b3J5KCkge3JldHVybiB0aGlzLnV0aWwuaGlzdG9yeX1cblxuICAgIGNoaWxkcmVuID0gKCkgPT4gPFJvdXRlciByb3V0ZXM9e3RoaXMucm91dGVzfSBoaXN0b3J5PXt0aGlzLmhpc3Rvcnl9Lz5cbn1cbiIsImV4cG9ydHMuQXBwbGljYXRpb24gPSByZXF1aXJlKCcuL0FwcGxpY2F0aW9uJykuZGVmYXVsdFxuZXhwb3J0cy5Gb290ZXJBcHBsaWNhdGlvbiA9IHJlcXVpcmUoJy4vRm9vdGVyQXBwbGljYXRpb24nKS5kZWZhdWx0XG5leHBvcnRzLkhlYWRlckFwcGxpY2F0aW9uID0gcmVxdWlyZSgnLi9IZWFkZXJBcHBsaWNhdGlvbicpLmRlZmF1bHRcbmV4cG9ydHMuUm91dGVzQXBwbGljYXRpb24gPSByZXF1aXJlKCcuL1JvdXRlc0FwcGxpY2F0aW9uJykuZGVmYXVsdFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJlYWRjcnVtYnMgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ2JyZWFkY3J1bWJzJ1xuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxuICAgICAgICAgICAgICAgIHt0aGlzLmJyZWFkY3J1bWJzLm1hcCgoaXRlbSwgaSkgPT4gPExpbmsga2V5PXtpfSB0bz17aXRlbS51cmx9IGNsYXNzTmFtZT0nYnJlYWRjcnVtYic+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvTGluaz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aW9ucyc+e3RoaXMuYnJlYWRjcnVtYnNBY3Rpb25zfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdidXR0b24nXG4gICAgbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsXG4gICAgb25DbGljayA9IHRoaXMucHJvcHMub25DbGlja1xuICAgIHR5cGUgPSB0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAnYnV0dG9uJ1xuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxidXR0b24gdHlwZT17dGhpcy50eXBlfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9PlxuICAgICAgICAgICAge3RoaXMubGFiZWx9XG4gICAgICAgIDwvYnV0dG9uPlxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ2NhcmQnXG4gICAgaGVhZGVyID0gKCkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaGVhZGVyJyBzdHlsZT17e2Rpc3BsYXk6ICF0aGlzLnByb3BzLnRpdGxlID8gJ25vbmUnIDogJyd9fT5cbiAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuICAgICAgICAgICAge3RoaXMuc3VidGl0bGUoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgc3VidGl0bGUgPSAoKSA9PlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiAhdGhpcy5wcm9wcy5zdWJ0aXRsZSA/ICdub25lJyA6ICcnfX0+e3RoaXMucHJvcHMuc3VidGl0bGV9PC9sYWJlbD5cbiAgICByZW5kZXIgPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5oZWFkZXIoKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtY29udGVudCc+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge3V0aWwsIGNvbmZpZ3VyYXRpb259IGZyb20gJy4uLy4uL2NvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge3ZhbGlkYXRpb25FcnJvcnM6IHt9LCByZWZyZXNoOiBmYWxzZX1cbiAgICAgICAgdGhpcy5pbml0KC4uLmFyZ3MpXG4gICAgfVxuICAgIGluaXQoLi4uYXJncykge31cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fX21vdW50ZWQgPSB0cnVlXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2dsb2JhbF9jb29raWVfZGVsZXRlZCcsIHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpKVxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdnbG9iYWxfY29va2llX3VwZGF0ZWQnLCB0aGlzLnJlZnJlc2guYmluZCh0aGlzKSlcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignZ2xvYmFsX3JvdXRlX2VudGVyZWQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge3JvdXRlLCByZXBsYWNlfSA9IGUuZGV0YWlsXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYWdlUm91dGU6IHJvdXRlfSlcbiAgICAgICAgICAgIHRoaXMub25Sb3V0ZUVudGVyZWQocm91dGUsIHJlcGxhY2UpXG4gICAgICAgIH0pXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2dsb2JhbF9yb3V0ZV9jaGFuZ2VkJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtwcmV2LCBuZXh0fSA9IGUuZGV0YWlsXG4gICAgICAgICAgICB0aGlzLm9uUm91dGVDaGFuZ2VkKHByZXYsIG5leHQpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucG9zdENvbXBvbmVudERpZE1vdW50KClcbiAgICAgICAgaWYgKHRoaXMucGFnZUxvYWRlZEFwaSkge1xuICAgICAgICAgICAgdGhpcy51dGlsLnF1ZXJ5KHRoaXMucGFnZUxvYWRlZEFwaSlcbiAgICAgICAgICAgICAgICAuc3VjY2Vzcyh0aGlzLnBhZ2VMb2FkZWRBcGlTdWNjZXNzKVxuICAgICAgICAgICAgICAgIC5mYWlsdXJlKHRoaXMucGFnZUxvYWRlZEFwaUZhaWx1cmUpXG4gICAgICAgICAgICAgICAgLnJ1bigpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFnZUxvYWRlZEFwaVN1Y2Nlc3MgPSAocmVzKSA9PiB7fVxuICAgIHBhZ2VMb2FkZWRBcGlGYWlsdXJlID0gKHJlcykgPT4ge31cbiAgICBwb3N0Q29tcG9uZW50RGlkTW91bnQoKSB7fVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge3RoaXMuX19tb3VudGVkID0gZmFsc2V9XG4gICAgb25Sb3V0ZUVudGVyZWQgPSAocm91dGUsIHJlcGxhY2UpID0+IHt9XG4gICAgb25Sb3V0ZUNoYW5nZWQgPSAocHJldiwgbmV4dCkgPT4ge31cbiAgICByZWZyZXNoKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLl9fbW91bnRlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA/IHN0YXRlIDogdGhpcy5zdGF0ZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRFcnJvcihmaWVsZCwgbXNnKSB7XG4gICAgICAgIHRoaXMuc3RhdGUudmFsaWRhdGlvbkVycm9yc1tmaWVsZF0gPSBtc2dcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmVtb3ZlRXJyb3IoZmllbGQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS52YWxpZGF0aW9uRXJyb3JzW2ZpZWxkXSA9IG51bGxcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBnZXQgZG9tKCkge3JldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKX1cbiAgICBnZXQgY29uZmlndXJhdGlvbigpIHtyZXR1cm4gY29uZmlndXJhdGlvbn1cbiAgICBnZXQgdXRpbCgpIHtyZXR1cm4gdXRpbH1cbiAgICBnZXQgY2xhc3NOYW1lKCkge3JldHVybiBgJHt0aGlzLmNvbXBvbmVudENsYXNzTmFtZX0gJHt0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICBnZXQgcm91dGUoKSB7cmV0dXJuIHRoaXMudXRpbC5jb29raWUucmVhZCgncm91dGVfZW50ZXJlZCcpLnJvdXRlfVxuICAgIGdldCBwYWdlSW5mbygpIHtyZXR1cm4gdGhpcy5wcm9wcy5wYWdlSW5mb31cbiAgICBicmVhZGNydW1icyA9IHRoaXMucHJvcHMuYnJlYWRjcnVtYnNcbiAgICBicmVhZGNydW1ic0FjdGlvbnMgPSB0aGlzLnByb3BzLmJyZWFkY3J1bWJzQWN0aW9uc1xuXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2RlZmF1bHQgYXMgUmVhY3REcm9wem9uZX0gZnJvbSAncmVhY3QtZHJvcHpvbmUnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcHpvbmUgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ2Ryb3B6b25lJ1xuICAgIHN0YXRlID0ge2ZpbGVzOiBbXX1cblxuICAgIGdldCBmaWxlcygpIHtyZXR1cm4gdGhpcy5zdGF0ZS5maWxlc31cblxuICAgIG9wZW4gPSAoKSA9PiB0aGlzLmRyb3B6b25lLm9wZW4oKVxuICAgIGRyb3AgPSAoZmlsZXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsZXN9KVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkRyb3BwZWQpIHRoaXMucHJvcHMub25Ecm9wcGVkKHRoaXMuc3RhdGUuZmlsZXMpXG4gICAgfVxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxSZWFjdERyb3B6b25lIGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9IHJlZj17ZSA9PiB0aGlzLmRyb3B6b25lID0gZX0gb25Ecm9wPXt0aGlzLmRyb3B9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvUmVhY3REcm9wem9uZT5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29ubmVjdH0gZnJvbSAnLi4vcmVkdXgnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnLi9UZXh0RmllbGQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnbG9naW4nXG4gICAgdmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5hY2NvdW50SW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldEVycm9yKCdhY2NvdW50JywgJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnJvcignYWNjb3VudCcpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnBhc3N3b3JkSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldEVycm9yKCdwYXNzd29yZCcsICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyb3IoJ3Bhc3N3b3JkJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBvbkxvZ2luID0gKGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGUoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5leGVjdXRlVXNlckxvZ2luQWN0aW9uKHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiB0aGlzLmFjY291bnRJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZElucHV0LnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgIDxoMT5TaWduIGluIHRvIDxzcGFuIGNsYXNzTmFtZT0nYXBwJz57dGhpcy5jb25maWd1cmF0aW9uLmFwcH08L3NwYW4+PC9oMT5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2xvZ2luLWZvcm0nPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9J3RleHQnIHJlZj17ZSA9PiB0aGlzLmFjY291bnRJbnB1dCA9IGV9XG4gICAgICAgICAgICAgICAgICBlcnJvclRleHQ9e3RoaXMuc3RhdGUudmFsaWRhdGlvbkVycm9ycy5hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0FjY291bnQnLz5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPSdwYXNzd29yZCcgcmVmPXtlID0+IHRoaXMucGFzc3dvcmRJbnB1dCA9IGV9XG4gICAgICAgICAgICAgICAgICBlcnJvclRleHQ9e3RoaXMuc3RhdGUudmFsaWRhdGlvbkVycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCcvPlxuICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPSdMb2dpbicgb25DbGljaz17dGhpcy5vbkxvZ2lufS8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG59XG5leHBvcnQgZGVmYXVsdCAobmV3IENvbm5lY3QoTG9naW4pKS5rbGFzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFN0eWxlIHtcbiAgICBsZXZlbCA9IHRoaXMucHJvcHMubGV2ZWwgPyB0aGlzLnByb3BzLmxldmVsIDogMFxuICAgIGdldE5vZGVDbGFzc05hbWUgPSAobm9kZSkgPT4gYCR7bG9jYXRpb24ucGF0aG5hbWUgPT0gbm9kZS51cmwgPyAnYWN0aXZlJyA6ICcnfSBsZXZlbCR7dGhpcy5sZXZlbH0gJHtub2RlLnN1Yk5vZGVzICYmIG5vZGUuc3ViTm9kZXMubGVuZ3RoID4gMCA/ICdoYXMtY2hpbGRyZW4nIDogJyd9YFxuICAgIHJlbmRlck1lbnUgPSAobWVudXMsIGNsYXNzTmFtZSwgc3ViTWVudUNsYXNzTmFtZSkgPT4gIW1lbnVzIHx8ICFtZW51cy5sZW5ndGggPyBudWxsIDpcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57bWVudXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvcHMgPSBpdGVtLm9uQ2xpY2sgP1xuICAgICAgICAgICAgICAgIHtvbkNsaWNrOiBpdGVtLm9uQ2xpY2t9IDpcbiAgICAgICAgICAgICAgICB7aHJlZjogaXRlbS51cmwsIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udXJsKSB0aGlzLnV0aWwuaGlzdG9yeS5wdXNoKGl0ZW0udXJsKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5odG1sID9cbiAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT17dGhpcy5nZXROb2RlQ2xhc3NOYW1lKGl0ZW0pfT57aXRlbS5odG1sfTwvbGk+IDpcbiAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT17dGhpcy5nZXROb2RlQ2xhc3NOYW1lKGl0ZW0pfT5cbiAgICAgICAgICAgICAgICA8TGluayB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgeyFpdGVtLmRlc2NyaXB0aW9uID8gbnVsbCA6XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz57aXRlbS5kZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgICAgICAgPE1lbnUgbWVudXM9e2l0ZW0uc3ViTm9kZXN9XG4gICAgICAgICAgICAgICAgICAgIGxldmVsPXt0aGlzLmxldmVsICsgMX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdWJNZW51Q2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBzdWJNZW51Q2xhc3NOYW1lPXtzdWJNZW51Q2xhc3NOYW1lfS8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgcmVuZGVyID0gKCkgPT4gdGhpcy5yZW5kZXJNZW51KHRoaXMucHJvcHMubWVudXMsIHRoaXMuY2xhc3NOYW1lLCB0aGlzLnByb3BzLnN1Yk1lbnVDbGFzc05hbWUpXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2RlZmF1bHQgYXMgUmVhY3RNb2RhbH0gZnJvbSAncmVhY3QtbW9kYWwnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gYG1vZGFsLWRpYWxvZyAke3RoaXMubW9kYWxDbGFzc05hbWV9YFxuICAgIG1vZGFsQ2xhc3NOYW1lID0gJydcblxuICAgIGNsb3NlID0gKCkgPT4ge31cbiAgICBtZXNzYWdlID0gKCkgPT4gIXRoaXMucHJvcHMubWVzc2FnZSA/IG51bGwgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtbWVzc2FnZSc+e3RoaXMucHJvcHMubWVzc2FnZX08L2Rpdj5cbiAgICBmb290ZXIgPSAoKSA9PiAhdGhpcy5wcm9wcy5mb290ZXIgPyBudWxsIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWZvb3Rlcic+e3RoaXMucHJvcHMuZm9vdGVyfTwvZGl2PlxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxSZWFjdE1vZGFsIHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLm1lc3NhZ2UoKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zIGljb24tY2xvc2UnIG9uQ2xpY2s9e3RoaXMuY2xvc2V9PmNsb3NlPC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIHt0aGlzLmZvb3RlcigpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVhY3RNb2RhbD5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29ubmVjdH0gZnJvbSAnLi4vcmVkdXgnXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCdcblxuY2xhc3MgTW9kYWxEZWZhdWx0IGV4dGVuZHMgTW9kYWwge1xuICAgIG1vZGFsQ2xhc3NOYW1lID0gJ2RlZmF1bHQtbW9kYWwnXG5cbiAgICBjbG9zZSA9ICgpID0+IHRoaXMucHJvcHMuZXhlY3V0ZVJlbW92ZU1vZGFsRnJvbVZpZXdBY3Rpb24oKVxufVxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KE1vZGFsRGVmYXVsdCkpLmtsYXNzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luJ1xuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJy4vQnJlYWRjcnVtYnMnXG5pbXBvcnQgTW9kYWxEZWZhdWx0IGZyb20gJy4vTW9kYWxEZWZhdWx0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGBjb250YWluZXItZmx1aWQgcGFnZSAke3RoaXMuc2lkZWJhckxlZnRDbGFzc05hbWV9ICR7dGhpcy5zaWRlYmFyUmlnaHRDbGFzc05hbWV9ICR7dGhpcy5wYWdlQ2xhc3NOYW1lfWBcbiAgICBwYWdlQ2xhc3NOYW1lID0gJydcblxuICAgIGdldCBzaWRlYmFyTGVmdENsYXNzTmFtZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnNpZGViYXJMZWZ0KSByZXR1cm4gJydcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGlkZVNpZGViYXJMZWZ0ID8gJ2hhcy1zaWRlYmFyLWxlZnQtY29sbGFwc2VkJyA6ICdoYXMtc2lkZWJhci1sZWZ0J1xuICAgIH1cbiAgICBnZXQgc2lkZWJhclJpZ2h0Q2xhc3NOYW1lKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuc2lkZWJhclJpZ2h0KSByZXR1cm4gJydcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGlkZVNpZGViYXJSaWdodCA/ICdoYXMtc2lkZWJhci1yaWdodC1jb2xsYXBzZWQnIDogJ2hhcy1zaWRlYmFyLXJpZ2h0J1xuICAgIH1cblxuICAgIHJlbmRlclNpYmFyTGVmdCA9ICgpID0+IHRoaXMucHJvcHMuc2lkZWJhckxlZnRcbiAgICByZW5kZXJTaWJhclJpZ2h0ID0gKCkgPT4gdGhpcy5wcm9wcy5zaWRlYmFyUmlnaHRcbiAgICByZW5kZXJCcmVhZGNydW1icyA9ICgpID0+IDxCcmVhZGNydW1icyBicmVhZGNydW1icz17dGhpcy5icmVhZGNydW1ic30gYWN0aW9ucz17dGhpcy5icmVhZGNydW1ic0FjdGlvbnN9Lz5cbiAgICBjb250ZW50ID0gKCkgPT4gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIGNoaWxkcmVuID0gKCkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyQnJlYWRjcnVtYnMoKX1cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNpYmFyTGVmdCgpfVxuICAgICAgICAgICAge3RoaXMuY29udGVudCgpfVxuICAgICAgICAgICAge3RoaXMucmVuZGVyU2liYXJSaWdodCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICByZW5kZXJNb2RhbCA9ICgpID0+ICF0aGlzLnByb3BzLm1vZGFsID8gbnVsbCA6IHRoaXMucHJvcHMubW9kYWwgaW5zdGFuY2VvZiBNb2RhbCA/IHRoaXMucHJvcHMubW9kYWwgOlxuICAgICAgICA8TW9kYWxEZWZhdWx0IGlzT3Blbj17dHJ1ZX0gY29udGVudExhYmVsPSdNb2RhbERlZmF1bHQnPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubW9kYWx9XG4gICAgICAgIDwvTW9kYWxEZWZhdWx0PlxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICB7dGhpcy51dGlsLnVzZXIuaXNMb2dnZWQgPyB0aGlzLmNoaWxkcmVuKCkgOiA8TG9naW4vPn1cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlck1vZGFsKCl9XG4gICAgICAgIDwvZGl2PlxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEZpZWxkIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdzZWFyY2gtZmllbGQnXG4gICAgaWNvbiA9IHRoaXMucHJvcHMuaWNvbiA/IHRoaXMucHJvcHMuaWNvbiA6IDxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPnNlYXJjaDwvaT5cbiAgICBpY29uUG9zaXRpb24gPSB0aGlzLnByb3BzLmljb25Qb3NpdGlvbiA9PSAnc3RhcnQnID8gJ3N0YXJ0JyA6ICdlbmQnXG4gICAgcGxhY2Vob2xkZXIgPSB0aGlzLnByb3BzLnBsYWNlaG9sZGVyID8gdGhpcy5wcm9wcy5wbGFjZWhvbGRlciA6ICdTZWFyY2gnXG4gICAgZ2V0IHZhbHVlKCkge3JldHVybiB0aGlzLmlucHV0LnZhbHVlfVxuICAgIHNldCB2YWx1ZSh2KSB7dGhpcy5pbnB1dC52YWx1ZSA9IHZ9XG5cbiAgICBvbkNoYW5nZSA9IChlKSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlZCA/IHRoaXMucHJvcHMub25DaGFuZ2VkKGUpIDogZmFsc2VcbiAgICByZW5kZXIgPSAoKSA9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgIHt0aGlzLmljb25Qb3NpdGlvbiA9PSAnc3RhcnQnID8gdGhpcy5pY29uIDogbnVsbH1cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZWY9e2UgPT4gdGhpcy5pbnB1dCA9IGV9IHBsYWNlaG9sZGVyPXt0aGlzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XG4gICAgICAgICAgICB7dGhpcy5pY29uUG9zaXRpb24gPT0gJ2VuZCcgPyB0aGlzLmljb24gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTdHlsZSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IFNlYXJjaEZpZWxkIGZyb20gJy4vU2VhcmNoRmllbGQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdEZpZWxkIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdzZWxlY3QtZmllbGQnXG4gICAgcGxhY2Vob2xkZXIgPSB0aGlzLnByb3BzLnBsYWNlaG9sZGVyID8gdGhpcy5wcm9wcy5wbGFjZWhvbGRlciA6ICcnXG4gICAgbm9uZU9wdGlvbiA9IHt0ZXh0OiB0aGlzLnBsYWNlaG9sZGVyLCB2YWx1ZTogbnVsbCwgY2xhc3NOYW1lOiAnbm9uZS1vcHRpb24nfVxuICAgIHNob3VsZFNob3dOb25lT3B0aW9uID0gdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgncGxhY2Vob2xkZXInKVxuICAgIHN0eWxlID0gdGhpcy51dGlsLmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zdHlsZSlcbiAgICB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGVcbiAgICBvcHRpb25UZXh0ID0gdGhpcy5wcm9wcy5vcHRpb25UZXh0ID8gdGhpcy5wcm9wcy5vcHRpb25UZXh0IDogKG8pID0+IG8udGV4dFxuICAgIG9wdGlvblZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25WYWx1ZSA/IHRoaXMucHJvcHMub3B0aW9uVmFsdWUgOiAobykgPT4gby52YWx1ZVxuICAgIG9wdGlvbiA9IChpKT0+IHRoaXMub3B0aW9uc1tpXSA/IHRoaXMub3B0aW9uc1tpXSA6IHRoaXMubm9uZU9wdGlvblxuICAgIG9wZW4gPSAob3BlbikgPT4gdGhpcy5yZWZyZXNoKHtvcGVufSlcbiAgICBvbkNoYW5nZSA9IChvLCBmKSA9PiB7XG4gICAgICAgIGlmIChmIHx8IG8gIT0gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKHtzZWxlY3RlZDogbywgb3BlbjogZmFsc2V9KVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2VkKSB0aGlzLnByb3BzLm9uQ2hhbmdlZChvLCB0aGlzKVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRlID0ge1xuICAgICAgICBvcHRpb25zOiB0aGlzLm5vcm1hbGl6ZU9wdGlvbnModGhpcy5wcm9wcy5vcHRpb25zKSxcbiAgICAgICAgb3BlbjogQm9vbGVhbih0aGlzLnByb3BzLm9wZW4pLFxuICAgICAgICBzZWFyY2hhYmxlOiBCb29sZWFuKHRoaXMucHJvcHMuc2VhcmNoYWJsZSksXG5cblxuICAgIH1cbiAgICBpbml0KHByb3BzKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnMuZmluZChvID0+IHRoaXMub3B0aW9uVmFsdWUobykgPT0gcHJvcHMudmFsdWUpXG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkID8gdGhpcy5zdGF0ZS5zZWxlY3RlZCA6IHRoaXMubm9uZU9wdGlvblxuICAgICAgICB0aGlzLnV0aWwuYXNzaWduKHRoaXMuc3R5bGUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBwYXJzZUludChwcm9wcy53aWR0aCkgPyBgJHtwYXJzZUludChwcm9wcy53aWR0aCl9cHhgIDogJ2luaXRpYWwnLFxuICAgICAgICAgICAgbWluV2lkdGg6IHBhcnNlSW50KHByb3BzLm1pbldpZHRoKSA/IGAke3BhcnNlSW50KHByb3BzLm1pbldpZHRoKX1weGAgOiAnaW5pdGlhbCcsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3BlbiAmJiB0aGlzLnNlYXJjaEZpZWxkKSB0aGlzLnNlYXJjaEZpZWxkLmRvbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKClcbiAgICB9XG4gICAgcG9zdENvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3QgPSBlLnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0LWZpZWxkJylcbiAgICAgICAgICAgIGlmIChzZWxlY3QgJiYgc2VsZWN0ID09IHRoaXMuZG9tICYmIGUudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QtdmFsdWUnKSkgdGhpcy5vcGVuKHRydWUpXG4gICAgICAgICAgICBlbHNlIHRoaXMub3BlbihmYWxzZSlcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgIT0gdGhpcy5ub25lT3B0aW9uKSB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VsZWN0ZWQsIHRydWUpXG4gICAgfVxuICAgIG5vcm1hbGl6ZU9wdGlvbnMgPSAob3B0aW9ucykgPT5cbiAgICAgICAgQXJyYXkuaXNBcnJheShvcHRpb25zKSA/IG9wdGlvbnMubWFwKG8gPT4ge3JldHVybiB0eXBlb2YgbyA9PSAnc3RyaW5nJyA/IHt2YWx1ZTogbywgdGV4dDpvfSA6IGt9KSA6XG4gICAgICAgIHR5cGVvZiBvcHRpb25zID09ICdvYmplY3QnID8gT2JqZWN0LmtleXMob3B0aW9ucykubWFwKGsgPT4ge3JldHVybiB7dmFsdWU6IG9wdGlvbnNba10sIHRleHQ6IGt9fSkgOlxuICAgICAgICBbXVxuXG4gICAgZ2V0IG9wdGlvbnMoKSB7cmV0dXJuIHRoaXMuc2hvdWxkU2hvd05vbmVPcHRpb24gPyBbdGhpcy5ub25lT3B0aW9uXS5jb25jYXQodGhpcy5zdGF0ZS5vcHRpb25zKSA6IHRoaXMuc3RhdGUub3B0aW9uc31cbiAgICBnZXQgZmlsdGVyZWRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hGaWVsZCAmJiB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlID9cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5maWx0ZXIobyA9PiB0aGlzLm9wdGlvblRleHQobykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaEZpZWxkLnZhbHVlLnRvTG93ZXJDYXNlKCkpKSA6IHRoaXMub3B0aW9uc1xuICAgIH1cbiAgICByZW5kZXJPcHRpb24gPSAobyxpKSA9PlxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgc2VsZWN0LW9wdGlvbiAke28uY2xhc3NOYW1lfSAke3RoaXMuc2VsZWN0ZWQgPT0gbyA/ICdzZWxlY3RlZCcgOiAnJ31gfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsIG8pfT5cbiAgICAgICAgICAgIHt0aGlzLm9wdGlvblRleHQobyl9XG4gICAgICAgIDwvZGl2PlxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICB7IXRoaXMudGl0bGUgPyBudWxsIDogPGRpdiBjbGFzc05hbWU9J3NlbGVjdC10aXRsZSc+e3RoaXMudGl0bGV9PC9kaXY+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWxlY3QtdmFsdWUgJHt0aGlzLnNlbGVjdGVkID09IHRoaXMubm9uZU9wdGlvbiA/ICdwbGFjZWhvbGRlcicgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0LXRleHQnPnt0aGlzLm9wdGlvblRleHQodGhpcy5zZWxlY3RlZCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyc+YXJyb3dfZHJvcF9kb3duPC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0LWRyb3Bkb3duJyBzdHlsZT17dGhpcy51dGlsLmFzc2lnbih0aGlzLnN0eWxlLCB7ZGlzcGxheTogdGhpcy5zdGF0ZS5vcGVuID8gJycgOiAnbm9uZSd9KX0+XG4gICAgICAgICAgICAgICAgeyF0aGlzLnNlYXJjaGFibGUgPyBudWxsIDogPFNlYXJjaEZpZWxkIHJlZj17ZSA9PiB0aGlzLnNlYXJjaEZpZWxkID0gZX0gb25DaGFuZ2U9e3RoaXMucmVmcmVzaH0vPn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0LWRyb3Bkb3duJz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuZmlsdGVyZWRPcHRpb25zLm1hcCgobyxpKSA9PiB0aGlzLnJlbmRlck9wdGlvbihvLGkpKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTdHlsZSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IFNlYXJjaEZpZWxkIGZyb20gJy4vU2VhcmNoRmllbGQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0ZXBwZXIgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gYHN0ZXBwZXIgJHt0aGlzLnByb3BzLmF1dG9maXQgPyAnc3RlcHBlci1hdXRvZml0JyA6ICcnfWBcbiAgICBzdGVwcyA9IHRoaXMucHJvcHMuc3RlcHMgPyB0aGlzLnByb3BzLnN0ZXBzIDogW11cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY3VycmVudDogdGhpcy5wcm9wcy5jdXJyZW50ID8gdGhpcy5wcm9wcy5jdXJyZW50IDogMFxuICAgIH1cbiAgICBnZXQgY3VycmVudCgpIHtyZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50fVxuICAgIHNldCBjdXJyZW50KGN1cnJlbnQpIHt0aGlzLnJlZnJlc2goe2N1cnJlbnR9KX1cbiAgICBqdW1wID0gKGkpID0+IGkgPiAwICYmIGkgPCB0aGlzLnN0ZXBzLmxlbmd0aCAmJiB0aGlzLnN0ZXBzW2ldLmFjdGl2ZSA/IHRoaXMuY3VycmVudCA9IGkgOiBmYWxzZVxuICAgIG5leHQgPSAoKSA9PiB0aGlzLmp1bXAodGhpcy5jdXJyZW50ICsgMSlcbiAgICBwcmV2ID0gKCkgPT4gdGhpcy5qdW1wKHRoaXMuY3VycmVudCAtIDEpXG4gICAgaGVhZGVycyA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGVwLWhlYWRlcnMnPlxuICAgICAgICAgICAge3RoaXMuc3RlcHMubWFwKChzLGkpID0+IHRoaXMuaGVhZGVyKHMsaSkpfVxuICAgICAgICA8L2Rpdj5cbiAgICBoZWFkZXIgPSAocyxpKSA9PlxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgc3RlcC1oZWFkZXIgJHtzLmFjdGl2ZSA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJIZWFkZXIocyxpKX1cbiAgICAgICAgPC9kaXY+XG4gICAgcmVuZGVySGVhZGVyID0gdGhpcy5wcm9wcy5yZW5kZXJIZWFkZXIgPyB0aGlzLnByb3BzLnJlbmRlckhlYWRlciA6IChzLGkpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGVwLWhlYWRlci1jb250ZW50Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGVwLWluZGV4Jz48YSBvbkNsaWNrPXt0aGlzLmp1bXAuYmluZCh0aGlzLCBpKX0+e2krMX08L2E+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RlcC10aXRsZSc+e3MudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJIZWFkZXJFeHRyYShzLGkpfVxuICAgICAgICA8L2Rpdj5cbiAgICByZW5kZXJIZWFkZXJFeHRyYSA9IChzLGkpID0+IHRoaXMucHJvcHMucmVuZGVySGVhZGVyRXh0cmEgPyB0aGlzLnByb3BzLnJlbmRlckhlYWRlckV4dHJhKHMsaSkgOiBudWxsXG5cbiAgICBjb250ZW50ID0gKCkgPT4gIXRoaXMucmVuZGVyQ29udGVudCh0aGlzLmN1cnJlbnQpID8gbnVsbCA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGVwLWNvbnRlbnQnPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCh0aGlzLmN1cnJlbnQpfVxuICAgICAgICA8L2Rpdj5cbiAgICByZW5kZXJDb250ZW50ID0gKGkpID0+IHRoaXMucHJvcHMucmVuZGVyQ29udGVudCA/IHRoaXMucHJvcHMucmVuZGVyQ29udGVudChpKSA6IHRoaXMuc3RlcHNbaV0uY29udGVudFxuXG4gICAgcmVuZGVyID0gKCkgPT4gIXRoaXMuc3RlcHMgPyBudWxsIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLmhlYWRlcnMoKX1cbiAgICAgICAgICAgIHt0aGlzLmNvbnRlbnQoKX1cbiAgICAgICAgPC9kaXY+XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZ2V0IHV1aWQoKSB7cmV0dXJuIHRoaXMuX191dWlkID0gIXRoaXMuX191dWlkID8gdGhpcy51dGlsLnV1aWQoKSA6IHRoaXMuX191dWlkfVxuICAgIGdldCBkZWZhdWx0VGhlbWUoKSB7XG4gICAgICAgIGNvbnN0IHRoZW1lID0gdGhpcy5jb25maWd1cmF0aW9uLnVpLnRoZW1lXG4gICAgICAgIHJldHVybiB0aGlzLnV0aWwuYXNzaWduKHtpZDogdGhpcy51dWlkLCBuYW1lOiB0aGlzLnV1aWR9LCB0aGVtZSwge1xuICAgICAgICAgICAgcGFkZGluZ0xlZnRSaWdodDoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5wYWRkaW5nTGVmdCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnBhZGRpbmdSaWdodFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhZGRpbmdUb3BCb3R0b206IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiB0aGVtZS5wYWRkaW5nVG9wLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnBhZGRpbmdCb3R0b21cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWRkaW5nTGVmdFJpZ2h0U21hbGw6IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUucGFkZGluZ0xlZnRTbWFsbCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnBhZGRpbmdSaWdodFNtYWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFkZGluZ1RvcEJvdHRvbVNtYWxsOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogdGhlbWUucGFkZGluZ1RvcFNtYWxsLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnBhZGRpbmdCb3R0b21TbWFsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGhlbWUubGluZUhlaWdodCxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvblN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IHRoZW1lLmJ1dHRvbkZvbnRTaXplLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuYnV0dG9uQmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5wYWRkaW5nTGVmdFNtYWxsLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUucGFkZGluZ1JpZ2h0U21hbGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5kZXJsaW5lU3R5bGU6IHtib3R0b206ICcwJywgbGVmdDogJzAnfSxcbiAgICAgICAgICAgIHVuZGVybGluZUZvY3VzU3R5bGU6IHtib3JkZXJCb3R0b21XaWR0aDogJzFweCd9LFxuICAgICAgICAgICAgdGFibGVTdHlsZToge30sXG4gICAgICAgICAgICByb3dTdHlsZToge1xuICAgICAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHRoZW1lLmxpbmVIZWlnaHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2VsbFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMCcsIHBhZGRpbmc6IGAwcHggJHt0aGVtZS5wYWRkaW5nU21hbGx9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0LFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBnZXQgdGhlbWVQcm9wcygpIHtyZXR1cm4gW119XG4gICAgZ2V0VGhlbWVQcm9wcygpIHtyZXR1cm4gWydpZCcsICduYW1lJywgJ3N0eWxlJ10uY29uY2F0KHRoaXMudGhlbWVQcm9wcyl9XG4gICAgZ2V0IHRoZW1lKCkge3JldHVybiB0aGlzLnV0aWwuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRUaGVtZSwgdGhpcy5wcm9wcyl9XG4gICAgZ2V0IGNtcFN0eWxlUHJvcHMoKSB7cmV0dXJuIHRoaXMudXRpbC5pbmNsdWRlKHRoaXMudXRpbC5hc3NpZ24oe30sIHRoaXMudGhlbWUsIHRoaXMuY21wUHJvcHMpLCB0aGlzLmdldFRoZW1lUHJvcHMoKSl9XG4gICAgZ2V0IGNtcFByb3BzKCkge3JldHVybiB0aGlzLnV0aWwuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRQcm9wcywgdGhpcy5wcm9wcyl9XG4gICAgZ2V0IGRlZmF1bHRQcm9wcygpIHtyZXR1cm4ge319XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ3RhYmxlLXZpZXcnXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNvbHVtbnM6IHRoaXMucHJvcHMuY29sdW1ucyA/IHRoaXMucHJvcHMuY29sdW1ucyA6IFtdXG4gICAgfVxuICAgIGdldCBjb2x1bW5zKCkge3JldHVybiB0aGlzLnN0YXRlLmNvbHVtbnN9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuY2xhc3MgVGFicyBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBgdGFicyAke3RoaXMuY21wUHJvcHMudmVydGljYWwgPyAndGFicy12ZXJ0aWNhbCc6ICd0YWJzLWhvcml6b250YWwnfWBcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgYWN0aXZlSW5kZXg6IHRoaXMuY21wUHJvcHMuYWN0aXZlSW5kZXggPyB0aGlzLmNtcFByb3BzLmFjdGl2ZUluZGV4IDogMCxcbiAgICB9XG4gICAgZ2V0IGNoaWxkQ291bnQoKSB7cmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RofVxuICAgIGdldCBhY3RpdmVJbmRleCgpIHtyZXR1cm4gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleH1cbiAgICBoYW5kbGVOZXh0ID0gKCkgPT4gdGhpcy5hY3RpdmVJbmRleCA8IHRoaXMuY2hpbGRDb3VudCA/IHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4OiB0aGlzLmFjdGl2ZUluZGV4ICsgMX0pIDogZmFsc2VcbiAgICBoYW5kbGVQcmV2ID0gKCkgPT4gdGhpcy5hY3RpdmVJbmRleCA+IDAgPyB0aGlzLnNldFN0YXRlKHthY3RpdmVJbmRleDogdGhpcy5hY3RpdmVJbmRleCAtIDF9KSA6IGZhbHNlXG4gICAgZ2V0VGl0bGUgPSAoZWwsIGkpID0+IGVsLnByb3BzLmNoaWxkcmVuLnJlZHVjZSgodiwgY2hpbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnR5cGUgPT0gJ3RpdGxlJyA/IHYgPSBjaGlsZC5wcm9wcy5jaGlsZHJlbiA6IHZcbiAgICB9LCBpKVxuICAgIGdldENvbnRlbnQgPSAoZWwsIGkpID0+IGVsLnByb3BzLmNoaWxkcmVuLnJlZHVjZSgodiwgY2hpbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnR5cGUgPT0gJ2NvbnRlbnQnID8gdiA9IGNoaWxkLnByb3BzLmNoaWxkcmVuIDogdlxuICAgIH0sIGkpXG4gICAgcmVuZGVyID0gKCkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSBzdHlsZT17e2Rpc3BsYXk6ICF0aGlzLmNoaWxkQ291bnQgPyAnbm9uZScgOiAnJ319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYnMtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoKHRhYixpKSA9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHthY3RpdmVJbmRleDogaX0pfSBsYWJlbD17dGhpcy5nZXRUaXRsZSh0YWIsaSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRhYiAke2k9PXRoaXMuYWN0aXZlSW5kZXg/J2FjdGl2ZSc6Jyd9YH0vPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWItY29udGVudCc+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2V0Q29udGVudCh0aGlzLnByb3BzLmNoaWxkcmVuW3RoaXMuYWN0aXZlSW5kZXhdLCB0aGlzLmFjdGl2ZUluZGV4KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFic1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRGaWVsZCBleHRlbmRzIFN0eWxlIHtcbiAgICBnZXQgY29tcG9uZW50Q2xhc3NOYW1lKCkge3JldHVybiBgdGV4dC1maWVsZCAke3RoaXMucHJvcHMuZXJyb3JUZXh0ID8gJ2Vycm9yJyA6ICcnfWB9XG4gICAgZ2V0IHR5cGUoKSB7cmV0dXJuIHRoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICd0ZXh0J31cbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZX1cbiAgICBnZXQgdmFsdWUoKSB7cmV0dXJuIHRoaXMuaW5wdXQudmFsdWV9XG4gICAgc2V0IHZhbHVlKHYpIHt0aGlzLmlucHV0LnZhbHVlID0gdn1cbiAgICBnZXQgcGxhY2Vob2xkZXIoKSB7cmV0dXJuIHRoaXMucHJvcHMucGxhY2Vob2xkZXIgPyB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIDogJyd9XG5cbiAgICByZW5kZXJNZXNzYWdlID0gKCkgPT4gIXRoaXMucHJvcHMuZXJyb3JUZXh0ID8gbnVsbCA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz57dGhpcy5wcm9wcy5lcnJvclRleHR9PC9kaXY+XG4gICAgcmVuZGVyID0gKCkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e2UgPT4gdGhpcy5pbnB1dCA9IGV9IHR5cGU9e3RoaXMudHlwZX0gdmFsdWU9e3RoaXMuZGVmYXVsdFZhbHVlfSBwbGFjZWhvbGRlcj17dGhpcy5wbGFjZWhvbGRlcn0vPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyTWVzc2FnZSgpfVxuICAgICAgICA8L2Rpdj5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTdHlsZSBmcm9tICcuL1N0eWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3cG9ydCBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAndmlld3BvcnQgY29udGFpbmVyLWZsdWlkJ1xuICAgIGNoaWxkcmVuID0gKCkgPT4gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIHJlbmRlciA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLmNoaWxkcmVuKCl9XG4gICAgPC9kaXY+XG59XG4iLCJleHBvcnRzLkNhcmQgPSByZXF1aXJlKCcuL0NhcmQnKS5kZWZhdWx0XG5leHBvcnRzLkNvbXBvbmVudCA9IHJlcXVpcmUoJy4vQ29tcG9uZW50JykuZGVmYXVsdFxuZXhwb3J0cy5TdHlsZSA9IHJlcXVpcmUoJy4vU3R5bGUnKS5kZWZhdWx0XG5leHBvcnRzLlRleHRGaWVsZCA9IHJlcXVpcmUoJy4vVGV4dEZpZWxkJykuZGVmYXVsdFxuZXhwb3J0cy5CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpLmRlZmF1bHRcbmV4cG9ydHMuU2VhcmNoRmllbGQgPSByZXF1aXJlKCcuL1NlYXJjaEZpZWxkJykuZGVmYXVsdFxuZXhwb3J0cy5TZWxlY3RGaWVsZCA9IHJlcXVpcmUoJy4vU2VsZWN0RmllbGQnKS5kZWZhdWx0XG5leHBvcnRzLlRhYmxlID0gcmVxdWlyZSgnLi9UYWJsZScpLmRlZmF1bHRcbmV4cG9ydHMuVGFicyA9IHJlcXVpcmUoJy4vVGFicycpLmRlZmF1bHRcbmV4cG9ydHMuVmlld3BvcnQgPSByZXF1aXJlKCcuL1ZpZXdwb3J0JykuZGVmYXVsdFxuZXhwb3J0cy5Nb2RhbCA9IHJlcXVpcmUoJy4vTW9kYWwnKS5kZWZhdWx0XG5leHBvcnRzLk1vZGFsRGVmYXVsdCA9IHJlcXVpcmUoJy4vTW9kYWxEZWZhdWx0JykuZGVmYXVsdFxuZXhwb3J0cy5Ecm9wem9uZSA9IHJlcXVpcmUoJy4vRHJvcHpvbmUnKS5kZWZhdWx0XG5leHBvcnRzLlN0ZXBwZXIgPSByZXF1aXJlKCcuL1N0ZXBwZXInKS5kZWZhdWx0XG5leHBvcnRzLkJyZWFkY3J1bWJzID0gcmVxdWlyZSgnLi9CcmVhZGNydW1icycpLmRlZmF1bHRcbmV4cG9ydHMuTWVudSA9IHJlcXVpcmUoJy4vTWVudScpLmRlZmF1bHRcbmV4cG9ydHMuUGFnZSA9IHJlcXVpcmUoJy4vUGFnZScpLmRlZmF1bHRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29ubmVjdH0gZnJvbSAnLi4vLi4vcmVkdXgnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vU3R5bGUnXG5pbXBvcnQgVmVyc2lvbiBmcm9tICcuL1ZlcnNpb24nXG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnZm9vdGVyJ1xuICAgIHJlbmRlciA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgIDxWZXJzaW9uLz5cbiAgICA8L2Rpdj5cbn1cbmV4cG9ydCBkZWZhdWx0IChuZXcgQ29ubmVjdChGb290ZXIpKS5rbGFzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb25uZWN0fSBmcm9tICcuLi8uLi9yZWR1eCdcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9TdHlsZSdcbmltcG9ydCBMaW5rc0h1YiBmcm9tICcuL0xpbmtzSHViJ1xuaW1wb3J0IExvZ29Cb3ggZnJvbSAnLi9Mb2dvQm94J1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tICcuL1NlYXJjaEJveCdcbmltcG9ydCBIZWxwICBmcm9tICcuL0hlbHAnXG5pbXBvcnQgTm90aWZpY2F0aW9uICBmcm9tICcuL05vdGlmaWNhdGlvbidcbmltcG9ydCBVc2VyQm94IGZyb20gJy4vVXNlckJveCdcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdoZWFkZXInXG4gICAgb25Sb3V0ZUVudGVyZWQgPSAocm91dGUsIHJlcGxhY2UpID0+IHRoaXMucHJvcHMuZXhlY3V0ZUxvYWRQYWdlSW5mb0FjdGlvbigpXG4gICAgcmVuZGVyID0gKCkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxMaW5rc0h1Yi8+XG4gICAgICAgICAgICA8TG9nb0JveC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UnLz5cbiAgICAgICAgICAgIDxTZWFyY2hCb3gvPlxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbi8+XG4gICAgICAgICAgICA8SGVscC8+XG4gICAgICAgICAgICA8VXNlckJveC8+XG4gICAgICAgIDwvZGl2PlxufVxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KEhlYWRlcikpLmtsYXNzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0Nvbm5lY3R9IGZyb20gJy4uLy4uL3JlZHV4J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4uL1N0eWxlJ1xuXG5jbGFzcyBIZWxwIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdoZWxwJ1xuICAgIGNoaWxkcmVuID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz5oZWxwPC9pPlxuICAgIDwvZGl2PlxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICB7dGhpcy5jaGlsZHJlbigpfVxuICAgICAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KEhlbHApKS5rbGFzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb25uZWN0fSBmcm9tICcuLi8uLi9yZWR1eCdcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9TdHlsZSdcbmltcG9ydCBNZW51IGZyb20gJy4uL01lbnUnXG5cbmNsYXNzIExpbmtzSHViIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdsaW5rcy1odWInXG4gICAgZ2V0VGl0bGUobm9kZXMsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBub2Rlcy5yZWR1Y2UoKHZhbHVlLCBub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT0gbm9kZS51cmwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID0gbm9kZS5zdWJOb2RlcyAmJiBub2RlLnN1Yk5vZGVzLmxlbmd0aCA/IHRoaXMuZ2V0VGl0bGUobm9kZS5zdWJOb2RlcywgdmFsdWUpIDogbm9kZS50aXRsZVxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2Yobm9kZS51cmwpID49IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID0gbm9kZS5zdWJOb2RlcyAmJiBub2RlLnN1Yk5vZGVzLmxlbmd0aCA/IHRoaXMuZ2V0VGl0bGUobm9kZS5zdWJOb2RlcywgdmFsdWUpIDogbm9kZS50aXRsZVxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuc3ViTm9kZXMgJiYgbm9kZS5zdWJOb2Rlcy5sZW5ndGggPyB0aGlzLmdldEFwcE5hbWUobm9kZS5zdWJOb2RlcywgdmFsdWUpIDogdmFsdWVcbiAgICAgICAgfSwgdmFsdWUpXG4gICAgfVxuICAgIGNoaWxkcmVuID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz5hcHBzPC9pPlxuICAgICAgICA8TWVudSBtZW51cz17dGhpcy5wYWdlSW5mby5tZW51c30gY2xhc3NOYW1lPSdtZW51cycgc3ViTWVudUNsYXNzTmFtZT0nc3ViLW1lbnVzJy8+XG4gICAgPC9kaXY+XG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLmNoaWxkcmVuKCl9XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KExpbmtzSHViKSkua2xhc3NcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29ubmVjdH0gZnJvbSAnLi4vLi4vcmVkdXgnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vU3R5bGUnXG5cbmNsYXNzIExvZ29Cb3ggZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ2xvZ28tYm94J1xuXG4gICAgY2hpbGRyZW4gPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgIDxpbWcgc3JjPXt0aGlzLmNvbmZpZ3VyYXRpb24uYXBwbG9nb30vPlxuICAgICAgICA8aDM+e3RoaXMuY29uZmlndXJhdGlvbi5hcHBuYW1lfTwvaDM+XG4gICAgPC9kaXY+XG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLmNoaWxkcmVuKCl9XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IChuZXcgQ29ubmVjdChMb2dvQm94KSkua2xhc3NcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29ubmVjdH0gZnJvbSAnLi4vLi4vcmVkdXgnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vU3R5bGUnXG5cbmNsYXNzIE5vdGlmaWNhdGlvbiBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnbm90aWZpY2F0aW9uJ1xuICAgIGNoaWxkcmVuID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz5ub3RpZmljYXRpb25zPC9pPlxuICAgIDwvZGl2PlxuICAgIHJlbmRlciA9ICgpID0+ICF0aGlzLnV0aWwudXNlci5pc0xvZ2dlZCA/IG51bGwgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAge3RoaXMuY2hpbGRyZW4oKX1cbiAgICAgICAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IChuZXcgQ29ubmVjdChOb3RpZmljYXRpb24pKS5rbGFzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb25uZWN0fSBmcm9tICcuLi8uLi9yZWR1eCdcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9TdHlsZSdcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnLi4vVGV4dEZpZWxkJ1xuXG5jbGFzcyBTZWFyY2hCb3ggZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ3NlYXJjaC1ib3gnXG4gICAgY2hpbGRyZW4gPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgIDxUZXh0RmllbGQgcmVmPXtlID0+IHRoaXMuc2VhcmNoSW5wdXQgPSBlfSBwbGFjZWhvbGRlcj0nU2VhcmNoJy8+XG4gICAgPC9kaXY+XG4gICAgcmVuZGVyID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHshdGhpcy51dGlsLnVzZXIuaXNMb2dnZWQgPyBudWxsIDp0aGlzLmNoaWxkcmVuKCl9XG4gICAgICAgIDwvZGl2PlxufVxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KFNlYXJjaEJveCkpLmtsYXNzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0Nvbm5lY3R9IGZyb20gJy4uLy4uL3JlZHV4J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4uL1N0eWxlJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudSdcblxuY2xhc3MgVXNlckJveCBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAndXNlci1ib3gnXG4gICAgZ2V0IG1lbnVzKCkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvZmlsZScsXG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGl0bGU6ICdQcmVmZXJlbmNlcycsXG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGl0bGU6ICdMb2dvdXQnLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5wcm9wcy5leGVjdXRlVXNlckxvZ291dEFjdGlvbigpXG4gICAgICAgIH1dXG4gICAgfVxuICAgIGNoaWxkcmVuID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlzcGxheS1uYW1lJz57dGhpcy51dGlsLnVzZXIuZGlzcGxheU5hbWV9PC9kaXY+XG4gICAgICAgIDxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPnBlcnNvbjwvaT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnVzJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXZhdGFyJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmFtZSc+e3RoaXMudXRpbC51c2VyLmRpc3BsYXlOYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvY2N1cGF0aW9uJz57dGhpcy51dGlsLnVzZXIub2NjdXBhdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVwYXJ0bWVudCc+e3RoaXMudXRpbC51c2VyLmRlcGFydG1lbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYWlsJz57dGhpcy51dGlsLnVzZXIuZW1haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhc3QtbG9naW4nPnt0aGlzLnV0aWwudXNlci5sYXN0TG9naW59PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rcyc+XG4gICAgICAgICAgICAgICAgPE1lbnUgbWVudXM9e3RoaXMubWVudXN9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICByZW5kZXIgPSAoKSA9PiAhdGhpcy51dGlsLnVzZXIuaXNMb2dnZWQgPyBudWxsIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLmNoaWxkcmVuKCl9XG4gICAgICAgIDwvZGl2PlxufVxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KFVzZXJCb3gpKS5rbGFzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb25uZWN0fSBmcm9tICcuLi8uLi9yZWR1eCdcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9TdHlsZSdcblxuY2xhc3MgVmVyc2lvbiBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAndmVyc2lvbidcblxuICAgIGNoaWxkcmVuID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICB7dGhpcy5jb25maWd1cmF0aW9uLmFwcHZlcnNpb259XG4gICAgPC9kaXY+XG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLmNoaWxkcmVuKCl9XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IChuZXcgQ29ubmVjdChWZXJzaW9uKSkua2xhc3NcbiIsImltcG9ydCB7QWN0aW9uLCBBcGlBY3Rpb24sIFByb3h5QWN0aW9ufSBmcm9tICcuLi8uLi9jb3JlL3JlZHV4J1xuXG5leHBvcnQgY2xhc3MgU2V0QnJlYWRjcnVtYnNBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge31cbmV4cG9ydCBjbGFzcyBTZXRCcmVhZGNydW1ic0FjdGlvbnNBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge31cbmV4cG9ydCBjbGFzcyBBZGRNb2RhbFRvVmlld0FjdGlvbiBleHRlbmRzIEFjdGlvbiB7fVxuZXhwb3J0IGNsYXNzIFJlbW92ZU1vZGFsRnJvbVZpZXdBY3Rpb24gZXh0ZW5kcyBQcm94eUFjdGlvbiB7XG4gICAgcHJveHlDbGFzcyA9ICdBZGRNb2RhbFRvVmlld0FjdGlvbidcbiAgICBwcm94eU5vcm1hbGl6ZShzdGF0ZSwgcGF5bG9hZCwgLi4uYXJncykge3JldHVybiBudWxsfVxufVxuZXhwb3J0IGNsYXNzIFVzZXJMb2dvdXRBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge31cbmV4cG9ydCBjbGFzcyBVc2VyTG9naW5BY3Rpb24gZXh0ZW5kcyBBcGlBY3Rpb24ge1xuICAgIHN1Y2Nlc3NBY3Rpb25zID0gWydMb2FkUGFnZUluZm9BY3Rpb24nXVxuICAgIGxvYWRSZXF1ZXN0KHBheWxvYWQsIC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbC5xdWVyeSh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpLnVybHMubG9naW4sIHBheWxvYWQpXG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNldEN1cnJlbnRTZWFyY2hWYWx1ZUFjdGlvbiBleHRlbmRzIEFjdGlvbiB7fVxuZXhwb3J0IGNsYXNzIFNldEN1cnJlbnRQYWdlTm9BY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge31cbmV4cG9ydCBjbGFzcyBTZXRDdXJyZW50UGFnZVNpemVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge31cbmV4cG9ydCBjbGFzcyBUb2dnbGVTaWRlYmFyTGVmdEFjdGlvbiBleHRlbmRzIEFjdGlvbiB7fVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVNpZGViYXJSaWdodEFjdGlvbiBleHRlbmRzIEFjdGlvbiB7fVxuZXhwb3J0IGNsYXNzIExvYWRQYWdlSW5mb0FjdGlvbiBleHRlbmRzIEFwaUFjdGlvbiB7XG4gICAgbG9hZFJlcXVlc3QocGF5bG9hZCwgLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy51dGlsLnF1ZXJ5KHRoaXMudXRpbC51c2VyLmlzTG9nZ2VkID8gdGhpcy5jb25maWd1cmF0aW9uLmFwaS51cmxzLnBhZ2VJbmZvTG9nZ2VkIDogdGhpcy5jb25maWd1cmF0aW9uLmFwaS51cmxzLnBhZ2VJbmZvKVxuICAgIH1cbn1cbiIsImltcG9ydCB7Q29ubmVjdCBhcyBDb3JlQ29ubmVjdH0gZnJvbSAnLi4vLi4vY29yZS9yZWR1eCdcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9BY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbm5lY3QgZXh0ZW5kcyBDb3JlQ29ubmVjdCB7XG4gICAgZ2V0QWN0aW9ucyhkaXNwYXRjaCwgb3duUHJvcHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbC5hc3NpZ24oe30sIHN1cGVyLmdldEFjdGlvbnMoZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKSwgYWN0aW9ucylcbiAgICB9XG59XG4iLCJpbXBvcnQge1JlZHVjZXIsIENvbmZpZ1JlZHVjZXIsIENvb2tpZVJlZHVjZXIsIEZhbHNlUmVkdWNlciwgVHJ1ZVJlZHVjZXIsIE51bGxSZWR1Y2VyfSBmcm9tICcuLi8uLi9jb3JlL3JlZHV4J1xuXG5leHBvcnQgY2xhc3MgU2V0QnJlYWRjcnVtYnNBY3Rpb25SZWR1Y2VyIGV4dGVuZHMgUmVkdWNlciB7XG4gICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtyZXR1cm4gW119XG4gICAgZ2V0IGZpZWxkTmFtZSgpIHtyZXR1cm4gJ2JyZWFkY3J1bWJzJ31cbn1cbmV4cG9ydCBjbGFzcyBTZXRCcmVhZGNydW1ic0FjdGlvbkFjdGlvbnNSZWR1Y2VyIGV4dGVuZHMgUmVkdWNlciB7XG4gICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtyZXR1cm4gW119XG4gICAgZ2V0IGZpZWxkTmFtZSgpIHtyZXR1cm4gJ2JyZWFkY3J1bWJzQWN0aW9ucyd9XG59XG5leHBvcnQgY2xhc3MgVXNlckxvZ291dEFjdGlvblJlZHVjZXIgZXh0ZW5kcyBDb29raWVSZWR1Y2VyIHtcbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiBudWxsfVxuICAgIGdldCBmaWVsZE5hbWUoKSB7cmV0dXJuICd1c2VyJ31cbiAgICBzZXRDb29raWUoKSB7dGhpcy51dGlsLnVzZXIudW5sb2FkKCl9XG59XG5leHBvcnQgY2xhc3MgQXBpU3VjY2Vzc1VzZXJMb2dpbkFjdGlvblJlZHVjZXIgZXh0ZW5kcyBDb29raWVSZWR1Y2VyIHtcbiAgICBnZXQgZmllbGROYW1lKCkge3JldHVybiAndXNlcid9XG4gICAgc2V0Q29va2llKCkge1xuICAgICAgICB0aGlzLnV0aWwudXNlci5sb2FkKHRoaXMuX192YWx1ZVt0aGlzLmZpZWxkTmFtZV0pXG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEFkZE1vZGFsVG9WaWV3QWN0aW9uUmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGdldCBmaWVsZE5hbWUoKSB7cmV0dXJuICdtb2RhbCd9XG59XG5leHBvcnQgY2xhc3MgU2V0Q3VycmVudFNlYXJjaFZhbHVlQWN0aW9uUmVkdWNlciBleHRlbmRzIENvbmZpZ1JlZHVjZXIge1xuICAgIGdldCBmaWVsZE5hbWUoKSB7cmV0dXJuICdjdXJyZW50U2VhcmNoVmFsdWUnfVxufVxuZXhwb3J0IGNsYXNzIFNldEN1cnJlbnRQYWdlTm9BY3Rpb25SZWR1Y2VyIGV4dGVuZHMgQ29uZmlnUmVkdWNlciB7XG4gICAgZ2V0IGZpZWxkTmFtZSgpIHtyZXR1cm4gJ2N1cnJlbnRQYWdlTm8nfVxufVxuZXhwb3J0IGNsYXNzIFNldEN1cnJlbnRQYWdlU2l6ZUFjdGlvblJlZHVjZXIgZXh0ZW5kcyBDb25maWdSZWR1Y2VyIHtcbiAgICBnZXQgZmllbGROYW1lKCkge3JldHVybiAnY3VycmVudFBhZ2VTaXplJ31cbn1cbmV4cG9ydCBjbGFzcyBUb2dnbGVTaWRlYmFyTGVmdEFjdGlvblJlZHVjZXIgZXh0ZW5kcyBGYWxzZVJlZHVjZXIge1xuICAgIGdldCBmaWVsZE5hbWUoKSB7cmV0dXJuICdoaWRlU2lkZWJhckxlZnQnfVxufVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVNpZGViYXJSaWdodEFjdGlvblJlZHVjZXIgZXh0ZW5kcyBUcnVlUmVkdWNlciB7XG4gICAgZ2V0IGZpZWxkTmFtZSgpIHtyZXR1cm4gJ2hpZGVTaWRlYmFyUmlnaHQnfVxufVxuZXhwb3J0IGNsYXNzIEFwaVN1Y2Nlc3NMb2FkUGFnZUluZm9BY3Rpb25SZWR1Y2VyIGV4dGVuZHMgUmVkdWNlciB7XG4gICAgZ2V0IGZpZWxkTmFtZSgpIHtyZXR1cm4gJ3BhZ2VJbmZvJ31cbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiB7YXBwOiAnJywgbWVudXM6IFtdfX1cbiAgICBub3JtYWxpemUoYWN0aW9uKSB7cmV0dXJuIGFjdGlvbi5kYXRhLmJvZHl9XG59XG4iLCJleHBvcnRzLm9uUm91dGVFbnRlcmVkID0gcmVxdWlyZSgnLi9vblJvdXRlRW50ZXJlZCcpLmRlZmF1bHRcbmV4cG9ydHMub25Sb3V0ZUNoYW5nZWQgPSByZXF1aXJlKCcuL29uUm91dGVDaGFuZ2VkJykuZGVmYXVsdFxuIiwiaW1wb3J0IHtjb29raWV9IGZyb20gJy4uLy4uL2NvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICBjb29raWUudmFsdWUoJ3JvdXRlX2NoYW5nZWQnLCB7cHJldiwgbmV4dH0pXG4gICAgZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JvdXRlX2NoYW5nZWQnLCB7ZGV0YWlsOiB7cHJldiwgbmV4dH19KSlcbn1cbiIsImltcG9ydCB7Y29va2llfSBmcm9tICcuLi8uLi9jb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihyb3V0ZSwgcmVwbGFjZSkge1xuICAgIGNvb2tpZS52YWx1ZSgncm91dGVfZW50ZXJlZCcsIHtyb3V0ZSwgcmVwbGFjZX0pXG4gICAgZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JvdXRlX2VudGVyZWQnLCB7ZGV0YWlsOiB7cm91dGUsIHJlcGxhY2V9fSkpXG59XG4iLCJpbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjb25zdCBXSU5ET1cgPSB7XG4gICAgY29uZmlndXJhdGlvbjoge1xuICAgICAgICBlbnY6ICdtb2NrJyxcbiAgICAgICAgc2hvd0RldlRvb2w6IGZhbHNlLFxuICAgICAgICBnZXRFbnY6IGZ1bmN0aW9uKCkge3JldHVyblxuICAgICAgICAgICAgd2luZG93ICE9IHVuZGVmaW5lZCAmJiB3aW5kb3cuY29uZmlndXJhdGlvbiAmJiB3aW5kb3cuY29uZmlndXJhdGlvbi5lbnYgP1xuICAgICAgICAgICAgd2luZG93LmNvbmZpZ3VyYXRpb24uZW52IDogdGhpcy5lbnZcbiAgICAgICAgfSxcbiAgICAgICAgaXNEZWJ1ZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZW52ID0gdGhpcy5nZXRFbnYoKVxuICAgICAgICAgICAgcmV0dXJuIGVudiA/IGVudiA9PSAnbW9jaycgfHwgZW52ID09ICdkZXYnIDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBpc01vY2s6IGZ1bmN0aW9uKCkge3JldHVybiB0aGlzLmdldEVudigpID09ICdtb2NrJ30sXG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBXSU5ET1cuY29uZmlndXJhdGlvblxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XG4gICAgY29uZmlndXJhdGlvbiA9IHt9XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGZvcih2YXIgaT0wO2kgPCBhcmd1bWVudHMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnID0gYXJndW1lbnRzW2ldXG4gICAgICAgICAgICB1dGlsLmFzc2lnbihXSU5ET1cuY29uZmlndXJhdGlvbiwgY29uZmlnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IFdJTkRPVy5jb25maWd1cmF0aW9uXG4gICAgfVxuICAgIGFsbCgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuY29uZmlndXJhdGlvbi5pc0RlYnVnKCkpIGNvbnNvbGUubG9nKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZURldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMnXG5pbXBvcnQgTG9nTW9uaXRvciBmcm9tICdyZWR1eC1kZXZ0b29scy1sb2ctbW9uaXRvcidcbmltcG9ydCBEb2NrTW9uaXRvciBmcm9tICdyZWR1eC1kZXZ0b29scy1kb2NrLW1vbml0b3InXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURldlRvb2xzKFxuICAgIDxEb2NrTW9uaXRvciB0b2dnbGVWaXNpYmlsaXR5S2V5PVwiY3RybC1oXCJcbiAgICAgICAgICAgICAgICAgY2hhbmdlUG9zaXRpb25LZXk9XCJjdHJsLXdcIj5cbiAgICAgICAgICAgICAgICAgPExvZ01vbml0b3IgLz5cbiAgICA8L0RvY2tNb25pdG9yPlxuKVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHdoZW4gZnJvbSAnd2hlbidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3N5bmMtcmVxdWVzdCdcbmltcG9ydCB7Y29uZmlndXJhdGlvbn0gZnJvbSAnLi9Db25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJFUVVFU1Qge1xuICAgIGdldCBkZWZhdWx0SGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfVxuICAgIGdldCBwYXlsb2FkKCkge3JldHVybiB0aGlzLl9fb3B0aW9ucy5kYXRhfVxuICAgIGdldE9wdGlvbnMoKSB7cmV0dXJuIHRoaXMuX19vcHRpb25zfVxuXG4gICAgY29uc3RydWN0b3IodXJsLCBtZXRob2QpIHtcbiAgICAgICAgbWV0aG9kID0gbWV0aG9kID8gbWV0aG9kLnRvTG93ZXJDYXNlKCkgOiAnZ2V0J1xuICAgICAgICB0aGlzLl9fb3B0aW9ucyA9IHt1cmwsIG1ldGhvZH1cbiAgICAgICAgdGhpcy5oZWFkZXJzKHt9KVxuICAgIH1cbiAgICBleGVjdXRlID0gKCkgPT4gdGhpcy5leGUgPSB3aGVuKGF4aW9zKHRoaXMuX19vcHRpb25zKSlcbiAgICBvcHRpb24gPSAobiwgdikgPT4ge1xuICAgICAgICB0aGlzLl9fb3B0aW9uc1tuXSA9IHZcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgaGVhZGVycyA9IChoZWFkZXJzKSA9PiB0aGlzLm9wdGlvbignaGVhZGVycycsIGFzc2lnbih0aGlzLmRlZmF1bHRIZWFkZXJzLCBoZWFkZXJzKSlcbiAgICB1cmwgPSAodXJsKSA9PiB0aGlzLm9wdGlvbigndXJsJywgdXJsKVxuICAgIGRhdGEgPSAoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLm9wdGlvbignZGF0YScsIGRhdGEpXG4gICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy5tZXRob2QgPT0gJ2dldCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX19vcHRpb25zLnVybFxuICAgICAgICAgICAgdGhpcy5vcHRpb24oJ3VybCcsIHRoaXMuYnVpbGRVcmwodXJsLCB0aGlzLmJ1aWxkUXVlcnkoZGF0YSkpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGJ1aWxkVXJsID0gKHVybCwgcXVlcnkpID0+IHVybC5pbmRleE9mKCc/JykgPj0gMCA/IGAke3VybH0mJHtxdWVyeX1gIDogYCR7dXJsfT8ke3F1ZXJ5fWBcbiAgICBidWlsZFF1ZXJ5ID0gKGpzb24pID0+IGpzb24gPyBPYmplY3Qua2V5cyhqc29uKS5tYXAoayA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoayl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGpzb25ba10gPyBqc29uW2tdIDogJycpfWApLmpvaW4oJyYnKSA6ICcnXG5cbiAgICBfX2JlZm9yZSA9IFtdXG4gICAgX19hZnRlciA9IFtdXG4gICAgX19zdWNjZXNzID0gW11cbiAgICBfX2ZhaWx1cmUgPSBbXVxuICAgIF9fcnVuID0gKHBheWxvYWQsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgYXJncy5tYXAoZm4gPT4gZm4ocGF5bG9hZCkpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGJlZm9yZSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHRoaXMuX19iZWZvcmUgPSBhcmdzXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGFmdGVyID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdGhpcy5fX2FmdGVyID0gYXJnc1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBzdWNjZXNzID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdGhpcy5fX3N1Y2Nlc3MgPSBhcmdzXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGZhaWx1cmUgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICB0aGlzLl9fZmFpbHVyZSA9IGFyZ3NcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgcnVuID0gKHN5bmMpID0+IHN5bmMgPyB0aGlzLnN5bmMoKSA6IHRoaXMuYXN5bmMoKVxuICAgIGFzeW5jID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3J1bih1bmRlZmluZWQsIC4uLnRoaXMuX19iZWZvcmUpXG4gICAgICAgIC5leGVjdXRlKClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRyeSB7dGhpcy5fX3J1bihyZXMsIC4uLnRoaXMuX19zdWNjZXNzKX0gY2F0Y2goZSkge2NvbnNvbGUuZXJyb3IoJ3JlcXVlc3Q6c3VjY2VzcycsIGUpfVxuICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2gocmVzID0+IHtcbiAgICAgICAgICAgIHRyeSB7dGhpcy5fX3J1bihyZXMsIC4uLnRoaXMuX19mYWlsdXJlKX0gY2F0Y2goZSkge2NvbnNvbGUuZXJyb3IoJ3JlcXVlc3Q6ZmFpbHVyZScsIGUpfVxuICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICB0cnkge3RoaXMuX19ydW4odW5kZWZpbmVkLCAuLi50aGlzLl9fYWZ0ZXIpfSBjYXRjaChlKSB7Y29uc29sZS5lcnJvcigncmVxdWVzdDphZnRlcicsIGUpfVxuICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICB9KVxuICAgIH1cbiAgICBzeW5jID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSByZXF1ZXN0KHRoaXMuX19vcHRpb25zLm1ldGhvZCwgdGhpcy5fX29wdGlvbnMudXJsLCBhc3NpZ24oe30sIHRoaXMuX19vcHRpb25zLCB7XG4gICAgICAgICAgICBqc29uOiB0aGlzLl9fb3B0aW9ucy5kYXRhXG4gICAgICAgIH0pKVxuICAgICAgICB0cnkge3Jlcy5kYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgndXRmOCcpKX1cbiAgICAgICAgY2F0Y2goZSkge3Jlcy5kYXRhID0gbnVsbH1cbiAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlIDwgMzAwKSB7XG4gICAgICAgICAgICB0cnkge3RoaXMuX19ydW4ocmVzLCAuLi50aGlzLl9fc3VjY2Vzcyl9IGNhdGNoKGUpIHtjb25zb2xlLmxvZygncmVxdWVzdDpzdWNjZXNzJywgZSl9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cnkge3RoaXMuX19ydW4ocmVzLCAuLi50aGlzLl9fZmFpbHVyZSl9IGNhdGNoKGUpIHtjb25zb2xlLmxvZygncmVxdWVzdDpmYWlsdXJlJywgZSl9XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHt0aGlzLl9fcnVuKHVuZGVmaW5lZCwgLi4udGhpcy5fX2FmdGVyKX0gY2F0Y2goZSkge2NvbnNvbGUubG9nKCdyZXF1ZXN0OmFmdGVyJywgZSl9XG4gICAgICAgIHJldHVybiByZXNcbiAgICB9XG59XG4iLCJpbXBvcnQgY29va2llIGZyb20gJy4vY29va2llJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyUHJvZmlsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubG9hZEZyb21Db29raWUoKVxuICAgIH1cbiAgICBsb2FkRnJvbUNvb2tpZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gY29va2llLnJlYWQoJ3VzZXInKVxuICAgIH1cbiAgICBzYXZlVG9Db29raWUgPSAoKSA9PiB7XG4gICAgICAgIGNvb2tpZS52YWx1ZSgndXNlcicsIHRoaXMuZGF0YSlcbiAgICB9XG4gICAgbG9hZCA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmICghZGF0YSkgdGhpcy51bmxvYWQoKVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgICAgICAgdGhpcy5zYXZlVG9Db29raWUoKVxuICAgICAgICB9XG4gICAgfVxuICAgIHVubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29va2llLnJlbW92ZSgndXNlcicpXG4gICAgICAgIHRoaXMuZGF0YSA9IG51bGxcbiAgICB9XG4gICAgdXBkYXRlID0gKGZpZWxkLCB2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGFbZmllbGRdID0gdmFsdWVcbiAgICAgICAgdGhpcy5zYXZlVG9Db29raWUoKVxuICAgIH1cbiAgICBnZXQgaXNMb2dnZWQoKSB7cmV0dXJuIHRoaXMuZGF0YSA/IHRydWUgOiBmYWxzZX1cbiAgICBnZXQgZW1haWwoKSB7cmV0dXJuIHRoaXMuZGF0YS5lbWFpbH1cbiAgICBzZXQgZW1haWwodikge3RoaXMudXBkYXRlKCdlbWFpbCcsIHYpfVxuICAgIGdldCBmaXJzdE5hbWUoKSB7cmV0dXJuIHRoaXMuZGF0YS5maXJzdE5hbWV9XG4gICAgc2V0IGZpcnN0TmFtZSh2KSB7dGhpcy51cGRhdGUoJ2ZpcnN0TmFtZScsIHYpfVxuICAgIGdldCBsYXN0TmFtZSgpIHtyZXR1cm4gdGhpcy5kYXRhLmxhc3ROYW1lfVxuICAgIHNldCBsYXN0TmFtZSh2KSB7dGhpcy51cGRhdGUoJ2xhc3ROYW1lJywgdil9XG4gICAgZ2V0IGRpc3BsYXlOYW1lKCkge3JldHVybiB0aGlzLmRhdGEuZGlzcGxheU5hbWV9XG4gICAgc2V0IGRpc3BsYXlOYW1lKHYpIHt0aGlzLnNhdmUoJ2Rpc3BsYXlOYW1lJywgdil9XG4gICAgZ2V0IG9jY3VwYXRpb24oKSB7cmV0dXJuIHRoaXMuZGF0YS5vY2N1cGF0aW9ufVxuICAgIHNldCBvY2N1cGF0aW9uKHYpIHt0aGlzLnNhdmUoJ29jY3VwYXRpb24nLCB2KX1cbiAgICBnZXQgZGVwYXJ0bWVudCgpIHtyZXR1cm4gdGhpcy5kYXRhLmRlcGFydG1lbnR9XG4gICAgc2V0IGRlcGFydG1lbnQodikge3RoaXMuc2F2ZSgnZGVwYXJ0bWVudCcsIHYpfVxuICAgIGdldCBsYXN0TG9naW4oKSB7cmV0dXJuIHRoaXMuZGF0YS5sYXN0TG9naW59XG4gICAgc2V0IGxhc3RMb2dpbih2KSB7dGhpcy5zYXZlKCdsYXN0TG9naW4nLCB2KX1cbn1cbiIsImltcG9ydCBjb29raWUgZnJvbSAncmVhY3QtY29va2llJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuXG5jbGFzcyBDb29raWUge1xuICAgIHZhbHVlID0gKG5hbWUsIHZhbHVlLCBvcHRzKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29va2llLmxvYWQobmFtZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29va2llLnJlbW92ZShuYW1lLCBhc3NpZ24oeyBwYXRoOiAnLycgfSwgb3B0cykpXG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY29va2llX2RlbGV0ZWQnLCB7ZGV0YWlsOiB7bmFtZX19KSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvb2tpZS5zYXZlKG5hbWUsIHZhbHVlLCBhc3NpZ24oeyBwYXRoOiAnLycgfSwgb3B0cykpXG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY29va2llX3VwZGF0ZWQnLCB7ZGV0YWlsOiB7bmFtZSwgdmFsdWV9fSkpXG4gICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZSA9IChuYW1lLCBvcHRzKSA9PiB0aGlzLnZhbHVlKG5hbWUsIG51bGwsIG9wdHMpXG4gICAgcmVhZCA9IChuYW1lKSA9PiB0aGlzLnZhbHVlKG5hbWUpXG59XG5leHBvcnQgZGVmYXVsdCBuZXcgQ29va2llKClcbiIsImV4cG9ydHMuY29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vQ29uZmlnJykuV0lORE9XLmNvbmZpZ3VyYXRpb25cbmV4cG9ydHMuY29va2llID0gcmVxdWlyZSgnLi9jb29raWUnKS5kZWZhdWx0XG5leHBvcnRzLlJFUVVFU1QgPSByZXF1aXJlKCcuL1JlcXVlc3QnKS5kZWZhdWx0XG5leHBvcnRzLlVzZXJQcm9maWxlID0gcmVxdWlyZSgnLi9Vc2VyUHJvZmlsZScpLmRlZmF1bHRcbmV4cG9ydHMudXNlciA9IHJlcXVpcmUoJy4vdXNlcicpLmRlZmF1bHRcbmV4cG9ydHMudXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpLmRlZmF1bHRcbmV4cG9ydHMuRGV2VG9vbHMgPSByZXF1aXJlKCcuL0RldlRvb2xzJykuZGVmYXVsdFxuIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWwnXG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9hY3Rpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihrbGFzcykge1xuICAgICAgICB0aGlzLl9fa2xhc3MgPSBrbGFzc1xuICAgICAgICB0aGlzLmdldERlZmF1bHRQcm9wcyA9IHRoaXMuZ2V0RGVmYXVsdFByb3BzLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5nZXRBY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zLmJpbmQodGhpcylcbiAgICB9XG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge3JldHVybiB7fX1cbiAgICBnZXRBY3Rpb25zKGRpc3BhdGNoLCBvd25Qcm9wcywgLi4uYXJncykge3JldHVybiB7fX1cbiAgICByZWdpc3RlckFjdGlvbnMoZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnMoZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKVxuICAgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5tYXAoayA9PiBBY3Rpb24ucHV0KGFjdGlvbnNba10sIGRpc3BhdGNoLCBvd25Qcm9wcywgLi4uYXJncykpXG4gICAgfVxuICAgIGdldCB1dGlsKCkge3JldHVybiB1dGlsfVxuICAgIGdldCBtYXBTdGF0ZVRvUHJvcHMoKSB7cmV0dXJuIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB0aGlzLnV0aWwuYXNzaWduKHt9LCB0aGlzLmdldERlZmF1bHRQcm9wcylcbiAgICAgICAgaWYgKHN0YXRlKSBPYmplY3Qua2V5cyhzdGF0ZSkubWFwKGsgPT4gdGhpcy51dGlsLmFzc2lnbihuZXdQcm9wcywgc3RhdGVba10pKVxuICAgICAgICByZXR1cm4gbmV3UHJvcHNcbiAgICB9fVxuICAgIGdldCBtYXBEaXNwYXRjaFRvUHJvcHMoKSB7cmV0dXJuIChkaXNwYXRjaCwgb3duUHJvcHMsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckFjdGlvbnMoZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKVxuICAgICAgICByZXR1cm4gQWN0aW9uLmFjdGlvbnMoKVxuICAgIH19XG4gICAgZ2V0IGtsYXNzKCkge1xuICAgICAgICByZXR1cm4gY29ubmVjdCh0aGlzLm1hcFN0YXRlVG9Qcm9wcywgdGhpcy51dGlsLmFzc2lnbih0aGlzLm1hcERpc3BhdGNoVG9Qcm9wcywge1xuICAgICAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uKGRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKC4uLmFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSh0aGlzLl9fa2xhc3MpXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVN0b3JlKHJlZHVjZXIpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgICAgICAgICAgY29tYmluZVJlZHVjZXJzKHJlZHVjZXIpLFxuICAgICAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKVxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQgbWlkZGxld2FyZXMsIHtydW5TYWdhfSBmcm9tICcuL21pZGRsZXdhcmVzJ1xuaW1wb3J0IHt1dGlsfSBmcm9tICcuLidcblxubGV0IHN0b3JlID0gbnVsbFxuZXhwb3J0IGNvbnN0IGdldFN0b3JlID0gKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUpID0+IHtcbiAgICBpZiAodXRpbC5pc0VtcHR5KHN0b3JlKSAmJiByZWR1Y2Vycykge1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm1lcnMgPSB7fVxuICAgICAgICBpZiAodHlwZW9mIHJlZHVjZXJzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSBuZXcgcmVkdWNlcnMoKVxuICAgICAgICAgICAgdHJhbnNmb3JtZXJzW3JlZHVjZXJzLm5hbWVdID0gcmVkdWNlci50cmFuc2Zvcm0uYmluZChyZWR1Y2VyKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yKHZhciBqIGluIHJlZHVjZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1tqXSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSBuZXcgcmVkdWNlcnNbal0oKVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lcnNbcmVkdWNlcnNbal0ubmFtZV0gPSByZWR1Y2VyLnRyYW5zZm9ybS5iaW5kKHJlZHVjZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICAgICAgICBjb21iaW5lUmVkdWNlcnModHJhbnNmb3JtZXJzKSxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgICAgICAgIG1pZGRsZXdhcmVzXG4gICAgICAgIClcbiAgICAgICAgc3RvcmUucnVuU2FnYSA9IHJ1blNhZ2FcbiAgICAgICAgc3RvcmUuY2xvc2UgPSAoKSA9PiBzdG9yZS5kaXNwYXRjaChFTkQpXG4gICAgfVxuICAgIHJldHVybiBzdG9yZVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxuIiwiaW1wb3J0IHt1dGlsLCBjb25maWd1cmF0aW9ufSBmcm9tICcuLi8uLidcbmltcG9ydCB7Z2V0U3RvcmV9IGZyb20gJy4uL1N0b3JlJ1xuXG5sZXQgX19kaXNwYXRjaGVyID0gbnVsbFxuY29uc3QgX19hY3Rpb25zID0ge31cblxuZnVuY3Rpb24gbm9ybWFsaXplKG5hbWUsIHBheWxvYWQsIC4uLmFyZ3MpIHtcbiAgICBpZiAoIXBheWxvYWQgfHwgIXBheWxvYWQuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSlcbiAgICAgICAgcGF5bG9hZCA9IHV0aWwuYXNzaWduKHt9LCB7ZGF0YTogcGF5bG9hZH0pXG4gICAgcmV0dXJuIHV0aWwuYXNzaWduKHtleHRyYTogYXJnc30sIHBheWxvYWQsIHt0eXBlOiBuYW1lfSlcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNlYXJjaChuYW1lLCByZXN1bHRzLCAuLi5hcmdzKSB7cmV0dXJuIHtzZWFyY2g6IHJlc3VsdHMsIHR5cGU6IG5hbWV9fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24ge1xuICAgIGRpc3BhdGNoYWJsZSA9IHRydWVcbiAgICBkZWJ1ZyA9IGZhbHNlXG4gICAgZ2V0IG5hbWUoKSB7cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZX1cbiAgICBnZXQgY29uZmlndXJhdGlvbigpIHtyZXR1cm4gY29uZmlndXJhdGlvbn1cbiAgICBnZXQgdXRpbCgpIHtyZXR1cm4gdXRpbH1cbiAgICBnZXQgc3RvcmUoKSB7cmV0dXJuIGdldFN0b3JlKCl9XG4gICAgZ2V0IHN0YXRlKCkge3JldHVybiB0aGlzLmdldFN0YXRlKHRoaXMubmFtZSl9XG4gICAgZ2V0IGRpc3BhdGNoZXIoKSB7cmV0dXJuIF9fZGlzcGF0Y2hlcn1cbiAgICBnZXQgZm4oKSB7cmV0dXJuIHRoaXMuX19mbn1cblxuICAgIHByZVByb2Nlc3MocGF5bG9hZCwgLi4uYXJncykge31cbiAgICBiZWZvcmVEaXNwYXRjaChwYXlsb2FkLCAuLi5hcmdzKSB7fVxuICAgIG5vcm1hbGl6ZShwYXlsb2FkLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmICghcGF5bG9hZCB8fCAhcGF5bG9hZC5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpKVxuICAgICAgICAgICAgcGF5bG9hZCA9IHRoaXMudXRpbC5hc3NpZ24oe30sIHtkYXRhOiBwYXlsb2FkfSlcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZSh0aGlzLm5hbWUsIHBheWxvYWQsIC4uLmFyZ3MpXG4gICAgfVxuICAgIG5vcm1hbGl6ZVNlYXJjaChyZXN1bHRzKSB7cmV0dXJuIG5vcm1hbGl6ZVNlYXJjaCh0aGlzLm5hbWUsIC4uLmFyZ3VtZW50cyl9XG4gICAgZ2V0U3RhdGUobmFtZSkge3JldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKClbYCR7bmFtZX1SZWR1Y2VyYF19XG4gICAgZ2V0U3RhdGVzKCkge1xuICAgICAgY29uc3Qgc3RhdGVzID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpXG4gICAgICBjb25zdCBuZXdTdGF0ZXMgPSB7fVxuICAgICAgT2JqZWN0LmtleXMoc3RhdGVzKS5tYXAoayA9PiB0aGlzLnV0aWwuYXNzaWduKG5ld1N0YXRlcywgc3RhdGVzW2tdKSlcbiAgICAgIHJldHVybiBuZXdTdGF0ZXNcbiAgICB9XG4gICAgZGVidWdGbihwYXlsb2FkLCAuLi5hcmdzKSB7fVxuICAgIGRpc3BhdGNoKHBheWxvYWQsIC4uLmFyZ3MpIHt0aGlzLmRpc3BhdGNoZXIocGF5bG9hZCwgLi4uYXJncyl9XG4gICAgZ2V0Rm4oZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpc1xuICAgICAgICBpZiAoIV9fZGlzcGF0Y2hlcikgX19kaXNwYXRjaGVyID0gZGlzcGF0Y2hcbiAgICAgICAgaWYgKCF0aGlzLl9fZm4pIHRoaXMuX19mbiA9IChmdW5jdGlvbihwYXlsb2FkLCAuLi5hcmd1cykge1xuICAgICAgICAgICAgbWUucHJlUHJvY2VzcyhwYXlsb2FkLCAuLi5hcmd1cylcbiAgICAgICAgICAgIGlmIChtZS5iZWZvcmVEaXNwYXRjaChwYXlsb2FkLCAuLi5hcmd1cykgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lLmRpc3BhdGNoYWJsZSkgbWUuZGlzcGF0Y2gobWUubm9ybWFsaXplKHBheWxvYWQsIC4uLmFyZ3VzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZS5kZWJ1ZykgbWUuZGVidWdGbihwYXlsb2FkLCAuLi5hcmd1cylcbiAgICAgICAgfSkuYmluZCh0aGlzKVxuICAgICAgICByZXR1cm4gdGhpcy5fX2ZuXG4gICAgfVxuICAgIHN0YXRpYyBhY3Rpb25zKCkge1xuICAgICAgICBjb25zdCBycyA9IHt9XG4gICAgICAgIE9iamVjdC5rZXlzKF9fYWN0aW9ucykubWFwKGsgPT4gcnNba10gPSBfX2FjdGlvbnNba10uZm4pXG4gICAgICAgIHJldHVybiByc1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0TmFtZShrbGFzcykge2lmIChrbGFzcykgcmV0dXJuIHR5cGVvZiBrbGFzcyA9PSAnc3RyaW5nJyA/IGtsYXNzIDoga2xhc3MubmFtZX1cbiAgICBzdGF0aWMgZXhlY3V0ZShrbGFzcywgcGF5bG9hZCwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBuYW1lID0gQWN0aW9uLmdldE5hbWUoa2xhc3MpXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IEFjdGlvbi5mbihuYW1lKVxuICAgICAgICBpZiAoYWN0aW9uKSBhY3Rpb24ocGF5bG9hZCwgLi4uYXJncylcbiAgICAgICAgZWxzZSBpZihfX2Rpc3BhdGNoZXIpIHtcbiAgICAgICAgICBfX2Rpc3BhdGNoZXIobm9ybWFsaXplKGAke25hbWV9UmVkdWNlcmAsIHBheWxvYWQsIC4uLmFyZ3MpKVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBhY3Rpb24oa2xhc3MpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IEFjdGlvbi5nZXROYW1lKGtsYXNzKVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoX19hY3Rpb25zKS5pbmRleE9mKGBleGVjdXRlJHtuYW1lfWApID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiBfX2FjdGlvbnNbYGV4ZWN1dGUke25hbWV9YF1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBzdGF0aWMgZm4oa2xhc3MpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gQWN0aW9uLmFjdGlvbihrbGFzcylcbiAgICAgICAgaWYgKGFjdGlvbikgcmV0dXJuIGFjdGlvbi5mblxuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2Uoa2xhc3MpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gQWN0aW9uLmFjdGlvbihrbGFzcylcbiAgICAgICAgaWYgKGFjdGlvbikgcmV0dXJuIGFjdGlvbi5pbnN0YW5jZVxuICAgIH1cbiAgICBzdGF0aWMgcHV0KGtsYXNzLCBkaXNwYXRjaCwgb3duUHJvcHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCFfX2Rpc3BhdGNoZXIpIF9fZGlzcGF0Y2hlciA9IGRpc3BhdGNoXG4gICAgICAgIGNvbnN0IG5hbWUgPSBBY3Rpb24uZ2V0TmFtZShrbGFzcylcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBBY3Rpb24uYWN0aW9uKG5hbWUpXG4gICAgICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IGtsYXNzKClcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuaXNBcGlBY3Rpb24pIGluc3RhbmNlLnJ1blNhZ2EoKVxuICAgICAgICAgICAgICAgIF9fYWN0aW9uc1tgZXhlY3V0ZSR7bmFtZX1gXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgICAgICAgICBmbjogaW5zdGFuY2UuZ2V0Rm4oX19kaXNwYXRjaGVyLCBvd25Qcm9wcywgLi4uYXJncyksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtwdXQsIHRha2VMYXRlc3R9IGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHJlcXVlc3QgPSBudWxsXG4gICAgc3VjY2Vzc0FjdGlvbnMgPSBudWxsXG4gICAgZmFpbHVyZUFjdGlvbnMgPSBudWxsXG4gICAgZ2V0IGlzQXBpQWN0aW9uKCkge3JldHVybiB0cnVlfVxuICAgIGdldCBhcGlTdWNjZXNzU3RhdGUoKSB7cmV0dXJuIHRoaXMuZ2V0U3RhdGUoYEFwaVN1Y2Nlc3Mke3RoaXMubmFtZX1gKX1cblxuICAgIHByZVByb2Nlc3MocGF5bG9hZCwgLi4uYXJncykge1xuICAgICAgICB0aGlzLnJlcXVlc3QgPSB0aGlzLmxvYWRSZXF1ZXN0KHBheWxvYWQsIC4uLmFyZ3MpXG4gICAgICAgIHRoaXMuY2FjaGUgPSB0aGlzLmxvYWRDYWNoZShwYXlsb2FkLCAuLi5hcmdzKVxuICAgICAgICBsZXQgY2FsbGJhY2sgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB9XG4gICAgbG9hZFJlcXVlc3QocGF5bG9hZCwgLi4uYXJncykge3Rocm93IGAke3RoaXMubmFtZX06IE5vIGltcGxlbWVudGF0aW9uIG9mIGZ1bmN0aW9uIGxvYWRSZXF1ZXN0YH1cbiAgICBsb2FkQ2FjaGUocGF5bG9hZCwgLi4uYXJncykge3JldHVybiB1bmRlZmluZWR9XG4gICAgc2hvdWxkQ2FsbEFwaShwYXlsb2FkLCAuLi5hcmdzKSB7cmV0dXJuIHRydWV9XG4gICAgcnVuU2FnYSgpIHt0aGlzLnN0b3JlLnJ1blNhZ2EodGhpcy5zYWdhLCB0aGlzKX1cbiAgICBzYWdhID0gZnVuY3Rpb24qKG1lKSB7XG4gICAgICB5aWVsZCB0YWtlTGF0ZXN0KG1lLm5hbWUsIGZ1bmN0aW9uKihhY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCB7Y2FjaGUsIHJlcXVlc3QsIG5hbWUsIHN1Y2Nlc3NBY3Rpb25zLCBmYWlsdXJlQWN0aW9uc30gPSBtZVxuICAgICAgICAgIGZ1bmN0aW9uKiBzdWNjZXNzKHJlcywgcmVxdWVzdCkge1xuICAgICAgICAgICAgbGV0IGFjdGlvbnMgPSBbYEFwaVN1Y2Nlc3Mke25hbWV9YF0uY29uY2F0KHN1Y2Nlc3NBY3Rpb25zKVxuICAgICAgICAgICAgYWN0aW9ucy5tYXAoYWN0aW9uID0+IGFjdGlvbiA/IEFjdGlvbi5leGVjdXRlKGFjdGlvbiwgcmVzLCByZXF1ZXN0LnBheWxvYWQpIDogZmFsc2UpXG4gICAgICAgICAgICBpZiAobWUuY2FsbGJhY2spIG1lLmNhbGxiYWNrKHJlcywgcmVxdWVzdC5wYXlsb2FkKVxuICAgICAgICAgIH1cbiAgICAgICAgICBmdW5jdGlvbiogZmFpbHVyZShyZXMsIHJlcXVlc3QpIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb25zID0gW2BBcGlGYWlsdXJlJHtuYW1lfWBdLmNvbmNhdChmYWlsdXJlQWN0aW9ucylcbiAgICAgICAgICAgIGFjdGlvbnMubWFwKGFjdGlvbiA9PiBhY3Rpb24gPyBBY3Rpb24uZXhlY3V0ZShhY3Rpb24sIHJlcywgcmVxdWVzdC5wYXlsb2FkKSA6IGZhbHNlKVxuICAgICAgICAgICAgaWYgKG1lLmNhbGxiYWNrKSBtZS5jYWxsYmFjayhyZXMsIHJlcXVlc3QucGF5bG9hZClcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHJlcyA9IHlpZWxkIGNhY2hlID8gY2FjaGUgOiByZXF1ZXN0LnJ1bigpXG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPCAzMDApIHlpZWxkIHN1Y2Nlc3MocmVzLCByZXF1ZXN0KVxuICAgICAgICAgIGVsc2UgeWllbGQgZmFpbHVyZShyZXMsIHJlcXVlc3QpXG4gICAgICB9KVxuICAgIH1cbn1cbiIsImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3h5QWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBkaXNwYXRjaGFibGUgPSBmYWxzZVxuICAgIHByb3h5Q2xhc3NlcyA9IG51bGxcbiAgICBwcm94eU5vcm1hbGl6ZShzdGF0ZSwgcGF5bG9hZCwgLi4uYXJncykge3JldHVybiBwYXlsb2FkfVxuICAgIGJlZm9yZURpc3BhdGNoKHBheWxvYWQsIC4uLmFyZ3MpIHtcbiAgICAgICAgW10uY29uY2F0KHRoaXMucHJveHlDbGFzc2VzKS5tYXAoXG4gICAgICAgICAgICBrbGFzcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBBY3Rpb24uZ2V0TmFtZShrbGFzcylcbiAgICAgICAgICAgICAgICBBY3Rpb24uZXhlY3V0ZShuYW1lLCB0aGlzLnByb3h5Tm9ybWFsaXplKHRoaXMuZ2V0U3RhdGUobmFtZSksIHBheWxvYWQsIC4uLmFyZ3MpLCAuLi5hcmdzKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFByb3h5QWN0aW9uIGZyb20gJy4vUHJveHlBY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEFjdGlvbiBleHRlbmRzIFByb3h5QWN0aW9uIHtcbiAgICBwcm94eU5vcm1hbGl6ZShzdGF0ZSwgcGF5bG9hZCwgLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hGbihzdGF0ZSwgcGF5bG9hZCwgLi4uYXJncylcbiAgICB9XG4gICAgc2VhcmNoRm4oc3RhdGUsIHBheWxvYWQsIC4uLmFyZ3MpIHtyZXR1cm4gc3RhdGV9XG59XG4iLCJleHBvcnRzLkFjdGlvbiA9IHJlcXVpcmUoJy4vQWN0aW9uJykuZGVmYXVsdFxuZXhwb3J0cy5BcGlBY3Rpb24gPSByZXF1aXJlKCcuL0FwaUFjdGlvbicpLmRlZmF1bHRcbmV4cG9ydHMuUHJveHlBY3Rpb24gPSByZXF1aXJlKCcuL1Byb3h5QWN0aW9uJykuZGVmYXVsdFxuZXhwb3J0cy5TZWFyY2hBY3Rpb24gPSByZXF1aXJlKCcuL1NlYXJjaEFjdGlvbicpLmRlZmF1bHRcbiIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0ICogYXMgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2VycydcbmV4cG9ydHMuQWN0aW9uID0gYWN0aW9ucy5BY3Rpb25cbmV4cG9ydHMuQXBpQWN0aW9uID0gYWN0aW9ucy5BcGlBY3Rpb25cbmV4cG9ydHMuUHJveHlBY3Rpb24gPSBhY3Rpb25zLlByb3h5QWN0aW9uXG5leHBvcnRzLlNlYXJjaEFjdGlvbiA9IGFjdGlvbnMuU2VhcmNoQWN0aW9uXG5leHBvcnRzLkNvbm5lY3QgPSByZXF1aXJlKCcuL0Nvbm5lY3QnKS5kZWZhdWx0XG5leHBvcnRzLlJlZHVjZXIgPSByZWR1Y2Vycy5SZWR1Y2VyXG5leHBvcnRzLkNvbmZpZ1JlZHVjZXIgPSByZWR1Y2Vycy5Db25maWdSZWR1Y2VyXG5leHBvcnRzLkNvb2tpZVJlZHVjZXIgPSByZWR1Y2Vycy5Db29raWVSZWR1Y2VyXG5leHBvcnRzLkZhbHNlUmVkdWNlciA9IHJlZHVjZXJzLkZhbHNlUmVkdWNlclxuZXhwb3J0cy5UcnVlUmVkdWNlciA9IHJlZHVjZXJzLlRydWVSZWR1Y2VyXG5leHBvcnRzLk51bGxSZWR1Y2VyID0gcmVkdWNlcnMuTnVsbFJlZHVjZXJcbmV4cG9ydHMuTGlzdFJlZHVjZXIgPSByZWR1Y2Vycy5MaXN0UmVkdWNlclxuZXhwb3J0cy5nZXRTdG9yZSA9IHJlcXVpcmUoJy4vU3RvcmUnKS5nZXRTdG9yZVxuIiwiaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNvbXBvc2V9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IF90aHVuayBmcm9tICcuL3RodW5rJ1xuaW1wb3J0IF9zYWdhIGZyb20gJy4vc2FnYSdcbmltcG9ydCBfbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJ1xuXG5pbXBvcnQge2NvbmZpZ3VyYXRpb24sIERldlRvb2xzfSBmcm9tICcuLi8uLidcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJhdGlvbi5pc0RlYnVnKCkgPyBjb21wb3NlKFxuICAgIGFwcGx5TWlkZGxld2FyZShcbiAgICAgICAgX3NhZ2EsXG4gICAgICAgIF90aHVuayxcbiAgICAgICAgLy8gX2xvZ2dlclxuICAgICksXG4gICAgRGV2VG9vbHMuaW5zdHJ1bWVudCgpXG4pIDogYXBwbHlNaWRkbGV3YXJlKFxuICAgIF9zYWdhLFxuICAgIF90aHVua1xuKVxuXG5leHBvcnQgY29uc3QgcnVuU2FnYSA9IF9zYWdhLnJ1blxuIiwiaW1wb3J0IHtjcmVhdGVMb2dnZXJ9IGZyb20gJ3JlZHV4LWxvZ2dlcidcblxuY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKClcbmV4cG9ydCBkZWZhdWx0IGxvZ2dlclxuIiwiaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXG5cbmNvbnN0IHNhZ2EgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXG5leHBvcnQgZGVmYXVsdCBzYWdhXG4iLCJpbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5cbmNvbnN0IF90aHVuayA9IHRodW5rXG5leHBvcnQgZGVmYXVsdCBfdGh1bmtcbiIsImltcG9ydCBSZWR1Y2VyIGZyb20gJy4vUmVkdWNlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnUmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbi51aVt0aGlzLmZpZWxkTmFtZV19XG4gICAgbm9ybWFsaXplKGFjdGlvbikge3JldHVybiBhY3Rpb24uZGF0YSA/IGFjdGlvbi5kYXRhIDogdGhpcy5jb25maWd1cmF0aW9uLnVpW3RoaXMuZmllbGROYW1lXX1cbn1cbiIsImltcG9ydCBSZWR1Y2VyIGZyb20gJy4vUmVkdWNlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llUmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7cmV0dXJuIHRoaXMudXRpbC5jb29raWUucmVhZCh0aGlzLmZpZWxkTmFtZSl9XG4gICAgZ2V0IHZhbHVlKCkge3JldHVybiB0aGlzLl9fdmFsdWV9XG4gICAgc2V0IHZhbHVlKHYpIHtcbiAgICAgIHRoaXMuX192YWx1ZSA9IHZcbiAgICAgIHRoaXMuc2V0Q29va2llKClcbiAgICB9XG4gICAgc2V0Q29va2llKCkge1xuICAgICAgdGhpcy51dGlsLmNvb2tpZS52YWx1ZSh0aGlzLmZpZWxkTmFtZSwgdGhpcy5fX3ZhbHVlW3RoaXMuZmllbGROYW1lXSlcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVkdWNlciBmcm9tICcuL1JlZHVjZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhbHNlUmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7cmV0dXJuIGZhbHNlfVxufVxuIiwiaW1wb3J0IFJlZHVjZXIgZnJvbSAnLi9SZWR1Y2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0UmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGlzTGlzdCA9IHRydWVcbiAgICBwcmltYXJ5S2V5ID0gJ2lkJ1xuICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7cmV0dXJuIHt9fVxuICAgIGdldCB2YWx1ZSgpIHtyZXR1cm4gdGhpcy5fX3ZhbHVlfVxuICAgIHNldCB2YWx1ZSh2KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdlt0aGlzLmZpZWxkTmFtZV1cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHZhbHVlW3RoaXMucHJpbWFyeUtleV1cbiAgICAgICAgICAgIHRoaXMuc3RhdGVbdGhpcy5maWVsZE5hbWVdW2lkXSA9IHZhbHVlXG4gICAgICAgICAgICB0aGlzLl9fdmFsdWUgPSB0aGlzLnV0aWwuYXNzaWduKHt9LCB0aGlzLnN0YXRlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fX3ZhbHVlID0gdGhpcy5zdGF0ZVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlZHVjZXIgZnJvbSAnLi9SZWR1Y2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdWxsUmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7cmV0dXJuIG51bGx9XG4gICAgbm9ybWFsaXplKGFjdGlvbikge3JldHVybiBudWxsfVxufVxuIiwiaW1wb3J0IHt1dGlsLCBjb25maWd1cmF0aW9ufSBmcm9tICcuLi8uLidcbmltcG9ydCB7Z2V0U3RvcmV9IGZyb20gJy4uL1N0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWR1Y2VyIHtcbiAgICBkZWJ1ZyA9IGZhbHNlXG4gICAgZ2V0IG5hbWUoKSB7cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZX1cbiAgICBnZXQgY29uZmlndXJhdGlvbigpIHtyZXR1cm4gY29uZmlndXJhdGlvbn1cbiAgICBnZXQgdXRpbCgpIHtyZXR1cm4gdXRpbH1cbiAgICBnZXQgc3RvcmUoKSB7cmV0dXJuIGdldFN0b3JlKCl9XG4gICAgZ2V0IHN0YXRlKCkge3JldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKClbdGhpcy5uYW1lXX1cblxuICAgIGdldCBmaWVsZE5hbWUoKSB7dGhyb3cgYCR7dGhpcy5uYW1lfTogTm8gZmllbGROYW1lYH1cbiAgICBnZXQgZGVmYXVsdFN0YXRlKCkge3JldHVybiB7XG4gICAgICAgIFt0aGlzLmZpZWxkTmFtZV06IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgICAgICBbYFNlYXJjaCR7dGhpcy5maWVsZE5hbWV9UmVzdWx0c2BdOiBudWxsXG4gICAgfX1cbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiBudWxsfVxuICAgIHRyYW5zZm9ybShzdGF0ZSA9IHRoaXMuZGVmYXVsdFN0YXRlLCBhY3Rpb24sIC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGAke2FjdGlvbi50eXBlfWAgPT0gdGhpcy5uYW1lXG4gICAgICAgIHx8IGAke2FjdGlvbi50eXBlfVJlZHVjZXJgID09IHRoaXMubmFtZVxuICAgICAgICB8fCBgU2VhcmNoJHthY3Rpb24udHlwZX1SZWR1Y2VyYCA9PSBgU2VhcmNoJHt0aGlzLm5hbWV9YFxuICAgICAgICAgICAgPyB0aGlzLm1hdGNoZWRUcmFuc2Zvcm0oc3RhdGUsIGFjdGlvbiwgLi4uYXJncylcbiAgICAgICAgICAgIDogdGhpcy5ub3RNYXRjaGVkVHJhbnNmb3JtKHN0YXRlLCBhY3Rpb24sIC4uLmFyZ3MpXG4gICAgfVxuICAgIG5vcm1hbGl6ZShhY3Rpb24pIHtyZXR1cm4gYWN0aW9uLmRhdGF9XG4gICAgbm9ybWFsaXplU2VhcmNoKGFjdGlvbikge3JldHVybiBhY3Rpb24uc2VhcmNofVxuICAgIGRlYnVnRm4oc3RhdGUsIGFjdGlvbiwgLi4uYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcmV2LXN0YXRlJywgc3RhdGUpXG4gICAgICAgIGNvbnNvbGUubG9nKCduZXh0LXN0YXRlJywgdGhpcy52YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2coJ2FjdGlvbicsIGFjdGlvbilcbiAgICAgICAgY29uc29sZS5sb2coJ2V4dHJhJywgLi4uYXJncylcbiAgICB9XG4gICAgbWF0Y2hlZFRyYW5zZm9ybShzdGF0ZSwgYWN0aW9uLCAuLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uXG4gICAgICAgIGlmIChhY3Rpb24uaGFzT3duUHJvcGVydHkoJ2RhdGEnKSkgdGhpcy52YWx1ZSA9IHtbdGhpcy5maWVsZE5hbWVdOiB0aGlzLm5vcm1hbGl6ZShhY3Rpb24pfVxuICAgICAgICBlbHNlIGlmIChhY3Rpb24uaGFzT3duUHJvcGVydHkoJ3NlYXJjaCcpKSB0aGlzLnZhbHVlID0ge1tgU2VhcmNoJHt0aGlzLmZpZWxkTmFtZX1SZXN1bHRzYF06IHRoaXMubm9ybWFsaXplU2VhcmNoKGFjdGlvbil9XG4gICAgICAgIGlmICh0aGlzLmRlYnVnKSB0aGlzLmRlYnVnRm4oc3RhdGUsIGFjdGlvbiwgLi4uYXJncylcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFN0YXRlLCBzdGF0ZSwgdGhpcy52YWx1ZSlcbiAgICB9XG4gICAgbm90TWF0Y2hlZFRyYW5zZm9ybShzdGF0ZSwgYWN0aW9uLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWR1Y2VyIGZyb20gJy4vUmVkdWNlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1ZVJlZHVjZXIgZXh0ZW5kcyBSZWR1Y2VyIHtcbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiB0cnVlfVxufVxuIiwiZXhwb3J0cy5SZWR1Y2VyID0gcmVxdWlyZSgnLi9SZWR1Y2VyJykuZGVmYXVsdFxuZXhwb3J0cy5Db25maWdSZWR1Y2VyID0gcmVxdWlyZSgnLi9Db25maWdSZWR1Y2VyJykuZGVmYXVsdFxuZXhwb3J0cy5Db29raWVSZWR1Y2VyID0gcmVxdWlyZSgnLi9Db29raWVSZWR1Y2VyJykuZGVmYXVsdFxuZXhwb3J0cy5GYWxzZVJlZHVjZXIgPSByZXF1aXJlKCcuL0ZhbHNlUmVkdWNlcicpLmRlZmF1bHRcbmV4cG9ydHMuVHJ1ZVJlZHVjZXIgPSByZXF1aXJlKCcuL1RydWVSZWR1Y2VyJykuZGVmYXVsdFxuZXhwb3J0cy5OdWxsUmVkdWNlciA9IHJlcXVpcmUoJy4vTnVsbFJlZHVjZXInKS5kZWZhdWx0XG5leHBvcnRzLkxpc3RSZWR1Y2VyID0gcmVxdWlyZSgnLi9MaXN0UmVkdWNlcicpLmRlZmF1bHRcbiIsImltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuL1VzZXJQcm9maWxlJ1xuXG5jb25zdCB1c2VyID0gbmV3IFVzZXJQcm9maWxlKClcbmV4cG9ydCBkZWZhdWx0IHVzZXJcbiIsImltcG9ydCB7YnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBsb2Rhc2ggZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgZm9ybWF0IGZyb20gJ3N0cmluZy1mb3JtYXQnXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJ1xuaW1wb3J0IFJFUVVFU1QgZnJvbSAnLi9SZXF1ZXN0J1xuaW1wb3J0IGNvb2tpZSBmcm9tICcuL2Nvb2tpZSdcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcblxuZm9ybWF0LmV4dGVuZChTdHJpbmcucHJvdG90eXBlKVxuXG5jbGFzcyBVdGlsIHtcbiAgICBnZXQgdXNlcigpIHtyZXR1cm4gdXNlcn1cbiAgICBnZXQgYXNzaWduKCkge3JldHVybiBhc3NpZ259XG4gICAgZ2V0IGZvcm1hdCgpIHtyZXR1cm4gZm9ybWF0fVxuICAgIGdldCB1dWlkKCkge3JldHVybiB1dWlkfVxuICAgIGdldCBsb2Rhc2goKSB7cmV0dXJuIGxvZGFzaH1cbiAgICBnZXQgaGlzdG9yeSgpIHtyZXR1cm4gYnJvd3Nlckhpc3Rvcnl9XG4gICAgZ2V0IGNvb2tpZSgpIHtyZXR1cm4gY29va2llfVxuXG4gICAgZ2V0IGhhc2goKSB7cmV0dXJuIHRoaXMuZXh0cmFjdFBhaXJzKChsb2NhdGlvbi5oYXNoID8gbG9jYXRpb24uaGFzaCA6ICcjJykuc2xpY2UoMSkpfVxuICAgIGdldCBxdWVyaWVzKCkge3JldHVybiB0aGlzLmV4dHJhY3RQYWlycygobG9jYXRpb24uc2VhcmNoID8gbG9jYXRpb24uc2VhcmNoIDogJz8nKS5zbGljZSgxKSl9XG4gICAgZXh0cmFjdFBhaXJzID0gKHN0cikgPT4ge1xuICAgICAgICBsZXQgcnMgPSB7fVxuICAgICAgICBsZXQgcGFpcnMgPSBzdHIuc3BsaXQoJyYnKVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFpciA9IHBhaXJzW2ldXG4gICAgICAgICAgICBpZiAocGFpci5pbmRleE9mKCc9JykgPiAwKSB7XG4gICAgICAgICAgICAgICAgcGFpciA9IHBhaXIuc3BsaXQoJz0nKVxuICAgICAgICAgICAgICAgIHJzW3BhaXJbMF1dID0gcGFpclsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSByc1twYWlyXSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnNcbiAgICB9XG4gICAgZ2V0UXVlcnlWYWx1ZSA9IG5hbWUgPT4ge1xuICAgICAgICB2YXIgdXJsID0gbG9jYXRpb24uaHJlZlxuICAgICAgICB2YXIgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpXG4gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoYFs/Jl0ke25hbWV9KD0oW14mI10qKXwmfCN8JClgKSxcbiAgICAgICAgICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybClcbiAgICAgICAgaWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbFxuICAgICAgICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJ1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpXG4gICAgfVxuICAgIGlzRW1wdHkgPSBvID0+IGxvZGFzaC5pc0VtcHR5KG8pXG4gICAgaXNOdW1iZXIgPSBvID0+IHR5cGVvZiBvID09ICdudW1iZXInIHx8IChvICYmIHBhcnNlRmxvYXQoby50b1N0cmluZygpLnJlcGxhY2UoLywvZywnJykpKVxuICAgIG51bWJlck9mID0gbyA9PiB0eXBlb2YgbyA9PSAnbnVtYmVyJyA/IG8gOiBvICYmIHBhcnNlRmxvYXQoby50b1N0cmluZygpLnJlcGxhY2UoLywvZywnJykpID8gcGFyc2VGbG9hdChvLnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCcnKSkgOiAwXG4gICAgdmFsdWVPZiA9IChvLCBkKSA9PiB0aGlzLmlzRW1wdHkobykgPyBkIDogb1xuICAgIGFtb3VudE9mID0gKG8pID0+IHRoaXMubnVtYmVyV2l0aENvbW1hcyhvKVxuICAgIGRhdGVPZiA9IG8gPT4gbW9tZW50KG8pLmZvcm1hdCgnTU1NTSBEbyBZWVlZJylcbiAgICByYW5kb20gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbiAgICBleGNsdWRlID0gKG9yaWdpbiwgZXhjbHVkZXMpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fVxuICAgICAgICBPYmplY3Qua2V5cyhvcmlnaW4pLm1hcChrID0+IHtcbiAgICAgICAgICAgIGlmIChvcmlnaW4uaGFzT3duUHJvcGVydHkoaykgJiYgZXhjbHVkZXMuaW5kZXhPZihrKSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lnbihwcm9wcywge1trXTogb3JpZ2luW2tdfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHByb3BzXG4gICAgfVxuICAgIGluY2x1ZGUgPSAob3JpZ2luLCBpbmNsdWRlcykgPT4ge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHt9XG4gICAgICAgIE9iamVjdC5rZXlzKG9yaWdpbikubWFwKGsgPT4ge1xuICAgICAgICAgICAgaWYgKG9yaWdpbi5oYXNPd25Qcm9wZXJ0eShrKSAmJiBpbmNsdWRlcy5pbmRleE9mKGspID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lnbihwcm9wcywge1trXTogb3JpZ2luW2tdfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHByb3BzXG4gICAgfVxuXG4gICAgcmVxdWVzdCA9ICh1cmwsIG1ldGhvZCwgZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFJFUVVFU1QodXJsLCBtZXRob2QpLmRhdGEoZGF0YSlcbiAgICB9XG4gICAgcXVlcnkgPSAodXJsLCBkYXRhKSA9PiB0aGlzLnJlcXVlc3QodXJsLCAnR0VUJywgZGF0YSlcbiAgICBwb3N0ID0gKHVybCwgZGF0YSkgPT4gdGhpcy5yZXF1ZXN0KHVybCwgJ1BPU1QnLCBkYXRhKVxuICAgIHVwZGF0ZSA9ICh1cmwsIGRhdGEpID0+IHRoaXMucmVxdWVzdCh1cmwsICdQVVQnLCBkYXRhKVxuICAgIHJlbW92ZSA9ICh1cmwsIGRhdGEpID0+IHRoaXMucmVxdWVzdCh1cmwsICdERUxFVEUnLCBkYXRhKVxuICAgIG9wdGlvbnMgPSAodXJsLCBkYXRhKSA9PiB0aGlzLnJlcXVlc3QodXJsLCAnT1BUSU9OUycsIGRhdGEpXG5cbiAgICBuZXdUYWIgPSBsaW5rID0+IHdpbmRvdy5vcGVuKGxpbmssICdfYmxhbmsnKVxuICAgIHJlZGlyZWN0ID0gbGluayA9PiB3aW5kb3cub3BlbihsaW5rKVxuICAgIGFkZEpzU2NyaXB0ID0gKHNyYywgaWQsIGlubmVySFRNTCkgPT4gdGhpcy5hcHBlbmRUYWcoJ3NjcmlwdCcsIHtzcmN9LCBpZCwgaW5uZXJIVE1MKVxuICAgIGFkZENzc0xpbmsgPSAoaHJlZiwgaWQpID0+IHRoaXMuYWRkTGluayhocmVmLCB7dHlwZTogJ3RleHQvY3NzJyxyZWw6ICdzdHlsZXNoZWV0Jyx9LCBpZClcbiAgICBhZGRMaW5rID0gKGhyZWYsIHByb3BzLCBpZCkgPT4gdGhpcy5hcHBlbmRUYWcoJ2xpbmsnLCB7aHJlZiwgLi4ucHJvcHN9LCBpZClcbiAgICBhZGRNZXRhID0gKG5hbWUsIGNvbnRlbnQsIGlkKSA9PiB0aGlzLmFwcGVuZFRhZygnbWV0YScsIHtuYW1lLCBjb250ZW50fSwgaWQpXG4gICAgYXBwZW5kVGFnID0gKHRhZ05hbWUsIHByb3BzLCBpZCwgaW5uZXJIVE1MKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT0gJ3VuZGVmaW5lZCcgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSByZXR1cm5cbiAgICAgICAgbGV0IHRhZ3MgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSxcbiAgICAgICAgICAgIGxhc3QgICAgPSB0YWdzW3RhZ3MubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICB0YWcgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxuICAgICAgICB0YWcuaWQgID0gaWRcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLm1hcCgoaykgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzW2tdKSB0YWdba10gPSBwcm9wc1trXVxuICAgICAgICB9KVxuICAgICAgICBpZiAoaW5uZXJIVE1MKSB0cnkge3RhZy5pbm5lckhUTUwgPSBpbm5lckhUTUx9IGNhdGNoKGUpIHt9XG4gICAgICAgIGxhc3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFnLCBsYXN0Lm5leHRTaWJsaW5nKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBVdGlsKClcbiJdfQ==
