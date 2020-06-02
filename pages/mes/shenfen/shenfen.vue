<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">{{name}}</text>
		</view>
		
		
		<view class="sf-box">
			
			<view @click="showthis1">
				<image src="https://api.laotiele.com:9527/image/static/shangjia.png"></image>
				<text>商家</text>
				<view v-show="judgeshow1" style="width: 12upx;height: 12upx;border-radius: 50%;background: red;"></view>
			</view>
			
			<view @click="showthis2">
				<image src="https://api.laotiele.com:9527/image/static/gongren.png"></image>
				<text>工人</text>
				<view v-show="judgeshow2" style="width: 12upx;height: 12upx;border-radius: 50%;background: red;"></view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name : "",
				judgeshow1 : !this.sf,
				judgeshow2 : this.sf
			}
		},
		onLoad(options) {
		    this.name = options.name;
		},
		
		onShow(){
			
		},
		methods: {
			back : function(){
			   uni.navigateBack({
			  
			   });
			},
			
			showthis1 : function(){
				this.judgeshow1 = true;
				this.judgeshow2 = false;
				this.setSf(false)
			},
			
			showthis2 : function(){
				this.judgeshow2 = true;
				this.judgeshow1 = false;
				this.setSf(true)
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
		margin-left: 240upx;
	}
	
	
	.sf-box{
		margin-top: 80upx;
		display: flex;
		justify-content: space-around;
		font-size: 30upx;
	}
	
	.sf-box>view{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.sf-box>view>image{
		width: 200upx;
		height: 200upx;
	}

</style>
