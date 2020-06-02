<template>
	<view>
		 <view class="hader-box">
			 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
			 <text class="hader-box-text">建材选购</text>
		 </view>
		 <swiper autoplay style="" id="shell" :indicator-dots="true" :duration="1000" :interval="5000">
		          <swiper-item v-for="(item,index) in lbt" :key=index >
		             <image class="lbmg" :src="item"></image>
		         </swiper-item>
		  </swiper>
		  <view class="tuiJian">
			  	<view class="tuiJian_div" v-for="(item,i) in shop" :key="i" @click="goShopping(item)">
			  		<view class="tuiJian_div_img">
			  			<image  :src="url+'/image/'+item.img1[0]" mode="aspectFill"></image>
			  		</view>
			  		<view class="tuiJian_div_top">
			  			<text>{{item.name}}</text>
			  		</view>
			  		<view class="tuiJian_div_bottom">
			  			<text class="tuiJian_div_bottom_jiaGe">￥{{item.price}}</text>
			  			<text class="tuiJian_div_bottom_fuKuan">{{item.type!='装修'?('运费：'+item.freight+'元'):(item.area+'㎡')}}</text>
			  			<image :src="item.type!='装修'?'https://api.laotiele.com:9527/image/static/zzzzzzzzzzzzzzzz/biaoqiangouwuche@2x.png':'https://api.laotiele.com:9527/image/static/gongrenPingJia.png'" mode="widthFix"></image>
			  		</view>
			  	</view>
		  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lbt : [
					
				],
				shop:[],
				ard:this.ard,
				url:this.url1
			}
		},
		onLoad(options) {
			this.getArr()
		},
		onShow() {
			this.lunBo.forEach(
			(item,i)=>{
				console.log(item.bannername)
				if(item.bannername=='建材'){
					this.lbt=item.banneradress
					}
				}
			)
		},
		methods: {
			goShopping:function(a){
				let that=this;
				let usurl2=that.url1+"/dinghai/shop/byid";
				uni.showLoading({
					title: '正在获取',
					mask: true
				});
				uni.request({
				    url: usurl2,
					header:{
						"Content-Type" : "application/x-www-form-urlencoded"
					},
					method:'GET',
				    data: {
						uid:a.uid
					},
				    success: (res) => {
						if(res.statusCode==200){
							uni.showToast({
								title: '加载成功'
							});
							console.log(res)
							uni.navigateTo({
								url:"../goShopping/goShopping?goShopping="+JSON.stringify(a)+'&shop='+JSON.stringify(res.data.data),
								complete(res){
									console.log(res)
								}
							})
						}else{
							uni.showToast({
								title: '您的网络打了个盹！',
								icon:"none"
							});
						}
				    },
					fail : function(err){
						console.log(err)
						uni.showToast({
							title: '您的网络打了个盹！',
							icon:"none"
						});
					}
				})
			},
			go:function(item){
				uni.navigateTo({
					url:"../dianPu/dianPu?item="+JSON.stringify(item)
				})
			},
			getArr:function () {
				let that=this;
				let usurl=that.url1+"/dinghai/commodity/getbytypeall";
				uni.showLoading({
					title:'正在加载',
					mask: true
				})
				uni.request({
							url: usurl,
							header:{
								"Content-Type" : "application/x-www-form-urlencoded"
							},
							method:'GET',
							data: {
								type:'建材',
								start:1,
								size:20
							},
					    success: (res) => {
							console.log(res)
							if(res.data.code==200){
								that.shop=res.data.data;
								for(let i=0;i<that.shop.length;i++){
									that.shop[i].img1=JSON.parse(that.shop[i].img1);
									that.shop[i].img2=JSON.parse(that.shop[i].img2);
									// that.shop[i].shopType=JSON.parse(that.shop[i].shopType);
									// that.shop[i].label=JSON.parse(that.shop[i].label)
								}
								uni.showToast({
									title:"加载成功",
									icon:"none"
								})
							}else{
								uni.showToast({
									title:"您的网络打了个盹",
									icon:"none"
								})
							}
					    },
						fail : function(err){
							console.log(err)
							uni.showToast({
								title:"您的网络打了个盹",
								icon:"none"
							})
						}
					});
			},
			back : function(){
			   uni.navigateBack({

			   });
			},
			
		}
	}
</script>

<style>
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
	#shell{
		width: 100%;height: 380upx;
		margin-top:168upx;
	}.lbmg{
		width: 100% !important;height: 100%;
	}
	
	
	.tuiJian{
		width: 92%;
		padding: 30upx 4% 0 4%;
		margin-bottom: 100rpx;
		overflow: hidden;
	}
	.tuiJian_title{
		color: #000000;
		width: 100%;
		font-size: 30rpx;
		height: 60rpx;
	}
	.tuiJian_div{
		float: left;
		width: 47%;
		height: 480rpx;
		border-radius: 10rpx;
		box-shadow: -1px 1px 5px #aaa;
		overflow: hidden;
		margin-bottom: 40rpx;
	}
	.tuiJian_div:nth-child(odd){
		margin-right: 6%;
	}
	.tuiJian_div .tuiJian_div_img{
		width: 100%;
		height: 66%;
	}
	.tuiJian_div .tuiJian_div_img>image{
		width: 100%;
		height: 100%;
	}
	.tuiJian_div_top{
		height: 14%;
		position: relative;
		padding: 0 10rpx;
	}
	.tuiJian_div_top text{
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
		position: absolute;
		font-size: 27rpx;
		color: #000;
	}
	.tuiJian_div_bottom{
		height: 20%;
		font-size: 30rpx;
		position: relative;
		padding: 0 10rpx;
	}
	.tuiJian_div_bottom text{
		position: absolute;
	}
	.tuiJian_div_bottom .tuiJian_div_bottom_jiaGe{
		color: #F53D4A;
		bottom: 5rpx;
	}
	.tuiJian_div_bottom .tuiJian_div_bottom_fuKuan{
		top: 10rpx;
		font-size: 23rpx;
		color: #808080;
	}
	.tuiJian_div_bottom image{
		position: absolute;
		bottom: 0;
		right: 10rpx;
		width:60rpx;
	}
</style>

