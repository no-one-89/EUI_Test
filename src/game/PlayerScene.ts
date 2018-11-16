class PlayerScene extends eui.Component implements eui.UIComponent {

	public btn_return: eui.Button;
	public btn_zhuangbei: eui.Button;
	public btn_qianghua: eui.Button;
	public scr_zhuangbei: eui.Scroller;
	public list_zhuangbei: eui.List;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		let dataArr: any[] = [
			{
				image: "resource/art/profile/skillIcon01.png",
				name: "旋龙幻杀"
			},
			{
				image: "resource/art/profile/skillIcon02.png",
				name: "魔魂天咒"
			},
			{
				image: "resource/art/profile/skillIcon03.png",
				name: "天魔舞"
			},
			{
				image: "resource/art/profile/skillIcon04.png",
				name: "痴情咒"
			},
			{
				image: "resource/art/profile/skillIcon05.png",
				name: "无间寂"
			},
			{
				image: "resource/art/profile/skillIcon06.png",
				name: "霸天戮杀"
			},
			{
				image: "resource/art/profile/skillIcon07.png",
				name: "灭魂狂飙"
			}
		]

		let EUIArr:eui.ArrayCollection = new eui.ArrayCollection(dataArr)
		console.log(this.list_zhuangbei)
		this.list_zhuangbei.dataProvider = EUIArr
		this.scr_zhuangbei.horizontalScrollBar.autoVisibility = false
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP,this.returnMain,this)
	}

	private returnMain(){
		SceneManager.toMainScene()
		SceneManager.instance.mainScene.toggleBtn(0)
	}

}