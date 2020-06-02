<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">{{name}}</text>
		</view>
		
		<view class="main-content-box">
			<view class="fect-group" @click="grxx">
							 <view class="fect-group-left">
								 <text>个人信息</text>
							 </view>
							 
							 <image class="fect-group-right" src="https://api.laotiele.com:9527/image/static/mesimg/merig.png"></image>
			</view>
			
			<view class="fect-group" @click="zhaq">
							 <view class="fect-group-left">
								 <text>账号与安全</text>
							 </view>
							 
							 <image class="fect-group-right" src="https://api.laotiele.com:9527/image/static/mesimg/merig.png"></image>
			</view>
			
			<view class="fect-group" @click="gywm">
							 <view class="fect-group-left">
								 <text>关于我们</text>
							 </view>
							 
							 <image class="fect-group-right" src="https://api.laotiele.com:9527/image/static/mesimg/merig.png"></image>
			</view>
		</view>
		
		
		<button class="exit-btn" @click="tuichu">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name : ""
			}
		},
		onLoad(options) {
		    this.name = options.name;
		},
		methods: {
			tuichu(){
				this.setUser('未登录')
				this.setTime1(0)
				this.setTime2(0)
				this.setHuiyuan(false)
				uni.redirectTo({
					url:'../../login/index/index'
				})
			},
			back : function(){
			   uni.navigateBack({
			
			   });
			},
			grxx : function(){
				uni.navigateTo({
					url : "info/info"
				})
			},
			gywm : function(){
				uni.navigateTo({
					url : "gywm/gywm"
				})
			},
			
			zhaq : function(){
			    uni.navigateTo({
			    	url : "zhaq/zhaq"
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
	}
	
	.hader-box-back{
		width: 40upx;
		height: 40upx;
		margin-top: 70upx;
		margin-left: 20upx;
	}
	
	.hader-box-text{
		color: white;
		margin-left: 260upx;
	}
	
	
	
	
	
	
.main-content-box{
	margin-top: 20upx;
	width: 100%;
	height: auto;
	padding: 20upx;
}

.fect-group{
	margin-top: 50upx;
	width: 100%;
	height: 50upx;
}

.fect-group-left>text{
	 margin-top: 10upx;
	font-size: 30upx;
	margin-left: 12upx;
	letter-spacing: 1px;
	float: left;
}


.fect-group-left{
	float: left;
	margin-left: 20upx;
}

.fect-group-right{
	margin-top: 12upx;
	float: right;
	width: 40upx;
	height: 40upx;
	margin-right: 50upx;
}

.exit-btn{
	width: 90%;
	height: 70upx;
	background: #F53D4A;
	font-weight: 300;
	color: #fff;
	letter-spacing: 1px;
	line-height: 70upx;
	border-radius: 8px;
	margin-top: 300upx;
}
</style>
