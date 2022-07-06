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
var GameGetTokenUI = (function (_super) {
    __extends(GameGetTokenUI, _super);
    function GameGetTokenUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/gamegettokenui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameGetTokenUI.prototype.onAddToStage = function (event) {
        this.initProp();
    };
    GameGetTokenUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameGetTokenUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameGetTokenUI.prototype.initProp = function () {
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
        this.btn_get.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetClick, this);
        console.log(this.Data);
        this.refreshUI();
    };
    GameGetTokenUI.prototype.refreshUI = function () {
        this.label_availableQuantity.text = "" + this.Data.availableQuantity;
        this.label_coolingQuantity.text = "" + this.Data.coolingQuantity;
        this.label_withdrawingQuantity.text = "" + this.Data.withdrawingQuantity;
        if (this.Data.withdrawingQuantity > 0) {
        }
        else {
        }
        var sourceNameBtnSell;
        if (this.Data.availableQuantity > 0) {
            //	sourceNameBtnSell = "atlas_game2_18"
            this.btn_get.visible = true;
        }
        else {
            this.btn_get.visible = false;
            //sourceNameBtnSell = "atlas_game2_6"
        }
        //let imgBtn_normal : eui.Image = <eui.Image>this.btn_get.getChildAt(0);
        //	imgBtn_normal.source = RES.getRes(sourceNameBtnSell)
    };
    GameGetTokenUI.prototype.ongetFirstZombieClick = function (event) {
    };
    GameGetTokenUI.prototype.onGetClick = function (event) {
        var _this = this;
        if (this.Data.withdrawingQuantity > 0) {
            return;
        }
        var paramsObj = { "quantity": this.Data.availableQuantity };
        MThrid.NetworkManager.getInstance().getUserWithDraw(paramsObj).then(function (value) {
            console.log(value);
            _this.btn_get.visible = false;
        });
    };
    GameGetTokenUI.prototype.onCloseClick = function (event) {
        this.visible = false;
    };
    return GameGetTokenUI;
}(eui.Component));
__reflect(GameGetTokenUI.prototype, "GameGetTokenUI");
//# sourceMappingURL=gamegettokenui.js.map