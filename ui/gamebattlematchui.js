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
var GameBattleMatchUI = (function (_super) {
    __extends(GameBattleMatchUI, _super);
    function GameBattleMatchUI() {
        var _this = _super.call(this) || this;
        _this.updateTimer = 5;
        _this.bgPngs = MThrid.Const.ZombieBgPngs;
        _this.skinName = "resource/ui/gamebattlematchui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameBattleMatchUI.prototype.onAddToStage = function (event) {
        this.initProp();
    };
    GameBattleMatchUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameBattleMatchUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameBattleMatchUI.prototype.initProp = function () {
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
        var zombieData = { "scaleX": 0.11, "scaleY": 0.11, "posX": 169, "posY": 50 };
        this.attackZombieFigureUI = new ZombieFigureUI(zombieData);
        this.group1.addChildAt(this.attackZombieFigureUI, 2);
        var zombieData2 = { "scaleX": 0.11, "scaleY": 0.11, "posX": 369, "posY": 50, "skewY": 180 };
        this.defZombieFigureUI = new ZombieFigureUI(zombieData2);
        this.group2.addChildAt(this.defZombieFigureUI, 2);
        this.label_update_time.text = "" + this.updateTimer;
        this.timer = new egret.Timer(0.02, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeFunc, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timeFuncFinish, this);
        this.startMatch();
    };
    GameBattleMatchUI.prototype.updateUI = function (group, data) {
        var label_zombie_name = group.getChildByName("label_zombie_name");
        var label_zombie_type = group.getChildByName("label_zombie_type");
        var label_atk_value = group.getChildByName("label_atk_value");
        var label_hp_value = group.getChildByName("label_hp_value");
        var label_speed_value = group.getChildByName("label_speed_value");
        var label_lacky_value = group.getChildByName("label_lacky_value");
        var label_grow_value = group.getChildByName("label_grow_value");
        var image_bg = group.getChildByName("image_bg");
        label_zombie_name.text = "#" + data.nftNum;
        label_atk_value.text = "" + data.attack;
        label_hp_value.text = "" + data.blood;
        label_speed_value.text = "" + data.speed;
        label_lacky_value.text = "" + data.speed;
        label_grow_value.text = "" + data.power;
        data.type = 1;
        image_bg.source = RES.getRes(this.bgPngs[data.type]);
        label_zombie_type.text = MThrid.Const.ZombieNames[data.type];
    };
    GameBattleMatchUI.prototype.startMatch = function () {
        console.log(this.battleData);
        this.updateTimer = 5;
        this.label_update_time.text = "" + this.updateTimer;
        this.timer.start();
        this.updateUI(this.group1, this.battleData.Attacker);
        this.updateUI(this.group2, this.battleData.Defender);
        var gene = JSON.parse(this.battleData.Attacker.gene);
        this.attackZombieFigureUI.setHeadByIndex(gene.head_style);
        this.attackZombieFigureUI.setEyeByIndex(gene.eye_style);
        this.attackZombieFigureUI.setShirtByIndex(gene.shirt_style);
        gene = JSON.parse(this.battleData.Defender.gene);
        this.defZombieFigureUI.setHeadByIndex(gene.head_style);
        this.defZombieFigureUI.setEyeByIndex(gene.eye_style);
        this.defZombieFigureUI.setShirtByIndex(gene.shirt_style);
    };
    GameBattleMatchUI.prototype.timeFunc = function () {
        if (this.updateTimer > 0) {
            this.updateTimer = this.updateTimer - 0.02;
            this.label_update_time.text = "" + Math.ceil(this.updateTimer);
            if (this.updateTimer < 0) {
                this.timer.stop();
                MainUI.getInstance().gameUI.gameMyZombieUI.openGameBattleShowUI(this.battleData);
                this.visible = false;
            }
        }
    };
    GameBattleMatchUI.prototype.timeFuncFinish = function () {
    };
    GameBattleMatchUI.prototype.onCloseClick = function (event) {
        this.visible = false;
    };
    return GameBattleMatchUI;
}(eui.Component));
__reflect(GameBattleMatchUI.prototype, "GameBattleMatchUI");
