<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">{{name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name : "",
			}
		},
		onLoad(options) {
		   this.name = options.name;
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
		margin-top: 75upx;
		margin-left: 20upx;
	}
	
	.hader-box-text{
		color: white;
		margin-left: 240upx;
	}
</style>