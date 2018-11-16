class showParticles extends egret.DisplayObjectContainer {
	//单例模式,可以让按钮控制这个粒子系统
	private static _instance:showParticles;
	public static Instance() {
		if(this._instance == null) {
			this._instance = new showParticles();
		}
		return this._instance;
	}

	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddStage,this);
	}
	
	private onAddStage() {
	
		 //按钮事件:
		var btn :startEnd = new startEnd();
		this.addChild(btn)
		
	}


}