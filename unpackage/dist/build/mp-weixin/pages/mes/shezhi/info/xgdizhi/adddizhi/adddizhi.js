(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mes/shezhi/info/xgdizhi/adddizhi/adddizhi"],{5286:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{address:"",staus:"选择我的地址"}},onLoad:function(){},onShow:function(){""==n.getStorageSync("addressno")?this.staus="选择我的地址":(console.log(n.getStorageSync("addressno")),this.staus="修改我的地址")},methods:{back:function(){n.navigateBack({})},openmap:function(){var t=this;n.chooseLocation({success:function(e){var o=e;n.showModal({title:"是选择此位置",content:o.name,cancelText:"确定",confirmText:"取消",success:function(e){e.cancel?(t.address=o.name,n.showToast({title:"添加成功",icon:"success"}),n.setStorageSync("addressno",t.address),console.log("点击了确定"),n.navigateBack({})):e.confirm&&console.log("点击了取消")}})}})}}};t.default=e}).call(this,e("543d")["default"])},"65fd":function(n,t,e){"use strict";var o=e("7f98"),a=e.n(o);a.a},"7f98":function(n,t,e){},"8a56":function(n,t,e){"use strict";e.r(t);var o=e("b8c5"),a=e("d7f9");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);e("65fd");var s=e("2877"),u=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},b8c5:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})},d7f9:function(n,t,e){"use strict";e.r(t);var o=e("5286"),a=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);t["default"]=a.a},f9ed:function(n,t,e){"use strict";(function(n){e("c01b"),e("921b");o(e("66fd"));var t=o(e("8a56"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])}},[["f9ed","common/runtime","common/vendor"]]]);