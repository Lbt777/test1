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
var GameUI = (function (_super) {
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
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=gameui.js.map