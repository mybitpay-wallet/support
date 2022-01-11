webpackJsonp([4],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultProvider = /** @class */ (function () {
    function DefaultProvider() {
        this.defaults = {
            '%CHAIN%': "ALL" || 'BTC',
            '%API_PREFIX%': "https://api.bitcore.io/api" || '/api',
            '%NETWORK%': "mainnet" || 'mainnet',
            '%NUM_BLOCKS%': process.env.NUM_BLOCKS || '15'
        };
    }
    DefaultProvider.prototype.getDefault = function (str) {
        return this.defaults[str] !== undefined ? this.defaults[str] : str;
    };
    DefaultProvider.prototype.setDefault = function (str, value) {
        this.defaults[str] = value;
    };
    DefaultProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DefaultProvider);
    return DefaultProvider;
}());

//# sourceMappingURL=default.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(297)))

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/* tslint:disable:no-console */


var Logger = /** @class */ (function () {
    function Logger() {
        this.levels = [
            { level: 'error', weight: 1, label: 'Error', def: false },
            { level: 'warn', weight: 2, label: 'Warning', def: false },
            { level: 'info', weight: 3, label: 'Info', def: true },
            { level: 'debug', weight: 4, label: 'Debug', def: false }
        ];
        // Create an array of level weights for performant filtering.
        this.weight = {};
        for (var _i = 0, _a = this.levels; _i < _a.length; _i++) {
            var i = _a[_i];
            if (this.levels[i]) {
                this.weight[this.levels[i].level] = this.levels[i].weight;
            }
        }
    }
    Logger.prototype.getMessage = function (message) {
        var isUndefined = __WEBPACK_IMPORTED_MODULE_1_lodash__["isUndefined"](message);
        var isNull = __WEBPACK_IMPORTED_MODULE_1_lodash__["isNull"](message);
        var isError = __WEBPACK_IMPORTED_MODULE_1_lodash__["isError"](message);
        var isObject = __WEBPACK_IMPORTED_MODULE_1_lodash__["isObject"](message);
        if (isUndefined) {
            return 'undefined';
        }
        else if (isNull) {
            return 'null';
        }
        else if (isError) {
            return message.message;
        }
        else if (isObject) {
            return JSON.stringify(message);
        }
        else {
            return message;
        }
    };
    Logger.prototype.error = function (_message) {
        var _optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _optionalParams[_i - 1] = arguments[_i];
        }
        var type = 'error';
        var args = this.processingArgs(arguments);
        this.log("[" + type + "] " + args);
    };
    Logger.prototype.debug = function (_message) {
        var _optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _optionalParams[_i - 1] = arguments[_i];
        }
        var type = 'debug';
        var args = this.processingArgs(arguments);
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            this.log("[" + type + "] " + args);
        }
    };
    Logger.prototype.info = function (_message) {
        var _optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _optionalParams[_i - 1] = arguments[_i];
        }
        var type = 'info';
        var args = this.processingArgs(arguments);
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            this.log("[" + type + "] " + args);
        }
    };
    Logger.prototype.warn = function (_message) {
        var _optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _optionalParams[_i - 1] = arguments[_i];
        }
        var type = 'warn';
        var args = this.processingArgs(arguments);
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            this.log("[" + type + "] " + args);
        }
    };
    Logger.prototype.getLevels = function () {
        return this.levels;
    };
    Logger.prototype.getWeight = function (weight) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.levels, function (l) {
            return l.weight === weight;
        });
    };
    Logger.prototype.getDefaultWeight = function () {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.levels, function (l) {
            return l.def;
        });
    };
    Logger.prototype.processingArgs = function (argsValues) {
        var _this = this;
        var args = Array.prototype.slice.call(argsValues);
        args = args.map(function (v) {
            try {
                v = _this.getMessage(v);
            }
            catch (e) {
                console.log('Error at log decorator:', e);
                v = 'Unknown message';
            }
            return v;
        });
        return args.join(' ');
    };
    Logger.prototype.log = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.log.apply(console, __spreadArrays([msg], optionalParams));
    };
    Logger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Logger);
    return Logger;
}());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestBlocksComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_moment__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_loader_loader_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_error_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__latest_blocks__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LatestBlocksComponentModule = /** @class */ (function () {
    function LatestBlocksComponentModule() {
    }
    LatestBlocksComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__latest_blocks__["a" /* LatestBlocksComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_1_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_3__components_loader_loader_module__["a" /* LoaderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__error_error_module__["a" /* ErrorComponentModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__latest_blocks__["a" /* LatestBlocksComponent */]]
        })
    ], LatestBlocksComponentModule);
    return LatestBlocksComponentModule;
}());

//# sourceMappingURL=latest-blocks.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transactions_transactions__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddressProvider = /** @class */ (function () {
    function AddressProvider(httpClient, currency, blocks, txsProvider, apiProvider) {
        this.httpClient = httpClient;
        this.currency = currency;
        this.blocks = blocks;
        this.txsProvider = txsProvider;
        this.apiProvider = apiProvider;
    }
    AddressProvider.prototype.getAddressBalance = function (addrStr, chainNetwork) {
        return this.httpClient.get(this.apiProvider.getUrl(chainNetwork) + "/address/" + addrStr + "/balance");
    };
    AddressProvider.prototype.getAddressActivity = function (addrStr, chainNetwork) {
        return this.httpClient.get(this.apiProvider.getUrl(chainNetwork) + "/address/" + addrStr + "/txs?limit=1000");
    };
    AddressProvider.prototype.getAddressActivityCoins = function (addrStr, chainNetwork) {
        return this.httpClient.get(this.apiProvider.getUrl(chainNetwork) + "/address/" + addrStr + "/coins");
    };
    AddressProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_5__transactions_transactions__["a" /* TxsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], AddressProvider);
    return AddressProvider;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_default_default__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};




var CurrentEnv = "prod" || 'dev';
var EnvApiHosts = {
    prod: {
        default: 'https://api.bitcore.io/api',
        ETH: 'https://api-eth.bitcore.io/api'
    },
    dev: { default: '/api' }
};
var CurrentApiHosts = EnvApiHosts[CurrentEnv];
var ApiProvider = /** @class */ (function () {
    function ApiProvider(httpClient, defaults) {
        var _this = this;
        this.httpClient = httpClient;
        this.defaults = defaults;
        this.defaultNetwork = {
            chain: this.defaults.getDefault('%CHAIN%'),
            network: this.defaults.getDefault('%NETWORK%')
        };
        this.networkSettings = {
            availableNetworks: [this.defaultNetwork],
            selectedNetwork: this.defaultNetwork,
            chainNetworkLookup: {}
        };
        this.ratesAPI = {
            btc: 'https://bitpay.com/api/rates',
            bch: 'https://bitpay.com/api/rates/bch',
            doge: 'https://bitpay.com/api/rates/doge',
            eth: 'https://bitpay.com/api/rates/eth'
        };
        this.bwsUrl = {
            urlPrefix: 'https://bws.bitpay.com/bws/api/v1/fiatrates/'
        };
        this.getAvailableNetworks().subscribe(function (data) {
            var newNetworks = data
                .map(function (x) { return x.supported; })
                .reduce(function (agg, arr) { return __spreadArrays(agg).concat(arr); }, []);
            var chainNetworkLookup = {};
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var hostConfig = data_1[_i];
                for (var _a = 0, _b = hostConfig.supported; _a < _b.length; _a++) {
                    var chainNetwork = _b[_a];
                    var key = chainNetwork.chain + ":" + chainNetwork.network;
                    chainNetworkLookup[key] = hostConfig.host;
                }
            }
            var _loop_1 = function (chain, network) {
                var found = _this.networkSettings.availableNetworks.find(function (available) {
                    return available.chain === chain && available.network === network;
                });
                if (!found) {
                    _this.networkSettings.availableNetworks.push({ chain: chain, network: network });
                }
            };
            for (var _c = 0, newNetworks_1 = newNetworks; _c < newNetworks_1.length; _c++) {
                var _d = newNetworks_1[_c], chain = _d.chain, network = _d.network;
                _loop_1(chain, network);
            }
            _this.networkSettings = {
                availableNetworks: _this.networkSettings.availableNetworks,
                selectedNetwork: _this.networkSettings.selectedNetwork,
                chainNetworkLookup: chainNetworkLookup
            };
        });
    }
    ApiProvider.prototype.getAvailableNetworks = function () {
        var _this = this;
        var hosts = CurrentApiHosts;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromPromise(Promise.all(Object.keys(hosts).map(function (chain) { return __awaiter(_this, void 0, void 0, function () {
            var host, supported;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        host = hosts[chain];
                        return [4 /*yield*/, this.httpClient
                                .get(host + '/status/enabled-chains')
                                .toPromise()];
                    case 1:
                        supported = _a.sent();
                        return [2 /*return*/, {
                                host: host,
                                supported: supported
                            }];
                }
            });
        }); })));
    };
    ApiProvider.prototype.getHostForChain = function (chain) {
        return CurrentApiHosts[chain] || CurrentApiHosts.default;
    };
    ApiProvider.prototype.getUrlPrefix = function (chain, network) {
        var defaultChain = chain || this.defaultNetwork.chain;
        var defaultNetwork = network || this.defaultNetwork.network;
        var key = defaultChain + ":" + defaultNetwork;
        var lookupHost = this.networkSettings.chainNetworkLookup[key];
        var prefix = lookupHost || this.getHostForChain(chain);
        return prefix;
    };
    ApiProvider.prototype.getUrl = function (params) {
        var chain = params.chain, network = params.network;
        chain = chain || this.networkSettings.selectedNetwork.chain;
        network = network || this.networkSettings.selectedNetwork.network;
        var prefix = this.getUrlPrefix(chain, network);
        var apiPrefix = prefix + "/" + chain + "/" + network;
        return apiPrefix;
    };
    ApiProvider.prototype.getConfig = function () {
        var config = {
            chain: this.networkSettings.selectedNetwork.chain,
            network: this.networkSettings.selectedNetwork.network
        };
        return config;
    };
    ApiProvider.prototype.changeNetwork = function (network) {
        var availableNetworks = this.networkSettings.availableNetworks;
        // Can't do the following because availableNetworks is loaded
        /*
         *const isValid = _.some(availableNetworks, network);
         *if (!isValid) {
         *  this.logger.error(
         *    'Invalid URL: missing or invalid COIN or NETWORK param'
         *  );
         *  return;
         *}
         */
        this.networkSettings = {
            availableNetworks: availableNetworks,
            selectedNetwork: network,
            chainNetworkLookup: this.networkSettings.chainNetworkLookup || {}
        };
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_default_default__["a" /* DefaultProvider */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/address/address.module": [
		852,
		0
	],
	"../pages/block-detail/block-detail.module": [
		853,
		1
	],
	"../pages/blocks/blocks.module": [
		324
	],
	"../pages/broadcast-tx/broadcast-tx.module": [
		472
	],
	"../pages/home/home.module": [
		474
	],
	"../pages/search/search.module": [
		854,
		3
	],
	"../pages/transaction/transaction.module": [
		855,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrencyProvider = /** @class */ (function () {
    function CurrencyProvider(apiProvider) {
        this.apiProvider = apiProvider;
        this.factor = 1;
        this.explorers = [];
    }
    CurrencyProvider.prototype.roundFloat = function (aFloat, decimalPlaces) {
        return (Math.round(aFloat * Math.pow(10, decimalPlaces)) /
            Math.pow(10, decimalPlaces));
    };
    CurrencyProvider.prototype.setCurrency = function (chainNetwork, currency) {
        if (!currency) {
            currency = chainNetwork.chain.toUpperCase();
        }
        if (currency !== 'USD') {
            var chain = chainNetwork.chain.toUpperCase();
            this.currencySymbol = currency.startsWith('m') ? 'm' + chain : chain;
        }
        else {
            this.currencySymbol = 'USD';
        }
    };
    CurrencyProvider.prototype.getCurrency = function () {
        return this.currencySymbol;
    };
    CurrencyProvider.prototype.getConvertedNumber = function (value, chain) {
        // TODO: Change this function to make use of satoshis so that we don't have to do all these roundabout conversions.
        switch (chain) {
            case 'ETH':
                value = value * 1e-18;
                break;
            default:
                value = value * 1e-8;
                break;
        }
        if (value === 0.0) {
            return 0;
        }
        var response;
        if (this.currencySymbol === 'USD') {
            response = this.roundFloat(value * this.factor, 2);
        }
        else if (this.currencySymbol ===
            'm' + this.apiProvider.networkSettings.selectedNetwork.chain) {
            this.factor = 1000;
            response = this.roundFloat(value * this.factor, 5);
        }
        else if (this.currencySymbol === 'bits') {
            this.factor = 1000000;
            response = this.roundFloat(value * this.factor, 2);
        }
        else {
            this.factor = 1;
            response = this.roundFloat(value * this.factor, 8);
        }
        return response;
    };
    /**
     * @deprecated use getConvertedNumber
     */
    CurrencyProvider.prototype.getConversion = function (value) {
        if (value === 0.0) {
            return '0 ' + this.currencySymbol; // fix value to show
        }
        var response;
        if (this.currencySymbol === 'USD') {
            response = this.roundFloat(value * this.factor, 2);
        }
        else if (this.currencySymbol ===
            'm' + this.apiProvider.networkSettings.selectedNetwork.chain) {
            this.factor = 1000;
            response = this.roundFloat(value * this.factor, 5);
        }
        else if (this.currencySymbol === 'bits') {
            this.factor = 1000000;
            response = this.roundFloat(value * this.factor, 2);
        }
        else {
            this.factor = 1;
            response = this.roundFloat(value * this.factor, 8);
        }
        return response + ' ' + this.currencySymbol;
    };
    CurrencyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* ApiProvider */]])
    ], CurrencyProvider);
    return CurrencyProvider;
}());

//# sourceMappingURL=currency.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenominationComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denomination__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DenominationComponentModule = /** @class */ (function () {
    function DenominationComponentModule() {
    }
    DenominationComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__denomination__["a" /* DenominationComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__denomination__["a" /* DenominationComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__denomination__["a" /* DenominationComponent */]]
        })
    ], DenominationComponentModule);
    return DenominationComponentModule;
}());

//# sourceMappingURL=denomination.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenominationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DenominationComponent = /** @class */ (function () {
    function DenominationComponent(viewCtrl, api, navParams) {
        this.viewCtrl = viewCtrl;
        this.api = api;
        this.navParams = navParams;
        this.units = [];
        this.showUnits = false;
    }
    DenominationComponent.prototype.ionViewDidEnter = function () {
        this.currencySymbol = this.navParams.data.currencySymbol;
        this.availableNetworks = this.api.networkSettings.availableNetworks;
        this.showUnits = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.some(this.availableNetworks, this.api.networkSettings.selectedNetwork)
            ? true
            : false;
        this.units = [
            'USD',
            this.api.networkSettings.selectedNetwork.chain,
            'm' + this.api.networkSettings.selectedNetwork.chain
        ];
    };
    DenominationComponent.prototype.changeUnit = function (unit) {
        this.currencySymbol = unit;
        this.viewCtrl.dismiss({
            chainNetwork: this.navParams.data.config,
            currencySymbol: this.currencySymbol
        });
    };
    DenominationComponent.prototype.changeExplorer = function (chainNetwork) {
        this.viewCtrl.dismiss({
            chainNetwork: chainNetwork,
            currencySymbol: this.currencySymbol
        });
    };
    DenominationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'denomination',template:/*ion-inline-start:"/home/justin/repos/bitcore/packages/insight/src/components/denomination/denomination.html"*/'<ion-list no-lines>\n  <ion-row>\n    <ion-item (click)="changeExplorer(chainNetwork)" *ngFor="let chainNetwork of availableNetworks">\n      <ion-avatar item-start>\n        <img *ngIf="chainNetwork.network === \'mainnet\' && chainNetwork.chain !==\'ALL\'" src="assets/img/currency_logos/{{ chainNetwork.chain.toLowerCase() }}.svg" class="logo" alt="{{ chainNetwork.chain }}"/>\n        <img *ngIf=" chainNetwork.network !==\'mainnet\' && chainNetwork.chain===\'BTC\'" src=" assets/img/btcicon-testnet.svg" class="logo"  alt="{{ chainNetwork.chain }}"/>\n        <img *ngIf="chainNetwork.network !== \'mainnet\' && chainNetwork.chain===\'BCH\'" src="assets/img/bchicon-testnet.svg" class="logo" alt="{{ chainNetwork.chain }}"/>\n        <img *ngIf="chainNetwork.network !== \'mainnet\' && chainNetwork.chain===\'DOGE\'" src="assets/img/doge-logo-testnet.svg" class="logo" alt="{{ chainNetwork.chain }}"/>\n        <img *ngIf="chainNetwork.network !== \'mainnet\' && chainNetwork.chain===\'LTC\'" src="assets/img/ltc-testnet.svg" class="logo" alt="{{ chainNetwork.chain }}"/>\n        <img [ngClass]="{\'secondary\': chainNetwork.network ===\'testnet\'}" *ngIf="chainNetwork.network !== \'mainnet\' && chainNetwork.chain===\'ETH\'" src="assets/img/currency_logos/eth.svg" class="logo" alt="{{ chainNetwork.chain }}"/>\n      </ion-avatar>\n      <ion-label color="dark" *ngIf="chainNetwork.chain !== \'ALL\'">\n        {{ chainNetwork.chain }} <small class="pill"> {{ chainNetwork.network }}</small>\n      </ion-label>\n      <ion-label color="dark" *ngIf="chainNetwork.chain === \'ALL\'">\n        All blockchains\n      </ion-label>\n    </ion-item>\n  </ion-row>\n</ion-list>\n\n<ion-list radio-group [(ngModel)]="currencySymbol" *ngIf="showUnits && api.networkSettings.selectedNetwork.chain !== \'ALL\'">\n  <ion-item-divider>\n    Units\n  </ion-item-divider>\n\n  <ion-item *ngFor="let unit of units">\n    <ion-label color="dark">{{ unit }}</ion-label>\n    <ion-radio value="{{ unit }}" [checked]="unit === currencySymbol" (click)="changeUnit(unit)">\n    </ion-radio>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"/home/justin/repos/bitcore/packages/insight/src/components/denomination/denomination.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DenominationComponent);
    return DenominationComponent;
}());

//# sourceMappingURL=denomination.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_api__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchProvider = /** @class */ (function () {
    function SearchProvider(apiProvider, httpClient) {
        this.apiProvider = apiProvider;
        this.httpClient = httpClient;
        // Some of these could be combined into more complex regexes, but have been intentionally kept relatively separate to
        // make it clear which address types are checked for so that we know in the future which address types are present/missing
        this.inputTypes = [
            // Standard BTC / Legacy BCH address
            {
                regexes: [/^(bitcoin:)?([13][a-km-zA-HJ-NP-Z1-9]{25,34})/],
                dataIndex: 2,
                type: 'address',
                chainNetworks: [
                    { chain: 'BTC', network: 'mainnet' }
                ],
            },
            // Standard BTC / Legacy BCH address
            {
                regexes: [/^(bitcoincash:)?([13][a-km-zA-HJ-NP-Z1-9]{25,34})/],
                dataIndex: 2,
                type: 'address',
                chainNetworks: [
                    { chain: 'BCH', network: 'mainnet' }
                ],
            },
            // bech32 BTC Address
            {
                regexes: [/^(bitcoin:)?(bc1[ac-hj-np-zAC-HJ-NP-Z02-9]{11,71})/],
                dataIndex: 2,
                type: 'address',
                chainNetworks: [
                    { chain: 'BTC', network: 'mainnet' }
                ],
            },
            // Standard BCH Address
            {
                regexes: [/^(bitcoincash:)?([qp][a-z0-9]{41})$/, /^(BITCOINCASH:)?([QP][A-Z0-9]{41})/],
                dataIndex: 2,
                type: 'address',
                chainNetworks: [
                    { chain: 'BCH', network: 'mainnet' }
                ],
            },
            // Testnet BTC / BCH / Doge Address
            {
                regexes: [/^(bitcoin:|bchtest:|dogecoin:)?([2mn][1-9A-HJ-NP-Za-km-z]{26,35})/],
                dataIndex: 2,
                type: 'address',
                chainNetworks: [
                    { chain: 'BTC', network: 'testnet' },
                    { chain: 'BCH', network: 'testnet' },
                    { chain: 'DOGE', network: 'testnet' }
                ],
            },
            // Testnet BCH Address
            {
                regexes: [/^(bchtest:)?([qp][a-z0-9]{41})$/, /^(BCHTEST:)?([QP][A-Z0-9]{41})/],
                dataIndex: 2,
                type: 'address',
                chainNetworks: [
                    { chain: 'BCH', network: 'testnet' }
                ],
            },
            // ETH Address
            {
                regexes: [/^0x[a-fA-F0-9]{40}$/],
                type: 'address',
                chainNetworks: [
                    { chain: 'ETH', network: 'mainnet' },
                    { chain: 'ETH', network: 'testnet' }
                ],
            },
            // Doge Address
            {
                regexes: [/^(dogecoin:)?(D[5-9A-HJ-NP-U][1-9A-HJ-NP-Za-km-z]{32})/],
                dataIndex: 2,
                type: 'address',
                chainNetworks: [
                    { chain: 'DOGE', network: 'mainnet' }
                ],
            },
            // BTC / BCH / DOGE block or tx
            {
                regexes: [/^[A-Fa-f0-9]{64}$/],
                type: 'blockOrTx',
                chainNetworks: [
                    { chain: 'BTC', network: 'mainnet' },
                    { chain: 'BCH', network: 'mainnet' },
                    { chain: 'DOGE', network: 'mainnet' },
                    { chain: 'BTC', network: 'testnet' },
                    { chain: 'BCH', network: 'testnet' },
                    { chain: 'DOGE', network: 'testnet' }
                ],
            },
            // ETH block or tx
            {
                regexes: [/^0x[A-Fa-f0-9]{64}$/],
                type: 'blockOrTx',
                chainNetworks: [
                    { chain: 'ETH', network: 'mainnet' },
                    { chain: 'ETH', network: 'testnet' }
                ],
            },
            // BTC / BCH / DOGE / ETH block height
            {
                regexes: [/^[0-9]{1,9}$/],
                type: 'block',
                chainNetworks: [
                    { chain: 'BTC', network: 'mainnet' },
                    { chain: 'BCH', network: 'mainnet' },
                    { chain: 'DOGE', network: 'mainnet' },
                    { chain: 'ETH', network: 'mainnet' },
                    { chain: 'BTC', network: 'testnet' },
                    { chain: 'BCH', network: 'testnet' },
                    { chain: 'DOGE', network: 'testnet' },
                    { chain: 'ETH', network: 'testnet' }
                ],
            },
        ];
    }
    SearchProvider.prototype.search = function (searchInputs, chainNetwork) {
        var _this = this;
        var searchArray = [];
        if (chainNetwork.chain !== 'ALL') {
            // If user has selected a specific network, we only search that network for results
            searchInputs = searchInputs
                .filter(function (input) { return input.chainNetwork.chain === chainNetwork.chain; })
                .filter(function (input) { return input.chainNetwork.network === chainNetwork.network; });
        }
        searchInputs.forEach(function (search) {
            _this.apiURL = "" + _this.apiProvider.getUrl(search.chainNetwork);
            if (search.type === 'block') {
                searchArray.push(_this.searchBlock(search.input).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(err); }));
            }
            else if (search.type === 'blockOrTx') {
                searchArray.push(_this.searchBlock(search.input).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(err); }));
                searchArray.push(_this.searchTx(search.input).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(err); }));
            }
            else if (search.type === 'address') {
                searchArray.push(_this.searchAddr(search.input).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(err); }));
            }
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(searchArray);
    };
    SearchProvider.prototype.determineInputType = function (input) {
        var searchInputs = [];
        for (var _i = 0, _a = this.inputTypes; _i < _a.length; _i++) {
            var _b = _a[_i], regexes = _b.regexes, chainNetworks = _b.chainNetworks, type = _b.type, dataIndex = _b.dataIndex;
            var index = regexes.findIndex(function (regex) { return regex.test(input); });
            if (index > -1) {
                var localInput = input;
                // If defined then the data we care about is a subset of the actual user input (ie has prefix to discard)
                if (dataIndex !== undefined) {
                    localInput = input.match(regexes[index])[dataIndex];
                }
                for (var _c = 0, chainNetworks_1 = chainNetworks; _c < chainNetworks_1.length; _c++) {
                    var chainNetwork = chainNetworks_1[_c];
                    searchInputs.push({
                        input: localInput,
                        chainNetwork: chainNetwork,
                        type: type
                    });
                }
            }
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(searchInputs);
    };
    SearchProvider.prototype.searchBlock = function (block) {
        return this.httpClient
            .get(this.apiURL + "/block/" + block)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) { return ({ block: res }); }));
    };
    SearchProvider.prototype.searchTx = function (txid) {
        return this.httpClient
            .get(this.apiURL + "/tx/" + txid)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) { return ({ tx: res }); }));
    };
    SearchProvider.prototype.searchAddr = function (address) {
        var apiURL = __WEBPACK_IMPORTED_MODULE_2_lodash__["includes"](this.apiURL, 'ETH')
            ? this.apiURL + "/address/" + address + "/txs?limit=1"
            : this.apiURL + "/address/" + address;
        return this.httpClient
            .get(apiURL)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) { return ({ addr: res }); }));
    };
    SearchProvider.prototype.extractAddress = function (address) {
        var extractedAddress = address
            .replace(/^(bitcoincash:|bchtest:|bitcoin:)/i, '')
            .replace(/\?.*/, '');
        return extractedAddress || address;
    };
    SearchProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], SearchProvider);
    return SearchProvider;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksPageModule", function() { return BlocksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footer_footer_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_head_nav_head_nav_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_latest_blocks_latest_blocks_module__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loader_loader_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks__ = __webpack_require__(471);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BlocksPageModule = /** @class */ (function () {
    function BlocksPageModule() {
    }
    BlocksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__blocks__["a" /* BlocksPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__blocks__["a" /* BlocksPage */]),
                __WEBPACK_IMPORTED_MODULE_2__components_footer_footer_module__["a" /* FooterComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_head_nav_head_nav_module__["a" /* HeadNavComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_latest_blocks_latest_blocks_module__["a" /* LatestBlocksComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_loader_loader_module__["a" /* LoaderComponentModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__blocks__["a" /* BlocksPage */]]
        })
    ], BlocksPageModule);
    return BlocksPageModule;
}());

//# sourceMappingURL=blocks.module.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__currency_currency__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PriceProvider = /** @class */ (function () {
    function PriceProvider(currencyProvider, api, toastCtrl) {
        this.currencyProvider = currencyProvider;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.rates = {};
    }
    PriceProvider.prototype.setCurrency = function (currency) {
        var _this = this;
        if (!currency) {
            currency = this.currencyProvider.getCurrency();
        }
        if (currency === 'USD') {
            var ratesAPI = void 0;
            switch (this.api.getConfig().chain) {
                case 'BTC':
                    ratesAPI = this.api.ratesAPI.btc;
                    break;
                case 'BCH':
                    ratesAPI = this.api.ratesAPI.bch;
                    break;
                case 'DOGE':
                    ratesAPI = this.api.ratesAPI.doge;
                    break;
                case 'ETH':
                    ratesAPI = this.api.ratesAPI.eth;
                    break;
            }
            this.api.httpClient.get(ratesAPI).subscribe(function (data) {
                var currencyParsed = data;
                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](currencyParsed, function (o) {
                    _this.rates[o.code] = o.rate;
                });
                _this.currencyProvider.factor = _this.rates[currency];
                _this.currencyProvider.loading = false;
            }, function () {
                _this.currencyProvider.loading = false;
                _this.showErrorToast();
            });
        }
        else {
            this.currencyProvider.factor =
                currency === 'm' + this.api.networkSettings.selectedNetwork.chain
                    ? 1000
                    : 1;
        }
    };
    // Get historical rates for currency at ts timestamp
    PriceProvider.prototype.getHistoricalRate = function (currency, isoCode, days) {
        var _this = this;
        var dates = Array.apply(null, Array(days));
        var secondsInADay = 24 * 60 * 60;
        var today = Date.now();
        var observableBatch = [];
        // Get the X days in unix time
        dates.forEach(function (value, index) {
            this[index] = today - index * secondsInADay * 1000;
        }, dates);
        dates.reverse();
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](dates, function (date) {
            var url = _this.api.bwsUrl.urlPrefix +
                isoCode +
                '?coin=' +
                currency +
                '&' +
                'ts=' +
                date;
            observableBatch.push(_this.api.httpClient.get(url));
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(observableBatch);
    };
    PriceProvider.prototype.showErrorToast = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'This currency is not available at this time',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        toast.onDidDismiss(function () {
            _this.currencyProvider.setCurrency();
        });
    };
    PriceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_4__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PriceProvider);
    return PriceProvider;
}());

//# sourceMappingURL=price.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlocksProvider = /** @class */ (function () {
    function BlocksProvider(httpClient, currency, api) {
        this.httpClient = httpClient;
        this.currency = currency;
        this.api = api;
    }
    BlocksProvider.prototype.toEthAppBlock = function (block) {
        return __assign(__assign({}, this.toAppBlock(block)), { gasLimit: block.gasLimit, gasUsed: block.gasUsed, difficulty: block.difficulty, totalDifficulty: block.totalDifficulty });
    };
    BlocksProvider.prototype.toUtxoCoinAppBlock = function (block) {
        var difficulty = 0x1d00ffff / block.bits;
        return __assign(__assign({}, this.toAppBlock(block)), { merkleroot: block.merkleRoot, version: block.version, bits: block.bits.toString(16), difficulty: difficulty });
    };
    BlocksProvider.prototype.toAppBlock = function (block) {
        return {
            height: block.height,
            confirmations: block.confirmations,
            nonce: block.nonce,
            size: block.size,
            virtualSize: block.size,
            hash: block.hash,
            time: new Date(block.time).getTime() / 1000,
            tx: {
                length: block.transactionCount
            },
            txlength: block.transactionCount,
            previousblockhash: block.previousBlockHash,
            nextblockhash: block.nextBlockHash,
            poolInfo: {
                poolName: block.minedBy,
                url: ''
            },
            reward: block.reward
        };
    };
    BlocksProvider.prototype.getCurrentHeight = function (chainNetwork) {
        if (!this.tipValue ||
            !this.currentChainNetwork ||
            this.currentChainNetwork !== chainNetwork) {
            this.tipValue = this.requestCurrentHeight(chainNetwork).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["merge"])(), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["shareReplay"])(1));
            this.currentChainNetwork = chainNetwork;
        }
        return this.tipValue;
    };
    BlocksProvider.prototype.requestCurrentHeight = function (chainNetwork) {
        var heightUrl = this.api.getUrl(chainNetwork) + "/block/tip";
        return this.httpClient.get(heightUrl);
    };
    BlocksProvider.prototype.getBlocks = function (chainNetwork, numBlocks) {
        if (numBlocks === void 0) { numBlocks = 10; }
        var url = this.api.getUrl(chainNetwork) + "/block?limit=" + numBlocks;
        return this.httpClient.get(url);
    };
    BlocksProvider.prototype.getCoinsForBlockHash = function (blockHash, chainNetwork, limit, page) {
        var url = this.api.getUrl(chainNetwork) + "/block/" + blockHash + "/coins/" + limit + "/" + page;
        return this.httpClient.get(url);
    };
    /**
     * example: http://localhost:8100/api/BTC/regtest/block?since=582&limit=100&paging=height&direction=1
     */
    BlocksProvider.prototype.pageBlocks = function (since, numBlocks, chainNetwork) {
        if (numBlocks === void 0) { numBlocks = 10; }
        var url = this.api.getUrl(chainNetwork) + "/block?since=" + since + "&limit=" + numBlocks + "&paging=height&direction=-1";
        return this.httpClient.get(url);
    };
    BlocksProvider.prototype.getBlock = function (hash, chainNetwork) {
        var url = this.api.getUrl(chainNetwork) + "/block/" + hash;
        return this.httpClient.get(url);
    };
    BlocksProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], BlocksProvider);
    return BlocksProvider;
}());

//# sourceMappingURL=blocks.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestBlocksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blocks_blocks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_default_default__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_redir_redir__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LatestBlocksComponent = /** @class */ (function () {
    function LatestBlocksComponent(currency, defaults, redirProvider, blocksProvider, ngZone) {
        this.currency = currency;
        this.defaults = defaults;
        this.redirProvider = redirProvider;
        this.blocksProvider = blocksProvider;
        this.ngZone = ngZone;
        this.showAllBlocksButton = false;
        this.isHomePage = false;
        this.loading = true;
        this.blocks = [];
        this.numBlocks = parseInt(defaults.getDefault('%NUM_BLOCKS%'), 10);
    }
    LatestBlocksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadBlocks();
        var seconds = 15;
        this.ngZone.runOutsideAngular(function () {
            _this.reloadInterval = setInterval(function () {
                _this.ngZone.run(function () {
                    _this.loadBlocks.call(_this);
                });
            }, 1000 * seconds);
        });
    };
    LatestBlocksComponent.prototype.loadBlocks = function () {
        var _this = this;
        if (this.chainNetwork.chain !== 'ALL') {
            this.subscriber = this.blocksProvider
                .getBlocks(this.chainNetwork, this.numBlocks)
                .subscribe(function (response) {
                var blocks = response.map(function (block) {
                    if (__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* UTXO_CHAINS */].includes(_this.chainNetwork.chain)) {
                        return _this.blocksProvider.toUtxoCoinAppBlock(block);
                    }
                    if (_this.chainNetwork.chain === 'ETH') {
                        return _this.blocksProvider.toEthAppBlock(block);
                    }
                });
                _this.blocks = blocks;
                _this.loading = false;
                if (_this.blocks[_this.blocks.length - 1].height < _this.numBlocks) {
                    _this.isHomePage = false;
                }
            }, function (err) {
                _this.subscriber.unsubscribe();
                clearInterval(_this.reloadInterval);
                _this.errorMessage = err;
                _this.loading = false;
            });
        }
    };
    LatestBlocksComponent.prototype.loadMoreBlocks = function (infiniteScroll) {
        var _this = this;
        clearInterval(this.reloadInterval);
        var since = this.blocks.length > 0 ? this.blocks[this.blocks.length - 1].height : 0;
        return this.blocksProvider
            .pageBlocks(since, this.numBlocks, this.chainNetwork)
            .subscribe(function (response) {
            var blocks = response.map(function (block) {
                if (_this.chainNetwork.chain === 'BTC' ||
                    _this.chainNetwork.chain === 'BCH' ||
                    _this.chainNetwork.chain === 'DOGE') {
                    return _this.blocksProvider.toUtxoCoinAppBlock(block);
                }
                if (_this.chainNetwork.chain === 'ETH') {
                    return _this.blocksProvider.toEthAppBlock(block);
                }
            });
            _this.blocks = _this.blocks.concat(blocks);
            _this.loading = false;
            infiniteScroll.complete();
        }, function (err) {
            _this.errorMessage = err.message;
            _this.loading = false;
        });
    };
    LatestBlocksComponent.prototype.goToBlock = function (blockHash) {
        this.redirProvider.redir('block-detail', {
            blockHash: blockHash,
            chain: this.chainNetwork.chain,
            network: this.chainNetwork.network
        });
    };
    LatestBlocksComponent.prototype.goToBlocks = function () {
        this.redirProvider.redir('blocks', {
            chain: this.chainNetwork.chain,
            network: this.chainNetwork.network
        });
    };
    LatestBlocksComponent.prototype.reloadData = function () {
        this.subscriber.unsubscribe();
        this.blocks = [];
        this.ngOnInit();
    };
    LatestBlocksComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.reloadInterval);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LatestBlocksComponent.prototype, "numBlocks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LatestBlocksComponent.prototype, "showAllBlocksButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LatestBlocksComponent.prototype, "isHomePage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LatestBlocksComponent.prototype, "showTimeAs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LatestBlocksComponent.prototype, "chainNetwork", void 0);
    LatestBlocksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'latest-blocks',template:/*ion-inline-start:"/home/justin/repos/bitcore/packages/insight/src/components/latest-blocks/latest-blocks.html"*/'<error [message]="errorMessage" *ngIf="errorMessage"></error>\n<div *ngIf="!errorMessage">\n  <ion-grid class="grid--table blocks-container">\n\n    <ion-row>\n      <ion-col>\n        <h6>Height</h6>\n      </ion-col>\n      <ion-col *ngIf="showTimeAs === \'age\'">\n        <h6>Mined</h6>\n      </ion-col>\n      <ion-col *ngIf="showTimeAs === \'timestamp\'">\n        <h6>Timestamp</h6>\n      </ion-col>\n      <ion-col>\n        <h6>Transactions</h6>\n      </ion-col>\n      <ion-col>\n        <h6>Size</h6>\n      </ion-col>\n    </ion-row>\n\n    <loader *ngIf="loading" [type]="\'grid\'"></loader>\n\n    <div *ngIf="!loading" class="blocks-container__blocks">\n      <ion-row *ngFor="let block of blocks" (click)="goToBlock(block.hash)">\n        <ion-col>\n          <a (click)="goToBlock(block.hash)" role="button" tabindex="0">{{ block.height }}</a>\n        </ion-col>\n        <ion-col *ngIf="showTimeAs === \'age\'">\n          {{ block.time | amFromUnix | amTimeAgo:true }}\n        </ion-col>\n        <ion-col *ngIf="showTimeAs === \'timestamp\'">\n          {{ block.time * 1000 | date:\'long\' }}\n        </ion-col>\n        <ion-col>\n          {{ block.txlength }}\n        </ion-col>\n        <ion-col>\n          {{ block.size }}\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="showAllBlocksButton" class="blocks-cta">\n        <ion-col text-center>\n          <button ion-button (click)="goToBlocks()" [disabled]="blocks.length == 0" type="button" tabindex="0">View More</button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="isHomePage">\n        <ion-infinite-scroll (ionInfinite)="loadMoreBlocks($event)">\n          <loader [type]="\'grid\'"></loader>\n        </ion-infinite-scroll>\n      </ion-row>\n    </div>\n  </ion-grid>\n</div> \n'/*ion-inline-end:"/home/justin/repos/bitcore/packages/insight/src/components/latest-blocks/latest-blocks.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_default_default__["a" /* DefaultProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_redir_redir__["a" /* RedirProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], LatestBlocksComponent);
    return LatestBlocksComponent;
}());

//# sourceMappingURL=latest-blocks.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlocksPage = /** @class */ (function () {
    function BlocksPage(navParams, apiProvider, blocksProvider, currencyProvider, priceProvider) {
        var _this = this;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.blocksProvider = blocksProvider;
        this.currencyProvider = currencyProvider;
        this.priceProvider = priceProvider;
        this.loading = true;
        var chain = navParams.get('chain');
        var network = navParams.get('network');
        this.chainNetwork = {
            chain: chain,
            network: network
        };
        this.apiProvider.changeNetwork(this.chainNetwork);
        this.currencyProvider.setCurrency(this.chainNetwork);
        this.priceProvider.setCurrency();
        this.blocksProvider.getBlocks(this.chainNetwork).subscribe(function (blocks) {
            _this.blocks = blocks;
            _this.loading = false;
        }, function () {
            _this.loading = false;
        });
    }
    BlocksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-blocks',template:/*ion-inline-start:"/home/justin/repos/bitcore/packages/insight/src/pages/blocks/blocks.html"*/'<head-nav [chainNetwork]="chainNetwork"></head-nav>\n<ion-content class="content-container">\n  <ion-grid class="page-content-grid">\n\n    <loader *ngIf="loading" [type]="\'title\'"></loader>\n\n    <div *ngIf="!loading" class="page-content">\n      <h1 class="content-container--heading u-font-large">Blocks</h1>\n      <latest-blocks [numBlocks]="200" [showTimeAs]="\'timestamp\'" [isHomePage]="true" [chainNetwork]="chainNetwork"></latest-blocks>\n    </div>\n\n  </ion-grid>\n</ion-content>\n<footer [chainNetwork]="chainNetwork"></footer>'/*ion-inline-end:"/home/justin/repos/bitcore/packages/insight/src/pages/blocks/blocks.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_price_price__["a" /* PriceProvider */]])
    ], BlocksPage);
    return BlocksPage;
}());

//# sourceMappingURL=blocks.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastTxPageModule", function() { return BroadcastTxPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footer_footer_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_head_nav_head_nav_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__broadcast_tx__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BroadcastTxPageModule = /** @class */ (function () {
    function BroadcastTxPageModule() {
    }
    BroadcastTxPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__broadcast_tx__["a" /* BroadcastTxPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__broadcast_tx__["a" /* BroadcastTxPage */]),
                __WEBPACK_IMPORTED_MODULE_2__components_footer_footer_module__["a" /* FooterComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_head_nav_head_nav_module__["a" /* HeadNavComponentModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__broadcast_tx__["a" /* BroadcastTxPage */]]
        })
    ], BroadcastTxPageModule);
    return BroadcastTxPageModule;
}());

//# sourceMappingURL=broadcast-tx.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BroadcastTxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_price_price__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BroadcastTxPage = /** @class */ (function () {
    function BroadcastTxPage(toastCtrl, formBuilder, navParams, httpClient, apiProvider, priceProvider, currencyProvider) {
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.apiProvider = apiProvider;
        this.priceProvider = priceProvider;
        this.currencyProvider = currencyProvider;
        var chain = navParams.get('chain');
        var network = navParams.get('network');
        this.chainNetwork = {
            chain: chain,
            network: network
        };
        this.apiProvider.changeNetwork(this.chainNetwork);
        this.currencyProvider.setCurrency(this.chainNetwork);
        this.priceProvider.setCurrency();
        this.title = 'Broadcast Transaction';
        this.txForm = formBuilder.group({
            rawData: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[0-9A-Fa-f]+$/)]
        });
    }
    BroadcastTxPage.prototype.send = function () {
        var _this = this;
        var postData = {
            rawtx: this.transaction
        };
        this.httpClient
            .post(this.apiProvider.getUrl(this.chainNetwork) + '/tx/send', postData)
            .subscribe(function (response) {
            _this.presentToast(true, response);
        }, function (err) {
            _this.presentToast(false, err);
        });
    };
    BroadcastTxPage.prototype.presentToast = function (success, response) {
        var message = success
            ? 'Transaction successfully broadcast. Trasaction id: ' + response.txid
            : 'An error occurred: ' + response;
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            position: 'bottom',
            showCloseButton: true,
            dismissOnPageChange: true
        });
        this.toast.present();
    };
    BroadcastTxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-broadcast-tx',template:/*ion-inline-start:"/home/justin/repos/bitcore/packages/insight/src/pages/broadcast-tx/broadcast-tx.html"*/'<head-nav [chainNetwork]="chainNetwork"></head-nav>\n<ion-content>\n  <ion-grid fixed>\n    <div class="page-content">\n      <h1>Broadcast Transaction</h1>\n      <form [formGroup]="txForm">\n        <ion-list>\n          <ion-item>\n            <p>This form can be used to broadcast a raw transaction in hex format over the Bitcoin network.</p>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Raw transaction data</ion-label>\n            <ion-input type="text" [(ngModel)]="transaction" formControlName="rawData"></ion-input>\n          </ion-item>\n\n          <ion-item *ngIf="!txForm.controls.rawData.valid">\n            <p>Raw transaction data must be a valid hexadecimal string.</p>\n          </ion-item>\n\n          <ion-item>\n            <button ion-button outline (click)="send()" [disabled]="!txForm.touched || !txForm.valid" type="button" tabindex="0">Send\n              transaction</button>\n          </ion-item>\n        </ion-list>\n      </form>\n    </div>\n  </ion-grid>\n</ion-content>\n<footer [chainNetwork]="chainNetwork"></footer>'/*ion-inline-end:"/home/justin/repos/bitcore/packages/insight/src/pages/broadcast-tx/broadcast-tx.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_price_price__["a" /* PriceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], BroadcastTxPage);
    return BroadcastTxPage;
}());

//# sourceMappingURL=broadcast-tx.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_error_error_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_head_nav_head_nav_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_latest_blocks_latest_blocks_module__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_loader_loader_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_7__home__["a" /* HomePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_5__components_latest_blocks_latest_blocks_module__["a" /* LatestBlocksComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_module__["a" /* FooterComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_head_nav_head_nav_module__["a" /* HeadNavComponentModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_loader_loader_module__["a" /* LoaderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_error_error_module__["a" /* ErrorComponentModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_7__home__["a" /* HomePage */]]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_latest_blocks_latest_blocks__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_price_price__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};







var HomePage = /** @class */ (function () {
    function HomePage(nav, navParams, apiProvider, priceProvider, events, currencyProvider) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.priceProvider = priceProvider;
        this.events = events;
        this.currencyProvider = currencyProvider;
        this.nav.viewWillEnter.subscribe(function (view) {
            if (view.data.chain === 'ALL') {
                _this.load();
            }
        });
        this.load();
    }
    HomePage.prototype.load = function () {
        var _this = this;
        var chain = this.navParams.get('chain') || this.apiProvider.getConfig().chain;
        var network = this.navParams.get('network') || this.apiProvider.getConfig().network;
        this.chainNetwork = {
            chain: chain,
            network: network
        };
        if (this.chainNetwork.chain === 'ALL') {
            this.apiProvider.getAvailableNetworks().subscribe(function (data) {
                var newNetworks = data
                    .map(function (x) { return x.supported; })
                    .reduce(function (agg, arr) { return __spreadArrays(agg).concat(arr); }, []);
                _this.availableNetworks = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](newNetworks, function (o) { return o.chain !== 'ALL'; });
            });
        }
        this.priceProvider.setCurrency();
        this.apiProvider.changeNetwork(this.chainNetwork);
        this.currencyProvider.setCurrency(this.chainNetwork);
    };
    HomePage.prototype.openPage = function (page) {
        this.nav.push(page, {
            chain: this.chain,
            network: this.network
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('latestBlocks'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_latest_blocks_latest_blocks__["a" /* LatestBlocksComponent */])
    ], HomePage.prototype, "latestBlocks", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/justin/repos/bitcore/packages/insight/src/pages/home/home.html"*/'<head-nav [chainNetwork]="chainNetwork"></head-nav>\n\n<ion-content class="content-container">\n    <div *ngIf="chainNetwork.chain === \'ALL\'">\n        <h1 class="content-container--heading all-coins u-font-large">Latest Blocks</h1>\n        <ion-grid class="page-content-grid">\n            <ion-row>\n                <ion-col col-md-6 col-12 class="page-content" *ngFor="let availableNetwork of availableNetworks">\n                    <ion-item class="chain" no-lines>\n                        <ion-avatar item-start>\n                            <img *ngIf="availableNetwork.network === \'mainnet\'" src="assets/img/currency_logos/{{ availableNetwork.chain.toLowerCase() }}.svg" class="logo" alt="{{ availableNetwork.chain }}"/>\n                            <img *ngIf="availableNetwork.network !== \'mainnet\' && availableNetwork.chain===\'BTC\'" src="assets/img/btcicon-testnet.svg" class="logo" alt="BTC"/>\n                            <img *ngIf="availableNetwork.network !== \'mainnet\' && availableNetwork.chain===\'BCH\'" src="assets/img/bchicon-testnet.svg" class="logo" alt="BCH"/>\n                            <img *ngIf="availableNetwork.network !== \'mainnet\' && availableNetwork.chain===\'DOGE\'" src="assets/img/doge-logo-testnet.svg" class="logo" alt="DOGE"/>\n                            <img *ngIf="availableNetwork.network !== \'mainnet\' && availableNetwork.chain===\'LTC\'" src="assets/img/ltc-testnet.svg" class="logo" alt="LTC"/>\n                          <img [ngClass]="{\'secondary\': availableNetwork.network ===\'testnet\'}" *ngIf="availableNetwork.network !== \'mainnet\' && availableNetwork.chain===\'ETH\'" src="assets/img/currency_logos/eth.svg" class="logo" alt="ETH"/>\n                        </ion-avatar>\n                        <ion-label color="dark" item-end>\n                            {{ availableNetwork.chain }} <small class="pill"> {{ availableNetwork.network }}</small>\n                        </ion-label>\n                    </ion-item>\n                    <latest-blocks [showTimeAs]="\'age\'" [showAllBlocksButton]="true" [chainNetwork]="availableNetwork" [numBlocks]="\'5\'" #latestBlocks>\n                    </latest-blocks>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n\n    </div>\n\n    <div *ngIf="chainNetwork.chain !== \'ALL\'">\n        <ion-grid class="page-content-grid">\n            <ion-row>\n                <ion-col col-12 class="page-content">\n                    <h1 class="content-container--heading u-font-large">Latest Blocks</h1>\n                    <latest-blocks [showTimeAs]="\'age\'" [showAllBlocksButton]="true" [chainNetwork]="chainNetwork" #latestBlocks>\n                    </latest-blocks>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>\n<footer [chainNetwork]="chainNetwork"></footer>\n'/*ion-inline-end:"/home/justin/repos/bitcore/packages/insight/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_price_price__["a" /* PriceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TxsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__ = __webpack_require__(47);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TxsProvider = /** @class */ (function () {
    function TxsProvider(httpClient, currency, blocksProvider, apiProvider) {
        this.httpClient = httpClient;
        this.currency = currency;
        this.blocksProvider = blocksProvider;
        this.apiProvider = apiProvider;
    }
    TxsProvider.prototype.getFee = function (tx) {
        var sumSatoshis = function (arr) {
            return arr.reduce(function (prev, cur) { return prev + cur.value; }, 0);
        };
        var inputs = sumSatoshis(tx.vin);
        var outputs = sumSatoshis(tx.vout);
        var fee = tx.isCoinBase ? 0 : inputs - outputs;
        return fee;
    };
    TxsProvider.prototype.toEthAppTx = function (tx) {
        return __assign(__assign({}, this.toAppTx(tx)), { to: tx.to, from: tx.from, gasLimit: tx.gasLimit, gasPrice: tx.gasPrice });
    };
    TxsProvider.prototype.toUtxoCoinsAppTx = function (tx) {
        return __assign(__assign({}, this.toAppTx(tx)), { vin: [], vout: [], version: tx.version });
    };
    TxsProvider.prototype.toAppTx = function (tx) {
        return {
            txid: tx.txid,
            fee: null,
            blockheight: tx.blockHeight,
            confirmations: tx.confirmations,
            blockhash: tx.blockHash,
            blocktime: new Date(tx.blockTime).getTime() / 1000,
            time: new Date(tx.blockTime).getTime() / 1000,
            isCoinBase: tx.coinbase,
            size: tx.size,
            locktime: tx.locktime,
            valueOut: tx.value
        };
    };
    TxsProvider.prototype.toAppEthCoin = function (coin) {
        return {
            to: coin.to,
            from: coin.from,
            txid: coin.txid,
            fee: coin.fee,
            valueOut: coin.value,
            height: parseInt(coin.blockHeight, 10),
            blockheight: parseInt(coin.blockHeight, 10),
            time: new Date(coin.blockTime).getTime() / 1000
        };
    };
    TxsProvider.prototype.toAppCoin = function (coin) {
        return {
            txid: coin.txid,
            mintTxid: coin.mintTxid,
            mintHeight: coin.mintHeight,
            spentHeight: coin.spentHeight,
            valueOut: coin.value,
            value: coin.value,
            spentTxid: coin.spentTxid
        };
    };
    TxsProvider.prototype.getTxs = function (chainNetwork, args) {
        var queryString = '';
        if (args.blockHash) {
            queryString += "?blockHash=" + args.blockHash;
        }
        var url = this.apiProvider.getUrl(chainNetwork) + "/tx/" + queryString;
        return this.httpClient.get(url);
    };
    TxsProvider.prototype.getTx = function (hash, chainNetwork) {
        var url = this.apiProvider.getUrl(chainNetwork) + "/tx/" + hash;
        return this.httpClient.get(url);
    };
    TxsProvider.prototype.getDailyTransactionHistory = function (chainNetwork) {
        var url = this.apiProvider.getUrl(chainNetwork) + "/stats/daily-transactions";
        return this.httpClient.get(url);
    };
    TxsProvider.prototype.getCoins = function (txId, chainNetwork) {
        var url = this.apiProvider.getUrl(chainNetwork) + "/tx/" + txId + "/coins";
        return this.httpClient.get(url);
    };
    TxsProvider.prototype.getConfirmations = function (blockheight, chainNetwork) {
        return this.blocksProvider.getCurrentHeight(chainNetwork).map(function (data) {
            return blockheight > 0 ? data.height - blockheight + 1 : blockheight;
        });
    };
    TxsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], TxsProvider);
    return TxsProvider;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_address_address__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_transactions_transactions__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddressPage = /** @class */ (function () {
    function AddressPage(navParams, currencyProvider, txProvider, apiProvider, priceProvider, addrProvider, events) {
        this.navParams = navParams;
        this.currencyProvider = currencyProvider;
        this.txProvider = txProvider;
        this.apiProvider = apiProvider;
        this.priceProvider = priceProvider;
        this.addrProvider = addrProvider;
        this.events = events;
        this.loading = true;
        this.address = {};
        this.nroTransactions = 0;
        this.addrStr = navParams.get('addrStr');
        var chain = navParams.get('chain');
        var network = navParams.get('network');
        this.chainNetwork = {
            chain: chain,
            network: network
        };
        this.apiProvider.changeNetwork(this.chainNetwork);
        this.currencyProvider.setCurrency(this.chainNetwork);
        this.priceProvider.setCurrency();
    }
    AddressPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.events.subscribe('CoinList', function (d) {
            _this.nroTransactions = d.length;
        });
        this.addrProvider
            .getAddressBalance(this.addrStr, this.chainNetwork)
            .subscribe(function (data) {
            _this.address = {
                balance: data.balance || 0,
                confirmed: data.confirmed || 0,
                unconfirmed: data.unconfirmed,
                addrStr: _this.addrStr
            };
            _this.loading = false;
        }, function (err) {
            _this.errorMessage = err;
            _this.loading = false;
        });
    };
    AddressPage.prototype.getConvertedNumber = function (n) {
        return this.currencyProvider.getConvertedNumber(n, this.chainNetwork.chain);
    };
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-address',template:/*ion-inline-start:"/home/justin/repos/bitcore/packages/insight/src/pages/address/address.html"*/'<head-nav [chainNetwork]="chainNetwork"></head-nav>\n\n<ion-content>\n  <ion-grid fixed>\n\n    <div class="page-content">\n\n      <loader *ngIf="loading" [type]="\'title\'"></loader>\n\n      <error [message]="errorMessage" *ngIf="!loading && errorMessage "></error>\n\n      <div *ngIf="!loading && !errorMessage">\n        <h1 class="content-container--heading">Address <small>{{ getConvertedNumber(address.balance, chainNetwork.chain) | number:\'1.0-8\' }}\n            {{ currencyProvider.currencySymbol }}</small></h1>\n        <p class="ellipsis">{{ address.addrStr }}\n          <button title="copy to clipboard" type="button" tabindex="0" [copyToClipboard]="address.addrStr">\n            <ion-icon md="md-copy"></ion-icon>\n          </button>\n        </p>\n\n        <h2>Summary</h2>\n        <ion-grid>\n          <ion-row align-items-start justify-content-center>\n            <ion-col>\n              <ion-list class="list--summary">\n                <ion-item>\n                  Confirmed Balance\n                  <ion-note item-end>\n                    {{ getConvertedNumber(address.confirmed, chainNetwork.chain) | number:\'1.0-8\' }} {{ currencyProvider.currencySymbol }}\n                  </ion-note>\n                </ion-item>\n                <ion-item *ngIf="address.unconfirmed > 0">\n                  Unconfirmed Balance\n                  <ion-note item-end>\n                    {{ getConvertedNumber(address.unconfirmed, chainNetwork.chain) | number:\'1.0-8\' }} {{ currencyProvider.currencySymbol }}\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Nro. Transactions\n                  <ion-note item-end>\n                    {{ nroTransactions || 0 }}\n                  </ion-note>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n            <ion-col col-auto text-center>\n              <qr-code [value]="address.addrStr" [size]="160"></qr-code>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <h1>Transactions</h1>\n        <coin-list  [addrStr]="address.addrStr" [chainNetwork]="chainNetwork"></coin-list>\n      </div>\n\n    </div>\n  </ion-grid>\n</ion-content>\n<footer [chainNetwork]="chainNetwork"></footer>\n'/*ion-inline-end:"/home/justin/repos/bitcore/packages/insight/src/pages/address/address.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_transactions_transactions__["a" /* TxsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_price_price__["a" /* PriceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_address_address__["a" /* AddressProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_blocks_blocks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_price_price__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_redir_redir__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_transactions_transactions__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BlockDetailPage = /** @class */ (function () {
    function BlockDetailPage(navParams, currencyProvider, redirProvider, txProvider, blocksProvider, apiProvider, priceProvider) {
        this.navParams = navParams;
        this.currencyProvider = currencyProvider;
        this.redirProvider = redirProvider;
        this.txProvider = txProvider;
        this.blocksProvider = blocksProvider;
        this.apiProvider = apiProvider;
        this.priceProvider = priceProvider;
        this.loading = true;
        this.block = {
            tx: []
        };
        this.blockHash = navParams.get('blockHash');
        var chain = navParams.get('chain');
        var network = navParams.get('network');
        this.chainNetwork = {
            chain: chain,
            network: network
        };
        this.apiProvider.changeNetwork(this.chainNetwork);
        this.currencyProvider.setCurrency(this.chainNetwork);
        this.priceProvider.setCurrency();
    }
    BlockDetailPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.blocksProvider.getBlock(this.blockHash, this.chainNetwork).subscribe(function (response) {
            var block;
            if (__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* UTXO_CHAINS */].includes(_this.chainNetwork.chain)) {
                block = _this.blocksProvider.toUtxoCoinAppBlock(response);
            }
            if (_this.chainNetwork.chain === 'ETH') {
                block = _this.blocksProvider.toEthAppBlock(response);
            }
            _this.block = block;
            _this.txProvider
                .getConfirmations(_this.block.height, _this.chainNetwork)
                .subscribe(function (confirmations) { return (_this.confirmations = confirmations); });
            _this.loading = false;
        }, function (err) {
            _this.errorMessage = err;
            _this.loading = false;
        });
    };
    BlockDetailPage.prototype.goToPreviousBlock = function () {
        this.redirProvider.redir('block-detail', {
            blockHash: this.block.previousblockhash,
            chain: this.chainNetwork.chain,
            network: this.chainNetwork.network
        });
    };
    BlockDetailPage.prototype.goToNextBlock = function () {
        this.redirProvider.redir('block-detail', {
            blockHash: this.block.nextblockhash,
            chain: this.chainNetwork.chain,
            network: this.chainNetwork.network
        });
    };
    BlockDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-block-detail',template:/*ion-inline-start:"/home/justin/repos/bitcore/packages/insight/src/pages/block-detail/block-detail.html"*/'<head-nav [chainNetwork]="chainNetwork"></head-nav>\n<ion-content>\n  <ion-grid fixed>\n\n    <div class="page-content">\n\n      <loader *ngIf="loading" [type]="\'title\'"></loader>\n\n      <error [message]="errorMessage" *ngIf="!loading && errorMessage"></error>\n\n      <div *ngIf="!loading && !errorMessage">\n\n        <h1 class="content-container--heading">Block #{{ block.height }}</h1>\n        <p class="item-hash">\n          <b>Block Hash</b> {{ block.hash }} <button [copyToClipboard]="block.hash" title="copy to clipboard" type="button" tabindex="0">\n            <ion-icon md="md-copy"></ion-icon>\n          </button>\n        </p>\n\n        <h1 class="u-font-large">Summary</h1>\n\n        <ion-list *ngIf="!loading" class="list--summary">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12 col-md class="allow-truncated-text">\n                <block-summary *ngIf="chainNetwork.chain === \'BTC\' || chainNetwork.chain === \'BCH\' || chainNetwork.chain === \'DOGE\'" [block]="block" [chainNetwork]="chainNetwork"></block-summary>\n                <block-summary-eth *ngIf="chainNetwork.chain === \'ETH\'" [block]="block" [chainNetwork]="chainNetwork"></block-summary-eth>\n                <ion-item>\n                  Number of Transactions\n                  <ion-note item-end>\n                    {{ block.tx.length }}\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Height\n                  <ion-note item-end>\n                    {{ block.height }}\n                    <span [hidden]="!block.isMainChain">(Mainchain)</span>\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Block Reward\n                  <ion-note item-end>\n                    {{ currencyProvider.getConvertedNumber(block.reward, chainNetwork.chain) | number }}\n                    {{ currencyProvider.currencySymbol }}\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Timestamp\n                  <ion-note item-end>\n                    {{ block.time * 1000 | date:\'long\' }}\n                  </ion-note>\n                </ion-item>\n          <!-- TODO      <ion-item>\n                  Mined by\n                  <ion-note item-end *ngIf="block.poolInfo">\n                    <a href="{{ block.poolInfo.url }}" role="button" tabindex="0">{{ block.poolInfo.poolName }}</a>\n                  </ion-note>\n                </ion-item> -->\n              </ion-col>\n              <ion-col col-12 col-md class="allow-truncated-text">\n                <ion-item>\n                  Difficulty\n                  <ion-note item-end>\n                    {{ block.difficulty }}\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Size (bytes)\n                  <ion-note item-end>\n                    {{ block.size }}\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Nonce\n                  <ion-note item-end>\n                    {{ block.nonce }}\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Previous Block\n                  <ion-note item-end>\n                    <a (click)="goToPreviousBlock()"\n                      [ngClass]="{\'disabled-link\': block.height - 1 === 0 }" role="button" tabindex="0">{{ block.height - 1 }}</a>\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Next Block\n                  <ion-note item-end>\n                    <a (click)="goToNextBlock()"\n                      [ngClass]="{\'disabled-link\': !block.nextblockhash }" role="button" tabindex="0">{{ block.height + 1 }}</a>\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Confirmations\n                  <ion-note item-end>\n                    {{ confirmations }}\n                  </ion-note>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-list>\n\n        <h2>Transactions</h2>\n        <transaction-list [blocktime]="block.time" [queryType]="\'blockHash\'" [queryValue]="block.hash" [chainNetwork]="chainNetwork">\n        </transaction-list>\n      </div>\n\n    </div>\n  </ion-grid>\n</ion-content>\n<footer [chainNetwork]="chainNetwork"></footer>\n'/*ion-inline-end:"/home/justin/repos/bitcore/packages/insight/src/pages/block-detail/block-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_redir_redir__["a" /* RedirProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_transactions_transactions__["a" /* TxsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_price_price__["a" /* PriceProvider */]])
    ], BlockDetailPage);
    return BlockDetailPage;
}());

//# sourceMappingURL=block-detail.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_redir_redir__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_transactions_transactions__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TransactionPage = /** @class */ (function () {
    function TransactionPage(navParams, currencyProvider, redirProvider, apiProvider, txProvider, priceProvider) {
        this.navParams = navParams;
        this.currencyProvider = currencyProvider;
        this.redirProvider = redirProvider;
        this.apiProvider = apiProvider;
        this.txProvider = txProvider;
        this.priceProvider = priceProvider;
        this.loading = true;
        this.tx = {};
        this.txId = navParams.get('txId');
        this.vout = navParams.get('vout');
        this.fromVout = navParams.get('fromVout') || undefined;
        var chain = navParams.get('chain');
        var network = navParams.get('network');
        this.chainNetwork = {
            chain: chain,
            network: network
        };
        this.apiProvider.changeNetwork(this.chainNetwork);
        this.currencyProvider.setCurrency(this.chainNetwork);
        this.priceProvider.setCurrency();
    }
    TransactionPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.txProvider.getTx(this.txId, this.chainNetwork).subscribe(function (response) {
            var tx;
            if (__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* UTXO_CHAINS */].includes(_this.chainNetwork.chain)) {
                tx = _this.txProvider.toUtxoCoinsAppTx(response);
            }
            if (_this.chainNetwork.chain === 'ETH') {
                tx = _this.txProvider.toEthAppTx(response);
            }
            _this.tx = tx;
            _this.loading = false;
            _this.txProvider
                .getConfirmations(_this.tx.blockheight, _this.chainNetwork)
                .subscribe(function (confirmations) {
                if (confirmations === -3) {
                    _this.errorMessage =
                        'This transaction is invalid and will never confirm, because some of its inputs are already spent.';
                }
                _this.confirmations = confirmations;
            });
            // Be aware that the tx component is loading data into the tx object
        }, function (err) {
            _this.errorMessage = err;
            _this.loading = false;
        });
    };
    TransactionPage.prototype.goToBlock = function (blockHash) {
        this.redirProvider.redir('block-detail', {
            blockHash: blockHash,
            chain: this.chainNetwork.chain,
            network: this.chainNetwork.network
        });
    };
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transaction',template:/*ion-inline-start:"/home/justin/repos/bitcore/packages/insight/src/pages/transaction/transaction.html"*/'<head-nav [chainNetwork]="chainNetwork"></head-nav>\n<ion-content>\n  <ion-grid fixed>\n\n    <div class="page-content">\n\n      <loader *ngIf="loading" [type]="\'title\'"></loader>\n\n      <error [message]="errorMessage" *ngIf="!loading && errorMessage && confirmations !== -3 "></error>\n\n      <div *ngIf="(!loading && !errorMessage) || confirmations === -3">\n        <h1 ion-text class="content-container--heading">\n          Transaction\n          <ion-note *ngIf="vout !== undefined">\n            <span class="tx-note" ion-text *ngIf="fromVout">Output {{ vout }}</span>\n            <span class="tx-note" ion-text *ngIf="!fromVout">Input {{ vout }}</span>\n          </ion-note>\n        </h1>\n\n        <p class="item-hash">\n          <b>Transaction Hash</b> {{ tx.txid }} <button [copyToClipboard]="tx.txid" title="copy to clipboard" type="button" tabindex="0">\n            <ion-icon md="md-copy"></ion-icon>\n          </button>\n        </p>\n\n        <h2>Summary</h2>\n\n        <error [message]="errorMessage" *ngIf="!loading && errorMessage"></error>\n\n        <ion-list class="list--summary">\n\n          <transaction-summary *ngIf="chainNetwork.chain === \'BTC\' || chainNetwork.chain === \'BCH\' || chainNetwork.chain === \'DOGE\'" [tx]="tx" [chainNetwork]="chainNetwork"></transaction-summary>\n          <transaction-summary-eth *ngIf="chainNetwork.chain === \'ETH\'" [tx]="tx" [chainNetwork]="chainNetwork"></transaction-summary-eth>\n\n          <ion-item>\n            Received Time\n            <ion-note item-end>\n              {{ tx.time * 1000 | date:\'long\' }}\n            </ion-note>\n          </ion-item>\n          <ion-item>\n            Included in Block\n            <ion-note item-end>\n              <a (click)="goToBlock(tx.blockhash)" role="button" tabindex="0">{{ tx.blockhash }}</a>\n            </ion-note>\n            <ion-note *ngIf="confirmations === -3" item-end>\n              Invalid\n            </ion-note>\n            <ion-note *ngIf="confirmations === -1" item-end>\n              Unconfirmed\n            </ion-note>\n          </ion-item>\n        </ion-list>\n\n        <h2>Details</h2>\n\n        <transaction-details *ngIf="chainNetwork.chain === \'BTC\' || chainNetwork.chain === \'BCH\' || chainNetwork.chain === \'DOGE\'" [tx]="tx" [showCoins]="true" [chainNetwork]="chainNetwork"></transaction-details>\n        <transaction-details-eth *ngIf="chainNetwork.chain === \'ETH\'" [tx]="tx" [showCoins]="true" [chainNetwork]="chainNetwork"></transaction-details-eth>\n      </div>\n\n    </div>\n\n  </ion-grid>\n</ion-content>\n<footer [chainNetwork]="chainNetwork"></footer>\n'/*ion-inline-end:"/home/justin/repos/bitcore/packages/insight/src/pages/transaction/transaction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_redir_redir__["a" /* RedirProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_transactions_transactions__["a" /* TxsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_price_price__["a" /* PriceProvider */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedirProvider = /** @class */ (function () {
    function RedirProvider(events) {
        this.events = events;
    }
    RedirProvider.prototype.redir = function (redirTo, params) {
        this.events.publish('redirToEvent', { redirTo: redirTo, params: params });
    };
    RedirProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], RedirProvider);
    return RedirProvider;
}());

//# sourceMappingURL=redir.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_address_address__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_blocks_blocks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_default_default__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_logger_logger__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_price_price__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_redir_redir__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_search_search__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_transactions_transactions__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(851);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* InsightApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__pages__["c" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* InsightApp */], {
                    mode: 'md',
                    animate: false
                }, {
                    links: [
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'address', segment: ':chain/:network/address/:addrStr', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/blocks/blocks.module#BlocksPageModule', name: 'blocks', segment: ':chain/:network/blocks', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/block-detail/block-detail.module#BlockDetailPageModule', name: 'block-detail', segment: ':chain/:network/block/:blockHash', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/broadcast-tx/broadcast-tx.module#BroadcastTxPageModule', name: 'broadcast-tx', segment: ':chain/:network/broadcast-tx', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'home', segment: ':chain/:network/home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'search', segment: ':chain/:network/search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction/transaction.module#TransactionPageModule', name: 'transaction', segment: ':chain/:network/tx/:txId', priority: 'low', defaultHistory: ['home'] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* InsightApp */], __WEBPACK_IMPORTED_MODULE_4__pages__["b" /* HomePage */], __WEBPACK_IMPORTED_MODULE_4__pages__["a" /* BlocksPage */]],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__["a" /* HttpErrorInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_currency_currency__["a" /* CurrencyProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_blocks_blocks__["a" /* BlocksProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_transactions_transactions__["a" /* TxsProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_default_default__["a" /* DefaultProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_price_price__["a" /* PriceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_search_search__["a" /* SearchProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_redir_redir__["a" /* RedirProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_logger_logger__["a" /* Logger */],
                __WEBPACK_IMPORTED_MODULE_5__providers_address_address__["a" /* AddressProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denomination_denomination_module__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer__ = __webpack_require__(823);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterComponentModule = /** @class */ (function () {
    function FooterComponentModule() {
    }
    FooterComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__footer__["a" /* FooterComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__denomination_denomination_module__["a" /* DenominationComponentModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__footer__["a" /* FooterComponent */]]
        })
    ], FooterComponentModule);
    return FooterComponentModule;
}());

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadNavComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denomination_denomination_module__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__head_nav__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeadNavComponentModule = /** @class */ (function () {
    function HeadNavComponentModule() {
    }
    HeadNavComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__head_nav__["a" /* HeadNavComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__denomination_denomination_module__["a" /* DenominationComponentModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__head_nav__["a" /* HeadNavComponent */]]
        })
    ], HeadNavComponentModule);
    return HeadNavComponentModule;
}());

//# sourceMappingURL=head-nav.module.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LoaderComponent.prototype, "type", void 0);
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loader',template:/*ion-inline-start:"/home/justin/repos/bitcore/packages/insight/src/components/loader/loader.html"*/'<div *ngIf="type == \'title\'">\n  <h1 class="title animated-background"></h1>\n  <p class="subtitle animated-background"></p>\n</div>\n\n<ion-row *ngIf="type == \'grid\'">\n  <ion-col col-2>\n    <div class="left-item animated-background"></div>\n  </ion-col>\n  <ion-col col-4>\n    <div class="right-item animated-background"></div>\n  </ion-col>\n  <ion-col text-right>\n    <div class="right-item animated-background"></div>\n  </ion-col>\n  <ion-col col-2 hideWhen="portrait">\n    <div class="animated-background"></div>\n  </ion-col>\n  <ion-col col-2 text-right>\n    <div class="right-item animated-background"></div>\n  </ion-col>\n</ion-row>\n\n<div *ngIf="type == \'tx-list\' || type == \'tx-full-list\'" class="box-loader">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-7>\n        <div class="left-item animated-background"></div>\n      </ion-col>\n      <ion-col col-5 text-right>\n        <ion-note>\n          <div class="right-item animated-background"></div>\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-end class="small" *ngIf="type == \'tx-full-list\'">\n      <ion-col col-12 text-right text-uppercase>\n        <ion-chip class="animated-background">\n        </ion-chip>\n        <ion-chip class="animated-background">\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>'/*ion-inline-end:"/home/justin/repos/bitcore/packages/insight/src/components/loader/loader.html"*/
        })
    ], LoaderComponent);
    return LoaderComponent;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ErrorComponent.prototype, "message", void 0);
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'error',template:/*ion-inline-start:"/home/justin/repos/bitcore/packages/insight/src/components/error/error.html"*/'<ion-row class="error-message">\n  <ion-col col-12>\n    {{ message }}\n  </ion-col>\n</ion-row>'/*ion-inline-end:"/home/justin/repos/bitcore/packages/insight/src/components/error/error.html"*/
        })
    ], ErrorComponent);
    return ErrorComponent;
}());

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(nav) {
        this.nav = nav;
    }
    FooterComponent.prototype.openPage = function (page) {
        this.nav.push(page, {
            chain: this.chainNetwork.chain,
            network: this.chainNetwork.network
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FooterComponent.prototype, "chainNetwork", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',template:/*ion-inline-start:"/home/justin/repos/bitcore/packages/insight/src/components/footer/footer.html"*/'<ion-footer>\n  <ion-toolbar fixed color="dark">\n    <div class="pages">\n      <a *ngIf="chainNetwork" (click)="openPage(\'broadcast-tx\')" role="button" tabindex="0">Broadcast Transaction</a>\n    </div>\n    <div class="about">\n      <a href="https://github.com/bitpay/bitcore/tree/master/packages/insight" role="button" rel="noopener noreferrer" tabindex="0">\n        <span class="logo">insight</span>\n        <span class="version">v8.9.0</span>\n      </a>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/justin/repos/bitcore/packages/insight/src/components/footer/footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_logger_logger__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_price_price__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_redir_redir__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_search_search__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__denomination_denomination__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HeadNavComponent = /** @class */ (function () {
    function HeadNavComponent(app, currencyProvider, priceProvider, actionSheetCtrl, popoverCtrl, toastCtrl, searchProvider, redirProvider, navCtrl, logger, apiProvider) {
        this.app = app;
        this.currencyProvider = currencyProvider;
        this.priceProvider = priceProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.searchProvider = searchProvider;
        this.redirProvider = redirProvider;
        this.navCtrl = navCtrl;
        this.logger = logger;
        this.apiProvider = apiProvider;
        this.showSearch = false;
    }
    HeadNavComponent.prototype.ngOnInit = function () {
        this.params = {
            chain: this.chainNetwork.chain,
            network: this.chainNetwork.network
        };
    };
    HeadNavComponent.prototype.goHome = function (chainNetwork) {
        this.navCtrl.setRoot('home', {
            chain: chainNetwork ? chainNetwork.chain : 'ALL',
            network: chainNetwork ? chainNetwork.network : 'mainnet'
        });
    };
    HeadNavComponent.prototype.search = function () {
        var _this = this;
        this.q = this.q.replace(/\s/g, '');
        this.searchProvider
            .determineInputType(this.q)
            .subscribe(function (searchInputs) {
            if (searchInputs.length) {
                _this.showSearch = false;
                _this.searchProvider
                    .search(searchInputs, _this.chainNetwork)
                    .subscribe(function (res) {
                    _this.processAllResponse(res);
                }, function (err) {
                    _this.wrongSearch('Server error. Please try again');
                    _this.logger.error(err);
                });
            }
            else {
                _this.wrongSearch('Invalid search, please search for an address, transaction, or block');
            }
        });
    };
    HeadNavComponent.prototype.processResponse = function (response) {
        if (response.addr) {
            return {
                redirTo: 'address',
                params: response.addr[0] ? response.addr[0].address : this.q,
                type: 'addrStr'
            };
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_lodash__["reduce"](response, function (result, value) {
                if (value.tx) {
                    result = {
                        redirTo: 'transaction',
                        params: value.tx.txid,
                        type: 'txId'
                    };
                }
                else if (value.block) {
                    result = {
                        redirTo: 'block-detail',
                        params: value.block.hash,
                        type: 'blockHash'
                    };
                }
                return result;
            }, { redirTo: '', params: '', type: '' });
        }
    };
    HeadNavComponent.prototype.processAllResponse = function (response) {
        var _this = this;
        var resFiltered = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](response, function (o) {
            return (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isString"](o) &&
                !((o.addr && o.addr.length === 0) ||
                    (o.block && o.block.length === 0) ||
                    (o.tx && o.tx.length === 0)));
        });
        if (resFiltered.length !== 0) {
            var matches_1 = {
                blocks: [],
                txs: [],
                addresses: []
            };
            resFiltered.map(function (res) {
                res.block
                    ? matches_1.blocks.push(res.block)
                    : res.tx
                        ? matches_1.txs.push(res.tx)
                        : matches_1.addresses.push(res.addr[0]);
            });
            // ETH addresses doesn't have 'address' property
            if (matches_1.addresses.length > 0) {
                matches_1.addresses.forEach(function (addr) {
                    if (!addr.address) {
                        addr.address = _this.q;
                    }
                });
            }
            // Skip results screen if there is only one result
            var totalMatches = matches_1.addresses.length + matches_1.txs.length + matches_1.blocks.length;
            if (totalMatches === 1) {
                if (matches_1.addresses.length) {
                    return this.redirProvider.redir('address', {
                        addrStr: matches_1.addresses[0].address,
                        chain: matches_1.addresses[0].chain,
                        network: matches_1.addresses[0].network
                    });
                }
                else if (matches_1.txs.length) {
                    return this.redirProvider.redir('transaction', {
                        txId: matches_1.txs[0].txid,
                        chain: matches_1.txs[0].chain,
                        network: matches_1.txs[0].network
                    });
                }
                else {
                    return this.redirProvider.redir('block-detail', {
                        blockHash: matches_1.blocks[0].hash,
                        chain: matches_1.blocks[0].chain,
                        network: matches_1.blocks[0].network
                    });
                }
            }
            this.redirProvider.redir('search', {
                matches: matches_1,
                chain: this.chainNetwork.chain,
                network: this.chainNetwork.network
            });
        }
        else {
            var message = 'No matching records found!';
            if (this.chainNetwork.chain !== 'ALL') {
                // Give the user currency specific error since search is limited to one chain/network
                message = "No matching records found on the " + this.chainNetwork.chain + " " + this.chainNetwork.network + ". Select a different chain or try a different search";
            }
            this.wrongSearch(message);
            this.logger.info(message);
        }
    };
    HeadNavComponent.prototype.wrongSearch = function (message) {
        var _this = this;
        this.loading = false;
        this.presentToast(message);
        setTimeout(function () {
            _this.searchbar.setFocus();
        }, 150);
    };
    HeadNavComponent.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'top',
            showCloseButton: true
        });
        toast.present();
    };
    HeadNavComponent.prototype.changeCurrency = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_9__denomination_denomination__["a" /* DenominationComponent */], {
            config: this.chainNetwork,
            currencySymbol: this.currencyProvider.getCurrency()
        });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!data) {
                return;
            }
            else if (data.chainNetwork !== _this.chainNetwork) {
                _this.apiProvider.changeNetwork(data.chainNetwork);
                _this.setCurrency(data.chainNetwork);
                _this.goHome(data.chainNetwork);
            }
            else if (data.currencySymbol !== _this.currencyProvider.getCurrency()) {
                _this.setCurrency(_this.chainNetwork, data.currencySymbol);
            }
        });
    };
    HeadNavComponent.prototype.setCurrency = function (chainNetwork, currencySymbol) {
        this.currencyProvider.setCurrency(chainNetwork, currencySymbol);
        this.priceProvider.setCurrency(currencySymbol);
    };
    HeadNavComponent.prototype.toggleSearch = function () {
        this.showSearch = !this.showSearch;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Searchbar */])
    ], HeadNavComponent.prototype, "searchbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HeadNavComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeadNavComponent.prototype, "chainNetwork", void 0);
    HeadNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'head-nav',template:/*ion-inline-start:"/home/justin/repos/bitcore/packages/insight/src/components/head-nav/head-nav.html"*/'<ion-header no-border>\n  <ion-navbar color="bp-blue" class="nav-container" hideBackButton>\n    <ion-title (click)="goHome()" class="logo-header"> \n      <a href="https://bitpay.com/insight/#/ALL/mainnet/home" role="button" tabindex="0"> insight </a>\n    </ion-title>\n    <!--search bar -->\n    <form class="search" (ngSubmit)="search()">\n      <div class="input-container">\n        <div class="search-image-container">\n          <img class="search-image" src="assets/img/search-icon.svg" alt="search icon" >\n        </div>\n        <input dir="auto" placeholder="{{ \'Search for block, transaction or address\' }}" [(ngModel)]="q" name="search" autocomplete="off" autocorrect="off" spellcheck="false">\n      </div>\n    </form>\n\n    <!--network selector -->\n    <ion-buttons>\n      <button ion-button (click)="changeCurrency($event)" class="cn-button hover-lite" type="button" tabindex="0">\n        <ion-icon class="currency-icon" name="logo-bitcoin" *ngIf="(chainNetwork.chain === \'BTC\' || chainNetwork.chain === \'BCH\') && currencyProvider?.currencySymbol !== \'USD\'"></ion-icon>\n        <ion-icon class="currency-icon" name="logo-usd" *ngIf="currencyProvider?.currencySymbol === \'USD\'"></ion-icon>\n        <span><img src="assets/img/doge-icon.svg" *ngIf="chainNetwork.chain === \'DOGE\' && currencyProvider?.currencySymbol !== \'USD\'" width="9" alt="DOGE"></span>\n        <span><img src="assets/img/ethicon.svg" *ngIf="chainNetwork.chain === \'ETH\' && currencyProvider?.currencySymbol !== \'USD\'" width="11" alt="ETH"></span>\n        <span class="currency-symbol" *ngIf="chainNetwork?.chain !== \'ALL\'">{{ currencyProvider?.currencySymbol }}</span>\n        <span class="currency-symbol" *ngIf="chainNetwork?.chain === \'ALL\'">Select blockchain</span>\n        <small class="pill" *ngIf="currencyProvider?.currencySymbol === \'USD\' && chainNetwork?.network === \'testnet\';else networkOnly">{{ chainNetwork?.chain }} - {{ (chainNetwork?.network) }} </small>\n        <ng-template #networkOnly><small class="pill" *ngIf="chainNetwork?.network === \'testnet\'">{{ (chainNetwork?.network) }} </small></ng-template>\n        &nbsp;\n        <ion-icon name="md-arrow-dropdown"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar class="mobile-searchbar" fixed>\n    <form (ngSubmit)="search()">\n      <ion-searchbar #searchbar placeholder="{{ \'Search for block, transaction or address\' }}" [(ngModel)]="q" name="search"></ion-searchbar>\n    </form>\n  </ion-toolbar>\n</ion-header>\n'/*ion-inline-end:"/home/justin/repos/bitcore/packages/insight/src/components/head-nav/head-nav.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_price_price__["a" /* PriceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_search_search__["a" /* SearchProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_redir_redir__["a" /* RedirProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], HeadNavComponent);
    return HeadNavComponent;
}());

//# sourceMappingURL=head-nav.js.map

/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 326,
	"./af.js": 326,
	"./ar": 327,
	"./ar-dz": 328,
	"./ar-dz.js": 328,
	"./ar-kw": 329,
	"./ar-kw.js": 329,
	"./ar-ly": 330,
	"./ar-ly.js": 330,
	"./ar-ma": 331,
	"./ar-ma.js": 331,
	"./ar-sa": 332,
	"./ar-sa.js": 332,
	"./ar-tn": 333,
	"./ar-tn.js": 333,
	"./ar.js": 327,
	"./az": 334,
	"./az.js": 334,
	"./be": 335,
	"./be.js": 335,
	"./bg": 336,
	"./bg.js": 336,
	"./bm": 337,
	"./bm.js": 337,
	"./bn": 338,
	"./bn.js": 338,
	"./bo": 339,
	"./bo.js": 339,
	"./br": 340,
	"./br.js": 340,
	"./bs": 341,
	"./bs.js": 341,
	"./ca": 342,
	"./ca.js": 342,
	"./cs": 343,
	"./cs.js": 343,
	"./cv": 344,
	"./cv.js": 344,
	"./cy": 345,
	"./cy.js": 345,
	"./da": 346,
	"./da.js": 346,
	"./de": 347,
	"./de-at": 348,
	"./de-at.js": 348,
	"./de-ch": 349,
	"./de-ch.js": 349,
	"./de.js": 347,
	"./dv": 350,
	"./dv.js": 350,
	"./el": 351,
	"./el.js": 351,
	"./en-au": 352,
	"./en-au.js": 352,
	"./en-ca": 353,
	"./en-ca.js": 353,
	"./en-gb": 354,
	"./en-gb.js": 354,
	"./en-ie": 355,
	"./en-ie.js": 355,
	"./en-il": 356,
	"./en-il.js": 356,
	"./en-in": 357,
	"./en-in.js": 357,
	"./en-nz": 358,
	"./en-nz.js": 358,
	"./en-sg": 359,
	"./en-sg.js": 359,
	"./eo": 360,
	"./eo.js": 360,
	"./es": 361,
	"./es-do": 362,
	"./es-do.js": 362,
	"./es-us": 363,
	"./es-us.js": 363,
	"./es.js": 361,
	"./et": 364,
	"./et.js": 364,
	"./eu": 365,
	"./eu.js": 365,
	"./fa": 366,
	"./fa.js": 366,
	"./fi": 367,
	"./fi.js": 367,
	"./fil": 368,
	"./fil.js": 368,
	"./fo": 369,
	"./fo.js": 369,
	"./fr": 370,
	"./fr-ca": 371,
	"./fr-ca.js": 371,
	"./fr-ch": 372,
	"./fr-ch.js": 372,
	"./fr.js": 370,
	"./fy": 373,
	"./fy.js": 373,
	"./ga": 374,
	"./ga.js": 374,
	"./gd": 375,
	"./gd.js": 375,
	"./gl": 376,
	"./gl.js": 376,
	"./gom-deva": 377,
	"./gom-deva.js": 377,
	"./gom-latn": 378,
	"./gom-latn.js": 378,
	"./gu": 379,
	"./gu.js": 379,
	"./he": 380,
	"./he.js": 380,
	"./hi": 381,
	"./hi.js": 381,
	"./hr": 382,
	"./hr.js": 382,
	"./hu": 383,
	"./hu.js": 383,
	"./hy-am": 384,
	"./hy-am.js": 384,
	"./id": 385,
	"./id.js": 385,
	"./is": 386,
	"./is.js": 386,
	"./it": 387,
	"./it-ch": 388,
	"./it-ch.js": 388,
	"./it.js": 387,
	"./ja": 389,
	"./ja.js": 389,
	"./jv": 390,
	"./jv.js": 390,
	"./ka": 391,
	"./ka.js": 391,
	"./kk": 392,
	"./kk.js": 392,
	"./km": 393,
	"./km.js": 393,
	"./kn": 394,
	"./kn.js": 394,
	"./ko": 395,
	"./ko.js": 395,
	"./ku": 396,
	"./ku.js": 396,
	"./ky": 397,
	"./ky.js": 397,
	"./lb": 398,
	"./lb.js": 398,
	"./lo": 399,
	"./lo.js": 399,
	"./lt": 400,
	"./lt.js": 400,
	"./lv": 401,
	"./lv.js": 401,
	"./me": 402,
	"./me.js": 402,
	"./mi": 403,
	"./mi.js": 403,
	"./mk": 404,
	"./mk.js": 404,
	"./ml": 405,
	"./ml.js": 405,
	"./mn": 406,
	"./mn.js": 406,
	"./mr": 407,
	"./mr.js": 407,
	"./ms": 408,
	"./ms-my": 409,
	"./ms-my.js": 409,
	"./ms.js": 408,
	"./mt": 410,
	"./mt.js": 410,
	"./my": 411,
	"./my.js": 411,
	"./nb": 412,
	"./nb.js": 412,
	"./ne": 413,
	"./ne.js": 413,
	"./nl": 414,
	"./nl-be": 415,
	"./nl-be.js": 415,
	"./nl.js": 414,
	"./nn": 416,
	"./nn.js": 416,
	"./oc-lnc": 417,
	"./oc-lnc.js": 417,
	"./pa-in": 418,
	"./pa-in.js": 418,
	"./pl": 419,
	"./pl.js": 419,
	"./pt": 420,
	"./pt-br": 421,
	"./pt-br.js": 421,
	"./pt.js": 420,
	"./ro": 422,
	"./ro.js": 422,
	"./ru": 423,
	"./ru.js": 423,
	"./sd": 424,
	"./sd.js": 424,
	"./se": 425,
	"./se.js": 425,
	"./si": 426,
	"./si.js": 426,
	"./sk": 427,
	"./sk.js": 427,
	"./sl": 428,
	"./sl.js": 428,
	"./sq": 429,
	"./sq.js": 429,
	"./sr": 430,
	"./sr-cyrl": 431,
	"./sr-cyrl.js": 431,
	"./sr.js": 430,
	"./ss": 432,
	"./ss.js": 432,
	"./sv": 433,
	"./sv.js": 433,
	"./sw": 434,
	"./sw.js": 434,
	"./ta": 435,
	"./ta.js": 435,
	"./te": 436,
	"./te.js": 436,
	"./tet": 437,
	"./tet.js": 437,
	"./tg": 438,
	"./tg.js": 438,
	"./th": 439,
	"./th.js": 439,
	"./tl-ph": 440,
	"./tl-ph.js": 440,
	"./tlh": 441,
	"./tlh.js": 441,
	"./tr": 442,
	"./tr.js": 442,
	"./tzl": 443,
	"./tzl.js": 443,
	"./tzm": 444,
	"./tzm-latn": 445,
	"./tzm-latn.js": 445,
	"./tzm.js": 444,
	"./ug-cn": 446,
	"./ug-cn.js": 446,
	"./uk": 447,
	"./uk.js": 447,
	"./ur": 448,
	"./ur.js": 448,
	"./uz": 449,
	"./uz-latn": 450,
	"./uz-latn.js": 450,
	"./uz.js": 449,
	"./vi": 451,
	"./vi.js": 451,
	"./x-pseudo": 452,
	"./x-pseudo.js": 452,
	"./yo": 453,
	"./yo.js": 453,
	"./zh-cn": 454,
	"./zh-cn.js": 454,
	"./zh-hk": 455,
	"./zh-hk.js": 455,
	"./zh-mo": 456,
	"./zh-mo.js": 456,
	"./zh-tw": 457,
	"./zh-tw.js": 457
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 826;

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(475);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address_address__ = __webpack_require__(515);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_detail_block_detail__ = __webpack_require__(516);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_blocks__ = __webpack_require__(471);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__blocks_blocks__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__broadcast_tx_broadcast_tx__ = __webpack_require__(473);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transaction_transaction__ = __webpack_require__(517);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_module__ = __webpack_require__(846);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__pages_module__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_error_error_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_head_nav_head_nav_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_latest_blocks_latest_blocks_module__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_blocks_blocks_module__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__broadcast_tx_broadcast_tx_module__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_module__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__components__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_blocks_blocks_module__["BlocksPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__broadcast_tx_broadcast_tx_module__["BroadcastTxPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_module__["a" /* FooterComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_head_nav_head_nav_module__["a" /* HeadNavComponentModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_latest_blocks_latest_blocks_module__["a" /* LatestBlocksComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_error_error_module__["a" /* ErrorComponentModule */]
            ],
            entryComponents: [],
            providers: []
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_module__ = __webpack_require__(848);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_split_split__ = __webpack_require__(849);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__pipes_split_split__["a" /* SplitPipe */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* ReactiveFormsModule */]],
            exports: [],
            entryComponents: [],
            providers: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SplitPipe = /** @class */ (function () {
    function SplitPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SplitPipe.prototype.transform = function (value, delimiter) {
        var array = value.split(delimiter);
        return array;
    };
    SplitPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'split'
        })
    ], SplitPipe);
    return SplitPipe;
}());

//# sourceMappingURL=split.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpErrorInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_empty__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_logger__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(logger) {
        this.logger = logger;
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next
            .handle(request)
            .retry(1)
            .catch(function (err) {
            var errorMessage = err.error instanceof Error
                ? "An error occurred: " + err.error.message
                : "Error " + err.status + ": " + (err.message || err.error);
            _this.logger.error(errorMessage);
            throw errorMessage;
        });
    };
    HttpErrorInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__logger_logger__["a" /* Logger */]])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());

//# sourceMappingURL=error-handler.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsightApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InsightApp = /** @class */ (function () {
    function InsightApp(platform, apiProvider, events) {
        this.apiProvider = apiProvider;
        this.events = events;
        this.platform = platform;
        this.initializeApp();
    }
    InsightApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.nav.setRoot('home', {
                chain: _this.apiProvider.networkSettings.selectedNetwork.chain,
                network: _this.apiProvider.networkSettings.selectedNetwork.network
            });
            _this.subscribeRedirEvent();
        });
    };
    InsightApp.prototype.subscribeRedirEvent = function () {
        var _this = this;
        this.events.subscribe('redirToEvent', function (data) {
            _this.nav.push(data.redirTo, data.params);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], InsightApp.prototype, "nav", void 0);
    InsightApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/justin/repos/bitcore/packages/insight/src/app/app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/justin/repos/bitcore/packages/insight/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], InsightApp);
    return InsightApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader__ = __webpack_require__(821);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoaderComponentModule = /** @class */ (function () {
    function LoaderComponentModule() {
    }
    LoaderComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__loader__["a" /* LoaderComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__loader__["a" /* LoaderComponent */]]
        })
    ], LoaderComponentModule);
    return LoaderComponentModule;
}());

//# sourceMappingURL=loader.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(822);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ErrorComponentModule = /** @class */ (function () {
    function ErrorComponentModule() {
    }
    ErrorComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__error__["a" /* ErrorComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__error__["a" /* ErrorComponent */]]
        })
    ], ErrorComponentModule);
    return ErrorComponentModule;
}());

//# sourceMappingURL=error.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UTXO_CHAINS; });
var UTXO_CHAINS = ['BTC', 'BCH', 'DOGE', 'LTC'];
//# sourceMappingURL=constants.js.map

/***/ })

},[518]);
//# sourceMappingURL=main.js.map