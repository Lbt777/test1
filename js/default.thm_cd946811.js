window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/buttonskin.exml","eui.CheckBox":"resource/eui_skins/checkboxskin.exml","eui.HScrollBar":"resource/eui_skins/hscrollbarskin.exml","eui.HSlider":"resource/eui_skins/hsliderskin.exml","eui.Panel":"resource/eui_skins/panelskin.exml","eui.TextInput":"resource/eui_skins/textinputskin.exml","eui.ProgressBar":"resource/eui_skins/progressbarskin.exml","eui.RadioButton":"resource/eui_skins/radiobuttonskin.exml","eui.Scroller":"resource/eui_skins/scrollerskin.exml","eui.ToggleSwitch":"resource/eui_skins/toggleswitchskin.exml","eui.VScrollBar":"resource/eui_skins/vscrollbarskin.exml","eui.VSlider":"resource/eui_skins/vsliderskin.exml","eui.ItemRenderer":"resource/eui_skins/itemrendererskin.exml","MainUI":"resource/ui/mainui.exml","test":"resource/ui/test.exml","test2":"resource/eui_skins/test2.exml"};generateEUI.paths['resource/eui_skins/buttonskin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/checkboxskin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hscrollbarskin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hsliderskin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/itemrendererskin.exml'] = window.skins.itemrendererskin = (function (_super) {
	__extends(itemrendererskin, _super);
	function itemrendererskin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = itemrendererskin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return itemrendererskin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panelskin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/progressbarskin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/progressbarskincustom1.exml'] = window.skins.ProgressBarSkinCustom1 = (function (_super) {
	__extends(ProgressBarSkinCustom1, _super);
	function ProgressBarSkinCustom1() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkinCustom1.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "atlas_game2_16";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "atlas_game2_15";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkinCustom1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/radiobuttonskin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/scrollerskin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/textInputskin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/toggleswitchskin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/vscrollbarskin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/vsliderskin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/ui/friendui.exml'] = window.MainUISkin = (function (_super) {
	__extends(MainUISkin, _super);
	var MainUISkin$Skin1 = 	(function (_super) {
		__extends(MainUISkin$Skin1, _super);
		function MainUISkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_friend_7")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainUISkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_friend_6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainUISkin$Skin1;
	})(eui.Skin);

	var MainUISkin$Skin2 = 	(function (_super) {
		__extends(MainUISkin$Skin2, _super);
		function MainUISkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainUISkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_friend_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainUISkin$Skin2;
	})(eui.Skin);

	var MainUISkin$Skin3 = 	(function (_super) {
		__extends(MainUISkin$Skin3, _super);
		function MainUISkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainUISkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_friend_5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainUISkin$Skin3;
	})(eui.Skin);

	var MainUISkin$Skin4 = 	(function (_super) {
		__extends(MainUISkin$Skin4, _super);
		function MainUISkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainUISkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_friend_7";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainUISkin$Skin4;
	})(eui.Skin);

	function MainUISkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1755;
		this.width = 1920;
		this.elementsContent = [this._Group4_i()];
	}
	var _proto = MainUISkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 1755;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1755;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_friend_1";
		t.width = 1920;
		t.x = 8.14;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 199;
		t.visible = true;
		t.width = 1439;
		t.x = 240;
		t.y = 199;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.fillMode = "clip";
		t.height = 1020;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_friend_9";
		t.top = 0;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "推荐计划";
		t.x = 43;
		t.y = 55;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "邀请您的朋友加入游戏，一起赚取丰厚的奖励！一旦您邀请的朋友成功创造了丧尸，您将获得 5% 的金额返利 。";
		t.x = 44;
		t.y = 113;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 252;
		t.visible = true;
		t.width = 1439;
		t.x = 240;
		t.y = 432;
		t.elementsContent = [this._Image3_i(),this._Label3_i(),this._Label4_i(),this._Button1_i(),this._Button2_i(),this._Button3_i(),this._Button4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 252;
		t.source = "atlas_friend_8";
		t.width = 1439;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "我的推荐链接";
		t.x = 43;
		t.y = 64;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "分享";
		t.x = 1117;
		t.y = 68;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.width = 40;
		t.x = 1183;
		t.y = 56;
		t.skinName = MainUISkin$Skin1;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.x = 1235;
		t.y = 55;
		t.skinName = MainUISkin$Skin2;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.x = 1288;
		t.y = 55;
		t.skinName = MainUISkin$Skin3;
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.x = 1341;
		t.y = 57;
		t.skinName = MainUISkin$Skin4;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 222;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 1439;
		t.x = 240;
		t.y = 717;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 222;
		t.source = "atlas_friend_2";
		t.width = 1439;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return MainUISkin;
})(eui.Skin);generateEUI.paths['resource/ui/gameattacklifeui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	var GameUI$Skin5 = 	(function (_super) {
		__extends(GameUI$Skin5, _super);
		function GameUI$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_33";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin5;
	})(eui.Skin);

	var GameUI$Skin6 = 	(function (_super) {
		__extends(GameUI$Skin6, _super);
		function GameUI$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_35";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin6;
	})(eui.Skin);

	var GameUI$Skin7 = 	(function (_super) {
		__extends(GameUI$Skin7, _super);
		function GameUI$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_36";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin7;
	})(eui.Skin);

	var GameUI$Skin8 = 	(function (_super) {
		__extends(GameUI$Skin8, _super);
		function GameUI$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_37";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin8;
	})(eui.Skin);

	function GameUI() {
		_super.call(this);
		this.skinParts = ["btn_close","btn_train_1","label_train1_count","label_train1_prop","btn_train_10","label_train10_count","label_train10_prop","btn_train_100","label_train100_count","label_train100_prop"];
		
		this.height = 3000;
		this.width = 3000;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.fillColor = 0x000000;
		t.height = 3000;
		t.strokeColor = 0x0D8CC180;
		t.visible = true;
		t.width = 3000;
		t.x = 0;
		t.y = 10;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 471;
		t.visible = true;
		t.width = 1210;
		t.x = 379.507;
		t.y = 235.655;
		t.elementsContent = [this._Image1_i(),this.btn_close_i(),this.btn_train_1_i(),this.label_train1_count_i(),this.label_train1_prop_i(),this.btn_train_10_i(),this.label_train10_count_i(),this.label_train10_prop_i(),this.btn_train_100_i(),this.label_train100_count_i(),this.label_train100_prop_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 471;
		t.source = "atlas_game_38";
		t.width = 1210;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.width = 53;
		t.x = 1176;
		t.y = 93;
		t.skinName = GameUI$Skin5;
		return t;
	};
	_proto.btn_train_1_i = function () {
		var t = new eui.Button();
		this.btn_train_1 = t;
		t.x = 187;
		t.y = 317;
		t.skinName = GameUI$Skin6;
		return t;
	};
	_proto.label_train1_count_i = function () {
		var t = new eui.Label();
		this.label_train1_count = t;
		t.size = 18;
		t.text = "已培育次数：20";
		t.textAlign = "center";
		t.textColor = 0xFFD76C;
		t.verticalAlign = "middle";
		t.x = 221;
		t.y = 264;
		return t;
	};
	_proto.label_train1_prop_i = function () {
		var t = new eui.Label();
		this.label_train1_prop = t;
		t.size = 18;
		t.text = "攻击+5     血量+10";
		t.textAlign = "center";
		t.textColor = 0xFFD76C;
		t.verticalAlign = "middle";
		t.x = 205;
		t.y = 228;
		return t;
	};
	_proto.btn_train_10_i = function () {
		var t = new eui.Button();
		this.btn_train_10 = t;
		t.x = 528;
		t.y = 317;
		t.skinName = GameUI$Skin7;
		return t;
	};
	_proto.label_train10_count_i = function () {
		var t = new eui.Label();
		this.label_train10_count = t;
		t.size = 18;
		t.text = "已培育次数：20";
		t.textAlign = "center";
		t.textColor = 0x45A6E3;
		t.verticalAlign = "middle";
		t.x = 565;
		t.y = 264;
		return t;
	};
	_proto.label_train10_prop_i = function () {
		var t = new eui.Label();
		this.label_train10_prop = t;
		t.size = 18;
		t.text = "攻击+5      血量+10";
		t.textAlign = "center";
		t.textColor = 0x45A6E3;
		t.verticalAlign = "middle";
		t.x = 536;
		t.y = 228;
		return t;
	};
	_proto.btn_train_100_i = function () {
		var t = new eui.Button();
		this.btn_train_100 = t;
		t.x = 862;
		t.y = 317;
		t.skinName = GameUI$Skin8;
		return t;
	};
	_proto.label_train100_count_i = function () {
		var t = new eui.Label();
		this.label_train100_count = t;
		t.size = 18;
		t.text = "已培育次数：20";
		t.textColor = 0x79E0D6;
		t.x = 899;
		t.y = 264;
		return t;
	};
	_proto.label_train100_prop_i = function () {
		var t = new eui.Label();
		this.label_train100_prop = t;
		t.size = 18;
		t.text = "攻击+5     血量+10";
		t.textColor = 0x79E0D6;
		t.x = 877;
		t.y = 228;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/gamebattlematchui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	var GameUI$Skin9 = 	(function (_super) {
		__extends(GameUI$Skin9, _super);
		function GameUI$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_33";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin9;
	})(eui.Skin);

	function GameUI() {
		_super.call(this);
		this.skinParts = ["group1","group2","image_z_rotation","btn_close","label_update_time"];
		
		this.height = 3000;
		this.width = 3000;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.fillColor = 0x000000;
		t.height = 3000;
		t.visible = true;
		t.width = 3000;
		t.x = 0;
		t.y = 2.996;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 735;
		t.visible = true;
		t.width = 1210;
		t.x = 280;
		t.y = 150;
		t.elementsContent = [this._Image1_i(),this.group1_i(),this.group2_i(),this.image_z_rotation_i(),this.btn_close_i(),this.label_update_time_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 735;
		t.source = "atlas_game2_3";
		t.width = 1210;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group1_i = function () {
		var t = new eui.Group();
		this.group1 = t;
		t.height = 505.5;
		t.width = 429.4;
		t.x = 64;
		t.y = 184;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 365.9;
		t.name = "image_bg";
		t.source = "atlas_game_44";
		t.width = 212;
		t.x = 157;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 36;
		t.name = "image_bg";
		t.source = "atlas_game2_10";
		t.width = 285;
		t.x = 133;
		t.y = 365;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 36;
		t.name = "image_bg";
		t.source = "atlas_game2_10";
		t.width = 285;
		t.x = 133;
		t.y = 411;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 36;
		t.name = "image_bg";
		t.source = "atlas_game2_10";
		t.width = 285;
		t.x = 133;
		t.y = 457;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 55;
		t.name = "image_bg";
		t.source = "atlas_game2_11";
		t.width = 157;
		t.x = -20;
		t.y = 360;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_zombie_type";
		t.size = 16;
		t.text = "普通僵尸";
		t.x = 43;
		t.y = 382;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_zombie_name";
		t.size = 16;
		t.text = "普通僵尸";
		t.x = 0;
		t.y = 422;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "攻击";
		t.x = 170;
		t.y = 375;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_atk_value";
		t.size = 30;
		t.text = "60";
		t.x = 214;
		t.y = 370;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_speed_value";
		t.size = 30;
		t.text = "60";
		t.x = 214;
		t.y = 415;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_grow_value";
		t.size = 30;
		t.text = "60";
		t.x = 214;
		t.y = 465;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_lacky_value";
		t.size = 30;
		t.text = "60";
		t.x = 334;
		t.y = 415;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_hp_value";
		t.size = 30;
		t.text = "60";
		t.x = 334;
		t.y = 370;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "速度";
		t.x = 170;
		t.y = 420;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "生命";
		t.x = 290;
		t.y = 375;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "幸运";
		t.x = 290;
		t.y = 420;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "成长";
		t.x = 170;
		t.y = 467;
		return t;
	};
	_proto.group2_i = function () {
		var t = new eui.Group();
		this.group2 = t;
		t.height = 505.5;
		t.width = 429.4;
		t.x = 674;
		t.y = 184;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Label16_i(),this._Label17_i(),this._Label18_i(),this._Label19_i(),this._Label20_i(),this._Label21_i(),this._Label22_i(),this._Label23_i(),this._Label24_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 365.9;
		t.name = "image_bg";
		t.source = "atlas_game_44";
		t.width = 212;
		t.x = 157;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 36;
		t.name = "image_bg";
		t.skewY = 180;
		t.source = "atlas_game2_10";
		t.width = 285;
		t.x = 363;
		t.y = 365;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 36;
		t.name = "image_bg";
		t.skewY = 180;
		t.source = "atlas_game2_10";
		t.width = 285;
		t.x = 363;
		t.y = 411;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 36;
		t.name = "image_bg";
		t.skewY = 180;
		t.source = "atlas_game2_10";
		t.width = 285;
		t.x = 363;
		t.y = 457;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 55;
		t.name = "image_bg";
		t.skewY = 180;
		t.source = "atlas_game2_11";
		t.width = 157;
		t.x = 520;
		t.y = 360;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_zombie_type";
		t.size = 16;
		t.text = "普通僵尸";
		t.x = 400;
		t.y = 382;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_zombie_name";
		t.size = 16;
		t.text = "普通僵尸";
		t.x = 435;
		t.y = 422;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "攻击";
		t.x = 130;
		t.y = 375;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_atk_value";
		t.size = 30;
		t.text = "60";
		t.x = 174;
		t.y = 370;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_speed_value";
		t.size = 30;
		t.text = "60";
		t.x = 174;
		t.y = 415;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_grow_value";
		t.size = 30;
		t.text = "60";
		t.x = 174;
		t.y = 465;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_lacky_value";
		t.size = 30;
		t.text = "60";
		t.x = 294;
		t.y = 415;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_hp_value";
		t.size = 30;
		t.text = "60";
		t.x = 294;
		t.y = 370;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "速度";
		t.x = 130;
		t.y = 420;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "生命";
		t.x = 250;
		t.y = 375;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "幸运";
		t.x = 250;
		t.y = 420;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "成长";
		t.x = 130;
		t.y = 467;
		return t;
	};
	_proto.image_z_rotation_i = function () {
		var t = new eui.Image();
		this.image_z_rotation = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 195;
		t.rotation = 0;
		t.source = "atlas_game2_12";
		t.width = 188;
		t.x = 535;
		t.y = 265;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.x = 1176;
		t.y = 93;
		t.skinName = GameUI$Skin9;
		return t;
	};
	_proto.label_update_time_i = function () {
		var t = new eui.Label();
		this.label_update_time = t;
		t.size = 126;
		t.text = "5";
		t.x = 598;
		t.y = 317;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/gamebattleshowui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	var GameUI$Skin10 = 	(function (_super) {
		__extends(GameUI$Skin10, _super);
		function GameUI$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_33";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin10;
	})(eui.Skin);

	function GameUI() {
		_super.call(this);
		this.skinParts = ["btn_close","label_type_1","label_name_1","label_type_2","label_name_2","progressbar_hp_1","progressbar_hp_2","scrollerview_item1","scrollerview_item2","scrollerview_item3","scrollerview_item4","scrollerview_item5","scrollerview_item6","scrollerview_item7","scrollerview_item8","scrollerview","goup_root"];
		
		this.height = 3000;
		this.width = 3000;
		this.elementsContent = [this._Rect1_i(),this.goup_root_i()];
	}
	var _proto = GameUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.fillColor = 0x000000;
		t.height = 3000;
		t.visible = true;
		t.width = 3000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goup_root_i = function () {
		var t = new eui.Group();
		this.goup_root = t;
		t.height = 801;
		t.visible = true;
		t.width = 1338;
		t.x = 280;
		t.y = 150;
		t.elementsContent = [this._Image1_i(),this.btn_close_i(),this._Image2_i(),this.label_type_1_i(),this.label_name_1_i(),this._Image3_i(),this.label_type_2_i(),this.label_name_2_i(),this.progressbar_hp_1_i(),this.progressbar_hp_2_i(),this.scrollerview_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 801;
		t.source = "atlas_game2_13";
		t.width = 1338;
		t.x = 8.041;
		t.y = -2.68;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.x = 1305;
		t.y = 0;
		t.skinName = GameUI$Skin10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 55;
		t.source = "atlas_game2_11";
		t.width = 157;
		t.x = 59;
		t.y = 57;
		return t;
	};
	_proto.label_type_1_i = function () {
		var t = new eui.Label();
		this.label_type_1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "普通僵尸";
		t.x = 123;
		t.y = 78;
		return t;
	};
	_proto.label_name_1_i = function () {
		var t = new eui.Label();
		this.label_name_1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "普通僵尸";
		t.x = 66;
		t.y = 118;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 55;
		t.source = "atlas_game2_11";
		t.width = 157;
		t.x = 1134;
		t.y = 57;
		return t;
	};
	_proto.label_type_2_i = function () {
		var t = new eui.Label();
		this.label_type_2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "普通僵尸";
		t.x = 1198;
		t.y = 78;
		return t;
	};
	_proto.label_name_2_i = function () {
		var t = new eui.Label();
		this.label_name_2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "普通僵尸";
		t.x = 1142;
		t.y = 118;
		return t;
	};
	_proto.progressbar_hp_1_i = function () {
		var t = new eui.ProgressBar();
		this.progressbar_hp_1 = t;
		t.height = 18;
		t.skinName = "skins.ProgressBarSkin";
		t.value = 50;
		t.width = 374;
		t.x = 227;
		t.y = 112;
		return t;
	};
	_proto.progressbar_hp_2_i = function () {
		var t = new eui.ProgressBar();
		this.progressbar_hp_2 = t;
		t.height = 18;
		t.skewY = 180;
		t.skinName = "skins.ProgressBarSkinCustom1";
		t.value = 90;
		t.width = 374;
		t.x = 1107;
		t.y = 112;
		return t;
	};
	_proto.scrollerview_i = function () {
		var t = new eui.Scroller();
		this.scrollerview = t;
		t.height = 217.639;
		t.width = 1219.554;
		t.x = 74.98;
		t.y = 526.679;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 315;
		t.elementsContent = [this.scrollerview_item1_i(),this.scrollerview_item2_i(),this.scrollerview_item3_i(),this.scrollerview_item4_i(),this.scrollerview_item5_i(),this.scrollerview_item6_i(),this.scrollerview_item7_i(),this.scrollerview_item8_i()];
		return t;
	};
	_proto.scrollerview_item1_i = function () {
		var t = new eui.Group();
		this.scrollerview_item1 = t;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1219;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x2D314D;
		t.height = 44;
		t.width = 86;
		t.x = 27;
		t.y = 15;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_1";
		t.size = 18;
		t.text = "回合一";
		t.x = 43;
		t.y = 28;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_2";
		t.size = 14;
		t.text = "[攻击僵尸昵称][攻击文字]，[受击僵尸昵称][受击文字]";
		t.x = 43;
		t.y = 71;
		return t;
	};
	_proto.scrollerview_item2_i = function () {
		var t = new eui.Group();
		this.scrollerview_item2 = t;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1219;
		t.x = 0;
		t.y = 105;
		t.elementsContent = [this._Rect3_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x2D314D;
		t.height = 44;
		t.width = 86;
		t.x = 27;
		t.y = 15;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_1";
		t.size = 18;
		t.text = "回合二";
		t.x = 43;
		t.y = 28;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_2";
		t.size = 14;
		t.text = "[攻击僵尸昵称][攻击文字]，[受击僵尸昵称][受击文字]";
		t.x = 43;
		t.y = 71;
		return t;
	};
	_proto.scrollerview_item3_i = function () {
		var t = new eui.Group();
		this.scrollerview_item3 = t;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1219;
		t.x = 0;
		t.y = 210;
		t.elementsContent = [this._Rect4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x2D314D;
		t.height = 44;
		t.width = 86;
		t.x = 27;
		t.y = 15;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_1";
		t.size = 18;
		t.text = "回合三";
		t.x = 43;
		t.y = 28;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_2";
		t.size = 14;
		t.text = "[攻击僵尸昵称][攻击文字]，[受击僵尸昵称][受击文字]";
		t.x = 43;
		t.y = 71;
		return t;
	};
	_proto.scrollerview_item4_i = function () {
		var t = new eui.Group();
		this.scrollerview_item4 = t;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1219;
		t.x = 0;
		t.y = 315;
		t.elementsContent = [this._Rect5_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x2D314D;
		t.height = 44;
		t.width = 86;
		t.x = 27;
		t.y = 15;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_1";
		t.size = 18;
		t.text = "回合四";
		t.x = 43;
		t.y = 28;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_2";
		t.size = 14;
		t.text = "[攻击僵尸昵称][攻击文字]，[受击僵尸昵称][受击文字]";
		t.x = 43;
		t.y = 71;
		return t;
	};
	_proto.scrollerview_item5_i = function () {
		var t = new eui.Group();
		this.scrollerview_item5 = t;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1219;
		t.x = 0;
		t.y = 420;
		t.elementsContent = [this._Rect6_i(),this._Label9_i(),this._Label10_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x2D314D;
		t.height = 44;
		t.width = 86;
		t.x = 27;
		t.y = 15;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_1";
		t.size = 18;
		t.text = "回合五";
		t.x = 43;
		t.y = 28;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_2";
		t.size = 14;
		t.text = "[攻击僵尸昵称][攻击文字]，[受击僵尸昵称][受击文字]";
		t.x = 43;
		t.y = 71;
		return t;
	};
	_proto.scrollerview_item6_i = function () {
		var t = new eui.Group();
		this.scrollerview_item6 = t;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1219;
		t.x = 0;
		t.y = 525;
		t.elementsContent = [this._Rect7_i(),this._Label11_i(),this._Label12_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x2D314D;
		t.height = 44;
		t.width = 86;
		t.x = 27;
		t.y = 15;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_1";
		t.size = 18;
		t.text = "回合六";
		t.x = 43;
		t.y = 28;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_2";
		t.size = 14;
		t.text = "[攻击僵尸昵称][攻击文字]，[受击僵尸昵称][受击文字]";
		t.x = 43;
		t.y = 71;
		return t;
	};
	_proto.scrollerview_item7_i = function () {
		var t = new eui.Group();
		this.scrollerview_item7 = t;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1219;
		t.x = 0;
		t.y = 630;
		t.elementsContent = [this._Rect8_i(),this._Label13_i(),this._Label14_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x2D314D;
		t.height = 44;
		t.width = 86;
		t.x = 27;
		t.y = 15;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_1";
		t.size = 18;
		t.text = "回合七";
		t.x = 43;
		t.y = 28;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_2";
		t.size = 14;
		t.text = "[攻击僵尸昵称][攻击文字]，[受击僵尸昵称][受击文字]";
		t.x = 43;
		t.y = 71;
		return t;
	};
	_proto.scrollerview_item8_i = function () {
		var t = new eui.Group();
		this.scrollerview_item8 = t;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1219;
		t.x = 0;
		t.y = 735;
		t.elementsContent = [this._Rect9_i(),this._Label15_i(),this._Label16_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x2D314D;
		t.height = 44;
		t.width = 86;
		t.x = 27;
		t.y = 15;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_1";
		t.size = 18;
		t.text = "回合八";
		t.x = 43;
		t.y = 28;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_item_2";
		t.size = 14;
		t.text = "[攻击僵尸昵称][攻击文字]，[受击僵尸昵称][受击文字]";
		t.x = 43;
		t.y = 71;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/gamebuyzombieui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	var GameUI$Skin11 = 	(function (_super) {
		__extends(GameUI$Skin11, _super);
		function GameUI$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game2_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin11;
	})(eui.Skin);

	function GameUI() {
		_super.call(this);
		this.skinParts = ["image_zombie_bg","label_name","label_owner_name","label_battle_num","label_atkvalue","label_lifevalue","label_speedvalue","label_lackyvalue","label_growthvalue","btn_ok"];
		
		this.height = 3000;
		this.width = 3000;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.fillColor = 0x000000;
		t.height = 3000;
		t.width = 3000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 763;
		t.visible = true;
		t.width = 1210;
		t.x = 280;
		t.y = 150;
		t.elementsContent = [this._Image1_i(),this.image_zombie_bg_i(),this.label_name_i(),this.label_owner_name_i(),this._Label1_i(),this.label_battle_num_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.label_atkvalue_i(),this._Label2_i(),this.label_lifevalue_i(),this._Label3_i(),this.label_speedvalue_i(),this._Label4_i(),this.label_lackyvalue_i(),this._Label5_i(),this.label_growthvalue_i(),this._Label6_i(),this.btn_ok_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 763;
		t.source = "atlas_game2_2";
		t.width = 1210;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_zombie_bg_i = function () {
		var t = new eui.Image();
		this.image_zombie_bg = t;
		t.height = 537;
		t.source = "atlas_game_44";
		t.width = 311;
		t.x = 84;
		t.y = 173;
		return t;
	};
	_proto.label_name_i = function () {
		var t = new eui.Label();
		this.label_name = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "喋喋不休王者";
		t.textColor = 0xF8CF58;
		t.x = 480;
		t.y = 239;
		return t;
	};
	_proto.label_owner_name_i = function () {
		var t = new eui.Label();
		this.label_owner_name = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "主人     baby12323";
		t.textColor = 0xAFDCFF;
		t.x = 479;
		t.y = 318;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "战斗次数：";
		t.textColor = 0xAFDCFF;
		t.x = 480;
		t.y = 360;
		return t;
	};
	_proto.label_battle_num_i = function () {
		var t = new eui.Label();
		this.label_battle_num = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "66/100";
		t.textColor = 0xF7CD56;
		t.width = 200;
		t.x = 603.693;
		t.y = 350;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "atlas_game_28";
		t.width = 39;
		t.x = 483;
		t.y = 440;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "atlas_game_27";
		t.width = 39;
		t.x = 633;
		t.y = 440;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "atlas_game_24";
		t.width = 39;
		t.x = 789;
		t.y = 440;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "atlas_game_25";
		t.width = 39;
		t.x = 942;
		t.y = 440;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "atlas_game_26";
		t.width = 39;
		t.x = 1094;
		t.y = 440;
		return t;
	};
	_proto.label_atkvalue_i = function () {
		var t = new eui.Label();
		this.label_atkvalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "60";
		t.textColor = 0xAFDCFF;
		t.x = 479;
		t.y = 489;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "攻击";
		t.textColor = 0xAFDCFF;
		t.visible = true;
		t.x = 479;
		t.y = 528;
		return t;
	};
	_proto.label_lifevalue_i = function () {
		var t = new eui.Label();
		this.label_lifevalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "84";
		t.textColor = 0xF68C24;
		t.x = 634;
		t.y = 489;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "生命";
		t.textColor = 0xF68C24;
		t.x = 634;
		t.y = 528;
		return t;
	};
	_proto.label_speedvalue_i = function () {
		var t = new eui.Label();
		this.label_speedvalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "35";
		t.textColor = 0xF7CD56;
		t.x = 789;
		t.y = 489;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "速度";
		t.textColor = 0xF7CD56;
		t.x = 789;
		t.y = 528;
		return t;
	};
	_proto.label_lackyvalue_i = function () {
		var t = new eui.Label();
		this.label_lackyvalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "55";
		t.textColor = 0x5DB3A9;
		t.x = 944;
		t.y = 489;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "幸运";
		t.textColor = 0x5DB3A9;
		t.x = 944;
		t.y = 528;
		return t;
	};
	_proto.label_growthvalue_i = function () {
		var t = new eui.Label();
		this.label_growthvalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "92";
		t.textColor = 0x4994C3;
		t.x = 1099;
		t.y = 489;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "成长";
		t.textColor = 0x4994C3;
		t.visible = true;
		t.x = 1099;
		t.y = 528;
		return t;
	};
	_proto.btn_ok_i = function () {
		var t = new eui.Button();
		this.btn_ok = t;
		t.x = 679;
		t.y = 621;
		t.skinName = GameUI$Skin11;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/gamechangenameui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	var GameUI$Skin12 = 	(function (_super) {
		__extends(GameUI$Skin12, _super);
		function GameUI$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_32";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin12;
	})(eui.Skin);

	var GameUI$Skin13 = 	(function (_super) {
		__extends(GameUI$Skin13, _super);
		function GameUI$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_33";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin13;
	})(eui.Skin);

	function GameUI() {
		_super.call(this);
		this.skinParts = ["btn_ok","editabletext_get_name","btn_close","label_info"];
		
		this.height = 3000;
		this.width = 3000;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.fillColor = 0x000000;
		t.height = 3000;
		t.strokeColor = 0x0D8CC180;
		t.visible = true;
		t.width = 3000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 471;
		t.visible = true;
		t.width = 1210;
		t.x = 355;
		t.y = 300;
		t.elementsContent = [this._Image1_i(),this.btn_ok_i(),this._Image2_i(),this.editabletext_get_name_i(),this.btn_close_i(),this.label_info_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 471;
		t.source = "atlas_game_31";
		t.width = 1210;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_ok_i = function () {
		var t = new eui.Button();
		this.btn_ok = t;
		t.x = 519;
		t.y = 320;
		t.skinName = GameUI$Skin12;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 61;
		t.source = "atlas_game_16";
		t.width = 361;
		t.x = 430;
		t.y = 209;
		return t;
	};
	_proto.editabletext_get_name_i = function () {
		var t = new eui.EditableText();
		this.editabletext_get_name = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 61;
		t.prompt = "输入僵尸的新名字";
		t.size = 17;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 361;
		t.wordWrap = true;
		t.x = 430;
		t.y = 209;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.width = 53;
		t.x = 1176;
		t.y = 93;
		t.skinName = GameUI$Skin13;
		return t;
	};
	_proto.label_info_i = function () {
		var t = new eui.Label();
		this.label_info = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "输入名字不能为空";
		t.textColor = 0xDE2C2C;
		t.x = 546;
		t.y = 280;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/gamegettokenui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	var GameUI$Skin14 = 	(function (_super) {
		__extends(GameUI$Skin14, _super);
		function GameUI$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game2_6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin14;
	})(eui.Skin);

	var GameUI$Skin15 = 	(function (_super) {
		__extends(GameUI$Skin15, _super);
		function GameUI$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_33";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin15;
	})(eui.Skin);

	function GameUI() {
		_super.call(this);
		this.skinParts = ["label_availableQuantity","label_coolingQuantity","label_withdrawingQuantity","btn_get","btn_close"];
		
		this.height = 2312;
		this.width = 1920;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GameUI.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 638;
		t.horizontalCenter = 0;
		t.visible = true;
		t.width = 1438;
		t.x = 241;
		t.y = 723;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.label_availableQuantity_i(),this._Label2_i(),this.label_coolingQuantity_i(),this.label_withdrawingQuantity_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this.btn_get_i(),this.btn_close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 638;
		t.source = "atlas_game2_7";
		t.width = 1438;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 536;
		t.source = "atlas_game2_5";
		t.width = 1339;
		t.x = 49;
		t.y = 50;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "所有代币需要14天后才可领取";
		t.x = 530;
		t.y = 141;
		return t;
	};
	_proto.label_availableQuantity_i = function () {
		var t = new eui.Label();
		this.label_availableQuantity = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "500";
		t.textAlign = "center";
		t.textColor = 0xF7CD56;
		t.verticalAlign = "middle";
		t.x = 337;
		t.y = 260;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "ZOM";
		t.textColor = 0xAFDCFF;
		t.visible = false;
		t.x = 576;
		t.y = 260;
		return t;
	};
	_proto.label_coolingQuantity_i = function () {
		var t = new eui.Label();
		this.label_coolingQuantity = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "35434";
		t.textColor = 0xF7CD56;
		t.verticalAlign = "middle";
		t.x = 656;
		t.y = 260;
		return t;
	};
	_proto.label_withdrawingQuantity_i = function () {
		var t = new eui.Label();
		this.label_withdrawingQuantity = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "35434";
		t.textColor = 0xF7CD56;
		t.verticalAlign = "middle";
		t.x = 966;
		t.y = 260;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "ZOM";
		t.textColor = 0xAFDCFF;
		t.visible = false;
		t.x = 897;
		t.y = 260;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "可提的ZOM";
		t.textAlign = "center";
		t.textColor = 0xAFDCFF;
		t.verticalAlign = "middle";
		t.x = 322;
		t.y = 323;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "冻结的ZOM";
		t.textColor = 0xAFDCFF;
		t.x = 653;
		t.y = 323;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "提取中的ZOM";
		t.textColor = 0xAFDCFF;
		t.x = 963;
		t.y = 323;
		return t;
	};
	_proto.btn_get_i = function () {
		var t = new eui.Button();
		this.btn_get = t;
		t.x = 292;
		t.y = 397;
		t.skinName = GameUI$Skin14;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 53;
		t.x = 1350;
		t.y = 30;
		t.skinName = GameUI$Skin15;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/gamegetzombieui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	var GameUI$Skin16 = 	(function (_super) {
		__extends(GameUI$Skin16, _super);
		function GameUI$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_14";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin16;
	})(eui.Skin);

	function GameUI() {
		_super.call(this);
		this.skinParts = ["btn_get_zombie","editabletext_get_name","label_info","group_get_Zombie"];
		
		this.height = 2312;
		this.width = 1920;
		this.elementsContent = [this.group_get_Zombie_i()];
	}
	var _proto = GameUI.prototype;

	_proto.group_get_Zombie_i = function () {
		var t = new eui.Group();
		this.group_get_Zombie = t;
		t.height = 467;
		t.horizontalCenter = 0;
		t.visible = true;
		t.width = 1220;
		t.x = 350;
		t.y = 804;
		t.elementsContent = [this._Image1_i(),this.btn_get_zombie_i(),this._Image2_i(),this.editabletext_get_name_i(),this.label_info_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 467;
		t.source = "atlas_game_15";
		t.width = 1220;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_get_zombie_i = function () {
		var t = new eui.Button();
		this.btn_get_zombie = t;
		t.x = 795;
		t.y = 227;
		t.skinName = GameUI$Skin16;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.source = "atlas_game_16";
		t.width = 360;
		t.x = 709;
		t.y = 123;
		return t;
	};
	_proto.editabletext_get_name_i = function () {
		var t = new eui.EditableText();
		this.editabletext_get_name = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 60;
		t.prompt = "给僵尸起个好名字";
		t.size = 17;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 360;
		t.wordWrap = true;
		t.x = 709;
		t.y = 123;
		return t;
	};
	_proto.label_info_i = function () {
		var t = new eui.Label();
		this.label_info = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "* 购买必须要给您的丧尸起个好名字哦~";
		t.textColor = 0xDE9D2C;
		t.x = 711;
		t.y = 196;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/gamemyzombieui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	var GameUI$Skin17 = 	(function (_super) {
		__extends(GameUI$Skin17, _super);
		function GameUI$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_29";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin17;
	})(eui.Skin);

	var GameUI$Skin18 = 	(function (_super) {
		__extends(GameUI$Skin18, _super);
		function GameUI$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_22";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin18;
	})(eui.Skin);

	var GameUI$Skin19 = 	(function (_super) {
		__extends(GameUI$Skin19, _super);
		function GameUI$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_21";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin19;
	})(eui.Skin);

	var GameUI$Skin20 = 	(function (_super) {
		__extends(GameUI$Skin20, _super);
		function GameUI$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_20";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin20;
	})(eui.Skin);

	var GameUI$Skin21 = 	(function (_super) {
		__extends(GameUI$Skin21, _super);
		function GameUI$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_47";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin21;
	})(eui.Skin);

	var GameUI$Skin22 = 	(function (_super) {
		__extends(GameUI$Skin22, _super);
		function GameUI$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_48";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin22;
	})(eui.Skin);

	var GameUI$Skin23 = 	(function (_super) {
		__extends(GameUI$Skin23, _super);
		function GameUI$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_49";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin23;
	})(eui.Skin);

	function GameUI() {
		_super.call(this);
		this.skinParts = ["group_item1","group_item2","group_item3","group_item4","group_item5","group_item6","group_item7","group_item8","group_item9","group_item10","label_nohave_info","group_zombie","group_my_Zombie","image_back","label_back","image_zombie_bg","label_name","btn_changeName","label_owner_name","label_battle_num","label_atkvalue","label_lifevalue","label_speedvalue","label_lackyvalue","label_growthvalue","label_pit_num","btn_battle","btn_atklife","btn_speedtrain","btn_pit","btn_sell","btn_awake","label_atktime","group_zombieDetial"];
		
		this.height = 2312;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.group_my_Zombie_i(),this.group_zombieDetial_i()];
	}
	var _proto = GameUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.blendMode = "normal";
		t.height = 1009;
		t.source = "atlas_game_45";
		t.visible = true;
		t.width = 1438;
		t.x = 241;
		t.y = 719;
		return t;
	};
	_proto.group_my_Zombie_i = function () {
		var t = new eui.Group();
		this.group_my_Zombie = t;
		t.height = 1009;
		t.visible = true;
		t.width = 1438;
		t.x = 241;
		t.y = 719;
		t.elementsContent = [this.group_zombie_i()];
		return t;
	};
	_proto.group_zombie_i = function () {
		var t = new eui.Group();
		this.group_zombie = t;
		t.height = 1009;
		t.visible = true;
		t.width = 1438;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.group_item1_i(),this.group_item2_i(),this.group_item3_i(),this.group_item4_i(),this.group_item5_i(),this.group_item6_i(),this.group_item7_i(),this.group_item8_i(),this.group_item9_i(),this.group_item10_i(),this.label_nohave_info_i()];
		return t;
	};
	_proto.group_item1_i = function () {
		var t = new eui.Group();
		this.group_item1 = t;
		t.height = 400;
		t.name = "group_item1";
		t.visible = true;
		t.width = 223;
		t.x = 49;
		t.y = 51;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.size = 14.4;
		t.text = "昵称";
		t.x = 24;
		t.y = 114;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_state";
		t.size = 14.4;
		t.text = "出售中";
		t.x = 154;
		t.y = 363;
		return t;
	};
	_proto.group_item2_i = function () {
		var t = new eui.Group();
		this.group_item2 = t;
		t.height = 400;
		t.name = "group_item2";
		t.width = 223;
		t.x = 331;
		t.y = 51;
		t.elementsContent = [this._Image3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 23;
		t.y = 93;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "昵称";
		t.x = 24;
		t.y = 114;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_state";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "出售中";
		t.x = 154;
		t.y = 363;
		return t;
	};
	_proto.group_item3_i = function () {
		var t = new eui.Group();
		this.group_item3 = t;
		t.height = 400;
		t.name = "group_item3";
		t.width = 223;
		t.x = 610;
		t.y = 51;
		t.elementsContent = [this._Image4_i(),this._Label7_i(),this._Label8_i(),this._Label9_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "昵称";
		t.x = 24;
		t.y = 114;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_state";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "出售中";
		t.x = 154;
		t.y = 363;
		return t;
	};
	_proto.group_item4_i = function () {
		var t = new eui.Group();
		this.group_item4 = t;
		t.height = 400;
		t.name = "group_item4";
		t.width = 223;
		t.x = 889;
		t.y = 51;
		t.elementsContent = [this._Image5_i(),this._Label10_i(),this._Label11_i(),this._Label12_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "昵称";
		t.x = 24;
		t.y = 114;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_state";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "出售中";
		t.x = 154;
		t.y = 363;
		return t;
	};
	_proto.group_item5_i = function () {
		var t = new eui.Group();
		this.group_item5 = t;
		t.height = 400;
		t.name = "group_item5";
		t.width = 223;
		t.x = 1168;
		t.y = 51;
		t.elementsContent = [this._Image6_i(),this._Label13_i(),this._Label14_i(),this._Label15_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "昵称";
		t.x = 24;
		t.y = 114;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_state";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "出售中";
		t.x = 154;
		t.y = 363;
		return t;
	};
	_proto.group_item6_i = function () {
		var t = new eui.Group();
		this.group_item6 = t;
		t.height = 400;
		t.name = "group_item6";
		t.width = 223;
		t.x = 52;
		t.y = 480;
		t.elementsContent = [this._Image7_i(),this._Label16_i(),this._Label17_i(),this._Label18_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "昵称";
		t.x = 24;
		t.y = 114;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_state";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "出售中";
		t.x = 154;
		t.y = 363;
		return t;
	};
	_proto.group_item7_i = function () {
		var t = new eui.Group();
		this.group_item7 = t;
		t.height = 400;
		t.name = "group_item7";
		t.width = 223;
		t.x = 331;
		t.y = 480;
		t.elementsContent = [this._Image8_i(),this._Label19_i(),this._Label20_i(),this._Label21_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "昵称";
		t.x = 24;
		t.y = 114;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_state";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "出售中";
		t.x = 154;
		t.y = 363;
		return t;
	};
	_proto.group_item8_i = function () {
		var t = new eui.Group();
		this.group_item8 = t;
		t.height = 400;
		t.name = "group_item8";
		t.width = 223;
		t.x = 610;
		t.y = 480;
		t.elementsContent = [this._Image9_i(),this._Label22_i(),this._Label23_i(),this._Label24_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "昵称";
		t.x = 24;
		t.y = 114;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_state";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "出售中";
		t.x = 154;
		t.y = 363;
		return t;
	};
	_proto.group_item9_i = function () {
		var t = new eui.Group();
		this.group_item9 = t;
		t.height = 400;
		t.name = "group_item9";
		t.width = 223;
		t.x = 889;
		t.y = 480;
		t.elementsContent = [this._Image10_i(),this._Label25_i(),this._Label26_i(),this._Label27_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "昵称";
		t.x = 24;
		t.y = 114;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_state";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "出售中";
		t.x = 154;
		t.y = 363;
		return t;
	};
	_proto.group_item10_i = function () {
		var t = new eui.Group();
		this.group_item10 = t;
		t.height = 400;
		t.name = "group_item10";
		t.width = 223;
		t.x = 1168;
		t.y = 480;
		t.elementsContent = [this._Image11_i(),this._Label28_i(),this._Label29_i(),this._Label30_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "昵称";
		t.x = 24;
		t.y = 114;
		return t;
	};
	_proto._Label30_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_state";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "出售中";
		t.x = 154;
		t.y = 363;
		return t;
	};
	_proto.label_nohave_info_i = function () {
		var t = new eui.Label();
		this.label_nohave_info = t;
		t.text = "--  无数据显示 --";
		t.x = 618;
		t.y = 342;
		return t;
	};
	_proto.group_zombieDetial_i = function () {
		var t = new eui.Group();
		this.group_zombieDetial = t;
		t.height = 967;
		t.visible = false;
		t.width = 1438;
		t.x = 241;
		t.y = 723;
		t.elementsContent = [this.image_back_i(),this.label_back_i(),this.image_zombie_bg_i(),this._Image12_i(),this.label_name_i(),this.btn_changeName_i(),this._Label31_i(),this.label_owner_name_i(),this._Label32_i(),this.label_battle_num_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this.label_atkvalue_i(),this._Label33_i(),this.label_lifevalue_i(),this._Label34_i(),this.label_speedvalue_i(),this._Label35_i(),this.label_lackyvalue_i(),this._Label36_i(),this.label_growthvalue_i(),this._Label37_i(),this._Label38_i(),this.label_pit_num_i(),this.btn_battle_i(),this.btn_atklife_i(),this.btn_speedtrain_i(),this.btn_pit_i(),this.btn_sell_i(),this.btn_awake_i(),this.label_atktime_i(),this._Label39_i(),this._Label40_i(),this._Label41_i(),this._Label42_i()];
		return t;
	};
	_proto.image_back_i = function () {
		var t = new eui.Image();
		this.image_back = t;
		t.height = 17.5;
		t.source = "atlas_game_23";
		t.visible = true;
		t.width = 10;
		t.x = 54;
		t.y = 41;
		return t;
	};
	_proto.label_back_i = function () {
		var t = new eui.Label();
		this.label_back = t;
		t.fontFamily = "Microsoft JhengHei";
		t.size = 18;
		t.text = "返回";
		t.textColor = 0xF8CB37;
		t.x = 73;
		t.y = 41;
		return t;
	};
	_proto.image_zombie_bg_i = function () {
		var t = new eui.Image();
		this.image_zombie_bg = t;
		t.height = 616;
		t.source = "atlas_game_44";
		t.width = 353;
		t.x = 48;
		t.y = 77;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 521;
		t.source = "atlas_game_46";
		t.width = 892;
		t.x = 453;
		t.y = 102;
		return t;
	};
	_proto.label_name_i = function () {
		var t = new eui.Label();
		this.label_name = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "喋喋不休王者";
		t.x = 551;
		t.y = 177;
		return t;
	};
	_proto.btn_changeName_i = function () {
		var t = new eui.Button();
		this.btn_changeName = t;
		t.height = 38;
		t.width = 98;
		t.x = 731;
		t.y = 169;
		t.skinName = GameUI$Skin17;
		return t;
	};
	_proto._Label31_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.italic = false;
		t.size = 22;
		t.stroke = 0;
		t.strokeColor = 0xC81010;
		t.text = "改名";
		t.textColor = 0xEF8319;
		t.touchEnabled = false;
		t.x = 760.272;
		t.y = 179;
		return t;
	};
	_proto.label_owner_name_i = function () {
		var t = new eui.Label();
		this.label_owner_name = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 15;
		t.text = "主人     baby12323";
		t.textColor = 0xAFDCFF;
		t.x = 550;
		t.y = 261;
		return t;
	};
	_proto._Label32_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "战斗次数：";
		t.textColor = 0xAFDCFF;
		t.x = 551;
		t.y = 304.444;
		return t;
	};
	_proto.label_battle_num_i = function () {
		var t = new eui.Label();
		this.label_battle_num = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "66/100";
		t.textColor = 0xF7CD56;
		t.width = 200;
		t.x = 663.693;
		t.y = 296.653;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "atlas_game_28";
		t.width = 39;
		t.x = 554;
		t.y = 383;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "atlas_game_27";
		t.width = 39;
		t.x = 704;
		t.y = 383;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "atlas_game_24";
		t.width = 39;
		t.x = 860;
		t.y = 385;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "atlas_game_25";
		t.width = 39;
		t.x = 1013;
		t.y = 386;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "atlas_game_26";
		t.width = 39;
		t.x = 1165;
		t.y = 385;
		return t;
	};
	_proto.label_atkvalue_i = function () {
		var t = new eui.Label();
		this.label_atkvalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "60";
		t.textColor = 0xAFDCFF;
		t.x = 550;
		t.y = 432;
		return t;
	};
	_proto._Label33_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "攻击";
		t.textColor = 0xAFDCFF;
		t.x = 550;
		t.y = 471;
		return t;
	};
	_proto.label_lifevalue_i = function () {
		var t = new eui.Label();
		this.label_lifevalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "84";
		t.textColor = 0xF68C24;
		t.x = 705;
		t.y = 432;
		return t;
	};
	_proto._Label34_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "生命";
		t.textColor = 0xF68C24;
		t.x = 705;
		t.y = 471;
		return t;
	};
	_proto.label_speedvalue_i = function () {
		var t = new eui.Label();
		this.label_speedvalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "35";
		t.textColor = 0xF7CD56;
		t.x = 860;
		t.y = 432;
		return t;
	};
	_proto._Label35_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "速度";
		t.textColor = 0xF7CD56;
		t.x = 860;
		t.y = 471;
		return t;
	};
	_proto.label_lackyvalue_i = function () {
		var t = new eui.Label();
		this.label_lackyvalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "55";
		t.textColor = 0x5DB3A9;
		t.x = 1015;
		t.y = 432;
		return t;
	};
	_proto._Label36_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "幸运";
		t.textColor = 0x5DB3A9;
		t.x = 1015;
		t.y = 471;
		return t;
	};
	_proto.label_growthvalue_i = function () {
		var t = new eui.Label();
		this.label_growthvalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "92";
		t.textColor = 0x4994C3;
		t.x = 1170;
		t.y = 432;
		return t;
	};
	_proto._Label37_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "成长";
		t.textColor = 0x4994C3;
		t.visible = true;
		t.x = 1170;
		t.y = 471;
		return t;
	};
	_proto._Label38_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "斗兽场胜利次数:";
		t.textColor = 0x4994C3;
		t.x = 800;
		t.y = 307;
		return t;
	};
	_proto.label_pit_num_i = function () {
		var t = new eui.Label();
		this.label_pit_num = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "44";
		t.textColor = 0xF7CD56;
		t.x = 960;
		t.y = 300;
		return t;
	};
	_proto.btn_battle_i = function () {
		var t = new eui.Button();
		this.btn_battle = t;
		t.x = 48;
		t.y = 759;
		t.skinName = GameUI$Skin18;
		return t;
	};
	_proto.btn_atklife_i = function () {
		var t = new eui.Button();
		this.btn_atklife = t;
		t.visible = true;
		t.x = 269;
		t.y = 758;
		t.skinName = GameUI$Skin19;
		return t;
	};
	_proto.btn_speedtrain_i = function () {
		var t = new eui.Button();
		this.btn_speedtrain = t;
		t.x = 490;
		t.y = 758;
		t.skinName = GameUI$Skin20;
		return t;
	};
	_proto.btn_pit_i = function () {
		var t = new eui.Button();
		this.btn_pit = t;
		t.visible = true;
		t.x = 712;
		t.y = 758;
		t.skinName = GameUI$Skin21;
		return t;
	};
	_proto.btn_sell_i = function () {
		var t = new eui.Button();
		this.btn_sell = t;
		t.x = 933;
		t.y = 758;
		t.skinName = GameUI$Skin22;
		return t;
	};
	_proto.btn_awake_i = function () {
		var t = new eui.Button();
		this.btn_awake = t;
		t.x = 1154;
		t.y = 758;
		t.skinName = GameUI$Skin23;
		return t;
	};
	_proto.label_atktime_i = function () {
		var t = new eui.Label();
		this.label_atktime = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 15.4;
		t.text = "战斗倒计时：01:20:44";
		t.textColor = 0xF7CD56;
		t.x = 66;
		t.y = 741;
		return t;
	};
	_proto._Label39_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "14天内未结算的ZOM：";
		t.textColor = 0xAFDCFF;
		t.visible = false;
		t.x = 551;
		t.y = 533;
		return t;
	};
	_proto._Label40_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "600";
		t.textColor = 0xF7CD56;
		t.visible = false;
		t.x = 771;
		t.y = 527;
		return t;
	};
	_proto._Label41_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "已结算的ZOM：";
		t.textColor = 0xAFDCFF;
		t.visible = false;
		t.x = 961;
		t.y = 533;
		return t;
	};
	_proto._Label42_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "600";
		t.textColor = 0xF7CD56;
		t.visible = false;
		t.x = 1111;
		t.y = 524;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/gamepopinfoui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	var GameUI$Skin24 = 	(function (_super) {
		__extends(GameUI$Skin24, _super);
		function GameUI$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_33";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin24;
	})(eui.Skin);

	function GameUI() {
		_super.call(this);
		this.skinParts = ["btn_close","label_info"];
		
		this.height = 3000;
		this.width = 3000;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.fillColor = 0x000000;
		t.height = 3000;
		t.width = 3000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 435;
		t.visible = true;
		t.width = 610;
		t.x = 641;
		t.y = 250;
		t.elementsContent = [this._Image1_i(),this.btn_close_i(),this.label_info_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 435;
		t.source = "atlas_game2_3";
		t.width = 610;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 588;
		t.y = 37;
		t.skinName = GameUI$Skin24;
		return t;
	};
	_proto.label_info_i = function () {
		var t = new eui.Label();
		this.label_info = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "等待中...";
		t.textColor = 0xF8CF58;
		t.x = 220.0000000000001;
		t.y = 189;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/gamesellpopui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	var GameUI$Skin25 = 	(function (_super) {
		__extends(GameUI$Skin25, _super);
		function GameUI$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_33";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin25;
	})(eui.Skin);

	var GameUI$Skin26 = 	(function (_super) {
		__extends(GameUI$Skin26, _super);
		function GameUI$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_48";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin26;
	})(eui.Skin);

	function GameUI() {
		_super.call(this);
		this.skinParts = ["btn_close","btn_get_zombie","editabletext_price"];
		
		this.height = 3000;
		this.width = 3000;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.fillColor = 0x000000;
		t.height = 3000;
		t.width = 3000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 435;
		t.visible = true;
		t.width = 610;
		t.x = 641;
		t.y = 250;
		t.elementsContent = [this._Image1_i(),this.btn_close_i(),this.btn_get_zombie_i(),this._Image2_i(),this.editabletext_price_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 435;
		t.source = "atlas_game2_3";
		t.width = 610;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 588;
		t.y = 37;
		t.skinName = GameUI$Skin25;
		return t;
	};
	_proto.btn_get_zombie_i = function () {
		var t = new eui.Button();
		this.btn_get_zombie = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 225.536;
		t.y = 264.806;
		t.skinName = GameUI$Skin26;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_game_16";
		t.visible = true;
		t.width = 360;
		t.x = 139.536;
		t.y = 160.806;
		return t;
	};
	_proto.editabletext_price_i = function () {
		var t = new eui.EditableText();
		this.editabletext_price = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 60;
		t.prompt = "给输入出售的价格";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 17;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 360;
		t.wordWrap = true;
		t.x = 139.536;
		t.y = 160.806;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "BNB";
		t.x = 510.387;
		t.y = 178.567;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/gamespeedtrainui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	var GameUI$Skin27 = 	(function (_super) {
		__extends(GameUI$Skin27, _super);
		function GameUI$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_33";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin27;
	})(eui.Skin);

	var GameUI$Skin28 = 	(function (_super) {
		__extends(GameUI$Skin28, _super);
		function GameUI$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_35";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin28;
	})(eui.Skin);

	var GameUI$Skin29 = 	(function (_super) {
		__extends(GameUI$Skin29, _super);
		function GameUI$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_36";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin29;
	})(eui.Skin);

	var GameUI$Skin30 = 	(function (_super) {
		__extends(GameUI$Skin30, _super);
		function GameUI$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_37";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin30;
	})(eui.Skin);

	function GameUI() {
		_super.call(this);
		this.skinParts = ["btn_close","btn_train_1","label_train1_count","label_train1_prop","btn_train_10","label_train10_count","label_train10_prop","btn_train_100","label_train100_count","label_train100_prop"];
		
		this.height = 1782;
		this.width = 3000;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.fillColor = 0x000000;
		t.height = 3000;
		t.strokeColor = 0x0D8CC180;
		t.visible = true;
		t.width = 3000;
		t.x = 0;
		t.y = 3.58;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 471;
		t.visible = true;
		t.width = 1210;
		t.x = 379.507;
		t.y = 235.655;
		t.elementsContent = [this._Image1_i(),this.btn_close_i(),this.btn_train_1_i(),this.label_train1_count_i(),this.label_train1_prop_i(),this.btn_train_10_i(),this.label_train10_count_i(),this.label_train10_prop_i(),this.btn_train_100_i(),this.label_train100_count_i(),this.label_train100_prop_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 471;
		t.source = "atlas_game_34";
		t.width = 1210;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.x = 1171;
		t.y = 93;
		t.skinName = GameUI$Skin27;
		return t;
	};
	_proto.btn_train_1_i = function () {
		var t = new eui.Button();
		this.btn_train_1 = t;
		t.x = 183;
		t.y = 317;
		t.skinName = GameUI$Skin28;
		return t;
	};
	_proto.label_train1_count_i = function () {
		var t = new eui.Label();
		this.label_train1_count = t;
		t.size = 18;
		t.text = "已培育次数：20";
		t.textAlign = "center";
		t.textColor = 0xFFD76C;
		t.verticalAlign = "middle";
		t.x = 221;
		t.y = 264;
		return t;
	};
	_proto.label_train1_prop_i = function () {
		var t = new eui.Label();
		this.label_train1_prop = t;
		t.size = 18;
		t.text = "速度+1";
		t.textAlign = "center";
		t.textColor = 0xFFD76C;
		t.verticalAlign = "middle";
		t.x = 253;
		t.y = 228;
		return t;
	};
	_proto.btn_train_10_i = function () {
		var t = new eui.Button();
		this.btn_train_10 = t;
		t.x = 528;
		t.y = 317;
		t.skinName = GameUI$Skin29;
		return t;
	};
	_proto.label_train10_count_i = function () {
		var t = new eui.Label();
		this.label_train10_count = t;
		t.size = 18;
		t.text = "已培育次数：20";
		t.textAlign = "center";
		t.textColor = 0x45A6E3;
		t.verticalAlign = "middle";
		t.x = 565;
		t.y = 264;
		return t;
	};
	_proto.label_train10_prop_i = function () {
		var t = new eui.Label();
		this.label_train10_prop = t;
		t.size = 18;
		t.text = "速度+10";
		t.textAlign = "center";
		t.textColor = 0x45A6E3;
		t.verticalAlign = "middle";
		t.x = 588;
		t.y = 228;
		return t;
	};
	_proto.btn_train_100_i = function () {
		var t = new eui.Button();
		this.btn_train_100 = t;
		t.x = 862;
		t.y = 317;
		t.skinName = GameUI$Skin30;
		return t;
	};
	_proto.label_train100_count_i = function () {
		var t = new eui.Label();
		this.label_train100_count = t;
		t.size = 18;
		t.text = "已培育次数：20";
		t.textAlign = "center";
		t.textColor = 0x79E0D6;
		t.verticalAlign = "middle";
		t.x = 899;
		t.y = 264;
		return t;
	};
	_proto.label_train100_prop_i = function () {
		var t = new eui.Label();
		this.label_train100_prop = t;
		t.size = 18;
		t.text = "速度+100";
		t.textAlign = "center";
		t.textColor = 0x79E0D6;
		t.verticalAlign = "middle";
		t.x = 916;
		t.y = 228;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/gameui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	var GameUI$Skin31 = 	(function (_super) {
		__extends(GameUI$Skin31, _super);
		function GameUI$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_51";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin31;
	})(eui.Skin);

	var GameUI$Skin32 = 	(function (_super) {
		__extends(GameUI$Skin32, _super);
		function GameUI$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_9";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin32;
	})(eui.Skin);

	var GameUI$Skin33 = 	(function (_super) {
		__extends(GameUI$Skin33, _super);
		function GameUI$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_12";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin33;
	})(eui.Skin);

	var GameUI$Skin34 = 	(function (_super) {
		__extends(GameUI$Skin34, _super);
		function GameUI$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_52";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin34;
	})(eui.Skin);

	function GameUI() {
		_super.call(this);
		this.skinParts = ["btn_get","btn_my","btn_pit","btn_lingqu","root"];
		
		this.height = 2312;
		this.width = 1920;
		this.elementsContent = [this.root_i()];
	}
	var _proto = GameUI.prototype;

	_proto.root_i = function () {
		var t = new eui.Group();
		this.root = t;
		t.height = 2312;
		t.horizontalCenter = 0;
		t.width = 1920;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_get_i(),this.btn_my_i(),this.btn_pit_i(),this.btn_lingqu_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 2312;
		t.source = "atlas_game_1";
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "atlas_game_7";
		t.width = 940;
		t.x = 515;
		t.y = 608;
		return t;
	};
	_proto.btn_get_i = function () {
		var t = new eui.Button();
		this.btn_get = t;
		t.enabled = true;
		t.height = 70;
		t.touchEnabled = true;
		t.width = 235;
		t.x = 516;
		t.y = 609;
		t.skinName = GameUI$Skin31;
		return t;
	};
	_proto.btn_my_i = function () {
		var t = new eui.Button();
		this.btn_my = t;
		t.height = 70;
		t.width = 235;
		t.x = 751;
		t.y = 609;
		t.skinName = GameUI$Skin32;
		return t;
	};
	_proto.btn_pit_i = function () {
		var t = new eui.Button();
		this.btn_pit = t;
		t.height = 70;
		t.width = 235;
		t.x = 986;
		t.y = 609;
		t.skinName = GameUI$Skin33;
		return t;
	};
	_proto.btn_lingqu_i = function () {
		var t = new eui.Button();
		this.btn_lingqu = t;
		t.height = 70;
		t.width = 235;
		t.x = 1221;
		t.y = 609;
		t.skinName = GameUI$Skin34;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/gamezombiepitui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	function GameUI() {
		_super.call(this);
		this.skinParts = ["group_item1","group_item2","group_item3","group_item4","group_item5","group_item6","group_item7","group_item8","group_item9","group_item10","label_nohave_info","group_zombie","group_my_Zombie"];
		
		this.height = 2312;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.group_my_Zombie_i()];
	}
	var _proto = GameUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.blendMode = "normal";
		t.height = 1009;
		t.source = "atlas_game_45";
		t.visible = true;
		t.width = 1438;
		t.x = 241;
		t.y = 719;
		return t;
	};
	_proto.group_my_Zombie_i = function () {
		var t = new eui.Group();
		this.group_my_Zombie = t;
		t.height = 1009;
		t.visible = true;
		t.width = 1438;
		t.x = 241;
		t.y = 719;
		t.elementsContent = [this.group_zombie_i()];
		return t;
	};
	_proto.group_zombie_i = function () {
		var t = new eui.Group();
		this.group_zombie = t;
		t.height = 1009;
		t.visible = true;
		t.width = 1438;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.group_item1_i(),this.group_item2_i(),this.group_item3_i(),this.group_item4_i(),this.group_item5_i(),this.group_item6_i(),this.group_item7_i(),this.group_item8_i(),this.group_item9_i(),this.group_item10_i(),this.label_nohave_info_i()];
		return t;
	};
	_proto.group_item1_i = function () {
		var t = new eui.Group();
		this.group_item1 = t;
		t.height = 400;
		t.name = "group_item1";
		t.visible = false;
		t.width = 223;
		t.x = 49;
		t.y = 51;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto.group_item2_i = function () {
		var t = new eui.Group();
		this.group_item2 = t;
		t.height = 400;
		t.name = "group_item2";
		t.visible = false;
		t.width = 223;
		t.x = 331;
		t.y = 51;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 23;
		t.y = 93;
		return t;
	};
	_proto.group_item3_i = function () {
		var t = new eui.Group();
		this.group_item3 = t;
		t.height = 400;
		t.name = "group_item3";
		t.visible = false;
		t.width = 223;
		t.x = 610;
		t.y = 51;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto.group_item4_i = function () {
		var t = new eui.Group();
		this.group_item4 = t;
		t.height = 400;
		t.name = "group_item4";
		t.visible = false;
		t.width = 223;
		t.x = 889;
		t.y = 51;
		t.elementsContent = [this._Image5_i(),this._Label4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto.group_item5_i = function () {
		var t = new eui.Group();
		this.group_item5 = t;
		t.height = 400;
		t.name = "group_item5";
		t.visible = false;
		t.width = 223;
		t.x = 1168;
		t.y = 51;
		t.elementsContent = [this._Image6_i(),this._Label5_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto.group_item6_i = function () {
		var t = new eui.Group();
		this.group_item6 = t;
		t.height = 400;
		t.name = "group_item6";
		t.visible = false;
		t.width = 223;
		t.x = 52;
		t.y = 480;
		t.elementsContent = [this._Image7_i(),this._Label6_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto.group_item7_i = function () {
		var t = new eui.Group();
		this.group_item7 = t;
		t.height = 400;
		t.name = "group_item7";
		t.visible = false;
		t.width = 223;
		t.x = 331;
		t.y = 480;
		t.elementsContent = [this._Image8_i(),this._Label7_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto.group_item8_i = function () {
		var t = new eui.Group();
		this.group_item8 = t;
		t.height = 400;
		t.name = "group_item8";
		t.visible = false;
		t.width = 223;
		t.x = 610;
		t.y = 480;
		t.elementsContent = [this._Image9_i(),this._Label8_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto.group_item9_i = function () {
		var t = new eui.Group();
		this.group_item9 = t;
		t.height = 400;
		t.name = "group_item9";
		t.visible = false;
		t.width = 223;
		t.x = 889;
		t.y = 480;
		t.elementsContent = [this._Image10_i(),this._Label9_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto.group_item10_i = function () {
		var t = new eui.Group();
		this.group_item10 = t;
		t.height = 400;
		t.name = "group_item10";
		t.visible = false;
		t.width = 223;
		t.x = 1168;
		t.y = 480;
		t.elementsContent = [this._Image11_i(),this._Label10_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 223;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14.4;
		t.text = "#1000023";
		t.x = 24;
		t.y = 93;
		return t;
	};
	_proto.label_nohave_info_i = function () {
		var t = new eui.Label();
		this.label_nohave_info = t;
		t.text = "--  无数据显示 --";
		t.x = 618;
		t.y = 342;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/homepageui.exml'] = window.MainUISkin = (function (_super) {
	__extends(MainUISkin, _super);
	var MainUISkin$Skin35 = 	(function (_super) {
		__extends(MainUISkin$Skin35, _super);
		function MainUISkin$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_main_11")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainUISkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_main_11";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainUISkin$Skin35;
	})(eui.Skin);

	function MainUISkin() {
		_super.call(this);
		this.skinParts = ["btn_start_game0"];
		
		this.height = 3760;
		this.width = 1920;
		this.elementsContent = [this._Group5_i()];
	}
	var _proto = MainUISkin.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 3760;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 940;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.btn_start_game0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.fillMode = "clip";
		t.height = 1020;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_main_6";
		t.top = 0;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_start_game0_i = function () {
		var t = new eui.Button();
		this.btn_start_game0 = t;
		t.enabled = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.visible = true;
		t.x = 788;
		t.y = 674;
		t.skinName = MainUISkin$Skin35;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 940;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 940;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 940;
		t.source = "atlas_main_8";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 940;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 1880;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 940;
		t.source = "atlas_main_9";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 940;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 2820;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 940;
		t.source = "atlas_main_10";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return MainUISkin;
})(eui.Skin);generateEUI.paths['resource/ui/mainui.exml'] = window.MainUISkin = (function (_super) {
	__extends(MainUISkin, _super);
	var MainUISkin$Skin36 = 	(function (_super) {
		__extends(MainUISkin$Skin36, _super);
		function MainUISkin$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_main_11")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainUISkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_main_11";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainUISkin$Skin36;
	})(eui.Skin);

	var MainUISkin$Skin37 = 	(function (_super) {
		__extends(MainUISkin$Skin37, _super);
		function MainUISkin$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainUISkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_main_12";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainUISkin$Skin37;
	})(eui.Skin);

	var MainUISkin$Skin38 = 	(function (_super) {
		__extends(MainUISkin$Skin38, _super);
		function MainUISkin$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_main_5")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainUISkin$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_main_5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainUISkin$Skin38;
	})(eui.Skin);

	var MainUISkin$Skin39 = 	(function (_super) {
		__extends(MainUISkin$Skin39, _super);
		function MainUISkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_main_1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainUISkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_main_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainUISkin$Skin39;
	})(eui.Skin);

	var MainUISkin$Skin40 = 	(function (_super) {
		__extends(MainUISkin$Skin40, _super);
		function MainUISkin$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_main_4")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainUISkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_main_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainUISkin$Skin40;
	})(eui.Skin);

	var MainUISkin$Skin41 = 	(function (_super) {
		__extends(MainUISkin$Skin41, _super);
		function MainUISkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_main_3")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainUISkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_main_3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainUISkin$Skin41;
	})(eui.Skin);

	var MainUISkin$Skin42 = 	(function (_super) {
		__extends(MainUISkin$Skin42, _super);
		function MainUISkin$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_main_2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainUISkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_main_2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainUISkin$Skin42;
	})(eui.Skin);

	function MainUISkin() {
		_super.call(this);
		this.skinParts = ["btn_start_game1","startGame","scrollerviewContent","scrollerview","label_homepage","label_market","label_game","label_friend","btn_money_link"];
		
		this.height = 3760;
		this.width = 1920;
		this.elementsContent = [this.scrollerview_i(),this._Group5_i()];
	}
	var _proto = MainUISkin.prototype;

	_proto.scrollerview_i = function () {
		var t = new eui.Scroller();
		this.scrollerview = t;
		t.height = 940;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.viewport = this.scrollerviewContent_i();
		return t;
	};
	_proto.scrollerviewContent_i = function () {
		var t = new eui.Group();
		this.scrollerviewContent = t;
		t.height = 926.656;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.startGame_i()];
		return t;
	};
	_proto.startGame_i = function () {
		var t = new eui.Group();
		this.startGame = t;
		t.height = 3760;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 940;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.btn_start_game1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 940;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_main_6";
		t.top = 0;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		return t;
	};
	_proto.btn_start_game1_i = function () {
		var t = new eui.Button();
		this.btn_start_game1 = t;
		t.enabled = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.visible = true;
		t.x = 788;
		t.y = 674;
		t.skinName = MainUISkin$Skin36;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 940;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 940;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 940;
		t.source = "atlas_main_8";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 940;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 1880;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 940;
		t.source = "atlas_main_9";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 940;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 2820;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 940;
		t.source = "atlas_main_10";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 123;
		t.horizontalCenter = 0;
		t.visible = true;
		t.width = 1655;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.label_homepage_i(),this.label_market_i(),this._Label1_i(),this.label_game_i(),this.label_friend_i(),this.btn_money_link_i(),this._Button1_i(),this._Button2_i(),this._Button3_i(),this._Button4_i(),this._Button5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 123;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_main_7";
		t.visible = true;
		t.width = 1655;
		t.x = 1.55;
		t.y = 0;
		t.zIndex = 99;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_main_13";
		t.width = 289;
		t.x = 66;
		t.y = 21;
		return t;
	};
	_proto.label_homepage_i = function () {
		var t = new eui.Label();
		this.label_homepage = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "主页";
		t.textColor = 0xF8CB37;
		t.visible = true;
		t.x = 481;
		t.y = 31;
		return t;
	};
	_proto.label_market_i = function () {
		var t = new eui.Label();
		this.label_market = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "市场";
		t.x = 572;
		t.y = 31;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "白皮书";
		t.x = 664;
		t.y = 31;
		return t;
	};
	_proto.label_game_i = function () {
		var t = new eui.Label();
		this.label_game = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23.191;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "游戏";
		t.x = 779;
		t.y = 31;
		return t;
	};
	_proto.label_friend_i = function () {
		var t = new eui.Label();
		this.label_friend = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23.519;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "邀请成员";
		t.x = 871;
		t.y = 30;
		return t;
	};
	_proto.btn_money_link_i = function () {
		var t = new eui.Button();
		this.btn_money_link = t;
		t.enabled = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1328;
		t.y = 12;
		t.skinName = MainUISkin$Skin37;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.enabled = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.x = 1017;
		t.y = 24;
		t.skinName = MainUISkin$Skin38;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.enabled = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1069;
		t.y = 23;
		t.skinName = MainUISkin$Skin39;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.enabled = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1122;
		t.y = 23;
		t.skinName = MainUISkin$Skin40;
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.enabled = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1175;
		t.y = 23;
		t.skinName = MainUISkin$Skin41;
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		t.enabled = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.x = 1227;
		t.y = 23;
		t.skinName = MainUISkin$Skin42;
		return t;
	};
	return MainUISkin;
})(eui.Skin);generateEUI.paths['resource/ui/marketui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	var GameUI$Skin43 = 	(function (_super) {
		__extends(GameUI$Skin43, _super);
		function GameUI$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_mark_27")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_mark_13";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin43;
	})(eui.Skin);

	var GameUI$Skin44 = 	(function (_super) {
		__extends(GameUI$Skin44, _super);
		function GameUI$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_mark_14")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_mark_28";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin44;
	})(eui.Skin);

	var GameUI$Skin45 = 	(function (_super) {
		__extends(GameUI$Skin45, _super);
		function GameUI$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_mark_14")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_mark_28";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin45;
	})(eui.Skin);

	var GameUI$Skin46 = 	(function (_super) {
		__extends(GameUI$Skin46, _super);
		function GameUI$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_mark_27")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_mark_13";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin46;
	})(eui.Skin);

	var GameUI$Skin47 = 	(function (_super) {
		__extends(GameUI$Skin47, _super);
		function GameUI$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_mark_27")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_mark_13";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin47;
	})(eui.Skin);

	var GameUI$Skin48 = 	(function (_super) {
		__extends(GameUI$Skin48, _super);
		function GameUI$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_mark_14")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_mark_28";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin48;
	})(eui.Skin);

	var GameUI$Skin49 = 	(function (_super) {
		__extends(GameUI$Skin49, _super);
		function GameUI$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","atlas_mark_23")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "atlas_mark_24";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin49;
	})(eui.Skin);

	var GameUI$Skin50 = 	(function (_super) {
		__extends(GameUI$Skin50, _super);
		function GameUI$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUI$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_mark_22";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUI$Skin50;
	})(eui.Skin);

	function GameUI() {
		_super.call(this);
		this.skinParts = ["label_genesisprice_min","label_price_min","label_genesisprice_max","label_price_max","label_genesisprice_mean","label_price_mean","image_kind_select","label_kind_info","image_kind_down","image_kind_up","checkbox_price_down","checkbox_price_up","checkbox_inmarket_up","checkbox_inmarket_down","checkbox_battlenum_down","checkbox_battlenum_up","checkbox_born","group_condiction","group_item1","group_item2","group_item3","group_item4","group_item5","group_item6","group_item7","group_item8","group_item9","group_item10","group_item11","group_item12","group_kind_select","label_nohave_marketinfo","group_zombie","image_back","label_back","image_zombie_bg","label_owner_name","label_z_cur_price","label_m_cur_price","label_battle_num","btn_buy_zombie","label_atkvalue","label_lifevalue","label_speedvalue","label_lackyvalue","label_growthvalue","group_transaction_1","group_transaction_2","group_transaction_3","group_transaction_4","group_transaction_5","group_transaction","group_zombieDetial","root"];
		
		this.height = 2403;
		this.width = 1920;
		this.elementsContent = [this.root_i()];
	}
	var _proto = GameUI.prototype;

	_proto.root_i = function () {
		var t = new eui.Group();
		this.root = t;
		t.height = 2403;
		t.horizontalCenter = 0;
		t.visible = true;
		t.width = 1920;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this.group_zombie_i(),this.group_zombieDetial_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 2403;
		t.source = "atlas_mark_15";
		t.visible = true;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 229;
		t.width = 336;
		t.x = 380;
		t.y = 145;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Label1_i(),this.label_genesisprice_min_i(),this._Image4_i(),this.label_price_min_i(),this._Label2_i(),this._Label3_i(),this._Rect1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 229;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_1";
		t.visible = true;
		t.width = 336;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_11";
		t.visible = true;
		t.width = 22;
		t.x = 74;
		t.y = 123;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "最低售价（7天）";
		t.x = 127;
		t.y = 80;
		return t;
	};
	_proto.label_genesisprice_min_i = function () {
		var t = new eui.Label();
		this.label_genesisprice_min = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "0.02";
		t.x = 103;
		t.y = 126;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_11";
		t.visible = true;
		t.width = 22;
		t.x = 193;
		t.y = 123;
		return t;
	};
	_proto.label_price_min_i = function () {
		var t = new eui.Label();
		this.label_price_min = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "0.02";
		t.x = 226;
		t.y = 126;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14;
		t.text = "创世丧尸";
		t.x = 83;
		t.y = 154;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14;
		t.text = "丧尸";
		t.x = 222;
		t.y = 154;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x9C9FAC;
		t.height = 54;
		t.width = 1;
		t.x = 178;
		t.y = 122;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 229;
		t.width = 336;
		t.x = 798;
		t.y = 145;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label4_i(),this.label_genesisprice_max_i(),this._Image7_i(),this.label_price_max_i(),this._Label5_i(),this._Label6_i(),this._Rect2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 229;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_1";
		t.visible = true;
		t.width = 336;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_11";
		t.visible = true;
		t.width = 22;
		t.x = 74;
		t.y = 123;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "最高售价（7天）";
		t.x = 127;
		t.y = 80;
		return t;
	};
	_proto.label_genesisprice_max_i = function () {
		var t = new eui.Label();
		this.label_genesisprice_max = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "0.02";
		t.x = 103;
		t.y = 126;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_11";
		t.visible = true;
		t.width = 22;
		t.x = 193;
		t.y = 123;
		return t;
	};
	_proto.label_price_max_i = function () {
		var t = new eui.Label();
		this.label_price_max = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "0.02";
		t.x = 226;
		t.y = 126;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14;
		t.text = "创世丧尸";
		t.x = 83;
		t.y = 154;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14;
		t.text = "丧尸";
		t.x = 222;
		t.y = 154;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x9C9FAC;
		t.height = 54;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1;
		t.x = 178;
		t.y = 122;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 229;
		t.width = 336;
		t.x = 1193;
		t.y = 155;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Label7_i(),this.label_genesisprice_mean_i(),this._Image10_i(),this.label_price_mean_i(),this._Label8_i(),this._Label9_i(),this._Rect3_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 229;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_1";
		t.visible = true;
		t.width = 336;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_11";
		t.visible = true;
		t.width = 22;
		t.x = 74;
		t.y = 123;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "平均售价（7天）";
		t.x = 124;
		t.y = 80;
		return t;
	};
	_proto.label_genesisprice_mean_i = function () {
		var t = new eui.Label();
		this.label_genesisprice_mean = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "0.02";
		t.x = 103;
		t.y = 126;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_11";
		t.visible = true;
		t.width = 22;
		t.x = 193;
		t.y = 123;
		return t;
	};
	_proto.label_price_mean_i = function () {
		var t = new eui.Label();
		this.label_price_mean = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "0.02";
		t.x = 226;
		t.y = 126;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14;
		t.text = "创世丧尸";
		t.x = 83;
		t.y = 154;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14;
		t.text = "丧尸";
		t.x = 222;
		t.y = 154;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x9C9FAC;
		t.height = 54;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1;
		t.x = 178;
		t.y = 122.00000000000006;
		return t;
	};
	_proto.group_zombie_i = function () {
		var t = new eui.Group();
		this.group_zombie = t;
		t.height = 1107;
		t.visible = true;
		t.width = 1438;
		t.x = 241;
		t.y = 445;
		t.elementsContent = [this.group_condiction_i(),this._Image17_i(),this.group_item1_i(),this.group_item2_i(),this.group_item3_i(),this.group_item4_i(),this.group_item5_i(),this.group_item6_i(),this.group_item7_i(),this.group_item8_i(),this.group_item9_i(),this.group_item10_i(),this.group_item11_i(),this.group_item12_i(),this.group_kind_select_i(),this.label_nohave_marketinfo_i()];
		return t;
	};
	_proto.group_condiction_i = function () {
		var t = new eui.Group();
		this.group_condiction = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1920;
		t.x = 10;
		t.y = -95;
		t.elementsContent = [this._Label10_i(),this.image_kind_select_i(),this.label_kind_info_i(),this.image_kind_down_i(),this.image_kind_up_i(),this._Label11_i(),this._Image11_i(),this._EditableText1_i(),this._Image12_i(),this._Image13_i(),this._EditableText2_i(),this._Label12_i(),this._Image14_i(),this._Label13_i(),this.checkbox_price_down_i(),this.checkbox_price_up_i(),this._Image15_i(),this._Label14_i(),this.checkbox_inmarket_up_i(),this.checkbox_inmarket_down_i(),this._Image16_i(),this._Label15_i(),this.checkbox_battlenum_down_i(),this.checkbox_battlenum_up_i(),this.checkbox_born_i()];
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.size = 16;
		t.text = "种类";
		t.textColor = 0xF8CB37;
		t.x = 250;
		t.y = 61;
		return t;
	};
	_proto.image_kind_select_i = function () {
		var t = new eui.Image();
		this.image_kind_select = t;
		t.height = 40;
		t.source = "atlas_mark_8";
		t.width = 170;
		t.x = 289;
		t.y = 39;
		return t;
	};
	_proto.label_kind_info_i = function () {
		var t = new eui.Label();
		this.label_kind_info = t;
		t.size = 16;
		t.text = "全部";
		t.textColor = 0xF8CB37;
		t.touchEnabled = false;
		t.x = 304;
		t.y = 52;
		return t;
	};
	_proto.image_kind_down_i = function () {
		var t = new eui.Image();
		this.image_kind_down = t;
		t.height = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_12";
		t.touchEnabled = false;
		t.visible = true;
		t.width = 15;
		t.x = 430;
		t.y = 52;
		return t;
	};
	_proto.image_kind_up_i = function () {
		var t = new eui.Image();
		this.image_kind_up = t;
		t.height = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_25";
		t.touchEnabled = false;
		t.visible = true;
		t.width = 15;
		t.x = 430;
		t.y = 52;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.size = 16;
		t.text = "算力";
		t.textColor = 0xF8CB37;
		t.x = 499;
		t.y = 51;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "atlas_mark_6";
		t.width = 140;
		t.x = 546;
		t.y = 39;
		return t;
	};
	_proto._EditableText1_i = function () {
		var t = new eui.EditableText();
		t.height = 40;
		t.size = 16;
		t.text = "0.02";
		t.textAlign = "center";
		t.textColor = 0xF8CB37;
		t.verticalAlign = "middle";
		t.width = 140;
		t.x = 546;
		t.y = 39;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 2;
		t.source = "atlas_mark_16";
		t.width = 9;
		t.x = 693;
		t.y = 59;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "atlas_mark_6";
		t.width = 140;
		t.x = 708;
		t.y = 39;
		return t;
	};
	_proto._EditableText2_i = function () {
		var t = new eui.EditableText();
		t.height = 40;
		t.size = 16;
		t.text = "0.03";
		t.textAlign = "center";
		t.textColor = 0xF8CB37;
		t.verticalAlign = "middle";
		t.width = 140;
		t.x = 708;
		t.y = 39;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.size = 16;
		t.text = "创世僵尸";
		t.textColor = 0xF8CB37;
		t.x = 934;
		t.y = 52;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_3";
		t.visible = true;
		t.width = 120;
		t.x = 1393;
		t.y = 39;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "价格";
		t.textColor = 0xF8CB37;
		t.visible = true;
		t.x = 1407;
		t.y = 52.0000000000001;
		return t;
	};
	_proto.checkbox_price_down_i = function () {
		var t = new eui.CheckBox();
		this.checkbox_price_down = t;
		t.selected = false;
		t.x = 1484;
		t.y = 58;
		t.skinName = GameUI$Skin43;
		return t;
	};
	_proto.checkbox_price_up_i = function () {
		var t = new eui.CheckBox();
		this.checkbox_price_up = t;
		t.selected = false;
		t.x = 1484;
		t.y = 48;
		t.skinName = GameUI$Skin44;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_4";
		t.visible = true;
		t.width = 150;
		t.x = 1227;
		t.y = 39;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "上架时间";
		t.textColor = 0xF8CB37;
		t.visible = true;
		t.x = 1252;
		t.y = 52;
		return t;
	};
	_proto.checkbox_inmarket_up_i = function () {
		var t = new eui.CheckBox();
		this.checkbox_inmarket_up = t;
		t.selected = false;
		t.x = 1353;
		t.y = 48;
		t.skinName = GameUI$Skin45;
		return t;
	};
	_proto.checkbox_inmarket_down_i = function () {
		var t = new eui.CheckBox();
		this.checkbox_inmarket_down = t;
		t.x = 1353;
		t.y = 58;
		t.skinName = GameUI$Skin46;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_4";
		t.visible = true;
		t.width = 150;
		t.x = 1529;
		t.y = 39;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "剩余次数";
		t.textColor = 0xF8CB37;
		t.visible = true;
		t.x = 1544;
		t.y = 52;
		return t;
	};
	_proto.checkbox_battlenum_down_i = function () {
		var t = new eui.CheckBox();
		this.checkbox_battlenum_down = t;
		t.x = 1650;
		t.y = 58;
		t.skinName = GameUI$Skin47;
		return t;
	};
	_proto.checkbox_battlenum_up_i = function () {
		var t = new eui.CheckBox();
		this.checkbox_battlenum_up = t;
		t.x = 1650;
		t.y = 48;
		t.skinName = GameUI$Skin48;
		return t;
	};
	_proto.checkbox_born_i = function () {
		var t = new eui.CheckBox();
		this.checkbox_born = t;
		t.selected = false;
		t.x = 888;
		t.y = 44;
		t.skinName = GameUI$Skin49;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 1107;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_10";
		t.visible = true;
		t.width = 1438;
		t.x = 0;
		t.y = 8;
		return t;
	};
	_proto.group_item1_i = function () {
		var t = new eui.Group();
		this.group_item1 = t;
		t.height = 444;
		t.name = "group_item1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 197;
		t.x = 49;
		t.y = 50;
		t.elementsContent = [this._Image18_i(),this._Image19_i(),this._Label16_i(),this._Label17_i(),this._Label18_i(),this._Label19_i(),this._Image20_i(),this._Label20_i(),this._Label21_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 344;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 197;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "image_bg";
		t.source = "atlas_mark_9";
		t.width = 185;
		t.x = 5;
		t.y = 336;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "剩余次数";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 353;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_battle_num";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "2/100";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 124;
		t.y = 353;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "价格";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 386;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 117;
		t.y = 386;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.name = "image_bg";
		t.source = "atlas_mark_11";
		t.width = 16;
		t.x = 95;
		t.y = 386;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice_m";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 119;
		t.y = 405;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.text = "#1000012";
		t.textColor = 0xFFFFFF;
		t.visible = true;
		t.x = 24;
		t.y = 78;
		return t;
	};
	_proto.group_item2_i = function () {
		var t = new eui.Group();
		this.group_item2 = t;
		t.height = 444;
		t.name = "group_item1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 197;
		t.x = 278;
		t.y = 50;
		t.elementsContent = [this._Image21_i(),this._Image22_i(),this._Label22_i(),this._Label23_i(),this._Label24_i(),this._Label25_i(),this._Image23_i(),this._Label26_i(),this._Label27_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 344;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 197;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "image_bg";
		t.source = "atlas_mark_9";
		t.width = 185;
		t.x = 5;
		t.y = 336;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "剩余次数";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 353;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_battle_num";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "2/100";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 124;
		t.y = 353;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "价格";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 386;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 117;
		t.y = 386;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.name = "image_bg";
		t.source = "atlas_mark_11";
		t.width = 16;
		t.x = 95;
		t.y = 386;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice_m";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 119;
		t.y = 405;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.text = "#1000012";
		t.textColor = 0xFFFFFF;
		t.visible = true;
		t.x = 24;
		t.y = 78;
		return t;
	};
	_proto.group_item3_i = function () {
		var t = new eui.Group();
		this.group_item3 = t;
		t.height = 444;
		t.name = "group_item1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 197;
		t.x = 505;
		t.y = 50;
		t.elementsContent = [this._Image24_i(),this._Image25_i(),this._Label28_i(),this._Label29_i(),this._Label30_i(),this._Label31_i(),this._Image26_i(),this._Label32_i(),this._Label33_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.height = 344;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 197;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "image_bg";
		t.source = "atlas_mark_9";
		t.width = 185;
		t.x = 5;
		t.y = 336;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "剩余次数";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 353;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_battle_num";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "2/100";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 124;
		t.y = 353;
		return t;
	};
	_proto._Label30_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "价格";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 386;
		return t;
	};
	_proto._Label31_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 117;
		t.y = 386;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.name = "image_bg";
		t.source = "atlas_mark_11";
		t.width = 16;
		t.x = 95;
		t.y = 386;
		return t;
	};
	_proto._Label32_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice_m";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 119;
		t.y = 405;
		return t;
	};
	_proto._Label33_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.text = "#1000012";
		t.textColor = 0xFFFFFF;
		t.visible = true;
		t.x = 24;
		t.y = 78;
		return t;
	};
	_proto.group_item4_i = function () {
		var t = new eui.Group();
		this.group_item4 = t;
		t.height = 444;
		t.name = "group_item1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 197;
		t.x = 734;
		t.y = 50;
		t.elementsContent = [this._Image27_i(),this._Image28_i(),this._Label34_i(),this._Label35_i(),this._Label36_i(),this._Label37_i(),this._Image29_i(),this._Label38_i(),this._Label39_i()];
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.height = 344;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 197;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "image_bg";
		t.source = "atlas_mark_9";
		t.width = 185;
		t.x = 5;
		t.y = 336;
		return t;
	};
	_proto._Label34_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "剩余次数";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 353;
		return t;
	};
	_proto._Label35_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_battle_num";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "2/100";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 124;
		t.y = 353;
		return t;
	};
	_proto._Label36_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "价格";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 386;
		return t;
	};
	_proto._Label37_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 117;
		t.y = 386;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.name = "image_bg";
		t.source = "atlas_mark_11";
		t.width = 16;
		t.x = 95;
		t.y = 386;
		return t;
	};
	_proto._Label38_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice_m";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 119;
		t.y = 405;
		return t;
	};
	_proto._Label39_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.text = "#1000012";
		t.textColor = 0xFFFFFF;
		t.visible = true;
		t.x = 24;
		t.y = 78;
		return t;
	};
	_proto.group_item5_i = function () {
		var t = new eui.Group();
		this.group_item5 = t;
		t.height = 444;
		t.name = "group_item1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 197;
		t.x = 962;
		t.y = 50;
		t.elementsContent = [this._Image30_i(),this._Image31_i(),this._Label40_i(),this._Label41_i(),this._Label42_i(),this._Label43_i(),this._Image32_i(),this._Label44_i(),this._Label45_i()];
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.height = 344;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 197;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "image_bg";
		t.source = "atlas_mark_9";
		t.width = 185;
		t.x = 5;
		t.y = 336;
		return t;
	};
	_proto._Label40_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "剩余次数";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 353;
		return t;
	};
	_proto._Label41_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_battle_num";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "2/100";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 124;
		t.y = 353;
		return t;
	};
	_proto._Label42_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "价格";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 386;
		return t;
	};
	_proto._Label43_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 117;
		t.y = 386;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.name = "image_bg";
		t.source = "atlas_mark_11";
		t.width = 16;
		t.x = 95;
		t.y = 386;
		return t;
	};
	_proto._Label44_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice_m";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 119;
		t.y = 405;
		return t;
	};
	_proto._Label45_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.text = "#1000012";
		t.textColor = 0xFFFFFF;
		t.visible = true;
		t.x = 24;
		t.y = 78;
		return t;
	};
	_proto.group_item6_i = function () {
		var t = new eui.Group();
		this.group_item6 = t;
		t.height = 444;
		t.name = "group_item1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 197;
		t.x = 1191;
		t.y = 50;
		t.elementsContent = [this._Image33_i(),this._Image34_i(),this._Label46_i(),this._Label47_i(),this._Label48_i(),this._Label49_i(),this._Image35_i(),this._Label50_i(),this._Label51_i()];
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.height = 344;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 197;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "image_bg";
		t.source = "atlas_mark_9";
		t.width = 185;
		t.x = 5;
		t.y = 336;
		return t;
	};
	_proto._Label46_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "剩余次数";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 353;
		return t;
	};
	_proto._Label47_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_battle_num";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "2/100";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 124;
		t.y = 353;
		return t;
	};
	_proto._Label48_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "价格";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 386;
		return t;
	};
	_proto._Label49_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 117;
		t.y = 386;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.name = "image_bg";
		t.source = "atlas_mark_11";
		t.width = 16;
		t.x = 95;
		t.y = 386;
		return t;
	};
	_proto._Label50_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice_m";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 119;
		t.y = 405;
		return t;
	};
	_proto._Label51_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.text = "#1000012";
		t.textColor = 0xFFFFFF;
		t.visible = true;
		t.x = 24;
		t.y = 78;
		return t;
	};
	_proto.group_item7_i = function () {
		var t = new eui.Group();
		this.group_item7 = t;
		t.height = 444;
		t.name = "group_item1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 197;
		t.x = 50;
		t.y = 540;
		t.elementsContent = [this._Image36_i(),this._Image37_i(),this._Label52_i(),this._Label53_i(),this._Label54_i(),this._Label55_i(),this._Image38_i(),this._Label56_i(),this._Label57_i()];
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.height = 344;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 197;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "image_bg";
		t.source = "atlas_mark_9";
		t.width = 185;
		t.x = 5;
		t.y = 336;
		return t;
	};
	_proto._Label52_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "剩余次数";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 353;
		return t;
	};
	_proto._Label53_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_battle_num";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "2/100";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 124;
		t.y = 353;
		return t;
	};
	_proto._Label54_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "价格";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 386;
		return t;
	};
	_proto._Label55_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 117;
		t.y = 386;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.name = "image_bg";
		t.source = "atlas_mark_11";
		t.width = 16;
		t.x = 95;
		t.y = 386;
		return t;
	};
	_proto._Label56_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice_m";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 119;
		t.y = 405;
		return t;
	};
	_proto._Label57_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.text = "#1000012";
		t.textColor = 0xFFFFFF;
		t.visible = true;
		t.x = 24;
		t.y = 78;
		return t;
	};
	_proto.group_item8_i = function () {
		var t = new eui.Group();
		this.group_item8 = t;
		t.height = 444;
		t.name = "group_item1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 197;
		t.x = 278;
		t.y = 540;
		t.elementsContent = [this._Image39_i(),this._Image40_i(),this._Label58_i(),this._Label59_i(),this._Label60_i(),this._Label61_i(),this._Image41_i(),this._Label62_i(),this._Label63_i()];
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.height = 344;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 197;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "image_bg";
		t.source = "atlas_mark_9";
		t.width = 185;
		t.x = 5;
		t.y = 336;
		return t;
	};
	_proto._Label58_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "剩余次数";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 353;
		return t;
	};
	_proto._Label59_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_battle_num";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "2/100";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 124;
		t.y = 353;
		return t;
	};
	_proto._Label60_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "价格";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 386;
		return t;
	};
	_proto._Label61_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 117;
		t.y = 386;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.name = "image_bg";
		t.source = "atlas_mark_11";
		t.width = 16;
		t.x = 95;
		t.y = 386;
		return t;
	};
	_proto._Label62_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice_m";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 119;
		t.y = 405;
		return t;
	};
	_proto._Label63_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.text = "#1000012";
		t.textColor = 0xFFFFFF;
		t.visible = true;
		t.x = 24;
		t.y = 78;
		return t;
	};
	_proto.group_item9_i = function () {
		var t = new eui.Group();
		this.group_item9 = t;
		t.height = 444;
		t.name = "group_item1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 197;
		t.x = 505;
		t.y = 540;
		t.elementsContent = [this._Image42_i(),this._Image43_i(),this._Label64_i(),this._Label65_i(),this._Label66_i(),this._Label67_i(),this._Image44_i(),this._Label68_i(),this._Label69_i()];
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.height = 344;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 197;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "image_bg";
		t.source = "atlas_mark_9";
		t.width = 185;
		t.x = 5;
		t.y = 336;
		return t;
	};
	_proto._Label64_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "剩余次数";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 353;
		return t;
	};
	_proto._Label65_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_battle_num";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "2/100";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 124;
		t.y = 353;
		return t;
	};
	_proto._Label66_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "价格";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 386;
		return t;
	};
	_proto._Label67_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 117;
		t.y = 386;
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.name = "image_bg";
		t.source = "atlas_mark_11";
		t.width = 16;
		t.x = 95;
		t.y = 386;
		return t;
	};
	_proto._Label68_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice_m";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 119;
		t.y = 405;
		return t;
	};
	_proto._Label69_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.text = "#1000012";
		t.textColor = 0xFFFFFF;
		t.visible = true;
		t.x = 24;
		t.y = 78;
		return t;
	};
	_proto.group_item10_i = function () {
		var t = new eui.Group();
		this.group_item10 = t;
		t.height = 444;
		t.name = "group_item1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 197;
		t.x = 734;
		t.y = 540;
		t.elementsContent = [this._Image45_i(),this._Image46_i(),this._Label70_i(),this._Label71_i(),this._Label72_i(),this._Label73_i(),this._Image47_i(),this._Label74_i(),this._Label75_i()];
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.height = 344;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 197;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "image_bg";
		t.source = "atlas_mark_9";
		t.width = 185;
		t.x = 5;
		t.y = 336;
		return t;
	};
	_proto._Label70_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "剩余次数";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 353;
		return t;
	};
	_proto._Label71_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_battle_num";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "2/100";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 124;
		t.y = 353;
		return t;
	};
	_proto._Label72_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "价格";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 386;
		return t;
	};
	_proto._Label73_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 117;
		t.y = 386;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.name = "image_bg";
		t.source = "atlas_mark_11";
		t.width = 16;
		t.x = 95;
		t.y = 386;
		return t;
	};
	_proto._Label74_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice_m";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 119;
		t.y = 405;
		return t;
	};
	_proto._Label75_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.text = "#1000012";
		t.textColor = 0xFFFFFF;
		t.visible = true;
		t.x = 24;
		t.y = 78;
		return t;
	};
	_proto.group_item11_i = function () {
		var t = new eui.Group();
		this.group_item11 = t;
		t.height = 444;
		t.name = "group_item1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 197;
		t.x = 962;
		t.y = 540;
		t.elementsContent = [this._Image48_i(),this._Image49_i(),this._Label76_i(),this._Label77_i(),this._Label78_i(),this._Label79_i(),this._Image50_i(),this._Label80_i(),this._Label81_i()];
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.height = 344;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 197;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "image_bg";
		t.source = "atlas_mark_9";
		t.width = 185;
		t.x = 5;
		t.y = 336;
		return t;
	};
	_proto._Label76_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "剩余次数";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 353;
		return t;
	};
	_proto._Label77_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_battle_num";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "2/100";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 124;
		t.y = 353;
		return t;
	};
	_proto._Label78_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "价格";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 386;
		return t;
	};
	_proto._Label79_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 117;
		t.y = 386;
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.name = "image_bg";
		t.source = "atlas_mark_11";
		t.width = 16;
		t.x = 95;
		t.y = 386;
		return t;
	};
	_proto._Label80_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice_m";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 119;
		t.y = 405;
		return t;
	};
	_proto._Label81_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.text = "#1000012";
		t.textColor = 0xFFFFFF;
		t.visible = true;
		t.x = 24;
		t.y = 78;
		return t;
	};
	_proto.group_item12_i = function () {
		var t = new eui.Group();
		this.group_item12 = t;
		t.height = 444;
		t.name = "group_item1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 197;
		t.x = 1191;
		t.y = 540;
		t.elementsContent = [this._Image51_i(),this._Image52_i(),this._Label82_i(),this._Label83_i(),this._Label84_i(),this._Label85_i(),this._Image53_i(),this._Label86_i(),this._Label87_i()];
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.height = 344;
		t.name = "image_bg";
		t.source = "atlas_game_39";
		t.width = 197;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.name = "image_bg";
		t.source = "atlas_mark_9";
		t.width = 185;
		t.x = 5;
		t.y = 336;
		return t;
	};
	_proto._Label82_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "剩余次数";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 353;
		return t;
	};
	_proto._Label83_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_battle_num";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "2/100";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 124;
		t.y = 353;
		return t;
	};
	_proto._Label84_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "价格";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 16;
		t.y = 386;
		return t;
	};
	_proto._Label85_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 117;
		t.y = 386;
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.name = "image_bg";
		t.source = "atlas_mark_11";
		t.width = 16;
		t.x = 95;
		t.y = 386;
		return t;
	};
	_proto._Label86_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_curPrice_m";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "0.0003";
		t.textColor = 0x342930;
		t.visible = true;
		t.x = 119;
		t.y = 405;
		return t;
	};
	_proto._Label87_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_nft";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.text = "#1000012";
		t.textColor = 0xFFFFFF;
		t.visible = true;
		t.x = 24;
		t.y = 78;
		return t;
	};
	_proto.group_kind_select_i = function () {
		var t = new eui.Group();
		this.group_kind_select = t;
		t.height = 210;
		t.name = "group_item1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 170;
		t.x = 48;
		t.y = -26;
		t.elementsContent = [this._Image54_i(),this._Label88_i(),this._Label89_i(),this._Label90_i(),this._Label91_i(),this._Label92_i(),this._Label93_i(),this._Label94_i()];
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.height = 210;
		t.name = "image_bg";
		t.source = "atlas_game2_9";
		t.width = 170;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label88_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "全部";
		t.textColor = 0xF8CB37;
		t.visible = true;
		t.x = 20;
		t.y = 10;
		return t;
	};
	_proto._Label89_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "普通僵尸";
		t.textColor = 0xF8CB37;
		t.visible = true;
		t.x = 20;
		t.y = 38;
		return t;
	};
	_proto._Label90_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "吓人僵尸";
		t.textColor = 0xF8CB37;
		t.visible = true;
		t.x = 20;
		t.y = 66;
		return t;
	};
	_proto._Label91_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "僵尸士兵";
		t.textColor = 0xF8CB37;
		t.visible = true;
		t.x = 20;
		t.y = 94;
		return t;
	};
	_proto._Label92_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "僵尸将军";
		t.textColor = 0xF8CB37;
		t.visible = true;
		t.x = 20;
		t.y = 122;
		return t;
	};
	_proto._Label93_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "僵尸王";
		t.textColor = 0xF8CB37;
		t.visible = true;
		t.x = 20;
		t.y = 150;
		return t;
	};
	_proto._Label94_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "传说中的僵尸	";
		t.textColor = 0xF8CB37;
		t.visible = true;
		t.x = 20;
		t.y = 178;
		return t;
	};
	_proto.label_nohave_marketinfo_i = function () {
		var t = new eui.Label();
		this.label_nohave_marketinfo = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "--  无数据显示 --";
		t.textColor = 0xFFFFFF;
		t.x = 590;
		t.y = 240;
		return t;
	};
	_proto.group_zombieDetial_i = function () {
		var t = new eui.Group();
		this.group_zombieDetial = t;
		t.height = 1424;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 1438;
		t.x = 241;
		t.y = 420;
		t.elementsContent = [this._Image55_i(),this.image_back_i(),this.label_back_i(),this.image_zombie_bg_i(),this._Image56_i(),this._Label95_i(),this.label_owner_name_i(),this._Label96_i(),this._Image57_i(),this.label_z_cur_price_i(),this.label_m_cur_price_i(),this._Label97_i(),this.label_battle_num_i(),this.btn_buy_zombie_i(),this._Image58_i(),this._Label98_i(),this._Image59_i(),this._Image60_i(),this._Image61_i(),this._Image62_i(),this._Image63_i(),this.label_atkvalue_i(),this._Label99_i(),this.label_lifevalue_i(),this._Label100_i(),this.label_speedvalue_i(),this._Label101_i(),this.label_lackyvalue_i(),this._Label102_i(),this.label_growthvalue_i(),this._Label103_i(),this._Image64_i(),this._Label104_i(),this._Label105_i(),this._Label106_i(),this._Label107_i(),this._Label108_i(),this._Image65_i(),this._Label109_i(),this.group_transaction_i()];
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.height = 1424;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_10";
		t.visible = true;
		t.width = 1438;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_back_i = function () {
		var t = new eui.Image();
		this.image_back = t;
		t.height = 24;
		t.source = "atlas_game_23";
		t.visible = true;
		t.width = 14;
		t.x = 54;
		t.y = 54;
		return t;
	};
	_proto.label_back_i = function () {
		var t = new eui.Label();
		this.label_back = t;
		t.fontFamily = "Microsoft JhengHei";
		t.size = 24;
		t.text = "返回";
		t.textColor = 0xF8CB37;
		t.x = 80;
		t.y = 54;
		return t;
	};
	_proto.image_zombie_bg_i = function () {
		var t = new eui.Image();
		this.image_zombie_bg = t;
		t.height = 699;
		t.source = "atlas_game_44";
		t.visible = true;
		t.width = 399;
		t.x = 49;
		t.y = 130;
		return t;
	};
	_proto._Image56_i = function () {
		var t = new eui.Image();
		t.height = 369;
		t.source = "atlas_mark_17";
		t.width = 893;
		t.x = 497;
		t.y = 161;
		return t;
	};
	_proto._Label95_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft JhengHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "拥有者";
		t.textColor = 0xFFFFFF;
		t.x = 540;
		t.y = 206;
		return t;
	};
	_proto.label_owner_name_i = function () {
		var t = new eui.Label();
		this.label_owner_name = t;
		t.fontFamily = "Microsoft JhengHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "0x2112132";
		t.textColor = 0xFFFFFF;
		t.x = 618;
		t.y = 206;
		return t;
	};
	_proto._Label96_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft JhengHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "价格";
		t.textColor = 0xFFFFFF;
		t.x = 540;
		t.y = 288;
		return t;
	};
	_proto._Image57_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "atlas_mark_11";
		t.width = 20;
		t.x = 617;
		t.y = 285;
		return t;
	};
	_proto.label_z_cur_price_i = function () {
		var t = new eui.Label();
		this.label_z_cur_price = t;
		t.fontFamily = "Microsoft JhengHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "0.02";
		t.textColor = 0xFFFFFF;
		t.x = 649;
		t.y = 277;
		return t;
	};
	_proto.label_m_cur_price_i = function () {
		var t = new eui.Label();
		this.label_m_cur_price = t;
		t.fontFamily = "Microsoft JhengHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "18美元";
		t.textColor = 0xFFFFFF;
		t.x = 729;
		t.y = 288;
		return t;
	};
	_proto._Label97_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft JhengHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "战斗次数";
		t.textColor = 0xFFFFFF;
		t.x = 878;
		t.y = 288;
		return t;
	};
	_proto.label_battle_num_i = function () {
		var t = new eui.Label();
		this.label_battle_num = t;
		t.fontFamily = "Microsoft JhengHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "2/100";
		t.textColor = 0xFFFFFF;
		t.x = 966;
		t.y = 288;
		return t;
	};
	_proto.btn_buy_zombie_i = function () {
		var t = new eui.Button();
		this.btn_buy_zombie = t;
		t.x = 851;
		t.y = 370;
		t.skinName = GameUI$Skin50;
		return t;
	};
	_proto._Image58_i = function () {
		var t = new eui.Image();
		t.height = 254;
		t.source = "atlas_mark_18";
		t.width = 892;
		t.x = 497;
		t.y = 569;
		return t;
	};
	_proto._Label98_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft JhengHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "属性";
		t.textColor = 0xFFFFFF;
		t.x = 540;
		t.y = 614;
		return t;
	};
	_proto._Image59_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_game_28";
		t.width = 39;
		t.x = 547;
		t.y = 711;
		return t;
	};
	_proto._Image60_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_game_27";
		t.width = 39;
		t.x = 718;
		t.y = 711;
		return t;
	};
	_proto._Image61_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_game_24";
		t.width = 39;
		t.x = 889;
		t.y = 711;
		return t;
	};
	_proto._Image62_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_game_25";
		t.width = 39;
		t.x = 1060;
		t.y = 711;
		return t;
	};
	_proto._Image63_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_game_26";
		t.width = 39;
		t.x = 1232;
		t.y = 711;
		return t;
	};
	_proto.label_atkvalue_i = function () {
		var t = new eui.Label();
		this.label_atkvalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "60";
		t.textColor = 0xAFDCFF;
		t.x = 608;
		t.y = 743;
		return t;
	};
	_proto._Label99_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "攻击";
		t.textColor = 0xAFDCFF;
		t.x = 607;
		t.y = 714;
		return t;
	};
	_proto.label_lifevalue_i = function () {
		var t = new eui.Label();
		this.label_lifevalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "84";
		t.textColor = 0xF68C24;
		t.x = 788;
		t.y = 743;
		return t;
	};
	_proto._Label100_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "生命";
		t.textColor = 0xF68C24;
		t.x = 777;
		t.y = 714;
		return t;
	};
	_proto.label_speedvalue_i = function () {
		var t = new eui.Label();
		this.label_speedvalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "35";
		t.textColor = 0xF7CD56;
		t.x = 949;
		t.y = 743;
		return t;
	};
	_proto._Label101_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "速度";
		t.textColor = 0xF7CD56;
		t.x = 948;
		t.y = 714;
		return t;
	};
	_proto.label_lackyvalue_i = function () {
		var t = new eui.Label();
		this.label_lackyvalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "55";
		t.textColor = 0x5DB3A9;
		t.x = 1121;
		t.y = 743;
		return t;
	};
	_proto._Label102_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "幸运";
		t.textColor = 0x5DB3A9;
		t.x = 1121;
		t.y = 714;
		return t;
	};
	_proto.label_growthvalue_i = function () {
		var t = new eui.Label();
		this.label_growthvalue = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "92";
		t.textColor = 0x4994C3;
		t.x = 1291;
		t.y = 743;
		return t;
	};
	_proto._Label103_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "成长";
		t.textColor = 0x4994C3;
		t.visible = true;
		t.x = 1291;
		t.y = 714;
		return t;
	};
	_proto._Image64_i = function () {
		var t = new eui.Image();
		t.height = 369;
		t.source = "atlas_mark_20";
		t.width = 377;
		t.x = 60;
		t.y = 851;
		return t;
	};
	_proto._Label104_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "区块链详情";
		t.x = 114;
		t.y = 896;
		return t;
	};
	_proto._Label105_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "合约地址：0x8531a...1B4d2";
		t.x = 114;
		t.y = 987;
		return t;
	};
	_proto._Label106_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "代币 ID：2000053907";
		t.x = 114;
		t.y = 1030;
		return t;
	};
	_proto._Label107_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "区块链：BSC";
		t.x = 111;
		t.y = 1073;
		return t;
	};
	_proto._Label108_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "代币标准：ERC-721";
		t.x = 110;
		t.y = 1116;
		return t;
	};
	_proto._Image65_i = function () {
		var t = new eui.Image();
		t.height = 521;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "atlas_mark_19";
		t.width = 892;
		t.x = 498;
		t.y = 851;
		return t;
	};
	_proto._Label109_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "交易记录";
		t.x = 540;
		t.y = 896;
		return t;
	};
	_proto.group_transaction_i = function () {
		var t = new eui.Group();
		this.group_transaction = t;
		t.height = 521;
		t.width = 892;
		t.x = 498;
		t.y = 859;
		t.elementsContent = [this._Label110_i(),this._Label111_i(),this._Label112_i(),this._Label113_i(),this._Label114_i(),this.group_transaction_1_i(),this.group_transaction_2_i(),this.group_transaction_3_i(),this.group_transaction_4_i(),this.group_transaction_5_i()];
		return t;
	};
	_proto._Label110_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "事件";
		t.x = 99;
		t.y = 137;
		return t;
	};
	_proto._Label111_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "价钱";
		t.x = 192;
		t.y = 137;
		return t;
	};
	_proto._Label112_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "从";
		t.x = 323;
		t.y = 138;
		return t;
	};
	_proto._Label113_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "到";
		t.x = 546;
		t.y = 138;
		return t;
	};
	_proto._Label114_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "日期";
		t.x = 771;
		t.y = 138;
		return t;
	};
	_proto.group_transaction_1_i = function () {
		var t = new eui.Group();
		this.group_transaction_1 = t;
		t.height = 46;
		t.width = 808;
		t.x = 42;
		t.y = 173;
		t.elementsContent = [this._Image66_i(),this._Label115_i(),this._Label116_i(),this._Label117_i(),this._Label118_i(),this._Label119_i()];
		return t;
	};
	_proto._Image66_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "atlas_mark_21";
		t.width = 20;
		t.x = 25;
		t.y = 13;
		return t;
	};
	_proto._Label115_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.size = 14;
		t.text = "命令";
		t.x = 57;
		t.y = 16;
		return t;
	};
	_proto._Label116_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_price";
		t.size = 14;
		t.text = "0.03 BNB";
		t.x = 150;
		t.y = 16;
		return t;
	};
	_proto._Label117_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_from";
		t.size = 14;
		t.text = "（地址：0x4f62b...25043）";
		t.x = 277;
		t.y = 16;
		return t;
	};
	_proto._Label118_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_to";
		t.size = 14;
		t.text = "（地址：0x4f62b...25043）";
		t.x = 501;
		t.y = 16;
		return t;
	};
	_proto._Label119_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_time";
		t.size = 14;
		t.text = "02:00:00";
		t.x = 726;
		t.y = 16;
		return t;
	};
	_proto.group_transaction_2_i = function () {
		var t = new eui.Group();
		this.group_transaction_2 = t;
		t.height = 46;
		t.width = 808;
		t.x = 42;
		t.y = 219;
		t.elementsContent = [this._Image67_i(),this._Label120_i(),this._Label121_i(),this._Label122_i(),this._Label123_i(),this._Label124_i()];
		return t;
	};
	_proto._Image67_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "atlas_mark_21";
		t.width = 20;
		t.x = 25;
		t.y = 13;
		return t;
	};
	_proto._Label120_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.size = 14;
		t.text = "命令";
		t.x = 57;
		t.y = 16;
		return t;
	};
	_proto._Label121_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_price";
		t.size = 14;
		t.text = "0.03 BNB";
		t.x = 150;
		t.y = 16;
		return t;
	};
	_proto._Label122_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_from";
		t.size = 14;
		t.text = "（地址：0x4f62b...25043）";
		t.x = 277;
		t.y = 16;
		return t;
	};
	_proto._Label123_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_to";
		t.size = 14;
		t.text = "（地址：0x4f62b...25043）";
		t.x = 501;
		t.y = 16;
		return t;
	};
	_proto._Label124_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_time";
		t.size = 14;
		t.text = "02:00:00";
		t.x = 726;
		t.y = 16;
		return t;
	};
	_proto.group_transaction_3_i = function () {
		var t = new eui.Group();
		this.group_transaction_3 = t;
		t.height = 46;
		t.width = 808;
		t.x = 42;
		t.y = 265;
		t.elementsContent = [this._Image68_i(),this._Label125_i(),this._Label126_i(),this._Label127_i(),this._Label128_i(),this._Label129_i()];
		return t;
	};
	_proto._Image68_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "atlas_mark_21";
		t.width = 20;
		t.x = 25;
		t.y = 13;
		return t;
	};
	_proto._Label125_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.size = 14;
		t.text = "命令";
		t.x = 57;
		t.y = 16;
		return t;
	};
	_proto._Label126_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_price";
		t.size = 14;
		t.text = "0.03 BNB";
		t.x = 150;
		t.y = 16;
		return t;
	};
	_proto._Label127_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_from";
		t.size = 14;
		t.text = "（地址：0x4f62b...25043）";
		t.x = 277;
		t.y = 16;
		return t;
	};
	_proto._Label128_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_to";
		t.size = 14;
		t.text = "（地址：0x4f62b...25043）";
		t.x = 501;
		t.y = 16;
		return t;
	};
	_proto._Label129_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_time";
		t.size = 14;
		t.text = "02:00:00";
		t.x = 726;
		t.y = 16;
		return t;
	};
	_proto.group_transaction_4_i = function () {
		var t = new eui.Group();
		this.group_transaction_4 = t;
		t.height = 46;
		t.width = 808;
		t.x = 42;
		t.y = 307;
		t.elementsContent = [this._Image69_i(),this._Label130_i(),this._Label131_i(),this._Label132_i(),this._Label133_i(),this._Label134_i()];
		return t;
	};
	_proto._Image69_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "atlas_mark_21";
		t.width = 20;
		t.x = 25;
		t.y = 13;
		return t;
	};
	_proto._Label130_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.size = 14;
		t.text = "命令";
		t.x = 57;
		t.y = 16;
		return t;
	};
	_proto._Label131_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_price";
		t.size = 14;
		t.text = "0.03 BNB";
		t.x = 150;
		t.y = 16;
		return t;
	};
	_proto._Label132_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_from";
		t.size = 14;
		t.text = "（地址：0x4f62b...25043）";
		t.x = 277;
		t.y = 16;
		return t;
	};
	_proto._Label133_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_to";
		t.size = 14;
		t.text = "（地址：0x4f62b...25043）";
		t.x = 501;
		t.y = 16;
		return t;
	};
	_proto._Label134_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_time";
		t.size = 14;
		t.text = "02:00:00";
		t.x = 726;
		t.y = 16;
		return t;
	};
	_proto.group_transaction_5_i = function () {
		var t = new eui.Group();
		this.group_transaction_5 = t;
		t.height = 46;
		t.width = 808;
		t.x = 42;
		t.y = 357;
		t.elementsContent = [this._Image70_i(),this._Label135_i(),this._Label136_i(),this._Label137_i(),this._Label138_i(),this._Label139_i()];
		return t;
	};
	_proto._Image70_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "atlas_mark_21";
		t.width = 20;
		t.x = 25;
		t.y = 13;
		return t;
	};
	_proto._Label135_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_name";
		t.size = 14;
		t.text = "命令";
		t.x = 57;
		t.y = 16;
		return t;
	};
	_proto._Label136_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_price";
		t.size = 14;
		t.text = "0.03 BNB";
		t.x = 150;
		t.y = 16;
		return t;
	};
	_proto._Label137_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_from";
		t.size = 14;
		t.text = "（地址：0x4f62b...25043）";
		t.x = 277;
		t.y = 16;
		return t;
	};
	_proto._Label138_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_to";
		t.size = 14;
		t.text = "（地址：0x4f62b...25043）";
		t.x = 501;
		t.y = 16;
		return t;
	};
	_proto._Label139_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.name = "label_time";
		t.size = 14;
		t.text = "02:00:00";
		t.x = 726;
		t.y = 16;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/pageturnui.exml'] = window.skins.GameUI = (function (_super) {
	__extends(GameUI, _super);
	function GameUI() {
		_super.call(this);
		this.skinParts = ["image_leftpage","group_page1","group_page2","group_page3","group_page4","group_page5","group_page6","group_page7","image_rightpage","group_zombie"];
		
		this.height = 80;
		this.width = 700;
		this.elementsContent = [this.group_zombie_i()];
	}
	var _proto = GameUI.prototype;

	_proto.group_zombie_i = function () {
		var t = new eui.Group();
		this.group_zombie = t;
		t.height = 80;
		t.visible = true;
		t.width = 420;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.image_leftpage_i(),this.group_page1_i(),this.group_page2_i(),this.group_page3_i(),this.group_page4_i(),this.group_page5_i(),this.group_page6_i(),this.group_page7_i(),this.image_rightpage_i()];
		return t;
	};
	_proto.image_leftpage_i = function () {
		var t = new eui.Image();
		this.image_leftpage = t;
		t.height = 30;
		t.source = "atlas_game_19";
		t.width = 30;
		t.x = 40;
		t.y = 23;
		return t;
	};
	_proto.group_page1_i = function () {
		var t = new eui.Group();
		this.group_page1 = t;
		t.height = 30;
		t.visible = true;
		t.width = 30;
		t.x = 80;
		t.y = 23;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.name = "image";
		t.source = "atlas_game_17";
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.name = "image_sele";
		t.source = "atlas_game_6";
		t.visible = true;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 15;
		t.horizontalCenter = 0;
		t.name = "label";
		t.size = 14;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 15;
		t.y = 9;
		return t;
	};
	_proto.group_page2_i = function () {
		var t = new eui.Group();
		this.group_page2 = t;
		t.height = 30;
		t.width = 30;
		t.x = 120;
		t.y = 23;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.name = "image";
		t.source = "atlas_game_17";
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.horizontalCenter = 0;
		t.name = "image_sele";
		t.source = "atlas_game_6";
		t.visible = true;
		t.width = 30;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 15;
		t.horizontalCenter = 0;
		t.name = "label";
		t.size = 14;
		t.text = "2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 15;
		t.y = 9;
		return t;
	};
	_proto.group_page3_i = function () {
		var t = new eui.Group();
		this.group_page3 = t;
		t.height = 30;
		t.width = 30;
		t.x = 160;
		t.y = 23;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.name = "image";
		t.source = "atlas_game_17";
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.name = "image_sele";
		t.source = "atlas_game_6";
		t.visible = true;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 15;
		t.horizontalCenter = 0;
		t.name = "label";
		t.size = 14;
		t.text = "2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 15;
		t.y = 9;
		return t;
	};
	_proto.group_page4_i = function () {
		var t = new eui.Group();
		this.group_page4 = t;
		t.height = 30;
		t.width = 30;
		t.x = 200;
		t.y = 23;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Label4_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.name = "image";
		t.source = "atlas_game_17";
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.name = "image_sele";
		t.source = "atlas_game_6";
		t.visible = true;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 15;
		t.horizontalCenter = 0;
		t.name = "label";
		t.size = 14;
		t.text = "2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 15;
		t.y = 9;
		return t;
	};
	_proto.group_page5_i = function () {
		var t = new eui.Group();
		this.group_page5 = t;
		t.height = 30;
		t.width = 30;
		t.x = 240;
		t.y = 23;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Label5_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.name = "image";
		t.source = "atlas_game_17";
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.name = "image_sele";
		t.source = "atlas_game_6";
		t.visible = true;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 15;
		t.horizontalCenter = 0;
		t.name = "label";
		t.size = 14;
		t.text = "2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 15;
		t.y = 9;
		return t;
	};
	_proto.group_page6_i = function () {
		var t = new eui.Group();
		this.group_page6 = t;
		t.height = 30;
		t.width = 30;
		t.x = 280;
		t.y = 23;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Label6_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.name = "image";
		t.source = "atlas_game_17";
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.name = "image_sele";
		t.source = "atlas_game_6";
		t.visible = true;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 15;
		t.horizontalCenter = 0;
		t.name = "label";
		t.size = 14;
		t.text = "1";
		t.textAlign = "center";
		t.width = 15;
		t.y = 9;
		return t;
	};
	_proto.group_page7_i = function () {
		var t = new eui.Group();
		this.group_page7 = t;
		t.height = 30;
		t.width = 30;
		t.x = 320;
		t.y = 23;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Label7_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.name = "image";
		t.source = "atlas_game_17";
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.name = "image_sele";
		t.source = "atlas_game_6";
		t.visible = true;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 15;
		t.horizontalCenter = 0;
		t.name = "label";
		t.size = 14;
		t.text = "2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 15;
		t.y = 9;
		return t;
	};
	_proto.image_rightpage_i = function () {
		var t = new eui.Image();
		this.image_rightpage = t;
		t.height = 30;
		t.source = "atlas_game_18";
		t.width = 30;
		t.x = 360;
		t.y = 23;
		return t;
	};
	return GameUI;
})(eui.Skin);generateEUI.paths['resource/ui/zombiefigureui.exml'] = window.skins.Gameui = (function (_super) {
	__extends(Gameui, _super);
	var Gameui$Skin51 = 	(function (_super) {
		__extends(Gameui$Skin51, _super);
		function Gameui$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Gameui$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_29";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Gameui$Skin51;
	})(eui.Skin);

	var Gameui$Skin52 = 	(function (_super) {
		__extends(Gameui$Skin52, _super);
		function Gameui$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Gameui$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_29";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Gameui$Skin52;
	})(eui.Skin);

	var Gameui$Skin53 = 	(function (_super) {
		__extends(Gameui$Skin53, _super);
		function Gameui$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Gameui$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_29";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Gameui$Skin53;
	})(eui.Skin);

	var Gameui$Skin54 = 	(function (_super) {
		__extends(Gameui$Skin54, _super);
		function Gameui$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Gameui$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_29";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Gameui$Skin54;
	})(eui.Skin);

	var Gameui$Skin55 = 	(function (_super) {
		__extends(Gameui$Skin55, _super);
		function Gameui$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Gameui$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_29";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Gameui$Skin55;
	})(eui.Skin);

	var Gameui$Skin56 = 	(function (_super) {
		__extends(Gameui$Skin56, _super);
		function Gameui$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Gameui$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "atlas_game_29";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Gameui$Skin56;
	})(eui.Skin);

	function Gameui() {
		_super.call(this);
		this.skinParts = ["image_head","image_eye","image_right_hand_1","image_shirt","image_left_hand_1","image_left_hand_2","image_right_hand_2","image_right_hand_3","image_left_hand_3","bitmapLabel_buff_num","group_hp","group_zombie","btn_head","btn_eye","btn_shirt","btn_head_color","btn_eye_color","btn_shirt_color"];
		
		this.height = 400;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.group_zombie_i(),this._Group1_i()];
	}
	var _proto = Gameui.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.4;
		t.height = 2400;
		t.visible = false;
		t.width = 20020;
		t.x = -2003.806;
		t.y = 9.96;
		return t;
	};
	_proto.group_zombie_i = function () {
		var t = new eui.Group();
		this.group_zombie = t;
		t.height = 400;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = true;
		t.width = 400;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.image_head_i(),this.image_eye_i(),this.image_right_hand_1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.image_shirt_i(),this.image_left_hand_1_i(),this.image_left_hand_2_i(),this.image_right_hand_2_i(),this.image_right_hand_3_i(),this.image_left_hand_3_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this.group_hp_i()];
		return t;
	};
	_proto.image_head_i = function () {
		var t = new eui.Image();
		this.image_head = t;
		t.height = 2001;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/assets/ui/figure/figure_head-2.png";
		t.visible = true;
		t.width = 2001;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_eye_i = function () {
		var t = new eui.Image();
		this.image_eye = t;
		t.height = 641;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/assets/ui/figure/figure_eyes-1.png";
		t.visible = true;
		t.width = 1001;
		t.x = 632;
		t.y = 786;
		return t;
	};
	_proto.image_right_hand_1_i = function () {
		var t = new eui.Image();
		this.image_right_hand_1 = t;
		t.height = 481;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/assets/ui/figure/figure_right-upper-arm-1.png";
		t.visible = true;
		t.width = 401;
		t.x = 785.636;
		t.y = 1517.858;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 361;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/assets/ui/figure/figure_right-leg-1.png";
		t.visible = true;
		t.width = 301;
		t.x = 451.612;
		t.y = 2296.834;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 481;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/assets/ui/figure/figure_left-thigh-1.png";
		t.visible = true;
		t.width = 401;
		t.x = 418.255;
		t.y = 2001.108;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 361;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/assets/ui/figure/figure_right-leg-1.png";
		t.visible = true;
		t.width = 301;
		t.x = 731.036;
		t.y = 2305.489;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 481;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/assets/ui/figure/figure_right-thigh-1.png";
		t.visible = true;
		t.width = 401;
		t.x = 665.638;
		t.y = 1971.351;
		return t;
	};
	_proto.image_shirt_i = function () {
		var t = new eui.Image();
		this.image_shirt = t;
		t.height = 801;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/assets/ui/figure/figure_shirt-2.png";
		t.visible = true;
		t.width = 801;
		t.x = 311.091;
		t.y = 1430.999;
		return t;
	};
	_proto.image_left_hand_1_i = function () {
		var t = new eui.Image();
		this.image_left_hand_1 = t;
		t.height = 481;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/assets/ui/figure/figure_left-upper-arm-1.png";
		t.visible = true;
		t.width = 401;
		t.x = 564.597;
		t.y = 1619.57;
		return t;
	};
	_proto.image_left_hand_2_i = function () {
		var t = new eui.Image();
		this.image_left_hand_2 = t;
		t.height = 221;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/assets/ui/figure/figure_left-forearm-1.png";
		t.visible = true;
		t.width = 401;
		t.x = 717.017;
		t.y = 1860.536;
		return t;
	};
	_proto.image_right_hand_2_i = function () {
		var t = new eui.Image();
		this.image_right_hand_2 = t;
		t.height = 221;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/assets/ui/figure/figure_right-forearm-1.png";
		t.visible = true;
		t.width = 401;
		t.x = 901.155;
		t.y = 1728.856;
		return t;
	};
	_proto.image_right_hand_3_i = function () {
		var t = new eui.Image();
		this.image_right_hand_3 = t;
		t.height = 221;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/assets/ui/figure/figure_right_hand.png";
		t.visible = true;
		t.width = 401;
		t.x = 1102.662;
		t.y = 1672.245;
		return t;
	};
	_proto.image_left_hand_3_i = function () {
		var t = new eui.Image();
		this.image_left_hand_3 = t;
		t.height = 221;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/assets/ui/figure/figure_left_hand.png";
		t.visible = true;
		t.width = 401;
		t.x = 914.97;
		t.y = 1807.958;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 241;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/assets/ui/figure/figure_left-feet.png";
		t.visible = true;
		t.width = 361;
		t.x = 441.565;
		t.y = 2546.673;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 241;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "resource/assets/ui/figure/figure_right-feet.png";
		t.visible = true;
		t.width = 382.645;
		t.x = 754.595;
		t.y = 2556.673;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 401;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "resource/assets/ui/figure/figure_mouth-1.png";
		t.visible = true;
		t.width = 501;
		t.x = 999;
		t.y = 1376.673;
		return t;
	};
	_proto.group_hp_i = function () {
		var t = new eui.Group();
		this.group_hp = t;
		t.height = 60;
		t.scaleX = 3.333333333333333;
		t.scaleY = 3.333333333333333;
		t.width = 300;
		t.x = 570;
		t.y = 86.66666666666674;
		t.elementsContent = [this.bitmapLabel_buff_num_i(),this._Image8_i()];
		return t;
	};
	_proto.bitmapLabel_buff_num_i = function () {
		var t = new eui.BitmapLabel();
		this.bitmapLabel_buff_num = t;
		t.font = "numberFont_fnt";
		t.height = 50;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "1213213";
		t.width = 240;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 8;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "atlas_game2_17";
		t.visible = true;
		t.width = 23;
		t.x = 20;
		t.y = 18;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 809.375;
		t.visible = false;
		t.width = 1595.833;
		t.x = 241.087;
		t.y = -9.502;
		t.elementsContent = [this.btn_head_i(),this.btn_eye_i(),this.btn_shirt_i(),this.btn_head_color_i(),this.btn_eye_color_i(),this.btn_shirt_color_i()];
		return t;
	};
	_proto.btn_head_i = function () {
		var t = new eui.Button();
		this.btn_head = t;
		t.label = "Head";
		t.x = 200;
		t.y = 243;
		t.skinName = Gameui$Skin51;
		return t;
	};
	_proto.btn_eye_i = function () {
		var t = new eui.Button();
		this.btn_eye = t;
		t.label = "Eye";
		t.x = 410.36;
		t.y = 243.996;
		t.skinName = Gameui$Skin52;
		return t;
	};
	_proto.btn_shirt_i = function () {
		var t = new eui.Button();
		this.btn_shirt = t;
		t.label = "Shirt";
		t.x = 613.966;
		t.y = 244.991;
		t.skinName = Gameui$Skin53;
		return t;
	};
	_proto.btn_head_color_i = function () {
		var t = new eui.Button();
		this.btn_head_color = t;
		t.label = "皮肤";
		t.x = 200;
		t.y = 153;
		t.skinName = Gameui$Skin54;
		return t;
	};
	_proto.btn_eye_color_i = function () {
		var t = new eui.Button();
		this.btn_eye_color = t;
		t.label = "Eye Color";
		t.x = 410.36;
		t.y = 153.996;
		t.skinName = Gameui$Skin55;
		return t;
	};
	_proto.btn_shirt_color_i = function () {
		var t = new eui.Button();
		this.btn_shirt_color = t;
		t.label = "Shirt Color";
		t.x = 613.966;
		t.y = 154.991;
		t.skinName = Gameui$Skin56;
		return t;
	};
	return Gameui;
})(eui.Skin);