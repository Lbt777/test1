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
var GameGetZombieUI = (function (_super) {
    __extends(GameGetZombieUI, _super);
    //	private timer:egret.Timer
    //	private updateTime:number = 5 * 60
    function GameGetZombieUI() {
        var _this = _super.call(this) || this;
        _this.isFree = false;
        _this.skinName = "resource/ui/gamegetzombieui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    GameGetZombieUI.prototype.onAddToStage = function (event) {
        this.initPropGetZombie();
    };
    GameGetZombieUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameGetZombieUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //获取僵尸
    GameGetZombieUI.prototype.initPropGetZombie = function () {
        var _this = this;
        this.editabletext_get_name.addEventListener(egret.Event.CHANGE, this.change, this);
        this.btn_get_zombie.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ongetFirstZombieClick, this);
        MThrid.Web3Manager.getInstance().isFreeZombie().then(function (value) {
            _this.isFree = value;
        });
    };
    // 立即购买事件
    GameGetZombieUI.prototype.ongetFirstZombieClick = function (event) {
        var _this = this;
        var name = this.editabletext_get_name.text;
        if (name.length <= 0) {
            this.label_info.textColor = 0xDE2C2C;
            return;
        }
        console.log('僵尸名称', name);
        var updateTime = 300;
        var isJump = false;
        var transactionHash = null;
        var freeGetBoxZombie = MThrid.Web3Manager.getInstance().getBoxZombie(name, this.isFree, function (state) {
            if (state == "transactionHash") {
                var self_1 = _this;
                MainUI.getInstance().showGamePopInfoUI(true);
                MainUI.getInstance().gamePopInfoUI.setTimeInfo(updateTime);
                MainUI.getInstance().gamePopInfoUI.timeUpdateFunc = function () {
                    updateTime = updateTime - 0.016;
                    if (!isJump) {
                        MainUI.getInstance().gamePopInfoUI.setTimeInfo(updateTime);
                    }
                    if (updateTime <= 0) {
                        MainUI.getInstance().showGamePopInfoUI(false);
                        MainUI.getInstance().gamePopInfoUI.stopTimer();
                    }
                    console.log("this.updateTime " + updateTime);
                    if (transactionHash != null) {
                        var paramsObj = { "contractType": "CreateNft", "txId": transactionHash };
                        var requestCheckHash = MThrid.NetworkManager.getInstance().requestCheckHash(paramsObj);
                        requestCheckHash.then(function (retvalue) {
                            console.log("retvalue");
                            console.log(retvalue);
                            if (retvalue.success && !isJump) {
                                isJump = true;
                                updateTime = 1;
                                MainUI.getInstance().gamePopInfoUI.setBoardInfo("购买成功");
                                MainUI.getInstance().gameUI.onMyZombieClick(null);
                            }
                            if (retvalue.success == false) {
                                MainUI.getInstance().gamePopInfoUI.setBoardInfo("购买失败");
                                MainUI.getInstance().gamePopInfoUI.stopTimer();
                            }
                        });
                    }
                };
                MainUI.getInstance().gamePopInfoUI.startTimer();
                freeGetBoxZombie.then(function (value) {
                    transactionHash = value.transactionHash;
                });
            }
        });
    };
    GameGetZombieUI.prototype.showBuySucc = function () {
        if (this.gameBuyZombieUI == null) {
            //		this.gameBuyZombieUI = new GameBuyZombieUI()
            //	MainUI.getInstance().addChild(this.gameBuyZombieUI)
        }
        //	this.gameBuyZombieUI.visible = true	
        MThrid.NetworkManager.getInstance().getNetServceTime();
    };
    GameGetZombieUI.prototype.change = function (event) {
        console.log("change change ");
    };
    return GameGetZombieUI;
}(eui.Component));
__reflect(GameGetZombieUI.prototype, "GameGetZombieUI");
//# sourceMappingURL=gamegetzombieui.js.map