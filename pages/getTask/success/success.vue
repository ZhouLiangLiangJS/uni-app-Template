<template>
	<view>
		<view class="hader-box">
			<image  @click="back" src="https://api.laotiele.com:9527/image/static/zuo.png" mode="widthFix"></image>
			<text class="hader-box-text">发单</text>
		</view>
		
		<view style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
			<view class="success">
				<image mode="widthFix" src="https://api.laotiele.com:9527/image/static/tz-success.png"></image>
			</view>
			<text style="margin-top: 60upx;">
				恭喜您！ 发布成功
			</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			back:function(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style>
	.success{
		width: 540upx;
		height: 450upx;
		margin: 50upx auto;
	}
	.success>image{
		width: 100%;
		
	}
	.hader-box{
		width: 100%;
		height: 168upx;
		line-height: 200upx;
		background: #F53D4A;
		text-align: center;
		color: #fff;
		position: relative;
	}
	.hader-box>image{
		width: 40upx;
		position: absolute;
		left: 20upx;
		top: 75upx;
	}
</style>
