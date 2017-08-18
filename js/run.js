define(function(require,exports) {//dedine闭包
	var liData=require("./liData.js");
	var fun=require("./qkyFunH5.js");
	var qkyselect=require("./qkySelect.js");
	var thisDate = new Date();
	var y=thisDate.getFullYear();
	var m=thisDate.getMonth()+1;
	var d=thisDate.getDate();
	var h=thisDate.getHours();
    var ms=thisDate.getMinutes();
    var s=thisDate.getSeconds();
	/*重装时间下拉数据*/
		for(var i=0;i<liData.timePush.length;i++){
			forPush(liData.timePush[i][0],liData.timePush[i][1],liData.timePush[i][2],liData.timePush[i][3],liData.carTime.values)
		}
		function forPush(mi,mx,ing,si,v){
			for(var i=mi;i<mx;i++){
				if(i<10) i="0"+i;
				v[ing].push(i+si);	
			}
		}
		liData.carTime.valuesActive=[y-2010,m-1,d-1,h-1,ms-1];//默认显示当前年月日时分
	/*重装时间下拉数据*/
	
	exports.runLi=function(){
		$(".qkyh5_header").qkySelect();
		fun.xrLi(liData.liData,$(".pageOne"));
		fun.xrcarLi(liData.carLiData,$(".pageTwo"));
		fun.xrmanLi(liData.manLiData,$(".pageFour"));
		fun.qkyh5_navclick();
		$(".qkyh5_footbg .qkyh5_barnav a").click(function(){
			$(".qkyh5_header").html("");
			if($(this).attr("isgo")=="pageOne") $(".qkyh5_header").qkySelect();
			else fun.navDraw();
		})
	}
	
	exports.runUsecar=function(){
		$("#caPlate").qkySelect(liData.caPlate);//给数据给车牌下拉
		$("#carTime").qkySelect(liData.carTime);
		$(".qkyli .qsv-i").html("&#xe67a;");
		$("#save").click(function(){
			fun.popup("提交成功",$(".qkyh5_main,.qkyh5_footbg"),"index.html");
		});
	}
	
	
	exports.runCont=function(){
		var xrId=Number(fun.getUrl("id"));
		(xrId == "" || xrId == undefined || xrId == null) ? 0 : xrId;
		var operate=Number(fun.getUrl("operate"));
		(operate == "" || operate == undefined || operate == null) ? 0 : operate;
		fun.xrCont(liData.liData[xrId],$(".qkyh5_main"));
		if(operate=="1"){
			$(".qkyh5_footbg").removeClass("yc");
			if(liData.liData[xrId].Button.name=="审批")$("#shengpi").removeClass("yc");
			if(liData.liData[xrId].Button.name=="调整")$("#tiaozheng").removeClass("yc");
		}
		
		$("#driver").qkySelect(liData.driver);//给数据给车牌下拉
		$("#carTime").qkySelect(liData.carTime);
		$(".qkyli .qsv-i").html("&#xe67a;");
		$(".qkyli_page").removeClass("open");
		fun.qkyli_but();
		
		$("#save").click(function(){
			fun.popup("提交成功",$(".qkyh5_main,.qkyh5_footbg"),"index.html");
		});
	}
	
	
	
	 
});