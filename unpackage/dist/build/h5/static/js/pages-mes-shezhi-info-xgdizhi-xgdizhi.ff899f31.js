(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mes-shezhi-info-xgdizhi-xgdizhi"],{"0b81":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return t.judgehava?n("v-uni-view",[n("v-uni-view",{staticClass:"hader-box"},[n("v-uni-image",{staticClass:"hader-box-back",attrs:{src:"../../../../../static/zuo.png"},on:{click:function(a){a=t.$handleEvent(a),t.back(a)}}}),n("v-uni-text",{staticClass:"hader-box-text"},[t._v("地址管理")])],1),n("v-uni-button",{staticClass:"exit-btn",on:{click:function(a){a=t.$handleEvent(a),t.goadddz(a)}}},[t._v("修改地址")])],1):n("v-uni-view",[n("v-uni-view",{staticClass:"hader-box"},[n("v-uni-image",{staticClass:"hader-box-back",attrs:{src:"../../../../../static/zuo.png"},on:{click:function(a){a=t.$handleEvent(a),t.back(a)}}}),n("v-uni-text",{staticClass:"hader-box-text"},[t._v("地址管理")])],1),n("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},[n("v-uni-view",{staticClass:"success"},[n("v-uni-image",{attrs:{src:"../../../../../static/tz-success.png"}})],1),n("v-uni-text",{staticStyle:{"margin-top":"40upx"}},[t._v("没有地址")])],1),n("v-uni-button",{staticClass:"exit-btn",on:{click:function(a){a=t.$handleEvent(a),t.goadddz(a)}}},[t._v("新建地址")])],1)},i=[];n.d(a,"a",function(){return e}),n.d(a,"b",function(){return i})},1931:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{judgehava:!0}},onLoad:function(){},onShow:function(){""==uni.getStorageSync("addressno")?this.judgehava=!1:(console.log(uni.getStorageSync("addressno")),this.judgehava=!0)},methods:{back:function(){uni.navigateBack({})},goadddz:function(){uni.navigateTo({url:"adddizhi/adddizhi"})}}};a.default=e},"627d":function(t,a,n){var e=n("f51e");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("6063a54b",e,!0,{sourceMap:!1,shadowMode:!1})},"6e4e":function(t,a,n){"use strict";var e=n("627d"),i=n.n(e);i.a},8664:function(t,a,n){"use strict";n.r(a);var e=n("1931"),i=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(a,t,function(){return e[t]})}(o);a["default"]=i.a},ae06:function(t,a,n){"use strict";n.r(a);var e=n("0b81"),i=n("8664");for(var o in i)"default"!==o&&function(t){n.d(a,t,function(){return i[t]})}(o);n("6e4e");var s=n("2877"),c=Object(s["a"])(i["default"],e["a"],e["b"],!1,null,"56f2f42b",null);a["default"]=c.exports},f51e:function(t,a,n){a=t.exports=n("2350")(!1),a.push([t.i,".success[data-v-56f2f42b]{width:%?540?%;height:%?450?%;margin-left:%?-80?%;margin-top:%?60?%}.hader-box[data-v-56f2f42b]{width:100%;height:%?168?%;background:#f53d4a}.hader-box-back[data-v-56f2f42b]{width:%?40?%;height:%?40?%;margin-top:%?70?%;margin-left:%?20?%}.hader-box-text[data-v-56f2f42b]{color:#fff;margin-left:%?260?%}.exit-btn[data-v-56f2f42b]{width:70%;height:%?70?%;background:#f53d4a;font-weight:300;color:#fff;letter-spacing:1px;line-height:%?70?%;-webkit-border-radius:8px;border-radius:8px;margin-top:%?300?%}",""])}}]);