

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
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

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AssetAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = /** @class */ (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
window["AssetAdapter"] = AssetAdapter;
__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]); 


/***/ }),

/***/ "./src/LoadingUI.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
window["LoadingUI"] = LoadingUI;
__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]); 


/***/ }),

/***/ "./src/MThrid/BigUtil.ts":
/***/ (function(module, exports) {

var MThrid = window['MThrid']; 
//Big.PE = 50
var MThrid;
(function (MThrid) {
    var BigUtil = /** @class */ (function () {
        function BigUtil() {
            //  Big.PE = 50
        }
        BigUtil.chufa = function (value, n) {
            return new Big(value).div(new Big(Math.pow(10, n)));
        };
        BigUtil.parseNumber = function (number, power) {
            return BigUtil.roundFun(new Big(String(number)).div(new Big(10).pow(power)).toNumber(), 4);
        };
        BigUtil.roundFun = function (value, n) {
            return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
        };
        BigUtil.pow = function (number, power) {
            return new Big(number).times(new Big(10).pow(power)).toString();
        };
        return BigUtil;
    }());
    MThrid.BigUtil = BigUtil;
    __reflect(BigUtil.prototype,"MThrid.BigUtil",[]); 
})(MThrid || (MThrid = {}));
window["MThrid"] = MThrid;


/***/ }),

/***/ "./src/MThrid/Const.ts":
/***/ (function(module, exports) {

var MThrid = window['MThrid']; 
var MThrid;
(function (MThrid) {
    var Const = /** @class */ (function () {
        function Const() {
        }
        Const.ZombieBgPngs = ["atlas_game_44", "atlas_game_42", "atlas_game_43", "atlas_game_39", "atlas_game_40", "atlas_game_41"];
        Const.ZombieNames = ["普通僵尸", "吓人僵尸", "僵尸士兵", "僵尸将军", "僵尸王", "传说的僵尸"];
        Const.ZombieBattleNum = [300, 696, 720, 756, 756, 756];
        return Const;
    }());
    MThrid.Const = Const;
    __reflect(Const.prototype,"MThrid.Const",[]); 
})(MThrid || (MThrid = {}));
window["MThrid"] = MThrid;


/***/ }),

/***/ "./src/MThrid/MouseWheelEvent.ts":
/***/ (function(module, exports) {

var MThrid = window['MThrid']; 
var MThrid;
(function (MThrid) {
    var MouseWheelEvent = /** @class */ (function () {
        function MouseWheelEvent() {
        }
        MouseWheelEvent.coordinateY = 0;
        MouseWheelEvent.eventDispatcher = new egret.EventDispatcher();
        return MouseWheelEvent;
    }());
    MThrid.MouseWheelEvent = MouseWheelEvent;
    __reflect(MouseWheelEvent.prototype,"MThrid.MouseWheelEvent",[]); 
})(MThrid || (MThrid = {}));
window["MThrid"] = MThrid;


/***/ }),

/***/ "./src/MThrid/NetworkManager.ts":
/***/ (function(module, exports) {

var MThrid = window['MThrid']; 
var MThrid;
(function (MThrid) {
    var NetworkManager = /** @class */ (function () {
        function NetworkManager() {
            this.ip = "http://zombie-api.wkcloud.link/api";
            this.tokenStr = null;
            this.servceTime = 0; //获取服务器 
            this.clientTime = 0;
        }
        NetworkManager.getInstance = function () {
            if (this.instance == null) {
                this.instance = new NetworkManager();
            }
            return this.instance;
        };
        NetworkManager.prototype.getStringParamKey = function (obj) {
            var arr = [];
            var str = '';
            for (var key in obj) {
                arr.push(key + "=" + obj[key]);
            }
            str = arr.join('&');
            return str;
        };
        NetworkManager.prototype.httpRequest = function (url, headObj, paramsObj, type, responeseFunc, errorFunc) {
            function onGetComplete(event) {
                var responese = event.currentTarget;
                if (responeseFunc) {
                    responeseFunc(responese);
                }
            }
            function onGetIOError(event) {
                var responese = event.currentTarget;
                if (errorFunc) {
                    errorFunc(responese);
                }
            }
            function onGetProgress(event) {
                var progress = Math.floor(100 * event.bytesLoaded / event.bytesTotal);
            }
            if (headObj == null) {
                headObj = {};
            }
            var params = this.getStringParamKey(paramsObj);
            console.log(params);
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            for (var key in headObj) {
                request.setRequestHeader(key, headObj[key]);
            }
            if (type == "post") {
                request.open(url, egret.HttpMethod.POST);
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                request.send(params);
            }
            else if (type == "get") {
                console.log(url + "?" + params);
                if (params.length > 1) {
                    request.open(url + "?" + params, egret.HttpMethod.GET);
                }
                else {
                    request.open(url, egret.HttpMethod.GET);
                }
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                request.send();
            }
            request.addEventListener(egret.Event.COMPLETE, onGetComplete, this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, onGetIOError, this);
            request.addEventListener(egret.ProgressEvent.PROGRESS, onGetProgress, this);
        };
        NetworkManager.prototype.userLogin = function (paramsObj) {
            return __awaiter(this, void 0, void 0, function () {
                var promise;
                var _this = this;
                return __generator(this, function (_a) {
                    promise = new Promise(function (resolve) {
                        var url = _this.ip + "/user/auth";
                        var self = _this;
                        _this.httpRequest(url, [], paramsObj, "post", function (request) {
                            var response = request.response;
                            response = JSON.parse(response);
                            if (response.success == true) {
                                self.tokenStr = response.data;
                                resolve(true);
                            }
                            else {
                                console.log("response false");
                                resolve(false);
                            }
                        }, null);
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        //获取僵尸
        NetworkManager.prototype.freeGetZombie = function (nickName, address, paramsObj) {
            var url = this.ip + "/zombie/free/box";
            var headObj = { "address": address };
            this.httpRequest(url, headObj, paramsObj, "post", function (request) {
            }, null);
        };
        //僵尸列表
        NetworkManager.prototype.allGetZombie = function (paramsObj) {
            return __awaiter(this, void 0, void 0, function () {
                var url, headObj, promise;
                var _this = this;
                return __generator(this, function (_a) {
                    url = this.ip + "/zombie/list";
                    headObj = { "X-token": this.tokenStr };
                    promise = new Promise(function (resolve) {
                        _this.httpRequest(url, headObj, paramsObj, "get", function (request) {
                            var response = JSON.parse(request.response);
                            resolve(response);
                        }, null);
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        //请求检查哈希值 CreateNft  TrainingNft ShelvesNft  PurchaseNft ShelfNft  TransferNft  ChangeNameNft
        NetworkManager.prototype.requestCheckHash = function (paramsObj) {
            return __awaiter(this, void 0, void 0, function () {
                var url, headObj, promise;
                var _this = this;
                return __generator(this, function (_a) {
                    url = this.ip + "/contract/check/hash";
                    headObj = {};
                    promise = new Promise(function (resolve) {
                        _this.httpRequest(url, headObj, paramsObj, "post", function (request) {
                            var response = JSON.parse(request.response);
                            resolve(response);
                        }, null);
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        //僵尸详情
        NetworkManager.prototype.getZombieInfo = function (paramsObj) {
            return __awaiter(this, void 0, void 0, function () {
                var url, headObj, promise;
                var _this = this;
                return __generator(this, function (_a) {
                    url = this.ip + "/zombie/info";
                    headObj = { "X-token": this.tokenStr };
                    promise = new Promise(function (resolve) {
                        _this.httpRequest(url, headObj, paramsObj, "get", function (request) {
                            var response = JSON.parse(request.response);
                            resolve(response);
                        }, null);
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        //僵尸市场列表
        NetworkManager.prototype.allGetMarketZombie = function (paramsObj) {
            return __awaiter(this, void 0, void 0, function () {
                var url, headObj, promise;
                var _this = this;
                return __generator(this, function (_a) {
                    url = this.ip + "/zombie-market/list";
                    headObj = { "X-token": this.tokenStr };
                    promise = new Promise(function (resolve) {
                        _this.httpRequest(url, headObj, paramsObj, "get", function (request) {
                            var response = JSON.parse(request.response);
                            console.log(response);
                            resolve(response);
                        }, null);
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        //获取网络服务器时间戳
        NetworkManager.prototype.getNetServceTime = function () {
            var url = this.ip + "/user/time";
            var headObj = { "X-token": this.tokenStr };
            var self = this;
            this.httpRequest(url, headObj, {}, "get", function (request) {
                console.log(request.response);
                var response = JSON.parse(request.response);
                if (response.success) {
                    self.servceTime = response.data;
                    self.clientTime = Math.floor(new Date().getTime() / 1000);
                }
            }, null);
        };
        //获取当前服务器时间戳
        NetworkManager.prototype.getCurrentServceTime = function () {
            var curTime = Math.floor(new Date().getTime() / 1000);
            return this.servceTime + (curTime - this.clientTime);
        };
        //查询nft交易记录
        NetworkManager.prototype.allGetMarketZombieLog = function (paramsObj) {
            return __awaiter(this, void 0, void 0, function () {
                var url, headObj, promise;
                var _this = this;
                return __generator(this, function (_a) {
                    url = this.ip + "/zombie-market-log/list";
                    headObj = { "X-token": this.tokenStr };
                    promise = new Promise(function (resolve) {
                        _this.httpRequest(url, headObj, paramsObj, "get", function (request) {
                            var response = JSON.parse(request.response);
                            console.log(response);
                            resolve(response);
                        }, null);
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        NetworkManager.prototype.IsInLogin = function () {
            if (this.tokenStr && this.tokenStr.length > 0) {
                return true;
            }
            return false;
        };
        //获取速度培育
        NetworkManager.prototype.CultureSpeedConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var paramsObj, url, headObj, promise;
                var _this = this;
                return __generator(this, function (_a) {
                    paramsObj = { "nodeId": "CultureSpeedConfig" };
                    url = this.ip + "/config/list";
                    headObj = { "X-token": this.tokenStr };
                    promise = new Promise(function (resolve) {
                        _this.httpRequest(url, headObj, paramsObj, "post", function (request) {
                            var response = JSON.parse(request.response);
                            console.log(response);
                            resolve(response);
                        }, null);
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        //获取攻血培育
        NetworkManager.prototype.OptionAttackBlood = function () {
            return __awaiter(this, void 0, void 0, function () {
                var paramsObj, url, headObj, promise;
                var _this = this;
                return __generator(this, function (_a) {
                    paramsObj = { "nodeId": "OptionAttackBlood" };
                    url = this.ip + "/config/list";
                    headObj = { "X-token": this.tokenStr };
                    promise = new Promise(function (resolve) {
                        _this.httpRequest(url, headObj, paramsObj, "post", function (request) {
                            var response = JSON.parse(request.response);
                            resolve(response);
                        }, null);
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        //查询市场7天数据
        NetworkManager.prototype.zombieMarketLog7 = function () {
            return __awaiter(this, void 0, void 0, function () {
                var paramsObj, url, headObj, promise;
                var _this = this;
                return __generator(this, function (_a) {
                    paramsObj = {};
                    url = this.ip + "/zombie-market-log/days7";
                    headObj = { "X-token": this.tokenStr };
                    promise = new Promise(function (resolve) {
                        _this.httpRequest(url, headObj, paramsObj, "post", function (request) {
                            var response = JSON.parse(request.response);
                            resolve(response);
                        }, null);
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        //PVE战斗
        NetworkManager.prototype.zombiePveBattle = function (paramsObj) {
            return __awaiter(this, void 0, void 0, function () {
                var url, headObj, promise;
                var _this = this;
                return __generator(this, function (_a) {
                    url = this.ip + "/zombie/pve/battle";
                    headObj = { "X-token": this.tokenStr };
                    promise = new Promise(function (resolve) {
                        _this.httpRequest(url, headObj, paramsObj, "post", function (request) {
                            var response = JSON.parse(request.response);
                            resolve(response);
                        }, null);
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        //获取用户信息
        NetworkManager.prototype.getUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url, headObj, paramsObj, promise;
                var _this = this;
                return __generator(this, function (_a) {
                    url = this.ip + "/user/by";
                    headObj = { "X-token": this.tokenStr };
                    paramsObj = {};
                    promise = new Promise(function (resolve) {
                        _this.httpRequest(url, headObj, paramsObj, "get", function (request) {
                            var response = JSON.parse(request.response);
                            resolve(response);
                        }, null);
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        //提币
        NetworkManager.prototype.getUserWithDraw = function (paramsObj) {
            return __awaiter(this, void 0, void 0, function () {
                var url, headObj, promise;
                var _this = this;
                return __generator(this, function (_a) {
                    url = this.ip + "/user/withdraw";
                    headObj = { "X-token": this.tokenStr };
                    promise = new Promise(function (resolve) {
                        _this.httpRequest(url, headObj, paramsObj, "post", function (request) {
                            var response = JSON.parse(request.response);
                            resolve(response);
                        }, null);
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        return NetworkManager;
    }());
    MThrid.NetworkManager = NetworkManager;
    __reflect(NetworkManager.prototype,"MThrid.NetworkManager",[]); 
})(MThrid || (MThrid = {}));
window["MThrid"] = MThrid;


/***/ }),

/***/ "./src/MThrid/Web3Manager.ts":
/***/ (function(module, exports) {

var MThrid = window['MThrid']; 
var MThrid;
(function (MThrid) {
    var Web3Manager = /** @class */ (function () {
        function Web3Manager() {
            this.buyAddress = "0x3feFf7F5C66A98a377C4cEc62b24C15c8F12a93B";
            this.marketAddress = "0x510f0952067b62781EF78ee0E258b34f659859f8";
            this.nftAddress = "0xEc9CCdFf3bdD501Cae66A4f656b05AFb1bA3B2CB";
            this.breedAddress = "0x8015DD4cE4278E60fB4c89fFBd0c77b99DBCBA78";
            this.tokenAddress = "0x90f28Cd19C38b13BB61b16b85AbcD3470d08d517";
        }
        Web3Manager.getInstance = function () {
            if (this.instance == null) {
                this.instance = new Web3Manager();
            }
            return this.instance;
        };
        // test:0x61  正式：0x38
        Web3Manager.prototype.init = function () {
            if (!this.web3) {
                window["ethereum"].request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x61' }], }).then(function (res) {
                    console.log(res);
                }).catch(function (err) {
                    console.log(err);
                });
                window["ethereum"].on('accountsChanged', function (accounts) {
                    console.log("accountsChanged:" + accounts);
                });
                window["ethereum"].on('chainChanged', function (chainId) {
                    console.log("chainChanged:" + chainId);
                });
                window["ethereum"].on('networkChanged', function (networkVersion) {
                    console.log("networkChanged:" + networkVersion);
                });
                if (typeof window["web3"] !== 'undefined') {
                    this.web3 = new Web3(Web3.givenProvider);
                    console.log(this.web3);
                    return true;
                }
                else {
                    alert('请安装MetaMask插件并解锁您的以太坊账户');
                    return false;
                }
            }
            return true;
        };
        Web3Manager.prototype.getUserAddress = function () {
            return this.curAccount;
        };
        Web3Manager.prototype.userSign = function (data, callback) {
            var _this = this;
            var message = "hello";
            window["ethereum"].enable();
            this.web3.eth.getAccounts().then(function (result) {
                _this.curAccount = result[0];
                var self = _this;
                _this.web3.eth.personal.sign(message, _this.curAccount, "test hello", function (_error, _signature) {
                    self.initAllContract();
                    callback(_error, _signature);
                });
            });
        };
        Web3Manager.prototype.initAllContract = function () {
            if (this.zombieMysteryBox == null) {
                var abi = RES.getRes("ZombieMysteryBox_json");
                var contractAddress = this.buyAddress;
                this.zombieMysteryBox = new this.web3.eth.Contract(abi, contractAddress);
            }
            if (this.zombieMarket == null) {
                var abi = RES.getRes("market_json");
                var contractAddress = this.marketAddress;
                this.zombieMarket = new this.web3.eth.Contract(abi, contractAddress);
            }
            if (this.nftContract == null) {
                var abi = RES.getRes("NFT_json");
                var contractAddress = this.nftAddress;
                this.nftContract = new this.web3.eth.Contract(abi, contractAddress);
            }
            if (this.breedContract == null) {
                var abi = RES.getRes("breed_json");
                var contractAddress = this.breedAddress;
                this.breedContract = new this.web3.eth.Contract(abi, contractAddress);
            }
            if (this.zombieToken == null) {
                var abi = RES.getRes("zombieToken_json");
                var contractAddress = this.tokenAddress;
                this.zombieToken = new this.web3.eth.Contract(abi, contractAddress);
            }
        };
        //获取是否是免费僵尸
        Web3Manager.prototype.isFreeZombie = function () {
            return __awaiter(this, void 0, void 0, function () {
                var isFree, isFreeGet;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.zombieMysteryBox.methods.isFreeStatus().call()];
                        case 1:
                            isFree = _a.sent();
                            return [4 /*yield*/, this.zombieMysteryBox.methods.received(this.curAccount).call()];
                        case 2:
                            isFreeGet = _a.sent();
                            return [2 /*return*/, isFree && !isFreeGet];
                    }
                });
            });
        };
        //购买僵尸,免费获取僵尸
        Web3Manager.prototype.getBoxZombie = function (name, isFree, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var promise;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            promise = null;
                            console.log('是否免费', isFree);
                            if (!isFree) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.zombieMysteryBox.methods.freeZombie(name).send({ from: this.curAccount, gasPrice: 10000000000 }).on("confirmation", function (confirmationNumber, receipt) {
                                }).on("transactionHash", function (transactionHash) {
                                    callback("transactionHash");
                                })];
                        case 1:
                            promise = _a.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            console.log(333, this.zombieMysteryBox, 10 * Math.pow(10, 18));
                            return [4 /*yield*/, this.zombieMysteryBox.methods.buyZombie(name).send({ from: this.curAccount, gasPrice: 10000000000, value: 10 }).on("confirmation", function (confirmationNumber, receipt) {
                                }).on("transactionHash", function (transactionHash) {
                                    callback("transactionHash");
                                })];
                        case 3:
                            promise = _a.sent();
                            _a.label = 4;
                        case 4: return [2 /*return*/, promise];
                    }
                });
            });
        };
        //市场上架
        Web3Manager.prototype.createAskOrder = function (tokenId, askPrice, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var adress, ret;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            adress = this.nftAddress;
                            return [4 /*yield*/, this.zombieMarket.methods.createAskOrder(adress, tokenId, askPrice).send({ from: this.curAccount, gasPrice: 10000000000 }).on("transactionHash", function (transactionHash) {
                                    callback("transactionHash");
                                })];
                        case 1:
                            ret = _a.sent();
                            return [2 /*return*/, ret];
                    }
                });
            });
        };
        //市场下架
        Web3Manager.prototype.cancelAskOrder = function (tokenId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var adress, ret;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            adress = this.nftAddress;
                            return [4 /*yield*/, this.zombieMarket.methods.cancelAskOrder(adress, tokenId).send({ from: this.curAccount, gasPrice: 10000000000 }).on("transactionHash", function (transactionHash) {
                                    callback("transactionHash");
                                })];
                        case 1:
                            ret = _a.sent();
                            return [2 /*return*/, ret];
                    }
                });
            });
        };
        //是否授权
        Web3Manager.prototype.isApprovedForAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                var markAddress, ret;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            markAddress = this.marketAddress;
                            return [4 /*yield*/, this.nftContract.methods.isApprovedForAll(this.curAccount, markAddress).call()];
                        case 1:
                            ret = _a.sent();
                            return [2 /*return*/, ret];
                    }
                });
            });
        };
        //请求授权
        Web3Manager.prototype.setApprovalForAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                var markAddress, ret;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            markAddress = this.marketAddress;
                            return [4 /*yield*/, this.nftContract.methods.setApprovalForAll(markAddress, true).send({ from: this.curAccount, gasPrice: 10000000000 })];
                        case 1:
                            ret = _a.sent();
                            return [2 /*return*/, ret];
                    }
                });
            });
        };
        //购买市场僵尸
        Web3Manager.prototype.getMarketBoxZombie = function (tokenId, price, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var adress, ret;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            adress = this.nftAddress;
                            return [4 /*yield*/, this.zombieMarket.methods.buyTokenUsingBNB(adress, tokenId).send({ from: this.curAccount, value: price }).on("transactionHash", function (transactionHash) {
                                    callback("transactionHash");
                                })];
                        case 1:
                            ret = _a.sent();
                            return [2 /*return*/, ret];
                    }
                });
            });
        };
        //攻血培育  cultivationType==0 攻血培育   cultivationType==1 速度培育 
        Web3Manager.prototype.attributeCultivation = function (tokenId, cultivationType, count) {
            return __awaiter(this, void 0, void 0, function () {
                var ret;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.breedContract.methods.attributeCultivation(tokenId, cultivationType, count).send({ from: this.curAccount })];
                        case 1:
                            ret = _a.sent();
                            return [2 /*return*/, ret];
                    }
                });
            });
        };
        // 代币查询金额
        Web3Manager.prototype.requestAllowance = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ret;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.zombieToken.methods.allowance(this.curAccount, this.breedAddress).call()];
                        case 1:
                            ret = _a.sent();
                            return [2 /*return*/, ret];
                    }
                });
            });
        };
        //代币请求授权
        Web3Manager.prototype.requestApprove = function (amount) {
            return __awaiter(this, void 0, void 0, function () {
                var ret;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.zombieToken.methods.approve(this.breedAddress, amount).send({ from: this.curAccount })];
                        case 1:
                            ret = _a.sent();
                            return [2 /*return*/, ret];
                    }
                });
            });
        };
        //僵尸改名
        Web3Manager.prototype.changeZombieName = function (tokenId, name) {
            return __awaiter(this, void 0, void 0, function () {
                var ret;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.breedContract.methods.zombieRename(tokenId, name).send({ from: this.curAccount })];
                        case 1:
                            ret = _a.sent();
                            return [2 /*return*/, ret];
                    }
                });
            });
        };
        return Web3Manager;
    }());
    MThrid.Web3Manager = Web3Manager;
    __reflect(Web3Manager.prototype,"MThrid.Web3Manager",[]); 
})(MThrid || (MThrid = {}));
window["MThrid"] = MThrid;


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/AssetAdapter.ts");
__webpack_require__("./src/LoadingUI.ts");
__webpack_require__("./src/MThrid/BigUtil.ts");
__webpack_require__("./src/MThrid/Const.ts");
__webpack_require__("./src/MThrid/MouseWheelEvent.ts");
__webpack_require__("./src/MThrid/NetworkManager.ts");
__webpack_require__("./src/MThrid/Web3Manager.ts");
__webpack_require__("./src/Main.ts");
__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/ThemeAdapter.ts");
__webpack_require__("./src/ui/friendui.ts");
__webpack_require__("./src/ui/gameattacklifeui.ts");
__webpack_require__("./src/ui/gamebattlematchui.ts");
__webpack_require__("./src/ui/gamebattleshowui.ts");
__webpack_require__("./src/ui/gamebuyzombieui.ts");
__webpack_require__("./src/ui/gamechangenameui.ts");
__webpack_require__("./src/ui/gamegettokenui.ts");
__webpack_require__("./src/ui/gamegetzombieui.ts");
__webpack_require__("./src/ui/gamemyzombieui.ts");
__webpack_require__("./src/ui/gamepopinfoui.ts");
__webpack_require__("./src/ui/gamesellpopui.ts");
__webpack_require__("./src/ui/gamespeedtrainui.ts");
__webpack_require__("./src/ui/gameui.ts");
__webpack_require__("./src/ui/gamezombiepitui.ts");
__webpack_require__("./src/ui/homepageui.ts");
__webpack_require__("./src/ui/mainui.ts");
__webpack_require__("./src/ui/marketui.ts");
__webpack_require__("./src/ui/pageturnui.ts");
__webpack_require__("./src/ui/zombiefigureui.ts");
/*
 * @Author: lbt666 1319451895@qq.com
 * @Date: 2022-03-18 15:06:43
 * @LastEditors: lbt666 1319451895@qq.com
 * @LastEditTime: 2022-07-06 11:32:30
 * @Description:
 */
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
//import {parseNumber,pow} from "./MThrid/declareModule"
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super.call(this) || this;
        //    pow(1,10)
    }
    Main.getInstance = function () {
        return this.instance;
    };
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
        Main.instance = this;
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            var mainUI = new MainUI();
            this.stage.addChild(mainUI);
            // var sound:egret.Sound = RES.getRes("bg_mp3")
            // console.log(sound)
            // var channel:egret.SoundChannel = sound.play(0,-1)
            // channel.addEventListener(egret.Event.SOUND_COMPLETE,function soundComplete(event:egret.Event){
            // },this)
        }
    };
    Main.instance = null;
    return Main;
}(eui.UILayer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/ThemeAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = /** @class */ (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dirPath = url.replace(".exml", "_EUI.json");
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
window["ThemeAdapter"] = ThemeAdapter;
__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]); 


/***/ }),

/***/ "./src/ui/friendui.ts":
/***/ (function(module, exports) {

var FriendUI = /** @class */ (function (_super) {
    __extends(FriendUI, _super);
    function FriendUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/friendui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    FriendUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    FriendUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    FriendUI.prototype.onAddToStage = function (event) {
    };
    FriendUI.prototype.onHomePageClick = function (event) {
    };
    return FriendUI;
}(eui.Component));
window["FriendUI"] = FriendUI;
__reflect(FriendUI.prototype,"FriendUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/gameattacklifeui.ts":
/***/ (function(module, exports) {

/*
 * @Author: lbt666 1319451895@qq.com
 * @Date: 2022-03-18 15:25:56
 * @LastEditors: lbt666 1319451895@qq.com
 * @LastEditTime: 2022-07-05 15:54:21
 * @Description:
 */
var GameAttackLifeUI = /** @class */ (function (_super) {
    __extends(GameAttackLifeUI, _super);
    function GameAttackLifeUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/gameattacklifeui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameAttackLifeUI.prototype.onAddToStage = function (event) {
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeNameClick, this);
        this.btn_train_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrainClick, this);
        this.btn_train_10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrain10Click, this);
        this.btn_train_100.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrain100Click, this);
        this.refreshUI();
    };
    GameAttackLifeUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameAttackLifeUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameAttackLifeUI.prototype.refreshUI = function () {
        var data1 = JSON.parse(this.configData.data[0].configValue);
        this.label_train1_prop.text = "攻击+" + data1.attribute.attack + "     血量+" + data1.attribute.blood;
        //	this.label_train1_count.text = "已培育次数："+data1.attribute.attack
        var data2 = JSON.parse(this.configData.data[1].configValue);
        this.label_train10_prop.text = "攻击+" + data2.attribute.attack + "     血量+" + data2.attribute.blood;
        //	this.label_train10_count.text = "已培育次数："+data2.attribute.attack
        var data3 = JSON.parse(this.configData.data[2].configValue);
        this.label_train100_prop.text = "攻击+" + data3.attribute.attack + "     血量+" + data3.attribute.blood;
        //	this.label_train100_count.text = "已培育次数："+data3.attribute.attack
    };
    GameAttackLifeUI.prototype.onChangeNameClick = function (event) {
        this.visible = false;
    };
    GameAttackLifeUI.prototype.onTrainClick = function (event) {
        this.attributeCultivation(1, 1, 1, null);
    };
    GameAttackLifeUI.prototype.onTrain10Click = function (event) {
        this.attributeCultivation(1, 10, 1, null);
    };
    GameAttackLifeUI.prototype.onTrain100Click = function (event) {
        this.attributeCultivation(1, 100, 1, null);
    };
    //type 培育类型0速度1功血
    //count 培育次数
    //cost 培育花费的钱
    GameAttackLifeUI.prototype.attributeCultivation = function (type, count, cost, actionFunc) {
        var nftNum = Number(this.zombieData.nftNum);
        var ret = MThrid.Web3Manager.getInstance().requestAllowance();
        ret.then(function (value) {
            var amount1 = MThrid.BigUtil.parseNumber(value, 18);
            var amount = MThrid.BigUtil.pow(1000000, 18);
            if (amount1 > 1) {
                var ret_1 = MThrid.Web3Manager.getInstance().attributeCultivation(nftNum, 0, count);
                ret_1.then(function (value) {
                    console.log(value);
                    if (actionFunc) {
                        actionFunc(value);
                    }
                });
            }
            else {
                var ret_2 = MThrid.Web3Manager.getInstance().requestApprove(amount);
                ret_2.then(function (value) {
                    console.log(value);
                });
            }
        });
    };
    return GameAttackLifeUI;
}(eui.Component));
window["GameAttackLifeUI"] = GameAttackLifeUI;
__reflect(GameAttackLifeUI.prototype,"GameAttackLifeUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/gamebattlematchui.ts":
/***/ (function(module, exports) {

var GameBattleMatchUI = /** @class */ (function (_super) {
    __extends(GameBattleMatchUI, _super);
    function GameBattleMatchUI() {
        var _this = _super.call(this) || this;
        _this.updateTimer = 5;
        _this.bgPngs = MThrid.Const.ZombieBgPngs;
        _this.skinName = "resource/ui/gamebattlematchui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameBattleMatchUI.prototype.onAddToStage = function (event) {
        this.initProp();
    };
    GameBattleMatchUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameBattleMatchUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameBattleMatchUI.prototype.initProp = function () {
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
        var zombieData = { "scaleX": 0.11, "scaleY": 0.11, "posX": 169, "posY": 50 };
        this.attackZombieFigureUI = new ZombieFigureUI(zombieData);
        this.group1.addChildAt(this.attackZombieFigureUI, 2);
        var zombieData2 = { "scaleX": 0.11, "scaleY": 0.11, "posX": 369, "posY": 50, "skewY": 180 };
        this.defZombieFigureUI = new ZombieFigureUI(zombieData2);
        this.group2.addChildAt(this.defZombieFigureUI, 2);
        this.label_update_time.text = "" + this.updateTimer;
        this.timer = new egret.Timer(0.02, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeFunc, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timeFuncFinish, this);
        this.startMatch();
    };
    GameBattleMatchUI.prototype.updateUI = function (group, data) {
        var label_zombie_name = group.getChildByName("label_zombie_name");
        var label_zombie_type = group.getChildByName("label_zombie_type");
        var label_atk_value = group.getChildByName("label_atk_value");
        var label_hp_value = group.getChildByName("label_hp_value");
        var label_speed_value = group.getChildByName("label_speed_value");
        var label_lacky_value = group.getChildByName("label_lacky_value");
        var label_grow_value = group.getChildByName("label_grow_value");
        var image_bg = group.getChildByName("image_bg");
        label_zombie_name.text = "#" + data.nftNum;
        label_atk_value.text = "" + data.attack;
        label_hp_value.text = "" + data.blood;
        label_speed_value.text = "" + data.speed;
        label_lacky_value.text = "" + data.speed;
        label_grow_value.text = "" + data.power;
        data.type = 1;
        image_bg.source = RES.getRes(this.bgPngs[data.type]);
        label_zombie_type.text = MThrid.Const.ZombieNames[data.type];
    };
    GameBattleMatchUI.prototype.startMatch = function () {
        console.log(this.battleData);
        this.updateTimer = 5;
        this.label_update_time.text = "" + this.updateTimer;
        this.timer.start();
        this.updateUI(this.group1, this.battleData.Attacker);
        this.updateUI(this.group2, this.battleData.Defender);
        var gene = JSON.parse(this.battleData.Attacker.gene);
        this.attackZombieFigureUI.setHeadByIndex(gene.head_style);
        this.attackZombieFigureUI.setEyeByIndex(gene.eye_style);
        this.attackZombieFigureUI.setShirtByIndex(gene.shirt_style);
        gene = JSON.parse(this.battleData.Defender.gene);
        this.defZombieFigureUI.setHeadByIndex(gene.head_style);
        this.defZombieFigureUI.setEyeByIndex(gene.eye_style);
        this.defZombieFigureUI.setShirtByIndex(gene.shirt_style);
    };
    GameBattleMatchUI.prototype.timeFunc = function () {
        if (this.updateTimer > 0) {
            this.updateTimer = this.updateTimer - 0.02;
            this.label_update_time.text = "" + Math.ceil(this.updateTimer);
            if (this.updateTimer < 0) {
                this.timer.stop();
                MainUI.getInstance().gameUI.gameMyZombieUI.openGameBattleShowUI(this.battleData);
                this.visible = false;
            }
        }
    };
    GameBattleMatchUI.prototype.timeFuncFinish = function () {
    };
    GameBattleMatchUI.prototype.onCloseClick = function (event) {
        this.visible = false;
    };
    return GameBattleMatchUI;
}(eui.Component));
window["GameBattleMatchUI"] = GameBattleMatchUI;
__reflect(GameBattleMatchUI.prototype,"GameBattleMatchUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/gamebattleshowui.ts":
/***/ (function(module, exports) {

var GameBattleShowUI = /** @class */ (function (_super) {
    __extends(GameBattleShowUI, _super);
    function GameBattleShowUI() {
        var _this = _super.call(this) || this;
        _this.updateTimer = 2;
        _this.cdUpdateTime = 0;
        _this.roundIndex = 0;
        _this.attackMoving = false;
        _this.defMoving = false;
        _this.attackTo = false;
        _this.defTo = false;
        _this.moveStep = 11;
        _this.skinName = "resource/ui/gamebattleshowui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameBattleShowUI.prototype.onAddToStage = function (event) {
        this.initProp();
    };
    GameBattleShowUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameBattleShowUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameBattleShowUI.prototype.initProp = function () {
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
        this.refreshUI();
    };
    GameBattleShowUI.prototype.refreshUI = function () {
        this.start();
    };
    GameBattleShowUI.prototype.start = function () {
        if (this.attackZombieFigureUI == null) {
            var zombieData = { "scaleX": 0.1, "scaleY": 0.1, "posX": 199, "posY": 220 };
            this.attackZombieFigureUI = new ZombieFigureUI(zombieData);
            this.goup_root.addChildAt(this.attackZombieFigureUI, 2);
            var txtr = RES.getRes("effect_1_json");
            var data = RES.getRes("effect_1_png");
            var moveFatory = new egret.MovieClipDataFactory(txtr, data);
            this.effect_node_atk = new egret.MovieClip(moveFatory.generateMovieClipData("effect_1"));
            this.goup_root.addChild(this.effect_node_atk);
            this.effect_node_atk.scaleX = 2.5;
            this.effect_node_atk.scaleY = 2.5;
            this.effect_node_atk.x = 50;
            this.effect_node_atk.y = 250;
            this.effect_node_atk.visible = false;
        }
        else {
            this.attackZombieFigureUI.setZombieRotation(0);
            this.attackZombieFigureUI.setZombiePosX(199);
            this.attackZombieFigureUI.setZombiePosY(220);
        }
        var gene = JSON.parse(this.battleData.Attacker.gene);
        this.attackZombieFigureUI.setHeadByIndex(gene.head_style);
        this.attackZombieFigureUI.setEyeByIndex(gene.eye_style);
        this.attackZombieFigureUI.setShirtByIndex(gene.shirt_style);
        if (this.defZombieFigureUI == null) {
            var zombieData2 = { "scaleX": 0.1, "scaleY": 0.1, "posX": 999, "posY": 220, "skewY": 180 };
            this.defZombieFigureUI = new ZombieFigureUI(zombieData2);
            this.goup_root.addChildAt(this.defZombieFigureUI, 2);
            var txtr = RES.getRes("effect_1_json");
            var data = RES.getRes("effect_1_png");
            var moveFatory = new egret.MovieClipDataFactory(txtr, data);
            this.effect_node_def = new egret.MovieClip(moveFatory.generateMovieClipData("effect_1"));
            this.goup_root.addChild(this.effect_node_def);
            this.effect_node_def.scaleX = 2.5;
            this.effect_node_def.scaleY = 2.5;
            this.effect_node_def.x = 748;
            this.effect_node_def.y = 250;
            this.effect_node_def.visible = false;
        }
        else {
            this.defZombieFigureUI.setZombieRotation(0);
            this.defZombieFigureUI.setZombiePosX(999);
            this.defZombieFigureUI.setZombiePosY(220);
        }
        gene = JSON.parse(this.battleData.Defender.gene);
        this.defZombieFigureUI.setHeadByIndex(gene.head_style);
        this.defZombieFigureUI.setEyeByIndex(gene.eye_style);
        this.defZombieFigureUI.setShirtByIndex(gene.shirt_style);
        if (this.timer == null) {
            this.timer = new egret.Timer(0.02, 0);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeFunc, this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timeFuncFinish, this);
        }
        this.timer.start();
        this.attackMoving = false;
        this.defMoving = false;
        this.updateTimer = 0.1;
        this.roundIndex = 0;
        this.cdUpdateTime = 0;
        this.setBattleResult();
        this.showEffect();
    };
    GameBattleShowUI.prototype.showEffect = function () {
    };
    GameBattleShowUI.prototype.timeFunc = function () {
        var temp = this.battleData.Logs[this.roundIndex];
        if (this.attackMoving && this.cdUpdateTime == 0) {
            if (!this.attackTo && this.attackZombieFigureUI.x < 600) {
                this.attackZombieFigureUI.x = this.attackZombieFigureUI.x + this.moveStep * 3;
                if (this.attackZombieFigureUI.x >= 600) {
                    this.attackZombieFigureUI.x = 600;
                    this.attackTo = true;
                    this.cdUpdateTime = 6;
                    this.effect_node_def.visible = true;
                    this.effect_node_def.gotoAndPlay(0, 1);
                    this.defZombieFigureUI.showHurtBuff(temp.Blood);
                    this.showBattleResult();
                    this.roundIndex++;
                }
            }
            else {
                this.attackZombieFigureUI.x = this.attackZombieFigureUI.x - this.moveStep * 3;
                if (this.attackTo && this.attackZombieFigureUI.x <= 0) {
                    this.attackZombieFigureUI.x = 0;
                    this.attackTo = false;
                    this.attackMoving = false;
                    this.defMoving = true;
                    this.cdUpdateTime = 5;
                    this.endRound();
                }
            }
        }
        if (this.defMoving && this.cdUpdateTime == 0) {
            if (!this.attackTo && this.defZombieFigureUI.x > -500) {
                this.defZombieFigureUI.x = this.defZombieFigureUI.x - this.moveStep * 3;
                if (this.defZombieFigureUI.x <= -500) {
                    this.defZombieFigureUI.x = -500;
                    this.attackTo = true;
                    this.cdUpdateTime = 6;
                    this.effect_node_atk.visible = true;
                    this.effect_node_atk.gotoAndPlay(0, 1);
                    this.attackZombieFigureUI.showHurtBuff(temp.Blood);
                    this.showBattleResult();
                    this.roundIndex++;
                }
            }
            else {
                this.defZombieFigureUI.x = this.defZombieFigureUI.x + this.moveStep * 3;
                if (this.attackTo && this.defZombieFigureUI.x > 100) {
                    this.defZombieFigureUI.x = 100;
                    this.attackTo = false;
                    this.attackMoving = true;
                    this.defMoving = false;
                    this.cdUpdateTime = 5;
                    this.endRound();
                }
            }
        }
        if (this.cdUpdateTime > 0) {
            this.cdUpdateTime = this.cdUpdateTime - 0.15;
            if (this.cdUpdateTime < 0) {
                this.cdUpdateTime = 0;
            }
        }
        if (this.updateTimer > 0) {
            this.updateTimer = this.updateTimer - 0.02;
            if (this.updateTimer < 0) {
                this.attackMoving = true;
                //this.defMoving = true
            }
        }
    };
    GameBattleShowUI.prototype.endRound = function () {
        if (this.roundIndex >= this.battleData.Logs.length) {
            this.timer.stop();
            if (this.battleData.Logs[this.battleData.Logs.length - 1].Attacker == this.battleData.Attacker.nftNum) {
                this.defZombieFigureUI.setZombieRotation(290);
                this.defZombieFigureUI.setZombiePosX(699);
                this.defZombieFigureUI.setZombiePosY(310);
            }
            else {
                this.attackZombieFigureUI.setZombieRotation(80);
                this.attackZombieFigureUI.setZombiePosX(499);
                this.attackZombieFigureUI.setZombiePosY(320);
            }
        }
    };
    GameBattleShowUI.prototype.setBattleResult = function () {
        var nodeChildNum = 0;
        var nodes = [this.scrollerview_item1, this.scrollerview_item2, this.scrollerview_item3, this.scrollerview_item4,
            this.scrollerview_item5, this.scrollerview_item6, this.scrollerview_item7, this.scrollerview_item8];
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            if (nodeChildNum < this.battleData.Logs.length) {
                var label_item_2 = node.getChildByName("label_item_2");
                var log = this.battleData.Logs[nodeChildNum];
                label_item_2.text = log.Attacker + "攻击" + log.Defender + "," + log.Defender + "受到了" + log.Blood + "点伤害";
                node.visible = false;
            }
            else {
                node.visible = false;
            }
            nodeChildNum++;
        }
        var type1 = 1;
        this.label_type_1.text = MThrid.Const.ZombieNames[type1];
        this.label_name_1.text = "#" + this.battleData.Attacker.nftNum;
        this.label_type_2.text = MThrid.Const.ZombieNames[type1];
        this.label_name_2.text = "#" + this.battleData.Defender.nftNum;
    };
    GameBattleShowUI.prototype.showBattleResult = function () {
        var nodeChildNum = 0;
        var nodes = [this.scrollerview_item1, this.scrollerview_item2, this.scrollerview_item3, this.scrollerview_item4,
            this.scrollerview_item5, this.scrollerview_item6, this.scrollerview_item7, this.scrollerview_item8];
        for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
            var node = nodes_2[_i];
            if (nodeChildNum <= this.roundIndex) {
                node.visible = true;
            }
            else {
                node.visible = false;
            }
            nodeChildNum++;
        }
        var sc = this.scrollerview;
        if (this.roundIndex <= 1) {
            sc.viewport.scrollV = 0;
        }
        else {
            sc.viewport.scrollV = (this.roundIndex - 1) * 105;
        }
    };
    GameBattleShowUI.prototype.timeFuncFinish = function () {
    };
    GameBattleShowUI.prototype.ongetFirstZombieClick = function (event) {
    };
    GameBattleShowUI.prototype.onCloseClick = function (event) {
        this.visible = false;
        this.timer.stop();
    };
    GameBattleShowUI.prototype.onTestClick = function (event) {
        this.attackZombieFigureUI.showHurtBuff(20);
    };
    return GameBattleShowUI;
}(eui.Component));
window["GameBattleShowUI"] = GameBattleShowUI;
__reflect(GameBattleShowUI.prototype,"GameBattleShowUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/gamebuyzombieui.ts":
/***/ (function(module, exports) {

var GameBuyZombieUI = /** @class */ (function (_super) {
    __extends(GameBuyZombieUI, _super);
    function GameBuyZombieUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/gamebuyzombieui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameBuyZombieUI.prototype.onAddToStage = function (event) {
        this.initProp();
    };
    GameBuyZombieUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameBuyZombieUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameBuyZombieUI.prototype.initProp = function () {
        this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
    };
    GameBuyZombieUI.prototype.ongetFirstZombieClick = function (event) {
    };
    GameBuyZombieUI.prototype.onCloseClick = function (event) {
        this.visible = false;
    };
    return GameBuyZombieUI;
}(eui.Component));
window["GameBuyZombieUI"] = GameBuyZombieUI;
__reflect(GameBuyZombieUI.prototype,"GameBuyZombieUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/gamechangenameui.ts":
/***/ (function(module, exports) {

var GameChangeNameUI = /** @class */ (function (_super) {
    __extends(GameChangeNameUI, _super);
    function GameChangeNameUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/gamechangenameui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameChangeNameUI.prototype.onAddToStage = function (event) {
        this.label_info.visible = false;
        this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeNameClick, this);
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
    };
    GameChangeNameUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameChangeNameUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameChangeNameUI.prototype.onChangeNameClick = function (event) {
        var name = this.editabletext_get_name.text;
        if (name.length <= 0) {
            this.label_info.visible = true;
            return;
        }
        var nftNum = Number(this.data.nftNum);
        console.log(this.data);
        console.log(nftNum);
        MThrid.Web3Manager.getInstance().changeZombieName(nftNum, name).then(function (result) {
            var paramsObj = { "contractType": "ChangeNameNft", "txId": result.transactionHash };
            var requestCheckHash = MThrid.NetworkManager.getInstance().requestCheckHash(paramsObj);
            requestCheckHash.then(function (retvalue) {
                console.log("retvalue");
                console.log(retvalue);
            });
        });
        console.log(name);
        this.visible = false;
    };
    GameChangeNameUI.prototype.onCloseClick = function (event) {
        this.visible = false;
    };
    return GameChangeNameUI;
}(eui.Component));
window["GameChangeNameUI"] = GameChangeNameUI;
__reflect(GameChangeNameUI.prototype,"GameChangeNameUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/gamegettokenui.ts":
/***/ (function(module, exports) {

var GameGetTokenUI = /** @class */ (function (_super) {
    __extends(GameGetTokenUI, _super);
    function GameGetTokenUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/gamegettokenui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameGetTokenUI.prototype.onAddToStage = function (event) {
        this.initProp();
    };
    GameGetTokenUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameGetTokenUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameGetTokenUI.prototype.initProp = function () {
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
        this.btn_get.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetClick, this);
        console.log(this.Data);
        this.refreshUI();
    };
    GameGetTokenUI.prototype.refreshUI = function () {
        this.label_availableQuantity.text = "" + this.Data.availableQuantity;
        this.label_coolingQuantity.text = "" + this.Data.coolingQuantity;
        this.label_withdrawingQuantity.text = "" + this.Data.withdrawingQuantity;
        if (this.Data.withdrawingQuantity > 0) {
        }
        else {
        }
        var sourceNameBtnSell;
        if (this.Data.availableQuantity > 0) {
            //	sourceNameBtnSell = "atlas_game2_18"
            this.btn_get.visible = true;
        }
        else {
            this.btn_get.visible = false;
            //sourceNameBtnSell = "atlas_game2_6"
        }
        //let imgBtn_normal : eui.Image = <eui.Image>this.btn_get.getChildAt(0);
        //	imgBtn_normal.source = RES.getRes(sourceNameBtnSell)
    };
    GameGetTokenUI.prototype.ongetFirstZombieClick = function (event) {
    };
    GameGetTokenUI.prototype.onGetClick = function (event) {
        var _this = this;
        if (this.Data.withdrawingQuantity > 0) {
            return;
        }
        var paramsObj = { "quantity": this.Data.availableQuantity };
        MThrid.NetworkManager.getInstance().getUserWithDraw(paramsObj).then(function (value) {
            console.log(value);
            _this.btn_get.visible = false;
        });
    };
    GameGetTokenUI.prototype.onCloseClick = function (event) {
        this.visible = false;
    };
    return GameGetTokenUI;
}(eui.Component));
window["GameGetTokenUI"] = GameGetTokenUI;
__reflect(GameGetTokenUI.prototype,"GameGetTokenUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/gamegetzombieui.ts":
/***/ (function(module, exports) {

var GameGetZombieUI = /** @class */ (function (_super) {
    __extends(GameGetZombieUI, _super);
    //	private timer:egret.Timer
    //	private updateTime:number = 5 * 60
    function GameGetZombieUI() {
        var _this = _super.call(this) || this;
        _this.isFree = false;
        _this.skinName = "resource/ui/gamegetzombieui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameGetZombieUI.prototype.onAddToStage = function (event) {
        this.initPropGetZombie();
    };
    GameGetZombieUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameGetZombieUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //获取僵尸
    GameGetZombieUI.prototype.initPropGetZombie = function () {
        var _this = this;
        this.editabletext_get_name.addEventListener(egret.Event.CHANGE, this.change, this);
        this.btn_get_zombie.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ongetFirstZombieClick, this);
        MThrid.Web3Manager.getInstance().isFreeZombie().then(function (value) {
            _this.isFree = value;
        });
    };
    // 立即购买事件
    GameGetZombieUI.prototype.ongetFirstZombieClick = function (event) {
        var _this = this;
        var name = this.editabletext_get_name.text;
        if (name.length <= 0) {
            this.label_info.textColor = 0xDE2C2C;
            return;
        }
        console.log('僵尸名称', name);
        var updateTime = 300;
        var isJump = false;
        var transactionHash = null;
        var freeGetBoxZombie = MThrid.Web3Manager.getInstance().getBoxZombie(name, this.isFree, function (state) {
            if (state == "transactionHash") {
                var self_1 = _this;
                MainUI.getInstance().showGamePopInfoUI(true);
                MainUI.getInstance().gamePopInfoUI.setTimeInfo(updateTime);
                MainUI.getInstance().gamePopInfoUI.timeUpdateFunc = function () {
                    updateTime = updateTime - 0.016;
                    if (!isJump) {
                        MainUI.getInstance().gamePopInfoUI.setTimeInfo(updateTime);
                    }
                    if (updateTime <= 0) {
                        MainUI.getInstance().showGamePopInfoUI(false);
                        MainUI.getInstance().gamePopInfoUI.stopTimer();
                    }
                    console.log("this.updateTime " + updateTime);
                    if (transactionHash != null) {
                        var paramsObj = { "contractType": "CreateNft", "txId": transactionHash };
                        var requestCheckHash = MThrid.NetworkManager.getInstance().requestCheckHash(paramsObj);
                        requestCheckHash.then(function (retvalue) {
                            console.log("retvalue");
                            console.log(retvalue);
                            if (retvalue.success && !isJump) {
                                isJump = true;
                                updateTime = 1;
                                MainUI.getInstance().gamePopInfoUI.setBoardInfo("购买成功");
                                MainUI.getInstance().gameUI.onMyZombieClick(null);
                            }
                            if (retvalue.success == false) {
                                MainUI.getInstance().gamePopInfoUI.setBoardInfo("购买失败");
                                MainUI.getInstance().gamePopInfoUI.stopTimer();
                            }
                        });
                    }
                };
                MainUI.getInstance().gamePopInfoUI.startTimer();
                freeGetBoxZombie.then(function (value) {
                    transactionHash = value.transactionHash;
                });
            }
        });
    };
    GameGetZombieUI.prototype.showBuySucc = function () {
        if (this.gameBuyZombieUI == null) {
            //		this.gameBuyZombieUI = new GameBuyZombieUI()
            //	MainUI.getInstance().addChild(this.gameBuyZombieUI)
        }
        //	this.gameBuyZombieUI.visible = true	
        MThrid.NetworkManager.getInstance().getNetServceTime();
    };
    GameGetZombieUI.prototype.change = function (event) {
        console.log("change change ");
    };
    return GameGetZombieUI;
}(eui.Component));
window["GameGetZombieUI"] = GameGetZombieUI;
__reflect(GameGetZombieUI.prototype,"GameGetZombieUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/gamemyzombieui.ts":
/***/ (function(module, exports) {

//僵尸对象
var ZombieNode = /** @class */ (function () {
    function ZombieNode() {
    }
    return ZombieNode;
}());
window["ZombieNode"] = ZombieNode;
__reflect(ZombieNode.prototype,"ZombieNode",[]); 
var GameMyZombieUI = /** @class */ (function (_super) {
    __extends(GameMyZombieUI, _super);
    function GameMyZombieUI() {
        var _this = _super.call(this) || this;
        _this.zombieNodeDict = [];
        _this.bgPngs = MThrid.Const.ZombieBgPngs;
        _this.skinName = "resource/ui/gamemyzombieui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameMyZombieUI.prototype.onAddToStage = function (event) {
        var _this = this;
        this.label_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackListClick, this);
        this.image_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackListClick, this);
        this.btn_changeName.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeNameClick, this);
        this.btn_battle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onZombieBattleClick, this);
        this.btn_atklife.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAtkLifeClick, this);
        this.btn_speedtrain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSpeedTrainClick, this);
        this.btn_sell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onZombieSellClick, this);
        var i = 0;
        var _loop_1 = function () {
            var index = i;
            var group_item = this_1.group_zombie.getChildByName("group_item" + (i + 1));
            var image_bg = group_item.getChildByName("image_bg");
            var label_nft = group_item.getChildByName("label_nft");
            var label_state = group_item.getChildByName("label_state");
            var label_name = group_item.getChildByName("label_name");
            image_bg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.group_zombie.visible = false;
                _this.group_zombieDetial.visible = true;
            }, this_1);
            var node = new ZombieNode();
            node.image_bg = image_bg;
            node.label_nft = label_nft;
            node.label_name = label_name;
            image_bg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                if (node.clickCallFunc) {
                    node.clickCallFunc();
                }
            }, this_1);
            var zombieData_1 = { "scaleX": 0.1, "scaleY": 0.1, "posX": 20, "posY": 90 };
            node.zombieFigureUI = new ZombieFigureUI(zombieData_1);
            group_item.addChildAt(node.zombieFigureUI, 2);
            node.zombieFigureUI = node.zombieFigureUI;
            node.group = group_item;
            node.group.visible = false;
            node.label_state = label_state;
            this_1.zombieNodeDict[index] = node;
        };
        var this_1 = this;
        for (i = 0; i < 10; i++) {
            _loop_1();
        }
        var zombieData = { "scaleX": 0.17, "scaleY": 0.17, "posX": 80, "posY": 170 };
        this.zombieFigureUI = new ZombieFigureUI(zombieData);
        this.group_zombieDetial.addChild(this.zombieFigureUI);
        this.group_zombie.visible = true;
        this.group_zombieDetial.visible = false;
        this.pageTurnUI = new PageTurnUI();
        this.pageTurnUI.x = 502;
        this.pageTurnUI.y = 930;
        this.group_zombie.addChild(this.pageTurnUI);
        this.pageTurnUI.setClickPageCall(function (page) {
            _this.requestPageGetZombie(page);
        });
        this.requestPageGetZombie(1);
    };
    GameMyZombieUI.prototype.refreshUI = function () {
        this.pageTurnUI.reSetData();
        this.requestPageGetZombie(1);
    };
    GameMyZombieUI.prototype.requestPageGetZombie = function (page) {
        var _this = this;
        var obj = { "page": page, "limit": 10 };
        var retData = MThrid.NetworkManager.getInstance().allGetZombie(obj);
        retData.then(function (value) {
            console.log(value);
            _this.curPageData = value;
            _this.setSelePageUI();
        });
        this.curShowPage = page;
    };
    GameMyZombieUI.prototype.setSelePageUI = function () {
        var _this = this;
        console.log(this.curPageData.data.results);
        var results = this.curPageData.data.results;
        var len = results.length;
        var index = 0;
        var toolPage = Math.ceil(this.curPageData.data.page.total / 10);
        var showIndex = this.curPageData.data.page.total % 10;
        var _loop_2 = function () {
            var node = this_2.zombieNodeDict[index];
            if (this_2.curShowPage < toolPage || this_2.curShowPage == toolPage && index < showIndex) {
                var curIndex = index;
                var data_1 = results[index];
                node.clickCallFunc = function () {
                    var gene = JSON.parse(data_1.gene);
                    _this.zombieFigureUI.setHeadByIndex(gene.head_style);
                    _this.zombieFigureUI.setEyeByIndex(gene.eye_style);
                    _this.zombieFigureUI.setShirtByIndex(gene.shirt_style);
                    _this.setZombieDetailInfo(data_1);
                };
                var gene = JSON.parse(data_1.gene);
                node.zombieFigureUI.setHeadByIndex(gene.head_style);
                node.zombieFigureUI.setEyeByIndex(gene.eye_style);
                node.zombieFigureUI.setShirtByIndex(gene.shirt_style);
                node.label_nft.text = "#" + data_1.nftNum;
                node.label_name.text = data_1.nickName;
                node.image_bg.source = RES.getRes(this_2.bgPngs[data_1.type]);
                node.group.visible = true;
                node.label_state.text = "";
                if (data_1.status == 1) {
                    node.label_state.text = "出售中";
                }
                var leftTime = data_1.pveCooledTime - MThrid.NetworkManager.getInstance().getCurrentServceTime();
                if (leftTime > 0) {
                    node.label_state.text = "冷却中";
                }
                console.log(data_1);
            }
            else {
                node.group.visible = false;
            }
        };
        var this_2 = this;
        for (index = 0; index < 10; index++) {
            _loop_2();
        }
        this.pageTurnUI.visible = (toolPage > 1);
        if (this.pageTurnUI.visible) {
            this.pageTurnUI.setToolPageIndex(toolPage);
        }
        this.label_nohave_info.visible = len <= 0;
    };
    GameMyZombieUI.prototype.setZombieDetailInfo = function (data) {
        this.label_atkvalue.text = data.attack;
        this.label_lifevalue.text = data.blood;
        this.label_speedvalue.text = data.speed;
        this.label_lackyvalue.text = data.lucky;
        this.label_growthvalue.text = data.gorw;
        this.label_owner_name.text = "主人     " + data.address;
        this.label_name.text = data.nickName;
        this.label_battle_num.text = data.pveAttackNum + "/" + MThrid.Const.ZombieBattleNum[data.type];
        this.label_pit_num.text = data.win + "/100";
        this.image_zombie_bg.source = RES.getRes(this.bgPngs[data.type]);
        var leftTime = data.pveCooledTime - MThrid.NetworkManager.getInstance().getCurrentServceTime();
        console.log("left " + leftTime);
        if (leftTime > 0) {
            this.label_atktime.text = "战斗倒计时：" + this.getFormateTime(leftTime);
        }
        else {
            this.label_atktime.text = "战斗倒计时：0";
        }
        this.curSeleZombieData = data;
        var sourceNameBtnSell;
        if (this.curSeleZombieData.status == 0) {
            sourceNameBtnSell = "atlas_game_48";
        }
        else {
            sourceNameBtnSell = "atlas_game2_8";
        }
        var imgBtn_normal = this.btn_sell.getChildAt(0);
        imgBtn_normal.source = RES.getRes(sourceNameBtnSell);
    };
    GameMyZombieUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameMyZombieUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //改名
    GameMyZombieUI.prototype.onChangeNameClick = function (event) {
        if (this.gameChangeNameUI == null) {
            this.gameChangeNameUI = new GameChangeNameUI();
            MainUI.getInstance().addChild(this.gameChangeNameUI);
        }
        this.gameChangeNameUI.data = this.curSeleZombieData;
        this.gameChangeNameUI.visible = true;
    };
    //攻击培育
    GameMyZombieUI.prototype.onAtkLifeClick = function (event) {
        var _this = this;
        if (this.curSeleZombieData.status == 1) {
            MainUI.getInstance().showGamePopInfoUI(true);
            MainUI.getInstance().gamePopInfoUI.setBoardInfo("出售中不能战斗");
            return;
        }
        if (this.gameAttackLifeUI == null) {
            MThrid.NetworkManager.getInstance().OptionAttackBlood().then(function (value) {
                _this.gameAttackLifeUI = new GameAttackLifeUI();
                _this.gameAttackLifeUI.configData = value;
                MainUI.getInstance().addChild(_this.gameAttackLifeUI);
                _this.gameAttackLifeUI.zombieData = _this.curSeleZombieData;
                _this.gameAttackLifeUI.visible = true;
            });
        }
        else {
            MThrid.NetworkManager.getInstance().OptionAttackBlood().then(function (value) {
                _this.gameAttackLifeUI.configData = value;
                _this.gameAttackLifeUI.zombieData = _this.curSeleZombieData;
                _this.gameAttackLifeUI.refreshUI();
                _this.gameAttackLifeUI.visible = true;
            });
        }
    };
    //战斗
    GameMyZombieUI.prototype.onZombieBattleClick = function (event) {
        var _this = this;
        if (this.curSeleZombieData.status == 1) {
            MainUI.getInstance().showGamePopInfoUI(true);
            MainUI.getInstance().gamePopInfoUI.setBoardInfo("出售中不能战斗");
            return;
        }
        console.log(Number(this.curSeleZombieData.nftNum));
        var leftTime = this.curSeleZombieData.pveCooledTime - MThrid.NetworkManager.getInstance().getCurrentServceTime();
        if (leftTime > 0) {
            return;
        }
        if (this.gameBattleMatchUI == null) {
            var paramsObj = { "nftNum": this.curSeleZombieData.nftNum };
            MThrid.NetworkManager.getInstance().zombiePveBattle(paramsObj).then(function (value) {
                console.log(value);
                if (value.success) {
                    _this.gameBattleMatchUI = new GameBattleMatchUI();
                    _this.gameBattleMatchUI.battleData = value.data;
                    MainUI.getInstance().addChild(_this.gameBattleMatchUI);
                }
            });
        }
        else {
            var paramsObj = { "nftNum": this.curSeleZombieData.nftNum };
            MThrid.NetworkManager.getInstance().zombiePveBattle(paramsObj).then(function (value) {
                console.log(value);
                if (value.success) {
                    _this.gameBattleMatchUI.battleData = value.data;
                    _this.gameBattleMatchUI.startMatch();
                    _this.gameBattleMatchUI.visible = true;
                }
            });
        }
    };
    GameMyZombieUI.prototype.openGameBattleShowUI = function (battleData) {
        if (this.gameBattleShowUI == null) {
            this.gameBattleShowUI = new GameBattleShowUI();
            this.gameBattleShowUI.battleData = battleData;
            MainUI.getInstance().addChild(this.gameBattleShowUI);
        }
        else {
            this.gameBattleShowUI.visible = true;
            this.gameBattleShowUI.battleData = battleData;
            this.gameBattleShowUI.refreshUI();
        }
    };
    //速度培育
    GameMyZombieUI.prototype.onSpeedTrainClick = function (event) {
        var _this = this;
        if (this.curSeleZombieData.status == 1) {
            MainUI.getInstance().showGamePopInfoUI(true);
            MainUI.getInstance().gamePopInfoUI.setBoardInfo("出售中不能战斗");
            return;
        }
        if (this.gameSpeedTrainUI == null) {
            MThrid.NetworkManager.getInstance().CultureSpeedConfig().then(function (value) {
                _this.gameSpeedTrainUI = new GameSpeedTrainUI();
                _this.gameSpeedTrainUI.configData = value;
                MainUI.getInstance().addChild(_this.gameSpeedTrainUI);
                _this.gameSpeedTrainUI.zombieData = _this.curSeleZombieData;
                _this.gameSpeedTrainUI.visible = true;
            });
        }
        else {
            MThrid.NetworkManager.getInstance().CultureSpeedConfig().then(function (value) {
                _this.gameSpeedTrainUI.configData = value;
                _this.gameSpeedTrainUI.zombieData = _this.curSeleZombieData;
                _this.gameSpeedTrainUI.refreshUI();
                _this.gameSpeedTrainUI.visible = true;
            });
        }
    };
    GameMyZombieUI.prototype.createAskOrderFunc = function (price) {
        var _this = this;
        var tokenId = Number(this.curSeleZombieData.nftNum);
        var updateTime = 300;
        var isJump = false;
        var transactionHash = null;
        var createAskOrderFunction = function () {
            //	let createAskOrder = MThrid.Web3Manager.getInstance().createAskOrder(tokenId,1000000000,()=>{
            var createAskOrder = MThrid.Web3Manager.getInstance().createAskOrder(tokenId, price, function () {
                var self = _this;
                MainUI.getInstance().showGamePopInfoUI(true);
                MainUI.getInstance().gamePopInfoUI.setTimeInfo(updateTime);
                MainUI.getInstance().gamePopInfoUI.timeUpdateFunc = function () {
                    updateTime = updateTime - 0.016;
                    if (!isJump) {
                        MainUI.getInstance().gamePopInfoUI.setTimeInfo(updateTime);
                    }
                    if (updateTime <= 0) {
                        MainUI.getInstance().showGamePopInfoUI(false);
                        MainUI.getInstance().gamePopInfoUI.stopTimer();
                    }
                    console.log("this.updateTime " + updateTime);
                    if (transactionHash != null) {
                        var paramsObj = { "contractType": "ShelvesNft", "txId": transactionHash };
                        var requestCheckHash = MThrid.NetworkManager.getInstance().requestCheckHash(paramsObj);
                        requestCheckHash.then(function (retvalue) {
                            console.log("retvalue");
                            console.log(retvalue);
                            if (retvalue.success && !isJump) {
                                isJump = true;
                                updateTime = 1;
                                MainUI.getInstance().gamePopInfoUI.setBoardInfo("出售成功");
                                _this.curSeleZombieData.status = 1;
                                _this.setZombieDetailInfo(_this.curSeleZombieData);
                            }
                        });
                    }
                };
                MainUI.getInstance().gamePopInfoUI.startTimer();
            });
            createAskOrder.then(function (createAskOrderValue) {
                console.log(createAskOrderValue);
                transactionHash = createAskOrderValue.transactionHash;
            });
        };
        console.log(tokenId);
        var isApprovedForAllPromise = MThrid.Web3Manager.getInstance().isApprovedForAll();
        isApprovedForAllPromise.then(function (value) {
            // value == false 没有授权，先去授权
            console.log(value);
            if (!value) {
                var setApprovalForAllPromise = MThrid.Web3Manager.getInstance().setApprovalForAll();
                setApprovalForAllPromise.then(function (value) {
                    createAskOrderFunction();
                });
            }
            else {
                createAskOrderFunction();
            }
        });
    };
    GameMyZombieUI.prototype.cancelAskOrderFunc = function () {
        var _this = this;
        var tokenId = Number(this.curSeleZombieData.nftNum);
        var updateTime = 300;
        var isJump = false;
        var transactionHash = null;
        console.log(tokenId);
        var createAskOrder = MThrid.Web3Manager.getInstance().cancelAskOrder(tokenId, function () {
            var self = _this;
            MainUI.getInstance().showGamePopInfoUI(true);
            MainUI.getInstance().gamePopInfoUI.setTimeInfo(updateTime);
            MainUI.getInstance().gamePopInfoUI.timeUpdateFunc = function () {
                updateTime = updateTime - 0.016;
                if (!isJump) {
                    MainUI.getInstance().gamePopInfoUI.setTimeInfo(updateTime);
                }
                if (updateTime <= 0) {
                    MainUI.getInstance().showGamePopInfoUI(false);
                    MainUI.getInstance().gamePopInfoUI.stopTimer();
                }
                console.log("this.updateTime " + updateTime);
                if (transactionHash != null) {
                    var paramsObj = { "contractType": "ShelfNft", "txId": transactionHash };
                    var requestCheckHash = MThrid.NetworkManager.getInstance().requestCheckHash(paramsObj);
                    requestCheckHash.then(function (retvalue) {
                        console.log("retvalue");
                        console.log(retvalue);
                        if (retvalue.success && !isJump) {
                            isJump = true;
                            updateTime = 1;
                            MainUI.getInstance().gamePopInfoUI.setBoardInfo("撤销成功");
                            _this.curSeleZombieData.status = 0;
                            _this.setZombieDetailInfo(_this.curSeleZombieData);
                        }
                    });
                }
            };
            MainUI.getInstance().gamePopInfoUI.startTimer();
        });
        createAskOrder.then(function (createAskOrderValue) {
            console.log(createAskOrderValue);
            transactionHash = createAskOrderValue.transactionHash;
        });
    };
    //市场上架
    GameMyZombieUI.prototype.onZombieSellClick = function (event) {
        //免费的不能上架
        console.log(this.curSeleZombieData);
        if (this.curSeleZombieData.type == 0) {
            return;
        }
        if (this.curSeleZombieData.status == 0) {
            //this.createAskOrderFunc()
            if (this.gameSellPopUI == null) {
                this.gameSellPopUI = new GameSellPopUI();
                MainUI.getInstance().stage.addChild(this.gameSellPopUI);
            }
            else {
                this.gameSellPopUI.visible = true;
                this.gameSellPopUI.refreshUI();
            }
        }
        else {
            this.cancelAskOrderFunc();
        }
    };
    //返回
    GameMyZombieUI.prototype.onBackListClick = function (event) {
        this.group_zombie.visible = true;
        this.group_zombieDetial.visible = false;
    };
    GameMyZombieUI.prototype.getFormateTime = function (totalTime) {
        var str = "";
        var h = Math.floor(totalTime / 3600);
        if (h < 10) {
            str = "0" + h;
        }
        else {
            str = "" + h;
        }
        var m = Math.floor(totalTime % 60 / 60);
        if (m < 10) {
            str = str + ":0" + m;
        }
        else {
            str = str + ":" + m;
        }
        var s = Math.floor(totalTime % 60 % 60);
        if (s < 10) {
            str = str + ":0" + s;
        }
        else {
            str = str + ":" + s;
        }
        return str;
    };
    GameMyZombieUI.prototype.getFormateDate = function (timeStamp) {
        var date = new Date(timeStamp);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var hoursStr = hours.toString();
        if (hours >= 0 && hours <= 9) {
            hoursStr = "0" + hours;
        }
        var minutesStr = minutes.toString();
        if (minutes >= 0 && minutes <= 9) {
            minutesStr = "0" + minutes;
        }
        var secondsStr = seconds.toString();
        if (seconds >= 0 && seconds <= 9) {
            secondsStr = "0" + seconds;
        }
        var currentdate = hoursStr + ":" + minutesStr + ":" + secondsStr;
        return currentdate;
    };
    return GameMyZombieUI;
}(eui.Component));
window["GameMyZombieUI"] = GameMyZombieUI;
__reflect(GameMyZombieUI.prototype,"GameMyZombieUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/gamepopinfoui.ts":
/***/ (function(module, exports) {

var GamePopInfoUI = /** @class */ (function (_super) {
    __extends(GamePopInfoUI, _super);
    function GamePopInfoUI() {
        var _this = _super.call(this) || this;
        _this.updateTime = 5 * 60;
        _this.skinName = "resource/ui/gamepopinfoui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GamePopInfoUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GamePopInfoUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GamePopInfoUI.prototype.onAddToStage = function (event) {
        var _this = this;
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
        this.timer = new egret.Timer(0, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, function () {
            if (_this.timeUpdateFunc) {
                _this.timeUpdateFunc();
            }
        }, this);
    };
    GamePopInfoUI.prototype.setUpdateTime = function (time) {
        this.updateTime = time;
    };
    GamePopInfoUI.prototype.startTimer = function () {
        this.timer.start();
    };
    GamePopInfoUI.prototype.stopTimer = function () {
        this.timer.stop();
    };
    GamePopInfoUI.prototype.onCloseClick = function (event) {
        this.visible = false;
        this.stopTimer();
    };
    GamePopInfoUI.prototype.setTimeInfo = function (time) {
        if (this.label_info != null) {
            this.label_info.text = "等待中" + this.getFormateTime(time);
        }
    };
    GamePopInfoUI.prototype.setBoardInfo = function (str) {
        this.label_info.text = str;
    };
    GamePopInfoUI.prototype.getFormateTime = function (totalTime) {
        var str = "";
        var h = Math.floor(totalTime / 3600);
        if (h < 10) {
            str = "0" + h;
        }
        else {
            str = "" + h;
        }
        var m = Math.floor(totalTime / 60);
        if (m < 10) {
            str = str + ":0" + m;
        }
        else {
            str = str + ":" + m;
        }
        var s = Math.floor(totalTime % 60);
        if (s < 10) {
            str = str + ":0" + s;
        }
        else {
            str = str + ":" + s;
        }
        return str;
    };
    return GamePopInfoUI;
}(eui.Component));
window["GamePopInfoUI"] = GamePopInfoUI;
__reflect(GamePopInfoUI.prototype,"GamePopInfoUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/gamesellpopui.ts":
/***/ (function(module, exports) {

var GameSellPopUI = /** @class */ (function (_super) {
    __extends(GameSellPopUI, _super);
    function GameSellPopUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/gamesellpopui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameSellPopUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameSellPopUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameSellPopUI.prototype.onAddToStage = function (event) {
        this.btn_get_zombie.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSellClick, this);
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
    };
    GameSellPopUI.prototype.refreshUI = function () {
        this.editabletext_price.text = "";
    };
    GameSellPopUI.prototype.onSellClick = function (event) {
        var price = Number(this.editabletext_price.text);
        if (price <= 0) {
            return;
        }
        //price = price * MThrid.BigUtil.pow(1,18)
        MainUI.getInstance().gameUI.gameMyZombieUI.createAskOrderFunc(price);
        this.visible = false;
    };
    GameSellPopUI.prototype.onCloseClick = function (event) {
        this.visible = false;
    };
    return GameSellPopUI;
}(eui.Component));
window["GameSellPopUI"] = GameSellPopUI;
__reflect(GameSellPopUI.prototype,"GameSellPopUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/gamespeedtrainui.ts":
/***/ (function(module, exports) {

var GameSpeedTrainUI = /** @class */ (function (_super) {
    __extends(GameSpeedTrainUI, _super);
    function GameSpeedTrainUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/gamespeedtrainui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameSpeedTrainUI.prototype.onAddToStage = function (event) {
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeNameClick, this);
        this.btn_train_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrainClick, this);
        this.btn_train_10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrain10Click, this);
        this.btn_train_100.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrain100Click, this);
        this.refreshUI();
    };
    GameSpeedTrainUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameSpeedTrainUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameSpeedTrainUI.prototype.refreshUI = function () {
        var data1 = JSON.parse(this.configData.data[0].configValue);
        this.label_train1_prop.text = "速度+" + data1.attribute.speed;
        //	this.label_train1_count.text = "已培育次数："+data1.attribute.attack
        var data2 = JSON.parse(this.configData.data[1].configValue);
        this.label_train10_prop.text = "速度+" + data2.attribute.speed;
        //	this.label_train10_count.text = "已培育次数："+data2.attribute.attack
        var data3 = JSON.parse(this.configData.data[2].configValue);
        this.label_train100_prop.text = "速度+" + data3.attribute.speed;
        //	this.label_train100_count.text = "已培育次数："+data3.attribute.attack
    };
    GameSpeedTrainUI.prototype.onChangeNameClick = function (event) {
        this.visible = false;
    };
    GameSpeedTrainUI.prototype.onTrainClick = function (event) {
        this.attributeCultivation(0, 1, 1, null);
    };
    GameSpeedTrainUI.prototype.onTrain10Click = function (event) {
        this.attributeCultivation(0, 10, 1, null);
    };
    GameSpeedTrainUI.prototype.onTrain100Click = function (event) {
        this.attributeCultivation(0, 100, 1, null);
    };
    //type 培育类型0速度1功血
    //count 培育次数
    //cost 培育花费的钱
    GameSpeedTrainUI.prototype.attributeCultivation = function (type, count, cost, actionFunc) {
        var nftNum = Number(this.zombieData.nftNum);
        var ret = MThrid.Web3Manager.getInstance().requestAllowance();
        ret.then(function (value) {
            var amount1 = MThrid.BigUtil.parseNumber(value, 18);
            var amount = MThrid.BigUtil.pow(1000000, 18);
            if (amount1 > 1) {
                var ret_1 = MThrid.Web3Manager.getInstance().attributeCultivation(nftNum, 1, count);
                ret_1.then(function (value) {
                    console.log(value);
                    if (actionFunc) {
                        actionFunc(value);
                    }
                });
            }
            else {
                var ret_2 = MThrid.Web3Manager.getInstance().requestApprove(amount);
                ret_2.then(function (value) {
                    console.log(value);
                });
            }
        });
    };
    return GameSpeedTrainUI;
}(eui.Component));
window["GameSpeedTrainUI"] = GameSpeedTrainUI;
__reflect(GameSpeedTrainUI.prototype,"GameSpeedTrainUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/gameui.ts":
/***/ (function(module, exports) {

var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/gameui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameUI.prototype.getRoot = function () { return this.root; };
    GameUI.prototype.onAddToStage = function (event) {
        this.btn_get.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetZombieClick, this);
        this.btn_my.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMyZombieClick, this);
        this.btn_pit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPitZombieClick, this);
        this.btn_lingqu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetCoinClick, this);
        this.initGetZombieUI();
    };
    GameUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameUI.prototype.refreshUI = function () {
        if (this.gameMyZombieUI && this.gameMyZombieUI.visible) {
            this.gameMyZombieUI.refreshUI();
        }
    };
    GameUI.prototype.onGetZombieClick = function (event) {
        this.initGetZombieUI();
        this.setButtonSourceState(1, true);
        this.setButtonSourceState(2, false);
        this.setButtonSourceState(4, false);
        this.setButtonSourceState(5, false);
    };
    GameUI.prototype.initGetZombieUI = function () {
        if (this.gameGetZombieUI == null) {
            this.gameGetZombieUI = new GameGetZombieUI();
            this.root.addChild(this.gameGetZombieUI);
        }
    };
    GameUI.prototype.onMyZombieClick = function (event) {
        this.initMyZombieUI();
        this.setButtonSourceState(1, false);
        this.setButtonSourceState(2, true);
        this.setButtonSourceState(4, false);
        this.setButtonSourceState(5, false);
    };
    GameUI.prototype.initMyZombieUI = function () {
        if (this.gameMyZombieUI == null) {
            this.gameMyZombieUI = new GameMyZombieUI();
            this.root.addChild(this.gameMyZombieUI);
        }
        else {
            this.gameMyZombieUI.refreshUI();
        }
    };
    GameUI.prototype.onAspectZombieClick = function (event) {
        console.log("onAspectZombieClick");
        this.setButtonSourceState(1, false);
        this.setButtonSourceState(2, false);
        this.setButtonSourceState(4, false);
        this.setButtonSourceState(5, false);
    };
    GameUI.prototype.onPitZombieClick = function (event) {
        console.log("onPitZombieClick");
        if (this.gameZombiePitUI == null) {
            this.gameZombiePitUI = new GameZombiePitUI();
            this.root.addChild(this.gameZombiePitUI);
        }
        this.setButtonSourceState(1, false);
        this.setButtonSourceState(2, false);
        this.setButtonSourceState(4, true);
        this.setButtonSourceState(5, false);
    };
    GameUI.prototype.onGetCoinClick = function (event) {
        var _this = this;
        if (this.gameGetTokenUI == null) {
            MThrid.NetworkManager.getInstance().getUserInfo().then(function (value) {
                console.log("value ");
                console.log(value);
                _this.gameGetTokenUI = new GameGetTokenUI();
                _this.gameGetTokenUI.Data = value.data;
                _this.root.addChild(_this.gameGetTokenUI);
            });
        }
        else {
            MThrid.NetworkManager.getInstance().getUserInfo().then(function (value) {
                console.log(value);
                _this.gameGetTokenUI.Data = value.data;
                _this.gameGetTokenUI.refreshUI();
            });
        }
        console.log("onGetCoinClick");
        this.setButtonSourceState(1, false);
        this.setButtonSourceState(2, false);
        this.setButtonSourceState(4, false);
        this.setButtonSourceState(5, true);
    };
    GameUI.prototype.setButtonSourceState = function (index, state) {
        var btn = null;
        var sourceName;
        var component = null;
        if (index == 1) {
            btn = this.btn_get;
            sourceName = state ? "atlas_game_51" : "atlas_game_10";
            component = this.gameGetZombieUI;
        }
        else if (index == 2) {
            btn = this.btn_my;
            sourceName = state ? "atlas_game_2" : "atlas_game_9";
            component = this.gameMyZombieUI;
        }
        else if (index == 4) {
            btn = this.btn_pit;
            sourceName = state ? "atlas_game_4" : "atlas_game_12";
            component = this.gameZombiePitUI;
        }
        else if (index == 5) {
            btn = this.btn_lingqu;
            sourceName = state ? "atlas_game_50" : "atlas_game_52";
            component = this.gameGetTokenUI;
        }
        btn.enabled = !state;
        var imgBtn_normal = btn.getChildAt(0);
        imgBtn_normal.source = RES.getRes(sourceName);
        if (component) {
            component.visible = state;
        }
    };
    return GameUI;
}(eui.Component));
window["GameUI"] = GameUI;
__reflect(GameUI.prototype,"GameUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/gamezombiepitui.ts":
/***/ (function(module, exports) {

var GameZombiePitUI = /** @class */ (function (_super) {
    __extends(GameZombiePitUI, _super);
    function GameZombiePitUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/gamezombiepitui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameZombiePitUI.prototype.onAddToStage = function (event) {
    };
    return GameZombiePitUI;
}(eui.Component));
window["GameZombiePitUI"] = GameZombiePitUI;
__reflect(GameZombiePitUI.prototype,"GameZombiePitUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/homepageui.ts":
/***/ (function(module, exports) {

var HomePageUI = /** @class */ (function (_super) {
    __extends(HomePageUI, _super);
    function HomePageUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/HomePageUI.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    HomePageUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    HomePageUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    HomePageUI.prototype.onAddToStage = function (event) {
    };
    HomePageUI.prototype.onHomePageClick = function (event) {
    };
    return HomePageUI;
}(eui.Component));
window["HomePageUI"] = HomePageUI;
__reflect(HomePageUI.prototype,"HomePageUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/mainui.ts":
/***/ (function(module, exports) {

var emPageUIName;
(function (emPageUIName) {
    emPageUIName[emPageUIName["eMainUI"] = 0] = "eMainUI";
    emPageUIName[emPageUIName["eMarketUI"] = 1] = "eMarketUI";
    emPageUIName[emPageUIName["eGameUI"] = 2] = "eGameUI";
    emPageUIName[emPageUIName["eFriendUI"] = 3] = "eFriendUI";
})(emPageUIName || (emPageUIName = {}));
window["emPageUIName"] = emPageUIName;
var MainUI = /** @class */ (function (_super) {
    __extends(MainUI, _super);
    function MainUI() {
        var _this = _super.call(this) || this;
        _this.pageUIName = emPageUIName.eMainUI;
        _this.skinName = "resource/ui/mainui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        MainUI.instance = _this;
        return _this;
    }
    MainUI.getInstance = function () {
        return this.instance;
    };
    MainUI.prototype.onAddToStage = function (event, type) {
        if (type === void 0) { type = 0; }
        this.initProp();
    };
    MainUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    MainUI.prototype.mouseScrollviewContent = function () {
        var _this = this;
        var sc = this.scrollerview;
        MThrid.MouseWheelEvent.eventDispatcher.addEventListener("EVT_MOUSE_WHEEL", function ($e) {
            var scrollerviewContentHeight = _this.scrollerviewContentHeight;
            var scrollHeight = scrollerviewContentHeight - sc.height + 130;
            sc.viewport.scrollV += MThrid.MouseWheelEvent.coordinateY;
            if (sc.viewport.scrollV <= 0) {
                sc.viewport.scrollV = 0;
            }
            else if (sc.viewport.scrollV >= scrollHeight) {
                sc.viewport.scrollV = scrollHeight;
            }
        }, this);
        this.scrollerview.viewport.validateNow();
        this.scrollerview.viewport.scrollV = 0;
        this.scrollerview.touchEnabled = false;
        this.scrollerview.viewport.scrollEnabled = true;
        this.scrollerview.scrollPolicyH = eui.ScrollPolicy.OFF;
        this.scrollerview.scrollPolicyV = eui.ScrollPolicy.ON;
        this.scrollerviewContentHeight = this.scrollerviewContent.height;
    };
    MainUI.prototype.initProp = function () {
        // 主页
        this.label_homepage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHomePageClick, this);
        // 连接钱包
        this.btn_money_link.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMoneyLinkClick, this);
        // 游戏
        this.label_game.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameClick, this);
        // 市场
        this.label_market.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMarketClick, this);
        // 邀请朋友
        this.label_friend.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFriendClick, this);
        // 开始游戏
        this.btn_start_game1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameClick, this);
        // this.homePageUI = new HomePageUI()
        // this.scrollerviewContent.addChild(this.homePageUI)
        console.log(33, this.startGame);
        this.mouseScrollviewContent();
        MThrid.Web3Manager.getInstance().init();
        this.showGamePopInfoUI(false);
        if (MThrid.NetworkManager.getInstance().IsInLogin()) {
            console.log("已登录");
            var imgBtn_normal = this.btn_money_link.getChildAt(0);
            imgBtn_normal.source = RES.getRes("atlas_main_14");
        }
    };
    MainUI.prototype.mouseFloatEffect = function () {
        mouse.enable(this.stage);
        mouse.setMouseMoveEnabled(true);
        mouse.setMouseMoveEnabled(true);
        var isOver = false;
        // this.labeltest.addEventListener(mouse.MouseEvent.ROLL_OVER,function(){
        // //	console.log("ROLL_OVER")
        // 	if(!isOver)
        // 	{
        // 		this.labeltest.textColor = 0xf8cb37
        // 		isOver = true
        // 	}else
        // 	{
        // 	}
        // },this);
    };
    // 签名
    MainUI.prototype.onMoneyLinkClick = function (event) {
        var self = this;
        if (MThrid.NetworkManager.getInstance().IsInLogin()) {
            this.onGameClick(null);
            this.gameUI.onGetZombieClick(null);
        }
        else {
            MThrid.Web3Manager.getInstance().userSign("hello", function (err, signature) {
                console.log(signature);
                if (err) {
                }
                else {
                    var address = MThrid.Web3Manager.getInstance().getUserAddress();
                    var obj = { "address": address, "message": "hello", "signatureMessage": signature };
                    MThrid.NetworkManager.getInstance().userLogin(obj).then(function (retValue) {
                        console.log("atlas_main_14", retValue);
                        if (retValue) {
                            var imgBtn_normal = self.btn_money_link.getChildAt(0);
                            imgBtn_normal.source = RES.getRes("atlas_main_14");
                        }
                    });
                }
            });
        }
    };
    MainUI.prototype.onHomePageClick = function (event) {
        this.startGame.visible = true;
        this.pageUIName = emPageUIName.eMainUI;
        this.switchPageState();
    };
    MainUI.prototype.onGameClick = function (event) {
        console.log('this.pageUIName', MThrid.NetworkManager.getInstance().IsInLogin());
        if (!MThrid.NetworkManager.getInstance().IsInLogin()) {
            this.onMoneyLinkClick(null);
            return;
        }
        this.pageUIName = emPageUIName.eGameUI;
        if (this.gameUI == null) {
            this.gameUI = new GameUI();
            this.scrollerviewContent.addChild(this.gameUI);
        }
        else {
            this.gameUI.refreshUI();
        }
        this.switchPageState();
    };
    MainUI.prototype.onMarketClick = function (event) {
        if (!MThrid.NetworkManager.getInstance().IsInLogin()) {
            this.onMoneyLinkClick(null);
            return;
        }
        this.pageUIName = emPageUIName.eMarketUI;
        if (this.marketUI == null) {
            this.marketUI = new MarketUI();
            this.scrollerviewContent.addChild(this.marketUI);
        }
        else {
            this.marketUI.refreshUI();
        }
        this.switchPageState();
    };
    MainUI.prototype.onFriendClick = function (event) {
        this.pageUIName = emPageUIName.eFriendUI;
        if (this.friendUI == null) {
            this.friendUI = new FriendUI();
            this.scrollerviewContent.addChild(this.friendUI);
        }
        this.switchPageState();
    };
    MainUI.prototype.switchPageState = function () {
        var scrollerviewContentHeight = 0;
        var eName = this.pageUIName;
        if (eName == emPageUIName.eMainUI) {
            this.changeLabelPageState(true, this.homePageUI, this.label_homepage);
            this.changeLabelPageState(false, this.gameUI, this.label_game);
            this.changeLabelPageState(false, this.marketUI, this.label_market);
            this.changeLabelPageState(false, this.friendUI, this.label_friend);
            scrollerviewContentHeight = 3760 - 127;
        }
        else if (eName == emPageUIName.eGameUI) {
            this.changeLabelPageState(false, this.homePageUI, this.label_homepage);
            this.changeLabelPageState(true, this.gameUI, this.label_game);
            this.changeLabelPageState(false, this.marketUI, this.label_market);
            this.changeLabelPageState(false, this.friendUI, this.label_friend);
            scrollerviewContentHeight = 2312 - 127;
        }
        else if (eName == emPageUIName.eMarketUI) {
            this.changeLabelPageState(false, this.homePageUI, this.label_homepage);
            this.changeLabelPageState(false, this.gameUI, this.label_game);
            this.changeLabelPageState(true, this.marketUI, this.label_market);
            this.changeLabelPageState(false, this.friendUI, this.label_friend);
            scrollerviewContentHeight = 2403 - 127;
        }
        else if (eName == emPageUIName.eFriendUI) {
            this.changeLabelPageState(false, this.homePageUI, this.label_homepage);
            this.changeLabelPageState(false, this.gameUI, this.label_game);
            this.changeLabelPageState(false, this.marketUI, this.label_market);
            this.changeLabelPageState(true, this.friendUI, this.label_friend);
            scrollerviewContentHeight = 1755 - 127;
        }
        if (eName == emPageUIName.eGameUI) {
            this.scrollerview.viewport.scrollV = 430;
        }
        else {
            this.scrollerview.viewport.scrollV = 0;
        }
        if (eName != emPageUIName.eMainUI) {
            this.startGame.visible = false;
        }
        this.scrollerviewContentHeight = scrollerviewContentHeight;
    };
    MainUI.prototype.changeLabelPageState = function (state, component, label) {
        var textColor = state ? 0xF8CB37 : 0xFFFFFF;
        label.textColor = textColor;
        if (component) {
            component.visible = state;
        }
    };
    MainUI.prototype.showGamePopInfoUI = function (visible) {
        if (this.gamePopInfoUI == null) {
            this.gamePopInfoUI = new GamePopInfoUI();
            this.stage.addChild(this.gamePopInfoUI);
        }
        else {
        }
        this.gamePopInfoUI.visible = visible;
    };
    MainUI.instance = null;
    return MainUI;
}(eui.Component));
window["MainUI"] = MainUI;
__reflect(MainUI.prototype,"MainUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/marketui.ts":
/***/ (function(module, exports) {

var MarketZombieItem = /** @class */ (function () {
    function MarketZombieItem() {
    }
    return MarketZombieItem;
}());
window["MarketZombieItem"] = MarketZombieItem;
__reflect(MarketZombieItem.prototype,"MarketZombieItem",[]); 
var MarketTransactionItem = /** @class */ (function () {
    function MarketTransactionItem() {
    }
    return MarketTransactionItem;
}());
window["MarketTransactionItem"] = MarketTransactionItem;
__reflect(MarketTransactionItem.prototype,"MarketTransactionItem",[]); 
var MarketUI = /** @class */ (function (_super) {
    __extends(MarketUI, _super);
    function MarketUI() {
        var _this = _super.call(this) || this;
        _this.bgPngs = MThrid.Const.ZombieBgPngs;
        _this.marketZombieItemDict = [];
        _this.marketTransactionItem = [];
        _this.skinName = "resource/ui/marketui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    MarketUI.prototype.onAddToStage = function (event) {
        var _this = this;
        this.group_zombie.visible = true;
        this.group_zombieDetial.visible = false;
        this.label_nohave_marketinfo.visible = false;
        this.label_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackListClick, this);
        this.image_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackListClick, this);
        this.btn_buy_zombie.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuyZombieClick, this);
        this.image_kind_select.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onKindSeleClick, this);
        var nodeGroup = [this.group_item1, this.group_item2, this.group_item3, this.group_item4,
            this.group_item5, this.group_item6, this.group_item7, this.group_item8, this.group_item9, this.group_item10, this.group_item11, this.group_item12];
        var index = 0;
        var _loop_1 = function (node) {
            var image_bg = node.getChildByName("image_bg");
            var label_nft = node.getChildByName("label_nft");
            var label_battle_num = node.getChildByName("label_battle_num");
            var label_curPrice = node.getChildByName("label_curPrice");
            var label_curPrice_m = node.getChildByName("label_curPrice_m");
            var zombieData_1 = { "scaleX": 0.1, "scaleY": 0.1, "posX": 20, "posY": 57 };
            var zombieFigureUI = new ZombieFigureUI(zombieData_1);
            node.addChildAt(zombieFigureUI, 2);
            var item = new MarketZombieItem();
            item.image_bg = image_bg;
            item.group = node;
            item.zombieFigureUI = zombieFigureUI;
            item.label_nft = label_nft;
            item.label_battle_num = label_battle_num;
            item.label_curPrice = label_curPrice;
            item.label_curPrice_m = label_curPrice_m;
            this_1.marketZombieItemDict[index] = item;
            index = index + 1;
            image_bg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                if (item.clickCallFunc) {
                    item.clickCallFunc();
                }
            }, this_1);
        };
        var this_1 = this;
        for (var _i = 0, nodeGroup_1 = nodeGroup; _i < nodeGroup_1.length; _i++) {
            var node = nodeGroup_1[_i];
            _loop_1(node);
        }
        var zombieData = { "scaleX": 0.19, "scaleY": 0.19, "posX": 80, "posY": 250 };
        this.zombieFigureUI = new ZombieFigureUI(zombieData);
        this.group_zombieDetial.addChild(this.zombieFigureUI);
        this.zombieFigureUI.visible = false;
        this.pageTurnUI = new PageTurnUI();
        this.pageTurnUI.x = 502;
        this.pageTurnUI.y = 1017;
        this.group_zombie.addChild(this.pageTurnUI);
        this.pageTurnUI.setClickPageCall(function (page) {
            _this.requestPageGetZombie(page);
        });
        this.requestPageGetZombie(1);
        this.initKindCondiction();
        this.initTransactionGroup();
        this.zombieMarketLog7();
    };
    MarketUI.prototype.refreshUI = function () {
        this.pageTurnUI.reSetData();
        this.requestPageGetZombie(1);
    };
    MarketUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MarketUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //返回
    MarketUI.prototype.onBackListClick = function (event) {
        this.group_zombie.visible = true;
        this.group_zombieDetial.visible = false;
    };
    MarketUI.prototype.zombieMarketLog7 = function () {
        var _this = this;
        var retData = MThrid.NetworkManager.getInstance().zombieMarketLog7();
        retData.then(function (result) {
            var value = result.data;
            _this.label_genesisprice_min.text = "" + (value.cZombieMin / MThrid.BigUtil.pow(1, 10));
            _this.label_price_min.text = "" + (value.zombieMin / MThrid.BigUtil.pow(1, 10));
            _this.label_genesisprice_max.text = "" + (value.cZombieMax / MThrid.BigUtil.pow(1, 10));
            _this.label_price_max.text = "" + (value.zombieMax / MThrid.BigUtil.pow(1, 10));
            _this.label_genesisprice_mean.text = "" + (value.cZombieAverage / MThrid.BigUtil.pow(1, 10));
            _this.label_price_mean.text = "" + (value.zombieAverage / MThrid.BigUtil.pow(1, 10));
        });
    };
    MarketUI.prototype.initKindCondiction = function () {
        var _this = this;
        var i = 0;
        var _loop_2 = function () {
            var index = i;
            var label = this_2.group_kind_select.getChildByName("" + index);
            label.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                //console.log("index  "+index+"   "+label.text)
                _this.group_kind_select.visible = false;
                _this.label_kind_info.text = label.text;
                _this.image_kind_down.visible = true;
                _this.image_kind_up.visible = false;
            }, this_2);
        };
        var this_2 = this;
        for (i = 0; i < 7; i++) {
            _loop_2();
        }
        this.group_kind_select.visible = false;
        this.image_kind_down.visible = true;
        this.image_kind_up.visible = false;
        var immarketCondictionFunc = function (click_type) {
            if (click_type == 1 || click_type == 2) {
                _this.checkbox_price_down.selected = false;
                _this.checkbox_price_up.selected = false;
                _this.checkbox_battlenum_down.selected = false;
                _this.checkbox_battlenum_up.selected = false;
            }
            else if (click_type == 3 || click_type == 4) {
                _this.checkbox_inmarket_down.selected = false;
                _this.checkbox_inmarket_up.selected = false;
                _this.checkbox_battlenum_down.selected = false;
                _this.checkbox_battlenum_up.selected = false;
            }
            else if (click_type == 5 || click_type == 6) {
                _this.checkbox_inmarket_down.selected = false;
                _this.checkbox_inmarket_up.selected = false;
                _this.checkbox_price_down.selected = false;
                _this.checkbox_price_up.selected = false;
            }
        };
        this.checkbox_inmarket_down.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.checkbox_inmarket_up.selected = !_this.checkbox_inmarket_down.selected;
            immarketCondictionFunc(1);
        }, this);
        this.checkbox_inmarket_up.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.checkbox_inmarket_down.selected = !_this.checkbox_inmarket_up.selected;
            immarketCondictionFunc(2);
        }, this);
        this.checkbox_price_down.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.checkbox_price_up.selected = !_this.checkbox_price_down.selected;
            immarketCondictionFunc(3);
        }, this);
        this.checkbox_price_up.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.checkbox_price_down.selected = !_this.checkbox_price_up.selected;
            immarketCondictionFunc(4);
        }, this);
        this.checkbox_battlenum_down.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.checkbox_battlenum_up.selected = !_this.checkbox_battlenum_down.selected;
            immarketCondictionFunc(5);
        }, this);
        this.checkbox_battlenum_up.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.checkbox_battlenum_down.selected = !_this.checkbox_battlenum_up.selected;
            immarketCondictionFunc(6);
        }, this);
    };
    MarketUI.prototype.onKindSeleClick = function (event) {
        if (!this.group_kind_select.visible) {
            this.group_kind_select.visible = true;
            this.image_kind_down.visible = false;
            this.image_kind_up.visible = true;
        }
        else {
            this.group_kind_select.visible = false;
            this.image_kind_down.visible = true;
            this.image_kind_up.visible = false;
        }
    };
    MarketUI.prototype.requestPageGetZombie = function (page) {
        var _this = this;
        var obj = { "page": page, "limit": 12 };
        var retData = MThrid.NetworkManager.getInstance().allGetMarketZombie(obj);
        retData.then(function (value) {
            console.log(value);
            _this.curPageData = value;
            _this.setSelePageUI();
        });
        this.curShowPage = page;
    };
    MarketUI.prototype.setSelePageUI = function () {
        var _this = this;
        console.log(this.curPageData.data.results);
        var results = this.curPageData.data.results;
        var len = results.length;
        var index = 0;
        var toolPage = Math.ceil(this.curPageData.data.page.total / 12);
        var showIndex = this.curPageData.data.page.total % 12;
        var _loop_3 = function () {
            var node = this_3.marketZombieItemDict[index];
            if (this_3.curShowPage < toolPage || this_3.curShowPage == toolPage && index < showIndex) {
                var curIndex = index;
                var data_1 = results[index];
                node.clickCallFunc = function () {
                    console.log('点击', data_1);
                    _this.curSeleMarketZombieData = data_1;
                    var obj = { "nftNum": data_1.nftNum };
                    var retData = MThrid.NetworkManager.getInstance().getZombieInfo(obj);
                    retData.then(function (value) {
                        _this.setZombieDetailInfo(value.data);
                    });
                    var obj1 = { "page": 1, "limit": 5, "nftNum": data_1.nftNum };
                    var retData1 = MThrid.NetworkManager.getInstance().allGetMarketZombieLog(obj1);
                    retData1.then(function (value) {
                        console.log(value);
                        _this.updateTransactionGroup(value);
                    });
                    // let gene = JSON.parse(data.gene)
                    // node.zombieFigureUI.setHeadByIndex(gene.head_style)
                    // node.zombieFigureUI.setEyeByIndex(gene.eye_style)
                    // node.zombieFigureUI.setShirtByIndex(gene.shirt_style)
                    // console.log(3333, node.zombieFigureUI)
                };
                var type = 1;
                node.image_bg.source = RES.getRes(this_3.bgPngs[type]);
                node.group.visible = true;
                node.label_nft.text = "#" + data_1.nftNum;
                node.label_battle_num.text = data_1.pveAttackNum + "/" + MThrid.Const.ZombieBattleNum[type];
                node.label_curPrice.text = "" + (data_1.price / MThrid.BigUtil.pow(1, 10));
                node.label_curPrice_m.text = "" + (data_1.price / MThrid.BigUtil.pow(1, 10));
                var gene = JSON.parse(data_1.gene);
                node.zombieFigureUI.setHeadByIndex(gene.head_style);
                node.zombieFigureUI.setEyeByIndex(gene.eye_style);
                node.zombieFigureUI.setShirtByIndex(gene.shirt_style);
                console.log(22, node.zombieFigureUI);
                // node.group.visible = true
            }
            else {
                console.log('点击1');
                node.group.visible = false;
            }
        };
        var this_3 = this;
        for (index = 0; index < 12; index++) {
            _loop_3();
        }
        this.pageTurnUI.visible = (toolPage > 1);
        if (this.pageTurnUI.visible) {
            this.pageTurnUI.setToolPageIndex(toolPage);
        }
        this.label_nohave_marketinfo.visible = len <= 0;
    };
    MarketUI.prototype.setZombieDetailInfo = function (data) {
        console.log(data);
        if (data == null) {
            return;
        }
        this.group_zombie.visible = false;
        this.group_zombieDetial.visible = true;
        this.label_atkvalue.text = data.attack;
        this.label_lifevalue.text = data.blood;
        this.label_speedvalue.text = data.speed;
        this.label_lackyvalue.text = data.lucky;
        this.label_growthvalue.text = data.gorw;
        this.label_owner_name.text = data.address;
        this.label_z_cur_price.text = "" + (this.curSeleMarketZombieData.price / MThrid.BigUtil.pow(1, 10));
        this.label_m_cur_price.text = "" + (this.curSeleMarketZombieData.price / MThrid.BigUtil.pow(1, 10));
        this.image_zombie_bg.source = RES.getRes(this.bgPngs[data.type]);
        this.label_battle_num.text = data.pveAttackNum + "/" + MThrid.Const.ZombieBattleNum[data.type];
        this.curSeleZombieData = data;
        if (MThrid.Web3Manager.getInstance().getUserAddress() == this.curSeleZombieData.address) {
            this.btn_buy_zombie.visible = false;
        }
        else {
            this.btn_buy_zombie.visible = true;
        }
        var gene = JSON.parse(data.gene);
        this.zombieFigureUI.setHeadByIndex(gene.head_style);
        this.zombieFigureUI.setEyeByIndex(gene.eye_style);
        this.zombieFigureUI.setShirtByIndex(gene.shirt_style);
        this.zombieFigureUI.visible = true;
        var sourceNameBtnSell;
        var address = MThrid.Web3Manager.getInstance().getUserAddress();
        if (address.toLowerCase() == this.curSeleZombieData.address) {
            sourceNameBtnSell = "atlas_mark_29";
        }
        else {
            sourceNameBtnSell = "atlas_mark_22";
        }
        var imgBtn_normal = this.btn_buy_zombie.getChildAt(0);
        imgBtn_normal.source = RES.getRes(sourceNameBtnSell);
    };
    //购买僵尸
    MarketUI.prototype.onBuyZombieClick = function (event) {
        var _this = this;
        var address = MThrid.Web3Manager.getInstance().getUserAddress();
        var tokenId = Number(this.curSeleZombieData.nftNum);
        var price = this.curSeleMarketZombieData.price;
        var updateTime = 300;
        var isJump = false;
        var transactionHash = null;
        if (address.toLowerCase() == this.curSeleZombieData.address) {
            console.log('if');
            var createAskOrder = MThrid.Web3Manager.getInstance().cancelAskOrder(tokenId, function () {
                var self = _this;
                MainUI.getInstance().showGamePopInfoUI(true);
                MainUI.getInstance().gamePopInfoUI.setTimeInfo(updateTime);
                MainUI.getInstance().gamePopInfoUI.timeUpdateFunc = function () {
                    updateTime = updateTime - 0.016;
                    if (!isJump) {
                        MainUI.getInstance().gamePopInfoUI.setTimeInfo(updateTime);
                    }
                    if (updateTime <= 0) {
                        MainUI.getInstance().showGamePopInfoUI(false);
                        MainUI.getInstance().gamePopInfoUI.stopTimer();
                    }
                    console.log("this.updateTime " + updateTime);
                    if (transactionHash != null) {
                        var paramsObj = { "contractType": "ShelfNft", "txId": transactionHash };
                        var requestCheckHash = MThrid.NetworkManager.getInstance().requestCheckHash(paramsObj);
                        requestCheckHash.then(function (retvalue) {
                            console.log("retvalue");
                            console.log(retvalue);
                            if (retvalue.success && !isJump) {
                                isJump = true;
                                updateTime = 1;
                                _this.group_zombie.visible = true;
                                _this.group_zombieDetial.visible = false;
                                _this.requestPageGetZombie(_this.curShowPage);
                            }
                        });
                    }
                };
                MainUI.getInstance().gamePopInfoUI.startTimer();
            });
            createAskOrder.then(function (createAskOrderValue) {
                console.log(createAskOrderValue);
                transactionHash = createAskOrderValue.transactionHash;
            });
        }
        else {
            console.log('if');
            var getMarketBoxZombie = MThrid.Web3Manager.getInstance().getMarketBoxZombie(tokenId, price, function () {
                var self = _this;
                MainUI.getInstance().showGamePopInfoUI(true);
                MainUI.getInstance().gamePopInfoUI.setTimeInfo(updateTime);
                MainUI.getInstance().gamePopInfoUI.timeUpdateFunc = function () {
                    updateTime = updateTime - 0.016;
                    if (!isJump) {
                        MainUI.getInstance().gamePopInfoUI.setTimeInfo(updateTime);
                    }
                    if (updateTime <= 0) {
                        MainUI.getInstance().showGamePopInfoUI(false);
                        MainUI.getInstance().gamePopInfoUI.stopTimer();
                    }
                    console.log("this.updateTime " + updateTime);
                    if (transactionHash != null) {
                        var paramsObj = { "contractType": "PurchaseNft", "txId": transactionHash };
                        var requestCheckHash = MThrid.NetworkManager.getInstance().requestCheckHash(paramsObj);
                        requestCheckHash.then(function (retvalue) {
                            console.log("retvalue");
                            console.log(retvalue);
                            if (retvalue.success && !isJump) {
                                isJump = true;
                                updateTime = 1;
                                _this.group_zombie.visible = true;
                                _this.group_zombieDetial.visible = false;
                                MainUI.getInstance().gamePopInfoUI.setBoardInfo("购买成功");
                                _this.requestPageGetZombie(_this.curShowPage);
                            }
                        });
                    }
                };
                MainUI.getInstance().gamePopInfoUI.startTimer();
            });
            getMarketBoxZombie.then(function (getMarketBoxZombieValue) {
                console.log(getMarketBoxZombieValue);
                transactionHash = getMarketBoxZombieValue.transactionHash;
            });
        }
    };
    MarketUI.prototype.initTransactionGroup = function () {
        var nodeGroup = [this.group_transaction_1, this.group_transaction_2, this.group_transaction_3, this.group_transaction_4,
            this.group_transaction_5];
        var index = 0;
        for (var _i = 0, nodeGroup_2 = nodeGroup; _i < nodeGroup_2.length; _i++) {
            var node = nodeGroup_2[_i];
            var label_name = node.getChildByName("label_name");
            var label_price = node.getChildByName("label_price");
            var label_from = node.getChildByName("label_from");
            var label_to = node.getChildByName("label_to");
            var label_time = node.getChildByName("label_time");
            var marketTransactionItem = new MarketTransactionItem();
            marketTransactionItem.group = node;
            marketTransactionItem.label_name = label_name;
            marketTransactionItem.label_price = label_price;
            marketTransactionItem.label_from = label_from;
            marketTransactionItem.label_to = label_to;
            marketTransactionItem.label_time = label_time;
            this.marketTransactionItem[index] = marketTransactionItem;
            index = index + 1;
        }
    };
    MarketUI.prototype.updateTransactionGroup = function (value) {
        var results = value.data.results;
        var len = results.length;
        var index = 0;
        var toolPage = Math.ceil(value.data.page.total / 5);
        var showIndex = value.data.page.total % 5;
        var curShowPage = 1;
        for (index = 0; index < 5; index++) {
            var node = this.marketTransactionItem[index];
            var data = results[index];
            if (curShowPage < toolPage || curShowPage == toolPage && index < showIndex) {
                node.label_price.text = data.price / MThrid.BigUtil.pow(1, 10) + "BNB";
                var length_1 = data.sellerAddress.length;
                if (length_1 > 0) {
                    node.label_from.text = "(地址：" + data.sellerAddress.substr(0, 7) + "..." + data.sellerAddress.substr(length_1 - 5, length_1) + ")";
                }
                else {
                    node.label_from.text = "UNKnow";
                }
                length_1 = data.toAddress.length;
                if (length_1 > 0) {
                    node.label_to.text = "(地址：" + data.toAddress.substr(0, 7) + "..." + data.toAddress.substr(length_1 - 5, length_1) + ")";
                }
                else {
                    node.label_to.text = "UNKnow";
                }
                node.label_time.text = this.getFormateDate(data.updateTime);
                var date = new Date(data.updateTime);
                console.log(date.getHours());
                console.log(date.getMinutes());
                console.log(date.getSeconds());
                node.group.visible = true;
            }
            else {
                node.group.visible = false;
            }
        }
    };
    MarketUI.prototype.getFormateDate = function (timeStamp) {
        var date = new Date(timeStamp);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var hoursStr = hours.toString();
        if (hours >= 0 && hours <= 9) {
            hoursStr = "0" + hours;
        }
        var minutesStr = minutes.toString();
        if (minutes >= 0 && minutes <= 9) {
            minutesStr = "0" + minutes;
        }
        var secondsStr = seconds.toString();
        if (seconds >= 0 && seconds <= 9) {
            secondsStr = "0" + seconds;
        }
        //var currentdate = `${year}年${month}月${strDate}日 ${hoursStr}:${minutesStr}:${secondsStr}`;
        var currentdate = hoursStr + ":" + minutesStr + ":" + secondsStr;
        return currentdate;
    };
    return MarketUI;
}(eui.Component));
window["MarketUI"] = MarketUI;
__reflect(MarketUI.prototype,"MarketUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/pageturnui.ts":
/***/ (function(module, exports) {

//页签对象
var ZombiePageChildNode = /** @class */ (function () {
    function ZombiePageChildNode() {
    }
    return ZombiePageChildNode;
}());
window["ZombiePageChildNode"] = ZombiePageChildNode;
__reflect(ZombiePageChildNode.prototype,"ZombiePageChildNode",[]); 
var PageTurnUI = /** @class */ (function (_super) {
    __extends(PageTurnUI, _super);
    function PageTurnUI() {
        var _this = _super.call(this) || this;
        _this.nodeChilds = [];
        _this.curPageIndex = 1; //当前选中的页
        _this.toolPageIndex = 8; //总的页数
        _this.toMaxIndex = 0;
        _this.skinName = "resource/ui/pageturnui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStageComplete, _this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    PageTurnUI.prototype.onAddToStageComplete = function (event) {
        this.initPageButton();
    };
    PageTurnUI.prototype.onAddToStage = function (event) {
        if (this.group_page1) {
            this.initPageButton();
        }
    };
    PageTurnUI.prototype.setClickPageCall = function (clickPageCall) {
        this.clickPageCall = clickPageCall;
    };
    PageTurnUI.prototype.reSetData = function () {
        this.curPageIndex = 1;
        this.toMaxIndex = 0;
    };
    PageTurnUI.prototype.setToolPageIndex = function (page) {
        this.toolPageIndex = page;
        this.initPageNode();
    };
    PageTurnUI.prototype.callPageFunc = function (page) {
        if (this.clickPageCall) {
            this.clickPageCall(page);
        }
    };
    PageTurnUI.prototype.initPageButton = function () {
        var _this = this;
        var nodeChildNum = 0;
        var nodes = [this.group_page1, this.group_page2, this.group_page3, this.group_page4,
            this.group_page5, this.group_page6, this.group_page7];
        var _loop_1 = function (node) {
            var label = node.getChildByName("label");
            var image = node.getChildByName("image");
            var image_sele = node.getChildByName("image_sele");
            label.touchEnabled = false;
            var childNode = new ZombiePageChildNode();
            childNode.label = label;
            childNode.image = image;
            childNode.image_sele = image_sele;
            childNode.node = node;
            childNode.callFunc = function () { };
            image.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                if (childNode.callFunc) {
                    childNode.callFunc();
                }
            }, this_1);
            this_1.nodeChilds[nodeChildNum] = childNode;
            nodeChildNum = nodeChildNum + 1;
        };
        var this_1 = this;
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            _loop_1(node);
        }
        this.image_leftpage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.toolPageIndex < 8) {
                if (_this.curPageIndex > 1) {
                    _this.curPageIndex = _this.curPageIndex - 1;
                    _this.changePage7();
                    _this.callPageFunc(_this.curPageIndex);
                }
            }
            else {
                console.log(_this.curPageIndex);
                if ((_this.toolPageIndex - _this.curPageIndex) <= 2) {
                    if (_this.toMaxIndex > 0) {
                        _this.toMaxIndex = _this.toMaxIndex - 1;
                        _this.changePage();
                        _this.callPageFunc(_this.curPageIndex);
                        return;
                    }
                }
                if (_this.curPageIndex > 1) {
                    _this.curPageIndex = _this.curPageIndex - 1;
                    _this.changePage();
                    _this.callPageFunc(_this.curPageIndex);
                }
            }
        }, this);
        this.image_rightpage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.toolPageIndex < 8) {
                if (_this.curPageIndex < _this.toolPageIndex) {
                    console.log(_this.curPageIndex);
                    console.log(_this.toolPageIndex);
                    _this.curPageIndex = _this.curPageIndex + 1;
                    _this.changePage7();
                    _this.callPageFunc(_this.curPageIndex);
                }
            }
            else {
                if ((_this.toolPageIndex - _this.curPageIndex) <= 2) {
                    if (_this.toMaxIndex < 2) {
                        _this.toMaxIndex = _this.toMaxIndex + 1;
                        _this.changePage();
                        _this.callPageFunc(_this.curPageIndex);
                    }
                    return;
                }
                _this.toMaxIndex = 0;
                if (_this.curPageIndex < _this.toolPageIndex) {
                    _this.curPageIndex = _this.curPageIndex + 1;
                    console.log("this.curPageIndex  " + _this.curPageIndex);
                    _this.changePage();
                    _this.callPageFunc(_this.curPageIndex);
                }
            }
        }, this);
    };
    PageTurnUI.prototype.initPageNode = function () {
        if (this.toolPageIndex < 8) {
            this.changePage7();
        }
        else {
            this.changePage();
        }
    };
    PageTurnUI.prototype.initPageNode7 = function () {
        var _this = this;
        this.changePage7();
        this.image_leftpage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.curPageIndex > 1) {
                _this.curPageIndex = _this.curPageIndex - 1;
                _this.changePage7();
                _this.callPageFunc(_this.curPageIndex);
            }
        }, this);
        this.image_rightpage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log(_this.curPageIndex);
            console.log(_this.toolPageIndex);
            if (_this.curPageIndex >= _this.toolPageIndex) {
                return;
            }
            if (_this.curPageIndex < _this.toolPageIndex) {
                console.log(_this.curPageIndex);
                console.log(_this.toolPageIndex);
                _this.curPageIndex = _this.curPageIndex + 1;
                _this.changePage7();
                _this.callPageFunc(_this.curPageIndex);
            }
        }, this);
    };
    PageTurnUI.prototype.changePage7 = function () {
        var _this = this;
        var num = 1;
        var _loop_2 = function (nodeChild) {
            var _num = num;
            var node = nodeChild.node;
            var label = nodeChild.label;
            var image = nodeChild.image;
            var image_sele = nodeChild.image_sele;
            if (_num <= this_2.toolPageIndex) {
                label.text = "" + _num;
                nodeChild.callFunc = function () {
                    _this.curPageIndex = _num;
                    _this.changePage7();
                    _this.callPageFunc(_this.curPageIndex);
                };
                image_sele.visible = (_num == this_2.curPageIndex);
                node.visible = true;
            }
            else {
                node.visible = false;
            }
            num = num + 1;
        };
        var this_2 = this;
        for (var _i = 0, _a = this.nodeChilds; _i < _a.length; _i++) {
            var nodeChild = _a[_i];
            _loop_2(nodeChild);
        }
    };
    PageTurnUI.prototype.changePage = function () {
        var _this = this;
        var num = 1;
        var showNum;
        var toToolIndex = this.toolPageIndex - 2;
        if ((this.toolPageIndex - this.curPageIndex) <= 2) {
            showNum = this.curPageIndex - 3;
        }
        else if (this.curPageIndex <= 3) {
            showNum = 1;
        }
        else {
            showNum = this.curPageIndex - 3;
        }
        var _loop_3 = function (nodeChild) {
            var _num = num;
            var node = nodeChild.node;
            var label = nodeChild.label;
            var image = nodeChild.image;
            var image_sele = nodeChild.image_sele;
            image.removeEventListener(egret.TouchEvent.TOUCH_TAP, null, this_3);
            if (((this_3.toolPageIndex - this_3.curPageIndex) <= 2)) {
                var curNum_1 = showNum;
                if (num == 1) {
                    label.text = "1";
                }
                else if (num == 6) {
                    label.text = "" + this_3.toolPageIndex;
                }
                else if (num == 2) {
                    label.text = "...";
                }
                else {
                    label.text = "" + curNum_1;
                }
                if (num <= 6) {
                    node.visible = true;
                }
                else {
                    node.visible = false;
                }
                var cNum = this_3.toMaxIndex + this_3.curPageIndex;
                nodeChild.callFunc = function () {
                    console.log("select curNum " + curNum_1);
                    if (_num == 1) {
                        _this.curPageIndex = 1;
                    }
                    else if (_num == 6) {
                        _this.curPageIndex = toToolIndex;
                        _this.toMaxIndex = 2;
                    }
                    else if (_num == 2) {
                        _this.curPageIndex = curNum_1;
                    }
                    else {
                        _this.curPageIndex = curNum_1;
                        if (_this.curPageIndex >= toToolIndex) {
                            _this.curPageIndex = toToolIndex;
                            _this.toMaxIndex = curNum_1 - toToolIndex;
                        }
                    }
                    console.log("select index " + curNum_1);
                    _this.changePage();
                    _this.callPageFunc(_this.curPageIndex);
                };
                image_sele.visible = (cNum == curNum_1);
            }
            else if (this_3.curPageIndex <= 3) {
                console.log("this.curPageIndex  == 1  " + this_3.curPageIndex);
                var curNum_2 = num;
                if (num == 6) {
                    label.text = "" + this_3.toolPageIndex;
                }
                else if (num == 5) {
                    label.text = "...";
                }
                else {
                    label.text = "" + showNum;
                }
                if (num <= 6) {
                    node.visible = true;
                }
                else {
                    node.visible = false;
                }
                nodeChild.callFunc = function () {
                    _this.curPageIndex = curNum_2;
                    console.log("select index " + _this.curPageIndex);
                    _this.changePage();
                    _this.callPageFunc(_this.curPageIndex);
                };
                image_sele.visible = (this_3.curPageIndex == num);
            }
            else {
                console.log("this.curPageIndex  == 2  " + this_3.curPageIndex);
                var cshowNum_1 = showNum;
                if (num == 1) {
                    label.text = "1";
                }
                else if (num == 7) {
                    label.text = "" + this_3.toolPageIndex;
                }
                else if (num == 2 || num == 6) {
                    label.text = "...";
                }
                else {
                    label.text = "" + showNum;
                }
                node.visible = true;
                nodeChild.callFunc = function () {
                    _this.curPageIndex = cshowNum_1;
                    if (_this.curPageIndex >= toToolIndex) {
                        _this.curPageIndex = toToolIndex;
                        _this.toMaxIndex = cshowNum_1 - toToolIndex;
                    }
                    console.log("select index " + _this.curPageIndex);
                    _this.changePage();
                    _this.callPageFunc(_this.curPageIndex);
                };
                image_sele.visible = (this_3.curPageIndex == showNum);
            }
            num = num + 1;
            showNum = showNum + 1;
        };
        var this_3 = this;
        for (var _i = 0, _a = this.nodeChilds; _i < _a.length; _i++) {
            var nodeChild = _a[_i];
            _loop_3(nodeChild);
        }
    };
    PageTurnUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PageTurnUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return PageTurnUI;
}(eui.Component));
window["PageTurnUI"] = PageTurnUI;
__reflect(PageTurnUI.prototype,"PageTurnUI",["eui.Component"]); 


/***/ }),

/***/ "./src/ui/zombiefigureui.ts":
/***/ (function(module, exports) {

var ZombieFigureUI = /** @class */ (function (_super) {
    __extends(ZombieFigureUI, _super);
    function ZombieFigureUI(data) {
        var _this = _super.call(this) || this;
        _this.headIndex = 1;
        _this.eyeIndex = 1;
        _this.shirtIndex = 1;
        _this.isStartMoving = false;
        _this.skinName = "resource/ui/zombiefigureui.exml";
        _this.mData = data;
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage2, _this);
        return _this;
    }
    ZombieFigureUI.prototype.setImageColor = function (image, r, g, b) {
        var colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        colorMatrix[0] = r / 255;
        colorMatrix[6] = g / 255;
        colorMatrix[12] = b / 255;
        var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        image.filters = [colorFilter];
    };
    ZombieFigureUI.prototype.onAddToStage2 = function (event) {
        if (this.group_zombie) {
            this.initProp();
        }
    };
    ZombieFigureUI.prototype.onAddToStage = function (event) {
        this.initProp();
    };
    ZombieFigureUI.prototype.initProp = function () {
        this.group_hp.visible = false;
        this.btn_head.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangHeadClick, this);
        this.btn_eye.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangEyeClick, this);
        this.btn_shirt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangShirtClick, this);
        this.btn_head_color.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangHeadColorClick, this);
        this.btn_eye_color.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangEyeColorClick, this);
        this.btn_shirt_color.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangShirtColorClick, this);
        if (this.mData.scaleX) {
            this.group_zombie.scaleX = this.mData.scaleX;
        }
        if (this.mData.scaleY) {
            this.group_zombie.scaleY = this.mData.scaleY;
        }
        if (this.mData.posX) {
            this.group_zombie.x = this.mData.posX;
        }
        if (this.mData.posY) {
            this.group_zombie.y = this.mData.posY;
        }
        if (this.mData.skewY) {
            this.group_zombie.anchorOffsetX = 0.5;
            this.group_zombie.anchorOffsetY = 0.5;
            this.group_zombie.skewY = this.mData.skewY;
            this.group_hp.skewY = 180;
            this.group_hp.x = 1200;
        }
        this.group_hp.scaleX = 7;
        this.group_hp.scaleY = 7;
        this.updateTimer = new egret.Timer(0.02, 0);
        this.updateTimer.addEventListener(egret.TimerEvent.TIMER, this.timeFunc, this);
        this.updateTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timeFuncFinish, this);
        console.log("this.bitmapLabel_buff_num  " + this.bitmapLabel_buff_num.x);
    };
    ZombieFigureUI.prototype.setZombieRotation = function (rotation) {
        this.group_zombie.anchorOffsetX = 0.5;
        this.group_zombie.anchorOffsetY = 0.5;
        this.group_zombie.rotation = rotation;
    };
    ZombieFigureUI.prototype.setZombiePosX = function (x) {
        this.group_zombie.x = x;
    };
    ZombieFigureUI.prototype.setZombiePosY = function (y) {
        this.group_zombie.y = y;
    };
    ZombieFigureUI.prototype.timeFunc = function () {
        this.group_hp.y = this.group_hp.y - 27.6;
        if (this.group_hp.y < -700) {
            this.group_hp.visible = false;
            this.updateTimer.stop();
        }
    };
    ZombieFigureUI.prototype.timeFuncFinish = function () {
    };
    ZombieFigureUI.prototype.showHurtBuff = function (num) {
        this.group_hp.visible = true;
        this.group_hp.y = 26;
        this.bitmapLabel_buff_num.text = "" + num;
        this.updateTimer.start();
    };
    ZombieFigureUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ZombieFigureUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    ZombieFigureUI.prototype.onChangHeadClick = function (event) {
        var _this = this;
        if (this.headIndex > 8) {
            this.headIndex = 0;
        }
        this.headIndex = this.headIndex + 1;
        var name = "resource/assets/ui/figure/figure_head-" + this.headIndex + ".png";
        RES.getResByUrl(name, function () {
            if (RES.getRes(name)) {
                _this.image_head.source = RES.getRes(name);
            }
        });
    };
    ZombieFigureUI.prototype.setHeadByIndex = function (index) {
        var _this = this;
        var name = "resource/assets/ui/figure/figure_head-" + index + ".png";
        RES.getResByUrl(name, function () {
            if (RES.getRes(name)) {
                _this.image_head.source = RES.getRes(name);
            }
        });
    };
    ZombieFigureUI.prototype.onChangHeadColorClick = function (event) {
        var r = Math.random() * 255;
        var g = Math.random() * 255;
        var b = Math.random() * 255;
        this.setImageColor(this.image_head, r, g, b);
        this.setImageColor(this.image_left_hand_1, r, g, b);
        this.setImageColor(this.image_left_hand_2, r, g, b);
        this.setImageColor(this.image_left_hand_3, r, g, b);
        this.setImageColor(this.image_right_hand_1, r, g, b);
        this.setImageColor(this.image_right_hand_2, r, g, b);
        this.setImageColor(this.image_right_hand_3, r, g, b);
    };
    ZombieFigureUI.prototype.onChangEyeClick = function (event) {
        var _this = this;
        if (this.eyeIndex > 11) {
            this.eyeIndex = 0;
        }
        this.eyeIndex = this.eyeIndex + 1;
        var name = "resource/assets/ui/figure/figure_eyes-" + this.eyeIndex + ".png";
        RES.getResByUrl(name, function () {
            if (RES.getRes(name)) {
                _this.image_eye.source = RES.getRes(name);
            }
        });
    };
    ZombieFigureUI.prototype.setEyeByIndex = function (index) {
        var _this = this;
        var name = "resource/assets/ui/figure/figure_eyes-" + index + ".png";
        RES.getResByUrl(name, function () {
            if (RES.getRes(name)) {
                _this.image_eye.source = RES.getRes(name);
            }
        });
    };
    ZombieFigureUI.prototype.onChangEyeColorClick = function (event) {
        var r = Math.random() * 255;
        var g = Math.random() * 255;
        var b = Math.random() * 255;
        this.setImageColor(this.image_eye, r, g, b);
    };
    ZombieFigureUI.prototype.onChangShirtClick = function (event) {
        var _this = this;
        if (this.shirtIndex > 5) {
            this.shirtIndex = 0;
        }
        this.shirtIndex = this.shirtIndex + 1;
        var name = "resource/assets/ui/figure/figure_shirt-" + this.shirtIndex + ".png";
        RES.getResByUrl(name, function () {
            if (RES.getRes(name)) {
                _this.image_shirt.source = RES.getRes(name);
            }
        });
    };
    ZombieFigureUI.prototype.setShirtByIndex = function (index) {
        var _this = this;
        var name = "resource/assets/ui/figure/figure_shirt-" + index + ".png";
        RES.getResByUrl(name, function () {
            if (RES.getRes(name)) {
                _this.image_shirt.source = RES.getRes(name);
            }
        });
    };
    ZombieFigureUI.prototype.onChangShirtColorClick = function (event) {
        var r = Math.random() * 255;
        var g = Math.random() * 255;
        var b = Math.random() * 255;
        this.setImageColor(this.image_shirt, r, g, b);
    };
    return ZombieFigureUI;
}(eui.Component));
window["ZombieFigureUI"] = ZombieFigureUI;
__reflect(ZombieFigureUI.prototype,"ZombieFigureUI",["eui.Component"]); 


/***/ })

/******/ });