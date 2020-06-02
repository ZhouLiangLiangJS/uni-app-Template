<template>
	<view>
		<view class="hader-box">
			<image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
			<text class="hader-box-text">商家管理</text>
		</view>

		<!-- <view class="fenLei">
			<view>
				<text :style="flag?'border-bottom: 1px solid #fff;':''">
					新商品上架
				</text>
			</view>
			<view>
				<text :style="!flag?'border-bottom: 1px solid #fff;':''">
					装修案例上传
				</text>
			</view>
		</view> -->
		<view style="padding: 30upx;margin-bottom: 200upx;font-size:30upx;" v-show="flag">
			<view class="sel_img" style="margin-top: 200upx;">
					<view class="sel_img_title">
						<text style="font-size: 30upx;letter-spacing: 1px;">商品轮播图片： </text>
						<text style="font-size: 30upx;letter-spacing: 1px;margin-left: 10upx;color: #A5A5A5;">最多六张</text>
					</view>
					
					<view v-for="(item,index) in imgroup6" :key="index" style="position: relative; width: 106upx;height: 106upx;border-radius: 4px;float: left;margin-top: 24upx;margin-left: 20upx;">
						<image style="width: 100%;height: 100%;" :src="item"></image>
						<view @click="del(imgroup6,imgroup6upData,index)" style="position: absolute;top: -20upx; right: -20upx;font-size: 30upx;">❌</view>
					</view>
					
					<view @click="sel_img6" class="add-img" style="float: left;">
						<text>+</text>
					</view>
					
					<view style="clear: both;"></view>
				</view>
				
				<view class="inp-style">
					<text class="inp-style-left">商品名称： </text>
					<input class="inp-style-right" v-model="name" type="text" maxlength="25" placeholder="介绍文字不得超过25字" style="width: 500upx;">
				</view>
				
				<view style="clear: both;"></view>
				
				<view class="inp-style">
					<text class="inp-style-left">商品简介： </text>
					<input class="inp-style-right" v-model="xinxi" type="text" style="width: 500upx;">
				</view>
				<view class="inp-style">
					<text class="inp-style-left">最低价格： </text>
					<input class="inp-style-right" v-model="price"  type="number" maxlength="15" style="width: 80upx; border: 1px solid #ccc;">
					<text>元</text>
				</view>
				<view class="inp-style">
					<text class="inp-style-left">商品总数： </text>
					<input class="inp-style-right" v-model="nums"  type="number" maxlength="15" style="width: 80upx; border: 1px solid #ccc;">
					<text>件</text>
				</view>
				<view class="inp-style">
					<text class="inp-style-left">标签： </text>
					<view class="inp-style-right" style="width: 80%;border: 0;">
						<view @click="changesty(index)" v-for="(item,index) in tag" :key="index" :style="item.judge ? 'background:#F53D4A;color:#fff':''">{{item.name}}</view>
					</view>
				</view>
				<view style="clear: both;"></view>
				
				<view class="inp-style" style="margin-top: 40upx;">
					<view v-for="(item,i) in fenLeiList" :key="i">
						<input class="inp-style-right" type="text" placeholder="填写"  maxlength="9" v-model="item.fenLeiTitle"  style="width: 70upx;">
						<text style=" display: inline-block;height: 50upx;line-height: 50upx;">分类：</text>
						<view style="position: relative; padding-left: 100upx;overflow: hidden;">
							<view @click="active(i,ind)" class="FenLeiBtn" :style="flagArr.indexOf(child.title)==-1?'background:#F8F8F8;color:#000':'border:0'" :key="ind" v-for="(child,ind) in item.btnTitleArr">
							{{child.title}}
							</view>
							
							<button  style="float: left;font-size: 50upx; width: 60upx;height: 60upx;padding: 0; margin: 0;line-height: 60upx;" @touchstart="create(i)">+</button>
						</view>
					</view>
				</view>
				<button @click="tianJiaFenLei()" style="height: auto;font-size: 30upx;margin-top: 30upx;">添加新分类</button>
				<view class="muBu" v-show="btnFlag" @touchstart="btnFlag=!btnFlag">
					
				</view>
				<view class="LeiBie" v-show="btnFlag">
					<view>
						<view>
							<text>此项名称:</text>
							<input type="text" v-model="btnTitle">
						</view>
						<view>
							<text>此项价格:</text>
							<input type="number" v-model="btnJiaGe">
						</view>
					</view>
					<view @click="quXiao" class="LeiBie_fl">取消</view>
					<view @click="queRen" class="LeiBie_fl" style="right:0;left: auto;">确认</view>
				</view>
				<view style="clear: both;"></view>
				
				<view class="muBu" v-show="upNum" @touchstart="upNum=!upNum">
					
				</view>
				<view class="LeiBie" v-show="upNum">
					<view>
						<view style=""  :key="i" v-for="(item,i) in ind">
							<text>{{t==item.title?t:t+item.title}}的库存</text>
							<input type="number" v-model="item.num" />
						</view>
					</view>
					<view @click="upNum=!upNum" class="LeiBie_fl">取消</view>
					<view @click="qu()" class="LeiBie_fl" style="right:0;left: auto;">确认</view>
				</view>
				<view class="sel_img" style="margin-top: 40upx;">
					<view class="sel_img_title">
						<text style="font-size: 30upx;letter-spacing: 1px;">商品详情图： </text>
						<text style="font-size: 30upx;letter-spacing: 1px;margin-left: 10upx;color: #A5A5A5;">最多九张</text>
					</view>
					
					<view v-for="(item,index) in imgroup9" :key="index" style="position: relative; width: 106upx;height: 106upx;border-radius: 4px;float: left;margin-top: 24upx;margin-left: 20upx;">
						<image style="width: 100%;height: 100%;" :src="item"></image>
						<view @click="del(imgroup9,imgroup9upData,index)" style="position: absolute;top: -20upx; right: -20upx;font-size: 30upx;">❌</view>
					</view>
					
					<view @click="sel_img9" class="add-img" style="float: left;">
						<text>+</text>
					</view>
					
					<view style="clear: both;"></view>
				</view>
				<view class="exit-btn">
					<view>
						<view>
							<text>
								运费：
							</text>
							<input type="text" v-model="yunFei1">
							<text>
								元
							</text>
						</view>
					</view>
					<view @click="sc">
						<text class="queRen">确认上传</text>
					</view>
				</view>
		</view>
		<view class="jiaZhuangAnLi" v-show="!flag">
			<view class="sel_img" style="margin-top: 200upx;">
					<view class="sel_img_title">
						<text style="font-size: 30upx;letter-spacing: 1px;">商品轮播图片： </text>
						<text style="font-size: 30upx;letter-spacing: 1px;margin-left: 10upx;color: #A5A5A5;">最多六张</text>
					</view>
					
					<view v-for="(item,index) in imgroup1" :key="index" style="position: relative; width: 106upx;height: 106upx;border-radius: 4px;float: left;margin-top: 24upx;margin-left: 20upx;">
						<image style="width: 100%;height: 100%;" :src="item"></image>
						<view @click="del(imgroup1,imgroup1upData,index)" style="position: absolute;top: -20upx; right: -20upx;font-size: 30upx;">❌</view>
					</view>
					
					<view @click="sel_img1" class="add-img" style="float: left;">
						<text>+</text>
					</view>
					
					<view style="clear: both;"></view>
				</view>
				
				<view class="inp-style">
					<text class="inp-style-left">商品名称： </text>
					<input class="inp-style-right" v-model="name" type="text" maxlength="25" placeholder="介绍文字不得超过25字" style="width: 500upx;">
					
				</view>
				
				<view style="clear: both;"></view>
				
				<view class="inp-style">
					<text class="inp-style-left">房屋面积： </text>
					<input class="inp-style-right" v-model="mj"  type="number" maxlength="15" style="width: 80upx; border: 1px solid #ccc;">
					<text>㎡</text>
					
				</view>
				<view class="inp-style">
					<text class="inp-style-left">最低价格： </text>
					<input class="inp-style-right" v-model="price"  type="number" maxlength="15" style="width: 80upx; border: 1px solid #ccc;">
					<text>元</text>
				</view>
				<view class="inp-style">
					<text class="inp-style-left">标签： </text>
					<view class="inp-style-right" style="width: 80%;border: 0;">
						<view @click="chang(index)" v-for="(item,index) in JZtag" :key="index" :style="item.judge ? 'background:#F53D4A;color:#fff':''">{{item.name}}</view>
					</view>
				</view>
				<view style="clear: both;"></view>
				
				<view class="inp-style" style="margin-top: 40upx;">
					<text class="inp-style-left">商品简介： </text>
					<input class="inp-style-right" type="text" v-model="xinxi" style="width: 500upx;">
				</view>
				<view style="clear: both;"></view>
				
				
				<view class="sel_img" style="margin-top: 40upx;">
					<view class="sel_img_title">
						<text style="font-size: 30upx;letter-spacing: 1px;">商品详情图： </text>
						<text style="font-size: 30upx;letter-spacing: 1px;margin-left: 10upx;color: #A5A5A5;">最多九张</text>
					</view>
					
					<view v-for="(item,index) in imgroup7" :key="index" style="position: relative; width: 106upx;height: 106upx;border-radius: 4px;float: left;margin-top: 24upx;margin-left: 20upx;">
						<image style="width: 100%;height: 100%;" :src="item"></image>
						<view @click="del(imgroup7,imgroup7upData,index)" style="position: absolute;top: -20upx; right: -20upx;font-size: 30upx;">❌</view>
					</view>
					
					<view @click="sel_img7" class="add-img" style="float: left;">
						<text>+</text>
					</view>
					
					<view style="clear: both;"></view>
				</view>
				<view class="exit-btn">
					<view>
						<view>
							<text>
								运费：
							</text>
							<input type="text" v-model="yunFei2">
							<text>
								元
							</text>
						</view>
					</view>
					<view @click="sc">
						<text class="queRen" >确认上传</text>
					</view>
				</view>
		</view>
		
</view>

</template>

<script>
	export default {
		data() {
			return {
				 name:"", 
				 mj:"", 
				 xinxi:"",
				 ind:[],
				 t:null,
				 upNum:false,
				 imgroup6 : [],
				 imgroup6upData:[],
				 imgroup9 : [],
				 imgroup9upData:[],
				 btnTitle:null,
				 btnJiaGe:null,
				 fenLeiListIndex:null,
				 tag : [
					 {name : "正品保证",judge : false},
					 {name : "建材清理",judge : false},
					 {name : "售后保证",judge : false}
				 ],
				 JZtag: [
					 {name : "正品保证",judge : false},
					 {name : "建材清理",judge : false},
					 {name : "售后保证",judge : false}
				 ],
				 yunFei1:null,
				 yunFei2:null,
				 flag:true,
				 btnFlag:false,
				 imgroup1:[],
				 imgroup1upData:[],
				 imgroup7:[],
				 imgroup7upData:[],
				 fenLeiList:[
					{
						fenLeiTitle:"",
						btnTitleArr:[
							
						],
					}
				 ],
				 flagArr:[],
				 uid:this.user.uid,
				 shop:null,
				 price:"",
				 nums:null,
				 fenLeiFlag:false
			}
		},
		onLoad() {
			this.login();
		},
		
		methods: {
			sc:function(){
				let fl=true
				let that=this;
				let usurl=that.url1+"/dinghai/user/SelectMerchant";
				uni.showLoading({
						title:"正在加载中",
						mask:true
					})
				uni.request({
					url: usurl,
					header:{
						"Content-Type" : "application/x-www-form-urlencoded"
					},
					method:'POST',
					data: {
						sid:that.user.uid
					},
				   success: (res) => {
					   console.log(res)
					if(res.statusCode==200){
						console.log((res.data.start1+res.data.end)>res.data.start)
						if((res.data.start1+res.data.end)>res.data.start){
							fl=false
						}else{
							fl=true
						}
						
						
						if(fl){
							uni.showModal({
								title:'温馨提示',
								content:'您不是商家会员不可以上传商品,是否要去充值商家会员',
								success(res) {
									if(res.confirm){
										uni.redirectTo({
											url:'../../huiyuan/huiyuan'
										})
									}
								}
							})
						}else{
							let that=this;
							let usurl=that.url1+"/dinghai/commodity/add";
							if(that.flag){
								for(let i=0;i<this.fenLeiList.length;i++){
									if(this.fenLeiList[i].fenLeiTitle!=""){
										this.fenLeiFlag=true;
										break;
									}
								}
								console.log(this.imgroup6upData.length>=2,this.name!="",this.xinxi!="",this.price!="",this.nums!=null,this.flagArr.length==0,this.fenLeiFlag,this.imgroup9upData.length>0,this.yunFei1!=null,this.fenLeiList[0].btnTitleArr.length>0)
								if(this.imgroup6upData.length>=2,this.name!="",this.xinxi!="",this.price!="",this.nums!=null,this.flagArr.length==0,this.fenLeiFlag,this.imgroup9upData.length>0,this.yunFei1!=null,this.fenLeiList[0].btnTitleArr.length>0){
									uni.showLoading({
											title:"正在添加中",
											mask:true
										})
									
									uni.request({
												url: usurl,
												header:{
													"Content-Type" : "application/x-www-form-urlencoded"
												},
												method:'POST',
												data: {
													name:that.name,
													introduce:that.xinxi,
													price:that.price,
													state:0,
													nums:that.nums,
													type:that.shop.type,
													shopuid:that.shop.id,
													uid:that.uid,
													adress:that.shop.adress,
													img1:JSON.stringify(that.imgroup6upData),
													img2:JSON.stringify(that.imgroup9upData),
													Longitude:that.shop.longitude,
													Latitude:that.shop.latitude,
													freight:that.yunFei1,
													area:1.00,
													label:JSON.stringify(that.tag),
													shopType:JSON.stringify(that.fenLeiList)
												},
										    success: (res) => {
												if(res.statusCode==200){
													console.log(res)
													uni.navigateBack({
														
													})
													uni.showToast({
															title:"添加成功"
													})
												}else{
													uni.showToast({
														title:"您的网络打了个盹",
														icon:"none"
													})
												}
										    },
											fail : function(err){
												uni.showToast({
													title:"您的网络打了个盹",
													icon:"none"
												})
											}
										});
								}else{
									uni.show
									uni.showModal({
										icon:"none",
										title:"请完整填写！轮播图最少两张，包括商品详情图！商品名称和简介，最低价格，商品总数，标签，包括分类标题，并且分类按钮不得显示红色，如显示红色请点击"
									})
								}
									
							}else{
								
								console.log(this.imgroup1upData.length>=2&&this.name!=""&&this.mj!=null&&this.price!=""&&this.xinxi!=""&&this.imgroup7upData.length>0&&this.yunFei2!=null)
								
								if(this.imgroup1upData.length>=2&&this.name!=""&&this.mj!=null&&this.price!=""&&this.xinxi!=""&&this.imgroup7upData.length>0&&this.yunFei2!=null){
									uni.showLoading({
											title:"正在添加中",
											mask:true
										})
									uni.request({
											url: usurl,
											header:{
												"Content-Type" : "application/x-www-form-urlencoded"
											},
											method:'POST',
											data: {
												name:that.name,
												introduce:that.xinxi,
												price:that.price,
												state:0,
												nums:99,
												type:that.shop.type,
												shopuid:that.shop.id,
												uid:that.uid,
												adress:that.shop.adress,
												img1:JSON.stringify(that.imgroup1upData),
												img2:JSON.stringify(that.imgroup7upData),
												Longitude:that.shop.longitude,
												Latitude:that.shop.latitude,
												freight:that.yunFei2,
												area:that.mj,
												label:JSON.stringify(that.JZtag),
												shopType:"[]"
											},
									    success: (res) => {
											if(res.statusCode==200){
												console.log(res)
												uni.navigateBack({
													
												})
												uni.showToast({
													title:"添加成功"
												})
											}else{
												uni.showToast({
													title:"您的网络打了个盹",
													icon:"none"
												})
											}
									    },
										fail : function(err){
											uni.showToast({
												title:"您的网络打了个盹",
												icon:"none"
											})
										}
									});
								}else{
									uni.show
									uni.showModal({
										icon:"none",
										title:"请完整填写！轮播图最少两张，包括商品详情图！商品名称和简介，最低价格，房屋面积，标签"
									})
								}
							}
						}
						
						
					}
				   },
				fail : function(err){
					uni.showToast({
						title:"您的网络打了个盹！",
						icon:"none"
						})
					}
				});
				
				
			},
			login:function(){
				let that=this;
				let usurl=that.url1+"/dinghai/shop/byid";
				uni.showLoading({
					title:"正在查询中",
					mask:true
				})
				uni.request({
						url: usurl,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'GET',
						data: {
							uid:that.uid
						},
				    success: (res) => {
						if(res.statusCode==200){
							console.log(res)
							if(res.data.msg=="success"){
								uni.showToast({
									title:"已入驻请添加"
								})
								if(res.data.data.type=="装修"){
									that.flag=false
								}
								that.shop=res.data.data;
							}else{
								uni.redirectTo({
									url:"../shangjiaruzhu"
								})
							}
						}else{
							uni.showToast({
								title:"您的网络打了个盹",
								icon:"none"
							})
							uni.navigateBack({
								
							})
						}
				    },
					fail : function(err){
						uni.showToast({
							title:"您的网络打了个盹",
							icon:"none"
						})
						uni.navigateBack({
							
						})
					}
				});
			},
			qu:function(){
				this.suanFa();
				this.upNum=!this.upNum
			},
			active:function(i,j){
				this.t=this.fenLeiList[i].btnTitleArr[j].title;
				this.ind=this.fenLeiList[i].btnTitleArr[j].kuCun;
				this.upNum=true;
			},
			suanFa:function(){
				for(let i=0;i<this.fenLeiList.length;i++){
					for(let j=0;j<this.fenLeiList[i].btnTitleArr.length;j++){
						for(let o=0;o<this.fenLeiList[i].btnTitleArr[j].kuCun.length;o++){
							if(this.fenLeiList[i].btnTitleArr[j].kuCun[o].num==null){
								if(this.flagArr.indexOf(this.fenLeiList[i].btnTitleArr[j].title)==-1){
									this.flagArr.push(this.fenLeiList[i].btnTitleArr[j].title)
								}
							}else{ 
								if(this.flagArr.indexOf(this.fenLeiList[i].btnTitleArr[j].title)!=-1){
									this.flagArr.splice(this.flagArr.indexOf(this.fenLeiList[i].btnTitleArr[j].title),1)
								}
							}
						}
					}
				}
				console.log(this.flagArr)
			},
			tianJiaFenLei:function(){
				this.fenLeiList.push({
					fenLeiTitle:"",
					btnTitleArr:[
						
					],
				})
			},
			quXiao:function(){
				this.btnFlag=false;
				this.btnTitle=null;
				this.btnJiaGe=null;
				this.fenLeiListIndex=null;
			},
			queRen:function(){
				let f=true;
				for(let i=0;i<this.fenLeiList.length;i++){
					for(let j=0;j<this.fenLeiList[i].btnTitleArr.length;j++){
						if(this.fenLeiList[i].btnTitleArr[j].title===this.btnTitle){
							f=false
						}
					}
				}
				if(f){
					if(this.btnJiaGe&&this.btnTitle){
						if(this.btnJiaGe.length>0&&this.btnTitle.length>0){
							let arr={
								title:this.btnTitle,
								jg:this.btnJiaGe,
								kuCun:[
									{
										title:this.btnTitle,
										num:null
									},
								]
							};
							for(let i=0;i<this.fenLeiList.length;i++){
								for(let j=0;j<this.fenLeiList[i].btnTitleArr.length;j++){
									if(i!=this.fenLeiListIndex){
										arr.kuCun.push({
											title:this.fenLeiList[i].btnTitleArr[j].title,
											num:null,
										})
									}
								}
							}
							for(let i=0;i<this.fenLeiList.length;i++){
								for(let j=0;j<this.fenLeiList[i].btnTitleArr.length;j++){
									if(i!=this.fenLeiListIndex){
										this.fenLeiList[i].btnTitleArr[j].kuCun.push({
											title:this.btnTitle,
											num:null
										})
									}
								}
							}
							this.fenLeiList[this.fenLeiListIndex].btnTitleArr.push(arr)
							this.quXiao()
							this.suanFa()
							console.log(this.fenLeiList)
						}else{
							uni.showToast({
								title:'请完整填写',
								icon:"none"
							})
						}
					}else{
						uni.showToast({
							title:'请完整填写',
							icon:"none"
						})
					}
					
				}else{
					this.quXiao();
					uni.showToast({
						title:"请不要重复添加",
						icon:"none"
					})
				}
			},
			create:function(i){
				this.fenLeiListIndex=i;
				this.btnFlag=true;
			},
			back : function(){
			   uni.navigateBack({
			  
			   });
			},
			del:function(arr,ar,i){
				arr.splice(i,1)
				ar.splice(i,1)
			},
			    // 选中标签时触发的事件
			changesty : function(index){
				console.log(this.tag[index].judge);
				 if(this.tag[index].judge == true){
					 this.tag[index].judge = false;
				 }else{
					 this.tag[index].judge = true;
				 }
			},
			
			chang : function(index){
				console.log(this.JZtag[index].judge);
				 if(this.JZtag[index].judge == true){
					 this.JZtag[index].judge = false;
				 }else{
					 this.JZtag[index].judge = true;
				 }
			},
			
					
					  // 选择图片,最多6张
					sel_img6 : function(){
						var that = this;
						if(this.imgroup6.length>=6){
							uni.showToast({
								title:"最多上传6张图",
								icon:"none"
							})
							
						}else{
							uni.chooseImage({
							   count: 1, //默认9
							   sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
							   sourceType: ['album'], //从相册选择
							   success: function (res) {
								   console.log(res.tempFilePaths,res);
								   let thatRes=res;
								   if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(res.tempFilePaths[0])){
									   let uploadTask=uni.uploadFile({
									   url: that.url1+'/dinghai/Img/Img', //仅为示例，非真实的接口地址
									   filePath:thatRes.tempFilePaths[0],
									   name: 'files',
									   fileType:"image",
									   success: (uploadFileRes) => {
									       if(uploadFileRes.statusCode===200){
									   		that.imgroup6.push(thatRes.tempFilePaths[0]) 
									   		that.imgroup6upData.push(uploadFileRes.data)
									   	}else{
									   		uni.showToast({
									   			title: '上传图片失败请重试',
									   			icon:"none"
									   		});
									   	}
									   }
									   });
								   }else{
									   uni.showToast({
									   	icon:"none",
										title:"上传格式错误！请上传jpg，jpeg，png格式的图片"
									   })
								   }
							   }
							});
						}
					},
					
					sel_img7 : function(){
						var that = this;
						if(this.imgroup7.length>=6){
							uni.showToast({
								title:"最多上传6张图",
								icon:"none"
							})
							
						}else{
							uni.chooseImage({
							   count: 1, //默认9
							   sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
							   sourceType: ['album'], //从相册选择
							   success: function (res) {
								   console.log(res.tempFilePaths,res);
								   let thatRes=res;
								   if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(res.tempFilePaths[0])){
									   let uploadTask=uni.uploadFile({
									   url: that.url1+'/dinghai/Img/Img', //仅为示例，非真实的接口地址
									   filePath:thatRes.tempFilePaths[0],
									   name: 'files',
									   fileType:"image",
									   success: (uploadFileRes) => {
									       if(uploadFileRes.statusCode===200){
									   		that.imgroup7.push(thatRes.tempFilePaths[0]) 
									   		that.imgroup7upData.push(uploadFileRes.data)
									   	}else{
									   		uni.showToast({
									   			title: '上传图片失败请重试',
									   			icon:"none"
									   		});
									   	}
									   }
									   });
								   }else{
									   uni.showToast({
									   	icon:"none",
										title:"上传格式错误！请上传jpg，jpeg，png格式的图片"
									   })
								   }
							   }
							});
						}
					},
					
					sel_img1 : function(){
						var that = this;
						if(this.imgroup1.length>=6){
							uni.showToast({
								title:"最多上传6张图",
								icon:"none"
							})
							
						}else{
							uni.chooseImage({
							   count: 1, //默认9
							   sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
							   sourceType: ['album'], //从相册选择
							   success: function (res) {
								   console.log(res.tempFilePaths,res);
								   let thatRes=res;
								   if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(res.tempFilePaths[0])){
									   let uploadTask=uni.uploadFile({
									   url: that.url1+'/dinghai/Img/Img', //仅为示例，非真实的接口地址
									   filePath:thatRes.tempFilePaths[0],
									   name: 'files',
									   fileType:"image",
									   success: (uploadFileRes) => {
									       if(uploadFileRes.statusCode===200){
									   		that.imgroup1.push(thatRes.tempFilePaths[0]) 
									   		that.imgroup1upData.push(uploadFileRes.data)
									   	}else{
									   		uni.showToast({
									   			title: '上传图片失败请重试',
									   			icon:"none"
									   		});
									   	}
									   }
									   });
								   }else{
									   uni.showToast({
									   	icon:"none",
										title:"上传格式错误！请上传jpg，jpeg，png格式的图片"
									   })
								   }
							   }
							});
						}
					},
					
					// 选择图片,最多9张
					sel_img9 : function(){
						var that = this;
						if(this.imgroup9.length>=6){
							uni.showToast({
								title:"最多上传6张图",
								icon:"none"
							})
							
						}else{
							uni.chooseImage({
							   count: 1, //默认9
							   sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
							   sourceType: ['album'], //从相册选择
							   success: function (res) {
								   console.log(res.tempFilePaths,res);
								   let thatRes=res;
								   if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(res.tempFilePaths[0])){
									   let uploadTask=uni.uploadFile({
									   url: that.url1+'/dinghai/Img/Img', //仅为示例，非真实的接口地址
									   filePath:thatRes.tempFilePaths[0],
									   name: 'files',
									   fileType:"image",
									   success: (uploadFileRes) => {
									       if(uploadFileRes.statusCode===200){
									   		that.imgroup9.push(thatRes.tempFilePaths[0]) 
									   		that.imgroup9upData.push(uploadFileRes.data)
									   	}else{
									   		uni.showToast({
									   			title: '上传图片失败请重试',
									   			icon:"none"
									   		});
									   	}
									   }
									   });
								   }else{
									   uni.showToast({
									   	icon:"none",
										title:"上传格式错误！请上传jpg，jpeg，png格式的图片"
									   })
								   }
							   }
							});
						}
					}
		 }
}
</script>

<style>
	.LeiBie_fl{
		position: absolute;
		width: 50%;
		background:#F53D4A ;
		color: #fff;
		bottom: 0;
		left: 0;
		height: 70upx;
		text-align: center;
		line-height: 70upx;
	}
	.LeiBie{
		width: 500upx;
		background-color: #fff;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		z-index: 11;
		border-radius:20upx ;
		overflow: hidden;
		padding: 20upx;
	}
	.LeiBie>view:nth-child(1){
		margin-bottom: 70upx;
	}
	.LeiBie input{
		border: 1px solid #000000;
	}
	.muBu{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #000000;
		opacity: .5;
		z-index: 11;
	}
	.FenLeiBtn{
		float: left; 
		background: red;
		border-radius:5px;
		color: #fff;
		border: 0; 
		font-size: 30upx;
		width: auto; 
		height: 60upx;
		padding:0 20upx; 
		margin-right: 30upx;
		line-height: 60upx;
		display: inline-block;
		margin-bottom: 30upx;
		border: 1px solid rgba(0, 0, 0, 0.2);

	}
	.hader-box{
		width: 100%;
		height: 168upx;
		background: #F53D4A;
		position: fixed;
		z-index: 10;
		top: 0;
	}
	
	.hader-box-back{
		width: 40upx;
		height: 40upx;
		margin-top: 75upx;
		margin-left: 20upx;
	}
	
	.hader-box-text{
		color: white;
		margin-left: 240upx;
	}
	
	.inp-style{
		letter-spacing: 1px;
		font-size: 30upx;
		margin-top: 20upx;
		overflow: hidden;
	}
	
	.inp-style-left{
		margin-left: 30upx;
		margin-top: 6upx;
		float: left;
	}
	
	.inp-style-right{
		float: left;
		border-bottom: 1px solid #ccc;
	}
	
	
	.exit-btn{
		width: 100%;
		position: fixed;
		height: 200upx;
		bottom: 0;
		z-index: 10;
		left: 0;
	}
	.exit-btn>view{
		width: 100%;
		height: 50%;
		font-size: 35upx;
		color: #fff;
	}
	.exit-btn>view:nth-child(1){
		background-color: #EB6100FF;
	}
	.exit-btn>view:nth-child(1)>view>text{
		float: left;
	}
	.exit-btn>view:nth-child(1)>view>input{
		float: left;
		width: 100upx;
		border-bottom: 1px solid #ccc;
		margin: 0 10upx;
	}
	.exit-btn>view:nth-child(1)>view{
		float: right;
		margin-right: 50upx;
		margin-top: 25upx;
	}
	.exit-btn>view:nth-child(2){
		position: relative;
		text-align: center;
		line-height: 100upx;
		font-size: 30upx;
		background: #F53D4A;
	}
	
	.add-img{
		margin-top: 24upx;
		width: 100upx;
		height: 100upx;
		border: 2px solid #A5A5A5;
		line-height: 100upx;
		text-align: center;
		color: #A4A4A4;
		margin-left: 20upx;
		
	}
	
	
	.inp-style-right>view{
		margin-top: 20upx;
		float: left;
		width: 145upx;
		height: 40upx;
		border: 1px solid #F53D4A;
		color: #F53D4A;
		padding: 8upx;
		border-radius: 6px;
		margin-left: 40upx;
		text-align: center;
	}
	.fenLei{
		width: 100%;
		height: 50upx;
		background: #F53D4A;
		top: 168upx;
		z-index: 10;
		position: fixed;
	}
	.fenLei>view{
		width: 50%;
		text-align: center;
		line-height: 50upx;
		color: #fff;
		float: left;
		height: 100%;
		font-size: 28upx;
	}
	.fenLei>view>text{
		
	}
	.jiaZhuangAnLi{
		padding: 30upx;
		margin-bottom: 200upx;
		font-size:30upx;
	}
</style>
