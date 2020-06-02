<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">账号与安全</text>
		</view>
		
	     <view class="main-content">		 
					   <view class="inpent-box">
									 <input v-model="oldpwd" type="password" class="inpent-box-inp" placeholder="请输入旧密码">
														 <image src="https://api.laotiele.com:9527/image/static/look.png" class="inpent-box-img" @click="showpwd1"></image>
												 <view style="clear: both;"></view>
					   </view>
			
	     			 <view class="inpent-box">
	     			 				 <input v-model="newpwd" type="password" class="inpent-box-inp" placeholder="请输入新密码">
	     							 <image src="https://api.laotiele.com:9527/image/static/look.png" class="inpent-box-img" @click="showpwd2"></image>
	     			 							 <view style="clear: both;"></view>
	     			 </view>
	     			 
	     			 <view class="inpent-box">
	     			 				 <input v-model="aginpwd" type="password" class="inpent-box-inp" placeholder="确认密码">
	     			 							 <image src="https://api.laotiele.com:9527/image/static/look.png" class="inpent-box-img" @click="showpwd3"></image>
	     			 							 <view style="clear: both;"></view>
	     			 </view>
	     					
	     </view>
		 
		 <button class="exit-btn" @click="xg">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldpwd : "",
				newpwd : "",
				aginpwd : "",
				useUrl:this.user
			}
		},
		onLoad(options) {
		    
		},
		methods: {
			// 显示密码的函数
			showpwd1 : function(){
				this.type1 = "text";
			},
			showpwd2 : function(){
				this.type2 = "text";
			},
			showpwd3 : function(){
				this.type3 = "text";
			},
			xg : function(){
				if(this.oldpwd == "" || this.newpwd == "" || this.aginpwd == ""){
					uni.showToast({
						title : "请完整的填写信息！",
						icon : "none"
					})
				}else if(this.newpwd != this.aginpwd){
					uni.showToast({
						title : "两次密码不一致！",
						icon : "none"
					})
				}else if(this.oldpwd!=this.useUrl.pd){
					uni.showToast({
						title : "现密码和原密码不符合！",
						icon : "none"
					})
				}else{
					let that=this;
					let usurl1=that.url1+"/dinghai/user/update/Password";
					uni.request({
					    url: usurl1,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
					    data: {
							uid:that.user.uid,
							password:that.newpwd
						},
					    success: (res) => {
							if(res.statusCode==200){
								uni.showToast({
									title:'修改成功'
								})
								uni.navigateTo({
									url : "../../../login/index/index"
								});
							}
					    },
						fail : function(err){
							console.log(err);
						}
					})
				}
			},
			back:function(){
				uni.navigateBack({
					
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
		margin-left: 220upx;
	}
	
	
	.main-content{
		width: 100%;
		height: 400upx;
		margin-top: 50upx;
	}
	
	
	.inpent-box-inp{
		float: left;
		font-size: 30upx;
	}
	
	
	
	.inpent-box{
		margin-top: 60upx;
		width: 80%;
		border-bottom: 1px solid #C9C9C9;
		margin-left: 80upx;
	}
	
	.inpent-box-text{
		float: right;
		font-size: 30upx;
		color: #F53D4A;
	}
	
	.inpent-box-img{
		float: right;
		width: 40upx;
		height: 40upx;
	}
	
	
	.exit-btn{
		width: 80%;
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
