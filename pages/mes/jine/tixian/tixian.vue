<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">提现</text>
		</view>
		<view style="margin-top: 168upx;font-size: 30upx;position: relative;">
			<view style="padding-top: 50upx; height: 80upx;line-height: 80upx;padding-left: 50upx;">
				<text>提现方式：</text>
				<image src="https://api.laotiele.com:9527/image/static/wx.png" @click="wxCJ()" style="width: 80upx;height: 80upx;margin-left: 50upx;position: absolute;"  mode="widthFix"></image>
			</view>
		</view>
		<view style="font-size: 35upx;position: fixed;bottom: 0;border-radius:30upx 30upx 0 0;background: #fff;z-index: 12;width: 100%;height: 700upx;" v-if="wx">
			<text style="position: absolute;left: 30upx;top: 100upx;font-size: 30upx;">提现金额</text>
			<text style="font-size: 60upx;position: absolute;left: 30upx;top: 200upx;">￥</text>
			<input v-model="qian" type="number" maxlength="6" style="position: absolute;left: 80upx;top: 220upx;font-size:60upx;font-weight: 900; width: 600upx;border-bottom: 1px solid #ccc;" />
			<button style="background:#F53D4A;position: absolute;bottom: 200upx;width: 50%;color: #fff;left: 50%;transform: translateX(-50%);" @click="tixian">提现</button>
		</view>
		<view style="background: #000000;opacity: .4;width: 100%;height: 100vh;top: 0;z-index: 11;position: fixed;" v-if="wx" @touchstart="wx=!wx">
			
		</view>
		<view v-if="flag" style="z-index: 15;width: 80%;height: 80%;position: fixed;left: 50%;top: 50%;transform: translate(-50%,-50%);background: #fff;">
			<image v-if='img==null?false:true' :src="img" mode="aspectFill" style="width: 100%;height: 90%;" @click="tjewm"></image>
			<text v-if='img!=null?false:true' style="position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);">请添加微信收款二维码</text>
			<button v-if='img!=null?false:true' type="warn" style="position: absolute;border-radius: 0;bottom: 0;width: 100%;height: 10%;" @click="tjewm">点击添加</button>
			<button v-if='img==null?false:true' type="primary" style="position: absolute;border-radius: 0;bottom: 0;width: 100%;height: 10%;" @click="xiayibu">提交</button>
		</view>
		<view style="background: #000000;opacity: .4;width: 100%;height: 100vh;top: 0;z-index: 14;position: fixed;" v-if="flag" @touchstart="flag=!flag">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				qian:null,
				wx:false,
				flag:false,
				img:null,
				upData:null
			}
		},
		onLoad() {
		   
		},
		methods: {
			tixian:function(){
				if(this.qian>0){
					this.flag=!this.flag;
				}else{
					uni.showToast({
						title:'请正确输入提现金额',
						icon:'none'
					})
				}
			},
			xiayibu:function(){
				let that=this;
				uni.showLoading({
					title:'发起提现中..',mask: true
				})
				uni.request({
						url: that.url1+"/dinghai/user/WithdrawalsMoney",
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
						data: {
							uid:that.user.uid,
							money:that.qian
						},
				    success: (res) => {
						console.log(res)
						if(res.data.flag==200){
							uni.request({
									url: that.url1+"/dinghai/user/insertWithdrawals",
									header:{
										"Content-Type" : "application/x-www-form-urlencoded"
									},
									method:'POST',
									data: {
										withdrawalsmoney:that.qian,
										uid:that.user.uid,
										withdrawalsimg:'https://api.laotiele.com:9527/image/'+that.upData
									},
							    success: (res) => {
									console.log(res)
									if(res.statusCode==200){
										uni.showToast({
											title:"已发起提现，客服会在24小时处理",
											icon:"none"
										})
										that.wx=false;
										that.flag=false
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
							
							
						}else{
							uni.showToast({
								title:"请正确输入提现金额",
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
				
				
				
			},
			wxCJ:function(){
				this.wx=true
			},
			back : function(){
			   uni.navigateBack({
			  
			   });
			},
			tjewm:function(){
				let that=this;
				uni.chooseImage({
				   count: 1, //默认9
				   sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				   sourceType: ['album'], //从相册选择
				   success: function (res) {
						console.log(res.tempFilePaths,res);
						let thatRes=res;
						if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(res.tempFilePaths[0])){
							uni.showLoading({
								title:'正在上传中..'
							})
							let uploadTask=uni.uploadFile({
						    url: that.url1+'/dinghai/Img/Img', //仅为示例，非真实的接口地址
							filePath:thatRes.tempFilePaths[0],
						    name: 'files',
							fileType:"image",
						    success: (uploadFileRes) => {
						        if(uploadFileRes.statusCode===200){
									that.img=thatRes.tempFilePaths[0];
									that.upData=uploadFileRes.data
									uni.showToast({
										title: '上传成功'
									});
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
