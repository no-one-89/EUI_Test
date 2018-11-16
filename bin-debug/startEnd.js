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
/**自定义按钮 */
var startEnd = (function (_super) {
    __extends(startEnd, _super);
    function startEnd() {
        return _super.call(this) || this;
    }
    startEnd.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    startEnd.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("heh");
        }, this);
    };
    return startEnd;
}(eui.Component));
__reflect(startEnd.prototype, "startEnd", ["eui.UIComponent", "egret.DisplayObject"]);
