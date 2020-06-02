<template>
	<view>
		<view class="hader-box">
			<image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
			<text class="hader-box-text">关于我们</text>
		</view>
	    <image class="bg" src="https://api.laotiele.com:9527/image/static/grjjbg.png"></image>
		<view class="main-box">
			<view>
				<view style="width: 100%;text-align: center;">
					<image src="https://api.laotiele.com:9527/image/1575611889808.png" mode="aspectFit" style="width:200upx ;height: 200upx;margin: 100upx;"></image><br>
					老铁乐<br>
					版本：1.0.1 <br>
						河南鼎海装饰工程有限公司 版权所有<br>
						温馨提示：如有疑问请联系电话 0371-155950959
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(options) {
		    
		},
		methods: {
			back:function(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style>
	.bg{
		position: fixed;
		top: 0;
		width: 100%;
		height: 100vh;
	}
	.hader-box{
		width: 100%;
		height: 168upx;
		background: #F53D4A;
		position: fixed;
		top: 0;
		z-index: 10;
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
	.main-box{
		z-index: 9;
		position: absolute;
		top: 200upx;
		width: 100%;
		font-size: 30upx
	}
</style>
