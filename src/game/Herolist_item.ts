class Herolist_item extends eui.ItemRenderer{
	public ce_select:eui.CheckBox
	public constructor() {
		super()
		this.skinName = 'resource/skins/skin_items/heroListItem.exml'
		
		this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.onComplete,this)
	}

	private onComplete(){
		this.ce_select.addEventListener(eui.UIEvent.CHANGE,(e)=>{
			this.data.isSelected = this.ce_select.selected
			console.log(this.data)
		},this)
	}
	protected dataChanged(){
		this.ce_select.selected = this.data.isSelected
	}
}