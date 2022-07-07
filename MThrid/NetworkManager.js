var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var MThrid;
(function (MThrid) {
    var NetworkManager = (function () {
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
                var _this = this;
                var promise;
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
                var _this = this;
                var url, headObj, promise;
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
                var _this = this;
                var url, headObj, promise;
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
                var _this = this;
                var url, headObj, promise;
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
                var _this = this;
                var url, headObj, promise;
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
                var _this = this;
                var url, headObj, promise;
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
                var _this = this;
                var paramsObj, url, headObj, promise;
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
                var _this = this;
                var paramsObj, url, headObj, promise;
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
                var _this = this;
                var paramsObj, url, headObj, promise;
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
                var _this = this;
                var url, headObj, promise;
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
                var _this = this;
                var url, headObj, paramsObj, promise;
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
                var _this = this;
                var url, headObj, promise;
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
    __reflect(NetworkManager.prototype, "MThrid.NetworkManager");
})(MThrid || (MThrid = {}));
//# sourceMappingURL=NetworkManager.js.map