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
    "apppath": "/",
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
            return (location.pathname == node.url ? 'active' : '') + ' level' + _this.level + ' ' + (node.children && node.children.length > 0 ? 'has-children' : '');
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
                        _react2.default.createElement(Menu, { menus: item.children,
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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Viewport.__proto__ || (0, _getPrototypeOf2.default)(Viewport)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'container viewport', _this.children = function () {
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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'container footer', _this.render = function () {
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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.componentClassName = 'container header', _this.onRouteEntered = function (route, replace) {
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
                if (location.pathname == node.url) return value = node.children && node.children.length ? _this2.getTitle(node.children, value) : node.title;
                if (location.pathname.indexOf(node.url) >= 0) return value = node.children && node.children.length ? _this2.getTitle(node.children, value) : node.title;
                return node.children && node.children.length ? _this2.getAppName(node.children, value) : value;
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

var _reactRouter = require('react-router');

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
                'a',
                { className: 'wrapper', href: '/' },
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

},{"../../redux":201,"../Style":183,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/possibleConstructorReturn":17,"react":"react","react-router":"react-router"}],194:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29va2llL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2VsZW1lbnQtY2xhc3MvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsIm5vZGVfbW9kdWxlcy9odHRwLXJlc3BvbnNlLW9iamVjdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pcy1ub2RlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIm5vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwibm9kZV9tb2R1bGVzL3FzL2xpYi9mb3JtYXRzLmpzIiwibm9kZV9tb2R1bGVzL3FzL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9xcy9saWIvcGFyc2UuanMiLCJub2RlX21vZHVsZXMvcXMvbGliL3N0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy9xcy9saWIvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtY29va2llL2J1aWxkL2Nvb2tpZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1kcm9wem9uZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsUG9ydGFsLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2FyaWFBcHBIaWRlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9mb2N1c01hbmFnZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvc2NvcGVUYWIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvdGFiYmFibGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwibm9kZV9tb2R1bGVzL3N5bmMtcmVxdWVzdC9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3RoZW4tcmVxdWVzdC9saWIvaGFuZGxlLXFzLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJzcmMvYXBwcy9hc2QvQXBwbGljYXRpb24uanMiLCJzcmMvYXBwcy9hc2QvVmlld3BvcnQuanMiLCJzcmMvYXBwcy9hc2QvY29uZi9pbmRleC5qcyIsInNyYy9hcHBzL2FzZC9jb25maWcvYmFzZS5qcyIsInNyYy9hcHBzL2FzZC9jb25maWcvaW5kZXguanMiLCJzcmMvYXBwcy9hc2QvY29uZmlnL21vY2suanMiLCJzcmMvYXBwcy9hc2QvY29uZmlnL3VpLmpzIiwic3JjL2FwcHMvYXNkL2V2ZW50cy5qcyIsInNyYy9hcHBzL2FzZC9pbmRleC5qcyIsInNyYy9hcHBzL2FzZC9wYWdlcy9MYW5kaW5nUGFnZS5qcyIsInNyYy9hcHBzL2FzZC9wYWdlcy9QYWdlLmpzIiwic3JjL2FwcHMvYXNkL3BhZ2VzL1N1YlBhZ2UuanMiLCJzcmMvYXBwcy9hc2QvcGFnZXMvaW5kZXguanMiLCJzcmMvYXBwcy9hc2QvcmVkdXgvQWN0aW9uLmpzIiwic3JjL2FwcHMvYXNkL3JlZHV4L0Nvbm5lY3QuanMiLCJzcmMvYXBwcy9hc2QvcmVkdXgvUmVkdWNlci5qcyIsInNyYy9hcHBzL2FzZC9yZWR1eC9pbmRleC5qcyIsInNyYy9hcHBzL2FzZC9yb3V0ZXMuanMiLCJzcmMvY29tbW9uL2FwcGxpY2F0aW9ucy9BcHBsaWNhdGlvbi5qcyIsInNyYy9jb21tb24vYXBwbGljYXRpb25zL0Zvb3RlckFwcGxpY2F0aW9uLmpzIiwic3JjL2NvbW1vbi9hcHBsaWNhdGlvbnMvSGVhZGVyQXBwbGljYXRpb24uanMiLCJzcmMvY29tbW9uL2FwcGxpY2F0aW9ucy9Sb3V0ZXNBcHBsaWNhdGlvbi5qcyIsInNyYy9jb21tb24vYXBwbGljYXRpb25zL2luZGV4LmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL0JyZWFkY3J1bWJzLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL0J1dHRvbi5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9DYXJkLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL0NvbXBvbmVudC5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9Ecm9wem9uZS5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9Mb2dpbi5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9NZW51LmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL01vZGFsLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL01vZGFsRGVmYXVsdC5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9QYWdlLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL1NlYXJjaEZpZWxkLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL1NlbGVjdEZpZWxkLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL1N0ZXBwZXIuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvU3R5bGUuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvVGFibGUuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvVGFicy5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9UZXh0RmllbGQuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvVmlld3BvcnQuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvaW5kZXguanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Gb290ZXIuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9IZWFkZXIuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9IZWxwLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL25hdmlnYXRpb24vTGlua3NIdWIuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Mb2dvQm94LmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL25hdmlnYXRpb24vTm90aWZpY2F0aW9uLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL25hdmlnYXRpb24vU2VhcmNoQm94LmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL25hdmlnYXRpb24vVXNlckJveC5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1ZlcnNpb24uanMiLCJzcmMvY29tbW9uL3JlZHV4L0FjdGlvbi5qcyIsInNyYy9jb21tb24vcmVkdXgvQ29ubmVjdC5qcyIsInNyYy9jb21tb24vcmVkdXgvUmVkdWNlci5qcyIsInNyYy9jb21tb24vcm91dGVzL2luZGV4LmpzIiwic3JjL2NvbW1vbi9yb3V0ZXMvb25Sb3V0ZUNoYW5nZWQuanMiLCJzcmMvY29tbW9uL3JvdXRlcy9vblJvdXRlRW50ZXJlZC5qcyIsInNyYy9jb3JlL0NvbmZpZy5qcyIsInNyYy9jb3JlL0RldlRvb2xzLmpzIiwic3JjL2NvcmUvUmVxdWVzdC5qcyIsInNyYy9jb3JlL1VzZXJQcm9maWxlLmpzIiwic3JjL2NvcmUvY29va2llLmpzIiwic3JjL2NvcmUvaW5kZXguanMiLCJzcmMvY29yZS9yZWR1eC9Db25uZWN0LmpzIiwic3JjL2NvcmUvcmVkdXgvU3RvcmUuanMiLCJzcmMvY29yZS9yZWR1eC9hY3Rpb25zL0FjdGlvbi5qcyIsInNyYy9jb3JlL3JlZHV4L2FjdGlvbnMvQXBpQWN0aW9uLmpzIiwic3JjL2NvcmUvcmVkdXgvYWN0aW9ucy9Qcm94eUFjdGlvbi5qcyIsInNyYy9jb3JlL3JlZHV4L2FjdGlvbnMvU2VhcmNoQWN0aW9uLmpzIiwic3JjL2NvcmUvcmVkdXgvYWN0aW9ucy9pbmRleC5qcyIsInNyYy9jb3JlL3JlZHV4L2luZGV4LmpzIiwic3JjL2NvcmUvcmVkdXgvbWlkZGxld2FyZXMvaW5kZXguanMiLCJzcmMvY29yZS9yZWR1eC9taWRkbGV3YXJlcy9sb2dnZXIuanMiLCJzcmMvY29yZS9yZWR1eC9taWRkbGV3YXJlcy9zYWdhLmpzIiwic3JjL2NvcmUvcmVkdXgvbWlkZGxld2FyZXMvdGh1bmsuanMiLCJzcmMvY29yZS9yZWR1eC9yZWR1Y2Vycy9Db25maWdSZWR1Y2VyLmpzIiwic3JjL2NvcmUvcmVkdXgvcmVkdWNlcnMvQ29va2llUmVkdWNlci5qcyIsInNyYy9jb3JlL3JlZHV4L3JlZHVjZXJzL0ZhbHNlUmVkdWNlci5qcyIsInNyYy9jb3JlL3JlZHV4L3JlZHVjZXJzL0xpc3RSZWR1Y2VyLmpzIiwic3JjL2NvcmUvcmVkdXgvcmVkdWNlcnMvTnVsbFJlZHVjZXIuanMiLCJzcmMvY29yZS9yZWR1eC9yZWR1Y2Vycy9SZWR1Y2VyLmpzIiwic3JjL2NvcmUvcmVkdXgvcmVkdWNlcnMvVHJ1ZVJlZHVjZXIuanMiLCJzcmMvY29yZS9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsInNyYy9jb3JlL3VzZXIuanMiLCJzcmMvY29yZS91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFPQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzlkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzUyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBOzs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ250QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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akMsRUFBc0MsS0FBdEMsQ0FBNEMsQ0FBNUMsQ0FBbEIsQ0FBUDtBQUF5RTs7OzRCQUN2RTtBQUFDLG1CQUFPLEtBQUssWUFBTCxDQUFrQixDQUFDLFNBQVMsTUFBVCxHQUFrQixTQUFTLE1BQTNCLEdBQW9DLEdBQXJDLEVBQTBDLEtBQTFDLENBQWdELENBQWhELENBQWxCLENBQVA7QUFBNkU7Ozs7O2tCQTZFakYsSUFBSSxJQUFKLEUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE93blByb3BlcnR5RGVzY3JpcHRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gKDAsIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyLmRlZmF1bHQpKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpe1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5czsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpOyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07IiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59OyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7IiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjsiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07IiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7IiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7IiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59OyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59OyIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpOyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7IiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pOyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pOyIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTsiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7IiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRrZXlzICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0fSk7IiwiIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTsiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTsiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qIVxuICogY29va2llXG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IFJvbWFuIFNodHlsbWFuXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmV4cG9ydHMuc2VyaWFsaXplID0gc2VyaWFsaXplO1xuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBkZWNvZGUgPSBkZWNvZGVVUklDb21wb25lbnQ7XG52YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xudmFyIHBhaXJTcGxpdFJlZ0V4cCA9IC87ICovO1xuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCBmaWVsZC1jb250ZW50IGluIFJGQyA3MjMwIHNlYyAzLjJcbiAqXG4gKiBmaWVsZC1jb250ZW50ID0gZmllbGQtdmNoYXIgWyAxKiggU1AgLyBIVEFCICkgZmllbGQtdmNoYXIgXVxuICogZmllbGQtdmNoYXIgICA9IFZDSEFSIC8gb2JzLXRleHRcbiAqIG9icy10ZXh0ICAgICAgPSAleDgwLUZGXG4gKi9cblxudmFyIGZpZWxkQ29udGVudFJlZ0V4cCA9IC9eW1xcdTAwMDlcXHUwMDIwLVxcdTAwN2VcXHUwMDgwLVxcdTAwZmZdKyQvO1xuXG4vKipcbiAqIFBhcnNlIGEgY29va2llIGhlYWRlci5cbiAqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gY29va2llIGhlYWRlciBzdHJpbmcgaW50byBhbiBvYmplY3RcbiAqIFRoZSBvYmplY3QgaGFzIHRoZSB2YXJpb3VzIGNvb2tpZXMgYXMga2V5cyhuYW1lcykgPT4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7b2JqZWN0fVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzdHIgbXVzdCBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgdmFyIG9iaiA9IHt9XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQocGFpclNwbGl0UmVnRXhwKTtcbiAgdmFyIGRlYyA9IG9wdC5kZWNvZGUgfHwgZGVjb2RlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgIHZhciBlcV9pZHggPSBwYWlyLmluZGV4T2YoJz0nKTtcblxuICAgIC8vIHNraXAgdGhpbmdzIHRoYXQgZG9uJ3QgbG9vayBsaWtlIGtleT12YWx1ZVxuICAgIGlmIChlcV9pZHggPCAwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIga2V5ID0gcGFpci5zdWJzdHIoMCwgZXFfaWR4KS50cmltKClcbiAgICB2YXIgdmFsID0gcGFpci5zdWJzdHIoKytlcV9pZHgsIHBhaXIubGVuZ3RoKS50cmltKCk7XG5cbiAgICAvLyBxdW90ZWQgdmFsdWVzXG4gICAgaWYgKCdcIicgPT0gdmFsWzBdKSB7XG4gICAgICB2YWwgPSB2YWwuc2xpY2UoMSwgLTEpO1xuICAgIH1cblxuICAgIC8vIG9ubHkgYXNzaWduIG9uY2VcbiAgICBpZiAodW5kZWZpbmVkID09IG9ialtrZXldKSB7XG4gICAgICBvYmpba2V5XSA9IHRyeURlY29kZSh2YWwsIGRlYyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgZGF0YSBpbnRvIGEgY29va2llIGhlYWRlci5cbiAqXG4gKiBTZXJpYWxpemUgdGhlIGEgbmFtZSB2YWx1ZSBwYWlyIGludG8gYSBjb29raWUgc3RyaW5nIHN1aXRhYmxlIGZvclxuICogaHR0cCBoZWFkZXJzLiBBbiBvcHRpb25hbCBvcHRpb25zIG9iamVjdCBzcGVjaWZpZWQgY29va2llIHBhcmFtZXRlcnMuXG4gKlxuICogc2VyaWFsaXplKCdmb28nLCAnYmFyJywgeyBodHRwT25seTogdHJ1ZSB9KVxuICogICA9PiBcImZvbz1iYXI7IGh0dHBPbmx5XCJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShuYW1lLCB2YWwsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBlbmMgPSBvcHQuZW5jb2RlIHx8IGVuY29kZTtcblxuICBpZiAodHlwZW9mIGVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBlbmNvZGUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChuYW1lKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IG5hbWUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFyIHZhbHVlID0gZW5jKHZhbCk7XG5cbiAgaWYgKHZhbHVlICYmICFmaWVsZENvbnRlbnRSZWdFeHAudGVzdCh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCB2YWwgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFyIHN0ciA9IG5hbWUgKyAnPScgKyB2YWx1ZTtcblxuICBpZiAobnVsbCAhPSBvcHQubWF4QWdlKSB7XG4gICAgdmFyIG1heEFnZSA9IG9wdC5tYXhBZ2UgLSAwO1xuICAgIGlmIChpc05hTihtYXhBZ2UpKSB0aHJvdyBuZXcgRXJyb3IoJ21heEFnZSBzaG91bGQgYmUgYSBOdW1iZXInKTtcbiAgICBzdHIgKz0gJzsgTWF4LUFnZT0nICsgTWF0aC5mbG9vcihtYXhBZ2UpO1xuICB9XG5cbiAgaWYgKG9wdC5kb21haW4pIHtcbiAgICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG9wdC5kb21haW4pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZG9tYWluIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgRG9tYWluPScgKyBvcHQuZG9tYWluO1xuICB9XG5cbiAgaWYgKG9wdC5wYXRoKSB7XG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQucGF0aCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBwYXRoIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgUGF0aD0nICsgb3B0LnBhdGg7XG4gIH1cblxuICBpZiAob3B0LmV4cGlyZXMpIHtcbiAgICBpZiAodHlwZW9mIG9wdC5leHBpcmVzLnRvVVRDU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZXhwaXJlcyBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IEV4cGlyZXM9JyArIG9wdC5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XG4gIH1cblxuICBpZiAob3B0Lmh0dHBPbmx5KSB7XG4gICAgc3RyICs9ICc7IEh0dHBPbmx5JztcbiAgfVxuXG4gIGlmIChvcHQuc2VjdXJlKSB7XG4gICAgc3RyICs9ICc7IFNlY3VyZSc7XG4gIH1cblxuICBpZiAob3B0LnNhbWVTaXRlKSB7XG4gICAgdmFyIHNhbWVTaXRlID0gdHlwZW9mIG9wdC5zYW1lU2l0ZSA9PT0gJ3N0cmluZydcbiAgICAgID8gb3B0LnNhbWVTaXRlLnRvTG93ZXJDYXNlKCkgOiBvcHQuc2FtZVNpdGU7XG5cbiAgICBzd2l0Y2ggKHNhbWVTaXRlKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1TdHJpY3QnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xheCc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1MYXgnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmljdCc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1TdHJpY3QnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBzYW1lU2l0ZSBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBUcnkgZGVjb2RpbmcgYSBzdHJpbmcgdXNpbmcgYSBkZWNvZGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkZWNvZGVcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHJ5RGVjb2RlKHN0ciwgZGVjb2RlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZShzdHIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRzKSB7XG4gIHJldHVybiBuZXcgRWxlbWVudENsYXNzKG9wdHMpXG59XG5cbmZ1bmN0aW9uIGluZGV4T2YoYXJyLCBwcm9wKSB7XG4gIGlmIChhcnIuaW5kZXhPZikgcmV0dXJuIGFyci5pbmRleE9mKHByb3ApXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspXG4gICAgaWYgKGFycltpXSA9PT0gcHJvcCkgcmV0dXJuIGlcbiAgcmV0dXJuIC0xXG59XG5cbmZ1bmN0aW9uIEVsZW1lbnRDbGFzcyhvcHRzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBFbGVtZW50Q2xhc3MpKSByZXR1cm4gbmV3IEVsZW1lbnRDbGFzcyhvcHRzKVxuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKCFvcHRzKSBvcHRzID0ge31cblxuICAvLyBzaW1pbGFyIGRvaW5nIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgYnV0IHdvcmtzIGluIElFOFxuICBpZiAob3B0cy5ub2RlVHlwZSkgb3B0cyA9IHtlbDogb3B0c31cblxuICB0aGlzLm9wdHMgPSBvcHRzXG4gIHRoaXMuZWwgPSBvcHRzLmVsIHx8IGRvY3VtZW50LmJvZHlcbiAgaWYgKHR5cGVvZiB0aGlzLmVsICE9PSAnb2JqZWN0JykgdGhpcy5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5lbClcbn1cblxuRWxlbWVudENsYXNzLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgdmFyIGVsID0gdGhpcy5lbFxuICBpZiAoIWVsKSByZXR1cm5cbiAgaWYgKGVsLmNsYXNzTmFtZSA9PT0gXCJcIikgcmV0dXJuIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVxuICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpXG4gIGlmIChpbmRleE9mKGNsYXNzZXMsIGNsYXNzTmFtZSkgPiAtMSkgcmV0dXJuIGNsYXNzZXNcbiAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSlcbiAgZWwuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJylcbiAgcmV0dXJuIGNsYXNzZXNcbn1cblxuRWxlbWVudENsYXNzLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgdmFyIGVsID0gdGhpcy5lbFxuICBpZiAoIWVsKSByZXR1cm5cbiAgaWYgKGVsLmNsYXNzTmFtZSA9PT0gXCJcIikgcmV0dXJuXG4gIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJylcbiAgdmFyIGlkeCA9IGluZGV4T2YoY2xhc3NlcywgY2xhc3NOYW1lKVxuICBpZiAoaWR4ID4gLTEpIGNsYXNzZXMuc3BsaWNlKGlkeCwgMSlcbiAgZWwuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJylcbiAgcmV0dXJuIGNsYXNzZXNcbn1cblxuRWxlbWVudENsYXNzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgdmFyIGVsID0gdGhpcy5lbFxuICBpZiAoIWVsKSByZXR1cm5cbiAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKVxuICByZXR1cm4gaW5kZXhPZihjbGFzc2VzLCBjbGFzc05hbWUpID4gLTFcbn1cblxuRWxlbWVudENsYXNzLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgdmFyIGVsID0gdGhpcy5lbFxuICBpZiAoIWVsKSByZXR1cm5cbiAgaWYgKHRoaXMuaGFzKGNsYXNzTmFtZSkpIHRoaXMucmVtb3ZlKGNsYXNzTmFtZSlcbiAgZWxzZSB0aGlzLmFkZChjbGFzc05hbWUpXG59XG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIEJhc2VkIG9uIGNvZGUgdGhhdCBpcyBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBjYW5Vc2VET00gPSAhIShcblx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdHdpbmRvdy5kb2N1bWVudCAmJlxuXHRcdHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG5cdCk7XG5cblx0dmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0ge1xuXG5cdFx0Y2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cblx0XHRjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuXHRcdGNhblVzZUV2ZW50TGlzdGVuZXJzOlxuXHRcdFx0Y2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cblx0XHRjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlblxuXG5cdH07XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuRXhlY3V0aW9uRW52aXJvbm1lbnQgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0fVxuXG59KCkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKFwibW9ja1wiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDsiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChcIm1vY2tcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgfTtcblxuICAgIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3BvbnNlO1xuXG4vKipcbiAqIEEgcmVzcG9uc2UgZnJvbSBhIHdlYiByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c0NvZGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJzXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYm9keVxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICovXG5mdW5jdGlvbiBSZXNwb25zZShzdGF0dXNDb2RlLCBoZWFkZXJzLCBib2R5LCB1cmwpIHtcbiAgaWYgKHR5cGVvZiBzdGF0dXNDb2RlICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3N0YXR1c0NvZGUgbXVzdCBiZSBhIG51bWJlciBidXQgd2FzICcgKyAodHlwZW9mIHN0YXR1c0NvZGUpKTtcbiAgfVxuICBpZiAoaGVhZGVycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2hlYWRlcnMgY2Fubm90IGJlIG51bGwnKTtcbiAgfVxuICBpZiAodHlwZW9mIGhlYWRlcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaGVhZGVycyBtdXN0IGJlIGFuIG9iamVjdCBidXQgd2FzICcgKyAodHlwZW9mIGhlYWRlcnMpKTtcbiAgfVxuICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICB0aGlzLmhlYWRlcnMgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIGhlYWRlcnMpIHtcbiAgICB0aGlzLmhlYWRlcnNba2V5LnRvTG93ZXJDYXNlKCldID0gaGVhZGVyc1trZXldO1xuICB9XG4gIHRoaXMuYm9keSA9IGJvZHk7XG4gIHRoaXMudXJsID0gdXJsO1xufVxuXG5SZXNwb25zZS5wcm90b3R5cGUuZ2V0Qm9keSA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBpZiAodGhpcy5zdGF0dXNDb2RlID49IDMwMCkge1xuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1NlcnZlciByZXNwb25kZWQgd2l0aCBzdGF0dXMgY29kZSAnXG4gICAgICAgICAgICAgICAgICAgICsgdGhpcy5zdGF0dXNDb2RlICsgJzpcXG4nICsgdGhpcy5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGVyci5zdGF0dXNDb2RlID0gdGhpcy5zdGF0dXNDb2RlO1xuICAgIGVyci5oZWFkZXJzID0gdGhpcy5oZWFkZXJzO1xuICAgIGVyci5ib2R5ID0gdGhpcy5ib2R5O1xuICAgIGVyci51cmwgPSB0aGlzLnVybDtcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgcmV0dXJuIGVuY29kaW5nID8gdGhpcy5ib2R5LnRvU3RyaW5nKGVuY29kaW5nKSA6IHRoaXMuYm9keTtcbn07XG4iLCIvLyBDb2Rpbmcgc3RhbmRhcmQgZm9yIHRoaXMgcHJvamVjdCBkZWZpbmVkIEAgaHR0cHM6Ly9naXRodWIuY29tL01hdHRoZXdTSC9zdGFuZGFyZHMvYmxvYi9tYXN0ZXIvSmF2YVNjcmlwdC5tZFxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSAhISh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy52ZXJzaW9ucyAmJiBwcm9jZXNzLnZlcnNpb25zLm5vZGUpO1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCksXG4gICAgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKiBEZXRlY3QgaWYgcHJvcGVydGllcyBzaGFkb3dpbmcgdGhvc2Ugb24gYE9iamVjdC5wcm90b3R5cGVgIGFyZSBub24tZW51bWVyYWJsZS4gKi9cbnZhciBub25FbnVtU2hhZG93cyA9ICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgJ3ZhbHVlT2YnOiAxIH0sICd2YWx1ZU9mJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICAvLyBTYWZhcmkgOSBtYWtlcyBgYXJndW1lbnRzLmxlbmd0aGAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgdmFyIHJlc3VsdCA9IChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpXG4gICAgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpXG4gICAgOiBbXTtcblxuICB2YXIgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCxcbiAgICAgIHNraXBJbmRleGVzID0gISFsZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSBhcnJheTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlID09PSB1bmRlZmluZWQgPyBzb3VyY2Vba2V5XSA6IG5ld1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmFzc2lnbmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiBiYXNlUmVzdChmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZDtcblxuICAgIGN1c3RvbWl6ZXIgPSAoYXNzaWduZXIubGVuZ3RoID4gMyAmJiB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKVxuICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQXNzaWducyBvd24gZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0cyB0byB0aGVcbiAqIGRlc3RpbmF0aW9uIG9iamVjdC4gU291cmNlIG9iamVjdHMgYXJlIGFwcGxpZWQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICogU3Vic2VxdWVudCBzb3VyY2VzIG92ZXJ3cml0ZSBwcm9wZXJ0eSBhc3NpZ25tZW50cyBvZiBwcmV2aW91cyBzb3VyY2VzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgIGFuZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYE9iamVjdC5hc3NpZ25gXShodHRwczovL21kbi5pby9PYmplY3QvYXNzaWduKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMTAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQHNlZSBfLmFzc2lnbkluXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBmdW5jdGlvbiBCYXIoKSB7XG4gKiAgIHRoaXMuYyA9IDM7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5iID0gMjtcbiAqIEJhci5wcm90b3R5cGUuZCA9IDQ7XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDAgfSwgbmV3IEZvbywgbmV3IEJhcik7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2MnOiAzIH1cbiAqL1xudmFyIGFzc2lnbiA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlKSB7XG4gIGlmIChub25FbnVtU2hhZG93cyB8fCBpc1Byb3RvdHlwZShzb3VyY2UpIHx8IGlzQXJyYXlMaWtlKHNvdXJjZSkpIHtcbiAgICBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH1cbiAgfVxufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbiAgdmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaW52YXJpYW50KHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSA9PT0gJ2Z1bmN0aW9uJywgJyVzOiAlcyB0eXBlIGAlc2AgaXMgaW52YWxpZDsgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gJyArICdSZWFjdC5Qcm9wVHlwZXMuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lKTtcbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgd2FybmluZyghZXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciwgJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yKTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHdhcm5pbmcoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIGZ1bmN0aW9uIHNoaW0oKSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlclxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIGludmFyaWFudChcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG4gICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG52YXIgcGVyY2VudFR3ZW50aWVzID0gLyUyMC9nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnZGVmYXVsdCc6ICdSRkMzOTg2JyxcbiAgICBmb3JtYXR0ZXJzOiB7XG4gICAgICAgIFJGQzE3Mzg6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2UuY2FsbCh2YWx1ZSwgcGVyY2VudFR3ZW50aWVzLCAnKycpO1xuICAgICAgICB9LFxuICAgICAgICBSRkMzOTg2OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgUkZDMTczODogJ1JGQzE3MzgnLFxuICAgIFJGQzM5ODY6ICdSRkMzOTg2J1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG52YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG52YXIgZm9ybWF0cyA9IHJlcXVpcmUoJy4vZm9ybWF0cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JtYXRzOiBmb3JtYXRzLFxuICAgIHBhcnNlOiBwYXJzZSxcbiAgICBzdHJpbmdpZnk6IHN0cmluZ2lmeVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGRlZmF1bHRzID0ge1xuICAgIGFsbG93RG90czogZmFsc2UsXG4gICAgYWxsb3dQcm90b3R5cGVzOiBmYWxzZSxcbiAgICBhcnJheUxpbWl0OiAyMCxcbiAgICBkZWNvZGVyOiB1dGlscy5kZWNvZGUsXG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZGVwdGg6IDUsXG4gICAgcGFyYW1ldGVyTGltaXQ6IDEwMDAsXG4gICAgcGxhaW5PYmplY3RzOiBmYWxzZSxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IGZhbHNlXG59O1xuXG52YXIgcGFyc2VWYWx1ZXMgPSBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nVmFsdWVzKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBvYmogPSB7fTtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQob3B0aW9ucy5kZWxpbWl0ZXIsIG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPT09IEluZmluaXR5ID8gdW5kZWZpbmVkIDogb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgIHZhciBwb3MgPSBwYXJ0LmluZGV4T2YoJ109JykgPT09IC0xID8gcGFydC5pbmRleE9mKCc9JykgOiBwYXJ0LmluZGV4T2YoJ109JykgKyAxO1xuXG4gICAgICAgIHZhciBrZXksIHZhbDtcbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIGtleSA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0KTtcbiAgICAgICAgICAgIHZhbCA9IG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nID8gbnVsbCA6ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAga2V5ID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQuc2xpY2UoMCwgcG9zKSk7XG4gICAgICAgICAgICB2YWwgPSBvcHRpb25zLmRlY29kZXIocGFydC5zbGljZShwb3MgKyAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhcy5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSBbXS5jb25jYXQob2JqW2tleV0pLmNvbmNhdCh2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIHBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gcGFyc2VPYmplY3RSZWN1cnNpdmUoY2hhaW4sIHZhbCwgb3B0aW9ucykge1xuICAgIGlmICghY2hhaW4ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgdmFyIHJvb3QgPSBjaGFpbi5zaGlmdCgpO1xuXG4gICAgdmFyIG9iajtcbiAgICBpZiAocm9vdCA9PT0gJ1tdJykge1xuICAgICAgICBvYmogPSBbXTtcbiAgICAgICAgb2JqID0gb2JqLmNvbmNhdChwYXJzZU9iamVjdChjaGFpbiwgdmFsLCBvcHRpb25zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqID0gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgICAgIHZhciBjbGVhblJvb3QgPSByb290LmNoYXJBdCgwKSA9PT0gJ1snICYmIHJvb3QuY2hhckF0KHJvb3QubGVuZ3RoIC0gMSkgPT09ICddJyA/IHJvb3Quc2xpY2UoMSwgLTEpIDogcm9vdDtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoY2xlYW5Sb290LCAxMCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICFpc05hTihpbmRleCkgJiZcbiAgICAgICAgICAgIHJvb3QgIT09IGNsZWFuUm9vdCAmJlxuICAgICAgICAgICAgU3RyaW5nKGluZGV4KSA9PT0gY2xlYW5Sb290ICYmXG4gICAgICAgICAgICBpbmRleCA+PSAwICYmXG4gICAgICAgICAgICAob3B0aW9ucy5wYXJzZUFycmF5cyAmJiBpbmRleCA8PSBvcHRpb25zLmFycmF5TGltaXQpXG4gICAgICAgICkge1xuICAgICAgICAgICAgb2JqID0gW107XG4gICAgICAgICAgICBvYmpbaW5kZXhdID0gcGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmpbY2xlYW5Sb290XSA9IHBhcnNlT2JqZWN0KGNoYWluLCB2YWwsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBwYXJzZUtleXMgPSBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nS2V5cyhnaXZlbktleSwgdmFsLCBvcHRpb25zKSB7XG4gICAgaWYgKCFnaXZlbktleSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVHJhbnNmb3JtIGRvdCBub3RhdGlvbiB0byBicmFja2V0IG5vdGF0aW9uXG4gICAgdmFyIGtleSA9IG9wdGlvbnMuYWxsb3dEb3RzID8gZ2l2ZW5LZXkucmVwbGFjZSgvXFwuKFteLltdKykvZywgJ1skMV0nKSA6IGdpdmVuS2V5O1xuXG4gICAgLy8gVGhlIHJlZ2V4IGNodW5rc1xuXG4gICAgdmFyIGJyYWNrZXRzID0gLyhcXFtbXltcXF1dKl0pLztcbiAgICB2YXIgY2hpbGQgPSAvKFxcW1teW1xcXV0qXSkvZztcblxuICAgIC8vIEdldCB0aGUgcGFyZW50XG5cbiAgICB2YXIgc2VnbWVudCA9IGJyYWNrZXRzLmV4ZWMoa2V5KTtcbiAgICB2YXIgcGFyZW50ID0gc2VnbWVudCA/IGtleS5zbGljZSgwLCBzZWdtZW50LmluZGV4KSA6IGtleTtcblxuICAgIC8vIFN0YXNoIHRoZSBwYXJlbnQgaWYgaXQgZXhpc3RzXG5cbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgLy8gSWYgd2UgYXJlbid0IHVzaW5nIHBsYWluIG9iamVjdHMsIG9wdGlvbmFsbHkgcHJlZml4IGtleXNcbiAgICAgICAgLy8gdGhhdCB3b3VsZCBvdmVyd3JpdGUgb2JqZWN0IHByb3RvdHlwZSBwcm9wZXJ0aWVzXG4gICAgICAgIGlmICghb3B0aW9ucy5wbGFpbk9iamVjdHMgJiYgaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgcGFyZW50KSkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmFsbG93UHJvdG90eXBlcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGtleXMucHVzaChwYXJlbnQpO1xuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBjaGlsZHJlbiBhcHBlbmRpbmcgdG8gdGhlIGFycmF5IHVudGlsIHdlIGhpdCBkZXB0aFxuXG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlICgoc2VnbWVudCA9IGNoaWxkLmV4ZWMoa2V5KSkgIT09IG51bGwgJiYgaSA8IG9wdGlvbnMuZGVwdGgpIHtcbiAgICAgICAgaSArPSAxO1xuICAgICAgICBpZiAoIW9wdGlvbnMucGxhaW5PYmplY3RzICYmIGhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHNlZ21lbnRbMV0uc2xpY2UoMSwgLTEpKSkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmFsbG93UHJvdG90eXBlcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBrZXlzLnB1c2goc2VnbWVudFsxXSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUncyBhIHJlbWFpbmRlciwganVzdCBhZGQgd2hhdGV2ZXIgaXMgbGVmdFxuXG4gICAgaWYgKHNlZ21lbnQpIHtcbiAgICAgICAga2V5cy5wdXNoKCdbJyArIGtleS5zbGljZShzZWdtZW50LmluZGV4KSArICddJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlT2JqZWN0KGtleXMsIHZhbCwgb3B0aW9ucyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIG9wdHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge307XG5cbiAgICBpZiAob3B0aW9ucy5kZWNvZGVyICE9PSBudWxsICYmIG9wdGlvbnMuZGVjb2RlciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRpb25zLmRlY29kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRGVjb2RlciBoYXMgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBvcHRpb25zLmRlbGltaXRlciA9IHR5cGVvZiBvcHRpb25zLmRlbGltaXRlciA9PT0gJ3N0cmluZycgfHwgdXRpbHMuaXNSZWdFeHAob3B0aW9ucy5kZWxpbWl0ZXIpID8gb3B0aW9ucy5kZWxpbWl0ZXIgOiBkZWZhdWx0cy5kZWxpbWl0ZXI7XG4gICAgb3B0aW9ucy5kZXB0aCA9IHR5cGVvZiBvcHRpb25zLmRlcHRoID09PSAnbnVtYmVyJyA/IG9wdGlvbnMuZGVwdGggOiBkZWZhdWx0cy5kZXB0aDtcbiAgICBvcHRpb25zLmFycmF5TGltaXQgPSB0eXBlb2Ygb3B0aW9ucy5hcnJheUxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMuYXJyYXlMaW1pdCA6IGRlZmF1bHRzLmFycmF5TGltaXQ7XG4gICAgb3B0aW9ucy5wYXJzZUFycmF5cyA9IG9wdGlvbnMucGFyc2VBcnJheXMgIT09IGZhbHNlO1xuICAgIG9wdGlvbnMuZGVjb2RlciA9IHR5cGVvZiBvcHRpb25zLmRlY29kZXIgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLmRlY29kZXIgOiBkZWZhdWx0cy5kZWNvZGVyO1xuICAgIG9wdGlvbnMuYWxsb3dEb3RzID0gdHlwZW9mIG9wdGlvbnMuYWxsb3dEb3RzID09PSAnYm9vbGVhbicgPyBvcHRpb25zLmFsbG93RG90cyA6IGRlZmF1bHRzLmFsbG93RG90cztcbiAgICBvcHRpb25zLnBsYWluT2JqZWN0cyA9IHR5cGVvZiBvcHRpb25zLnBsYWluT2JqZWN0cyA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5wbGFpbk9iamVjdHMgOiBkZWZhdWx0cy5wbGFpbk9iamVjdHM7XG4gICAgb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMgPSB0eXBlb2Ygb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMgPT09ICdib29sZWFuJyA/IG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzIDogZGVmYXVsdHMuYWxsb3dQcm90b3R5cGVzO1xuICAgIG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPSB0eXBlb2Ygb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnBhcmFtZXRlckxpbWl0IDogZGVmYXVsdHMucGFyYW1ldGVyTGltaXQ7XG4gICAgb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgPSB0eXBlb2Ygb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nIDogZGVmYXVsdHMuc3RyaWN0TnVsbEhhbmRsaW5nO1xuXG4gICAgaWYgKHN0ciA9PT0gJycgfHwgc3RyID09PSBudWxsIHx8IHR5cGVvZiBzdHIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICB9XG5cbiAgICB2YXIgdGVtcE9iaiA9IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gcGFyc2VWYWx1ZXMoc3RyLCBvcHRpb25zKSA6IHN0cjtcbiAgICB2YXIgb2JqID0gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGtleXMgYW5kIHNldHVwIHRoZSBuZXcgb2JqZWN0XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRlbXBPYmopO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIG5ld09iaiA9IHBhcnNlS2V5cyhrZXksIHRlbXBPYmpba2V5XSwgb3B0aW9ucyk7XG4gICAgICAgIG9iaiA9IHV0aWxzLm1lcmdlKG9iaiwgbmV3T2JqLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXRpbHMuY29tcGFjdChvYmopO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcblxudmFyIGFycmF5UHJlZml4R2VuZXJhdG9ycyA9IHtcbiAgICBicmFja2V0czogZnVuY3Rpb24gYnJhY2tldHMocHJlZml4KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnW10nO1xuICAgIH0sXG4gICAgaW5kaWNlczogZnVuY3Rpb24gaW5kaWNlcyhwcmVmaXgsIGtleSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1snICsga2V5ICsgJ10nO1xuICAgIH0sXG4gICAgcmVwZWF0OiBmdW5jdGlvbiByZXBlYXQocHJlZml4KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgfVxufTtcblxudmFyIHRvSVNPID0gRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmc7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBlbmNvZGU6IHRydWUsXG4gICAgZW5jb2RlcjogdXRpbHMuZW5jb2RlLFxuICAgIGVuY29kZVZhbHVlc09ubHk6IGZhbHNlLFxuICAgIHNlcmlhbGl6ZURhdGU6IGZ1bmN0aW9uIHNlcmlhbGl6ZURhdGUoZGF0ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gdG9JU08uY2FsbChkYXRlKTtcbiAgICB9LFxuICAgIHNraXBOdWxsczogZmFsc2UsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nOiBmYWxzZVxufTtcblxudmFyIHN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeSggLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICBvYmplY3QsXG4gICAgcHJlZml4LFxuICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgIHNraXBOdWxscyxcbiAgICBlbmNvZGVyLFxuICAgIGZpbHRlcixcbiAgICBzb3J0LFxuICAgIGFsbG93RG90cyxcbiAgICBzZXJpYWxpemVEYXRlLFxuICAgIGZvcm1hdHRlcixcbiAgICBlbmNvZGVWYWx1ZXNPbmx5XG4pIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9iaiA9IGZpbHRlcihwcmVmaXgsIG9iaik7XG4gICAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIG9iaiA9IHNlcmlhbGl6ZURhdGUob2JqKTtcbiAgICB9IGVsc2UgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoc3RyaWN0TnVsbEhhbmRsaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlciAmJiAhZW5jb2RlVmFsdWVzT25seSA/IGVuY29kZXIocHJlZml4KSA6IHByZWZpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iaiA9ICcnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJyB8fCB0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicgfHwgdXRpbHMuaXNCdWZmZXIob2JqKSkge1xuICAgICAgICBpZiAoZW5jb2Rlcikge1xuICAgICAgICAgICAgdmFyIGtleVZhbHVlID0gZW5jb2RlVmFsdWVzT25seSA/IHByZWZpeCA6IGVuY29kZXIocHJlZml4KTtcbiAgICAgICAgICAgIHJldHVybiBbZm9ybWF0dGVyKGtleVZhbHVlKSArICc9JyArIGZvcm1hdHRlcihlbmNvZGVyKG9iaikpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihwcmVmaXgpICsgJz0nICsgZm9ybWF0dGVyKFN0cmluZyhvYmopKV07XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgdmFyIG9iaktleXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgb2JqS2V5cyA9IHNvcnQgPyBrZXlzLnNvcnQoc29ydCkgOiBrZXlzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAoc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgocHJlZml4LCBrZXkpLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgICAgIHNraXBOdWxscyxcbiAgICAgICAgICAgICAgICBlbmNvZGVyLFxuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBzb3J0LFxuICAgICAgICAgICAgICAgIGFsbG93RG90cyxcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcixcbiAgICAgICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAgICAgIHByZWZpeCArIChhbGxvd0RvdHMgPyAnLicgKyBrZXkgOiAnWycgKyBrZXkgKyAnXScpLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgICAgIHNraXBOdWxscyxcbiAgICAgICAgICAgICAgICBlbmNvZGVyLFxuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBzb3J0LFxuICAgICAgICAgICAgICAgIGFsbG93RG90cyxcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcixcbiAgICAgICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG9wdHMpIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuICAgIHZhciBvcHRpb25zID0gb3B0cyB8fCB7fTtcblxuICAgIGlmIChvcHRpb25zLmVuY29kZXIgIT09IG51bGwgJiYgb3B0aW9ucy5lbmNvZGVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdGlvbnMuZW5jb2RlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFbmNvZGVyIGhhcyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBkZWxpbWl0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5kZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuZGVsaW1pdGVyIDogb3B0aW9ucy5kZWxpbWl0ZXI7XG4gICAgdmFyIHN0cmljdE51bGxIYW5kbGluZyA9IHR5cGVvZiBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgOiBkZWZhdWx0cy5zdHJpY3ROdWxsSGFuZGxpbmc7XG4gICAgdmFyIHNraXBOdWxscyA9IHR5cGVvZiBvcHRpb25zLnNraXBOdWxscyA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5za2lwTnVsbHMgOiBkZWZhdWx0cy5za2lwTnVsbHM7XG4gICAgdmFyIGVuY29kZSA9IHR5cGVvZiBvcHRpb25zLmVuY29kZSA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5lbmNvZGUgOiBkZWZhdWx0cy5lbmNvZGU7XG4gICAgdmFyIGVuY29kZXIgPSB0eXBlb2Ygb3B0aW9ucy5lbmNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5lbmNvZGVyIDogZGVmYXVsdHMuZW5jb2RlcjtcbiAgICB2YXIgc29ydCA9IHR5cGVvZiBvcHRpb25zLnNvcnQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnNvcnQgOiBudWxsO1xuICAgIHZhciBhbGxvd0RvdHMgPSB0eXBlb2Ygb3B0aW9ucy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBvcHRpb25zLmFsbG93RG90cztcbiAgICB2YXIgc2VyaWFsaXplRGF0ZSA9IHR5cGVvZiBvcHRpb25zLnNlcmlhbGl6ZURhdGUgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnNlcmlhbGl6ZURhdGUgOiBkZWZhdWx0cy5zZXJpYWxpemVEYXRlO1xuICAgIHZhciBlbmNvZGVWYWx1ZXNPbmx5ID0gdHlwZW9mIG9wdGlvbnMuZW5jb2RlVmFsdWVzT25seSA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5lbmNvZGVWYWx1ZXNPbmx5IDogZGVmYXVsdHMuZW5jb2RlVmFsdWVzT25seTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZm9ybWF0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmZvcm1hdCA9IGZvcm1hdHMuZGVmYXVsdDtcbiAgICB9IGVsc2UgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZm9ybWF0cy5mb3JtYXR0ZXJzLCBvcHRpb25zLmZvcm1hdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBmb3JtYXQgb3B0aW9uIHByb3ZpZGVkLicpO1xuICAgIH1cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0cy5mb3JtYXR0ZXJzW29wdGlvbnMuZm9ybWF0XTtcbiAgICB2YXIgb2JqS2V5cztcbiAgICB2YXIgZmlsdGVyO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICAgICAgb2JqID0gZmlsdGVyKCcnLCBvYmopO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLmZpbHRlcikpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgIG9iaktleXMgPSBmaWx0ZXI7XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHZhciBhcnJheUZvcm1hdDtcbiAgICBpZiAob3B0aW9ucy5hcnJheUZvcm1hdCBpbiBhcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRpb25zLmFycmF5Rm9ybWF0O1xuICAgIH0gZWxzZSBpZiAoJ2luZGljZXMnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRpb25zLmluZGljZXMgPyAnaW5kaWNlcycgOiAncmVwZWF0JztcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheUZvcm1hdCA9ICdpbmRpY2VzJztcbiAgICB9XG5cbiAgICB2YXIgZ2VuZXJhdGVBcnJheVByZWZpeCA9IGFycmF5UHJlZml4R2VuZXJhdG9yc1thcnJheUZvcm1hdF07XG5cbiAgICBpZiAoIW9iaktleXMpIHtcbiAgICAgICAgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgfVxuXG4gICAgaWYgKHNvcnQpIHtcbiAgICAgICAgb2JqS2V5cy5zb3J0KHNvcnQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAoc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChzdHJpbmdpZnkoXG4gICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICBza2lwTnVsbHMsXG4gICAgICAgICAgICBlbmNvZGUgPyBlbmNvZGVyIDogbnVsbCxcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICBhbGxvd0RvdHMsXG4gICAgICAgICAgICBzZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seVxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5cy5qb2luKGRlbGltaXRlcik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGhleFRhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgICAgIGFycmF5LnB1c2goJyUnICsgKChpIDwgMTYgPyAnMCcgOiAnJykgKyBpLnRvU3RyaW5nKDE2KSkudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xufSgpKTtcblxuZXhwb3J0cy5hcnJheVRvT2JqZWN0ID0gZnVuY3Rpb24gKHNvdXJjZSwgb3B0aW9ucykge1xuICAgIHZhciBvYmogPSBvcHRpb25zICYmIG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb2JqW2ldID0gc291cmNlW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbmV4cG9ydHMubWVyZ2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChzb3VyY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5wbGFpbk9iamVjdHMgfHwgb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMgfHwgIWhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3RhcmdldCwgc291cmNlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBbdGFyZ2V0XS5jb25jYXQoc291cmNlKTtcbiAgICB9XG5cbiAgICB2YXIgbWVyZ2VUYXJnZXQgPSB0YXJnZXQ7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiAhQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIG1lcmdlVGFyZ2V0ID0gZXhwb3J0cy5hcnJheVRvT2JqZWN0KHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGlmIChoYXMuY2FsbCh0YXJnZXQsIGkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFtpXSAmJiB0eXBlb2YgdGFyZ2V0W2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBleHBvcnRzLm1lcmdlKHRhcmdldFtpXSwgaXRlbSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc291cmNlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtrZXldO1xuXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYWNjLCBrZXkpKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IGV4cG9ydHMubWVyZ2UoYWNjW2tleV0sIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBtZXJnZVRhcmdldCk7XG59O1xuXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0ci5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKHN0cikge1xuICAgIC8vIFRoaXMgY29kZSB3YXMgb3JpZ2luYWxseSB3cml0dGVuIGJ5IEJyaWFuIFdoaXRlIChtc2NkZXgpIGZvciB0aGUgaW8uanMgY29yZSBxdWVyeXN0cmluZyBsaWJyYXJ5LlxuICAgIC8vIEl0IGhhcyBiZWVuIGFkYXB0ZWQgaGVyZSBmb3Igc3RyaWN0ZXIgYWRoZXJlbmNlIHRvIFJGQyAzOTg2XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICB2YXIgc3RyaW5nID0gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBzdHIgOiBTdHJpbmcoc3RyKTtcblxuICAgIHZhciBvdXQgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGMgPT09IDB4MkQgfHwgLy8gLVxuICAgICAgICAgICAgYyA9PT0gMHgyRSB8fCAvLyAuXG4gICAgICAgICAgICBjID09PSAweDVGIHx8IC8vIF9cbiAgICAgICAgICAgIGMgPT09IDB4N0UgfHwgLy8gflxuICAgICAgICAgICAgKGMgPj0gMHgzMCAmJiBjIDw9IDB4MzkpIHx8IC8vIDAtOVxuICAgICAgICAgICAgKGMgPj0gMHg0MSAmJiBjIDw9IDB4NUEpIHx8IC8vIGEtelxuICAgICAgICAgICAgKGMgPj0gMHg2MSAmJiBjIDw9IDB4N0EpIC8vIEEtWlxuICAgICAgICApIHtcbiAgICAgICAgICAgIG91dCArPSBzdHJpbmcuY2hhckF0KGkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIGhleFRhYmxlW2NdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4ODAwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyAoaGV4VGFibGVbMHhDMCB8IChjID4+IDYpXSArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHhEODAwIHx8IGMgPj0gMHhFMDAwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyAoaGV4VGFibGVbMHhFMCB8IChjID4+IDEyKV0gKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDYpICYgMHgzRildICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaSArPSAxO1xuICAgICAgICBjID0gMHgxMDAwMCArICgoKGMgJiAweDNGRikgPDwgMTApIHwgKHN0cmluZy5jaGFyQ29kZUF0KGkpICYgMHgzRkYpKTtcbiAgICAgICAgb3V0ICs9IGhleFRhYmxlWzB4RjAgfCAoYyA+PiAxOCldICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiAxMikgJiAweDNGKV0gKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDYpICYgMHgzRildICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufTtcblxuZXhwb3J0cy5jb21wYWN0ID0gZnVuY3Rpb24gKG9iaiwgcmVmZXJlbmNlcykge1xuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICB2YXIgcmVmcyA9IHJlZmVyZW5jZXMgfHwgW107XG4gICAgdmFyIGxvb2t1cCA9IHJlZnMuaW5kZXhPZihvYmopO1xuICAgIGlmIChsb29rdXAgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiByZWZzW2xvb2t1cF07XG4gICAgfVxuXG4gICAgcmVmcy5wdXNoKG9iaik7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBjb21wYWN0ZWQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKG9ialtpXSAmJiB0eXBlb2Ygb2JqW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbXBhY3RlZC5wdXNoKGV4cG9ydHMuY29tcGFjdChvYmpbaV0sIHJlZnMpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9ialtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb21wYWN0ZWQucHVzaChvYmpbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBhY3RlZDtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBleHBvcnRzLmNvbXBhY3Qob2JqW2tleV0sIHJlZnMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbmV4cG9ydHMuaXNSZWdFeHAgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy5zZWxlY3QgPSBzZWxlY3Q7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG5leHBvcnRzLnNldFJhd0Nvb2tpZSA9IHNldFJhd0Nvb2tpZTtcbmV4cG9ydHMucGx1Z1RvUmVxdWVzdCA9IHBsdWdUb1JlcXVlc3Q7XG5cbnZhciBfY29va2llID0gcmVxdWlyZSgnY29va2llJyk7XG5cbnZhciBfY29va2llMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nvb2tpZSk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgX2lzTm9kZSA9IHJlcXVpcmUoJ2lzLW5vZGUnKTtcblxudmFyIF9pc05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNOb2RlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9yYXdDb29raWUgPSB7fTtcbnZhciBfcmVzID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBfaXNSZXNXcml0YWJsZSgpIHtcbiAgcmV0dXJuIF9yZXMgJiYgIV9yZXMuaGVhZGVyc1NlbnQ7XG59XG5cbmZ1bmN0aW9uIGxvYWQobmFtZSwgZG9Ob3RQYXJzZSwgb3B0KSB7XG4gIHZhciBjb29raWVzID0gX2lzTm9kZTIuZGVmYXVsdCA/IF9yYXdDb29raWUgOiBfY29va2llMi5kZWZhdWx0LnBhcnNlKGRvY3VtZW50LmNvb2tpZSwgb3B0KTtcbiAgdmFyIGNvb2tpZVZhbCA9IGNvb2tpZXMgJiYgY29va2llc1tuYW1lXTtcblxuICBpZiAodHlwZW9mIGRvTm90UGFyc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9Ob3RQYXJzZSA9ICFjb29raWVWYWwgfHwgY29va2llVmFsWzBdICE9PSAneycgJiYgY29va2llVmFsWzBdICE9PSAnWyc7XG4gIH1cblxuICBpZiAoIWRvTm90UGFyc2UpIHtcbiAgICB0cnkge1xuICAgICAgY29va2llVmFsID0gSlNPTi5wYXJzZShjb29raWVWYWwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIE5vdCBzZXJpYWxpemVkIG9iamVjdFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb29raWVWYWw7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdChyZWdleCkge1xuICB2YXIgY29va2llcyA9IF9pc05vZGUyLmRlZmF1bHQgPyBfcmF3Q29va2llIDogX2Nvb2tpZTIuZGVmYXVsdC5wYXJzZShkb2N1bWVudC5jb29raWUpO1xuXG4gIGlmICghY29va2llcykge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGlmICghcmVnZXgpIHtcbiAgICByZXR1cm4gY29va2llcztcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhjb29raWVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBuYW1lKSB7XG4gICAgaWYgKCFyZWdleC50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgfVxuXG4gICAgdmFyIG5ld0Nvb2tpZSA9IHt9O1xuICAgIG5ld0Nvb2tpZVtuYW1lXSA9IGNvb2tpZXNbbmFtZV07XG4gICAgcmV0dXJuICgwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KSh7fSwgYWNjdW11bGF0b3IsIG5ld0Nvb2tpZSk7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gc2F2ZShuYW1lLCB2YWwsIG9wdCkge1xuICBfcmF3Q29va2llW25hbWVdID0gdmFsO1xuXG4gIC8vIGFsbG93IHlvdSB0byB3b3JrIHdpdGggY29va2llcyBhcyBvYmplY3RzLlxuICBpZiAoKHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbCkpID09PSAnb2JqZWN0Jykge1xuICAgIF9yYXdDb29raWVbbmFtZV0gPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICB9XG5cbiAgLy8gQ29va2llcyBvbmx5IHdvcmsgaW4gdGhlIGJyb3dzZXJcbiAgaWYgKCFfaXNOb2RlMi5kZWZhdWx0KSB7XG4gICAgZG9jdW1lbnQuY29va2llID0gX2Nvb2tpZTIuZGVmYXVsdC5zZXJpYWxpemUobmFtZSwgX3Jhd0Nvb2tpZVtuYW1lXSwgb3B0KTtcbiAgfVxuXG4gIGlmIChfaXNSZXNXcml0YWJsZSgpICYmIF9yZXMuY29va2llKSB7XG4gICAgdmFyIGV4cHJlc3NPcHQgPSBfZXh0ZW5kcyh7fSwgb3B0KTtcbiAgICBpZiAoZXhwcmVzc09wdC5tYXhBZ2UpIHtcbiAgICAgIC8vIHRoZSBzdGFuZGFyZCBmb3IgbWF4QWdlIGlzIHNlY29uZHMgYnV0IGV4cHJlc3MgdXNlcyBtaWxsaXNlY29uZHNcbiAgICAgIGV4cHJlc3NPcHQubWF4QWdlID0gb3B0Lm1heEFnZSAqIDEwMDA7XG4gICAgfVxuXG4gICAgX3Jlcy5jb29raWUobmFtZSwgdmFsLCBvcHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShuYW1lLCBvcHQpIHtcbiAgZGVsZXRlIF9yYXdDb29raWVbbmFtZV07XG5cbiAgaWYgKHR5cGVvZiBvcHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0ID0ge307XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdCA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBXaWxsIGJlIGRlcHJlY2F0ZWQgaW4gZnV0dXJlIHZlcnNpb25zXG4gICAgb3B0ID0geyBwYXRoOiBvcHQgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBQcmV2ZW50IG11dGF0aW9uIG9mIG9wdCBiZWxvd1xuICAgIG9wdCA9ICgwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KSh7fSwgb3B0KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0LmV4cGlyZXMgPSBuZXcgRGF0ZSgxOTcwLCAxLCAxLCAwLCAwLCAxKTtcbiAgICBvcHQubWF4QWdlID0gMDtcbiAgICBkb2N1bWVudC5jb29raWUgPSBfY29va2llMi5kZWZhdWx0LnNlcmlhbGl6ZShuYW1lLCAnJywgb3B0KTtcbiAgfVxuXG4gIGlmIChfaXNSZXNXcml0YWJsZSgpICYmIF9yZXMuY2xlYXJDb29raWUpIHtcbiAgICBfcmVzLmNsZWFyQ29va2llKG5hbWUsIG9wdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0UmF3Q29va2llKHJhd0Nvb2tpZSkge1xuICBpZiAocmF3Q29va2llKSB7XG4gICAgX3Jhd0Nvb2tpZSA9IF9jb29raWUyLmRlZmF1bHQucGFyc2UocmF3Q29va2llKTtcbiAgfSBlbHNlIHtcbiAgICBfcmF3Q29va2llID0ge307XG4gIH1cbn1cblxuZnVuY3Rpb24gcGx1Z1RvUmVxdWVzdChyZXEsIHJlcykge1xuICBpZiAocmVxLmNvb2tpZSkge1xuICAgIF9yYXdDb29raWUgPSByZXEuY29va2llO1xuICB9IGVsc2UgaWYgKHJlcS5jb29raWVzKSB7XG4gICAgX3Jhd0Nvb2tpZSA9IHJlcS5jb29raWVzO1xuICB9IGVsc2UgaWYgKHJlcS5oZWFkZXJzICYmIHJlcS5oZWFkZXJzLmNvb2tpZSkge1xuICAgIHNldFJhd0Nvb2tpZShyZXEuaGVhZGVycy5jb29raWUpO1xuICB9IGVsc2Uge1xuICAgIF9yYXdDb29raWUgPSB7fTtcbiAgfVxuXG4gIF9yZXMgPSByZXM7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVucGx1ZygpIHtcbiAgICBfcmVzID0gbnVsbDtcbiAgICBfcmF3Q29va2llID0ge307XG4gIH07XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgc2V0UmF3Q29va2llOiBzZXRSYXdDb29raWUsXG4gIGxvYWQ6IGxvYWQsXG4gIHNlbGVjdDogc2VsZWN0LFxuICBzYXZlOiBzYXZlLFxuICByZW1vdmU6IHJlbW92ZSxcbiAgcGx1Z1RvUmVxdWVzdDogcGx1Z1RvUmVxdWVzdFxufTsiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRyb3B6b25lXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEcm9wem9uZVwiXSA9IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdLCByb290W1wicHJvcC10eXBlc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24ocHJvY2Vzcykgeyd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cdFxuXHR2YXIgX3JlYWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXHRcblx0dmFyIF9wcm9wVHlwZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHRcblx0dmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblx0XG5cdHZhciBfYXR0ckFjY2VwdCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdFxuXHR2YXIgX2F0dHJBY2NlcHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXR0ckFjY2VwdCk7XG5cdFxuXHR2YXIgX2dldERhdGFUcmFuc2Zlckl0ZW1zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0XG5cdHZhciBfZ2V0RGF0YVRyYW5zZmVySXRlbXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0RGF0YVRyYW5zZmVySXRlbXMpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblx0XG5cdGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblx0XG5cdGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXHRcblx0ZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8qIGVzbGludCBwcmVmZXItdGVtcGxhdGU6IDAgKi9cblx0XG5cdHZhciBzdXBwb3J0TXVsdGlwbGUgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPyAnbXVsdGlwbGUnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgOiB0cnVlO1xuXHRcblx0dmFyIERyb3B6b25lID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0ICBfaW5oZXJpdHMoRHJvcHpvbmUsIF9SZWFjdCRDb21wb25lbnQpO1xuXHRcblx0ICBfY3JlYXRlQ2xhc3MoRHJvcHpvbmUsIG51bGwsIFt7XG5cdCAgICBrZXk6ICdvbkRvY3VtZW50RHJhZ092ZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRG9jdW1lbnREcmFnT3ZlcihlKSB7XG5cdCAgICAgIC8vIGFsbG93IHRoZSBlbnRpcmUgZG9jdW1lbnQgdG8gYmUgYSBkcmFnIHRhcmdldFxuXHQgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICBmdW5jdGlvbiBEcm9wem9uZShwcm9wcywgY29udGV4dCkge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3B6b25lKTtcblx0XG5cdCAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRHJvcHpvbmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wem9uZSkpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblx0XG5cdCAgICBfdGhpcy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuXHQgICAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgcmV0dXJuIGNoaWxkcmVuKF90aGlzLnN0YXRlKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gY2hpbGRyZW47XG5cdCAgICB9O1xuXHRcblx0ICAgIF90aGlzLm9uQ2xpY2sgPSBfdGhpcy5vbkNsaWNrLmJpbmQoX3RoaXMpO1xuXHQgICAgX3RoaXMub25Eb2N1bWVudERyb3AgPSBfdGhpcy5vbkRvY3VtZW50RHJvcC5iaW5kKF90aGlzKTtcblx0ICAgIF90aGlzLm9uRHJhZ1N0YXJ0ID0gX3RoaXMub25EcmFnU3RhcnQuYmluZChfdGhpcyk7XG5cdCAgICBfdGhpcy5vbkRyYWdFbnRlciA9IF90aGlzLm9uRHJhZ0VudGVyLmJpbmQoX3RoaXMpO1xuXHQgICAgX3RoaXMub25EcmFnTGVhdmUgPSBfdGhpcy5vbkRyYWdMZWF2ZS5iaW5kKF90aGlzKTtcblx0ICAgIF90aGlzLm9uRHJhZ092ZXIgPSBfdGhpcy5vbkRyYWdPdmVyLmJpbmQoX3RoaXMpO1xuXHQgICAgX3RoaXMub25Ecm9wID0gX3RoaXMub25Ecm9wLmJpbmQoX3RoaXMpO1xuXHQgICAgX3RoaXMub25GaWxlRGlhbG9nQ2FuY2VsID0gX3RoaXMub25GaWxlRGlhbG9nQ2FuY2VsLmJpbmQoX3RoaXMpO1xuXHQgICAgX3RoaXMuZmlsZUFjY2VwdGVkID0gX3RoaXMuZmlsZUFjY2VwdGVkLmJpbmQoX3RoaXMpO1xuXHQgICAgX3RoaXMuc2V0UmVmID0gX3RoaXMuc2V0UmVmLmJpbmQoX3RoaXMpO1xuXHQgICAgX3RoaXMuaXNGaWxlRGlhbG9nQWN0aXZlID0gZmFsc2U7XG5cdCAgICBfdGhpcy5zdGF0ZSA9IHtcblx0ICAgICAgaXNEcmFnQWN0aXZlOiBmYWxzZSxcblx0ICAgICAgYWNjZXB0ZWRGaWxlczogW10sXG5cdCAgICAgIHJlamVjdGVkRmlsZXM6IFtdXG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIF90aGlzO1xuXHQgIH1cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKERyb3B6b25lLCBbe1xuXHQgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHQgICAgICB2YXIgcHJldmVudERyb3BPbkRvY3VtZW50ID0gdGhpcy5wcm9wcy5wcmV2ZW50RHJvcE9uRG9jdW1lbnQ7XG5cdFxuXHQgICAgICB0aGlzLmRyYWdUYXJnZXRzID0gW107XG5cdFxuXHQgICAgICBpZiAocHJldmVudERyb3BPbkRvY3VtZW50KSB7XG5cdCAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBEcm9wem9uZS5vbkRvY3VtZW50RHJhZ092ZXIsIGZhbHNlKTtcblx0ICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5vbkRvY3VtZW50RHJvcCwgZmFsc2UpO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIFRyaWVkIGltcGxlbWVudGluZyBhZGRFdmVudExpc3RlbmVyLCBidXQgZGlkbid0IHdvcmsgb3V0XG5cdCAgICAgIGRvY3VtZW50LmJvZHkub25mb2N1cyA9IHRoaXMub25GaWxlRGlhbG9nQ2FuY2VsO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0ICAgICAgdmFyIHByZXZlbnREcm9wT25Eb2N1bWVudCA9IHRoaXMucHJvcHMucHJldmVudERyb3BPbkRvY3VtZW50O1xuXHRcblx0ICAgICAgaWYgKHByZXZlbnREcm9wT25Eb2N1bWVudCkge1xuXHQgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgRHJvcHpvbmUub25Eb2N1bWVudERyYWdPdmVyKTtcblx0ICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5vbkRvY3VtZW50RHJvcCk7XG5cdCAgICAgIH1cblx0ICAgICAgLy8gQ2FuIGJlIHJlcGxhY2VkIHdpdGggcmVtb3ZlRXZlbnRMaXN0ZW5lciwgaWYgYWRkRXZlbnRMaXN0ZW5lciB3b3Jrc1xuXHQgICAgICBkb2N1bWVudC5ib2R5Lm9uZm9jdXMgPSBudWxsO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ29uRG9jdW1lbnREcm9wJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRvY3VtZW50RHJvcChlKSB7XG5cdCAgICAgIGlmICh0aGlzLm5vZGUuY29udGFpbnMoZS50YXJnZXQpKSB7XG5cdCAgICAgICAgLy8gaWYgd2UgaW50ZXJjZXB0ZWQgYW4gZXZlbnQgZm9yIG91ciBpbnN0YW5jZSwgbGV0IGl0IHByb3BhZ2F0ZSBkb3duIHRvIHRoZSBpbnN0YW5jZSdzIG9uRHJvcCBoYW5kbGVyXG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblx0ICAgICAgdGhpcy5kcmFnVGFyZ2V0cyA9IFtdO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ29uRHJhZ1N0YXJ0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWdTdGFydChlKSB7XG5cdCAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ1N0YXJ0KSB7XG5cdCAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdTdGFydC5jYWxsKHRoaXMsIGUpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnb25EcmFnRW50ZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ0VudGVyKGUpIHtcblx0ICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcblx0ICAgICAgLy8gQ291bnQgdGhlIGRyb3B6b25lIGFuZCBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgZW50ZXJlZC5cblx0ICAgICAgaWYgKHRoaXMuZHJhZ1RhcmdldHMuaW5kZXhPZihlLnRhcmdldCkgPT09IC0xKSB7XG5cdCAgICAgICAgdGhpcy5kcmFnVGFyZ2V0cy5wdXNoKGUudGFyZ2V0KTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIGZpbGVzID0gKDAsIF9nZXREYXRhVHJhbnNmZXJJdGVtczIuZGVmYXVsdCkoZSk7XG5cdCAgICAgIHZhciBhbGxGaWxlc0FjY2VwdGVkID0gdGhpcy5hbGxGaWxlc0FjY2VwdGVkKGZpbGVzKTtcblx0ICAgICAgdmFyIGlzTXVsdGlwbGVBbGxvd2VkID0gdGhpcy5wcm9wcy5tdWx0aXBsZSB8fCBmaWxlcy5sZW5ndGggPD0gMTtcblx0XG5cdCAgICAgIHRoaXMuc2V0U3RhdGUoe1xuXHQgICAgICAgIGlzRHJhZ0FjdGl2ZTogYWxsRmlsZXNBY2NlcHRlZCxcblx0ICAgICAgICBpc0RyYWdSZWplY3Q6ICFhbGxGaWxlc0FjY2VwdGVkIHx8ICFpc011bHRpcGxlQWxsb3dlZFxuXHQgICAgICB9KTtcblx0XG5cdCAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ0VudGVyKSB7XG5cdCAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdFbnRlci5jYWxsKHRoaXMsIGUpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnb25EcmFnT3ZlcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnT3ZlcihlKSB7XG5cdCAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuXHQgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXHQgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAvLyBjb250aW51ZSByZWdhcmRsZXNzIG9mIGVycm9yXG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ092ZXIpIHtcblx0ICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ092ZXIuY2FsbCh0aGlzLCBlKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnb25EcmFnTGVhdmUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ0xlYXZlKGUpIHtcblx0ICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cdFxuXHQgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cdFxuXHQgICAgICAvLyBPbmx5IGRlYWN0aXZhdGUgb25jZSB0aGUgZHJvcHpvbmUgYW5kIGFsbCBjaGlsZHJlbiBoYXZlIGJlZW4gbGVmdC5cblx0ICAgICAgdGhpcy5kcmFnVGFyZ2V0cyA9IHRoaXMuZHJhZ1RhcmdldHMuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuXHQgICAgICAgIHJldHVybiBlbCAhPT0gZS50YXJnZXQgJiYgX3RoaXMyLm5vZGUuY29udGFpbnMoZWwpO1xuXHQgICAgICB9KTtcblx0ICAgICAgaWYgKHRoaXMuZHJhZ1RhcmdldHMubGVuZ3RoID4gMCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdGhpcy5zZXRTdGF0ZSh7XG5cdCAgICAgICAgaXNEcmFnQWN0aXZlOiBmYWxzZSxcblx0ICAgICAgICBpc0RyYWdSZWplY3Q6IGZhbHNlXG5cdCAgICAgIH0pO1xuXHRcblx0ICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnTGVhdmUpIHtcblx0ICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ0xlYXZlLmNhbGwodGhpcywgZSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdvbkRyb3AnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJvcChlKSB7XG5cdCAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXHRcblx0ICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG5cdCAgICAgICAgICBvbkRyb3AgPSBfcHJvcHMub25Ecm9wLFxuXHQgICAgICAgICAgb25Ecm9wQWNjZXB0ZWQgPSBfcHJvcHMub25Ecm9wQWNjZXB0ZWQsXG5cdCAgICAgICAgICBvbkRyb3BSZWplY3RlZCA9IF9wcm9wcy5vbkRyb3BSZWplY3RlZCxcblx0ICAgICAgICAgIG11bHRpcGxlID0gX3Byb3BzLm11bHRpcGxlLFxuXHQgICAgICAgICAgZGlzYWJsZVByZXZpZXcgPSBfcHJvcHMuZGlzYWJsZVByZXZpZXc7XG5cdFxuXHQgICAgICB2YXIgZmlsZUxpc3QgPSAoMCwgX2dldERhdGFUcmFuc2Zlckl0ZW1zMi5kZWZhdWx0KShlKTtcblx0ICAgICAgdmFyIGFjY2VwdGVkRmlsZXMgPSBbXTtcblx0ICAgICAgdmFyIHJlamVjdGVkRmlsZXMgPSBbXTtcblx0XG5cdCAgICAgIC8vIFN0b3AgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yXG5cdCAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblx0XG5cdCAgICAgIC8vIFJlc2V0IHRoZSBjb3VudGVyIGFsb25nIHdpdGggdGhlIGRyYWcgb24gYSBkcm9wLlxuXHQgICAgICB0aGlzLmRyYWdUYXJnZXRzID0gW107XG5cdCAgICAgIHRoaXMuaXNGaWxlRGlhbG9nQWN0aXZlID0gZmFsc2U7XG5cdFxuXHQgICAgICBmaWxlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG5cdCAgICAgICAgaWYgKCFkaXNhYmxlUHJldmlldykge1xuXHQgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgZmlsZS5wcmV2aWV3ID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0ICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuXHQgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZW5lcmF0ZSBwcmV2aWV3IGZvciBmaWxlJywgZmlsZSwgZXJyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGlmIChfdGhpczMuZmlsZUFjY2VwdGVkKGZpbGUpICYmIF90aGlzMy5maWxlTWF0Y2hTaXplKGZpbGUpKSB7XG5cdCAgICAgICAgICBhY2NlcHRlZEZpbGVzLnB1c2goZmlsZSk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHJlamVjdGVkRmlsZXMucHVzaChmaWxlKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHRcblx0ICAgICAgaWYgKCFtdWx0aXBsZSkge1xuXHQgICAgICAgIC8vIGlmIG5vdCBpbiBtdWx0aSBtb2RlIGFkZCBhbnkgZXh0cmEgYWNjZXB0ZWQgZmlsZXMgdG8gcmVqZWN0ZWQuXG5cdCAgICAgICAgLy8gVGhpcyB3aWxsIGFsbG93IGVuZCB1c2VycyB0byBlYXNpbHkgaWdub3JlIGEgbXVsdGkgZmlsZSBkcm9wIGluIFwic2luZ2xlXCIgbW9kZS5cblx0ICAgICAgICByZWplY3RlZEZpbGVzLnB1c2guYXBwbHkocmVqZWN0ZWRGaWxlcywgX3RvQ29uc3VtYWJsZUFycmF5KGFjY2VwdGVkRmlsZXMuc3BsaWNlKDEpKSk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmIChvbkRyb3ApIHtcblx0ICAgICAgICBvbkRyb3AuY2FsbCh0aGlzLCBhY2NlcHRlZEZpbGVzLCByZWplY3RlZEZpbGVzLCBlKTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgaWYgKHJlamVjdGVkRmlsZXMubGVuZ3RoID4gMCAmJiBvbkRyb3BSZWplY3RlZCkge1xuXHQgICAgICAgIG9uRHJvcFJlamVjdGVkLmNhbGwodGhpcywgcmVqZWN0ZWRGaWxlcywgZSk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmIChhY2NlcHRlZEZpbGVzLmxlbmd0aCA+IDAgJiYgb25Ecm9wQWNjZXB0ZWQpIHtcblx0ICAgICAgICBvbkRyb3BBY2NlcHRlZC5jYWxsKHRoaXMsIGFjY2VwdGVkRmlsZXMsIGUpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBSZXNldCBkcmFnIHN0YXRlXG5cdCAgICAgIHRoaXMuc2V0U3RhdGUoe1xuXHQgICAgICAgIGlzRHJhZ0FjdGl2ZTogZmFsc2UsXG5cdCAgICAgICAgaXNEcmFnUmVqZWN0OiBmYWxzZSxcblx0ICAgICAgICBhY2NlcHRlZEZpbGVzOiBhY2NlcHRlZEZpbGVzLFxuXHQgICAgICAgIHJlamVjdGVkRmlsZXM6IHJlamVjdGVkRmlsZXNcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnb25DbGljaycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhlKSB7XG5cdCAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcblx0ICAgICAgICAgIG9uQ2xpY2sgPSBfcHJvcHMyLm9uQ2xpY2ssXG5cdCAgICAgICAgICBkaXNhYmxlQ2xpY2sgPSBfcHJvcHMyLmRpc2FibGVDbGljaztcblx0XG5cdCAgICAgIGlmICghZGlzYWJsZUNsaWNrKSB7XG5cdCAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0ICAgICAgICB0aGlzLm9wZW4oKTtcblx0ICAgICAgICBpZiAob25DbGljaykge1xuXHQgICAgICAgICAgb25DbGljay5jYWxsKHRoaXMsIGUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ29uRmlsZURpYWxvZ0NhbmNlbCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gb25GaWxlRGlhbG9nQ2FuY2VsKCkge1xuXHQgICAgICAvLyB0aW1lb3V0IHdpbGwgbm90IHJlY29nbml6ZSBjb250ZXh0IG9mIHRoaXMgbWV0aG9kXG5cdCAgICAgIHZhciBvbkZpbGVEaWFsb2dDYW5jZWwgPSB0aGlzLnByb3BzLm9uRmlsZURpYWxvZ0NhbmNlbDtcblx0ICAgICAgdmFyIGZpbGVJbnB1dEVsID0gdGhpcy5maWxlSW5wdXRFbDtcblx0ICAgICAgdmFyIGlzRmlsZURpYWxvZ0FjdGl2ZSA9IHRoaXMuaXNGaWxlRGlhbG9nQWN0aXZlO1xuXHQgICAgICAvLyBleGVjdXRlIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIG9uRmlsZURpYWxvZ0NhbmNlbCBpcyBkZWZpbmVkIGFuZCBGaWxlRGlhbG9nXG5cdCAgICAgIC8vIGlzIG9wZW5lZCBpbiB0aGUgYnJvd3NlclxuXHRcblx0ICAgICAgaWYgKG9uRmlsZURpYWxvZ0NhbmNlbCAmJiBpc0ZpbGVEaWFsb2dBY3RpdmUpIHtcblx0ICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgIC8vIFJldHVybnMgYW4gb2JqZWN0IGFzIEZpbGVMaXN0XG5cdCAgICAgICAgICB2YXIgRmlsZUxpc3QgPSBmaWxlSW5wdXRFbC5maWxlcztcblx0ICAgICAgICAgIGlmICghRmlsZUxpc3QubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIGlzRmlsZURpYWxvZ0FjdGl2ZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICBvbkZpbGVEaWFsb2dDYW5jZWwoKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9LCAzMDApO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnc2V0UmVmJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSZWYocmVmKSB7XG5cdCAgICAgIHRoaXMubm9kZSA9IHJlZjtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdmaWxlQWNjZXB0ZWQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGZpbGVBY2NlcHRlZChmaWxlKSB7XG5cdCAgICAgIC8vIEZpcmVmb3ggdmVyc2lvbnMgcHJpb3IgdG8gNTMgcmV0dXJuIGEgYm9ndXMgTUlNRSB0eXBlIGZvciBldmVyeSBmaWxlIGRyYWcsIHNvIGRyYWdvdmVycyB3aXRoXG5cdCAgICAgIC8vIHRoYXQgTUlNRSB0eXBlIHdpbGwgYWx3YXlzIGJlIGFjY2VwdGVkXG5cdCAgICAgIHJldHVybiBmaWxlLnR5cGUgPT09ICdhcHBsaWNhdGlvbi94LW1vei1maWxlJyB8fCAoMCwgX2F0dHJBY2NlcHQyLmRlZmF1bHQpKGZpbGUsIHRoaXMucHJvcHMuYWNjZXB0KTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdmaWxlTWF0Y2hTaXplJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBmaWxlTWF0Y2hTaXplKGZpbGUpIHtcblx0ICAgICAgcmV0dXJuIGZpbGUuc2l6ZSA8PSB0aGlzLnByb3BzLm1heFNpemUgJiYgZmlsZS5zaXplID49IHRoaXMucHJvcHMubWluU2l6ZTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdhbGxGaWxlc0FjY2VwdGVkJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBhbGxGaWxlc0FjY2VwdGVkKGZpbGVzKSB7XG5cdCAgICAgIHJldHVybiBmaWxlcy5ldmVyeSh0aGlzLmZpbGVBY2NlcHRlZCk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBPcGVuIHN5c3RlbSBmaWxlIHVwbG9hZCBkaWFsb2cuXG5cdCAgICAgKlxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdFxuXHQgIH0sIHtcblx0ICAgIGtleTogJ29wZW4nLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4oKSB7XG5cdCAgICAgIHRoaXMuaXNGaWxlRGlhbG9nQWN0aXZlID0gdHJ1ZTtcblx0ICAgICAgdGhpcy5maWxlSW5wdXRFbC52YWx1ZSA9IG51bGw7XG5cdCAgICAgIHRoaXMuZmlsZUlucHV0RWwuY2xpY2soKTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdyZW5kZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0ICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cdFxuXHQgICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG5cdCAgICAgICAgICBhY2NlcHQgPSBfcHJvcHMzLmFjY2VwdCxcblx0ICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9wcm9wczMuYWN0aXZlQ2xhc3NOYW1lLFxuXHQgICAgICAgICAgaW5wdXRQcm9wcyA9IF9wcm9wczMuaW5wdXRQcm9wcyxcblx0ICAgICAgICAgIG11bHRpcGxlID0gX3Byb3BzMy5tdWx0aXBsZSxcblx0ICAgICAgICAgIG5hbWUgPSBfcHJvcHMzLm5hbWUsXG5cdCAgICAgICAgICByZWplY3RDbGFzc05hbWUgPSBfcHJvcHMzLnJlamVjdENsYXNzTmFtZSxcblx0ICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMy5jaGlsZHJlbixcblx0ICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzMywgWydhY2NlcHQnLCAnYWN0aXZlQ2xhc3NOYW1lJywgJ2lucHV0UHJvcHMnLCAnbXVsdGlwbGUnLCAnbmFtZScsICdyZWplY3RDbGFzc05hbWUnLCAnY2hpbGRyZW4nXSk7XG5cdFxuXHQgICAgICB2YXIgYWN0aXZlU3R5bGUgPSByZXN0LmFjdGl2ZVN0eWxlLFxuXHQgICAgICAgICAgY2xhc3NOYW1lID0gcmVzdC5jbGFzc05hbWUsXG5cdCAgICAgICAgICByZWplY3RTdHlsZSA9IHJlc3QucmVqZWN0U3R5bGUsXG5cdCAgICAgICAgICBzdHlsZSA9IHJlc3Quc3R5bGUsXG5cdCAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhyZXN0LCBbJ2FjdGl2ZVN0eWxlJywgJ2NsYXNzTmFtZScsICdyZWplY3RTdHlsZScsICdzdHlsZSddKTtcblx0XG5cdCAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuXHQgICAgICAgICAgaXNEcmFnQWN0aXZlID0gX3N0YXRlLmlzRHJhZ0FjdGl2ZSxcblx0ICAgICAgICAgIGlzRHJhZ1JlamVjdCA9IF9zdGF0ZS5pc0RyYWdSZWplY3Q7XG5cdFxuXHRcblx0ICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8ICcnO1xuXHRcblx0ICAgICAgaWYgKGlzRHJhZ0FjdGl2ZSAmJiBhY3RpdmVDbGFzc05hbWUpIHtcblx0ICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgYWN0aXZlQ2xhc3NOYW1lO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChpc0RyYWdSZWplY3QgJiYgcmVqZWN0Q2xhc3NOYW1lKSB7XG5cdCAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHJlamVjdENsYXNzTmFtZTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgaWYgKCFjbGFzc05hbWUgJiYgIXN0eWxlICYmICFhY3RpdmVTdHlsZSAmJiAhcmVqZWN0U3R5bGUpIHtcblx0ICAgICAgICBzdHlsZSA9IHtcblx0ICAgICAgICAgIHdpZHRoOiAyMDAsXG5cdCAgICAgICAgICBoZWlnaHQ6IDIwMCxcblx0ICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxuXHQgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjNjY2Jyxcblx0ICAgICAgICAgIGJvcmRlclN0eWxlOiAnZGFzaGVkJyxcblx0ICAgICAgICAgIGJvcmRlclJhZGl1czogNVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgYWN0aXZlU3R5bGUgPSB7XG5cdCAgICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcblx0ICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzZjNicsXG5cdCAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJ1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgcmVqZWN0U3R5bGUgPSB7XG5cdCAgICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcblx0ICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2M2NicsXG5cdCAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJ1xuXHQgICAgICAgIH07XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBhcHBsaWVkU3R5bGUgPSB2b2lkIDA7XG5cdCAgICAgIGlmIChhY3RpdmVTdHlsZSAmJiBpc0RyYWdBY3RpdmUpIHtcblx0ICAgICAgICBhcHBsaWVkU3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIGFjdGl2ZVN0eWxlKTtcblx0ICAgICAgfSBlbHNlIGlmIChyZWplY3RTdHlsZSAmJiBpc0RyYWdSZWplY3QpIHtcblx0ICAgICAgICBhcHBsaWVkU3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHJlamVjdFN0eWxlKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBhcHBsaWVkU3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB2YXIgaW5wdXRBdHRyaWJ1dGVzID0ge1xuXHQgICAgICAgIGFjY2VwdDogYWNjZXB0LFxuXHQgICAgICAgIHR5cGU6ICdmaWxlJyxcblx0ICAgICAgICBzdHlsZTogeyBkaXNwbGF5OiAnbm9uZScgfSxcblx0ICAgICAgICBtdWx0aXBsZTogc3VwcG9ydE11bHRpcGxlICYmIG11bHRpcGxlLFxuXHQgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsKSB7XG5cdCAgICAgICAgICByZXR1cm4gX3RoaXM0LmZpbGVJbnB1dEVsID0gZWw7XG5cdCAgICAgICAgfSwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHQgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uRHJvcFxuXHQgICAgICB9O1xuXHRcblx0ICAgICAgaWYgKG5hbWUgJiYgbmFtZS5sZW5ndGgpIHtcblx0ICAgICAgICBpbnB1dEF0dHJpYnV0ZXMubmFtZSA9IG5hbWU7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIFJlbW92ZSBjdXN0b20gcHJvcGVydGllcyBiZWZvcmUgcGFzc2luZyB0aGVtIHRvIHRoZSB3cmFwcGVyIGRpdiBlbGVtZW50XG5cdCAgICAgIHZhciBjdXN0b21Qcm9wcyA9IFsnYWNjZXB0ZWRGaWxlcycsICdwcmV2ZW50RHJvcE9uRG9jdW1lbnQnLCAnZGlzYWJsZVByZXZpZXcnLCAnZGlzYWJsZUNsaWNrJywgJ29uRHJvcEFjY2VwdGVkJywgJ29uRHJvcFJlamVjdGVkJywgJ29uRmlsZURpYWxvZ0NhbmNlbCcsICdtYXhTaXplJywgJ21pblNpemUnXTtcblx0ICAgICAgdmFyIGRpdlByb3BzID0gX2V4dGVuZHMoe30sIHByb3BzKTtcblx0ICAgICAgY3VzdG9tUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuXHQgICAgICAgIHJldHVybiBkZWxldGUgZGl2UHJvcHNbcHJvcF07XG5cdCAgICAgIH0pO1xuXHRcblx0ICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgICdkaXYnLFxuXHQgICAgICAgIF9leHRlbmRzKHtcblx0ICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuXHQgICAgICAgICAgc3R5bGU6IGFwcGxpZWRTdHlsZVxuXHQgICAgICAgIH0sIGRpdlByb3BzIC8qIGV4cGFuZCB1c2VyIHByb3ZpZGVkIHByb3BzIGZpcnN0IHNvIGV2ZW50IGhhbmRsZXJzIGFyZSBuZXZlciBvdmVycmlkZGVuICovLCB7XG5cdCAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG5cdCAgICAgICAgICBvbkRyYWdTdGFydDogdGhpcy5vbkRyYWdTdGFydCxcblx0ICAgICAgICAgIG9uRHJhZ0VudGVyOiB0aGlzLm9uRHJhZ0VudGVyLFxuXHQgICAgICAgICAgb25EcmFnT3ZlcjogdGhpcy5vbkRyYWdPdmVyLFxuXHQgICAgICAgICAgb25EcmFnTGVhdmU6IHRoaXMub25EcmFnTGVhdmUsXG5cdCAgICAgICAgICBvbkRyb3A6IHRoaXMub25Ecm9wLFxuXHQgICAgICAgICAgcmVmOiB0aGlzLnNldFJlZlxuXHQgICAgICAgIH0pLFxuXHQgICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY2hpbGRyZW4pLFxuXHQgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHt9LCBpbnB1dFByb3BzIC8qIGV4cGFuZCB1c2VyIHByb3ZpZGVkIGlucHV0UHJvcHMgZmlyc3Qgc28gaW5wdXRBdHRyaWJ1dGVzIG92ZXJyaWRlIHRoZW0gKi8sIGlucHV0QXR0cmlidXRlcykpXG5cdCAgICAgICk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gRHJvcHpvbmU7XG5cdH0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cdFxuXHREcm9wem9uZS5wcm9wVHlwZXMgPSB7XG5cdCAgLyoqXG5cdCAgICogQWxsb3cgc3BlY2lmaWMgdHlwZXMgb2YgZmlsZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vb2tvbmV0L2F0dHItYWNjZXB0IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXHQgICAqIEtlZXAgaW4gbWluZCB0aGF0IG1pbWUgdHlwZSBkZXRlcm1pbmF0aW9uIGlzIG5vdCByZWxpYWJsZSBhY2Nyb3NzIHBsYXRmb3Jtcy4gQ1NWIGZpbGVzLFxuXHQgICAqIGZvciBleGFtcGxlLCBhcmUgcmVwb3J0ZWQgYXMgdGV4dC9wbGFpbiB1bmRlciBtYWNPUyBidXQgYXMgYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsIHVuZGVyXG5cdCAgICogV2luZG93cy4gSW4gc29tZSBjYXNlcyB0aGVyZSBtaWdodCBub3QgYmUgYSBtaW1lIHR5cGUgc2V0IGF0IGFsbC5cblx0ICAgKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9va29uZXQvcmVhY3QtZHJvcHpvbmUvaXNzdWVzLzI3NlxuXHQgICAqL1xuXHQgIGFjY2VwdDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG5cdFxuXHQgIC8qKlxuXHQgICAqIENvbnRlbnRzIG9mIHRoZSBkcm9wem9uZVxuXHQgICAqL1xuXHQgIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNdKSxcblx0XG5cdCAgLyoqXG5cdCAgICogRGlzYWxsb3cgY2xpY2tpbmcgb24gdGhlIGRyb3B6b25lIGNvbnRhaW5lciB0byBvcGVuIGZpbGUgZGlhbG9nXG5cdCAgICovXG5cdCAgZGlzYWJsZUNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEVuYWJsZS9kaXNhYmxlIHByZXZpZXcgZ2VuZXJhdGlvblxuXHQgICAqL1xuXHQgIGRpc2FibGVQcmV2aWV3OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG5cdFxuXHQgIC8qKlxuXHQgICAqIElmIGZhbHNlLCBhbGxvdyBkcm9wcGVkIGl0ZW1zIHRvIHRha2Ugb3ZlciB0aGUgY3VycmVudCBicm93c2VyIHdpbmRvd1xuXHQgICAqL1xuXHQgIHByZXZlbnREcm9wT25Eb2N1bWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuXHRcblx0ICAvKipcblx0ICAgKiBQYXNzIGFkZGl0aW9uYWwgYXR0cmlidXRlcyB0byB0aGUgYDxpbnB1dCB0eXBlPVwiZmlsZVwiLz5gIHRhZ1xuXHQgICAqL1xuXHQgIGlucHV0UHJvcHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuXHRcblx0ICAvKipcblx0ICAgKiBBbGxvdyBkcm9wcGluZyBtdWx0aXBsZSBmaWxlc1xuXHQgICAqL1xuXHQgIG11bHRpcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG5cdFxuXHQgIC8qKlxuXHQgICAqIGBuYW1lYCBhdHRyaWJ1dGUgZm9yIHRoZSBpbnB1dCB0YWdcblx0ICAgKi9cblx0ICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcblx0XG5cdCAgLyoqXG5cdCAgICogTWF4aW11bSBmaWxlIHNpemVcblx0ICAgKi9cblx0ICBtYXhTaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcblx0XG5cdCAgLyoqXG5cdCAgICogTWluaW11bSBmaWxlIHNpemVcblx0ICAgKi9cblx0ICBtaW5TaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcblx0XG5cdCAgLyoqXG5cdCAgICogY2xhc3NOYW1lXG5cdCAgICovXG5cdCAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcblx0XG5cdCAgLyoqXG5cdCAgICogY2xhc3NOYW1lIGZvciBhY2NlcHRlZCBzdGF0ZVxuXHQgICAqL1xuXHQgIGFjdGl2ZUNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG5cdFxuXHQgIC8qKlxuXHQgICAqIGNsYXNzTmFtZSBmb3IgcmVqZWN0ZWQgc3RhdGVcblx0ICAgKi9cblx0ICByZWplY3RDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuXHRcblx0ICAvKipcblx0ICAgKiBDU1Mgc3R5bGVzIHRvIGFwcGx5XG5cdCAgICovXG5cdCAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuXHRcblx0ICAvKipcblx0ICAgKiBDU1Mgc3R5bGVzIHRvIGFwcGx5IHdoZW4gZHJvcCB3aWxsIGJlIGFjY2VwdGVkXG5cdCAgICovXG5cdCAgYWN0aXZlU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuXHRcblx0ICAvKipcblx0ICAgKiBDU1Mgc3R5bGVzIHRvIGFwcGx5IHdoZW4gZHJvcCB3aWxsIGJlIHJlamVjdGVkXG5cdCAgICovXG5cdCAgcmVqZWN0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuXHRcblx0ICAvKipcblx0ICAgKiBvbkNsaWNrIGNhbGxiYWNrXG5cdCAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICAgKi9cblx0ICBvbkNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdFxuXHQgIC8qKlxuXHQgICAqIG9uRHJvcCBjYWxsYmFja1xuXHQgICAqL1xuXHQgIG9uRHJvcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXHRcblx0ICAvKipcblx0ICAgKiBvbkRyb3BBY2NlcHRlZCBjYWxsYmFja1xuXHQgICAqL1xuXHQgIG9uRHJvcEFjY2VwdGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdFxuXHQgIC8qKlxuXHQgICAqIG9uRHJvcFJlamVjdGVkIGNhbGxiYWNrXG5cdCAgICovXG5cdCAgb25Ecm9wUmVqZWN0ZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcblx0XG5cdCAgLyoqXG5cdCAgICogb25EcmFnU3RhcnQgY2FsbGJhY2tcblx0ICAgKi9cblx0ICBvbkRyYWdTdGFydDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXHRcblx0ICAvKipcblx0ICAgKiBvbkRyYWdFbnRlciBjYWxsYmFja1xuXHQgICAqL1xuXHQgIG9uRHJhZ0VudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdFxuXHQgIC8qKlxuXHQgICAqIG9uRHJhZ092ZXIgY2FsbGJhY2tcblx0ICAgKi9cblx0ICBvbkRyYWdPdmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdFxuXHQgIC8qKlxuXHQgICAqIG9uRHJhZ0xlYXZlIGNhbGxiYWNrXG5cdCAgICovXG5cdCAgb25EcmFnTGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcblx0XG5cdCAgLyoqXG5cdCAgICogUHJvdmlkZSBhIGNhbGxiYWNrIG9uIGNsaWNraW5nIHRoZSBjYW5jZWwgYnV0dG9uIG9mIHRoZSBmaWxlIGRpYWxvZ1xuXHQgICAqL1xuXHQgIG9uRmlsZURpYWxvZ0NhbmNlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG5cdH07XG5cdFxuXHREcm9wem9uZS5kZWZhdWx0UHJvcHMgPSB7XG5cdCAgcHJldmVudERyb3BPbkRvY3VtZW50OiB0cnVlLFxuXHQgIGRpc2FibGVQcmV2aWV3OiBmYWxzZSxcblx0ICBkaXNhYmxlQ2xpY2s6IGZhbHNlLFxuXHQgIG11bHRpcGxlOiB0cnVlLFxuXHQgIG1heFNpemU6IEluZmluaXR5LFxuXHQgIG1pblNpemU6IDBcblx0fTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IERyb3B6b25lO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18oMSkpKVxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblx0dmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXHRcblx0Ly8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG5cdC8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuXHQvLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG5cdC8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cdFxuXHR2YXIgY2FjaGVkU2V0VGltZW91dDtcblx0dmFyIGNhY2hlZENsZWFyVGltZW91dDtcblx0XG5cdGZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcblx0fVxuXHRmdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG5cdH1cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIHRyeSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuXHQgICAgICAgIH1cblx0ICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcblx0ICAgIH1cblx0ICAgIHRyeSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG5cdCAgICAgICAgfVxuXHQgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG5cdCAgICB9XG5cdH0gKCkpXG5cdGZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG5cdCAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuXHQgICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuXHQgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG5cdCAgICB9XG5cdCAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuXHQgICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG5cdCAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG5cdCAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcblx0ICAgIH1cblx0ICAgIHRyeSB7XG5cdCAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuXHQgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG5cdCAgICB9IGNhdGNoKGUpe1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuXHQgICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG5cdCAgICAgICAgfSBjYXRjaChlKXtcblx0ICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3Jcblx0ICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0XG5cdFxuXHR9XG5cdGZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcblx0ICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuXHQgICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuXHQgICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcblx0ICAgIH1cblx0ICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcblx0ICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuXHQgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcblx0ICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG5cdCAgICB9XG5cdCAgICB0cnkge1xuXHQgICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3Ncblx0ICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG5cdCAgICB9IGNhdGNoIChlKXtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG5cdCAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuXHQgICAgICAgIH0gY2F0Y2ggKGUpe1xuXHQgICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cblx0ICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuXHQgICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdFxuXHRcblx0XG5cdH1cblx0dmFyIHF1ZXVlID0gW107XG5cdHZhciBkcmFpbmluZyA9IGZhbHNlO1xuXHR2YXIgY3VycmVudFF1ZXVlO1xuXHR2YXIgcXVldWVJbmRleCA9IC0xO1xuXHRcblx0ZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuXHQgICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgZHJhaW5pbmcgPSBmYWxzZTtcblx0ICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG5cdCAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuXHQgICAgfVxuXHQgICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuXHQgICAgICAgIGRyYWluUXVldWUoKTtcblx0ICAgIH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcblx0ICAgIGlmIChkcmFpbmluZykge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuXHQgICAgZHJhaW5pbmcgPSB0cnVlO1xuXHRcblx0ICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG5cdCAgICB3aGlsZShsZW4pIHtcblx0ICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcblx0ICAgICAgICBxdWV1ZSA9IFtdO1xuXHQgICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcblx0ICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuXHQgICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcblx0ICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG5cdCAgICB9XG5cdCAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuXHQgICAgZHJhaW5pbmcgPSBmYWxzZTtcblx0ICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0fVxuXHRcblx0cHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcblx0ICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcblx0ICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG5cdCAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuXHQgICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG5cdCAgICB9XG5cdH07XG5cdFxuXHQvLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5cdGZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuXHQgICAgdGhpcy5mdW4gPSBmdW47XG5cdCAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG5cdH1cblx0SXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuXHQgICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG5cdH07XG5cdHByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5cdHByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5cdHByb2Nlc3MuZW52ID0ge307XG5cdHByb2Nlc3MuYXJndiA9IFtdO1xuXHRwcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcblx0cHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXHRcblx0ZnVuY3Rpb24gbm9vcCgpIHt9XG5cdFxuXHRwcm9jZXNzLm9uID0gbm9vcDtcblx0cHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5cdHByb2Nlc3Mub25jZSA9IG5vb3A7XG5cdHByb2Nlc3Mub2ZmID0gbm9vcDtcblx0cHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5cdHByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcblx0cHJvY2Vzcy5lbWl0ID0gbm9vcDtcblx0XG5cdHByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG5cdH07XG5cdFxuXHRwcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xuXHRwcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcblx0fTtcblx0cHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKGUpe2lmKHJbZV0pcmV0dXJuIHJbZV0uZXhwb3J0czt2YXIgbz1yW2VdPXtleHBvcnRzOnt9LGlkOmUsbG9hZGVkOiExfTtyZXR1cm4gdFtlXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmxvYWRlZD0hMCxvLmV4cG9ydHN9dmFyIHI9e307cmV0dXJuIG4ubT10LG4uYz1yLG4ucD1cIlwiLG4oMCl9KFtmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7bi5fX2VzTW9kdWxlPSEwLHIoOCkscig5KSxuW1wiZGVmYXVsdFwiXT1mdW5jdGlvbih0LG4pe2lmKHQmJm4pe3ZhciByPWZ1bmN0aW9uKCl7dmFyIHI9QXJyYXkuaXNBcnJheShuKT9uOm4uc3BsaXQoXCIsXCIpLGU9dC5uYW1lfHxcIlwiLG89dC50eXBlfHxcIlwiLGk9by5yZXBsYWNlKC9cXC8uKiQvLFwiXCIpO3JldHVybnt2OnIuc29tZShmdW5jdGlvbih0KXt2YXIgbj10LnRyaW0oKTtyZXR1cm5cIi5cIj09PW4uY2hhckF0KDApP2UudG9Mb3dlckNhc2UoKS5lbmRzV2l0aChuLnRvTG93ZXJDYXNlKCkpOi9cXC9cXCokLy50ZXN0KG4pP2k9PT1uLnJlcGxhY2UoL1xcLy4qJC8sXCJcIik6bz09PW59KX19KCk7aWYoXCJvYmplY3RcIj09dHlwZW9mIHIpcmV0dXJuIHIudn1yZXR1cm4hMH0sdC5leHBvcnRzPW5bXCJkZWZhdWx0XCJdfSxmdW5jdGlvbih0LG4pe3ZhciByPXQuZXhwb3J0cz17dmVyc2lvbjpcIjEuMi4yXCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9cil9LGZ1bmN0aW9uKHQsbil7dmFyIHI9dC5leHBvcnRzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5NYXRoPT1NYXRoP3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5NYXRoPT1NYXRoP3NlbGY6RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1wibnVtYmVyXCI9PXR5cGVvZiBfX2cmJihfX2c9cil9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIpLG89cigxKSxpPXIoNCksdT1yKDE5KSxjPVwicHJvdG90eXBlXCIsZj1mdW5jdGlvbih0LG4pe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKX19LHM9ZnVuY3Rpb24odCxuLHIpe3ZhciBhLHAsbCx5LGQ9dCZzLkcsaD10JnMuUCx2PWQ/ZTp0JnMuUz9lW25dfHwoZVtuXT17fSk6KGVbbl18fHt9KVtjXSx4PWQ/bzpvW25dfHwob1tuXT17fSk7ZCYmKHI9bik7Zm9yKGEgaW4gcilwPSEodCZzLkYpJiZ2JiZhIGluIHYsbD0ocD92OnIpW2FdLHk9dCZzLkImJnA/ZihsLGUpOmgmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGw/ZihGdW5jdGlvbi5jYWxsLGwpOmwsdiYmIXAmJnUodixhLGwpLHhbYV0hPWwmJmkoeCxhLHkpLGgmJigoeFtjXXx8KHhbY109e30pKVthXT1sKX07ZS5jb3JlPW8scy5GPTEscy5HPTIscy5TPTQscy5QPTgscy5CPTE2LHMuVz0zMix0LmV4cG9ydHM9c30sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNSksbz1yKDE4KTt0LmV4cG9ydHM9cigyMik/ZnVuY3Rpb24odCxuLHIpe3JldHVybiBlLnNldERlc2ModCxuLG8oMSxyKSl9OmZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdFtuXT1yLHR9fSxmdW5jdGlvbih0LG4pe3ZhciByPU9iamVjdDt0LmV4cG9ydHM9e2NyZWF0ZTpyLmNyZWF0ZSxnZXRQcm90bzpyLmdldFByb3RvdHlwZU9mLGlzRW51bTp7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxnZXREZXNjOnIuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLHNldERlc2M6ci5kZWZpbmVQcm9wZXJ0eSxzZXREZXNjczpyLmRlZmluZVByb3BlcnRpZXMsZ2V0S2V5czpyLmtleXMsZ2V0TmFtZXM6ci5nZXRPd25Qcm9wZXJ0eU5hbWVzLGdldFN5bWJvbHM6ci5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsZWFjaDpbXS5mb3JFYWNofX0sZnVuY3Rpb24odCxuKXt2YXIgcj0wLGU9TWF0aC5yYW5kb20oKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJTeW1ib2woXCIuY29uY2F0KHZvaWQgMD09PXQ/XCJcIjp0LFwiKV9cIiwoKytyK2UpLnRvU3RyaW5nKDM2KSl9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyMCkoXCJ3a3NcIiksbz1yKDIpLlN5bWJvbDt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGVbdF18fChlW3RdPW8mJm9bdF18fChvfHxyKDYpKShcIlN5bWJvbC5cIit0KSl9fSxmdW5jdGlvbih0LG4scil7cigyNiksdC5leHBvcnRzPXIoMSkuQXJyYXkuc29tZX0sZnVuY3Rpb24odCxuLHIpe3IoMjUpLHQuZXhwb3J0cz1yKDEpLlN0cmluZy5lbmRzV2l0aH0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBmdW5jdGlvbiFcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4pe3ZhciByPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gci5jYWxsKHQpLnNsaWNlKDgsLTEpfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMTApO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4scil7aWYoZSh0KSx2b2lkIDA9PT1uKXJldHVybiB0O3N3aXRjaChyKXtjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiB0LmNhbGwobixyKX07Y2FzZSAyOnJldHVybiBmdW5jdGlvbihyLGUpe3JldHVybiB0LmNhbGwobixyLGUpfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKHIsZSxvKXtyZXR1cm4gdC5jYWxsKG4scixlLG8pfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdC5hcHBseShuLGFyZ3VtZW50cyl9fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYodm9pZCAwPT10KXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIit0KTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsbixyKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49Ly4vO3RyeXtcIi8uL1wiW3RdKG4pfWNhdGNoKGUpe3RyeXtyZXR1cm4gbltyKDcpKFwibWF0Y2hcIildPSExLCFcIi8uL1wiW3RdKG4pfWNhdGNoKG8pe319cmV0dXJuITB9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt0cnl7cmV0dXJuISF0KCl9Y2F0Y2gobil7cmV0dXJuITB9fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQ/bnVsbCE9PXQ6XCJmdW5jdGlvblwiPT10eXBlb2YgdH19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDE2KSxvPXIoMTEpLGk9cig3KShcIm1hdGNoXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbjtyZXR1cm4gZSh0KSYmKHZvaWQgMCE9PShuPXRbaV0pPyEhbjpcIlJlZ0V4cFwiPT1vKHQpKX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJue2VudW1lcmFibGU6ISgxJnQpLGNvbmZpZ3VyYWJsZTohKDImdCksd3JpdGFibGU6ISg0JnQpLHZhbHVlOm59fX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMiksbz1yKDQpLGk9cig2KShcInNyY1wiKSx1PVwidG9TdHJpbmdcIixjPUZ1bmN0aW9uW3VdLGY9KFwiXCIrYykuc3BsaXQodSk7cigxKS5pbnNwZWN0U291cmNlPWZ1bmN0aW9uKHQpe3JldHVybiBjLmNhbGwodCl9LCh0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLHIsdSl7XCJmdW5jdGlvblwiPT10eXBlb2YgciYmKG8ocixpLHRbbl0/XCJcIit0W25dOmYuam9pbihTdHJpbmcobikpKSxcIm5hbWVcImluIHJ8fChyLm5hbWU9bikpLHQ9PT1lP3Rbbl09cjoodXx8ZGVsZXRlIHRbbl0sbyh0LG4scikpfSkoRnVuY3Rpb24ucHJvdG90eXBlLHUsZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzJiZ0aGlzW2ldfHxjLmNhbGwodGhpcyl9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMiksbz1cIl9fY29yZS1qc19zaGFyZWRfX1wiLGk9ZVtvXXx8KGVbb109e30pO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaVt0XXx8KGlbdF09e30pfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMTcpLG89cigxMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyKXtpZihlKG4pKXRocm93IFR5cGVFcnJvcihcIlN0cmluZyNcIityK1wiIGRvZXNuJ3QgYWNjZXB0IHJlZ2V4IVwiKTtyZXR1cm4gU3RyaW5nKG8odCkpfX0sZnVuY3Rpb24odCxuLHIpe3QuZXhwb3J0cz0hcigxNSkoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGZ1bmN0aW9uKHQsbil7dmFyIHI9TWF0aC5jZWlsLGU9TWF0aC5mbG9vcjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGlzTmFOKHQ9K3QpPzA6KHQ+MD9lOnIpKHQpfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMjMpLG89TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB0PjA/byhlKHQpLDkwMDcxOTkyNTQ3NDA5OTEpOjB9fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigzKSxvPXIoMjQpLGk9cigyMSksdT1cImVuZHNXaXRoXCIsYz1cIlwiW3VdO2UoZS5QK2UuRipyKDE0KSh1KSxcIlN0cmluZ1wiLHtlbmRzV2l0aDpmdW5jdGlvbih0KXt2YXIgbj1pKHRoaXMsdCx1KSxyPWFyZ3VtZW50cyxlPXIubGVuZ3RoPjE/clsxXTp2b2lkIDAsZj1vKG4ubGVuZ3RoKSxzPXZvaWQgMD09PWU/ZjpNYXRoLm1pbihvKGUpLGYpLGE9U3RyaW5nKHQpO3JldHVybiBjP2MuY2FsbChuLGEscyk6bi5zbGljZShzLWEubGVuZ3RoLHMpPT09YX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNSksbz1yKDMpLGk9cigxKS5BcnJheXx8QXJyYXksdT17fSxjPWZ1bmN0aW9uKHQsbil7ZS5lYWNoLmNhbGwodC5zcGxpdChcIixcIiksZnVuY3Rpb24odCl7dm9pZCAwPT1uJiZ0IGluIGk/dVt0XT1pW3RdOnQgaW5bXSYmKHVbdF09cigxMikoRnVuY3Rpb24uY2FsbCxbXVt0XSxuKSl9KX07YyhcInBvcCxyZXZlcnNlLHNoaWZ0LGtleXMsdmFsdWVzLGVudHJpZXNcIiwxKSxjKFwiaW5kZXhPZixldmVyeSxzb21lLGZvckVhY2gsbWFwLGZpbHRlcixmaW5kLGZpbmRJbmRleCxpbmNsdWRlc1wiLDMpLGMoXCJqb2luLHNsaWNlLGNvbmNhdCxwdXNoLHNwbGljZSx1bnNoaWZ0LHNvcnQsbGFzdEluZGV4T2YscmVkdWNlLHJlZHVjZVJpZ2h0LGNvcHlXaXRoaW4sZmlsbFwiKSxvKG8uUyxcIkFycmF5XCIsdSl9XSk7XG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IGdldERhdGFUcmFuc2ZlckZpbGVzO1xuXHRmdW5jdGlvbiBnZXREYXRhVHJhbnNmZXJGaWxlcyhldmVudCkge1xuXHQgIHZhciBkYXRhVHJhbnNmZXJJdGVtc0xpc3QgPSBbXTtcblx0ICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG5cdCAgICB2YXIgZHQgPSBldmVudC5kYXRhVHJhbnNmZXI7XG5cdCAgICBpZiAoZHQuZmlsZXMgJiYgZHQuZmlsZXMubGVuZ3RoKSB7XG5cdCAgICAgIGRhdGFUcmFuc2Zlckl0ZW1zTGlzdCA9IGR0LmZpbGVzO1xuXHQgICAgfSBlbHNlIGlmIChkdC5pdGVtcyAmJiBkdC5pdGVtcy5sZW5ndGgpIHtcblx0ICAgICAgLy8gRHVyaW5nIHRoZSBkcmFnIGV2ZW4gdGhlIGRhdGFUcmFuc2Zlci5maWxlcyBpcyBudWxsXG5cdCAgICAgIC8vIGJ1dCBDaHJvbWUgaW1wbGVtZW50cyBzb21lIGRyYWcgc3RvcmUsIHdoaWNoIGlzIGFjY2VzaWJsZSB2aWEgZGF0YVRyYW5zZmVyLml0ZW1zXG5cdCAgICAgIGRhdGFUcmFuc2Zlckl0ZW1zTGlzdCA9IGR0Lml0ZW1zO1xuXHQgICAgfVxuXHQgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5maWxlcykge1xuXHQgICAgZGF0YVRyYW5zZmVySXRlbXNMaXN0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xuXHQgIH1cblx0ICAvLyBDb252ZXJ0IGZyb20gRGF0YVRyYW5zZmVySXRlbXNMaXN0IHRvIHRoZSBuYXRpdmUgQXJyYXlcblx0ICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZGF0YVRyYW5zZmVySXRlbXNMaXN0KTtcblx0fVxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnZXhlbnYnKTtcbnZhciBNb2RhbFBvcnRhbCA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkocmVxdWlyZSgnLi9Nb2RhbFBvcnRhbCcpKTtcbnZhciBhcmlhQXBwSGlkZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2FyaWFBcHBIaWRlcicpO1xudmFyIGVsZW1lbnRDbGFzcyA9IHJlcXVpcmUoJ2VsZW1lbnQtY2xhc3MnKTtcbnZhciByZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lciA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIikudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI7XG52YXIgQXNzaWduID0gcmVxdWlyZSgnbG9kYXNoLmFzc2lnbicpO1xuXG52YXIgU2FmZUhUTUxFbGVtZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gd2luZG93LkhUTUxFbGVtZW50IDoge307XG52YXIgQXBwRWxlbWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IGRvY3VtZW50LmJvZHkgOiB7YXBwZW5kQ2hpbGQ6IGZ1bmN0aW9uKCkge319O1xuXG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KHBhcmVudFNlbGVjdG9yKSB7XG4gIHJldHVybiBwYXJlbnRTZWxlY3RvcigpO1xufVxuXG52YXIgTW9kYWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdNb2RhbCcsXG4gIHN0YXRpY3M6IHtcbiAgICBzZXRBcHBFbGVtZW50OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIEFwcEVsZW1lbnQgPSBhcmlhQXBwSGlkZXIuc2V0RWxlbWVudChlbGVtZW50KTtcbiAgICB9LFxuICAgIGluamVjdENTUzogZnVuY3Rpb24oKSB7XG4gICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlZcbiAgICAgICAgJiYgY29uc29sZS53YXJuKCdSZWFjdC1Nb2RhbDogaW5qZWN0Q1NTIGhhcyBiZWVuIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnYW5kIG5vIGxvbmdlciBoYXMgYW55IGVmZmVjdC4gSXQgd2lsbCBiZSByZW1vdmVkIGluIGEgbGF0ZXIgdmVyc2lvbicpO1xuICAgIH1cbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBpc09wZW46IFJlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgc3R5bGU6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBjb250ZW50OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgICAgb3ZlcmxheTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIH0pLFxuICAgIHBvcnRhbENsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhcHBFbGVtZW50OiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihTYWZlSFRNTEVsZW1lbnQpLFxuICAgIG9uQWZ0ZXJPcGVuOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlcXVlc3RDbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xvc2VUaW1lb3V0TVM6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgYXJpYUhpZGVBcHA6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHBhcmVudFNlbGVjdG9yOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICByb2xlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbnRlbnRMYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICBwb3J0YWxDbGFzc05hbWU6ICdSZWFjdE1vZGFsUG9ydGFsJyxcbiAgICAgIGFyaWFIaWRlQXBwOiB0cnVlLFxuICAgICAgY2xvc2VUaW1lb3V0TVM6IDAsXG4gICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiB0cnVlLFxuICAgICAgcGFyZW50U2VsZWN0b3I6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LmJvZHk7IH1cbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLm5vZGUuY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5wb3J0YWxDbGFzc05hbWU7XG5cbiAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudCh0aGlzLnByb3BzLnBhcmVudFNlbGVjdG9yKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICB0aGlzLnJlbmRlclBvcnRhbCh0aGlzLnByb3BzKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbihuZXdQcm9wcykge1xuICAgIHZhciBjdXJyZW50UGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudCh0aGlzLnByb3BzLnBhcmVudFNlbGVjdG9yKTtcbiAgICB2YXIgbmV3UGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudChuZXdQcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG5cbiAgICBpZihuZXdQYXJlbnQgIT09IGN1cnJlbnRQYXJlbnQpIHtcbiAgICAgIGN1cnJlbnRQYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgIG5ld1BhcmVudC5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyUG9ydGFsKG5ld1Byb3BzKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYXJpYUhpZGVBcHApIHtcbiAgICAgIGFyaWFBcHBIaWRlci5zaG93KHRoaXMucHJvcHMuYXBwRWxlbWVudCk7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0gdGhpcy5wb3J0YWwuc3RhdGU7XG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgdmFyIGNsb3Nlc0F0ID0gc3RhdGUuaXNPcGVuICYmIHRoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVNcbiAgICAgICYmIChzdGF0ZS5jbG9zZXNBdFxuICAgICAgICB8fCBub3cgKyB0aGlzLnByb3BzLmNsb3NlVGltZW91dE1TKTtcblxuICAgIGlmIChjbG9zZXNBdCkge1xuICAgICAgaWYgKCFzdGF0ZS5iZWZvcmVDbG9zZSkge1xuICAgICAgICB0aGlzLnBvcnRhbC5jbG9zZVdpdGhUaW1lb3V0KCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRoYXQucmVtb3ZlUG9ydGFsKCk7IH0sIGNsb3Nlc0F0IC0gbm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVQb3J0YWwoKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVtb3ZlUG9ydGFsOiBmdW5jdGlvbigpIHtcbiAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMubm9kZSk7XG4gICAgdmFyIHBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQodGhpcy5wcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gICAgZWxlbWVudENsYXNzKGRvY3VtZW50LmJvZHkpLnJlbW92ZSgnUmVhY3RNb2RhbF9fQm9keS0tb3BlbicpO1xuICB9LFxuXG4gIHJlbmRlclBvcnRhbDogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuaXNPcGVuKSB7XG4gICAgICBlbGVtZW50Q2xhc3MoZG9jdW1lbnQuYm9keSkuYWRkKCdSZWFjdE1vZGFsX19Cb2R5LS1vcGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRDbGFzcyhkb2N1bWVudC5ib2R5KS5yZW1vdmUoJ1JlYWN0TW9kYWxfX0JvZHktLW9wZW4nKTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuYXJpYUhpZGVBcHApIHtcbiAgICAgIGFyaWFBcHBIaWRlci50b2dnbGUocHJvcHMuaXNPcGVuLCBwcm9wcy5hcHBFbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLnBvcnRhbCA9IHJlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKHRoaXMsIE1vZGFsUG9ydGFsKEFzc2lnbih7fSwgcHJvcHMsIHtkZWZhdWx0U3R5bGVzOiBNb2RhbC5kZWZhdWx0U3R5bGVzfSkpLCB0aGlzLm5vZGUpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBSZWFjdC5ET00ubm9zY3JpcHQoKTtcbiAgfVxufSk7XG5cbk1vZGFsLmRlZmF1bHRTdHlsZXMgPSB7XG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbiAgICAgICAgOiAnZml4ZWQnLFxuICAgIHRvcCAgICAgICAgICAgICA6IDAsXG4gICAgbGVmdCAgICAgICAgICAgIDogMCxcbiAgICByaWdodCAgICAgICAgICAgOiAwLFxuICAgIGJvdHRvbSAgICAgICAgICA6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSknXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBwb3NpdGlvbiAgICAgICAgICAgICAgICA6ICdhYnNvbHV0ZScsXG4gICAgdG9wICAgICAgICAgICAgICAgICAgICAgOiAnNDBweCcsXG4gICAgbGVmdCAgICAgICAgICAgICAgICAgICAgOiAnNDBweCcsXG4gICAgcmlnaHQgICAgICAgICAgICAgICAgICAgOiAnNDBweCcsXG4gICAgYm90dG9tICAgICAgICAgICAgICAgICAgOiAnNDBweCcsXG4gICAgYm9yZGVyICAgICAgICAgICAgICAgICAgOiAnMXB4IHNvbGlkICNjY2MnLFxuICAgIGJhY2tncm91bmQgICAgICAgICAgICAgIDogJyNmZmYnLFxuICAgIG92ZXJmbG93ICAgICAgICAgICAgICAgIDogJ2F1dG8nLFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nIDogJ3RvdWNoJyxcbiAgICBib3JkZXJSYWRpdXMgICAgICAgICAgICA6ICc0cHgnLFxuICAgIG91dGxpbmUgICAgICAgICAgICAgICAgIDogJ25vbmUnLFxuICAgIHBhZGRpbmcgICAgICAgICAgICAgICAgIDogJzIwcHgnXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbFxuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBkaXYgPSBSZWFjdC5ET00uZGl2O1xudmFyIGZvY3VzTWFuYWdlciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvZm9jdXNNYW5hZ2VyJyk7XG52YXIgc2NvcGVUYWIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3Njb3BlVGFiJyk7XG52YXIgQXNzaWduID0gcmVxdWlyZSgnbG9kYXNoLmFzc2lnbicpO1xuXG4vLyBzbyB0aGF0IG91ciBDU1MgaXMgc3RhdGljYWxseSBhbmFseXphYmxlXG52YXIgQ0xBU1NfTkFNRVMgPSB7XG4gIG92ZXJsYXk6IHtcbiAgICBiYXNlOiAnUmVhY3RNb2RhbF9fT3ZlcmxheScsXG4gICAgYWZ0ZXJPcGVuOiAnUmVhY3RNb2RhbF9fT3ZlcmxheS0tYWZ0ZXItb3BlbicsXG4gICAgYmVmb3JlQ2xvc2U6ICdSZWFjdE1vZGFsX19PdmVybGF5LS1iZWZvcmUtY2xvc2UnXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBiYXNlOiAnUmVhY3RNb2RhbF9fQ29udGVudCcsXG4gICAgYWZ0ZXJPcGVuOiAnUmVhY3RNb2RhbF9fQ29udGVudC0tYWZ0ZXItb3BlbicsXG4gICAgYmVmb3JlQ2xvc2U6ICdSZWFjdE1vZGFsX19Db250ZW50LS1iZWZvcmUtY2xvc2UnXG4gIH1cbn07XG5cbnZhciBNb2RhbFBvcnRhbCA9IG1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnTW9kYWxQb3J0YWwnLFxuICBzaG91bGRDbG9zZTogbnVsbCxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBvdmVybGF5OiB7fSxcbiAgICAgICAgY29udGVudDoge31cbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFmdGVyT3BlbjogZmFsc2UsXG4gICAgICBiZWZvcmVDbG9zZTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAvLyBGb2N1cyBuZWVkcyB0byBiZSBzZXQgd2hlbiBtb3VudGluZyBhbmQgYWxyZWFkeSBvcGVuXG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldEZvY3VzQWZ0ZXJSZW5kZXIodHJ1ZSk7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlVGltZXIpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKG5ld1Byb3BzKSB7XG4gICAgLy8gRm9jdXMgb25seSBuZWVkcyB0byBiZSBzZXQgb25jZSB3aGVuIHRoZSBtb2RhbCBpcyBiZWluZyBvcGVuZWRcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuICYmIG5ld1Byb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRGb2N1c0FmdGVyUmVuZGVyKHRydWUpO1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiAhbmV3UHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmZvY3VzQWZ0ZXJSZW5kZXIpIHtcbiAgICAgIHRoaXMuZm9jdXNDb250ZW50KCk7XG4gICAgICB0aGlzLnNldEZvY3VzQWZ0ZXJSZW5kZXIoZmFsc2UpO1xuICAgIH1cbiAgfSxcblxuICBzZXRGb2N1c0FmdGVyUmVuZGVyOiBmdW5jdGlvbiAoZm9jdXMpIHtcbiAgICB0aGlzLmZvY3VzQWZ0ZXJSZW5kZXIgPSBmb2N1cztcbiAgfSxcblxuICBhZnRlckNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgZm9jdXNNYW5hZ2VyLnJldHVybkZvY3VzKCk7XG4gICAgZm9jdXNNYW5hZ2VyLnRlYXJkb3duU2NvcGVkRm9jdXMoKTtcbiAgfSxcblxuICBvcGVuOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYWZ0ZXJPcGVuICYmIHRoaXMuc3RhdGUuYmVmb3JlQ2xvc2UpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlVGltZXIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJlZm9yZUNsb3NlOiBmYWxzZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9jdXNNYW5hZ2VyLnNldHVwU2NvcGVkRm9jdXModGhpcy5ub2RlKTtcbiAgICAgIGZvY3VzTWFuYWdlci5tYXJrRm9yRm9jdXNMYXRlcigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNPcGVuOiB0cnVlfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FmdGVyT3BlbjogdHJ1ZX0pO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiB0aGlzLnByb3BzLm9uQWZ0ZXJPcGVuKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkFmdGVyT3BlbigpO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbiAgfSxcblxuICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMgPiAwKVxuICAgICAgdGhpcy5jbG9zZVdpdGhUaW1lb3V0KCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5jbG9zZVdpdGhvdXRUaW1lb3V0KCk7XG4gIH0sXG5cbiAgZm9jdXNDb250ZW50OiBmdW5jdGlvbigpIHtcbiAgICAvLyBEb24ndCBzdGVhbCBmb2N1cyBmcm9tIGlubmVyIGVsZW1lbnRzXG4gICAgaWYgKCF0aGlzLmNvbnRlbnRIYXNGb2N1cygpKSB7XG4gICAgICB0aGlzLnJlZnMuY29udGVudC5mb2N1cygpO1xuICAgIH1cbiAgfSxcblxuICBjbG9zZVdpdGhUaW1lb3V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2xvc2VzQXQgPSBEYXRlLm5vdygpICsgdGhpcy5wcm9wcy5jbG9zZVRpbWVvdXRNUztcbiAgICB0aGlzLnNldFN0YXRlKHtiZWZvcmVDbG9zZTogdHJ1ZSwgY2xvc2VzQXQ6IGNsb3Nlc0F0fSwgZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmNsb3NlVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuY2xvc2VXaXRob3V0VGltZW91dCwgdGhpcy5zdGF0ZS5jbG9zZXNBdCAtIERhdGUubm93KCkpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgY2xvc2VXaXRob3V0VGltZW91dDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBiZWZvcmVDbG9zZTogZmFsc2UsXG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgYWZ0ZXJPcGVuOiBmYWxzZSxcbiAgICAgIGNsb3Nlc0F0OiBudWxsXG4gICAgfSwgdGhpcy5hZnRlckNsb3NlKTtcbiAgfSxcblxuICBoYW5kbGVLZXlEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09IDkgLyp0YWIqLykgc2NvcGVUYWIodGhpcy5yZWZzLmNvbnRlbnQsIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNyAvKmVzYyovKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5yZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVPdmVybGF5T25DbGljazogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkQ2xvc2UgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2hvdWxkQ2xvc2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZENsb3NlICYmIHRoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljaykge1xuICAgICAgaWYgKHRoaXMub3duZXJIYW5kbGVzQ2xvc2UoKSlcbiAgICAgICAgdGhpcy5yZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmZvY3VzQ29udGVudCgpO1xuICAgIH1cbiAgICB0aGlzLnNob3VsZENsb3NlID0gbnVsbDtcbiAgfSxcblxuICBoYW5kbGVDb250ZW50T25DbGljazogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2hvdWxkQ2xvc2UgPSBmYWxzZTtcbiAgfSxcblxuICByZXF1ZXN0Q2xvc2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3duZXJIYW5kbGVzQ2xvc2UoKSlcbiAgICAgIHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICB9LFxuXG4gIG93bmVySGFuZGxlc0Nsb3NlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZTtcbiAgfSxcblxuICBzaG91bGRCZUNsb3NlZDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICF0aGlzLnN0YXRlLmlzT3BlbiAmJiAhdGhpcy5zdGF0ZS5iZWZvcmVDbG9zZTtcbiAgfSxcblxuICBjb250ZW50SGFzRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLnJlZnMuY29udGVudCB8fCB0aGlzLnJlZnMuY29udGVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgfSxcblxuICBidWlsZENsYXNzTmFtZTogZnVuY3Rpb24od2hpY2gsIGFkZGl0aW9uYWwpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gQ0xBU1NfTkFNRVNbd2hpY2hdLmJhc2U7XG4gICAgaWYgKHRoaXMuc3RhdGUuYWZ0ZXJPcGVuKVxuICAgICAgY2xhc3NOYW1lICs9ICcgJytDTEFTU19OQU1FU1t3aGljaF0uYWZ0ZXJPcGVuO1xuICAgIGlmICh0aGlzLnN0YXRlLmJlZm9yZUNsb3NlKVxuICAgICAgY2xhc3NOYW1lICs9ICcgJytDTEFTU19OQU1FU1t3aGljaF0uYmVmb3JlQ2xvc2U7XG4gICAgcmV0dXJuIGFkZGl0aW9uYWwgPyBjbGFzc05hbWUgKyAnICcgKyBhZGRpdGlvbmFsIDogY2xhc3NOYW1lO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRlbnRTdHlsZXMgPSAodGhpcy5wcm9wcy5jbGFzc05hbWUpID8ge30gOiB0aGlzLnByb3BzLmRlZmF1bHRTdHlsZXMuY29udGVudDtcbiAgICB2YXIgb3ZlcmxheVN0eWxlcyA9ICh0aGlzLnByb3BzLm92ZXJsYXlDbGFzc05hbWUpID8ge30gOiB0aGlzLnByb3BzLmRlZmF1bHRTdHlsZXMub3ZlcmxheTtcblxuICAgIHJldHVybiB0aGlzLnNob3VsZEJlQ2xvc2VkKCkgPyBkaXYoKSA6IChcbiAgICAgIGRpdih7XG4gICAgICAgIHJlZjogXCJvdmVybGF5XCIsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5idWlsZENsYXNzTmFtZSgnb3ZlcmxheScsIHRoaXMucHJvcHMub3ZlcmxheUNsYXNzTmFtZSksXG4gICAgICAgIHN0eWxlOiBBc3NpZ24oe30sIG92ZXJsYXlTdHlsZXMsIHRoaXMucHJvcHMuc3R5bGUub3ZlcmxheSB8fCB7fSksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlT3ZlcmxheU9uQ2xpY2tcbiAgICAgIH0sXG4gICAgICAgIGRpdih7XG4gICAgICAgICAgcmVmOiBcImNvbnRlbnRcIixcbiAgICAgICAgICBzdHlsZTogQXNzaWduKHt9LCBjb250ZW50U3R5bGVzLCB0aGlzLnByb3BzLnN0eWxlLmNvbnRlbnQgfHwge30pLFxuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5idWlsZENsYXNzTmFtZSgnY29udGVudCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgICAgICB0YWJJbmRleDogXCItMVwiLFxuICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ29udGVudE9uQ2xpY2ssXG4gICAgICAgICAgcm9sZTogdGhpcy5wcm9wcy5yb2xlLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzLmNvbnRlbnRMYWJlbFxuICAgICAgICB9LFxuICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuIiwidmFyIF9lbGVtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuXG5mdW5jdGlvbiBzZXRFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudCk7XG4gICAgZWxlbWVudCA9ICdsZW5ndGgnIGluIGVsID8gZWxbMF0gOiBlbDtcbiAgfVxuICBfZWxlbWVudCA9IGVsZW1lbnQgfHwgX2VsZW1lbnQ7XG4gIHJldHVybiBfZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaGlkZShhcHBFbGVtZW50KSB7XG4gIHZhbGlkYXRlRWxlbWVudChhcHBFbGVtZW50KTtcbiAgKGFwcEVsZW1lbnQgfHwgX2VsZW1lbnQpLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xufVxuXG5mdW5jdGlvbiBzaG93KGFwcEVsZW1lbnQpIHtcbiAgdmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpO1xuICAoYXBwRWxlbWVudCB8fCBfZWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGUoc2hvdWxkSGlkZSwgYXBwRWxlbWVudCkge1xuICBpZiAoc2hvdWxkSGlkZSlcbiAgICBoaWRlKGFwcEVsZW1lbnQpO1xuICBlbHNlXG4gICAgc2hvdyhhcHBFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpIHtcbiAgaWYgKCFhcHBFbGVtZW50ICYmICFfZWxlbWVudClcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlYWN0LW1vZGFsOiBZb3UgbXVzdCBzZXQgYW4gZWxlbWVudCB3aXRoIGBNb2RhbC5zZXRBcHBFbGVtZW50KGVsKWAgdG8gbWFrZSB0aGlzIGFjY2Vzc2libGUnKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRGb3JUZXN0aW5nKCkge1xuICBfZWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG59XG5cbmV4cG9ydHMudG9nZ2xlID0gdG9nZ2xlO1xuZXhwb3J0cy5zZXRFbGVtZW50ID0gc2V0RWxlbWVudDtcbmV4cG9ydHMuc2hvdyA9IHNob3c7XG5leHBvcnRzLmhpZGUgPSBoaWRlO1xuZXhwb3J0cy5yZXNldEZvclRlc3RpbmcgPSByZXNldEZvclRlc3Rpbmc7XG4iLCJ2YXIgZmluZFRhYmJhYmxlID0gcmVxdWlyZSgnLi4vaGVscGVycy90YWJiYWJsZScpO1xudmFyIGZvY3VzTGF0ZXJFbGVtZW50cyA9IFtdO1xudmFyIG1vZGFsRWxlbWVudCA9IG51bGw7XG52YXIgbmVlZFRvRm9jdXMgPSBmYWxzZTtcblxuZnVuY3Rpb24gaGFuZGxlQmx1cihldmVudCkge1xuICBuZWVkVG9Gb2N1cyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvY3VzKGV2ZW50KSB7XG4gIGlmIChuZWVkVG9Gb2N1cykge1xuICAgIG5lZWRUb0ZvY3VzID0gZmFsc2U7XG4gICAgaWYgKCFtb2RhbEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbmVlZCB0byBzZWUgaG93IGpRdWVyeSBzaGltcyBkb2N1bWVudC5vbignZm9jdXNpbicpIHNvIHdlIGRvbid0IG5lZWQgdGhlXG4gICAgLy8gc2V0VGltZW91dCwgZmlyZWZveCBkb2Vzbid0IHN1cHBvcnQgZm9jdXNpbiwgaWYgaXQgZGlkLCB3ZSBjb3VsZCBmb2N1c1xuICAgIC8vIHRoZSBlbGVtZW50IG91dHNpZGUgb2YgYSBzZXRUaW1lb3V0LiBTaWRlLWVmZmVjdCBvZiB0aGlzIGltcGxlbWVudGF0aW9uXG4gICAgLy8gaXMgdGhhdCB0aGUgZG9jdW1lbnQuYm9keSBnZXRzIGZvY3VzLCBhbmQgdGhlbiB3ZSBmb2N1cyBvdXIgZWxlbWVudCByaWdodFxuICAgIC8vIGFmdGVyLCBzZWVtcyBmaW5lLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobW9kYWxFbGVtZW50LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKVxuICAgICAgICByZXR1cm47XG4gICAgICB2YXIgZWwgPSAoZmluZFRhYmJhYmxlKG1vZGFsRWxlbWVudClbMF0gfHwgbW9kYWxFbGVtZW50KTtcbiAgICAgIGVsLmZvY3VzKCk7XG4gICAgfSwgMCk7XG4gIH1cbn1cblxuZXhwb3J0cy5tYXJrRm9yRm9jdXNMYXRlciA9IGZ1bmN0aW9uKCkge1xuICBmb2N1c0xhdGVyRWxlbWVudHMucHVzaChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbn07XG5cbmV4cG9ydHMucmV0dXJuRm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHRvRm9jdXMgPSBudWxsO1xuICB0cnkge1xuICAgIHRvRm9jdXMgPSBmb2N1c0xhdGVyRWxlbWVudHMucG9wKCk7XG4gICAgdG9Gb2N1cy5mb2N1cygpO1xuICAgIHJldHVybjtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybignWW91IHRyaWVkIHRvIHJldHVybiBmb2N1cyB0byAnK3RvRm9jdXMrJyBidXQgaXQgaXMgbm90IGluIHRoZSBET00gYW55bW9yZScpO1xuICB9XG59O1xuXG5leHBvcnRzLnNldHVwU2NvcGVkRm9jdXMgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gIG1vZGFsRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cywgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbkJsdXInLCBoYW5kbGVCbHVyKTtcbiAgICBkb2N1bWVudC5hdHRhY2hFdmVudCgnb25Gb2N1cycsIGhhbmRsZUZvY3VzKTtcbiAgfVxufTtcblxuZXhwb3J0cy50ZWFyZG93blNjb3BlZEZvY3VzID0gZnVuY3Rpb24oKSB7XG4gIG1vZGFsRWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuZGV0YWNoRXZlbnQoJ29uQmx1cicsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LmRldGFjaEV2ZW50KCdvbkZvY3VzJywgaGFuZGxlRm9jdXMpO1xuICB9XG59O1xuIiwidmFyIGZpbmRUYWJiYWJsZSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvdGFiYmFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihub2RlLCBldmVudCkge1xuICB2YXIgdGFiYmFibGUgPSBmaW5kVGFiYmFibGUobm9kZSk7XG4gIGlmICghdGFiYmFibGUubGVuZ3RoKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICB9XG4gIHZhciBmaW5hbFRhYmJhYmxlID0gdGFiYmFibGVbZXZlbnQuc2hpZnRLZXkgPyAwIDogdGFiYmFibGUubGVuZ3RoIC0gMV07XG4gIHZhciBsZWF2aW5nRmluYWxUYWJiYWJsZSA9IChcbiAgICBmaW5hbFRhYmJhYmxlID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50IHx8XG4gICAgLy8gaGFuZGxlIGltbWVkaWF0ZSBzaGlmdCt0YWIgYWZ0ZXIgb3BlbmluZyB3aXRoIG1vdXNlXG4gICAgbm9kZSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICApO1xuICBpZiAoIWxlYXZpbmdGaW5hbFRhYmJhYmxlKSByZXR1cm47XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHZhciB0YXJnZXQgPSB0YWJiYWJsZVtldmVudC5zaGlmdEtleSA/IHRhYmJhYmxlLmxlbmd0aCAtIDEgOiAwXTtcbiAgdGFyZ2V0LmZvY3VzKCk7XG59O1xuIiwiLyohXG4gKiBBZGFwdGVkIGZyb20galF1ZXJ5IFVJIGNvcmVcbiAqXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL2NhdGVnb3J5L3VpLWNvcmUvXG4gKi9cblxuZnVuY3Rpb24gZm9jdXNhYmxlKGVsZW1lbnQsIGlzVGFiSW5kZXhOb3ROYU4pIHtcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKC9pbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9ufG9iamVjdC8udGVzdChub2RlTmFtZSkgP1xuICAgICFlbGVtZW50LmRpc2FibGVkIDpcbiAgICBcImFcIiA9PT0gbm9kZU5hbWUgP1xuICAgICAgZWxlbWVudC5ocmVmIHx8IGlzVGFiSW5kZXhOb3ROYU4gOlxuICAgICAgaXNUYWJJbmRleE5vdE5hTikgJiYgdmlzaWJsZShlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gaGlkZGVuKGVsKSB7XG4gIHJldHVybiAoZWwub2Zmc2V0V2lkdGggPD0gMCAmJiBlbC5vZmZzZXRIZWlnaHQgPD0gMCkgfHxcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIHZpc2libGUoZWxlbWVudCkge1xuICB3aGlsZSAoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSBicmVhaztcbiAgICBpZiAoaGlkZGVuKGVsZW1lbnQpKSByZXR1cm4gZmFsc2U7XG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdGFiYmFibGUoZWxlbWVudCkge1xuICB2YXIgdGFiSW5kZXggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgaWYgKHRhYkluZGV4ID09PSBudWxsKSB0YWJJbmRleCA9IHVuZGVmaW5lZDtcbiAgdmFyIGlzVGFiSW5kZXhOYU4gPSBpc05hTih0YWJJbmRleCk7XG4gIHJldHVybiAoaXNUYWJJbmRleE5hTiB8fCB0YWJJbmRleCA+PSAwKSAmJiBmb2N1c2FibGUoZWxlbWVudCwgIWlzVGFiSW5kZXhOYU4pO1xufVxuXG5mdW5jdGlvbiBmaW5kVGFiYmFibGVEZXNjZW5kYW50cyhlbGVtZW50KSB7XG4gIHJldHVybiBbXS5zbGljZS5jYWxsKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpLCAwKS5maWx0ZXIoZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gdGFiYmFibGUoZWwpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kVGFiYmFibGVEZXNjZW5kYW50cztcblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTW9kYWwnKTtcblxuIiwiLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID1cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZG9tYWluKSB7XG4gICAgICBpbnZva2UgPSBwcm9jZXNzLmRvbWFpbi5iaW5kKGludm9rZSk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gIC8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuICAvLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXNcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZXNwb25zZSA9IHJlcXVpcmUoJ2h0dHAtcmVzcG9uc2Utb2JqZWN0Jyk7XG52YXIgaGFuZGxlUXMgPSByZXF1aXJlKCd0aGVuLXJlcXVlc3QvbGliL2hhbmRsZS1xcy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvUmVxdWVzdDtcbmZ1bmN0aW9uIGRvUmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucykge1xuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgLy8gY2hlY2sgdHlwZXMgb2YgYXJndW1lbnRzXG5cbiAgaWYgKHR5cGVvZiBtZXRob2QgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIG1ldGhvZCBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICB9XG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBVUkwvcGF0aCBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICB9XG4gIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCAob3IgbnVsbCkuJyk7XG4gIH1cblxuICBtZXRob2QgPSBtZXRob2QudG9VcHBlckNhc2UoKTtcbiAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIGhhbmRsZSBjcm9zcyBkb21haW5cblxuICB2YXIgbWF0Y2g7XG4gIHZhciBjcm9zc0RvbWFpbiA9ICEhKChtYXRjaCA9IC9eKFtcXHctXSs6KT9cXC9cXC8oW15cXC9dKykvLmV4ZWModXJsKSkgJiYgKG1hdGNoWzJdICE9IGxvY2F0aW9uLmhvc3QpKTtcbiAgaWYgKCFjcm9zc0RvbWFpbikgb3B0aW9ucy5oZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG4gIC8vIGhhbmRsZSBxdWVyeSBzdHJpbmdcbiAgaWYgKG9wdGlvbnMucXMpIHtcbiAgICB1cmwgPSBoYW5kbGVRcyh1cmwsIG9wdGlvbnMucXMpO1xuICB9XG5cbiAgLy8gaGFuZGxlIGpzb24gYm9keVxuICBpZiAob3B0aW9ucy5qc29uKSB7XG4gICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5qc29uKTtcbiAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICB9XG5cbiAgLy8gbWV0aG9kLCB1cmwsIGFzeW5jXG4gIHhoci5vcGVuKG1ldGhvZCwgdXJsLCBmYWxzZSk7XG5cbiAgZm9yICh2YXIgbmFtZSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLnRvTG93ZXJDYXNlKCksIG9wdGlvbnMuaGVhZGVyc1tuYW1lXSk7XG4gIH1cblxuICAvLyBhdm9pZCBzZW5kaW5nIGVtcHR5IHN0cmluZyAoIzMxOSlcbiAgeGhyLnNlbmQob3B0aW9ucy5ib2R5ID8gb3B0aW9ucy5ib2R5IDogbnVsbCk7XG5cblxuICB2YXIgaGVhZGVycyA9IHt9O1xuICB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkuc3BsaXQoJ1xcclxcbicpLmZvckVhY2goZnVuY3Rpb24gKGhlYWRlcikge1xuICAgIHZhciBoID0gaGVhZGVyLnNwbGl0KCc6Jyk7XG4gICAgaWYgKGgubGVuZ3RoID4gMSkge1xuICAgICAgaGVhZGVyc1toWzBdLnRvTG93ZXJDYXNlKCldID0gaC5zbGljZSgxKS5qb2luKCc6JykudHJpbSgpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXcgUmVzcG9uc2UoeGhyLnN0YXR1cywgaGVhZGVycywgeGhyLnJlc3BvbnNlVGV4dCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBwYXJzZSA9IHJlcXVpcmUoJ3FzJykucGFyc2U7XG52YXIgc3RyaW5naWZ5ID0gcmVxdWlyZSgncXMnKS5zdHJpbmdpZnk7XG5cbm1vZHVsZS5leHBvcnRzID0gaGFuZGxlUXM7XG5mdW5jdGlvbiBoYW5kbGVRcyh1cmwsIHF1ZXJ5KSB7XG4gIHVybCA9IHVybC5zcGxpdCgnPycpO1xuICB2YXIgc3RhcnQgPSB1cmxbMF07XG4gIHZhciBxcyA9ICh1cmxbMV0gfHwgJycpLnNwbGl0KCcjJylbMF07XG4gIHZhciBlbmQgPSB1cmxbMV0gJiYgdXJsWzFdLnNwbGl0KCcjJykubGVuZ3RoID4gMSA/ICcjJyArIHVybFsxXS5zcGxpdCgnIycpWzFdIDogJyc7XG5cbiAgdmFyIGJhc2VRcyA9IHBhcnNlKHFzKTtcbiAgZm9yICh2YXIgaSBpbiBxdWVyeSkge1xuICAgIGJhc2VRc1tpXSA9IHF1ZXJ5W2ldO1xuICB9XG4gIHFzID0gc3RyaW5naWZ5KGJhc2VRcyk7XG4gIGlmIChxcyAhPT0gJycpIHtcbiAgICBxcyA9ICc/JyArIHFzO1xuICB9XG4gIHJldHVybiBzdGFydCArIHFzICsgZW5kO1xufVxuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgcmV0dXJuICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxudmFyIHJuZztcblxudmFyIGNyeXB0byA9IGdsb2JhbC5jcnlwdG8gfHwgZ2xvYmFsLm1zQ3J5cHRvOyAvLyBmb3IgSUUgMTFcbmlmIChjcnlwdG8gJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICBybmcgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufVxuXG5pZiAoIXJuZykge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciAgcm5kcyA9IG5ldyBBcnJheSgxNik7XG4gIHJuZyA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJuZztcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBXZSBmZWF0dXJlXG4vLyBkZXRlY3QgdG8gZGV0ZXJtaW5lIHRoZSBiZXN0IFJORyBzb3VyY2UsIG5vcm1hbGl6aW5nIHRvIGEgZnVuY3Rpb24gdGhhdFxuLy8gcmV0dXJucyAxMjgtYml0cyBvZiByYW5kb21uZXNzLCBzaW5jZSB0aGF0J3Mgd2hhdCdzIHVzdWFsbHkgcmVxdWlyZWRcbnZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxuLy8gcmFuZG9tICMncyB3ZSBuZWVkIHRvIGluaXQgbm9kZSBhbmQgY2xvY2tzZXFcbnZhciBfc2VlZEJ5dGVzID0gcm5nKCk7XG5cbi8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxudmFyIF9ub2RlSWQgPSBbXG4gIF9zZWVkQnl0ZXNbMF0gfCAweDAxLFxuICBfc2VlZEJ5dGVzWzFdLCBfc2VlZEJ5dGVzWzJdLCBfc2VlZEJ5dGVzWzNdLCBfc2VlZEJ5dGVzWzRdLCBfc2VlZEJ5dGVzWzVdXG5dO1xuXG4vLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxudmFyIF9jbG9ja3NlcSA9IChfc2VlZEJ5dGVzWzZdIDw8IDggfCBfc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDAsIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXNBcHBsaWNhdGlvbiBmcm9tICcuLi8uLi9jb21tb24vYXBwbGljYXRpb25zL1JvdXRlc0FwcGxpY2F0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIFJvdXRlc0FwcGxpY2F0aW9uIHtcbiAgICBnZXQgY29udGFpbmVyKCkge3JldHVybiAnY29udGFpbmVyJ31cbn1cbiIsImltcG9ydCB7Vmlld3BvcnQgYXMgQ29tbW9uVmlld3BvcnR9IGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3cG9ydCBleHRlbmRzIENvbW1vblZpZXdwb3J0IHt9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSB7XG4gICAgXCJhcHBcIjogXCJhc2RcIixcbiAgICBcImFwcG5hbWVcIjogXCJBc2RcIixcbiAgICBcImFwcHRpdGxlXCI6IFwiQXNkXCIsXG4gICAgXCJhcHBkZXNjcmlwdGlvblwiOiBcIkFTRCBhcHBsaWNhdGlvblwiLFxuICAgIFwiYXBwcGF0aFwiOiBcIi9cIixcbiAgICBcImFwcGxvZ29cIjogXCIvc3RhdGljL2FzZC9pbWFnZXMvbG9nby5qcGdcIixcbiAgICBcImFwcHZlcnNpb25cIjogXCIwLjAuMVwiLFxuICAgIFwicG9ydFwiOiAyMDAwLFxuICAgIFwibGl2ZXJlbG9hZHBvcnRcIjogMzU3Mjlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IHtcbiAgICBhcGk6IHtcbiAgICAgICAgdXJsczoge1xuICAgICAgICAgICAgcGFnZUluZm86ICcvc3RhdGljL2FzZC9hcGkvcGFnZS5qc29uJyxcbiAgICAgICAgICAgIHBhZ2VJbmZvTG9nZ2VkOiAnL3N0YXRpYy9hc2QvYXBpL3BhZ2UtbG9nZ2VkLmpzb24nLFxuICAgICAgICAgICAgbG9naW46ICcvc3RhdGljL2FzZC9hcGkvbG9naW4uanNvbicsXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge0NvbmZpZ30gZnJvbSAnLi4vLi4vLi4vY29yZS9Db25maWcnXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29uZmlnKFxuICAgIHtlbnY6ICdtb2NrJ30sXG4gICAgcmVxdWlyZSgnLi4vY29uZicpLFxuICAgIHJlcXVpcmUoJy4vdWknKSxcbiAgICByZXF1aXJlKCcuL2Jhc2UnKSxcbiAgICByZXF1aXJlKCcuL21vY2snKVxuKS5hbGwoKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge1xuICAgIHVpOiB7XG4gICAgICAgIGN1cnJlbnRQYWdlTm86IDEsXG4gICAgICAgIGN1cnJlbnRQYWdlU2l6ZTogMTAsXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICAgICdjb29raWVfZGVsZXRlZCcsXG4gICAgJ2Nvb2tpZV91cGRhdGVkJyxcbiAgICAncm91dGVfZW50ZXJlZCcsXG4gICAgJ3JvdXRlX2NoYW5nZWQnLFxuXVxuIiwiLy8gaW1wb3J0ICcuL3Nhc3Mvc3R5bGVzLnNjc3MnXG5yZXF1aXJlKCcuL2NvbmZpZycpXG5cbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcbmltcG9ydCB7Z2V0U3RvcmV9IGZyb20gJy4uLy4uL2NvcmUvcmVkdXgnXG5pbXBvcnQgKiBhcyBDb21tb25SZWR1Y2VycyBmcm9tICcuLi8uLi9jb21tb24vcmVkdXgvUmVkdWNlcidcbmltcG9ydCAqIGFzIFJlZHVjZXJzIGZyb20gJy4vcmVkdXgvUmVkdWNlcidcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMnXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xuaW1wb3J0IHtIZWFkZXJBcHBsaWNhdGlvbiwgRm9vdGVyQXBwbGljYXRpb259IGZyb20gJy4uLy4uL2NvbW1vbi9hcHBsaWNhdGlvbnMnXG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi9BcHBsaWNhdGlvbidcblxuSGVhZGVyQXBwbGljYXRpb24uYWRkRXZlbnRzKGV2ZW50cylcblxuY29uc3Qgc3RvcmUgPSBnZXRTdG9yZShhc3NpZ24oQ29tbW9uUmVkdWNlcnMsIFJlZHVjZXJzKSlcblxuY29uc3QgaGVhZGVyQXBwbGljYXRpb24gPSBuZXcgSGVhZGVyQXBwbGljYXRpb24oKVxuaGVhZGVyQXBwbGljYXRpb24ucmVuZGVyKHN0b3JlKVxuXG5jb25zdCBmb290ZXJBcHBsaWNhdGlvbiA9IG5ldyBGb290ZXJBcHBsaWNhdGlvbigpXG5mb290ZXJBcHBsaWNhdGlvbi5yZW5kZXIoc3RvcmUpXG5cbmNvbnN0IGFwcGxpY2F0aW9uID0gbmV3IEFwcGxpY2F0aW9uKClcbmFwcGxpY2F0aW9uLnJvdXRlcyA9IHJvdXRlc1xuYXBwbGljYXRpb24ucmVuZGVyKHN0b3JlKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb25uZWN0fSBmcm9tICcuLi9yZWR1eCdcbmltcG9ydCB7ZGVmYXVsdCBhcyBCYXNlUGFnZX0gZnJvbSAnLi9QYWdlJ1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuICAgIHBhZ2VDbGFzc05hbWUgPSAnYXNkLWxhbmRpbmctcGFnZSdcblxuICAgIHBhZ2VMb2FkZWRBcGkgPSBudWxsXG4gICAgXG4gICAgY2hpbGRyZW4gPSAoKSA9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgICAgICA8ZGl2PkxhbmRpbmcgcGFnZSBvZiBBc2Q8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IChuZXcgQ29ubmVjdChQYWdlKSkua2xhc3NcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7UGFnZSBhcyBDb21tb25QYWdlfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29tcG9uZW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIENvbW1vblBhZ2Uge31cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29ubmVjdH0gZnJvbSAnLi4vcmVkdXgnXG5pbXBvcnQge2RlZmF1bHQgYXMgQmFzZVBhZ2V9IGZyb20gJy4vUGFnZSdcblxuY2xhc3MgUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcbiAgICBwYWdlQ2xhc3NOYW1lID0gJ2FzZC1zdWItcGFnZSdcblxuICAgIHBhZ2VMb2FkZWRBcGkgPSBudWxsXG4gICAgXG4gICAgY2hpbGRyZW4gPSAoKSA9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgICAgICA8ZGl2PlN1YiBwYWdlIG9mIEFzZDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KFBhZ2UpKS5rbGFzc1xuIiwiZXhwb3J0cy5MYW5kaW5nUGFnZSA9IHJlcXVpcmUoJy4vTGFuZGluZ1BhZ2UnKS5kZWZhdWx0XG5leHBvcnRzLlN1YlBhZ2UgPSByZXF1aXJlKCcuL1N1YlBhZ2UnKS5kZWZhdWx0XG4vKipORVdQQUdFKiovXG4iLCJpbXBvcnQge0FjdGlvbn0gZnJvbSAnLi4vLi4vLi4vY29yZS9yZWR1eCdcbiIsImltcG9ydCB7Q29ubmVjdCBhcyBDb3JlQ29ubmVjdH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlZHV4J1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL0FjdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdCBleHRlbmRzIENvcmVDb25uZWN0IHtcbiAgICBnZXRBY3Rpb25zKGRpc3BhdGNoLCBvd25Qcm9wcywgLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy51dGlsLmFzc2lnbih7fSwgc3VwZXIuZ2V0QWN0aW9ucyhkaXNwYXRjaCwgb3duUHJvcHMsIC4uLmFyZ3MpLCBhY3Rpb25zKVxuICAgIH1cbn1cbiIsImltcG9ydCB7UmVkdWNlciwgQ29uZmlnUmVkdWNlciwgQ29va2llUmVkdWNlciwgRmFsc2VSZWR1Y2VyLCBUcnVlUmVkdWNlciwgTnVsbFJlZHVjZXJ9IGZyb20gJy4uLy4uLy4uL2NvcmUvcmVkdXgnXG4iLCJleHBvcnRzLkNvbm5lY3QgPSByZXF1aXJlKCcuL0Nvbm5lY3QnKS5kZWZhdWx0XG4iLCJpbXBvcnQge29uUm91dGVFbnRlcmVkLCBvblJvdXRlQ2hhbmdlZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JvdXRlcydcbmltcG9ydCAqIGFzIHBhZ2VzIGZyb20gJy4vcGFnZXMnXG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9WaWV3cG9ydCdcbmltcG9ydCBjb25mIGZyb20gJy4vY29uZidcblxuY29uc3Qgc3ViUm91dGVzID0gW1xue3BhdGg6IGNvbmYuYXBwcGF0aCArICcvc3ViJywgY29tcG9uZW50OiBwYWdlcy5TdWJQYWdlLCBvbkNoYW5nZTogb25Sb3V0ZUNoYW5nZWR9LFxuLyoqTkVXUEFHRSoqL1xuXVxuY29uc3Qgcm91dGVzID0gW3tcbiAgICBwYXRoOiBjb25mLmFwcHBhdGgsXG4gICAgY29tcG9uZW50OiBWaWV3cG9ydCxcbiAgICBpbmRleFJvdXRlOiB7XG4gICAgICAgIGNvbXBvbmVudDogcGFnZXMuTGFuZGluZ1BhZ2VcbiAgICB9LFxuICAgIGNoaWxkUm91dGVzOiBzdWJSb3V0ZXMsXG4gICAgb25DaGFuZ2U6IG9uUm91dGVDaGFuZ2VkLFxufV1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3V0aWwsIGNvbmZpZ3VyYXRpb259IGZyb20gJy4uLy4uL2NvcmUnXG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnLi4vLi4vY29yZS9yZWR1eCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGljYXRpb24ge1xuICAgIGNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uXG4gICAgdXRpbCA9IHV0aWxcbiAgICBjaGlsZHJlbiA9ICgpID0+IHt0aHJvdyAnTm8gY2hpbGRyZW4nfVxuICAgIGFmdGVyUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICBBY3Rpb24uZXhlY3V0ZSgnTG9hZFBhZ2VJbmZvQWN0aW9uJylcbiAgICB9XG4gICAgcmVuZGVyID0gKHN0b3JlKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBzdG9yZVxuICAgICAgICBjb25zdCBfcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17dGhpcy5zdG9yZX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmNoaWxkcmVuKCl9XG4gICAgICAgICAgICAgICAgPC9Qcm92aWRlcj4sXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXIpLFxuICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJSZW5kZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBfcmVuZGVyKVxuICAgICAgICBfcmVuZGVyKClcbiAgICB9XG4gICAgc3RhdGljIGFkZEV2ZW50cyhldmVudHMpIHtcbiAgICAgICAgZXZlbnRzLm1hcChldmVudCA9PiBhZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZSkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoYGdsb2JhbF8ke2V2ZW50fWAsIHtkZXRhaWw6IGUuZGV0YWlsfSkpXG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL0FwcGxpY2F0aW9uJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vRm9vdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXJBcHBsaWNhdGlvbiBleHRlbmRzIEFwcGxpY2F0aW9uIHtcbiAgICBjb250YWluZXIgPSAnZm9vdGVyJ1xuICAgIGNoaWxkcmVuID0gKCkgPT4gPEZvb3Rlci8+XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi9BcHBsaWNhdGlvbidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL0hlYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyQXBwbGljYXRpb24gZXh0ZW5kcyBBcHBsaWNhdGlvbiB7XG4gICAgY29udGFpbmVyID0gJ2hlYWRlcidcbiAgICBjaGlsZHJlbiA9ICgpID0+IDxIZWFkZXIvPlxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL0FwcGxpY2F0aW9uJ1xuaW1wb3J0IHtEZXZUb29sc30gZnJvbSAnLi4vLi4vY29yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVzQXBwbGljYXRpb24gZXh0ZW5kcyBBcHBsaWNhdGlvbiB7XG4gICAgZ2V0IHJvdXRlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9fcm91dGVzKSB0aHJvdyAnTm8gcm91dGVzIHByb3ZpZGVkJ1xuICAgICAgICByZXR1cm4gdGhpcy5fX3JvdXRlc1xuICAgIH1cbiAgICBzZXQgcm91dGVzKHYpIHt0aGlzLl9fcm91dGVzID0gdn1cbiAgICBnZXQgaGlzdG9yeSgpIHtyZXR1cm4gdGhpcy51dGlsLmhpc3Rvcnl9XG5cbiAgICBjaGlsZHJlbiA9ICgpID0+IDxSb3V0ZXIgcm91dGVzPXt0aGlzLnJvdXRlc30gaGlzdG9yeT17dGhpcy5oaXN0b3J5fS8+XG59XG4iLCJleHBvcnRzLkFwcGxpY2F0aW9uID0gcmVxdWlyZSgnLi9BcHBsaWNhdGlvbicpLmRlZmF1bHRcbmV4cG9ydHMuRm9vdGVyQXBwbGljYXRpb24gPSByZXF1aXJlKCcuL0Zvb3RlckFwcGxpY2F0aW9uJykuZGVmYXVsdFxuZXhwb3J0cy5IZWFkZXJBcHBsaWNhdGlvbiA9IHJlcXVpcmUoJy4vSGVhZGVyQXBwbGljYXRpb24nKS5kZWZhdWx0XG5leHBvcnRzLlJvdXRlc0FwcGxpY2F0aW9uID0gcmVxdWlyZSgnLi9Sb3V0ZXNBcHBsaWNhdGlvbicpLmRlZmF1bHRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyZWFkY3J1bWJzIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdicmVhZGNydW1icydcbiAgICByZW5kZXIgPSAoKSA9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmtzJz5cbiAgICAgICAgICAgICAgICB7dGhpcy5icmVhZGNydW1icy5tYXAoKGl0ZW0sIGkpID0+IDxMaW5rIGtleT17aX0gdG89e2l0ZW0udXJsfSBjbGFzc05hbWU9J2JyZWFkY3J1bWInPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L0xpbms+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGlvbnMnPnt0aGlzLmJyZWFkY3J1bWJzQWN0aW9uc308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnYnV0dG9uJ1xuICAgIGxhYmVsID0gdGhpcy5wcm9wcy5sYWJlbFxuICAgIG9uQ2xpY2sgPSB0aGlzLnByb3BzLm9uQ2xpY2tcbiAgICB0eXBlID0gdGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ2J1dHRvbidcbiAgICByZW5kZXIgPSAoKSA9PlxuICAgICAgICA8YnV0dG9uIHR5cGU9e3RoaXMudHlwZX0gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0gb25DbGljaz17dGhpcy5vbkNsaWNrfT5cbiAgICAgICAgICAgIHt0aGlzLmxhYmVsfVxuICAgICAgICA8L2J1dHRvbj5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTdHlsZSBmcm9tICcuL1N0eWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdjYXJkJ1xuICAgIGhlYWRlciA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWhlYWRlcicgc3R5bGU9e3tkaXNwbGF5OiAhdGhpcy5wcm9wcy50aXRsZSA/ICdub25lJyA6ICcnfX0+XG4gICAgICAgICAgICA8aDM+e3RoaXMucHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgICAgIHt0aGlzLnN1YnRpdGxlKCl9XG4gICAgICAgIDwvZGl2PlxuICAgIHN1YnRpdGxlID0gKCkgPT5cbiAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogIXRoaXMucHJvcHMuc3VidGl0bGUgPyAnbm9uZScgOiAnJ319Pnt0aGlzLnByb3BzLnN1YnRpdGxlfTwvbGFiZWw+XG4gICAgcmVuZGVyID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAge3RoaXMuaGVhZGVyKCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWNvbnRlbnQnPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHt1dGlsLCBjb25maWd1cmF0aW9ufSBmcm9tICcuLi8uLi9jb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt2YWxpZGF0aW9uRXJyb3JzOiB7fSwgcmVmcmVzaDogZmFsc2V9XG4gICAgICAgIHRoaXMuaW5pdCguLi5hcmdzKVxuICAgIH1cbiAgICBpbml0KC4uLmFyZ3MpIHt9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX19tb3VudGVkID0gdHJ1ZVxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdnbG9iYWxfY29va2llX2RlbGV0ZWQnLCB0aGlzLnJlZnJlc2guYmluZCh0aGlzKSlcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignZ2xvYmFsX2Nvb2tpZV91cGRhdGVkJywgdGhpcy5yZWZyZXNoLmJpbmQodGhpcykpXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2dsb2JhbF9yb3V0ZV9lbnRlcmVkJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtyb3V0ZSwgcmVwbGFjZX0gPSBlLmRldGFpbFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFnZVJvdXRlOiByb3V0ZX0pXG4gICAgICAgICAgICB0aGlzLm9uUm91dGVFbnRlcmVkKHJvdXRlLCByZXBsYWNlKVxuICAgICAgICB9KVxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdnbG9iYWxfcm91dGVfY2hhbmdlZCcsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7cHJldiwgbmV4dH0gPSBlLmRldGFpbFxuICAgICAgICAgICAgdGhpcy5vblJvdXRlQ2hhbmdlZChwcmV2LCBuZXh0KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBvc3RDb21wb25lbnREaWRNb3VudCgpXG4gICAgICAgIGlmICh0aGlzLnBhZ2VMb2FkZWRBcGkpIHtcbiAgICAgICAgICAgIHRoaXMudXRpbC5xdWVyeSh0aGlzLnBhZ2VMb2FkZWRBcGkpXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3ModGhpcy5wYWdlTG9hZGVkQXBpU3VjY2VzcylcbiAgICAgICAgICAgICAgICAuZmFpbHVyZSh0aGlzLnBhZ2VMb2FkZWRBcGlGYWlsdXJlKVxuICAgICAgICAgICAgICAgIC5ydW4oKVxuICAgICAgICB9XG4gICAgfVxuICAgIHBhZ2VMb2FkZWRBcGlTdWNjZXNzID0gKHJlcykgPT4ge31cbiAgICBwYWdlTG9hZGVkQXBpRmFpbHVyZSA9IChyZXMpID0+IHt9XG4gICAgcG9zdENvbXBvbmVudERpZE1vdW50KCkge31cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHt0aGlzLl9fbW91bnRlZCA9IGZhbHNlfVxuICAgIG9uUm91dGVFbnRlcmVkID0gKHJvdXRlLCByZXBsYWNlKSA9PiB7fVxuICAgIG9uUm91dGVDaGFuZ2VkID0gKHByZXYsIG5leHQpID0+IHt9XG4gICAgcmVmcmVzaChzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fX21vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPyBzdGF0ZSA6IHRoaXMuc3RhdGUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0RXJyb3IoZmllbGQsIG1zZykge1xuICAgICAgICB0aGlzLnN0YXRlLnZhbGlkYXRpb25FcnJvcnNbZmllbGRdID0gbXNnXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJlbW92ZUVycm9yKGZpZWxkKSB7XG4gICAgICAgIHRoaXMuc3RhdGUudmFsaWRhdGlvbkVycm9yc1tmaWVsZF0gPSBudWxsXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZ2V0IGRvbSgpIHtyZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyl9XG4gICAgZ2V0IGNvbmZpZ3VyYXRpb24oKSB7cmV0dXJuIGNvbmZpZ3VyYXRpb259XG4gICAgZ2V0IHV0aWwoKSB7cmV0dXJuIHV0aWx9XG4gICAgZ2V0IGNsYXNzTmFtZSgpIHtyZXR1cm4gYCR7dGhpcy5jb21wb25lbnRDbGFzc05hbWV9ICR7dGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgZ2V0IHJvdXRlKCkge3JldHVybiB0aGlzLnV0aWwuY29va2llLnJlYWQoJ3JvdXRlX2VudGVyZWQnKS5yb3V0ZX1cbiAgICBnZXQgcGFnZUluZm8oKSB7cmV0dXJuIHRoaXMucHJvcHMucGFnZUluZm99XG4gICAgYnJlYWRjcnVtYnMgPSB0aGlzLnByb3BzLmJyZWFkY3J1bWJzXG4gICAgYnJlYWRjcnVtYnNBY3Rpb25zID0gdGhpcy5wcm9wcy5icmVhZGNydW1ic0FjdGlvbnNcblxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtkZWZhdWx0IGFzIFJlYWN0RHJvcHpvbmV9IGZyb20gJ3JlYWN0LWRyb3B6b25lJ1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3B6b25lIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdkcm9wem9uZSdcbiAgICBzdGF0ZSA9IHtmaWxlczogW119XG5cbiAgICBnZXQgZmlsZXMoKSB7cmV0dXJuIHRoaXMuc3RhdGUuZmlsZXN9XG5cbiAgICBvcGVuID0gKCkgPT4gdGhpcy5kcm9wem9uZS5vcGVuKClcbiAgICBkcm9wID0gKGZpbGVzKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbGVzfSlcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Ecm9wcGVkKSB0aGlzLnByb3BzLm9uRHJvcHBlZCh0aGlzLnN0YXRlLmZpbGVzKVxuICAgIH1cbiAgICByZW5kZXIgPSAoKSA9PlxuICAgICAgICA8UmVhY3REcm9wem9uZSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSByZWY9e2UgPT4gdGhpcy5kcm9wem9uZSA9IGV9IG9uRHJvcD17dGhpcy5kcm9wfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L1JlYWN0RHJvcHpvbmU+XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0Nvbm5lY3R9IGZyb20gJy4uL3JlZHV4J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJy4vVGV4dEZpZWxkJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ2xvZ2luJ1xuICAgIHZhbGlkYXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuYWNjb3VudElucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRFcnJvcignYWNjb3VudCcsICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyb3IoJ2FjY291bnQnKVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5wYXNzd29yZElucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRFcnJvcigncGFzc3dvcmQnLCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUVycm9yKCdwYXNzd29yZCcpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgb25Mb2dpbiA9IChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZXhlY3V0ZVVzZXJMb2dpbkFjdGlvbih7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogdGhpcy5hY2NvdW50SW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRJbnB1dC52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIgPSAoKSA9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICA8aDE+U2lnbiBpbiB0byA8c3BhbiBjbGFzc05hbWU9J2FwcCc+e3RoaXMuY29uZmlndXJhdGlvbi5hcHB9PC9zcGFuPjwvaDE+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdsb2dpbi1mb3JtJz5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPSd0ZXh0JyByZWY9e2UgPT4gdGhpcy5hY2NvdW50SW5wdXQgPSBlfVxuICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0PXt0aGlzLnN0YXRlLnZhbGlkYXRpb25FcnJvcnMuYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBY2NvdW50Jy8+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgdHlwZT0ncGFzc3dvcmQnIHJlZj17ZSA9PiB0aGlzLnBhc3N3b3JkSW5wdXQgPSBlfVxuICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0PXt0aGlzLnN0YXRlLnZhbGlkYXRpb25FcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD0nTG9naW4nIG9uQ2xpY2s9e3RoaXMub25Mb2dpbn0vPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxufVxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KExvZ2luKSkua2xhc3NcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBTdHlsZSB7XG4gICAgbGV2ZWwgPSB0aGlzLnByb3BzLmxldmVsID8gdGhpcy5wcm9wcy5sZXZlbCA6IDBcbiAgICBnZXROb2RlQ2xhc3NOYW1lID0gKG5vZGUpID0+IGAke2xvY2F0aW9uLnBhdGhuYW1lID09IG5vZGUudXJsID8gJ2FjdGl2ZScgOiAnJ30gbGV2ZWwke3RoaXMubGV2ZWx9ICR7bm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDAgPyAnaGFzLWNoaWxkcmVuJyA6ICcnfWBcbiAgICByZW5kZXJNZW51ID0gKG1lbnVzLCBjbGFzc05hbWUsIHN1Yk1lbnVDbGFzc05hbWUpID0+ICFtZW51cyB8fCAhbWVudXMubGVuZ3RoID8gbnVsbCA6XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e21lbnVzLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb3BzID0gaXRlbS5vbkNsaWNrID9cbiAgICAgICAgICAgICAgICB7b25DbGljazogaXRlbS5vbkNsaWNrfSA6XG4gICAgICAgICAgICAgICAge2hyZWY6IGl0ZW0udXJsLCBvbkNsaWNrOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnVybCkgdGhpcy51dGlsLmhpc3RvcnkucHVzaChpdGVtLnVybClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaHRtbCA/XG4gICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9e3RoaXMuZ2V0Tm9kZUNsYXNzTmFtZShpdGVtKX0+e2l0ZW0uaHRtbH08L2xpPiA6XG4gICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9e3RoaXMuZ2V0Tm9kZUNsYXNzTmFtZShpdGVtKX0+XG4gICAgICAgICAgICAgICAgPExpbmsgey4uLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIHshaXRlbS5kZXNjcmlwdGlvbiA/IG51bGwgOlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+e2l0ZW0uZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgICAgICAgIDxNZW51IG1lbnVzPXtpdGVtLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICBsZXZlbD17dGhpcy5sZXZlbCArIDF9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3ViTWVudUNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgc3ViTWVudUNsYXNzTmFtZT17c3ViTWVudUNsYXNzTmFtZX0vPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgIHJlbmRlciA9ICgpID0+IHRoaXMucmVuZGVyTWVudSh0aGlzLnByb3BzLm1lbnVzLCB0aGlzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5zdWJNZW51Q2xhc3NOYW1lKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtkZWZhdWx0IGFzIFJlYWN0TW9kYWx9IGZyb20gJ3JlYWN0LW1vZGFsJ1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGBtb2RhbC1kaWFsb2cgJHt0aGlzLm1vZGFsQ2xhc3NOYW1lfWBcbiAgICBtb2RhbENsYXNzTmFtZSA9ICcnXG5cbiAgICBjbG9zZSA9ICgpID0+IHt9XG4gICAgbWVzc2FnZSA9ICgpID0+ICF0aGlzLnByb3BzLm1lc3NhZ2UgPyBudWxsIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLW1lc3NhZ2UnPnt0aGlzLnByb3BzLm1lc3NhZ2V9PC9kaXY+XG4gICAgZm9vdGVyID0gKCkgPT4gIXRoaXMucHJvcHMuZm9vdGVyID8gbnVsbCA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1mb290ZXInPnt0aGlzLnByb3BzLmZvb3Rlcn08L2Rpdj5cbiAgICByZW5kZXIgPSAoKSA9PlxuICAgICAgICA8UmVhY3RNb2RhbCB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICB7dGhpcy5tZXNzYWdlKCl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtY29udGVudCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmhlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyBpY29uLWNsb3NlJyBvbkNsaWNrPXt0aGlzLmNsb3NlfT5jbG9zZTwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICB7dGhpcy5mb290ZXIoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1JlYWN0TW9kYWw+XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0Nvbm5lY3R9IGZyb20gJy4uL3JlZHV4J1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnXG5cbmNsYXNzIE1vZGFsRGVmYXVsdCBleHRlbmRzIE1vZGFsIHtcbiAgICBtb2RhbENsYXNzTmFtZSA9ICdkZWZhdWx0LW1vZGFsJ1xuXG4gICAgY2xvc2UgPSAoKSA9PiB0aGlzLnByb3BzLmV4ZWN1dGVSZW1vdmVNb2RhbEZyb21WaWV3QWN0aW9uKClcbn1cbmV4cG9ydCBkZWZhdWx0IChuZXcgQ29ubmVjdChNb2RhbERlZmF1bHQpKS5rbGFzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbidcbmltcG9ydCBCcmVhZGNydW1icyBmcm9tICcuL0JyZWFkY3J1bWJzJ1xuaW1wb3J0IE1vZGFsRGVmYXVsdCBmcm9tICcuL01vZGFsRGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBgY29udGFpbmVyLWZsdWlkIHBhZ2UgJHt0aGlzLnNpZGViYXJMZWZ0Q2xhc3NOYW1lfSAke3RoaXMuc2lkZWJhclJpZ2h0Q2xhc3NOYW1lfSAke3RoaXMucGFnZUNsYXNzTmFtZX1gXG4gICAgcGFnZUNsYXNzTmFtZSA9ICcnXG5cbiAgICBnZXQgc2lkZWJhckxlZnRDbGFzc05hbWUoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5zaWRlYmFyTGVmdCkgcmV0dXJuICcnXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmhpZGVTaWRlYmFyTGVmdCA/ICdoYXMtc2lkZWJhci1sZWZ0LWNvbGxhcHNlZCcgOiAnaGFzLXNpZGViYXItbGVmdCdcbiAgICB9XG4gICAgZ2V0IHNpZGViYXJSaWdodENsYXNzTmFtZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnNpZGViYXJSaWdodCkgcmV0dXJuICcnXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmhpZGVTaWRlYmFyUmlnaHQgPyAnaGFzLXNpZGViYXItcmlnaHQtY29sbGFwc2VkJyA6ICdoYXMtc2lkZWJhci1yaWdodCdcbiAgICB9XG5cbiAgICByZW5kZXJTaWJhckxlZnQgPSAoKSA9PiB0aGlzLnByb3BzLnNpZGViYXJMZWZ0XG4gICAgcmVuZGVyU2liYXJSaWdodCA9ICgpID0+IHRoaXMucHJvcHMuc2lkZWJhclJpZ2h0XG4gICAgcmVuZGVyQnJlYWRjcnVtYnMgPSAoKSA9PiA8QnJlYWRjcnVtYnMgYnJlYWRjcnVtYnM9e3RoaXMuYnJlYWRjcnVtYnN9IGFjdGlvbnM9e3RoaXMuYnJlYWRjcnVtYnNBY3Rpb25zfS8+XG4gICAgY29udGVudCA9ICgpID0+IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICBjaGlsZHJlbiA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckJyZWFkY3J1bWJzKCl9XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTaWJhckxlZnQoKX1cbiAgICAgICAgICAgIHt0aGlzLmNvbnRlbnQoKX1cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNpYmFyUmlnaHQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgcmVuZGVyTW9kYWwgPSAoKSA9PiAhdGhpcy5wcm9wcy5tb2RhbCA/IG51bGwgOiB0aGlzLnByb3BzLm1vZGFsIGluc3RhbmNlb2YgTW9kYWwgPyB0aGlzLnByb3BzLm1vZGFsIDpcbiAgICAgICAgPE1vZGFsRGVmYXVsdCBpc09wZW49e3RydWV9IGNvbnRlbnRMYWJlbD0nTW9kYWxEZWZhdWx0Jz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm1vZGFsfVxuICAgICAgICA8L01vZGFsRGVmYXVsdD5cbiAgICByZW5kZXIgPSAoKSA9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAge3RoaXMudXRpbC51c2VyLmlzTG9nZ2VkID8gdGhpcy5jaGlsZHJlbigpIDogPExvZ2luLz59XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJNb2RhbCgpfVxuICAgICAgICA8L2Rpdj5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTdHlsZSBmcm9tICcuL1N0eWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGaWVsZCBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnc2VhcmNoLWZpZWxkJ1xuICAgIGljb24gPSB0aGlzLnByb3BzLmljb24gPyB0aGlzLnByb3BzLmljb24gOiA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz5zZWFyY2g8L2k+XG4gICAgaWNvblBvc2l0aW9uID0gdGhpcy5wcm9wcy5pY29uUG9zaXRpb24gPT0gJ3N0YXJ0JyA/ICdzdGFydCcgOiAnZW5kJ1xuICAgIHBsYWNlaG9sZGVyID0gdGhpcy5wcm9wcy5wbGFjZWhvbGRlciA/IHRoaXMucHJvcHMucGxhY2Vob2xkZXIgOiAnU2VhcmNoJ1xuICAgIGdldCB2YWx1ZSgpIHtyZXR1cm4gdGhpcy5pbnB1dC52YWx1ZX1cbiAgICBzZXQgdmFsdWUodikge3RoaXMuaW5wdXQudmFsdWUgPSB2fVxuXG4gICAgb25DaGFuZ2UgPSAoZSkgPT4gdGhpcy5wcm9wcy5vbkNoYW5nZWQgPyB0aGlzLnByb3BzLm9uQ2hhbmdlZChlKSA6IGZhbHNlXG4gICAgcmVuZGVyID0gKCkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICB7dGhpcy5pY29uUG9zaXRpb24gPT0gJ3N0YXJ0JyA/IHRoaXMuaWNvbiA6IG51bGx9XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcmVmPXtlID0+IHRoaXMuaW5wdXQgPSBlfSBwbGFjZWhvbGRlcj17dGhpcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgICAge3RoaXMuaWNvblBvc2l0aW9uID09ICdlbmQnID8gdGhpcy5pY29uIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcbmltcG9ydCBTZWFyY2hGaWVsZCBmcm9tICcuL1NlYXJjaEZpZWxkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RGaWVsZCBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnc2VsZWN0LWZpZWxkJ1xuICAgIHBsYWNlaG9sZGVyID0gdGhpcy5wcm9wcy5wbGFjZWhvbGRlciA/IHRoaXMucHJvcHMucGxhY2Vob2xkZXIgOiAnJ1xuICAgIG5vbmVPcHRpb24gPSB7dGV4dDogdGhpcy5wbGFjZWhvbGRlciwgdmFsdWU6IG51bGwsIGNsYXNzTmFtZTogJ25vbmUtb3B0aW9uJ31cbiAgICBzaG91bGRTaG93Tm9uZU9wdGlvbiA9IHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3BsYWNlaG9sZGVyJylcbiAgICBzdHlsZSA9IHRoaXMudXRpbC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc3R5bGUpXG4gICAgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlXG4gICAgb3B0aW9uVGV4dCA9IHRoaXMucHJvcHMub3B0aW9uVGV4dCA/IHRoaXMucHJvcHMub3B0aW9uVGV4dCA6IChvKSA9PiBvLnRleHRcbiAgICBvcHRpb25WYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uVmFsdWUgPyB0aGlzLnByb3BzLm9wdGlvblZhbHVlIDogKG8pID0+IG8udmFsdWVcbiAgICBvcHRpb24gPSAoaSk9PiB0aGlzLm9wdGlvbnNbaV0gPyB0aGlzLm9wdGlvbnNbaV0gOiB0aGlzLm5vbmVPcHRpb25cbiAgICBvcGVuID0gKG9wZW4pID0+IHRoaXMucmVmcmVzaCh7b3Blbn0pXG4gICAgb25DaGFuZ2UgPSAobywgZikgPT4ge1xuICAgICAgICBpZiAoZiB8fCBvICE9IHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCh7c2VsZWN0ZWQ6IG8sIG9wZW46IGZhbHNlfSlcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlZCkgdGhpcy5wcm9wcy5vbkNoYW5nZWQobywgdGhpcylcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgb3B0aW9uczogdGhpcy5ub3JtYWxpemVPcHRpb25zKHRoaXMucHJvcHMub3B0aW9ucyksXG4gICAgICAgIG9wZW46IEJvb2xlYW4odGhpcy5wcm9wcy5vcGVuKSxcbiAgICAgICAgc2VhcmNoYWJsZTogQm9vbGVhbih0aGlzLnByb3BzLnNlYXJjaGFibGUpLFxuXG5cbiAgICB9XG4gICAgaW5pdChwcm9wcykge1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkID0gdGhpcy5vcHRpb25zLmZpbmQobyA9PiB0aGlzLm9wdGlvblZhbHVlKG8pID09IHByb3BzLnZhbHVlKVxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZCA/IHRoaXMuc3RhdGUuc2VsZWN0ZWQgOiB0aGlzLm5vbmVPcHRpb25cbiAgICAgICAgdGhpcy51dGlsLmFzc2lnbih0aGlzLnN0eWxlLCB7XG4gICAgICAgICAgICB3aWR0aDogcGFyc2VJbnQocHJvcHMud2lkdGgpID8gYCR7cGFyc2VJbnQocHJvcHMud2lkdGgpfXB4YCA6ICdpbml0aWFsJyxcbiAgICAgICAgICAgIG1pbldpZHRoOiBwYXJzZUludChwcm9wcy5taW5XaWR0aCkgPyBgJHtwYXJzZUludChwcm9wcy5taW5XaWR0aCl9cHhgIDogJ2luaXRpYWwnLFxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW4gJiYgdGhpcy5zZWFyY2hGaWVsZCkgdGhpcy5zZWFyY2hGaWVsZC5kb20ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpXG4gICAgfVxuICAgIHBvc3RDb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gZS50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdC1maWVsZCcpXG4gICAgICAgICAgICBpZiAoc2VsZWN0ICYmIHNlbGVjdCA9PSB0aGlzLmRvbSAmJiBlLnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0LXZhbHVlJykpIHRoaXMub3Blbih0cnVlKVxuICAgICAgICAgICAgZWxzZSB0aGlzLm9wZW4oZmFsc2UpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkICE9IHRoaXMubm9uZU9wdGlvbikgdGhpcy5vbkNoYW5nZSh0aGlzLnNlbGVjdGVkLCB0cnVlKVxuICAgIH1cbiAgICBub3JtYWxpemVPcHRpb25zID0gKG9wdGlvbnMpID0+XG4gICAgICAgIEFycmF5LmlzQXJyYXkob3B0aW9ucykgPyBvcHRpb25zLm1hcChvID0+IHtyZXR1cm4gdHlwZW9mIG8gPT0gJ3N0cmluZycgPyB7dmFsdWU6IG8sIHRleHQ6b30gOiBrfSkgOlxuICAgICAgICB0eXBlb2Ygb3B0aW9ucyA9PSAnb2JqZWN0JyA/IE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcChrID0+IHtyZXR1cm4ge3ZhbHVlOiBvcHRpb25zW2tdLCB0ZXh0OiBrfX0pIDpcbiAgICAgICAgW11cblxuICAgIGdldCBvcHRpb25zKCkge3JldHVybiB0aGlzLnNob3VsZFNob3dOb25lT3B0aW9uID8gW3RoaXMubm9uZU9wdGlvbl0uY29uY2F0KHRoaXMuc3RhdGUub3B0aW9ucykgOiB0aGlzLnN0YXRlLm9wdGlvbnN9XG4gICAgZ2V0IGZpbHRlcmVkT3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoRmllbGQgJiYgdGhpcy5zZWFyY2hGaWVsZC52YWx1ZSA/XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZmlsdGVyKG8gPT4gdGhpcy5vcHRpb25UZXh0KG8pLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hGaWVsZC52YWx1ZS50b0xvd2VyQ2FzZSgpKSkgOiB0aGlzLm9wdGlvbnNcbiAgICB9XG4gICAgcmVuZGVyT3B0aW9uID0gKG8saSkgPT5cbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17YHNlbGVjdC1vcHRpb24gJHtvLmNsYXNzTmFtZX0gJHt0aGlzLnNlbGVjdGVkID09IG8gPyAnc2VsZWN0ZWQnIDogJyd9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzLCBvKX0+XG4gICAgICAgICAgICB7dGhpcy5vcHRpb25UZXh0KG8pfVxuICAgICAgICA8L2Rpdj5cbiAgICByZW5kZXIgPSAoKSA9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgeyF0aGlzLnRpdGxlID8gbnVsbCA6IDxkaXYgY2xhc3NOYW1lPSdzZWxlY3QtdGl0bGUnPnt0aGlzLnRpdGxlfTwvZGl2Pn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2VsZWN0LXZhbHVlICR7dGhpcy5zZWxlY3RlZCA9PSB0aGlzLm5vbmVPcHRpb24gPyAncGxhY2Vob2xkZXInIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdC10ZXh0Jz57dGhpcy5vcHRpb25UZXh0KHRoaXMuc2VsZWN0ZWQpfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPmFycm93X2Ryb3BfZG93bjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdC1kcm9wZG93bicgc3R5bGU9e3RoaXMudXRpbC5hc3NpZ24odGhpcy5zdHlsZSwge2Rpc3BsYXk6IHRoaXMuc3RhdGUub3BlbiA/ICcnIDogJ25vbmUnfSl9PlxuICAgICAgICAgICAgICAgIHshdGhpcy5zZWFyY2hhYmxlID8gbnVsbCA6IDxTZWFyY2hGaWVsZCByZWY9e2UgPT4gdGhpcy5zZWFyY2hGaWVsZCA9IGV9IG9uQ2hhbmdlPXt0aGlzLnJlZnJlc2h9Lz59XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdC1kcm9wZG93bic+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmZpbHRlcmVkT3B0aW9ucy5tYXAoKG8saSkgPT4gdGhpcy5yZW5kZXJPcHRpb24obyxpKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcbmltcG9ydCBTZWFyY2hGaWVsZCBmcm9tICcuL1NlYXJjaEZpZWxkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGVwcGVyIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGBzdGVwcGVyICR7dGhpcy5wcm9wcy5hdXRvZml0ID8gJ3N0ZXBwZXItYXV0b2ZpdCcgOiAnJ31gXG4gICAgc3RlcHMgPSB0aGlzLnByb3BzLnN0ZXBzID8gdGhpcy5wcm9wcy5zdGVwcyA6IFtdXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGN1cnJlbnQ6IHRoaXMucHJvcHMuY3VycmVudCA/IHRoaXMucHJvcHMuY3VycmVudCA6IDBcbiAgICB9XG4gICAgZ2V0IGN1cnJlbnQoKSB7cmV0dXJuIHRoaXMuc3RhdGUuY3VycmVudH1cbiAgICBzZXQgY3VycmVudChjdXJyZW50KSB7dGhpcy5yZWZyZXNoKHtjdXJyZW50fSl9XG4gICAganVtcCA9IChpKSA9PiBpID4gMCAmJiBpIDwgdGhpcy5zdGVwcy5sZW5ndGggJiYgdGhpcy5zdGVwc1tpXS5hY3RpdmUgPyB0aGlzLmN1cnJlbnQgPSBpIDogZmFsc2VcbiAgICBuZXh0ID0gKCkgPT4gdGhpcy5qdW1wKHRoaXMuY3VycmVudCArIDEpXG4gICAgcHJldiA9ICgpID0+IHRoaXMuanVtcCh0aGlzLmN1cnJlbnQgLSAxKVxuICAgIGhlYWRlcnMgPSAoKSA9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RlcC1oZWFkZXJzJz5cbiAgICAgICAgICAgIHt0aGlzLnN0ZXBzLm1hcCgocyxpKSA9PiB0aGlzLmhlYWRlcihzLGkpKX1cbiAgICAgICAgPC9kaXY+XG4gICAgaGVhZGVyID0gKHMsaSkgPT5cbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17YHN0ZXAtaGVhZGVyICR7cy5hY3RpdmUgPyAnYWN0aXZlJyA6ICcnfWB9PlxuICAgICAgICAgICAge3RoaXMucmVuZGVySGVhZGVyKHMsaSl9XG4gICAgICAgIDwvZGl2PlxuICAgIHJlbmRlckhlYWRlciA9IHRoaXMucHJvcHMucmVuZGVySGVhZGVyID8gdGhpcy5wcm9wcy5yZW5kZXJIZWFkZXIgOiAocyxpKSA9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RlcC1oZWFkZXItY29udGVudCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RlcC1pbmRleCc+PGEgb25DbGljaz17dGhpcy5qdW1wLmJpbmQodGhpcywgaSl9PntpKzF9PC9hPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0ZXAtdGl0bGUnPntzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAge3RoaXMucmVuZGVySGVhZGVyRXh0cmEocyxpKX1cbiAgICAgICAgPC9kaXY+XG4gICAgcmVuZGVySGVhZGVyRXh0cmEgPSAocyxpKSA9PiB0aGlzLnByb3BzLnJlbmRlckhlYWRlckV4dHJhID8gdGhpcy5wcm9wcy5yZW5kZXJIZWFkZXJFeHRyYShzLGkpIDogbnVsbFxuXG4gICAgY29udGVudCA9ICgpID0+ICF0aGlzLnJlbmRlckNvbnRlbnQodGhpcy5jdXJyZW50KSA/IG51bGwgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RlcC1jb250ZW50Jz5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbnRlbnQodGhpcy5jdXJyZW50KX1cbiAgICAgICAgPC9kaXY+XG4gICAgcmVuZGVyQ29udGVudCA9IChpKSA9PiB0aGlzLnByb3BzLnJlbmRlckNvbnRlbnQgPyB0aGlzLnByb3BzLnJlbmRlckNvbnRlbnQoaSkgOiB0aGlzLnN0ZXBzW2ldLmNvbnRlbnRcblxuICAgIHJlbmRlciA9ICgpID0+ICF0aGlzLnN0ZXBzID8gbnVsbCA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICB7dGhpcy5oZWFkZXJzKCl9XG4gICAgICAgICAgICB7dGhpcy5jb250ZW50KCl9XG4gICAgICAgIDwvZGl2PlxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGdldCB1dWlkKCkge3JldHVybiB0aGlzLl9fdXVpZCA9ICF0aGlzLl9fdXVpZCA/IHRoaXMudXRpbC51dWlkKCkgOiB0aGlzLl9fdXVpZH1cbiAgICBnZXQgZGVmYXVsdFRoZW1lKCkge1xuICAgICAgICBjb25zdCB0aGVtZSA9IHRoaXMuY29uZmlndXJhdGlvbi51aS50aGVtZVxuICAgICAgICByZXR1cm4gdGhpcy51dGlsLmFzc2lnbih7aWQ6IHRoaXMudXVpZCwgbmFtZTogdGhpcy51dWlkfSwgdGhlbWUsIHtcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0UmlnaHQ6IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUucGFkZGluZ0xlZnQsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5wYWRkaW5nUmlnaHRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWRkaW5nVG9wQm90dG9tOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogdGhlbWUucGFkZGluZ1RvcCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5wYWRkaW5nQm90dG9tXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFkZGluZ0xlZnRSaWdodFNtYWxsOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnBhZGRpbmdMZWZ0U21hbGwsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5wYWRkaW5nUmlnaHRTbWFsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhZGRpbmdUb3BCb3R0b21TbWFsbDoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnBhZGRpbmdUb3BTbWFsbCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5wYWRkaW5nQm90dG9tU21hbGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoZW1lLmxpbmVIZWlnaHQsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25TdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5idXR0b25Gb250U2l6ZSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmJ1dHRvbkJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUucGFkZGluZ0xlZnRTbWFsbCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnBhZGRpbmdSaWdodFNtYWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuZGVybGluZVN0eWxlOiB7Ym90dG9tOiAnMCcsIGxlZnQ6ICcwJ30sXG4gICAgICAgICAgICB1bmRlcmxpbmVGb2N1c1N0eWxlOiB7Ym9yZGVyQm90dG9tV2lkdGg6ICcxcHgnfSxcbiAgICAgICAgICAgIHRhYmxlU3R5bGU6IHt9LFxuICAgICAgICAgICAgcm93U3R5bGU6IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNlbGxTdHlsZToge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAnLCBwYWRkaW5nOiBgMHB4ICR7dGhlbWUucGFkZGluZ1NtYWxsfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmVhZGNydW1ic1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgZ2V0IHRoZW1lUHJvcHMoKSB7cmV0dXJuIFtdfVxuICAgIGdldFRoZW1lUHJvcHMoKSB7cmV0dXJuIFsnaWQnLCAnbmFtZScsICdzdHlsZSddLmNvbmNhdCh0aGlzLnRoZW1lUHJvcHMpfVxuICAgIGdldCB0aGVtZSgpIHtyZXR1cm4gdGhpcy51dGlsLmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0VGhlbWUsIHRoaXMucHJvcHMpfVxuICAgIGdldCBjbXBTdHlsZVByb3BzKCkge3JldHVybiB0aGlzLnV0aWwuaW5jbHVkZSh0aGlzLnV0aWwuYXNzaWduKHt9LCB0aGlzLnRoZW1lLCB0aGlzLmNtcFByb3BzKSwgdGhpcy5nZXRUaGVtZVByb3BzKCkpfVxuICAgIGdldCBjbXBQcm9wcygpIHtyZXR1cm4gdGhpcy51dGlsLmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0UHJvcHMsIHRoaXMucHJvcHMpfVxuICAgIGdldCBkZWZhdWx0UHJvcHMoKSB7cmV0dXJuIHt9fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICd0YWJsZS12aWV3J1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjb2x1bW5zOiB0aGlzLnByb3BzLmNvbHVtbnMgPyB0aGlzLnByb3BzLmNvbHVtbnMgOiBbXVxuICAgIH1cbiAgICBnZXQgY29sdW1ucygpIHtyZXR1cm4gdGhpcy5zdGF0ZS5jb2x1bW5zfVxuXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5cbmNsYXNzIFRhYnMgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gYHRhYnMgJHt0aGlzLmNtcFByb3BzLnZlcnRpY2FsID8gJ3RhYnMtdmVydGljYWwnOiAndGFicy1ob3Jpem9udGFsJ31gXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGFjdGl2ZUluZGV4OiB0aGlzLmNtcFByb3BzLmFjdGl2ZUluZGV4ID8gdGhpcy5jbXBQcm9wcy5hY3RpdmVJbmRleCA6IDAsXG4gICAgfVxuICAgIGdldCBjaGlsZENvdW50KCkge3JldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aH1cbiAgICBnZXQgYWN0aXZlSW5kZXgoKSB7cmV0dXJuIHRoaXMuc3RhdGUuYWN0aXZlSW5kZXh9XG4gICAgaGFuZGxlTmV4dCA9ICgpID0+IHRoaXMuYWN0aXZlSW5kZXggPCB0aGlzLmNoaWxkQ291bnQgPyB0aGlzLnNldFN0YXRlKHthY3RpdmVJbmRleDogdGhpcy5hY3RpdmVJbmRleCArIDF9KSA6IGZhbHNlXG4gICAgaGFuZGxlUHJldiA9ICgpID0+IHRoaXMuYWN0aXZlSW5kZXggPiAwID8gdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSW5kZXg6IHRoaXMuYWN0aXZlSW5kZXggLSAxfSkgOiBmYWxzZVxuICAgIGdldFRpdGxlID0gKGVsLCBpKSA9PiBlbC5wcm9wcy5jaGlsZHJlbi5yZWR1Y2UoKHYsIGNoaWxkKSA9PiB7XG4gICAgICAgIHJldHVybiBjaGlsZC50eXBlID09ICd0aXRsZScgPyB2ID0gY2hpbGQucHJvcHMuY2hpbGRyZW4gOiB2XG4gICAgfSwgaSlcbiAgICBnZXRDb250ZW50ID0gKGVsLCBpKSA9PiBlbC5wcm9wcy5jaGlsZHJlbi5yZWR1Y2UoKHYsIGNoaWxkKSA9PiB7XG4gICAgICAgIHJldHVybiBjaGlsZC50eXBlID09ICdjb250ZW50JyA/IHYgPSBjaGlsZC5wcm9wcy5jaGlsZHJlbiA6IHZcbiAgICB9LCBpKVxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0gc3R5bGU9e3tkaXNwbGF5OiAhdGhpcy5jaGlsZENvdW50ID8gJ25vbmUnIDogJyd9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJzLWhlYWRlcic+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4ubWFwKCh0YWIsaSkgPT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17aX0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSW5kZXg6IGl9KX0gbGFiZWw9e3RoaXMuZ2V0VGl0bGUodGFiLGkpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0YWIgJHtpPT10aGlzLmFjdGl2ZUluZGV4PydhY3RpdmUnOicnfWB9Lz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFiLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIHt0aGlzLmdldENvbnRlbnQodGhpcy5wcm9wcy5jaGlsZHJlblt0aGlzLmFjdGl2ZUluZGV4XSwgdGhpcy5hY3RpdmVJbmRleCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTdHlsZSBmcm9tICcuL1N0eWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0RmllbGQgZXh0ZW5kcyBTdHlsZSB7XG4gICAgZ2V0IGNvbXBvbmVudENsYXNzTmFtZSgpIHtyZXR1cm4gYHRleHQtZmllbGQgJHt0aGlzLnByb3BzLmVycm9yVGV4dCA/ICdlcnJvcicgOiAnJ31gfVxuICAgIGdldCB0eXBlKCkge3JldHVybiB0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCd9XG4gICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtyZXR1cm4gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWV9XG4gICAgZ2V0IHZhbHVlKCkge3JldHVybiB0aGlzLmlucHV0LnZhbHVlfVxuICAgIHNldCB2YWx1ZSh2KSB7dGhpcy5pbnB1dC52YWx1ZSA9IHZ9XG4gICAgZ2V0IHBsYWNlaG9sZGVyKCkge3JldHVybiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyID8gdGhpcy5wcm9wcy5wbGFjZWhvbGRlciA6ICcnfVxuXG4gICAgcmVuZGVyTWVzc2FnZSA9ICgpID0+ICF0aGlzLnByb3BzLmVycm9yVGV4dCA/IG51bGwgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+e3RoaXMucHJvcHMuZXJyb3JUZXh0fTwvZGl2PlxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtlID0+IHRoaXMuaW5wdXQgPSBlfSB0eXBlPXt0aGlzLnR5cGV9IHZhbHVlPXt0aGlzLmRlZmF1bHRWYWx1ZX0gcGxhY2Vob2xkZXI9e3RoaXMucGxhY2Vob2xkZXJ9Lz5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlck1lc3NhZ2UoKX1cbiAgICAgICAgPC9kaXY+XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld3BvcnQgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ2NvbnRhaW5lciB2aWV3cG9ydCdcbiAgICBjaGlsZHJlbiA9ICgpID0+IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICByZW5kZXIgPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5jaGlsZHJlbigpfVxuICAgIDwvZGl2PlxufVxuIiwiZXhwb3J0cy5DYXJkID0gcmVxdWlyZSgnLi9DYXJkJykuZGVmYXVsdFxuZXhwb3J0cy5Db21wb25lbnQgPSByZXF1aXJlKCcuL0NvbXBvbmVudCcpLmRlZmF1bHRcbmV4cG9ydHMuU3R5bGUgPSByZXF1aXJlKCcuL1N0eWxlJykuZGVmYXVsdFxuZXhwb3J0cy5UZXh0RmllbGQgPSByZXF1aXJlKCcuL1RleHRGaWVsZCcpLmRlZmF1bHRcbmV4cG9ydHMuQnV0dG9uID0gcmVxdWlyZSgnLi9CdXR0b24nKS5kZWZhdWx0XG5leHBvcnRzLlNlYXJjaEZpZWxkID0gcmVxdWlyZSgnLi9TZWFyY2hGaWVsZCcpLmRlZmF1bHRcbmV4cG9ydHMuU2VsZWN0RmllbGQgPSByZXF1aXJlKCcuL1NlbGVjdEZpZWxkJykuZGVmYXVsdFxuZXhwb3J0cy5UYWJsZSA9IHJlcXVpcmUoJy4vVGFibGUnKS5kZWZhdWx0XG5leHBvcnRzLlRhYnMgPSByZXF1aXJlKCcuL1RhYnMnKS5kZWZhdWx0XG5leHBvcnRzLlZpZXdwb3J0ID0gcmVxdWlyZSgnLi9WaWV3cG9ydCcpLmRlZmF1bHRcbmV4cG9ydHMuTW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykuZGVmYXVsdFxuZXhwb3J0cy5Nb2RhbERlZmF1bHQgPSByZXF1aXJlKCcuL01vZGFsRGVmYXVsdCcpLmRlZmF1bHRcbmV4cG9ydHMuRHJvcHpvbmUgPSByZXF1aXJlKCcuL0Ryb3B6b25lJykuZGVmYXVsdFxuZXhwb3J0cy5TdGVwcGVyID0gcmVxdWlyZSgnLi9TdGVwcGVyJykuZGVmYXVsdFxuZXhwb3J0cy5CcmVhZGNydW1icyA9IHJlcXVpcmUoJy4vQnJlYWRjcnVtYnMnKS5kZWZhdWx0XG5leHBvcnRzLk1lbnUgPSByZXF1aXJlKCcuL01lbnUnKS5kZWZhdWx0XG5leHBvcnRzLlBhZ2UgPSByZXF1aXJlKCcuL1BhZ2UnKS5kZWZhdWx0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0Nvbm5lY3R9IGZyb20gJy4uLy4uL3JlZHV4J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4uL1N0eWxlJ1xuaW1wb3J0IFZlcnNpb24gZnJvbSAnLi9WZXJzaW9uJ1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ2NvbnRhaW5lciBmb290ZXInXG4gICAgcmVuZGVyID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgPFZlcnNpb24vPlxuICAgIDwvZGl2PlxufVxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KEZvb3RlcikpLmtsYXNzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0Nvbm5lY3R9IGZyb20gJy4uLy4uL3JlZHV4J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4uL1N0eWxlJ1xuaW1wb3J0IExpbmtzSHViIGZyb20gJy4vTGlua3NIdWInXG5pbXBvcnQgTG9nb0JveCBmcm9tICcuL0xvZ29Cb3gnXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gJy4vU2VhcmNoQm94J1xuaW1wb3J0IEhlbHAgIGZyb20gJy4vSGVscCdcbmltcG9ydCBOb3RpZmljYXRpb24gIGZyb20gJy4vTm90aWZpY2F0aW9uJ1xuaW1wb3J0IFVzZXJCb3ggZnJvbSAnLi9Vc2VyQm94J1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ2NvbnRhaW5lciBoZWFkZXInXG4gICAgb25Sb3V0ZUVudGVyZWQgPSAocm91dGUsIHJlcGxhY2UpID0+IHRoaXMucHJvcHMuZXhlY3V0ZUxvYWRQYWdlSW5mb0FjdGlvbigpXG4gICAgcmVuZGVyID0gKCkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxMaW5rc0h1Yi8+XG4gICAgICAgICAgICA8TG9nb0JveC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UnLz5cbiAgICAgICAgICAgIDxTZWFyY2hCb3gvPlxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbi8+XG4gICAgICAgICAgICA8SGVscC8+XG4gICAgICAgICAgICA8VXNlckJveC8+XG4gICAgICAgIDwvZGl2PlxufVxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KEhlYWRlcikpLmtsYXNzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0Nvbm5lY3R9IGZyb20gJy4uLy4uL3JlZHV4J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4uL1N0eWxlJ1xuXG5jbGFzcyBIZWxwIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdoZWxwJ1xuICAgIGNoaWxkcmVuID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz5oZWxwPC9pPlxuICAgIDwvZGl2PlxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICB7dGhpcy5jaGlsZHJlbigpfVxuICAgICAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KEhlbHApKS5rbGFzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb25uZWN0fSBmcm9tICcuLi8uLi9yZWR1eCdcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9TdHlsZSdcbmltcG9ydCBNZW51IGZyb20gJy4uL01lbnUnXG5cbmNsYXNzIExpbmtzSHViIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdsaW5rcy1odWInXG4gICAgZ2V0VGl0bGUobm9kZXMsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBub2Rlcy5yZWR1Y2UoKHZhbHVlLCBub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT0gbm9kZS51cmwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID0gbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA/IHRoaXMuZ2V0VGl0bGUobm9kZS5jaGlsZHJlbiwgdmFsdWUpIDogbm9kZS50aXRsZVxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2Yobm9kZS51cmwpID49IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID0gbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA/IHRoaXMuZ2V0VGl0bGUobm9kZS5jaGlsZHJlbiwgdmFsdWUpIDogbm9kZS50aXRsZVxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPyB0aGlzLmdldEFwcE5hbWUobm9kZS5jaGlsZHJlbiwgdmFsdWUpIDogdmFsdWVcbiAgICAgICAgfSwgdmFsdWUpXG4gICAgfVxuICAgIGNoaWxkcmVuID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz5hcHBzPC9pPlxuICAgICAgICA8TWVudSBtZW51cz17dGhpcy5wYWdlSW5mby5tZW51c30gY2xhc3NOYW1lPSdtZW51cycgc3ViTWVudUNsYXNzTmFtZT0nc3ViLW1lbnVzJy8+XG4gICAgPC9kaXY+XG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLmNoaWxkcmVuKCl9XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KExpbmtzSHViKSkua2xhc3NcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHtDb25uZWN0fSBmcm9tICcuLi8uLi9yZWR1eCdcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9TdHlsZSdcblxuY2xhc3MgTG9nb0JveCBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnbG9nby1ib3gnXG5cbiAgICBjaGlsZHJlbiA9ICgpID0+IDxhIGNsYXNzTmFtZT0nd3JhcHBlcicgaHJlZj0nLyc+XG4gICAgICAgIDxpbWcgc3JjPXt0aGlzLmNvbmZpZ3VyYXRpb24uYXBwbG9nb30vPlxuICAgICAgICA8aDM+e3RoaXMuY29uZmlndXJhdGlvbi5hcHBuYW1lfTwvaDM+XG4gICAgPC9hPlxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICB7dGhpcy5jaGlsZHJlbigpfVxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCAobmV3IENvbm5lY3QoTG9nb0JveCkpLmtsYXNzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0Nvbm5lY3R9IGZyb20gJy4uLy4uL3JlZHV4J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4uL1N0eWxlJ1xuXG5jbGFzcyBOb3RpZmljYXRpb24gZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ25vdGlmaWNhdGlvbidcbiAgICBjaGlsZHJlbiA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyc+bm90aWZpY2F0aW9uczwvaT5cbiAgICA8L2Rpdj5cbiAgICByZW5kZXIgPSAoKSA9PiAhdGhpcy51dGlsLnVzZXIuaXNMb2dnZWQgPyBudWxsIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLmNoaWxkcmVuKCl9XG4gICAgICAgIDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCAobmV3IENvbm5lY3QoTm90aWZpY2F0aW9uKSkua2xhc3NcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29ubmVjdH0gZnJvbSAnLi4vLi4vcmVkdXgnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vU3R5bGUnXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJy4uL1RleHRGaWVsZCdcblxuY2xhc3MgU2VhcmNoQm94IGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdzZWFyY2gtYm94J1xuICAgIGNoaWxkcmVuID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICA8VGV4dEZpZWxkIHJlZj17ZSA9PiB0aGlzLnNlYXJjaElucHV0ID0gZX0gcGxhY2Vob2xkZXI9J1NlYXJjaCcvPlxuICAgIDwvZGl2PlxuICAgIHJlbmRlciA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICB7IXRoaXMudXRpbC51c2VyLmlzTG9nZ2VkID8gbnVsbCA6dGhpcy5jaGlsZHJlbigpfVxuICAgICAgICA8L2Rpdj5cbn1cbmV4cG9ydCBkZWZhdWx0IChuZXcgQ29ubmVjdChTZWFyY2hCb3gpKS5rbGFzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb25uZWN0fSBmcm9tICcuLi8uLi9yZWR1eCdcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9TdHlsZSdcbmltcG9ydCBNZW51IGZyb20gJy4uL01lbnUnXG5cbmNsYXNzIFVzZXJCb3ggZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ3VzZXItYm94J1xuICAgIGdldCBtZW51cygpIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICB0aXRsZTogJ1Byb2ZpbGUnLFxuICAgICAgICB9LHtcbiAgICAgICAgICAgIHRpdGxlOiAnUHJlZmVyZW5jZXMnLFxuICAgICAgICB9LHtcbiAgICAgICAgICAgIHRpdGxlOiAnTG9nb3V0JyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMucHJvcHMuZXhlY3V0ZVVzZXJMb2dvdXRBY3Rpb24oKVxuICAgICAgICB9XVxuICAgIH1cbiAgICBjaGlsZHJlbiA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpc3BsYXktbmFtZSc+e3RoaXMudXRpbC51c2VyLmRpc3BsYXlOYW1lfTwvZGl2PlxuICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz5wZXJzb248L2k+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51cyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mbyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F2YXRhcic+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hbWUnPnt0aGlzLnV0aWwudXNlci5kaXNwbGF5TmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb2NjdXBhdGlvbic+e3RoaXMudXRpbC51c2VyLm9jY3VwYXRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RlcGFydG1lbnQnPnt0aGlzLnV0aWwudXNlci5kZXBhcnRtZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWFpbCc+e3RoaXMudXRpbC51c2VyLmVtYWlsfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXN0LWxvZ2luJz57dGhpcy51dGlsLnVzZXIubGFzdExvZ2lufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxuICAgICAgICAgICAgICAgIDxNZW51IG1lbnVzPXt0aGlzLm1lbnVzfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgcmVuZGVyID0gKCkgPT4gIXRoaXMudXRpbC51c2VyLmlzTG9nZ2VkID8gbnVsbCA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICB7dGhpcy5jaGlsZHJlbigpfVxuICAgICAgICA8L2Rpdj5cbn1cbmV4cG9ydCBkZWZhdWx0IChuZXcgQ29ubmVjdChVc2VyQm94KSkua2xhc3NcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29ubmVjdH0gZnJvbSAnLi4vLi4vcmVkdXgnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vU3R5bGUnXG5cbmNsYXNzIFZlcnNpb24gZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ3ZlcnNpb24nXG5cbiAgICBjaGlsZHJlbiA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAge3RoaXMuY29uZmlndXJhdGlvbi5hcHB2ZXJzaW9ufVxuICAgIDwvZGl2PlxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICB7dGhpcy5jaGlsZHJlbigpfVxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCAobmV3IENvbm5lY3QoVmVyc2lvbikpLmtsYXNzXG4iLCJpbXBvcnQge0FjdGlvbiwgQXBpQWN0aW9uLCBQcm94eUFjdGlvbn0gZnJvbSAnLi4vLi4vY29yZS9yZWR1eCdcblxuZXhwb3J0IGNsYXNzIFNldEJyZWFkY3J1bWJzQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHt9XG5leHBvcnQgY2xhc3MgU2V0QnJlYWRjcnVtYnNBY3Rpb25zQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHt9XG5leHBvcnQgY2xhc3MgQWRkTW9kYWxUb1ZpZXdBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge31cbmV4cG9ydCBjbGFzcyBSZW1vdmVNb2RhbEZyb21WaWV3QWN0aW9uIGV4dGVuZHMgUHJveHlBY3Rpb24ge1xuICAgIHByb3h5Q2xhc3MgPSAnQWRkTW9kYWxUb1ZpZXdBY3Rpb24nXG4gICAgcHJveHlOb3JtYWxpemUoc3RhdGUsIHBheWxvYWQsIC4uLmFyZ3MpIHtyZXR1cm4gbnVsbH1cbn1cbmV4cG9ydCBjbGFzcyBVc2VyTG9nb3V0QWN0aW9uIGV4dGVuZHMgQWN0aW9uIHt9XG5leHBvcnQgY2xhc3MgVXNlckxvZ2luQWN0aW9uIGV4dGVuZHMgQXBpQWN0aW9uIHtcbiAgICBzdWNjZXNzQWN0aW9ucyA9IFsnTG9hZFBhZ2VJbmZvQWN0aW9uJ11cbiAgICBsb2FkUmVxdWVzdChwYXlsb2FkLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV0aWwucXVlcnkodGhpcy5jb25maWd1cmF0aW9uLmFwaS51cmxzLmxvZ2luLCBwYXlsb2FkKVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTZXRDdXJyZW50U2VhcmNoVmFsdWVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge31cbmV4cG9ydCBjbGFzcyBTZXRDdXJyZW50UGFnZU5vQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHt9XG5leHBvcnQgY2xhc3MgU2V0Q3VycmVudFBhZ2VTaXplQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHt9XG5leHBvcnQgY2xhc3MgVG9nZ2xlU2lkZWJhckxlZnRBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge31cbmV4cG9ydCBjbGFzcyBUb2dnbGVTaWRlYmFyUmlnaHRBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge31cbmV4cG9ydCBjbGFzcyBMb2FkUGFnZUluZm9BY3Rpb24gZXh0ZW5kcyBBcGlBY3Rpb24ge1xuICAgIGxvYWRSZXF1ZXN0KHBheWxvYWQsIC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbC5xdWVyeSh0aGlzLnV0aWwudXNlci5pc0xvZ2dlZCA/IHRoaXMuY29uZmlndXJhdGlvbi5hcGkudXJscy5wYWdlSW5mb0xvZ2dlZCA6IHRoaXMuY29uZmlndXJhdGlvbi5hcGkudXJscy5wYWdlSW5mbylcbiAgICB9XG59XG4iLCJpbXBvcnQge0Nvbm5lY3QgYXMgQ29yZUNvbm5lY3R9IGZyb20gJy4uLy4uL2NvcmUvcmVkdXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vQWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0IGV4dGVuZHMgQ29yZUNvbm5lY3Qge1xuICAgIGdldEFjdGlvbnMoZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV0aWwuYXNzaWduKHt9LCBzdXBlci5nZXRBY3Rpb25zKGRpc3BhdGNoLCBvd25Qcm9wcywgLi4uYXJncyksIGFjdGlvbnMpXG4gICAgfVxufVxuIiwiaW1wb3J0IHtSZWR1Y2VyLCBDb25maWdSZWR1Y2VyLCBDb29raWVSZWR1Y2VyLCBGYWxzZVJlZHVjZXIsIFRydWVSZWR1Y2VyLCBOdWxsUmVkdWNlcn0gZnJvbSAnLi4vLi4vY29yZS9yZWR1eCdcblxuZXhwb3J0IGNsYXNzIFNldEJyZWFkY3J1bWJzQWN0aW9uUmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7cmV0dXJuIFtdfVxuICAgIGdldCBmaWVsZE5hbWUoKSB7cmV0dXJuICdicmVhZGNydW1icyd9XG59XG5leHBvcnQgY2xhc3MgU2V0QnJlYWRjcnVtYnNBY3Rpb25BY3Rpb25zUmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7cmV0dXJuIFtdfVxuICAgIGdldCBmaWVsZE5hbWUoKSB7cmV0dXJuICdicmVhZGNydW1ic0FjdGlvbnMnfVxufVxuZXhwb3J0IGNsYXNzIFVzZXJMb2dvdXRBY3Rpb25SZWR1Y2VyIGV4dGVuZHMgQ29va2llUmVkdWNlciB7XG4gICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtyZXR1cm4gbnVsbH1cbiAgICBnZXQgZmllbGROYW1lKCkge3JldHVybiAndXNlcid9XG4gICAgc2V0Q29va2llKCkge3RoaXMudXRpbC51c2VyLnVubG9hZCgpfVxufVxuZXhwb3J0IGNsYXNzIEFwaVN1Y2Nlc3NVc2VyTG9naW5BY3Rpb25SZWR1Y2VyIGV4dGVuZHMgQ29va2llUmVkdWNlciB7XG4gICAgZ2V0IGZpZWxkTmFtZSgpIHtyZXR1cm4gJ3VzZXInfVxuICAgIHNldENvb2tpZSgpIHtcbiAgICAgICAgdGhpcy51dGlsLnVzZXIubG9hZCh0aGlzLl9fdmFsdWVbdGhpcy5maWVsZE5hbWVdKVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBZGRNb2RhbFRvVmlld0FjdGlvblJlZHVjZXIgZXh0ZW5kcyBSZWR1Y2VyIHtcbiAgICBnZXQgZmllbGROYW1lKCkge3JldHVybiAnbW9kYWwnfVxufVxuZXhwb3J0IGNsYXNzIFNldEN1cnJlbnRTZWFyY2hWYWx1ZUFjdGlvblJlZHVjZXIgZXh0ZW5kcyBDb25maWdSZWR1Y2VyIHtcbiAgICBnZXQgZmllbGROYW1lKCkge3JldHVybiAnY3VycmVudFNlYXJjaFZhbHVlJ31cbn1cbmV4cG9ydCBjbGFzcyBTZXRDdXJyZW50UGFnZU5vQWN0aW9uUmVkdWNlciBleHRlbmRzIENvbmZpZ1JlZHVjZXIge1xuICAgIGdldCBmaWVsZE5hbWUoKSB7cmV0dXJuICdjdXJyZW50UGFnZU5vJ31cbn1cbmV4cG9ydCBjbGFzcyBTZXRDdXJyZW50UGFnZVNpemVBY3Rpb25SZWR1Y2VyIGV4dGVuZHMgQ29uZmlnUmVkdWNlciB7XG4gICAgZ2V0IGZpZWxkTmFtZSgpIHtyZXR1cm4gJ2N1cnJlbnRQYWdlU2l6ZSd9XG59XG5leHBvcnQgY2xhc3MgVG9nZ2xlU2lkZWJhckxlZnRBY3Rpb25SZWR1Y2VyIGV4dGVuZHMgRmFsc2VSZWR1Y2VyIHtcbiAgICBnZXQgZmllbGROYW1lKCkge3JldHVybiAnaGlkZVNpZGViYXJMZWZ0J31cbn1cbmV4cG9ydCBjbGFzcyBUb2dnbGVTaWRlYmFyUmlnaHRBY3Rpb25SZWR1Y2VyIGV4dGVuZHMgVHJ1ZVJlZHVjZXIge1xuICAgIGdldCBmaWVsZE5hbWUoKSB7cmV0dXJuICdoaWRlU2lkZWJhclJpZ2h0J31cbn1cbmV4cG9ydCBjbGFzcyBBcGlTdWNjZXNzTG9hZFBhZ2VJbmZvQWN0aW9uUmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGdldCBmaWVsZE5hbWUoKSB7cmV0dXJuICdwYWdlSW5mbyd9XG4gICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtyZXR1cm4ge2FwcDogJycsIG1lbnVzOiBbXX19XG4gICAgbm9ybWFsaXplKGFjdGlvbikge3JldHVybiBhY3Rpb24uZGF0YS5ib2R5fVxufVxuIiwiZXhwb3J0cy5vblJvdXRlRW50ZXJlZCA9IHJlcXVpcmUoJy4vb25Sb3V0ZUVudGVyZWQnKS5kZWZhdWx0XG5leHBvcnRzLm9uUm91dGVDaGFuZ2VkID0gcmVxdWlyZSgnLi9vblJvdXRlQ2hhbmdlZCcpLmRlZmF1bHRcbiIsImltcG9ydCB7Y29va2llfSBmcm9tICcuLi8uLi9jb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG4gICAgY29va2llLnZhbHVlKCdyb3V0ZV9jaGFuZ2VkJywge3ByZXYsIG5leHR9KVxuICAgIGRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyb3V0ZV9jaGFuZ2VkJywge2RldGFpbDoge3ByZXYsIG5leHR9fSkpXG59XG4iLCJpbXBvcnQge2Nvb2tpZX0gZnJvbSAnLi4vLi4vY29yZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocm91dGUsIHJlcGxhY2UpIHtcbiAgICBjb29raWUudmFsdWUoJ3JvdXRlX2VudGVyZWQnLCB7cm91dGUsIHJlcGxhY2V9KVxuICAgIGRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyb3V0ZV9lbnRlcmVkJywge2RldGFpbDoge3JvdXRlLCByZXBsYWNlfX0pKVxufVxuIiwiaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY29uc3QgV0lORE9XID0ge1xuICAgIGNvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgZW52OiAnbW9jaycsXG4gICAgICAgIHNob3dEZXZUb29sOiBmYWxzZSxcbiAgICAgICAgZ2V0RW52OiBmdW5jdGlvbigpIHtyZXR1cm5cbiAgICAgICAgICAgIHdpbmRvdyAhPSB1bmRlZmluZWQgJiYgd2luZG93LmNvbmZpZ3VyYXRpb24gJiYgd2luZG93LmNvbmZpZ3VyYXRpb24uZW52ID9cbiAgICAgICAgICAgIHdpbmRvdy5jb25maWd1cmF0aW9uLmVudiA6IHRoaXMuZW52XG4gICAgICAgIH0sXG4gICAgICAgIGlzRGVidWc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGVudiA9IHRoaXMuZ2V0RW52KClcbiAgICAgICAgICAgIHJldHVybiBlbnYgPyBlbnYgPT0gJ21vY2snIHx8IGVudiA9PSAnZGV2JyA6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgaXNNb2NrOiBmdW5jdGlvbigpIHtyZXR1cm4gdGhpcy5nZXRFbnYoKSA9PSAnbW9jayd9LFxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBjb25maWd1cmF0aW9uID0gV0lORE9XLmNvbmZpZ3VyYXRpb25cbmV4cG9ydCBjbGFzcyBDb25maWcge1xuICAgIGNvbmZpZ3VyYXRpb24gPSB7fVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBmb3IodmFyIGk9MDtpIDwgYXJndW1lbnRzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IGFyZ3VtZW50c1tpXVxuICAgICAgICAgICAgdXRpbC5hc3NpZ24oV0lORE9XLmNvbmZpZ3VyYXRpb24sIGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBXSU5ET1cuY29uZmlndXJhdGlvblxuICAgIH1cbiAgICBhbGwoKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uaXNEZWJ1ZygpKSBjb25zb2xlLmxvZyh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25cbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzJ1xuaW1wb3J0IExvZ01vbml0b3IgZnJvbSAncmVkdXgtZGV2dG9vbHMtbG9nLW1vbml0b3InXG5pbXBvcnQgRG9ja01vbml0b3IgZnJvbSAncmVkdXgtZGV2dG9vbHMtZG9jay1tb25pdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEZXZUb29scyhcbiAgICA8RG9ja01vbml0b3IgdG9nZ2xlVmlzaWJpbGl0eUtleT1cImN0cmwtaFwiXG4gICAgICAgICAgICAgICAgIGNoYW5nZVBvc2l0aW9uS2V5PVwiY3RybC13XCI+XG4gICAgICAgICAgICAgICAgIDxMb2dNb25pdG9yIC8+XG4gICAgPC9Eb2NrTW9uaXRvcj5cbilcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB3aGVuIGZyb20gJ3doZW4nXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgcmVxdWVzdCBmcm9tICdzeW5jLXJlcXVlc3QnXG5pbXBvcnQge2NvbmZpZ3VyYXRpb259IGZyb20gJy4vQ29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSRVFVRVNUIHtcbiAgICBnZXQgZGVmYXVsdEhlYWRlcnMoKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgIH1cbiAgICBnZXQgcGF5bG9hZCgpIHtyZXR1cm4gdGhpcy5fX29wdGlvbnMuZGF0YX1cbiAgICBnZXRPcHRpb25zKCkge3JldHVybiB0aGlzLl9fb3B0aW9uc31cblxuICAgIGNvbnN0cnVjdG9yKHVybCwgbWV0aG9kKSB7XG4gICAgICAgIG1ldGhvZCA9IG1ldGhvZCA/IG1ldGhvZC50b0xvd2VyQ2FzZSgpIDogJ2dldCdcbiAgICAgICAgdGhpcy5fX29wdGlvbnMgPSB7dXJsLCBtZXRob2R9XG4gICAgICAgIHRoaXMuaGVhZGVycyh7fSlcbiAgICB9XG4gICAgZXhlY3V0ZSA9ICgpID0+IHRoaXMuZXhlID0gd2hlbihheGlvcyh0aGlzLl9fb3B0aW9ucykpXG4gICAgb3B0aW9uID0gKG4sIHYpID0+IHtcbiAgICAgICAgdGhpcy5fX29wdGlvbnNbbl0gPSB2XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGhlYWRlcnMgPSAoaGVhZGVycykgPT4gdGhpcy5vcHRpb24oJ2hlYWRlcnMnLCBhc3NpZ24odGhpcy5kZWZhdWx0SGVhZGVycywgaGVhZGVycykpXG4gICAgdXJsID0gKHVybCkgPT4gdGhpcy5vcHRpb24oJ3VybCcsIHVybClcbiAgICBkYXRhID0gKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5vcHRpb24oJ2RhdGEnLCBkYXRhKVxuICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMubWV0aG9kID09ICdnZXQnKSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9fb3B0aW9ucy51cmxcbiAgICAgICAgICAgIHRoaXMub3B0aW9uKCd1cmwnLCB0aGlzLmJ1aWxkVXJsKHVybCwgdGhpcy5idWlsZFF1ZXJ5KGRhdGEpKSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBidWlsZFVybCA9ICh1cmwsIHF1ZXJ5KSA9PiB1cmwuaW5kZXhPZignPycpID49IDAgPyBgJHt1cmx9JiR7cXVlcnl9YCA6IGAke3VybH0/JHtxdWVyeX1gXG4gICAgYnVpbGRRdWVyeSA9IChqc29uKSA9PiBqc29uID8gT2JqZWN0LmtleXMoanNvbikubWFwKGsgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGspfT0ke2VuY29kZVVSSUNvbXBvbmVudChqc29uW2tdID8ganNvbltrXSA6ICcnKX1gKS5qb2luKCcmJykgOiAnJ1xuXG4gICAgX19iZWZvcmUgPSBbXVxuICAgIF9fYWZ0ZXIgPSBbXVxuICAgIF9fc3VjY2VzcyA9IFtdXG4gICAgX19mYWlsdXJlID0gW11cbiAgICBfX3J1biA9IChwYXlsb2FkLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIGFyZ3MubWFwKGZuID0+IGZuKHBheWxvYWQpKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBiZWZvcmUgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICB0aGlzLl9fYmVmb3JlID0gYXJnc1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBhZnRlciA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHRoaXMuX19hZnRlciA9IGFyZ3NcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgc3VjY2VzcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHRoaXMuX19zdWNjZXNzID0gYXJnc1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBmYWlsdXJlID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdGhpcy5fX2ZhaWx1cmUgPSBhcmdzXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIHJ1biA9IChzeW5jKSA9PiBzeW5jID8gdGhpcy5zeW5jKCkgOiB0aGlzLmFzeW5jKClcbiAgICBhc3luYyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19ydW4odW5kZWZpbmVkLCAuLi50aGlzLl9fYmVmb3JlKVxuICAgICAgICAuZXhlY3V0ZSgpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICB0cnkge3RoaXMuX19ydW4ocmVzLCAuLi50aGlzLl9fc3VjY2Vzcyl9IGNhdGNoKGUpIHtjb25zb2xlLmVycm9yKCdyZXF1ZXN0OnN1Y2Nlc3MnLCBlKX1cbiAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHJlcyA9PiB7XG4gICAgICAgICAgICB0cnkge3RoaXMuX19ydW4ocmVzLCAuLi50aGlzLl9fZmFpbHVyZSl9IGNhdGNoKGUpIHtjb25zb2xlLmVycm9yKCdyZXF1ZXN0OmZhaWx1cmUnLCBlKX1cbiAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgdHJ5IHt0aGlzLl9fcnVuKHVuZGVmaW5lZCwgLi4udGhpcy5fX2FmdGVyKX0gY2F0Y2goZSkge2NvbnNvbGUuZXJyb3IoJ3JlcXVlc3Q6YWZ0ZXInLCBlKX1cbiAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc3luYyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gcmVxdWVzdCh0aGlzLl9fb3B0aW9ucy5tZXRob2QsIHRoaXMuX19vcHRpb25zLnVybCwgYXNzaWduKHt9LCB0aGlzLl9fb3B0aW9ucywge1xuICAgICAgICAgICAganNvbjogdGhpcy5fX29wdGlvbnMuZGF0YVxuICAgICAgICB9KSlcbiAgICAgICAgdHJ5IHtyZXMuZGF0YSA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoJ3V0ZjgnKSl9XG4gICAgICAgIGNhdGNoKGUpIHtyZXMuZGF0YSA9IG51bGx9XG4gICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA8IDMwMCkge1xuICAgICAgICAgICAgdHJ5IHt0aGlzLl9fcnVuKHJlcywgLi4udGhpcy5fX3N1Y2Nlc3MpfSBjYXRjaChlKSB7Y29uc29sZS5sb2coJ3JlcXVlc3Q6c3VjY2VzcycsIGUpfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHt0aGlzLl9fcnVuKHJlcywgLi4udGhpcy5fX2ZhaWx1cmUpfSBjYXRjaChlKSB7Y29uc29sZS5sb2coJ3JlcXVlc3Q6ZmFpbHVyZScsIGUpfVxuICAgICAgICB9XG4gICAgICAgIHRyeSB7dGhpcy5fX3J1bih1bmRlZmluZWQsIC4uLnRoaXMuX19hZnRlcil9IGNhdGNoKGUpIHtjb25zb2xlLmxvZygncmVxdWVzdDphZnRlcicsIGUpfVxuICAgICAgICByZXR1cm4gcmVzXG4gICAgfVxufVxuIiwiaW1wb3J0IGNvb2tpZSBmcm9tICcuL2Nvb2tpZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclByb2ZpbGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxvYWRGcm9tQ29va2llKClcbiAgICB9XG4gICAgbG9hZEZyb21Db29raWUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGNvb2tpZS5yZWFkKCd1c2VyJylcbiAgICB9XG4gICAgc2F2ZVRvQ29va2llID0gKCkgPT4ge1xuICAgICAgICBjb29raWUudmFsdWUoJ3VzZXInLCB0aGlzLmRhdGEpXG4gICAgfVxuICAgIGxvYWQgPSAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoIWRhdGEpIHRoaXMudW5sb2FkKClcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxuICAgICAgICAgIHRoaXMuc2F2ZVRvQ29va2llKClcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGNvb2tpZS5yZW1vdmUoJ3VzZXInKVxuICAgICAgICB0aGlzLmRhdGEgPSBudWxsXG4gICAgfVxuICAgIHVwZGF0ZSA9IChmaWVsZCwgdmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhW2ZpZWxkXSA9IHZhbHVlXG4gICAgICAgIHRoaXMuc2F2ZVRvQ29va2llKClcbiAgICB9XG4gICAgZ2V0IGlzTG9nZ2VkKCkge3JldHVybiB0aGlzLmRhdGEgPyB0cnVlIDogZmFsc2V9XG4gICAgZ2V0IGVtYWlsKCkge3JldHVybiB0aGlzLmRhdGEuZW1haWx9XG4gICAgc2V0IGVtYWlsKHYpIHt0aGlzLnVwZGF0ZSgnZW1haWwnLCB2KX1cbiAgICBnZXQgZmlyc3ROYW1lKCkge3JldHVybiB0aGlzLmRhdGEuZmlyc3ROYW1lfVxuICAgIHNldCBmaXJzdE5hbWUodikge3RoaXMudXBkYXRlKCdmaXJzdE5hbWUnLCB2KX1cbiAgICBnZXQgbGFzdE5hbWUoKSB7cmV0dXJuIHRoaXMuZGF0YS5sYXN0TmFtZX1cbiAgICBzZXQgbGFzdE5hbWUodikge3RoaXMudXBkYXRlKCdsYXN0TmFtZScsIHYpfVxuICAgIGdldCBkaXNwbGF5TmFtZSgpIHtyZXR1cm4gdGhpcy5kYXRhLmRpc3BsYXlOYW1lfVxuICAgIHNldCBkaXNwbGF5TmFtZSh2KSB7dGhpcy5zYXZlKCdkaXNwbGF5TmFtZScsIHYpfVxuICAgIGdldCBvY2N1cGF0aW9uKCkge3JldHVybiB0aGlzLmRhdGEub2NjdXBhdGlvbn1cbiAgICBzZXQgb2NjdXBhdGlvbih2KSB7dGhpcy5zYXZlKCdvY2N1cGF0aW9uJywgdil9XG4gICAgZ2V0IGRlcGFydG1lbnQoKSB7cmV0dXJuIHRoaXMuZGF0YS5kZXBhcnRtZW50fVxuICAgIHNldCBkZXBhcnRtZW50KHYpIHt0aGlzLnNhdmUoJ2RlcGFydG1lbnQnLCB2KX1cbiAgICBnZXQgbGFzdExvZ2luKCkge3JldHVybiB0aGlzLmRhdGEubGFzdExvZ2lufVxuICAgIHNldCBsYXN0TG9naW4odikge3RoaXMuc2F2ZSgnbGFzdExvZ2luJywgdil9XG59XG4iLCJpbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZSdcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcblxuY2xhc3MgQ29va2llIHtcbiAgICB2YWx1ZSA9IChuYW1lLCB2YWx1ZSwgb3B0cykgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvb2tpZS5sb2FkKG5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUobmFtZSwgYXNzaWduKHsgcGF0aDogJy8nIH0sIG9wdHMpKVxuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nvb2tpZV9kZWxldGVkJywge2RldGFpbDoge25hbWV9fSkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb29raWUuc2F2ZShuYW1lLCB2YWx1ZSwgYXNzaWduKHsgcGF0aDogJy8nIH0sIG9wdHMpKVxuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nvb2tpZV91cGRhdGVkJywge2RldGFpbDoge25hbWUsIHZhbHVlfX0pKVxuICAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmUgPSAobmFtZSwgb3B0cykgPT4gdGhpcy52YWx1ZShuYW1lLCBudWxsLCBvcHRzKVxuICAgIHJlYWQgPSAobmFtZSkgPT4gdGhpcy52YWx1ZShuYW1lKVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IENvb2tpZSgpXG4iLCJleHBvcnRzLmNvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuL0NvbmZpZycpLldJTkRPVy5jb25maWd1cmF0aW9uXG5leHBvcnRzLmNvb2tpZSA9IHJlcXVpcmUoJy4vY29va2llJykuZGVmYXVsdFxuZXhwb3J0cy5SRVFVRVNUID0gcmVxdWlyZSgnLi9SZXF1ZXN0JykuZGVmYXVsdFxuZXhwb3J0cy5Vc2VyUHJvZmlsZSA9IHJlcXVpcmUoJy4vVXNlclByb2ZpbGUnKS5kZWZhdWx0XG5leHBvcnRzLnVzZXIgPSByZXF1aXJlKCcuL3VzZXInKS5kZWZhdWx0XG5leHBvcnRzLnV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKS5kZWZhdWx0XG5leHBvcnRzLkRldlRvb2xzID0gcmVxdWlyZSgnLi9EZXZUb29scycpLmRlZmF1bHRcbiIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgdXRpbCBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vYWN0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdCB7XG4gICAgY29uc3RydWN0b3Ioa2xhc3MpIHtcbiAgICAgICAgdGhpcy5fX2tsYXNzID0ga2xhc3NcbiAgICAgICAgdGhpcy5nZXREZWZhdWx0UHJvcHMgPSB0aGlzLmdldERlZmF1bHRQcm9wcy5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZ2V0QWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9ucy5iaW5kKHRoaXMpXG4gICAgfVxuICAgIGdldERlZmF1bHRQcm9wcygpIHtyZXR1cm4ge319XG4gICAgZ2V0QWN0aW9ucyhkaXNwYXRjaCwgb3duUHJvcHMsIC4uLmFyZ3MpIHtyZXR1cm4ge319XG4gICAgcmVnaXN0ZXJBY3Rpb25zKGRpc3BhdGNoLCBvd25Qcm9wcywgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zKGRpc3BhdGNoLCBvd25Qcm9wcywgLi4uYXJncylcbiAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucykubWFwKGsgPT4gQWN0aW9uLnB1dChhY3Rpb25zW2tdLCBkaXNwYXRjaCwgb3duUHJvcHMsIC4uLmFyZ3MpKVxuICAgIH1cbiAgICBnZXQgdXRpbCgpIHtyZXR1cm4gdXRpbH1cbiAgICBnZXQgbWFwU3RhdGVUb1Byb3BzKCkge3JldHVybiAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdGhpcy51dGlsLmFzc2lnbih7fSwgdGhpcy5nZXREZWZhdWx0UHJvcHMpXG4gICAgICAgIGlmIChzdGF0ZSkgT2JqZWN0LmtleXMoc3RhdGUpLm1hcChrID0+IHRoaXMudXRpbC5hc3NpZ24obmV3UHJvcHMsIHN0YXRlW2tdKSlcbiAgICAgICAgcmV0dXJuIG5ld1Byb3BzXG4gICAgfX1cbiAgICBnZXQgbWFwRGlzcGF0Y2hUb1Byb3BzKCkge3JldHVybiAoZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJBY3Rpb25zKGRpc3BhdGNoLCBvd25Qcm9wcywgLi4uYXJncylcbiAgICAgICAgcmV0dXJuIEFjdGlvbi5hY3Rpb25zKClcbiAgICB9fVxuICAgIGdldCBrbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIGNvbm5lY3QodGhpcy5tYXBTdGF0ZVRvUHJvcHMsIHRoaXMudXRpbC5hc3NpZ24odGhpcy5tYXBEaXNwYXRjaFRvUHJvcHMsIHtcbiAgICAgICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbihkaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCguLi5hcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSkodGhpcy5fX2tsYXNzKVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVTdG9yZShyZWR1Y2VyKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICAgICAgICAgIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2VyKSxcbiAgICAgICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IG1pZGRsZXdhcmVzLCB7cnVuU2FnYX0gZnJvbSAnLi9taWRkbGV3YXJlcydcbmltcG9ydCB7dXRpbH0gZnJvbSAnLi4nXG5cbmxldCBzdG9yZSA9IG51bGxcbmV4cG9ydCBjb25zdCBnZXRTdG9yZSA9IChyZWR1Y2VycywgaW5pdGlhbFN0YXRlKSA9PiB7XG4gICAgaWYgKHV0aWwuaXNFbXB0eShzdG9yZSkgJiYgcmVkdWNlcnMpIHtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZXJzID0ge31cbiAgICAgICAgaWYgKHR5cGVvZiByZWR1Y2VycyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VyID0gbmV3IHJlZHVjZXJzKClcbiAgICAgICAgICAgIHRyYW5zZm9ybWVyc1tyZWR1Y2Vycy5uYW1lXSA9IHJlZHVjZXIudHJhbnNmb3JtLmJpbmQocmVkdWNlcilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvcih2YXIgaiBpbiByZWR1Y2Vycykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNbal0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWR1Y2VyID0gbmV3IHJlZHVjZXJzW2pdKClcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZXJzW3JlZHVjZXJzW2pdLm5hbWVdID0gcmVkdWNlci50cmFuc2Zvcm0uYmluZChyZWR1Y2VyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgICAgICAgICAgY29tYmluZVJlZHVjZXJzKHRyYW5zZm9ybWVycyksXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUsXG4gICAgICAgICAgICBtaWRkbGV3YXJlc1xuICAgICAgICApXG4gICAgICAgIHN0b3JlLnJ1blNhZ2EgPSBydW5TYWdhXG4gICAgICAgIHN0b3JlLmNsb3NlID0gKCkgPT4gc3RvcmUuZGlzcGF0Y2goRU5EKVxuICAgIH1cbiAgICByZXR1cm4gc3RvcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcbiIsImltcG9ydCB7dXRpbCwgY29uZmlndXJhdGlvbn0gZnJvbSAnLi4vLi4nXG5pbXBvcnQge2dldFN0b3JlfSBmcm9tICcuLi9TdG9yZSdcblxubGV0IF9fZGlzcGF0Y2hlciA9IG51bGxcbmNvbnN0IF9fYWN0aW9ucyA9IHt9XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShuYW1lLCBwYXlsb2FkLCAuLi5hcmdzKSB7XG4gICAgaWYgKCFwYXlsb2FkIHx8ICFwYXlsb2FkLmhhc093blByb3BlcnR5KCdkYXRhJykpXG4gICAgICAgIHBheWxvYWQgPSB1dGlsLmFzc2lnbih7fSwge2RhdGE6IHBheWxvYWR9KVxuICAgIHJldHVybiB1dGlsLmFzc2lnbih7ZXh0cmE6IGFyZ3N9LCBwYXlsb2FkLCB7dHlwZTogbmFtZX0pXG59XG5mdW5jdGlvbiBub3JtYWxpemVTZWFyY2gobmFtZSwgcmVzdWx0cywgLi4uYXJncykge3JldHVybiB7c2VhcmNoOiByZXN1bHRzLCB0eXBlOiBuYW1lfX1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIHtcbiAgICBkaXNwYXRjaGFibGUgPSB0cnVlXG4gICAgZGVidWcgPSBmYWxzZVxuICAgIGdldCBuYW1lKCkge3JldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWV9XG4gICAgZ2V0IGNvbmZpZ3VyYXRpb24oKSB7cmV0dXJuIGNvbmZpZ3VyYXRpb259XG4gICAgZ2V0IHV0aWwoKSB7cmV0dXJuIHV0aWx9XG4gICAgZ2V0IHN0b3JlKCkge3JldHVybiBnZXRTdG9yZSgpfVxuICAgIGdldCBzdGF0ZSgpIHtyZXR1cm4gdGhpcy5nZXRTdGF0ZSh0aGlzLm5hbWUpfVxuICAgIGdldCBkaXNwYXRjaGVyKCkge3JldHVybiBfX2Rpc3BhdGNoZXJ9XG4gICAgZ2V0IGZuKCkge3JldHVybiB0aGlzLl9fZm59XG5cbiAgICBwcmVQcm9jZXNzKHBheWxvYWQsIC4uLmFyZ3MpIHt9XG4gICAgYmVmb3JlRGlzcGF0Y2gocGF5bG9hZCwgLi4uYXJncykge31cbiAgICBub3JtYWxpemUocGF5bG9hZCwgLi4uYXJncykge1xuICAgICAgICBpZiAoIXBheWxvYWQgfHwgIXBheWxvYWQuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSlcbiAgICAgICAgICAgIHBheWxvYWQgPSB0aGlzLnV0aWwuYXNzaWduKHt9LCB7ZGF0YTogcGF5bG9hZH0pXG4gICAgICAgIHJldHVybiBub3JtYWxpemUodGhpcy5uYW1lLCBwYXlsb2FkLCAuLi5hcmdzKVxuICAgIH1cbiAgICBub3JtYWxpemVTZWFyY2gocmVzdWx0cykge3JldHVybiBub3JtYWxpemVTZWFyY2godGhpcy5uYW1lLCAuLi5hcmd1bWVudHMpfVxuICAgIGdldFN0YXRlKG5hbWUpIHtyZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpW2Ake25hbWV9UmVkdWNlcmBdfVxuICAgIGdldFN0YXRlcygpIHtcbiAgICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKVxuICAgICAgY29uc3QgbmV3U3RhdGVzID0ge31cbiAgICAgIE9iamVjdC5rZXlzKHN0YXRlcykubWFwKGsgPT4gdGhpcy51dGlsLmFzc2lnbihuZXdTdGF0ZXMsIHN0YXRlc1trXSkpXG4gICAgICByZXR1cm4gbmV3U3RhdGVzXG4gICAgfVxuICAgIGRlYnVnRm4ocGF5bG9hZCwgLi4uYXJncykge31cbiAgICBkaXNwYXRjaChwYXlsb2FkLCAuLi5hcmdzKSB7dGhpcy5kaXNwYXRjaGVyKHBheWxvYWQsIC4uLmFyZ3MpfVxuICAgIGdldEZuKGRpc3BhdGNoLCBvd25Qcm9wcywgLi4uYXJncykge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXNcbiAgICAgICAgaWYgKCFfX2Rpc3BhdGNoZXIpIF9fZGlzcGF0Y2hlciA9IGRpc3BhdGNoXG4gICAgICAgIGlmICghdGhpcy5fX2ZuKSB0aGlzLl9fZm4gPSAoZnVuY3Rpb24ocGF5bG9hZCwgLi4uYXJndXMpIHtcbiAgICAgICAgICAgIG1lLnByZVByb2Nlc3MocGF5bG9hZCwgLi4uYXJndXMpXG4gICAgICAgICAgICBpZiAobWUuYmVmb3JlRGlzcGF0Y2gocGF5bG9hZCwgLi4uYXJndXMpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChtZS5kaXNwYXRjaGFibGUpIG1lLmRpc3BhdGNoKG1lLm5vcm1hbGl6ZShwYXlsb2FkLCAuLi5hcmd1cykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWUuZGVidWcpIG1lLmRlYnVnRm4ocGF5bG9hZCwgLi4uYXJndXMpXG4gICAgICAgIH0pLmJpbmQodGhpcylcbiAgICAgICAgcmV0dXJuIHRoaXMuX19mblxuICAgIH1cbiAgICBzdGF0aWMgYWN0aW9ucygpIHtcbiAgICAgICAgY29uc3QgcnMgPSB7fVxuICAgICAgICBPYmplY3Qua2V5cyhfX2FjdGlvbnMpLm1hcChrID0+IHJzW2tdID0gX19hY3Rpb25zW2tdLmZuKVxuICAgICAgICByZXR1cm4gcnNcbiAgICB9XG4gICAgc3RhdGljIGdldE5hbWUoa2xhc3MpIHtpZiAoa2xhc3MpIHJldHVybiB0eXBlb2Yga2xhc3MgPT0gJ3N0cmluZycgPyBrbGFzcyA6IGtsYXNzLm5hbWV9XG4gICAgc3RhdGljIGV4ZWN1dGUoa2xhc3MsIHBheWxvYWQsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IEFjdGlvbi5nZXROYW1lKGtsYXNzKVxuICAgICAgICBjb25zdCBhY3Rpb24gPSBBY3Rpb24uZm4obmFtZSlcbiAgICAgICAgaWYgKGFjdGlvbikgYWN0aW9uKHBheWxvYWQsIC4uLmFyZ3MpXG4gICAgICAgIGVsc2UgaWYoX19kaXNwYXRjaGVyKSB7XG4gICAgICAgICAgX19kaXNwYXRjaGVyKG5vcm1hbGl6ZShgJHtuYW1lfVJlZHVjZXJgLCBwYXlsb2FkLCAuLi5hcmdzKSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgYWN0aW9uKGtsYXNzKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBBY3Rpb24uZ2V0TmFtZShrbGFzcylcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKF9fYWN0aW9ucykuaW5kZXhPZihgZXhlY3V0ZSR7bmFtZX1gKSA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hY3Rpb25zW2BleGVjdXRlJHtuYW1lfWBdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgc3RhdGljIGZuKGtsYXNzKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IEFjdGlvbi5hY3Rpb24oa2xhc3MpXG4gICAgICAgIGlmIChhY3Rpb24pIHJldHVybiBhY3Rpb24uZm5cbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlKGtsYXNzKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IEFjdGlvbi5hY3Rpb24oa2xhc3MpXG4gICAgICAgIGlmIChhY3Rpb24pIHJldHVybiBhY3Rpb24uaW5zdGFuY2VcbiAgICB9XG4gICAgc3RhdGljIHB1dChrbGFzcywgZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmICghX19kaXNwYXRjaGVyKSBfX2Rpc3BhdGNoZXIgPSBkaXNwYXRjaFxuICAgICAgICBjb25zdCBuYW1lID0gQWN0aW9uLmdldE5hbWUoa2xhc3MpXG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gQWN0aW9uLmFjdGlvbihuYW1lKVxuICAgICAgICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBrbGFzcygpXG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLmlzQXBpQWN0aW9uKSBpbnN0YW5jZS5ydW5TYWdhKClcbiAgICAgICAgICAgICAgICBfX2FjdGlvbnNbYGV4ZWN1dGUke25hbWV9YF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgZm46IGluc3RhbmNlLmdldEZuKF9fZGlzcGF0Y2hlciwgb3duUHJvcHMsIC4uLmFyZ3MpLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7cHV0LCB0YWtlTGF0ZXN0fSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgICByZXF1ZXN0ID0gbnVsbFxuICAgIHN1Y2Nlc3NBY3Rpb25zID0gbnVsbFxuICAgIGZhaWx1cmVBY3Rpb25zID0gbnVsbFxuICAgIGdldCBpc0FwaUFjdGlvbigpIHtyZXR1cm4gdHJ1ZX1cbiAgICBnZXQgYXBpU3VjY2Vzc1N0YXRlKCkge3JldHVybiB0aGlzLmdldFN0YXRlKGBBcGlTdWNjZXNzJHt0aGlzLm5hbWV9YCl9XG5cbiAgICBwcmVQcm9jZXNzKHBheWxvYWQsIC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ID0gdGhpcy5sb2FkUmVxdWVzdChwYXlsb2FkLCAuLi5hcmdzKVxuICAgICAgICB0aGlzLmNhY2hlID0gdGhpcy5sb2FkQ2FjaGUocGF5bG9hZCwgLi4uYXJncylcbiAgICAgICAgbGV0IGNhbGxiYWNrID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgfVxuICAgIGxvYWRSZXF1ZXN0KHBheWxvYWQsIC4uLmFyZ3MpIHt0aHJvdyBgJHt0aGlzLm5hbWV9OiBObyBpbXBsZW1lbnRhdGlvbiBvZiBmdW5jdGlvbiBsb2FkUmVxdWVzdGB9XG4gICAgbG9hZENhY2hlKHBheWxvYWQsIC4uLmFyZ3MpIHtyZXR1cm4gdW5kZWZpbmVkfVxuICAgIHNob3VsZENhbGxBcGkocGF5bG9hZCwgLi4uYXJncykge3JldHVybiB0cnVlfVxuICAgIHJ1blNhZ2EoKSB7dGhpcy5zdG9yZS5ydW5TYWdhKHRoaXMuc2FnYSwgdGhpcyl9XG4gICAgc2FnYSA9IGZ1bmN0aW9uKihtZSkge1xuICAgICAgeWllbGQgdGFrZUxhdGVzdChtZS5uYW1lLCBmdW5jdGlvbiooYWN0aW9uKSB7XG4gICAgICAgICAgY29uc3Qge2NhY2hlLCByZXF1ZXN0LCBuYW1lLCBzdWNjZXNzQWN0aW9ucywgZmFpbHVyZUFjdGlvbnN9ID0gbWVcbiAgICAgICAgICBmdW5jdGlvbiogc3VjY2VzcyhyZXMsIHJlcXVlc3QpIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb25zID0gW2BBcGlTdWNjZXNzJHtuYW1lfWBdLmNvbmNhdChzdWNjZXNzQWN0aW9ucylcbiAgICAgICAgICAgIGFjdGlvbnMubWFwKGFjdGlvbiA9PiBhY3Rpb24gPyBBY3Rpb24uZXhlY3V0ZShhY3Rpb24sIHJlcywgcmVxdWVzdC5wYXlsb2FkKSA6IGZhbHNlKVxuICAgICAgICAgICAgaWYgKG1lLmNhbGxiYWNrKSBtZS5jYWxsYmFjayhyZXMsIHJlcXVlc3QucGF5bG9hZClcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVuY3Rpb24qIGZhaWx1cmUocmVzLCByZXF1ZXN0KSB7XG4gICAgICAgICAgICBsZXQgYWN0aW9ucyA9IFtgQXBpRmFpbHVyZSR7bmFtZX1gXS5jb25jYXQoZmFpbHVyZUFjdGlvbnMpXG4gICAgICAgICAgICBhY3Rpb25zLm1hcChhY3Rpb24gPT4gYWN0aW9uID8gQWN0aW9uLmV4ZWN1dGUoYWN0aW9uLCByZXMsIHJlcXVlc3QucGF5bG9hZCkgOiBmYWxzZSlcbiAgICAgICAgICAgIGlmIChtZS5jYWxsYmFjaykgbWUuY2FsbGJhY2socmVzLCByZXF1ZXN0LnBheWxvYWQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCByZXMgPSB5aWVsZCBjYWNoZSA/IGNhY2hlIDogcmVxdWVzdC5ydW4oKVxuICAgICAgICAgIGlmIChyZXMuc3RhdHVzIDwgMzAwKSB5aWVsZCBzdWNjZXNzKHJlcywgcmVxdWVzdClcbiAgICAgICAgICBlbHNlIHlpZWxkIGZhaWx1cmUocmVzLCByZXF1ZXN0KVxuICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm94eUFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gICAgZGlzcGF0Y2hhYmxlID0gZmFsc2VcbiAgICBwcm94eUNsYXNzZXMgPSBudWxsXG4gICAgcHJveHlOb3JtYWxpemUoc3RhdGUsIHBheWxvYWQsIC4uLmFyZ3MpIHtyZXR1cm4gcGF5bG9hZH1cbiAgICBiZWZvcmVEaXNwYXRjaChwYXlsb2FkLCAuLi5hcmdzKSB7XG4gICAgICAgIFtdLmNvbmNhdCh0aGlzLnByb3h5Q2xhc3NlcykubWFwKFxuICAgICAgICAgICAga2xhc3MgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gQWN0aW9uLmdldE5hbWUoa2xhc3MpXG4gICAgICAgICAgICAgICAgQWN0aW9uLmV4ZWN1dGUobmFtZSwgdGhpcy5wcm94eU5vcm1hbGl6ZSh0aGlzLmdldFN0YXRlKG5hbWUpLCBwYXlsb2FkLCAuLi5hcmdzKSwgLi4uYXJncylcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBQcm94eUFjdGlvbiBmcm9tICcuL1Byb3h5QWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hBY3Rpb24gZXh0ZW5kcyBQcm94eUFjdGlvbiB7XG4gICAgcHJveHlOb3JtYWxpemUoc3RhdGUsIHBheWxvYWQsIC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoRm4oc3RhdGUsIHBheWxvYWQsIC4uLmFyZ3MpXG4gICAgfVxuICAgIHNlYXJjaEZuKHN0YXRlLCBwYXlsb2FkLCAuLi5hcmdzKSB7cmV0dXJuIHN0YXRlfVxufVxuIiwiZXhwb3J0cy5BY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLmRlZmF1bHRcbmV4cG9ydHMuQXBpQWN0aW9uID0gcmVxdWlyZSgnLi9BcGlBY3Rpb24nKS5kZWZhdWx0XG5leHBvcnRzLlByb3h5QWN0aW9uID0gcmVxdWlyZSgnLi9Qcm94eUFjdGlvbicpLmRlZmF1bHRcbmV4cG9ydHMuU2VhcmNoQWN0aW9uID0gcmVxdWlyZSgnLi9TZWFyY2hBY3Rpb24nKS5kZWZhdWx0XG4iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCAqIGFzIHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnXG5leHBvcnRzLkFjdGlvbiA9IGFjdGlvbnMuQWN0aW9uXG5leHBvcnRzLkFwaUFjdGlvbiA9IGFjdGlvbnMuQXBpQWN0aW9uXG5leHBvcnRzLlByb3h5QWN0aW9uID0gYWN0aW9ucy5Qcm94eUFjdGlvblxuZXhwb3J0cy5TZWFyY2hBY3Rpb24gPSBhY3Rpb25zLlNlYXJjaEFjdGlvblxuZXhwb3J0cy5Db25uZWN0ID0gcmVxdWlyZSgnLi9Db25uZWN0JykuZGVmYXVsdFxuZXhwb3J0cy5SZWR1Y2VyID0gcmVkdWNlcnMuUmVkdWNlclxuZXhwb3J0cy5Db25maWdSZWR1Y2VyID0gcmVkdWNlcnMuQ29uZmlnUmVkdWNlclxuZXhwb3J0cy5Db29raWVSZWR1Y2VyID0gcmVkdWNlcnMuQ29va2llUmVkdWNlclxuZXhwb3J0cy5GYWxzZVJlZHVjZXIgPSByZWR1Y2Vycy5GYWxzZVJlZHVjZXJcbmV4cG9ydHMuVHJ1ZVJlZHVjZXIgPSByZWR1Y2Vycy5UcnVlUmVkdWNlclxuZXhwb3J0cy5OdWxsUmVkdWNlciA9IHJlZHVjZXJzLk51bGxSZWR1Y2VyXG5leHBvcnRzLkxpc3RSZWR1Y2VyID0gcmVkdWNlcnMuTGlzdFJlZHVjZXJcbmV4cG9ydHMuZ2V0U3RvcmUgPSByZXF1aXJlKCcuL1N0b3JlJykuZ2V0U3RvcmVcbiIsImltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlfSBmcm9tICdyZWR1eCdcbmltcG9ydCBfdGh1bmsgZnJvbSAnLi90aHVuaydcbmltcG9ydCBfc2FnYSBmcm9tICcuL3NhZ2EnXG5pbXBvcnQgX2xvZ2dlciBmcm9tICcuL2xvZ2dlcidcblxuaW1wb3J0IHtjb25maWd1cmF0aW9uLCBEZXZUb29sc30gZnJvbSAnLi4vLi4nXG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyYXRpb24uaXNEZWJ1ZygpID8gY29tcG9zZShcbiAgICBhcHBseU1pZGRsZXdhcmUoXG4gICAgICAgIF9zYWdhLFxuICAgICAgICBfdGh1bmssXG4gICAgICAgIC8vIF9sb2dnZXJcbiAgICApLFxuICAgIERldlRvb2xzLmluc3RydW1lbnQoKVxuKSA6IGFwcGx5TWlkZGxld2FyZShcbiAgICBfc2FnYSxcbiAgICBfdGh1bmtcbilcblxuZXhwb3J0IGNvbnN0IHJ1blNhZ2EgPSBfc2FnYS5ydW5cbiIsImltcG9ydCB7Y3JlYXRlTG9nZ2VyfSBmcm9tICdyZWR1eC1sb2dnZXInXG5cbmNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcigpXG5leHBvcnQgZGVmYXVsdCBsb2dnZXJcbiIsImltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xuXG5jb25zdCBzYWdhID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxuZXhwb3J0IGRlZmF1bHQgc2FnYVxuIiwiaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuXG5jb25zdCBfdGh1bmsgPSB0aHVua1xuZXhwb3J0IGRlZmF1bHQgX3RodW5rXG4iLCJpbXBvcnQgUmVkdWNlciBmcm9tICcuL1JlZHVjZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ1JlZHVjZXIgZXh0ZW5kcyBSZWR1Y2VyIHtcbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiB0aGlzLmNvbmZpZ3VyYXRpb24udWlbdGhpcy5maWVsZE5hbWVdfVxuICAgIG5vcm1hbGl6ZShhY3Rpb24pIHtyZXR1cm4gYWN0aW9uLmRhdGEgPyBhY3Rpb24uZGF0YSA6IHRoaXMuY29uZmlndXJhdGlvbi51aVt0aGlzLmZpZWxkTmFtZV19XG59XG4iLCJpbXBvcnQgUmVkdWNlciBmcm9tICcuL1JlZHVjZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZVJlZHVjZXIgZXh0ZW5kcyBSZWR1Y2VyIHtcbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiB0aGlzLnV0aWwuY29va2llLnJlYWQodGhpcy5maWVsZE5hbWUpfVxuICAgIGdldCB2YWx1ZSgpIHtyZXR1cm4gdGhpcy5fX3ZhbHVlfVxuICAgIHNldCB2YWx1ZSh2KSB7XG4gICAgICB0aGlzLl9fdmFsdWUgPSB2XG4gICAgICB0aGlzLnNldENvb2tpZSgpXG4gICAgfVxuICAgIHNldENvb2tpZSgpIHtcbiAgICAgIHRoaXMudXRpbC5jb29raWUudmFsdWUodGhpcy5maWVsZE5hbWUsIHRoaXMuX192YWx1ZVt0aGlzLmZpZWxkTmFtZV0pXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlZHVjZXIgZnJvbSAnLi9SZWR1Y2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWxzZVJlZHVjZXIgZXh0ZW5kcyBSZWR1Y2VyIHtcbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiBmYWxzZX1cbn1cbiIsImltcG9ydCBSZWR1Y2VyIGZyb20gJy4vUmVkdWNlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdFJlZHVjZXIgZXh0ZW5kcyBSZWR1Y2VyIHtcbiAgICBpc0xpc3QgPSB0cnVlXG4gICAgcHJpbWFyeUtleSA9ICdpZCdcbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiB7fX1cbiAgICBnZXQgdmFsdWUoKSB7cmV0dXJuIHRoaXMuX192YWx1ZX1cbiAgICBzZXQgdmFsdWUodikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZbdGhpcy5maWVsZE5hbWVdXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgaWQgPSB2YWx1ZVt0aGlzLnByaW1hcnlLZXldXG4gICAgICAgICAgICB0aGlzLnN0YXRlW3RoaXMuZmllbGROYW1lXVtpZF0gPSB2YWx1ZVxuICAgICAgICAgICAgdGhpcy5fX3ZhbHVlID0gdGhpcy51dGlsLmFzc2lnbih7fSwgdGhpcy5zdGF0ZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX192YWx1ZSA9IHRoaXMuc3RhdGVcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWR1Y2VyIGZyb20gJy4vUmVkdWNlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVsbFJlZHVjZXIgZXh0ZW5kcyBSZWR1Y2VyIHtcbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiBudWxsfVxuICAgIG5vcm1hbGl6ZShhY3Rpb24pIHtyZXR1cm4gbnVsbH1cbn1cbiIsImltcG9ydCB7dXRpbCwgY29uZmlndXJhdGlvbn0gZnJvbSAnLi4vLi4nXG5pbXBvcnQge2dldFN0b3JlfSBmcm9tICcuLi9TdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkdWNlciB7XG4gICAgZGVidWcgPSBmYWxzZVxuICAgIGdldCBuYW1lKCkge3JldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWV9XG4gICAgZ2V0IGNvbmZpZ3VyYXRpb24oKSB7cmV0dXJuIGNvbmZpZ3VyYXRpb259XG4gICAgZ2V0IHV0aWwoKSB7cmV0dXJuIHV0aWx9XG4gICAgZ2V0IHN0b3JlKCkge3JldHVybiBnZXRTdG9yZSgpfVxuICAgIGdldCBzdGF0ZSgpIHtyZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpW3RoaXMubmFtZV19XG5cbiAgICBnZXQgZmllbGROYW1lKCkge3Rocm93IGAke3RoaXMubmFtZX06IE5vIGZpZWxkTmFtZWB9XG4gICAgZ2V0IGRlZmF1bHRTdGF0ZSgpIHtyZXR1cm4ge1xuICAgICAgICBbdGhpcy5maWVsZE5hbWVdOiB0aGlzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgW2BTZWFyY2gke3RoaXMuZmllbGROYW1lfVJlc3VsdHNgXTogbnVsbFxuICAgIH19XG4gICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtyZXR1cm4gbnVsbH1cbiAgICB0cmFuc2Zvcm0oc3RhdGUgPSB0aGlzLmRlZmF1bHRTdGF0ZSwgYWN0aW9uLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBgJHthY3Rpb24udHlwZX1gID09IHRoaXMubmFtZVxuICAgICAgICB8fCBgJHthY3Rpb24udHlwZX1SZWR1Y2VyYCA9PSB0aGlzLm5hbWVcbiAgICAgICAgfHwgYFNlYXJjaCR7YWN0aW9uLnR5cGV9UmVkdWNlcmAgPT0gYFNlYXJjaCR7dGhpcy5uYW1lfWBcbiAgICAgICAgICAgID8gdGhpcy5tYXRjaGVkVHJhbnNmb3JtKHN0YXRlLCBhY3Rpb24sIC4uLmFyZ3MpXG4gICAgICAgICAgICA6IHRoaXMubm90TWF0Y2hlZFRyYW5zZm9ybShzdGF0ZSwgYWN0aW9uLCAuLi5hcmdzKVxuICAgIH1cbiAgICBub3JtYWxpemUoYWN0aW9uKSB7cmV0dXJuIGFjdGlvbi5kYXRhfVxuICAgIG5vcm1hbGl6ZVNlYXJjaChhY3Rpb24pIHtyZXR1cm4gYWN0aW9uLnNlYXJjaH1cbiAgICBkZWJ1Z0ZuKHN0YXRlLCBhY3Rpb24sIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKVxuICAgICAgICBjb25zb2xlLmxvZygncHJldi1zdGF0ZScsIHN0YXRlKVxuICAgICAgICBjb25zb2xlLmxvZygnbmV4dC1zdGF0ZScsIHRoaXMudmFsdWUpXG4gICAgICAgIGNvbnNvbGUubG9nKCdhY3Rpb24nLCBhY3Rpb24pXG4gICAgICAgIGNvbnNvbGUubG9nKCdleHRyYScsIC4uLmFyZ3MpXG4gICAgfVxuICAgIG1hdGNoZWRUcmFuc2Zvcm0oc3RhdGUsIGFjdGlvbiwgLi4uYXJncykge1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvblxuICAgICAgICBpZiAoYWN0aW9uLmhhc093blByb3BlcnR5KCdkYXRhJykpIHRoaXMudmFsdWUgPSB7W3RoaXMuZmllbGROYW1lXTogdGhpcy5ub3JtYWxpemUoYWN0aW9uKX1cbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uLmhhc093blByb3BlcnR5KCdzZWFyY2gnKSkgdGhpcy52YWx1ZSA9IHtbYFNlYXJjaCR7dGhpcy5maWVsZE5hbWV9UmVzdWx0c2BdOiB0aGlzLm5vcm1hbGl6ZVNlYXJjaChhY3Rpb24pfVxuICAgICAgICBpZiAodGhpcy5kZWJ1ZykgdGhpcy5kZWJ1Z0ZuKHN0YXRlLCBhY3Rpb24sIC4uLmFyZ3MpXG4gICAgICAgIHJldHVybiB0aGlzLnV0aWwuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRTdGF0ZSwgc3RhdGUsIHRoaXMudmFsdWUpXG4gICAgfVxuICAgIG5vdE1hdGNoZWRUcmFuc2Zvcm0oc3RhdGUsIGFjdGlvbiwgLi4uYXJncykge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVkdWNlciBmcm9tICcuL1JlZHVjZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRydWVSZWR1Y2VyIGV4dGVuZHMgUmVkdWNlciB7XG4gICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtyZXR1cm4gdHJ1ZX1cbn1cbiIsImV4cG9ydHMuUmVkdWNlciA9IHJlcXVpcmUoJy4vUmVkdWNlcicpLmRlZmF1bHRcbmV4cG9ydHMuQ29uZmlnUmVkdWNlciA9IHJlcXVpcmUoJy4vQ29uZmlnUmVkdWNlcicpLmRlZmF1bHRcbmV4cG9ydHMuQ29va2llUmVkdWNlciA9IHJlcXVpcmUoJy4vQ29va2llUmVkdWNlcicpLmRlZmF1bHRcbmV4cG9ydHMuRmFsc2VSZWR1Y2VyID0gcmVxdWlyZSgnLi9GYWxzZVJlZHVjZXInKS5kZWZhdWx0XG5leHBvcnRzLlRydWVSZWR1Y2VyID0gcmVxdWlyZSgnLi9UcnVlUmVkdWNlcicpLmRlZmF1bHRcbmV4cG9ydHMuTnVsbFJlZHVjZXIgPSByZXF1aXJlKCcuL051bGxSZWR1Y2VyJykuZGVmYXVsdFxuZXhwb3J0cy5MaXN0UmVkdWNlciA9IHJlcXVpcmUoJy4vTGlzdFJlZHVjZXInKS5kZWZhdWx0XG4iLCJpbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi9Vc2VyUHJvZmlsZSdcblxuY29uc3QgdXNlciA9IG5ldyBVc2VyUHJvZmlsZSgpXG5leHBvcnQgZGVmYXVsdCB1c2VyXG4iLCJpbXBvcnQge2Jyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IGZvcm1hdCBmcm9tICdzdHJpbmctZm9ybWF0J1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92MSdcbmltcG9ydCBSRVFVRVNUIGZyb20gJy4vUmVxdWVzdCdcbmltcG9ydCBjb29raWUgZnJvbSAnLi9jb29raWUnXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXG5cbmZvcm1hdC5leHRlbmQoU3RyaW5nLnByb3RvdHlwZSlcblxuY2xhc3MgVXRpbCB7XG4gICAgZ2V0IHVzZXIoKSB7cmV0dXJuIHVzZXJ9XG4gICAgZ2V0IGFzc2lnbigpIHtyZXR1cm4gYXNzaWdufVxuICAgIGdldCBmb3JtYXQoKSB7cmV0dXJuIGZvcm1hdH1cbiAgICBnZXQgdXVpZCgpIHtyZXR1cm4gdXVpZH1cbiAgICBnZXQgbG9kYXNoKCkge3JldHVybiBsb2Rhc2h9XG4gICAgZ2V0IGhpc3RvcnkoKSB7cmV0dXJuIGJyb3dzZXJIaXN0b3J5fVxuICAgIGdldCBjb29raWUoKSB7cmV0dXJuIGNvb2tpZX1cblxuICAgIGdldCBoYXNoKCkge3JldHVybiB0aGlzLmV4dHJhY3RQYWlycygobG9jYXRpb24uaGFzaCA/IGxvY2F0aW9uLmhhc2ggOiAnIycpLnNsaWNlKDEpKX1cbiAgICBnZXQgcXVlcmllcygpIHtyZXR1cm4gdGhpcy5leHRyYWN0UGFpcnMoKGxvY2F0aW9uLnNlYXJjaCA/IGxvY2F0aW9uLnNlYXJjaCA6ICc/Jykuc2xpY2UoMSkpfVxuICAgIGV4dHJhY3RQYWlycyA9IChzdHIpID0+IHtcbiAgICAgICAgbGV0IHJzID0ge31cbiAgICAgICAgbGV0IHBhaXJzID0gc3RyLnNwbGl0KCcmJylcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhaXIgPSBwYWlyc1tpXVxuICAgICAgICAgICAgaWYgKHBhaXIuaW5kZXhPZignPScpID4gMCkge1xuICAgICAgICAgICAgICAgIHBhaXIgPSBwYWlyLnNwbGl0KCc9JylcbiAgICAgICAgICAgICAgICByc1twYWlyWzBdXSA9IHBhaXJbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgcnNbcGFpcl0gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJzXG4gICAgfVxuICAgIGdldFF1ZXJ5VmFsdWUgPSBuYW1lID0+IHtcbiAgICAgICAgdmFyIHVybCA9IGxvY2F0aW9uLmhyZWZcbiAgICAgICAgdmFyIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csICdcXFxcJCYnKVxuICAgICAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKGBbPyZdJHtuYW1lfSg9KFteJiNdKil8JnwjfCQpYCksXG4gICAgICAgICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpXG4gICAgICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGxcbiAgICAgICAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJydcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCAnICcpKVxuICAgIH1cbiAgICBpc0VtcHR5ID0gbyA9PiBsb2Rhc2guaXNFbXB0eShvKVxuICAgIGlzTnVtYmVyID0gbyA9PiB0eXBlb2YgbyA9PSAnbnVtYmVyJyB8fCAobyAmJiBwYXJzZUZsb2F0KG8udG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csJycpKSlcbiAgICBudW1iZXJPZiA9IG8gPT4gdHlwZW9mIG8gPT0gJ251bWJlcicgPyBvIDogbyAmJiBwYXJzZUZsb2F0KG8udG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csJycpKSA/IHBhcnNlRmxvYXQoby50b1N0cmluZygpLnJlcGxhY2UoLywvZywnJykpIDogMFxuICAgIHZhbHVlT2YgPSAobywgZCkgPT4gdGhpcy5pc0VtcHR5KG8pID8gZCA6IG9cbiAgICBhbW91bnRPZiA9IChvKSA9PiB0aGlzLm51bWJlcldpdGhDb21tYXMobylcbiAgICBkYXRlT2YgPSBvID0+IG1vbWVudChvKS5mb3JtYXQoJ01NTU0gRG8gWVlZWScpXG4gICAgcmFuZG9tID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG4gICAgZXhjbHVkZSA9IChvcmlnaW4sIGV4Y2x1ZGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BzID0ge31cbiAgICAgICAgT2JqZWN0LmtleXMob3JpZ2luKS5tYXAoayA9PiB7XG4gICAgICAgICAgICBpZiAob3JpZ2luLmhhc093blByb3BlcnR5KGspICYmIGV4Y2x1ZGVzLmluZGV4T2YoaykgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc3NpZ24ocHJvcHMsIHtba106IG9yaWdpbltrXX0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBwcm9wc1xuICAgIH1cbiAgICBpbmNsdWRlID0gKG9yaWdpbiwgaW5jbHVkZXMpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fVxuICAgICAgICBPYmplY3Qua2V5cyhvcmlnaW4pLm1hcChrID0+IHtcbiAgICAgICAgICAgIGlmIChvcmlnaW4uaGFzT3duUHJvcGVydHkoaykgJiYgaW5jbHVkZXMuaW5kZXhPZihrKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc3NpZ24ocHJvcHMsIHtba106IG9yaWdpbltrXX0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBwcm9wc1xuICAgIH1cblxuICAgIHJlcXVlc3QgPSAodXJsLCBtZXRob2QsIGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBSRVFVRVNUKHVybCwgbWV0aG9kKS5kYXRhKGRhdGEpXG4gICAgfVxuICAgIHF1ZXJ5ID0gKHVybCwgZGF0YSkgPT4gdGhpcy5yZXF1ZXN0KHVybCwgJ0dFVCcsIGRhdGEpXG4gICAgcG9zdCA9ICh1cmwsIGRhdGEpID0+IHRoaXMucmVxdWVzdCh1cmwsICdQT1NUJywgZGF0YSlcbiAgICB1cGRhdGUgPSAodXJsLCBkYXRhKSA9PiB0aGlzLnJlcXVlc3QodXJsLCAnUFVUJywgZGF0YSlcbiAgICByZW1vdmUgPSAodXJsLCBkYXRhKSA9PiB0aGlzLnJlcXVlc3QodXJsLCAnREVMRVRFJywgZGF0YSlcbiAgICBvcHRpb25zID0gKHVybCwgZGF0YSkgPT4gdGhpcy5yZXF1ZXN0KHVybCwgJ09QVElPTlMnLCBkYXRhKVxuXG4gICAgbmV3VGFiID0gbGluayA9PiB3aW5kb3cub3BlbihsaW5rLCAnX2JsYW5rJylcbiAgICByZWRpcmVjdCA9IGxpbmsgPT4gd2luZG93Lm9wZW4obGluaylcbiAgICBhZGRKc1NjcmlwdCA9IChzcmMsIGlkLCBpbm5lckhUTUwpID0+IHRoaXMuYXBwZW5kVGFnKCdzY3JpcHQnLCB7c3JjfSwgaWQsIGlubmVySFRNTClcbiAgICBhZGRDc3NMaW5rID0gKGhyZWYsIGlkKSA9PiB0aGlzLmFkZExpbmsoaHJlZiwge3R5cGU6ICd0ZXh0L2NzcycscmVsOiAnc3R5bGVzaGVldCcsfSwgaWQpXG4gICAgYWRkTGluayA9IChocmVmLCBwcm9wcywgaWQpID0+IHRoaXMuYXBwZW5kVGFnKCdsaW5rJywge2hyZWYsIC4uLnByb3BzfSwgaWQpXG4gICAgYWRkTWV0YSA9IChuYW1lLCBjb250ZW50LCBpZCkgPT4gdGhpcy5hcHBlbmRUYWcoJ21ldGEnLCB7bmFtZSwgY29udGVudH0sIGlkKVxuICAgIGFwcGVuZFRhZyA9ICh0YWdOYW1lLCBwcm9wcywgaWQsIGlubmVySFRNTCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09ICd1bmRlZmluZWQnIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuXG4gICAgICAgIGxldCB0YWdzICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSksXG4gICAgICAgICAgICBsYXN0ICAgID0gdGFnc1t0YWdzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgdGFnICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSlcbiAgICAgICAgdGFnLmlkICA9IGlkXG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5tYXAoKGspID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9wc1trXSkgdGFnW2tdID0gcHJvcHNba11cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGlubmVySFRNTCkgdHJ5IHt0YWcuaW5uZXJIVE1MID0gaW5uZXJIVE1MfSBjYXRjaChlKSB7fVxuICAgICAgICBsYXN0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgbGFzdC5uZXh0U2libGluZylcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgVXRpbCgpXG4iXX0=
