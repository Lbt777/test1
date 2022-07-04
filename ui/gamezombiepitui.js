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
var GameZombiePitUI = (function (_super) {
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
__reflect(GameZombiePitUI.prototype, "GameZombiePitUI");
