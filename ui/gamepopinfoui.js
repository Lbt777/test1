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
var GamePopInfoUI = (function (_super) {
    __extends(GamePopInfoUI, _super);
    function GamePopInfoUI() {
        var _this = _super.call(this) || this;
        _this.updateTime = 5 * 60;
        _this.skinName = "resource/ui/gamepopinfoui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GamePopInfoUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GamePopInfoUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GamePopInfoUI.prototype.onAddToStage = function (event) {
        var _this = this;
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
        this.timer = new egret.Timer(0, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, function () {
            if (_this.timeUpdateFunc) {
                _this.timeUpdateFunc();
            }
        }, this);
    };
    GamePopInfoUI.prototype.setUpdateTime = function (time) {
        this.updateTime = time;
    };
    GamePopInfoUI.prototype.startTimer = function () {
        this.timer.start();
    };
    GamePopInfoUI.prototype.stopTimer = function () {
        this.timer.stop();
    };
    GamePopInfoUI.prototype.onCloseClick = function (event) {
        this.visible = false;
        this.stopTimer();
    };
    GamePopInfoUI.prototype.setTimeInfo = function (time) {
        if (this.label_info != null) {
            this.label_info.text = "等待中" + this.getFormateTime(time);
        }
    };
    GamePopInfoUI.prototype.setBoardInfo = function (str) {
        this.label_info.text = str;
    };
    GamePopInfoUI.prototype.getFormateTime = function (totalTime) {
        var str = "";
        var h = Math.floor(totalTime / 3600);
        if (h < 10) {
            str = "0" + h;
        }
        else {
            str = "" + h;
        }
        var m = Math.floor(totalTime / 60);
        if (m < 10) {
            str = str + ":0" + m;
        }
        else {
            str = str + ":" + m;
        }
        var s = Math.floor(totalTime % 60);
        if (s < 10) {
            str = str + ":0" + s;
        }
        else {
            str = str + ":" + s;
        }
        return str;
    };
    return GamePopInfoUI;
}(eui.Component));
__reflect(GamePopInfoUI.prototype, "GamePopInfoUI");
