(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mes-gongdan-yiqiangdan-yiqiangdan"],{2665:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".hader-box[data-v-15ca7f05]{width:100%;height:%?168?%;background:#f53d4a}.hader-box-back[data-v-15ca7f05]{width:%?40?%;height:%?40?%;margin-top:%?70?%;margin-left:%?20?%}.hader-box-text[data-v-15ca7f05]{color:#fff;margin-left:%?260?%}.main-box[data-v-15ca7f05]{margin-top:%?40?%;-webkit-border-radius:6px;border-radius:6px;width:92%;height:%?300?%;background:#fff;-webkit-box-shadow:2px 2px 5px grey;box-shadow:2px 2px 5px grey;margin-left:%?30?%}.main-box-title[data-v-15ca7f05]{width:100%;height:%?60?%;border-bottom:1px solid #bfbfbf}.main-box-content[data-v-15ca7f05]{width:100%;height:%?180?%}.main-box-bot[data-v-15ca7f05]{width:100%;height:%?60?%;border-top:1px solid #bfbfbf}.main-box-title>uni-text[data-v-15ca7f05]{font-size:14px;letter-spacing:1px}.main-box-content>uni-view>uni-text[data-v-15ca7f05]{font-size:14px;letter-spacing:1px}.main-box-bot>uni-text[data-v-15ca7f05]{font-size:14px;letter-spacing:1px}.gray[data-v-15ca7f05]{color:#a4a4a4}",""])},"293b":function(t,a,i){"use strict";i.r(a);var n=i("b308"),e=i("b871");for(var o in e)"default"!==o&&function(t){i.d(a,t,function(){return e[t]})}(o);i("b67b");var s=i("2877"),c=Object(s["a"])(e["default"],n["a"],n["b"],!1,null,"15ca7f05",null);a["default"]=c.exports},"61a4":function(t,a,i){var n=i("2665");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("55084d58",n,!0,{sourceMap:!1,shadowMode:!1})},"738d":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{}},onLoad:function(t){},onShow:function(){uni.showToast({title:"点击订单可查看该订单详情",icon:"none"})},methods:{back:function(){uni.navigateBack({})},showgn:function(){uni.showActionSheet({itemList:["取消招工","修改详情","刷新该条"],success:function(t){var a=t.tapIndex;0==a?console.log("取消招工"):1==a?console.log("修改详情"):console.log("刷新该条")}})}}};a.default=n},b308:function(t,a,i){"use strict";var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("v-uni-view",{staticClass:"hader-box"},[i("v-uni-image",{staticClass:"hader-box-back",attrs:{src:"../../../../static/zuo.png"},on:{click:function(a){a=t.$handleEvent(a),t.back(a)}}}),i("v-uni-text",{staticClass:"hader-box-text"},[t._v("已抢单")])],1),i("v-uni-view",{staticClass:"main-box",on:{click:function(a){a=t.$handleEvent(a),t.showgn(a)}}},[i("v-uni-view",{staticClass:"main-box-title"},[i("v-uni-text",{staticClass:"gray"},[t._v("工作内容：")]),i("v-uni-text",[t._v("切墙纸")]),i("v-uni-text",{staticClass:"gray",staticStyle:{"margin-left":"40upx"}},[t._v("开工时间：")]),i("v-uni-text",[t._v("2019-11-11")])],1),i("v-uni-view",{staticClass:"main-box-content",staticStyle:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[i("v-uni-view",{staticStyle:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[i("v-uni-text",{staticClass:"gray"},[t._v("工作地点：")]),i("v-uni-text",[t._v("田园小区 三号楼十层")]),i("v-uni-text",{staticClass:"gray",staticStyle:{"margin-left":"30upx"}},[t._v("理想工期：")]),i("v-uni-text",[t._v("7天+")])],1),i("v-uni-view",{staticStyle:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis","margin-top":"20upx"}},[i("v-uni-text",{staticClass:"gray"},[t._v("备注：")]),i("v-uni-text",[t._v("室内面积108m，预找贴墙纸熟练工一名价格面议")])],1)],1),i("v-uni-view",{staticClass:"main-box-bot"},[i("v-uni-text",{staticClass:"gray"},[t._v("预留电话：")]),i("v-uni-text",[t._v("18239689275")]),i("v-uni-text",{staticClass:"gray",staticStyle:{"margin-left":"40upx"}},[t._v("预估价位：")]),i("v-uni-text",[t._v("1k-2k")])],1)],1)],1)},e=[];i.d(a,"a",function(){return n}),i.d(a,"b",function(){return e})},b67b:function(t,a,i){"use strict";var n=i("61a4"),e=i.n(n);e.a},b871:function(t,a,i){"use strict";i.r(a);var n=i("738d"),e=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(a,t,function(){return n[t]})}(o);a["default"]=e.a}}]);