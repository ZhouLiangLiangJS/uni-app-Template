<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">充值</text>
		</view>
		<view style="margin-top: 168upx;font-size: 30upx;position: relative;">
			<view style="padding-top: 50upx; height: 80upx;line-height: 80upx;padding-left: 50upx;">
				<text>充值方式：</text>
				<image src="https://api.laotiele.com:9527/image/static/wx.png" @click="wxCJ()" style="width: 80upx;height: 80upx;margin-left: 50upx;position: absolute;"  mode="widthFix"></image>
			</view>
		</view>
		<view style="font-size: 35upx;position: fixed;bottom: 0;border-radius:30upx 30upx 0 0;background: #fff;z-index: 12;width: 100%;height: 700upx;" v-if="wx">
			<text style="position: absolute;left: 30upx;top: 100upx;font-size: 30upx;" >充值金额</text>
			<text style="font-size: 60upx;position: absolute;left: 30upx;top: 200upx;">￥</text>
			<input type="number" v-model="qian" maxlength="6" style="position: absolute;left: 100upx;top: 220upx;font-size:60upx;font-weight: 900; width: 600upx;border-bottom: 1px solid #ccc;" />
			<button @click="wxc" style="background:#F53D4A;position: absolute;bottom: 200upx;width: 50%;color: #fff;left: 50%;transform: translateX(-50%);">充值</button>
		</view>
		<view style="background: #000000;opacity: .4;width: 100%;height: 100vh;top: 0;z-index: 11;position: fixed;" v-if="wx" @touchstart="wx=!wx">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				qian:null,
				wx:false,
				useUser:this.user,
				payData:null
			}
		},
		onLoad() {
		   
		},
		methods: {
			wxc:function(){
				// uni.getProvider({
				// 	service:'payment',
				// 	success:function(service,provider){
				// 		console.log(service,provider)
				// 	}
				// 	})
				
				let that=this;
				let usurl=that.url1+"/dinghai/user/loginwechat";
				if(that.qian!=null&&that.qian>0){
					uni.login({
					  provider: 'weixin',
					  success: function (loginRes) {
						console.log(loginRes)
					    console.log(loginRes.authResult);
					    // 获取用户信息
						uni.showLoading({
							title:"正在发起付款",
							mask:true
						})
						uni.request({
								url: usurl,
								header:{
									"Content-Type" : "application/x-www-form-urlencoded"
								},
								method:'GET',
								data: {
									uid:that.useUser.uid,
									js_code:loginRes.code
								},
						    success: (res) => {
								console.log(res)
								if(res.statusCode==200){
									let openid=res.data.data
									console.log('openid:'+ typeof openid)
									console.log(res)
									uni.request({
											url: that.url1+'/dinghai/Charge/insertAddress',
											header:{
												"Content-Type" : "application/x-www-form-urlencoded"
											},
											method:'POST',
											data: {
												uid:that.useUser.uid,
												chargeprice:that.qian
											},
									    success: (res) => {
											if(res.statusCode==200){
												let cj=res.data.flag;
												console.log(cj)
												uni.request({
														url:that.WXpay,
														header:{
															"Content-Type" : "application/x-www-form-urlencoded"
														},
														method:'GET',
														data: {
															openid:openid,
															money:cj.chargeprice,
															orderid:cj.orderid
														},
												    success: (res) => {
														console.log(res)
														if(res.statusCode==200){
															that.payData=res.data;
															uni.requestPayment({
															    provider: 'wxpay',
																// orderInfo:'',
															    timeStamp: that.payData.timeStamp,
															    nonceStr: that.payData.nonceStr,
															    package: that.payData.package,
															    signType: that.payData.signType,
															    paySign: that.payData.paySign,
															    success: function (res) {
																	uni.showLoading({
																		title: '付款成功',
																		mask: true
																	});
																	uni.request({
																	    url: that.url1+'/dinghai/user/updateMoney',
																		header:{
																			"Content-Type" : "application/x-www-form-urlencoded"
																		},
																		method:'POST',
																	    data: {
																			uid:that.useUser.uid,
																			money:cj.chargeprice
																		},
																	    success: (res) => {
																			if(res.statusCode==200){
																				uni.showToast({
																					title:'充值成功'
																				})
																				uni.navigateBack({
																					
																				})
																			}else{
																				uni.showToast({
																					title: '充值失败！请联系客服',
																					icon:"none"
																				});
																			}
																	    },
																		fail : function(err){
																			console.log(err)
																			uni.showToast({
																				title: '充值失败！',
																				icon:"none"
																			});
																		}
																	})
															    },
															    fail: function (err) {
																	uni.showToast({
																		title:'用户取消充值',
																		icon:'none'
																	})
															    }
															});
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
													}
												});
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
										}
									});
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
							}
						});
					    uni.getUserInfo({
					      provider: 'weixin',
					      success: function (infoRes) {
					        console.log('用户昵称为：' + infoRes.userInfo.nickName);
							console.log(infoRes)
					      }
					    });
					  }
					});
				}else{
					uni.showToast({
						title:'必须填写充值金额并且充值金额必须大于0元',
						icon:'none'
					})
				}
			},
			wxCJ:function(){
				this.wx=true
			},
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
		z-index: 10;
	}
	
	.hader-box-back{
		width: 40upx;
		height: 40upx;
		margin-top: 75upx;
		margin-left: 20upx;
	}
	
	.hader-box-text{
		color: white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-20%);
	}
</style>
