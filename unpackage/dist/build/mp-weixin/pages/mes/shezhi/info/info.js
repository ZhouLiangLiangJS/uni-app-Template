(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mes/shezhi/info/info"],{"649b":function(e,t,o){"use strict";o.r(t);var n=o("f34d"),s=o("ffaf");for(var a in s)"default"!==a&&function(e){o.d(t,e,function(){return s[e]})}(a);o("b9ec");var i=o("2877"),l=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=l.exports},"997d":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{useUser:this.user,url:this.url1}},onLoad:function(){},onShow:function(){},methods:{back:function(){e.navigateBack({})},xgnc:function(){e.navigateTo({url:"xgnicheng/xgnicheng?name="+this.useUser.name})},gotel:function(){e.navigateTo({url:"xgtel/xgtel?tel="+this.tel})},replacetx:function(){var t=this;e.showActionSheet({itemList:["从相册中选择头像","拍照"],success:function(o){var n=o.tapIndex;0==n?(e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(o){console.log(o.tempFilePaths[0]),console.log(o.tempFilePaths,o);var n=o;if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(o.tempFilePaths[0])){var s=e.uploadFile({url:t.url1+"/dinghai/Img/Img",filePath:n.tempFilePaths[0],name:"files",fileType:"image",success:function(o){200===o.statusCode?(e.showLoading({title:"正在修改头像",mask:!0}),console.log(o.data),e.request({url:t.url1+"/dinghai/user/selectUser",header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{uid:t.useUser.uid,imgage:t.url1+"/image/"+o.data},success:function(n){console.log(n),e.showToast({title:"修改成功"});var s=t.useUser;s.imgage=t.url1+"/image/"+o.data,t.setUser(s)},fail:function(t){console.log(t),e.showToast({title:"您的网络打了个盹",icon:"none"})}})):e.showToast({title:"上传图片失败请重试",icon:"none"})}});s.onProgressUpdate(function(e){console.log("上传进度"+e.progress),console.log("已经上传的数据长度"+e.totalBytesSent),console.log("预期需要上传的数据总长度"+e.totalBytesExpectedToSend)})}else e.showToast({icon:"none",title:"上传格式错误！请上传jpg，jpeg，png格式的图片"})}}),console.log("从相册中选择头像")):1==n&&e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["camera"],success:function(o){console.log(o.tempFilePaths[0]);var n=o;if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(o.tempFilePaths[0])){var s=e.uploadFile({url:t.url1+"/dinghai/Img/Img",filePath:n.tempFilePaths[0],name:"files",fileType:"image",success:function(o){200===o.statusCode?(e.showLoading({title:"正在修改头像",mask:!0}),console.log(o.data),e.request({url:t.url1+"/dinghai/user/selectUser",header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{uid:t.useUser.uid,imgage:t.url1+"/image/"+o.data},success:function(n){console.log(n),e.showToast({title:"修改成功"});var s=t.useUser;s.imgage=t.url1+"/image/"+o.data,t.setUser(s)},fail:function(t){console.log(t),e.showToast({title:"您的网络打了个盹",icon:"none"})}})):e.showToast({title:"上传图片失败请重试",icon:"none"})}});s.onProgressUpdate(function(e){console.log("上传进度"+e.progress),console.log("已经上传的数据长度"+e.totalBytesSent),console.log("预期需要上传的数据总长度"+e.totalBytesExpectedToSend)})}else e.showToast({icon:"none",title:"上传格式错误！请上传jpg，jpeg，png格式的图片"})}})}})},xgxb:function(){var t=this;e.showActionSheet({itemList:["男","女"],success:function(o){var n=o.tapIndex,s=t.url+"/dinghai/user/update";e.showLoading({title:"正在修改",mask:!0}),e.request({url:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{uid:t.useUser.uid,name:t.useUser.name,sex:0==n?"男":"女"},success:function(o){200==o.statusCode?(e.showToast({title:"修改成功"}),t.useUser.sex=0==n?"男":"女"):e.showToast({title:"您的网络打了个盹！",icon:"none"})},fail:function(t){console.log(t),e.showToast({title:"您的网络打了个盹！",icon:"none"})}})}})},xgdz:function(){e.navigateTo({url:"../../dizhi/dizhi"})}}};t.default=o}).call(this,o("543d")["default"])},a25f:function(e,t,o){},b64c:function(e,t,o){"use strict";(function(e){o("c01b"),o("921b");n(o("66fd"));var t=n(o("649b"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},b9ec:function(e,t,o){"use strict";var n=o("a25f"),s=o.n(n);s.a},f34d:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},s=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return s})},ffaf:function(e,t,o){"use strict";o.r(t);var n=o("997d"),s=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=s.a}},[["b64c","common/runtime","common/vendor"]]]);