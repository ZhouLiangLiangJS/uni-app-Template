<template>
	<view>
		 <view style="width: 100%;height: 50vh;background: #F53D4A;position: relative;">
			 <image class="top-logo" src="https://api.laotiele.com:9527/image/1579070976058.png"></image>
		 	<image src="https://api.laotiele.com:9527/image/static/zuo.png" style="position: absolute;width: 40upx;height: 40upx;top: 75upx;left: 20upx;"  @click="temp()"></image>
		 </view>
		 
		 <image src="https://api.laotiele.com:9527/image/1579071482026.jpg" style="width: 100%;height: 50vh;"></image>
	
	    <view class="login-box">
			<view class="login-box-input" style="margin-top: 80upx;">
				<image src="https://api.laotiele.com:9527/image/static/zhanghao.png" style="width: 40upx;height: 40upx;float: left;"></image>
				<input v-model="tel" type="tel" style="float: left;font-size: 30upx;letter-spacing: 1px;margin-left: 10upx;" placeholder="请输入手机号">
				<view style="clear: both;"></view>
			</view>
			
			<view class="login-box-input" v-if="judgetype">
				<image src="https://api.laotiele.com:9527/image/static/mima.png" style="width: 40upx;height: 40upx;float: left;"></image>
				<input v-model="pwd" type="password" style="float: left;font-size: 30upx;letter-spacing: 1px;margin-left: 10upx;" placeholder="请输入密码">
				<text style="float: right;font-size: 30upx;color: #000;">忘记密码</text>
				<view style="clear: both;"></view>
			 </view>
			 
			 <view class="login-box-input" v-else>
				 <image src="https://api.laotiele.com:9527/image/static/mima.png" style="width: 40upx;height: 40upx;float: left;"></image>
				 <input maxlength="4" v-model="code" type="password" style="float: left;font-size: 30upx;letter-spacing: 1px;margin-left: 10upx;" placeholder="请输入验证码">
				 <text v-if="judgetiming" style="float: right;font-size: 30upx;color: #F53D4A;" @click="sendcode">发送验证码</text>
				 <text v-else style="float: right;font-size: 30upx;color: #F53D4A;">{{time}}</text>
				 <view style="clear: both;"></view>
			 </view>
			
			<button class="exit-btn" @click="loginbtn">登录</button>
			
			<view class="login-box-bot">
				<text @click="changetype" style="float: left;margin-left: 70upx;color: #F53D4A;">{{type}}</text>
				<text style="float: right;margin-right: 70upx;font-weight: 600;" @click="gologon">注册</text>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				usurl : "",
				type : "短信验证码登录",
				judgetype : true,
				tel : "",
				pwd : "",
				code : "",
				yzcode : "",
				judgetiming : true,
				time : 60
			}
		},
		onLoad() {
			this.getSto()
		},
		onShow(){
			
		},
		methods: {
			getSto:function(){
				let that=this;
				uni.getStorage({
					key:"user",
					success:function(res){
						let arr=JSON.parse(res.data);
						that.tel=arr.tel;
						that.pwd=arr.pd;
					},
					fail:function(res){
						console.log(res)
					}
				})
			},
			temp : function(){
				uni.navigateBack({
					
				})
			},
			time1:function(){ 
				let that=this;
					let usurl=that.url1+"/dinghai/user/selectAll";
					uni.showLoading({  mask: true,   title: '正在加载'  });
					uni.request({
						url: usurl,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
						data: {
							uid:that.user.uid
						},
				    success: (res) => {
						uni.showToast({
							title:"加载成功"
						});
						console.log(res)
						if(res.data.flag!=500){
							that.setTime1(res.data.aa.rolestart+res.data.aa.roletime)
							// setInterval(()=>{
							// 	that.setTime2(res.data.flag++)
							// },1000)
							that.setTime2(res.data.flag)
							console.log((res.data.aa.rolestart+res.data.aa.roletime)>=res.data.flag?true:false)
							that.setHuiyuan((res.data.aa.rolestart+res.data.aa.roletime)>=res.data.flag?true:false)
						}else{
							that.setHuiyuan(false)
						}
				    },
					fail : function(err){
						uni.showToast({
							title:"服务器错误",
							icon:"none"
						});
					}
				});
			},
			setSto:function(){
				let that=this;
				uni.setStorage({
					key:"user",
					data:JSON.stringify(that.user)
				})
			},
			   // 去注册页面的函数
			gologon : function(){
				uni.navigateTo({
					url : '../logon/logon'
				});
			},
			  // 登录的函数
			loginbtn : function(){
			  var that = this;
				if(this.type == "短信验证码登录"){
					if(this.tel == "" || this.pwd == ""){
						uni.showToast({
							title : "手机号和密码均不能为空 !",
							icon : "none"
						});
					}else if(!(/^1[3456789]\d{9}$/.test(this.tel))){
						uni.showToast({
							title : "请输入正确的手机号 !",
							icon : "none"
						})
					}else{
						
						    // 通过手机号密码登录
							
						let usurl=that.url1+"/dinghai/user/loginTel";
						uni.showLoading({  mask: true,   title: '正在加载'  });
						uni.request({
						    url: usurl,
							header:{
								"Content-Type" : "application/x-www-form-urlencoded"
							},
							method:'POST',
						    data: {
						        tel : that.tel,
								pd : that.pwd
						    },
						    success: (res) => {
								console.log(res)
								if(res.statusCode===200){
									if( typeof res.data.flag==='object'){
										that.setUser(res.data.flag)
										that.temp();
										that.setSto()
										console.log(res.data.flag)
										that.time1()
									}else{
										uni.showToast({
											title : "账号或者密码错误 !",
											icon : "none"
										});
									}
								}else{
									uni.showToast({
										title : "您的网络开了小差 !",
										icon : "none"
									});
								}
						    },
							fail : function(err){
								uni.showToast({
									title : "服务器错误 !",
									icon : "none"
								});
							}
						});
						
				
					}
				}else if(this.type == "密码登录"){
					 if(this.tel == "" || this.code == ""){
					 	uni.showToast({
					 		title : "手机号和验证码均不能为空 !",
					 		icon : "none"
					 	});
					 }else if(!(/^1[3456789]\d{9}$/.test(this.tel))){
					 	uni.showToast({
					 		title : "请输入正确的手机号 !",
					 		icon : "none"
					 	})
					 }else{
						  // 验证码登录
						  console.log(that.tel,that.code)
						uni.request({
						    url: that.url1+"/dinghai/user/smslogin",
							header:{
								"Content-Type" : "application/x-www-form-urlencoded"
							},
							method:'POST',
						    data: {
						        tel : that.tel,
								sms : that.code
						    },
						    success: (res) => {
								console.log(res)
								if(res.data.code==200){
									uni.showToast({
										title : "登录成功 !",
										icon : "success"
									})
									that.setUser(res.data.data)
									that.setSto()
									console.log(that.user)
									that.temp();
									that.time1()
								}else {
									uni.showToast({
										title : "验证码错误或未注册!",
										icon:"none"
									})
								}
						    }
						});
						
					 }
				}
				
			},
			  // 更换登录方式
		    changetype : function(){
				
				if(this.type == "短信验证码登录"){
					this.type = "密码登录";
					this.judgetype = false;
				}else if(this.type == "密码登录"){
					this.type = "短信验证码登录";
					this.judgetype = true;
				}
			},
			   // 发送验证码
			sendcode : function(){
				var that = this;
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
					uni.request({
					    url: that.url1 + "/dinghai/user/sms",
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
					    data: {
					        tel : that.tel
					    },
					    success: (res) => {
					    }
					});
					
						 uni.showToast({
							title : "发送成功 请接收 !",
							icon : "none"
						});
					this.judgetiming = false;
					var timer = setInterval(function(){
						that.time--;
					},1000);
					
					setTimeout(function(){
						clearInterval(timer);
						that.time = 60;
						that.judgetiming = true;
					},60000)
				}
			} 
		}
	}
</script>

<style>
	.top-logo{
		width: 200upx;
		height: 200upx;
        position : absolute;
		top: 20%;
		left: 50%;
		transform: translateX(-50%);
		padding: 10upx;
		border-radius: 20upx;
		background: #fff;
	}
	
	.login-box{
		width: 670upx;
		height: 570upx;
		background: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	
	.login-box-input{
		border-bottom:1px solid #C9C9C9;
		padding: 20upx 0;
		margin: 0 40upx;
	}
	
	.exit-btn{
		width: 80%;
		height: 70upx;
		background: #F53D4A;
		color: #fff;
		letter-spacing: 1px;
		line-height: 70upx;
		border-radius: 8px;
		margin-top: 80upx;
		font-size:40upx ;
	}
	
	.login-box-bot{
		font-size: 30upx;
	    margin-top: 80upx;
		width: 100%;
		height: auto;
		
	}
</style>
