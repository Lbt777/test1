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
    var Web3Manager = (function () {
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
    __reflect(Web3Manager.prototype, "MThrid.Web3Manager");
})(MThrid || (MThrid = {}));
//# sourceMappingURL=Web3Manager.js.map