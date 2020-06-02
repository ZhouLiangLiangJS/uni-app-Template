<template>
	<view>
		 <view class="hader-box">
			 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
			 <text class="hader-box-text">查看店铺</text>
		 </view>
		 <!-- <swiper autoplay style="" id="shell" :indicator-dots="true" :duration="1000" :interval="5000">
		          <swiper-item v-for="(item,index) in lbt" :key=index >
		             <image class="lbmg" :src="item.url"></image>
		         </swiper-item>
		  </swiper> -->
		  <view class="shangJia">
			  <view>
				  <image :src="url+'/image/'+itemArr.shopImg" mode="aspectFill"></image>
					<text class="shangJia_title">{{itemArr.name}}</text>
					
					<!-- <text class="shangJia_liuLan">{{itemArr.adress}}</text> -->
			  </view>
			  <view>
				  <image v-for="count in xingJi" :key="count" src="https://api.laotiele.com:9527/image/static/xingYiDian.png" mode="widthFix"></image>
				  <image v-for="count in (5-xingJi)" :key="count"  src="https://api.laotiele.com:9527/image/static/xingWiDian.png" mode="widthFix"></image>
			  </view>
			  <view style="position: absolute;right: 30upx;bottom: 0;">
			  	<text class="shangJia_liuLan">联系电话：<text style="color:#F53D4A">{{shopUser.tel}}</text></text>
			  </view>
			  <text class="shangJia_text1">{{itemArr.type=='装修'?'装修案例':'商品'}}</text>
			  <!-- <text class="shangJia_text2">查看更多</text> -->
		  </view>
		  <view class="tuiJian">
			  	<view class="tuiJian_div" @click="goShopping(item,itemArr)" v-for="(item,i) in shopArr" :key="i">
			  		<view class="tuiJian_div_img">
			  			<image  :src="url+'/image/'+item.img1[0]" mode="aspectFill"></image>
			  		</view>
			  		<view class="tuiJian_div_top">
			  			<text>{{item.name}}</text>
			  		</view>
			  		<view class="tuiJian_div_bottom" v-if='itemArr.uid==useUser.uid?false:true'>
			  			<text class="tuiJian_div_bottom_jiaGe">￥{{item.price}}</text>
			  			<text class="tuiJian_div_bottom_fuKuan">{{item.type!='装修'?('运费：'+item.freight+'元'):(item.area+'㎡')}}</text>
			  			<image :src="item.type=='装修'?'https://api.laotiele.com:9527/image/static/gongrenPingJia.png':'https://api.laotiele.com:9527/image/static/zzzzzzzzzzzzzzzz/biaoqiangouwuche@2x.png'" mode="widthFix"></image>
			  		</view>
					<view class="" v-if='itemArr.uid==useUser.uid?true:false'>
						<button type="primary" @click.stop="xiajia(item,i)" style="width: 80%;height: 60upx;font-size: 30upx;line-height: 60upx;text-align: center;margin: 0 auto;padding: 0;">下架商品</button>
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
				xingJi:5,
				itemArr:null,
				url:this.url1,
				shopArr:[],
				useUser:this.user,
				shopUser:{}
			}
		},
		onLoad(options) {
			this.itemArr=JSON.parse(options.item);
			this.getshop()
			
			
			
		},
		methods: {
			
			xiajia:function(item,i){
				console.log(item)
				let that=this;
				let usurl=that.url1+"/dinghai/commodity/deleteCommidity";
				uni.showLoading({
					title:'正在下架',
					mask: true
				})
				uni.request({
							url: usurl,
							header:{
								"Content-Type" : "application/x-www-form-urlencoded"
							},
							method:'POST',
							data: {
								id:item.id
							},
					    success: (res) => {
							if(res.data.flag==200){
								uni.hideLoading()
								that.shopArr.splice(i,1)
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
			getshop:function(){
				let that=this;
				let usurl=that.url1+"/dinghai/commodity/getbyshop";
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
								shopuid:that.itemArr.id,
								start:1
							},
					    success: (res) => {
							if(res.statusCode==200){
								that.shopArr=res.data.flag;
								for(let i=0;i<that.shopArr.length;i++){
									that.shopArr[i].img1=JSON.parse(that.shopArr[i].img1);
									that.shopArr[i].img2=JSON.parse(that.shopArr[i].img2);
								}
								
								
								uni.request({
											url: that.url1+"/dinghai/user/selectUser",
											header:{
												"Content-Type" : "application/x-www-form-urlencoded"
											},
											method:'GET',
											data: {
												uid:that.itemArr.uid
											},
									    success: (res1) => {
											that.shopUser=res1.data.flag
									    },
										fail : function(err){
											console.log(err)
											uni.showToast({
												title:"您的网络打了个盹",
												icon:"none"
											})
										}
									});
								
								
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
			goShopping:function(a,b){
				uni.navigateTo({
					url:"../goShopping/goShopping?goShopping="+JSON.stringify(a)+'&shop='+JSON.stringify(b)
				})
			}
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
		height: 60upx;
	}
	.shangJia{
		width: 100%;
		height: 200upx;
		position: relative;
		font-size: 30upx;
		margin-top: 168upx;
	}
	.shangJia_text1{
		position: absolute;
		left: 30upx;
		bottom: 0upx;
	}
	.shangJia_text2{
		position: absolute;
		right: 30upx;
		bottom: 0upx;
	}
	.shangJia>view:nth-child(1){
		width: 40%;
		height: 100upx;
		position: absolute;
		left: 30upx;
		top: 30upx;
	}
	.shangJia>view:nth-child(1)>image{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
	}
	.shangJia>view:nth-child(1)>text{
		position: absolute;
	}
	.shangJia_title{
		top:10upx;
		left: 120upx;
		font-weight: 600;
	}
	.shangJia_liuLan{
		bottom:10upx;
		left: 120upx;
		color: #808080;
	}
	.shangJia>view:nth-child(2){
		width: 40%;
		height: 100upx;
		position: absolute;
		right: 30upx;
		top: 30upx;
	}
	.shangJia>view:nth-child(2)>image{
		width: 50upx;
		height: 50upx;
		float: left;
	}
</style>

