(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-post-mytf-myft"],{2663:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.pageshow?i("v-uni-view",[i("v-uni-view",{staticClass:"hader-box"},[i("v-uni-text",{staticClass:"hader-box-text"},[t._v("发帖")])],1),i("v-uni-view",{staticClass:"post-person-box"},[i("v-uni-text",{staticClass:"post-person-text"},[t._v("发帖人：")]),i("v-uni-input",{staticClass:"post-person-inp",attrs:{type:"text",placeholder:"李先生"},on:{input:function(e){e=t.$handleEvent(e),t.personinp(e)}},model:{value:t.personinput,callback:function(e){t.personinput=e},expression:"personinput"}}),i("v-uni-text",{staticClass:"post-person-send",style:{opacity:t.judge?"1.0":"0.6"},on:{click:function(e){e=t.$handleEvent(e),t.post(e)}}},[t._v("发布")])],1),i("v-uni-view",{staticClass:"post-person-box",staticStyle:{height:"180upx"}},[i("v-uni-text",{staticClass:"post-person-text"},[t._v("内容：")]),i("v-uni-textarea",{staticClass:"post-person-inp",staticStyle:{width:"560upx",height:"180upx","margin-top":"10upx"},attrs:{placeholder:"输入想要发布的帖子"},on:{input:function(e){e=t.$handleEvent(e),t.coninp(e)}},model:{value:t.coninput,callback:function(e){t.coninput=e},expression:"coninput"}})],1),i("v-uni-view",{staticStyle:{width:"100%",height:"auto","margin-left":"30upx"}},[t._l(t.imgroup,function(e,n){return i("v-uni-view",{staticClass:"show-sel-img",staticStyle:{position:"relative"}},[i("v-uni-image",{attrs:{src:e}}),i("v-uni-text",{staticStyle:{position:"absolute",top:"10upx",right:"0",opacity:"0.8",color:"gray"},on:{click:function(e){e=t.$handleEvent(e),t.delimg(n)}}},[t._v("✕")])],1)}),i("v-uni-view",{staticClass:"send-img",on:{click:function(e){e=t.$handleEvent(e),t.sel_img(e)}}},[i("v-uni-image",{staticClass:"send-img-image",attrs:{src:"../../../static/zhaoxiangji.png"}}),i("v-uni-text",{staticClass:"send-img-text"},[t._v("图片")])],1)],2)],1):i("v-uni-view",[i("v-uni-view",{staticClass:"hader-box"},[i("v-uni-text",{staticClass:"hader-box-text"},[t._v("发帖")])],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},[i("v-uni-view",{staticClass:"success"},[i("v-uni-image",{attrs:{src:"../../static/tz-success.png"}})],1),i("v-uni-text",{staticStyle:{"margin-top":"60upx"}},[t._v("恭喜您！ 发帖成功")])],1)],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"4ce2":function(t,e,i){"use strict";var n=i("dc42"),s=i.n(n);s.a},"610f":function(t,e,i){"use strict";i.r(e);var n=i("2663"),s=i("ed74");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("4ce2");var o=i("2877"),c=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,"a33dbec0",null);e["default"]=c.exports},cc82:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{pageshow:!0,judge:!1,coninput:"",personinput:"",imgroup:[]}},onLoad:function(){},onShow:function(){this.pageshow=!0,""!=this.personinput&&""!=this.coninput||(this.judge=!1)},methods:{post:function(){0==this.judge?uni.showToast({title:"请完整填写发帖人和帖子内容！",icon:"none"}):(uni.showToast({title:"发布成功",icon:"success"}),this.coninput="",this.personinput="",this.pageshow=!1)},personinp:function(t){""!=this.coninput&&""!=t.detail.value?this.judge=!0:this.judge=!1},coninp:function(t){""!=this.personinput&&""!=t.detail.value?this.judge=!0:this.judge=!1},sel_img:function(){var t=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(e){console.log(e.tempFilePaths[0]),t.imgroup.push(e.tempFilePaths[0])}})},delimg:function(t){this.imgroup.splice(t,1)}}};e.default=n},dc42:function(t,e,i){var n=i("f260");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("6e373cb6",n,!0,{sourceMap:!1,shadowMode:!1})},ed74:function(t,e,i){"use strict";i.r(e);var n=i("cc82"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},f260:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".success[data-v-a33dbec0]{width:%?540?%;height:%?450?%;margin-left:%?-80?%;margin-top:%?60?%}.hader-box[data-v-a33dbec0]{width:100%;height:%?168?%;line-height:%?200?%;background:#f53d4a;text-align:center;color:#fff}.post-person-box[data-v-a33dbec0]{width:100%;height:%?260?%;margin-top:%?20?%;padding:%?20?%}.post-person-text[data-v-a33dbec0]{margin-left:%?40?%;float:left}.post-person-inp[data-v-a33dbec0]{color:grey;font-size:14px;float:left}.post-person-send[data-v-a33dbec0]{font-size:14px;-webkit-border-radius:8px;border-radius:8px;padding:%?4?% %?18?%;background:#f53d4a;color:#fff;float:left;margin-left:%?90?%;margin-top:%?5?%}.opy[data-v-a33dbec0]{opacity:.6}.no-opy[data-v-a33dbec0]{opacity:1}.send-img[data-v-a33dbec0]{width:%?220?%;height:%?204?%;background:#eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.send-img-image[data-v-a33dbec0]{width:%?140?%;height:%?120?%}.send-img-text[data-v-a33dbec0]{color:grey;font-size:14px}.show-sel-img[data-v-a33dbec0]{width:%?220?%;height:%?204?%;margin-right:%?20?%;float:left}.show-sel-img>uni-image[data-v-a33dbec0]{width:100%;height:100%}",""])}}]);