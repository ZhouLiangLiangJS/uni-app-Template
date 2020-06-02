<template>
	<view>
		<view @click="close" v-if="judgemb" style="width: 100%;height: 100vh;background: #000;opacity: 0.5;position: absolute;"></view>
		
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">{{name}}</text>
		</view>
		
		<view class="img-base">
			<view @click="yqhy" class="disp">
				<image src="https://api.laotiele.com:9527/image/static/yaoqinghaoyou.png"></image>
				<text>邀请好友</text>
			</view>
		
			<view @click="wdtd">
				<image src="https://api.laotiele.com:9527/image/static/wodetuandui.png"></image>
				<text>我的团队</text>
			</view>
		

		</view>
		
		<view class="share" v-if="judgeshare">
			<view class="share-title">分享</view>
			
			<view class="share-content">
				<view @click="sharehy">
					<image src="https://api.laotiele.com:9527/image/static/wx.png"></image>
					<text>微信好友</text>
				</view>
				
				<view @click="sharepyq">
					<image src="https://api.laotiele.com:9527/image/static/pengyouquan.png"></image>
					<text>微信朋友圈</text>
				</view>
				
				<view @click="saveimg">
					<image src="https://api.laotiele.com:9527/image/static/xiangce.png"></image>
					<text>保存至相册</text>
				</view>
			</view>
			
			
			<view @click="close" class="share-close">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				  // 判断黑色的幕布是否显示
				judgemb : false,
				  // 判断分享部分是否显示
				judgeshare : false,
				name : ""
			}
		},
		onLoad(options) {
		    this.name = options.name;
		},
		methods: {
			back : function(){
			   uni.navigateBack({
			
			   });
			},
			
			// 点击邀请好友
		 yqhy : function(){
			 this.judgemb = true;
			 this.judgeshare = true;	 
		 },
		   // 点击隐藏分享部分
		 close : function(){
			 this.judgemb = false;
			 this.judgeshare = false;	 
		 },
		 
		    // 去我的团队页面
		 wdtd : function(){
			 uni.navigateTo({
			 	url : "team/team"
			 })
		 },
		 
		
			 
			 
			 // 分享给朋友
			 sharehy : function(){
				 uni.share({
				     provider: "weixin",
				     scene: "WXSceneSession",
				     type: 0,
				     title: "来和我一起赚钱把",
				     imageUrl: "http://temp.anzi123.top/dhzsimg/sar.jpg",
				     success: function (res) {
				         console.log("success:" + JSON.stringify(res));
				     },
				     fail: function (err) {
				         console.log("fail:" + JSON.stringify(err));
				     }
				 });
			 },
			 
			 
		 sharepyq : function(){
			 // 分享到朋友圈
			uni.share({
			    provider: "weixin",
			    scene: "WXSenceTimeline",
			    type: 2,
			    imageUrl: "http://temp.anzi123.top/dhzsimg/sar.jpg",
			    success: function (res) {
			        console.log(res);
			    },
			    fail: function (err) {
			        console.log(err);
			    }
			});
		 },
		 
		 // 保存图片到本地
		 saveimg : function(){
			 uni.showLoading({
			 	title: '图片正在下载',
			 	mask : true
			 });
			 
			 uni.downloadFile({
			 	url : "http://temp.anzi123.top/dhzsimg/sar.jpg",
			 	success:function(result){
			 		   // 下载完图片后的临时路径
			 		var tempFilePath = result.tempFilePath;
			 		uni.hideLoading();
			 		uni.saveImageToPhotosAlbum({
			 			filePath:tempFilePath,
			 			success : function(){
			 				uni.showToast({
			 					title:'图片保存成功,请到您的相册里查看',
								icon : "none"
			 				});
			 			}
			 		})
			 	}
			 });
			 
			
		 }
		 
		    
		 
		 
		}
	}
</script>

<style>
	
	 /* #ifdef MP-WEIXIN */
		 .disp{
			display: none !important;
		}
	 /* #endif */
	
	
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
	
	.img-base{
		margin-top: 120upx;
		display: flex;
		justify-content: space-around;
	}
	
	.img-base>view{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.img-base>view>image{
		width: 100upx;
		height: 100upx;
	}
	
	.img-base>view>text{
		font-size: 30upx;
	}
	
	
	.share{
		bottom: 30upx;
		left: 40upx;
		position: absolute;
		z-index: 999;
		width: 90%;
		height: 360upx;
		background: #fff;
		border-radius: 8px;
	}
	
	/* 360 40 */
	.share-title{
		font-size: 30upx;
		width: 100%;
		height: 90upx;
		text-align: center;
		line-height: ;
		border-bottom: 1px solid #e0e0e0;
		line-height: 90upx;
	}
	
	.share-content{
		width: 100%;
		height: 180upx;
		border-bottom: 1px solid #e0e0e0;
		display: flex;
		justify-content: space-around;
	}
	
	.share-close{
		font-size: 30upx;
		width: 100%;
		height: 88upx;
		color: #F53D4A;
		line-height: 88upx;
		text-align: center;
	}
	
	
	.share-content>view{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.share-content>view>image{
		width: 70upx;
		height: 70upx;
	}
	
	.share-content>view>text{
		margin-top: 16upx;
		font-size: 30upx;
	}
</style>
