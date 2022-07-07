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
var GameChangeNameUI = (function (_super) {
    __extends(GameChangeNameUI, _super);
    function GameChangeNameUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/gamechangenameui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameChangeNameUI.prototype.onAddToStage = function (event) {
        this.label_info.visible = false;
        this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeNameClick, this);
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
    };
    GameChangeNameUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameChangeNameUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameChangeNameUI.prototype.onChangeNameClick = function (event) {
        var name = this.editabletext_get_name.text;
        if (name.length <= 0) {
            this.label_info.visible = true;
            return;
        }
        var nftNum = Number(this.data.nftNum);
        console.log(this.data);
        console.log(nftNum);
        MThrid.Web3Manager.getInstance().changeZombieName(nftNum, name).then(function (result) {
            var paramsObj = { "contractType": "ChangeNameNft", "txId": result.transactionHash };
            var requestCheckHash = MThrid.NetworkManager.getInstance().requestCheckHash(paramsObj);
            requestCheckHash.then(function (retvalue) {
                console.log("retvalue");
                console.log(retvalue);
            });
        });
        console.log(name);
        this.visible = false;
    };
    GameChangeNameUI.prototype.onCloseClick = function (event) {
        this.visible = false;
    };
    return GameChangeNameUI;
}(eui.Component));
__reflect(GameChangeNameUI.prototype, "GameChangeNameUI");
//# sourceMappingURL=gamechangenameui.js.map