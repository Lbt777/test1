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
var GameBuyZombieUI = (function (_super) {
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
__reflect(GameBuyZombieUI.prototype, "GameBuyZombieUI");
//# sourceMappingURL=gamebuyzombieui.js.map