<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">更换电话</text>
		</view>
		
		<view class="tel-content">
			<view>{{tel}}</view>
			
			<view style="margin-top: 60upx;">
				<view style="float: left;border-bottom: 1px solid #c9c9c9;">
					<input type="text" placeholder="请输入新手机号码">
				</view>
				<text style="color: #F53D4A;float: right;margin-right: 80upx;">获取验证码</text>
				
				<view style="clear: both;"></view>
			</view>
			
			<view style="margin-top: 60upx;">
				<view style="float: left;border-bottom: 1px solid #c9c9c9;">
					<input type="text" placeholder="请输入验证码">
				</view>
				
				<view style="clear: both;"></view>
			</view>
		</view>
		
		<button class="exit-btn">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tel : ""
			}
		},
		onLoad(options) {
			console.log(options.tel);
		    this.tel = options.tel;
		},
		methods: {
			back : function(){
			   uni.navigateBack({
			
			   });
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
	
	.tel-content{
		letter-spacing: 1px;
		font-size: 14px;
		margin-top: 60upx;
		margin-left: 40upx;
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
		margin-top: 260upx;
	}
</style>
