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
var GameAttackLifeUI = (function (_super) {
    __extends(GameAttackLifeUI, _super);
    function GameAttackLifeUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/gameattacklifeUui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameAttackLifeUI.prototype.onAddToStage = function (event) {
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeNameClick, this);
        this.btn_train_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrainClick, this);
        this.btn_train_10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrain10Click, this);
        this.btn_train_100.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrain100Click, this);
        this.refreshUI();
    };
    GameAttackLifeUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameAttackLifeUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameAttackLifeUI.prototype.refreshUI = function () {
        var data1 = JSON.parse(this.configData.data[0].configValue);
        this.label_train1_prop.text = "攻击+" + data1.attribute.attack + "     血量+" + data1.attribute.blood;
        //	this.label_train1_count.text = "已培育次数："+data1.attribute.attack
        var data2 = JSON.parse(this.configData.data[1].configValue);
        this.label_train10_prop.text = "攻击+" + data2.attribute.attack + "     血量+" + data2.attribute.blood;
        //	this.label_train10_count.text = "已培育次数："+data2.attribute.attack
        var data3 = JSON.parse(this.configData.data[2].configValue);
        this.label_train100_prop.text = "攻击+" + data3.attribute.attack + "     血量+" + data3.attribute.blood;
        //	this.label_train100_count.text = "已培育次数："+data3.attribute.attack
    };
    GameAttackLifeUI.prototype.onChangeNameClick = function (event) {
        this.visible = false;
    };
    GameAttackLifeUI.prototype.onTrainClick = function (event) {
        this.attributeCultivation(0, 1, 1, null);
    };
    GameAttackLifeUI.prototype.onTrain10Click = function (event) {
        this.attributeCultivation(0, 10, 1, null);
    };
    GameAttackLifeUI.prototype.onTrain100Click = function (event) {
        this.attributeCultivation(0, 100, 1, null);
    };
    //type 培育类型
    //count 培育次数
    //cost 培育花费的钱
    GameAttackLifeUI.prototype.attributeCultivation = function (type, count, cost, actionFunc) {
        var nftNum = Number(this.zombieData.nftNum);
        var ret = MThrid.Web3Manager.getInstance().requestAllowance();
        ret.then(function (value) {
            var amount1 = MThrid.BigUtil.parseNumber(value, 18);
            var amount = MThrid.BigUtil.pow(1000000, 18);
            if (amount1 > 1) {
                var ret_1 = MThrid.Web3Manager.getInstance().attributeCultivation(nftNum, 0, count);
                ret_1.then(function (value) {
                    console.log(value);
                    if (actionFunc) {
                        actionFunc(value);
                    }
                });
            }
            else {
                var ret_2 = MThrid.Web3Manager.getInstance().requestApprove(amount);
                ret_2.then(function (value) {
                    console.log(value);
                });
            }
        });
    };
    return GameAttackLifeUI;
}(eui.Component));
__reflect(GameAttackLifeUI.prototype, "GameAttackLifeUI");
