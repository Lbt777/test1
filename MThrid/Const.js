var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MThrid;
(function (MThrid) {
    var Const = (function () {
        function Const() {
        }
        Const.ZombieBgPngs = ["atlas_game_44", "atlas_game_42", "atlas_game_43", "atlas_game_39", "atlas_game_40", "atlas_game_41"];
        Const.ZombieNames = ["普通僵尸", "吓人僵尸", "僵尸士兵", "僵尸将军", "僵尸王", "传说的僵尸"];
        Const.ZombieBattleNum = [300, 696, 720, 756, 756, 756];
        return Const;
    }());
    MThrid.Const = Const;
    __reflect(Const.prototype, "MThrid.Const");
})(MThrid || (MThrid = {}));
