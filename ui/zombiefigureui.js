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
var ZombieFigureUI = (function (_super) {
    __extends(ZombieFigureUI, _super);
    function ZombieFigureUI(data) {
        var _this = _super.call(this) || this;
        _this.headIndex = 1;
        _this.eyeIndex = 1;
        _this.shirtIndex = 1;
        _this.isStartMoving = false;
        _this.skinName = "resource/ui/zombiefigureui.exml";
        _this.mData = data;
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage2, _this);
        return _this;
    }
    ZombieFigureUI.prototype.setImageColor = function (image, r, g, b) {
        var colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        colorMatrix[0] = r / 255;
        colorMatrix[6] = g / 255;
        colorMatrix[12] = b / 255;
        var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        image.filters = [colorFilter];
    };
    ZombieFigureUI.prototype.onAddToStage2 = function (event) {
        if (this.group_zombie) {
            this.initProp();
        }
    };
    ZombieFigureUI.prototype.onAddToStage = function (event) {
        this.initProp();
    };
    ZombieFigureUI.prototype.initProp = function () {
        this.group_hp.visible = false;
        this.btn_head.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangHeadClick, this);
        this.btn_eye.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangEyeClick, this);
        this.btn_shirt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangShirtClick, this);
        this.btn_head_color.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangHeadColorClick, this);
        this.btn_eye_color.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangEyeColorClick, this);
        this.btn_shirt_color.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangShirtColorClick, this);
        if (this.mData.scaleX) {
            this.group_zombie.scaleX = this.mData.scaleX;
        }
        if (this.mData.scaleY) {
            this.group_zombie.scaleY = this.mData.scaleY;
        }
        if (this.mData.posX) {
            this.group_zombie.x = this.mData.posX;
        }
        if (this.mData.posY) {
            this.group_zombie.y = this.mData.posY;
        }
        if (this.mData.skewY) {
            this.group_zombie.anchorOffsetX = 0.5;
            this.group_zombie.anchorOffsetY = 0.5;
            this.group_zombie.skewY = this.mData.skewY;
            this.group_hp.skewY = 180;
            this.group_hp.x = 1200;
        }
        this.group_hp.scaleX = 7;
        this.group_hp.scaleY = 7;
        this.updateTimer = new egret.Timer(0.02, 0);
        this.updateTimer.addEventListener(egret.TimerEvent.TIMER, this.timeFunc, this);
        this.updateTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timeFuncFinish, this);
        console.log("this.bitmapLabel_buff_num  " + this.bitmapLabel_buff_num.x);
    };
    ZombieFigureUI.prototype.setZombieRotation = function (rotation) {
        this.group_zombie.anchorOffsetX = 0.5;
        this.group_zombie.anchorOffsetY = 0.5;
        this.group_zombie.rotation = rotation;
    };
    ZombieFigureUI.prototype.setZombiePosX = function (x) {
        this.group_zombie.x = x;
    };
    ZombieFigureUI.prototype.setZombiePosY = function (y) {
        this.group_zombie.y = y;
    };
    ZombieFigureUI.prototype.timeFunc = function () {
        this.group_hp.y = this.group_hp.y - 27.6;
        if (this.group_hp.y < -700) {
            this.group_hp.visible = false;
            this.updateTimer.stop();
        }
    };
    ZombieFigureUI.prototype.timeFuncFinish = function () {
    };
    ZombieFigureUI.prototype.showHurtBuff = function (num) {
        this.group_hp.visible = true;
        this.group_hp.y = 26;
        this.bitmapLabel_buff_num.text = "" + num;
        this.updateTimer.start();
    };
    ZombieFigureUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ZombieFigureUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    ZombieFigureUI.prototype.onChangHeadClick = function (event) {
        var _this = this;
        if (this.headIndex > 8) {
            this.headIndex = 0;
        }
        this.headIndex = this.headIndex + 1;
        var name = "resource/assets/ui/figure/figure_head-" + this.headIndex + ".png";
        RES.getResByUrl(name, function () {
            if (RES.getRes(name)) {
                _this.image_head.source = RES.getRes(name);
            }
        });
    };
    ZombieFigureUI.prototype.setHeadByIndex = function (index) {
        var _this = this;
        var name = "resource/assets/ui/figure/figure_head-" + index + ".png";
        RES.getResByUrl(name, function () {
            if (RES.getRes(name)) {
                _this.image_head.source = RES.getRes(name);
            }
        });
    };
    ZombieFigureUI.prototype.onChangHeadColorClick = function (event) {
        var r = Math.random() * 255;
        var g = Math.random() * 255;
        var b = Math.random() * 255;
        this.setImageColor(this.image_head, r, g, b);
        this.setImageColor(this.image_left_hand_1, r, g, b);
        this.setImageColor(this.image_left_hand_2, r, g, b);
        this.setImageColor(this.image_left_hand_3, r, g, b);
        this.setImageColor(this.image_right_hand_1, r, g, b);
        this.setImageColor(this.image_right_hand_2, r, g, b);
        this.setImageColor(this.image_right_hand_3, r, g, b);
    };
    ZombieFigureUI.prototype.onChangEyeClick = function (event) {
        var _this = this;
        if (this.eyeIndex > 11) {
            this.eyeIndex = 0;
        }
        this.eyeIndex = this.eyeIndex + 1;
        var name = "resource/assets/ui/figure/figure_eyes-" + this.eyeIndex + ".png";
        RES.getResByUrl(name, function () {
            if (RES.getRes(name)) {
                _this.image_eye.source = RES.getRes(name);
            }
        });
    };
    ZombieFigureUI.prototype.setEyeByIndex = function (index) {
        var _this = this;
        var name = "resource/assets/ui/figure/figure_eyes-" + index + ".png";
        RES.getResByUrl(name, function () {
            if (RES.getRes(name)) {
                _this.image_eye.source = RES.getRes(name);
            }
        });
    };
    ZombieFigureUI.prototype.onChangEyeColorClick = function (event) {
        var r = Math.random() * 255;
        var g = Math.random() * 255;
        var b = Math.random() * 255;
        this.setImageColor(this.image_eye, r, g, b);
    };
    ZombieFigureUI.prototype.onChangShirtClick = function (event) {
        var _this = this;
        if (this.shirtIndex > 5) {
            this.shirtIndex = 0;
        }
        this.shirtIndex = this.shirtIndex + 1;
        var name = "resource/assets/ui/figure/figure_shirt-" + this.shirtIndex + ".png";
        RES.getResByUrl(name, function () {
            if (RES.getRes(name)) {
                _this.image_shirt.source = RES.getRes(name);
            }
        });
    };
    ZombieFigureUI.prototype.setShirtByIndex = function (index) {
        var _this = this;
        var name = "resource/assets/ui/figure/figure_shirt-" + index + ".png";
        RES.getResByUrl(name, function () {
            if (RES.getRes(name)) {
                _this.image_shirt.source = RES.getRes(name);
            }
        });
    };
    ZombieFigureUI.prototype.onChangShirtColorClick = function (event) {
        var r = Math.random() * 255;
        var g = Math.random() * 255;
        var b = Math.random() * 255;
        this.setImageColor(this.image_shirt, r, g, b);
    };
    return ZombieFigureUI;
}(eui.Component));
__reflect(ZombieFigureUI.prototype, "ZombieFigureUI");
