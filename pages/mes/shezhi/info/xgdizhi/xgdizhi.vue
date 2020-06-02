<template>
	
	<view v-if="judgehava">
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">地址管理</text>
		</view>
		<button class="exit-btn" @click="goadddz">修改地址</button>
	</view>
	<view v-else>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">地址管理</text>
		</view>
		
		<view style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
			<view class="success">
				<image src="https://api.laotiele.com:9527/image/static/tz-success.png"></image>
			</view>
			<text style="margin-top: 40upx;">
			     没有地址
			</text>
		</view>
		
		<button class="exit-btn" @click="goadddz">新建地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				judgehava : true,
			}
		},
		onLoad() {
		    
		},
		onShow(){
			if(uni.getStorageSync('addressno') == ""){
				this.judgehava = false;
			}else{
				console.log(uni.getStorageSync('addressno'));
				this.judgehava = true;
			}
		},
		methods: {
			back : function(){
			   uni.navigateBack({
			
			   });
			},
			
			   // 去增加新地址
			goadddz : function(){
				uni.navigateTo({
					url : "adddizhi/adddizhi"
				})
			}
		}
	}
</script>

<style>
	.success{
		width: 540upx;
		height: 450upx;
		margin-left: -80upx;
		margin-top: 60upx;
	}
	
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
	
	
	.exit-btn{
		width: 70%;
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
