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
var showParticles = (function (_super) {
    __extends(showParticles, _super);
    function showParticles() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddStage, _this);
        return _this;
    }
    showParticles.Instance = function () {
        if (this._instance == null) {
            this._instance = new showParticles();
        }
        return this._instance;
    };
    showParticles.prototype.onAddStage = function () {
        //按钮事件:
        var btn = new startEnd();
        this.addChild(btn);
    };
    return showParticles;
}(egret.DisplayObjectContainer));
__reflect(showParticles.prototype, "showParticles");
