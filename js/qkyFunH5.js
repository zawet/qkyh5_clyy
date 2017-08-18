

define(function(require,exports) {//dedine闭包


$(".qky_swich").click(function(){
	$(this).toggleClass("on");
});

//移动端导航点击样式变换
exports.qkyh5_navclick=function (){
	$(".qkybody").on("click",".qkyh5_barnav a",function(){
			$(this).addClass("cur").siblings().removeClass("cur");
			$(".page").removeClass("open");
			$("."+$(this).attr("isgo")).addClass("open");
		}
	);


}

 exports.qkyli_but=function(){
		$(".qkyli_but").click(function(){
			var opens=$(this).attr("opens");
			$(this).addClass("active").siblings().removeClass("active");
			$(".qkyli_page").removeClass("open");
			$(".qkyli_page."+opens).addClass("open");
		});
	}

//自动变化以头部的距离，i为想离头部有多远，可以负数
exports.qkyh5_topa_header=function (i,jq){
	if(jq==1){
	var titHeight = $('.qkyh5_header').height()+i;
	}else{
	var titHeight = $('.qkyh5_header').offset().height+i;}
	//console.log(titHeight);
	$(".qkyh5_main").css({"paddingTop":titHeight+"px"});
}



exports.xrLi=function (Mdata,xrId){
	exports.htmlajax("./mould/limould.html",function(mouldHtml){//ajax异步过来html
		$("body").append('<div class="yc" id="li_mould"></div>');//创建一个缓存id
		$("#li_mould").html(mouldHtml);//把异步过来的html加到缓存id
		
		var myHtml=allHtml="";
		var m=$("#li_mould");
		
		for(var i=0;i<Mdata.length;i++){
			for(var key in Mdata[i]){
				if(key=="carState"){m.find(".carStateName").addClass(Mdata[i].carState.color).html(Mdata[i].carState.name[0]);}
				else{m.find("."+key).html(Mdata[i][key][0]);}	
			}
			if(Mdata[i].Button.show){
				m.find(".isok").removeClass("yc").html(Mdata[i].Button.name).attr("id",Mdata[i].Button.id).attr("href",Mdata[i].Button.href)
			}
			if(Mdata[i].carState.isend){
				m.find(".cg_li").addClass("isend");
			}
			m.find(".cg_li").attr("id",i);
			
			myHtml+=m.html();
			m.find(".carStateName").removeClass(Mdata[i].carState.color);
			m.find(".isok").addClass("yc");
			m.find(".cg_li").removeClass("isend");	
		}
		xrId.html(myHtml);
		m.remove();//利用完的模板暂存id去除
		
		$(".cg_li").not($(".isok")).click(function(){
			window.location.href="index_info.html?id="+$(this).attr("id")+"&&operate=0";
		});
		$(".isok").click(function(event){
			event.stopPropagation();
		});	
	
	});
}
exports.xrcarLi=function (Mdata,xrId){
	exports.htmlajax("./mould/carlimould.html",function(mouldHtml){//ajax异步过来html
		$("body").append('<div class="yc" id="carli_mould"></div>');//创建一个缓存id
		$("#carli_mould").html(mouldHtml);//把异步过来的html加到缓存id
		
		var myHtml=allHtml="";
		var m=$("#carli_mould");
		
		for(var i=0;i<Mdata.length;i++){
			for(var key in Mdata[i]){
				if(key=="carState"){
					m.find(".carStateName").addClass(Mdata[i].carState.color).html(Mdata[i].carState.name[0]);
				}else if(key=="carImg"){
					if(exports.isNull(Mdata[i][key])!="kong") m.find(".carImg img").attr("src",Mdata[i][key]);
					else m.find(".carImg img").attr("src","images/carImg.png");
				}else{
					m.find("."+key).html(Mdata[i][key]);
				}	
			}
			if(Mdata[i].Button.show){
				m.find(".isok").removeClass("yc").html(Mdata[i].Button.name).attr("id",Mdata[i].Button.id).attr("href",Mdata[i].Button.href)
			}	
			myHtml+=m.html();
			m.find(".carStateName").removeClass(Mdata[i].carState.color);
			m.find(".isok").addClass("yc");
		}
		xrId.html(myHtml);
		m.remove();//利用完的模板暂存id去除
	});
}
exports.xrmanLi=function (Mdata,xrId){
	exports.htmlajax("./mould/manlimould.html",function(mouldHtml){//ajax异步过来html
		$("body").append('<div class="yc" id="manli_mould"></div>');//创建一个缓存id
		$("#manli_mould").html(mouldHtml);//把异步过来的html加到缓存id
		
		var myHtml=allHtml="";
		var m=$("#manli_mould");
		
		for(var i=0;i<Mdata.length;i++){
			for(var key in Mdata[i]){
				if(key=="manState"){
					m.find(".manStateName").addClass(Mdata[i].manState.color).html(Mdata[i].manState.name[0]);
				}else if(key=="manTx"){
					if(exports.isNull(Mdata[i][key])!="kong") m.find(".manTx").html('<img src="'+Mdata[i][key]+'">');
					else m.find(".manTx").html('<i class="appicon fz_40 co_z9">&#xe631;</i>');
				}else{
					m.find("."+key).html(Mdata[i][key]);
				}	
			}
			myHtml+=m.html();
			m.find(".manStateName").removeClass(Mdata[i].manState.color);
		}
		xrId.html(myHtml);
		m.remove();//利用完的模板暂存id去除
	});
}

exports.xrCont=function (CData,xrId){
	var cm=$("#contMould");
	var noDawr=["id","Button","Stime","think"];
	var cmHtml="";
	for(var key in CData){
		if(CData[key].isend) noDawr.splice(3,1);
		if($.inArray(key,noDawr)==-1){
			if(key=="carState"){
				cm.find(".qkyli_tit").html(CData[key].name[1]);
				cm.find(".qkyli_cont").html('<a class="qkybut hbg '+CData[key].color+' fz_12 li_he20 brra_4 cur">'+CData[key].name[0]+'</a>');
			}else{
				cm.find(".qkyli_tit").html(CData[key][1]);
				cm.find(".qkyli_cont").html(CData[key][0]);	
			}
			cmHtml+=cm.html();
			
		}
	}
	xrId.prepend(cmHtml);
}

exports.htmlajax=function(url,sucfun){
		var urlhtml="";
		$.ajax({
		  url: url,
		  cache: false,
		  success: function(html){
			 sucfun(html);
		  }
		});	
}

exports.getUrl=function(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
}
exports.isNull=function (data){ 
    	return (data == "" || data == undefined || data == null) ? "kong" : data; 
	}
	
exports.popup=function (string,blurId,href){
	$("body").append('<div class="qkyh5_popup bshw3">'+string+'</div>');
	blurId.addClass("blur");
	
	setTimeout(function(){
		$(".qkyh5_popup").hide().remove();
		blurId.removeClass("blur");
		window.location.href=href;
	},2000);
}
	
exports.navDraw=function (options){
	var opts={
		data:[
		{text:"车辆",icon:["",false],active:"cur",isgo:"pageTwo"},
		{text:"驾驶员",icon:["",false],active:"",isgo:"pageFour"},
		],
		navDrawId:".qkyh5_header"
	};
	opts = $.extend({}, opts, options);
	
	var navHtml='<div class="yc" id="navMould"><div class="qkyh5_barnav ub ub-ac"></div></div>';
	$("body").append(navHtml);
	
	var nm=$("#navMould");
	var nlHtml="";
	for(var i=0;i<opts.data.length;i++){
		if(opts.data[i].icon[1])
		nlHtml='<a class="ub-f1 nav_li '+opts.data[i].active+'" isgo="'+opts.data[i].isgo+'"><i class="appicon mr4 fz_20">'+opts.data[i].icon[0]+'</i>'+opts.data[i].text+'</a>';
		else
		nlHtml='<a class="ub-f1 nav_li '+opts.data[i].active+'" isgo="'+opts.data[i].isgo+'">'+opts.data[i].text+'</a>';
		nm.find(".qkyh5_barnav").append(nlHtml);
	}
	$(opts.navDrawId).html(nm.html());
	nm.remove();
	
}

	

});