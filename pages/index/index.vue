<template>
	<view class="content">
	
	         <!-- 幕布 -->
		<view v-show="judgemb" @touchstart="close" style="width: 100%;height: 100vh;background: #000;opacity: 0.6;position: fixed;top:0;z-index: 99999;"></view>                  
		
		   <!-- 广告图 -->
		<image v-show="judgegg" @click="goguanggao" src="https://api.laotiele.com:9527/image/1579062121858.jpg" style="width: 600upx;height: 600upx;background: red;position: absolute;z-index: 999999;top: 50%;left: 50%;margin-left: -300upx;margin-top: -300upx;"></image>
		
	        <!-- 关闭广告图和幕布 -->
		<image v-show="judgegg" @click="close" src="https://api.laotiele.com:9527/image/static/closezz.png" style="width: 70upx;height: 70upx;position: absolute;z-index: 999999;top: 50%;left: 50%;margin-left: -35upx;margin-top: 350upx;"></image>
		    <!-- 顶部搜索框和城市选择 start-->
		<view class="top-nav">
			
			<view class="top-nav-box">
				<view class="top-nav-left">
		             <view class="find-city" @click="openmap">
						 <view style="margin-top: 8upx; font-size: 25upx; overflow: hidden;white-space: nowrap;text-overflow: ellipsis;float: left;width: 150upx;">{{city}}</view>
						<image src="https://api.laotiele.com:9527/image/static/xia.png" style="width: 30upx;height: 24upx;"></image>
					</view>
				</view>
				
				<view class="top-nav-right">
					<image class='top-find-leftic' src='https://api.laotiele.com:9527/image/static/find.png'></image>
					<text @click="gofind" class='top-find-leftinp' @input="inp" >大家都在搜:  现代简约</text>
			    </view>	
			</view>
			 
		</view>
		     <!-- 顶部搜索框和城市选择 end-->
		
		
		<!-- 顶部轮播图  ——start—— -->
		 <swiper autoplay style="margin-top: 168rpx;" id="shell" :indicator-dots="true" :duration="1000" :interval="5000">
		        <swiper-item v-for="(item,index) in lbt" :key=index >
		            <image class="lbmg" :src="item"></image>
		        </swiper-item>
		  </swiper>
		<!-- 顶部轮播图   ——end—— -->
		
		
		         <!-- 中间的功能跳转 start -->
		<view class="index-icon-grop" >
			 <view class="index-icon-grop-con" v-for="(item,index) in icongr" :key='index' @click="goiconpage(index)">
				 <image :src="item.url"></image>
				 <text style="font-size: 30upx;">{{item.text}}</text>
			 </view>	
		</view>
		       <!-- 中间的功能跳转 end -->
		
		
		    <!-- 底部的商家 start -->
			    <view class="bot-main-box">
					 <view class="suggest" style="margin-left: 20upx;">
						 <text class="blod">推荐——</text>
						 <text style="color: #F53D4A;">附近商家</text>
					 </view>
					 
					 <view class="select_method" style="margin-top: 10upx;margin-left: 20upx">
						     <picker @change="bindPickerChange" :value="index" :range="array" style="width: auto;float: left;">
								  <text class="zonghe" style="font-size: 30upx;color: #808080;">距离排序  </text>
								 <image src="https://api.laotiele.com:9527/image/static/xiag.png" style="width: 24upx;height: 20upx;"></image>
						     </picker>
						 <text style="margin-left: 25upx;">{{types}}km</text>
					 </view>
					 
					 <view class="main-box-content" v-for="(item,index) in FuJinArr" :key="index" @click="go(item)">
						  <image class="main-box-content-image" :src="url+'/image/'+item.shopImg" mode="aspectFill"></image>
						  <view class="main-box-content-textg">
							  <view>
								  <text style="font-size: 30upx;">{{item.name}}</text>
							  </view>
							  <view style="color: #808080;font-size: 30upx;margin-left: 8upx;">
							  	  <text>商家简介：{{item.introduce}}</text>
							  </view>
							  <view class="splfont">
								  <image src="https://api.laotiele.com:9527/image/1579059712554.png" style="width: 36upx;height: 36upx;"></image>
								  <text>{{item.adress}}</text>
								  <!-- <text style="margin-left: 80upx;">死数据Km</text> -->
							  </view>
						  </view>
					 </view>
				</view>
		    <!-- 底部的商家 end -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:this.url1,
				judgemb : true,
				judgegg : true,
				types : 100,
				title: 'picker',
				longitude:0,
				latitude:0,
			    array: ['100km','50km','20km','10km','5km','1km'],
				FuJinArr:[],
				index: 0,
				flg:false,
				city : "重新获取",
				lbt : [],
				icongr : [],
			}
		},
		onLoad() {
			
			
			console.log(this.user)
			//页面加载获取经纬度
			this.getJingWeiDu();
			console.log(this.user);
				this.judgegg = true;
				this.judgemb = true;
			// 缓存限制弹出的加入我们
			// if(!uni.getStorageSync('zhaoMu')){
			// 	uni.setStorageSync('zhaoMu','true')
			// 	this.judgegg = true;
			// 	this.judgemb = true;
			// }else{
			// 	this.judgegg = false;
			// 	this.judgemb = false;
			// }
			let that=this;
			let usurl2=that.url1+"/dinghai/Banner/selectAllBanner";
			uni.showLoading({
				title: '正在获取',
				mask: true
			});
			uni.request({
			    url: usurl2,
				header:{
					"Content-Type" : "application/x-www-form-urlencoded"
				},
				method:'POST',
			    data: {
					
				},
			    success: (res) => {
					if(res.statusCode==200){
						res.data.flag.forEach((item,i)=>{item.banneradress=JSON.parse(item.banneradress)})
						this.setLunBo(res.data.flag)
						console.log(this.lunBo)
						that.lunBo.forEach(
						(item,i)=>{
							console.log(item.bannername)
							if(item.bannername=='首页'){
								this.lbt=item.banneradress
								}
							}
						)
					}else{
						uni.showToast({
							title: '您的网络打了个盹！',
							icon:"none"
						});
					}
					
					
					
					let qdlist=[]
					setInterval(()=>{
						let that=this;
							let usurl=that.url1+"/dinghai/order/selectAllOrder";
							uni.request({
								url: usurl,
								header:{
									"Content-Type" : "application/x-www-form-urlencoded"
								},
								method:'POST',
								data: {
									
								},
						    success: (res) => {
								console.log(1)
								if(qdlist.length!=res.data.flag.length&&qdlist.length>0&&qdlist.length<res.data.flag.length){
									console.log('准备播放');
									const innerAudioContext = uni.createInnerAudioContext();
									innerAudioContext.autoplay = true;
									innerAudioContext.src = 'https://api.laotiele.com:9527/image/dingDan.mp3';
									innerAudioContext.onPlay(() => {
									  console.log('开始播放');
									});
									innerAudioContext.onError((res) => {
									  console.log(res.errMsg);
									  console.log(res.errCode);
									});
								}
								qdlist=res.data.flag
						    },
							fail : function(err){
								console.log(err)
							}
						});
					
					},5000)
			    },
				fail : function(err){
					console.log(err)
					uni.showToast({
						title: '您的网络打了个盹！',
						icon:"none"
					});
				}
			})
			this.flagFlg()
			
			
		},
		onShow(){
			
		},
		methods: {
			flagFlg:function (){
					let that=this;
					let usurl=that.url1+"/dinghai/Switch/updateSwitch";
					uni.request({
						url: usurl,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
						data: {
							
						},
				    success: (res) => {
						console.log(res)
						this.flg=res.data.flag==200?true:false;
						this.icongr=res.data.flag==200?[
					{
						url : "https://api.laotiele.com:9527/image/static/icongroup/t1.png",
						text : "装修公司"
					},
					{
						url : "https://api.laotiele.com:9527/image/static/icongroup/t2.png",
						text : "建材选购"
					},
					{
						url : "https://api.laotiele.com:9527/image/static/icongroup/t3.png",
						text : "家具购买"
					},
					{
						url : "https://api.laotiele.com:9527/image/static/icongroup/t4.png",
						text : "家纺"
					},
					{
						url : "https://api.laotiele.com:9527/image/static/icongroup/t7.png",
						text : "老铁拉货"
					},
					{
						url : "https://api.laotiele.com:9527/image/static/icongroup/t5.png",
						text : "加入我们"
					},
					{
						url : "https://api.laotiele.com:9527/image/static/icongroup/t6.png",
						text : "更多"
					},
					{
						url : "https://api.laotiele.com:9527/image/static/icongroup/t8.png",
						text : "暂未开放"
					},
				]:[]
				    },
					fail : function(err){
						
					}
				})
			},
			go:function(item){
				uni.navigateTo({
					url:"dianPu/dianPu?item="+JSON.stringify(item)
				})
			},
			//发起获取当前商铺请求
			reqJingWeiDu:function(){
				uni.showLoading({
					mask: true,
					title:"正在获取商家"
				})
				let that=this;
				let url = that.url1+"/dinghai/shop/getnear";
				uni.request({
					 url : url,
							 header : {
								 "Content-type" : "application/x-www-form-urlencoded"
							 },
							 method : 'GET',
							 data : {
								  Latitude:that.latitude,
								  Longitude:that.longitude,
								  distance:that.types
							 },
							 success : function(res){
								 console.log(res);
								 that.FuJinArr=res.data.juarry;
								 console.log(that.FuJinArr)
							     if(res.statusCode===200){
									 console.log(res);
									 that.FuJinArr=res.data.juarry;
									 console.log(that.FuJinArr)
									 uni.showToast({
									 	title:"加载成功"
									 })
								 }else{
									 uni.showToast({
									 	title:"您的网络开了小差",
										icon:"none"
									 })
								 }
							 },
							 fail : function(err){
								 console.log(err);
								 uni.showToast({
								 	title:"您的网络开了小差",
									icon:"none"
								 })
							 }
				});
			},
			
			chongXinHuoQu:function(){
				let that=this;
				uni.showModal({
				    title: '提示',
				    content: '获取地理位置失败请重新获取',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
							that.openmap()
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			
			//获取用户当前经纬度
			getJingWeiDu:function(){
				let that=this;
				uni.getLocation({
					altitude:true,
					geocode:true,
					type: 'wgs84',
					success: function (res) {
					console.log(that.longitude=res.longitude);
					console.log(that.latitude=res.latitude);
					console.log(res)
					that.reqJingWeiDu();
					uni.request({
						header:{
							"Content-Type": "application/text"
						},
						url:'https://apis.map.qq.com/ws/geocoder/v1/?location='+that.latitude+','+that.longitude+'&key=MVGBZ-R2U3U-W5CVY-2PQID-AT4VZ-PDF35',
						success(re) {
							console.log(re)	   
							if(re.statusCode===200){
								console.log("获取中文街道地理位置成功")
								that.city=re.data.result.address;
								that.setArd(that.longitude,that.latitude,that.city);
							}else{
								that.chongXinHuoQu()
							}
						 }
					})
					},
					fail:function(){
						that.chongXinHuoQu()
					}
				});
			},
			// 去广告页面
			goguanggao : function(){
				uni.navigateTo({
					url : "guanggao/guanggao"
				})
			},
			
			  // 关闭广告和幕布
			close : function(){
				this.judgegg = false;
				this.judgemb = false;
				 uni.setStorageSync("zzzzzzz","11111");
			},
			
			getDate(type) {
			            const date = new Date();
			            let year = date.getFullYear();
			            let month = date.getMonth() + 1;
			            let day = date.getDate();
			
			            if (type === 'start') {
			                year = year - 60;
			            } else if (type === 'end') {
			                year = year + 2;
			            }
			            month = month > 9 ? month : '0' + month;;
			            day = day > 9 ? day : '0' + day;
			            return `${year}-${month}-${day}`;
			        },
					bindPickerChange: function(e) {
						let i=e.target.value;
					     e.target.value;
						if(i==0){
							this.types = 100;
							this.reqJingWeiDu();
						}else if(i==1){
							this.types = 50
							this.reqJingWeiDu();
						}else if(i==2){
							this.types = 20
							this.reqJingWeiDu();
						}else if(i==3){
							this.types = 10
							this.reqJingWeiDu();
						}else if(i==4){
							this.types = 5
							this.reqJingWeiDu();
						}else {
							this.types = 1
							this.reqJingWeiDu();
						}
			        },
			    // 去搜索页面
			gofind : function(){
				uni.navigateTo({
					url : "find/find"
				});
			},
			
			      // 去功能页面
			goiconpage : function(index){
				var name = this.icongr[index].text;
				if(index == 0){
					uni.navigateTo({
						url : "decoration/decoration?name="+name
					})
				}
				
				if(index == 1){
					uni.navigateTo({
						url : "building/building?name="+name
					})
				}
				
				if(index == 2){
					uni.navigateTo({
						url : "furniture/furniture?name="+name
					})
				}
				
				if(index == 3){
					uni.navigateTo({
						url : "textile/textile?name="+name
					})
				}
				
				if(index == 4){
					uni.navigateTo({
						url : "join/join?name="+name
					})
				}
				
				if(index == 5){
					uni.navigateTo({
						url : "../mes/shangjiaruzhu/shangjiaruzhu"
					})
				}
			},
			     // 去页面函数结束
		    openmap : function(){
				var that = this;
				uni.chooseLocation({
				    success: function (res) {
						var tmp = res;
				        console.log('位置名称：' + res.name);
				        console.log('详细地址：' + res.address);
				        console.log('纬度：' + res.latitude);
				        console.log('经度：' + res.longitude);		
						if(res.address!=''){
							uni.showModal({
							        title: '是否要切换此位置',
							        content: tmp.name,
							        cancelText:'切换',
							        confirmText:'取消',
							        success(res){
							          if(res.cancel){
										  that.city = tmp.name;
										  uni.showToast({
										  	title: '切换成功',
											icon : "success"
										  });
							             console.log("点击了确定");
										 console.log(that.longitude=tmp.longitude);
										 console.log(that.latitude=tmp.latitude);
										 that.setArd(that.longitude,that.latitude,that.city)
										 that.reqJingWeiDu();
							          }else if(res.confirm){
							             console.log("点击了取消");
							          }
							        }
							   });
						}else{
							uni.showToast({
								title: '请选择地点',
								icon : "none",
							});
						}
				    }
				});
			}
		
		}
	}
</script>

<style>
	@import url("index.css");
	#shell{  width: 100%;height: 380upx;}.lbmg{  width: 100% !important;height: 100%;}
</style>
