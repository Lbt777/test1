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
var emPageUIName;
(function (emPageUIName) {
    emPageUIName[emPageUIName["eMainUI"] = 0] = "eMainUI";
    emPageUIName[emPageUIName["eMarketUI"] = 1] = "eMarketUI";
    emPageUIName[emPageUIName["eGameUI"] = 2] = "eGameUI";
    emPageUIName[emPageUIName["eFriendUI"] = 3] = "eFriendUI";
})(emPageUIName || (emPageUIName = {}));
var MainUI = (function (_super) {
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
        console.log('this.pageUIName', emPageUIName.eGameUI, this.gameUI, this.pageUIName);
        // if (!MThrid.NetworkManager.getInstance().IsInLogin()) {
        //   this.onMoneyLinkClick(null)
        //   return
        // }
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
__reflect(MainUI.prototype, "MainUI");
//# sourceMappingURL=mainui.js.map