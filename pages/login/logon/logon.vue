<template>
	<view>
		 <view class="hader-box">
		 			 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
		 			 <text class="hader-box-text">注册</text>
		 </view>
		 
		 <view class="main-content">
			 <view class="inpent-box" style="position: relative;">
				 <input maxlength="11" v-model="tel" type="number" class="inpent-box-inp" placeholder="请输入手机号码">
				 <text :class="yanZheng?'inpent-box-text yiHuoQu':'inpent-box-text'" style="z-index:9;position: absolute;right: 0;bottom: 0;" id='huoQu' @click="yanZheng?YiFa():sendcode()" >{{yanZheng?'已发送':'获取验证码'}}</text>
				 
				 <view style="clear: both;"></view>
			 </view>
			 
			 <view class="inpent-box">
			 				 <input v-model="code" maxlength="4" type="number" class="inpent-box-inp" placeholder="请输入验证码">
							 <view style="clear: both;"></view>
			 </view>
			 
			 <view class="inpent-box">
			 				 <input v-model="name" maxlength="8" type="text" class="inpent-box-inp" placeholder="输入昵称">
			 							 <view style="clear: both;"></view>
			 </view>
			 
			 <view class="inpent-box">
			 				 <input v-model="yaoqing" maxlength="11" type="text" class="inpent-box-inp" placeholder="输入邀请码(邀请人手机号)无则不填写">
			 							 <view style="clear: both;"></view>
			 </view>
			 
			 <view class="inpent-box">
			 				 <input v-model="pwd" :type="type1" class="inpent-box-inp" maxlength="16" placeholder="请输入密码">
							 <view style="clear: both;"></view>
			 </view>
			 
			 <view class="inpent-box">
			 				 <input v-model="aginpwd" :type="type2" class="inpent-box-inp"  maxlength="16" placeholder="确认密码">
			 				<view style="clear: both;"></view>
			 </view>
			 
			 <view class="inpent-box" @click="selsex" style="position: absolute;">
			 				 <input type="text" class="inpent-box-inp" placeholder="选择性别">
							 <text class="inpent-box-text"  style="color: gray;font-size: 30upx;z-index:9;position: absolute;right: 0;bottom: 0;">{{sex}}</text>
							 <view style="clear: both;"></view>
			 </view>
			
		 </view>
		 
		 <button class="exit-btn" @click="logonbtn">注册</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sex : "男",
				tel : "",
				code : "",
				name : "",
				pwd : "",
				aginpwd : "",
				type1 : "password",
				type2 : "password",
				yanZheng:false,
				s:0,
				DingShiQi:null,
				yaoqing:null
				
			}
		},
		onLoad() {
		  
		},
		methods: {
			
			 guid:function() {
			        return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
			    },
			 back : function(){
			    uni.navigateBack({
			 
			    });
			 },
			 // 已经发送
			 YiFa:function(){
				 uni.showToast({
				 	title : "已经发送验证码，请等待60秒后发送 !",
				 	icon : "none"
				 })
				 
			 },
			 // 发送验证码
			 sendcode : function(){
				 
				console.log(1)
				 let that=this;
				 if(this.tel == ""){
					 uni.showToast({
					 	title : "手机号不能为空 !",
						icon : "none"
					 })
				 }else if(!(/^1[3456789]\d{9}$/.test(this.tel))){
					 uni.showToast({
					 	title : "请输入正确的手机号 !",
					 	icon : "none"
					 })
				 }else{
					 uni.showLoading({  mask: true,   title: '正在发送验证码'  });
					 uni.request({
					 	url: that.url1+"/dinghai/user/sms",
					 	header:{
					 		"Content-Type" : "application/x-www-form-urlencoded"
					 	},
					 	method:'POST',
					 	 data: {
					 		tel:that.tel
					 		},
					 	success: (res) => {
					 		if(res.statusCode===200){
								that.yanZheng=true;
								uni.showToast({
									title : "发送成功 请接收 !",
									icon : "none"
								});
								that.DingShiQi=setInterval(function(){
									console.log(that.s)
									 that.s++
									 if(that.s>60){
										that.yanZheng=false;
										clearInterval(that.DingShiQi);
										that.s=0
									 }
								},1000)
					 		}else{
					 			uni.showToast({
					 				title : "发送失败 !",
					 				icon : "none"
					 			});
					 		}
					 	},
					 	fail : function(err){
							uni.showToast({
								title : "发送失败 !",
								icon : "none"
							});
					 	},
					})
				}
			 },
			 
			 
					// 点击注册按钮
			logonbtn:function(){
				if(this.tel == "" || this.code == "" || this.name == "" || this.pwd == "" || this.aginpwd == ""){
					 uni.showToast({
					 	title : "请完整的填写所有信息 !",
					 	icon : "none"
					 })
				}else if(!(/^1[3456789]\d{9}$/.test(this.tel))){
					uni.showToast({
						title : "请输入正确的手机号 !",
						icon : "none"
					})
				}else if(this.pwd != this.aginpwd){
					uni.showToast({
						title : "两次输入的密码要一致 !",
						icon : "none"
					})
				}else if (this.pwd.length<6) {
					uni.showToast({
						title : "密码必须大于6位数 !",
						icon : "none"
					})
				}else{
					
					uni.showLoading({  mask: true,   title: '正在注册'  });
				let that=this;
				uni.request({
					url: that.url1+"/dinghai/user/register",
					header:{
						"Content-Type" : "application/x-www-form-urlencoded"
					},
					method:'POST',
					 data: {
						username:that.guid(),
						tel:that.tel,
						name:that.name,
						password:that.pwd,
						sms:that.code,
						sex:that.sex,
						imgage:that.url1+'/image/login.png',
						introduce:that.yaoqing
						},
					success: (res) => {
						console.log(res)
						if(res.statusCode===200){
							if(typeof res.data.flag=='object'){
								uni.showToast({
									title : "注册成功!",
									icon : "none"
								})
								uni.navigateBack({
									
								})
								
							}else{
								uni.showToast({
									title : "注册失败!",
									icon : "none"
								})
							}
						}else{
							uni.showToast({
								title : "您的网络有问题，请重试!",
								icon : "none"
							})
						}
					},
					fail:()=>{
						uni.showToast({
							title : "您的网络有问题，请重试!",
							icon : "none"
						})
					}
				})
				}
			},
			// 显示密码的函数
			showpwd1 : function(){
				this.type1 = "text";
			},
			showpwd2 : function(){
				this.type2 = "text";
			},
			
			   // 选择性别
			selsex : function(){
			  var that = this;	
				uni.showActionSheet({
										
					itemList: ["男","女"],
										success : function(res){
											var index = res.tapIndex;
											if(index == 0){
												console.log("男");
															that.sex = "男";
												
											}else if(index == 1){
											    console.log("女");
															that.sex = "女";
											}
										}
				});
			}
		}
	}
</script>

<style>
	.yiHuoQu{
		color: #CCC !important;
	}
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
		margin-left: 280upx;
	}
	
	
	.main-content{
		width: 100%;
		height: 400upx;
		margin-top: 50upx;
	}
	
	
	.inpent-box-inp{
		float: left;
		font-size: 30upx;
		width: 100%;
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
		width: 90%;
		height: 70upx;
		background: #F53D4A;
		font-weight: 300;
		color: #fff;
		letter-spacing: 1px;
		line-height: 70upx;
		border-radius: 8px;
		margin-top: 350upx;
		font-size: 40upx
	}
</style>
