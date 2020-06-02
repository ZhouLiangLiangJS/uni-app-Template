<template>
	<view>
		<view class="hader-box">
			<image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
			<text class="hader-box-text">商家入驻</text>
		</view>
		
		<view class="main-content">
			<view v-if="judgeimg" class="add-img" @click="sel_img">
				 <view class="text-img">
					 <text>+</text>
				</view>
				 <text style="margin-top: 10upx;color: #A5A5A5;font-size: 30upx;letter-spacing: 1px;">设置你的店铺头像</text>
			</view>
			
			<view  v-else class="add-img" style="width: 200upx;height: 200upx;">
				<image @click="sel_img" style="width: 100%;height: 100%;"  mode="aspectFill" :src="imgArr"></image>
			</view>
		</view>
		
		<view class="input-content">
			<view class="input-border">
				<text v-text="sjh"  style="float: left;width: 65%;">
				</text>
				<text @click="getcode" class="get_yzm" :style="{'background': (judgeyzm ? '#f53d4a':'#a5a5a5')}">获取验证码</text>
			</view>
			<view class="input-border">
				<input v-model="yzm" @input="in2" type="tel" maxlength="4" placeholder="验证码">
			</view>
		</view>
		
		
		
		<button class="exit-btn" @click="start" :style="{'opacity': (judgestart ? '1.0':'0.6')}">开通店铺</button>
	
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				judgeyzm : false,
				judgestart : false,
				judgeimg : true,
				sjh : this.user.tel||'未登录',
				yzm : "",
				imgurl : "",
				inst:null,
				s:60,
				imgArr:null,
				upData:null,
				uid:this.user.uid
			}
		},
		onLoad() {
		    this.in1();
			this.login()
		},
		methods: {
			back : function(){
			   uni.navigateBack({
			  
			   });
			},
			login:function(){
				let that=this;
				let usurl=that.url1+"/dinghai/shop/byid";
				uni.showLoading({
					title:"正在查询中",
					mask:true
				})
				uni.request({
						url: usurl,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'GET',
						data: {
							uid:that.uid
						},
				    success: (res) => {
						if(res.statusCode==200){
							console.log(res)
							if(res.data.msg=="success"){
								uni.showToast({
									title:"已入驻",
									icon:"none"
								})
								uni.redirectTo({
									url:"shangpin/shangpin"
								})
							}else{
								uni.showToast({
									title:"未入驻请入驻",
									icon:"none"
								})
								
							}
						}else{
							uni.showToast({
								title:"您的网络打了个盹！",
								icon:"none"
							})
						}
				    },
					fail : function(err){
						uni.showToast({
							title:"您的网络打了个盹",
							icon:"none"
						})
						uni.navigateBack({
							
						})
					}
				});
			},
			start : function(){
				if(this.judgestart == false){
					uni.showToast({
						title : "请填写完整的店铺信息(包括店铺头像)",
						icon : "none"
					})
				}else{
						let that=this;
						let usurl2=that.url1+"/dinghai/user/smslogin";
						uni.showLoading({
							title:"正在验证",
							mask: true
						})
						uni.request({
								url: usurl2,
								header:{
									"Content-Type" : "application/x-www-form-urlencoded"
								},
								method:'POST',
								data: {
									tel:that.sjh,
									sms:that.yzm
								},
						    success: (res) => {
								if(res.statusCode==200){
									console.log(res)
									if(res.data.msg=="success"){
										uni.navigateTo({
											url:"info/info?image="+that.upData
										})
									}
								}else{
									uni.showToast({
										title:"您的网络打了个盹",
										icon:"none"
									})
								}
						    },
							fail : function(err){
								uni.showToast({
									title:"您的网络打了个盹",
									icon:"none"
								})
							}
						});
				}
			},
			in1:function(){
				this.sjh=='未登录'?this.judgeyzm = false:this.judgeyzm = true;
			},
			
			in2 : function(){
				if(this.sjh != "" && this.yzm != "" &&this.judgeimg == false){
					this.judgestart = true;
				}else{
					this.judgestart = false;
				}
			},
			
			   // 获取验证码
			getcode : function(){
					if(this.judgeyzm){
						let that=this;
						let usurl=that.url1+"/dinghai/user/sms";
						uni.showLoading({
							title:"正在发送",
							mask: true
						})
						uni.request({
								url: usurl,
								header:{
									"Content-Type" : "application/x-www-form-urlencoded"
								},
								method:'POST',
								data: {
									tel:that.sjh
								},
						    success: (res) => {
								if(res.statusCode==200){
									uni.showToast({
										icon:"none",
										title:"发送成功请接受"
									})
								}else{
									uni.showToast({
										title:"您的网络打了个盹",
										icon:"none"
									})
								}
						    },
							fail : function(err){
								uni.showToast({
									title:"您的网络打了个盹",
									icon:"none"
								})
							}
						});
					}
					
					
					this.judgeyzm = false;
					this.inst=setInterval(()=>{
						if(this.s<=0){
							this.s=60;
							clearInterval(this.inst)
						}else{
							this.s--
						}
					},1000)
				
			},
			   // 选择图片
			sel_img : function(){
				var that = this;
				
					
				
					uni.chooseImage({
					   count: 1, //默认9
					   sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					   sourceType: ['album'], //从相册选择
					   success: function (res) {
						   console.log(res.tempFilePaths,res);
						   let thatRes=res;
						   if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(res.tempFilePaths[0])){
							   let uploadTask=uni.uploadFile({
							   url: that.url1+'/dinghai/Img/Img', //仅为示例，非真实的接口地址
							   filePath:thatRes.tempFilePaths[0],
							   name: 'files',
							   fileType:"image",
							   success: (uploadFileRes) => {
							       if(uploadFileRes.statusCode===200){
							   		that.imgArr=thatRes.tempFilePaths[0]
							   		that.upData=uploadFileRes.data
									that.judgeimg=false
							   		console.log(that.upData)
							   		
							   	}else{
							   		uni.showToast({
							   			title: '上传图片失败请重试',
							   			icon:"none"
							   		});
							   	}
							   }
							   });
						   }else{
							   uni.showToast({
							   	icon:"none",
								title:"上传格式错误！请上传jpg，jpeg，png格式的图片"
							   })
						   }
					   }
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
	
	
	.exit-btn{
		width: 80%;
		height: 70upx;
		background: #F53D4A;
		font-weight: 300;
		color: #fff;
		letter-spacing: 1px;
		line-height: 70upx;
		border-radius: 8px;
		margin-top: 120upx;
		font-size: 50upx;
	}
	
	.main-content{
		width: 100%;
		height: 400upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.add-img{
		width: 100%;
		height: 400upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	
	.text-img{
		width: 200upx;
		height: 200upx;
		text-align: center;
		line-height: 200upx;
		border: 2px solid #a5a5a5;
		color: #a5a5a5;
		font-size: 100upx;
	}
	
	
	.input-border{
		width: 600upx;
		border: 1px solid #A5A5A5;
		height: 60upx;
		margin-left: 60upx;
		letter-spacing: 1px;
		margin-top: 40upx;
	}
	
	.input-border>text:nth-child(1),.input-border>input{
		padding-left: 16upx;
		color: #A5A5A5;
		width: 100%;
		font-size: 30upx;
		color: #A5A5A5;
	}
	
	.get_yzm{
		float: right;
		background: #A5A5A5;
		color: white;
		letter-spacing: 1px;
		font-size: 28upx;
		font-weight: 300;
		padding: 4px;
		margin-top: 4upx;
		margin-right: 8upx;
		border-radius: 4px;
	}
	
	
	
	
</style>
