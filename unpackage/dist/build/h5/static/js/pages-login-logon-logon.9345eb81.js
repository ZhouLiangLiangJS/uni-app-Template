(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-logon-logon"],{"49b2":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"hader-box"},[e("v-uni-image",{staticClass:"hader-box-back",attrs:{src:"../../../static/zuo.png"},on:{click:function(n){n=t.$handleEvent(n),t.back(n)}}}),e("v-uni-text",{staticClass:"hader-box-text"},[t._v("注册")])],1),e("v-uni-view",{staticClass:"main-content"},[e("v-uni-view",{staticClass:"inpent-box"},[e("v-uni-input",{staticClass:"inpent-box-inp",attrs:{maxlength:"11",type:"text",placeholder:"请输入手机号码"},model:{value:t.tel,callback:function(n){t.tel=n},expression:"tel"}}),e("v-uni-text",{staticClass:"inpent-box-text",on:{click:function(n){n=t.$handleEvent(n),t.sendcode(n)}}},[t._v("获取验证码")]),e("v-uni-view",{staticStyle:{clear:"both"}})],1),e("v-uni-view",{staticClass:"inpent-box"},[e("v-uni-input",{staticClass:"inpent-box-inp",attrs:{maxlength:"4",type:"text",placeholder:"请输入验证码"},model:{value:t.code,callback:function(n){t.code=n},expression:"code"}}),e("v-uni-view",{staticStyle:{clear:"both"}})],1),e("v-uni-view",{staticClass:"inpent-box"},[e("v-uni-input",{staticClass:"inpent-box-inp",attrs:{maxlength:"8",type:"text",placeholder:"输入昵称"},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}}),e("v-uni-view",{staticStyle:{clear:"both"}})],1),e("v-uni-view",{staticClass:"inpent-box"},["checkbox"===t.type1?e("v-uni-input",{staticClass:"inpent-box-inp",attrs:{placeholder:"请输入密码",type:"checkbox"},model:{value:t.pwd,callback:function(n){t.pwd=n},expression:"pwd"}}):"radio"===t.type1?e("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"inpent-box-inp",attrs:{placeholder:"请输入密码",type:"radio"},domProps:{checked:t._q(t.pwd,null)},on:{change:function(n){t.pwd=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"inpent-box-inp",attrs:{placeholder:"请输入密码",type:t.type1},domProps:{value:t.pwd},on:{input:function(n){n.target.composing||(t.pwd=n.target.value)}}}),e("v-uni-image",{staticClass:"inpent-box-img",attrs:{src:"../../../static/look.png"},on:{click:function(n){n=t.$handleEvent(n),t.showpwd1(n)}}}),e("v-uni-view",{staticStyle:{clear:"both"}})],1),e("v-uni-view",{staticClass:"inpent-box"},["checkbox"===t.type2?e("v-uni-input",{staticClass:"inpent-box-inp",attrs:{placeholder:"确认密码",type:"checkbox"},model:{value:t.aginpwd,callback:function(n){t.aginpwd=n},expression:"aginpwd"}}):"radio"===t.type2?e("input",{directives:[{name:"model",rawName:"v-model",value:t.aginpwd,expression:"aginpwd"}],staticClass:"inpent-box-inp",attrs:{placeholder:"确认密码",type:"radio"},domProps:{checked:t._q(t.aginpwd,null)},on:{change:function(n){t.aginpwd=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.aginpwd,expression:"aginpwd"}],staticClass:"inpent-box-inp",attrs:{placeholder:"确认密码",type:t.type2},domProps:{value:t.aginpwd},on:{input:function(n){n.target.composing||(t.aginpwd=n.target.value)}}}),e("v-uni-image",{staticClass:"inpent-box-img",attrs:{src:"../../../static/look.png"},on:{click:function(n){n=t.$handleEvent(n),t.showpwd2(n)}}}),e("v-uni-view",{staticStyle:{clear:"both"}})],1),e("v-uni-view",{staticClass:"inpent-box",on:{click:function(n){n=t.$handleEvent(n),t.selsex(n)}}},[e("v-uni-input",{staticClass:"inpent-box-inp",attrs:{type:"text",placeholder:"选择性别"}}),e("v-uni-text",{staticClass:"inpent-box-text",staticStyle:{color:"gray","font-size":"16px"}},[t._v(t._s(t.sex))]),e("v-uni-view",{staticStyle:{clear:"both"}})],1)],1),e("v-uni-button",{staticClass:"exit-btn",on:{click:function(n){n=t.$handleEvent(n),t.logonbtn(n)}}},[t._v("注册")])],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"588c":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{sex:"男",tel:"",code:"",name:"",pwd:"",aginpwd:"",type1:"password",type2:"password"}},onLoad:function(){},methods:{back:function(){uni.navigateBack({})},sendcode:function(){""==this.tel?uni.showToast({title:"手机号不能为空 !",icon:"none"}):/^1[3456789]\d{9}$/.test(this.tel)?uni.showToast({title:"发送成功 请接收 !",icon:"none"}):uni.showToast({title:"请输入正确的手机号 !",icon:"none"})},logonbtn:function(){""==this.tel||""==this.code||""==this.name||""==this.pwd||""==this.aginpwd?uni.showToast({title:"请完整的填写所有信息 !",icon:"none"}):/^1[3456789]\d{9}$/.test(this.tel)?this.pwd!=this.aginpwd?uni.showToast({title:"两次输入的密码要一致 !",icon:"none"}):uni.showToast({title:"注册成功 !",icon:"success"}):uni.showToast({title:"请输入正确的手机号 !",icon:"none"})},showpwd1:function(){this.type1="text"},showpwd2:function(){this.type2="text"},selsex:function(){var t=this;uni.showActionSheet({itemList:["男","女"],success:function(n){var e=n.tapIndex;0==e?(console.log("男"),t.sex="男"):1==e&&(console.log("女"),t.sex="女")}})}}};n.default=i},"67ad":function(t,n,e){var i=e("de12");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("491b8b3e",i,!0,{sourceMap:!1,shadowMode:!1})},aaaf:function(t,n,e){"use strict";var i=e("67ad"),a=e.n(i);a.a},bbac:function(t,n,e){"use strict";e.r(n);var i=e("49b2"),a=e("f04d");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("aaaf");var s=e("2877"),c=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"52b3a71a",null);n["default"]=c.exports},de12:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".hader-box[data-v-52b3a71a]{width:100%;height:%?168?%;background:#f53d4a}.hader-box-back[data-v-52b3a71a]{width:%?40?%;height:%?40?%;margin-top:%?70?%;margin-left:%?20?%}.hader-box-text[data-v-52b3a71a]{color:#fff;margin-left:%?260?%}.main-content[data-v-52b3a71a]{width:100%;height:%?400?%;margin-top:%?50?%}.inpent-box-inp[data-v-52b3a71a]{float:left;font-size:16px}.inpent-box[data-v-52b3a71a]{margin-top:%?60?%;width:80%;border-bottom:1px solid #c9c9c9;margin-left:%?80?%}.inpent-box-text[data-v-52b3a71a]{float:right;font-size:14px;color:#f53d4a}.inpent-box-img[data-v-52b3a71a]{float:right;width:%?40?%;height:%?40?%}.exit-btn[data-v-52b3a71a]{width:90%;height:%?70?%;background:#f53d4a;font-weight:300;color:#fff;letter-spacing:1px;line-height:%?70?%;-webkit-border-radius:8px;border-radius:8px;margin-top:%?350?%}",""])},f04d:function(t,n,e){"use strict";e.r(n);var i=e("588c"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a}}]);