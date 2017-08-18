
define(function(require,exports) {//dedine闭包
	var sw=require("./swiper-3.3.1.min.js");
	var fun=require("./qkyFunH5.js");
	
   
	var opt={
		values:[
		["全部","审批中","已通过","未通过","撤销"]
		],
		valuesActive:[0],//选项第几个为活动项
		showMask:true,
		showBut:true,
		Box:"",
		blurId:".qkyh5_main",
		vBox:".qky-select-value",
		swBox:".qso-swbox",
		oBox:".qky-select-optionbox",
		maskBox:".qky-select-mask",
		html:
		'<div class="qky-select">'+
			'<div class="qky-select-value">'+
				'<label class="qsv-label"></label>'+
				'<i class="qsv-i qkyicon">&#xe66f;</i>'+
			'</div>'+
			'<div class="qky-select-mask"></div>'+
			'<div class="qky-select-optionbox">'+
				'<div class="qso-center"></div>'+
				'<div class="qso-swbox qsClear"></div>'+
				'<div class="qso-but">确定</div>'+
			'</div>'+
		'</div>'
	}
	
	
	$.fn.extend({
		"qkySelect": function (options) {
			if (!isValid(options)) return this;
			var opts = $.extend({}, opt, options);
			return this.each(function (i) {
					$(this).html(opts.html)
					opts.Box=$(this);
					opts.swBox=$(this).find(opts.swBox);
					opts.vBox=$(this).find(opts.vBox);
					opts.oBox=$(this).find(opts.oBox);
					opts.maskBox=$(this).find(opts.maskBox);
					
					qsDraw(opts)//渲染下拉选项
					qsSwExample(opts)//循环实例滚动sw机制
					qsInteract(opts)//展开交互
				});	
					
		}
			
	});
	
	function qsDraw(op){
		for(var i=0;i<op.values.length;i++){
			var swcWidth=(100/op.values.length);
			op.vBox.find(".qsv-label").append('<span class="qsv-value value'+i+'">'+op.values[i][0]+'</span>');
			op.swBox.append('<div class="swiper-container" id="'+op.Box.attr("id")+'options'+i+'" style="width:'+swcWidth+'%"><div class="swiper-wrapper"></div></div>')
			for(var j=0;j<op.values[i].length;j++){
				op.Box.find("#"+op.Box.attr("id")+"options"+i+" .swiper-wrapper").append("<div class='swiper-slide'><a class='option'>"+op.values[i][j]+"</a></div>");
			}
		}
	}
	
	function qsSwExample(op){
		op.swBox.find(".swiper-container").each(function(sc) {
			var act=op.valuesActive[sc];
			var thisSc=$(this).attr("id");
			var sw=[];//缓存众多sw的实例
			sw[sc] = new Swiper('#'+thisSc, {
				direction: 'vertical',
				loop : true,
				slidesPerView :3,
				initialSlide:act,
				centeredSlides : true,
				onSlideChangeEnd: function(){
					op.Box.find(".value"+sc).html($("#"+thisSc+" .swiper-slide-active a").html());
				}
			});
			
		});
	}
	
	function qsInteract(op){
		op.vBox.click(function(){
			$(this).parent().find(opt.oBox).toggleClass("open");
			$(op.blurId).toggleClass("blur");
			if(op.showMask)op.maskBox.show();
		});
				
		/***以为区域点击 s**/
		$(document).not($(opt.vBox)).click(function(){
			op.oBox.removeClass("open");
			$(op.blurId).removeClass("blur");
			op.maskBox.hide();
		});
		$(document).not($(opt.oBox)).click(function(){
			op.oBox.removeClass("open");
			$(op.blurId).removeClass("blur");
			op.maskBox.hide();
		});
		/*防止事件冒泡*/
		op.vBox.click(function(event){
			event.stopPropagation();
		});
		op.oBox.click(function(event){
			event.stopPropagation();
		});
		
		$(".qso-but").click(function(){
			op.oBox.removeClass("open");
			$(op.blurId).removeClass("blur");
			op.maskBox.hide();
		})		
	}

	//私有方法，检测参数是否合法
	function isValid(options) {
	   return !options || (options && typeof options === "object") ? true : false;
	}	
});