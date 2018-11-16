class SceneManager {
	private _stage:egret.DisplayObjectContainer
	public mainScene:MainScene
	private playerScene:PlayerScene
	private heroScene:HeroScene
	private goodsScene:GoodsScene
	private aboutScene:AboutScene

	public constructor() {
		this.mainScene = new MainScene()
		this.playerScene = new PlayerScene()
		this.heroScene = new HeroScene()
		this.goodsScene = new GoodsScene()
		this.aboutScene = new AboutScene()
	}

	static sceneManager:SceneManager
	static get instance(){
		if(!this.sceneManager){
			this.sceneManager = new SceneManager();
		}
		return this.sceneManager
	}

	public setStage(s:egret.DisplayObjectContainer){
		this._stage = s
	}

	static toMainScene(){
		let stage:egret.DisplayObjectContainer = this.instance._stage
		let mainScene = SceneManager.instance.mainScene
		if(!mainScene.parent){
			stage.addChild(mainScene)
		}
		SceneManager.instance.removeOther(SceneManager.instance.mainScene)
	}

	static toPlayerScene(){
		SceneManager.instance.removeOther(SceneManager.instance.mainScene)
		this.instance.mainScene.addChild(this.instance.playerScene)
	}
	static toHeroScene(){
		SceneManager.instance.removeOther(SceneManager.instance.mainScene)
		this.instance.mainScene.addChild(this.instance.heroScene)
	}
	static toGoodsScene(){
		SceneManager.instance.removeOther(SceneManager.instance.mainScene)
		this.instance.mainScene.addChild(this.instance.goodsScene)
	}
	static toAboutScene(){
		SceneManager.instance.removeOther(SceneManager.instance.mainScene)
		this.instance.mainScene.addChild(this.instance.aboutScene)
	}

	static showInfo(arr:string[]) {
        let text:string = '你选择了: '
        if (arr.length === 0) {
            text = '厉害了什么都不选'
        } else {
            text += arr.toString()
        }
        // 新建一个消息背景图
        let img:egret.Bitmap = new egret.Bitmap()
        img.texture = RES.getRes('toast-bg_png')
        SceneManager.instance.mainScene.addChild(img)
        img.x = SceneManager.instance.mainScene.width / 2 - img.width / 2
        img.y = 500
        img.height = 40

        // 新建一个label用来显示
        let label:egret.TextField = new egret.TextField(); 
        label.text = text
        label.size = 20
        SceneManager.instance.mainScene.addChild(label)
        label.x = SceneManager.instance.mainScene.width / 2 - label.width / 2
        label.y = 510
        label.height = 40

        // 创建一个定时器,1000毫秒后删除label
        let timer:egret.Timer = new egret.Timer(1000, 1)
        timer.start()
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, (e)=>{
            SceneManager.instance.mainScene.removeChild(label)
            SceneManager.instance.mainScene.removeChild(img)
        }, this)
    }

	 private removeOther(scene) {
        let arr = [this.playerScene, this.heroScene, this.goodsScene, this.aboutScene]
        arr.forEach((item)=> {
            if(scene === item) {
                return 
            }
            if(item.parent) {
                this.mainScene.removeChild(item)
            }
        })
    }

}