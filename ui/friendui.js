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
var FriendUI = (function (_super) {
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
__reflect(FriendUI.prototype, "FriendUI");
//# sourceMappingURL=friendui.js.map