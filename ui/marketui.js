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
var MarketZombieItem = (function () {
    function MarketZombieItem() {
    }
    return MarketZombieItem;
}());
__reflect(MarketZombieItem.prototype, "MarketZombieItem");
var MarketTransactionItem = (function () {
    function MarketTransactionItem() {
    }
    return MarketTransactionItem;
}());
__reflect(MarketTransactionItem.prototype, "MarketTransactionItem");
var MarketUI = (function (_super) {
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
__reflect(MarketUI.prototype, "MarketUI");
//# sourceMappingURL=marketui.js.map