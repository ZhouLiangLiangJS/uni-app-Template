<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">待验收</text>
		</view>
		
		<view class="main-box" @click="showgn">
			<view class="main-box-title">
				<text class="gray">工作内容:</text>
				<text style="width: 35%;">切墙纸sadasdsad</text>
				<text style="margin-left: 2%;" class="gray">开工时间:</text>
				<text style="width: 20%;">2019-11-11dsadsadsda</text>
			</view>
			<view class="main-box-content" style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">
			    <view style="margin-top:10upx;:hidden;white-space:nowrap;text-overflow:ellipsis;" class="main-box-content-gongZuo">
					<text class="gray">工作地点:</text>
					<text style="width: 35%;">田园小区 三号楼十层sadsadsadsa</text>
					<text style="margin-left: 2%;" class="gray">理想工期:</text>
					<text style="width: 23%;">7天+</text>
				</view>
				<view style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">
					<text class="gray">备注:</text>
					<text>室内面积108m，预找贴墙纸熟练工一名价格面议</text>
				</view>
			</view>
			
			<view class="main-box-bot">
				<text class="gray">预留电话:</text>
				<text style="width: 35%;">15713775404</text>
				<text style="margin-left: 2%;" class="gray">预估价位:</text>
				<text style="width: 23%;">1k-2k</text>
			</view>
			<view class="main-box-bottom" >
				已完工请确认
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ListFlag:false,
				time:false
			}
		},
		onLoad(options) {
		},
		onShow(){
			
		},
		methods: {
			back : function(){
			   uni.navigateBack({
			
			   });
			},
			
			   //  点击整体时显示功能
			showgn : function(){
				
			}
		}
	}
</script>

<style>
	.tanChu{
		position: absolute;
		width: 100upx;
		z-index: 8;
		height: 160upx;
		padding: 10upx;
		background-color: #626262;
		border-radius:10upx;
		right: 20upx;
		top: 75upx;
	}
	.tanChu>.tanChu-jianTou{
		width: 20upx;
		height: 20upx;
		background-color: #626262;
		position: absolute;
		right: 25upx;
		top: -8upx;
		transform: rotate(45deg);
		z-index: 8;
	}
	.tanChu>.tanChu-title{
		width: 100%;
		height: 25%;
		font-size: 25upx;
		color: #fff;
		text-align: center;
		line-height: 40upx;
		z-index: 9;
	}
	.hader-box{
		width: 100%;
		height: 168upx;
		background: #F53D4A;
		position: relative;
	}
	
	.hader-box-back{
		width: 40upx;
		height: 40upx;
		margin-top: 75upx;
		margin-left: 20upx;
	}
	
	.hader-box-text{
		color: white;
		margin-left: 260upx;
	}
	
	.main-box{
		margin: 40upx auto;
		border-radius: 6px;
		width: 92%;
		background: #fff;
		box-shadow: 0px 0px 5px #ccc;
		padding: 20upx;
		position: relative;
	}
	
	.main-box-title{
		width: 100%;
		height: 60upx;
		border-bottom: 1px solid #bfbfbf;
		
	}
	.main-box-title>text{
		display: inline-block;
		width: 20%;
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	.main-box-content{
		width: 100%;
		height: 130upx;
	}
	
	.main-box-bot{
		width: 100%;
		height: 60upx;
		line-height: 60upx;
		border-top: 1px solid #bfbfbf;
	}
	
	.main-box-bottom{
		width: 100%;
		height: 80upx;
		background-color: #F53D4A;
		border-radius:20upx ;
		text-align: center;
		line-height: 80upx;
		color: #fff;
		font-size: 30upx;
	}
	
	.main-box-title>text{
		font-size: 30upx;
		letter-spacing: 1px;
	}
	
	.main-box-content>view>text{
		font-size: 30upx;
		letter-spacing: 1px;
	}
	
	.main-box-bot>text{
		display: inline-block;
		width: 20%;
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
		font-size: 30upx;
		letter-spacing: 1px;
	}
	.main-box-content-gongZuo text{
		display: inline-block;
		width: 20%;
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	
	.gray{
		color: #a4a4a4;
	}
	.main-box-top-img{
		width: 20upx;
		position: absolute;
		right: 20upx;
		top: 20upx;
	}
</style>