(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/getTask/getTask"],{"25b6":function(e,t,o){"use strict";(function(e){o("c01b"),o("921b");n(o("66fd"));var t=n(o("aadd"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"2b7f":function(e,t,o){"use strict";var n=o("8a92"),a=o.n(n);a.a},"35a9":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{price:void 0,remarks:void 0,workContent:void 0,dtype:void 0,workDate:void 0,startdate:void 0,tel:void 0,adress:void 0,people:1,coninput:"",person:"",judgepage:1,judgehava:!0,typegroup:[{name:"开始抢单",judge:!0},{name:"发布抢单",judge:!1}],qdlist:[],hy:this.huiYuan111}},onLoad:function(){},onShow:function(){this.getRenGong(),this.time1()},onPullDownRefresh:function(){this.getRenGong()},methods:{time1:function(){var t=this,o=t.url1+"/dinghai/user/selectAll";e.showLoading({mask:!0,title:"正在加载"}),e.request({url:o,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{uid:t.user.uid},success:function(o){e.showToast({title:"加载成功"}),console.log(o),500!=o.data.flag?(t.setTime1(o.data.aa.rolestart+o.data.aa.roletime),t.setTime2(o.data.flag),t.setHuiyuan(o.data.aa.rolestart+o.data.aa.roletime>=o.data.flag),t.hy=o.data.aa.rolestart+o.data.aa.roletime>=o.data.flag):t.setHuiyuan(!1)},fail:function(t){e.showToast({title:"服务器错误",icon:"none"})}})},qiangDan:function(t){if("未登录"==this.user)e.navigateTo({url:"../login/index/index"});else if(console.log(this.hy),this.hy){var o=this;console.log(o.qdlist[t].id);var n=o.url1+"/dinghai/order/insertWorkOrder";e.showLoading({mask:!0,title:"正在抢单"}),e.request({url:n,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{id:o.qdlist[t].id,useruid:o.user.uid,utel:o.user.tel,wuid:o.qdlist[t].useruid},success:function(t){200==t.statusCode?e.navigateTo({url:"../mes/gongdan/yiqiangdan/yiqiangdan"}):e.showToast({title:"网络错误",icon:"none"})},fail:function(t){e.showToast({title:"网络错误",icon:"none"})}})}else e.showModal({fail:function(){},success:function(t){console.log(t),t.confirm&&e.navigateTo({url:"../mes/huiyuan/huiyuan"})},content:"工人会员才可以抢单哦！确定要需要充值会员吗？",title:"温馨提示"})},swtich:function(e){for(var t=0;t<this.typegroup.length;t++)this.typegroup[t].judge=!1;this.typegroup[e].judge=!0,this.judgepage=e+1},getRenGong:function(){var t=this,o=this,n=o.url1+"/dinghai/order/selectAllOrder";e.showLoading({mask:!0,title:"正在加载"}),e.request({url:n,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{},success:function(o){e.showToast({title:"加载成功"}),t.qdlist=o.data.flag,console.log(t.qdlist),e.stopPullDownRefresh()},fail:function(t){e.showToast({title:"服务器错误",icon:"none"}),e.stopPullDownRefresh()}})},release:function(){if("未登录"==this.user)e.navigateTo({url:"../login/index/index"});else{e.showLoading({mask:!0,title:"正在加载"}),console.log(this.people,"=====",this.price);var t=this;void 0!=this.remarks&&void 0!=this.price&&void 0!=this.people&&void 0!=this.adress&&void 0!=this.tel&&void 0!=this.startdate&&void 0!=this.workDate&&void 0!=this.dtype&&void 0!=this.workContent?e.request({url:t.url1+"/dinghai/order/insertOrder",header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{remarks:t.remarks,price:t.price,people:t.people,adress:t.adress,tel:t.tel,startdate:t.startdate,workDate:t.workDate,type:t.dtype,workContent:t.workContent,useruid:t.user.uid},success:function(o,n){200===o.statusCode?(e.showToast({title:"发布成功",icon:"success"}),e.navigateTo({url:"../mes/gongdan/zhaogongzhong/zhaogongzhong"}),t.price="",t.remarks="",t.workContent="",t.dtype="",t.workDate="",t.startdate="",t.tel="",t.adress="",console.log(o),t.judgepage=1,t.typegroup=[{name:"开始抢单",judge:!0},{name:"发布抢单",judge:!1}],t.getRenGong()):(e.showToast({title:"您的网络打了个盹！请稍后再试",icon:"none"}),console.log(n))},fail:function(t){e.showToast({title:"发布失败，服务器错误",icon:"none"}),console.log(t)}}):e.showToast({title:"请完整的填写您的信息和内容",icon:"none"})}console.log()}}};t.default=o}).call(this,o("543d")["default"])},"397d":function(e,t,o){"use strict";o.r(t);var n=o("35a9"),a=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);t["default"]=a.a},"8a92":function(e,t,o){},"8fbc":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},aadd:function(e,t,o){"use strict";o.r(t);var n=o("8fbc"),a=o("397d");for(var i in a)"default"!==i&&function(e){o.d(t,e,function(){return a[e]})}(i);o("2b7f");var s=o("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports}},[["25b6","common/runtime","common/vendor"]]]);