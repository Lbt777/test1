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
var GameSellPopUI = (function (_super) {
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
__reflect(GameSellPopUI.prototype, "GameSellPopUI");
