(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mes/gongdan/shigongzhong/shigongzhong"],{"2b16":function(n,t,e){"use strict";var o=e("fe83"),i=e.n(o);i.a},"37b3":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{ListFlag:!1,listArr:[],time:!1}},onLoad:function(n){this.getListArr()},onShow:function(){},methods:{yiwancheng:function(t,e){var o=this,i=o.url1+"/dinghai/order/updateWorkover";n.showModal({title:"此单是否已经完成？",content:"订单ID为："+t.id,cancelText:"是",confirmText:"否",success:function(u){u.cancel?n.request({url:i,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{id:t.id},success:function(t){200==t.statusCode?(o.listArr.splice(e,1),n.navigateTo({url:"../daifukuan/daifukuan"})):n.showToast({title:"您的网络打了个盹",icon:"none"})},fail:function(t){n.showToast({title:"您的网络打了个盹",icon:"none"})}}):u.confirm&&console.log("点击了取消")}})},getListArr:function(){var t=this,e=t.url1+"/dinghai/order/selectOrder";n.request({url:e,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{useruid:t.user.uid},success:function(e){200==e.statusCode?(t.listArr=e.data.flag,console.log(t.listArr)):n.showToast({title:"您的网络打了个盹",icon:"none"})},fail:function(t){n.showToast({title:"您的网络打了个盹",icon:"none"})}})},back:function(){n.navigateBack({})},showgn:function(){}}};t.default=e}).call(this,e("543d")["default"])},4328:function(n,t,e){"use strict";(function(n){e("c01b"),e("921b");o(e("66fd"));var t=o(e("b420"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"6d21":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i})},b420:function(n,t,e){"use strict";e.r(t);var o=e("6d21"),i=e("c9d7");for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);e("2b16");var a=e("2877"),r=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},c9d7:function(n,t,e){"use strict";e.r(t);var o=e("37b3"),i=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t["default"]=i.a},fe83:function(n,t,e){}},[["4328","common/runtime","common/vendor"]]]);