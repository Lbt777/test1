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
var HomePageUI = (function (_super) {
    __extends(HomePageUI, _super);
    function HomePageUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/homepageui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    HomePageUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    HomePageUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    HomePageUI.prototype.onAddToStage = function (event) {
    };
    HomePageUI.prototype.onHomePageClick = function (event) {
    };
    return HomePageUI;
}(eui.Component));
__reflect(HomePageUI.prototype, "HomePageUI");
