(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mes-gongdan-shigongzhong-shigongzhong"],{"2a0e":function(t,a,i){"use strict";var e=i("d849"),n=i.n(e);n.a},"333c":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("v-uni-view",{staticClass:"hader-box"},[i("v-uni-image",{staticClass:"hader-box-back",attrs:{src:"../../../../static/zuo.png"},on:{click:function(a){a=t.$handleEvent(a),t.back(a)}}}),i("v-uni-text",{staticClass:"hader-box-text"},[t._v("施工中")])],1),i("v-uni-view",{staticClass:"main-box",on:{click:function(a){a=t.$handleEvent(a),t.showgn(a)}}},[i("v-uni-view",{staticClass:"main-box-title"},[i("v-uni-text",{staticClass:"gray"},[t._v("工作内容：")]),i("v-uni-text",[t._v("切墙纸")]),i("v-uni-text",{staticClass:"gray",staticStyle:{"margin-left":"40upx"}},[t._v("已开工：")]),i("v-uni-text",[t._v("3天")])],1),i("v-uni-view",{staticClass:"main-box-content"},[i("v-uni-view",{staticStyle:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis","margin-top":"10upx"}},[i("v-uni-text",{staticClass:"gray"},[t._v("工作地点：")]),i("v-uni-text",[t._v("田园小区 三号楼十层")]),i("v-uni-text",{staticClass:"gray",staticStyle:{"margin-left":"30upx"}},[t._v("理想工期：")]),i("v-uni-text",[t._v("7天+")])],1),i("v-uni-view",{staticStyle:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis","margin-top":"16upx"}},[i("v-uni-text",{staticClass:"gray"},[t._v("备注：")]),i("v-uni-text",[t._v("室内面积108m，预找贴墙纸熟练工一名价格面议")])],1)],1),i("v-uni-view",{staticClass:"main-box-bot"},[i("v-uni-view",[i("v-uni-text",{staticClass:"gray"},[t._v("预留电话：")]),i("v-uni-text",[t._v("18239689275")]),i("v-uni-text",{staticClass:"gray",staticStyle:{"margin-left":"40upx"}},[t._v("最终价位：")]),i("v-uni-text",{staticStyle:{color:"#F53D4A"}},[t._v("1230")])],1),i("v-uni-view",{staticClass:"main-box-bot-float"},[i("v-uni-image",{staticStyle:{width:"90upx",height:"90upx","border-radius":"50%",float:"left"},attrs:{src:"../../../../static/touxiang.jpg"}}),i("v-uni-view",{staticStyle:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis","margin-top":"10upx"}},[i("v-uni-text",{staticClass:"gray"},[t._v("接单工人：")]),i("v-uni-text",{},[t._v("王师傅")]),i("v-uni-text",{staticClass:"gray",staticStyle:{"margin-left":"20upx"}},[t._v("工人电话：")]),i("v-uni-text",{},[t._v("18239689275zzzzzzzzz")])],1)],1)],1)],1)],1)},n=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return n})},b420:function(t,a,i){"use strict";i.r(a);var e=i("333c"),n=i("c9d7");for(var o in n)"default"!==o&&function(t){i.d(a,t,function(){return n[t]})}(o);i("2a0e");var s=i("2877"),r=Object(s["a"])(n["default"],e["a"],e["b"],!1,null,"65e1414a",null);a["default"]=r.exports},c225:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{}},onLoad:function(t){},onShow:function(){uni.showToast({title:"点击订单可查看该订单详情",icon:"none"})},methods:{back:function(){uni.navigateBack({})},showgn:function(){uni.showActionSheet({itemList:["取消招工","修改详情","刷新该条"],success:function(t){var a=t.tapIndex;0==a?console.log("取消招工"):1==a?console.log("修改详情"):console.log("刷新该条")}})}}};a.default=e},c9d7:function(t,a,i){"use strict";i.r(a);var e=i("c225"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,function(){return e[t]})}(o);a["default"]=n.a},d849:function(t,a,i){var e=i("e114");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("7f1c5a4a",e,!0,{sourceMap:!1,shadowMode:!1})},e114:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".zz[data-v-65e1414a]{float:left;margin-top:%?24?%}.hader-box[data-v-65e1414a]{width:100%;height:%?168?%;background:#f53d4a}.hader-box-back[data-v-65e1414a]{width:%?40?%;height:%?40?%;margin-top:%?70?%;margin-left:%?20?%}.hader-box-text[data-v-65e1414a]{color:#fff;margin-left:%?260?%}.main-box[data-v-65e1414a]{overflow:hidden;margin-top:%?40?%;-webkit-border-radius:6px;border-radius:6px;width:92%;height:%?430?%;background:#fff;-webkit-box-shadow:2px 2px 5px grey;box-shadow:2px 2px 5px grey;margin-left:%?30?%}.main-box-title[data-v-65e1414a]{width:100%;height:%?60?%;border-bottom:1px solid #bfbfbf;overflow:hidden; /*超出的部分隐藏起来。*/white-space:nowrap;/*不显示的地方用省略号...代替*/-o-text-overflow:ellipsis;text-overflow:ellipsis/* 支持 IE */}.main-box-content[data-v-65e1414a]{width:100%;height:%?160?%}.main-box-bot[data-v-65e1414a]{width:100%;height:%?190?%;border-top:1px solid #bfbfbf}.main-box-title>uni-text[data-v-65e1414a]{font-size:14px;letter-spacing:1px}.main-box-content>uni-view>uni-text[data-v-65e1414a]{font-size:14px;letter-spacing:1px}.main-box-bot>uni-view>uni-view>uni-text[data-v-65e1414a]{font-size:14px;letter-spacing:1px}.main-box-bot-float[data-v-65e1414a]{float:left;margin-top:%?26?%}.main-box-bot>uni-view>uni-text[data-v-65e1414a]{font-size:14px;letter-spacing:1px}.gray[data-v-65e1414a]{color:#a4a4a4}",""])}}]);