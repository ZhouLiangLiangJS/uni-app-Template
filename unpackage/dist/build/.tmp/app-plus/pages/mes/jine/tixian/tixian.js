(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mes/jine/tixian/tixian"],{"04d0":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{qian:null,wx:!1,flag:!1,img:null,upData:null}},onLoad:function(){},methods:{tixian:function(){this.qian>0?this.flag=!this.flag:e.showToast({title:"请正确输入提现金额",icon:"none"})},xiayibu:function(){var t=this;e.showLoading({title:"发起提现中..",mask:!0}),e.request({url:t.url1+"/dinghai/user/WithdrawalsMoney",header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{uid:t.user.uid,money:t.qian},success:function(i){console.log(n(i," at pages\\mes\\jine\\tixian\\tixian.vue:75")),200==i.data.flag?e.request({url:t.url1+"/dinghai/user/insertWithdrawals",header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{withdrawalsmoney:t.qian,uid:t.user.uid,withdrawalsimg:"https://api.laotiele.com:9527/image/"+t.upData},success:function(i){console.log(n(i," at pages\\mes\\jine\\tixian\\tixian.vue:89")),200==i.statusCode?(e.showToast({title:"已发起提现，客服会在24小时处理",icon:"none"}),t.wx=!1,t.flag=!1):e.showToast({title:"您的网络打了个盹",icon:"none"})},fail:function(t){e.showToast({title:"您的网络打了个盹",icon:"none"})}}):e.showToast({title:"请正确输入提现金额",icon:"none"})},fail:function(t){e.showToast({title:"您的网络打了个盹",icon:"none"})}})},wxCJ:function(){this.wx=!0},back:function(){e.navigateBack({})},tjewm:function(){var t=this;e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(i){console.log(n(i.tempFilePaths,i," at pages\\mes\\jine\\tixian\\tixian.vue:146"));var a=i;if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(i.tempFilePaths[0])){e.showLoading({title:"正在上传中.."});var o=e.uploadFile({url:t.url1+"/dinghai/Img/Img",filePath:a.tempFilePaths[0],name:"files",fileType:"image",success:function(n){200===n.statusCode?(t.img=a.tempFilePaths[0],t.upData=n.data,e.showToast({title:"上传成功"})):e.showToast({title:"上传图片失败请重试",icon:"none"})}});o.onProgressUpdate(function(e){console.log(n("上传进度"+e.progress," at pages\\mes\\jine\\tixian\\tixian.vue:173")),console.log(n("已经上传的数据长度"+e.totalBytesSent," at pages\\mes\\jine\\tixian\\tixian.vue:174")),console.log(n("预期需要上传的数据总长度"+e.totalBytesExpectedToSend," at pages\\mes\\jine\\tixian\\tixian.vue:175"))})}else e.showToast({icon:"none",title:"上传格式错误！请上传jpg，jpeg，png格式的图片"})}})}}};t.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},"1d68":function(e,t,n){"use strict";(function(e){n("c01b"),n("921b");i(n("66fd"));var t=i(n("682f"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"682f":function(e,t,n){"use strict";n.r(t);var i=n("f689"),a=n("d7d7");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("eb7e");var s=n("2877"),u=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},c153:function(e,t,n){},d7d7:function(e,t,n){"use strict";n.r(t);var i=n("04d0"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},eb7e:function(e,t,n){"use strict";var i=n("c153"),a=n.n(i);a.a},f689:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.wx=!e.wx},e.e1=function(t){e.flag=!e.flag})},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})}},[["1d68","common/runtime","common/vendor"]]]);