(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mes/shangjiaruzhu/shangpin/shangpin"],{"0773":function(t,e,i){"use strict";i.r(e);var n=i("c04f"),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=s.a},"2ae3":function(t,e,i){},"5d4c":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.fenLeiList,function(e,i){var n=t.__map(e.btnTitleArr,function(e,i){var n=t.flagArr.indexOf(e.title);return{$orig:t.__get_orig(e),g0:n}});return{$orig:t.__get_orig(e),l0:n}}));t._isMounted||(t.e0=function(e){t.btnFlag=!t.btnFlag},t.e1=function(e){t.upNum=!t.upNum},t.e2=function(e){t.upNum=!t.upNum}),t.$mp.data=Object.assign({},{$root:{l1:i}})},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},9790:function(t,e,i){"use strict";var n=i("2ae3"),s=i.n(n);s.a},bcbd:function(t,e,i){"use strict";(function(t){i("c01b"),i("921b");n(i("66fd"));var e=n(i("d914"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},c04f:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{name:"",mj:"",xinxi:"",ind:[],t:null,upNum:!1,imgroup6:[],imgroup6upData:[],imgroup9:[],imgroup9upData:[],btnTitle:null,btnJiaGe:null,fenLeiListIndex:null,tag:[{name:"正品保证",judge:!1},{name:"建材清理",judge:!1},{name:"售后保证",judge:!1}],JZtag:[{name:"正品保证",judge:!1},{name:"建材清理",judge:!1},{name:"售后保证",judge:!1}],yunFei1:null,yunFei2:null,flag:!0,btnFlag:!1,imgroup1:[],imgroup1upData:[],imgroup7:[],imgroup7upData:[],fenLeiList:[{fenLeiTitle:"",btnTitleArr:[]}],flagArr:[],uid:this.user.uid,shop:null,price:"",nums:null,fenLeiFlag:!1}},onLoad:function(){this.login()},methods:{sc:function(){var e=this,i=!0,n=this,s=n.url1+"/dinghai/user/SelectMerchant";t.showLoading({title:"正在加载中",mask:!0}),t.request({url:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{sid:n.user.uid},success:function(n){if(console.log(n),200==n.statusCode)if(console.log(n.data.start1+n.data.end>n.data.start),i=!(n.data.start1+n.data.end>n.data.start),i)t.showModal({title:"温馨提示",content:"您不是商家会员不可以上传商品,是否要去充值商家会员",success:function(e){e.confirm&&t.redirectTo({url:"../../huiyuan/huiyuan"})}});else{var s=e,o=s.url1+"/dinghai/commodity/add";if(s.flag){for(var a=0;a<e.fenLeiList.length;a++)if(""!=e.fenLeiList[a].fenLeiTitle){e.fenLeiFlag=!0;break}console.log(e.imgroup6upData.length>=2,""!=e.name,""!=e.xinxi,""!=e.price,null!=e.nums,0==e.flagArr.length,e.fenLeiFlag,e.imgroup9upData.length>0,null!=e.yunFei1,e.fenLeiList[0].btnTitleArr.length>0),e.imgroup6upData.length,e.name,e.xinxi,e.price,e.nums,e.flagArr.length,e.fenLeiFlag,e.imgroup9upData.length,e.yunFei1,e.fenLeiList[0].btnTitleArr.length>0?(t.showLoading({title:"正在添加中",mask:!0}),t.request({url:o,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{name:s.name,introduce:s.xinxi,price:s.price,state:0,nums:s.nums,type:s.shop.type,shopuid:s.shop.id,uid:s.uid,adress:s.shop.adress,img1:JSON.stringify(s.imgroup6upData),img2:JSON.stringify(s.imgroup9upData),Longitude:s.shop.longitude,Latitude:s.shop.latitude,freight:s.yunFei1,area:1,label:JSON.stringify(s.tag),shopType:JSON.stringify(s.fenLeiList)},success:function(e){200==e.statusCode?(console.log(e),t.navigateBack({}),t.showToast({title:"添加成功"})):t.showToast({title:"您的网络打了个盹",icon:"none"})},fail:function(e){t.showToast({title:"您的网络打了个盹",icon:"none"})}})):(t.show,t.showModal({icon:"none",title:"请完整填写！轮播图最少两张，包括商品详情图！商品名称和简介，最低价格，商品总数，标签，包括分类标题，并且分类按钮不得显示红色，如显示红色请点击"}))}else console.log(e.imgroup1upData.length>=2&&""!=e.name&&null!=e.mj&&""!=e.price&&""!=e.xinxi&&e.imgroup7upData.length>0&&null!=e.yunFei2),e.imgroup1upData.length>=2&&""!=e.name&&null!=e.mj&&""!=e.price&&""!=e.xinxi&&e.imgroup7upData.length>0&&null!=e.yunFei2?(t.showLoading({title:"正在添加中",mask:!0}),t.request({url:o,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:{name:s.name,introduce:s.xinxi,price:s.price,state:0,nums:99,type:s.shop.type,shopuid:s.shop.id,uid:s.uid,adress:s.shop.adress,img1:JSON.stringify(s.imgroup1upData),img2:JSON.stringify(s.imgroup7upData),Longitude:s.shop.longitude,Latitude:s.shop.latitude,freight:s.yunFei2,area:s.mj,label:JSON.stringify(s.JZtag),shopType:"[]"},success:function(e){200==e.statusCode?(console.log(e),t.navigateBack({}),t.showToast({title:"添加成功"})):t.showToast({title:"您的网络打了个盹",icon:"none"})},fail:function(e){t.showToast({title:"您的网络打了个盹",icon:"none"})}})):(t.show,t.showModal({icon:"none",title:"请完整填写！轮播图最少两张，包括商品详情图！商品名称和简介，最低价格，房屋面积，标签"}))}},fail:function(e){t.showToast({title:"您的网络打了个盹！",icon:"none"})}})},login:function(){var e=this,i=e.url1+"/dinghai/shop/byid";t.showLoading({title:"正在查询中",mask:!0}),t.request({url:i,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"GET",data:{uid:e.uid},success:function(i){200==i.statusCode?(console.log(i),"success"==i.data.msg?(t.showToast({title:"已入驻请添加"}),"装修"==i.data.data.type&&(e.flag=!1),e.shop=i.data.data):t.redirectTo({url:"../shangjiaruzhu"})):(t.showToast({title:"您的网络打了个盹",icon:"none"}),t.navigateBack({}))},fail:function(e){t.showToast({title:"您的网络打了个盹",icon:"none"}),t.navigateBack({})}})},qu:function(){this.suanFa(),this.upNum=!this.upNum},active:function(t,e){this.t=this.fenLeiList[t].btnTitleArr[e].title,this.ind=this.fenLeiList[t].btnTitleArr[e].kuCun,this.upNum=!0},suanFa:function(){for(var t=0;t<this.fenLeiList.length;t++)for(var e=0;e<this.fenLeiList[t].btnTitleArr.length;e++)for(var i=0;i<this.fenLeiList[t].btnTitleArr[e].kuCun.length;i++)null==this.fenLeiList[t].btnTitleArr[e].kuCun[i].num?-1==this.flagArr.indexOf(this.fenLeiList[t].btnTitleArr[e].title)&&this.flagArr.push(this.fenLeiList[t].btnTitleArr[e].title):-1!=this.flagArr.indexOf(this.fenLeiList[t].btnTitleArr[e].title)&&this.flagArr.splice(this.flagArr.indexOf(this.fenLeiList[t].btnTitleArr[e].title),1);console.log(this.flagArr)},tianJiaFenLei:function(){this.fenLeiList.push({fenLeiTitle:"",btnTitleArr:[]})},quXiao:function(){this.btnFlag=!1,this.btnTitle=null,this.btnJiaGe=null,this.fenLeiListIndex=null},queRen:function(){for(var e=!0,i=0;i<this.fenLeiList.length;i++)for(var n=0;n<this.fenLeiList[i].btnTitleArr.length;n++)this.fenLeiList[i].btnTitleArr[n].title===this.btnTitle&&(e=!1);if(e)if(this.btnJiaGe&&this.btnTitle)if(this.btnJiaGe.length>0&&this.btnTitle.length>0){for(var s={title:this.btnTitle,jg:this.btnJiaGe,kuCun:[{title:this.btnTitle,num:null}]},o=0;o<this.fenLeiList.length;o++)for(var a=0;a<this.fenLeiList[o].btnTitleArr.length;a++)o!=this.fenLeiListIndex&&s.kuCun.push({title:this.fenLeiList[o].btnTitleArr[a].title,num:null});for(var u=0;u<this.fenLeiList.length;u++)for(var l=0;l<this.fenLeiList[u].btnTitleArr.length;l++)u!=this.fenLeiListIndex&&this.fenLeiList[u].btnTitleArr[l].kuCun.push({title:this.btnTitle,num:null});this.fenLeiList[this.fenLeiListIndex].btnTitleArr.push(s),this.quXiao(),this.suanFa(),console.log(this.fenLeiList)}else t.showToast({title:"请完整填写",icon:"none"});else t.showToast({title:"请完整填写",icon:"none"});else this.quXiao(),t.showToast({title:"请不要重复添加",icon:"none"})},create:function(t){this.fenLeiListIndex=t,this.btnFlag=!0},back:function(){t.navigateBack({})},del:function(t,e,i){t.splice(i,1),e.splice(i,1)},changesty:function(t){console.log(this.tag[t].judge),1==this.tag[t].judge?this.tag[t].judge=!1:this.tag[t].judge=!0},chang:function(t){console.log(this.JZtag[t].judge),1==this.JZtag[t].judge?this.JZtag[t].judge=!1:this.JZtag[t].judge=!0},sel_img6:function(){var e=this;this.imgroup6.length>=6?t.showToast({title:"最多上传6张图",icon:"none"}):t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(i){console.log(i.tempFilePaths,i);var n=i;if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(i.tempFilePaths[0]))t.uploadFile({url:e.url1+"/dinghai/Img/Img",filePath:n.tempFilePaths[0],name:"files",fileType:"image",success:function(i){200===i.statusCode?(e.imgroup6.push(n.tempFilePaths[0]),e.imgroup6upData.push(i.data)):t.showToast({title:"上传图片失败请重试",icon:"none"})}});else t.showToast({icon:"none",title:"上传格式错误！请上传jpg，jpeg，png格式的图片"})}})},sel_img7:function(){var e=this;this.imgroup7.length>=6?t.showToast({title:"最多上传6张图",icon:"none"}):t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(i){console.log(i.tempFilePaths,i);var n=i;if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(i.tempFilePaths[0]))t.uploadFile({url:e.url1+"/dinghai/Img/Img",filePath:n.tempFilePaths[0],name:"files",fileType:"image",success:function(i){200===i.statusCode?(e.imgroup7.push(n.tempFilePaths[0]),e.imgroup7upData.push(i.data)):t.showToast({title:"上传图片失败请重试",icon:"none"})}});else t.showToast({icon:"none",title:"上传格式错误！请上传jpg，jpeg，png格式的图片"})}})},sel_img1:function(){var e=this;this.imgroup1.length>=6?t.showToast({title:"最多上传6张图",icon:"none"}):t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(i){console.log(i.tempFilePaths,i);var n=i;if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(i.tempFilePaths[0]))t.uploadFile({url:e.url1+"/dinghai/Img/Img",filePath:n.tempFilePaths[0],name:"files",fileType:"image",success:function(i){200===i.statusCode?(e.imgroup1.push(n.tempFilePaths[0]),e.imgroup1upData.push(i.data)):t.showToast({title:"上传图片失败请重试",icon:"none"})}});else t.showToast({icon:"none",title:"上传格式错误！请上传jpg，jpeg，png格式的图片"})}})},sel_img9:function(){var e=this;this.imgroup9.length>=6?t.showToast({title:"最多上传6张图",icon:"none"}):t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(i){console.log(i.tempFilePaths,i);var n=i;if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(i.tempFilePaths[0]))t.uploadFile({url:e.url1+"/dinghai/Img/Img",filePath:n.tempFilePaths[0],name:"files",fileType:"image",success:function(i){200===i.statusCode?(e.imgroup9.push(n.tempFilePaths[0]),e.imgroup9upData.push(i.data)):t.showToast({title:"上传图片失败请重试",icon:"none"})}});else t.showToast({icon:"none",title:"上传格式错误！请上传jpg，jpeg，png格式的图片"})}})}}};e.default=i}).call(this,i("543d")["default"])},d914:function(t,e,i){"use strict";i.r(e);var n=i("5d4c"),s=i("0773");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i("9790");var a=i("2877"),u=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports}},[["bcbd","common/runtime","common/vendor"]]]);