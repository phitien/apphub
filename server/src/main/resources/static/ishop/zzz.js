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
    "app": "ishop",
    "appname": "iShop",
    "apptitle": "iShop",
    "appdescription": "iShop - shop on go",
    "apppath": "/",
    "applogo": "/static/ishop/images/logo.jpg",
    "appversion": "0.0.1",
    "port": 2000,
    "livereloadport": 35729
};

},{}],150:[function(require,module,exports){
'use strict';

module.exports = exports = {
    api: {
        urls: {
            pageInfo: '/static/ishop/api/page.json',
            pageInfoLogged: '/static/ishop/api/page-logged.json',
            login: '/static/ishop/api/login.json'
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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call.apply(_ref, [this].concat(args))), _this), _this.pageClassName = 'ishop-landing-page', _this.pageLoadedApi = null, _this.children = function () {
            return _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                    'div',
                    null,
                    'Landing page of iShop'
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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call.apply(_ref, [this].concat(args))), _this), _this.pageClassName = 'ishop-sub-page', _this.pageLoadedApi = null, _this.children = function () {
            return _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                    'div',
                    null,
                    'Sub page of iShop'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29va2llL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2VsZW1lbnQtY2xhc3MvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsIm5vZGVfbW9kdWxlcy9odHRwLXJlc3BvbnNlLW9iamVjdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pcy1ub2RlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIm5vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwibm9kZV9tb2R1bGVzL3FzL2xpYi9mb3JtYXRzLmpzIiwibm9kZV9tb2R1bGVzL3FzL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9xcy9saWIvcGFyc2UuanMiLCJub2RlX21vZHVsZXMvcXMvbGliL3N0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy9xcy9saWIvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtY29va2llL2J1aWxkL2Nvb2tpZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1kcm9wem9uZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsUG9ydGFsLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2FyaWFBcHBIaWRlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9mb2N1c01hbmFnZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvc2NvcGVUYWIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvdGFiYmFibGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwibm9kZV9tb2R1bGVzL3N5bmMtcmVxdWVzdC9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3RoZW4tcmVxdWVzdC9saWIvaGFuZGxlLXFzLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJzcmMvYXBwcy9pc2hvcC9BcHBsaWNhdGlvbi5qcyIsInNyYy9hcHBzL2lzaG9wL1ZpZXdwb3J0LmpzIiwic3JjL2FwcHMvaXNob3AvY29uZi9pbmRleC5qcyIsInNyYy9hcHBzL2lzaG9wL2NvbmZpZy9iYXNlLmpzIiwic3JjL2FwcHMvaXNob3AvY29uZmlnL2luZGV4LmpzIiwic3JjL2FwcHMvaXNob3AvY29uZmlnL21vY2suanMiLCJzcmMvYXBwcy9pc2hvcC9jb25maWcvdWkuanMiLCJzcmMvYXBwcy9pc2hvcC9ldmVudHMuanMiLCJzcmMvYXBwcy9pc2hvcC9pbmRleC5qcyIsInNyYy9hcHBzL2lzaG9wL3BhZ2VzL0xhbmRpbmdQYWdlLmpzIiwic3JjL2FwcHMvaXNob3AvcGFnZXMvUGFnZS5qcyIsInNyYy9hcHBzL2lzaG9wL3BhZ2VzL1N1YlBhZ2UuanMiLCJzcmMvYXBwcy9pc2hvcC9wYWdlcy9pbmRleC5qcyIsInNyYy9hcHBzL2lzaG9wL3JlZHV4L0FjdGlvbi5qcyIsInNyYy9hcHBzL2lzaG9wL3JlZHV4L0Nvbm5lY3QuanMiLCJzcmMvYXBwcy9pc2hvcC9yZWR1eC9SZWR1Y2VyLmpzIiwic3JjL2FwcHMvaXNob3AvcmVkdXgvaW5kZXguanMiLCJzcmMvYXBwcy9pc2hvcC9yb3V0ZXMuanMiLCJzcmMvY29tbW9uL2FwcGxpY2F0aW9ucy9BcHBsaWNhdGlvbi5qcyIsInNyYy9jb21tb24vYXBwbGljYXRpb25zL0Zvb3RlckFwcGxpY2F0aW9uLmpzIiwic3JjL2NvbW1vbi9hcHBsaWNhdGlvbnMvSGVhZGVyQXBwbGljYXRpb24uanMiLCJzcmMvY29tbW9uL2FwcGxpY2F0aW9ucy9Sb3V0ZXNBcHBsaWNhdGlvbi5qcyIsInNyYy9jb21tb24vYXBwbGljYXRpb25zL2luZGV4LmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL0JyZWFkY3J1bWJzLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL0J1dHRvbi5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9DYXJkLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL0NvbXBvbmVudC5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9Ecm9wem9uZS5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9Mb2dpbi5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9NZW51LmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL01vZGFsLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL01vZGFsRGVmYXVsdC5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9QYWdlLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL1NlYXJjaEZpZWxkLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL1NlbGVjdEZpZWxkLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL1N0ZXBwZXIuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvU3R5bGUuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvVGFibGUuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvVGFicy5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9UZXh0RmllbGQuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvVmlld3BvcnQuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvaW5kZXguanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Gb290ZXIuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9IZWFkZXIuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9IZWxwLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL25hdmlnYXRpb24vTGlua3NIdWIuanMiLCJzcmMvY29tbW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Mb2dvQm94LmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL25hdmlnYXRpb24vTm90aWZpY2F0aW9uLmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL25hdmlnYXRpb24vU2VhcmNoQm94LmpzIiwic3JjL2NvbW1vbi9jb21wb25lbnRzL25hdmlnYXRpb24vVXNlckJveC5qcyIsInNyYy9jb21tb24vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1ZlcnNpb24uanMiLCJzcmMvY29tbW9uL3JlZHV4L0FjdGlvbi5qcyIsInNyYy9jb21tb24vcmVkdXgvQ29ubmVjdC5qcyIsInNyYy9jb21tb24vcmVkdXgvUmVkdWNlci5qcyIsInNyYy9jb21tb24vcm91dGVzL2luZGV4LmpzIiwic3JjL2NvbW1vbi9yb3V0ZXMvb25Sb3V0ZUNoYW5nZWQuanMiLCJzcmMvY29tbW9uL3JvdXRlcy9vblJvdXRlRW50ZXJlZC5qcyIsInNyYy9jb3JlL0NvbmZpZy5qcyIsInNyYy9jb3JlL0RldlRvb2xzLmpzIiwic3JjL2NvcmUvUmVxdWVzdC5qcyIsInNyYy9jb3JlL1VzZXJQcm9maWxlLmpzIiwic3JjL2NvcmUvY29va2llLmpzIiwic3JjL2NvcmUvaW5kZXguanMiLCJzcmMvY29yZS9yZWR1eC9Db25uZWN0LmpzIiwic3JjL2NvcmUvcmVkdXgvU3RvcmUuanMiLCJzcmMvY29yZS9yZWR1eC9hY3Rpb25zL0FjdGlvbi5qcyIsInNyYy9jb3JlL3JlZHV4L2FjdGlvbnMvQXBpQWN0aW9uLmpzIiwic3JjL2NvcmUvcmVkdXgvYWN0aW9ucy9Qcm94eUFjdGlvbi5qcyIsInNyYy9jb3JlL3JlZHV4L2FjdGlvbnMvU2VhcmNoQWN0aW9uLmpzIiwic3JjL2NvcmUvcmVkdXgvYWN0aW9ucy9pbmRleC5qcyIsInNyYy9jb3JlL3JlZHV4L2luZGV4LmpzIiwic3JjL2NvcmUvcmVkdXgvbWlkZGxld2FyZXMvaW5kZXguanMiLCJzcmMvY29yZS9yZWR1eC9taWRkbGV3YXJlcy9sb2dnZXIuanMiLCJzcmMvY29yZS9yZWR1eC9taWRkbGV3YXJlcy9zYWdhLmpzIiwic3JjL2NvcmUvcmVkdXgvbWlkZGxld2FyZXMvdGh1bmsuanMiLCJzcmMvY29yZS9yZWR1eC9yZWR1Y2Vycy9Db25maWdSZWR1Y2VyLmpzIiwic3JjL2NvcmUvcmVkdXgvcmVkdWNlcnMvQ29va2llUmVkdWNlci5qcyIsInNyYy9jb3JlL3JlZHV4L3JlZHVjZXJzL0ZhbHNlUmVkdWNlci5qcyIsInNyYy9jb3JlL3JlZHV4L3JlZHVjZXJzL0xpc3RSZWR1Y2VyLmpzIiwic3JjL2NvcmUvcmVkdXgvcmVkdWNlcnMvTnVsbFJlZHVjZXIuanMiLCJzcmMvY29yZS9yZWR1eC9yZWR1Y2Vycy9SZWR1Y2VyLmpzIiwic3JjL2NvcmUvcmVkdXgvcmVkdWNlcnMvVHJ1ZVJlZHVjZXIuanMiLCJzcmMvY29yZS9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsInNyYy9jb3JlL3VzZXIuanMiLCJzcmMvY29yZS91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFPQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzlkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzUyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBOzs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ250QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LFNBQVMsSUFBVCxHQUFnQixTQUFTLElBQXpCLEdBQWdDLEdBQWpDLEVBQXNDLEtBQXRDLENBQTRDLENBQTVDLENBQWxCLENBQVA7QUFBeUU7Ozs0QkFDdkU7QUFBQyxtQkFBTyxLQUFLLFlBQUwsQ0FBa0IsQ0FBQyxTQUFTLE1BQVQsR0FBa0IsU0FBUyxNQUEzQixHQUFvQyxHQUFyQyxFQUEwQyxLQUExQyxDQUFnRCxDQUFoRCxDQUFsQixDQUFQO0FBQTZFOzs7OztrQkE2RWpGLElBQUksSUFBSixFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB2YXIgZGVzYyA9ICgwLCBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMi5kZWZhdWx0KShvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59OyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTsiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTsiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTsiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzOyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTsiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTsiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTsiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgY2FsbCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgdG9MZW5ndGggICAgICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5JylcbiAgLCBnZXRJdGVyRm4gICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQqLyl7XG4gICAgdmFyIE8gICAgICAgPSB0b09iamVjdChhcnJheUxpa2UpXG4gICAgICAsIEMgICAgICAgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5XG4gICAgICAsIGFMZW4gICAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIG1hcGZuICAgPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuICAgICAgLCBpbmRleCAgID0gMFxuICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihtYXBwaW5nKW1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpe1xuICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvcihyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jylcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7Y3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyl9KTsiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTsiLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7IiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pOyIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pOyIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldH0pOyIsIiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKiFcbiAqIGNvb2tpZVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBSb21hbiBTaHR5bG1hblxuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5leHBvcnRzLnNlcmlhbGl6ZSA9IHNlcmlhbGl6ZTtcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50O1xudmFyIGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcbnZhciBwYWlyU3BsaXRSZWdFeHAgPSAvOyAqLztcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggZmllbGQtY29udGVudCBpbiBSRkMgNzIzMCBzZWMgMy4yXG4gKlxuICogZmllbGQtY29udGVudCA9IGZpZWxkLXZjaGFyIFsgMSooIFNQIC8gSFRBQiApIGZpZWxkLXZjaGFyIF1cbiAqIGZpZWxkLXZjaGFyICAgPSBWQ0hBUiAvIG9icy10ZXh0XG4gKiBvYnMtdGV4dCAgICAgID0gJXg4MC1GRlxuICovXG5cbnZhciBmaWVsZENvbnRlbnRSZWdFeHAgPSAvXltcXHUwMDA5XFx1MDAyMC1cXHUwMDdlXFx1MDA4MC1cXHUwMGZmXSskLztcblxuLyoqXG4gKiBQYXJzZSBhIGNvb2tpZSBoZWFkZXIuXG4gKlxuICogUGFyc2UgdGhlIGdpdmVuIGNvb2tpZSBoZWFkZXIgc3RyaW5nIGludG8gYW4gb2JqZWN0XG4gKiBUaGUgb2JqZWN0IGhhcyB0aGUgdmFyaW91cyBjb29raWVzIGFzIGtleXMobmFtZXMpID0+IHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc3RyIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIHZhciBvYmogPSB7fVxuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHBhaXJzID0gc3RyLnNwbGl0KHBhaXJTcGxpdFJlZ0V4cCk7XG4gIHZhciBkZWMgPSBvcHQuZGVjb2RlIHx8IGRlY29kZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcbiAgICB2YXIgZXFfaWR4ID0gcGFpci5pbmRleE9mKCc9Jyk7XG5cbiAgICAvLyBza2lwIHRoaW5ncyB0aGF0IGRvbid0IGxvb2sgbGlrZSBrZXk9dmFsdWVcbiAgICBpZiAoZXFfaWR4IDwgMCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IHBhaXIuc3Vic3RyKDAsIGVxX2lkeCkudHJpbSgpXG4gICAgdmFyIHZhbCA9IHBhaXIuc3Vic3RyKCsrZXFfaWR4LCBwYWlyLmxlbmd0aCkudHJpbSgpO1xuXG4gICAgLy8gcXVvdGVkIHZhbHVlc1xuICAgIGlmICgnXCInID09IHZhbFswXSkge1xuICAgICAgdmFsID0gdmFsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IGFzc2lnbiBvbmNlXG4gICAgaWYgKHVuZGVmaW5lZCA9PSBvYmpba2V5XSkge1xuICAgICAgb2JqW2tleV0gPSB0cnlEZWNvZGUodmFsLCBkZWMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIGRhdGEgaW50byBhIGNvb2tpZSBoZWFkZXIuXG4gKlxuICogU2VyaWFsaXplIHRoZSBhIG5hbWUgdmFsdWUgcGFpciBpbnRvIGEgY29va2llIHN0cmluZyBzdWl0YWJsZSBmb3JcbiAqIGh0dHAgaGVhZGVycy4gQW4gb3B0aW9uYWwgb3B0aW9ucyBvYmplY3Qgc3BlY2lmaWVkIGNvb2tpZSBwYXJhbWV0ZXJzLlxuICpcbiAqIHNlcmlhbGl6ZSgnZm9vJywgJ2JhcicsIHsgaHR0cE9ubHk6IHRydWUgfSlcbiAqICAgPT4gXCJmb289YmFyOyBodHRwT25seVwiXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUobmFtZSwgdmFsLCBvcHRpb25zKSB7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgZW5jID0gb3B0LmVuY29kZSB8fCBlbmNvZGU7XG5cbiAgaWYgKHR5cGVvZiBlbmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZW5jb2RlIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3QobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBuYW1lIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGVuYyh2YWwpO1xuXG4gIGlmICh2YWx1ZSAmJiAhZmllbGRDb250ZW50UmVnRXhwLnRlc3QodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgdmFsIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHZhciBzdHIgPSBuYW1lICsgJz0nICsgdmFsdWU7XG5cbiAgaWYgKG51bGwgIT0gb3B0Lm1heEFnZSkge1xuICAgIHZhciBtYXhBZ2UgPSBvcHQubWF4QWdlIC0gMDtcbiAgICBpZiAoaXNOYU4obWF4QWdlKSkgdGhyb3cgbmV3IEVycm9yKCdtYXhBZ2Ugc2hvdWxkIGJlIGEgTnVtYmVyJyk7XG4gICAgc3RyICs9ICc7IE1heC1BZ2U9JyArIE1hdGguZmxvb3IobWF4QWdlKTtcbiAgfVxuXG4gIGlmIChvcHQuZG9tYWluKSB7XG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQuZG9tYWluKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGRvbWFpbiBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IERvbWFpbj0nICsgb3B0LmRvbWFpbjtcbiAgfVxuXG4gIGlmIChvcHQucGF0aCkge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LnBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gcGF0aCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IFBhdGg9JyArIG9wdC5wYXRoO1xuICB9XG5cbiAgaWYgKG9wdC5leHBpcmVzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGV4cGlyZXMgaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBFeHBpcmVzPScgKyBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICB9XG5cbiAgaWYgKG9wdC5odHRwT25seSkge1xuICAgIHN0ciArPSAnOyBIdHRwT25seSc7XG4gIH1cblxuICBpZiAob3B0LnNlY3VyZSkge1xuICAgIHN0ciArPSAnOyBTZWN1cmUnO1xuICB9XG5cbiAgaWYgKG9wdC5zYW1lU2l0ZSkge1xuICAgIHZhciBzYW1lU2l0ZSA9IHR5cGVvZiBvcHQuc2FtZVNpdGUgPT09ICdzdHJpbmcnXG4gICAgICA/IG9wdC5zYW1lU2l0ZS50b0xvd2VyQ2FzZSgpIDogb3B0LnNhbWVTaXRlO1xuXG4gICAgc3dpdGNoIChzYW1lU2l0ZSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsYXgnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9TGF4JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpY3QnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gc2FtZVNpdGUgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogVHJ5IGRlY29kaW5nIGEgc3RyaW5nIHVzaW5nIGEgZGVjb2RpbmcgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtmdW5jdGlvbn0gZGVjb2RlXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHRyeURlY29kZShzdHIsIGRlY29kZSkge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGUoc3RyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICByZXR1cm4gbmV3IEVsZW1lbnRDbGFzcyhvcHRzKVxufVxuXG5mdW5jdGlvbiBpbmRleE9mKGFyciwgcHJvcCkge1xuICBpZiAoYXJyLmluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihwcm9wKVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgIGlmIChhcnJbaV0gPT09IHByb3ApIHJldHVybiBpXG4gIHJldHVybiAtMVxufVxuXG5mdW5jdGlvbiBFbGVtZW50Q2xhc3Mob3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRWxlbWVudENsYXNzKSkgcmV0dXJuIG5ldyBFbGVtZW50Q2xhc3Mob3B0cylcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmICghb3B0cykgb3B0cyA9IHt9XG5cbiAgLy8gc2ltaWxhciBkb2luZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IGJ1dCB3b3JrcyBpbiBJRThcbiAgaWYgKG9wdHMubm9kZVR5cGUpIG9wdHMgPSB7ZWw6IG9wdHN9XG5cbiAgdGhpcy5vcHRzID0gb3B0c1xuICB0aGlzLmVsID0gb3B0cy5lbCB8fCBkb2N1bWVudC5ib2R5XG4gIGlmICh0eXBlb2YgdGhpcy5lbCAhPT0gJ29iamVjdCcpIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZWwpXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmIChlbC5jbGFzc05hbWUgPT09IFwiXCIpIHJldHVybiBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKVxuICBpZiAoaW5kZXhPZihjbGFzc2VzLCBjbGFzc05hbWUpID4gLTEpIHJldHVybiBjbGFzc2VzXG4gIGNsYXNzZXMucHVzaChjbGFzc05hbWUpXG4gIGVsLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpXG4gIHJldHVybiBjbGFzc2VzXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmIChlbC5jbGFzc05hbWUgPT09IFwiXCIpIHJldHVyblxuICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpXG4gIHZhciBpZHggPSBpbmRleE9mKGNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgaWYgKGlkeCA+IC0xKSBjbGFzc2VzLnNwbGljZShpZHgsIDEpXG4gIGVsLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpXG4gIHJldHVybiBjbGFzc2VzXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJylcbiAgcmV0dXJuIGluZGV4T2YoY2xhc3NlcywgY2xhc3NOYW1lKSA+IC0xXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmICh0aGlzLmhhcyhjbGFzc05hbWUpKSB0aGlzLnJlbW92ZShjbGFzc05hbWUpXG4gIGVsc2UgdGhpcy5hZGQoY2xhc3NOYW1lKVxufVxuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBCYXNlZCBvbiBjb2RlIHRoYXQgaXMgQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgY2FuVXNlRE9NID0gISEoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuXHQpO1xuXG5cdHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuXHRcdGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG5cdFx0Y2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cblx0XHRjYW5Vc2VFdmVudExpc3RlbmVyczpcblx0XHRcdGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG5cdFx0Y2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW5cblxuXHR9O1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LkV4ZWN1dGlvbkVudmlyb25tZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH1cblxufSgpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChcIm1vY2tcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAoXCJtb2NrXCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoICh4KSB7fVxuICAgIH07XG5cbiAgICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNwb25zZTtcblxuLyoqXG4gKiBBIHJlc3BvbnNlIGZyb20gYSB3ZWIgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNDb2RlXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyc1xuICogQHBhcmFtIHtCdWZmZXJ9IGJvZHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqL1xuZnVuY3Rpb24gUmVzcG9uc2Uoc3RhdHVzQ29kZSwgaGVhZGVycywgYm9keSwgdXJsKSB7XG4gIGlmICh0eXBlb2Ygc3RhdHVzQ29kZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzdGF0dXNDb2RlIG11c3QgYmUgYSBudW1iZXIgYnV0IHdhcyAnICsgKHR5cGVvZiBzdGF0dXNDb2RlKSk7XG4gIH1cbiAgaWYgKGhlYWRlcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdoZWFkZXJzIGNhbm5vdCBiZSBudWxsJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBoZWFkZXJzICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2hlYWRlcnMgbXVzdCBiZSBhbiBvYmplY3QgYnV0IHdhcyAnICsgKHR5cGVvZiBoZWFkZXJzKSk7XG4gIH1cbiAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcbiAgdGhpcy5oZWFkZXJzID0ge307XG4gIGZvciAodmFyIGtleSBpbiBoZWFkZXJzKSB7XG4gICAgdGhpcy5oZWFkZXJzW2tleS50b0xvd2VyQ2FzZSgpXSA9IGhlYWRlcnNba2V5XTtcbiAgfVxuICB0aGlzLmJvZHkgPSBib2R5O1xuICB0aGlzLnVybCA9IHVybDtcbn1cblxuUmVzcG9uc2UucHJvdG90eXBlLmdldEJvZHkgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgaWYgKHRoaXMuc3RhdHVzQ29kZSA+PSAzMDApIHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdTZXJ2ZXIgcmVzcG9uZGVkIHdpdGggc3RhdHVzIGNvZGUgJ1xuICAgICAgICAgICAgICAgICAgICArIHRoaXMuc3RhdHVzQ29kZSArICc6XFxuJyArIHRoaXMuYm9keS50b1N0cmluZygpKTtcbiAgICBlcnIuc3RhdHVzQ29kZSA9IHRoaXMuc3RhdHVzQ29kZTtcbiAgICBlcnIuaGVhZGVycyA9IHRoaXMuaGVhZGVycztcbiAgICBlcnIuYm9keSA9IHRoaXMuYm9keTtcbiAgICBlcnIudXJsID0gdGhpcy51cmw7XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIHJldHVybiBlbmNvZGluZyA/IHRoaXMuYm9keS50b1N0cmluZyhlbmNvZGluZykgOiB0aGlzLmJvZHk7XG59O1xuIiwiLy8gQ29kaW5nIHN0YW5kYXJkIGZvciB0aGlzIHByb2plY3QgZGVmaW5lZCBAIGh0dHBzOi8vZ2l0aHViLmNvbS9NYXR0aGV3U0gvc3RhbmRhcmRzL2Jsb2IvbWFzdGVyL0phdmFTY3JpcHQubWRcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gISEodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MudmVyc2lvbnMgJiYgcHJvY2Vzcy52ZXJzaW9ucy5ub2RlKTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpLFxuICAgIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKiogRGV0ZWN0IGlmIHByb3BlcnRpZXMgc2hhZG93aW5nIHRob3NlIG9uIGBPYmplY3QucHJvdG90eXBlYCBhcmUgbm9uLWVudW1lcmFibGUuICovXG52YXIgbm9uRW51bVNoYWRvd3MgPSAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7ICd2YWx1ZU9mJzogMSB9LCAndmFsdWVPZicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgLy8gU2FmYXJpIDkgbWFrZXMgYGFyZ3VtZW50cy5sZW5ndGhgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHZhciByZXN1bHQgPSAoaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKVxuICAgID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKVxuICAgIDogW107XG5cbiAgdmFyIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGgsXG4gICAgICBza2lwSW5kZXhlcyA9ICEhbGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKGtleSA9PSAnbGVuZ3RoJyB8fCBpc0luZGV4KGtleSwgbGVuZ3RoKSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gYXJyYXk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkID8gc291cmNlW2tleV0gOiBuZXdWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5hc3NpZ25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25lciBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFzc2lnbmVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBc3NpZ25lcihhc3NpZ25lcikge1xuICByZXR1cm4gYmFzZVJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMSA/IHNvdXJjZXNbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBjdXN0b21pemVyID0gKGFzc2lnbmVyLmxlbmd0aCA+IDMgJiYgdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJylcbiAgICAgID8gKGxlbmd0aC0tLCBjdXN0b21pemVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgaW5kZXgsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIEFzc2lnbnMgb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdHMgdG8gdGhlXG4gKiBkZXN0aW5hdGlvbiBvYmplY3QuIFNvdXJjZSBvYmplY3RzIGFyZSBhcHBsaWVkIGZyb20gbGVmdCB0byByaWdodC5cbiAqIFN1YnNlcXVlbnQgc291cmNlcyBvdmVyd3JpdGUgcHJvcGVydHkgYXNzaWdubWVudHMgb2YgcHJldmlvdXMgc291cmNlcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YCBhbmQgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BPYmplY3QuYXNzaWduYF0oaHR0cHM6Ly9tZG4uaW8vT2JqZWN0L2Fzc2lnbikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEwLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBzZWUgXy5hc3NpZ25JblxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogZnVuY3Rpb24gQmFyKCkge1xuICogICB0aGlzLmMgPSAzO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYiA9IDI7XG4gKiBCYXIucHJvdG90eXBlLmQgPSA0O1xuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAwIH0sIG5ldyBGb28sIG5ldyBCYXIpO1xuICogLy8gPT4geyAnYSc6IDEsICdjJzogMyB9XG4gKi9cbnZhciBhc3NpZ24gPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSkge1xuICBpZiAobm9uRW51bVNoYWRvd3MgfHwgaXNQcm90b3R5cGUoc291cmNlKSB8fCBpc0FycmF5TGlrZShzb3VyY2UpKSB7XG4gICAgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ247XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAnUmVhY3QuUHJvcFR5cGVzLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICBmdW5jdGlvbiBzaGltKCkge1xuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXJcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICBpbnZhcmlhbnQoXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCVzYCBwcm9wIG9uIGAlc2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nLFxuICAgICAgICAgICAgICBwcm9wRnVsbE5hbWUsXG4gICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIHByb3BWYWx1ZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAocHJvcFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xudmFyIHBlcmNlbnRUd2VudGllcyA9IC8lMjAvZztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ2RlZmF1bHQnOiAnUkZDMzk4NicsXG4gICAgZm9ybWF0dGVyczoge1xuICAgICAgICBSRkMxNzM4OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlLmNhbGwodmFsdWUsIHBlcmNlbnRUd2VudGllcywgJysnKTtcbiAgICAgICAgfSxcbiAgICAgICAgUkZDMzk4NjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFJGQzE3Mzg6ICdSRkMxNzM4JyxcbiAgICBSRkMzOTg2OiAnUkZDMzk4Nidcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpO1xudmFyIHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZm9ybWF0czogZm9ybWF0cyxcbiAgICBwYXJzZTogcGFyc2UsXG4gICAgc3RyaW5naWZ5OiBzdHJpbmdpZnlcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgICBhbGxvd0RvdHM6IGZhbHNlLFxuICAgIGFsbG93UHJvdG90eXBlczogZmFsc2UsXG4gICAgYXJyYXlMaW1pdDogMjAsXG4gICAgZGVjb2RlcjogdXRpbHMuZGVjb2RlLFxuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGRlcHRoOiA1LFxuICAgIHBhcmFtZXRlckxpbWl0OiAxMDAwLFxuICAgIHBsYWluT2JqZWN0czogZmFsc2UsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nOiBmYWxzZVxufTtcblxudmFyIHBhcnNlVmFsdWVzID0gZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZ1ZhbHVlcyhzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0ge307XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KG9wdGlvbnMuZGVsaW1pdGVyLCBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSBJbmZpbml0eSA/IHVuZGVmaW5lZCA6IG9wdGlvbnMucGFyYW1ldGVyTGltaXQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICB2YXIgcG9zID0gcGFydC5pbmRleE9mKCddPScpID09PSAtMSA/IHBhcnQuaW5kZXhPZignPScpIDogcGFydC5pbmRleE9mKCddPScpICsgMTtcblxuICAgICAgICB2YXIga2V5LCB2YWw7XG4gICAgICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICAgICAgICBrZXkgPSBvcHRpb25zLmRlY29kZXIocGFydCk7XG4gICAgICAgICAgICB2YWwgPSBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA/IG51bGwgOiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleSA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LnNsaWNlKDAsIHBvcykpO1xuICAgICAgICAgICAgdmFsID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQuc2xpY2UocG9zICsgMSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXMuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gW10uY29uY2F0KG9ialtrZXldKS5jb25jYXQodmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBwYXJzZU9iamVjdCA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0UmVjdXJzaXZlKGNoYWluLCB2YWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoIWNoYWluLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHZhciByb290ID0gY2hhaW4uc2hpZnQoKTtcblxuICAgIHZhciBvYmo7XG4gICAgaWYgKHJvb3QgPT09ICdbXScpIHtcbiAgICAgICAgb2JqID0gW107XG4gICAgICAgIG9iaiA9IG9iai5jb25jYXQocGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9iaiA9IG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgICAgICB2YXIgY2xlYW5Sb290ID0gcm9vdC5jaGFyQXQoMCkgPT09ICdbJyAmJiByb290LmNoYXJBdChyb290Lmxlbmd0aCAtIDEpID09PSAnXScgPyByb290LnNsaWNlKDEsIC0xKSA6IHJvb3Q7XG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGNsZWFuUm9vdCwgMTApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhaXNOYU4oaW5kZXgpICYmXG4gICAgICAgICAgICByb290ICE9PSBjbGVhblJvb3QgJiZcbiAgICAgICAgICAgIFN0cmluZyhpbmRleCkgPT09IGNsZWFuUm9vdCAmJlxuICAgICAgICAgICAgaW5kZXggPj0gMCAmJlxuICAgICAgICAgICAgKG9wdGlvbnMucGFyc2VBcnJheXMgJiYgaW5kZXggPD0gb3B0aW9ucy5hcnJheUxpbWl0KVxuICAgICAgICApIHtcbiAgICAgICAgICAgIG9iaiA9IFtdO1xuICAgICAgICAgICAgb2JqW2luZGV4XSA9IHBhcnNlT2JqZWN0KGNoYWluLCB2YWwsIG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW2NsZWFuUm9vdF0gPSBwYXJzZU9iamVjdChjaGFpbiwgdmFsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgcGFyc2VLZXlzID0gZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZ0tleXMoZ2l2ZW5LZXksIHZhbCwgb3B0aW9ucykge1xuICAgIGlmICghZ2l2ZW5LZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBkb3Qgbm90YXRpb24gdG8gYnJhY2tldCBub3RhdGlvblxuICAgIHZhciBrZXkgPSBvcHRpb25zLmFsbG93RG90cyA/IGdpdmVuS2V5LnJlcGxhY2UoL1xcLihbXi5bXSspL2csICdbJDFdJykgOiBnaXZlbktleTtcblxuICAgIC8vIFRoZSByZWdleCBjaHVua3NcblxuICAgIHZhciBicmFja2V0cyA9IC8oXFxbW15bXFxdXSpdKS87XG4gICAgdmFyIGNoaWxkID0gLyhcXFtbXltcXF1dKl0pL2c7XG5cbiAgICAvLyBHZXQgdGhlIHBhcmVudFxuXG4gICAgdmFyIHNlZ21lbnQgPSBicmFja2V0cy5leGVjKGtleSk7XG4gICAgdmFyIHBhcmVudCA9IHNlZ21lbnQgPyBrZXkuc2xpY2UoMCwgc2VnbWVudC5pbmRleCkgOiBrZXk7XG5cbiAgICAvLyBTdGFzaCB0aGUgcGFyZW50IGlmIGl0IGV4aXN0c1xuXG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIC8vIElmIHdlIGFyZW4ndCB1c2luZyBwbGFpbiBvYmplY3RzLCBvcHRpb25hbGx5IHByZWZpeCBrZXlzXG4gICAgICAgIC8vIHRoYXQgd291bGQgb3ZlcndyaXRlIG9iamVjdCBwcm90b3R5cGUgcHJvcGVydGllc1xuICAgICAgICBpZiAoIW9wdGlvbnMucGxhaW5PYmplY3RzICYmIGhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHBhcmVudCkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBrZXlzLnB1c2gocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggY2hpbGRyZW4gYXBwZW5kaW5nIHRvIHRoZSBhcnJheSB1bnRpbCB3ZSBoaXQgZGVwdGhcblxuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoKHNlZ21lbnQgPSBjaGlsZC5leGVjKGtleSkpICE9PSBudWxsICYmIGkgPCBvcHRpb25zLmRlcHRoKSB7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgaWYgKCFvcHRpb25zLnBsYWluT2JqZWN0cyAmJiBoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBzZWdtZW50WzFdLnNsaWNlKDEsIC0xKSkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlJ3MgYSByZW1haW5kZXIsIGp1c3QgYWRkIHdoYXRldmVyIGlzIGxlZnRcblxuICAgIGlmIChzZWdtZW50KSB7XG4gICAgICAgIGtleXMucHVzaCgnWycgKyBrZXkuc2xpY2Uoc2VnbWVudC5pbmRleCkgKyAnXScpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZU9iamVjdChrZXlzLCB2YWwsIG9wdGlvbnMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyLCBvcHRzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9O1xuXG4gICAgaWYgKG9wdGlvbnMuZGVjb2RlciAhPT0gbnVsbCAmJiBvcHRpb25zLmRlY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9ucy5kZWNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0RlY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgb3B0aW9ucy5kZWxpbWl0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5kZWxpbWl0ZXIgPT09ICdzdHJpbmcnIHx8IHV0aWxzLmlzUmVnRXhwKG9wdGlvbnMuZGVsaW1pdGVyKSA/IG9wdGlvbnMuZGVsaW1pdGVyIDogZGVmYXVsdHMuZGVsaW1pdGVyO1xuICAgIG9wdGlvbnMuZGVwdGggPSB0eXBlb2Ygb3B0aW9ucy5kZXB0aCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmRlcHRoIDogZGVmYXVsdHMuZGVwdGg7XG4gICAgb3B0aW9ucy5hcnJheUxpbWl0ID0gdHlwZW9mIG9wdGlvbnMuYXJyYXlMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmFycmF5TGltaXQgOiBkZWZhdWx0cy5hcnJheUxpbWl0O1xuICAgIG9wdGlvbnMucGFyc2VBcnJheXMgPSBvcHRpb25zLnBhcnNlQXJyYXlzICE9PSBmYWxzZTtcbiAgICBvcHRpb25zLmRlY29kZXIgPSB0eXBlb2Ygb3B0aW9ucy5kZWNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5kZWNvZGVyIDogZGVmYXVsdHMuZGVjb2RlcjtcbiAgICBvcHRpb25zLmFsbG93RG90cyA9IHR5cGVvZiBvcHRpb25zLmFsbG93RG90cyA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5hbGxvd0RvdHMgOiBkZWZhdWx0cy5hbGxvd0RvdHM7XG4gICAgb3B0aW9ucy5wbGFpbk9iamVjdHMgPSB0eXBlb2Ygb3B0aW9ucy5wbGFpbk9iamVjdHMgPT09ICdib29sZWFuJyA/IG9wdGlvbnMucGxhaW5PYmplY3RzIDogZGVmYXVsdHMucGxhaW5PYmplY3RzO1xuICAgIG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzID0gdHlwZW9mIG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzID09PSAnYm9vbGVhbicgPyBvcHRpb25zLmFsbG93UHJvdG90eXBlcyA6IGRlZmF1bHRzLmFsbG93UHJvdG90eXBlcztcbiAgICBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID0gdHlwZW9mIG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPT09ICdudW1iZXInID8gb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA6IGRlZmF1bHRzLnBhcmFtZXRlckxpbWl0O1xuICAgIG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nID0gdHlwZW9mIG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nID09PSAnYm9vbGVhbicgPyBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA6IGRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZztcblxuICAgIGlmIChzdHIgPT09ICcnIHx8IHN0ciA9PT0gbnVsbCB8fCB0eXBlb2Ygc3RyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgfVxuXG4gICAgdmFyIHRlbXBPYmogPSB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHBhcnNlVmFsdWVzKHN0ciwgb3B0aW9ucykgOiBzdHI7XG4gICAgdmFyIG9iaiA9IG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBrZXlzIGFuZCBzZXR1cCB0aGUgbmV3IG9iamVjdFxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wT2JqKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciBuZXdPYmogPSBwYXJzZUtleXMoa2V5LCB0ZW1wT2JqW2tleV0sIG9wdGlvbnMpO1xuICAgICAgICBvYmogPSB1dGlscy5tZXJnZShvYmosIG5ld09iaiwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHV0aWxzLmNvbXBhY3Qob2JqKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBmb3JtYXRzID0gcmVxdWlyZSgnLi9mb3JtYXRzJyk7XG5cbnZhciBhcnJheVByZWZpeEdlbmVyYXRvcnMgPSB7XG4gICAgYnJhY2tldHM6IGZ1bmN0aW9uIGJyYWNrZXRzKHByZWZpeCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1tdJztcbiAgICB9LFxuICAgIGluZGljZXM6IGZ1bmN0aW9uIGluZGljZXMocHJlZml4LCBrZXkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbJyArIGtleSArICddJztcbiAgICB9LFxuICAgIHJlcGVhdDogZnVuY3Rpb24gcmVwZWF0KHByZWZpeCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gcHJlZml4O1xuICAgIH1cbn07XG5cbnZhciB0b0lTTyA9IERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nO1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZW5jb2RlOiB0cnVlLFxuICAgIGVuY29kZXI6IHV0aWxzLmVuY29kZSxcbiAgICBlbmNvZGVWYWx1ZXNPbmx5OiBmYWxzZSxcbiAgICBzZXJpYWxpemVEYXRlOiBmdW5jdGlvbiBzZXJpYWxpemVEYXRlKGRhdGUpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHRvSVNPLmNhbGwoZGF0ZSk7XG4gICAgfSxcbiAgICBza2lwTnVsbHM6IGZhbHNlLFxuICAgIHN0cmljdE51bGxIYW5kbGluZzogZmFsc2Vcbn07XG5cbnZhciBzdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkoIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgb2JqZWN0LFxuICAgIHByZWZpeCxcbiAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICBza2lwTnVsbHMsXG4gICAgZW5jb2RlcixcbiAgICBmaWx0ZXIsXG4gICAgc29ydCxcbiAgICBhbGxvd0RvdHMsXG4gICAgc2VyaWFsaXplRGF0ZSxcbiAgICBmb3JtYXR0ZXIsXG4gICAgZW5jb2RlVmFsdWVzT25seVxuKSB7XG4gICAgdmFyIG9iaiA9IG9iamVjdDtcbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvYmogPSBmaWx0ZXIocHJlZml4LCBvYmopO1xuICAgIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBvYmogPSBzZXJpYWxpemVEYXRlKG9iaik7XG4gICAgfSBlbHNlIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHN0cmljdE51bGxIYW5kbGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZXIgJiYgIWVuY29kZVZhbHVlc09ubHkgPyBlbmNvZGVyKHByZWZpeCkgOiBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSAnJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG9iaiA9PT0gJ251bWJlcicgfHwgdHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nIHx8IHV0aWxzLmlzQnVmZmVyKG9iaikpIHtcbiAgICAgICAgaWYgKGVuY29kZXIpIHtcbiAgICAgICAgICAgIHZhciBrZXlWYWx1ZSA9IGVuY29kZVZhbHVlc09ubHkgPyBwcmVmaXggOiBlbmNvZGVyKHByZWZpeCk7XG4gICAgICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihrZXlWYWx1ZSkgKyAnPScgKyBmb3JtYXR0ZXIoZW5jb2RlcihvYmopKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZXIocHJlZml4KSArICc9JyArIGZvcm1hdHRlcihTdHJpbmcob2JqKSldO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHZhciBvYmpLZXlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlcikpIHtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIG9iaktleXMgPSBzb3J0ID8ga2V5cy5zb3J0KHNvcnQpIDoga2V5cztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iaktleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG5cbiAgICAgICAgaWYgKHNraXBOdWxscyAmJiBvYmpba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUFycmF5UHJlZml4KHByZWZpeCwga2V5KSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgICAgICAgICAgICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgICAgICBza2lwTnVsbHMsXG4gICAgICAgICAgICAgICAgZW5jb2RlcixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgICAgICBhbGxvd0RvdHMsXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seVxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICBwcmVmaXggKyAoYWxsb3dEb3RzID8gJy4nICsga2V5IDogJ1snICsga2V5ICsgJ10nKSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgICAgICAgICAgICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgICAgICBza2lwTnVsbHMsXG4gICAgICAgICAgICAgICAgZW5jb2RlcixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgICAgICBhbGxvd0RvdHMsXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seVxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBvcHRzKSB7XG4gICAgdmFyIG9iaiA9IG9iamVjdDtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge307XG5cbiAgICBpZiAob3B0aW9ucy5lbmNvZGVyICE9PSBudWxsICYmIG9wdGlvbnMuZW5jb2RlciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRpb25zLmVuY29kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRW5jb2RlciBoYXMgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB2YXIgZGVsaW1pdGVyID0gdHlwZW9mIG9wdGlvbnMuZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmRlbGltaXRlciA6IG9wdGlvbnMuZGVsaW1pdGVyO1xuICAgIHZhciBzdHJpY3ROdWxsSGFuZGxpbmcgPSB0eXBlb2Ygb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nIDogZGVmYXVsdHMuc3RyaWN0TnVsbEhhbmRsaW5nO1xuICAgIHZhciBza2lwTnVsbHMgPSB0eXBlb2Ygb3B0aW9ucy5za2lwTnVsbHMgPT09ICdib29sZWFuJyA/IG9wdGlvbnMuc2tpcE51bGxzIDogZGVmYXVsdHMuc2tpcE51bGxzO1xuICAgIHZhciBlbmNvZGUgPSB0eXBlb2Ygb3B0aW9ucy5lbmNvZGUgPT09ICdib29sZWFuJyA/IG9wdGlvbnMuZW5jb2RlIDogZGVmYXVsdHMuZW5jb2RlO1xuICAgIHZhciBlbmNvZGVyID0gdHlwZW9mIG9wdGlvbnMuZW5jb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuZW5jb2RlciA6IGRlZmF1bHRzLmVuY29kZXI7XG4gICAgdmFyIHNvcnQgPSB0eXBlb2Ygb3B0aW9ucy5zb3J0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5zb3J0IDogbnVsbDtcbiAgICB2YXIgYWxsb3dEb3RzID0gdHlwZW9mIG9wdGlvbnMuYWxsb3dEb3RzID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogb3B0aW9ucy5hbGxvd0RvdHM7XG4gICAgdmFyIHNlcmlhbGl6ZURhdGUgPSB0eXBlb2Ygb3B0aW9ucy5zZXJpYWxpemVEYXRlID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5zZXJpYWxpemVEYXRlIDogZGVmYXVsdHMuc2VyaWFsaXplRGF0ZTtcbiAgICB2YXIgZW5jb2RlVmFsdWVzT25seSA9IHR5cGVvZiBvcHRpb25zLmVuY29kZVZhbHVlc09ubHkgPT09ICdib29sZWFuJyA/IG9wdGlvbnMuZW5jb2RlVmFsdWVzT25seSA6IGRlZmF1bHRzLmVuY29kZVZhbHVlc09ubHk7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmZvcm1hdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5mb3JtYXQgPSBmb3JtYXRzLmRlZmF1bHQ7XG4gICAgfSBlbHNlIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZvcm1hdHMuZm9ybWF0dGVycywgb3B0aW9ucy5mb3JtYXQpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZm9ybWF0IG9wdGlvbiBwcm92aWRlZC4nKTtcbiAgICB9XG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHMuZm9ybWF0dGVyc1tvcHRpb25zLmZvcm1hdF07XG4gICAgdmFyIG9iaktleXM7XG4gICAgdmFyIGZpbHRlcjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgIG9iaiA9IGZpbHRlcignJywgb2JqKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5maWx0ZXIpKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlGb3JtYXQ7XG4gICAgaWYgKG9wdGlvbnMuYXJyYXlGb3JtYXQgaW4gYXJyYXlQcmVmaXhHZW5lcmF0b3JzKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0aW9ucy5hcnJheUZvcm1hdDtcbiAgICB9IGVsc2UgaWYgKCdpbmRpY2VzJyBpbiBvcHRpb25zKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0aW9ucy5pbmRpY2VzID8gJ2luZGljZXMnIDogJ3JlcGVhdCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSAnaW5kaWNlcyc7XG4gICAgfVxuXG4gICAgdmFyIGdlbmVyYXRlQXJyYXlQcmVmaXggPSBhcnJheVByZWZpeEdlbmVyYXRvcnNbYXJyYXlGb3JtYXRdO1xuXG4gICAgaWYgKCFvYmpLZXlzKSB7XG4gICAgICAgIG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIH1cblxuICAgIGlmIChzb3J0KSB7XG4gICAgICAgIG9iaktleXMuc29ydChzb3J0KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iaktleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG5cbiAgICAgICAgaWYgKHNraXBOdWxscyAmJiBvYmpba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoc3RyaW5naWZ5KFxuICAgICAgICAgICAgb2JqW2tleV0sXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgICAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgZW5jb2RlID8gZW5jb2RlciA6IG51bGwsXG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICBzb3J0LFxuICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgIGZvcm1hdHRlcixcbiAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHlcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXMuam9pbihkZWxpbWl0ZXIpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBoZXhUYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICBhcnJheS5wdXNoKCclJyArICgoaSA8IDE2ID8gJzAnIDogJycpICsgaS50b1N0cmluZygxNikpLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheTtcbn0oKSk7XG5cbmV4cG9ydHMuYXJyYXlUb09iamVjdCA9IGZ1bmN0aW9uIChzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0gb3B0aW9ucyAmJiBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9ialtpXSA9IHNvdXJjZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5leHBvcnRzLm1lcmdlID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goc291cmNlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGxhaW5PYmplY3RzIHx8IG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzIHx8ICFoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFt0YXJnZXQsIHNvdXJjZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gW3RhcmdldF0uY29uY2F0KHNvdXJjZSk7XG4gICAgfVxuXG4gICAgdmFyIG1lcmdlVGFyZ2V0ID0gdGFyZ2V0O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgIUFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgICBtZXJnZVRhcmdldCA9IGV4cG9ydHMuYXJyYXlUb09iamVjdCh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwodGFyZ2V0LCBpKSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRbaV0gJiYgdHlwZW9mIHRhcmdldFtpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gZXhwb3J0cy5tZXJnZSh0YXJnZXRbaV0sIGl0ZW0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFjYywga2V5KSkge1xuICAgICAgICAgICAgYWNjW2tleV0gPSBleHBvcnRzLm1lcmdlKGFjY1trZXldLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgbWVyZ2VUYXJnZXQpO1xufTtcblxuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59O1xuXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAvLyBUaGlzIGNvZGUgd2FzIG9yaWdpbmFsbHkgd3JpdHRlbiBieSBCcmlhbiBXaGl0ZSAobXNjZGV4KSBmb3IgdGhlIGlvLmpzIGNvcmUgcXVlcnlzdHJpbmcgbGlicmFyeS5cbiAgICAvLyBJdCBoYXMgYmVlbiBhZGFwdGVkIGhlcmUgZm9yIHN0cmljdGVyIGFkaGVyZW5jZSB0byBSRkMgMzk4NlxuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgdmFyIHN0cmluZyA9IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyIDogU3RyaW5nKHN0cik7XG5cbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjID09PSAweDJEIHx8IC8vIC1cbiAgICAgICAgICAgIGMgPT09IDB4MkUgfHwgLy8gLlxuICAgICAgICAgICAgYyA9PT0gMHg1RiB8fCAvLyBfXG4gICAgICAgICAgICBjID09PSAweDdFIHx8IC8vIH5cbiAgICAgICAgICAgIChjID49IDB4MzAgJiYgYyA8PSAweDM5KSB8fCAvLyAwLTlcbiAgICAgICAgICAgIChjID49IDB4NDEgJiYgYyA8PSAweDVBKSB8fCAvLyBhLXpcbiAgICAgICAgICAgIChjID49IDB4NjEgJiYgYyA8PSAweDdBKSAvLyBBLVpcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBvdXQgKz0gc3RyaW5nLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyBoZXhUYWJsZVtjXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4QzAgfCAoYyA+PiA2KV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4RDgwMCB8fCBjID49IDB4RTAwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4RTAgfCAoYyA+PiAxMildICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXSArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgYyA9IDB4MTAwMDAgKyAoKChjICYgMHgzRkYpIDw8IDEwKSB8IChzdHJpbmcuY2hhckNvZGVBdChpKSAmIDB4M0ZGKSk7XG4gICAgICAgIG91dCArPSBoZXhUYWJsZVsweEYwIHwgKGMgPj4gMTgpXSArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gMTIpICYgMHgzRildICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXSArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07XG5cbmV4cG9ydHMuY29tcGFjdCA9IGZ1bmN0aW9uIChvYmosIHJlZmVyZW5jZXMpIHtcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgdmFyIHJlZnMgPSByZWZlcmVuY2VzIHx8IFtdO1xuICAgIHZhciBsb29rdXAgPSByZWZzLmluZGV4T2Yob2JqKTtcbiAgICBpZiAobG9va3VwICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gcmVmc1tsb29rdXBdO1xuICAgIH1cblxuICAgIHJlZnMucHVzaChvYmopO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICB2YXIgY29tcGFjdGVkID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChvYmpbaV0gJiYgdHlwZW9mIG9ialtpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb21wYWN0ZWQucHVzaChleHBvcnRzLmNvbXBhY3Qob2JqW2ldLCByZWZzKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmpbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29tcGFjdGVkLnB1c2gob2JqW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wYWN0ZWQ7XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIG9ialtrZXldID0gZXhwb3J0cy5jb21wYWN0KG9ialtrZXldLCByZWZzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5leHBvcnRzLmlzUmVnRXhwID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG5leHBvcnRzLmlzQnVmZmVyID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhIShvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMuc2VsZWN0ID0gc2VsZWN0O1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuZXhwb3J0cy5zZXRSYXdDb29raWUgPSBzZXRSYXdDb29raWU7XG5leHBvcnRzLnBsdWdUb1JlcXVlc3QgPSBwbHVnVG9SZXF1ZXN0O1xuXG52YXIgX2Nvb2tpZSA9IHJlcXVpcmUoJ2Nvb2tpZScpO1xuXG52YXIgX2Nvb2tpZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb29raWUpO1xuXG52YXIgX29iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9vYmplY3RBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QXNzaWduKTtcblxudmFyIF9pc05vZGUgPSByZXF1aXJlKCdpcy1ub2RlJyk7XG5cbnZhciBfaXNOb2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzTm9kZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfcmF3Q29va2llID0ge307XG52YXIgX3JlcyA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gX2lzUmVzV3JpdGFibGUoKSB7XG4gIHJldHVybiBfcmVzICYmICFfcmVzLmhlYWRlcnNTZW50O1xufVxuXG5mdW5jdGlvbiBsb2FkKG5hbWUsIGRvTm90UGFyc2UsIG9wdCkge1xuICB2YXIgY29va2llcyA9IF9pc05vZGUyLmRlZmF1bHQgPyBfcmF3Q29va2llIDogX2Nvb2tpZTIuZGVmYXVsdC5wYXJzZShkb2N1bWVudC5jb29raWUsIG9wdCk7XG4gIHZhciBjb29raWVWYWwgPSBjb29raWVzICYmIGNvb2tpZXNbbmFtZV07XG5cbiAgaWYgKHR5cGVvZiBkb05vdFBhcnNlID09PSAndW5kZWZpbmVkJykge1xuICAgIGRvTm90UGFyc2UgPSAhY29va2llVmFsIHx8IGNvb2tpZVZhbFswXSAhPT0gJ3snICYmIGNvb2tpZVZhbFswXSAhPT0gJ1snO1xuICB9XG5cbiAgaWYgKCFkb05vdFBhcnNlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvb2tpZVZhbCA9IEpTT04ucGFyc2UoY29va2llVmFsKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBOb3Qgc2VyaWFsaXplZCBvYmplY3RcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29va2llVmFsO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QocmVnZXgpIHtcbiAgdmFyIGNvb2tpZXMgPSBfaXNOb2RlMi5kZWZhdWx0ID8gX3Jhd0Nvb2tpZSA6IF9jb29raWUyLmRlZmF1bHQucGFyc2UoZG9jdW1lbnQuY29va2llKTtcblxuICBpZiAoIWNvb2tpZXMpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBpZiAoIXJlZ2V4KSB7XG4gICAgcmV0dXJuIGNvb2tpZXM7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMoY29va2llcykucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgbmFtZSkge1xuICAgIGlmICghcmVnZXgudGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgIH1cblxuICAgIHZhciBuZXdDb29raWUgPSB7fTtcbiAgICBuZXdDb29raWVbbmFtZV0gPSBjb29raWVzW25hbWVdO1xuICAgIHJldHVybiAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIGFjY3VtdWxhdG9yLCBuZXdDb29raWUpO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIHNhdmUobmFtZSwgdmFsLCBvcHQpIHtcbiAgX3Jhd0Nvb2tpZVtuYW1lXSA9IHZhbDtcblxuICAvLyBhbGxvdyB5b3UgdG8gd29yayB3aXRoIGNvb2tpZXMgYXMgb2JqZWN0cy5cbiAgaWYgKCh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWwpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBfcmF3Q29va2llW25hbWVdID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgfVxuXG4gIC8vIENvb2tpZXMgb25seSB3b3JrIGluIHRoZSBicm93c2VyXG4gIGlmICghX2lzTm9kZTIuZGVmYXVsdCkge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IF9jb29raWUyLmRlZmF1bHQuc2VyaWFsaXplKG5hbWUsIF9yYXdDb29raWVbbmFtZV0sIG9wdCk7XG4gIH1cblxuICBpZiAoX2lzUmVzV3JpdGFibGUoKSAmJiBfcmVzLmNvb2tpZSkge1xuICAgIHZhciBleHByZXNzT3B0ID0gX2V4dGVuZHMoe30sIG9wdCk7XG4gICAgaWYgKGV4cHJlc3NPcHQubWF4QWdlKSB7XG4gICAgICAvLyB0aGUgc3RhbmRhcmQgZm9yIG1heEFnZSBpcyBzZWNvbmRzIGJ1dCBleHByZXNzIHVzZXMgbWlsbGlzZWNvbmRzXG4gICAgICBleHByZXNzT3B0Lm1heEFnZSA9IG9wdC5tYXhBZ2UgKiAxMDAwO1xuICAgIH1cblxuICAgIF9yZXMuY29va2llKG5hbWUsIHZhbCwgb3B0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmUobmFtZSwgb3B0KSB7XG4gIGRlbGV0ZSBfcmF3Q29va2llW25hbWVdO1xuXG4gIGlmICh0eXBlb2Ygb3B0ID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdCA9IHt9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHQgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gV2lsbCBiZSBkZXByZWNhdGVkIGluIGZ1dHVyZSB2ZXJzaW9uc1xuICAgIG9wdCA9IHsgcGF0aDogb3B0IH07XG4gIH0gZWxzZSB7XG4gICAgLy8gUHJldmVudCBtdXRhdGlvbiBvZiBvcHQgYmVsb3dcbiAgICBvcHQgPSAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIG9wdCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG9wdC5leHBpcmVzID0gbmV3IERhdGUoMTk3MCwgMSwgMSwgMCwgMCwgMSk7XG4gICAgb3B0Lm1heEFnZSA9IDA7XG4gICAgZG9jdW1lbnQuY29va2llID0gX2Nvb2tpZTIuZGVmYXVsdC5zZXJpYWxpemUobmFtZSwgJycsIG9wdCk7XG4gIH1cblxuICBpZiAoX2lzUmVzV3JpdGFibGUoKSAmJiBfcmVzLmNsZWFyQ29va2llKSB7XG4gICAgX3Jlcy5jbGVhckNvb2tpZShuYW1lLCBvcHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFJhd0Nvb2tpZShyYXdDb29raWUpIHtcbiAgaWYgKHJhd0Nvb2tpZSkge1xuICAgIF9yYXdDb29raWUgPSBfY29va2llMi5kZWZhdWx0LnBhcnNlKHJhd0Nvb2tpZSk7XG4gIH0gZWxzZSB7XG4gICAgX3Jhd0Nvb2tpZSA9IHt9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHBsdWdUb1JlcXVlc3QocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5jb29raWUpIHtcbiAgICBfcmF3Q29va2llID0gcmVxLmNvb2tpZTtcbiAgfSBlbHNlIGlmIChyZXEuY29va2llcykge1xuICAgIF9yYXdDb29raWUgPSByZXEuY29va2llcztcbiAgfSBlbHNlIGlmIChyZXEuaGVhZGVycyAmJiByZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICBzZXRSYXdDb29raWUocmVxLmhlYWRlcnMuY29va2llKTtcbiAgfSBlbHNlIHtcbiAgICBfcmF3Q29va2llID0ge307XG4gIH1cblxuICBfcmVzID0gcmVzO1xuXG4gIHJldHVybiBmdW5jdGlvbiB1bnBsdWcoKSB7XG4gICAgX3JlcyA9IG51bGw7XG4gICAgX3Jhd0Nvb2tpZSA9IHt9O1xuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHNldFJhd0Nvb2tpZTogc2V0UmF3Q29va2llLFxuICBsb2FkOiBsb2FkLFxuICBzZWxlY3Q6IHNlbGVjdCxcbiAgc2F2ZTogc2F2ZSxcbiAgcmVtb3ZlOiByZW1vdmUsXG4gIHBsdWdUb1JlcXVlc3Q6IHBsdWdUb1JlcXVlc3Rcbn07IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEcm9wem9uZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiRHJvcHpvbmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcInByb3AtdHlwZXNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHsndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXHRcblx0dmFyIF9yZWFjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHR2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblx0XG5cdHZhciBfcHJvcFR5cGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0XG5cdHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cdFxuXHR2YXIgX2F0dHJBY2NlcHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXHRcblx0dmFyIF9hdHRyQWNjZXB0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F0dHJBY2NlcHQpO1xuXHRcblx0dmFyIF9nZXREYXRhVHJhbnNmZXJJdGVtcyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdFxuXHR2YXIgX2dldERhdGFUcmFuc2Zlckl0ZW1zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldERhdGFUcmFuc2Zlckl0ZW1zKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHRmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cdFxuXHRmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cdFxuXHRmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblx0XG5cdGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvKiBlc2xpbnQgcHJlZmVyLXRlbXBsYXRlOiAwICovXG5cdFxuXHR2YXIgc3VwcG9ydE11bHRpcGxlID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5jcmVhdGVFbGVtZW50ID8gJ211bHRpcGxlJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpIDogdHJ1ZTtcblx0XG5cdHZhciBEcm9wem9uZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdCAgX2luaGVyaXRzKERyb3B6b25lLCBfUmVhY3QkQ29tcG9uZW50KTtcblx0XG5cdCAgX2NyZWF0ZUNsYXNzKERyb3B6b25lLCBudWxsLCBbe1xuXHQgICAga2V5OiAnb25Eb2N1bWVudERyYWdPdmVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRvY3VtZW50RHJhZ092ZXIoZSkge1xuXHQgICAgICAvLyBhbGxvdyB0aGUgZW50aXJlIGRvY3VtZW50IHRvIGJlIGEgZHJhZyB0YXJnZXRcblx0ICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgZnVuY3Rpb24gRHJvcHpvbmUocHJvcHMsIGNvbnRleHQpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wem9uZSk7XG5cdFxuXHQgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKERyb3B6b25lLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHJvcHpvbmUpKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cdFxuXHQgICAgX3RoaXMucmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcblx0ICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgIHJldHVybiBjaGlsZHJlbihfdGhpcy5zdGF0ZSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuXHQgICAgfTtcblx0XG5cdCAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF90aGlzKTtcblx0ICAgIF90aGlzLm9uRG9jdW1lbnREcm9wID0gX3RoaXMub25Eb2N1bWVudERyb3AuYmluZChfdGhpcyk7XG5cdCAgICBfdGhpcy5vbkRyYWdTdGFydCA9IF90aGlzLm9uRHJhZ1N0YXJ0LmJpbmQoX3RoaXMpO1xuXHQgICAgX3RoaXMub25EcmFnRW50ZXIgPSBfdGhpcy5vbkRyYWdFbnRlci5iaW5kKF90aGlzKTtcblx0ICAgIF90aGlzLm9uRHJhZ0xlYXZlID0gX3RoaXMub25EcmFnTGVhdmUuYmluZChfdGhpcyk7XG5cdCAgICBfdGhpcy5vbkRyYWdPdmVyID0gX3RoaXMub25EcmFnT3Zlci5iaW5kKF90aGlzKTtcblx0ICAgIF90aGlzLm9uRHJvcCA9IF90aGlzLm9uRHJvcC5iaW5kKF90aGlzKTtcblx0ICAgIF90aGlzLm9uRmlsZURpYWxvZ0NhbmNlbCA9IF90aGlzLm9uRmlsZURpYWxvZ0NhbmNlbC5iaW5kKF90aGlzKTtcblx0ICAgIF90aGlzLmZpbGVBY2NlcHRlZCA9IF90aGlzLmZpbGVBY2NlcHRlZC5iaW5kKF90aGlzKTtcblx0ICAgIF90aGlzLnNldFJlZiA9IF90aGlzLnNldFJlZi5iaW5kKF90aGlzKTtcblx0ICAgIF90aGlzLmlzRmlsZURpYWxvZ0FjdGl2ZSA9IGZhbHNlO1xuXHQgICAgX3RoaXMuc3RhdGUgPSB7XG5cdCAgICAgIGlzRHJhZ0FjdGl2ZTogZmFsc2UsXG5cdCAgICAgIGFjY2VwdGVkRmlsZXM6IFtdLFxuXHQgICAgICByZWplY3RlZEZpbGVzOiBbXVxuXHQgICAgfTtcblx0ICAgIHJldHVybiBfdGhpcztcblx0ICB9XG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhEcm9wem9uZSwgW3tcblx0ICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcblx0ICAgICAgdmFyIHByZXZlbnREcm9wT25Eb2N1bWVudCA9IHRoaXMucHJvcHMucHJldmVudERyb3BPbkRvY3VtZW50O1xuXHRcblx0ICAgICAgdGhpcy5kcmFnVGFyZ2V0cyA9IFtdO1xuXHRcblx0ICAgICAgaWYgKHByZXZlbnREcm9wT25Eb2N1bWVudCkge1xuXHQgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgRHJvcHpvbmUub25Eb2N1bWVudERyYWdPdmVyLCBmYWxzZSk7XG5cdCAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMub25Eb2N1bWVudERyb3AsIGZhbHNlKTtcblx0ICAgICAgfVxuXHQgICAgICAvLyBUcmllZCBpbXBsZW1lbnRpbmcgYWRkRXZlbnRMaXN0ZW5lciwgYnV0IGRpZG4ndCB3b3JrIG91dFxuXHQgICAgICBkb2N1bWVudC5ib2R5Lm9uZm9jdXMgPSB0aGlzLm9uRmlsZURpYWxvZ0NhbmNlbDtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdCAgICAgIHZhciBwcmV2ZW50RHJvcE9uRG9jdW1lbnQgPSB0aGlzLnByb3BzLnByZXZlbnREcm9wT25Eb2N1bWVudDtcblx0XG5cdCAgICAgIGlmIChwcmV2ZW50RHJvcE9uRG9jdW1lbnQpIHtcblx0ICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIERyb3B6b25lLm9uRG9jdW1lbnREcmFnT3Zlcik7XG5cdCAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMub25Eb2N1bWVudERyb3ApO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIENhbiBiZSByZXBsYWNlZCB3aXRoIHJlbW92ZUV2ZW50TGlzdGVuZXIsIGlmIGFkZEV2ZW50TGlzdGVuZXIgd29ya3Ncblx0ICAgICAgZG9jdW1lbnQuYm9keS5vbmZvY3VzID0gbnVsbDtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdvbkRvY3VtZW50RHJvcCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gb25Eb2N1bWVudERyb3AoZSkge1xuXHQgICAgICBpZiAodGhpcy5ub2RlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuXHQgICAgICAgIC8vIGlmIHdlIGludGVyY2VwdGVkIGFuIGV2ZW50IGZvciBvdXIgaW5zdGFuY2UsIGxldCBpdCBwcm9wYWdhdGUgZG93biB0byB0aGUgaW5zdGFuY2UncyBvbkRyb3AgaGFuZGxlclxuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgIHRoaXMuZHJhZ1RhcmdldHMgPSBbXTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdvbkRyYWdTdGFydCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnU3RhcnQoZSkge1xuXHQgICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdTdGFydCkge1xuXHQgICAgICAgIHRoaXMucHJvcHMub25EcmFnU3RhcnQuY2FsbCh0aGlzLCBlKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ29uRHJhZ0VudGVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWdFbnRlcihlKSB7XG5cdCAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblx0XG5cdCAgICAgIC8vIENvdW50IHRoZSBkcm9wem9uZSBhbmQgYW55IGNoaWxkcmVuIHRoYXQgYXJlIGVudGVyZWQuXG5cdCAgICAgIGlmICh0aGlzLmRyYWdUYXJnZXRzLmluZGV4T2YoZS50YXJnZXQpID09PSAtMSkge1xuXHQgICAgICAgIHRoaXMuZHJhZ1RhcmdldHMucHVzaChlLnRhcmdldCk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBmaWxlcyA9ICgwLCBfZ2V0RGF0YVRyYW5zZmVySXRlbXMyLmRlZmF1bHQpKGUpO1xuXHQgICAgICB2YXIgYWxsRmlsZXNBY2NlcHRlZCA9IHRoaXMuYWxsRmlsZXNBY2NlcHRlZChmaWxlcyk7XG5cdCAgICAgIHZhciBpc011bHRpcGxlQWxsb3dlZCA9IHRoaXMucHJvcHMubXVsdGlwbGUgfHwgZmlsZXMubGVuZ3RoIDw9IDE7XG5cdFxuXHQgICAgICB0aGlzLnNldFN0YXRlKHtcblx0ICAgICAgICBpc0RyYWdBY3RpdmU6IGFsbEZpbGVzQWNjZXB0ZWQsXG5cdCAgICAgICAgaXNEcmFnUmVqZWN0OiAhYWxsRmlsZXNBY2NlcHRlZCB8fCAhaXNNdWx0aXBsZUFsbG93ZWRcblx0ICAgICAgfSk7XG5cdFxuXHQgICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdFbnRlcikge1xuXHQgICAgICAgIHRoaXMucHJvcHMub25EcmFnRW50ZXIuY2FsbCh0aGlzLCBlKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ29uRHJhZ092ZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ092ZXIoZSkge1xuXHQgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcblx0ICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0ICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgLy8gY29udGludWUgcmVnYXJkbGVzcyBvZiBlcnJvclxuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdPdmVyKSB7XG5cdCAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdPdmVyLmNhbGwodGhpcywgZSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ29uRHJhZ0xlYXZlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWdMZWF2ZShlKSB7XG5cdCAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXHRcblx0ICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcblx0ICAgICAgLy8gT25seSBkZWFjdGl2YXRlIG9uY2UgdGhlIGRyb3B6b25lIGFuZCBhbGwgY2hpbGRyZW4gaGF2ZSBiZWVuIGxlZnQuXG5cdCAgICAgIHRoaXMuZHJhZ1RhcmdldHMgPSB0aGlzLmRyYWdUYXJnZXRzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcblx0ICAgICAgICByZXR1cm4gZWwgIT09IGUudGFyZ2V0ICYmIF90aGlzMi5ub2RlLmNvbnRhaW5zKGVsKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIGlmICh0aGlzLmRyYWdUYXJnZXRzLmxlbmd0aCA+IDApIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHRoaXMuc2V0U3RhdGUoe1xuXHQgICAgICAgIGlzRHJhZ0FjdGl2ZTogZmFsc2UsXG5cdCAgICAgICAgaXNEcmFnUmVqZWN0OiBmYWxzZVxuXHQgICAgICB9KTtcblx0XG5cdCAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ0xlYXZlKSB7XG5cdCAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdMZWF2ZS5jYWxsKHRoaXMsIGUpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnb25Ecm9wJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyb3AoZSkge1xuXHQgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblx0XG5cdCAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuXHQgICAgICAgICAgb25Ecm9wID0gX3Byb3BzLm9uRHJvcCxcblx0ICAgICAgICAgIG9uRHJvcEFjY2VwdGVkID0gX3Byb3BzLm9uRHJvcEFjY2VwdGVkLFxuXHQgICAgICAgICAgb25Ecm9wUmVqZWN0ZWQgPSBfcHJvcHMub25Ecm9wUmVqZWN0ZWQsXG5cdCAgICAgICAgICBtdWx0aXBsZSA9IF9wcm9wcy5tdWx0aXBsZSxcblx0ICAgICAgICAgIGRpc2FibGVQcmV2aWV3ID0gX3Byb3BzLmRpc2FibGVQcmV2aWV3O1xuXHRcblx0ICAgICAgdmFyIGZpbGVMaXN0ID0gKDAsIF9nZXREYXRhVHJhbnNmZXJJdGVtczIuZGVmYXVsdCkoZSk7XG5cdCAgICAgIHZhciBhY2NlcHRlZEZpbGVzID0gW107XG5cdCAgICAgIHZhciByZWplY3RlZEZpbGVzID0gW107XG5cdFxuXHQgICAgICAvLyBTdG9wIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvclxuXHQgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cdFxuXHQgICAgICAvLyBSZXNldCB0aGUgY291bnRlciBhbG9uZyB3aXRoIHRoZSBkcmFnIG9uIGEgZHJvcC5cblx0ICAgICAgdGhpcy5kcmFnVGFyZ2V0cyA9IFtdO1xuXHQgICAgICB0aGlzLmlzRmlsZURpYWxvZ0FjdGl2ZSA9IGZhbHNlO1xuXHRcblx0ICAgICAgZmlsZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuXHQgICAgICAgIGlmICghZGlzYWJsZVByZXZpZXcpIHtcblx0ICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIGZpbGUucHJldmlldyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cdCAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcblx0ICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZ2VuZXJhdGUgcHJldmlldyBmb3IgZmlsZScsIGZpbGUsIGVycik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBpZiAoX3RoaXMzLmZpbGVBY2NlcHRlZChmaWxlKSAmJiBfdGhpczMuZmlsZU1hdGNoU2l6ZShmaWxlKSkge1xuXHQgICAgICAgICAgYWNjZXB0ZWRGaWxlcy5wdXNoKGZpbGUpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICByZWplY3RlZEZpbGVzLnB1c2goZmlsZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0XG5cdCAgICAgIGlmICghbXVsdGlwbGUpIHtcblx0ICAgICAgICAvLyBpZiBub3QgaW4gbXVsdGkgbW9kZSBhZGQgYW55IGV4dHJhIGFjY2VwdGVkIGZpbGVzIHRvIHJlamVjdGVkLlxuXHQgICAgICAgIC8vIFRoaXMgd2lsbCBhbGxvdyBlbmQgdXNlcnMgdG8gZWFzaWx5IGlnbm9yZSBhIG11bHRpIGZpbGUgZHJvcCBpbiBcInNpbmdsZVwiIG1vZGUuXG5cdCAgICAgICAgcmVqZWN0ZWRGaWxlcy5wdXNoLmFwcGx5KHJlamVjdGVkRmlsZXMsIF90b0NvbnN1bWFibGVBcnJheShhY2NlcHRlZEZpbGVzLnNwbGljZSgxKSkpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAob25Ecm9wKSB7XG5cdCAgICAgICAgb25Ecm9wLmNhbGwodGhpcywgYWNjZXB0ZWRGaWxlcywgcmVqZWN0ZWRGaWxlcywgZSk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmIChyZWplY3RlZEZpbGVzLmxlbmd0aCA+IDAgJiYgb25Ecm9wUmVqZWN0ZWQpIHtcblx0ICAgICAgICBvbkRyb3BSZWplY3RlZC5jYWxsKHRoaXMsIHJlamVjdGVkRmlsZXMsIGUpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAoYWNjZXB0ZWRGaWxlcy5sZW5ndGggPiAwICYmIG9uRHJvcEFjY2VwdGVkKSB7XG5cdCAgICAgICAgb25Ecm9wQWNjZXB0ZWQuY2FsbCh0aGlzLCBhY2NlcHRlZEZpbGVzLCBlKTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gUmVzZXQgZHJhZyBzdGF0ZVxuXHQgICAgICB0aGlzLnNldFN0YXRlKHtcblx0ICAgICAgICBpc0RyYWdBY3RpdmU6IGZhbHNlLFxuXHQgICAgICAgIGlzRHJhZ1JlamVjdDogZmFsc2UsXG5cdCAgICAgICAgYWNjZXB0ZWRGaWxlczogYWNjZXB0ZWRGaWxlcyxcblx0ICAgICAgICByZWplY3RlZEZpbGVzOiByZWplY3RlZEZpbGVzXG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ29uQ2xpY2snLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuXHQgICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG5cdCAgICAgICAgICBvbkNsaWNrID0gX3Byb3BzMi5vbkNsaWNrLFxuXHQgICAgICAgICAgZGlzYWJsZUNsaWNrID0gX3Byb3BzMi5kaXNhYmxlQ2xpY2s7XG5cdFxuXHQgICAgICBpZiAoIWRpc2FibGVDbGljaykge1xuXHQgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdCAgICAgICAgdGhpcy5vcGVuKCk7XG5cdCAgICAgICAgaWYgKG9uQ2xpY2spIHtcblx0ICAgICAgICAgIG9uQ2xpY2suY2FsbCh0aGlzLCBlKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdvbkZpbGVEaWFsb2dDYW5jZWwnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRmlsZURpYWxvZ0NhbmNlbCgpIHtcblx0ICAgICAgLy8gdGltZW91dCB3aWxsIG5vdCByZWNvZ25pemUgY29udGV4dCBvZiB0aGlzIG1ldGhvZFxuXHQgICAgICB2YXIgb25GaWxlRGlhbG9nQ2FuY2VsID0gdGhpcy5wcm9wcy5vbkZpbGVEaWFsb2dDYW5jZWw7XG5cdCAgICAgIHZhciBmaWxlSW5wdXRFbCA9IHRoaXMuZmlsZUlucHV0RWw7XG5cdCAgICAgIHZhciBpc0ZpbGVEaWFsb2dBY3RpdmUgPSB0aGlzLmlzRmlsZURpYWxvZ0FjdGl2ZTtcblx0ICAgICAgLy8gZXhlY3V0ZSB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBvbkZpbGVEaWFsb2dDYW5jZWwgaXMgZGVmaW5lZCBhbmQgRmlsZURpYWxvZ1xuXHQgICAgICAvLyBpcyBvcGVuZWQgaW4gdGhlIGJyb3dzZXJcblx0XG5cdCAgICAgIGlmIChvbkZpbGVEaWFsb2dDYW5jZWwgJiYgaXNGaWxlRGlhbG9nQWN0aXZlKSB7XG5cdCAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAvLyBSZXR1cm5zIGFuIG9iamVjdCBhcyBGaWxlTGlzdFxuXHQgICAgICAgICAgdmFyIEZpbGVMaXN0ID0gZmlsZUlucHV0RWwuZmlsZXM7XG5cdCAgICAgICAgICBpZiAoIUZpbGVMaXN0Lmxlbmd0aCkge1xuXHQgICAgICAgICAgICBpc0ZpbGVEaWFsb2dBY3RpdmUgPSBmYWxzZTtcblx0ICAgICAgICAgICAgb25GaWxlRGlhbG9nQ2FuY2VsKCk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSwgMzAwKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ3NldFJlZicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UmVmKHJlZikge1xuXHQgICAgICB0aGlzLm5vZGUgPSByZWY7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnZmlsZUFjY2VwdGVkJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBmaWxlQWNjZXB0ZWQoZmlsZSkge1xuXHQgICAgICAvLyBGaXJlZm94IHZlcnNpb25zIHByaW9yIHRvIDUzIHJldHVybiBhIGJvZ3VzIE1JTUUgdHlwZSBmb3IgZXZlcnkgZmlsZSBkcmFnLCBzbyBkcmFnb3ZlcnMgd2l0aFxuXHQgICAgICAvLyB0aGF0IE1JTUUgdHlwZSB3aWxsIGFsd2F5cyBiZSBhY2NlcHRlZFxuXHQgICAgICByZXR1cm4gZmlsZS50eXBlID09PSAnYXBwbGljYXRpb24veC1tb3otZmlsZScgfHwgKDAsIF9hdHRyQWNjZXB0Mi5kZWZhdWx0KShmaWxlLCB0aGlzLnByb3BzLmFjY2VwdCk7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnZmlsZU1hdGNoU2l6ZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZmlsZU1hdGNoU2l6ZShmaWxlKSB7XG5cdCAgICAgIHJldHVybiBmaWxlLnNpemUgPD0gdGhpcy5wcm9wcy5tYXhTaXplICYmIGZpbGUuc2l6ZSA+PSB0aGlzLnByb3BzLm1pblNpemU7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnYWxsRmlsZXNBY2NlcHRlZCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYWxsRmlsZXNBY2NlcHRlZChmaWxlcykge1xuXHQgICAgICByZXR1cm4gZmlsZXMuZXZlcnkodGhpcy5maWxlQWNjZXB0ZWQpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogT3BlbiBzeXN0ZW0gZmlsZSB1cGxvYWQgZGlhbG9nLlxuXHQgICAgICpcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHRcblx0ICB9LCB7XG5cdCAgICBrZXk6ICdvcGVuJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKCkge1xuXHQgICAgICB0aGlzLmlzRmlsZURpYWxvZ0FjdGl2ZSA9IHRydWU7XG5cdCAgICAgIHRoaXMuZmlsZUlucHV0RWwudmFsdWUgPSBudWxsO1xuXHQgICAgICB0aGlzLmZpbGVJbnB1dEVsLmNsaWNrKCk7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVuZGVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdCAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXHRcblx0ICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuXHQgICAgICAgICAgYWNjZXB0ID0gX3Byb3BzMy5hY2NlcHQsXG5cdCAgICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfcHJvcHMzLmFjdGl2ZUNsYXNzTmFtZSxcblx0ICAgICAgICAgIGlucHV0UHJvcHMgPSBfcHJvcHMzLmlucHV0UHJvcHMsXG5cdCAgICAgICAgICBtdWx0aXBsZSA9IF9wcm9wczMubXVsdGlwbGUsXG5cdCAgICAgICAgICBuYW1lID0gX3Byb3BzMy5uYW1lLFxuXHQgICAgICAgICAgcmVqZWN0Q2xhc3NOYW1lID0gX3Byb3BzMy5yZWplY3RDbGFzc05hbWUsXG5cdCAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczMuY2hpbGRyZW4sXG5cdCAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczMsIFsnYWNjZXB0JywgJ2FjdGl2ZUNsYXNzTmFtZScsICdpbnB1dFByb3BzJywgJ211bHRpcGxlJywgJ25hbWUnLCAncmVqZWN0Q2xhc3NOYW1lJywgJ2NoaWxkcmVuJ10pO1xuXHRcblx0ICAgICAgdmFyIGFjdGl2ZVN0eWxlID0gcmVzdC5hY3RpdmVTdHlsZSxcblx0ICAgICAgICAgIGNsYXNzTmFtZSA9IHJlc3QuY2xhc3NOYW1lLFxuXHQgICAgICAgICAgcmVqZWN0U3R5bGUgPSByZXN0LnJlamVjdFN0eWxlLFxuXHQgICAgICAgICAgc3R5bGUgPSByZXN0LnN0eWxlLFxuXHQgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocmVzdCwgWydhY3RpdmVTdHlsZScsICdjbGFzc05hbWUnLCAncmVqZWN0U3R5bGUnLCAnc3R5bGUnXSk7XG5cdFxuXHQgICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcblx0ICAgICAgICAgIGlzRHJhZ0FjdGl2ZSA9IF9zdGF0ZS5pc0RyYWdBY3RpdmUsXG5cdCAgICAgICAgICBpc0RyYWdSZWplY3QgPSBfc3RhdGUuaXNEcmFnUmVqZWN0O1xuXHRcblx0XG5cdCAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSB8fCAnJztcblx0XG5cdCAgICAgIGlmIChpc0RyYWdBY3RpdmUgJiYgYWN0aXZlQ2xhc3NOYW1lKSB7XG5cdCAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIGFjdGl2ZUNsYXNzTmFtZTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoaXNEcmFnUmVqZWN0ICYmIHJlamVjdENsYXNzTmFtZSkge1xuXHQgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyByZWplY3RDbGFzc05hbWU7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmICghY2xhc3NOYW1lICYmICFzdHlsZSAmJiAhYWN0aXZlU3R5bGUgJiYgIXJlamVjdFN0eWxlKSB7XG5cdCAgICAgICAgc3R5bGUgPSB7XG5cdCAgICAgICAgICB3aWR0aDogMjAwLFxuXHQgICAgICAgICAgaGVpZ2h0OiAyMDAsXG5cdCAgICAgICAgICBib3JkZXJXaWR0aDogMixcblx0ICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzY2NicsXG5cdCAgICAgICAgICBib3JkZXJTdHlsZTogJ2Rhc2hlZCcsXG5cdCAgICAgICAgICBib3JkZXJSYWRpdXM6IDVcblx0ICAgICAgICB9O1xuXHQgICAgICAgIGFjdGl2ZVN0eWxlID0ge1xuXHQgICAgICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG5cdCAgICAgICAgICBib3JkZXJDb2xvcjogJyM2YzYnLFxuXHQgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZSdcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHJlamVjdFN0eWxlID0ge1xuXHQgICAgICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG5cdCAgICAgICAgICBib3JkZXJDb2xvcjogJyNjNjYnLFxuXHQgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZSdcblx0ICAgICAgICB9O1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB2YXIgYXBwbGllZFN0eWxlID0gdm9pZCAwO1xuXHQgICAgICBpZiAoYWN0aXZlU3R5bGUgJiYgaXNEcmFnQWN0aXZlKSB7XG5cdCAgICAgICAgYXBwbGllZFN0eWxlID0gX2V4dGVuZHMoe30sIHN0eWxlLCBhY3RpdmVTdHlsZSk7XG5cdCAgICAgIH0gZWxzZSBpZiAocmVqZWN0U3R5bGUgJiYgaXNEcmFnUmVqZWN0KSB7XG5cdCAgICAgICAgYXBwbGllZFN0eWxlID0gX2V4dGVuZHMoe30sIHN0eWxlLCByZWplY3RTdHlsZSk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgYXBwbGllZFN0eWxlID0gX2V4dGVuZHMoe30sIHN0eWxlKTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIGlucHV0QXR0cmlidXRlcyA9IHtcblx0ICAgICAgICBhY2NlcHQ6IGFjY2VwdCxcblx0ICAgICAgICB0eXBlOiAnZmlsZScsXG5cdCAgICAgICAgc3R5bGU6IHsgZGlzcGxheTogJ25vbmUnIH0sXG5cdCAgICAgICAgbXVsdGlwbGU6IHN1cHBvcnRNdWx0aXBsZSAmJiBtdWx0aXBsZSxcblx0ICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihlbCkge1xuXHQgICAgICAgICAgcmV0dXJuIF90aGlzNC5maWxlSW5wdXRFbCA9IGVsO1xuXHQgICAgICAgIH0sIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0ICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkRyb3Bcblx0ICAgICAgfTtcblx0XG5cdCAgICAgIGlmIChuYW1lICYmIG5hbWUubGVuZ3RoKSB7XG5cdCAgICAgICAgaW5wdXRBdHRyaWJ1dGVzLm5hbWUgPSBuYW1lO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBSZW1vdmUgY3VzdG9tIHByb3BlcnRpZXMgYmVmb3JlIHBhc3NpbmcgdGhlbSB0byB0aGUgd3JhcHBlciBkaXYgZWxlbWVudFxuXHQgICAgICB2YXIgY3VzdG9tUHJvcHMgPSBbJ2FjY2VwdGVkRmlsZXMnLCAncHJldmVudERyb3BPbkRvY3VtZW50JywgJ2Rpc2FibGVQcmV2aWV3JywgJ2Rpc2FibGVDbGljaycsICdvbkRyb3BBY2NlcHRlZCcsICdvbkRyb3BSZWplY3RlZCcsICdvbkZpbGVEaWFsb2dDYW5jZWwnLCAnbWF4U2l6ZScsICdtaW5TaXplJ107XG5cdCAgICAgIHZhciBkaXZQcm9wcyA9IF9leHRlbmRzKHt9LCBwcm9wcyk7XG5cdCAgICAgIGN1c3RvbVByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcblx0ICAgICAgICByZXR1cm4gZGVsZXRlIGRpdlByb3BzW3Byb3BdO1xuXHQgICAgICB9KTtcblx0XG5cdCAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0ICAgICAgICAnZGl2Jyxcblx0ICAgICAgICBfZXh0ZW5kcyh7XG5cdCAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0ICAgICAgICAgIHN0eWxlOiBhcHBsaWVkU3R5bGVcblx0ICAgICAgICB9LCBkaXZQcm9wcyAvKiBleHBhbmQgdXNlciBwcm92aWRlZCBwcm9wcyBmaXJzdCBzbyBldmVudCBoYW5kbGVycyBhcmUgbmV2ZXIgb3ZlcnJpZGRlbiAqLywge1xuXHQgICAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuXHQgICAgICAgICAgb25EcmFnU3RhcnQ6IHRoaXMub25EcmFnU3RhcnQsXG5cdCAgICAgICAgICBvbkRyYWdFbnRlcjogdGhpcy5vbkRyYWdFbnRlcixcblx0ICAgICAgICAgIG9uRHJhZ092ZXI6IHRoaXMub25EcmFnT3Zlcixcblx0ICAgICAgICAgIG9uRHJhZ0xlYXZlOiB0aGlzLm9uRHJhZ0xlYXZlLFxuXHQgICAgICAgICAgb25Ecm9wOiB0aGlzLm9uRHJvcCxcblx0ICAgICAgICAgIHJlZjogdGhpcy5zZXRSZWZcblx0ICAgICAgICB9KSxcblx0ICAgICAgICB0aGlzLnJlbmRlckNoaWxkcmVuKGNoaWxkcmVuKSxcblx0ICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7fSwgaW5wdXRQcm9wcyAvKiBleHBhbmQgdXNlciBwcm92aWRlZCBpbnB1dFByb3BzIGZpcnN0IHNvIGlucHV0QXR0cmlidXRlcyBvdmVycmlkZSB0aGVtICovLCBpbnB1dEF0dHJpYnV0ZXMpKVxuXHQgICAgICApO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIERyb3B6b25lO1xuXHR9KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXHRcblx0RHJvcHpvbmUucHJvcFR5cGVzID0ge1xuXHQgIC8qKlxuXHQgICAqIEFsbG93IHNwZWNpZmljIHR5cGVzIG9mIGZpbGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL29rb25ldC9hdHRyLWFjY2VwdCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblx0ICAgKiBLZWVwIGluIG1pbmQgdGhhdCBtaW1lIHR5cGUgZGV0ZXJtaW5hdGlvbiBpcyBub3QgcmVsaWFibGUgYWNjcm9zcyBwbGF0Zm9ybXMuIENTViBmaWxlcyxcblx0ICAgKiBmb3IgZXhhbXBsZSwgYXJlIHJlcG9ydGVkIGFzIHRleHQvcGxhaW4gdW5kZXIgbWFjT1MgYnV0IGFzIGFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCB1bmRlclxuXHQgICAqIFdpbmRvd3MuIEluIHNvbWUgY2FzZXMgdGhlcmUgbWlnaHQgbm90IGJlIGEgbWltZSB0eXBlIHNldCBhdCBhbGwuXG5cdCAgICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vb2tvbmV0L3JlYWN0LWRyb3B6b25lL2lzc3Vlcy8yNzZcblx0ICAgKi9cblx0ICBhY2NlcHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuXHRcblx0ICAvKipcblx0ICAgKiBDb250ZW50cyBvZiB0aGUgZHJvcHpvbmVcblx0ICAgKi9cblx0ICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSwgX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXSksXG5cdFxuXHQgIC8qKlxuXHQgICAqIERpc2FsbG93IGNsaWNraW5nIG9uIHRoZSBkcm9wem9uZSBjb250YWluZXIgdG8gb3BlbiBmaWxlIGRpYWxvZ1xuXHQgICAqL1xuXHQgIGRpc2FibGVDbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuXHRcblx0ICAvKipcblx0ICAgKiBFbmFibGUvZGlzYWJsZSBwcmV2aWV3IGdlbmVyYXRpb25cblx0ICAgKi9cblx0ICBkaXNhYmxlUHJldmlldzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuXHRcblx0ICAvKipcblx0ICAgKiBJZiBmYWxzZSwgYWxsb3cgZHJvcHBlZCBpdGVtcyB0byB0YWtlIG92ZXIgdGhlIGN1cnJlbnQgYnJvd3NlciB3aW5kb3dcblx0ICAgKi9cblx0ICBwcmV2ZW50RHJvcE9uRG9jdW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcblx0XG5cdCAgLyoqXG5cdCAgICogUGFzcyBhZGRpdGlvbmFsIGF0dHJpYnV0ZXMgdG8gdGhlIGA8aW5wdXQgdHlwZT1cImZpbGVcIi8+YCB0YWdcblx0ICAgKi9cblx0ICBpbnB1dFByb3BzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcblx0XG5cdCAgLyoqXG5cdCAgICogQWxsb3cgZHJvcHBpbmcgbXVsdGlwbGUgZmlsZXNcblx0ICAgKi9cblx0ICBtdWx0aXBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuXHRcblx0ICAvKipcblx0ICAgKiBgbmFtZWAgYXR0cmlidXRlIGZvciB0aGUgaW5wdXQgdGFnXG5cdCAgICovXG5cdCAgbmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG5cdFxuXHQgIC8qKlxuXHQgICAqIE1heGltdW0gZmlsZSBzaXplXG5cdCAgICovXG5cdCAgbWF4U2l6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG5cdFxuXHQgIC8qKlxuXHQgICAqIE1pbmltdW0gZmlsZSBzaXplXG5cdCAgICovXG5cdCAgbWluU2l6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG5cdFxuXHQgIC8qKlxuXHQgICAqIGNsYXNzTmFtZVxuXHQgICAqL1xuXHQgIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG5cdFxuXHQgIC8qKlxuXHQgICAqIGNsYXNzTmFtZSBmb3IgYWNjZXB0ZWQgc3RhdGVcblx0ICAgKi9cblx0ICBhY3RpdmVDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuXHRcblx0ICAvKipcblx0ICAgKiBjbGFzc05hbWUgZm9yIHJlamVjdGVkIHN0YXRlXG5cdCAgICovXG5cdCAgcmVqZWN0Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcblx0XG5cdCAgLyoqXG5cdCAgICogQ1NTIHN0eWxlcyB0byBhcHBseVxuXHQgICAqL1xuXHQgIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcblx0XG5cdCAgLyoqXG5cdCAgICogQ1NTIHN0eWxlcyB0byBhcHBseSB3aGVuIGRyb3Agd2lsbCBiZSBhY2NlcHRlZFxuXHQgICAqL1xuXHQgIGFjdGl2ZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcblx0XG5cdCAgLyoqXG5cdCAgICogQ1NTIHN0eWxlcyB0byBhcHBseSB3aGVuIGRyb3Agd2lsbCBiZSByZWplY3RlZFxuXHQgICAqL1xuXHQgIHJlamVjdFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcblx0XG5cdCAgLyoqXG5cdCAgICogb25DbGljayBjYWxsYmFja1xuXHQgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAgICovXG5cdCAgb25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXHRcblx0ICAvKipcblx0ICAgKiBvbkRyb3AgY2FsbGJhY2tcblx0ICAgKi9cblx0ICBvbkRyb3A6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcblx0XG5cdCAgLyoqXG5cdCAgICogb25Ecm9wQWNjZXB0ZWQgY2FsbGJhY2tcblx0ICAgKi9cblx0ICBvbkRyb3BBY2NlcHRlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXHRcblx0ICAvKipcblx0ICAgKiBvbkRyb3BSZWplY3RlZCBjYWxsYmFja1xuXHQgICAqL1xuXHQgIG9uRHJvcFJlamVjdGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdFxuXHQgIC8qKlxuXHQgICAqIG9uRHJhZ1N0YXJ0IGNhbGxiYWNrXG5cdCAgICovXG5cdCAgb25EcmFnU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcblx0XG5cdCAgLyoqXG5cdCAgICogb25EcmFnRW50ZXIgY2FsbGJhY2tcblx0ICAgKi9cblx0ICBvbkRyYWdFbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXHRcblx0ICAvKipcblx0ICAgKiBvbkRyYWdPdmVyIGNhbGxiYWNrXG5cdCAgICovXG5cdCAgb25EcmFnT3ZlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXHRcblx0ICAvKipcblx0ICAgKiBvbkRyYWdMZWF2ZSBjYWxsYmFja1xuXHQgICAqL1xuXHQgIG9uRHJhZ0xlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdFxuXHQgIC8qKlxuXHQgICAqIFByb3ZpZGUgYSBjYWxsYmFjayBvbiBjbGlja2luZyB0aGUgY2FuY2VsIGJ1dHRvbiBvZiB0aGUgZmlsZSBkaWFsb2dcblx0ICAgKi9cblx0ICBvbkZpbGVEaWFsb2dDYW5jZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xuXHR9O1xuXHRcblx0RHJvcHpvbmUuZGVmYXVsdFByb3BzID0ge1xuXHQgIHByZXZlbnREcm9wT25Eb2N1bWVudDogdHJ1ZSxcblx0ICBkaXNhYmxlUHJldmlldzogZmFsc2UsXG5cdCAgZGlzYWJsZUNsaWNrOiBmYWxzZSxcblx0ICBtdWx0aXBsZTogdHJ1ZSxcblx0ICBtYXhTaXplOiBJbmZpbml0eSxcblx0ICBtaW5TaXplOiAwXG5cdH07XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBEcm9wem9uZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSlcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cdHZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblx0XG5cdC8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuXHQvLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcblx0Ly8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuXHQvLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXHRcblx0dmFyIGNhY2hlZFNldFRpbWVvdXQ7XG5cdHZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cdFxuXHRmdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG5cdH1cblx0ZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xuXHR9XG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICB0cnkge1xuXHQgICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcblx0ICAgICAgICB9XG5cdCAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG5cdCAgICB9XG5cdCAgICB0cnkge1xuXHQgICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuXHQgICAgICAgIH1cblx0ICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuXHQgICAgfVxuXHR9ICgpKVxuXHRmdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuXHQgICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcblx0ICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcblx0ICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuXHQgICAgfVxuXHQgICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcblx0ICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuXHQgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuXHQgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG5cdCAgICB9XG5cdCAgICB0cnkge1xuXHQgICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3Ncblx0ICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuXHQgICAgfSBjYXRjaChlKXtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcblx0ICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuXHQgICAgICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG5cdCAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdFxuXHRcblx0fVxuXHRmdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG5cdCAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcblx0ICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcblx0ICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG5cdCAgICB9XG5cdCAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG5cdCAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcblx0ICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG5cdCAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuXHQgICAgfVxuXHQgICAgdHJ5IHtcblx0ICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG5cdCAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuXHQgICAgfSBjYXRjaCAoZSl7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuXHQgICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcblx0ICAgICAgICB9IGNhdGNoIChlKXtcblx0ICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG5cdCAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcblx0ICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHRcblx0XG5cdFxuXHR9XG5cdHZhciBxdWV1ZSA9IFtdO1xuXHR2YXIgZHJhaW5pbmcgPSBmYWxzZTtcblx0dmFyIGN1cnJlbnRRdWV1ZTtcblx0dmFyIHF1ZXVlSW5kZXggPSAtMTtcblx0XG5cdGZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcblx0ICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGRyYWluaW5nID0gZmFsc2U7XG5cdCAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuXHQgICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcblx0ICAgIH1cblx0ICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcblx0ICAgICAgICBkcmFpblF1ZXVlKCk7XG5cdCAgICB9XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG5cdCAgICBpZiAoZHJhaW5pbmcpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcblx0ICAgIGRyYWluaW5nID0gdHJ1ZTtcblx0XG5cdCAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuXHQgICAgd2hpbGUobGVuKSB7XG5cdCAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG5cdCAgICAgICAgcXVldWUgPSBbXTtcblx0ICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG5cdCAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcblx0ICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG5cdCAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuXHQgICAgfVxuXHQgICAgY3VycmVudFF1ZXVlID0gbnVsbDtcblx0ICAgIGRyYWluaW5nID0gZmFsc2U7XG5cdCAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG5cdH1cblx0XG5cdHByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG5cdCAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG5cdCAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdCAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuXHQgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcblx0ICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuXHQgICAgfVxuXHR9O1xuXHRcblx0Ly8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuXHRmdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcblx0ICAgIHRoaXMuZnVuID0gZnVuO1xuXHQgICAgdGhpcy5hcnJheSA9IGFycmF5O1xuXHR9XG5cdEl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xuXHR9O1xuXHRwcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xuXHRwcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xuXHRwcm9jZXNzLmVudiA9IHt9O1xuXHRwcm9jZXNzLmFyZ3YgPSBbXTtcblx0cHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5cdHByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblx0XG5cdGZ1bmN0aW9uIG5vb3AoKSB7fVxuXHRcblx0cHJvY2Vzcy5vbiA9IG5vb3A7XG5cdHByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xuXHRwcm9jZXNzLm9uY2UgPSBub29wO1xuXHRwcm9jZXNzLm9mZiA9IG5vb3A7XG5cdHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xuXHRwcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5cdHByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cdFxuXHRwcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xuXHR9O1xuXHRcblx0cHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcblx0cHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG5cdH07XG5cdHByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gbihlKXtpZihyW2VdKXJldHVybiByW2VdLmV4cG9ydHM7dmFyIG89cltlXT17ZXhwb3J0czp7fSxpZDplLGxvYWRlZDohMX07cmV0dXJuIHRbZV0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sb2FkZWQ9ITAsby5leHBvcnRzfXZhciByPXt9O3JldHVybiBuLm09dCxuLmM9cixuLnA9XCJcIixuKDApfShbZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO24uX19lc01vZHVsZT0hMCxyKDgpLHIoOSksbltcImRlZmF1bHRcIl09ZnVuY3Rpb24odCxuKXtpZih0JiZuKXt2YXIgcj1mdW5jdGlvbigpe3ZhciByPUFycmF5LmlzQXJyYXkobik/bjpuLnNwbGl0KFwiLFwiKSxlPXQubmFtZXx8XCJcIixvPXQudHlwZXx8XCJcIixpPW8ucmVwbGFjZSgvXFwvLiokLyxcIlwiKTtyZXR1cm57djpyLnNvbWUoZnVuY3Rpb24odCl7dmFyIG49dC50cmltKCk7cmV0dXJuXCIuXCI9PT1uLmNoYXJBdCgwKT9lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgobi50b0xvd2VyQ2FzZSgpKTovXFwvXFwqJC8udGVzdChuKT9pPT09bi5yZXBsYWNlKC9cXC8uKiQvLFwiXCIpOm89PT1ufSl9fSgpO2lmKFwib2JqZWN0XCI9PXR5cGVvZiByKXJldHVybiByLnZ9cmV0dXJuITB9LHQuZXhwb3J0cz1uW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24odCxuKXt2YXIgcj10LmV4cG9ydHM9e3ZlcnNpb246XCIxLjIuMlwifTtcIm51bWJlclwiPT10eXBlb2YgX19lJiYoX19lPXIpfSxmdW5jdGlvbih0LG4pe3ZhciByPXQuZXhwb3J0cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcIm51bWJlclwiPT10eXBlb2YgX19nJiYoX19nPXIpfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyKSxvPXIoMSksaT1yKDQpLHU9cigxOSksYz1cInByb3RvdHlwZVwiLGY9ZnVuY3Rpb24odCxuKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdC5hcHBseShuLGFyZ3VtZW50cyl9fSxzPWZ1bmN0aW9uKHQsbixyKXt2YXIgYSxwLGwseSxkPXQmcy5HLGg9dCZzLlAsdj1kP2U6dCZzLlM/ZVtuXXx8KGVbbl09e30pOihlW25dfHx7fSlbY10seD1kP286b1tuXXx8KG9bbl09e30pO2QmJihyPW4pO2ZvcihhIGluIHIpcD0hKHQmcy5GKSYmdiYmYSBpbiB2LGw9KHA/djpyKVthXSx5PXQmcy5CJiZwP2YobCxlKTpoJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2YoRnVuY3Rpb24uY2FsbCxsKTpsLHYmJiFwJiZ1KHYsYSxsKSx4W2FdIT1sJiZpKHgsYSx5KSxoJiYoKHhbY118fCh4W2NdPXt9KSlbYV09bCl9O2UuY29yZT1vLHMuRj0xLHMuRz0yLHMuUz00LHMuUD04LHMuQj0xNixzLlc9MzIsdC5leHBvcnRzPXN9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDUpLG89cigxOCk7dC5leHBvcnRzPXIoMjIpP2Z1bmN0aW9uKHQsbixyKXtyZXR1cm4gZS5zZXREZXNjKHQsbixvKDEscikpfTpmdW5jdGlvbih0LG4scil7cmV0dXJuIHRbbl09cix0fX0sZnVuY3Rpb24odCxuKXt2YXIgcj1PYmplY3Q7dC5leHBvcnRzPXtjcmVhdGU6ci5jcmVhdGUsZ2V0UHJvdG86ci5nZXRQcm90b3R5cGVPZixpc0VudW06e30ucHJvcGVydHlJc0VudW1lcmFibGUsZ2V0RGVzYzpyLmdldE93blByb3BlcnR5RGVzY3JpcHRvcixzZXREZXNjOnIuZGVmaW5lUHJvcGVydHksc2V0RGVzY3M6ci5kZWZpbmVQcm9wZXJ0aWVzLGdldEtleXM6ci5rZXlzLGdldE5hbWVzOnIuZ2V0T3duUHJvcGVydHlOYW1lcyxnZXRTeW1ib2xzOnIuZ2V0T3duUHJvcGVydHlTeW1ib2xzLGVhY2g6W10uZm9yRWFjaH19LGZ1bmN0aW9uKHQsbil7dmFyIHI9MCxlPU1hdGgucmFuZG9tKCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwiU3ltYm9sKFwiLmNvbmNhdCh2b2lkIDA9PT10P1wiXCI6dCxcIilfXCIsKCsrcitlKS50b1N0cmluZygzNikpfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMjApKFwid2tzXCIpLG89cigyKS5TeW1ib2w7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfHwoZVt0XT1vJiZvW3RdfHwob3x8cig2KSkoXCJTeW1ib2wuXCIrdCkpfX0sZnVuY3Rpb24odCxuLHIpe3IoMjYpLHQuZXhwb3J0cz1yKDEpLkFycmF5LnNvbWV9LGZ1bmN0aW9uKHQsbixyKXtyKDI1KSx0LmV4cG9ydHM9cigxKS5TdHJpbmcuZW5kc1dpdGh9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuKXt2YXIgcj17fS50b1N0cmluZzt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHIuY2FsbCh0KS5zbGljZSg4LC0xKX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDEwKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLHIpe2lmKGUodCksdm9pZCAwPT09bilyZXR1cm4gdDtzd2l0Y2gocil7Y2FzZSAxOnJldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gdC5jYWxsKG4scil9O2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24ocixlKXtyZXR1cm4gdC5jYWxsKG4scixlKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihyLGUsbyl7cmV0dXJuIHQuY2FsbChuLHIsZSxvKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkobixhcmd1bWVudHMpfX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09dCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIrdCk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4scil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBuPS8uLzt0cnl7XCIvLi9cIlt0XShuKX1jYXRjaChlKXt0cnl7cmV0dXJuIG5bcig3KShcIm1hdGNoXCIpXT0hMSwhXCIvLi9cIlt0XShuKX1jYXRjaChvKXt9fXJldHVybiEwfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiEhdCgpfWNhdGNoKG4pe3JldHVybiEwfX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigxNiksbz1yKDExKSxpPXIoNykoXCJtYXRjaFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG47cmV0dXJuIGUodCkmJih2b2lkIDAhPT0obj10W2ldKT8hIW46XCJSZWdFeHBcIj09byh0KSl9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybntlbnVtZXJhYmxlOiEoMSZ0KSxjb25maWd1cmFibGU6ISgyJnQpLHdyaXRhYmxlOiEoNCZ0KSx2YWx1ZTpufX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIpLG89cig0KSxpPXIoNikoXCJzcmNcIiksdT1cInRvU3RyaW5nXCIsYz1GdW5jdGlvblt1XSxmPShcIlwiK2MpLnNwbGl0KHUpO3IoMSkuaW5zcGVjdFNvdXJjZT1mdW5jdGlvbih0KXtyZXR1cm4gYy5jYWxsKHQpfSwodC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyLHUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJihvKHIsaSx0W25dP1wiXCIrdFtuXTpmLmpvaW4oU3RyaW5nKG4pKSksXCJuYW1lXCJpbiByfHwoci5uYW1lPW4pKSx0PT09ZT90W25dPXI6KHV8fGRlbGV0ZSB0W25dLG8odCxuLHIpKX0pKEZ1bmN0aW9uLnByb3RvdHlwZSx1LGZ1bmN0aW9uKCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcyYmdGhpc1tpXXx8Yy5jYWxsKHRoaXMpfSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIpLG89XCJfX2NvcmUtanNfc2hhcmVkX19cIixpPWVbb118fChlW29dPXt9KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGlbdF18fChpW3RdPXt9KX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDE3KSxvPXIoMTMpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4scil7aWYoZShuKSl0aHJvdyBUeXBlRXJyb3IoXCJTdHJpbmcjXCIrcitcIiBkb2Vzbid0IGFjY2VwdCByZWdleCFcIik7cmV0dXJuIFN0cmluZyhvKHQpKX19LGZ1bmN0aW9uKHQsbixyKXt0LmV4cG9ydHM9IXIoMTUpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LG4pe3ZhciByPU1hdGguY2VpbCxlPU1hdGguZmxvb3I7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBpc05hTih0PSt0KT8wOih0PjA/ZTpyKSh0KX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIzKSxvPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdD4wP28oZSh0KSw5MDA3MTk5MjU0NzQwOTkxKTowfX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMyksbz1yKDI0KSxpPXIoMjEpLHU9XCJlbmRzV2l0aFwiLGM9XCJcIlt1XTtlKGUuUCtlLkYqcigxNCkodSksXCJTdHJpbmdcIix7ZW5kc1dpdGg6ZnVuY3Rpb24odCl7dmFyIG49aSh0aGlzLHQsdSkscj1hcmd1bWVudHMsZT1yLmxlbmd0aD4xP3JbMV06dm9pZCAwLGY9byhuLmxlbmd0aCkscz12b2lkIDA9PT1lP2Y6TWF0aC5taW4obyhlKSxmKSxhPVN0cmluZyh0KTtyZXR1cm4gYz9jLmNhbGwobixhLHMpOm4uc2xpY2Uocy1hLmxlbmd0aCxzKT09PWF9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDUpLG89cigzKSxpPXIoMSkuQXJyYXl8fEFycmF5LHU9e30sYz1mdW5jdGlvbih0LG4pe2UuZWFjaC5jYWxsKHQuc3BsaXQoXCIsXCIpLGZ1bmN0aW9uKHQpe3ZvaWQgMD09biYmdCBpbiBpP3VbdF09aVt0XTp0IGluW10mJih1W3RdPXIoMTIpKEZ1bmN0aW9uLmNhbGwsW11bdF0sbikpfSl9O2MoXCJwb3AscmV2ZXJzZSxzaGlmdCxrZXlzLHZhbHVlcyxlbnRyaWVzXCIsMSksYyhcImluZGV4T2YsZXZlcnksc29tZSxmb3JFYWNoLG1hcCxmaWx0ZXIsZmluZCxmaW5kSW5kZXgsaW5jbHVkZXNcIiwzKSxjKFwiam9pbixzbGljZSxjb25jYXQscHVzaCxzcGxpY2UsdW5zaGlmdCxzb3J0LGxhc3RJbmRleE9mLHJlZHVjZSxyZWR1Y2VSaWdodCxjb3B5V2l0aGluLGZpbGxcIiksbyhvLlMsXCJBcnJheVwiLHUpfV0pO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSBnZXREYXRhVHJhbnNmZXJGaWxlcztcblx0ZnVuY3Rpb24gZ2V0RGF0YVRyYW5zZmVyRmlsZXMoZXZlbnQpIHtcblx0ICB2YXIgZGF0YVRyYW5zZmVySXRlbXNMaXN0ID0gW107XG5cdCAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuXHQgICAgdmFyIGR0ID0gZXZlbnQuZGF0YVRyYW5zZmVyO1xuXHQgICAgaWYgKGR0LmZpbGVzICYmIGR0LmZpbGVzLmxlbmd0aCkge1xuXHQgICAgICBkYXRhVHJhbnNmZXJJdGVtc0xpc3QgPSBkdC5maWxlcztcblx0ICAgIH0gZWxzZSBpZiAoZHQuaXRlbXMgJiYgZHQuaXRlbXMubGVuZ3RoKSB7XG5cdCAgICAgIC8vIER1cmluZyB0aGUgZHJhZyBldmVuIHRoZSBkYXRhVHJhbnNmZXIuZmlsZXMgaXMgbnVsbFxuXHQgICAgICAvLyBidXQgQ2hyb21lIGltcGxlbWVudHMgc29tZSBkcmFnIHN0b3JlLCB3aGljaCBpcyBhY2Nlc2libGUgdmlhIGRhdGFUcmFuc2Zlci5pdGVtc1xuXHQgICAgICBkYXRhVHJhbnNmZXJJdGVtc0xpc3QgPSBkdC5pdGVtcztcblx0ICAgIH1cblx0ICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuZmlsZXMpIHtcblx0ICAgIGRhdGFUcmFuc2Zlckl0ZW1zTGlzdCA9IGV2ZW50LnRhcmdldC5maWxlcztcblx0ICB9XG5cdCAgLy8gQ29udmVydCBmcm9tIERhdGFUcmFuc2Zlckl0ZW1zTGlzdCB0byB0aGUgbmF0aXZlIEFycmF5XG5cdCAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRhdGFUcmFuc2Zlckl0ZW1zTGlzdCk7XG5cdH1cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pXG59KTtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJ2V4ZW52Jyk7XG52YXIgTW9kYWxQb3J0YWwgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KHJlcXVpcmUoJy4vTW9kYWxQb3J0YWwnKSk7XG52YXIgYXJpYUFwcEhpZGVyID0gcmVxdWlyZSgnLi4vaGVscGVycy9hcmlhQXBwSGlkZXInKTtcbnZhciBlbGVtZW50Q2xhc3MgPSByZXF1aXJlKCdlbGVtZW50LWNsYXNzJyk7XG52YXIgcmVuZGVyU3VidHJlZUludG9Db250YWluZXIgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpLnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyO1xudmFyIEFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC5hc3NpZ24nKTtcblxudmFyIFNhZmVIVE1MRWxlbWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IHdpbmRvdy5IVE1MRWxlbWVudCA6IHt9O1xudmFyIEFwcEVsZW1lbnQgPSBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBkb2N1bWVudC5ib2R5IDoge2FwcGVuZENoaWxkOiBmdW5jdGlvbigpIHt9fTtcblxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChwYXJlbnRTZWxlY3Rvcikge1xuICByZXR1cm4gcGFyZW50U2VsZWN0b3IoKTtcbn1cblxudmFyIE1vZGFsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnTW9kYWwnLFxuICBzdGF0aWNzOiB7XG4gICAgc2V0QXBwRWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBBcHBFbGVtZW50ID0gYXJpYUFwcEhpZGVyLnNldEVsZW1lbnQoZWxlbWVudCk7XG4gICAgfSxcbiAgICBpbmplY3RDU1M6IGZ1bmN0aW9uKCkge1xuICAgICAgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WXG4gICAgICAgICYmIGNvbnNvbGUud2FybignUmVhY3QtTW9kYWw6IGluamVjdENTUyBoYXMgYmVlbiBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FuZCBubyBsb25nZXIgaGFzIGFueSBlZmZlY3QuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGxhdGVyIHZlcnNpb24nKTtcbiAgICB9XG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaXNPcGVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgY29udGVudDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIG92ZXJsYXk6IFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICB9KSxcbiAgICBwb3J0YWxDbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXBwRWxlbWVudDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoU2FmZUhUTUxFbGVtZW50KSxcbiAgICBvbkFmdGVyT3BlbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZXF1ZXN0Q2xvc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGNsb3NlVGltZW91dE1TOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGFyaWFIaWRlQXBwOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBwYXJlbnRTZWxlY3RvcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgcm9sZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb250ZW50TGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgcG9ydGFsQ2xhc3NOYW1lOiAnUmVhY3RNb2RhbFBvcnRhbCcsXG4gICAgICBhcmlhSGlkZUFwcDogdHJ1ZSxcbiAgICAgIGNsb3NlVGltZW91dE1TOiAwLFxuICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogdHJ1ZSxcbiAgICAgIHBhcmVudFNlbGVjdG9yOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5ib2R5OyB9XG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5ub2RlLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMucG9ydGFsQ2xhc3NOYW1lO1xuXG4gICAgdmFyIHBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQodGhpcy5wcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgdGhpcy5yZW5kZXJQb3J0YWwodGhpcy5wcm9wcyk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24obmV3UHJvcHMpIHtcbiAgICB2YXIgY3VycmVudFBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQodGhpcy5wcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgdmFyIG5ld1BhcmVudCA9IGdldFBhcmVudEVsZW1lbnQobmV3UHJvcHMucGFyZW50U2VsZWN0b3IpO1xuXG4gICAgaWYobmV3UGFyZW50ICE9PSBjdXJyZW50UGFyZW50KSB7XG4gICAgICBjdXJyZW50UGFyZW50LnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gICAgICBuZXdQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlclBvcnRhbChuZXdQcm9wcyk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmFyaWFIaWRlQXBwKSB7XG4gICAgICBhcmlhQXBwSGlkZXIuc2hvdyh0aGlzLnByb3BzLmFwcEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHRoaXMucG9ydGFsLnN0YXRlO1xuICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgIHZhciBjbG9zZXNBdCA9IHN0YXRlLmlzT3BlbiAmJiB0aGlzLnByb3BzLmNsb3NlVGltZW91dE1TXG4gICAgICAmJiAoc3RhdGUuY2xvc2VzQXRcbiAgICAgICAgfHwgbm93ICsgdGhpcy5wcm9wcy5jbG9zZVRpbWVvdXRNUyk7XG5cbiAgICBpZiAoY2xvc2VzQXQpIHtcbiAgICAgIGlmICghc3RhdGUuYmVmb3JlQ2xvc2UpIHtcbiAgICAgICAgdGhpcy5wb3J0YWwuY2xvc2VXaXRoVGltZW91dCgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aGF0LnJlbW92ZVBvcnRhbCgpOyB9LCBjbG9zZXNBdCAtIG5vdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlUG9ydGFsKCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZVBvcnRhbDogZnVuY3Rpb24oKSB7XG4gICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLm5vZGUpO1xuICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KHRoaXMucHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICAgIGVsZW1lbnRDbGFzcyhkb2N1bWVudC5ib2R5KS5yZW1vdmUoJ1JlYWN0TW9kYWxfX0JvZHktLW9wZW4nKTtcbiAgfSxcblxuICByZW5kZXJQb3J0YWw6IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmlzT3Blbikge1xuICAgICAgZWxlbWVudENsYXNzKGRvY3VtZW50LmJvZHkpLmFkZCgnUmVhY3RNb2RhbF9fQm9keS0tb3BlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50Q2xhc3MoZG9jdW1lbnQuYm9keSkucmVtb3ZlKCdSZWFjdE1vZGFsX19Cb2R5LS1vcGVuJyk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmFyaWFIaWRlQXBwKSB7XG4gICAgICBhcmlhQXBwSGlkZXIudG9nZ2xlKHByb3BzLmlzT3BlbiwgcHJvcHMuYXBwRWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5wb3J0YWwgPSByZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcih0aGlzLCBNb2RhbFBvcnRhbChBc3NpZ24oe30sIHByb3BzLCB7ZGVmYXVsdFN0eWxlczogTW9kYWwuZGVmYXVsdFN0eWxlc30pKSwgdGhpcy5ub2RlKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUmVhY3QuRE9NLm5vc2NyaXB0KCk7XG4gIH1cbn0pO1xuXG5Nb2RhbC5kZWZhdWx0U3R5bGVzID0ge1xuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb24gICAgICAgIDogJ2ZpeGVkJyxcbiAgICB0b3AgICAgICAgICAgICAgOiAwLFxuICAgIGxlZnQgICAgICAgICAgICA6IDAsXG4gICAgcmlnaHQgICAgICAgICAgIDogMCxcbiAgICBib3R0b20gICAgICAgICAgOiAwLFxuICAgIGJhY2tncm91bmRDb2xvciA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpJ1xuICB9LFxuICBjb250ZW50OiB7XG4gICAgcG9zaXRpb24gICAgICAgICAgICAgICAgOiAnYWJzb2x1dGUnLFxuICAgIHRvcCAgICAgICAgICAgICAgICAgICAgIDogJzQwcHgnLFxuICAgIGxlZnQgICAgICAgICAgICAgICAgICAgIDogJzQwcHgnLFxuICAgIHJpZ2h0ICAgICAgICAgICAgICAgICAgIDogJzQwcHgnLFxuICAgIGJvdHRvbSAgICAgICAgICAgICAgICAgIDogJzQwcHgnLFxuICAgIGJvcmRlciAgICAgICAgICAgICAgICAgIDogJzFweCBzb2xpZCAjY2NjJyxcbiAgICBiYWNrZ3JvdW5kICAgICAgICAgICAgICA6ICcjZmZmJyxcbiAgICBvdmVyZmxvdyAgICAgICAgICAgICAgICA6ICdhdXRvJyxcbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZyA6ICd0b3VjaCcsXG4gICAgYm9yZGVyUmFkaXVzICAgICAgICAgICAgOiAnNHB4JyxcbiAgICBvdXRsaW5lICAgICAgICAgICAgICAgICA6ICdub25lJyxcbiAgICBwYWRkaW5nICAgICAgICAgICAgICAgICA6ICcyMHB4J1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kYWxcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgZGl2ID0gUmVhY3QuRE9NLmRpdjtcbnZhciBmb2N1c01hbmFnZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2ZvY3VzTWFuYWdlcicpO1xudmFyIHNjb3BlVGFiID0gcmVxdWlyZSgnLi4vaGVscGVycy9zY29wZVRhYicpO1xudmFyIEFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC5hc3NpZ24nKTtcblxuLy8gc28gdGhhdCBvdXIgQ1NTIGlzIHN0YXRpY2FsbHkgYW5hbHl6YWJsZVxudmFyIENMQVNTX05BTUVTID0ge1xuICBvdmVybGF5OiB7XG4gICAgYmFzZTogJ1JlYWN0TW9kYWxfX092ZXJsYXknLFxuICAgIGFmdGVyT3BlbjogJ1JlYWN0TW9kYWxfX092ZXJsYXktLWFmdGVyLW9wZW4nLFxuICAgIGJlZm9yZUNsb3NlOiAnUmVhY3RNb2RhbF9fT3ZlcmxheS0tYmVmb3JlLWNsb3NlJ1xuICB9LFxuICBjb250ZW50OiB7XG4gICAgYmFzZTogJ1JlYWN0TW9kYWxfX0NvbnRlbnQnLFxuICAgIGFmdGVyT3BlbjogJ1JlYWN0TW9kYWxfX0NvbnRlbnQtLWFmdGVyLW9wZW4nLFxuICAgIGJlZm9yZUNsb3NlOiAnUmVhY3RNb2RhbF9fQ29udGVudC0tYmVmb3JlLWNsb3NlJ1xuICB9XG59O1xuXG52YXIgTW9kYWxQb3J0YWwgPSBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ01vZGFsUG9ydGFsJyxcbiAgc2hvdWxkQ2xvc2U6IG51bGwsXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3ZlcmxheToge30sXG4gICAgICAgIGNvbnRlbnQ6IHt9XG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZnRlck9wZW46IGZhbHNlLFxuICAgICAgYmVmb3JlQ2xvc2U6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgLy8gRm9jdXMgbmVlZHMgdG8gYmUgc2V0IHdoZW4gbW91bnRpbmcgYW5kIGFscmVhZHkgb3BlblxuICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRGb2N1c0FmdGVyUmVuZGVyKHRydWUpO1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZVRpbWVyKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbihuZXdQcm9wcykge1xuICAgIC8vIEZvY3VzIG9ubHkgbmVlZHMgdG8gYmUgc2V0IG9uY2Ugd2hlbiB0aGUgbW9kYWwgaXMgYmVpbmcgb3BlbmVkXG4gICAgaWYgKCF0aGlzLnByb3BzLmlzT3BlbiAmJiBuZXdQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0Rm9jdXNBZnRlclJlbmRlcih0cnVlKTtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgIW5ld1Byb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5mb2N1c0FmdGVyUmVuZGVyKSB7XG4gICAgICB0aGlzLmZvY3VzQ29udGVudCgpO1xuICAgICAgdGhpcy5zZXRGb2N1c0FmdGVyUmVuZGVyKGZhbHNlKTtcbiAgICB9XG4gIH0sXG5cbiAgc2V0Rm9jdXNBZnRlclJlbmRlcjogZnVuY3Rpb24gKGZvY3VzKSB7XG4gICAgdGhpcy5mb2N1c0FmdGVyUmVuZGVyID0gZm9jdXM7XG4gIH0sXG5cbiAgYWZ0ZXJDbG9zZTogZnVuY3Rpb24gKCkge1xuICAgIGZvY3VzTWFuYWdlci5yZXR1cm5Gb2N1cygpO1xuICAgIGZvY3VzTWFuYWdlci50ZWFyZG93blNjb3BlZEZvY3VzKCk7XG4gIH0sXG5cbiAgb3BlbjogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmFmdGVyT3BlbiAmJiB0aGlzLnN0YXRlLmJlZm9yZUNsb3NlKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZVRpbWVyKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiZWZvcmVDbG9zZTogZmFsc2UgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvY3VzTWFuYWdlci5zZXR1cFNjb3BlZEZvY3VzKHRoaXMubm9kZSk7XG4gICAgICBmb2N1c01hbmFnZXIubWFya0ZvckZvY3VzTGF0ZXIoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzT3BlbjogdHJ1ZX0sIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthZnRlck9wZW46IHRydWV9KTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgdGhpcy5wcm9wcy5vbkFmdGVyT3Blbikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25BZnRlck9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH0sXG5cbiAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlVGltZW91dE1TID4gMClcbiAgICAgIHRoaXMuY2xvc2VXaXRoVGltZW91dCgpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuY2xvc2VXaXRob3V0VGltZW91dCgpO1xuICB9LFxuXG4gIGZvY3VzQ29udGVudDogZnVuY3Rpb24oKSB7XG4gICAgLy8gRG9uJ3Qgc3RlYWwgZm9jdXMgZnJvbSBpbm5lciBlbGVtZW50c1xuICAgIGlmICghdGhpcy5jb250ZW50SGFzRm9jdXMoKSkge1xuICAgICAgdGhpcy5yZWZzLmNvbnRlbnQuZm9jdXMoKTtcbiAgICB9XG4gIH0sXG5cbiAgY2xvc2VXaXRoVGltZW91dDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNsb3Nlc0F0ID0gRGF0ZS5ub3coKSArIHRoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YmVmb3JlQ2xvc2U6IHRydWUsIGNsb3Nlc0F0OiBjbG9zZXNBdH0sIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5jbG9zZVRpbWVyID0gc2V0VGltZW91dCh0aGlzLmNsb3NlV2l0aG91dFRpbWVvdXQsIHRoaXMuc3RhdGUuY2xvc2VzQXQgLSBEYXRlLm5vdygpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIGNsb3NlV2l0aG91dFRpbWVvdXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYmVmb3JlQ2xvc2U6IGZhbHNlLFxuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIGFmdGVyT3BlbjogZmFsc2UsXG4gICAgICBjbG9zZXNBdDogbnVsbFxuICAgIH0sIHRoaXMuYWZ0ZXJDbG9zZSk7XG4gIH0sXG5cbiAgaGFuZGxlS2V5RG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA5IC8qdGFiKi8pIHNjb3BlVGFiKHRoaXMucmVmcy5jb250ZW50LCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMjcgLyplc2MqLykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucmVxdWVzdENsb3NlKGV2ZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlT3ZlcmxheU9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICh0aGlzLnNob3VsZENsb3NlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNob3VsZENsb3NlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG91bGRDbG9zZSAmJiB0aGlzLnByb3BzLnNob3VsZENsb3NlT25PdmVybGF5Q2xpY2spIHtcbiAgICAgIGlmICh0aGlzLm93bmVySGFuZGxlc0Nsb3NlKCkpXG4gICAgICAgIHRoaXMucmVxdWVzdENsb3NlKGV2ZW50KTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5mb2N1c0NvbnRlbnQoKTtcbiAgICB9XG4gICAgdGhpcy5zaG91bGRDbG9zZSA9IG51bGw7XG4gIH0sXG5cbiAgaGFuZGxlQ29udGVudE9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3VsZENsb3NlID0gZmFsc2U7XG4gIH0sXG5cbiAgcmVxdWVzdENsb3NlOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLm93bmVySGFuZGxlc0Nsb3NlKCkpXG4gICAgICB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKGV2ZW50KTtcbiAgfSxcblxuICBvd25lckhhbmRsZXNDbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2U7XG4gIH0sXG5cbiAgc2hvdWxkQmVDbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhdGhpcy5zdGF0ZS5pc09wZW4gJiYgIXRoaXMuc3RhdGUuYmVmb3JlQ2xvc2U7XG4gIH0sXG5cbiAgY29udGVudEhhc0ZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5yZWZzLmNvbnRlbnQgfHwgdGhpcy5yZWZzLmNvbnRlbnQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gIH0sXG5cbiAgYnVpbGRDbGFzc05hbWU6IGZ1bmN0aW9uKHdoaWNoLCBhZGRpdGlvbmFsKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IENMQVNTX05BTUVTW3doaWNoXS5iYXNlO1xuICAgIGlmICh0aGlzLnN0YXRlLmFmdGVyT3BlbilcbiAgICAgIGNsYXNzTmFtZSArPSAnICcrQ0xBU1NfTkFNRVNbd2hpY2hdLmFmdGVyT3BlbjtcbiAgICBpZiAodGhpcy5zdGF0ZS5iZWZvcmVDbG9zZSlcbiAgICAgIGNsYXNzTmFtZSArPSAnICcrQ0xBU1NfTkFNRVNbd2hpY2hdLmJlZm9yZUNsb3NlO1xuICAgIHJldHVybiBhZGRpdGlvbmFsID8gY2xhc3NOYW1lICsgJyAnICsgYWRkaXRpb25hbCA6IGNsYXNzTmFtZTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250ZW50U3R5bGVzID0gKHRoaXMucHJvcHMuY2xhc3NOYW1lKSA/IHt9IDogdGhpcy5wcm9wcy5kZWZhdWx0U3R5bGVzLmNvbnRlbnQ7XG4gICAgdmFyIG92ZXJsYXlTdHlsZXMgPSAodGhpcy5wcm9wcy5vdmVybGF5Q2xhc3NOYW1lKSA/IHt9IDogdGhpcy5wcm9wcy5kZWZhdWx0U3R5bGVzLm92ZXJsYXk7XG5cbiAgICByZXR1cm4gdGhpcy5zaG91bGRCZUNsb3NlZCgpID8gZGl2KCkgOiAoXG4gICAgICBkaXYoe1xuICAgICAgICByZWY6IFwib3ZlcmxheVwiLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuYnVpbGRDbGFzc05hbWUoJ292ZXJsYXknLCB0aGlzLnByb3BzLm92ZXJsYXlDbGFzc05hbWUpLFxuICAgICAgICBzdHlsZTogQXNzaWduKHt9LCBvdmVybGF5U3R5bGVzLCB0aGlzLnByb3BzLnN0eWxlLm92ZXJsYXkgfHwge30pLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZU92ZXJsYXlPbkNsaWNrXG4gICAgICB9LFxuICAgICAgICBkaXYoe1xuICAgICAgICAgIHJlZjogXCJjb250ZW50XCIsXG4gICAgICAgICAgc3R5bGU6IEFzc2lnbih7fSwgY29udGVudFN0eWxlcywgdGhpcy5wcm9wcy5zdHlsZS5jb250ZW50IHx8IHt9KSxcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuYnVpbGRDbGFzc05hbWUoJ2NvbnRlbnQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICAgICAgdGFiSW5kZXg6IFwiLTFcIixcbiAgICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNvbnRlbnRPbkNsaWNrLFxuICAgICAgICAgIHJvbGU6IHRoaXMucHJvcHMucm9sZSxcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogdGhpcy5wcm9wcy5jb250ZW50TGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcbiIsInZhciBfZWxlbWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudC5ib2R5IDogbnVsbDtcblxuZnVuY3Rpb24gc2V0RWxlbWVudChlbGVtZW50KSB7XG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQgPSAnbGVuZ3RoJyBpbiBlbCA/IGVsWzBdIDogZWw7XG4gIH1cbiAgX2VsZW1lbnQgPSBlbGVtZW50IHx8IF9lbGVtZW50O1xuICByZXR1cm4gX2VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGhpZGUoYXBwRWxlbWVudCkge1xuICB2YWxpZGF0ZUVsZW1lbnQoYXBwRWxlbWVudCk7XG4gIChhcHBFbGVtZW50IHx8IF9lbGVtZW50KS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbn1cblxuZnVuY3Rpb24gc2hvdyhhcHBFbGVtZW50KSB7XG4gIHZhbGlkYXRlRWxlbWVudChhcHBFbGVtZW50KTtcbiAgKGFwcEVsZW1lbnQgfHwgX2VsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlKHNob3VsZEhpZGUsIGFwcEVsZW1lbnQpIHtcbiAgaWYgKHNob3VsZEhpZGUpXG4gICAgaGlkZShhcHBFbGVtZW50KTtcbiAgZWxzZVxuICAgIHNob3coYXBwRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRWxlbWVudChhcHBFbGVtZW50KSB7XG4gIGlmICghYXBwRWxlbWVudCAmJiAhX2VsZW1lbnQpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdyZWFjdC1tb2RhbDogWW91IG11c3Qgc2V0IGFuIGVsZW1lbnQgd2l0aCBgTW9kYWwuc2V0QXBwRWxlbWVudChlbClgIHRvIG1ha2UgdGhpcyBhY2Nlc3NpYmxlJyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9yVGVzdGluZygpIHtcbiAgX2VsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xufVxuXG5leHBvcnRzLnRvZ2dsZSA9IHRvZ2dsZTtcbmV4cG9ydHMuc2V0RWxlbWVudCA9IHNldEVsZW1lbnQ7XG5leHBvcnRzLnNob3cgPSBzaG93O1xuZXhwb3J0cy5oaWRlID0gaGlkZTtcbmV4cG9ydHMucmVzZXRGb3JUZXN0aW5nID0gcmVzZXRGb3JUZXN0aW5nO1xuIiwidmFyIGZpbmRUYWJiYWJsZSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvdGFiYmFibGUnKTtcbnZhciBmb2N1c0xhdGVyRWxlbWVudHMgPSBbXTtcbnZhciBtb2RhbEVsZW1lbnQgPSBudWxsO1xudmFyIG5lZWRUb0ZvY3VzID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGhhbmRsZUJsdXIoZXZlbnQpIHtcbiAgbmVlZFRvRm9jdXMgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGb2N1cyhldmVudCkge1xuICBpZiAobmVlZFRvRm9jdXMpIHtcbiAgICBuZWVkVG9Gb2N1cyA9IGZhbHNlO1xuICAgIGlmICghbW9kYWxFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIG5lZWQgdG8gc2VlIGhvdyBqUXVlcnkgc2hpbXMgZG9jdW1lbnQub24oJ2ZvY3VzaW4nKSBzbyB3ZSBkb24ndCBuZWVkIHRoZVxuICAgIC8vIHNldFRpbWVvdXQsIGZpcmVmb3ggZG9lc24ndCBzdXBwb3J0IGZvY3VzaW4sIGlmIGl0IGRpZCwgd2UgY291bGQgZm9jdXNcbiAgICAvLyB0aGUgZWxlbWVudCBvdXRzaWRlIG9mIGEgc2V0VGltZW91dC4gU2lkZS1lZmZlY3Qgb2YgdGhpcyBpbXBsZW1lbnRhdGlvblxuICAgIC8vIGlzIHRoYXQgdGhlIGRvY3VtZW50LmJvZHkgZ2V0cyBmb2N1cywgYW5kIHRoZW4gd2UgZm9jdXMgb3VyIGVsZW1lbnQgcmlnaHRcbiAgICAvLyBhZnRlciwgc2VlbXMgZmluZS5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKG1vZGFsRWxlbWVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgdmFyIGVsID0gKGZpbmRUYWJiYWJsZShtb2RhbEVsZW1lbnQpWzBdIHx8IG1vZGFsRWxlbWVudCk7XG4gICAgICBlbC5mb2N1cygpO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmV4cG9ydHMubWFya0ZvckZvY3VzTGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgZm9jdXNMYXRlckVsZW1lbnRzLnB1c2goZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG59O1xuXG5leHBvcnRzLnJldHVybkZvY3VzID0gZnVuY3Rpb24oKSB7XG4gIHZhciB0b0ZvY3VzID0gbnVsbDtcbiAgdHJ5IHtcbiAgICB0b0ZvY3VzID0gZm9jdXNMYXRlckVsZW1lbnRzLnBvcCgpO1xuICAgIHRvRm9jdXMuZm9jdXMoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ1lvdSB0cmllZCB0byByZXR1cm4gZm9jdXMgdG8gJyt0b0ZvY3VzKycgYnV0IGl0IGlzIG5vdCBpbiB0aGUgRE9NIGFueW1vcmUnKTtcbiAgfVxufTtcblxuZXhwb3J0cy5zZXR1cFNjb3BlZEZvY3VzID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICBtb2RhbEVsZW1lbnQgPSBlbGVtZW50O1xuXG4gIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1ciwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25CbHVyJywgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQuYXR0YWNoRXZlbnQoJ29uRm9jdXMnLCBoYW5kbGVGb2N1cyk7XG4gIH1cbn07XG5cbmV4cG9ydHMudGVhcmRvd25TY29wZWRGb2N1cyA9IGZ1bmN0aW9uKCkge1xuICBtb2RhbEVsZW1lbnQgPSBudWxsO1xuXG4gIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cyk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmRldGFjaEV2ZW50KCdvbkJsdXInLCBoYW5kbGVCbHVyKTtcbiAgICBkb2N1bWVudC5kZXRhY2hFdmVudCgnb25Gb2N1cycsIGhhbmRsZUZvY3VzKTtcbiAgfVxufTtcbiIsInZhciBmaW5kVGFiYmFibGUgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3RhYmJhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obm9kZSwgZXZlbnQpIHtcbiAgdmFyIHRhYmJhYmxlID0gZmluZFRhYmJhYmxlKG5vZGUpO1xuICBpZiAoIXRhYmJhYmxlLmxlbmd0aCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgfVxuICB2YXIgZmluYWxUYWJiYWJsZSA9IHRhYmJhYmxlW2V2ZW50LnNoaWZ0S2V5ID8gMCA6IHRhYmJhYmxlLmxlbmd0aCAtIDFdO1xuICB2YXIgbGVhdmluZ0ZpbmFsVGFiYmFibGUgPSAoXG4gICAgZmluYWxUYWJiYWJsZSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB8fFxuICAgIC8vIGhhbmRsZSBpbW1lZGlhdGUgc2hpZnQrdGFiIGFmdGVyIG9wZW5pbmcgd2l0aCBtb3VzZVxuICAgIG5vZGUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgKTtcbiAgaWYgKCFsZWF2aW5nRmluYWxUYWJiYWJsZSkgcmV0dXJuO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB2YXIgdGFyZ2V0ID0gdGFiYmFibGVbZXZlbnQuc2hpZnRLZXkgPyB0YWJiYWJsZS5sZW5ndGggLSAxIDogMF07XG4gIHRhcmdldC5mb2N1cygpO1xufTtcbiIsIi8qIVxuICogQWRhcHRlZCBmcm9tIGpRdWVyeSBVSSBjb3JlXG4gKlxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9jYXRlZ29yeS91aS1jb3JlL1xuICovXG5cbmZ1bmN0aW9uIGZvY3VzYWJsZShlbGVtZW50LCBpc1RhYkluZGV4Tm90TmFOKSB7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuICgvaW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QvLnRlc3Qobm9kZU5hbWUpID9cbiAgICAhZWxlbWVudC5kaXNhYmxlZCA6XG4gICAgXCJhXCIgPT09IG5vZGVOYW1lID9cbiAgICAgIGVsZW1lbnQuaHJlZiB8fCBpc1RhYkluZGV4Tm90TmFOIDpcbiAgICAgIGlzVGFiSW5kZXhOb3ROYU4pICYmIHZpc2libGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGhpZGRlbihlbCkge1xuICByZXR1cm4gKGVsLm9mZnNldFdpZHRoIDw9IDAgJiYgZWwub2Zmc2V0SGVpZ2h0IDw9IDApIHx8XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiB2aXNpYmxlKGVsZW1lbnQpIHtcbiAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSkgYnJlYWs7XG4gICAgaWYgKGhpZGRlbihlbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHRhYmJhYmxlKGVsZW1lbnQpIHtcbiAgdmFyIHRhYkluZGV4ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gIGlmICh0YWJJbmRleCA9PT0gbnVsbCkgdGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gIHZhciBpc1RhYkluZGV4TmFOID0gaXNOYU4odGFiSW5kZXgpO1xuICByZXR1cm4gKGlzVGFiSW5kZXhOYU4gfHwgdGFiSW5kZXggPj0gMCkgJiYgZm9jdXNhYmxlKGVsZW1lbnQsICFpc1RhYkluZGV4TmFOKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhYmJhYmxlRGVzY2VuZGFudHMoZWxlbWVudCkge1xuICByZXR1cm4gW10uc2xpY2UuY2FsbChlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSwgMCkuZmlsdGVyKGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuIHRhYmJhYmxlKGVsKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmluZFRhYmJhYmxlRGVzY2VuZGFudHM7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL01vZGFsJyk7XG5cbiIsIi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9XG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpcztcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gQW1vbmcgdGhlIHZhcmlvdXMgdHJpY2tzIGZvciBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbFxuICAvLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3RcbiAgLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVzcG9uc2UgPSByZXF1aXJlKCdodHRwLXJlc3BvbnNlLW9iamVjdCcpO1xudmFyIGhhbmRsZVFzID0gcmVxdWlyZSgndGhlbi1yZXF1ZXN0L2xpYi9oYW5kbGUtcXMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkb1JlcXVlc3Q7XG5mdW5jdGlvbiBkb1JlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIC8vIGNoZWNrIHR5cGVzIG9mIGFyZ3VtZW50c1xuXG4gIGlmICh0eXBlb2YgbWV0aG9kICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBtZXRob2QgbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgfVxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgVVJML3BhdGggbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgfVxuICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QgKG9yIG51bGwpLicpO1xuICB9XG5cbiAgbWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcblxuICAvLyBoYW5kbGUgY3Jvc3MgZG9tYWluXG5cbiAgdmFyIG1hdGNoO1xuICB2YXIgY3Jvc3NEb21haW4gPSAhISgobWF0Y2ggPSAvXihbXFx3LV0rOik/XFwvXFwvKFteXFwvXSspLy5leGVjKHVybCkpICYmIChtYXRjaFsyXSAhPSBsb2NhdGlvbi5ob3N0KSk7XG4gIGlmICghY3Jvc3NEb21haW4pIG9wdGlvbnMuaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuICAvLyBoYW5kbGUgcXVlcnkgc3RyaW5nXG4gIGlmIChvcHRpb25zLnFzKSB7XG4gICAgdXJsID0gaGFuZGxlUXModXJsLCBvcHRpb25zLnFzKTtcbiAgfVxuXG4gIC8vIGhhbmRsZSBqc29uIGJvZHlcbiAgaWYgKG9wdGlvbnMuanNvbikge1xuICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbik7XG4gICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgfVxuXG4gIC8vIG1ldGhvZCwgdXJsLCBhc3luY1xuICB4aHIub3BlbihtZXRob2QsIHVybCwgZmFsc2UpO1xuXG4gIGZvciAodmFyIG5hbWUgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZS50b0xvd2VyQ2FzZSgpLCBvcHRpb25zLmhlYWRlcnNbbmFtZV0pO1xuICB9XG5cbiAgLy8gYXZvaWQgc2VuZGluZyBlbXB0eSBzdHJpbmcgKCMzMTkpXG4gIHhoci5zZW5kKG9wdGlvbnMuYm9keSA/IG9wdGlvbnMuYm9keSA6IG51bGwpO1xuXG5cbiAgdmFyIGhlYWRlcnMgPSB7fTtcbiAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnNwbGl0KCdcXHJcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICB2YXIgaCA9IGhlYWRlci5zcGxpdCgnOicpO1xuICAgIGlmIChoLmxlbmd0aCA+IDEpIHtcbiAgICAgIGhlYWRlcnNbaFswXS50b0xvd2VyQ2FzZSgpXSA9IGguc2xpY2UoMSkuam9pbignOicpLnRyaW0oKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKHhoci5zdGF0dXMsIGhlYWRlcnMsIHhoci5yZXNwb25zZVRleHQpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGFyc2UgPSByZXF1aXJlKCdxcycpLnBhcnNlO1xudmFyIHN0cmluZ2lmeSA9IHJlcXVpcmUoJ3FzJykuc3RyaW5naWZ5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhbmRsZVFzO1xuZnVuY3Rpb24gaGFuZGxlUXModXJsLCBxdWVyeSkge1xuICB1cmwgPSB1cmwuc3BsaXQoJz8nKTtcbiAgdmFyIHN0YXJ0ID0gdXJsWzBdO1xuICB2YXIgcXMgPSAodXJsWzFdIHx8ICcnKS5zcGxpdCgnIycpWzBdO1xuICB2YXIgZW5kID0gdXJsWzFdICYmIHVybFsxXS5zcGxpdCgnIycpLmxlbmd0aCA+IDEgPyAnIycgKyB1cmxbMV0uc3BsaXQoJyMnKVsxXSA6ICcnO1xuXG4gIHZhciBiYXNlUXMgPSBwYXJzZShxcyk7XG4gIGZvciAodmFyIGkgaW4gcXVlcnkpIHtcbiAgICBiYXNlUXNbaV0gPSBxdWVyeVtpXTtcbiAgfVxuICBxcyA9IHN0cmluZ2lmeShiYXNlUXMpO1xuICBpZiAocXMgIT09ICcnKSB7XG4gICAgcXMgPSAnPycgKyBxcztcbiAgfVxuICByZXR1cm4gc3RhcnQgKyBxcyArIGVuZDtcbn1cbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIHJldHVybiAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cbnZhciBybmc7XG5cbnZhciBjcnlwdG8gPSBnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0bzsgLy8gZm9yIElFIDExXG5pZiAoY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn1cblxuaWYgKCFybmcpIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuICBybmcgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBybmc7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgV2UgZmVhdHVyZVxuLy8gZGV0ZWN0IHRvIGRldGVybWluZSB0aGUgYmVzdCBSTkcgc291cmNlLCBub3JtYWxpemluZyB0byBhIGZ1bmN0aW9uIHRoYXRcbi8vIHJldHVybnMgMTI4LWJpdHMgb2YgcmFuZG9tbmVzcywgc2luY2UgdGhhdCdzIHdoYXQncyB1c3VhbGx5IHJlcXVpcmVkXG52YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbi8vIHJhbmRvbSAjJ3Mgd2UgbmVlZCB0byBpbml0IG5vZGUgYW5kIGNsb2Nrc2VxXG52YXIgX3NlZWRCeXRlcyA9IHJuZygpO1xuXG4vLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbnZhciBfbm9kZUlkID0gW1xuICBfc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgX3NlZWRCeXRlc1sxXSwgX3NlZWRCeXRlc1syXSwgX3NlZWRCeXRlc1szXSwgX3NlZWRCeXRlc1s0XSwgX3NlZWRCeXRlc1s1XVxuXTtcblxuLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbnZhciBfY2xvY2tzZXEgPSAoX3NlZWRCeXRlc1s2XSA8PCA4IHwgX3NlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwLCBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVzQXBwbGljYXRpb24gZnJvbSAnLi4vLi4vY29tbW9uL2FwcGxpY2F0aW9ucy9Sb3V0ZXNBcHBsaWNhdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBSb3V0ZXNBcHBsaWNhdGlvbiB7XG4gICAgZ2V0IGNvbnRhaW5lcigpIHtyZXR1cm4gJ2NvbnRhaW5lcid9XG59XG4iLCJpbXBvcnQge1ZpZXdwb3J0IGFzIENvbW1vblZpZXdwb3J0fSBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld3BvcnQgZXh0ZW5kcyBDb21tb25WaWV3cG9ydCB7fVxuIiwibW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge1xuICAgIFwiYXBwXCI6IFwiaXNob3BcIixcbiAgICBcImFwcG5hbWVcIjogXCJpU2hvcFwiLFxuICAgIFwiYXBwdGl0bGVcIjogXCJpU2hvcFwiLFxuICAgIFwiYXBwZGVzY3JpcHRpb25cIjogXCJpU2hvcCAtIHNob3Agb24gZ29cIixcbiAgICBcImFwcHBhdGhcIjogXCIvXCIsXG4gICAgXCJhcHBsb2dvXCI6IFwiL3N0YXRpYy9pc2hvcC9pbWFnZXMvbG9nby5qcGdcIixcbiAgICBcImFwcHZlcnNpb25cIjogXCIwLjAuMVwiLFxuICAgIFwicG9ydFwiOiAyMDAwLFxuICAgIFwibGl2ZXJlbG9hZHBvcnRcIjogMzU3Mjlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IHtcbiAgICBhcGk6IHtcbiAgICAgICAgdXJsczoge1xuICAgICAgICAgICAgcGFnZUluZm86ICcvc3RhdGljL2lzaG9wL2FwaS9wYWdlLmpzb24nLFxuICAgICAgICAgICAgcGFnZUluZm9Mb2dnZWQ6ICcvc3RhdGljL2lzaG9wL2FwaS9wYWdlLWxvZ2dlZC5qc29uJyxcbiAgICAgICAgICAgIGxvZ2luOiAnL3N0YXRpYy9pc2hvcC9hcGkvbG9naW4uanNvbicsXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge0NvbmZpZ30gZnJvbSAnLi4vLi4vLi4vY29yZS9Db25maWcnXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29uZmlnKFxuICAgIHtlbnY6ICdtb2NrJ30sXG4gICAgcmVxdWlyZSgnLi4vY29uZicpLFxuICAgIHJlcXVpcmUoJy4vdWknKSxcbiAgICByZXF1aXJlKCcuL2Jhc2UnKSxcbiAgICByZXF1aXJlKCcuL21vY2snKVxuKS5hbGwoKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge1xuICAgIHVpOiB7XG4gICAgICAgIGN1cnJlbnRQYWdlTm86IDEsXG4gICAgICAgIGN1cnJlbnRQYWdlU2l6ZTogMTAsXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICAgICdjb29raWVfZGVsZXRlZCcsXG4gICAgJ2Nvb2tpZV91cGRhdGVkJyxcbiAgICAncm91dGVfZW50ZXJlZCcsXG4gICAgJ3JvdXRlX2NoYW5nZWQnLFxuXVxuIiwiLy8gaW1wb3J0ICcuL3Nhc3Mvc3R5bGVzLnNjc3MnXG5yZXF1aXJlKCcuL2NvbmZpZycpXG5cbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcbmltcG9ydCB7Z2V0U3RvcmV9IGZyb20gJy4uLy4uL2NvcmUvcmVkdXgnXG5pbXBvcnQgKiBhcyBDb21tb25SZWR1Y2VycyBmcm9tICcuLi8uLi9jb21tb24vcmVkdXgvUmVkdWNlcidcbmltcG9ydCAqIGFzIFJlZHVjZXJzIGZyb20gJy4vcmVkdXgvUmVkdWNlcidcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMnXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xuaW1wb3J0IHtIZWFkZXJBcHBsaWNhdGlvbiwgRm9vdGVyQXBwbGljYXRpb259IGZyb20gJy4uLy4uL2NvbW1vbi9hcHBsaWNhdGlvbnMnXG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi9BcHBsaWNhdGlvbidcblxuSGVhZGVyQXBwbGljYXRpb24uYWRkRXZlbnRzKGV2ZW50cylcblxuY29uc3Qgc3RvcmUgPSBnZXRTdG9yZShhc3NpZ24oQ29tbW9uUmVkdWNlcnMsIFJlZHVjZXJzKSlcblxuY29uc3QgaGVhZGVyQXBwbGljYXRpb24gPSBuZXcgSGVhZGVyQXBwbGljYXRpb24oKVxuaGVhZGVyQXBwbGljYXRpb24ucmVuZGVyKHN0b3JlKVxuXG5jb25zdCBmb290ZXJBcHBsaWNhdGlvbiA9IG5ldyBGb290ZXJBcHBsaWNhdGlvbigpXG5mb290ZXJBcHBsaWNhdGlvbi5yZW5kZXIoc3RvcmUpXG5cbmNvbnN0IGFwcGxpY2F0aW9uID0gbmV3IEFwcGxpY2F0aW9uKClcbmFwcGxpY2F0aW9uLnJvdXRlcyA9IHJvdXRlc1xuYXBwbGljYXRpb24ucmVuZGVyKHN0b3JlKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb25uZWN0fSBmcm9tICcuLi9yZWR1eCdcbmltcG9ydCB7ZGVmYXVsdCBhcyBCYXNlUGFnZX0gZnJvbSAnLi9QYWdlJ1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuICAgIHBhZ2VDbGFzc05hbWUgPSAnaXNob3AtbGFuZGluZy1wYWdlJ1xuXG4gICAgcGFnZUxvYWRlZEFwaSA9IG51bGxcbiAgICBcbiAgICBjaGlsZHJlbiA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgICAgIDxkaXY+TGFuZGluZyBwYWdlIG9mIGlTaG9wPC9kaXY+XG4gICAgICAgIDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCAobmV3IENvbm5lY3QoUGFnZSkpLmtsYXNzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1BhZ2UgYXMgQ29tbW9uUGFnZX0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21tb25QYWdlIHt9XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0Nvbm5lY3R9IGZyb20gJy4uL3JlZHV4J1xuaW1wb3J0IHtkZWZhdWx0IGFzIEJhc2VQYWdlfSBmcm9tICcuL1BhZ2UnXG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG4gICAgcGFnZUNsYXNzTmFtZSA9ICdpc2hvcC1zdWItcGFnZSdcblxuICAgIHBhZ2VMb2FkZWRBcGkgPSBudWxsXG4gICAgXG4gICAgY2hpbGRyZW4gPSAoKSA9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgICAgICA8ZGl2PlN1YiBwYWdlIG9mIGlTaG9wPC9kaXY+XG4gICAgICAgIDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCAobmV3IENvbm5lY3QoUGFnZSkpLmtsYXNzXG4iLCJleHBvcnRzLkxhbmRpbmdQYWdlID0gcmVxdWlyZSgnLi9MYW5kaW5nUGFnZScpLmRlZmF1bHRcbmV4cG9ydHMuU3ViUGFnZSA9IHJlcXVpcmUoJy4vU3ViUGFnZScpLmRlZmF1bHRcbi8qKk5FV1BBR0UqKi9cbiIsImltcG9ydCB7QWN0aW9ufSBmcm9tICcuLi8uLi8uLi9jb3JlL3JlZHV4J1xuIiwiaW1wb3J0IHtDb25uZWN0IGFzIENvcmVDb25uZWN0fSBmcm9tICcuLi8uLi8uLi9jb21tb24vcmVkdXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vQWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0IGV4dGVuZHMgQ29yZUNvbm5lY3Qge1xuICAgIGdldEFjdGlvbnMoZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV0aWwuYXNzaWduKHt9LCBzdXBlci5nZXRBY3Rpb25zKGRpc3BhdGNoLCBvd25Qcm9wcywgLi4uYXJncyksIGFjdGlvbnMpXG4gICAgfVxufVxuIiwiaW1wb3J0IHtSZWR1Y2VyLCBDb25maWdSZWR1Y2VyLCBDb29raWVSZWR1Y2VyLCBGYWxzZVJlZHVjZXIsIFRydWVSZWR1Y2VyLCBOdWxsUmVkdWNlcn0gZnJvbSAnLi4vLi4vLi4vY29yZS9yZWR1eCdcbiIsImV4cG9ydHMuQ29ubmVjdCA9IHJlcXVpcmUoJy4vQ29ubmVjdCcpLmRlZmF1bHRcbiIsImltcG9ydCB7b25Sb3V0ZUVudGVyZWQsIG9uUm91dGVDaGFuZ2VkfSBmcm9tICcuLi8uLi9jb21tb24vcm91dGVzJ1xuaW1wb3J0ICogYXMgcGFnZXMgZnJvbSAnLi9wYWdlcydcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL1ZpZXdwb3J0J1xuaW1wb3J0IGNvbmYgZnJvbSAnLi9jb25mJ1xuXG5jb25zdCBzdWJSb3V0ZXMgPSBbXG57cGF0aDogY29uZi5hcHBwYXRoICsgJy9zdWInLCBjb21wb25lbnQ6IHBhZ2VzLlN1YlBhZ2UsIG9uQ2hhbmdlOiBvblJvdXRlQ2hhbmdlZH0sXG4vKipORVdQQUdFKiovXG5dXG5jb25zdCByb3V0ZXMgPSBbe1xuICAgIHBhdGg6IGNvbmYuYXBwcGF0aCxcbiAgICBjb21wb25lbnQ6IFZpZXdwb3J0LFxuICAgIGluZGV4Um91dGU6IHtcbiAgICAgICAgY29tcG9uZW50OiBwYWdlcy5MYW5kaW5nUGFnZVxuICAgIH0sXG4gICAgY2hpbGRSb3V0ZXM6IHN1YlJvdXRlcyxcbiAgICBvbkNoYW5nZTogb25Sb3V0ZUNoYW5nZWQsXG59XVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7dXRpbCwgY29uZmlndXJhdGlvbn0gZnJvbSAnLi4vLi4vY29yZSdcbmltcG9ydCB7QWN0aW9ufSBmcm9tICcuLi8uLi9jb3JlL3JlZHV4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBsaWNhdGlvbiB7XG4gICAgY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb25cbiAgICB1dGlsID0gdXRpbFxuICAgIGNoaWxkcmVuID0gKCkgPT4ge3Rocm93ICdObyBjaGlsZHJlbid9XG4gICAgYWZ0ZXJSZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIEFjdGlvbi5leGVjdXRlKCdMb2FkUGFnZUluZm9BY3Rpb24nKVxuICAgIH1cbiAgICByZW5kZXIgPSAoc3RvcmUpID0+IHtcbiAgICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlXG4gICAgICAgIGNvbnN0IF9yZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXt0aGlzLnN0b3JlfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuY2hpbGRyZW4oKX1cbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPixcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lciksXG4gICAgICAgICAgICAgICAgdGhpcy5hZnRlclJlbmRlclxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIF9yZW5kZXIpXG4gICAgICAgIF9yZW5kZXIoKVxuICAgIH1cbiAgICBzdGF0aWMgYWRkRXZlbnRzKGV2ZW50cykge1xuICAgICAgICBldmVudHMubWFwKGV2ZW50ID0+IGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChlKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChgZ2xvYmFsXyR7ZXZlbnR9YCwge2RldGFpbDogZS5kZXRhaWx9KSlcbiAgICAgICAgfSkpXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4vQXBwbGljYXRpb24nXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Gb290ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlckFwcGxpY2F0aW9uIGV4dGVuZHMgQXBwbGljYXRpb24ge1xuICAgIGNvbnRhaW5lciA9ICdmb290ZXInXG4gICAgY2hpbGRyZW4gPSAoKSA9PiA8Rm9vdGVyLz5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL0FwcGxpY2F0aW9uJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vSGVhZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJBcHBsaWNhdGlvbiBleHRlbmRzIEFwcGxpY2F0aW9uIHtcbiAgICBjb250YWluZXIgPSAnaGVhZGVyJ1xuICAgIGNoaWxkcmVuID0gKCkgPT4gPEhlYWRlci8+XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4vQXBwbGljYXRpb24nXG5pbXBvcnQge0RldlRvb2xzfSBmcm9tICcuLi8uLi9jb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXNBcHBsaWNhdGlvbiBleHRlbmRzIEFwcGxpY2F0aW9uIHtcbiAgICBnZXQgcm91dGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX19yb3V0ZXMpIHRocm93ICdObyByb3V0ZXMgcHJvdmlkZWQnXG4gICAgICAgIHJldHVybiB0aGlzLl9fcm91dGVzXG4gICAgfVxuICAgIHNldCByb3V0ZXModikge3RoaXMuX19yb3V0ZXMgPSB2fVxuICAgIGdldCBoaXN0b3J5KCkge3JldHVybiB0aGlzLnV0aWwuaGlzdG9yeX1cblxuICAgIGNoaWxkcmVuID0gKCkgPT4gPFJvdXRlciByb3V0ZXM9e3RoaXMucm91dGVzfSBoaXN0b3J5PXt0aGlzLmhpc3Rvcnl9Lz5cbn1cbiIsImV4cG9ydHMuQXBwbGljYXRpb24gPSByZXF1aXJlKCcuL0FwcGxpY2F0aW9uJykuZGVmYXVsdFxuZXhwb3J0cy5Gb290ZXJBcHBsaWNhdGlvbiA9IHJlcXVpcmUoJy4vRm9vdGVyQXBwbGljYXRpb24nKS5kZWZhdWx0XG5leHBvcnRzLkhlYWRlckFwcGxpY2F0aW9uID0gcmVxdWlyZSgnLi9IZWFkZXJBcHBsaWNhdGlvbicpLmRlZmF1bHRcbmV4cG9ydHMuUm91dGVzQXBwbGljYXRpb24gPSByZXF1aXJlKCcuL1JvdXRlc0FwcGxpY2F0aW9uJykuZGVmYXVsdFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJlYWRjcnVtYnMgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ2JyZWFkY3J1bWJzJ1xuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxuICAgICAgICAgICAgICAgIHt0aGlzLmJyZWFkY3J1bWJzLm1hcCgoaXRlbSwgaSkgPT4gPExpbmsga2V5PXtpfSB0bz17aXRlbS51cmx9IGNsYXNzTmFtZT0nYnJlYWRjcnVtYic+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvTGluaz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aW9ucyc+e3RoaXMuYnJlYWRjcnVtYnNBY3Rpb25zfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdidXR0b24nXG4gICAgbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsXG4gICAgb25DbGljayA9IHRoaXMucHJvcHMub25DbGlja1xuICAgIHR5cGUgPSB0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAnYnV0dG9uJ1xuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxidXR0b24gdHlwZT17dGhpcy50eXBlfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9PlxuICAgICAgICAgICAge3RoaXMubGFiZWx9XG4gICAgICAgIDwvYnV0dG9uPlxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ2NhcmQnXG4gICAgaGVhZGVyID0gKCkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaGVhZGVyJyBzdHlsZT17e2Rpc3BsYXk6ICF0aGlzLnByb3BzLnRpdGxlID8gJ25vbmUnIDogJyd9fT5cbiAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuICAgICAgICAgICAge3RoaXMuc3VidGl0bGUoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgc3VidGl0bGUgPSAoKSA9PlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiAhdGhpcy5wcm9wcy5zdWJ0aXRsZSA/ICdub25lJyA6ICcnfX0+e3RoaXMucHJvcHMuc3VidGl0bGV9PC9sYWJlbD5cbiAgICByZW5kZXIgPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5oZWFkZXIoKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtY29udGVudCc+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge3V0aWwsIGNvbmZpZ3VyYXRpb259IGZyb20gJy4uLy4uL2NvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge3ZhbGlkYXRpb25FcnJvcnM6IHt9LCByZWZyZXNoOiBmYWxzZX1cbiAgICAgICAgdGhpcy5pbml0KC4uLmFyZ3MpXG4gICAgfVxuICAgIGluaXQoLi4uYXJncykge31cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fX21vdW50ZWQgPSB0cnVlXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2dsb2JhbF9jb29raWVfZGVsZXRlZCcsIHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpKVxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdnbG9iYWxfY29va2llX3VwZGF0ZWQnLCB0aGlzLnJlZnJlc2guYmluZCh0aGlzKSlcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignZ2xvYmFsX3JvdXRlX2VudGVyZWQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge3JvdXRlLCByZXBsYWNlfSA9IGUuZGV0YWlsXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYWdlUm91dGU6IHJvdXRlfSlcbiAgICAgICAgICAgIHRoaXMub25Sb3V0ZUVudGVyZWQocm91dGUsIHJlcGxhY2UpXG4gICAgICAgIH0pXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2dsb2JhbF9yb3V0ZV9jaGFuZ2VkJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtwcmV2LCBuZXh0fSA9IGUuZGV0YWlsXG4gICAgICAgICAgICB0aGlzLm9uUm91dGVDaGFuZ2VkKHByZXYsIG5leHQpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucG9zdENvbXBvbmVudERpZE1vdW50KClcbiAgICAgICAgaWYgKHRoaXMucGFnZUxvYWRlZEFwaSkge1xuICAgICAgICAgICAgdGhpcy51dGlsLnF1ZXJ5KHRoaXMucGFnZUxvYWRlZEFwaSlcbiAgICAgICAgICAgICAgICAuc3VjY2Vzcyh0aGlzLnBhZ2VMb2FkZWRBcGlTdWNjZXNzKVxuICAgICAgICAgICAgICAgIC5mYWlsdXJlKHRoaXMucGFnZUxvYWRlZEFwaUZhaWx1cmUpXG4gICAgICAgICAgICAgICAgLnJ1bigpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFnZUxvYWRlZEFwaVN1Y2Nlc3MgPSAocmVzKSA9PiB7fVxuICAgIHBhZ2VMb2FkZWRBcGlGYWlsdXJlID0gKHJlcykgPT4ge31cbiAgICBwb3N0Q29tcG9uZW50RGlkTW91bnQoKSB7fVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge3RoaXMuX19tb3VudGVkID0gZmFsc2V9XG4gICAgb25Sb3V0ZUVudGVyZWQgPSAocm91dGUsIHJlcGxhY2UpID0+IHt9XG4gICAgb25Sb3V0ZUNoYW5nZWQgPSAocHJldiwgbmV4dCkgPT4ge31cbiAgICByZWZyZXNoKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLl9fbW91bnRlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA/IHN0YXRlIDogdGhpcy5zdGF0ZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRFcnJvcihmaWVsZCwgbXNnKSB7XG4gICAgICAgIHRoaXMuc3RhdGUudmFsaWRhdGlvbkVycm9yc1tmaWVsZF0gPSBtc2dcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmVtb3ZlRXJyb3IoZmllbGQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS52YWxpZGF0aW9uRXJyb3JzW2ZpZWxkXSA9IG51bGxcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBnZXQgZG9tKCkge3JldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKX1cbiAgICBnZXQgY29uZmlndXJhdGlvbigpIHtyZXR1cm4gY29uZmlndXJhdGlvbn1cbiAgICBnZXQgdXRpbCgpIHtyZXR1cm4gdXRpbH1cbiAgICBnZXQgY2xhc3NOYW1lKCkge3JldHVybiBgJHt0aGlzLmNvbXBvbmVudENsYXNzTmFtZX0gJHt0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICBnZXQgcm91dGUoKSB7cmV0dXJuIHRoaXMudXRpbC5jb29raWUucmVhZCgncm91dGVfZW50ZXJlZCcpLnJvdXRlfVxuICAgIGdldCBwYWdlSW5mbygpIHtyZXR1cm4gdGhpcy5wcm9wcy5wYWdlSW5mb31cbiAgICBicmVhZGNydW1icyA9IHRoaXMucHJvcHMuYnJlYWRjcnVtYnNcbiAgICBicmVhZGNydW1ic0FjdGlvbnMgPSB0aGlzLnByb3BzLmJyZWFkY3J1bWJzQWN0aW9uc1xuXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2RlZmF1bHQgYXMgUmVhY3REcm9wem9uZX0gZnJvbSAncmVhY3QtZHJvcHpvbmUnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcHpvbmUgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ2Ryb3B6b25lJ1xuICAgIHN0YXRlID0ge2ZpbGVzOiBbXX1cblxuICAgIGdldCBmaWxlcygpIHtyZXR1cm4gdGhpcy5zdGF0ZS5maWxlc31cblxuICAgIG9wZW4gPSAoKSA9PiB0aGlzLmRyb3B6b25lLm9wZW4oKVxuICAgIGRyb3AgPSAoZmlsZXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsZXN9KVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkRyb3BwZWQpIHRoaXMucHJvcHMub25Ecm9wcGVkKHRoaXMuc3RhdGUuZmlsZXMpXG4gICAgfVxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxSZWFjdERyb3B6b25lIGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9IHJlZj17ZSA9PiB0aGlzLmRyb3B6b25lID0gZX0gb25Ecm9wPXt0aGlzLmRyb3B9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvUmVhY3REcm9wem9uZT5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29ubmVjdH0gZnJvbSAnLi4vcmVkdXgnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnLi9UZXh0RmllbGQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnbG9naW4nXG4gICAgdmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5hY2NvdW50SW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldEVycm9yKCdhY2NvdW50JywgJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnJvcignYWNjb3VudCcpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnBhc3N3b3JkSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldEVycm9yKCdwYXNzd29yZCcsICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyb3IoJ3Bhc3N3b3JkJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBvbkxvZ2luID0gKGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGUoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5leGVjdXRlVXNlckxvZ2luQWN0aW9uKHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiB0aGlzLmFjY291bnRJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZElucHV0LnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgIDxoMT5TaWduIGluIHRvIDxzcGFuIGNsYXNzTmFtZT0nYXBwJz57dGhpcy5jb25maWd1cmF0aW9uLmFwcH08L3NwYW4+PC9oMT5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2xvZ2luLWZvcm0nPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9J3RleHQnIHJlZj17ZSA9PiB0aGlzLmFjY291bnRJbnB1dCA9IGV9XG4gICAgICAgICAgICAgICAgICBlcnJvclRleHQ9e3RoaXMuc3RhdGUudmFsaWRhdGlvbkVycm9ycy5hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0FjY291bnQnLz5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPSdwYXNzd29yZCcgcmVmPXtlID0+IHRoaXMucGFzc3dvcmRJbnB1dCA9IGV9XG4gICAgICAgICAgICAgICAgICBlcnJvclRleHQ9e3RoaXMuc3RhdGUudmFsaWRhdGlvbkVycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCcvPlxuICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPSdMb2dpbicgb25DbGljaz17dGhpcy5vbkxvZ2lufS8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG59XG5leHBvcnQgZGVmYXVsdCAobmV3IENvbm5lY3QoTG9naW4pKS5rbGFzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFN0eWxlIHtcbiAgICBsZXZlbCA9IHRoaXMucHJvcHMubGV2ZWwgPyB0aGlzLnByb3BzLmxldmVsIDogMFxuICAgIGdldE5vZGVDbGFzc05hbWUgPSAobm9kZSkgPT4gYCR7bG9jYXRpb24ucGF0aG5hbWUgPT0gbm9kZS51cmwgPyAnYWN0aXZlJyA6ICcnfSBsZXZlbCR7dGhpcy5sZXZlbH0gJHtub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCA/ICdoYXMtY2hpbGRyZW4nIDogJyd9YFxuICAgIHJlbmRlck1lbnUgPSAobWVudXMsIGNsYXNzTmFtZSwgc3ViTWVudUNsYXNzTmFtZSkgPT4gIW1lbnVzIHx8ICFtZW51cy5sZW5ndGggPyBudWxsIDpcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57bWVudXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvcHMgPSBpdGVtLm9uQ2xpY2sgP1xuICAgICAgICAgICAgICAgIHtvbkNsaWNrOiBpdGVtLm9uQ2xpY2t9IDpcbiAgICAgICAgICAgICAgICB7aHJlZjogaXRlbS51cmwsIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udXJsKSB0aGlzLnV0aWwuaGlzdG9yeS5wdXNoKGl0ZW0udXJsKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5odG1sID9cbiAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT17dGhpcy5nZXROb2RlQ2xhc3NOYW1lKGl0ZW0pfT57aXRlbS5odG1sfTwvbGk+IDpcbiAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT17dGhpcy5nZXROb2RlQ2xhc3NOYW1lKGl0ZW0pfT5cbiAgICAgICAgICAgICAgICA8TGluayB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgeyFpdGVtLmRlc2NyaXB0aW9uID8gbnVsbCA6XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz57aXRlbS5kZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgICAgICAgPE1lbnUgbWVudXM9e2l0ZW0uY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIGxldmVsPXt0aGlzLmxldmVsICsgMX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdWJNZW51Q2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBzdWJNZW51Q2xhc3NOYW1lPXtzdWJNZW51Q2xhc3NOYW1lfS8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgcmVuZGVyID0gKCkgPT4gdGhpcy5yZW5kZXJNZW51KHRoaXMucHJvcHMubWVudXMsIHRoaXMuY2xhc3NOYW1lLCB0aGlzLnByb3BzLnN1Yk1lbnVDbGFzc05hbWUpXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2RlZmF1bHQgYXMgUmVhY3RNb2RhbH0gZnJvbSAncmVhY3QtbW9kYWwnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gYG1vZGFsLWRpYWxvZyAke3RoaXMubW9kYWxDbGFzc05hbWV9YFxuICAgIG1vZGFsQ2xhc3NOYW1lID0gJydcblxuICAgIGNsb3NlID0gKCkgPT4ge31cbiAgICBtZXNzYWdlID0gKCkgPT4gIXRoaXMucHJvcHMubWVzc2FnZSA/IG51bGwgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtbWVzc2FnZSc+e3RoaXMucHJvcHMubWVzc2FnZX08L2Rpdj5cbiAgICBmb290ZXIgPSAoKSA9PiAhdGhpcy5wcm9wcy5mb290ZXIgPyBudWxsIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWZvb3Rlcic+e3RoaXMucHJvcHMuZm9vdGVyfTwvZGl2PlxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxSZWFjdE1vZGFsIHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLm1lc3NhZ2UoKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zIGljb24tY2xvc2UnIG9uQ2xpY2s9e3RoaXMuY2xvc2V9PmNsb3NlPC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIHt0aGlzLmZvb3RlcigpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVhY3RNb2RhbD5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29ubmVjdH0gZnJvbSAnLi4vcmVkdXgnXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCdcblxuY2xhc3MgTW9kYWxEZWZhdWx0IGV4dGVuZHMgTW9kYWwge1xuICAgIG1vZGFsQ2xhc3NOYW1lID0gJ2RlZmF1bHQtbW9kYWwnXG5cbiAgICBjbG9zZSA9ICgpID0+IHRoaXMucHJvcHMuZXhlY3V0ZVJlbW92ZU1vZGFsRnJvbVZpZXdBY3Rpb24oKVxufVxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KE1vZGFsRGVmYXVsdCkpLmtsYXNzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luJ1xuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJy4vQnJlYWRjcnVtYnMnXG5pbXBvcnQgTW9kYWxEZWZhdWx0IGZyb20gJy4vTW9kYWxEZWZhdWx0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGBjb250YWluZXItZmx1aWQgcGFnZSAke3RoaXMuc2lkZWJhckxlZnRDbGFzc05hbWV9ICR7dGhpcy5zaWRlYmFyUmlnaHRDbGFzc05hbWV9ICR7dGhpcy5wYWdlQ2xhc3NOYW1lfWBcbiAgICBwYWdlQ2xhc3NOYW1lID0gJydcblxuICAgIGdldCBzaWRlYmFyTGVmdENsYXNzTmFtZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnNpZGViYXJMZWZ0KSByZXR1cm4gJydcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGlkZVNpZGViYXJMZWZ0ID8gJ2hhcy1zaWRlYmFyLWxlZnQtY29sbGFwc2VkJyA6ICdoYXMtc2lkZWJhci1sZWZ0J1xuICAgIH1cbiAgICBnZXQgc2lkZWJhclJpZ2h0Q2xhc3NOYW1lKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuc2lkZWJhclJpZ2h0KSByZXR1cm4gJydcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGlkZVNpZGViYXJSaWdodCA/ICdoYXMtc2lkZWJhci1yaWdodC1jb2xsYXBzZWQnIDogJ2hhcy1zaWRlYmFyLXJpZ2h0J1xuICAgIH1cblxuICAgIHJlbmRlclNpYmFyTGVmdCA9ICgpID0+IHRoaXMucHJvcHMuc2lkZWJhckxlZnRcbiAgICByZW5kZXJTaWJhclJpZ2h0ID0gKCkgPT4gdGhpcy5wcm9wcy5zaWRlYmFyUmlnaHRcbiAgICByZW5kZXJCcmVhZGNydW1icyA9ICgpID0+IDxCcmVhZGNydW1icyBicmVhZGNydW1icz17dGhpcy5icmVhZGNydW1ic30gYWN0aW9ucz17dGhpcy5icmVhZGNydW1ic0FjdGlvbnN9Lz5cbiAgICBjb250ZW50ID0gKCkgPT4gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIGNoaWxkcmVuID0gKCkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyQnJlYWRjcnVtYnMoKX1cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNpYmFyTGVmdCgpfVxuICAgICAgICAgICAge3RoaXMuY29udGVudCgpfVxuICAgICAgICAgICAge3RoaXMucmVuZGVyU2liYXJSaWdodCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICByZW5kZXJNb2RhbCA9ICgpID0+ICF0aGlzLnByb3BzLm1vZGFsID8gbnVsbCA6IHRoaXMucHJvcHMubW9kYWwgaW5zdGFuY2VvZiBNb2RhbCA/IHRoaXMucHJvcHMubW9kYWwgOlxuICAgICAgICA8TW9kYWxEZWZhdWx0IGlzT3Blbj17dHJ1ZX0gY29udGVudExhYmVsPSdNb2RhbERlZmF1bHQnPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubW9kYWx9XG4gICAgICAgIDwvTW9kYWxEZWZhdWx0PlxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICB7dGhpcy51dGlsLnVzZXIuaXNMb2dnZWQgPyB0aGlzLmNoaWxkcmVuKCkgOiA8TG9naW4vPn1cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlck1vZGFsKCl9XG4gICAgICAgIDwvZGl2PlxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEZpZWxkIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdzZWFyY2gtZmllbGQnXG4gICAgaWNvbiA9IHRoaXMucHJvcHMuaWNvbiA/IHRoaXMucHJvcHMuaWNvbiA6IDxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPnNlYXJjaDwvaT5cbiAgICBpY29uUG9zaXRpb24gPSB0aGlzLnByb3BzLmljb25Qb3NpdGlvbiA9PSAnc3RhcnQnID8gJ3N0YXJ0JyA6ICdlbmQnXG4gICAgcGxhY2Vob2xkZXIgPSB0aGlzLnByb3BzLnBsYWNlaG9sZGVyID8gdGhpcy5wcm9wcy5wbGFjZWhvbGRlciA6ICdTZWFyY2gnXG4gICAgZ2V0IHZhbHVlKCkge3JldHVybiB0aGlzLmlucHV0LnZhbHVlfVxuICAgIHNldCB2YWx1ZSh2KSB7dGhpcy5pbnB1dC52YWx1ZSA9IHZ9XG5cbiAgICBvbkNoYW5nZSA9IChlKSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlZCA/IHRoaXMucHJvcHMub25DaGFuZ2VkKGUpIDogZmFsc2VcbiAgICByZW5kZXIgPSAoKSA9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgIHt0aGlzLmljb25Qb3NpdGlvbiA9PSAnc3RhcnQnID8gdGhpcy5pY29uIDogbnVsbH1cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZWY9e2UgPT4gdGhpcy5pbnB1dCA9IGV9IHBsYWNlaG9sZGVyPXt0aGlzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XG4gICAgICAgICAgICB7dGhpcy5pY29uUG9zaXRpb24gPT0gJ2VuZCcgPyB0aGlzLmljb24gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTdHlsZSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IFNlYXJjaEZpZWxkIGZyb20gJy4vU2VhcmNoRmllbGQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdEZpZWxkIGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdzZWxlY3QtZmllbGQnXG4gICAgcGxhY2Vob2xkZXIgPSB0aGlzLnByb3BzLnBsYWNlaG9sZGVyID8gdGhpcy5wcm9wcy5wbGFjZWhvbGRlciA6ICcnXG4gICAgbm9uZU9wdGlvbiA9IHt0ZXh0OiB0aGlzLnBsYWNlaG9sZGVyLCB2YWx1ZTogbnVsbCwgY2xhc3NOYW1lOiAnbm9uZS1vcHRpb24nfVxuICAgIHNob3VsZFNob3dOb25lT3B0aW9uID0gdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgncGxhY2Vob2xkZXInKVxuICAgIHN0eWxlID0gdGhpcy51dGlsLmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zdHlsZSlcbiAgICB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGVcbiAgICBvcHRpb25UZXh0ID0gdGhpcy5wcm9wcy5vcHRpb25UZXh0ID8gdGhpcy5wcm9wcy5vcHRpb25UZXh0IDogKG8pID0+IG8udGV4dFxuICAgIG9wdGlvblZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25WYWx1ZSA/IHRoaXMucHJvcHMub3B0aW9uVmFsdWUgOiAobykgPT4gby52YWx1ZVxuICAgIG9wdGlvbiA9IChpKT0+IHRoaXMub3B0aW9uc1tpXSA/IHRoaXMub3B0aW9uc1tpXSA6IHRoaXMubm9uZU9wdGlvblxuICAgIG9wZW4gPSAob3BlbikgPT4gdGhpcy5yZWZyZXNoKHtvcGVufSlcbiAgICBvbkNoYW5nZSA9IChvLCBmKSA9PiB7XG4gICAgICAgIGlmIChmIHx8IG8gIT0gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKHtzZWxlY3RlZDogbywgb3BlbjogZmFsc2V9KVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2VkKSB0aGlzLnByb3BzLm9uQ2hhbmdlZChvLCB0aGlzKVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRlID0ge1xuICAgICAgICBvcHRpb25zOiB0aGlzLm5vcm1hbGl6ZU9wdGlvbnModGhpcy5wcm9wcy5vcHRpb25zKSxcbiAgICAgICAgb3BlbjogQm9vbGVhbih0aGlzLnByb3BzLm9wZW4pLFxuICAgICAgICBzZWFyY2hhYmxlOiBCb29sZWFuKHRoaXMucHJvcHMuc2VhcmNoYWJsZSksXG5cblxuICAgIH1cbiAgICBpbml0KHByb3BzKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnMuZmluZChvID0+IHRoaXMub3B0aW9uVmFsdWUobykgPT0gcHJvcHMudmFsdWUpXG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkID8gdGhpcy5zdGF0ZS5zZWxlY3RlZCA6IHRoaXMubm9uZU9wdGlvblxuICAgICAgICB0aGlzLnV0aWwuYXNzaWduKHRoaXMuc3R5bGUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBwYXJzZUludChwcm9wcy53aWR0aCkgPyBgJHtwYXJzZUludChwcm9wcy53aWR0aCl9cHhgIDogJ2luaXRpYWwnLFxuICAgICAgICAgICAgbWluV2lkdGg6IHBhcnNlSW50KHByb3BzLm1pbldpZHRoKSA/IGAke3BhcnNlSW50KHByb3BzLm1pbldpZHRoKX1weGAgOiAnaW5pdGlhbCcsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3BlbiAmJiB0aGlzLnNlYXJjaEZpZWxkKSB0aGlzLnNlYXJjaEZpZWxkLmRvbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKClcbiAgICB9XG4gICAgcG9zdENvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3QgPSBlLnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0LWZpZWxkJylcbiAgICAgICAgICAgIGlmIChzZWxlY3QgJiYgc2VsZWN0ID09IHRoaXMuZG9tICYmIGUudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QtdmFsdWUnKSkgdGhpcy5vcGVuKHRydWUpXG4gICAgICAgICAgICBlbHNlIHRoaXMub3BlbihmYWxzZSlcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgIT0gdGhpcy5ub25lT3B0aW9uKSB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VsZWN0ZWQsIHRydWUpXG4gICAgfVxuICAgIG5vcm1hbGl6ZU9wdGlvbnMgPSAob3B0aW9ucykgPT5cbiAgICAgICAgQXJyYXkuaXNBcnJheShvcHRpb25zKSA/IG9wdGlvbnMubWFwKG8gPT4ge3JldHVybiB0eXBlb2YgbyA9PSAnc3RyaW5nJyA/IHt2YWx1ZTogbywgdGV4dDpvfSA6IGt9KSA6XG4gICAgICAgIHR5cGVvZiBvcHRpb25zID09ICdvYmplY3QnID8gT2JqZWN0LmtleXMob3B0aW9ucykubWFwKGsgPT4ge3JldHVybiB7dmFsdWU6IG9wdGlvbnNba10sIHRleHQ6IGt9fSkgOlxuICAgICAgICBbXVxuXG4gICAgZ2V0IG9wdGlvbnMoKSB7cmV0dXJuIHRoaXMuc2hvdWxkU2hvd05vbmVPcHRpb24gPyBbdGhpcy5ub25lT3B0aW9uXS5jb25jYXQodGhpcy5zdGF0ZS5vcHRpb25zKSA6IHRoaXMuc3RhdGUub3B0aW9uc31cbiAgICBnZXQgZmlsdGVyZWRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hGaWVsZCAmJiB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlID9cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5maWx0ZXIobyA9PiB0aGlzLm9wdGlvblRleHQobykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaEZpZWxkLnZhbHVlLnRvTG93ZXJDYXNlKCkpKSA6IHRoaXMub3B0aW9uc1xuICAgIH1cbiAgICByZW5kZXJPcHRpb24gPSAobyxpKSA9PlxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgc2VsZWN0LW9wdGlvbiAke28uY2xhc3NOYW1lfSAke3RoaXMuc2VsZWN0ZWQgPT0gbyA/ICdzZWxlY3RlZCcgOiAnJ31gfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsIG8pfT5cbiAgICAgICAgICAgIHt0aGlzLm9wdGlvblRleHQobyl9XG4gICAgICAgIDwvZGl2PlxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICB7IXRoaXMudGl0bGUgPyBudWxsIDogPGRpdiBjbGFzc05hbWU9J3NlbGVjdC10aXRsZSc+e3RoaXMudGl0bGV9PC9kaXY+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWxlY3QtdmFsdWUgJHt0aGlzLnNlbGVjdGVkID09IHRoaXMubm9uZU9wdGlvbiA/ICdwbGFjZWhvbGRlcicgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0LXRleHQnPnt0aGlzLm9wdGlvblRleHQodGhpcy5zZWxlY3RlZCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyc+YXJyb3dfZHJvcF9kb3duPC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0LWRyb3Bkb3duJyBzdHlsZT17dGhpcy51dGlsLmFzc2lnbih0aGlzLnN0eWxlLCB7ZGlzcGxheTogdGhpcy5zdGF0ZS5vcGVuID8gJycgOiAnbm9uZSd9KX0+XG4gICAgICAgICAgICAgICAgeyF0aGlzLnNlYXJjaGFibGUgPyBudWxsIDogPFNlYXJjaEZpZWxkIHJlZj17ZSA9PiB0aGlzLnNlYXJjaEZpZWxkID0gZX0gb25DaGFuZ2U9e3RoaXMucmVmcmVzaH0vPn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0LWRyb3Bkb3duJz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuZmlsdGVyZWRPcHRpb25zLm1hcCgobyxpKSA9PiB0aGlzLnJlbmRlck9wdGlvbihvLGkpKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTdHlsZSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IFNlYXJjaEZpZWxkIGZyb20gJy4vU2VhcmNoRmllbGQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0ZXBwZXIgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gYHN0ZXBwZXIgJHt0aGlzLnByb3BzLmF1dG9maXQgPyAnc3RlcHBlci1hdXRvZml0JyA6ICcnfWBcbiAgICBzdGVwcyA9IHRoaXMucHJvcHMuc3RlcHMgPyB0aGlzLnByb3BzLnN0ZXBzIDogW11cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY3VycmVudDogdGhpcy5wcm9wcy5jdXJyZW50ID8gdGhpcy5wcm9wcy5jdXJyZW50IDogMFxuICAgIH1cbiAgICBnZXQgY3VycmVudCgpIHtyZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50fVxuICAgIHNldCBjdXJyZW50KGN1cnJlbnQpIHt0aGlzLnJlZnJlc2goe2N1cnJlbnR9KX1cbiAgICBqdW1wID0gKGkpID0+IGkgPiAwICYmIGkgPCB0aGlzLnN0ZXBzLmxlbmd0aCAmJiB0aGlzLnN0ZXBzW2ldLmFjdGl2ZSA/IHRoaXMuY3VycmVudCA9IGkgOiBmYWxzZVxuICAgIG5leHQgPSAoKSA9PiB0aGlzLmp1bXAodGhpcy5jdXJyZW50ICsgMSlcbiAgICBwcmV2ID0gKCkgPT4gdGhpcy5qdW1wKHRoaXMuY3VycmVudCAtIDEpXG4gICAgaGVhZGVycyA9ICgpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGVwLWhlYWRlcnMnPlxuICAgICAgICAgICAge3RoaXMuc3RlcHMubWFwKChzLGkpID0+IHRoaXMuaGVhZGVyKHMsaSkpfVxuICAgICAgICA8L2Rpdj5cbiAgICBoZWFkZXIgPSAocyxpKSA9PlxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgc3RlcC1oZWFkZXIgJHtzLmFjdGl2ZSA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJIZWFkZXIocyxpKX1cbiAgICAgICAgPC9kaXY+XG4gICAgcmVuZGVySGVhZGVyID0gdGhpcy5wcm9wcy5yZW5kZXJIZWFkZXIgPyB0aGlzLnByb3BzLnJlbmRlckhlYWRlciA6IChzLGkpID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGVwLWhlYWRlci1jb250ZW50Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGVwLWluZGV4Jz48YSBvbkNsaWNrPXt0aGlzLmp1bXAuYmluZCh0aGlzLCBpKX0+e2krMX08L2E+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RlcC10aXRsZSc+e3MudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJIZWFkZXJFeHRyYShzLGkpfVxuICAgICAgICA8L2Rpdj5cbiAgICByZW5kZXJIZWFkZXJFeHRyYSA9IChzLGkpID0+IHRoaXMucHJvcHMucmVuZGVySGVhZGVyRXh0cmEgPyB0aGlzLnByb3BzLnJlbmRlckhlYWRlckV4dHJhKHMsaSkgOiBudWxsXG5cbiAgICBjb250ZW50ID0gKCkgPT4gIXRoaXMucmVuZGVyQ29udGVudCh0aGlzLmN1cnJlbnQpID8gbnVsbCA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGVwLWNvbnRlbnQnPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCh0aGlzLmN1cnJlbnQpfVxuICAgICAgICA8L2Rpdj5cbiAgICByZW5kZXJDb250ZW50ID0gKGkpID0+IHRoaXMucHJvcHMucmVuZGVyQ29udGVudCA/IHRoaXMucHJvcHMucmVuZGVyQ29udGVudChpKSA6IHRoaXMuc3RlcHNbaV0uY29udGVudFxuXG4gICAgcmVuZGVyID0gKCkgPT4gIXRoaXMuc3RlcHMgPyBudWxsIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLmhlYWRlcnMoKX1cbiAgICAgICAgICAgIHt0aGlzLmNvbnRlbnQoKX1cbiAgICAgICAgPC9kaXY+XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZ2V0IHV1aWQoKSB7cmV0dXJuIHRoaXMuX191dWlkID0gIXRoaXMuX191dWlkID8gdGhpcy51dGlsLnV1aWQoKSA6IHRoaXMuX191dWlkfVxuICAgIGdldCBkZWZhdWx0VGhlbWUoKSB7XG4gICAgICAgIGNvbnN0IHRoZW1lID0gdGhpcy5jb25maWd1cmF0aW9uLnVpLnRoZW1lXG4gICAgICAgIHJldHVybiB0aGlzLnV0aWwuYXNzaWduKHtpZDogdGhpcy51dWlkLCBuYW1lOiB0aGlzLnV1aWR9LCB0aGVtZSwge1xuICAgICAgICAgICAgcGFkZGluZ0xlZnRSaWdodDoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5wYWRkaW5nTGVmdCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnBhZGRpbmdSaWdodFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhZGRpbmdUb3BCb3R0b206IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiB0aGVtZS5wYWRkaW5nVG9wLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnBhZGRpbmdCb3R0b21cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWRkaW5nTGVmdFJpZ2h0U21hbGw6IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUucGFkZGluZ0xlZnRTbWFsbCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnBhZGRpbmdSaWdodFNtYWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFkZGluZ1RvcEJvdHRvbVNtYWxsOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogdGhlbWUucGFkZGluZ1RvcFNtYWxsLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnBhZGRpbmdCb3R0b21TbWFsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGhlbWUubGluZUhlaWdodCxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvblN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IHRoZW1lLmJ1dHRvbkZvbnRTaXplLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuYnV0dG9uQmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5wYWRkaW5nTGVmdFNtYWxsLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUucGFkZGluZ1JpZ2h0U21hbGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5kZXJsaW5lU3R5bGU6IHtib3R0b206ICcwJywgbGVmdDogJzAnfSxcbiAgICAgICAgICAgIHVuZGVybGluZUZvY3VzU3R5bGU6IHtib3JkZXJCb3R0b21XaWR0aDogJzFweCd9LFxuICAgICAgICAgICAgdGFibGVTdHlsZToge30sXG4gICAgICAgICAgICByb3dTdHlsZToge1xuICAgICAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHRoZW1lLmxpbmVIZWlnaHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2VsbFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMCcsIHBhZGRpbmc6IGAwcHggJHt0aGVtZS5wYWRkaW5nU21hbGx9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0LFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBnZXQgdGhlbWVQcm9wcygpIHtyZXR1cm4gW119XG4gICAgZ2V0VGhlbWVQcm9wcygpIHtyZXR1cm4gWydpZCcsICduYW1lJywgJ3N0eWxlJ10uY29uY2F0KHRoaXMudGhlbWVQcm9wcyl9XG4gICAgZ2V0IHRoZW1lKCkge3JldHVybiB0aGlzLnV0aWwuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRUaGVtZSwgdGhpcy5wcm9wcyl9XG4gICAgZ2V0IGNtcFN0eWxlUHJvcHMoKSB7cmV0dXJuIHRoaXMudXRpbC5pbmNsdWRlKHRoaXMudXRpbC5hc3NpZ24oe30sIHRoaXMudGhlbWUsIHRoaXMuY21wUHJvcHMpLCB0aGlzLmdldFRoZW1lUHJvcHMoKSl9XG4gICAgZ2V0IGNtcFByb3BzKCkge3JldHVybiB0aGlzLnV0aWwuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRQcm9wcywgdGhpcy5wcm9wcyl9XG4gICAgZ2V0IGRlZmF1bHRQcm9wcygpIHtyZXR1cm4ge319XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ3RhYmxlLXZpZXcnXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNvbHVtbnM6IHRoaXMucHJvcHMuY29sdW1ucyA/IHRoaXMucHJvcHMuY29sdW1ucyA6IFtdXG4gICAgfVxuICAgIGdldCBjb2x1bW5zKCkge3JldHVybiB0aGlzLnN0YXRlLmNvbHVtbnN9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSdcblxuY2xhc3MgVGFicyBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBgdGFicyAke3RoaXMuY21wUHJvcHMudmVydGljYWwgPyAndGFicy12ZXJ0aWNhbCc6ICd0YWJzLWhvcml6b250YWwnfWBcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgYWN0aXZlSW5kZXg6IHRoaXMuY21wUHJvcHMuYWN0aXZlSW5kZXggPyB0aGlzLmNtcFByb3BzLmFjdGl2ZUluZGV4IDogMCxcbiAgICB9XG4gICAgZ2V0IGNoaWxkQ291bnQoKSB7cmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RofVxuICAgIGdldCBhY3RpdmVJbmRleCgpIHtyZXR1cm4gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleH1cbiAgICBoYW5kbGVOZXh0ID0gKCkgPT4gdGhpcy5hY3RpdmVJbmRleCA8IHRoaXMuY2hpbGRDb3VudCA/IHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4OiB0aGlzLmFjdGl2ZUluZGV4ICsgMX0pIDogZmFsc2VcbiAgICBoYW5kbGVQcmV2ID0gKCkgPT4gdGhpcy5hY3RpdmVJbmRleCA+IDAgPyB0aGlzLnNldFN0YXRlKHthY3RpdmVJbmRleDogdGhpcy5hY3RpdmVJbmRleCAtIDF9KSA6IGZhbHNlXG4gICAgZ2V0VGl0bGUgPSAoZWwsIGkpID0+IGVsLnByb3BzLmNoaWxkcmVuLnJlZHVjZSgodiwgY2hpbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnR5cGUgPT0gJ3RpdGxlJyA/IHYgPSBjaGlsZC5wcm9wcy5jaGlsZHJlbiA6IHZcbiAgICB9LCBpKVxuICAgIGdldENvbnRlbnQgPSAoZWwsIGkpID0+IGVsLnByb3BzLmNoaWxkcmVuLnJlZHVjZSgodiwgY2hpbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnR5cGUgPT0gJ2NvbnRlbnQnID8gdiA9IGNoaWxkLnByb3BzLmNoaWxkcmVuIDogdlxuICAgIH0sIGkpXG4gICAgcmVuZGVyID0gKCkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSBzdHlsZT17e2Rpc3BsYXk6ICF0aGlzLmNoaWxkQ291bnQgPyAnbm9uZScgOiAnJ319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYnMtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoKHRhYixpKSA9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHthY3RpdmVJbmRleDogaX0pfSBsYWJlbD17dGhpcy5nZXRUaXRsZSh0YWIsaSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRhYiAke2k9PXRoaXMuYWN0aXZlSW5kZXg/J2FjdGl2ZSc6Jyd9YH0vPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWItY29udGVudCc+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2V0Q29udGVudCh0aGlzLnByb3BzLmNoaWxkcmVuW3RoaXMuYWN0aXZlSW5kZXhdLCB0aGlzLmFjdGl2ZUluZGV4KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFic1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRGaWVsZCBleHRlbmRzIFN0eWxlIHtcbiAgICBnZXQgY29tcG9uZW50Q2xhc3NOYW1lKCkge3JldHVybiBgdGV4dC1maWVsZCAke3RoaXMucHJvcHMuZXJyb3JUZXh0ID8gJ2Vycm9yJyA6ICcnfWB9XG4gICAgZ2V0IHR5cGUoKSB7cmV0dXJuIHRoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICd0ZXh0J31cbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZX1cbiAgICBnZXQgdmFsdWUoKSB7cmV0dXJuIHRoaXMuaW5wdXQudmFsdWV9XG4gICAgc2V0IHZhbHVlKHYpIHt0aGlzLmlucHV0LnZhbHVlID0gdn1cbiAgICBnZXQgcGxhY2Vob2xkZXIoKSB7cmV0dXJuIHRoaXMucHJvcHMucGxhY2Vob2xkZXIgPyB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIDogJyd9XG5cbiAgICByZW5kZXJNZXNzYWdlID0gKCkgPT4gIXRoaXMucHJvcHMuZXJyb3JUZXh0ID8gbnVsbCA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz57dGhpcy5wcm9wcy5lcnJvclRleHR9PC9kaXY+XG4gICAgcmVuZGVyID0gKCkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e2UgPT4gdGhpcy5pbnB1dCA9IGV9IHR5cGU9e3RoaXMudHlwZX0gdmFsdWU9e3RoaXMuZGVmYXVsdFZhbHVlfSBwbGFjZWhvbGRlcj17dGhpcy5wbGFjZWhvbGRlcn0vPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyTWVzc2FnZSgpfVxuICAgICAgICA8L2Rpdj5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTdHlsZSBmcm9tICcuL1N0eWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3cG9ydCBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnY29udGFpbmVyIHZpZXdwb3J0J1xuICAgIGNoaWxkcmVuID0gKCkgPT4gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIHJlbmRlciA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLmNoaWxkcmVuKCl9XG4gICAgPC9kaXY+XG59XG4iLCJleHBvcnRzLkNhcmQgPSByZXF1aXJlKCcuL0NhcmQnKS5kZWZhdWx0XG5leHBvcnRzLkNvbXBvbmVudCA9IHJlcXVpcmUoJy4vQ29tcG9uZW50JykuZGVmYXVsdFxuZXhwb3J0cy5TdHlsZSA9IHJlcXVpcmUoJy4vU3R5bGUnKS5kZWZhdWx0XG5leHBvcnRzLlRleHRGaWVsZCA9IHJlcXVpcmUoJy4vVGV4dEZpZWxkJykuZGVmYXVsdFxuZXhwb3J0cy5CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpLmRlZmF1bHRcbmV4cG9ydHMuU2VhcmNoRmllbGQgPSByZXF1aXJlKCcuL1NlYXJjaEZpZWxkJykuZGVmYXVsdFxuZXhwb3J0cy5TZWxlY3RGaWVsZCA9IHJlcXVpcmUoJy4vU2VsZWN0RmllbGQnKS5kZWZhdWx0XG5leHBvcnRzLlRhYmxlID0gcmVxdWlyZSgnLi9UYWJsZScpLmRlZmF1bHRcbmV4cG9ydHMuVGFicyA9IHJlcXVpcmUoJy4vVGFicycpLmRlZmF1bHRcbmV4cG9ydHMuVmlld3BvcnQgPSByZXF1aXJlKCcuL1ZpZXdwb3J0JykuZGVmYXVsdFxuZXhwb3J0cy5Nb2RhbCA9IHJlcXVpcmUoJy4vTW9kYWwnKS5kZWZhdWx0XG5leHBvcnRzLk1vZGFsRGVmYXVsdCA9IHJlcXVpcmUoJy4vTW9kYWxEZWZhdWx0JykuZGVmYXVsdFxuZXhwb3J0cy5Ecm9wem9uZSA9IHJlcXVpcmUoJy4vRHJvcHpvbmUnKS5kZWZhdWx0XG5leHBvcnRzLlN0ZXBwZXIgPSByZXF1aXJlKCcuL1N0ZXBwZXInKS5kZWZhdWx0XG5leHBvcnRzLkJyZWFkY3J1bWJzID0gcmVxdWlyZSgnLi9CcmVhZGNydW1icycpLmRlZmF1bHRcbmV4cG9ydHMuTWVudSA9IHJlcXVpcmUoJy4vTWVudScpLmRlZmF1bHRcbmV4cG9ydHMuUGFnZSA9IHJlcXVpcmUoJy4vUGFnZScpLmRlZmF1bHRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29ubmVjdH0gZnJvbSAnLi4vLi4vcmVkdXgnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vU3R5bGUnXG5pbXBvcnQgVmVyc2lvbiBmcm9tICcuL1ZlcnNpb24nXG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnY29udGFpbmVyIGZvb3RlcidcbiAgICByZW5kZXIgPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICA8VmVyc2lvbi8+XG4gICAgPC9kaXY+XG59XG5leHBvcnQgZGVmYXVsdCAobmV3IENvbm5lY3QoRm9vdGVyKSkua2xhc3NcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29ubmVjdH0gZnJvbSAnLi4vLi4vcmVkdXgnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vU3R5bGUnXG5pbXBvcnQgTGlua3NIdWIgZnJvbSAnLi9MaW5rc0h1YidcbmltcG9ydCBMb2dvQm94IGZyb20gJy4vTG9nb0JveCdcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSAnLi9TZWFyY2hCb3gnXG5pbXBvcnQgSGVscCAgZnJvbSAnLi9IZWxwJ1xuaW1wb3J0IE5vdGlmaWNhdGlvbiAgZnJvbSAnLi9Ob3RpZmljYXRpb24nXG5pbXBvcnQgVXNlckJveCBmcm9tICcuL1VzZXJCb3gnXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnY29udGFpbmVyIGhlYWRlcidcbiAgICBvblJvdXRlRW50ZXJlZCA9IChyb3V0ZSwgcmVwbGFjZSkgPT4gdGhpcy5wcm9wcy5leGVjdXRlTG9hZFBhZ2VJbmZvQWN0aW9uKClcbiAgICByZW5kZXIgPSAoKSA9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgPExpbmtzSHViLz5cbiAgICAgICAgICAgIDxMb2dvQm94Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZScvPlxuICAgICAgICAgICAgPFNlYXJjaEJveC8+XG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uLz5cbiAgICAgICAgICAgIDxIZWxwLz5cbiAgICAgICAgICAgIDxVc2VyQm94Lz5cbiAgICAgICAgPC9kaXY+XG59XG5leHBvcnQgZGVmYXVsdCAobmV3IENvbm5lY3QoSGVhZGVyKSkua2xhc3NcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29ubmVjdH0gZnJvbSAnLi4vLi4vcmVkdXgnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vU3R5bGUnXG5cbmNsYXNzIEhlbHAgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ2hlbHAnXG4gICAgY2hpbGRyZW4gPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgIDxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPmhlbHA8L2k+XG4gICAgPC9kaXY+XG4gICAgcmVuZGVyID0gKCkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLmNoaWxkcmVuKCl9XG4gICAgICAgIDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCAobmV3IENvbm5lY3QoSGVscCkpLmtsYXNzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0Nvbm5lY3R9IGZyb20gJy4uLy4uL3JlZHV4J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4uL1N0eWxlJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudSdcblxuY2xhc3MgTGlua3NIdWIgZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ2xpbmtzLWh1YidcbiAgICBnZXRUaXRsZShub2RlcywgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVzLnJlZHVjZSgodmFsdWUsIG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PSBub2RlLnVybClcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPSBub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID8gdGhpcy5nZXRUaXRsZShub2RlLmNoaWxkcmVuLCB2YWx1ZSkgOiBub2RlLnRpdGxlXG4gICAgICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZihub2RlLnVybCkgPj0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPSBub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID8gdGhpcy5nZXRUaXRsZShub2RlLmNoaWxkcmVuLCB2YWx1ZSkgOiBub2RlLnRpdGxlXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA/IHRoaXMuZ2V0QXBwTmFtZShub2RlLmNoaWxkcmVuLCB2YWx1ZSkgOiB2YWx1ZVxuICAgICAgICB9LCB2YWx1ZSlcbiAgICB9XG4gICAgY2hpbGRyZW4gPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgIDxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPmFwcHM8L2k+XG4gICAgICAgIDxNZW51IG1lbnVzPXt0aGlzLnBhZ2VJbmZvLm1lbnVzfSBjbGFzc05hbWU9J21lbnVzJyBzdWJNZW51Q2xhc3NOYW1lPSdzdWItbWVudXMnLz5cbiAgICA8L2Rpdj5cbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAge3RoaXMuY2hpbGRyZW4oKX1cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAobmV3IENvbm5lY3QoTGlua3NIdWIpKS5rbGFzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQge0Nvbm5lY3R9IGZyb20gJy4uLy4uL3JlZHV4J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4uL1N0eWxlJ1xuXG5jbGFzcyBMb2dvQm94IGV4dGVuZHMgU3R5bGUge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICdsb2dvLWJveCdcblxuICAgIGNoaWxkcmVuID0gKCkgPT4gPGEgY2xhc3NOYW1lPSd3cmFwcGVyJyBocmVmPScvJz5cbiAgICAgICAgPGltZyBzcmM9e3RoaXMuY29uZmlndXJhdGlvbi5hcHBsb2dvfS8+XG4gICAgICAgIDxoMz57dGhpcy5jb25maWd1cmF0aW9uLmFwcG5hbWV9PC9oMz5cbiAgICA8L2E+XG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLmNoaWxkcmVuKCl9XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IChuZXcgQ29ubmVjdChMb2dvQm94KSkua2xhc3NcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29ubmVjdH0gZnJvbSAnLi4vLi4vcmVkdXgnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vU3R5bGUnXG5cbmNsYXNzIE5vdGlmaWNhdGlvbiBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnbm90aWZpY2F0aW9uJ1xuICAgIGNoaWxkcmVuID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz5ub3RpZmljYXRpb25zPC9pPlxuICAgIDwvZGl2PlxuICAgIHJlbmRlciA9ICgpID0+ICF0aGlzLnV0aWwudXNlci5pc0xvZ2dlZCA/IG51bGwgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAge3RoaXMuY2hpbGRyZW4oKX1cbiAgICAgICAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IChuZXcgQ29ubmVjdChOb3RpZmljYXRpb24pKS5rbGFzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb25uZWN0fSBmcm9tICcuLi8uLi9yZWR1eCdcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9TdHlsZSdcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnLi4vVGV4dEZpZWxkJ1xuXG5jbGFzcyBTZWFyY2hCb3ggZXh0ZW5kcyBTdHlsZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJ3NlYXJjaC1ib3gnXG4gICAgY2hpbGRyZW4gPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgIDxUZXh0RmllbGQgcmVmPXtlID0+IHRoaXMuc2VhcmNoSW5wdXQgPSBlfSBwbGFjZWhvbGRlcj0nU2VhcmNoJy8+XG4gICAgPC9kaXY+XG4gICAgcmVuZGVyID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHshdGhpcy51dGlsLnVzZXIuaXNMb2dnZWQgPyBudWxsIDp0aGlzLmNoaWxkcmVuKCl9XG4gICAgICAgIDwvZGl2PlxufVxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KFNlYXJjaEJveCkpLmtsYXNzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0Nvbm5lY3R9IGZyb20gJy4uLy4uL3JlZHV4J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4uL1N0eWxlJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudSdcblxuY2xhc3MgVXNlckJveCBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAndXNlci1ib3gnXG4gICAgZ2V0IG1lbnVzKCkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvZmlsZScsXG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGl0bGU6ICdQcmVmZXJlbmNlcycsXG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGl0bGU6ICdMb2dvdXQnLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5wcm9wcy5leGVjdXRlVXNlckxvZ291dEFjdGlvbigpXG4gICAgICAgIH1dXG4gICAgfVxuICAgIGNoaWxkcmVuID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlzcGxheS1uYW1lJz57dGhpcy51dGlsLnVzZXIuZGlzcGxheU5hbWV9PC9kaXY+XG4gICAgICAgIDxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPnBlcnNvbjwvaT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnVzJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXZhdGFyJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmFtZSc+e3RoaXMudXRpbC51c2VyLmRpc3BsYXlOYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvY2N1cGF0aW9uJz57dGhpcy51dGlsLnVzZXIub2NjdXBhdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVwYXJ0bWVudCc+e3RoaXMudXRpbC51c2VyLmRlcGFydG1lbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYWlsJz57dGhpcy51dGlsLnVzZXIuZW1haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhc3QtbG9naW4nPnt0aGlzLnV0aWwudXNlci5sYXN0TG9naW59PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rcyc+XG4gICAgICAgICAgICAgICAgPE1lbnUgbWVudXM9e3RoaXMubWVudXN9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICByZW5kZXIgPSAoKSA9PiAhdGhpcy51dGlsLnVzZXIuaXNMb2dnZWQgPyBudWxsIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLmNoaWxkcmVuKCl9XG4gICAgICAgIDwvZGl2PlxufVxuZXhwb3J0IGRlZmF1bHQgKG5ldyBDb25uZWN0KFVzZXJCb3gpKS5rbGFzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb25uZWN0fSBmcm9tICcuLi8uLi9yZWR1eCdcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9TdHlsZSdcblxuY2xhc3MgVmVyc2lvbiBleHRlbmRzIFN0eWxlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAndmVyc2lvbidcblxuICAgIGNoaWxkcmVuID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICB7dGhpcy5jb25maWd1cmF0aW9uLmFwcHZlcnNpb259XG4gICAgPC9kaXY+XG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLmNoaWxkcmVuKCl9XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IChuZXcgQ29ubmVjdChWZXJzaW9uKSkua2xhc3NcbiIsImltcG9ydCB7QWN0aW9uLCBBcGlBY3Rpb24sIFByb3h5QWN0aW9ufSBmcm9tICcuLi8uLi9jb3JlL3JlZHV4J1xuXG5leHBvcnQgY2xhc3MgU2V0QnJlYWRjcnVtYnNBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge31cbmV4cG9ydCBjbGFzcyBTZXRCcmVhZGNydW1ic0FjdGlvbnNBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge31cbmV4cG9ydCBjbGFzcyBBZGRNb2RhbFRvVmlld0FjdGlvbiBleHRlbmRzIEFjdGlvbiB7fVxuZXhwb3J0IGNsYXNzIFJlbW92ZU1vZGFsRnJvbVZpZXdBY3Rpb24gZXh0ZW5kcyBQcm94eUFjdGlvbiB7XG4gICAgcHJveHlDbGFzcyA9ICdBZGRNb2RhbFRvVmlld0FjdGlvbidcbiAgICBwcm94eU5vcm1hbGl6ZShzdGF0ZSwgcGF5bG9hZCwgLi4uYXJncykge3JldHVybiBudWxsfVxufVxuZXhwb3J0IGNsYXNzIFVzZXJMb2dvdXRBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge31cbmV4cG9ydCBjbGFzcyBVc2VyTG9naW5BY3Rpb24gZXh0ZW5kcyBBcGlBY3Rpb24ge1xuICAgIHN1Y2Nlc3NBY3Rpb25zID0gWydMb2FkUGFnZUluZm9BY3Rpb24nXVxuICAgIGxvYWRSZXF1ZXN0KHBheWxvYWQsIC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbC5xdWVyeSh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpLnVybHMubG9naW4sIHBheWxvYWQpXG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNldEN1cnJlbnRTZWFyY2hWYWx1ZUFjdGlvbiBleHRlbmRzIEFjdGlvbiB7fVxuZXhwb3J0IGNsYXNzIFNldEN1cnJlbnRQYWdlTm9BY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge31cbmV4cG9ydCBjbGFzcyBTZXRDdXJyZW50UGFnZVNpemVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge31cbmV4cG9ydCBjbGFzcyBUb2dnbGVTaWRlYmFyTGVmdEFjdGlvbiBleHRlbmRzIEFjdGlvbiB7fVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVNpZGViYXJSaWdodEFjdGlvbiBleHRlbmRzIEFjdGlvbiB7fVxuZXhwb3J0IGNsYXNzIExvYWRQYWdlSW5mb0FjdGlvbiBleHRlbmRzIEFwaUFjdGlvbiB7XG4gICAgbG9hZFJlcXVlc3QocGF5bG9hZCwgLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy51dGlsLnF1ZXJ5KHRoaXMudXRpbC51c2VyLmlzTG9nZ2VkID8gdGhpcy5jb25maWd1cmF0aW9uLmFwaS51cmxzLnBhZ2VJbmZvTG9nZ2VkIDogdGhpcy5jb25maWd1cmF0aW9uLmFwaS51cmxzLnBhZ2VJbmZvKVxuICAgIH1cbn1cbiIsImltcG9ydCB7Q29ubmVjdCBhcyBDb3JlQ29ubmVjdH0gZnJvbSAnLi4vLi4vY29yZS9yZWR1eCdcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9BY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbm5lY3QgZXh0ZW5kcyBDb3JlQ29ubmVjdCB7XG4gICAgZ2V0QWN0aW9ucyhkaXNwYXRjaCwgb3duUHJvcHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbC5hc3NpZ24oe30sIHN1cGVyLmdldEFjdGlvbnMoZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKSwgYWN0aW9ucylcbiAgICB9XG59XG4iLCJpbXBvcnQge1JlZHVjZXIsIENvbmZpZ1JlZHVjZXIsIENvb2tpZVJlZHVjZXIsIEZhbHNlUmVkdWNlciwgVHJ1ZVJlZHVjZXIsIE51bGxSZWR1Y2VyfSBmcm9tICcuLi8uLi9jb3JlL3JlZHV4J1xuXG5leHBvcnQgY2xhc3MgU2V0QnJlYWRjcnVtYnNBY3Rpb25SZWR1Y2VyIGV4dGVuZHMgUmVkdWNlciB7XG4gICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtyZXR1cm4gW119XG4gICAgZ2V0IGZpZWxkTmFtZSgpIHtyZXR1cm4gJ2JyZWFkY3J1bWJzJ31cbn1cbmV4cG9ydCBjbGFzcyBTZXRCcmVhZGNydW1ic0FjdGlvbkFjdGlvbnNSZWR1Y2VyIGV4dGVuZHMgUmVkdWNlciB7XG4gICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtyZXR1cm4gW119XG4gICAgZ2V0IGZpZWxkTmFtZSgpIHtyZXR1cm4gJ2JyZWFkY3J1bWJzQWN0aW9ucyd9XG59XG5leHBvcnQgY2xhc3MgVXNlckxvZ291dEFjdGlvblJlZHVjZXIgZXh0ZW5kcyBDb29raWVSZWR1Y2VyIHtcbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiBudWxsfVxuICAgIGdldCBmaWVsZE5hbWUoKSB7cmV0dXJuICd1c2VyJ31cbiAgICBzZXRDb29raWUoKSB7dGhpcy51dGlsLnVzZXIudW5sb2FkKCl9XG59XG5leHBvcnQgY2xhc3MgQXBpU3VjY2Vzc1VzZXJMb2dpbkFjdGlvblJlZHVjZXIgZXh0ZW5kcyBDb29raWVSZWR1Y2VyIHtcbiAgICBnZXQgZmllbGROYW1lKCkge3JldHVybiAndXNlcid9XG4gICAgc2V0Q29va2llKCkge1xuICAgICAgICB0aGlzLnV0aWwudXNlci5sb2FkKHRoaXMuX192YWx1ZVt0aGlzLmZpZWxkTmFtZV0pXG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEFkZE1vZGFsVG9WaWV3QWN0aW9uUmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGdldCBmaWVsZE5hbWUoKSB7cmV0dXJuICdtb2RhbCd9XG59XG5leHBvcnQgY2xhc3MgU2V0Q3VycmVudFNlYXJjaFZhbHVlQWN0aW9uUmVkdWNlciBleHRlbmRzIENvbmZpZ1JlZHVjZXIge1xuICAgIGdldCBmaWVsZE5hbWUoKSB7cmV0dXJuICdjdXJyZW50U2VhcmNoVmFsdWUnfVxufVxuZXhwb3J0IGNsYXNzIFNldEN1cnJlbnRQYWdlTm9BY3Rpb25SZWR1Y2VyIGV4dGVuZHMgQ29uZmlnUmVkdWNlciB7XG4gICAgZ2V0IGZpZWxkTmFtZSgpIHtyZXR1cm4gJ2N1cnJlbnRQYWdlTm8nfVxufVxuZXhwb3J0IGNsYXNzIFNldEN1cnJlbnRQYWdlU2l6ZUFjdGlvblJlZHVjZXIgZXh0ZW5kcyBDb25maWdSZWR1Y2VyIHtcbiAgICBnZXQgZmllbGROYW1lKCkge3JldHVybiAnY3VycmVudFBhZ2VTaXplJ31cbn1cbmV4cG9ydCBjbGFzcyBUb2dnbGVTaWRlYmFyTGVmdEFjdGlvblJlZHVjZXIgZXh0ZW5kcyBGYWxzZVJlZHVjZXIge1xuICAgIGdldCBmaWVsZE5hbWUoKSB7cmV0dXJuICdoaWRlU2lkZWJhckxlZnQnfVxufVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVNpZGViYXJSaWdodEFjdGlvblJlZHVjZXIgZXh0ZW5kcyBUcnVlUmVkdWNlciB7XG4gICAgZ2V0IGZpZWxkTmFtZSgpIHtyZXR1cm4gJ2hpZGVTaWRlYmFyUmlnaHQnfVxufVxuZXhwb3J0IGNsYXNzIEFwaVN1Y2Nlc3NMb2FkUGFnZUluZm9BY3Rpb25SZWR1Y2VyIGV4dGVuZHMgUmVkdWNlciB7XG4gICAgZ2V0IGZpZWxkTmFtZSgpIHtyZXR1cm4gJ3BhZ2VJbmZvJ31cbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiB7YXBwOiAnJywgbWVudXM6IFtdfX1cbiAgICBub3JtYWxpemUoYWN0aW9uKSB7cmV0dXJuIGFjdGlvbi5kYXRhLmJvZHl9XG59XG4iLCJleHBvcnRzLm9uUm91dGVFbnRlcmVkID0gcmVxdWlyZSgnLi9vblJvdXRlRW50ZXJlZCcpLmRlZmF1bHRcbmV4cG9ydHMub25Sb3V0ZUNoYW5nZWQgPSByZXF1aXJlKCcuL29uUm91dGVDaGFuZ2VkJykuZGVmYXVsdFxuIiwiaW1wb3J0IHtjb29raWV9IGZyb20gJy4uLy4uL2NvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICBjb29raWUudmFsdWUoJ3JvdXRlX2NoYW5nZWQnLCB7cHJldiwgbmV4dH0pXG4gICAgZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JvdXRlX2NoYW5nZWQnLCB7ZGV0YWlsOiB7cHJldiwgbmV4dH19KSlcbn1cbiIsImltcG9ydCB7Y29va2llfSBmcm9tICcuLi8uLi9jb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihyb3V0ZSwgcmVwbGFjZSkge1xuICAgIGNvb2tpZS52YWx1ZSgncm91dGVfZW50ZXJlZCcsIHtyb3V0ZSwgcmVwbGFjZX0pXG4gICAgZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JvdXRlX2VudGVyZWQnLCB7ZGV0YWlsOiB7cm91dGUsIHJlcGxhY2V9fSkpXG59XG4iLCJpbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjb25zdCBXSU5ET1cgPSB7XG4gICAgY29uZmlndXJhdGlvbjoge1xuICAgICAgICBlbnY6ICdtb2NrJyxcbiAgICAgICAgc2hvd0RldlRvb2w6IGZhbHNlLFxuICAgICAgICBnZXRFbnY6IGZ1bmN0aW9uKCkge3JldHVyblxuICAgICAgICAgICAgd2luZG93ICE9IHVuZGVmaW5lZCAmJiB3aW5kb3cuY29uZmlndXJhdGlvbiAmJiB3aW5kb3cuY29uZmlndXJhdGlvbi5lbnYgP1xuICAgICAgICAgICAgd2luZG93LmNvbmZpZ3VyYXRpb24uZW52IDogdGhpcy5lbnZcbiAgICAgICAgfSxcbiAgICAgICAgaXNEZWJ1ZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZW52ID0gdGhpcy5nZXRFbnYoKVxuICAgICAgICAgICAgcmV0dXJuIGVudiA/IGVudiA9PSAnbW9jaycgfHwgZW52ID09ICdkZXYnIDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBpc01vY2s6IGZ1bmN0aW9uKCkge3JldHVybiB0aGlzLmdldEVudigpID09ICdtb2NrJ30sXG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBXSU5ET1cuY29uZmlndXJhdGlvblxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XG4gICAgY29uZmlndXJhdGlvbiA9IHt9XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGZvcih2YXIgaT0wO2kgPCBhcmd1bWVudHMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnID0gYXJndW1lbnRzW2ldXG4gICAgICAgICAgICB1dGlsLmFzc2lnbihXSU5ET1cuY29uZmlndXJhdGlvbiwgY29uZmlnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IFdJTkRPVy5jb25maWd1cmF0aW9uXG4gICAgfVxuICAgIGFsbCgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuY29uZmlndXJhdGlvbi5pc0RlYnVnKCkpIGNvbnNvbGUubG9nKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZURldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMnXG5pbXBvcnQgTG9nTW9uaXRvciBmcm9tICdyZWR1eC1kZXZ0b29scy1sb2ctbW9uaXRvcidcbmltcG9ydCBEb2NrTW9uaXRvciBmcm9tICdyZWR1eC1kZXZ0b29scy1kb2NrLW1vbml0b3InXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURldlRvb2xzKFxuICAgIDxEb2NrTW9uaXRvciB0b2dnbGVWaXNpYmlsaXR5S2V5PVwiY3RybC1oXCJcbiAgICAgICAgICAgICAgICAgY2hhbmdlUG9zaXRpb25LZXk9XCJjdHJsLXdcIj5cbiAgICAgICAgICAgICAgICAgPExvZ01vbml0b3IgLz5cbiAgICA8L0RvY2tNb25pdG9yPlxuKVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHdoZW4gZnJvbSAnd2hlbidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3N5bmMtcmVxdWVzdCdcbmltcG9ydCB7Y29uZmlndXJhdGlvbn0gZnJvbSAnLi9Db25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJFUVVFU1Qge1xuICAgIGdldCBkZWZhdWx0SGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfVxuICAgIGdldCBwYXlsb2FkKCkge3JldHVybiB0aGlzLl9fb3B0aW9ucy5kYXRhfVxuICAgIGdldE9wdGlvbnMoKSB7cmV0dXJuIHRoaXMuX19vcHRpb25zfVxuXG4gICAgY29uc3RydWN0b3IodXJsLCBtZXRob2QpIHtcbiAgICAgICAgbWV0aG9kID0gbWV0aG9kID8gbWV0aG9kLnRvTG93ZXJDYXNlKCkgOiAnZ2V0J1xuICAgICAgICB0aGlzLl9fb3B0aW9ucyA9IHt1cmwsIG1ldGhvZH1cbiAgICAgICAgdGhpcy5oZWFkZXJzKHt9KVxuICAgIH1cbiAgICBleGVjdXRlID0gKCkgPT4gdGhpcy5leGUgPSB3aGVuKGF4aW9zKHRoaXMuX19vcHRpb25zKSlcbiAgICBvcHRpb24gPSAobiwgdikgPT4ge1xuICAgICAgICB0aGlzLl9fb3B0aW9uc1tuXSA9IHZcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgaGVhZGVycyA9IChoZWFkZXJzKSA9PiB0aGlzLm9wdGlvbignaGVhZGVycycsIGFzc2lnbih0aGlzLmRlZmF1bHRIZWFkZXJzLCBoZWFkZXJzKSlcbiAgICB1cmwgPSAodXJsKSA9PiB0aGlzLm9wdGlvbigndXJsJywgdXJsKVxuICAgIGRhdGEgPSAoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLm9wdGlvbignZGF0YScsIGRhdGEpXG4gICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy5tZXRob2QgPT0gJ2dldCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX19vcHRpb25zLnVybFxuICAgICAgICAgICAgdGhpcy5vcHRpb24oJ3VybCcsIHRoaXMuYnVpbGRVcmwodXJsLCB0aGlzLmJ1aWxkUXVlcnkoZGF0YSkpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGJ1aWxkVXJsID0gKHVybCwgcXVlcnkpID0+IHVybC5pbmRleE9mKCc/JykgPj0gMCA/IGAke3VybH0mJHtxdWVyeX1gIDogYCR7dXJsfT8ke3F1ZXJ5fWBcbiAgICBidWlsZFF1ZXJ5ID0gKGpzb24pID0+IGpzb24gPyBPYmplY3Qua2V5cyhqc29uKS5tYXAoayA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoayl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGpzb25ba10gPyBqc29uW2tdIDogJycpfWApLmpvaW4oJyYnKSA6ICcnXG5cbiAgICBfX2JlZm9yZSA9IFtdXG4gICAgX19hZnRlciA9IFtdXG4gICAgX19zdWNjZXNzID0gW11cbiAgICBfX2ZhaWx1cmUgPSBbXVxuICAgIF9fcnVuID0gKHBheWxvYWQsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgYXJncy5tYXAoZm4gPT4gZm4ocGF5bG9hZCkpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGJlZm9yZSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHRoaXMuX19iZWZvcmUgPSBhcmdzXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGFmdGVyID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdGhpcy5fX2FmdGVyID0gYXJnc1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBzdWNjZXNzID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdGhpcy5fX3N1Y2Nlc3MgPSBhcmdzXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGZhaWx1cmUgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICB0aGlzLl9fZmFpbHVyZSA9IGFyZ3NcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgcnVuID0gKHN5bmMpID0+IHN5bmMgPyB0aGlzLnN5bmMoKSA6IHRoaXMuYXN5bmMoKVxuICAgIGFzeW5jID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3J1bih1bmRlZmluZWQsIC4uLnRoaXMuX19iZWZvcmUpXG4gICAgICAgIC5leGVjdXRlKClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRyeSB7dGhpcy5fX3J1bihyZXMsIC4uLnRoaXMuX19zdWNjZXNzKX0gY2F0Y2goZSkge2NvbnNvbGUuZXJyb3IoJ3JlcXVlc3Q6c3VjY2VzcycsIGUpfVxuICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2gocmVzID0+IHtcbiAgICAgICAgICAgIHRyeSB7dGhpcy5fX3J1bihyZXMsIC4uLnRoaXMuX19mYWlsdXJlKX0gY2F0Y2goZSkge2NvbnNvbGUuZXJyb3IoJ3JlcXVlc3Q6ZmFpbHVyZScsIGUpfVxuICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICB0cnkge3RoaXMuX19ydW4odW5kZWZpbmVkLCAuLi50aGlzLl9fYWZ0ZXIpfSBjYXRjaChlKSB7Y29uc29sZS5lcnJvcigncmVxdWVzdDphZnRlcicsIGUpfVxuICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICB9KVxuICAgIH1cbiAgICBzeW5jID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSByZXF1ZXN0KHRoaXMuX19vcHRpb25zLm1ldGhvZCwgdGhpcy5fX29wdGlvbnMudXJsLCBhc3NpZ24oe30sIHRoaXMuX19vcHRpb25zLCB7XG4gICAgICAgICAgICBqc29uOiB0aGlzLl9fb3B0aW9ucy5kYXRhXG4gICAgICAgIH0pKVxuICAgICAgICB0cnkge3Jlcy5kYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgndXRmOCcpKX1cbiAgICAgICAgY2F0Y2goZSkge3Jlcy5kYXRhID0gbnVsbH1cbiAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlIDwgMzAwKSB7XG4gICAgICAgICAgICB0cnkge3RoaXMuX19ydW4ocmVzLCAuLi50aGlzLl9fc3VjY2Vzcyl9IGNhdGNoKGUpIHtjb25zb2xlLmxvZygncmVxdWVzdDpzdWNjZXNzJywgZSl9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cnkge3RoaXMuX19ydW4ocmVzLCAuLi50aGlzLl9fZmFpbHVyZSl9IGNhdGNoKGUpIHtjb25zb2xlLmxvZygncmVxdWVzdDpmYWlsdXJlJywgZSl9XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHt0aGlzLl9fcnVuKHVuZGVmaW5lZCwgLi4udGhpcy5fX2FmdGVyKX0gY2F0Y2goZSkge2NvbnNvbGUubG9nKCdyZXF1ZXN0OmFmdGVyJywgZSl9XG4gICAgICAgIHJldHVybiByZXNcbiAgICB9XG59XG4iLCJpbXBvcnQgY29va2llIGZyb20gJy4vY29va2llJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyUHJvZmlsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubG9hZEZyb21Db29raWUoKVxuICAgIH1cbiAgICBsb2FkRnJvbUNvb2tpZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gY29va2llLnJlYWQoJ3VzZXInKVxuICAgIH1cbiAgICBzYXZlVG9Db29raWUgPSAoKSA9PiB7XG4gICAgICAgIGNvb2tpZS52YWx1ZSgndXNlcicsIHRoaXMuZGF0YSlcbiAgICB9XG4gICAgbG9hZCA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmICghZGF0YSkgdGhpcy51bmxvYWQoKVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgICAgICAgdGhpcy5zYXZlVG9Db29raWUoKVxuICAgICAgICB9XG4gICAgfVxuICAgIHVubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29va2llLnJlbW92ZSgndXNlcicpXG4gICAgICAgIHRoaXMuZGF0YSA9IG51bGxcbiAgICB9XG4gICAgdXBkYXRlID0gKGZpZWxkLCB2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGFbZmllbGRdID0gdmFsdWVcbiAgICAgICAgdGhpcy5zYXZlVG9Db29raWUoKVxuICAgIH1cbiAgICBnZXQgaXNMb2dnZWQoKSB7cmV0dXJuIHRoaXMuZGF0YSA/IHRydWUgOiBmYWxzZX1cbiAgICBnZXQgZW1haWwoKSB7cmV0dXJuIHRoaXMuZGF0YS5lbWFpbH1cbiAgICBzZXQgZW1haWwodikge3RoaXMudXBkYXRlKCdlbWFpbCcsIHYpfVxuICAgIGdldCBmaXJzdE5hbWUoKSB7cmV0dXJuIHRoaXMuZGF0YS5maXJzdE5hbWV9XG4gICAgc2V0IGZpcnN0TmFtZSh2KSB7dGhpcy51cGRhdGUoJ2ZpcnN0TmFtZScsIHYpfVxuICAgIGdldCBsYXN0TmFtZSgpIHtyZXR1cm4gdGhpcy5kYXRhLmxhc3ROYW1lfVxuICAgIHNldCBsYXN0TmFtZSh2KSB7dGhpcy51cGRhdGUoJ2xhc3ROYW1lJywgdil9XG4gICAgZ2V0IGRpc3BsYXlOYW1lKCkge3JldHVybiB0aGlzLmRhdGEuZGlzcGxheU5hbWV9XG4gICAgc2V0IGRpc3BsYXlOYW1lKHYpIHt0aGlzLnNhdmUoJ2Rpc3BsYXlOYW1lJywgdil9XG4gICAgZ2V0IG9jY3VwYXRpb24oKSB7cmV0dXJuIHRoaXMuZGF0YS5vY2N1cGF0aW9ufVxuICAgIHNldCBvY2N1cGF0aW9uKHYpIHt0aGlzLnNhdmUoJ29jY3VwYXRpb24nLCB2KX1cbiAgICBnZXQgZGVwYXJ0bWVudCgpIHtyZXR1cm4gdGhpcy5kYXRhLmRlcGFydG1lbnR9XG4gICAgc2V0IGRlcGFydG1lbnQodikge3RoaXMuc2F2ZSgnZGVwYXJ0bWVudCcsIHYpfVxuICAgIGdldCBsYXN0TG9naW4oKSB7cmV0dXJuIHRoaXMuZGF0YS5sYXN0TG9naW59XG4gICAgc2V0IGxhc3RMb2dpbih2KSB7dGhpcy5zYXZlKCdsYXN0TG9naW4nLCB2KX1cbn1cbiIsImltcG9ydCBjb29raWUgZnJvbSAncmVhY3QtY29va2llJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuXG5jbGFzcyBDb29raWUge1xuICAgIHZhbHVlID0gKG5hbWUsIHZhbHVlLCBvcHRzKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29va2llLmxvYWQobmFtZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29va2llLnJlbW92ZShuYW1lLCBhc3NpZ24oeyBwYXRoOiAnLycgfSwgb3B0cykpXG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY29va2llX2RlbGV0ZWQnLCB7ZGV0YWlsOiB7bmFtZX19KSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvb2tpZS5zYXZlKG5hbWUsIHZhbHVlLCBhc3NpZ24oeyBwYXRoOiAnLycgfSwgb3B0cykpXG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY29va2llX3VwZGF0ZWQnLCB7ZGV0YWlsOiB7bmFtZSwgdmFsdWV9fSkpXG4gICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZSA9IChuYW1lLCBvcHRzKSA9PiB0aGlzLnZhbHVlKG5hbWUsIG51bGwsIG9wdHMpXG4gICAgcmVhZCA9IChuYW1lKSA9PiB0aGlzLnZhbHVlKG5hbWUpXG59XG5leHBvcnQgZGVmYXVsdCBuZXcgQ29va2llKClcbiIsImV4cG9ydHMuY29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vQ29uZmlnJykuV0lORE9XLmNvbmZpZ3VyYXRpb25cbmV4cG9ydHMuY29va2llID0gcmVxdWlyZSgnLi9jb29raWUnKS5kZWZhdWx0XG5leHBvcnRzLlJFUVVFU1QgPSByZXF1aXJlKCcuL1JlcXVlc3QnKS5kZWZhdWx0XG5leHBvcnRzLlVzZXJQcm9maWxlID0gcmVxdWlyZSgnLi9Vc2VyUHJvZmlsZScpLmRlZmF1bHRcbmV4cG9ydHMudXNlciA9IHJlcXVpcmUoJy4vdXNlcicpLmRlZmF1bHRcbmV4cG9ydHMudXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpLmRlZmF1bHRcbmV4cG9ydHMuRGV2VG9vbHMgPSByZXF1aXJlKCcuL0RldlRvb2xzJykuZGVmYXVsdFxuIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWwnXG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9hY3Rpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihrbGFzcykge1xuICAgICAgICB0aGlzLl9fa2xhc3MgPSBrbGFzc1xuICAgICAgICB0aGlzLmdldERlZmF1bHRQcm9wcyA9IHRoaXMuZ2V0RGVmYXVsdFByb3BzLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5nZXRBY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zLmJpbmQodGhpcylcbiAgICB9XG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge3JldHVybiB7fX1cbiAgICBnZXRBY3Rpb25zKGRpc3BhdGNoLCBvd25Qcm9wcywgLi4uYXJncykge3JldHVybiB7fX1cbiAgICByZWdpc3RlckFjdGlvbnMoZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnMoZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKVxuICAgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5tYXAoayA9PiBBY3Rpb24ucHV0KGFjdGlvbnNba10sIGRpc3BhdGNoLCBvd25Qcm9wcywgLi4uYXJncykpXG4gICAgfVxuICAgIGdldCB1dGlsKCkge3JldHVybiB1dGlsfVxuICAgIGdldCBtYXBTdGF0ZVRvUHJvcHMoKSB7cmV0dXJuIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB0aGlzLnV0aWwuYXNzaWduKHt9LCB0aGlzLmdldERlZmF1bHRQcm9wcylcbiAgICAgICAgaWYgKHN0YXRlKSBPYmplY3Qua2V5cyhzdGF0ZSkubWFwKGsgPT4gdGhpcy51dGlsLmFzc2lnbihuZXdQcm9wcywgc3RhdGVba10pKVxuICAgICAgICByZXR1cm4gbmV3UHJvcHNcbiAgICB9fVxuICAgIGdldCBtYXBEaXNwYXRjaFRvUHJvcHMoKSB7cmV0dXJuIChkaXNwYXRjaCwgb3duUHJvcHMsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckFjdGlvbnMoZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKVxuICAgICAgICByZXR1cm4gQWN0aW9uLmFjdGlvbnMoKVxuICAgIH19XG4gICAgZ2V0IGtsYXNzKCkge1xuICAgICAgICByZXR1cm4gY29ubmVjdCh0aGlzLm1hcFN0YXRlVG9Qcm9wcywgdGhpcy51dGlsLmFzc2lnbih0aGlzLm1hcERpc3BhdGNoVG9Qcm9wcywge1xuICAgICAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uKGRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKC4uLmFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSh0aGlzLl9fa2xhc3MpXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVN0b3JlKHJlZHVjZXIpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgICAgICAgICAgY29tYmluZVJlZHVjZXJzKHJlZHVjZXIpLFxuICAgICAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKVxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQgbWlkZGxld2FyZXMsIHtydW5TYWdhfSBmcm9tICcuL21pZGRsZXdhcmVzJ1xuaW1wb3J0IHt1dGlsfSBmcm9tICcuLidcblxubGV0IHN0b3JlID0gbnVsbFxuZXhwb3J0IGNvbnN0IGdldFN0b3JlID0gKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUpID0+IHtcbiAgICBpZiAodXRpbC5pc0VtcHR5KHN0b3JlKSAmJiByZWR1Y2Vycykge1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm1lcnMgPSB7fVxuICAgICAgICBpZiAodHlwZW9mIHJlZHVjZXJzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSBuZXcgcmVkdWNlcnMoKVxuICAgICAgICAgICAgdHJhbnNmb3JtZXJzW3JlZHVjZXJzLm5hbWVdID0gcmVkdWNlci50cmFuc2Zvcm0uYmluZChyZWR1Y2VyKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yKHZhciBqIGluIHJlZHVjZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1tqXSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSBuZXcgcmVkdWNlcnNbal0oKVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lcnNbcmVkdWNlcnNbal0ubmFtZV0gPSByZWR1Y2VyLnRyYW5zZm9ybS5iaW5kKHJlZHVjZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICAgICAgICBjb21iaW5lUmVkdWNlcnModHJhbnNmb3JtZXJzKSxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgICAgICAgIG1pZGRsZXdhcmVzXG4gICAgICAgIClcbiAgICAgICAgc3RvcmUucnVuU2FnYSA9IHJ1blNhZ2FcbiAgICAgICAgc3RvcmUuY2xvc2UgPSAoKSA9PiBzdG9yZS5kaXNwYXRjaChFTkQpXG4gICAgfVxuICAgIHJldHVybiBzdG9yZVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxuIiwiaW1wb3J0IHt1dGlsLCBjb25maWd1cmF0aW9ufSBmcm9tICcuLi8uLidcbmltcG9ydCB7Z2V0U3RvcmV9IGZyb20gJy4uL1N0b3JlJ1xuXG5sZXQgX19kaXNwYXRjaGVyID0gbnVsbFxuY29uc3QgX19hY3Rpb25zID0ge31cblxuZnVuY3Rpb24gbm9ybWFsaXplKG5hbWUsIHBheWxvYWQsIC4uLmFyZ3MpIHtcbiAgICBpZiAoIXBheWxvYWQgfHwgIXBheWxvYWQuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSlcbiAgICAgICAgcGF5bG9hZCA9IHV0aWwuYXNzaWduKHt9LCB7ZGF0YTogcGF5bG9hZH0pXG4gICAgcmV0dXJuIHV0aWwuYXNzaWduKHtleHRyYTogYXJnc30sIHBheWxvYWQsIHt0eXBlOiBuYW1lfSlcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNlYXJjaChuYW1lLCByZXN1bHRzLCAuLi5hcmdzKSB7cmV0dXJuIHtzZWFyY2g6IHJlc3VsdHMsIHR5cGU6IG5hbWV9fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24ge1xuICAgIGRpc3BhdGNoYWJsZSA9IHRydWVcbiAgICBkZWJ1ZyA9IGZhbHNlXG4gICAgZ2V0IG5hbWUoKSB7cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZX1cbiAgICBnZXQgY29uZmlndXJhdGlvbigpIHtyZXR1cm4gY29uZmlndXJhdGlvbn1cbiAgICBnZXQgdXRpbCgpIHtyZXR1cm4gdXRpbH1cbiAgICBnZXQgc3RvcmUoKSB7cmV0dXJuIGdldFN0b3JlKCl9XG4gICAgZ2V0IHN0YXRlKCkge3JldHVybiB0aGlzLmdldFN0YXRlKHRoaXMubmFtZSl9XG4gICAgZ2V0IGRpc3BhdGNoZXIoKSB7cmV0dXJuIF9fZGlzcGF0Y2hlcn1cbiAgICBnZXQgZm4oKSB7cmV0dXJuIHRoaXMuX19mbn1cblxuICAgIHByZVByb2Nlc3MocGF5bG9hZCwgLi4uYXJncykge31cbiAgICBiZWZvcmVEaXNwYXRjaChwYXlsb2FkLCAuLi5hcmdzKSB7fVxuICAgIG5vcm1hbGl6ZShwYXlsb2FkLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmICghcGF5bG9hZCB8fCAhcGF5bG9hZC5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpKVxuICAgICAgICAgICAgcGF5bG9hZCA9IHRoaXMudXRpbC5hc3NpZ24oe30sIHtkYXRhOiBwYXlsb2FkfSlcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZSh0aGlzLm5hbWUsIHBheWxvYWQsIC4uLmFyZ3MpXG4gICAgfVxuICAgIG5vcm1hbGl6ZVNlYXJjaChyZXN1bHRzKSB7cmV0dXJuIG5vcm1hbGl6ZVNlYXJjaCh0aGlzLm5hbWUsIC4uLmFyZ3VtZW50cyl9XG4gICAgZ2V0U3RhdGUobmFtZSkge3JldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKClbYCR7bmFtZX1SZWR1Y2VyYF19XG4gICAgZ2V0U3RhdGVzKCkge1xuICAgICAgY29uc3Qgc3RhdGVzID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpXG4gICAgICBjb25zdCBuZXdTdGF0ZXMgPSB7fVxuICAgICAgT2JqZWN0LmtleXMoc3RhdGVzKS5tYXAoayA9PiB0aGlzLnV0aWwuYXNzaWduKG5ld1N0YXRlcywgc3RhdGVzW2tdKSlcbiAgICAgIHJldHVybiBuZXdTdGF0ZXNcbiAgICB9XG4gICAgZGVidWdGbihwYXlsb2FkLCAuLi5hcmdzKSB7fVxuICAgIGRpc3BhdGNoKHBheWxvYWQsIC4uLmFyZ3MpIHt0aGlzLmRpc3BhdGNoZXIocGF5bG9hZCwgLi4uYXJncyl9XG4gICAgZ2V0Rm4oZGlzcGF0Y2gsIG93blByb3BzLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpc1xuICAgICAgICBpZiAoIV9fZGlzcGF0Y2hlcikgX19kaXNwYXRjaGVyID0gZGlzcGF0Y2hcbiAgICAgICAgaWYgKCF0aGlzLl9fZm4pIHRoaXMuX19mbiA9IChmdW5jdGlvbihwYXlsb2FkLCAuLi5hcmd1cykge1xuICAgICAgICAgICAgbWUucHJlUHJvY2VzcyhwYXlsb2FkLCAuLi5hcmd1cylcbiAgICAgICAgICAgIGlmIChtZS5iZWZvcmVEaXNwYXRjaChwYXlsb2FkLCAuLi5hcmd1cykgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lLmRpc3BhdGNoYWJsZSkgbWUuZGlzcGF0Y2gobWUubm9ybWFsaXplKHBheWxvYWQsIC4uLmFyZ3VzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZS5kZWJ1ZykgbWUuZGVidWdGbihwYXlsb2FkLCAuLi5hcmd1cylcbiAgICAgICAgfSkuYmluZCh0aGlzKVxuICAgICAgICByZXR1cm4gdGhpcy5fX2ZuXG4gICAgfVxuICAgIHN0YXRpYyBhY3Rpb25zKCkge1xuICAgICAgICBjb25zdCBycyA9IHt9XG4gICAgICAgIE9iamVjdC5rZXlzKF9fYWN0aW9ucykubWFwKGsgPT4gcnNba10gPSBfX2FjdGlvbnNba10uZm4pXG4gICAgICAgIHJldHVybiByc1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0TmFtZShrbGFzcykge2lmIChrbGFzcykgcmV0dXJuIHR5cGVvZiBrbGFzcyA9PSAnc3RyaW5nJyA/IGtsYXNzIDoga2xhc3MubmFtZX1cbiAgICBzdGF0aWMgZXhlY3V0ZShrbGFzcywgcGF5bG9hZCwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBuYW1lID0gQWN0aW9uLmdldE5hbWUoa2xhc3MpXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IEFjdGlvbi5mbihuYW1lKVxuICAgICAgICBpZiAoYWN0aW9uKSBhY3Rpb24ocGF5bG9hZCwgLi4uYXJncylcbiAgICAgICAgZWxzZSBpZihfX2Rpc3BhdGNoZXIpIHtcbiAgICAgICAgICBfX2Rpc3BhdGNoZXIobm9ybWFsaXplKGAke25hbWV9UmVkdWNlcmAsIHBheWxvYWQsIC4uLmFyZ3MpKVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBhY3Rpb24oa2xhc3MpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IEFjdGlvbi5nZXROYW1lKGtsYXNzKVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoX19hY3Rpb25zKS5pbmRleE9mKGBleGVjdXRlJHtuYW1lfWApID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiBfX2FjdGlvbnNbYGV4ZWN1dGUke25hbWV9YF1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBzdGF0aWMgZm4oa2xhc3MpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gQWN0aW9uLmFjdGlvbihrbGFzcylcbiAgICAgICAgaWYgKGFjdGlvbikgcmV0dXJuIGFjdGlvbi5mblxuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2Uoa2xhc3MpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gQWN0aW9uLmFjdGlvbihrbGFzcylcbiAgICAgICAgaWYgKGFjdGlvbikgcmV0dXJuIGFjdGlvbi5pbnN0YW5jZVxuICAgIH1cbiAgICBzdGF0aWMgcHV0KGtsYXNzLCBkaXNwYXRjaCwgb3duUHJvcHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCFfX2Rpc3BhdGNoZXIpIF9fZGlzcGF0Y2hlciA9IGRpc3BhdGNoXG4gICAgICAgIGNvbnN0IG5hbWUgPSBBY3Rpb24uZ2V0TmFtZShrbGFzcylcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBBY3Rpb24uYWN0aW9uKG5hbWUpXG4gICAgICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IGtsYXNzKClcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuaXNBcGlBY3Rpb24pIGluc3RhbmNlLnJ1blNhZ2EoKVxuICAgICAgICAgICAgICAgIF9fYWN0aW9uc1tgZXhlY3V0ZSR7bmFtZX1gXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgICAgICAgICBmbjogaW5zdGFuY2UuZ2V0Rm4oX19kaXNwYXRjaGVyLCBvd25Qcm9wcywgLi4uYXJncyksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtwdXQsIHRha2VMYXRlc3R9IGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHJlcXVlc3QgPSBudWxsXG4gICAgc3VjY2Vzc0FjdGlvbnMgPSBudWxsXG4gICAgZmFpbHVyZUFjdGlvbnMgPSBudWxsXG4gICAgZ2V0IGlzQXBpQWN0aW9uKCkge3JldHVybiB0cnVlfVxuICAgIGdldCBhcGlTdWNjZXNzU3RhdGUoKSB7cmV0dXJuIHRoaXMuZ2V0U3RhdGUoYEFwaVN1Y2Nlc3Mke3RoaXMubmFtZX1gKX1cblxuICAgIHByZVByb2Nlc3MocGF5bG9hZCwgLi4uYXJncykge1xuICAgICAgICB0aGlzLnJlcXVlc3QgPSB0aGlzLmxvYWRSZXF1ZXN0KHBheWxvYWQsIC4uLmFyZ3MpXG4gICAgICAgIHRoaXMuY2FjaGUgPSB0aGlzLmxvYWRDYWNoZShwYXlsb2FkLCAuLi5hcmdzKVxuICAgICAgICBsZXQgY2FsbGJhY2sgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB9XG4gICAgbG9hZFJlcXVlc3QocGF5bG9hZCwgLi4uYXJncykge3Rocm93IGAke3RoaXMubmFtZX06IE5vIGltcGxlbWVudGF0aW9uIG9mIGZ1bmN0aW9uIGxvYWRSZXF1ZXN0YH1cbiAgICBsb2FkQ2FjaGUocGF5bG9hZCwgLi4uYXJncykge3JldHVybiB1bmRlZmluZWR9XG4gICAgc2hvdWxkQ2FsbEFwaShwYXlsb2FkLCAuLi5hcmdzKSB7cmV0dXJuIHRydWV9XG4gICAgcnVuU2FnYSgpIHt0aGlzLnN0b3JlLnJ1blNhZ2EodGhpcy5zYWdhLCB0aGlzKX1cbiAgICBzYWdhID0gZnVuY3Rpb24qKG1lKSB7XG4gICAgICB5aWVsZCB0YWtlTGF0ZXN0KG1lLm5hbWUsIGZ1bmN0aW9uKihhY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCB7Y2FjaGUsIHJlcXVlc3QsIG5hbWUsIHN1Y2Nlc3NBY3Rpb25zLCBmYWlsdXJlQWN0aW9uc30gPSBtZVxuICAgICAgICAgIGZ1bmN0aW9uKiBzdWNjZXNzKHJlcywgcmVxdWVzdCkge1xuICAgICAgICAgICAgbGV0IGFjdGlvbnMgPSBbYEFwaVN1Y2Nlc3Mke25hbWV9YF0uY29uY2F0KHN1Y2Nlc3NBY3Rpb25zKVxuICAgICAgICAgICAgYWN0aW9ucy5tYXAoYWN0aW9uID0+IGFjdGlvbiA/IEFjdGlvbi5leGVjdXRlKGFjdGlvbiwgcmVzLCByZXF1ZXN0LnBheWxvYWQpIDogZmFsc2UpXG4gICAgICAgICAgICBpZiAobWUuY2FsbGJhY2spIG1lLmNhbGxiYWNrKHJlcywgcmVxdWVzdC5wYXlsb2FkKVxuICAgICAgICAgIH1cbiAgICAgICAgICBmdW5jdGlvbiogZmFpbHVyZShyZXMsIHJlcXVlc3QpIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb25zID0gW2BBcGlGYWlsdXJlJHtuYW1lfWBdLmNvbmNhdChmYWlsdXJlQWN0aW9ucylcbiAgICAgICAgICAgIGFjdGlvbnMubWFwKGFjdGlvbiA9PiBhY3Rpb24gPyBBY3Rpb24uZXhlY3V0ZShhY3Rpb24sIHJlcywgcmVxdWVzdC5wYXlsb2FkKSA6IGZhbHNlKVxuICAgICAgICAgICAgaWYgKG1lLmNhbGxiYWNrKSBtZS5jYWxsYmFjayhyZXMsIHJlcXVlc3QucGF5bG9hZClcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHJlcyA9IHlpZWxkIGNhY2hlID8gY2FjaGUgOiByZXF1ZXN0LnJ1bigpXG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPCAzMDApIHlpZWxkIHN1Y2Nlc3MocmVzLCByZXF1ZXN0KVxuICAgICAgICAgIGVsc2UgeWllbGQgZmFpbHVyZShyZXMsIHJlcXVlc3QpXG4gICAgICB9KVxuICAgIH1cbn1cbiIsImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3h5QWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBkaXNwYXRjaGFibGUgPSBmYWxzZVxuICAgIHByb3h5Q2xhc3NlcyA9IG51bGxcbiAgICBwcm94eU5vcm1hbGl6ZShzdGF0ZSwgcGF5bG9hZCwgLi4uYXJncykge3JldHVybiBwYXlsb2FkfVxuICAgIGJlZm9yZURpc3BhdGNoKHBheWxvYWQsIC4uLmFyZ3MpIHtcbiAgICAgICAgW10uY29uY2F0KHRoaXMucHJveHlDbGFzc2VzKS5tYXAoXG4gICAgICAgICAgICBrbGFzcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBBY3Rpb24uZ2V0TmFtZShrbGFzcylcbiAgICAgICAgICAgICAgICBBY3Rpb24uZXhlY3V0ZShuYW1lLCB0aGlzLnByb3h5Tm9ybWFsaXplKHRoaXMuZ2V0U3RhdGUobmFtZSksIHBheWxvYWQsIC4uLmFyZ3MpLCAuLi5hcmdzKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFByb3h5QWN0aW9uIGZyb20gJy4vUHJveHlBY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEFjdGlvbiBleHRlbmRzIFByb3h5QWN0aW9uIHtcbiAgICBwcm94eU5vcm1hbGl6ZShzdGF0ZSwgcGF5bG9hZCwgLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hGbihzdGF0ZSwgcGF5bG9hZCwgLi4uYXJncylcbiAgICB9XG4gICAgc2VhcmNoRm4oc3RhdGUsIHBheWxvYWQsIC4uLmFyZ3MpIHtyZXR1cm4gc3RhdGV9XG59XG4iLCJleHBvcnRzLkFjdGlvbiA9IHJlcXVpcmUoJy4vQWN0aW9uJykuZGVmYXVsdFxuZXhwb3J0cy5BcGlBY3Rpb24gPSByZXF1aXJlKCcuL0FwaUFjdGlvbicpLmRlZmF1bHRcbmV4cG9ydHMuUHJveHlBY3Rpb24gPSByZXF1aXJlKCcuL1Byb3h5QWN0aW9uJykuZGVmYXVsdFxuZXhwb3J0cy5TZWFyY2hBY3Rpb24gPSByZXF1aXJlKCcuL1NlYXJjaEFjdGlvbicpLmRlZmF1bHRcbiIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0ICogYXMgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2VycydcbmV4cG9ydHMuQWN0aW9uID0gYWN0aW9ucy5BY3Rpb25cbmV4cG9ydHMuQXBpQWN0aW9uID0gYWN0aW9ucy5BcGlBY3Rpb25cbmV4cG9ydHMuUHJveHlBY3Rpb24gPSBhY3Rpb25zLlByb3h5QWN0aW9uXG5leHBvcnRzLlNlYXJjaEFjdGlvbiA9IGFjdGlvbnMuU2VhcmNoQWN0aW9uXG5leHBvcnRzLkNvbm5lY3QgPSByZXF1aXJlKCcuL0Nvbm5lY3QnKS5kZWZhdWx0XG5leHBvcnRzLlJlZHVjZXIgPSByZWR1Y2Vycy5SZWR1Y2VyXG5leHBvcnRzLkNvbmZpZ1JlZHVjZXIgPSByZWR1Y2Vycy5Db25maWdSZWR1Y2VyXG5leHBvcnRzLkNvb2tpZVJlZHVjZXIgPSByZWR1Y2Vycy5Db29raWVSZWR1Y2VyXG5leHBvcnRzLkZhbHNlUmVkdWNlciA9IHJlZHVjZXJzLkZhbHNlUmVkdWNlclxuZXhwb3J0cy5UcnVlUmVkdWNlciA9IHJlZHVjZXJzLlRydWVSZWR1Y2VyXG5leHBvcnRzLk51bGxSZWR1Y2VyID0gcmVkdWNlcnMuTnVsbFJlZHVjZXJcbmV4cG9ydHMuTGlzdFJlZHVjZXIgPSByZWR1Y2Vycy5MaXN0UmVkdWNlclxuZXhwb3J0cy5nZXRTdG9yZSA9IHJlcXVpcmUoJy4vU3RvcmUnKS5nZXRTdG9yZVxuIiwiaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNvbXBvc2V9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IF90aHVuayBmcm9tICcuL3RodW5rJ1xuaW1wb3J0IF9zYWdhIGZyb20gJy4vc2FnYSdcbmltcG9ydCBfbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJ1xuXG5pbXBvcnQge2NvbmZpZ3VyYXRpb24sIERldlRvb2xzfSBmcm9tICcuLi8uLidcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJhdGlvbi5pc0RlYnVnKCkgPyBjb21wb3NlKFxuICAgIGFwcGx5TWlkZGxld2FyZShcbiAgICAgICAgX3NhZ2EsXG4gICAgICAgIF90aHVuayxcbiAgICAgICAgLy8gX2xvZ2dlclxuICAgICksXG4gICAgRGV2VG9vbHMuaW5zdHJ1bWVudCgpXG4pIDogYXBwbHlNaWRkbGV3YXJlKFxuICAgIF9zYWdhLFxuICAgIF90aHVua1xuKVxuXG5leHBvcnQgY29uc3QgcnVuU2FnYSA9IF9zYWdhLnJ1blxuIiwiaW1wb3J0IHtjcmVhdGVMb2dnZXJ9IGZyb20gJ3JlZHV4LWxvZ2dlcidcblxuY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKClcbmV4cG9ydCBkZWZhdWx0IGxvZ2dlclxuIiwiaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXG5cbmNvbnN0IHNhZ2EgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXG5leHBvcnQgZGVmYXVsdCBzYWdhXG4iLCJpbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5cbmNvbnN0IF90aHVuayA9IHRodW5rXG5leHBvcnQgZGVmYXVsdCBfdGh1bmtcbiIsImltcG9ydCBSZWR1Y2VyIGZyb20gJy4vUmVkdWNlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnUmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbi51aVt0aGlzLmZpZWxkTmFtZV19XG4gICAgbm9ybWFsaXplKGFjdGlvbikge3JldHVybiBhY3Rpb24uZGF0YSA/IGFjdGlvbi5kYXRhIDogdGhpcy5jb25maWd1cmF0aW9uLnVpW3RoaXMuZmllbGROYW1lXX1cbn1cbiIsImltcG9ydCBSZWR1Y2VyIGZyb20gJy4vUmVkdWNlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llUmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7cmV0dXJuIHRoaXMudXRpbC5jb29raWUucmVhZCh0aGlzLmZpZWxkTmFtZSl9XG4gICAgZ2V0IHZhbHVlKCkge3JldHVybiB0aGlzLl9fdmFsdWV9XG4gICAgc2V0IHZhbHVlKHYpIHtcbiAgICAgIHRoaXMuX192YWx1ZSA9IHZcbiAgICAgIHRoaXMuc2V0Q29va2llKClcbiAgICB9XG4gICAgc2V0Q29va2llKCkge1xuICAgICAgdGhpcy51dGlsLmNvb2tpZS52YWx1ZSh0aGlzLmZpZWxkTmFtZSwgdGhpcy5fX3ZhbHVlW3RoaXMuZmllbGROYW1lXSlcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVkdWNlciBmcm9tICcuL1JlZHVjZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhbHNlUmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7cmV0dXJuIGZhbHNlfVxufVxuIiwiaW1wb3J0IFJlZHVjZXIgZnJvbSAnLi9SZWR1Y2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0UmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGlzTGlzdCA9IHRydWVcbiAgICBwcmltYXJ5S2V5ID0gJ2lkJ1xuICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7cmV0dXJuIHt9fVxuICAgIGdldCB2YWx1ZSgpIHtyZXR1cm4gdGhpcy5fX3ZhbHVlfVxuICAgIHNldCB2YWx1ZSh2KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdlt0aGlzLmZpZWxkTmFtZV1cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHZhbHVlW3RoaXMucHJpbWFyeUtleV1cbiAgICAgICAgICAgIHRoaXMuc3RhdGVbdGhpcy5maWVsZE5hbWVdW2lkXSA9IHZhbHVlXG4gICAgICAgICAgICB0aGlzLl9fdmFsdWUgPSB0aGlzLnV0aWwuYXNzaWduKHt9LCB0aGlzLnN0YXRlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fX3ZhbHVlID0gdGhpcy5zdGF0ZVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlZHVjZXIgZnJvbSAnLi9SZWR1Y2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdWxsUmVkdWNlciBleHRlbmRzIFJlZHVjZXIge1xuICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7cmV0dXJuIG51bGx9XG4gICAgbm9ybWFsaXplKGFjdGlvbikge3JldHVybiBudWxsfVxufVxuIiwiaW1wb3J0IHt1dGlsLCBjb25maWd1cmF0aW9ufSBmcm9tICcuLi8uLidcbmltcG9ydCB7Z2V0U3RvcmV9IGZyb20gJy4uL1N0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWR1Y2VyIHtcbiAgICBkZWJ1ZyA9IGZhbHNlXG4gICAgZ2V0IG5hbWUoKSB7cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZX1cbiAgICBnZXQgY29uZmlndXJhdGlvbigpIHtyZXR1cm4gY29uZmlndXJhdGlvbn1cbiAgICBnZXQgdXRpbCgpIHtyZXR1cm4gdXRpbH1cbiAgICBnZXQgc3RvcmUoKSB7cmV0dXJuIGdldFN0b3JlKCl9XG4gICAgZ2V0IHN0YXRlKCkge3JldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKClbdGhpcy5uYW1lXX1cblxuICAgIGdldCBmaWVsZE5hbWUoKSB7dGhyb3cgYCR7dGhpcy5uYW1lfTogTm8gZmllbGROYW1lYH1cbiAgICBnZXQgZGVmYXVsdFN0YXRlKCkge3JldHVybiB7XG4gICAgICAgIFt0aGlzLmZpZWxkTmFtZV06IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgICAgICBbYFNlYXJjaCR7dGhpcy5maWVsZE5hbWV9UmVzdWx0c2BdOiBudWxsXG4gICAgfX1cbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiBudWxsfVxuICAgIHRyYW5zZm9ybShzdGF0ZSA9IHRoaXMuZGVmYXVsdFN0YXRlLCBhY3Rpb24sIC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGAke2FjdGlvbi50eXBlfWAgPT0gdGhpcy5uYW1lXG4gICAgICAgIHx8IGAke2FjdGlvbi50eXBlfVJlZHVjZXJgID09IHRoaXMubmFtZVxuICAgICAgICB8fCBgU2VhcmNoJHthY3Rpb24udHlwZX1SZWR1Y2VyYCA9PSBgU2VhcmNoJHt0aGlzLm5hbWV9YFxuICAgICAgICAgICAgPyB0aGlzLm1hdGNoZWRUcmFuc2Zvcm0oc3RhdGUsIGFjdGlvbiwgLi4uYXJncylcbiAgICAgICAgICAgIDogdGhpcy5ub3RNYXRjaGVkVHJhbnNmb3JtKHN0YXRlLCBhY3Rpb24sIC4uLmFyZ3MpXG4gICAgfVxuICAgIG5vcm1hbGl6ZShhY3Rpb24pIHtyZXR1cm4gYWN0aW9uLmRhdGF9XG4gICAgbm9ybWFsaXplU2VhcmNoKGFjdGlvbikge3JldHVybiBhY3Rpb24uc2VhcmNofVxuICAgIGRlYnVnRm4oc3RhdGUsIGFjdGlvbiwgLi4uYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcmV2LXN0YXRlJywgc3RhdGUpXG4gICAgICAgIGNvbnNvbGUubG9nKCduZXh0LXN0YXRlJywgdGhpcy52YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2coJ2FjdGlvbicsIGFjdGlvbilcbiAgICAgICAgY29uc29sZS5sb2coJ2V4dHJhJywgLi4uYXJncylcbiAgICB9XG4gICAgbWF0Y2hlZFRyYW5zZm9ybShzdGF0ZSwgYWN0aW9uLCAuLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uXG4gICAgICAgIGlmIChhY3Rpb24uaGFzT3duUHJvcGVydHkoJ2RhdGEnKSkgdGhpcy52YWx1ZSA9IHtbdGhpcy5maWVsZE5hbWVdOiB0aGlzLm5vcm1hbGl6ZShhY3Rpb24pfVxuICAgICAgICBlbHNlIGlmIChhY3Rpb24uaGFzT3duUHJvcGVydHkoJ3NlYXJjaCcpKSB0aGlzLnZhbHVlID0ge1tgU2VhcmNoJHt0aGlzLmZpZWxkTmFtZX1SZXN1bHRzYF06IHRoaXMubm9ybWFsaXplU2VhcmNoKGFjdGlvbil9XG4gICAgICAgIGlmICh0aGlzLmRlYnVnKSB0aGlzLmRlYnVnRm4oc3RhdGUsIGFjdGlvbiwgLi4uYXJncylcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFN0YXRlLCBzdGF0ZSwgdGhpcy52YWx1ZSlcbiAgICB9XG4gICAgbm90TWF0Y2hlZFRyYW5zZm9ybShzdGF0ZSwgYWN0aW9uLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWR1Y2VyIGZyb20gJy4vUmVkdWNlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1ZVJlZHVjZXIgZXh0ZW5kcyBSZWR1Y2VyIHtcbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge3JldHVybiB0cnVlfVxufVxuIiwiZXhwb3J0cy5SZWR1Y2VyID0gcmVxdWlyZSgnLi9SZWR1Y2VyJykuZGVmYXVsdFxuZXhwb3J0cy5Db25maWdSZWR1Y2VyID0gcmVxdWlyZSgnLi9Db25maWdSZWR1Y2VyJykuZGVmYXVsdFxuZXhwb3J0cy5Db29raWVSZWR1Y2VyID0gcmVxdWlyZSgnLi9Db29raWVSZWR1Y2VyJykuZGVmYXVsdFxuZXhwb3J0cy5GYWxzZVJlZHVjZXIgPSByZXF1aXJlKCcuL0ZhbHNlUmVkdWNlcicpLmRlZmF1bHRcbmV4cG9ydHMuVHJ1ZVJlZHVjZXIgPSByZXF1aXJlKCcuL1RydWVSZWR1Y2VyJykuZGVmYXVsdFxuZXhwb3J0cy5OdWxsUmVkdWNlciA9IHJlcXVpcmUoJy4vTnVsbFJlZHVjZXInKS5kZWZhdWx0XG5leHBvcnRzLkxpc3RSZWR1Y2VyID0gcmVxdWlyZSgnLi9MaXN0UmVkdWNlcicpLmRlZmF1bHRcbiIsImltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuL1VzZXJQcm9maWxlJ1xuXG5jb25zdCB1c2VyID0gbmV3IFVzZXJQcm9maWxlKClcbmV4cG9ydCBkZWZhdWx0IHVzZXJcbiIsImltcG9ydCB7YnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBsb2Rhc2ggZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgZm9ybWF0IGZyb20gJ3N0cmluZy1mb3JtYXQnXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJ1xuaW1wb3J0IFJFUVVFU1QgZnJvbSAnLi9SZXF1ZXN0J1xuaW1wb3J0IGNvb2tpZSBmcm9tICcuL2Nvb2tpZSdcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcblxuZm9ybWF0LmV4dGVuZChTdHJpbmcucHJvdG90eXBlKVxuXG5jbGFzcyBVdGlsIHtcbiAgICBnZXQgdXNlcigpIHtyZXR1cm4gdXNlcn1cbiAgICBnZXQgYXNzaWduKCkge3JldHVybiBhc3NpZ259XG4gICAgZ2V0IGZvcm1hdCgpIHtyZXR1cm4gZm9ybWF0fVxuICAgIGdldCB1dWlkKCkge3JldHVybiB1dWlkfVxuICAgIGdldCBsb2Rhc2goKSB7cmV0dXJuIGxvZGFzaH1cbiAgICBnZXQgaGlzdG9yeSgpIHtyZXR1cm4gYnJvd3Nlckhpc3Rvcnl9XG4gICAgZ2V0IGNvb2tpZSgpIHtyZXR1cm4gY29va2llfVxuXG4gICAgZ2V0IGhhc2goKSB7cmV0dXJuIHRoaXMuZXh0cmFjdFBhaXJzKChsb2NhdGlvbi5oYXNoID8gbG9jYXRpb24uaGFzaCA6ICcjJykuc2xpY2UoMSkpfVxuICAgIGdldCBxdWVyaWVzKCkge3JldHVybiB0aGlzLmV4dHJhY3RQYWlycygobG9jYXRpb24uc2VhcmNoID8gbG9jYXRpb24uc2VhcmNoIDogJz8nKS5zbGljZSgxKSl9XG4gICAgZXh0cmFjdFBhaXJzID0gKHN0cikgPT4ge1xuICAgICAgICBsZXQgcnMgPSB7fVxuICAgICAgICBsZXQgcGFpcnMgPSBzdHIuc3BsaXQoJyYnKVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFpciA9IHBhaXJzW2ldXG4gICAgICAgICAgICBpZiAocGFpci5pbmRleE9mKCc9JykgPiAwKSB7XG4gICAgICAgICAgICAgICAgcGFpciA9IHBhaXIuc3BsaXQoJz0nKVxuICAgICAgICAgICAgICAgIHJzW3BhaXJbMF1dID0gcGFpclsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSByc1twYWlyXSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnNcbiAgICB9XG4gICAgZ2V0UXVlcnlWYWx1ZSA9IG5hbWUgPT4ge1xuICAgICAgICB2YXIgdXJsID0gbG9jYXRpb24uaHJlZlxuICAgICAgICB2YXIgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpXG4gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoYFs/Jl0ke25hbWV9KD0oW14mI10qKXwmfCN8JClgKSxcbiAgICAgICAgICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybClcbiAgICAgICAgaWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbFxuICAgICAgICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJ1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpXG4gICAgfVxuICAgIGlzRW1wdHkgPSBvID0+IGxvZGFzaC5pc0VtcHR5KG8pXG4gICAgaXNOdW1iZXIgPSBvID0+IHR5cGVvZiBvID09ICdudW1iZXInIHx8IChvICYmIHBhcnNlRmxvYXQoby50b1N0cmluZygpLnJlcGxhY2UoLywvZywnJykpKVxuICAgIG51bWJlck9mID0gbyA9PiB0eXBlb2YgbyA9PSAnbnVtYmVyJyA/IG8gOiBvICYmIHBhcnNlRmxvYXQoby50b1N0cmluZygpLnJlcGxhY2UoLywvZywnJykpID8gcGFyc2VGbG9hdChvLnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCcnKSkgOiAwXG4gICAgdmFsdWVPZiA9IChvLCBkKSA9PiB0aGlzLmlzRW1wdHkobykgPyBkIDogb1xuICAgIGFtb3VudE9mID0gKG8pID0+IHRoaXMubnVtYmVyV2l0aENvbW1hcyhvKVxuICAgIGRhdGVPZiA9IG8gPT4gbW9tZW50KG8pLmZvcm1hdCgnTU1NTSBEbyBZWVlZJylcbiAgICByYW5kb20gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbiAgICBleGNsdWRlID0gKG9yaWdpbiwgZXhjbHVkZXMpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fVxuICAgICAgICBPYmplY3Qua2V5cyhvcmlnaW4pLm1hcChrID0+IHtcbiAgICAgICAgICAgIGlmIChvcmlnaW4uaGFzT3duUHJvcGVydHkoaykgJiYgZXhjbHVkZXMuaW5kZXhPZihrKSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lnbihwcm9wcywge1trXTogb3JpZ2luW2tdfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHByb3BzXG4gICAgfVxuICAgIGluY2x1ZGUgPSAob3JpZ2luLCBpbmNsdWRlcykgPT4ge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHt9XG4gICAgICAgIE9iamVjdC5rZXlzKG9yaWdpbikubWFwKGsgPT4ge1xuICAgICAgICAgICAgaWYgKG9yaWdpbi5oYXNPd25Qcm9wZXJ0eShrKSAmJiBpbmNsdWRlcy5pbmRleE9mKGspID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lnbihwcm9wcywge1trXTogb3JpZ2luW2tdfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHByb3BzXG4gICAgfVxuXG4gICAgcmVxdWVzdCA9ICh1cmwsIG1ldGhvZCwgZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFJFUVVFU1QodXJsLCBtZXRob2QpLmRhdGEoZGF0YSlcbiAgICB9XG4gICAgcXVlcnkgPSAodXJsLCBkYXRhKSA9PiB0aGlzLnJlcXVlc3QodXJsLCAnR0VUJywgZGF0YSlcbiAgICBwb3N0ID0gKHVybCwgZGF0YSkgPT4gdGhpcy5yZXF1ZXN0KHVybCwgJ1BPU1QnLCBkYXRhKVxuICAgIHVwZGF0ZSA9ICh1cmwsIGRhdGEpID0+IHRoaXMucmVxdWVzdCh1cmwsICdQVVQnLCBkYXRhKVxuICAgIHJlbW92ZSA9ICh1cmwsIGRhdGEpID0+IHRoaXMucmVxdWVzdCh1cmwsICdERUxFVEUnLCBkYXRhKVxuICAgIG9wdGlvbnMgPSAodXJsLCBkYXRhKSA9PiB0aGlzLnJlcXVlc3QodXJsLCAnT1BUSU9OUycsIGRhdGEpXG5cbiAgICBuZXdUYWIgPSBsaW5rID0+IHdpbmRvdy5vcGVuKGxpbmssICdfYmxhbmsnKVxuICAgIHJlZGlyZWN0ID0gbGluayA9PiB3aW5kb3cub3BlbihsaW5rKVxuICAgIGFkZEpzU2NyaXB0ID0gKHNyYywgaWQsIGlubmVySFRNTCkgPT4gdGhpcy5hcHBlbmRUYWcoJ3NjcmlwdCcsIHtzcmN9LCBpZCwgaW5uZXJIVE1MKVxuICAgIGFkZENzc0xpbmsgPSAoaHJlZiwgaWQpID0+IHRoaXMuYWRkTGluayhocmVmLCB7dHlwZTogJ3RleHQvY3NzJyxyZWw6ICdzdHlsZXNoZWV0Jyx9LCBpZClcbiAgICBhZGRMaW5rID0gKGhyZWYsIHByb3BzLCBpZCkgPT4gdGhpcy5hcHBlbmRUYWcoJ2xpbmsnLCB7aHJlZiwgLi4ucHJvcHN9LCBpZClcbiAgICBhZGRNZXRhID0gKG5hbWUsIGNvbnRlbnQsIGlkKSA9PiB0aGlzLmFwcGVuZFRhZygnbWV0YScsIHtuYW1lLCBjb250ZW50fSwgaWQpXG4gICAgYXBwZW5kVGFnID0gKHRhZ05hbWUsIHByb3BzLCBpZCwgaW5uZXJIVE1MKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT0gJ3VuZGVmaW5lZCcgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSByZXR1cm5cbiAgICAgICAgbGV0IHRhZ3MgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSxcbiAgICAgICAgICAgIGxhc3QgICAgPSB0YWdzW3RhZ3MubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICB0YWcgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxuICAgICAgICB0YWcuaWQgID0gaWRcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLm1hcCgoaykgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzW2tdKSB0YWdba10gPSBwcm9wc1trXVxuICAgICAgICB9KVxuICAgICAgICBpZiAoaW5uZXJIVE1MKSB0cnkge3RhZy5pbm5lckhUTUwgPSBpbm5lckhUTUx9IGNhdGNoKGUpIHt9XG4gICAgICAgIGxhc3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFnLCBsYXN0Lm5leHRTaWJsaW5nKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBVdGlsKClcbiJdfQ==
