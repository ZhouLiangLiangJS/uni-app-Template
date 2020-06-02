<template>
	<view style="background-color: #F4F4F4;padding-bottom: 100upx;">
		<view class="hader-box">
			<image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
			<text class="hader-box-text">订单详情</text>
		</view>
		<view class="main-box">
			<view class="main-box-top">
				<view class="main-box-top-top">
					<view>
						<text>工人信息：</text>
						<text>王师傅</text>
					</view>
					<view>
						<text>擅长工种：</text>
						<text>贴墙纸</text>
					</view>
					<view>
						<text>从业工龄：</text>
						<text>10年</text>
					</view>
					<view>
						<text>综合评分：</text>
						<text>10.0分</text>
					</view>
					<view class="qiangDanShiJian">
						<text>抢单时间：</text>
						<text>2019-10-06 16:23:23</text>
					</view>
				</view>
				<view class="main-box-top-bottom">
					<view>
						<text>用户信息：</text>
						<text>李金金</text>
						<text style="font-size:25upx ;">56-15363233658</text>
					</view>
					<view>
						河南省 郑州市 金水区 丁香里街道 金水区十九号大街田园小区三号楼五单元
					</view>
				</view>
				
			</view>
			<view class="main-box-main">
				<view class="main-box-main-top">
					<view>
						<text>交易详情：</text>
						<text>工人服务类</text>
					</view>
					<view>
						<view>
							<text>工作内容：</text>
							<text>贴墙纸</text>
						</view>
						<view>
							<text>开工时间：</text>
							<text>2019-11-11</text>
						</view>
					</view>
				</view>
				<view class="main-box-main-center">
					<view>
						<text>工作地点：</text>
						<text>田园小区三号楼十层</text>
					</view>
					<view>
						<text>理想工期：</text>
						<text>7+</text>
					</view>
					<view>
						<text>备注：</text>
						<text>贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸</text>
					</view>
				</view>
				<view class="main-box-main-bottom">
					<view>
						<text>预估价格</text>
						<text>1k-2k</text>
					</view>
					<view>
						<text>优惠券</text>
						<text style="color:#EC6A2C">-20.00元</text>
					</view>
					<view>
						<text>实付价格</text>
						<text style="color:#F53D4A">1230.00元</text>
					</view>
				</view>
			</view>
			<view class="main-box-bottom">
				<view>
					<text>工程进度:</text>
					<text style="color:#F53D4A">已完成2天</text>
				</view>
				<view>
					<text>订单状态:</text>
					<text>等待用户付款</text>
				</view>
			</view>
		</view>
		<view class="nav-bottom">
			<view>联系工人</view>
			<view>付款</view>
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
			console.log(JSON.parse(options.item))
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
		position: fixed;
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
		margin-left: 245upx;
	}
	.main-box{
		margin-top:168upx;
	}
	.nav-bottom{
		height: 100upx;
		width: 100%;
		background-color: #F53D4AFF;
		position: fixed;
		font-size: 30upx;
		bottom: 0;
	}
	.nav-bottom>view{
		height: 80%;
		width: 50%;
		float: left;
		font-size: 30upx;
		text-align: center;
		line-height: 80upx;
		color: #fff;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.nav-bottom>view:nth-child(1){
		left: 0;
	}
	.nav-bottom>view:nth-child(2){
		right: 0;
	}
	.main-box-top{
		width: 90%;
		background-color: #FFFFFF;
		margin-bottom: 20upx;
		padding: 20upx 5%;
	}
	.main-box-top-top{
		width: 100%;
		overflow: hidden;
	}
	.main-box-top-top>view{
		float: left;
		display: inline-block;
		width: 50%;
		font-size: 30upx;
		margin-bottom: 20upx;
	}
	.main-box-top-top>view>text:nth-child(1){
		color: #A6A6A6;
	}
	.main-box-top-top>.qiangDanShiJian{
		font-size: 25upx;
		width: 100%;
	}
	.main-box-top-bottom{
		width: 100%;
		background-color: #FFFFFF;
		border-top:1px solid #BFBFBF;
	}
	.main-box-top-bottom>view{
		margin-top: 20upx;
		font-size: 30upx
	}
	.main-box-top-bottom>view>text:nth-child(1){
		color: #A6A6A6;
	}
	.main-box-top-bottom>view:nth-child(1)>text:nth-child(3){
		color: #A6A6A6;
		margin-left: 50upx;
	}
	.main-box-main{
		width: 90%;
		background-color: #FFFFFF;
		margin-bottom: 20upx;
		padding: 20rpx 5%;
	}
	.main-box-main>view{
		display: inline-block;
		font-size: 30upx;
		width: 100%;
	}
	.main-box-main-top{
		border-bottom:1px solid #BFBFBF ;
	}
	.main-box-main>.main-box-main-top>view{
		margin-bottom:20upx ;
	}
	.main-box-main>.main-box-main-top>view:nth-child(1)>text:nth-child(1){
		color: #A6A6A6;
	}
	.main-box-main>.main-box-main-top>view:nth-child(1){
		width:100%;
	}
	.main-box-main>.main-box-main-top>view:nth-child(2){
		width:100%;
	}
	.main-box-main>.main-box-main-top>view:nth-child(2)>view{
		display: inline-block;
		width: 50%;
	}
	.main-box-main>.main-box-main-top>view>view>text:nth-child(odd){
		color: #A6A6A6;
	}
	.main-box-main-center{
		width: 100%;
		padding-bottom:20upx;
		border-bottom:1px solid #BFBFBF;
	}
	.main-box-main-center>view{
		margin-top:20upx;
		width: 100%;
	}
	.main-box-main-center>view>text:nth-child(1){
		color: #A6A6A6;
	}
	.main-box-main-bottom>view{
		width: 100%;
		margin-top: 20upx;
	}
	.main-box-main-bottom>view>text:nth-child(1){
		color: #A6A6A6;
	}
	.main-box-main-bottom>view>text:nth-child(2){
		float: right;
	}
	.main-box-bottom{
		background-color: #fff;
		font-size: 30upx;
		width: 90%;
		padding: 20upx 5%;
	}
	.main-box-bottom>view{
		width: 100%;
		margin-bottom: 20upx;
	}
	.main-box-bottom>view>text:nth-child(1){
		color: #A6A6A6;
	}
	.main-box-bottom>view>text:nth-child(2){
		float: right;
	}
</style>
