(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/getTask/getTask"],{"25b6":function(e,t,o){"use strict";(function(e){o("c01b"),o("921b");n(o("66fd"));var t=n(o("aadd"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},"2b7f":function(e,t,o){"use strict";var n=o("8a92"),a=o.n(n);a.a},"35a9":function(e,t,o){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{price:void 0,remarks:void 0,workContent:void 0,dtype:void 0,workDate:void 0,startdate:void 0,tel:void 0,adress:void 0,people:1,coninput:"",person:"",judgepage:1,judgehava:!0,typegroup:[{name:"开始抢单",judge:!0},{name:"发布抢单",judge:!1}],qdlist:[],hy:this.huiYuan111}},onLoad:function(){},onShow:function(){this.getRenGong()},onPullDownRefresh:function(){this.getRenGong()},methods:{qiangDan:function(t){if("未登录"==this.user)e.navigateTo({url:"../login/index/index"});else if(this.hy){var n=this;console.log(o(n.qdlist[t].id," at pages\\getTask\\getTask.vue:141"));var a=n.url1+"/dinghai/order/insertWorkOrder";e.showLoading({mask:!0,title:"正在抢单"}),e.request({url:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{id:n.qdlist[t].id,useruid:n.user.uid},success:function(t){200==t.statusCode?e.navigateTo({url:"../mes/gongdan/yiqiangdan/yiqiangdan"}):e.showToast({title:"网络错误",icon:"none"})},fail:function(t){e.showToast({title:"网络错误",icon:"none"})}})}else e.showModal({fail:function(){},success:function(t){console.log(o(t," at pages\\getTask\\getTask.vue:179")),t.confirm&&e.navigateTo({url:"../mes/huiyuan/huiyuan"})},content:"工人会员才可以抢单哦！确定要需要充值会员吗？",title:"温馨提示"})},swtich:function(e){for(var t=0;t<this.typegroup.length;t++)this.typegroup[t].judge=!1;this.typegroup[e].judge=!0,this.judgepage=e+1},getRenGong:function(){var t=this,n=this,a=n.url1+"/dinghai/order/selectAllOrder";e.showLoading({mask:!0,title:"正在加载"}),e.request({url:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{},success:function(n){e.showToast({title:"加载成功"}),t.qdlist=n.data.flag,console.log(o(t.qdlist," at pages\\getTask\\getTask.vue:220")),e.stopPullDownRefresh()},fail:function(t){e.showToast({title:"服务器错误",icon:"none"}),e.stopPullDownRefresh()}})},release:function(){if("未登录"==this.user)e.navigateTo({url:"../login/index/index"});else{e.showLoading({mask:!0,title:"正在加载"}),console.log(o(this.people,"=====",this.price," at pages\\getTask\\getTask.vue:240"));var t=this;void 0!=this.remarks&&void 0!=this.price&&void 0!=this.people&&void 0!=this.adress&&void 0!=this.tel&&void 0!=this.startdate&&void 0!=this.workDate&&void 0!=this.dtype&&void 0!=this.workContent?e.request({url:t.url1+"/dinghai/order/insertOrder",header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{remarks:t.remarks,price:t.price,people:t.people,adress:t.adress,tel:t.tel,startdate:t.startdate,workDate:t.workDate,type:t.dtype,workContent:t.workContent,useruid:t.user.uid},success:function(n,a){200===n.statusCode?(e.showToast({title:"发布成功",icon:"success"}),e.navigateTo({url:"../mes/gongdan/zhaogongzhong/zhaogongzhong"}),t.price="",t.remarks="",t.workContent="",t.dtype="",t.workDate="",t.startdate="",t.tel="",t.adress="",console.log(o(n," at pages\\getTask\\getTask.vue:279")),t.judgepage=1,t.typegroup=[{name:"开始抢单",judge:!0},{name:"发布抢单",judge:!1}],t.getRenGong()):(e.showToast({title:"您的网络打了个盹！请稍后再试",icon:"none"}),console.log(o(a," at pages\\getTask\\getTask.vue:292")))},fail:function(t){e.showToast({title:"发布失败，服务器错误",icon:"none"}),console.log(o(t," at pages\\getTask\\getTask.vue:300"))}}):e.showToast({title:"请完整的填写您的信息和内容",icon:"none"})}console.log(o(" at pages\\getTask\\getTask.vue:310"))}}};t.default=n}).call(this,o("6e42")["default"],o("0de9")["default"])},"397d":function(e,t,o){"use strict";o.r(t);var n=o("35a9"),a=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},"8a92":function(e,t,o){},aadd:function(e,t,o){"use strict";o.r(t);var n=o("e6ac"),a=o("397d");for(var s in a)"default"!==s&&function(e){o.d(t,e,function(){return a[e]})}(s);o("2b7f");var i=o("2877"),r=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports},e6ac:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})}},[["25b6","common/runtime","common/vendor"]]]);