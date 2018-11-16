var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
        this.mainScene = new MainScene();
        this.playerScene = new PlayerScene();
        this.heroScene = new HeroScene();
        this.goodsScene = new GoodsScene();
        this.aboutScene = new AboutScene();
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            if (!this.sceneManager) {
                this.sceneManager = new SceneManager();
            }
            return this.sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    SceneManager.prototype.setStage = function (s) {
        this._stage = s;
    };
    SceneManager.toMainScene = function () {
        var stage = this.instance._stage;
        var mainScene = SceneManager.instance.mainScene;
        if (!mainScene.parent) {
            stage.addChild(mainScene);
        }
        SceneManager.instance.removeOther(SceneManager.instance.mainScene);
    };
    SceneManager.toPlayerScene = function () {
        SceneManager.instance.removeOther(SceneManager.instance.mainScene);
        this.instance.mainScene.addChild(this.instance.playerScene);
    };
    SceneManager.toHeroScene = function () {
        SceneManager.instance.removeOther(SceneManager.instance.mainScene);
        this.instance.mainScene.addChild(this.instance.heroScene);
    };
    SceneManager.toGoodsScene = function () {
        SceneManager.instance.removeOther(SceneManager.instance.mainScene);
        this.instance.mainScene.addChild(this.instance.goodsScene);
    };
    SceneManager.toAboutScene = function () {
        SceneManager.instance.removeOther(SceneManager.instance.mainScene);
        this.instance.mainScene.addChild(this.instance.aboutScene);
    };
    SceneManager.showInfo = function (arr) {
        var text = '你选择了: ';
        if (arr.length === 0) {
            text = '厉害了什么都不选';
        }
        else {
            text += arr.toString();
        }
        // 新建一个消息背景图
        var img = new egret.Bitmap();
        img.texture = RES.getRes('toast-bg_png');
        SceneManager.instance.mainScene.addChild(img);
        img.x = SceneManager.instance.mainScene.width / 2 - img.width / 2;
        img.y = 500;
        img.height = 40;
        // 新建一个label用来显示
        var label = new egret.TextField();
        label.text = text;
        label.size = 20;
        SceneManager.instance.mainScene.addChild(label);
        label.x = SceneManager.instance.mainScene.width / 2 - label.width / 2;
        label.y = 510;
        label.height = 40;
        // 创建一个定时器,1000毫秒后删除label
        var timer = new egret.Timer(1000, 1);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function (e) {
            SceneManager.instance.mainScene.removeChild(label);
            SceneManager.instance.mainScene.removeChild(img);
        }, this);
    };
    SceneManager.prototype.removeOther = function (scene) {
        var _this = this;
        var arr = [this.playerScene, this.heroScene, this.goodsScene, this.aboutScene];
        arr.forEach(function (item) {
            if (scene === item) {
                return;
            }
            if (item.parent) {
                _this.mainScene.removeChild(item);
            }
        });
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
