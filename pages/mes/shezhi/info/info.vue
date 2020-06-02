<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">个人信息</text>
		</view>
		
		<view class="main-content-box">
			<view class="fect-group">
							 <view class="fect-group-left">
								 <text>头像</text>
							 </view>
							 
							 <view class="fect-group-right" @click="replacetx">
								 <image class="touxiang" :src="useUser.imgage" mode="aspectFill"></image>
								 <image src="https://api.laotiele.com:9527/image/static/mesimg/merig.png"></image>
							 </view>					 
			</view>
			
			<view class="fect-group" @click="xgnc">
							 <view class="fect-group-left">
								 <text>昵称</text>
							 </view>
							 
							 <view class="fect-group-right">
								 <text>{{useUser.name}}</text>
								 <image src="https://api.laotiele.com:9527/image/static/mesimg/merig.png"></image>
							 </view>					 
			</view>
			
			<!-- <view class="fect-group" @click="gotel">
							 <view class="fect-group-left">
								 <text>手机号</text>
							 </view>
							 
							 <view class="fect-group-right">
								 <text>{{tel}}</text>
								 <image src="https://api.laotiele.com:9527/image/static/mesimg/merig.png"></image>
							 </view>					 
			</view> -->
			
			<view class="fect-group" @click="xgxb">
							 <view class="fect-group-left">
								 <text>性别</text>
							 </view>
							 
							 <view class="fect-group-right">
								 <text>{{useUser.sex}}</text>
								 <image src="https://api.laotiele.com:9527/image/static/mesimg/merig.png"></image>
							 </view>					 
			</view>
			
			<view class="fect-group" @click="xgdz">
							 <view class="fect-group-left">
								 <text>地址</text>
							 </view>
							 
							 <view class="fect-group-right">
								 <text>点击查看</text>
								 <image src="https://api.laotiele.com:9527/image/static/mesimg/merig.png"></image>
							 </view>					 
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				useUser:this.user,
				url:this.url1
			}
		},
		onLoad() {
		   
		},
		onShow(){
			
		},
		methods: {
			back : function(){
			   uni.navigateBack({
			
			   });
			},
			
			    // 修改昵称
			xgnc : function(){
				uni.navigateTo({
					url : "xgnicheng/xgnicheng?name="+this.useUser.name
				})
			},
			
			  // 修改手机号
			gotel : function(){
				uni.navigateTo({
					url : "xgtel/xgtel?tel="+this.tel
				})
			},
			
			    // 更换头像函数
			replacetx : function(){
				var that = this;
				uni.showActionSheet({
										
					itemList: ["从相册中选择头像","拍照"],
										success : function(res){
											var index = res.tapIndex;
											if(index == 0){
												uni.chooseImage({
												   count: 1, //默认9
												   sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
												   sourceType: ['album'], //从相册选择
												   success: function (res) {
													   console.log(res.tempFilePaths[0]);
													   // that.tximg = res.tempFilePaths[0];
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
																   uni.showLoading({
																   	title:'正在修改头像',
																	mask: true
																   })
													   			console.log(uploadFileRes.data)
																uni.request({
																			url: that.url1+"/dinghai/user/selectUser",
																			header:{
																				"Content-Type" : "application/x-www-form-urlencoded"
																			},
																			method:'POST',
																			data: {
																				uid:that.useUser.uid,
																				imgage:that.url1+'/image/'+uploadFileRes.data
																			},
																	    success: (res) => {
																			console.log(res)
																			uni.showToast({
																				title:"修改成功"
																			})
																			let arr=that.useUser;
																			arr.imgage=that.url1+'/image/'+uploadFileRes.data;
																			that.setUser(arr)
																	    },
																		fail : function(err){
																			console.log(err)
																			uni.showToast({
																				title:"您的网络打了个盹",
																				icon:"none"
																			})
																		}
																	})
													   		}else{
													   			uni.showToast({
													   				title: '上传图片失败请重试',
													   				icon:"none"
													   			});
													   		}
													   	}
													   	});
													   	uploadTask.onProgressUpdate((res) => {
													   		console.log('上传进度' + res.progress);
													   		console.log('已经上传的数据长度' + res.totalBytesSent);
													   		console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
													   	});
													   }else{
													   	uni.showToast({
													   	icon:"none",
													   	title:"上传格式错误！请上传jpg，jpeg，png格式的图片"
													   	})
													   }
												   }
												});
												console.log("从相册中选择头像");
											}else if(index == 1){
												uni.chooseImage({
												    count: 1,
												    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
												    sourceType: ['camera'], //相机
												    success: function (res) {
														console.log(res.tempFilePaths[0]);
														let thatRes=res;
														if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(res.tempFilePaths[0])){
															let uploadTask=uni.uploadFile({
														    url: that.url1+'/dinghai/Img/Img', //仅为示例，非真实的接口地址
															filePath:thatRes.tempFilePaths[0],
														    name: 'files',
															fileType:"image",
														    success: (uploadFileRes) => {
														        if(uploadFileRes.statusCode===200){
																	uni.showLoading({
																		title:'正在修改头像',
																		mask: true
																	})
																	console.log(uploadFileRes.data)
																	uni.request({
																				url: that.url1+"/dinghai/user/selectUser",
																				header:{
																					"Content-Type" : "application/x-www-form-urlencoded"
																				},
																				method:'POST',
																				data: {
																					uid:that.useUser.uid,
																					imgage:that.url1+'/image/'+uploadFileRes.data
																				},
																		    success: (res) => {
																				console.log(res)
																				uni.showToast({
																					title:"修改成功"
																				})
																				let arr=that.useUser;
																				arr.imgage=that.url1+'/image/'+uploadFileRes.data;
																				that.setUser(arr)
																		    },
																			fail : function(err){
																				console.log(err)
																				uni.showToast({
																					title:"您的网络打了个盹",
																					icon:"none"
																				})
																			}
																		})
																}else{
																	uni.showToast({
																		title: '上传图片失败请重试',
																		icon:"none"
																	});
																}
															}
															});
															uploadTask.onProgressUpdate((res) => {
																console.log('上传进度' + res.progress);
																console.log('已经上传的数据长度' + res.totalBytesSent);
																console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
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
				});
			},
			
			//更换头像函数结束
			
			   // 修改性别
		   xgxb : function(){
			   var that = this;
			   uni.showActionSheet({
			   	itemList: ["男","女"],
			   	success : function(res){
			   		var index = res.tapIndex;
					let usurl2=that.url+"/dinghai/user/update";
					uni.showLoading({
						title: '正在修改',
						mask: true
					});
					uni.request({
					    url: usurl2,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
					    data: {
							uid:that.useUser.uid,
							name:that.useUser.name,
							sex:index==0?'男':'女'
						},
					    success: (res) => {
							if(res.statusCode==200){
								uni.showToast({
									title:'修改成功'
								})
								that.useUser.sex=(index==0?'男':'女')
							}else{
								uni.showToast({
									title: '您的网络打了个盹！',
									icon:"none"
								});
							}
					    },
						fail : function(err){
							console.log(err)
							uni.showToast({
								title: '您的网络打了个盹！',
								icon:"none"
								});
							}
						})
					}
				});
			},
		    
			// 修改地址
			xgdz : function(){
				uni.navigateTo({
					url : "../../dizhi/dizhi"
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
		margin-left: 260upx;
	}
	
	
	
	
	
	.main-content-box{
		margin-top: 20upx;
		width: 100%;
		height: auto;
		padding: 20upx;
	}
	
	.fect-group{
		margin-top: 70upx;
		width: 100%;
		height: 50upx;
	}
	
	.fect-group-left>text{
		margin-top: 10upx;
		font-size: 30upx;
		margin-left: 12upx;
		letter-spacing: 1px;
		float: left;
	}
	
	
	.fect-group-left{
		float: left;
		margin-left: 20upx;
	}
	
	.fect-group-right{
		margin-top: 10upx;
		float: right;
		margin-right: 50upx;
	}
	
	.fect-group-right>text{
		float: left;
		font-size: 30upx;
		color: #808080;
	}
	
	.fect-group-right>image{
		float: left;
		width: 40upx;
		height: 40upx;
		
	}
	
	.touxiang{
		margin-top: -30upx;
		width: 100upx !important;
		height: 100upx !important;
		border-radius: 50%;
	}
</style>
