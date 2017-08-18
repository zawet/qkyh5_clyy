// JavaScript Document
define({//dedine闭包
 liData:[
{   
	id:"0",
	useCarMan:["关瑞荣","用车人员"],
	caPlate:["粤T56789","申请车牌"],
	useDay:["3天","估计用时"],
	Stime:["2016-08-01 15:00",""],
	useTime:["2016-08-01 15:00","用车时间"],
	carManS:["3人","随车人数"],
	address:["中山纪念中学","目的地址"],
	useThing:["进校拜访","用车事由"],
	useOther:["归期未定","用车备注"],
	carState:{name:["审批中","评审状态"],color:"but_ye",isend:false},
	think:[],
	Button:{show:true,name:"审批",href:"index_info.html?id=0&&operate=1",id:""}
},
{	
	id:"1",
	useCarMan:["关瑞荣","用车人员"],
	caPlate:["粤T56789","申请车牌"],
	useDay:["3天","估计用时"],
	Stime:["2016-08-01 15:00",""],
	useTime:["2016-08-01 15:00","用车时间"],
	carManS:["3人","随车人数"],
	address:["中山纪念中学","目的地址"],
	useThing:["进校拜访","用车事由"],
	useOther:["归期未定","用车备注"],
	carState:{name:["已通过","评审状态"],color:"but_gr",isend:false},
	think:[],
	Button:{show:true,name:"调整",href:"index_info.html?id=1&&operate=1",id:""}
},
{  
	id:"2",
	useCarMan:["关瑞荣","用车人员"],
	caPlate:["粤T56789","申请车牌"],
	useDay:["3天","估计用时"],
	Stime:["2016-08-01 15:00",""],
	useTime:["2016-08-01 15:00","用车时间"],
	carManS:["3人","随车人数"],
	address:["中山纪念中学","目的地址"],
	useThing:["进校拜访","用车事由"],
	useOther:["归期未定","用车备注"],
	carState:{name:["未通过","评审状态"],color:"ba_red",isend:true},
	think:["时间排期冲突","回退理由"],
	Button:{show:false,name:"",href:"",id:""}
},
{   
	id:"3",
	useCarMan:["关瑞荣","用车人员"],
	caPlate:["粤T56789","申请车牌"],
	useDay:["3天","估计用时"],
	Stime:["2016-08-01 15:00",""],
	useTime:["2016-08-01 15:00","用车时间"],
	carManS:["3人","随车人数"],
	address:["中山纪念中学","目的地址"],
	useThing:["进校拜访","用车事由"],
	useOther:["归期未定","用车备注"],
	carState:{name:["撤销","评审状态"],color:"ba_red",isend:true},
	think:["车辆维修","回退理由"],
	Button:{show:false,name:"",href:"",id:""}
}
],
carLiData:[
	{
		carName:"雪佛兰 科迈罗",
		carColor:"黑色",
		carPlate:"粤T56789",
		carSeat:"5",
		carBearing:"500kg",
		carImg:"images/kwl.png",
		carState:{name:["可用","车辆状态"],color:"ba_gr",isend:true},
		Button:{show:true,name:"申请用车",href:"index_usecar.html",id:""}
	},
	{
		carName:"马自达 昂克赛拉",
		carColor:"红色",
		carPlate:"粤T56789",
		carSeat:"5",
		carBearing:"500kg",
		carImg:"images/aksl.png",
		carState:{name:["出车中","车辆状态"],color:"ba_ye",isend:true},
		Button:{show:false,name:"申请用车",href:"index_usecar.html",id:""}
	},
	{
		carName:"东风 雪铁龙",
		carColor:"蓝色",
		carPlate:"粤T56789",
		carSeat:"5",
		carBearing:"500kg",
		carImg:"images/xtl.png",
		carState:{name:["维修中","车辆状态"],color:"ba_red",isend:true},
		Button:{show:false,name:"申请用车",href:"index_usecar.html",id:""}
	},
	{
		carName:"东风 雪铁龙",
		carColor:"蓝色",
		carPlate:"粤T56789",
		carSeat:"5",
		carBearing:"500kg",
		carImg:"",
		carState:{name:["维修中","车辆状态"],color:"ba_red",isend:true},
		Button:{show:false,name:"申请用车",href:"index_usecar.html",id:""}
	}
],
manLiData:[
	{
		manName:"王师傅",
		manIsOut:"粤T0001",
		manType:"C1",
		manTx:"images/timg.jpg",
		manState:{name:["出车中","人员状态"],color:"ba_ye",isend:false},
	},
	{
		manName:"刘师傅",
		manIsOut:"待出发",
		manType:"C1",
		manTx:"",
		manState:{name:["空闲中","人员状态"],color:"ba_gr",isend:false},
	},
	{
		manName:"梁师傅",
		manIsOut:"待出发",
		manType:"C1",
		manTx:"",
		manState:{name:["空闲中","人员状态"],color:"ba_gr",isend:false},
	}
],

caPlate:{
	blurId:".unb",
	values:[
		["粤T0001","粤T0002","粤T0003","粤T0004","粤T0005"]
	],
	valuesActive:[0]
},
driver:{
	blurId:"",
	values:[
		["王师傅","刘师傅","廖师傅","梁师傅","李师傅"]
	],
	valuesActive:[0]
},
carTime:{
	blurId:".unb",
	values:[[],[],[],[],[]],
	valuesActive:[]
},
timePush:[[2010,2021,0,"年"],[1,13,1,"月"],[1,32,2,"日 "],[1,60,3,":"],[1,60,4,""]]//日期时分的循环条件参数，（最小值，最大值，数据放置位置，单位)

		
});