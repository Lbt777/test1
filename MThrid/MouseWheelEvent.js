var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MThrid;
(function (MThrid) {
    var MouseWheelEvent = (function () {
        function MouseWheelEvent() {
        }
        MouseWheelEvent.coordinateY = 0;
        MouseWheelEvent.eventDispatcher = new egret.EventDispatcher();
        return MouseWheelEvent;
    }());
    MThrid.MouseWheelEvent = MouseWheelEvent;
    __reflect(MouseWheelEvent.prototype, "MThrid.MouseWheelEvent");
})(MThrid || (MThrid = {}));
