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
var GameBattleShowUI = (function (_super) {
    __extends(GameBattleShowUI, _super);
    function GameBattleShowUI() {
        var _this = _super.call(this) || this;
        _this.updateTimer = 2;
        _this.cdUpdateTime = 0;
        _this.roundIndex = 0;
        _this.attackMoving = false;
        _this.defMoving = false;
        _this.attackTo = false;
        _this.defTo = false;
        _this.moveStep = 11;
        _this.skinName = "resource/ui/gamebattleshowui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameBattleShowUI.prototype.onAddToStage = function (event) {
        this.initProp();
    };
    GameBattleShowUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameBattleShowUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameBattleShowUI.prototype.initProp = function () {
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
        this.refreshUI();
    };
    GameBattleShowUI.prototype.refreshUI = function () {
        this.start();
    };
    GameBattleShowUI.prototype.start = function () {
        if (this.attackZombieFigureUI == null) {
            var zombieData = { "scaleX": 0.1, "scaleY": 0.1, "posX": 199, "posY": 220 };
            this.attackZombieFigureUI = new ZombieFigureUI(zombieData);
            this.goup_root.addChildAt(this.attackZombieFigureUI, 2);
            var txtr = RES.getRes("effect_1_json");
            var data = RES.getRes("effect_1_png");
            var moveFatory = new egret.MovieClipDataFactory(txtr, data);
            this.effect_node_atk = new egret.MovieClip(moveFatory.generateMovieClipData("effect_1"));
            this.goup_root.addChild(this.effect_node_atk);
            this.effect_node_atk.scaleX = 2.5;
            this.effect_node_atk.scaleY = 2.5;
            this.effect_node_atk.x = 50;
            this.effect_node_atk.y = 250;
            this.effect_node_atk.visible = false;
        }
        else {
            this.attackZombieFigureUI.setZombieRotation(0);
            this.attackZombieFigureUI.setZombiePosX(199);
            this.attackZombieFigureUI.setZombiePosY(220);
        }
        var gene = JSON.parse(this.battleData.Attacker.gene);
        this.attackZombieFigureUI.setHeadByIndex(gene.head_style);
        this.attackZombieFigureUI.setEyeByIndex(gene.eye_style);
        this.attackZombieFigureUI.setShirtByIndex(gene.shirt_style);
        if (this.defZombieFigureUI == null) {
            var zombieData2 = { "scaleX": 0.1, "scaleY": 0.1, "posX": 999, "posY": 220, "skewY": 180 };
            this.defZombieFigureUI = new ZombieFigureUI(zombieData2);
            this.goup_root.addChildAt(this.defZombieFigureUI, 2);
            var txtr = RES.getRes("effect_1_json");
            var data = RES.getRes("effect_1_png");
            var moveFatory = new egret.MovieClipDataFactory(txtr, data);
            this.effect_node_def = new egret.MovieClip(moveFatory.generateMovieClipData("effect_1"));
            this.goup_root.addChild(this.effect_node_def);
            this.effect_node_def.scaleX = 2.5;
            this.effect_node_def.scaleY = 2.5;
            this.effect_node_def.x = 748;
            this.effect_node_def.y = 250;
            this.effect_node_def.visible = false;
        }
        else {
            this.defZombieFigureUI.setZombieRotation(0);
            this.defZombieFigureUI.setZombiePosX(999);
            this.defZombieFigureUI.setZombiePosY(220);
        }
        gene = JSON.parse(this.battleData.Defender.gene);
        this.defZombieFigureUI.setHeadByIndex(gene.head_style);
        this.defZombieFigureUI.setEyeByIndex(gene.eye_style);
        this.defZombieFigureUI.setShirtByIndex(gene.shirt_style);
        if (this.timer == null) {
            this.timer = new egret.Timer(0.02, 0);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeFunc, this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timeFuncFinish, this);
        }
        this.timer.start();
        this.attackMoving = false;
        this.defMoving = false;
        this.updateTimer = 0.1;
        this.roundIndex = 0;
        this.cdUpdateTime = 0;
        this.setBattleResult();
        this.showEffect();
    };
    GameBattleShowUI.prototype.showEffect = function () {
    };
    GameBattleShowUI.prototype.timeFunc = function () {
        var temp = this.battleData.Logs[this.roundIndex];
        if (this.attackMoving && this.cdUpdateTime == 0) {
            if (!this.attackTo && this.attackZombieFigureUI.x < 600) {
                this.attackZombieFigureUI.x = this.attackZombieFigureUI.x + this.moveStep * 3;
                if (this.attackZombieFigureUI.x >= 600) {
                    this.attackZombieFigureUI.x = 600;
                    this.attackTo = true;
                    this.cdUpdateTime = 6;
                    this.effect_node_def.visible = true;
                    this.effect_node_def.gotoAndPlay(0, 1);
                    this.defZombieFigureUI.showHurtBuff(temp.Blood);
                    this.showBattleResult();
                    this.roundIndex++;
                }
            }
            else {
                this.attackZombieFigureUI.x = this.attackZombieFigureUI.x - this.moveStep * 3;
                if (this.attackTo && this.attackZombieFigureUI.x <= 0) {
                    this.attackZombieFigureUI.x = 0;
                    this.attackTo = false;
                    this.attackMoving = false;
                    this.defMoving = true;
                    this.cdUpdateTime = 5;
                    this.endRound();
                }
            }
        }
        if (this.defMoving && this.cdUpdateTime == 0) {
            if (!this.attackTo && this.defZombieFigureUI.x > -500) {
                this.defZombieFigureUI.x = this.defZombieFigureUI.x - this.moveStep * 3;
                if (this.defZombieFigureUI.x <= -500) {
                    this.defZombieFigureUI.x = -500;
                    this.attackTo = true;
                    this.cdUpdateTime = 6;
                    this.effect_node_atk.visible = true;
                    this.effect_node_atk.gotoAndPlay(0, 1);
                    this.attackZombieFigureUI.showHurtBuff(temp.Blood);
                    this.showBattleResult();
                    this.roundIndex++;
                }
            }
            else {
                this.defZombieFigureUI.x = this.defZombieFigureUI.x + this.moveStep * 3;
                if (this.attackTo && this.defZombieFigureUI.x > 100) {
                    this.defZombieFigureUI.x = 100;
                    this.attackTo = false;
                    this.attackMoving = true;
                    this.defMoving = false;
                    this.cdUpdateTime = 5;
                    this.endRound();
                }
            }
        }
        if (this.cdUpdateTime > 0) {
            this.cdUpdateTime = this.cdUpdateTime - 0.15;
            if (this.cdUpdateTime < 0) {
                this.cdUpdateTime = 0;
            }
        }
        if (this.updateTimer > 0) {
            this.updateTimer = this.updateTimer - 0.02;
            if (this.updateTimer < 0) {
                this.attackMoving = true;
                //this.defMoving = true
            }
        }
    };
    GameBattleShowUI.prototype.endRound = function () {
        if (this.roundIndex >= this.battleData.Logs.length) {
            this.timer.stop();
            if (this.battleData.Logs[this.battleData.Logs.length - 1].Attacker == this.battleData.Attacker.nftNum) {
                this.defZombieFigureUI.setZombieRotation(290);
                this.defZombieFigureUI.setZombiePosX(699);
                this.defZombieFigureUI.setZombiePosY(310);
            }
            else {
                this.attackZombieFigureUI.setZombieRotation(80);
                this.attackZombieFigureUI.setZombiePosX(499);
                this.attackZombieFigureUI.setZombiePosY(320);
            }
        }
    };
    GameBattleShowUI.prototype.setBattleResult = function () {
        var nodeChildNum = 0;
        var nodes = [this.scrollerview_item1, this.scrollerview_item2, this.scrollerview_item3, this.scrollerview_item4,
            this.scrollerview_item5, this.scrollerview_item6, this.scrollerview_item7, this.scrollerview_item8];
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            if (nodeChildNum < this.battleData.Logs.length) {
                var label_item_2 = node.getChildByName("label_item_2");
                var log = this.battleData.Logs[nodeChildNum];
                label_item_2.text = log.Attacker + "攻击" + log.Defender + "," + log.Defender + "受到了" + log.Blood + "点伤害";
                node.visible = false;
            }
            else {
                node.visible = false;
            }
            nodeChildNum++;
        }
        var type1 = 1;
        this.label_type_1.text = MThrid.Const.ZombieNames[type1];
        this.label_name_1.text = "#" + this.battleData.Attacker.nftNum;
        this.label_type_2.text = MThrid.Const.ZombieNames[type1];
        this.label_name_2.text = "#" + this.battleData.Defender.nftNum;
    };
    GameBattleShowUI.prototype.showBattleResult = function () {
        var nodeChildNum = 0;
        var nodes = [this.scrollerview_item1, this.scrollerview_item2, this.scrollerview_item3, this.scrollerview_item4,
            this.scrollerview_item5, this.scrollerview_item6, this.scrollerview_item7, this.scrollerview_item8];
        for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
            var node = nodes_2[_i];
            if (nodeChildNum <= this.roundIndex) {
                node.visible = true;
            }
            else {
                node.visible = false;
            }
            nodeChildNum++;
        }
        var sc = this.scrollerview;
        if (this.roundIndex <= 1) {
            sc.viewport.scrollV = 0;
        }
        else {
            sc.viewport.scrollV = (this.roundIndex - 1) * 105;
        }
    };
    GameBattleShowUI.prototype.timeFuncFinish = function () {
    };
    GameBattleShowUI.prototype.ongetFirstZombieClick = function (event) {
    };
    GameBattleShowUI.prototype.onCloseClick = function (event) {
        this.visible = false;
        this.timer.stop();
    };
    GameBattleShowUI.prototype.onTestClick = function (event) {
        this.attackZombieFigureUI.showHurtBuff(20);
    };
    return GameBattleShowUI;
}(eui.Component));
__reflect(GameBattleShowUI.prototype, "GameBattleShowUI");
//# sourceMappingURL=gamebattleshowui.js.map