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
//页签对象
var ZombiePageChildNode = (function () {
    function ZombiePageChildNode() {
    }
    return ZombiePageChildNode;
}());
__reflect(ZombiePageChildNode.prototype, "ZombiePageChildNode");
var PageTurnUI = (function (_super) {
    __extends(PageTurnUI, _super);
    function PageTurnUI() {
        var _this = _super.call(this) || this;
        _this.nodeChilds = [];
        _this.curPageIndex = 1; //当前选中的页
        _this.toolPageIndex = 8; //总的页数
        _this.toMaxIndex = 0;
        _this.skinName = "resource/ui/pageturnui.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStageComplete, _this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    PageTurnUI.prototype.onAddToStageComplete = function (event) {
        this.initPageButton();
    };
    PageTurnUI.prototype.onAddToStage = function (event) {
        if (this.group_page1) {
            this.initPageButton();
        }
    };
    PageTurnUI.prototype.setClickPageCall = function (clickPageCall) {
        this.clickPageCall = clickPageCall;
    };
    PageTurnUI.prototype.reSetData = function () {
        this.curPageIndex = 1;
        this.toMaxIndex = 0;
    };
    PageTurnUI.prototype.setToolPageIndex = function (page) {
        this.toolPageIndex = page;
        this.initPageNode();
    };
    PageTurnUI.prototype.callPageFunc = function (page) {
        if (this.clickPageCall) {
            this.clickPageCall(page);
        }
    };
    PageTurnUI.prototype.initPageButton = function () {
        var _this = this;
        var nodeChildNum = 0;
        var nodes = [this.group_page1, this.group_page2, this.group_page3, this.group_page4,
            this.group_page5, this.group_page6, this.group_page7];
        var _loop_1 = function (node) {
            var label = node.getChildByName("label");
            var image = node.getChildByName("image");
            var image_sele = node.getChildByName("image_sele");
            label.touchEnabled = false;
            var childNode = new ZombiePageChildNode();
            childNode.label = label;
            childNode.image = image;
            childNode.image_sele = image_sele;
            childNode.node = node;
            childNode.callFunc = function () { };
            image.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                if (childNode.callFunc) {
                    childNode.callFunc();
                }
            }, this_1);
            this_1.nodeChilds[nodeChildNum] = childNode;
            nodeChildNum = nodeChildNum + 1;
        };
        var this_1 = this;
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            _loop_1(node);
        }
        this.image_leftpage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.toolPageIndex < 8) {
                if (_this.curPageIndex > 1) {
                    _this.curPageIndex = _this.curPageIndex - 1;
                    _this.changePage7();
                    _this.callPageFunc(_this.curPageIndex);
                }
            }
            else {
                console.log(_this.curPageIndex);
                if ((_this.toolPageIndex - _this.curPageIndex) <= 2) {
                    if (_this.toMaxIndex > 0) {
                        _this.toMaxIndex = _this.toMaxIndex - 1;
                        _this.changePage();
                        _this.callPageFunc(_this.curPageIndex);
                        return;
                    }
                }
                if (_this.curPageIndex > 1) {
                    _this.curPageIndex = _this.curPageIndex - 1;
                    _this.changePage();
                    _this.callPageFunc(_this.curPageIndex);
                }
            }
        }, this);
        this.image_rightpage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.toolPageIndex < 8) {
                if (_this.curPageIndex < _this.toolPageIndex) {
                    console.log(_this.curPageIndex);
                    console.log(_this.toolPageIndex);
                    _this.curPageIndex = _this.curPageIndex + 1;
                    _this.changePage7();
                    _this.callPageFunc(_this.curPageIndex);
                }
            }
            else {
                if ((_this.toolPageIndex - _this.curPageIndex) <= 2) {
                    if (_this.toMaxIndex < 2) {
                        _this.toMaxIndex = _this.toMaxIndex + 1;
                        _this.changePage();
                        _this.callPageFunc(_this.curPageIndex);
                    }
                    return;
                }
                _this.toMaxIndex = 0;
                if (_this.curPageIndex < _this.toolPageIndex) {
                    _this.curPageIndex = _this.curPageIndex + 1;
                    console.log("this.curPageIndex  " + _this.curPageIndex);
                    _this.changePage();
                    _this.callPageFunc(_this.curPageIndex);
                }
            }
        }, this);
    };
    PageTurnUI.prototype.initPageNode = function () {
        if (this.toolPageIndex < 8) {
            this.changePage7();
        }
        else {
            this.changePage();
        }
    };
    PageTurnUI.prototype.initPageNode7 = function () {
        var _this = this;
        this.changePage7();
        this.image_leftpage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.curPageIndex > 1) {
                _this.curPageIndex = _this.curPageIndex - 1;
                _this.changePage7();
                _this.callPageFunc(_this.curPageIndex);
            }
        }, this);
        this.image_rightpage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log(_this.curPageIndex);
            console.log(_this.toolPageIndex);
            if (_this.curPageIndex >= _this.toolPageIndex) {
                return;
            }
            if (_this.curPageIndex < _this.toolPageIndex) {
                console.log(_this.curPageIndex);
                console.log(_this.toolPageIndex);
                _this.curPageIndex = _this.curPageIndex + 1;
                _this.changePage7();
                _this.callPageFunc(_this.curPageIndex);
            }
        }, this);
    };
    PageTurnUI.prototype.changePage7 = function () {
        var _this = this;
        var num = 1;
        var _loop_2 = function (nodeChild) {
            var _num = num;
            var node = nodeChild.node;
            var label = nodeChild.label;
            var image = nodeChild.image;
            var image_sele = nodeChild.image_sele;
            if (_num <= this_2.toolPageIndex) {
                label.text = "" + _num;
                nodeChild.callFunc = function () {
                    _this.curPageIndex = _num;
                    _this.changePage7();
                    _this.callPageFunc(_this.curPageIndex);
                };
                image_sele.visible = (_num == this_2.curPageIndex);
                node.visible = true;
            }
            else {
                node.visible = false;
            }
            num = num + 1;
        };
        var this_2 = this;
        for (var _i = 0, _a = this.nodeChilds; _i < _a.length; _i++) {
            var nodeChild = _a[_i];
            _loop_2(nodeChild);
        }
    };
    PageTurnUI.prototype.changePage = function () {
        var _this = this;
        var num = 1;
        var showNum;
        var toToolIndex = this.toolPageIndex - 2;
        if ((this.toolPageIndex - this.curPageIndex) <= 2) {
            showNum = this.curPageIndex - 3;
        }
        else if (this.curPageIndex <= 3) {
            showNum = 1;
        }
        else {
            showNum = this.curPageIndex - 3;
        }
        var _loop_3 = function (nodeChild) {
            var _num = num;
            var node = nodeChild.node;
            var label = nodeChild.label;
            var image = nodeChild.image;
            var image_sele = nodeChild.image_sele;
            image.removeEventListener(egret.TouchEvent.TOUCH_TAP, null, this_3);
            if (((this_3.toolPageIndex - this_3.curPageIndex) <= 2)) {
                var curNum_1 = showNum;
                if (num == 1) {
                    label.text = "1";
                }
                else if (num == 6) {
                    label.text = "" + this_3.toolPageIndex;
                }
                else if (num == 2) {
                    label.text = "...";
                }
                else {
                    label.text = "" + curNum_1;
                }
                if (num <= 6) {
                    node.visible = true;
                }
                else {
                    node.visible = false;
                }
                var cNum = this_3.toMaxIndex + this_3.curPageIndex;
                nodeChild.callFunc = function () {
                    console.log("select curNum " + curNum_1);
                    if (_num == 1) {
                        _this.curPageIndex = 1;
                    }
                    else if (_num == 6) {
                        _this.curPageIndex = toToolIndex;
                        _this.toMaxIndex = 2;
                    }
                    else if (_num == 2) {
                        _this.curPageIndex = curNum_1;
                    }
                    else {
                        _this.curPageIndex = curNum_1;
                        if (_this.curPageIndex >= toToolIndex) {
                            _this.curPageIndex = toToolIndex;
                            _this.toMaxIndex = curNum_1 - toToolIndex;
                        }
                    }
                    console.log("select index " + curNum_1);
                    _this.changePage();
                    _this.callPageFunc(_this.curPageIndex);
                };
                image_sele.visible = (cNum == curNum_1);
            }
            else if (this_3.curPageIndex <= 3) {
                console.log("this.curPageIndex  == 1  " + this_3.curPageIndex);
                var curNum_2 = num;
                if (num == 6) {
                    label.text = "" + this_3.toolPageIndex;
                }
                else if (num == 5) {
                    label.text = "...";
                }
                else {
                    label.text = "" + showNum;
                }
                if (num <= 6) {
                    node.visible = true;
                }
                else {
                    node.visible = false;
                }
                nodeChild.callFunc = function () {
                    _this.curPageIndex = curNum_2;
                    console.log("select index " + _this.curPageIndex);
                    _this.changePage();
                    _this.callPageFunc(_this.curPageIndex);
                };
                image_sele.visible = (this_3.curPageIndex == num);
            }
            else {
                console.log("this.curPageIndex  == 2  " + this_3.curPageIndex);
                var cshowNum_1 = showNum;
                if (num == 1) {
                    label.text = "1";
                }
                else if (num == 7) {
                    label.text = "" + this_3.toolPageIndex;
                }
                else if (num == 2 || num == 6) {
                    label.text = "...";
                }
                else {
                    label.text = "" + showNum;
                }
                node.visible = true;
                nodeChild.callFunc = function () {
                    _this.curPageIndex = cshowNum_1;
                    if (_this.curPageIndex >= toToolIndex) {
                        _this.curPageIndex = toToolIndex;
                        _this.toMaxIndex = cshowNum_1 - toToolIndex;
                    }
                    console.log("select index " + _this.curPageIndex);
                    _this.changePage();
                    _this.callPageFunc(_this.curPageIndex);
                };
                image_sele.visible = (this_3.curPageIndex == showNum);
            }
            num = num + 1;
            showNum = showNum + 1;
        };
        var this_3 = this;
        for (var _i = 0, _a = this.nodeChilds; _i < _a.length; _i++) {
            var nodeChild = _a[_i];
            _loop_3(nodeChild);
        }
    };
    PageTurnUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PageTurnUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return PageTurnUI;
}(eui.Component));
__reflect(PageTurnUI.prototype, "PageTurnUI");
//# sourceMappingURL=pageturnui.js.map