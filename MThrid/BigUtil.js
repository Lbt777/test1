var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//Big.PE = 50
var MThrid;
(function (MThrid) {
    var BigUtil = (function () {
        function BigUtil() {
            //  Big.PE = 50
        }
        BigUtil.chufa = function (value, n) {
            return new Big(value).div(new Big(Math.pow(10, n)));
        };
        BigUtil.parseNumber = function (number, power) {
            return BigUtil.roundFun(new Big(String(number)).div(new Big(10).pow(power)).toNumber(), 4);
        };
        BigUtil.roundFun = function (value, n) {
            return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
        };
        BigUtil.pow = function (number, power) {
            return new Big(number).times(new Big(10).pow(power)).toString();
        };
        return BigUtil;
    }());
    MThrid.BigUtil = BigUtil;
    __reflect(BigUtil.prototype, "MThrid.BigUtil");
})(MThrid || (MThrid = {}));
