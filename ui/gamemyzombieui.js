var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
//僵尸对象
var ZombieNode = (function () {
    function ZombieNode() {
    }
    return ZombieNode;
}());
__reflect(ZombieNode.prototype, "ZombieNode");
var GameMyZombieUI = (function (_super) {
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
            image_bg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.group_zombie.visible = false;
                _this.group_zombieDetial.visible = true;
            }, this_1);
            var node = new ZombieNode();
            node.image_bg = image_bg;
            node.label_nft = label_nft;
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
__reflect(GameMyZombieUI.prototype, "GameMyZombieUI");
